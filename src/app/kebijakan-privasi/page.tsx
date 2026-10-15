import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { ChevronRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Teman Piknik Tour Organizer",
  description:
    "Kebijakan privasi dan transparansi data pengunjung Teman Piknik Tour Organizer Surabaya.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fbf9f5] min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#55625b] mb-6">
          <Link href="/" className="hover:text-[#1f4f3b] font-medium transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#a9a291]" />
          <span className="text-[#161b18] font-bold">Kebijakan Privasi</span>
        </nav>

        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#ded8cb] shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-2">
            Transparansi & Keamanan
          </p>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#161b18] tracking-tight">
            Kebijakan Privasi
          </h1>
          <p className="mt-2 text-xs text-[#526058]">
            Terakhir diperbarui: 15 Oktober 2026
          </p>

          <div className="mt-8 space-y-6 text-sm text-[#55625b] leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-[#161b18] mb-2">
                1. Gambaran Umum & Status Demo Website
              </h2>
              <p>
                Website ini merupakan demo penawaran profesional yang dikembangkan oleh <strong>Reaksy</strong> untuk <strong>Teman Piknik Tour Organizer</strong>. Website ini dirancang untuk mempermudah calon pelanggan menjelajahi inspirasi destinasi dan mengawali komunikasi pemesanan via saluran WhatsApp resmi.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#161b18] mb-2">
                2. Pengumpulan Data Pribadi
              </h2>
              <p>
                Website ini tidak mengumpulkan data sensitif seperti nomor kartu kredit atau kata sandi melalui formulir online. Ketika Anda memilih untuk menghubungi Teman Piknik melalui tautan WhatsApp, data yang Anda sampaikan (seperti nama, nomor telepon, dan rencana liburan) dikelola langsung di dalam percakapan WhatsApp Anda bersama tim Teman Piknik.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#161b18] mb-2">
                3. Penggunaan Informasi
              </h2>
              <p>
                Informasi yang Anda bagikan saat berkonsultasi hanya digunakan semata-mata untuk:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Menjawab pertanyaan seputar paket wisata, jadwal, dan ketersediaan kuota.</li>
                <li>Menyusun rancangan penawaran resmi yang sesuai dengan kebutuhan perjalanan Anda.</li>
                <li>Mengonfirmasi rincian penjemputan dan koordinasi teknis pelaksanaan trip.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#161b18] mb-2">
                4. Tautan ke Layanan Pihak Ketiga
              </h2>
              <p>
                Website ini menyematkan tautan resmi menuju layanan pihak ketiga seperti WhatsApp (Meta), Instagram, dan Google Maps. Harap perhatikan bahwa masing-masing platform pihak ketiga memiliki kebijakan privasi tersendiri saat Anda mengunjungi platform tersebut.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-[#161b18] mb-2">
                5. Kontak & Pertanyaan
              </h2>
              <p>
                Jika Anda memiliki pertanyaan seputar kebijakan ini atau ingin memperbarui informasi kontak Anda, silakan hubungi saluran resmi kami:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-[#f5f2eb] text-xs text-[#252c28] space-y-1">
                <p><strong>Teman Piknik Tour Organizer</strong></p>
                <p>Alamat: {BUSINESS.address.full}</p>
                <p>WhatsApp: {BUSINESS.contact.whatsappFormatted}</p>
              </div>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-[#f0ede3]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1f4f3b] hover:text-[#eb6437] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
