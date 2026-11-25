import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility gộp className Tailwind CSS an toàn và chống xung đột classes
 * @example cn('px-2 py-1', isPrimary && 'bg-blue-500', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
