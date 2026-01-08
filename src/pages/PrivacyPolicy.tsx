import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Kebijakan Privasi</h1>
        <p className="mb-4 text-muted-foreground">
          Terakhir diperbarui: 7 Januari 2026
        </p>

        <div className="space-y-6 text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Pendahuluan</h2>
            <p>
              Tameng Tautan ("kami") berkomitmen untuk melindungi privasi Anda.
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
              menggunakan, dan melindungi informasi Anda saat menggunakan
              aplikasi Android Tameng Tautan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. Informasi yang Kami Kumpulkan
            </h2>
            <p>
              Aplikasi kami memproses URL yang Anda akses untuk mendeteksi
              potensi ancaman phishing. Proses deteksi ini dilakukan secara
              lokal di perangkat Anda (on-device machine learning). Kami tidak
              mengirimkan riwayat browsing Anda ke server eksternal untuk tujuan
              pelacakan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. Keamanan (Security)
            </h2>
            <p>
              Kami menghargai kepercayaan Anda dalam menggunakan aplikasi kami.
              Kami menerapkan langkah-langkah keamanan fisik, elektronik, dan
              manajerial yang wajar untuk melindungi informasi Anda. Namun,
              harap diingat bahwa tidak ada metode transmisi melalui internet
              atau metode penyimpanan elektronik yang 100% aman dan andal, dan
              kami tidak dapat menjamin keamanan mutlaknya.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Perubahan Kebijakan Ini
            </h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu.
              Oleh karena itu, Anda disarankan untuk meninjau halaman ini secara
              berkala untuk mengetahui adanya perubahan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan atau saran tentang Kebijakan Privasi
              kami, jangan ragu untuk menghubungi kami melalui email yang
              tertera di halaman Play Store.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
