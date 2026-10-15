import { Sliders, FileText, MessageCircle, HelpCircle } from "lucide-react";

const VALUE_POINTS = [
  {
    icon: Sliders,
    title: "Pilihan Perjalanan Fleksibel",
    description:
      "Rencana trip dapat disesuaikan dengan preferensi Anda, mulai dari open trip hemat, private trip intim keluarga, hingga agenda liburan rombongan kantor.",
  },
  {
    icon: FileText,
    title: "Informasi Perjalanan Jelas",
    description:
      "Kami menyusun ringkasan rute, perkiraan durasi, dan gambaran fasilitas secara transparan sehingga Anda dapat merencanakan waktu dan anggaran liburan dengan tenang.",
  },
  {
    icon: MessageCircle,
    title: "Komunikasi Pemesanan Mudah",
    description:
      "Tidak perlu alur berbelit. Cukup hubungi kami melalui WhatsApp untuk menanyakan ketersediaan tanggal, berdiskusi, dan mendapatkan penawaran resmi.",
  },
  {
    icon: HelpCircle,
    title: "Dukungan Konsultasi Awal",
    description:
      "Bingung memilih destinasi yang tepat untuk musim liburan Anda? Diskusikan rencana liburan Anda bersama kami tanpa tekanan untuk langsung memesan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="mengapa-kami" className="py-20 lg:py-28 bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-2">
            Nilai Layanan
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#161b18] tracking-tight">
            Mengapa Merencanakan Liburan Bersama Kami?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#55625b] leading-relaxed">
            Teman Piknik hadir sebagai partner perjalanan yang mengutamakan kenyamanan, kemudahan komunikasi, dan kejelasan rencana petualangan Anda.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {VALUE_POINTS.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#ded8cb] hover:border-[#1f4f3b]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f2eb] text-[#1f4f3b] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#eb6437]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#161b18] mb-2.5">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55625b] leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#f0ede3] text-[11px] font-medium text-[#526058]">
                  Fokus Kenyamanan Peserta
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
