import React from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';
import { EmailCopyField } from '@/components/calm/EmailCopyField';

export const ContactPage: React.FC = () => {
  const { language } = usePortfolio();

  return (
    <div className="flex flex-col gap-10 md:gap-12">
      {/* 1. Hero / Header Card: Tactile Plinth */}
      <section className="relative w-full rounded-[2.5rem] bg-surface p-6 shadow-neumorph-raised-lg sm:p-10 md:p-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-primary-container shadow-[0_0_8px_rgba(15,81,50,0.5)]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                CALM TOUCHPOINT • INITIATE DIALOGUE
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
              {language === 'vi'
                ? 'Khởi tạo dự án cùng AN.STUDIO'
                : 'Initiate a dialogue with AN.STUDIO'}
            </h1>
            <p className="mt-3 font-serif text-base italic leading-relaxed text-on-surface-variant sm:text-lg">
              {language === 'vi'
                ? 'A softer, mindful collaboration space. Phản hồi thong thả và chuẩn xác trong 4–12 giờ làm việc.'
                : 'A softer, mindful collaboration space. Mindful, exact replies within 4–12 business hours.'}
            </p>
          </div>

          {/* Working Status Pill */}
          <div className="flex w-fit items-center gap-3 self-start rounded-full bg-surface-container-low p-2.5 pr-5 shadow-[inset_3px_3px_6px_rgba(180,174,160,0.35),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] md:self-auto">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-on-primary shadow-[0_4px_10px_rgba(15,81,50,0.35)]">
              <span className="material-symbols-outlined text-[20px]">
                nest_clock_farsight_analog
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase text-on-surface-variant">
                Current Velocity
              </span>
              <span className="text-xs font-bold text-primary">
                {language === 'vi' ? 'Sẵn sàng nhận lịch Q3 / 2025' : 'Accepting Q3 / 2025 Briefs'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Workspace Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Zero-Friction Email & Direct Channels (7 cols) */}
        <div className="flex flex-col gap-8 lg:col-span-7">
          {/* One-Click Copy Card */}
          <div className="rounded-3xl bg-surface p-6 shadow-neumorph-raised sm:p-8">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  01 • KÊNH TRỌNG TÂM
                </span>
                <span className="text-xs text-outline-variant">/</span>
                <span className="text-xs font-semibold text-secondary">
                  Briefs &amp; Treatments
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-on-surface-variant">
                SLA: &lt; 8h
              </span>
            </div>

            <h2 className="mb-2 font-serif text-2xl font-bold text-primary">
              {language === 'vi' ? 'Thư điện tử chính thức' : 'Official Electronic Letter'}
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
              {language === 'vi'
                ? 'Dành cho kịch bản đạo diễn, treatment màu điện ảnh (color grading) và các dự án thương mại cao cấp.'
                : 'Dedicated to directorial treatments, feature film color grading briefs, and curated commercial campaigns.'}
            </p>

            {/* Component 1-Click Copy */}
            <EmailCopyField email="contact@thaian.studio" />
          </div>

          {/* Direct Instant Channels */}
          <div className="rounded-3xl bg-surface p-6 shadow-neumorph-raised sm:p-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                02 • KÊNH TRÒ CHUYỆN TRỰC TIẾP
              </span>
              <span className="text-xs font-semibold text-secondary">Instant Ping</span>
            </div>
            <h2 className="mb-2 font-serif text-2xl font-bold text-primary">
              {language === 'vi' ? 'Trao đổi nhanh thời gian thực' : 'Real-time Instant Exchange'}
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
              {language === 'vi'
                ? 'Dành cho agency cần check lịch quay gấp, agency producer hoặc kiểm tra kỹ thuật phim trường.'
                : 'For production desk inquiries, immediate schedule checks, and technical camera consultations.'}
            </p>

            <div className="flex flex-col gap-3.5">
              {/* Zalo Direct Pill */}
              <a
                href="https://zalo.me/84908412890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-surface-container-low p-4 shadow-[-3px_-3px_8px_rgba(255,255,255,0.95),4px_4px_10px_rgba(186,180,166,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-container active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-primary shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),3px_3px_6px_rgba(186,180,166,0.3)] transition-transform duration-300 group-hover:scale-105">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-primary">Zalo Priority Hotline</span>
                      <span className="inline-flex items-center rounded-full bg-secondary-fixed px-2 py-0.5 text-[10px] font-bold uppercase text-on-secondary-fixed">
                        Live
                      </span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-2 text-xs">
                      <span className="font-mono text-sm font-bold text-primary">
                        +84 908 412 890
                      </span>
                      <span className="text-on-surface-variant">
                        • {language === 'vi' ? 'Trực thuộc Điều phối viên' : 'Production Desk'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-outline shadow-[-1px_-1px_3px_#fff,1px_1px_3px_rgba(186,180,166,0.3)] transition-all group-hover:text-primary">
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    arrow_outward
                  </span>
                </div>
              </a>

              {/* Instagram Moodboard */}
              <a
                href="https://instagram.com/thaian.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-surface-container-low p-4 shadow-[-3px_-3px_8px_rgba(255,255,255,0.95),4px_4px_10px_rgba(186,180,166,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-container active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-primary shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),3px_3px_6px_rgba(186,180,166,0.3)] transition-transform duration-300 group-hover:scale-105">
                    <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-primary">
                      Instagram Studio Moodboard
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      @thaian.studio • Behind-the-scenes &amp; Stills
                    </span>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-outline shadow-[-1px_-1px_3px_#fff,1px_1px_3px_rgba(186,180,166,0.3)] transition-all group-hover:text-primary">
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    arrow_outward
                  </span>
                </div>
              </a>

              {/* Messenger Production Hub */}
              <a
                href="https://m.me/thaianstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-surface-container-low p-4 shadow-[-3px_-3px_8px_rgba(255,255,255,0.95),4px_4px_10px_rgba(186,180,166,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-container active:scale-[0.99]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-primary shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),3px_3px_6px_rgba(186,180,166,0.3)] transition-transform duration-300 group-hover:scale-105">
                    <span className="material-symbols-outlined text-[20px]">forum</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-primary">
                      Messenger Production Hub
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      AN.STUDIO Production Desk • File chia sẻ &amp; Recap
                    </span>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-outline shadow-[-1px_-1px_3px_#fff,1px_1px_3px_rgba(186,180,166,0.3)] transition-all group-hover:text-primary">
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    arrow_outward
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Project Intake Guide: Checklist */}
          <div className="rounded-3xl bg-surface p-6 shadow-neumorph-raised sm:p-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                03 • CHUẨN BỊ THÔNG TIN
              </span>
              <span className="text-xs font-bold uppercase text-secondary">MINDSET</span>
            </div>
            <h3 className="mb-4 font-serif text-xl font-bold text-primary">
              {language === 'vi'
                ? 'Những điểm tựa giúp cuộc đối thoại hiệu quả'
                : 'Key anchors for a grounded dialogue'}
            </h3>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {[
                {
                  vi: 'Timeline dự kiến ra mắt và giai đoạn tiền kỳ hiện tại.',
                  en: 'Projected premiere timeline and current pre-production status.',
                },
                {
                  vi: 'Phong cách màu sắc / mood reference mong muốn (Film/Commercial).',
                  en: 'Intended visual palette or cinematic mood references.',
                },
                {
                  vi: 'Quy mô thiết bị camera hoặc định dạng source file (ARRI/RED/Sony RAW).',
                  en: 'Camera packages or RAW source formats (ARRI/RED/Sony RAW).',
                },
                {
                  vi: 'Khung ngân sách sản xuất để studio tư vấn giải pháp tối ưu.',
                  en: 'Estimated budget framework for tailored workflow consultation.',
                },
              ].map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 rounded-xl bg-surface-container-low p-4 shadow-[inset_2px_2px_5px_rgba(180,174,160,0.25),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]"
                >
                  <span className="material-symbols-outlined mt-0.5 flex-shrink-0 text-[18px] text-primary-container">
                    check_circle
                  </span>
                  <p className="text-xs leading-relaxed text-on-surface">{pt[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Studio Base, Map & Knowledge Broadcasts (5 cols) */}
        <div className="flex flex-col gap-8 lg:col-span-5">
          {/* Studio Base & Map Card */}
          <div className="rounded-3xl bg-surface p-6 shadow-neumorph-raised sm:p-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                04 • STUDIO SUITE
              </span>
              <div className="flex items-center gap-1.5 rounded-full bg-secondary-fixed px-3 py-1 text-[11px] font-bold text-on-secondary-fixed">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
                <span>Saigon HQ</span>
              </div>
            </div>

            <h2 className="mb-1 font-serif text-2xl font-bold text-primary">
              {language === 'vi' ? 'Không gian làm việc' : 'Studio Workspace'}
            </h2>
            <p className="mb-5 text-xs leading-relaxed text-on-surface-variant">
              {language === 'vi'
                ? 'Color Grading Suite đạt chuẩn DCI-P3 & Phòng chiếu thử nghiệm kịch bản tĩnh lặng.'
                : 'DCI-P3 reference Color Grading Suite and private quiet screening chamber.'}
            </p>

            {/* Stylized Map View */}
            <div className="mb-5 rounded-2xl bg-surface-container-low p-2.5 shadow-[inset_3px_3px_6px_rgba(180,174,160,0.32),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]">
              <div
                className="relative flex h-52 w-full flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center p-3 shadow-sm"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzA91yxoM3-KacDmPvR9l08ynPh8O4Xh1R4_RN3cxPrzpxc26G18B_RUIFtBi1Kbl-PXCKA3dl0TDAeyjvLhuXGIY3WQ5T57Pj3fRnZSR5mMPDart4so7MbpEmt4GDcCvsh0V7ofJGlHKEOklrNj-2cADwNLTbSJpciiLzqLuxJVWytNQtu4zn7VykDmzzRzp6jrhfwGGhjJ3LpzB1eBtn91i3XTt7cDJ9laBKqvE')`,
                }}
              >
                <div className="flex items-center justify-between rounded-lg bg-surface/90 p-2.5 shadow-[-2px_-2px_6px_rgba(255,255,255,0.9),2px_2px_6px_rgba(186,180,166,0.35)] backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary-container">
                      location_on
                    </span>
                    <span className="text-xs font-semibold text-primary">
                      Bến Nghé, Quận 1, TP. Hồ Chí Minh
                    </span>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-secondary underline hover:text-primary"
                  >
                    Mở Map
                  </a>
                </div>
              </div>
            </div>

            {/* Studio Visit Logistics */}
            <div className="space-y-3.5 text-xs text-on-surface-variant">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-[18px] text-primary">
                  schedule
                </span>
                <div>
                  <span className="font-bold text-primary">
                    {language === 'vi'
                      ? 'Giờ tiếp khách (Theo lịch hẹn trước):'
                      : 'Visiting Hours (By Appointment):'}
                  </span>
                  <p className="mt-0.5">Thứ Hai – Thứ Sáu • 09:30 – 18:00 (Offline grading)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-[18px] text-primary">
                  local_parking
                </span>
                <div>
                  <span className="font-bold text-primary">
                    {language === 'vi' ? 'Khu vực đỗ xe:' : 'Parking Logistics:'}
                  </span>
                  <p className="mt-0.5">
                    {language === 'vi'
                      ? 'Hầm xe an ninh nội bộ, có trạm sạc xe điện cho đối tác.'
                      : 'Secured basement parking with EV fast-chargers for partners.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 text-[18px] text-primary">
                  coffee
                </span>
                <div>
                  <span className="font-bold text-primary">Quiet Tea Bar:</span>
                  <p className="mt-0.5">
                    {language === 'vi'
                      ? 'Không gian thưởng trà Shan Tuyết cổ thụ trong suốt buổi duyệt màu.'
                      : 'Ceremonial ancient Shan Tuyet tea served during private grading sessions.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Broadcast & Education Cards */}
          <div className="rounded-3xl bg-surface p-6 shadow-neumorph-raised sm:p-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                05 • CHIA SẺ TRI THỨC
              </span>
              <span className="text-xs font-bold text-secondary">FREE COURSES</span>
            </div>
            <h3 className="mb-2 font-serif text-xl font-bold text-primary">
              {language === 'vi' ? 'Thư viện điện ảnh mở' : 'Open Cinema Archive'}
            </h3>
            <p className="mb-5 text-xs leading-relaxed text-on-surface-variant">
              {language === 'vi'
                ? 'Các bài phân tích màu sắc phim điện ảnh kinh điển và kỹ thuật dựng sáng thực địa của Thái An.'
                : 'Color grading breakdowns of master cinema and field lighting micro-lessons.'}
            </p>

            <div className="space-y-4">
              {/* YouTube Channel */}
              <a
                href="https://youtube.com/@thaianstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-surface-container-low p-4 shadow-[-3px_-3px_8px_rgba(255,255,255,0.95),4px_4px_10px_rgba(186,180,166,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-container active:scale-[0.99]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface text-error shadow-[-1px_-1px_3px_#fff,1px_1px_3px_rgba(186,180,166,0.3)]">
                      <span className="material-symbols-outlined text-[14px]">smart_display</span>
                    </span>
                    <span className="text-xs font-bold text-primary">
                      YouTube • Cinema Breakdown
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-outline">18.4K Sub</span>
                </div>
                <p className="line-clamp-2 text-xs leading-relaxed text-on-surface-variant">
                  Chuỗi phân tích giải mã LUT, Color Space Transform trên DaVinci Resolve và cách
                  tái tạo chất film 16mm/35mm.
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-secondary group-hover:text-primary">
                  <span>{language === 'vi' ? 'Xem các bài giảng' : 'Explore breakdowns'}</span>
                  <span className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-x-1">
                    east
                  </span>
                </div>
              </a>

              {/* TikTok Shorts */}
              <a
                href="https://tiktok.com/@thaian.color"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-surface-container-low p-4 shadow-[-3px_-3px_8px_rgba(255,255,255,0.95),4px_4px_10px_rgba(186,180,166,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-container active:scale-[0.99]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface text-primary shadow-[-1px_-1px_3px_#fff,1px_1px_3px_rgba(186,180,166,0.3)]">
                      <span className="material-symbols-outlined text-[14px]">graphic_eq</span>
                    </span>
                    <span className="text-xs font-bold text-primary">
                      TikTok • Lighting 60s Shorts
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-outline">42.1K Follow</span>
                </div>
                <p className="line-clamp-2 text-xs leading-relaxed text-on-surface-variant">
                  Mẹo thiết lập Key Light, Fill Light, Negative Fill và kiểm soát Contrast Ratio
                  trong không gian hẹp.
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-secondary group-hover:text-primary">
                  <span>{language === 'vi' ? 'Khám phá micro-lessons' : 'View shorts'}</span>
                  <span className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-x-1">
                    east
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Soft Tactile Strict NDA Banner */}
      <section className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-surface-container-low p-6 shadow-[inset_3px_3px_8px_rgba(180,174,160,0.28),inset_-3px_-3px_8px_rgba(255,255,255,0.95)] sm:p-8 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-surface text-primary-container shadow-[-3px_-3px_8px_rgba(255,255,255,0.9),4px_4px_8px_rgba(186,180,166,0.3)]">
            <span className="material-symbols-outlined text-[24px]">verified_user</span>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-primary">
              {language === 'vi'
                ? 'Cam kết bảo mật dự án (Strict Non-Disclosure)'
                : 'Project Confidentiality Guarantee (Strict NDA)'}
            </h4>
            <p className="mt-0.5 text-xs leading-relaxed text-on-surface-variant">
              {language === 'vi'
                ? 'Tất cả treatment, kịch bản sơ khai và footage được gửi qua kênh liên hệ đều được tự động áp dụng thỏa thuận bảo mật tiêu chuẩn điện ảnh quốc tế.'
                : 'All directorial treatments, scripts, and RAW footage transferred through our studio channels are bound by international cinema confidentiality protocols.'}
            </p>
          </div>
        </div>

        <div className="flex flex-shrink-0 items-center gap-2 text-xs">
          <span className="font-mono text-on-surface-variant">SECURE CLOUD</span>
          <div className="h-2 w-2 rounded-full bg-primary-container" />
          <span className="font-mono font-bold text-primary">ENCRYPTED</span>
        </div>
      </section>
    </div>
  );
};
