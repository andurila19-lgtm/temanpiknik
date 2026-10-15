import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, buildWhatsAppUrl, buildWhatsAppTransportUrl } from "@/data/business";
import { ChevronRight, MapPin, MessageCircle, ShieldCheck, ExternalLink, Car } from "lucide-react";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Kontak & Lokasi Kantor Surabaya | Teman Piknik Tour Organizer",
  description:
    "Hubungi Teman Piknik Tour Organizer Surabaya via WhatsApp Admin Trip Wisata (+62 852-5715-7171) atau Admin Sewa Armada (+62 822-4526-6116). Kantor resmi di Dinoyo Lor, Tegalsari, Surabaya.",
  openGraph: {
    title: "Kontak Resmi Teman Piknik Tour Organizer Surabaya",
    description:
      "Kontak resmi PT. Teman Piknik Ekasuga Perkasa Surabaya: Konsultasi paket wisata dan sewa armada 24/7 via WhatsApp.",
  },
};

export default function KontakPage() {
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
            <span className="font-semibold text-[#161b18]">Kontak &amp; Kantor</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="bg-[#123325] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md bg-[#eb6437] text-white text-xs font-bold uppercase tracking-wider mb-3">
              Layanan Pelanggan
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Hubungi Tim Teman Piknik
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#ded8cb] leading-relaxed">
              Kami siap melayani kebutuhan konsultasi rencana perjalanan liburan, reservasi armada sewa,
              maupun penawaran gathering perusahaan di Surabaya dan sekitarnya.
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dual Admin Channels & Office Info (Col 1-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-1">
                Kanal Komunikasi Cepat
              </p>
              <h2 className="text-2xl font-extrabold text-[#161b18] tracking-tight">
                Pilih Layanan Sesuai Kebutuhan Anda
              </h2>
            </div>

            {/* Admin 1: Trip Wisata */}
            <div className="bg-white rounded-2xl p-6 border border-[#ded8cb] shadow-sm hover:border-[#eb6437] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#feece5] text-[#eb6437] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#feece5] text-[#c2431a] text-[11px] font-bold">
                    Admin 1: Paket Wisata
                  </span>
                  <h3 className="font-bold text-base text-[#161b18]">
                    Konsultasi Tour &amp; Open/Private Trip
                  </h3>
                  <p className="text-xs text-[#55625b]">
                    Untuk pemesanan paket Bromo, Kawah Ijen, Malang, Bali, dan Yogyakarta.
                  </p>
                  <p className="font-extrabold text-[#eb6437] text-base pt-1">
                    {BUSINESS.contact.whatsappTourFormatted}
                  </p>
                  <div className="pt-2">
                    <a
                      href={buildWhatsAppUrl("Halo Admin Trip Teman Piknik, saya ingin konsultasi paket wisata.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#eb6437] hover:bg-[#d95328] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat WhatsApp Admin Tour</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin 2: Sewa Mobil & Jeep Bromo */}
            <div className="bg-white rounded-2xl p-6 border border-[#ded8cb] shadow-sm hover:border-[#1f4f3b] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e3ede8] text-[#1f4f3b] flex items-center justify-center shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#e3ede8] text-[#1f4f3b] text-[11px] font-bold">
                    Admin 2: Rental Armada
                  </span>
                  <h3 className="font-bold text-base text-[#161b18]">
                    Sewa Mobil, HiAce, ELF, &amp; Jeep Bromo 4x4
                  </h3>
                  <p className="text-xs text-[#55625b]">
                    Untuk ketersediaan unit armada, jadwal sewa, dan tarif perjalanan luar kota.
                  </p>
                  <p className="font-extrabold text-[#1f4f3b] text-base pt-1">
                    {BUSINESS.contact.whatsappTransportFormatted}
                  </p>
                  <div className="pt-2">
                    <a
                      href={buildWhatsAppTransportUrl("Halo Admin Armada Teman Piknik, saya ingin menanyakan sewa kendaraan wisata.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1f4f3b] hover:bg-[#173d2d] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      <Car className="w-3.5 h-3.5" />
                      <span>Chat WhatsApp Admin Armada</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kantor Fisik & Legalitas */}
            <div className="bg-white rounded-2xl p-6 border border-[#ded8cb] shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#eb6437] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#161b18]">Alamat Kantor Surabaya:</h4>
                  <p className="text-xs text-[#55625b] mt-0.5 leading-relaxed">
                    {BUSINESS.address.full}
                  </p>
                  <a
                    href={BUSINESS.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#eb6437] hover:underline font-bold mt-2"
                  >
                    <span>Petunjuk Arah Google Maps (386+ Ulasan)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#f0ede3] flex items-center justify-between text-xs text-[#526058]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                  <span>Entitas: {BUSINESS.legalName}</span>
                </span>
                <a
                  href={BUSINESS.contact.instagramBankUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#eb6437] hover:underline font-bold"
                >
                  Cek Rekening Resmi
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Fast Inquiry Form (Col 7-12) */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-10 border border-[#ded8cb] shadow-sm">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-md bg-[#e3ede8] text-[#1f4f3b] text-xs font-bold uppercase tracking-wider mb-2">
                Formulir Cepat
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#161b18] tracking-tight">
                Kirim Pesan Konsultasi
              </h3>
              <p className="text-xs sm:text-sm text-[#55625b] mt-1">
                Isi rincian rencana perjalanan Anda di bawah ini untuk terhubung langsung dengan WhatsApp tim konsultan kami.
              </p>
            </div>

            <ContactFormClient />
          </div>
        </div>
      </div>
    </main>
  );
}
