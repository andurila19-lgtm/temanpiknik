import Image from "next/image";
import Link from "next/link";
import { BUSINESS, buildWhatsAppUrl, buildWhatsAppTransportUrl } from "@/data/business";
import { MessageCircle, MapPin, Car, Bus, Users, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Background Image with Natural Depth Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/destinations/bromo-hero.jpg"
          alt="Lanskap megah Gunung Bromo saat fajar menyingsing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100"
        />
        {/* Layered gradients: dark forest green vignette, maintaining photography clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091710] via-[#0c1f16]/80 to-[#0c1f16]/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Entity & Trust Tag */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 mb-5 shadow-sm">
          <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-white/20 bg-black">
            <Image
              src="/images/logo.png"
              alt="Logo Resmi Teman Piknik"
              fill
              sizes="20px"
              className="object-cover"
            />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#f5f2eb]">
            {BUSINESS.legalName} • Surabaya
          </span>
        </div>

        {/* Commercial & Customer-Focused Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl">
          Paket Wisata &amp; Sewa Armada <br className="hidden sm:inline" />
          <span className="text-[#eb6437]">Resmi Bergaransi di Surabaya</span>
        </h1>

        {/* Value Proposition Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#f5f2eb]/90 max-w-3xl leading-relaxed font-normal">
          Pilihan lengkap liburan tanpa repot: booking Open &amp; Private Trip (Bromo, Ijen, Malang, Bali, Jogja) atau sewa armada siap jalan (Jeep Bromo 4x4, HiAce Premio, ELF Long, &amp; Bus Pariwisata).
        </p>

        {/* Direct Action Revenue CTAs */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          {/* CTA 1: Booking Paket Wisata */}
          <Link
            href="/paket"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#eb6437] hover:bg-[#d95328] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95 text-center min-h-[44px]"
          >
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Pilih Paket Wisata</span>
          </Link>

          {/* CTA 2: Sewa Jeep & Armada */}
          <Link
            href="/sewa-armada"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all border border-white/25 active:scale-95 text-center min-h-[44px] backdrop-blur-sm"
          >
            <Car className="w-4 h-4 text-[#f27f57] shrink-0" />
            <span>Sewa Armada &amp; Jeep</span>
          </Link>

          {/* CTA 3: Konsultasi Admin Tour */}
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-[#ded8cb] hover:text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all border border-white/15 min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>Chat Admin WhatsApp</span>
          </a>
        </div>

        {/* 4 Commercial Need Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-6xl w-full text-left">
          {/* Service 1: Paket Wisata */}
          <div className="bg-[#0c2217]/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex flex-col justify-between hover:border-[#eb6437]/50 hover:bg-[#0f2b1f]/90 transition-all duration-200">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#eb6437]/20 text-[#eb6437] flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <h2 className="text-white font-bold text-sm">Paket Tour &amp; Open Trip</h2>
              <p className="text-[#ded8cb] text-xs mt-1 leading-relaxed">
                Bromo Sunrise, Kawah Ijen, Malang Batu, Bali, &amp; Jogja. Tersedia trip gabungan maupun privat.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                href="/paket"
                className="text-xs font-bold text-[#f27f57] hover:underline inline-flex items-center gap-1"
              >
                <span>Lihat Katalog Paket &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Service 2: Sewa Jeep Bromo */}
          <div className="bg-[#0c2217]/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex flex-col justify-between hover:border-[#eb6437]/50 hover:bg-[#0f2b1f]/90 transition-all duration-200">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#eb6437]/20 text-[#eb6437] flex items-center justify-center mb-3">
                <Car className="w-4 h-4" />
              </div>
              <h2 className="text-white font-bold text-sm">Sewa Jeep Bromo 4x4</h2>
              <p className="text-[#ded8cb] text-xs mt-1 leading-relaxed">
                Jeep tangguh rute sunrise Penanjakan, kawah Bromo, Pasir Berbisik, &amp; Savana Teletubbies.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                href="/sewa-armada"
                className="text-xs font-bold text-[#f27f57] hover:underline inline-flex items-center gap-1"
              >
                <span>Cek Tarif Sewa Jeep &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Service 3: Sewa HiAce & ELF */}
          <div className="bg-[#0c2217]/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex flex-col justify-between hover:border-[#eb6437]/50 hover:bg-[#0f2b1f]/90 transition-all duration-200">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#eb6437]/20 text-[#eb6437] flex items-center justify-center mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h2 className="text-white font-bold text-sm">Sewa HiAce &amp; ELF Giga</h2>
              <p className="text-[#ded8cb] text-xs mt-1 leading-relaxed">
                Toyota HiAce Premio/Commuter &amp; Isuzu ELF Long (10-19 seat). Unit wangi, AC dingin, &amp; driver ramah.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <Link
                href="/sewa-armada"
                className="text-xs font-bold text-[#f27f57] hover:underline inline-flex items-center gap-1"
              >
                <span>Pilihan Unit Armada &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Service 4: Sewa Bus & Mobil Keluarga */}
          <div className="bg-[#0c2217]/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex flex-col justify-between hover:border-[#eb6437]/50 hover:bg-[#0f2b1f]/90 transition-all duration-200">
            <div>
              <div className="w-9 h-9 rounded-xl bg-[#eb6437]/20 text-[#eb6437] flex items-center justify-center mb-3">
                <Bus className="w-4 h-4" />
              </div>
              <h2 className="text-white font-bold text-sm">Bus Wisata &amp; Mobil MPV</h2>
              <p className="text-[#ded8cb] text-xs mt-1 leading-relaxed">
                Medium Bus (30-35 seat), Big Bus (45-59 seat), serta Innova Reborn &amp; Avanza untuk rombongan.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <a
                href={buildWhatsAppTransportUrl("Bus Pariwisata / Mobil MPV")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#f27f57] hover:underline inline-flex items-center gap-1"
              >
                <span>Tanya Admin Transport &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Human Credibility Trust Line */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#ded8cb]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#eb6437]" />
            <span>Badan Usaha Resmi PT</span>
          </div>
          <span className="text-white/30 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-white">386+</span>
            <span>Ulasan Google Maps</span>
          </div>
          <span className="text-white/30 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span>Jaminan Pasti Berangkat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
