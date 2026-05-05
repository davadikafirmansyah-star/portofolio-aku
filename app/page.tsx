"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hardware from "./components/Hardware";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full bg-[#040404] text-soft-gray">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Hardware />
      <Contact />
      <Footer />
    </div>
  );
}
