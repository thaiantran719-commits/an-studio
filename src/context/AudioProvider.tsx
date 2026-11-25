import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AudioContext } from './audioContextDef';

const AUDIO_SRC = '/audio/goi-con-tim-lam-qua.mp3';
const AUDIO_CHANNEL_NAME = 'an_studio_audio_channel';
const TAB_ID = typeof window !== 'undefined' ? Math.random().toString(36).substring(2, 9) : 'tab';

// Khai báo global interface để TypeScript nhận diện instance singleton trên window
declare global {
  interface Window {
    __AN_STUDIO_AUDIO_INSTANCE__?: HTMLAudioElement;
    __AN_STUDIO_BROADCAST_CHANNEL__?: BroadcastChannel;
  }
}

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlockListenerRef = useRef<(() => void) | null>(null);
  const userManuallyPausedRef = useRef<boolean>(false);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolumeState] = useState<number>(85);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState<boolean>(false);

  const songTitle = 'Gói Con Tim Làm Quà';
  const artistName = 'Nguyễn Hùng • Soundtrack';

  useEffect(() => {
    // 1. Dọn dẹp triệt để bất kỳ instance Audio cũ nào còn sót lại trên window (do Vite HMR hoặc StrictMode)
    if (typeof window !== 'undefined') {
      if (window.__AN_STUDIO_AUDIO_INSTANCE__) {
        try {
          window.__AN_STUDIO_AUDIO_INSTANCE__.pause();
          window.__AN_STUDIO_AUDIO_INSTANCE__.currentTime = 0;
          window.__AN_STUDIO_AUDIO_INSTANCE__.src = '';
        } catch {
          // Bỏ qua lỗi dọn dẹp nếu có
        }
        window.__AN_STUDIO_AUDIO_INSTANCE__ = undefined;
      }
    }

    // 2. Khởi tạo DUY NHẤT một phần tử Audio cho toàn bộ trang
    const audio = new Audio(AUDIO_SRC);
    audio.preload = 'auto';
    audio.loop = true;
    audio.volume = 0.85;

    if (typeof window !== 'undefined') {
      window.__AN_STUDIO_AUDIO_INSTANCE__ = audio;
    }
    audioRef.current = audio;

    // 3. Đồng bộ giữa các tab trình duyệt bằng BroadcastChannel: chỉ 1 tab được phát nhạc
    let channel: BroadcastChannel | null = null;
    if (typeof window !== 'undefined' && typeof BroadcastChannel !== 'undefined') {
      try {
        channel = new BroadcastChannel(AUDIO_CHANNEL_NAME);
        channel.onmessage = (event: MessageEvent) => {
          if (event.data?.type === 'AN_AUDIO_PLAY' && event.data?.tabId !== TAB_ID) {
            // Tab khác đang phát nhạc, lập tức tạm dừng tab này để không bị đè âm thanh
            if (audioRef.current && !audioRef.current.paused) {
              audioRef.current.pause();
              setIsPlaying(false);
            }
          }
        };
      } catch {
        // Fallback nếu BroadcastChannel bị giới hạn
      }
    }

    const broadcastPlay = () => {
      if (channel) {
        try {
          channel.postMessage({ type: 'AN_AUDIO_PLAY', tabId: TAB_ID });
        } catch {
          // Ignore
        }
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleTimeUpdate = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      broadcastPlay();
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // 4. Quản lý việc mở khóa âm thanh an toàn khi người dùng tương tác lần đầu
    const removeUnlockListeners = () => {
      if (unlockListenerRef.current) {
        window.removeEventListener('click', unlockListenerRef.current);
        window.removeEventListener('touchstart', unlockListenerRef.current);
        window.removeEventListener('keydown', unlockListenerRef.current);
        unlockListenerRef.current = null;
      }
    };

    const handleFirstInteraction = async () => {
      removeUnlockListeners();

      // Nếu người dùng đã chủ động tắt nhạc, tuyệt đối không tự phát
      if (userManuallyPausedRef.current) {
        return;
      }

      // Chỉ phát nếu audio đang tạm dừng
      if (audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
          setIsAutoplayBlocked(false);
          broadcastPlay();
        } catch (e) {
          console.warn('Không thể mở khóa audio:', e);
        }
      }
    };

    unlockListenerRef.current = handleFirstInteraction;

    // Cố gắng tự động phát
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setIsAutoplayBlocked(false);
        broadcastPlay();
      } catch {
        // Trình duyệt chặn autoplay có tiếng -> Lắng nghe tương tác đầu tiên
        setIsAutoplayBlocked(true);
        window.addEventListener('click', handleFirstInteraction, { once: true });
        window.addEventListener('touchstart', handleFirstInteraction, { once: true });
        window.addEventListener('keydown', handleFirstInteraction, { once: true });
      }
    };

    attemptAutoplay();

    // 5. Cleanup triệt để khi component unmount
    return () => {
      removeUnlockListeners();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();

      if (channel) {
        try {
          channel.close();
        } catch {
          // Ignore
        }
      }

      if (typeof window !== 'undefined' && window.__AN_STUDIO_AUDIO_INSTANCE__ === audio) {
        window.__AN_STUDIO_AUDIO_INSTANCE__ = undefined;
      }
    };
  }, []);

  const play = useCallback(async () => {
    userManuallyPausedRef.current = false;
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setIsAutoplayBlocked(false);
      } catch (err) {
        console.warn('Không thể phát nhạc:', err);
      }
    }
  }, []);

  const pause = useCallback(() => {
    userManuallyPausedRef.current = true;

    // Hủy bỏ bất kỳ listener tự động mở khóa nào còn lại
    if (unlockListenerRef.current) {
      window.removeEventListener('click', unlockListenerRef.current);
      window.removeEventListener('touchstart', unlockListenerRef.current);
      window.removeEventListener('keydown', unlockListenerRef.current);
      unlockListenerRef.current = null;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const seek = useCallback((percentage: number) => {
    if (audioRef.current && audioRef.current.duration) {
      const targetTime = (percentage / 100) * audioRef.current.duration;
      audioRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
      setProgress(percentage);
    }
  }, []);

  const setVolume = useCallback((vol: number) => {
    const clamped = Math.max(0, Math.min(100, vol));
    setVolumeState(clamped);
    if (audioRef.current) {
      audioRef.current.volume = clamped / 100;
    }
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        togglePlay,
        play,
        pause,
        currentTime,
        duration,
        progress,
        seek,
        volume,
        setVolume,
        isAutoplayBlocked,
        songTitle,
        artistName,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
