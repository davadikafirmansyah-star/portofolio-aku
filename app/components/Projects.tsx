"use client";

import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Lapak Ternak",
    description:
      "Marketplace ternak yang elegan dengan checkout cepat dan inventaris real-time.",
    tags: ["Next.js", "Supabase", "Tailwind"],
  },
  {
    id: 2,
    title: "Outfitly",
    description:
      "Platform fashion AI untuk rekomendasi outfit yang stylish dan intuitif.",
    tags: ["Laravel", "MySQL", "Tailwind"],
  },
  {
    id: 3,
    title: "Arduino Monitoring System",
    description:
      "Dashboard IoT real-time untuk monitoring sensor dengan user interface premium.",
    tags: ["Arduino", "Sensor", "Realtime"],
  },
  {
    id: 4,
    title: "Smart Home Dashboard",
    description:
      "Kontrol rumah pintar dengan tampilan minimalis dan pengalaman pengguna mulus.",
    tags: ["Sensor", "Arduino", "Dashboard"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#090909]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center px-2 sm:px-0"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-soft-gold">
            Portofolio Proyek
          </p>
          <h2 className="text-4xl font-bold text-soft-gray sm:text-5xl md:text-6xl">
            Proyek Pilihan
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/70">
            Contoh pekerjaan saya dalam membangun solusi digital yang rapi dan
            profesional.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="glass flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-[#111] p-8 shadow-xl shadow-black/20"
            >
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-soft-gold/15 text-2xl text-soft-gold">
                    {project.title.charAt(0)}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-soft-gray">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-soft-gold/20 bg-soft-gold/10 px-3 py-1 text-xs font-semibold text-soft-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
