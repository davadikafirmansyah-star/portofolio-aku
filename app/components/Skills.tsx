"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Backend",
    icon: "🔧",
    items: [
      { name: "Laravel 11/12", level: 90 },
      { name: "Node.js/Express", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "IoT & Hardware",
    icon: "🎛️",
    items: [
      { name: "Arduino Uno/Mega", level: 90 },
      { name: "Sensor & Modul", level: 90 },
      { name: "MQTT Protocol", level: 80 },
      { name: "Embedded C/C++", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center px-2 sm:px-0"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-soft-gold">
            Keahlian Utama
          </p>
          <h2 className="text-4xl font-bold text-soft-gray sm:text-5xl md:text-6xl">
            Skillset Teknologi Saya
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/70">
            Kemampuan teknis yang mendukung pembuatan solusi web dan IoT yang
            mewah namun sederhana.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="glass flex h-full flex-col rounded-[2rem] border border-white/10 p-8"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-soft-gold/15 text-2xl text-soft-gold">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-soft-gray">
                    {category.category}
                  </h3>
                  <p className="text-sm text-white/70">
                    Kategori skill untuk solusi premium.
                  </p>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm font-semibold text-soft-gray">
                      <span>{skill.name}</span>
                      <span className="text-soft-gold">{skill.level}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-[#111]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9 }}
                        className="h-full rounded-full bg-gradient-to-r from-soft-gold to-[#c6a85f]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
