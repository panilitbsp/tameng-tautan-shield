import { Download, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full animate-fade-in">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Didukung ML On-Device</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
              Perlindungan Real-Time dari{" "}
              <span className="text-gradient">Tautan Phishing</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Tameng Tautan berjalan diam-diam di latar belakang, menganalisis setiap tautan di layar Anda sebelum diklik. Amankan kehidupan digital Anda dengan klasifikasi AI on-device.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="gradient-primary glow-primary hover:opacity-90 transition-all text-base px-8">
                <Download className="w-5 h-5 mr-2" />
                Unduh APK
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted/50 transition-all text-base px-8"
                onClick={() => scrollToSection("docs")}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Lihat Dokumentasi
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">99.2%</p>
                <p className="text-sm text-muted-foreground">Tingkat Deteksi</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">&lt;50ms</p>
                <p className="text-sm text-muted-foreground">Waktu Analisis</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">0</p>
                <p className="text-sm text-muted-foreground">Data Terkirim</p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Gulir untuk menjelajahi</span>
          <ChevronRight className="w-5 h-5 text-muted-foreground rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
