import React from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';
import { useAudio } from '@/hooks/useAudio';

export const AudioPlayerWidget: React.FC = () => {
  const { language } = usePortfolio();
  const {
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    progress,
    seek,
    volume,
    setVolume,
    songTitle,
    artistName,
  } = useAudio();

  // Định dạng mm:ss
  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(secs % 60)
      .toString()
      .padStart(2, '0');
    return `${m}:${s}`;
  };

  const waveformHeights = [35, 60, 85, 100, 75, 50, 90, 65, 40, 80, 95, 55, 30, 20, 25, 40, 30, 15];

  return (
    <div className="neumorph-card flex flex-col justify-between gap-5 rounded-3xl bg-surface p-5 transition-all sm:p-7">
      {/* Header Widget */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed/50 text-primary-container shadow-sm">
            <span
              className={`material-symbols-outlined text-[22px] ${isPlaying ? 'animate-pulse' : ''}`}
            >
              graphic_eq
            </span>
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
              {language === 'vi'
                ? 'Nhạc Nền Website • Giai Điệu Chọn Lọc'
                : 'Website Soundtrack • Curated Music'}
            </span>
            <h4 className="font-serif text-lg font-medium text-primary">
              <span className="text-xl font-bold text-primary">{songTitle}</span> — {artistName}
            </h4>
          </div>
        </div>
        <span className="neumorph-inset-pill rounded-full bg-surface-container-low px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-primary">
          MASTER AUDIO
        </span>
      </div>

      {/* Recessed Audio Controller Area */}
      <div className="neumorph-inset flex flex-col gap-3 rounded-2xl bg-surface-container-low/70 p-4">
        {/* Animated Waveform Visualizer */}
        <div className="flex h-14 w-full items-end justify-between gap-1.5 px-2 pt-2">
          {waveformHeights.map((h, i) => {
            const isFilled = (i / waveformHeights.length) * 100 <= progress;
            return (
              <span
                key={i}
                className={`w-1.5 rounded-full transition-all duration-300 ${
                  isFilled
                    ? isPlaying && i % 3 === 0
                      ? 'animate-pulse bg-primary-container'
                      : 'bg-primary-container'
                    : 'bg-outline-variant/40'
                }`}
                style={{
                  height: `${isPlaying ? Math.max(15, h * (0.8 + Math.random() * 0.4)) : h}%`,
                }}
              />
            );
          })}
        </div>

        {/* Tactile Recessed Slider Channel */}
        <div
          className="relative w-full cursor-pointer py-2"
          onClick={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            seek(Math.max(0, Math.min(100, clickPos * 100)));
          }}
        >
          <div className="neumorph-inset flex h-3 w-full items-center overflow-hidden rounded-full bg-surface-container-highest">
            <div
              className="h-full rounded-full bg-primary-container transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Slider Thumb Pearl */}
          <div
            className="neumorph-btn-tactile absolute top-1/2 h-6 w-6 -translate-y-1/2 cursor-grab rounded-full bg-surface transition-all duration-75 active:cursor-grabbing"
            style={{ left: `calc(${progress}% - 12px)` }}
          />
        </div>

        {/* Time Info */}
        <div className="flex items-center justify-between font-mono text-[11px] text-on-surface-variant">
          <span>{formatTime(currentTime)}</span>
          <span className="font-sans text-xs font-medium text-primary">
            {language === 'vi'
              ? 'Gói Con Tim Làm Quà • Nhạc nền phát tự động'
              : 'Gói Con Tim Làm Quà • Auto-playing Soundtrack'}
          </span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="neumorph-btn-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-container text-on-primary transition-all hover:bg-primary active:scale-95"
            aria-label={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc'}
          >
            <span className="material-symbols-outlined text-[24px]">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-primary">
              {isPlaying
                ? language === 'vi'
                  ? 'Đang phát âm thanh'
                  : 'Playing Audio'
                : language === 'vi'
                  ? 'Đã tạm dừng'
                  : 'Paused'}
            </span>
            <span className="text-xs text-on-surface-variant">
              {language === 'vi'
                ? 'Âm thanh tự động kích hoạt khi vào web'
                : 'Soundtrack auto-activates upon browsing'}
            </span>
          </div>
        </div>

        {/* Volume tactile well */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <button
            onClick={() => setVolume(volume > 0 ? 0 : 85)}
            className="cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
            aria-label="Tắt/Bật tiếng"
          >
            <span className="material-symbols-outlined text-[18px]">
              {volume === 0 ? 'volume_off' : volume < 50 ? 'volume_down' : 'volume_up'}
            </span>
          </button>
          <div
            className="neumorph-inset h-2.5 w-24 cursor-pointer overflow-hidden rounded-full bg-surface-container-highest"
            onClick={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = (e.clientX - rect.left) / rect.width;
              setVolume(Math.round(Math.max(0, Math.min(100, pct * 100))));
            }}
          >
            <div className="h-full rounded-full bg-secondary" style={{ width: `${volume}%` }} />
          </div>
          <span className="w-8 text-right font-mono text-xs text-on-surface-variant">
            {volume}%
          </span>
        </div>
      </div>
    </div>
  );
};
