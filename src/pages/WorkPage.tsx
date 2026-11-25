import React, { useState, useMemo, useRef } from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';
import { PORTFOLIO_PROJECTS, FILM_REEL_ITEMS } from '@/data/portfolioData';
import type { Project, ProjectCategory } from '@/types/portfolio';
import { ProjectDetailModal } from '@/components/calm/ProjectDetailModal';
import { useDebounce } from '@/hooks/useDebounce';

export const WorkPage: React.FC = () => {
  const { language, setActiveTab } = usePortfolio();

  // State bộ lọc và tìm kiếm
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearch = useDebounce(searchQuery, 200);

  // Modal chi tiết dự án
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Hiệu chuẩn không gian phòng Lab
  const [daylightBalance, setDaylightBalance] = useState<boolean>(true);
  const [grainSimulation, setGrainSimulation] = useState<boolean>(true);

  // Ref cho dải cuộn ngang
  const reelRef = useRef<HTMLDivElement>(null);

  const categories: { id: ProjectCategory; label: { vi: string; en: string } }[] = [
    { id: 'all', label: { vi: 'Tất cả', en: 'All' } },
    { id: 'film', label: { vi: 'Phim điện ảnh', en: 'Cinema Films' } },
    { id: 'photo', label: { vi: 'Nhiếp ảnh 35mm', en: '35mm Photo' } },
    { id: 'color', label: { vi: 'Chỉnh màu & Âm học', en: 'Color & Acoustics' } },
    { id: 'doc', label: { vi: 'Tài liệu', en: 'Documentary' } },
  ];

  // Lọc danh sách dự án
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;

      const q = debouncedSearch.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        project.title[language].toLowerCase().includes(q) ||
        project.description[language].toLowerCase().includes(q) ||
        project.cameraMeta.toLowerCase().includes(q) ||
        project.tags[language].some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, debouncedSearch, language]);

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      {/* 1. Hero Section: Soft Tactile Card */}
      <section className="neumorph-card relative overflow-hidden rounded-[2.5rem] bg-surface p-6 transition-all duration-300 sm:p-8 md:p-12">
        {/* Ambient Decorative Diffusers */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-secondary-fixed/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-primary-fixed-dim/20 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-6 md:gap-8">
          {/* Overline Tagline */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="neumorph-inset-pill inline-flex items-center gap-2.5 rounded-full bg-surface-container-low px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary-container shadow-[0_0_8px_rgba(15,81,50,0.6)]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
                AN.STUDIO • THÁI AN ARCHIVE 2025
              </span>
            </div>

            <div className="hidden items-center gap-2 text-xs font-medium text-on-surface-variant sm:inline-flex">
              <span className="material-symbols-outlined text-[16px] text-primary-container">
                nest_eco_leaf
              </span>
              <span>A Softer Digital Space</span>
            </div>
          </div>

          {/* Headline & Editorial Lead */}
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col gap-4 lg:col-span-8">
              <h1 className="font-serif text-3xl font-normal leading-[1.12] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                {language === 'vi' ? (
                  <>
                    Kể chuyện bằng <span className="font-bold text-primary">ánh sáng</span>,{' '}
                    <span className="font-bold text-primary">màu sắc</span> và{' '}
                    <span className="font-bold text-primary-container">xúc cảm tĩnh lặng</span>.
                  </>
                ) : (
                  <>
                    Crafting stories through <span className="font-bold text-primary">light</span>,{' '}
                    <span className="font-bold text-primary">color</span>, and{' '}
                    <span className="font-bold text-primary-container">sensory stillness</span>.
                  </>
                )}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
                {language === 'vi'
                  ? 'Không gian sáng tạo của đạo diễn hình ảnh & nghệ sĩ chỉnh màu Thái An. Nơi chuyển động cơ khí 35mm gặp gỡ kiến trúc xúc giác, tôn vinh độ thở của khung hình và nhịp điệu chiêm nghiệm của thị giác Đông Á.'
                  : 'The creative archive of director of photography & master colorist Thái An. Where 35mm mechanical motion converges with tactile serenity, honoring the breathing room of the frame and East Asian contemplative visual pacing.'}
              </p>
            </div>

            {/* Micro Quick Metric Pill Card */}
            <div className="neumorph-inset flex flex-col gap-2 rounded-2xl bg-surface-container-low/70 p-4 sm:p-5 lg:col-span-4">
              <div className="flex items-center justify-between text-xs font-semibold uppercase text-on-surface-variant">
                <span>{language === 'vi' ? 'Hệ thống chế tác' : 'Mastering System'}</span>
                <span className="text-sm font-bold text-primary">4.2K RAW • DaVinci</span>
              </div>
              <div className="neumorph-inset mt-1 h-2.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
                <div className="h-full w-[84%] rounded-full bg-primary-container transition-all duration-700" />
              </div>
              <div className="flex items-center justify-between pt-1 text-xs text-on-surface-variant">
                <span>{language === 'vi' ? 'Trạng thái phòng lab' : 'Lab Environment'}</span>
                <span className="font-bold text-primary">
                  {language === 'vi' ? '84% Hiệu chuẩn 6500K' : '84% Calibrated 6500K'}
                </span>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="neumorph-btn-primary group inline-flex h-[52px] cursor-pointer items-center justify-center gap-3 rounded-full bg-primary-container px-7 text-sm font-medium text-on-primary transition-all duration-200 hover:bg-primary active:scale-[0.98]"
            >
              <span>{language === 'vi' ? 'Khám phá tác phẩm' : 'Explore Archive'}</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>

            <button
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="neumorph-btn-tactile inline-flex h-[52px] cursor-pointer items-center justify-center gap-2 rounded-full bg-surface px-7 text-sm font-medium text-primary transition-all duration-200 hover:text-primary-container"
            >
              <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
              <span>{language === 'vi' ? 'Liên hệ hợp tác' : 'Initiate Dialogue'}</span>
            </button>

            <div className="ml-auto hidden items-center gap-3 text-xs font-medium text-on-surface-variant xl:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
              <span>{language === 'vi' ? 'Chất liệu màu film hữu cơ' : 'Organic film stocks'}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
              <span>
                {language === 'vi' ? 'Âm hưởng trường quay sống' : 'Live sound acoustics'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Pill Filter & Search Bar */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="text-xs font-semibold uppercase tracking-wider">
            {language === 'vi' ? 'Danh mục lưu trữ' : 'Archive Filter'}
          </span>
          <span className="text-xs text-outline-variant">/</span>
          <span className="text-sm font-bold text-primary">
            {filteredProjects.length} {language === 'vi' ? 'Dự án tiêu biểu' : 'Selected Works'}
          </span>
        </div>

        {/* Recessed Switch Bar */}
        <div className="neumorph-inset no-scrollbar flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-surface-container-low p-1.5">
          {categories.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? 'neumorph-pill-active bg-primary-container text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {cat.label[language]}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Selected Work Showcase Grid */}
      <section id="projects" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {filteredProjects.map(project => (
          <article
            key={project.id}
            className="neumorph-card group flex flex-col justify-between rounded-3xl bg-surface p-5 transition-all duration-300 hover:-translate-y-1 md:p-7"
          >
            <div className="flex flex-col gap-4">
              {/* Tactile Visual Frame */}
              <div className="neumorph-inset relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-surface-container-high">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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

              {/* Metadata & Title */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">
                    {project.number} // {project.typeBadge[language]}
                  </span>
                  <span className="text-[11px] font-bold text-primary">
                    {project.statusBadge[language]}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-primary transition-colors group-hover:text-primary-container">
                  {project.title[language]}
                </h2>

                <p className="line-clamp-2 text-sm leading-relaxed text-on-surface-variant">
                  {project.description[language]}
                </p>
              </div>
            </div>

            {/* Footer Card Action */}
            <div className="mt-6 flex items-center justify-between border-t border-surface-dim/30 pt-4">
              <div className="flex items-center gap-2">
                {project.tags[language].map(t => (
                  <span
                    key={t}
                    className="neumorph-inset-pill rounded-full bg-surface-container-low px-3 py-1 text-xs font-medium text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="neumorph-btn-tactile group/btn inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-surface px-5 py-2.5 text-xs font-medium text-primary transition-all hover:text-primary-container"
              >
                <span>{language === 'vi' ? 'Xem tác phẩm' : 'View Work'}</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover/btn:translate-x-1">
                  north_east
                </span>
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* 4. Horizontal Photo Reel: Medium Format Film Roll */}
      <section className="neumorph-card flex flex-col gap-6 rounded-3xl bg-surface p-6 md:p-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              {language === 'vi'
                ? 'Dải phim tương tự • 120 Roll Film'
                : 'Analog Film Strip • 120 Roll'}
            </span>
            <h3 className="mt-1 font-serif text-2xl font-bold text-primary">
              {language === 'vi'
                ? 'Dải Ảnh Cuộn Ngang / Thư Mục Tiếp Xúc'
                : 'Horizontal Film Reel / Contact Sheet'}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant">
            <span>{language === 'vi' ? 'Kéo ngang để xem thêm' : 'Scroll horizontally'}</span>
            <span className="material-symbols-outlined text-[18px]">swipe</span>
          </div>
        </div>

        {/* Reel Scroller */}
        <div
          ref={reelRef}
          className="no-scrollbar -mx-2 flex gap-6 overflow-x-auto scroll-smooth px-2 pb-3 pt-1"
        >
          {FILM_REEL_ITEMS.map(item => (
            <div
              key={item.id}
              className="neumorph-card-subtle group flex min-w-[280px] flex-shrink-0 cursor-pointer flex-col gap-3 rounded-2xl bg-surface-container-low p-3.5 transition-all hover:-translate-y-1 sm:min-w-[320px]"
            >
              <div className="neumorph-inset relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container-highest">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-2.5 top-2.5 rounded-full bg-surface/90 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-primary">
                  {item.expNumber}
                </span>
              </div>
              <div className="flex items-center justify-between px-1 text-xs text-on-surface-variant">
                <span className="font-semibold text-primary">{item.title[language]}</span>
                <span className="font-mono text-[11px]">{item.cameraLens}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Tactile Bento Control Suite: Studio Philosophy & Calibration Module */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left: Collaboration Status Card */}
        <div className="neumorph-card flex flex-col justify-between gap-6 rounded-3xl bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="neumorph-card-subtle flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary-fixed text-primary-container">
              <span className="material-symbols-outlined text-[28px]">check</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-tight text-primary">
                {language === 'vi' ? 'Mở lịch cộng tác Q3 • Q4' : 'Open for Collaboration Q3 • Q4'}
              </span>
              <span className="mt-1.5 text-xs leading-relaxed text-on-surface-variant">
                {language === 'vi'
                  ? 'Tiếp nhận dự án điện ảnh, phim tài liệu nghệ thuật & chiến dịch thương hiệu tĩnh tại.'
                  : 'Accepting narrative feature films, artistic documentaries & selective brand campaigns.'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-surface-dim/30 pt-4 text-xs text-on-surface-variant">
            <span>
              {language === 'vi' ? 'Tiêu chuẩn DCI-P3 / Rec.709' : 'DCI-P3 / Rec.709 Mastered'}
            </span>
            <span className="font-mono font-semibold text-primary">ΔE &lt; 0.8</span>
          </div>
        </div>

        {/* Right: Calibration Switches & Search Field */}
        <div className="neumorph-card flex flex-col justify-between gap-4 rounded-3xl bg-surface p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-surface-dim/30 pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              {language === 'vi' ? 'Hiệu chuẩn không gian phòng Lab' : 'Studio Lab Calibration'}
            </span>
            <span className="material-symbols-outlined text-[18px] text-primary-container">
              tune
            </span>
          </div>

          {/* Switch 1: Natural daylight balance */}
          <div className="flex items-center justify-between py-1">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-primary">
                {language === 'vi' ? 'Ánh sáng tự nhiên 6500K' : 'Natural Daylight 6500K'}
              </span>
              <span className="text-xs text-on-surface-variant">
                {language === 'vi' ? 'Bù trừ quang sai mắt người' : 'Human chromatic adaptation'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setDaylightBalance(!daylightBalance)}
              className={`neumorph-inset h-8 w-14 cursor-pointer rounded-full p-1 transition-colors ${
                daylightBalance ? 'bg-primary-container' : 'bg-surface-container-high'
              }`}
              aria-label="Chuyển đổi ánh sáng 6500K"
            >
              <div
                className={`h-6 w-6 rounded-full bg-surface shadow-md transition-transform duration-200 ${
                  daylightBalance ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Switch 2: 35mm Grain Simulation */}
          <div className="flex items-center justify-between py-1">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-primary">
                {language === 'vi' ? 'Hạt Film 35mm Thực Thể' : '35mm Film Grain Scan'}
              </span>
              <span className="text-xs text-on-surface-variant">
                {language === 'vi' ? 'Quét hạt hữu cơ 4K' : 'Organic 4K stock scanning'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setGrainSimulation(!grainSimulation)}
              className={`neumorph-inset h-8 w-14 cursor-pointer rounded-full p-1 transition-colors ${
                grainSimulation ? 'bg-primary-container' : 'bg-surface-container-high'
              }`}
              aria-label="Chuyển đổi hạt film 35mm"
            >
              <div
                className={`h-6 w-6 rounded-full bg-surface shadow-md transition-transform duration-200 ${
                  grainSimulation ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Interactive Search Input Field */}
          <div className="pt-2">
            <div className="relative flex w-full items-center">
              <span className="material-symbols-outlined pointer-events-none absolute left-4 text-[20px] text-on-surface-variant">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'vi'
                    ? 'Tìm kiếm tác phẩm, thông số camera...'
                    : 'Search projects, camera specs...'
                }
                className="neumorph-inset h-[48px] w-full rounded-full bg-surface-container-low pl-12 pr-12 text-xs text-primary placeholder-on-surface-variant/60 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 cursor-pointer text-xs text-on-surface-variant hover:text-primary"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Direct Dialogue Inquiry Banner: Tactile Pillow Card */}
      <section className="neumorph-card relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[2.5rem] bg-surface p-6 sm:p-10 md:flex-row md:p-12">
        <div className="flex max-w-xl flex-col gap-2 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
            {language === 'vi' ? 'Khởi đầu một cuộc chuyện trò' : 'Initiate a dialogue'}
          </span>
          <h3 className="font-serif text-2xl font-bold leading-snug text-primary sm:text-3xl">
            {language === 'vi'
              ? 'Bạn đang ấp ủ một dự án điện ảnh hay chiến dịch hình ảnh mới?'
              : 'Nurturing a new narrative film or visual campaign?'}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
            {language === 'vi'
              ? 'Studio luôn sẵn sàng lắng nghe câu chuyện của bạn qua một buổi trò chuyện trực tiếp tại phòng lab Bến Nghé Q.1 hoặc kết nối trực tuyến.'
              : 'Our studio welcomes your brief for an intimate screening session in District 1, Saigon or via digital conference.'}
          </p>
        </div>

        <button
          onClick={() => {
            setActiveTab('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="neumorph-btn-primary flex h-[54px] cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-full bg-primary-container px-8 text-sm font-medium text-on-primary"
        >
          <span>{language === 'vi' ? 'Bắt đầu cuộc trao đổi' : 'Open Dialogue'}</span>
          <span className="material-symbols-outlined text-[18px]">north_east</span>
        </button>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={() => {
          setActiveTab('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
};
