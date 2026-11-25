import { Moon, Sun, Layers, Github, Sparkles } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { APP_CONFIG } from '@/constants';
import { Button } from '@/components/common/Button';

export interface HeaderProps {
  onOpenAddModal?: () => void;
}

export function Header({ onOpenAddModal }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="from-primary-600 shadow-primary-500/20 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr to-indigo-600 text-white shadow-md">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-slate-100">
                {APP_CONFIG.appName}
              </span>
              <span className="dark:bg-primary-950/60 dark:text-primary-300 bg-primary-100 text-primary-700 rounded px-1.5 py-0.5 text-[10px] font-semibold">
                v{APP_CONFIG.version}
              </span>
            </div>
            <p className="hidden text-xs text-slate-500 sm:block dark:text-slate-400">
              Chuẩn mực Clean Architecture & Type-Safety
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenAddModal && (
            <Button
              size="sm"
              variant="primary"
              leftIcon={<Sparkles className="h-3.5 w-3.5" />}
              onClick={onOpenAddModal}
            >
              Thêm Module Mới
            </Button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Chuyển đổi giao diện Sáng / Tối"
            title={theme === 'dark' ? 'Chuyển sang Giao diện Sáng' : 'Chuyển sang Giao diện Tối'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-slate-600" />
            )}
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Xem mã nguồn trên GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
