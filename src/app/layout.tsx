import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

export const viewport: Viewport = {
  themeColor: "#123325",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://temanpiknik.reaksy.dev"),
  title: {
    default: "Teman Piknik Tour Organizer | Temukan Perjalanan Serumu",
    template: "%s | Teman Piknik",
  },
  description:
    "Agen perjalanan wisata profesional di Surabaya, Jawa Timur. Menyediakan paket wisata Bromo, Kawah Ijen, Bali, Yogyakarta, Malang, dan Banyuwangi.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#fbf9f5] text-[#161b18] antialiased selection:bg-[#eb6437] selection:text-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
