import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AudioContext } from './audioContextDef';

const AUDIO_SRC = '/audio/goi-con-tim-lam-qua.mp3';

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolumeState] = useState<number>(85);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState<boolean>(false);

  const songTitle = 'Gói Con Tim Làm Quà';
  const artistName = 'Nguyễn Hùng • Soundtrack';

  // Khởi tạo audio element một lần duy nhất
  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.preload = 'auto';
    audio.loop = true;
    audio.volume = 0.85;
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Cố gắng tự động phát ngay khi vào web
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setIsAutoplayBlocked(false);
      } catch {
        // Trình duyệt chặn autoplay có âm thanh (Autoplay Policy)
        setIsAutoplayBlocked(true);

        // Lắng nghe tương tác đầu tiên của người dùng bất kỳ đâu trên màn hình
        const unlockAudio = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            setIsAutoplayBlocked(false);
          } catch (e) {
            console.warn('Lỗi khi mở khóa âm thanh:', e);
          } finally {
            window.removeEventListener('click', unlockAudio);
            window.removeEventListener('touchstart', unlockAudio);
            window.removeEventListener('keydown', unlockAudio);
          }
        };

        window.addEventListener('click', unlockAudio, { once: true });
        window.addEventListener('touchstart', unlockAudio, { once: true });
        window.addEventListener('keydown', unlockAudio, { once: true });
      }
    };

    attemptAutoplay();

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const play = useCallback(async () => {
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
