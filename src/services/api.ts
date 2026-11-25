import type { ApiResponse, MetricStat, ProjectItem } from '@/types';
import { INITIAL_METRICS, INITIAL_PROJECTS } from './mockData';

/**
 * Service Layer: Đại diện cho tầng giao tiếp dữ liệu chuẩn
 * Giúp tách rời hoàn toàn UI khỏi logic gọi API hoặc Database.
 */
class ProjectService {
  private projects: ProjectItem[] = [...INITIAL_PROJECTS];

  /**
   * Lấy danh sách metrics thống kê
   */
  async getMetrics(): Promise<ApiResponse<MetricStat[]>> {
    await this.simulateDelay(150);
    return {
      success: true,
      data: INITIAL_METRICS,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Lấy danh sách projects có hỗ trợ lọc và tìm kiếm
   */
  async getProjects(params?: {
    search?: string;
    category?: string;
    status?: string;
  }): Promise<ApiResponse<ProjectItem[]>> {
    await this.simulateDelay(200);

    let result = [...this.projects];

    if (params?.search) {
      const keyword = params.search.toLowerCase().trim();
      result = result.filter(
        item =>
          item.title.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword) ||
          item.tags.some(tag => tag.toLowerCase().includes(keyword))
      );
    }

    if (params?.category && params.category !== 'Tất cả') {
      result = result.filter(item => item.category === params.category);
    }

    if (params?.status && params.status !== 'all') {
      result = result.filter(item => item.status === params.status);
    }

    return {
      success: true,
      data: result,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Thêm mới một dự án theo quy chuẩn
   */
  async createProject(
    payload: Omit<ProjectItem, 'id' | 'updatedAt' | 'codeQualityScore'>
  ): Promise<ApiResponse<ProjectItem>> {
    await this.simulateDelay(250);

    const newProject: ProjectItem = {
      ...payload,
      id: `proj-${Date.now()}`,
      codeQualityScore: 96,
      updatedAt: new Date().toISOString().split('T')[0] ?? '2026-11-25',
    };

    this.projects = [newProject, ...this.projects];

    return {
      success: true,
      data: newProject,
      message: 'Tạo mới dự án thành công!',
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Giả lập độ trễ mạng thực tế
   */
  private simulateDelay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const projectService = new ProjectService();
