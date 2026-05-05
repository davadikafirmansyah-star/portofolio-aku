"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-soft-gray py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-10 rounded-[2rem] border border-white/10 bg-[#0f0f0f]/95 p-8 sm:p-10 shadow-2xl md:grid-cols-[1.4fr_0.9fr] mb-12"
        >
          <div className="space-y-5 max-w-xl">
            <h3 className="text-3xl font-bold text-soft-gray">
              Dava Dika Firmansyah
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              Full-Stack Developer dengan fokus pada solusi digital mewah dan
              pengalaman pengguna elegan.
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-soft-gold px-6 py-3 text-sm font-semibold text-[#111] shadow-lg shadow-soft-gold/10 transition hover:bg-soft-gold/90"
            >
              Mulai Kolaborasi
            </a>
          </div>

          <div className="flex flex-col justify-center">
            <h4 className="text-soft-gold font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { id: "home", label: "Beranda" },
                { id: "projects", label: "Proyek" },
                { id: "skills", label: "Keahlian" },
                { id: "hardware", label: "Hardware" },
                { id: "contact", label: "Kontak" },
              ].map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ x: 6 }}
                  className="transition-colors hover:text-soft-gold"
                >
                  <a className="block py-2" href={`#${link.id}`}>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-soft-gold to-transparent mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between text-sm text-text-muted"
        >
          <p>© {currentYear} Dava Dika Firmansyah. Hak cipta dilindungi.</p>
          <p>
            Dirancang dan dibangun dengan{" "}
            <span className="text-soft-gold">❤️</span> menggunakan Next.js,
            Tailwind & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
