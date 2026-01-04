import { Button } from "@/components/ui/button";
import { Download, FlaskConical, Shield } from "lucide-react";

const CTASection = () => {
  const handleTesting = () => {
    const link = document.createElement("a");
    link.href = "https://forms.gle/k2aHLvfrDdRFn8pf6";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./app/TamengTautan.apk";
    link.download = "TamengTautan.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 blur-2xl opacity-50 scale-150" />
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-4 animate-glow-pulse">
                <Shield className="w-full h-full text-white" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Siap Melindungi Dirimu dari</span>
            <br />
            {/* GRADIENT UPDATED: dark:to-purple-900 */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-400 dark:from-purple-400 dark:to-purple-900">Link Berbahaya?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Download TamengTautan sekarang dan rasakan keamanan digital yang lebih baik saat chatting.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="gradient-primary glow-primary hover:opacity-90 transition-all text-base px-8 group" onClick={handleDownload}>
              <Download className="w-6 h-6 mr-2 group-hover:animate-bounce" />
              Download Sekarang
            </Button>

            <Button size="lg" variant="outline" className="border-border hover:bg-muted/50 transition-all text-base px-8" onClick={handleTesting}>
              <FlaskConical className="w-6 h-6 mr-2" />
              Isi Form Testing
            </Button>
          </div>

          {/* Trust badge */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground pt-4">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm">Aman, Gratis, dan Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
