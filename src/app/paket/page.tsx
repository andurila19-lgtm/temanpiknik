import { Metadata } from "next";
import Link from "next/link";
import { TOUR_PACKAGES } from "@/data/packages";
import PackageCatalogClient from "./PackageCatalogClient";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Katalog Paket Wisata Resmi | Teman Piknik Tour Organizer Surabaya",
  description:
    "Jelajahi seluruh pilihan paket wisata Bromo Sunrise, Kawah Ijen Blue Fire, Malang Batu, Bali, dan Yogyakarta. Layanan open trip & private tour terpercaya di Surabaya.",
  openGraph: {
    title: "Katalog Paket Wisata Resmi | Teman Piknik Surabaya",
    description:
      "Pilihan paket wisata terlengkap dari Teman Piknik Tour Organizer Surabaya. Bergaransi dan berjadwal pasti.",
  },
};

export default function PaketPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#fbf9f5]">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#f0ede3] border-b border-[#ded8cb] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#526058]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#1f4f3b] transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#ded8cb]" />
            <span className="font-semibold text-[#161b18]">Katalog Paket Wisata</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="bg-[#123325] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md bg-[#eb6437] text-white text-xs font-bold uppercase tracking-wider mb-3">
              Katalog Perjalanan
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Pilihan Paket Wisata Seru &amp; Berkesan
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#ded8cb] leading-relaxed">
              Temukan pengalaman liburan impian Anda ke Bromo, Kawah Ijen, Malang, Bali, dan Yogyakarta.
              Tersedia pilihan Open Trip hemat dan Private Trip eksklusif bergaransi dari Surabaya.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Catalog with Filter & Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <PackageCatalogClient initialPackages={TOUR_PACKAGES} />
      </div>
    </main>
  );
}
