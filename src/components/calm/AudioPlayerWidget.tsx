import React, { useState, useEffect } from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';

export const AudioPlayerWidget: React.FC = () => {
  const { language } = usePortfolio();
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(68);
  const [volume] = useState<number>(72);

  // Giả lập tiến trình bài hát khi đang phát
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 0.4));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Tính toán thời gian hiển thị từ progress
  const totalSeconds = 252; // 04:12
  const currentSeconds = Math.floor((progress / 100) * totalSeconds);
  const curMin = Math.floor(currentSeconds / 60)
    .toString()
    .padStart(2, '0');
  const curSec = (currentSeconds % 60).toString().padStart(2, '0');

  const waveformHeights = [35, 60, 85, 100, 75, 50, 90, 65, 40, 80, 95, 55, 30, 20, 25, 40, 30, 15];

  return (
    <div className="neumorph-card flex flex-col justify-between gap-5 rounded-3xl bg-surface p-5 transition-all sm:p-7">
      {/* Header Widget */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed/50 text-primary-container shadow-sm">
            <span className="material-symbols-outlined text-[22px]">graphic_eq</span>
          </div>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
              {language === 'vi'
                ? 'Nghiên Cứu Âm Thanh • Field Recording'
                : 'Acoustic Study • Field Recording'}
            </span>
            <h4 className="font-serif text-lg font-medium text-primary">
              <span className="text-xl font-bold text-primary">Silence In Motion</span> — Ambient
              Soundscape
            </h4>
          </div>
        </div>
        <span className="neumorph-inset-pill rounded-full bg-surface-container-low px-3 py-1 text-[11px] font-semibold tracking-wider text-primary">
          24-BIT / 96KHZ
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
            setProgress(Math.max(0, Math.min(100, clickPos * 100)));
          }}
        >
          <div className="neumorph-inset flex h-3 w-full items-center overflow-hidden rounded-full bg-surface-container-highest">
            <div
              className="h-full rounded-full bg-primary-container transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Slider Thumb Pearl */}
          <div
            className="neumorph-btn-tactile absolute top-1/2 h-6 w-6 -translate-y-1/2 cursor-grab rounded-full bg-surface transition-all duration-100 active:cursor-grabbing"
            style={{ left: `calc(${progress}% - 12px)` }}
          />
        </div>

        {/* Time Info */}
        <div className="flex items-center justify-between font-mono text-[11px] text-on-surface-variant">
          <span>{`${curMin}:${curSec}`}</span>
          <span className="font-sans text-xs font-medium text-primary">
            {language === 'vi'
              ? 'Bản hòa âm gió đồng • Hạ lưu sông Tiền'
              : 'Delta wind harmonic • Lower Tien River'}
          </span>
          <span>04:12</span>
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="neumorph-btn-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-container text-on-primary transition-all hover:bg-primary active:scale-95"
            aria-label={isPlaying ? 'Tạm dừng âm thanh' : 'Phát âm thanh'}
          >
            <span className="material-symbols-outlined text-[24px]">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-primary">
              {isPlaying
                ? language === 'vi'
                  ? 'Đang phát trường âm'
                  : 'Playing Soundscape'
                : language === 'vi'
                  ? 'Đã tạm dừng'
                  : 'Paused'}
            </span>
            <span className="text-xs text-on-surface-variant">
              {language === 'vi' ? 'Thu âm trực xạ binaural' : 'Binaural direct field recording'}
            </span>
          </div>
        </div>

        {/* Volume tactile well */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
            volume_up
          </span>
          <div className="neumorph-inset h-2.5 w-24 overflow-hidden rounded-full bg-surface-container-highest">
            <div className="h-full rounded-full bg-secondary" style={{ width: `${volume}%` }} />
          </div>
          <span className="font-mono text-xs text-on-surface-variant">{volume}%</span>
        </div>
      </div>
    </div>
  );
};
