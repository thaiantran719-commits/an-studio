import React, { useState } from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';
import {
  STAT_METRICS,
  GEAR_CATEGORIES,
  FESTIVAL_AWARDS,
  CLIENT_ROSTER,
} from '@/data/portfolioData';
import { RangeSlider } from '@/components/calm/RangeSlider';

export const AboutPage: React.FC = () => {
  const { language, setActiveTab } = usePortfolio();
  const [cvLanguage, setCvLanguage] = useState<'vi' | 'en'>(language);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      // Tạo file PDF mockup tải về
      const dummyContent = `AN.STUDIO - Thai An Dossier (${cvLanguage.toUpperCase()})\nDirector of Photography & Master Colorist\nCertified DCI-P3 & Netflix Post-Production\nVerification SHA256: 7f4a8b92c103e5...`;
      const blob = new Blob([dummyContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `AN_STUDIO_THAI_AN_CV_${cvLanguage.toUpperCase()}_2025.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 600);
  };

  return (
    <div className="flex flex-col gap-10 md:gap-14">
      {/* 1. Header Title Area */}
      <div className="relative flex flex-col items-center justify-center pt-2 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container-low px-5 py-1.5 shadow-[inset_2px_2px_5px_rgba(180,174,160,0.35),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
            CALM / SYSTEM • MONOGRAPH
          </span>
        </div>
        <h1 className="font-serif text-5xl font-extrabold leading-none tracking-tight text-primary md:text-6xl lg:text-[4.5rem]">
          Thái An
        </h1>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
          A Softer Digital Space • Director &amp; Master Colorist
        </p>
        <div className="mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-60" />
      </div>

      {/* 2. Editorial Profile Hero Card: Bento Style */}
      <div className="w-full rounded-[2.5rem] bg-surface p-6 shadow-neumorph-raised-lg transition-all sm:p-8 md:p-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left: Portrait Photo Container in Clay Framing */}
          <div className="flex flex-col items-center lg:col-span-5">
            <div className="relative w-full max-w-[380px] rounded-[2.25rem] bg-surface-container-low p-3 shadow-[inset_4px_4px_8px_rgba(180,174,160,0.35),inset_-4px_-4px_8px_rgba(255,255,255,0.95)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-surface-container-high shadow-[-4px_-4px_10px_rgba(255,255,255,0.8),6px_6px_14px_rgba(186,180,166,0.25)]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARiItlaQ5jLetfjx79y7Yel1JecxfLg7siUg4uXSTJeZn1OM_XU4US1npHG5lH0fA18VwawqNolnt5TnxNVXfJGQOj0wMaLfjCjpZ_k_j1OWrFOP01iWRQ1dwu63zCduxoJ_HcFJflxSGAHFtu8qx2O8qeatWO66Mjiyw_f5n79aTvkS2d5-BydGcA7AdfFUGLey5nIzPBs7ni8JvKoNULjJFZz3ONyMVfFDyV1KY"
                  alt="Editorial portrait of Thái An, director and colorist in soft clay studio lighting"
                  className="contrast-90 h-full w-full object-cover brightness-95 grayscale transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60" />

                {/* Floating Tactile Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-surface/90 px-4 py-2.5 shadow-[-3px_-3px_8px_rgba(255,255,255,0.9),4px_4px_10px_rgba(186,180,166,0.4)] backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-secondary-fixed-dim shadow-[0_0_6px_rgba(183,217,193,0.9)]" />
                    <span className="text-xs font-semibold text-primary">
                      Saigon • Grading Stage 01
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-on-surface-variant">
                    REC. 709 / DCI-P3
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Literary Editorial Statement & Story */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  01 • Studio Philosophy
                </span>
                <span className="h-px w-8 bg-outline-variant/60" />
                <span className="text-xs text-on-surface-variant">Aesthetic Manifesto</span>
              </div>

              <h2 className="font-serif text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
                “Clarity feels good.”
                <br />
                <span className="text-xl font-light italic text-on-surface-variant sm:text-2xl">
                  {language === 'vi'
                    ? 'Ánh sáng tự nhiên và nhịp điệu tương đồng của tâm trí.'
                    : 'Natural light and the congruent rhythm of the mind.'}
                </span>
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-on-surface-variant">
                {language === 'vi'
                  ? '10+ năm điều hướng ngôn ngữ thị giác giữa vai trò Đạo diễn hình ảnh (DoP) và Master Colorist. Tôi tìm kiếm sự thanh lọc trong từng khung hình: nơi sắc màu mộc mạc như đất nung, ánh sáng ban mai nhẹ êm không gắt gỏng, và từng chuyển động nhịp nhàng phản chiếu sự an định bên trong người xem.'
                  : 'Over a decade navigating visual syntax as both Cinematographer (DoP) and Master Colorist. I seek purification in every frame: where colors echo unglazed earthenware, soft morning light breathes without aggression, and each calibrated transition mirrors inner composure.'}
              </p>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  'Cinematography (DoP)',
                  'Master Color Grading',
                  'Film Grain & Organic LUTs',
                  'Visual Direction',
                ].map(skill => (
                  <span
                    key={skill}
                    className="rounded-full bg-surface px-4 py-1.5 text-xs font-semibold text-primary shadow-[-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(186,180,166,0.3)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Micro tactile interactive snippet */}
            <div className="flex items-center justify-between rounded-2xl bg-surface-container-low p-3.5 shadow-[inset_3px_3px_6px_rgba(180,174,160,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.85)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-primary shadow-[-2px_-2px_5px_rgba(255,255,255,0.9),2px_2px_6px_rgba(186,180,166,0.3)]">
                  <span className="material-symbols-outlined text-[20px]">filter_vintage</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-primary">
                    {language === 'vi' ? 'Hiện diện nghệ thuật' : 'Artistic Presence'}
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    {language === 'vi'
                      ? 'Không chạy theo độ tương phản gắt; tôn sùng độ chuyển êm đềm của dải sáng.'
                      : 'Never chasing harsh contrast; honoring the serene roll-off of dynamic range.'}
                  </span>
                </div>
              </div>
              <span className="hidden font-mono text-[11px] tracking-wider text-on-surface-variant sm:block">
                AN.STUDIO
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Tactile Stats Bento Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {STAT_METRICS.map(stat => (
          <div
            key={stat.value}
            className="group flex flex-col justify-between rounded-3xl bg-surface p-6 shadow-neumorph-raised transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                {stat.label[language]}
              </span>
              <span className="material-symbols-outlined text-[20px] text-secondary">
                {stat.iconName}
              </span>
            </div>
            <div className="my-2">
              <div className="font-serif text-4xl font-black leading-tight tracking-tight text-primary">
                {stat.value}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
                {stat.description[language]}
              </p>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-container-high shadow-[inset_2px_2px_4px_rgba(180,174,160,0.35)]">
              <div
                className="h-full rounded-full bg-primary-container transition-all duration-700"
                style={{ width: `${stat.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 4. Smart CV Interactive Section */}
      <div className="w-full rounded-[2.5rem] bg-surface p-6 shadow-neumorph-raised-lg sm:p-8 md:p-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-container">
                02 • Hồ sơ chuyên môn
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
              <span className="text-xs text-on-surface-variant">Smart CV / Portfolio Dossier</span>
            </div>
            <h3 className="font-serif text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
              {language === 'vi' ? 'Smart CV • Ấn bản tuyển tập' : 'Smart CV • Curated Dossier'}
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              {language === 'vi'
                ? 'Hồ sơ chi tiết bao gồm danh mục thiết bị sở hữu, breakdown bảng màu từng phân đoạn phim đoạt giải, cùng thư giới thiệu từ các đạo diễn đối tác. Lựa chọn phiên bản ngôn ngữ phù hợp bên cạnh để lưu trữ bản in kỹ thuật số.'
                : 'Complete archive featuring verified camera equipment specs, grading breakdown palettes, and references from director peers. Select your preferred dossier language to download the print-ready PDF.'}
            </p>

            {/* Status notification capsule */}
            <div className="flex max-w-md items-center justify-between rounded-2xl bg-surface-container-low p-3.5 shadow-[inset_3px_3px_6px_rgba(180,174,160,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-fixed text-primary shadow-[-2px_-2px_4px_rgba(255,255,255,0.9),2px_2px_4px_rgba(186,180,166,0.25)]">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-semibold text-primary">
                    All verified.
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    {language === 'vi'
                      ? 'Cập nhật kỳ Q1 / 2025 • File PDF vector 14.2MB'
                      : 'Updated Q1 / 2025 • 14.2MB Vector PDF'}
                  </span>
                </div>
              </div>
              <span className="rounded-full bg-surface px-2.5 py-1 text-[10px] font-bold text-primary-container shadow-[-2px_-2px_4px_rgba(255,255,255,0.9),2px_2px_4px_rgba(186,180,166,0.2)]">
                READY
              </span>
            </div>
          </div>

          {/* Download Action Well */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="flex flex-col space-y-6 rounded-3xl bg-surface-container-low p-6 shadow-[inset_4px_4px_10px_rgba(180,174,160,0.35),inset_-4px_-4px_10px_rgba(255,255,255,0.95)] md:p-8">
              {/* Language Toggle Pill Switcher */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  {language === 'vi' ? 'Ngôn ngữ tài liệu' : 'Dossier Language'}
                </span>
                <div className="inline-flex items-center rounded-full bg-surface p-1 shadow-[inset_2px_2px_4px_rgba(180,174,160,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.9)]">
                  <button
                    onClick={() => setCvLanguage('vi')}
                    className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      cvLanguage === 'vi'
                        ? 'bg-primary-container text-on-primary shadow-[0_4px_10px_rgba(15,81,50,0.3)]'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    Tiếng Việt
                  </button>
                  <button
                    onClick={() => setCvLanguage('en')}
                    className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      cvLanguage === 'en'
                        ? 'bg-primary-container text-on-primary shadow-[0_4px_10px_rgba(15,81,50,0.3)]'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    English (Global)
                  </button>
                </div>
              </div>

              {/* Recessed Metadata Slate */}
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="rounded-2xl bg-surface p-4 shadow-[-3px_-3px_7px_rgba(255,255,255,0.9),3px_3px_7px_rgba(186,180,166,0.25)]">
                  <span className="block text-[11px] font-semibold uppercase text-on-surface-variant">
                    {language === 'vi' ? 'Định dạng' : 'Format'}
                  </span>
                  <span className="font-serif text-lg font-bold text-primary">PDF Print-Ready</span>
                </div>
                <div className="rounded-2xl bg-surface p-4 shadow-[-3px_-3px_7px_rgba(255,255,255,0.9),3px_3px_7px_rgba(186,180,166,0.25)]">
                  <span className="block text-[11px] font-semibold uppercase text-on-surface-variant">
                    {language === 'vi' ? 'Dung lượng' : 'Size'}
                  </span>
                  <span className="font-serif text-lg font-bold text-primary">
                    14.2 MB (Vector)
                  </span>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className="group flex h-[58px] w-full cursor-pointer items-center justify-between rounded-full bg-primary-container px-6 text-base font-bold text-on-primary shadow-neumorph-btn-primary transition-all hover:bg-primary active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[20px]">
                    {isDownloading ? 'sync' : 'download'}
                  </span>
                  <span>
                    {isDownloading
                      ? language === 'vi'
                        ? 'Đang chuẩn bị bản in...'
                        : 'Packaging PDF...'
                      : cvLanguage === 'vi'
                        ? 'Tải CV Bản Tiếng Việt (PDF)'
                        : 'Download English Dossier (PDF)'}
                  </span>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-on-primary/10 transition-transform group-hover:translate-x-1">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </button>

              {/* Checksum & View */}
              <div className="flex items-center justify-between px-1 font-mono text-xs text-on-surface-variant">
                <span>sha256:7f4a...9b12</span>
                <button
                  onClick={handleDownloadCV}
                  className="cursor-pointer font-sans text-xs font-semibold text-primary underline underline-offset-4 hover:text-primary-container"
                >
                  {language === 'vi' ? 'Xem trực tiếp trên Web' : 'Quick Preview'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Gear & Studio Environment Bento */}
      <div>
        <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              03 • Công nghệ &amp; Không gian xử lý
            </span>
            <h3 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
              Gear &amp; Studio Environment
            </h3>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-on-surface-variant">
            {language === 'vi'
              ? 'Môi trường kiểm soát ánh sáng tuyệt đối 18% Neutral Grey với hệ thống cân chỉnh màu sắc cấp phòng chiếu chuẩn quốc tế.'
              : 'Environment calibrated to 18% Neutral Grey with international projection-grade color management.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {GEAR_CATEGORIES.map(gear => (
            <div
              key={gear.title.en}
              className="flex flex-col justify-between space-y-6 rounded-3xl bg-surface p-6 shadow-neumorph-raised"
            >
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-container-low text-primary shadow-[inset_2px_2px_4px_rgba(180,174,160,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.9)]">
                  <span className="material-symbols-outlined">{gear.iconName}</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-primary">
                  {gear.title[language]}
                </h4>
                <p className="text-xs leading-relaxed text-on-surface-variant">
                  {gear.description[language]}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {gear.items.map(item => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl bg-surface p-3 shadow-[-2px_-2px_5px_rgba(255,255,255,0.9),2px_2px_5px_rgba(186,180,166,0.25)]"
                  >
                    <span className="text-xs font-semibold text-primary">{item.name}</span>
                    <span className="font-mono text-[11px] text-on-surface-variant">
                      {item.spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Recognitions, Honors & Selective Client Roster */}
      <div className="rounded-[2.5rem] bg-surface p-6 shadow-neumorph-raised-lg sm:p-8 md:p-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left: Film Festival Laurels */}
          <div className="space-y-6 lg:col-span-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                04 • Danh dự &amp; Giải thưởng điện ảnh
              </span>
              <h3 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-primary">
                Festival Laurels &amp; Honors
              </h3>
            </div>

            <div className="space-y-3.5">
              {FESTIVAL_AWARDS.map(award => (
                <div
                  key={award.festival}
                  className="flex items-center justify-between rounded-2xl bg-surface p-4 shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_4px_10px_rgba(186,180,166,0.25)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-secondary-fixed text-primary">
                      <span className="material-symbols-outlined text-[16px]">check</span>
                    </div>
                    <div>
                      <h5 className="font-serif text-base font-semibold text-primary">
                        {award.festival}
                      </h5>
                      <p className="mt-0.5 text-xs text-on-surface-variant">
                        {award.honor[language]}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-on-surface-variant">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Tactile Range Slider */}
            <div className="pt-2">
              <RangeSlider
                label={
                  language === 'vi'
                    ? 'Sự hài hòa cảm xúc (Visual Stillness)'
                    : 'Emotional Harmony (Visual Stillness)'
                }
                initialValue={92}
              />
            </div>
          </div>

          {/* Right: Client Roster */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                05 • Đối tác &amp; Khách hàng tín nhiệm
              </span>
              <h3 className="mt-1 font-serif text-3xl font-extrabold tracking-tight text-primary">
                Selective Client Roster
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                {language === 'vi'
                  ? 'Hợp tác cùng các thương hiệu đề cao giá trị thẩm mỹ trường tồn, tính nguyên bản và triết lý thị giác tối giản.'
                  : 'Collaborating with distinguished brands who honor timeless aesthetic integrity and understated visual language.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CLIENT_ROSTER.map(client => (
                <div
                  key={client.name}
                  className="group flex flex-col items-center justify-center rounded-2xl bg-surface p-6 text-center shadow-[-4px_-4px_10px_rgba(255,255,255,0.95),4px_4px_10px_rgba(186,180,166,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <span className="font-serif text-xl font-bold uppercase tracking-widest text-primary sm:text-2xl">
                    {client.name}
                  </span>
                  <span className="mt-1 text-[11px] font-medium text-on-surface-variant">
                    {client.scope}
                  </span>
                </div>
              ))}
            </div>

            {/* Invitation bar */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex w-full cursor-pointer items-center justify-between rounded-full bg-surface px-6 py-4 text-sm font-semibold text-primary shadow-neumorph-btn-tactile transition-all hover:text-primary-container active:scale-[0.99]"
              >
                <span className="font-serif text-base font-medium italic">
                  {language === 'vi'
                    ? 'Cùng thảo luận một dự án điện ảnh mới?'
                    : 'Ready to converse on a new narrative work?'}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                  <span>{language === 'vi' ? 'Khởi tạo liên hệ' : 'Initiate'}</span>
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
