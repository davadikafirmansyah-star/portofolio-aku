"use client";

import { motion } from "framer-motion";

const hardwareProjects = [
  {
    id: 1,
    title: "Monitoring Suhu & Kelembapan",
    description:
      "Sistem sensor DHT22 dengan tampilan data real-time ke dashboard.",
    specs: ["Arduino Uno", "DHT22", "ESP8266", "Cloud Storage"],
    image: "🌡️",
    features: [
      "Data real-time dengan WebSocket",
      "Visualisasi historis yang interaktif",
      "Pemberitahuan saat nilai threshold terlewati",
      "Dashboard responsif untuk mobile",
    ],
  },
  {
    id: 2,
    title: "Smart Door Lock",
    description: "Sistem keamanan pintu dengan RFID dan kontrol mobile.",
    specs: ["Arduino Mega", "RFID RC522", "Servo", "Node.js API"],
    image: "🔐",
    features: [
      "Autentikasi kartu RFID",
      "Kontrol buka/tutup lewat aplikasi",
      "Catatan aktivitas terperinci",
      "Mode cadangan baterai",
    ],
  },
  {
    id: 3,
    title: "Kontrol Greenhouse Otomatis",
    description:
      "Otomasi greenhouse dengan sensor kelembapan, cahaya, dan pompa air.",
    specs: ["Arduino Mega 2560", "Soil Moisture", "Light Sensor", "Relay"],
    image: "🌱",
    features: [
      "Penyiraman otomatis berdasarkan kelembapan tanah",
      "Kontrol intensitas cahaya",
      "Regulasi suhu otomatis",
      "Analitik data historis",
    ],
  },
  {
    id: 4,
    title: "Monitor Kualitas Udara",
    description:
      "Sistem IoT untuk memantau PM2.5, CO2, dan kualitas udara indoor.",
    specs: ["Arduino Uno", "MQ-135", "PM2.5", "OLED Display"],
    image: "💨",
    features: [
      "Pengukuran AQI dan PM2.5",
      "Deteksi gas berbahaya",
      "Tampilan OLED lokal",
      "Sinkronisasi data ke cloud",
    ],
  },
];

export default function Hardware() {
  return (
    <section id="hardware" className="py-20 px-6 bg-[#070707] sm:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-soft-gold">
            Hardware & IoT
          </p>
          <h2 className="text-4xl font-bold text-soft-gray sm:text-5xl md:text-6xl">
            Proyek Arduino Pilihan
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/70">
            Contoh proyek yang memadukan hardware dan software untuk solusi
            nyata di dunia IoT.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {hardwareProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="glass flex h-full flex-col overflow-hidden rounded-[2rem] border border-soft-gold/10 shadow-xl shadow-black/40"
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#141414] via-soft-gold/10 to-[#080808] sm:h-52">
                <motion.div
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center text-8xl"
                >
                  {project.image}
                </motion.div>
                <div className="absolute inset-0 hardware-glow" />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-soft-gray">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-white/70">{project.description}</p>
                </div>

                <div className="mb-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-soft-gold">
                    Perangkat
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full bg-soft-gold/15 px-3 py-1 text-xs font-semibold text-soft-gold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="mb-4 text-xs uppercase tracking-[0.3em] text-soft-gold">
                    Fitur Utama
                  </p>
                  <ul className="space-y-3 text-sm text-white/70">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-1 text-soft-gold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 glass rounded-[2rem] p-8 md:p-12 border border-soft-gold/10"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { number: "15+", label: "Proyek Arduino" },
              { number: "50+", label: "Sensor Digunakan" },
              { number: "100+", label: "Jam Koding" },
              { number: "8+", label: "Tingkat Keberhasilan" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-[#111] p-6 text-center shadow-xl shadow-black/20"
              >
                <p className="text-4xl font-bold text-soft-gold">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
