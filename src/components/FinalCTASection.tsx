import Image from "next/image";
import { buildWhatsAppUrl, BUSINESS } from "@/data/business";
import { MessageCircle } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0a1c14] text-white">
      {/* Background with Dark Nature Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/destinations/bali-hero.jpg"
          alt="Latar belakang panorama nusantara"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1c14] via-[#0f2b1f]/90 to-[#0a1c14]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Accent Kicker */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#eb6437] mb-3">
          Waktunya Berangkat Bersama Teman Piknik
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white max-w-2xl">
          Siap Berangkat Liburan atau Butuh Sewa Armada?
        </h2>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-[#ded8cb] max-w-xl leading-relaxed">
          Hubungi admin kami langsung. Dapatkan penawaran harga terbaik untuk paket tour Bromo-Ijen-Bali maupun sewa Jeep, HiAce, dan Bus Pariwisata di Surabaya.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#eb6437] hover:bg-[#d95328] text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-150 shadow-md hover:shadow-lg active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Pesan Paket Wisata</span>
          </a>

          <a
            href={BUSINESS.contact.whatsappTransportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-150 border border-white/25 active:scale-95 shadow-sm"
          >
            <span>Sewa Jeep &amp; Armada Wisata</span>
          </a>
        </div>

        {/* Direct Phone Hint */}
        <p className="mt-6 text-xs text-[#a9a291]">
          Admin Tour: <span className="text-white font-semibold">{BUSINESS.contact.whatsappTourFormatted}</span> • Sewa Armada: <span className="text-white font-semibold">{BUSINESS.contact.whatsappTransportFormatted}</span> • {BUSINESS.legalName} Surabaya
        </p>
      </div>
    </section>
  );
}
