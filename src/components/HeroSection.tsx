import { Download, FlaskConical } from "lucide-react";
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
              <span className="text-sm text-muted-foreground">Powered by On-Device ML</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black leading-tight animate-slide-up">
              Real-Time Protection Against {/* PERUBAHAN DISINI: */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-400">Phishing Links</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Tameng Tautan runs silently in the background, analyzing every link on your screen before you click. Secure your digital life with on-device AI classification.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="gradient-primary glow-primary hover:opacity-90 transition-all text-base px-8" onClick={() => scrollToSection("download")}>
                <Download className="w-5 h-5 mr-2" />
                Download APK
              </Button>

              <Button size="lg" variant="outline" className="border-border hover:bg-muted/50 transition-all text-base px-8" onClick={() => scrollToSection("testing")}>
                <FlaskConical className="w-5 h-5 mr-2" />
                Coba Testing URL
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">99.2%</p>
                <p className="text-sm text-muted-foreground">Detection Rate</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">&lt;50ms</p>
                <p className="text-sm text-muted-foreground">Analysis Time</p>
              </div>
              <div>
                a<p className="text-2xl md:text-3xl font-bold text-foreground">0</p>
                <p className="text-sm text-muted-foreground">Data Sent</p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-center lg:-translate-x-12 transition-transform duration-500">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
