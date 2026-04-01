import { Shield, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./app/TamengTautan.apk";
    link.download = "TamengTautan.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Tameng Tautan
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Perlindungan phishing real-time yang ditenagai machine learning di
              perangkat. Keamananmu, privasimu, kendalimu.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produk</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fitur
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Demo
                </a>
              </li>
              <li>
                <button
                  onClick={handleDownload}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download APK
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Riwayat Perubahan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Dokumentasi</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacypolicy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cara Kerja
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Konfigurasi
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Tameng Tautan. Hak cipta dilindungi.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Dibuat dengan <Heart className="w-4 h-4 text-destructive" /> untuk
            internet yang lebih aman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
