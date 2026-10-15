import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { TOUR_PACKAGES, getPackageBySlug, getRelatedPackages } from "@/data/packages";
import { BUSINESS, buildWhatsAppUrl } from "@/data/business";
import PackageCard from "@/components/PackageCard";
import {
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  XCircle,
  MessageCircle,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return TOUR_PACKAGES.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return {
      title: "Paket Wisata Tidak Ditemukan | Teman Piknik",
    };
  }

  return {
    title: `${pkg.title} (${pkg.duration}) | Teman Piknik Tour Organizer`,
    description: pkg.summary,
    openGraph: {
      title: `${pkg.title} - Teman Piknik Surabaya`,
      description: pkg.summary,
      images: [
        {
          url: pkg.heroImage,
          width: 1200,
          height: 800,
          alt: pkg.title,
        },
      ],
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const relatedPackages = getRelatedPackages(pkg.slug, 3);
  const whatsappUrl = buildWhatsAppUrl(pkg.title);

  return (
    <main className="bg-[#fbf9f5] min-h-screen pt-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#f5f2eb] border-b border-[#ded8cb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#55625b]">
            <Link href="/" className="hover:text-[#1f4f3b] font-medium transition-colors">
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#a9a291]" />
            <Link href="/#paket-wisata" className="hover:text-[#1f4f3b] font-medium transition-colors">
              Paket Wisata
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#a9a291]" />
            <span className="text-[#161b18] font-bold truncate">{pkg.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative bg-[#0c1f16] text-white overflow-hidden py-14 lg:py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={pkg.heroImage}
            alt={pkg.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f16] via-[#0c1f16]/70 to-[#0c1f16]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1f4f3b] text-white text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#eb6437]" />
                <span>{pkg.destinationName}</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                <Clock className="w-3.5 h-3.5 text-[#eb6437]" />
                <span>{pkg.duration}</span>
              </span>

              {pkg.badge && (
                <span className="px-3 py-1 rounded-full bg-[#eb6437] text-white text-xs font-bold">
                  {pkg.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {pkg.title}
            </h1>

            {/* Summary */}
            <p className="mt-4 text-base sm:text-lg text-[#ded8cb] leading-relaxed">
              {pkg.summary}
            </p>

            {/* Quick Trip Type Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#a9a291]">Tersedia untuk skema:</span>
              {pkg.tripTypes.map((type) => (
                <span
                  key={type}
                  className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold border border-white/15"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Booking Sidebar */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Main Details (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Demo Notice Alert */}
              <div className="p-4 rounded-2xl bg-[#feece5] border border-[#f27f57]/30 text-xs text-[#c2431a] flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-[#eb6437] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>Pemberitahuan Konten Demo:</strong> Seluruh harga, jadwal timeline, dan gambaran fasilitas di bawah ini adalah materi ilustratif untuk presentasi desain. Rincian dan penawaran resmi akan diberikan langsung oleh tim Teman Piknik melalui WhatsApp.
                </div>
              </div>

              {/* Photo Gallery Grid */}
              <div>
                <h2 className="text-xl font-bold text-[#161b18] mb-4">
                  Dokumentasi Foto Destinasi
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.gallery.map((photo, i) => (
                    <div
                      key={i}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#ebe6dc] border border-[#ded8cb]"
                    >
                      <Image
                        src={photo.url}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                      <p className="absolute bottom-3 left-3 right-3 text-xs text-white leading-snug drop-shadow-sm font-medium">
                        {photo.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deskripsi Paket */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ded8cb]">
                <h2 className="text-xl font-bold text-[#161b18] mb-3">
                  Deskripsi Perjalanan
                </h2>
                <p className="text-sm sm:text-base text-[#55625b] leading-relaxed">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 pt-6 border-t border-[#f0ede3]">
                  <h3 className="text-sm font-bold text-[#161b18] uppercase tracking-wider mb-3">
                    Sorotan Utama Paket
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3b4540]">
                        <CheckCircle2 className="w-4 h-4 text-[#29644b] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Itinerary */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ded8cb]">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="w-5 h-5 text-[#eb6437]" />
                  <h2 className="text-xl font-bold text-[#161b18]">
                    Itinerary Terstruktur Per Hari
                  </h2>
                </div>

                <div className="space-y-8">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="relative pl-6 sm:pl-8 border-l-2 border-[#e3ede8]">
                      {/* Day Marker Bubble */}
                      <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-[#1f4f3b] text-white text-xs font-bold flex items-center justify-center">
                        {day.day}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#161b18] mb-3">
                        Hari ke-{day.day}: {day.title}
                      </h3>

                      <div className="space-y-4">
                        {day.activities.map((act, actIdx) => (
                          <div key={actIdx} className="bg-[#fbf9f5] rounded-xl p-4 border border-[#ebe6dc]">
                            <div className="flex items-center gap-2 text-xs font-bold text-[#eb6437]">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{act.time}</span>
                              <span className="text-stone-300">•</span>
                              <span className="text-[#161b18] font-bold text-sm">
                                {act.activity}
                              </span>
                            </div>
                            <p className="mt-1.5 text-xs sm:text-sm text-[#55625b] leading-relaxed">
                              {act.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities Included / Excluded (Sample Illustration) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ded8cb]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-[#161b18]">
                    Fasilitas (Contoh Ilustrasi)
                  </h2>
                  <span className="text-[11px] font-semibold text-[#eb6437] bg-[#feece5] px-2.5 py-1 rounded-md">
                    Ilustrasi Demo
                  </span>
                </div>
                <p className="text-xs text-[#526058] mb-6">
                  *Rincian fasilitas resmi akan tertera pada surat penawaran resmi yang disepakati bersama sebelum pembayaran.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Included */}
                  <div className="p-5 rounded-2xl bg-[#f1f7f4] border border-[#e3ede8]">
                    <h3 className="text-sm font-bold text-[#1f4f3b] flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-[#29644b]" />
                      <span>Contoh Fasilitas Termasuk</span>
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#3b4540]">
                      {pkg.facilitiesSample.included.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#29644b] font-bold mt-0.5">•</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded */}
                  <div className="p-5 rounded-2xl bg-[#fdf5f2] border border-[#feece5]">
                    <h3 className="text-sm font-bold text-[#c2431a] flex items-center gap-2 mb-3">
                      <XCircle className="w-4 h-4 text-[#eb6437]" />
                      <span>Belum Termasuk</span>
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#55625b]">
                      {pkg.facilitiesSample.excluded.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#eb6437] font-bold mt-0.5">•</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Preparation Tips */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ded8cb]">
                <h2 className="text-xl font-bold text-[#161b18] mb-4">
                  Panduan Persiapan Perjalanan
                </h2>
                <div className="space-y-2.5">
                  {pkg.preparationTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#fbf9f5] border border-[#ebe6dc]">
                      <span className="w-5 h-5 rounded-full bg-[#e3ede8] text-[#1f4f3b] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-[#55625b] leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Specific FAQs */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ded8cb]">
                <h2 className="text-xl font-bold text-[#161b18] mb-4">
                  FAQ Khusus Paket Ini
                </h2>
                <div className="space-y-3">
                  {pkg.faqs.map((f, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#fbf9f5] border border-[#ebe6dc]">
                      <h3 className="font-bold text-sm text-[#161b18] mb-1.5">
                        {f.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#55625b] leading-relaxed">
                        {f.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Action Card (4 cols) */}
            <div className="lg:col-span-4 sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ded8cb] shadow-xl">
                <span className="text-xs font-bold text-[#526058] uppercase tracking-wider block">
                  Harga Mulai Dari (Indikatif)
                </span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#1f4f3b] tracking-tight">
                    {pkg.indicativePriceDisplay}
                  </span>
                  <span className="text-xs text-[#526058]">{pkg.priceUnit}</span>
                </div>

                <p className="text-[11px] text-[#eb6437] mt-2 bg-[#feece5] px-2.5 py-1 rounded-md">
                  *Perlu dikonfirmasi untuk ketersediaan tanggal & kuota resmi
                </p>

                <div className="mt-6 pt-6 border-t border-[#f0ede3] space-y-3 text-xs text-[#55625b]">
                  <div className="flex items-center justify-between">
                    <span>Durasi:</span>
                    <strong className="text-[#161b18]">{pkg.duration}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tujuan:</span>
                    <strong className="text-[#161b18]">{pkg.destinationName}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Titik Kumpul:</span>
                    <strong className="text-[#161b18]">Surabaya (atau kesepakatan)</strong>
                  </div>
                </div>

                {/* Primary WhatsApp CTA with prefilled message */}
                <div className="mt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 bg-[#eb6437] hover:bg-[#d95328] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-[#eb6437]/25 transition-all duration-200 active:scale-95 text-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Minta Penawaran Resmi via WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-[#526058] text-center mt-2">
                    Format pesan telah disiapkan otomatis untuk paket ini.
                  </p>
                </div>
              </div>

              {/* Quick Contact info */}
              <div className="bg-[#f5f2eb] rounded-2xl p-5 border border-[#ded8cb] text-xs text-[#55625b] space-y-2">
                <p className="font-bold text-[#161b18]">Teman Piknik Tour Organizer</p>
                <p>{BUSINESS.address.full}</p>
                <p>WhatsApp: {BUSINESS.contact.whatsappFormatted}</p>
              </div>
            </div>
          </div>

          {/* Related Packages */}
          <div className="mt-16 pt-12 border-t border-[#ebe6dc]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-[#eb6437] uppercase tracking-wider block">
                  Rekomendasi Lainnya
                </span>
                <h2 className="text-2xl font-bold text-[#161b18] mt-0.5">
                  Paket Wisata Terkait
                </h2>
              </div>
              <Link
                href="/#paket-wisata"
                className="text-xs font-bold text-[#1f4f3b] hover:text-[#eb6437] transition-colors"
              >
                Lihat Semua Paket
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedPackages.map((rPkg) => (
                <PackageCard key={rPkg.id} pkg={rPkg} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
