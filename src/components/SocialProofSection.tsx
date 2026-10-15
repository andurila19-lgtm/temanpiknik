import { BUSINESS } from "@/data/business";
import { MapPin, ExternalLink, MessageSquareQuote, CheckCircle2 } from "lucide-react";

export default function SocialProofSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#123325] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Review Count & Verification */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#eb6437]">
              Transparansi Ulasan Publik
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ulasan Nyata dari Pengunjung di Google Maps
            </h2>

            <p className="text-sm sm:text-base text-[#ded8cb] leading-relaxed">
              Kredibilitas sebuah perjalanan tercermin dari pengalaman jujur mereka yang pernah berinteraksi. Kami menghargai keaslian setiap suara dan mengundang Anda untuk melihat langsung seluruh ulasan publik Teman Piknik Tour Organizer di Google Maps.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-[#eb6437] shrink-0 mt-0.5" />
              <div className="text-xs text-[#c7c0b0] leading-relaxed">
                <strong className="text-white">Komitmen Keaslian:</strong> Kami tidak menampilkan kutipan testimoni fiktif atau mengarang ulasan buatan. Semua catatan pengalaman dapat Anda telusuri langsung pada profil listing publik bisnis kami.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Google Maps Callout Card */}
          <div className="lg:col-span-6">
            <div className="bg-white text-[#161b18] rounded-2xl p-7 sm:p-9 shadow-lg border border-white/20">
              <div className="flex items-center justify-between pb-6 border-b border-[#ebe6dc]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f2eb] flex items-center justify-center text-[#1f4f3b] shrink-0">
                    <MapPin className="w-6 h-6 text-[#eb6437]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#161b18]">
                      Teman Piknik Tour Organizer
                    </h3>
                    <p className="text-xs text-[#526058]">
                      Kecamatan Tegalsari, Surabaya
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#e3ede8] text-[#1f4f3b]">
                  Google Maps
                </span>
              </div>

              {/* Verified Count Display */}
              <div className="py-8 text-center flex flex-col items-center">
                <div className="text-5xl sm:text-6xl font-black text-[#1f4f3b] tracking-tight">
                  {BUSINESS.socialProof.reviewCount}+
                </div>
                <div className="text-sm sm:text-base font-semibold text-[#161b18] mt-2">
                  Ulasan Publik Terdaftar
                </div>
                <p className="text-xs text-[#526058] mt-1 max-w-sm">
                  {BUSINESS.socialProof.note}
                </p>
              </div>

              {/* Action Link to Google Maps */}
              <div className="pt-2">
                <a
                  href={BUSINESS.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1f4f3b] hover:bg-[#173d2d] text-white font-semibold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Lihat Seluruh Ulasan di Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-white/70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
