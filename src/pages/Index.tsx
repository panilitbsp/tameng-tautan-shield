import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import DemoSection from "@/components/DemoSection";
import DocsSection from "@/components/DocsSection";
import CTASection from "@/components/CTASection"; // Pastikan ini diimport
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BeforeAfterSection />

        {/* Tambahkan section ini agar tombol Testing di Hero & CTA berfungsi */}
        <div id="testing">
          <CTASection />
        </div>

        <DemoSection />
        <DocsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
