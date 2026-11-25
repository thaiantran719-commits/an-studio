import React, { useEffect } from 'react';
import type { Project } from '@/types/portfolio';
import { usePortfolio } from '@/hooks/usePortfolio';

export interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onInquire,
}) => {
  const { language } = usePortfolio();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="animate-in fade-in zoom-in-95 relative z-10 my-auto w-full max-w-3xl rounded-[2rem] border border-white/60 bg-surface p-6 shadow-neumorph-raised-lg duration-200 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-surface text-on-surface-variant shadow-neumorph-btn-tactile transition-all hover:text-primary"
          aria-label="Đóng chi tiết"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Media Frame */}
        <div className="neumorph-inset relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-surface-container-high">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-surface/90 px-3 py-1 text-[11px] font-semibold text-primary shadow-sm backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
            <span>{project.cameraMeta}</span>
          </div>
          <div className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-surface/90 px-3 py-1 text-[11px] font-semibold text-on-surface-variant shadow-sm backdrop-blur-md">
            <span className="material-symbols-outlined text-[14px]">timer</span>
            <span>{project.durationMeta[language]}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
              {project.typeBadge[language]}
            </span>
            <span className="text-xs font-bold text-primary-container">
              {project.statusBadge[language]}
            </span>
          </div>

          <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">
            {project.title[language]}
          </h2>

          <p className="text-sm leading-relaxed text-on-surface-variant sm:text-base">
            {project.description[language]}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags[language].map(tag => (
              <span
                key={tag}
                className="neumorph-inset-pill rounded-full bg-surface-container-low px-3 py-1 text-xs font-medium text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-surface-dim/40 pt-6 sm:flex-row">
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
              <span>
                {language === 'vi'
                  ? 'Chứng nhận xử lý DaVinci Resolve DCI-P3'
                  : 'Certified DaVinci Resolve DCI-P3 Mastering'}
              </span>
            </div>

            <div className="flex w-full items-center gap-3 sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 cursor-pointer rounded-full bg-surface px-5 py-2.5 text-xs font-medium text-primary shadow-neumorph-btn-tactile transition-all hover:text-primary-container sm:flex-none"
              >
                {language === 'vi' ? 'Đóng' : 'Close'}
              </button>
              <button
                onClick={() => {
                  onClose();
                  onInquire();
                }}
                className="flex-1 cursor-pointer rounded-full bg-primary-container px-6 py-2.5 text-xs font-medium text-on-primary shadow-neumorph-btn-primary transition-all hover:bg-primary sm:flex-none"
              >
                {language === 'vi' ? 'Hợp tác dự án tương tự' : 'Collaborate on similar project'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
