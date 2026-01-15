
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DaySection from './components/DaySection';
import BonusSection from './components/BonusSection';
import SpeakerSection from './components/SpeakerSection';
import DetailsSection from './components/DetailsSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/30">
      <Navbar scrolled={scrolled} onRegisterClick={openModal} />
      
      <main>
        <Hero onRegisterClick={openModal} />
        
        <div id="roadmap" className="bg-white text-black py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-32">
            <DaySection 
              day={1}
              title="Xây dựng nội dung AI. Tự động hóa video."
              description="Khám phá cách tạo nội dung video bền vững và kiếm tiền mà không cần nỗ lực thủ công."
              modules={[
                {
                  title: "Bí mật 3 bước xây dựng kênh bền vững",
                  content: "Hầu hết creator thất bại vì thiếu hệ thống. Ba bước này biến bạn từ nghiệp dư thành chuyên gia kiếm 6-7 con số từ social channels."
                },
                {
                  title: "Tự động hóa video đa kênh",
                  content: "Tạo 100+ video/tháng mà không cần camera hay editor. Workflow AI hoàn chỉnh: Từ ý tưởng đến xuất bản tự động trên YouTube, TikTok, Instagram, Facebook."
                },
                {
                  title: "5 cách chuyển views thành income",
                  content: "Ad Revenue thụ động, Affiliate high-ticket, Digital products margin 90%+, Services và Sponsorships từ $500 - $50,000/video."
                }
              ]}
              icon="video"
            />

            <DaySection 
              day={2}
              title="AI Agents. Automation Workflow. Vibe Coding."
              description="Xây dựng hệ thống AI thông minh để tự động hóa kinh doanh, không cần kỹ năng lập trình."
              modules={[
                {
                  title: "Hiểu AI Agents & Automation",
                  content: "AI Agent là hệ thống tự quyết định, không chỉ chatbot. Kiến trúc 3 lớp. Lý do doanh nghiệp trả $5000-$20000/custom agent."
                },
                {
                  title: "Xây dựng AI Agents & Vibe Coding",
                  content: "Build solutions trong vài giờ với no-code tools. Tạo landing pages tự convert. 4 funnels chính: Lead Gen, SaaS, E-commerce, Consulting."
                },
                {
                  title: "Lộ trình ứng dụng Vibe Coding",
                  content: "Nói ý tưởng, AI code cho bạn. Vision → Specification → Generation → Iteration. Lộ trình 12 tuần từ $0 đến $10K-$50K/tháng."
                }
              ]}
              icon="code"
              reverse
            />

            <DaySection 
              day={3}
              title="AI Coach & Trainer. Xây dựng cộng đồng."
              description="Tạo thu nhập $5000/tháng bằng cách scale coaching với AI và cộng đồng mạnh mẽ."
              modules={[
                {
                  title: "AI Training System",
                  content: "Từ traditional coaching đến AI-first: Scale vô hạn, personalization cao. Phục vụ 10 hay 10.000 học viên với chất lượng đồng đều."
                },
                {
                  title: "Sức mạnh cộng đồng",
                  content: "Genesis (0-50) → Growth (50-500) → Scale (500+). Circle, Discord. 100 members = $4900 MRR; 1000 = $49,000 MRR."
                },
                {
                  title: "Định hướng & Lộ trình",
                  content: "Start không cần hoàn hảo. Chọn niche đúng. MVP trong 2 tuần. 90-Day Roadmap: Action beats perfection."
                }
              ]}
              icon="community"
            />
          </div>
        </div>

        <BonusSection />
        <SpeakerSection />
        <DetailsSection />
        <FinalCTA onRegisterClick={openModal} />
      </main>

      <Footer />

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
