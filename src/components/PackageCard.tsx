import Image from "next/image";
import Link from "next/link";
import { TourPackage } from "@/data/packages";
import { buildWhatsAppUrl } from "@/data/business";
import { Clock, MapPin, CheckCircle2, MessageCircle } from "lucide-react";

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#ded8cb] hover:border-[#1f4f3b]/30 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full">
      {/* Thumbnail with overlay & badge */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ebe6dc]">
        <Image
          src={pkg.heroImage}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#123325]/90 text-white text-xs font-semibold shadow-sm border border-white/20">
            <MapPin className="w-3 h-3 text-[#eb6437]" />
            <span>{pkg.destinationName}</span>
          </span>

          {pkg.badge && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#eb6437] text-white text-[11px] font-bold shadow-sm">
              {pkg.badge}
            </span>
          )}
        </div>

        {/* Duration Chip at bottom of image */}
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-white text-xs font-medium bg-black/60 px-2.5 py-1 rounded-md border border-white/15">
          <Clock className="w-3.5 h-3.5 text-[#eb6437]" />
          <span>{pkg.duration}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Trip Types chips */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {pkg.tripTypes.slice(0, 2).map((type) => (
              <span
                key={type}
                className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#e3ede8] text-[#1f4f3b]"
              >
                {type}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#161b18] group-hover:text-[#1f4f3b] transition-colors leading-snug">
            <Link href={`/paket/${pkg.slug}`}>{pkg.title}</Link>
          </h3>

          {/* Summary */}
          <p className="mt-2 text-xs sm:text-sm text-[#55625b] leading-relaxed line-clamp-2">
            {pkg.summary}
          </p>

          {/* Highlights Preview */}
          <div className="mt-4 pt-3 border-t border-[#f0ede3] space-y-1.5">
            {pkg.highlights.slice(0, 2).map((hl, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#3b4540]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#29644b] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-4 border-t border-[#f0ede3] flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[11px] text-[#526058] block">Mulai dari (indikatif)</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black text-[#1f4f3b] tracking-tight">
                  {pkg.indicativePriceDisplay}
                </span>
                <span className="text-xs text-[#526058] font-normal">{pkg.priceUnit}</span>
              </div>
            </div>

            <span className="text-[10px] text-[#eb6437] font-semibold bg-[#feece5] px-2 py-0.5 rounded-md">
              Demo Contoh
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/paket/${pkg.slug}`}
              className="inline-flex items-center justify-center bg-[#f5f2eb] hover:bg-[#e3ded1] text-[#161b18] text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors active:scale-95 text-center"
            >
              <span>Lihat Detail</span>
            </Link>

            <a
              href={buildWhatsAppUrl(pkg.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-[#eb6437] hover:bg-[#d95328] text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-all shadow-sm active:scale-95 text-center"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Tanya WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
