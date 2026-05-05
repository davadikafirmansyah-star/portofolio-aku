"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroData = {
  name: "Dava Dika Firmansyah",
  role: [
    "Pengembang Full-Stack",
    "Penggemar IoT",
    "Pemecah Masalah",
    "Pencipta Solusi Digital",
  ],
  description:
    "Saya membangun aplikasi web dan sistem IoT dengan pendekatan elegan, cepat, dan berkelas.",
  social: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export default function Hero() {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveRole((prev) => (prev + 1) % heroData.role.length),
      5000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#070707] px-6 py-16 sm:py-24"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04),_transparent_30%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 lg:grid lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-2xl"
        >
          <p className="inline-flex rounded-full border border-soft-gold/20 bg-soft-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-soft-gold">
            PROJECT PORTOFOLIO
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-tight text-soft-gray sm:text-5xl md:text-6xl">
              Halo, saya
              <span className="block bg-gradient-to-r from-soft-gold to-[#c6a85f] bg-clip-text text-transparent">
                {heroData.name}
              </span>
            </h1>
            <p className="text-xl font-semibold text-soft-gold sm:text-2xl">
              {heroData.role[activeRole]}
            </p>
          </div>

          <p className="max-w-xl text-lg leading-8 text-white/70">
            {heroData.description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="magnetic-btn inline-flex items-center justify-center rounded-full bg-soft-gold px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#b58f2d]/20 transition-all hover:shadow-2xl"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center justify-center rounded-full border border-soft-gold px-8 py-4 text-sm font-semibold text-soft-gold transition hover:bg-soft-gold/20"
            >
              Hubungi Saya
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto flex h-auto w-full max-w-xl items-center justify-center sm:h-[28rem]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="relative flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-[#121212] p-8 text-soft-gray">
              <div className="space-y-4">
                <span className="inline-flex rounded-full bg-soft-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-soft-gold">
                  Proyek Unggulan
                </span>
                <h2 className="text-3xl font-bold">Web & IoT Eksklusif</h2>
                <p className="max-w-full text-sm text-white/70">
                  Menyatukan aplikasi premium dan perangkat cerdas untuk
                  pengalaman digital yang berkelas.
                </p>
              </div>

              <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="font-semibold text-soft-gray">
                    Frontend Premium
                  </p>
                  <p className="mt-2 text-white/60">
                    Tampilan minimalis dengan sentuhan mewah.
                  </p>
                </div>
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="font-semibold text-soft-gray">
                    IoT Terintegrasi
                  </p>
                  <p className="mt-2 text-white/60">
                    Perangkat terhubung dalam desain yang bersih.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
