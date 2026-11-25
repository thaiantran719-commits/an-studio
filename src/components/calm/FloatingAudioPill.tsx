import React from 'react';
import { useAudio } from '@/hooks/useAudio';
import { usePortfolio } from '@/hooks/usePortfolio';

export const FloatingAudioPill: React.FC = () => {
  const { isPlaying, togglePlay, isAutoplayBlocked, songTitle } = useAudio();
  const { language } = usePortfolio();

  return (
    <div className="fixed bottom-20 right-4 z-40 sm:right-6 md:bottom-6">
      <div
        onClick={togglePlay}
        className={`group flex cursor-pointer items-center gap-3 rounded-full px-4 py-2.5 shadow-neumorph-raised transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
          isAutoplayBlocked
            ? 'animate-bounce border border-amber-300 bg-amber-50 text-amber-900'
            : isPlaying
              ? 'border border-secondary-fixed bg-surface text-primary'
              : 'bg-surface text-on-surface-variant'
        }`}
        title={isPlaying ? 'Nhấn để tạm dừng nhạc' : 'Nhấn để phát nhạc'}
      >
        {/* Animated equalizer or music icon */}
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full ${
            isPlaying
              ? 'bg-primary-container text-on-primary'
              : 'bg-surface-container-high text-primary'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[16px] ${isPlaying ? 'animate-spin' : ''}`}
          >
            {isPlaying ? 'music_note' : 'play_arrow'}
          </span>
        </div>

        <div className="flex flex-col pr-1 text-left">
          <span className="flex items-center gap-1.5 text-xs font-bold leading-tight">
            <span>{songTitle}</span>
            {isPlaying && (
              <span className="inline-block h-2 w-2 animate-ping rounded-full bg-emerald-500" />
            )}
          </span>
          <span className="text-[10px] font-medium text-on-surface-variant">
            {isAutoplayBlocked
              ? language === 'vi'
                ? 'Nhấn vào đây để bật nhạc'
                : 'Click here to enable sound'
              : isPlaying
                ? language === 'vi'
                  ? 'Đang phát nhạc nền'
                  : 'Now Playing'
                : language === 'vi'
                  ? 'Tạm dừng nhạc'
                  : 'Soundtrack Paused'}
          </span>
        </div>
      </div>
    </div>
  );
};
