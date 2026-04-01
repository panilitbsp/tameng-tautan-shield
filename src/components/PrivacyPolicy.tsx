import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  // Memastikan halaman selalu di-scroll ke paling atas saat dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <div className="max-w-none">
          <h1 className="text-3xl font-bold mb-2">Kebijakan Privasi Tameng Tautan</h1>
          {/* Jangan lupa ubah tanggal di bawah ini jika diperlukan */}
          <p className="text-muted-foreground mb-10">Terakhir diperbarui: 7 Januari 2026</p>

          <div className="space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Pendahuluan</h2>
              <p>
                Tameng Tautan ("kami") berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan aplikasi Android Tameng Tautan.{" "}
                <strong>Aplikasi ini dibuat dan dikembangkan secara eksklusif HANYA sebagai sarana pengumpulan data untuk penelitian akademis (skripsi).</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Penggunaan Layanan Aksesibilitas (AccessibilityService API)</h2>
              <p className="mb-3">
                Aplikasi kami membutuhkan dan menggunakan <strong>AccessibilityService API</strong> murni untuk menjalankan fungsi utamanya, yaitu keamanan.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Tujuan:</strong> Layanan ini bertugas untuk membaca dan memindai teks berupa tautan (URL) yang muncul di layar perangkat Anda secara <em>real-time</em>. Hal ini sangat penting agar aplikasi dapat langsung
                  mendeteksi dan memunculkan peringatan pop-up jika tautan tersebut terindikasi sebagai ancaman <em>phishing</em>.
                </li>
                <li>
                  <strong>Batasan:</strong> Kami TIDAK menggunakan layanan ini untuk membaca isi pesan obrolan, mengambil kata sandi, merekam ketikan keyboard, atau memata-matai aktivitas layar Anda. Layanan ini dirancang khusus hanya untuk
                  menangkap pola tautan (URL) saja.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Informasi yang Kami Kumpulkan dan Tujuannya (Khusus Skripsi)</h2>
              <p className="mb-3">
                Karena aplikasi ini adalah instrumen penelitian skripsi, kami wajib mengumpulkan log data performa deteksi ke dalam basis data penelitian kami. Kami sangat transparan mengenai data apa saja yang kami ambil. Data tersebut
                meliputi:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>ID Pengguna / Perangkat Anonim (user_id):</strong> ID acak untuk membedakan sesi pengujian antarpengguna tanpa mengetahui identitas asli (nama, nomor telepon, atau email) Anda.
                </li>
                <li>
                  <strong>Tautan (url):</strong> Tautan yang Anda pindai secara manual atau yang tertangkap otomatis dari layar Anda.
                </li>
                <li>
                  <strong>Metrik Hasil Deteksi:</strong> Kami merekam waktu pemindaian (created_at), status bahaya (is_phishing), tingkat persentase risiko (probability), algoritma <em>machine learning</em> yang mengeksekusinya
                  (model_used), dan jenis pemindaian (scan_type: manual atau otomatis).
                </li>
              </ul>
              <p className="mt-4">
                <strong>Tujuan Tunggal:</strong> Semua data di atas <strong>HANYA</strong> digunakan untuk mengukur akurasi, efisiensi, dan kinerja model algoritma pendeteksi tautan dalam rangka penulisan laporan skripsi. Data ini TIDAK
                PERNAH dan TIDAK AKAN digunakan untuk pelacakan identitas (tracking), pemasaran, atau iklan komersial apa pun.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Penyimpanan dan Pembagian Data</h2>
              <p>
                Kami <strong>tidak menjual, menyewakan, atau membagikan</strong> data log pemindaian maupun ID Perangkat Anda kepada pihak ketiga atau perusahaan mana pun. Data ini hanya dikelola secara tertutup oleh peneliti (mahasiswa)
                yang bersangkutan dan dijamin kerahasiaan akademisnya. Setelah penelitian skripsi selesai, seluruh data log ini dapat dihapus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Keamanan (Security)</h2>
              <p>
                Data Anda dikirim secara aman ke basis data <em>cloud</em> penelitian kami. Kami menerapkan standar keamanan elektronik yang wajar untuk melindungi informasi Anda selama transmisi. Namun, harap dipahami bahwa tidak ada
                transmisi internet yang 100% aman tanpa celah.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Izin Pengguna</h2>
              <p>
                Anda memegang kendali mutlak atas aplikasi ini. Fitur deteksi tidak akan berjalan tanpa persetujuan Anda. Anda juga dapat mematikan fitur deteksi atau mencabut izin Aksesibilitas serta izin Overlay (Tampilan di Atas Aplikasi
                Lain) kapan saja melalui menu Pengaturan di perangkat Android Anda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Perubahan Kebijakan Ini</h2>
              <p>Kami dapat memperbarui Kebijakan Privasi ini jika ada perubahan pada metode penelitian kami. Anda disarankan untuk meninjau halaman ini secara berkala.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Hubungi Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan tentang praktik privasi ini, atau ingin bertanya seputar penelitian skripsi yang sedang dijalankan, jangan ragu untuk menghubungi peneliti melalui email yang tertera di halaman Google Play
                Store.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
