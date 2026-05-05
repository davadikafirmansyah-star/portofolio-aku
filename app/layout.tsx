import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dava Dika Firmansyah | Pengembang Full-Stack & IoT",
  description:
    "Portofolio profesional yang menampilkan pengembangan full-stack, desain modern, dan integrasi Arduino IoT.",
  keywords:
    "portofolio, pengembang, full-stack, IoT, Arduino, Next.js, Laravel, Tailwind",
  authors: [{ name: "Dava Dika Firmansyah" }],
  creator: "Dava Dika Firmansyah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://adisty.dev",
    title: "Dava Dika Firmansyah | Pengembang Full-Stack & IoT",
    description:
      "Portofolio profesional yang memperlihatkan proyek pengembangan web dan hardware IoT.",
    siteName: "Portofolio Dava Dika Firmansyah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#040404] text-soft-gray transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
