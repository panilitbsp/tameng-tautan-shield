import React from "react";

const PhoneMockup = () => {
  return (
    // Class 'animate-float' ini akan mengambil definisi dari tailwind.config.ts kamu
    // Animasi diterapkan pada container utama agar gambar & glow bergerak bersamaan
    <div className="relative animate-float w-full h-full flex justify-center items-center">
      {/* --- 1. GAMBAR LIGHT MODE --- */}
      {/* Logic: Secara default tampil (block), tapi saat darkmode dia sembunyi (dark:hidden) */}
      <img src="/images/handphone_light.png" alt="Tameng Tautan App Light" className="w-full h-auto drop-shadow-2xl block dark:hidden" />

      {/* --- 2. GAMBAR DARK MODE --- */}
      {/* Logic: Secara default sembunyi (hidden), tapi saat darkmode dia tampil (dark:block) */}
      <img src="/images/handphone_dark.png" alt="Tameng Tautan App Dark" className="w-full h-auto drop-shadow-2xl hidden dark:block" />

      {/* --- 3. GLOW EFFECT --- */}
      {/* Tetap mempertahankan style aslimu */}
      <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full -z-10" />
    </div>
  );
};

export default PhoneMockup;
