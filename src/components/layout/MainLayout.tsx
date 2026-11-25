import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export interface MainLayoutProps {
  children: ReactNode;
  onOpenAddModal?: () => void;
}

export function MainLayout({ children, onOpenAddModal }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-900 dark:text-slate-100">
      <Header onOpenAddModal={onOpenAddModal} />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
