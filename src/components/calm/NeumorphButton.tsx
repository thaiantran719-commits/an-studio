import React from 'react';
import { cn } from '@/utils/cn';

export interface NeumorphButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'surface' | 'pill' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const NeumorphButton: React.FC<NeumorphButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary-container text-on-primary shadow-neumorph-btn-primary hover:bg-primary hover:-translate-y-0.5 active:shadow-sm',
    surface:
      'bg-surface text-primary shadow-neumorph-btn-tactile hover:text-primary-container hover:-translate-y-0.5 active:shadow-neumorph-inset',
    pill: 'bg-surface-container-low text-on-surface-variant hover:text-on-surface shadow-neumorph-inset-pill hover:bg-surface',
    ghost:
      'bg-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container-low/60',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5 min-h-[38px]',
    md: 'px-6 py-3 text-sm gap-2 min-h-[48px]',
    lg: 'px-8 py-3.5 text-base gap-2.5 min-h-[52px]',
  };

  return (
    <button
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
