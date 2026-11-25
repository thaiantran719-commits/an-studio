import React, { useState } from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';

export interface EmailCopyFieldProps {
  email?: string;
}

export const EmailCopyField: React.FC<EmailCopyFieldProps> = ({
  email = 'contact@thaian.studio',
}) => {
  const { language } = usePortfolio();
  const [copied, setCopied] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setShowToast(true);

        setTimeout(() => {
          setCopied(false);
        }, 2500);

        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      })
      .catch(err => {
        console.error('Không thể sao chép văn bản:', err);
      });
  };

  return (
    <div className="w-full">
      {/* Recessed Capsule Field */}
      <div className="relative flex flex-col items-center gap-3 rounded-2xl bg-surface-container-low p-2 shadow-[inset_4px_4px_8px_rgba(180,174,160,0.38),inset_-3px_-3px_6px_rgba(255,255,255,0.95)] sm:flex-row sm:rounded-full sm:p-2.5">
        <div className="flex w-full min-w-0 flex-grow items-center gap-3 py-2 pl-4 sm:w-auto sm:py-0">
          <span className="material-symbols-outlined text-[22px] text-outline">
            alternate_email
          </span>
          <input
            className="w-full select-all truncate bg-transparent font-serif text-lg font-semibold tracking-tight text-primary focus:outline-none md:text-xl"
            readOnly
            type="text"
            value={email}
            aria-label="Địa chỉ email chính thức"
          />
        </div>

        {/* Forest Green Tactile Action Button */}
        <button
          onClick={handleCopy}
          className={`group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 active:scale-[0.98] sm:w-auto ${
            copied
              ? 'bg-secondary-container text-on-secondary-fixed shadow-sm'
              : 'bg-primary-container text-on-primary shadow-neumorph-btn-primary hover:-translate-y-0.5 hover:bg-primary'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">
            {copied ? 'done_all' : 'content_copy'}
          </span>
          <span>
            {copied
              ? language === 'vi'
                ? 'Đã chép vào clipboard!'
                : 'Copied to clipboard!'
              : language === 'vi'
                ? 'Sao chép Email'
                : 'Copy Email'}
          </span>
        </button>
      </div>

      {/* Notification Toast (Calm System Component 08) */}
      <div
        className={`mt-4 transform transition-all duration-300 ${
          showToast ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between rounded-2xl bg-surface p-4 shadow-neumorph-raised">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-container text-primary-container shadow-[-2px_-2px_5px_rgba(255,255,255,0.8),2px_2px_5px_rgba(186,180,166,0.3)]">
              <span className="material-symbols-outlined text-[16px]">check</span>
            </div>
            <div>
              <p className="font-serif text-base font-semibold leading-tight text-primary">
                {language === 'vi' ? 'Sẵn sàng kết nối.' : 'All set.'}
              </p>
              <p className="mt-0.5 text-xs text-on-surface-variant">
                {language === 'vi' ? 'Địa chỉ email ' : 'Email address '}
                <span className="font-semibold text-primary">{email}</span>
                {language === 'vi'
                  ? ' đã được lưu vào bộ nhớ tạm.'
                  : ' has been copied to your clipboard.'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="rounded-full p-1.5 text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
            aria-label="Đóng thông báo"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};
