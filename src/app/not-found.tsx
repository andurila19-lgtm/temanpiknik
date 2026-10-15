import Link from "next/link";
import { Compass, Home, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/data/business";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#fbf9f5] px-4 py-24">
      <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 border border-[#ded8cb] shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-[#feece5] text-[#eb6437] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-4xl sm:text-5xl font-black text-[#1f4f3b] block">
          404
        </span>

        <h1 className="mt-3 text-xl font-bold text-[#161b18]">
          Halaman Tidak Ditemukan
        </h1>

        <p className="mt-2 text-xs sm:text-sm text-[#55625b] leading-relaxed">
          Tampaknya Anda tersesat di luar jalur perjalanan. Halaman atau paket wisata yang Anda cari mungkin telah dipindahkan atau belum tersedia.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1f4f3b] hover:bg-[#173d2d] text-white text-xs font-bold py-3 px-5 rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f5f2eb] hover:bg-[#ebe6dc] text-[#161b18] text-xs font-bold py-3 px-5 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#eb6437]" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
