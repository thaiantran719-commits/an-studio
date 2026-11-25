import { APP_CONFIG } from '@/constants';
import { Heart, Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white py-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="text-primary-500 h-4 w-4" />
          <span>
            {APP_CONFIG.appName} &bull; Xây dựng theo tiêu chuẩn Clean Code & TypeScript Strict
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span>Thiết kế dành cho nhà phát triển web hiện đại</span>
          <Heart className="inline h-3.5 w-3.5 fill-rose-500 text-rose-500" />
        </div>
      </div>
    </footer>
  );
}
