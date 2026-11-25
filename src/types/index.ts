/**
 * Định nghĩa các kiểu dữ liệu dùng chung trong toàn bộ dự án
 */

export type Theme = 'light' | 'dark';

export type ProjectStatus = 'active' | 'completed' | 'pending';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  status: ProjectStatus;
  codeQualityScore: number;
  tags: string[];
  updatedAt: string;
}

export interface MetricStat {
  id: string;
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  iconName: 'ShieldCheck' | 'FolderGit2' | 'Sparkles' | 'Activity';
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}

export interface FilterOptions {
  search: string;
  category: string;
  status: 'all' | ProjectStatus;
}
