import { useState, useEffect } from 'react';

/**
 * Custom Hook trì hoãn việc cập nhật giá trị (Debounce) giúp tối ưu hóa hiệu năng khi tìm kiếm
 */
export function useDebounce<T>(value: T, delayMs: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delayMs]);

  return debouncedValue;
}
