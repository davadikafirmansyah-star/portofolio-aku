"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Gagal mengirim pesan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#070707] sm:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-2 sm:px-0"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Hubungi</span>
            <span className="text-soft-gold"> Saya</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ada ide untuk kolaborasi? Atau ingin diskusi tentang teknologi?
            Langsung hubungi saya!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            {[
              {
                icon: "📱",
                label: "WhatsApp",
                value: "+62 822 4566 7891",
                link: "https://wa.me/6282245667891",
              },
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 rounded-xl glass border border-soft-gold/10 cursor-pointer group"
              >
                <div className="text-4xl">{contact.icon}</div>
                <div>
                  <p className="text-xs font-bold text-soft-gold uppercase tracking-wider">
                    {contact.label}
                  </p>
                  <p className="text-lg font-semibold text-white group-hover:text-soft-gold transition-colors">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6 glass rounded-2xl p-8 border border-soft-gold/10"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-white mb-2"
              >
                Nama Lengkap
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111] border border-soft-gold/10 focus:border-soft-gold focus:outline-none transition-all text-white placeholder-text-muted"
                placeholder="Nama kamu"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white mb-2"
              >
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111] border border-soft-gold/10 focus:border-soft-gold focus:outline-none transition-all text-white placeholder-text-muted"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white mb-2"
              >
                Pesan
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#111] border border-soft-gold/10 focus:border-soft-gold focus:outline-none transition-all text-white placeholder-text-muted resize-none"
                placeholder="Tulis pesan kamu di sini..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-soft-gold to-[#c6a85f] text-[#111] font-bold rounded-lg transition-all hover:shadow-lg disabled:opacity-50"
            >
              {loading
                ? "Mengirim..."
                : submitted
                  ? "✓ Pesan Terkirim!"
                  : "Kirim Pesan"}
            </motion.button>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-red-400 font-semibold"
              >
                {error}
              </motion.p>
            )}

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-soft-gold font-semibold"
              >
                Terima kasih! Saya akan membalas segera.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
