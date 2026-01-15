
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
  onRegisterClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, onRegisterClick }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'blur-nav border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-sm rotate-45"></div>
          <span className="text-[14px] font-semibold tracking-tight text-white/90">AI SOLOPRENEUR</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[12px] text-white/60 font-medium tracking-tight">
          <a href="#roadmap" className="hover:text-white transition-colors">Lộ trình</a>
          <a href="#bonuses" className="hover:text-white transition-colors">Quà tặng</a>
          <a href="#details" className="hover:text-white transition-colors">Chi tiết</a>
          <button 
            onClick={onRegisterClick}
            className="bg-white text-black px-3 py-1 rounded-full text-[11px] font-bold hover:bg-white/90 transition-all"
          >
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
