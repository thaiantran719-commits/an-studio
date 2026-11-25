export const APP_CONFIG = {
  appName: 'CleanCode Web',
  version: '1.0.0',
  description: 'Project mẫu đạt chuẩn quy tắc Clean Code & Best Practices',
  author: 'Clean Code Team',
} as const;

export const STORAGE_KEYS = {
  THEME: 'cc_theme',
  PROJECTS: 'cc_projects_data',
} as const;

export const CATEGORIES = [
  'Tất cả',
  'Frontend Architecture',
  'Components & UI',
  'API & Services',
  'Testing & Quality',
] as const;

export const STATUS_OPTIONS = [
  { value: 'all', label: 'Tất cả trạng thái' },
  { value: 'active', label: 'Đang triển khai' },
  { value: 'completed', label: 'Hoàn thành' },
  { value: 'pending', label: 'Chờ xử lý' },
] as const;
