import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, buildWhatsAppUrl, buildWhatsAppTransportUrl } from "@/data/business";
import { ChevronRight, ShieldCheck, MapPin, Award, Users, HeartHandshake, MessageCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | PT. Teman Piknik Ekasuga Perkasa Surabaya",
  description:
    "Profil resmi Teman Piknik Tour Organizer Surabaya. Agen perjalanan wisata berbadan hukum resmi dengan 386+ ulasan Google Maps dan layanan sewa armada terpercaya.",
  openGraph: {
    title: "Tentang Teman Piknik Tour Organizer Surabaya",
    description:
      "Mengenal lebih dekat PT. Teman Piknik Ekasuga Perkasa: Legalitas, komitmen layanan wisata, dan sewa transportasi bergaransi di Surabaya.",
  },
};

export default function TentangKamiPage() {
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
            <span className="font-semibold text-[#161b18]">Tentang Kami</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="bg-[#123325] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md bg-[#eb6437] text-white text-xs font-bold uppercase tracking-wider mb-3">
              Profil Perusahaan
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Mengenal Teman Piknik Tour Organizer
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#ded8cb] leading-relaxed">
              Mitra perjalanan wisata dan penyedia armada transportasi resmi berbasis di Surabaya, Jawa Timur.
              Hadir untuk menciptakan liburan yang aman, nyaman, dan penuh momen berharga bagi setiap penjelajah.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview & Legal Identity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story (Col 1-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-[#ded8cb] shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-black/10 shadow-md bg-black">
                <Image
                  src="/images/logo.png"
                  alt="Logo Resmi Teman Piknik"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#161b18] tracking-tight">
                  {BUSINESS.name}
                </h2>
                <p className="text-xs font-bold text-[#eb6437] uppercase tracking-wider">
                  {BUSINESS.legalName}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#55625b] leading-relaxed">
              Berawal dari kecintaan terhadap keindahan alam Nusantara, Teman Piknik berkembang menjadi tour organizer profesional di Surabaya yang telah melayani ribuan wisatawan perorangan, keluarga, hingga rombongan instansi perusahaan.
            </p>

            <p className="text-sm sm:text-base text-[#55625b] leading-relaxed">
              Kami memadukan ketepatan jadwal, armada prima, tour guide ramah, dan transparansi biaya tanpa biaya tersembunyi. Dari kemegahan matahari terbit di Gunung Bromo hingga magisnya api biru Kawah Ijen, kami siap mendampingi setiap langkah petualangan Anda.
            </p>

            {/* Core Values */}
            <div className="pt-4 border-t border-[#f0ede3] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#e3ede8] text-[#1f4f3b] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#161b18]">Badan Hukum Resmi</h3>
                  <p className="text-xs text-[#55625b] mt-0.5">
                    Transaksi aman dan berbadan hukum PT resmi di Surabaya.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#feece5] text-[#eb6437] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#161b18]">Crew Berpengalaman</h3>
                  <p className="text-xs text-[#55625b] mt-0.5">
                    Tour leader dan driver lokal yang ramah, sopan, dan sigap membantu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#e3ede8] text-[#1f4f3b] flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#161b18]">Garansi Pasti Berangkat</h3>
                  <p className="text-xs text-[#55625b] mt-0.5">
                    Jadwal perjalanan tertata rapi dan kepastian keberangkatan terjamin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#feece5] text-[#eb6437] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#161b18]">386+ Ulasan Google Maps</h3>
                  <p className="text-xs text-[#55625b] mt-0.5">
                    Reputasi nyata yang diverifikasi langsung oleh pelanggan kami.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Verification Sidebar (Col 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Legal Entity Card */}
            <div className="bg-[#1f4f3b] text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-white/15 text-xs font-bold uppercase tracking-wider">
                Verifikasi Legalitas
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                {BUSINESS.legalName}
              </h3>
              <div className="space-y-2 text-xs text-[#ded8cb]">
                <p>
                  <strong>Bidang Usaha:</strong> Tour Organizer, Biro Perjalanan Wisata, dan Penyedia Jasa Transportasi Wisata.
                </p>
                <p>
                  <strong>Domisili:</strong> Surabaya, Jawa Timur, Indonesia.
                </p>
              </div>

              <div className="pt-2 border-t border-white/15 space-y-2">
                <a
                  href={BUSINESS.contact.instagramBankUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                    <span>Rekening &amp; Bukti Transfer Resmi</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                </a>

                <a
                  href={BUSINESS.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#eb6437]" />
                    <span>386+ Ulasan di Google Maps</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                </a>
              </div>
            </div>

            {/* Office Location Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#ded8cb] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#1f4f3b] font-bold text-sm">
                <MapPin className="w-4 h-4 text-[#eb6437]" />
                <span>Alamat Kantor Terdaftar</span>
              </div>
              <p className="text-xs sm:text-sm text-[#55625b] leading-relaxed">
                {BUSINESS.address.full}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#eb6437] hover:bg-[#d95328] text-white text-xs font-bold transition-all text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Admin Trip Wisata</span>
                </a>
                <a
                  href={buildWhatsAppTransportUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1f4f3b] hover:bg-[#173d2d] text-white text-xs font-bold transition-all text-center"
                >
                  <span>Admin Sewa Mobil</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
