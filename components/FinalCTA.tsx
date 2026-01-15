
import React from 'react';

interface FinalCTAProps {
  onRegisterClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-40 px-6 bg-black text-center text-white relative overflow-hidden">
      {/* Dynamic Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full">
        <div className="absolute inset-0 bg-blue-600/10 blur-[150px] rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        <h2 className="text-5xl md:text-7xl font-extrabold apple-gradient tracking-tight">
          Tham Gia Ngay Hôm Nay
        </h2>
        
        <p className="text-xl md:text-2xl text-[#86868b] font-medium">
          Nắm bắt xu hướng. Học nhanh. Làm thật. Kiếm tiền cùng AI.
        </p>

        <div className="flex flex-col items-center gap-8 pt-6">
          <button 
            onClick={onRegisterClick}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-12 py-5 rounded-full text-[21px] font-bold transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/40"
          >
            Đăng ký miễn phí
          </button>
          
          <div className="flex items-center gap-4 text-[#86868b] font-medium">
            <span>Liên hệ: Zalo 096.196.1673</span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span>Số lượng có hạn</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
