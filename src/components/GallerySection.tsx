"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { BUSINESS } from "@/data/business";
import { ZoomIn, X, MapPin, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/Icons";

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { label: "Semua Momen", value: "all" },
    { label: "Pegunungan", value: "Pegunungan" },
    { label: "Bahari & Pantai", value: "Bahari & Pantai" },
    { label: "Warisan Budaya", value: "Warisan Budaya" },
    { label: "Aktivitas", value: "Aktivitas" },
  ];

  const filteredItems = activeFilter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") {
        setSelectedItem(null);
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setSelectedItem(filteredItems[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredItems.findIndex((it) => it.id === selectedItem.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setSelectedItem(filteredItems[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, filteredItems]);

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-2">
              Dokumentasi Wisata
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#161b18] tracking-tight">
              Galeri Jejak Petualangan
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#55625b]">
              Kumpulan sudut keindahan panorama alam dan momen hangat selama perjalanan wisata di berbagai destinasi nusantara.
            </p>
          </div>

          <a
            href={BUSINESS.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#f5f2eb] text-[#161b18] text-xs font-bold transition-all border border-[#ded8cb] shadow-sm self-start md:self-auto shrink-0"
          >
            <InstagramIcon className="w-4 h-4 text-[#eb6437]" />
            <span>Kunjungi {BUSINESS.contact.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#526058]" />
          </a>
        </div>

        {/* Filter categories tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeFilter === cat.value
                  ? "bg-[#1f4f3b] text-white shadow-sm"
                  : "bg-white text-[#55625b] hover:bg-[#f0ede3] border border-[#ded8cb]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedItem(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              className="group cursor-pointer relative bg-[#ebe6dc] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eb6437]"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Zoom Indicator */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Item Details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-1.5 text-[11px] text-[#eb6437] font-semibold mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-bold text-base leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
                <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stock / CC Attribution Note */}
        <p className="mt-6 text-center text-xs text-[#526058]">
          *Foto pada galeri ini merupakan aset visual terkurasi berlisensi terbuka Creative Commons untuk ilustrasi tata letak desain.
        </p>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Tutup foto"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full bg-[#0c1f16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
              />
            </div>

            <div className="p-6 text-white bg-[#0f2b1f] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#eb6437] font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedItem.location}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{selectedItem.title}</h3>
                <p className="text-xs text-[#ded8cb] mt-1 max-w-xl">
                  {selectedItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={BUSINESS.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#eb6437] hover:bg-[#d95328] text-white text-xs font-semibold"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
