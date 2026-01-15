
import React, { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * GOOGLE APPS SCRIPT SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet (ID: 1d2df3Az8b0ZPqldDEeCNQZjKsnP7e3lrBzWJ7D6veKw)
 * 2. Go to Extensions > Apps Script
 * 3. Paste the provided script code.
 * 4. Deploy > New Deployment > Web App > Execute as: Me > Who has access: Anyone
 * 5. Copy the Web App URL and replace the SCRIPT_URL constant below.
 */

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyRqrGNU8Oj-DcBOek9dzoiQ3tb1g3ixDZ83ynengHQp6Hhn5PMZOvvUelRwSLh7dDkdQ/exec'; // Replace with your real Web App URL

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  if (!isOpen) return null;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Vietnamese phone number validation (10-11 digits)
    return /^(0[3|5|7|8|9|1])[0-9]{8,9}$/.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    // Validation checks
    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Email không hợp lệ. Vui lòng kiểm tra lại.' });
      return;
    }

    if (!validatePhone(formData.phone)) {
      setStatus({ type: 'error', message: 'Số điện thoại Việt Nam không hợp lệ (10-11 số).' });
      return;
    }

    setIsSubmitting(true);
    
    // Create timestamp in GMT+7 format: dd/MM/yyyy HH:mm:ss
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    const timestamp = formatter.format(now).replace(',', '');

    const payload = {
      timestamp,
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    };

    try {
      // Calling GAS Web App
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for GAS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setStatus({ type: 'success', message: 'Lưu thành công! Đang chuyển hướng...' });
      
      // Success delay before redirect
      setTimeout(() => {
        setIsSubmitting(false);
        window.location.href = 'https://zalo.me/g/ohttzh303';
      }, 1500);

    } catch (error) {
      console.error('Error saving to sheet:', error);
      setStatus({ type: 'error', message: 'Có lỗi xảy ra khi lưu dữ liệu. Vui lòng thử lại.' });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-[#1d1d1f] border border-white/10 w-full max-w-md rounded-[32px] p-8 md:p-10 shadow-2xl transform transition-all animate-scale-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#86868b] hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Đăng ký tham gia</h2>
            <p className="text-[#86868b] text-sm">Nhận lộ trình 3 ngày chinh phục AI</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#86868b] uppercase tracking-wider pl-1">Họ và Tên</label>
              <input 
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-blue-500/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#86868b] uppercase tracking-wider pl-1">Email</label>
              <input 
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-blue-500/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#86868b] uppercase tracking-wider pl-1">Số điện thoại</label>
              <input 
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="09xx xxx xxx"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-blue-500/50 transition-all"
              />
            </div>

            {status.message && (
              <div className={`p-3 rounded-xl text-[13px] font-medium text-center ${status.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                {status.message}
              </div>
            )}

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 mt-4">
              <p className="text-[12px] text-blue-400 leading-relaxed text-center">
                ✨ <strong>Lưu ý:</strong> Sau khi đăng ký thành công, bạn sẽ được tự động chuyển hướng đến <strong>Nhóm Zalo Kín</strong> để nhận tài liệu & hỗ trợ tốt nhất.
              </p>
            </div>

            <button 
              disabled={isSubmitting}
              type="submit"
              className={`w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-4 rounded-2xl font-bold text-lg mt-2 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Đang xử lý...
                </>
              ) : 'Đăng ký ngay'}
            </button>
          </form>

          <p className="text-[11px] text-[#86868b] text-center px-4 leading-relaxed">
            Bằng cách đăng ký, bạn đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của AI Solopreneur.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up {
          animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default RegistrationModal;
