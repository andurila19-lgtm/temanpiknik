"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS, buildWhatsAppUrl } from "@/data/business";
import { Menu, X, MessageCircle, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Paket Wisata", href: "/paket" },
  { label: "Sewa Armada", href: "/sewa-armada" },
  { label: "Destinasi", href: "/destinasi" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Kontak", href: "/kontak" },
];

const emptySubscribe = () => () => {};

export default function Header() {
  const pathname = usePathname();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#123325]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3"
          : "bg-gradient-to-b from-[#0a1c14]/80 via-[#0a1c14]/50 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Brand Wordmark & Official Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 text-white group focus:outline-none min-w-0 max-w-[calc(100%-110px)] md:max-w-none"
            aria-label="Teman Piknik - Beranda"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 border border-white/20 shadow-md shadow-black/20 group-hover:scale-105 transition-transform duration-200 bg-black">
              <Image
                src="/images/logo.png"
                alt="Logo Resmi Teman Piknik Tour Organizer"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-sm sm:text-lg tracking-tight leading-none text-white truncate">
                TEMAN PIKNIK
              </span>
              <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider text-[#ded8cb] uppercase mt-0.5 truncate">
                PT. Teman Piknik Ekasuga Perkasa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 bg-[#0a1c14]/70 backdrop-blur-md px-2 py-1 rounded-xl border border-white/15"
            aria-label="Navigasi Utama"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-semibold rounded-lg transition-all duration-150 ${
                    isActive
                      ? "text-white bg-[#eb6437] shadow-sm"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#eb6437] hover:bg-[#d95328] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-150 shadow-sm hover:shadow active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions: WhatsApp & Hamburger Toggle (44px+ touch targets) */}
          <div className="flex md:hidden items-center gap-2 shrink-0 z-50">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-[#eb6437] text-white shadow-sm flex items-center justify-center active:scale-90 transition-transform cursor-pointer touch-manipulation"
              aria-label="Chat WhatsApp Admin"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              id="mobile-nav-toggle"
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-11 h-11 rounded-xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#eb6437] active:scale-90 transition-transform cursor-pointer touch-manipulation z-50 select-none"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Centered Minimalist Mobile Navbar Modal (Portaled directly to document.body) */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile"
            className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:hidden animate-in fade-in duration-150"
            style={{ touchAction: "none" }}
            onClick={() => {
              setMobileMenuOpen(false);
              document.body.style.overflow = "";
            }}
          >
            {/* Floating Centered Card (Mengambang di Tengah & Minimalis) */}
            <div
              className="relative w-full max-w-[320px] bg-[#0c2217] border border-white/20 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl animate-in zoom-in-95 duration-150 flex flex-col gap-2.5 text-white overflow-hidden my-auto"
              style={{ touchAction: "auto" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Minimalist Card Header */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-black border border-white/20">
                    <Image
                      src="/images/logo.png"
                      alt="Logo Teman Piknik"
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-extrabold text-xs text-white tracking-tight leading-none block">
                      TEMAN PIKNIK
                    </span>
                    <span className="text-[9px] text-[#ded8cb] font-semibold mt-0.5 block">
                      PT. Teman Piknik Ekasuga Perkasa
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.body.style.overflow = "";
                  }}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center active:scale-90 transition-all cursor-pointer"
                  aria-label="Tutup menu navigasi"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Minimalist Navigation Links (Compact & Touch-Friendly) */}
              <nav className="flex flex-col gap-1 py-1" aria-label="Navigasi Menu Mobile">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        document.body.style.overflow = "";
                      }}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 active:scale-98 ${
                        isActive
                          ? "bg-[#eb6437] text-white shadow-sm font-bold"
                          : "text-white/85 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-white/40"}`} />
                    </Link>
                  );
                })}
              </nav>

              {/* Minimalist Dual CTAs */}
              <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 shrink-0">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.body.style.overflow = "";
                  }}
                  className="flex items-center justify-center gap-1 w-full bg-[#eb6437] hover:bg-[#d95328] text-white font-bold text-[11px] py-2 px-1.5 rounded-xl shadow-md text-center active:scale-95 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Trip Wisata</span>
                </a>
                <a
                  href={BUSINESS.contact.whatsappTransportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.body.style.overflow = "";
                  }}
                  className="flex items-center justify-center gap-1 w-full bg-[#1f4f3b] hover:bg-[#173d2d] text-white font-bold text-[11px] py-2 px-1.5 rounded-xl shadow-md border border-white/15 text-center active:scale-95 transition-all"
                >
                  <span>Sewa Armada</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
