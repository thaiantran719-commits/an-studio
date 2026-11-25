import { useState, useEffect, useMemo, useTransition, type FormEvent } from 'react';
import {
  ShieldCheck,
  FolderGit2,
  Sparkles,
  Activity,
  Search,
  Filter,
  Plus,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Clock,
  Code2,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { Input } from '@/components/common/Input';
import { Modal } from '@/components/common/Modal';
import { useDebounce } from '@/hooks/useDebounce';
import { projectService } from '@/services/api';
import { CATEGORIES, STATUS_OPTIONS } from '@/constants';
import type { MetricStat, ProjectItem, ProjectStatus } from '@/types';

export interface DashboardPageProps {
  isAddModalOpen: boolean;
  onCloseAddModal: () => void;
}

export function DashboardPage({ isAddModalOpen, onCloseAddModal }: DashboardPageProps) {
  // State quản lý dữ liệu
  const [metrics, setMetrics] = useState<MetricStat[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [, startTransition] = useTransition();

  // State bộ lọc
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const debouncedSearch = useDebounce(searchTerm, 250);

  // Form state cho modal thêm mới
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<string>('Frontend Architecture');
  const [newDescription, setNewDescription] = useState('');
  const [newStatus, setNewStatus] = useState<ProjectStatus>('active');
  const [newTags, setNewTags] = useState('React, TypeScript');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Tải dữ liệu ban đầu
  useEffect(() => {
    let isMounted = true;

    async function loadInitialData() {
      try {
        setIsLoading(true);
        const [metricsRes, projectsRes] = await Promise.all([
          projectService.getMetrics(),
          projectService.getProjects(),
        ]);

        if (isMounted) {
          setMetrics(metricsRes.data);
          setProjects(projectsRes.data);
        }
      } catch (err) {
        console.error('Lỗi khi tải dữ liệu ban đầu:', err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadInitialData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Lọc dữ liệu hiển thị dựa trên search và filter
  const filteredProjects = useMemo(() => {
    return projects.filter(item => {
      const matchSearch =
        debouncedSearch === '' ||
        item.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        item.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(debouncedSearch.toLowerCase()));

      const matchCategory = selectedCategory === 'Tất cả' || item.category === selectedCategory;

      const matchStatus = selectedStatus === 'all' || item.status === selectedStatus;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [projects, debouncedSearch, selectedCategory, selectedStatus]);

  // Xử lý tạo mới project
  const handleCreateProject = async (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      setFormError('Vui lòng nhập tên module / dự án');
      return;
    }
    if (!newDescription.trim()) {
      setFormError('Vui lòng nhập mô tả chi tiết');
      return;
    }

    try {
      setIsSubmitting(true);
      setFormError('');

      const tagsArray = newTags
        .split(',')
        .map(t => t.trim())
        .filter(Boolean);

      const res = await projectService.createProject({
        title: newTitle.trim(),
        category: newCategory,
        description: newDescription.trim(),
        status: newStatus,
        tags: tagsArray,
      });

      startTransition(() => {
        setProjects(prev => [res.data, ...prev]);
      });

      // Reset form
      setNewTitle('');
      setNewDescription('');
      setNewTags('React, TypeScript');
      onCloseAddModal();
    } catch (err) {
      setFormError('Có lỗi xảy ra khi lưu dữ liệu. Vui lòng thử lại.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderMetricIcon = (iconName: MetricStat['iconName']) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="h-5 w-5 text-emerald-500" />;
      case 'FolderGit2':
        return <FolderGit2 className="text-primary-500 h-5 w-5" />;
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-amber-500" />;
      case 'Activity':
        return <Activity className="h-5 w-5 text-indigo-500" />;
    }
  };

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'completed':
        return (
          <Badge variant="success" size="sm">
            <CheckCircle2 className="mr-1 h-3 w-3" /> Hoàn thành
          </Badge>
        );
      case 'active':
        return (
          <Badge variant="info" size="sm">
            <Activity className="mr-1 h-3 w-3" /> Đang triển khai
          </Badge>
        );
      case 'pending':
        return (
          <Badge variant="warning" size="sm">
            <Clock className="mr-1 h-3 w-3" /> Chờ xử lý
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner giới thiệu chuẩn quy tắc code */}
      <section className="via-primary-950 relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white shadow-lg sm:p-8">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="text-primary-200 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Tiêu chuẩn kiến trúc Website chuyên nghiệp</span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Template Chuẩn Quy Tắc Code & Clean Architecture
          </h1>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Dự án được cấu trúc bài bản theo tiêu chuẩn quốc tế: React 18, TypeScript Strict Mode,
            Tailwind CSS, ESLint 9 Flat Config, Prettier và Service Layer Pattern. Sẵn sàng phát
            triển website quy mô lớn mà không lo nợ kỹ thuật (technical debt).
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Type Safety 100%
            </span>
            <span className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Không dùng `any`
            </span>
            <span className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Tách biệt Logic & UI
            </span>
            <span className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Auto-Format on Save
            </span>
          </div>
        </div>
      </section>

      {/* Grid thẻ thống kê chất lượng mã nguồn */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(metric => (
          <Card key={metric.id} hoverEffect className="relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {metric.label}
              </span>
              <div className="rounded-lg bg-slate-100 p-2 dark:bg-slate-700/50">
                {renderMetricIcon(metric.iconName)}
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                {metric.value}
              </div>
              <div className="mt-1 flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span>{metric.change}</span>
              </div>
            </div>
          </Card>
        ))}
      </section>

      {/* Bộ lọc và Tìm kiếm */}
      <section className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between dark:border-slate-800 dark:bg-slate-900/60">
        <div className="max-w-md flex-1">
          <Input
            placeholder="Tìm kiếm module, thẻ tag hoặc chức năng..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            leftIcon={<Search className="h-4 w-4" />}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              Danh mục:
            </span>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="focus:border-primary-500 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              Trạng thái:
            </span>
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="focus:border-primary-500 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {STATUS_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {(searchTerm || selectedCategory !== 'Tất cả' || selectedStatus !== 'all') && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Tất cả');
                setSelectedStatus('all');
              }}
            >
              Đặt lại
            </Button>
          )}
        </div>
      </section>

      {/* Danh sách các mô-đun chuẩn mẫu */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Danh Sách Mô-đun Mã Nguồn ({filteredProjects.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Các thành phần cấu trúc đã được chuẩn hóa theo quy ước lập trình
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map(n => (
              <div
                key={n}
                className="h-44 animate-pulse rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
              />
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
            <AlertCircle className="mb-2 h-10 w-10 text-slate-400" />
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Không tìm thấy mô-đun nào phù hợp
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Hãy thử thay đổi từ khóa tìm kiếm hoặc đặt lại bộ lọc.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map(item => (
              <Card key={item.id} hoverEffect className="flex flex-col justify-between">
                <div>
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <span className="dark:text-primary-400 text-primary-600 text-[11px] font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    {getStatusBadge(item.status)}
                  </div>

                  <CardTitle className="line-clamp-1 text-base font-bold">{item.title}</CardTitle>
                  <CardDescription className="mt-2 line-clamp-3 text-xs leading-relaxed">
                    {item.description}
                  </CardDescription>
                </div>

                <div className="mt-5 space-y-3 border-t border-slate-100 pt-3 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Điểm chất lượng: {item.codeQualityScore}/100
                    </span>
                    <span>Cập nhật: {item.updatedAt}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Cheatsheet Bảng quy chuẩn lập trình Clean Code */}
      <section>
        <Card className="border-indigo-100 bg-gradient-to-br from-white to-indigo-50/30 dark:border-indigo-950/60 dark:from-slate-900 dark:to-indigo-950/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <CardTitle>Bảng Tóm Tắt Quy Chuẩn Lập Trình (Coding Standards)</CardTitle>
            </div>
            <CardDescription>
              Các nguyên tắc cốt lõi được áp dụng nhất quán trong toàn bộ mã nguồn của dự án này.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 text-xs md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-1.5 rounded-lg border border-slate-200 bg-white/80 p-3 dark:border-slate-700/60 dark:bg-slate-800/80">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                  <Code2 className="text-primary-500 h-4 w-4" />
                  Quy Tắc Đặt Tên (Naming)
                </div>
                <ul className="list-inside list-disc space-y-1 text-slate-600 dark:text-slate-400">
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300">PascalCase</strong>:
                    Component, Interface, Type (`Button.tsx`, `UserProps`).
                  </li>
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300">camelCase</strong>: Biến,
                    hàm, hook (`useTheme`, `handleSubmit`).
                  </li>
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300">UPPER_SNAKE</strong>:
                    Hằng số (`API_URL`, `STORAGE_KEYS`).
                  </li>
                </ul>
              </div>

              <div className="space-y-1.5 rounded-lg border border-slate-200 bg-white/80 p-3 dark:border-slate-700/60 dark:bg-slate-800/80">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  TypeScript & Type Safety
                </div>
                <ul className="list-inside list-disc space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Nghiêm cấm lạm dụng kiểu `any`.</li>
                  <li>Mọi Props của Component đều phải có Interface/Type rõ ràng.</li>
                  <li>Tận dụng Generics cho các hàm tái sử dụng (`ApiResponse&lt;T&gt;`).</li>
                </ul>
              </div>

              <div className="space-y-1.5 rounded-lg border border-slate-200 bg-white/80 p-3 dark:border-slate-700/60 dark:bg-slate-800/80">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                  <FolderGit2 className="h-4 w-4 text-amber-500" />
                  Phân Chia Thư Mục (Structure)
                </div>
                <ul className="list-inside list-disc space-y-1 text-slate-600 dark:text-slate-400">
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300">components/</strong>: UI
                    dùng chung & layout.
                  </li>
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300">hooks/</strong>: Tách
                    logic nghiệp vụ tái sử dụng.
                  </li>
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300">services/</strong>: Lớp
                    gọi API & xử lý dữ liệu.
                  </li>
                  <li>
                    <strong className="text-slate-700 dark:text-slate-300">utils/</strong>: Hàm
                    helper tính toán độc lập.
                  </li>
                </ul>
              </div>

              <div className="space-y-1.5 rounded-lg border border-slate-200 bg-white/80 p-3 dark:border-slate-700/60 dark:bg-slate-800/80">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                  Git Commit Convention
                </div>
                <ul className="list-inside list-disc space-y-1 text-slate-600 dark:text-slate-400">
                  <li>
                    <code className="rounded bg-slate-100 px-1 dark:bg-slate-700">feat:</code> Thêm
                    tính năng mới.
                  </li>
                  <li>
                    <code className="rounded bg-slate-100 px-1 dark:bg-slate-700">fix:</code> Sửa
                    lỗi bug.
                  </li>
                  <li>
                    <code className="rounded bg-slate-100 px-1 dark:bg-slate-700">refactor:</code>{' '}
                    Tối ưu cấu trúc code.
                  </li>
                  <li>
                    <code className="rounded bg-slate-100 px-1 dark:bg-slate-700">docs:</code> Cập
                    nhật tài liệu README.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Modal Thêm Module Mới */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={onCloseAddModal}
        title="Thêm Module / Chức Năng Mới"
        description="Điền thông tin thành phần mới tuân thủ quy chuẩn mã nguồn của dự án."
        footer={
          <>
            <Button variant="ghost" size="sm" onClick={onCloseAddModal}>
              Hủy bỏ
            </Button>
            <Button
              variant="primary"
              size="sm"
              isLoading={isSubmitting}
              leftIcon={<Plus className="h-4 w-4" />}
              onClick={handleCreateProject}
            >
              Lưu Module
            </Button>
          </>
        }
      >
        <form onSubmit={handleCreateProject} className="space-y-4">
          {formError && (
            <div className="rounded-lg bg-rose-50 p-3 text-xs text-rose-600 dark:bg-rose-950/40 dark:text-rose-400">
              {formError}
            </div>
          )}

          <Input
            label="Tên Module / Tính năng"
            placeholder="Ví dụ: Authentication Context Provider"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            required
          />

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Danh mục
            </label>
            <select
              value={newCategory}
              onChange={e => setNewCategory(e.target.value)}
              className="focus:border-primary-500 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              {CATEGORIES.filter(c => c !== 'Tất cả').map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Mô tả chi tiết & Nguyên lý áp dụng
            </label>
            <textarea
              rows={3}
              placeholder="Mô tả mục đích, nguyên lý SRP, pattern áp dụng..."
              value={newDescription}
              onChange={e => setNewDescription(e.target.value)}
              className="focus:border-primary-500 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Trạng thái
              </label>
              <select
                value={newStatus}
                onChange={e => setNewStatus(e.target.value as ProjectStatus)}
                className="focus:border-primary-500 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                <option value="active">Đang triển khai</option>
                <option value="completed">Hoàn thành</option>
                <option value="pending">Chờ xử lý</option>
              </select>
            </div>

            <Input
              label="Tags (cách nhau dấu phẩy)"
              placeholder="React, Hook, Security"
              value={newTags}
              onChange={e => setNewTags(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}
