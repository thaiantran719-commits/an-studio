import type {
  Project,
  FilmReelItem,
  GearCategory,
  AwardItem,
  ClientItem,
  StatMetric,
} from '@/types/portfolio';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'silence-in-motion',
    number: '01',
    title: {
      vi: 'Tĩnh Lặng Trong Chuyển Động',
      en: 'Silence In Motion',
    },
    category: 'film',
    categoryLabel: {
      vi: 'Phim điện ảnh',
      en: 'Cinema Feature',
    },
    typeBadge: {
      vi: 'SHORT FILM • NARRATIVE',
      en: 'SHORT FILM • NARRATIVE',
    },
    cameraMeta: 'KODAK 500T 35MM',
    durationMeta: {
      vi: '18:40 PHÚT',
      en: '18:40 MIN',
    },
    statusBadge: {
      vi: 'FESTIVAL SELECTION 2024',
      en: 'FESTIVAL SELECTION 2024',
    },
    description: {
      vi: 'Khảo sát hình ảnh về sự im ắng tại hạ lưu sông Tiền. Nhịp phim dài, bố cục đối xứng tĩnh và quang phổ màu lục lam đất nung đặc trưng của miền duyên hải.',
      en: 'A quiet visual study of stillness on the lower Tien River. Long-take cadence, tranquil symmetrical framing, and a terracotta-sage spectrum unique to the coastal wetlands.',
    },
    tags: {
      vi: ['Phim ngắn', 'Đạo diễn & Colorist'],
      en: ['Short Film', 'Director & Colorist'],
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7UFN-ci-YzivZYoIq7cSndNKWbljxAEXO8CmMqCbQ3EJ3bYZNxdyM8oc8n___TIph1NPARx5EgsYWgYN8o2lGM7VZgv0F_HVuR1HgcEk8MMGmAkybGXZj00MWQzqzltIC-3JphTxOlE4xE2ayRiPv8J1D_jHqH95OdVetxutplpIhXmQt9JxGhiJBiInmT0TivlFTb5H4I2BiXwkaTy-LiQ-sClv2vMTuQtp2ZpQ',
    imageAlt: 'Quiet poetic cinematic still of a wooden boat on misty emerald river at dawn',
  },
  {
    id: 'saigon-nocturne',
    number: '02',
    title: {
      vi: 'Sài Gòn Dạ Khúc',
      en: 'Saigon Nocturne',
    },
    category: 'photo',
    categoryLabel: {
      vi: 'Nhiếp ảnh 35mm',
      en: 'Medium Format Photo',
    },
    typeBadge: {
      vi: 'PHOTOGRAPHY • MEDIUM FORMAT',
      en: 'PHOTOGRAPHY • MEDIUM FORMAT',
    },
    cameraMeta: 'HASSELBLAD 503CW',
    durationMeta: {
      vi: '12 KHUNG HÌNH',
      en: '12 FRAMES',
    },
    statusBadge: {
      vi: 'TRIỂN LÃM ĐƠN',
      en: 'SOLO EXHIBITION',
    },
    description: {
      vi: 'Bộ ảnh đêm tái hiện không khí ẩm mát và gam màu đèn sợi đốt ấm áp len lỏi qua các cư xá cũ tại Chợ Lớn. Khắc họa vẻ đẹp nhàn hạ khi thành phố ngủ yên.',
      en: 'A nocturnal photo monograph capturing the cool humidity and warm tungsten amber glowing across aged Cho Lon tenements. Revealing the serene stillness when the city rests.',
    },
    tags: {
      vi: ['Ảnh nghệ thuật', 'Bản in thủ công'],
      en: ['Fine Art Print', 'Darkroom Process'],
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Px-WpPwmEs1yOkxKrexHl27Wv56gpunqERPM_uGs498uBs3gXVMpIjlbw88yvxl-BKr2Djoqf0FA_Jyk6_B6VVfrTi2NV95IB51xaY4X37GqYKmCQjny5ofrSc70LWFXd1l_e-eVkCuiKqYKB2Wx13U1R1LwKN7HKk2PHo2j6Wdu0apXUBzKtrOKfdKGy2g9y52vxEebpEuSDHtduxkYcS4fNvn7P3bzcfa0JN0',
    imageAlt: 'Nocturnal medium format photograph of an old quiet alleyway in Cho Lon Saigon',
  },
  {
    id: 'raw-resonance',
    number: '03',
    title: {
      vi: 'Âm Sắc Nguyên Bản',
      en: 'Raw Resonance',
    },
    category: 'color',
    categoryLabel: {
      vi: 'Chỉnh màu & Âm học',
      en: 'Color & Acoustics',
    },
    typeBadge: {
      vi: 'BRAND FILM • ACOUSTICS',
      en: 'BRAND FILM • ACOUSTICS',
    },
    cameraMeta: 'COMMERCIAL • SOUND DESIGN',
    durationMeta: {
      vi: 'ÂM HỌC KHÔNG GIAN',
      en: 'SPATIAL AUDIO',
    },
    statusBadge: {
      vi: 'HỢP TÁC TOÀN CẦU',
      en: 'GLOBAL COLLABORATION',
    },
    description: {
      vi: 'Thiết kế màu sắc và định vị thị giác cho chiến dịch tai nghe phòng thu hữu cơ. Cân bằng nhiệt độ màu giữa bề mặt gỗ sồi mộc và nhôm phay sương mờ.',
      en: 'Color grading and sensory brand direction for artisanal acoustic monitors. Balancing color temperatures between raw unvarnished oak and matte frosted aluminum.',
    },
    tags: {
      vi: ['Chỉnh màu', 'Âm học kiến trúc'],
      en: ['Master Color', 'Architectural Sound'],
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMPUiue9raiK6oSYrp5wpKoYbvj_6abDBAxX_yLdrXSYx7SigeWX82WlctLdn6xbHUbB3XB4jvbMhjVv0ENjy93t90X0WOjMa7unLwAFh7mz-3qu9EyB42OrnJyLN4dpMkAeFdfdTbBmGxXy1NZf_VSgYntGIGEeBRIrXekzmIhTmwEy0mNBM2-Xp70F4ScOt2B1hdmRR6XEuGHEchKHXuXHnYNZ79K6cjlLcudVA',
    imageAlt: 'Minimal architectural sound installation space with acoustic panels',
  },
  {
    id: 'terracotta-echoes',
    number: '04',
    title: {
      vi: 'Tiếng Vọng Đất Nung',
      en: 'Terracotta Echoes',
    },
    category: 'doc',
    categoryLabel: {
      vi: 'Tài liệu',
      en: 'Documentary',
    },
    typeBadge: {
      vi: 'DOCUMENTARY • HERITAGE',
      en: 'DOCUMENTARY • HERITAGE',
    },
    cameraMeta: '4K ARRI ALEXA MINI LF',
    durationMeta: {
      vi: 'PHIM TÀI LIỆU',
      en: 'DOCUMENTARY',
    },
    statusBadge: {
      vi: 'BẢO TỒN VĂN HÓA',
      en: 'CULTURAL HERITAGE',
    },
    description: {
      vi: 'Hành trình ghi chép di sản vương quốc lò gạch nung Mang Thít. Bản giao hưởng giữa đất sét thô mộc, ánh sáng lọt mái vòm và hơi nóng của lửa than trăm năm.',
      en: 'An immersive cinematic documentation of the Mang Thit red brick beehive kiln kingdom. A symphony of raw baked earth, dome daylight slits, and centenary kiln smoke.',
    },
    tags: {
      vi: ['Phim tài liệu', 'Bảo tồn di sản'],
      en: ['Heritage Doc', 'Cultural Archive'],
    },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpmr2n4NIVEPOK_6mKUcg_0_wPLjXQDbdveletgwtcvgVnNEu47AfHf3kufuKhVFHEXAeezk85Ui_x1JwI73Hdl3aW1wS_WCptoObIec5VW_h2-q4HptvuvguQR7x7RweIODOjJS7YOkFUS5kV_xESjGkTl7fVcXJpWld3JAC8GV3kE7V6cvfcRUw-c6g4vAGDYzls9-ex_xp0aa879xs3i5byy0n1CkvGRZOHrIY',
    imageAlt: 'Earthy documentary shot of traditional red brick beehive kilns in Mang Thit',
  },
];

export const FILM_REEL_ITEMS: FilmReelItem[] = [
  {
    id: 'reel-01',
    expNumber: '#01 EXP',
    title: {
      vi: 'Bàn Xoay Đất Sét',
      en: 'Potter’s Wet Clay',
    },
    cameraLens: 'Leica M6 • Summicron 35',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9g2iy6oZjd9fSs3-TIcMBIYhnLw5iGtFiA0Z1b77bhrJbVapicfscjhf5iF7fIK0oKZjJpsvE2ZIbEdXug9_T_EMScQFuxmCAy4BJlwdI8ZmInWP-6gbvgz1UCwzyzGq_4CQnDeAiaXETdFoImN9VnKS-fyenyqfU998U87l5T_rB_9br8SzZa5J-TRLXoQ8lrLj0mdYtWtT7lliHGS2xp2H20EQyXRdo8MoDVrA',
    imageAlt: 'Medium format street portrait of a potter shaping wet clay',
  },
  {
    id: 'reel-02',
    expNumber: '#02 EXP',
    title: {
      vi: 'Sương Sớm Hồ Sen',
      en: 'Morning Lotus Mist',
    },
    cameraLens: 'Fuji GA645 • Portra 400',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaAE86291DXFrq74dLkdiM5pDUzaHa6CISgOPU3sYlTpvDG6ix4kaiS7jpsz6ZlfHCb_JHH1V0PS7UVxQ_rEfYuVYxdsnd0kw1OQXoqwaMJ-sZDJLJSeFvA5ry37lzRIOdvJSmH6KAWCpOHSXuGsLJfkgXr5RwZ_WD7_NyiydmU7X8FmvZUSeo1yg8p9Nxri_EqsZ7lfdQF5EJp5NUVQNHZ7K1cJEBk_hY54067XI',
    imageAlt: 'Atmospheric landscape of misty morning lotus pond in Hue',
  },
  {
    id: 'reel-03',
    expNumber: '#03 EXP',
    title: {
      vi: 'Hiên Gỗ Đà Lạt',
      en: 'Dalat Temple Veranda',
    },
    cameraLens: 'Mamiya 7II • 80mm f/4',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCNFQXSnMnpxqdm8DDGZzSAJSkNlz4aXE7Iz0S9v4IttDU-N7DXaRP13XGu1GlPRSRuxoH8dwCLIwiinlbhL6z7GwOzQdnEKazB64kcelTD5GNJ4KO34f0KrOwJiOSqK6pr0Kx-XWELaFBaZi5mXsA5gJvFcuMRkRE7K63jsVQ_VpQ-8HjVTimmDrSOMK-0jxXUWq1I3FlnDvAc7WXQcrXOFtN2SokUaEdsoWsGwvY',
    imageAlt: 'Quiet architectural interior details of a wooden temple veranda in Dalat',
  },
  {
    id: 'reel-04',
    expNumber: '#04 EXP',
    title: {
      vi: 'Chạng Vạng Biển An Bàng',
      en: 'An Bang Twilight Sea',
    },
    cameraLens: 'Pentax 67 • Ektar 100',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA39m7ysnm9toY_VnijQSLXrKKXcqUNztDY0ih9agMY55hhJReAcED-2f0rP0Km92x2guqvkQRLmNYGFvaZxoREPHsFmoIpbDUNlrT35sTIc2BaAwxJR7DNBP9Gss0_nbfZ-a7dBbcCkeg_apRFP1_G3VJHXRni_CrPIgwNgnnqgl1MMaraRDsjto9U4qpTzXzdR8wlmuQ-MFf1FNmXNaTQN_0P5P5b-cu6sMU6BzU',
    imageAlt: 'Calm seascape at An Bang beach Hoi An at twilight',
  },
];

export const STAT_METRICS: StatMetric[] = [
  {
    label: {
      vi: 'Kinh nghiệm thực tiễn',
      en: 'Industry Experience',
    },
    value: '10+ Năm',
    description: {
      vi: 'Hoạt động liên tục trong ngành điện ảnh và quảng cáo quốc tế.',
      en: 'Continuous craft in feature cinema and international commercial film.',
    },
    percentage: 95,
    iconName: 'history_edu',
  },
  {
    label: {
      vi: 'Dự án chọn lọc',
      en: 'Curated Works',
    },
    value: '42 Phim',
    description: {
      vi: 'Tác phẩm điện ảnh dài, phim tài liệu nghệ thuật & TVC cao cấp.',
      en: 'Feature narrative films, fine-art documentaries & premium commercials.',
    },
    percentage: 84,
    iconName: 'movie_filter',
  },
  {
    label: {
      vi: 'Độ chuẩn xác màu',
      en: 'Color Precision',
    },
    value: 'ΔE < 0.8',
    description: {
      vi: 'Chuẩn kiểm định gắt gao Netflix Post-Production Certified & DCI.',
      en: 'Rigorous calibration matching Netflix Post-Production Certified & DCI.',
    },
    percentage: 99,
    iconName: 'verified',
  },
];

export const GEAR_CATEGORIES: GearCategory[] = [
  {
    title: {
      vi: 'Cinema Cameras',
      en: 'Cinema Cameras',
    },
    description: {
      vi: 'Hệ thống máy quay trường quay có độ nhạy sáng tự nhiên, bảo toàn chất lượng da (skin-tones) và dải chuyển mượt.',
      en: 'Camera packages engineered for organic dynamic roll-off and authentic human skin tone preservation.',
    },
    iconName: 'videocam',
    items: [
      { name: 'ARRI Alexa Mini LF', spec: 'Large Format 4.5K' },
      { name: 'Cooke Panchro/i Classic', spec: 'Full Set T2.2' },
      { name: 'EasyRig Vario 5 + Flowcine', spec: 'Serene Arm' },
    ],
  },
  {
    title: {
      vi: 'Color Grading Suite',
      en: 'Color Grading Suite',
    },
    description: {
      vi: 'Trang bị bàn điều khiển cơ học DaVinci chính hãng và màn hình chuyên dụng chuẩn mastering truyền hình quốc tế.',
      en: 'Tactile physical control surfaces paired with reference mastering displays certified for DCI-P3.',
    },
    iconName: 'palette',
    items: [
      { name: 'Flanders Scientific XMP310', spec: 'QD-OLED 1,000 Nits' },
      { name: 'DaVinci Resolve Advanced', spec: 'Triple Panel System' },
      { name: 'Mac Studio M2 Ultra', spec: '192GB Unified Memory' },
    ],
  },
  {
    title: {
      vi: 'Sound Stage & Acoustics',
      en: 'Sound Stage & Acoustics',
    },
    description: {
      vi: 'Kiểm định nhịp điệu hình ảnh hòa quyện cùng âm học không gian đa chiều, hạn chế tối đa nhiễu âm ngoài buồng máy.',
      en: 'Acoustic treatment ensuring visual pacing breathes organically with spatial audio monitoring.',
    },
    iconName: 'graphic_eq',
    items: [
      { name: 'Dolby Atmos 7.1.4', spec: 'Genelec The Ones' },
      { name: 'Vicoustic Wavewood Ultra', spec: 'Diffuser Panels' },
      { name: 'Reference Room Ambience', spec: 'NC-15 Certified Noise' },
    ],
  },
];

export const FESTIVAL_AWARDS: AwardItem[] = [
  {
    festival: 'Busan International Film Festival (BIFF)',
    honor: {
      vi: 'Đề cử Đạo diễn hình ảnh xuất sắc nhất • Phim “Vùng Nước Lặng”',
      en: 'Best Cinematography Nomination • Feature: “Vùng Nước Lặng”',
    },
    year: '2023',
  },
  {
    festival: 'Singapore International Film Festival (SGIFF)',
    honor: {
      vi: 'Giải vinh danh đặc biệt Chỉnh màu phim truyện Châu Á',
      en: 'Asian Feature Film Special Mention for Master Color',
    },
    year: '2022',
  },
  {
    festival: 'Cánh Diều Vàng • Vietnam Film Festival',
    honor: {
      vi: 'Xuất sắc nhất Đạo diễn hình ảnh (DoP) • Phim truyện điện ảnh',
      en: 'Best Cinematography (DoP) • Feature Film',
    },
    year: '2020',
  },
];

export const CLIENT_ROSTER: ClientItem[] = [
  { name: 'PORSCHE', scope: 'Commercial Cine Color' },
  { name: 'NETFLIX', scope: 'Original Series Grading' },
  { name: 'DIOR', scope: 'Maison Documentary & Film' },
  { name: 'SONY CINE', scope: 'VENICE 2 Ambassador & Lab' },
];
