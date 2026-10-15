import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DESTINATIONS } from "@/data/destinations";
import { buildWhatsAppUrl } from "@/data/business";
import { ChevronRight, Compass, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Destinasi Wisata Populer | Teman Piknik Tour Organizer",
  description:
    "Eksplorasi destinasi liburan terbaik di Indonesia: Gunung Bromo, Kawah Ijen Banyuwangi, Eksotisme Bali, Budaya Yogyakarta, dan Kesejukan Malang Batu bersama Teman Piknik.",
  openGraph: {
    title: "Destinasi Wisata Nusantara | Teman Piknik Tour Organizer Surabaya",
    description:
      "Rute wisata favorit Jawa Timur, Bali, dan Yogyakarta. Layanan tour profesional dari Surabaya.",
  },
};

export default function DestinasiPage() {
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
            <span className="font-semibold text-[#161b18]">Jelajah Destinasi</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="bg-[#123325] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md bg-[#eb6437] text-white text-xs font-bold uppercase tracking-wider mb-3">
              Jelajah Nusantara
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Destinasi Wisata Pilihan Terbaik
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#ded8cb] leading-relaxed">
              Dari pesona magis kawah vulkanik Jawa Timur hingga pantai eksotis Bali dan kekayaan warisan budaya Yogyakarta.
              Temukan inspirasi destinasi liburan seru Anda berikutnya.
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#ded8cb] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Hero Image */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#ebe6dc]">
                  <Image
                    src={dest.heroImage}
                    alt={`Destinasi ${dest.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md bg-white/95 text-[#161b18] text-xs font-bold shadow-sm">
                      {dest.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-black/60 text-white text-[11px] font-medium border border-white/20">
                      {dest.province}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                      {dest.name}
                    </h2>
                    <p className="text-xs text-[#f5f2eb]/90 mt-1 line-clamp-1">
                      {dest.tagline}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#55625b] leading-relaxed line-clamp-3">
                    {dest.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-3 border-t border-[#f0ede3]">
                    <p className="text-[11px] font-bold text-[#526058] uppercase tracking-wider flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#eb6437]" />
                      <span>Daya Tarik Utama:</span>
                    </p>
                    <ul className="text-xs text-[#3b4540] space-y-1">
                      {dest.highlights.map((hl, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#eb6437] shrink-0" />
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 space-y-2">
                <Link
                  href={`/paket?destinasi=${dest.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1f4f3b] hover:bg-[#173d2d] text-white text-xs font-bold transition-colors text-center active:scale-95"
                >
                  <span>Lihat Paket Wisata {dest.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={buildWhatsAppUrl(`Halo Teman Piknik, saya tertarik dengan destinasi wisata *${dest.name}*. Mohon info paket tour yang tersedia.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-[#f0ede3] text-[#1f4f3b] border border-[#ded8cb] text-xs font-bold transition-colors text-center active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#eb6437]" />
                  <span>Konsultasi Destinasi via WA</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
