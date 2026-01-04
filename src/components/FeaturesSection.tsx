import { Eye, Cpu, SlidersHorizontal, Link2, Shield, Zap, Lock, Bell } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Deteksi Real-time",
    description: "Pemantauan latar belakang untuk WhatsApp, SMS, dan aplikasi lain. Tameng Tautan menjaga layarmu 24/7.",
  },
  {
    icon: Cpu,
    title: "Algoritma XGBoost",
    description: "Klasifikasi berkecepatan tinggi di perangkat tanpa mengorbankan privasi. Tidak ada data yang keluar dari ponselmu.",
  },
  {
    icon: SlidersHorizontal,
    title: "Atur Batas Risiko",
    description: "Sesuaikan sensitivitas dengan kebutuhanmu. Tentukan sendiri ambang batas skor risiko untuk peringatan.",
  },
  {
    icon: Link2,
    title: "Pengurai Short-link",
    description: "Secara otomatis memperluas bit.ly, s.id, dan tautan pendek lainnya untuk memeriksa tujuan akhir.",
  },
  {
    icon: Shield,
    title: "Utamakan Privasi",
    description: "Semua pemrosesan terjadi di perangkatmu. Nol pengumpulan data, nol pelacakan, nol unggahan cloud.",
  },
  {
    icon: Zap,
    title: "Sangat Cepat",
    description: "Analisis selesai dalam waktu kurang dari 50ms. Kamu bahkan tidak akan menyadari aplikasi sedang berjalan.",
  },
  {
    icon: Lock,
    title: "Aman Secara Desain",
    description: "Menggunakan layanan aksesibilitas Android secara bertanggung jawab dengan izin minimal yang diperlukan.",
  },
  {
    icon: Bell,
    title: "Notifikasi Pintar",
    description: "Peringatan overlay kustom yang tidak mengganggu aktivitasmu. Tutup atau periksa detail dengan satu ketukan.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Fitur</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Segala yang Kamu Butuhkan untuk {/* GRADIENT UPDATED */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-400 dark:from-purple-400 dark:to-purple-900">Perlindungan Total</span>
          </h2>
          <p className="text-muted-foreground text-lg">Tameng Tautan menggabungkan machine learning terkini dengan desain yang mengutamakan privasi untuk menjagamu aman dari serangan phishing.</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={feature.title} className="glass-card rounded-2xl p-6 hover:bg-muted/20 transition-all duration-300 group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-all">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
