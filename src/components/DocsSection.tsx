import { useState } from "react";
import { BookOpen, Rocket, Cog, HelpCircle, ChevronRight, Settings, Shield, Zap } from "lucide-react";

const docsSections = [
  {
    id: "getting-started",
    icon: Rocket,
    title: "Mulai Menggunakan",
    content: {
      title: "Memulai dengan Tameng Tautan",
      description: "Pelajari cara menginstal dan mengonfigurasi Tameng Tautan untuk perlindungan optimal.",
      steps: [
        {
          title: "1. Unduh dan Instal",
          content: "Unduh file APK dari situs web kami dan instal di perangkat Androidmu. Kamu mungkin perlu mengaktifkan 'Instal dari sumber tidak dikenal' di pengaturan perangkat.",
        },
        {
          title: "2. Aktifkan Layanan Aksesibilitas",
          content: "Buka Pengaturan → Aksesibilitas → Tameng Tautan dan aktifkan layanannya. Ini memungkinkan aplikasi memantau tautan yang muncul di layarmu.",
        },
        {
          title: "3. Berikan Izin Overlay",
          content: "Saat diminta, izinkan Tameng Tautan untuk tampil di atas aplikasi lain. Ini diperlukan untuk menampilkan peringatan keamanan saat ancaman terdeteksi.",
        },
        {
          title: "4. Kamu Terlindungi!",
          content: "Tameng Tautan sekarang akan berjalan senyap di latar belakang, menganalisis setiap tautan yang muncul di layarmu.",
        },
      ],
    },
  },
  {
    id: "how-it-works",
    icon: Cog,
    title: "Cara Kerja",
    content: {
      title: "Memahami Teknologinya",
      description: "Pelajari lebih dalam bagaimana Tameng Tautan melindungimu dari serangan phishing.",
      steps: [
        {
          title: "Pemantauan Layar",
          content: "Menggunakan API Aksesibilitas Android, Tameng Tautan memantau konten teks yang ditampilkan di layarmu tanpa menangkap data pribadi apa pun.",
        },
        {
          title: "Deteksi URL",
          content: "Mesin regex kami mengidentifikasi URL dalam teks yang dipantau, termasuk tautan pendek dari layanan seperti bit.ly, s.id, dan t.co.",
        },
        {
          title: "Ekspansi Link",
          content: "URL pendek secara otomatis diperluas untuk mengungkap tujuan sebenarnya, mengekspos pengalihan yang berpotensi berbahaya.",
        },
        {
          title: "Klasifikasi ML",
          content: "Model XGBoost menganalisis fitur URL termasuk umur domain, struktur jalur, pola kata kunci, dan entropi karakter untuk menghitung skor risiko.",
        },
        {
          title: "Pembuatan Peringatan",
          content: "Jika skor risiko melebihi ambang batas yang kamu konfigurasikan, overlay peringatan akan muncul dengan detail tentang ancaman tersebut.",
        },
      ],
    },
  },
  {
    id: "configuration",
    icon: Settings,
    title: "Konfigurasi",
    content: {
      title: "Menyesuaikan Perlindunganmu",
      description: "Pelajari cara menyempurnakan Tameng Tautan agar sesuai dengan preferensi keamananmu.",
      steps: [
        {
          title: "Ambang Batas Risiko",
          content: "Sesuaikan slider sensitivitas (0.1 hingga 0.9) untuk mengontrol kapan peringatan dipicu. Nilai lebih rendah = lebih banyak peringatan, nilai lebih tinggi = lebih sedikit peringatan. Default: 0.5",
        },
        {
          title: "Model Deteksi",
          content: "Pilih antara mode 'Standar' untuk deteksi seimbang atau mode 'Agresif' untuk keamanan maksimal (mungkin menghasilkan lebih banyak positif palsu).",
        },
        {
          title: "Whitelist Aplikasi",
          content: "Kecualikan aplikasi tertentu dari pemantauan jika kamu mempercayainya sepenuhnya. Buka Pengaturan → Whitelist Aplikasi untuk mengelola pengecualian.",
        },
        {
          title: "Gaya Notifikasi",
          content: "Pilih antara mode 'Overlay' (peringatan layar penuh), 'Banner' (notifikasi ringkas), atau 'Senyap' (hanya pencatatan).",
        },
      ],
    },
  },
  {
    id: "faq",
    icon: HelpCircle,
    title: "FAQ",
    content: {
      title: "Pertanyaan Umum (FAQ)",
      description: "Jawaban atas pertanyaan umum tentang Tameng Tautan.",
      steps: [
        {
          title: "Apakah Tameng Tautan mengumpulkan dataku?",
          content: "Tidak. Semua pemrosesan terjadi sepenuhnya di perangkatmu. Kami tidak mengumpulkan, menyimpan, atau mengirimkan data pribadi atau riwayat penjelajahanmu.",
        },
        {
          title: "Mengapa butuh izin Aksesibilitas?",
          content: "Layanan Aksesibilitas diperlukan untuk membaca konten teks di layarmu agar kami dapat mendeteksi URL. Kami hanya menggunakan ini untuk deteksi URL, tidak ada yang lain.",
        },
        {
          title: "Apakah ini memperlambat ponselku?",
          content: "Tidak. Model XGBoost sangat optimal dan memproses URL dalam waktu kurang dari 50ms. Layanan latar belakang menggunakan baterai minimal.",
        },
        {
          title: "Bisakah saya menggunakannya bersama aplikasi keamanan lain?",
          content: "Ya! Tameng Tautan dirancang untuk melengkapi solusi keamanan yang ada. Ini berfokus secara khusus pada deteksi phishing real-time.",
        },
        {
          title: "Apakah ini gratis?",
          content: "Ya, Tameng Tautan sepenuhnya gratis dan open source. Tanpa iklan, tanpa fitur premium, tanpa langganan.",
        },
      ],
    },
  },
];

const DocsSection = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const currentDoc = docsSections.find((s) => s.id === activeSection);

  return (
    <section id="docs" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Dokumentasi</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Segala yang Kamu Butuhkan untuk {/* GRADIENT UPDATED: dark:to-purple-900 */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-400 dark:from-purple-400 dark:to-purple-900">Memulai</span>
          </h2>
          <p className="text-muted-foreground text-lg">Panduan lengkap untuk membantumu mengatur dan menggunakan Tameng Tautan secara efektif.</p>
        </div>

        {/* Docs Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-4 sticky top-24">
              <nav className="space-y-2">
                {docsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${activeSection === section.id ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"}`}
                  >
                    <section.icon className="w-5 h-5" />
                    <span className="font-medium">{section.title}</span>
                    {activeSection === section.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              {currentDoc && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <currentDoc.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{currentDoc.content.title}</h3>
                      <p className="text-muted-foreground">{currentDoc.content.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6 mt-8">
                    {currentDoc.content.steps.map((step, index) => (
                      <div key={index} className="border-l-2 border-primary/30 pl-6 pb-4">
                        <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsSection;
