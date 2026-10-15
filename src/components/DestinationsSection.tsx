import Image from "next/image";
import { DESTINATIONS } from "@/data/destinations";

interface DestinationsSectionProps {
  onSelectDestination: (destSlug: string) => void;
}

export default function DestinationsSection({ onSelectDestination }: DestinationsSectionProps) {
  return (
    <section id="destinasi" className="py-20 lg:py-28 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-2">
            Destinasi Unggulan
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#161b18] tracking-tight">
            Eksplorasi Sudut Terindah Nusantara
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#55625b] leading-relaxed">
            Dari kemegahan kawah vulkanik Jawa Timur, eksotisme Pulau Dewata, hingga kekayaan budaya Yogyakarta. Temukan destinasi yang paling memanggil jiwa petualangmu.
          </p>
        </div>

        {/* Destination Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectDestination(dest.slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectDestination(dest.slug);
                }
              }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#ded8cb] hover:border-[#1f4f3b]/30 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eb6437]"
            >
              {/* Image Container with Editorial Ratio */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#ebe6dc]">
                <Image
                  src={dest.heroImage}
                  alt={`Destinasi wisata ${dest.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Badge & Province */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-white/95 text-[#161b18] text-xs font-bold shadow-sm">
                    {dest.badge}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-black/50 text-white text-[11px] font-medium border border-white/20">
                    {dest.province}
                  </span>
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-[#f5f2eb]/90 mt-1 line-clamp-1">
                    {dest.tagline}
                  </p>
                </div>
              </div>

              {/* Destination Details */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#55625b] leading-relaxed line-clamp-3">
                  {dest.description}
                </p>

                {/* Highlights tags */}
                <div className="space-y-1.5 pt-3 border-t border-[#f0ede3]">
                  <p className="text-[11px] font-semibold text-[#526058] uppercase tracking-wider">
                    Daya Tarik Utama:
                  </p>
                  <ul className="text-xs text-[#3b4540] space-y-1">
                    {dest.highlights.slice(0, 2).map((hl, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#eb6437]" />
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                <div className="pt-2">
                  <span
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#f5f2eb] group-hover:bg-[#1f4f3b] text-[#1f4f3b] group-hover:text-white text-xs font-bold transition-all duration-200 text-center"
                  >
                    Lihat Paket Wisata {dest.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
