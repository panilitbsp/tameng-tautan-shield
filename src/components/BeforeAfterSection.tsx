import React from "react";
import { X, Check } from "lucide-react";

const beforeItems = ["Link berbahaya mudah lolos tanpa peringatan", "Pengguna tidak sadar link palsu menyamar", "Risiko klik phishing sangat tinggi", "Banyak tautan judi online menyamar sebagai promo"];

const afterItems = ["Mendapat peringatan sebelum mengklik link", "Tahu risiko link secara instan dari overlay", "Lebih aman saat chatting dengan siapapun", "Melindungi keamanan digital pengguna secara otomatis"];

const BeforeAfterSection = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-gray-900 dark:text-white font-black transition-colors duration-300">Perbedaan</span> {/* GRADIENT UPDATED: dark:to-purple-900 */}
            <span className="text-transparent bg-clip-text font-black bg-gradient-to-r from-purple-900 to-purple-400 dark:from-purple-400 dark:to-purple-900">Sebelum & Sesudah</span>
          </h2>
          <p className="text-xl text-gray-700 font-medium dark:text-gray-400 dark:font-normal transition-colors duration-300">Menggunakan TamengTautan</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card: Sebelum (Before) */}
          <div
            className="p-8 relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300
            bg-red-50/30 border-2 border-red-200 shadow-xl shadow-red-500/10
            dark:bg-gray-900/60 dark:border dark:border-white/10 dark:shadow-2xl dark:shadow-red-900/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center
                bg-red-200 text-red-700 dark:bg-red-500/10 dark:text-red-400 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-900 dark:text-white transition-colors duration-300">Sebelum</h3>
                <p className="text-red-700/80 font-medium dark:text-gray-400 dark:font-normal transition-colors duration-300">Tanpa TamengTautan</p>
              </div>
            </div>

            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border transition-colors duration-300
                  bg-white border-red-200 shadow-sm
                  dark:bg-white/5 dark:border-white/5 dark:shadow-none"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                    bg-red-100 dark:bg-red-500/20 transition-colors duration-300"
                  >
                    <X className="w-3 h-3 text-red-600 dark:text-red-400" />
                  </div>
                  <p className="text-gray-900 font-medium dark:text-gray-300 dark:font-normal text-sm md:text-base transition-colors duration-300">{item}</p>
                </div>
              ))}
            </div>

            {/* Decoration Glow */}
            <div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl
              bg-red-500/10 dark:bg-red-500/5"
            />
          </div>

          {/* Card: Sesudah (After) */}
          <div
            className="p-8 relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300
            bg-green-50/50 border-2 border-green-400 shadow-xl shadow-green-500/10
            dark:bg-gray-900/60 dark:border dark:border-white/10 dark:shadow-2xl dark:shadow-green-900/20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center
                bg-green-200 dark:bg-green-500/10 dark:text-green-400 transition-colors duration-300"
              >
                <Check className="w-6 h-6 text-green-800 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-900 dark:text-white transition-colors duration-300">Sesudah</h3>
                <p className="text-green-800/80 font-medium dark:text-gray-400 dark:font-normal transition-colors duration-300">Dengan TamengTautan</p>
              </div>
            </div>

            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl border transition-colors duration-300
                  bg-white border-green-300 shadow-sm
                  dark:bg-white/5 dark:border-white/5 dark:shadow-none"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                    bg-green-100 dark:bg-green-500/20 transition-colors duration-300"
                  >
                    <Check className="w-3 h-3 text-green-700 dark:text-green-400" />
                  </div>
                  <p className="text-gray-900 font-medium dark:text-gray-300 dark:font-normal text-sm md:text-base transition-colors duration-300">{item}</p>
                </div>
              ))}
            </div>

            {/* Decoration Glow */}
            <div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl
              bg-green-500/10 dark:bg-green-500/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
