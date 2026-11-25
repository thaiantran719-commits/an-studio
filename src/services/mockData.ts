import type { MetricStat, ProjectItem } from '@/types';

export const INITIAL_METRICS: MetricStat[] = [
  {
    id: 'm1',
    label: 'Chỉ số Tuân thủ Clean Code',
    value: '98.5%',
    change: '+3.2%',
    trend: 'up',
    iconName: 'ShieldCheck',
  },
  {
    id: 'm2',
    label: 'Mô-đun Kiến trúc chuẩn',
    value: '16 Modules',
    change: 'Đạt chuẩn 100%',
    trend: 'neutral',
    iconName: 'FolderGit2',
  },
  {
    id: 'm3',
    label: 'Tốc độ Build Vite',
    value: '180ms',
    change: '-45ms',
    trend: 'up',
    iconName: 'Sparkles',
  },
  {
    id: 'm4',
    label: 'Trạng thái Codebase',
    value: 'Production Ready',
    change: '0 Warning',
    trend: 'up',
    iconName: 'Activity',
  },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Atomic Component Architecture',
    category: 'Components & UI',
    description:
      'Thiết kế thành phần giao diện theo nguyên lý SRP (Single Responsibility) và tách biệt logic khỏi UI.',
    status: 'completed',
    codeQualityScore: 99,
    tags: ['React', 'Atomic Design', 'Tailwind'],
    updatedAt: '2026-11-20',
  },
  {
    id: 'proj-02',
    title: 'TypeScript Strict Type Checking',
    category: 'Frontend Architecture',
    description:
      'Cấu hình bộ luật kiểu dữ liệu chặt chẽ, không sử dụng `any`, quản lý props và response API an toàn.',
    status: 'completed',
    codeQualityScore: 98,
    tags: ['TypeScript', 'Strict Mode', 'Generics'],
    updatedAt: '2026-11-22',
  },
  {
    id: 'proj-03',
    title: 'ESLint Flat Config + Prettier Sync',
    category: 'Testing & Quality',
    description:
      'Tự động định dạng code và kiểm tra lỗi cú pháp theo quy tắc quốc tế, hỗ trợ Format-on-Save trong VS Code.',
    status: 'completed',
    codeQualityScore: 100,
    tags: ['ESLint 9', 'Prettier', 'Code Style'],
    updatedAt: '2026-11-23',
  },
  {
    id: 'proj-04',
    title: 'API Client Service Layer Pattern',
    category: 'API & Services',
    description:
      'Lớp dịch vụ trung gian chuẩn hoá việc gọi API, tự động xử lý ngoại lệ (Try/Catch) và ánh xạ dữ liệu kiểu mạnh.',
    status: 'active',
    codeQualityScore: 95,
    tags: ['Service Layer', 'Async/Await', 'Error Handling'],
    updatedAt: '2026-11-24',
  },
  {
    id: 'proj-05',
    title: 'Custom Hooks Logic Reusability',
    category: 'Frontend Architecture',
    description:
      'Tái sử dụng logic nghiệp vụ qua các Custom Hooks: useTheme, useLocalStorage, useDebounce tách biệt hoàn toàn.',
    status: 'active',
    codeQualityScore: 97,
    tags: ['Hooks', 'State Management', 'Clean Code'],
    updatedAt: '2026-11-25',
  },
];
