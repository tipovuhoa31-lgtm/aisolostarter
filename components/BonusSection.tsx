
import React from 'react';

const BonusSection: React.FC = () => {
  const bonuses = [
    { title: "AI Tools Stack", desc: "Hơn 50 công cụ thiết yếu để xây dựng doanh nghiệp AI.", icon: "🛠️" },
    { title: "Automation Templates", desc: "Các quy trình tự động hóa sẵn sàng áp dụng ngay lập tức.", icon: "⚡" },
    { title: "Resource Library", desc: "Thư viện templates, prompts và các case studies thực tế.", icon: "📚" },
    { title: "Community Access", desc: "90 ngày hỗ trợ trực tiếp từ đội ngũ chuyên gia.", icon: "👥" },
    { title: "Free AI Credits", desc: "Tặng ngẫu nhiên 50 code Click AI Workspace mỗi buổi.", icon: "🎁" },
  ];

  return (
    <section id="bonuses" className="py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[13px]">Giá trị bổ sung</span>
          <h2 className="text-4xl md:text-6xl font-extrabold apple-gradient">Bonus Đặc Biệt</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((b, idx) => (
            <div key={idx} className="bg-[#1d1d1f] border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-all group cursor-default">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{b.icon}</div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-[#86868b] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
