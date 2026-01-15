
import React from 'react';

interface Module {
  title: string;
  content: string;
}

interface DaySectionProps {
  day: number;
  title: string;
  description: string;
  modules: Module[];
  icon: 'video' | 'code' | 'community';
  reverse?: boolean;
}

const DaySection: React.FC<DaySectionProps> = ({ day, title, description, modules, icon, reverse }) => {
  const IconComponent = () => {
    switch (icon) {
      case 'video':
        return (
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
          </div>
        );
      case 'code':
        return (
          <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
        );
      case 'community':
        return (
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
        );
    }
  };

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
      <div className="flex-1 space-y-6">
        <span className="text-[#0071e3] font-bold tracking-widest text-[14px]">NGÀY 0{day}</span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
        <p className="text-xl text-[#86868b] font-medium leading-relaxed">{description}</p>
        <div className="pt-4">
          <button className="text-[#0071e3] font-semibold text-lg hover:underline flex items-center gap-2">
            Khám phá thêm
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
      
      <div className="flex-1 w-full bg-[#f5f5f7] rounded-[32px] p-8 md:p-12 border border-black/5 hover:shadow-2xl transition-all duration-500">
        <IconComponent />
        <div className="space-y-10">
          {modules.map((mod, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-lg font-bold flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-black text-white text-[12px] flex items-center justify-center">M{idx + 1}</span>
                {mod.title}
              </h3>
              <p className="text-[#424245] leading-relaxed pl-9">{mod.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaySection;
