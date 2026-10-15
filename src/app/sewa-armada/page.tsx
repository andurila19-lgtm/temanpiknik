import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FLEET_VEHICLES } from "@/data/fleet";
import { BUSINESS, buildWhatsAppTransportUrl } from "@/data/business";
import { ChevronRight, Users, Briefcase, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Sewa Mobil & Jeep Bromo 4x4 Surabaya | Teman Piknik Transport",
  description:
    "Rental mobil wisata Surabaya: Sewa Jeep Bromo 4x4, Toyota HiAce Premio, Isuzu ELF Long, Medium Bus, & Innova Reborn. Unit terawat, driver profesional & bergaransi.",
  openGraph: {
    title: "Sewa Mobil & Armada Wisata Resmi Surabaya | Teman Piknik",
    description:
      "Layanan sewa armada wisata bergaransi di Surabaya: Jeep Bromo, HiAce, ELF, Bus Pariwisata untuk dinas, gathering, dan liburan keluarga.",
  },
};

export default function SewaArmadaPage() {
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
            <span className="font-semibold text-[#161b18]">Sewa Armada Wisata</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="bg-[#0f2b1f] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md bg-[#eb6437] text-white text-xs font-bold uppercase tracking-wider mb-3">
              Armada Resmi &amp; Terawat
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Sewa Mobil Wisata &amp; Jeep Bromo 4x4 Surabaya
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#ded8cb] leading-relaxed">
              Solusi transportasi perjalanan wisata, gathering kantor, ziarah, dan perjalanan bisnis.
              Dikelola oleh {BUSINESS.legalName} dengan jaminan unit prima dan driver profesional berpengalaman.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppTransportUrl("Halo Admin Teman Piknik, saya ingin konsultasi ketersediaan armada wisata.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#eb6437] hover:bg-[#d95328] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Admin Sewa Armada</span>
              </a>
              <span className="text-xs text-[#ded8cb] flex items-center gap-1.5 bg-white/10 px-3 py-2 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>Hotline: {BUSINESS.contact.whatsappTransportFormatted}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Catalog Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-1">
            Pilihan Kendaraan
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#161b18] tracking-tight">
            Daftar Armada Wisata Unggulan
          </h2>
          <p className="text-sm text-[#55625b] mt-1">
            Seluruh armada menjalani inspeksi berkala, full AC, dan dikemudikan oleh driver berlisensi resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FLEET_VEHICLES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-[#ded8cb] overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ebe6dc]">
                  <Image
                    src={vehicle.image}
                    alt={`Armada ${vehicle.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-md bg-[#1f4f3b] text-white text-xs font-bold shadow-sm">
                      {vehicle.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Vehicle Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#161b18] tracking-tight group-hover:text-[#1f4f3b] transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-[#55625b] mt-1.5 leading-relaxed">
                      {vehicle.description}
                    </p>
                  </div>

                  {/* Capacity & Luggage Badges */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#f0ede3] text-xs text-[#3b4540]">
                    <div className="flex items-center gap-2 bg-[#fbf9f5] p-2.5 rounded-xl border border-[#ebe6dc]">
                      <Users className="w-4 h-4 text-[#eb6437] shrink-0" />
                      <div>
                        <p className="text-[10px] text-[#74817a]">Kapasitas</p>
                        <p className="font-bold">{vehicle.capacity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-[#fbf9f5] p-2.5 rounded-xl border border-[#ebe6dc]">
                      <Briefcase className="w-4 h-4 text-[#1f4f3b] shrink-0" />
                      <div>
                        <p className="text-[10px] text-[#74817a]">Bagasi</p>
                        <p className="font-bold truncate">{vehicle.luggage}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold text-[#526058] uppercase tracking-wider">
                      Fasilitas Unit:
                    </p>
                    <ul className="text-xs text-[#3b4540] space-y-1">
                      {vehicle.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Routes */}
                  <div className="pt-2 border-t border-[#f0ede3]">
                    <p className="text-[11px] font-bold text-[#526058] uppercase tracking-wider mb-1.5">
                      Rute Favorit:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {vehicle.recommendedFor.map((rute, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#e3ede8] text-[#1f4f3b] text-[11px] font-medium"
                        >
                          {rute}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing & Booking Footer */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="p-3.5 rounded-xl bg-[#f5f2eb] border border-[#ded8cb] flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[10px] text-[#526058] block">Estimasi Tarif:</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#1f4f3b]">
                      {vehicle.indicativePrice}
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#eb6437]" />
                </div>

                <a
                  href={buildWhatsAppTransportUrl(`Halo Admin Sewa Armada, saya ingin memesan unit *${vehicle.name}*. Mohon info ketersediaan dan tarif resminya.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1f4f3b] hover:bg-[#173d2d] text-white font-bold text-xs transition-all shadow active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Sewa {vehicle.name.split(" ")[0]} via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Keunggulan Sewa Armada Teman Piknik */}
        <div className="mt-16 bg-white rounded-2xl border border-[#ded8cb] p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-1">
              Standar Layanan
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#161b18] tracking-tight">
              Kenapa Memilih Sewa Armada di Teman Piknik?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#e3ede8] text-[#1f4f3b] flex items-center justify-center font-extrabold text-sm">
                01
              </div>
              <h4 className="font-bold text-sm text-[#161b18]">Driver Handal &amp; Berlisensi</h4>
              <p className="text-xs text-[#55625b] leading-relaxed">
                Driver ramah, hafal rute wisata Jawa-Bali, serta berpengalaman di medan ekstrem Bromo &amp; Ijen.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#feece5] text-[#eb6437] flex items-center justify-center font-extrabold text-sm">
                02
              </div>
              <h4 className="font-bold text-sm text-[#161b18]">Unit Bersih &amp; Prima</h4>
              <p className="text-xs text-[#55625b] leading-relaxed">
                Semua kendaraan diservis berkala, wangi, full AC dingin, dan dilengkapi peralatan keselamatan.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#e3ede8] text-[#1f4f3b] flex items-center justify-center font-extrabold text-sm">
                03
              </div>
              <h4 className="font-bold text-sm text-[#161b18]">Jaminan Pasti Berangkat</h4>
              <p className="text-xs text-[#55625b] leading-relaxed">
                Legalitas berbadan hukum resmi PT. Teman Piknik Ekasuga Perkasa menjamin keamanan pemesanan Anda.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#feece5] text-[#eb6437] flex items-center justify-center font-extrabold text-sm">
                04
              </div>
              <h4 className="font-bold text-sm text-[#161b18]">Konsultasi Rute Gratis</h4>
              <p className="text-xs text-[#55625b] leading-relaxed">
                Tim admin siap membantu menyusun estimasi waktu tempuh dan rute terbaik tanpa biaya tambahan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
