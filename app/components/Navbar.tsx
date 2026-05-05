"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Beranda" },
  { id: "projects", label: "Proyek" },
  { id: "skills", label: "Keahlian" },
  { id: "hardware", label: "Hardware" },
  { id: "contact", label: "Kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 shadow-2xl shadow-black/40 py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="glass mx-4 rounded-full px-6 py-4 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 border border-white/10 bg-slate-950/80">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#a67c19] to-[#2e2a23] text-lg font-black text-white shadow-lg">
            DD
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-soft-gold">
              Portofolio
            </p>
            <h1 className="text-lg font-semibold text-soft-gray">
              Dava Dika Firmansyah
            </h1>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-soft-gray transition-colors duration-200 hover:text-soft-gold"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-soft-gold/20 bg-soft-gold/10 px-4 py-2 text-sm font-semibold text-soft-gold transition hover:bg-soft-gold/20 md:inline-flex"
          >
            Hubungi
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden rounded-full bg-soft-gold p-4 text-white shadow-lg transition hover:bg-soft-gold/90 font-bold text-xl"
            aria-label="Buka menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="glass mx-4 mt-3 rounded-3xl px-6 py-5 md:hidden max-w-7xl mx-auto shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-soft-gray transition-colors duration-200 hover:text-soft-gold"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-soft-gold px-4 py-2 text-sm font-semibold text-[#111] transition hover:bg-soft-gold/90"
            >
              Hubungi
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
