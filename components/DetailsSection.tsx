
import React from 'react';

const DetailsSection: React.FC = () => {
  const details = [
    { label: "Thời gian", value: "19:30 – 21:00", icon: "🕒" },
    { label: "Ngày học", value: "05/01 – 07/01", icon: "📅" },
    { label: "Hình thức", value: "Online qua Zoom", icon: "💻" },
    { label: "Học phí", value: "Miễn phí 100%", icon: "💎" },
  ];

  return (
    <section id="details" className="py-32 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Chi Tiết Chương Trình</h2>
          <p className="text-[#86868b] text-lg font-medium italic">Không chỉ lý thuyết. Đây là hành động.</p>
        </div>

        <div className="overflow-hidden border border-black/10 rounded-[40px] bg-[#f5f5f7]">
          {details.map((d, idx) => (
            <div key={idx} className={`flex items-center justify-between p-8 md:px-12 ${idx !== details.length - 1 ? 'border-b border-black/5' : ''}`}>
              <div className="flex items-center gap-6">
                <span className="text-2xl">{d.icon}</span>
                <span className="text-lg font-semibold text-[#86868b]">{d.label}</span>
              </div>
              <span className="text-lg font-bold text-black text-right">{d.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-black rounded-[40px] text-white text-center space-y-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-colors"></div>
          <p className="text-2xl md:text-3xl font-medium leading-tight relative z-10">
            "AI là lợi thế bất công. Một người với AI = 10 người. Một solopreneur với AI = công ty 50 nhân viên."
          </p>
          <p className="text-[#86868b] font-bold tracking-widest uppercase text-sm relative z-10">Window đang mở – bạn sẽ hành động hay chờ đợi?</p>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
