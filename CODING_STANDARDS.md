# Quy Chuẩn Lập Trình Dự Án (Coding Standards & Clean Code Guidelines)

Tài liệu này định nghĩa toàn bộ tiêu chuẩn viết mã nguồn áp dụng cho dự án. Mọi thành viên phát triển và tính năng mới đều phải tuân thủ nghiêm ngặt để đảm bảo mã nguồn dễ bảo trì, dễ mở rộng và hạn chế tối đa lỗi phát sinh.

---

## 1. Cấu Trúc Thư Mục (Folder Architecture)

Dự án áp dụng mô hình phân tách mối quan tâm (**Separation of Concerns**) rõ ràng:

```text
src/
├── assets/          # Hình ảnh, SVG, fonts, media tĩnh
├── components/      # UI Components dùng chung
│   ├── common/      # Các component nguyên tử (Button, Card, Input, Modal, Badge, ErrorBoundary)
│   └── layout/      # Khung layout tổng thể (Header, Footer, MainLayout)
├── config/          # Cấu hình môi trường, third-party libraries
├── constants/       # Hằng số hệ thống, routes, enum giá trị tĩnh
├── hooks/           # Custom React Hooks tái sử dụng logic (useTheme, useLocalStorage, useDebounce)
├── layouts/         # Các master layout cho từng phân hệ (AuthLayout, DashboardLayout)
├── pages/           # Màn hình chính của từng trang/route (DashboardPage, HomePage)
├── services/        # Service Layer giao tiếp API, xử lý nghiệp vụ dữ liệu (api.ts)
├── styles/          # Định nghĩa CSS toàn cục và Tailwind directives (index.css)
├── types/           # Type definitions và Interfaces TypeScript dùng chung (index.ts)
├── utils/           # Các hàm tiện ích thuần (pure helper functions: cn, formatters, validators)
├── App.tsx          # Component gốc của ứng dụng (bọc ErrorBoundary và Providers)
└── main.tsx         # Điểm khởi chạy React DOM
```

### Nguyên tắc phân chia:
- **Nguyên lý Đơn Nhiệm (SRP - Single Responsibility Principle):** Mỗi file chỉ thực hiện một nhiệm vụ duy nhất.
- **Không nhúng Logic API vào Component UI:** UI component chỉ nhận props và gọi hàm từ `services/` hoặc `hooks/`.
- **Độ sâu thư mục tối đa:** Không lồng quá 3 cấp thư mục con bên trong `src/`.

---

## 2. Quy Tắc Đặt Tên (Naming Conventions)

| Đối tượng | Quy ước | Ví dụ |
| :--- | :--- | :--- |
| **React Component** | `PascalCase` | `Button.tsx`, `UserProfileCard.tsx` |
| **Custom Hook** | `camelCase` bắt đầu bằng `use` | `useTheme.ts`, `useLocalStorage.ts` |
| **Hàm tiện ích (Utility)** | `camelCase` | `formatCurrency.ts`, `cn.ts` |
| **Interface / Type** | `PascalCase` (không thêm tiền tố `I`) | `User`, `ProjectItem`, `ApiResponse<T>` |
| **Hằng số (Constant)** | `UPPER_SNAKE_CASE` | `STORAGE_KEYS`, `API_BASE_URL` |
| **Biến thông thường** | `camelCase` | `isLoading`, `totalCount`, `userList` |
| **Biến cờ Boolean** | `camelCase` có tiền tố `is`, `has`, `should` | `isOpen`, `hasError`, `shouldRender` |
| **Sự kiện Handler (Hàm xử lý)** | Tiền tố `handle...` cho hàm nội bộ | `handleClick`, `handleSubmitForm` |
| **Props nhận sự kiện** | Tiền tố `on...` cho Props | `onClick`, `onCloseModal`, `onSubmit` |

---

## 3. Quy Chuẩn React & Component Design

### 3.1 Khai báo Props rõ ràng
Luôn định nghĩa interface hoặc type cho props của component:

```tsx
// ✅ Chuẩn Clean Code
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export function Button({ variant = 'primary', size = 'md', isLoading = false, children, ...props }: ButtonProps) {
  return (
    <button disabled={isLoading} {...props}>
      {children}
    </button>
  );
}
```

### 3.2 Tách biệt Logic khỏi JSX
Không viết các hàm tính toán dài hay logic gọi API trực tiếp bên trong JSX:
- Chuyển logic state phức tạp vào Custom Hooks.
- Sử dụng `useMemo` và `useCallback` có chủ đích khi xử lý mảng lớn hoặc truyền hàm xuống component con được tối ưu.

### 3.3 Bắt buộc có Error Boundary
Mọi ứng dụng phải được bọc trong `ErrorBoundary` để ngăn chặn lỗi runtime làm trắng toàn bộ màn hình.

---

## 4. Quy Chuẩn TypeScript (Strict Type Safety)

Dự án cấu hình TypeScript ở chế độ nghiêm ngặt nhất (`strict: true`, `noUncheckedIndexedAccess: true`).

1. **Tuyệt đối không dùng `any`:**
   - Thay thế bằng `unknown` nếu chưa rõ kiểu dữ liệu và thực hiện type narrowing (type guards).
   - Sử dụng Generics (`<T>`) khi xây dựng hàm hoặc component tái sử dụng.
2. **Khai báo kiểu trả về cho Service/API:**
   - Mọi hàm gọi API phải trả về kiểu `Promise<ApiResponse<T>>`.
3. **Phân biệt Type và Interface:**
   - Dùng `interface` khi định nghĩa hình dạng (shape) của Object hoặc Component Props (dễ mở rộng `extends`).
   - Dùng `type` cho Union types, Primitives, Tuples (`type Status = 'active' | 'pending' | 'completed';`).

---

## 5. Quy Chuẩn Tailwind CSS & Styling

1. **Dùng hàm `cn()` để nối lớp:**
   - Luôn sử dụng `cn()` từ `@/utils/cn` khi nối nhiều class hoặc có class điều kiện để tránh xung đột thuộc tính CSS của Tailwind.
   ```tsx
   import { cn } from '@/utils/cn';

   <div className={cn('p-4 rounded-lg bg-white', isActive && 'border-primary-500 shadow-md', className)} />
   ```
2. **Tránh giá trị tùy tiện (Arbitrary values):**
   - Hạn chế dùng `w-[317px]`, `text-[#123456]`. Ưu tiên sử dụng bảng màu và khoảng cách có sẵn trong hệ thống thiết kế Tailwind.
3. **Hỗ trợ Dark Mode chuẩn:**
   - Mọi màu sắc giao diện phải khai báo đồng thời phiên bản sáng và tối (`bg-white dark:bg-slate-900`, `text-slate-900 dark:text-slate-100`).

---

## 6. Quy Chuẩn Service Layer & Data Fetching

Luôn đóng gói các cuộc gọi API trong thư mục `src/services/`:
- Thành phần UI chỉ gọi qua Service methods (`projectService.getProjects()`).
- Bắt buộc xử lý đầy đủ 3 trạng thái của dữ liệu bất đồng bộ:
  1. **Loading state:** Hiển thị Skeleton hoặc Spinner.
  2. **Error state:** Hiển thị thông báo thân thiện và nút retry.
  3. **Empty / Data state:** Hiển thị dữ liệu hoặc thông báo trống.

---

## 7. Quy Chuẩn Git & Commit Message (Conventional Commits)

Định dạng commit bắt buộc tuân thủ chuẩn quốc tế:

```text
<type>(<scope>): <mô tả ngắn bằng mệnh lệnh thì hiện tại>
```

### Các Type hợp lệ:
- `feat:` Thêm chức năng mới (vd: `feat(auth): bổ sung đăng nhập bằng Google`)
- `fix:` Sửa lỗi/bug (vd: `fix(button): sửa lỗi không nhận prop disabled`)
- `refactor:` Tái cấu trúc code mà không thay đổi chức năng (vd: `refactor(api): chuyển sang axios client`)
- `style:` Định dạng code, dấu chấm phẩy, khoảng trắng (vd: `style: chạy prettier cho toàn bộ src`)
- `docs:` Cập nhật tài liệu (vd: `docs: cập nhật CODING_STANDARDS.md`)
- `perf:` Tối ưu hiệu năng (vd: `perf(list): áp dụng useDebounce cho bộ lọc tìm kiếm`)
- `chore:` Công việc bảo trì cấu hình, gói dependencies (vd: `chore: nâng cấp vite lên v6`)
