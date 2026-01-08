import React from "react";

const DemoSection = () => {
  return (
    <section id="demo" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Demo Langsung
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Lihat Cara Kerja {/* GRADIENT UPDATED: dark:to-purple-900 */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-400 dark:from-purple-400 dark:to-purple-900">
              Tameng Tautan
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Coba demo interaktif kami untuk melihat bagaimana aplikasi
            mendeteksi dan memperingatkanmu tentang tautan berbahaya secara
            real-time.
          </p>
        </div>

        {/* Image Container */}
        <div className="flex justify-center w-full">
          {/* --- GAMBAR LIGHT MODE (Tanpa Shadow/Rounded) --- */}
          <img
            src="/images/howitworks.png"
            alt="Cara Kerja Tameng Tautan (Light)"
            className="block dark:hidden max-w-full h-auto"
          />

          {/* --- GAMBAR DARK MODE (Tanpa Shadow/Rounded) --- */}
          <img
            src="/images/howitworks_dark.png"
            alt="Cara Kerja Tameng Tautan (Dark)"
            className="hidden dark:block max-w-full h-auto"
          />
        </div>
        <iframe
          src="https://www.youtube.com/embed/sx17ldUwRJI?si=lI9ef7JjFD4hLjle"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="mx-auto mt-24 w-full lg:w-[80%] aspect-video shadow-lg rounded-2xl"
        ></iframe>
      </div>
    </section>
  );
};

export default DemoSection;
