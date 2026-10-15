import Image from "next/image";
import { BUSINESS, buildWhatsAppUrl } from "@/data/business";
import { MapPin, ExternalLink, MessageCircle, Compass } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="tentang-kami" className="py-20 lg:py-28 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-[#ded8cb]">
              <Image
                src="/images/destinations/bromo-jeep.jpg"
                alt="Petualangan bersama Teman Piknik Tour Organizer"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Location Tag Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 shadow-md text-[#161b18]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1f4f3b] uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#eb6437]" />
                  <span>Berpusat di Surabaya, Jawa Timur</span>
                </div>
                <p className="text-xs text-[#55625b] mt-1 line-clamp-2">
                  {BUSINESS.address.full}
                </p>
              </div>
            </div>

            {/* Accent badge floating on side */}
            <div className="hidden sm:flex absolute -top-5 -right-5 bg-[#123325] text-white p-4 rounded-2xl shadow-xl border border-white/10 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#eb6437] flex items-center justify-center text-white shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold">Teman Perjalanan Seru</p>
                <p className="text-[#ded8cb]">Tour Organizer</p>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Story & Real Facts (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-2">
                Tentang Kami
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#161b18] tracking-tight">
                Membantu Setiap Orang Merencanakan Liburan Lebih Mudah & Berkesan
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#55625b] leading-relaxed">
              <p>
                <strong className="text-[#161b18]">Teman Piknik Tour Organizer</strong> (berbadan hukum resmi <strong className="text-[#161b18]">{BUSINESS.legalName}</strong>) adalah agen perjalanan wisata dan penyedia layanan rental armada wisata berbasis di Surabaya, Jawa Timur. Kami melayani paket open trip, private trip rombongan keluarga maupun gathering kantor, hingga sewa Jeep Bromo 4x4, HiAce, ELF, dan Bus Pariwisata.
              </p>
              <p>
                Kami percaya bahwa liburan yang menyenangkan berawal dari perencanaan yang jelas. Karena itu, kami mengutamakan komunikasi yang terbuka, informasi itinerary yang transparan, ketersediaan unit armada yang prima dan bersih, serta kesiapan mendengarkan preferensi perjalanan Anda untuk rute Bromo, Kawah Ijen, Bali, Jogja, Malang, dan Banyuwangi.
              </p>
            </div>

            {/* Verified Address Block */}
            <div className="bg-white rounded-2xl p-6 border border-[#ded8cb] shadow-sm">
              <h3 className="text-sm font-bold text-[#161b18] flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#eb6437]" />
                <span>Alamat Kantor Terdaftar</span>
              </h3>
              <p className="text-sm text-[#55625b] leading-relaxed">
                {BUSINESS.address.street}, {BUSINESS.address.subdistrict}, {BUSINESS.address.district}, {BUSINESS.address.city}, {BUSINESS.address.province} {BUSINESS.address.postalCode}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1f4f3b] hover:bg-[#173d2d] text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-[#eb6437]" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                </a>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f5f2eb] hover:bg-[#ebe6dc] text-[#161b18] text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Hubungi Tim via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
