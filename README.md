# AN.STUDIO — THÁI AN Portfolio (Director & Master Colorist) 🎬

Website Portfolio nghệ thuật cho **AN.STUDIO — THÁI AN**, được phát triển dựa trên ngôn ngữ thiết kế **Calm System / Serene Tactile Editorial** (kết hợp Soft Neumorphism tinh tế, bảng màu hữu cơ Warm Ivory & Forest Green, và chuẩn thẩm mỹ Editorial thanh lịch).

Dự án được xây dựng theo chuẩn **Clean Code & Type-Safety** trên nền tảng **React 18 + TypeScript + Vite + Tailwind CSS**.

---

## 🌿 Ngôn Ngữ Thiết Kế: Calm System (Serene Tactile Editorial)

- **Triết lý:** *"A softer digital space"* — Không gian số tĩnh lặng, tôn vinh độ thở của khung hình và nhịp điệu chiêm nghiệm của thị giác Đông Á.
- **Bảng màu hữu cơ:**
  - `Canvas Base (Warm Ivory)`: `#FAF9F4`
  - `Primary (Forest Green)`: `#0F5132` / Hover: `#0A3A24`
  - `Secondary (Mint Sage)`: `#B7D9C1`
  - `Tertiary (Stone Gray)`: `#D6D3C8`
  - `Text On-Surface`: `#1B1C19` / Muted: `#404942`
- **Xúc cảm Neumorphism:**
  - Đổ bóng lồi (*Soft Emboss*): `box-shadow: 6px 6px 16px rgba(180, 178, 170, 0.35), -6px -6px 16px rgba(255, 255, 255, 0.85);`
  - Đổ bóng lõm (*Debossed Inset*): `box-shadow: inset 4px 4px 8px rgba(180, 174, 160, 0.38), inset -3px -3px 7px rgba(255, 255, 255, 0.95);`
  - Nút bấm & Pill: `rounded-full` kết hợp phản hồi xúc giác (`active:scale-[0.98]`).
- **Typography:**
  - Headlines & Display: **Newsreader** (Editorial Serif thanh mảnh, tinh tế).
  - Body & Functional UI: **Plus Jakarta Sans** / **Inter** (Geometric sans-serif thân thiện).

---

## 🌟 Cấu Trúc 3 Trang Chính & Tính Năng Tương Tác

### 1. Trang Chủ & Dự Án (Work / Home — `src/pages/WorkPage.tsx`)
- **Header:** Logo AN.STUDIO, subtitle nghệ thuật, đồng hồ thời gian thực Saigon (`Saigon 03:42 PM` pulse dot), chuyển đổi ngôn ngữ (VI | EN).
- **Hero Section:** Headline *"Kể chuyện bằng ánh sáng, màu sắc và xúc cảm tĩnh lặng"*, badge hệ thống chế tác `4.2K RAW • DaVinci` (84% hiệu chuẩn 6500K), CTA *"Khám phá tác phẩm"* & *"Liên hệ hợp tác"*.
- **Category Filter:** Bộ lọc xúc giác chuyển đổi mượt mà (*Tất cả, Phim điện ảnh, Nhiếp ảnh 35mm, Chỉnh màu & Âm học, Tài liệu*) kèm đếm số lượng thời gian thực.
- **Live Search:** Ô tìm kiếm debounce thời gian thực hỗ trợ lọc theo tiêu đề, máy quay (KODAK 500T, HASSELBLAD, ARRI) và thẻ tag.
- **Dự Án Nổi Bật:**
  1. *Tĩnh Lặng Trong Chuyển Động* (Short Film • 18:40 MIN)
  2. *Sài Gòn Dạ Khúc* (Photography • Hasselblad 503CW)
  3. *Âm Sắc Nguyên Bản* (Brand Film • Spatial Audio)
  4. *Tiếng Vọng Đất Nung* (Documentary • 4K ARRI Alexa Mini LF)
  - Modal xem chi tiết tác phẩm (*ProjectDetailModal*) hỗ trợ phím ESC và backdrop blur.
- **Dải Cuộn Ảnh Ngang (Horizontal Film Reel):** Cuộn mượt các khung phim medium format (#01EXP Bàn Xoay Đất Sét, #02EXP Sương Sớm Hồ Sen, #03EXP Hiên Gỗ Đà Lạt, #04EXP Chạng Vạng Biển An Bàng).
- **Audio Widget Tương Tác:** *"Silence In Motion – Ambient Soundscape"* với visualizer sóng âm 18 vạch chuyển động, thanh tiến trình scrubbable và nút Play/Pause.
- **Hiệu Chuẩn Phòng Lab:** Công tắc gạt Neumorphic cho *Ánh sáng tự nhiên 6500K* và *Hạt Film 35mm Thực Thể*.

### 2. Giới Thiệu & Smart CV (About — `src/pages/AboutPage.tsx`)
- **Chân Dung Nghệ Sĩ:** Ảnh chân dung Thái An ánh sáng điện ảnh trong khung đất sét mộc, badge trạng thái phòng lab `REC. 709 / DCI-P3`.
- **Tuyên Ngôn:** *“Clarity feels good.”* & triết lý ánh sáng tự nhiên.
- **Thống Kê Năng Lực (Metrics Bento):** 10+ Năm kinh nghiệm, 42 Phim chọn lọc, Độ chuẩn màu ΔE < 0.8 (Netflix Post-Production Certified).
- **Smart CV Tương Tác:**
  - Nút chuyển đổi ngôn ngữ hồ sơ (*Tiếng Việt* / *English*).
  - Tải về bản PDF vector Print-Ready 14.2MB kèm mã xác thực `sha256:7f4a...9b12`.
- **Gear & Studio Environment:** Phân loại Cinema Cameras (ARRI, Cooke, EasyRig), Color Grading Suite (Flanders Scientific XMP310, DaVinci Resolve Advanced), Sound Stage Dolby Atmos 7.1.4.
- **Vinh Danh & Roster:** Giải thưởng BIFF, SGIFF, Cánh Diều Vàng; Thanh trượt xúc giác *Visual Stillness* tương tác thời gian thực; Đối tác danh giá (*Porsche, Netflix, Dior, Sony Cine*).

### 3. Liên Hệ & Kết Nối (Contact — `src/pages/ContactPage.tsx`)
- **Hộp Thư Xúc Giác:** Địa chỉ `contact@thaian.studio` nằm trong khung rãnh lõm với tính năng sao chép 1-chạm (*Copy to clipboard*) và Toast thông báo trạng thái.
- **Kênh Trao Đổi Trực Tiếp:** Zalo Priority Hotline (`+84 908 412 890`), Instagram Moodboard, Messenger Hub.
- **Checklist Chuẩn Bị:** 4 điểm tựa đối thoại (Timeline, Tone màu, Quy mô thiết bị RAW, Khung ngân sách).
- **Studio Suite & Map:** Bản đồ mini Bến Nghé Q.1, tiện ích Quiet Tea Bar (thưởng trà Shan Tuyết cổ thụ), bãi đỗ xe có trạm sạc EV.
- **Thư Viện Mở:** Kênh YouTube Cinema Breakdown & TikTok Lighting Micro-lessons.
- **Strict NDA Banner:** Cam kết bảo mật tiêu chuẩn điện ảnh quốc tế.

---

## 📱 Trải Nghiệm Responsive & Mobile First

- **Mobile (375px - 430px):**
  - Cố định **Bottom Tab Bar** (Dự án, Thái An, Liên hệ) với hiệu ứng `backdrop-blur-xl`, icon nổi dạng pill màu Forest Green đạt chuẩn vùng chạm tối thiểu 44px x 44px.
  - Các khối Bento tự động co giãn 1 cột liền mạch.
- **Desktop (1024px trở lên):**
  - Floating Top Nav Bar dạng viên thuốc nổi với đồng hồ Saigon UTC+7 trực quan.
  - Hiệu ứng chuyển động vi mô (Micro-interactions): hover lift, scale `[1.02]`, transition bóng đổ mượt mà.

---

## 📁 Cấu Trúc Mã Nguồn

```text
src/
├── components/
│   ├── calm/              # UI Neumorphic (AudioPlayerWidget, EmailCopyField, RangeSlider, ProjectDetailModal)
│   ├── common/            # ErrorBoundary, Button, Card, Badge, Input, Modal
│   └── layout/            # CalmHeader, CalmFooter, MobileTabBar
├── context/               # Quản lý State đa ngữ (VI/EN) và Navigation tab
├── data/                  # Dữ liệu tác phẩm, thiết bị, giải thưởng, film reel (portfolioData.ts)
├── hooks/                 # Custom hooks (usePortfolio, useDebounce, useLocalStorage, useTheme)
├── pages/                 # 3 Màn hình chính (WorkPage, AboutPage, ContactPage)
├── styles/                # CSS toàn cục, Tailwind directives, Material Symbols (index.css)
├── types/                 # Type-Safety definitions (portfolio.ts, index.ts)
├── utils/                 # cn utility (twMerge + clsx)
├── App.tsx                # Root component
└── main.tsx               # Entry point
```

---

## 🚀 Hướng Dẫn Chạy Dự Án

```bash
# 1. Khởi động môi trường phát triển (Development Server tại http://localhost:3000)
npm run dev

# 2. Kiểm tra type TypeScript
npm run typecheck

# 3. Kiểm tra và sửa lỗi cú pháp bằng ESLint
npm run lint

# 4. Tự động format code với Prettier
npm run format

# 5. Build mã nguồn production tối ưu
npm run build
```
