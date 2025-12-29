import { useState, useEffect } from "react";
import { Shield, Menu, X, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tetap simpan ini untuk navigasi internal (Features, Demo, Docs)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // FUNGSI BARU: Handle Testing
  const handleTesting = () => {
    const link = document.createElement("a");
    link.href = "https://forms.gle/k2aHLvfrDdRFn8pf6";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMobileMenuOpen(false); // Tutup menu mobile jika sedang terbuka
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Tameng Tautan</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("features")} className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors font-medium">
            Features
          </button>
          <button onClick={() => scrollToSection("demo")} className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors font-medium">
            Demo
          </button>
          <button onClick={() => scrollToSection("docs")} className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors font-medium">
            Docs
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          {/* Button Testing (Update onClick) */}
          <Button variant="ghost" onClick={handleTesting} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Coba Testing
          </Button>

          {/* Button Download */}
          <Button onClick={handleDownload} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity text-white shadow-lg shadow-purple-500/25 border-0">
            Download APK
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 p-4 shadow-xl">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection("features")} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors text-left py-2 font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection("demo")} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors text-left py-2 font-medium">
              Demo
            </button>
            <button onClick={() => scrollToSection("docs")} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors text-left py-2 font-medium">
              Docs
            </button>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Mode Tampilan</span>
                <ThemeToggle />
              </div>

              {/* Mobile Button Testing (Update onClick) */}
              <Button variant="outline" onClick={handleTesting} className="w-full justify-center border-gray-300 dark:border-gray-700">
                Coba Testing
              </Button>

              <Button onClick={handleDownload} className="w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                Download APK
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
