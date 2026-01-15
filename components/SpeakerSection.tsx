
import React from 'react';

const SpeakerSection: React.FC = () => {
  const speakers = [
    {
      name: "Nguyễn Phước Vĩnh Hưng",
      role: "Founder Duhava Technology JSC",
      image: "https://i.postimg.cc/3xQb5jD8/Hung.png",
      bio: [
        "Kinh nghiệm Kinh Doanh Online từ 2016",
        "500.000++ followers trên Social về AI, Kinh Doanh & Marketing",
        "Quản Trị Viên Group AI (300.000++ thành viên)",
        "Triển khai Marketing cho nhiều doanh nghiệp đa ngành hàng",
        "Đào tạo Inhouse cho HTV, FPT, Droppii, Phương Trường An Group..."
      ]
    },
    {
      name: "Nguyễn Thành Trung",
      role: "CMO/Co-founder ClickAi",
      image: "https://i.postimg.cc/BngWm7wG/Anh-Trung.png",
      bio: [
        "Khách mời chia sẻ về AI trên kênh truyền hình An ninh TV và VTV1",
        "Admin của Group Biết tuốt AI (hơn 20.000 thành viên)",
        "Sáng tạo nội dung Youtube TrungCaha ( hơn 40.000 người theo dõi)",
        "10 năm hoạt động đào tạo online với hơn 10.000 học viên",
        "Đào tạo hơn 60 khóa học AI: Giáo dục, May mặc, Thiết kế, Marketing,..."
      ]
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#f5f5f7] text-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#0071e3] font-bold uppercase tracking-[0.2em] text-[13px]">Đội ngũ dẫn dắt</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Người Đồng Hành Cùng Bạn</h2>
        </div>

        {/* Main Speakers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 group">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-48 h-64 md:h-48 flex-shrink-0 overflow-hidden rounded-3xl">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{speaker.name}</h3>
                    <p className="text-[#0071e3] font-semibold text-sm">{speaker.role}</p>
                  </div>
                  <ul className="space-y-3">
                    {speaker.bio.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[#424245] leading-relaxed text-[15px]">
                        <span className="text-blue-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Coach Section */}
        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-xl border border-blue-500/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse"></div>
              <img 
                src="https://i.postimg.cc/VvYnW6J7/Trang.png" 
                alt="Phạm Hồng Đoan Trang" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
              />
            </div>
            
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div>
                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider mb-4 inline-block">Coach hỗ trợ thực hành</span>
                <h3 className="text-3xl md:text-4xl font-extrabold">Phạm Hồng Đoan Trang</h3>
                <p className="text-lg text-[#86868b] font-medium mt-1">Chuyên gia AI của ClickAI</p>
              </div>
              
              <p className="text-xl md:text-2xl text-[#424245] leading-tight font-medium italic">
                "Người coach, hỗ trợ riêng và hướng dẫn thực hành xuyên suốt cho đến khi bạn có kết quả thực tế trong 3 ngày diễn ra chương trình."
              </p>
              
              <div className="flex items-center gap-2 text-green-600 font-bold justify-center md:justify-start">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                Hỗ trợ 1:1 trong Group Zalo Kín
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
