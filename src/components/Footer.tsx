"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, buildWhatsAppUrl, buildWhatsAppTransportUrl } from "@/data/business";
import { MapPin, MessageCircle, ExternalLink, ShieldCheck, Car } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

const subscribe = () => () => {};

export default function Footer() {
  const currentYear = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return (
    <footer className="bg-[#0c1f16] text-[#ded8cb] border-t border-[#1a3829]">
      {/* Top Banner: Demo Note */}
      <div className="bg-[#143324] border-b border-[#1f4732] py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-[#e3ded1] gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#eb6437]" />
            <span>
              <strong>Website Demo Penawaran:</strong> Didesain dan dikembangkan oleh <strong>Reaksy</strong> untuk Teman Piknik Tour Organizer Surabaya.
            </span>
          </div>
          <span className="text-[11px] text-[#b8b09f]">
            Seluruh paket & harga merupakan materi ilustratif untuk presentasi desain.
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* ======================================================== */}
        {/* MOBILE FOOTER: ULTRA MINIMALIS, RINGKAS & CEPAT         */}
        {/* ======================================================== */}
        <div className="md:hidden flex flex-col gap-6">
          {/* 1. Header Ringkas Logo + Brand */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-black border border-white/20">
                <Image
                  src="/images/logo.png"
                  alt="Logo Teman Piknik"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-extrabold text-sm tracking-tight leading-none">
                  TEMAN PIKNIK
                </p>
                <p className="text-[10px] text-[#ded8cb] font-medium mt-0.5">
                  Surabaya, Jawa Timur
                </p>
              </div>
            </div>

            {/* Quick Instagram & Maps Icons */}
            <div className="flex items-center gap-2">
              <a
                href={BUSINESS.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white active:scale-95"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#eb6437]" />
              </a>
              <a
                href={BUSINESS.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white active:scale-95"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#eb6437]" />
              </a>
            </div>
          </div>

          {/* 2. Fast Dual CTA WhatsApp Buttons (1-Tap Langsung) */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#eb6437] hover:bg-[#d95328] text-white text-xs font-bold transition-all shadow text-center active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Trip Wisata</span>
            </a>
            <a
              href={buildWhatsAppTransportUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1f4f3b] hover:bg-[#173d2d] text-white text-xs font-bold transition-all shadow border border-white/10 text-center active:scale-95"
            >
              <Car className="w-3.5 h-3.5" />
              <span>Sewa Armada</span>
            </a>
          </div>

          {/* 3. Minimalist Quick Links Grid (2 Columns, Clean, Scannable) */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-[#c7c0b0] py-2 border-y border-white/5">
            <Link href="/" className="hover:text-white transition-colors py-1">
              • Beranda
            </Link>
            <Link href="/paket" className="hover:text-white transition-colors py-1">
              • Paket Wisata
            </Link>
            <Link href="/sewa-armada" className="hover:text-white transition-colors py-1">
              • Sewa Armada
            </Link>
            <Link href="/destinasi" className="hover:text-white transition-colors py-1">
              • Destinasi
            </Link>
            <Link href="/tentang-kami" className="hover:text-white transition-colors py-1">
              • Tentang Kami
            </Link>
            <Link href="/kontak" className="hover:text-white transition-colors py-1">
              • Kontak & Kantor
            </Link>
          </div>

          {/* 4. Minimalist Legal & Copyright Info */}
          <div className="flex flex-col gap-1.5 text-[11px] text-[#a19989] pt-1">
            <p className="text-white/80 font-medium">{BUSINESS.legalName}</p>
            <p className="line-clamp-1">{BUSINESS.address.full}</p>
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px]">
              <span>&copy; {currentYear} Teman Piknik.</span>
              <Link href="/kebijakan-privasi" className="hover:text-white text-[#ded8cb]">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP FOOTER: DETAIL, EDITORIAL & LENGKAP             */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/20 shadow-md bg-black">
                <Image
                  src="/images/logo.png"
                  alt="Logo Resmi Teman Piknik Tour Organizer"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg tracking-tight">TEMAN PIKNIK</h3>
                <p className="text-xs text-[#ded8cb] font-semibold uppercase tracking-wider">
                  {BUSINESS.legalName}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#c7c0b0] max-w-md">
              Tour organizer terpercaya dan penyedia sewa armada wisata (Jeep Bromo 4x4, HiAce, ELF, &amp; Bus Pariwisata) berbasis di Surabaya, Jawa Timur.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={BUSINESS.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors border border-white/10"
                aria-label="Instagram Resmi Teman Piknik"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#eb6437]" />
                <span>{BUSINESS.contact.instagramHandle}</span>
              </a>

              <a
                href={BUSINESS.contact.instagramBankUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors border border-white/10"
                aria-label="Bukti Transfer Teman Piknik Bank"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Bukti Transfer (@temanpiknik.bank)</span>
              </a>

              <a
                href={BUSINESS.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors border border-white/10"
                aria-label="Google Maps Teman Piknik Surabaya"
              >
                <MapPin className="w-3.5 h-3.5 text-[#eb6437]" />
                <span>386+ Ulasan Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#ded8cb]/60" />
              </a>
            </div>
          </div>

          {/* Navigasi Multipage (Col 6-8) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Halaman Website
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="/paket" className="hover:text-white transition-colors">
                  Katalog Paket Wisata
                </Link>
              </li>
              <li>
                <Link href="/sewa-armada" className="hover:text-white transition-colors">
                  Sewa Mobil &amp; Jeep Bromo
                </Link>
              </li>
              <li>
                <Link href="/destinasi" className="hover:text-white transition-colors">
                  Jelajah Destinasi
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-white transition-colors">
                  Tentang Teman Piknik
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition-colors">
                  Kontak &amp; Kantor Surabaya
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Alamat & Kontak (Col 9-12) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Lokasi & Kontak Resmi
            </h4>

            <div className="flex items-start gap-3 text-sm text-[#c7c0b0]">
              <MapPin className="w-5 h-5 text-[#eb6437] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <p className="text-white font-medium">Kantor / Alamat Terdaftar:</p>
                <p>{BUSINESS.address.full}</p>
                <a
                  href={BUSINESS.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#eb6437] hover:underline mt-1 font-medium"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* WhatsApp Admin Tour */}
            <div className="flex items-start gap-3 text-sm text-[#c7c0b0]">
              <MessageCircle className="w-5 h-5 text-[#eb6437] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">WhatsApp Admin Trip Wisata:</p>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#eb6437] font-bold tracking-wide text-sm transition-colors block"
                >
                  {BUSINESS.contact.whatsappTourFormatted}
                </a>
                <p className="text-[11px] text-[#b8b09f] mt-0.5">
                  Konsultasi paket tour, jadwal open trip, &amp; private trip.
                </p>
              </div>
            </div>

            {/* WhatsApp Sewa Kendaraan & Jeep */}
            <div className="flex items-start gap-3 text-sm text-[#c7c0b0]">
              <Car className="w-5 h-5 text-[#f27f57] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">WhatsApp Sewa Mobil &amp; Jeep Bromo:</p>
                <a
                  href={buildWhatsAppTransportUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#eb6437] font-bold tracking-wide text-sm transition-colors block"
                >
                  {BUSINESS.contact.whatsappTransportFormatted}
                </a>
                <p className="text-[11px] text-[#b8b09f] mt-0.5">
                  Tarif sewa Jeep 4x4, HiAce Premio, ELF Giga, &amp; Bus.
                </p>
              </div>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#eb6437] hover:bg-[#d95328] text-white text-xs font-bold transition-all shadow-md text-center"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Pesan Tour</span>
              </a>

              <a
                href={buildWhatsAppTransportUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1f4f3b] hover:bg-[#173d2d] text-white text-xs font-bold transition-all shadow-md text-center border border-white/10"
              >
                <Car className="w-3.5 h-3.5" />
                <span>Sewa Armada</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal (Desktop) */}
        <div className="hidden md:flex mt-12 pt-8 border-t border-white/10 flex-col md:flex-row items-center justify-between text-xs text-[#b8b09f] gap-4 text-center md:text-left">
          <p>
            &copy; {currentYear} {BUSINESS.name}. Seluruh hak cipta dilindungi.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <span className="text-white/20">•</span>
            <span className="text-[#a19989]">
              Demo Platform Crafted by <strong className="text-white font-medium">Reaksy</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
