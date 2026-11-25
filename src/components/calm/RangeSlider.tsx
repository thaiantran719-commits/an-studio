import React, { useState } from 'react';

export interface RangeSliderProps {
  label?: string;
  initialValue?: number;
  min?: number;
  max?: number;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  label = 'Sự hài hòa cảm xúc (Visual Stillness)',
  initialValue = 92,
  min = 10,
  max = 100,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  return (
    <div className="space-y-2 rounded-2xl bg-surface-container-low p-4 shadow-[inset_3px_3px_6px_rgba(180,174,160,0.35),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] sm:p-5">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
        <span>{label}</span>
        <span className="text-sm font-bold text-primary">{value}%</span>
      </div>

      <div className="relative flex h-8 items-center">
        {/* Recessed Track */}
        <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container-highest shadow-[inset_2px_2px_4px_rgba(180,174,160,0.4)]">
          <div
            className="h-full rounded-full bg-primary-container transition-all duration-150"
            style={{ width: `${value}%` }}
          />
        </div>

        {/* Native Input Range */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={e => setValue(Number(e.target.value))}
          className="absolute inset-0 w-full cursor-pointer opacity-0"
        />

        {/* Tactile Pearl Thumb */}
        <div
          className="pointer-events-none absolute h-6 w-6 rounded-full bg-surface shadow-[-2px_-2px_4px_#ffffff,2px_2px_6px_rgba(186,180,166,0.5)] transition-all duration-75"
          style={{ left: `calc(${value}% - 12px)` }}
        />
      </div>
    </div>
  );
};
