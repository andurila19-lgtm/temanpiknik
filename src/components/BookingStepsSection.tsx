import { Compass, MessageCircle, CalendarCheck, CheckCircle } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Compass,
    title: "Pilih Paket atau Destinasi",
    description:
      "Telusuri katalog pilihan kami untuk Bromo, Ijen, Bali, Jogja, Malang, atau Banyuwangi sesuai preferensi liburan Anda.",
  },
  {
    step: "02",
    icon: MessageCircle,
    title: "Hubungi via WhatsApp",
    description:
      "Klik tombol WhatsApp untuk terhubung langsung dengan tim kami. Sampaikan paket yang diminati atau rencana rute Anda.",
  },
  {
    step: "03",
    icon: CalendarCheck,
    title: "Konfirmasi Rincian Resmi",
    description:
      "Diskusikan tanggal keberangkatan, ketersediaan armada/kuota, rincian fasilitas resmi, serta estimasi penawaran yang sesuai.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Lanjutkan Pemesanan",
    description:
      "Setelah seluruh informasi dan kesepakatan penawaran resmi telah jelas, lanjutkan proses reservasi dengan tenang dan nyaman.",
  },
];

export default function BookingStepsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-2">
            Alur Praktis
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#161b18] tracking-tight">
            Cara Mudah Memulai Perjalananmu
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#55625b] leading-relaxed">
            Empat langkah praktis dari inspirasi awal hingga siap berangkat menjelajah bersama Teman Piknik.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#ded8cb] relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#e3ede8] text-[#1f4f3b] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6 text-[#1f4f3b]" />
                    </div>
                    <span className="text-2xl font-black text-[#ded8cb] tracking-wider">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#161b18] mb-2.5">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#55625b] leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#f0ede3] text-[11px] font-semibold text-[#eb6437]">
                  Langkah {idx + 1} dari 4
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
