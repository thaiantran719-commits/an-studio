import React from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';

export const CalmFooter: React.FC = () => {
  const { language, setActiveTab, currentTimeString } = usePortfolio();

  return (
    <footer className="mt-16 w-full bg-surface-container-low pb-24 pt-16 shadow-[inset_0_4px_12px_rgba(186,180,166,0.18)] md:pb-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 border-b border-surface-dim/40 pb-10 md:grid-cols-12">
          {/* Col 1: Studio info */}
          <div className="flex flex-col justify-between space-y-4 md:col-span-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-primary">AN.STUDIO</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                  — THÁI AN
                </span>
              </div>
              <p className="max-w-sm font-serif text-base italic leading-relaxed text-on-surface-variant">
                {language === 'vi'
                  ? 'Kiến tạo nhịp điệu điện ảnh tĩnh lặng, ánh sáng gốm mộc và sự an định xúc cảm trong hình ảnh chuyển động.'
                  : 'Crafting quiet cinematic rhythm, warm clay light, and sensory stillness in moving image.'}
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-surface px-4 py-2 shadow-[-4px_-4px_10px_rgba(255,255,255,0.9),4px_4px_10px_rgba(186,180,166,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-fixed-dim opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-container" />
              </span>
              <span className="font-mono text-xs text-on-surface-variant">
                Saigon, Vietnam (UTC+7) • {currentTimeString || '03:42 PM'}
              </span>
            </div>
          </div>

          {/* Col 2: Inquiries */}
          <div className="flex flex-col space-y-2 md:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              {language === 'vi' ? 'Liên hệ & Hợp tác' : 'Inquiries & Collaborations'}
            </span>
            <a
              href="mailto:contact@thaian.studio"
              className="font-serif text-xl font-semibold text-primary transition-colors hover:text-primary-container"
            >
              contact@thaian.studio
            </a>
            <p className="pt-1 text-xs leading-relaxed text-on-surface-variant">
              {language === 'vi'
                ? 'Đại diện toàn cầu cho đạo diễn quảng cáo, chỉnh màu phim điện ảnh và định hình thẩm mỹ thị giác.'
                : 'Represented globally for commercial direction, narrative color grading, and sensory visual direction.'}
            </p>
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col justify-between space-y-4 md:col-span-3">
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                {language === 'vi' ? 'Điều hướng' : 'Navigation'}
              </span>
              <button
                onClick={() => {
                  setActiveTab('work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cursor-pointer text-left text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                {language === 'vi' ? 'Tác phẩm tiêu biểu (Work)' : 'Selected Work'}
              </button>
              <button
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cursor-pointer text-left text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                {language === 'vi' ? 'Hồ sơ & Triết lý (About)' : 'Studio Philosophy & CV'}
              </button>
              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cursor-pointer text-left text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                {language === 'vi' ? 'Hộp thư trực tiếp (Contact)' : 'Direct Touchpoint'}
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-surface px-5 py-2.5 text-xs font-semibold text-primary shadow-neumorph-btn-tactile transition-all hover:text-primary-container active:scale-[0.98]"
              >
                {language === 'vi' ? 'Khởi tạo đối thoại' : 'Initiate Dialogue'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-on-surface-variant sm:flex-row">
          <p>© 2025 AN.STUDIO • Thái An. All quiet rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Calm System / Soft Neumorphism
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
            <span className="text-[11px] font-semibold uppercase tracking-wider">
              Director &amp; Colorist
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
