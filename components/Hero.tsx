
import React from 'react';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-14">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[12px] font-bold tracking-widest text-blue-400 uppercase mb-4 animate-fade-in">
          Chương trình phổ cập AI
        </div>
        
        <h1 className="text-5xl md:text-[80px] font-extrabold leading-[1.05] tracking-tight apple-gradient mb-6">
          Làm chủ công nghệ.<br />
          <span className="text-white/40">Tự do kinh doanh cùng AI.</span>
        </h1>

        <p className="text-lg md:text-2xl text-[#86868b] max-w-2xl mx-auto font-medium leading-relaxed">
          Biến sức mạnh AI thành công việc kinh doanh cá nhân, 
          nguồn thu nhập ổn định và cơ hội đột phá dành riêng cho bạn.
        </p>

        <div className="pt-10">
          <button 
            onClick={onRegisterClick}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-10 py-4 rounded-full text-[17px] font-semibold transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-500/20"
          >
            Đăng ký miễn phí
          </button>
        </div>
      </div>

      {/* Floating Elements (Abstract Visuals) */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[#86868b] animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
