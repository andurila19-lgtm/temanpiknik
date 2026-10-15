"use client";

import { useState, useMemo, useRef } from "react";
import { TourPackage, TripType } from "@/data/packages";
import PackageCard from "./PackageCard";
import { SlidersHorizontal, ArrowUpDown, AlertCircle, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedPackagesProps {
  packages: TourPackage[];
  filterDestination: string;
  filterTripType: string;
  filterDate: string;
  onClearFilters: () => void;
  onSelectDestination?: (destSlug: string) => void;
}

export default function FeaturedPackages({
  packages,
  filterDestination,
  filterTripType,
  filterDate,
  onClearFilters,
  onSelectDestination,
}: FeaturedPackagesProps) {
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "duration">("featured");

  // Drag-to-scroll refs & state
  const tabsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!tabsRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - tabsRef.current.offsetLeft);
    setScrollLeft(tabsRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !tabsRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    tabsRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setHasDragged(false), 50);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setTimeout(() => setHasDragged(false), 50);
  };

  const scrollTabs = (direction: "left" | "right") => {
    if (!tabsRef.current) return;
    const scrollAmount = 220;
    tabsRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Filtering logic: filterDestination is the single active destination filter
  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const destMatch =
        filterDestination === "all" || pkg.destinationSlug === filterDestination;

      const tripMatch =
        filterTripType === "all" || pkg.tripTypes.includes(filterTripType as TripType);

      return destMatch && tripMatch;
    });
  }, [packages, filterDestination, filterTripType]);

  // Sorting logic
  const sortedPackages = useMemo(() => {
    const list = [...filteredPackages];
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.indicativePrice - b.indicativePrice);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.indicativePrice - a.indicativePrice);
    } else if (sortBy === "duration") {
      list.sort((a, b) => b.durationDays - a.durationDays);
    }
    return list;
  }, [filteredPackages, sortBy]);

  const categories = [
    { label: "Semua Paket", value: "all" },
    { label: "Bromo", value: "bromo" },
    { label: "Kawah Ijen", value: "ijen" },
    { label: "Bali", value: "bali" },
    { label: "Yogyakarta", value: "yogyakarta" },
    { label: "Malang", value: "malang" },
    { label: "Banyuwangi", value: "banyuwangi" },
  ];

  const handleTabClick = (val: string) => {
    if (onSelectDestination) {
      onSelectDestination(val);
    }
  };

  return (
    <section id="paket-wisata" className="py-20 lg:py-28 bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-2">
            Katalog Pilihan
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#161b18] tracking-tight">
            Paket Wisata Unggulan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#55625b] leading-relaxed">
            Rangkaian pilihan rute perjalanan favorit untuk liburan seru dan berkesan. Siap disesuaikan dengan kebutuhan Anda.
          </p>

          {/* Mandatory Demo Disclaimer Notice */}
          <div className="mt-4 p-3.5 rounded-xl bg-[#feece5] border border-[#f27f57]/30 text-xs text-[#c2431a] flex items-center justify-center gap-2 text-center">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#eb6437]" />
            <span>
              <strong>Catatan Demo:</strong> Paket dan harga pada halaman ini merupakan contoh demo untuk presentasi desain dan perlu dikonfirmasi langsung kepada Teman Piknik.
            </span>
          </div>
        </div>

        {/* Filter Tabs & Sorting Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b border-[#ebe6dc]">
          {/* Destination Tabs (Interactive Drag-to-Scroll, Arrow Buttons, Touch-Swipeable) */}
          <div className="relative flex items-center w-full min-w-0 gap-1.5">
            {/* Scroll Left Button (Always available for instant 1-tap sliding) */}
            <button
              type="button"
              onClick={() => scrollTabs("left")}
              aria-label="Geser pilihan ke kiri"
              className="flex shrink-0 w-8 h-8 items-center justify-center rounded-lg bg-white border border-[#ded8cb] text-[#1f4f3b] hover:bg-[#f0ede3] shadow-sm active:scale-95 transition-all z-10 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Draggable & Swipeable Tabs Container */}
            <div
              ref={tabsRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className="flex-1 flex items-center gap-2 overflow-x-auto pb-2 pt-1 scroll-smooth select-none cursor-grab active:cursor-grabbing scrollbar-none touch-pan-x"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {categories.map((cat) => {
                const isSelected = (filterDestination || "all") === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={(e) => {
                      if (hasDragged) {
                        e.preventDefault();
                        return;
                      }
                      handleTabClick(cat.value);
                    }}
                    className={`min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 shrink-0 cursor-pointer active:scale-95 touch-manipulation flex items-center justify-center select-none ${
                      isSelected
                        ? "bg-[#1f4f3b] text-white shadow-md shadow-[#1f4f3b]/20 ring-2 ring-[#1f4f3b]"
                        : "bg-white text-[#3b4540] hover:bg-[#f0ede3] border border-[#ded8cb]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Scroll Right Button (Always available for instant 1-tap sliding) */}
            <button
              type="button"
              onClick={() => scrollTabs("right")}
              aria-label="Geser pilihan ke kanan"
              className="flex shrink-0 w-8 h-8 items-center justify-center rounded-lg bg-white border border-[#ded8cb] text-[#1f4f3b] hover:bg-[#f0ede3] shadow-sm active:scale-95 transition-all z-10 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Sort Controller */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <label htmlFor="sort-packages" className="text-xs font-medium text-[#526058] flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Urutkan:</span>
            </label>
            <select
              id="sort-packages"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "featured" | "price-asc" | "price-desc" | "duration")}
              className="bg-white border border-[#ded8cb] rounded-xl px-3 py-1.5 text-xs font-semibold text-[#252c28] focus:outline-none focus:ring-2 focus:ring-[#1f4f3b]/20 cursor-pointer"
            >
              <option value="featured">Pilihan Unggulan</option>
              <option value="price-asc">Harga: Terendah ke Tertinggi</option>
              <option value="price-desc">Harga: Tertinggi ke Terendah</option>
              <option value="duration">Durasi: Terpanjang</option>
            </select>
          </div>
        </div>

        {/* Active Filter Indicators */}
        {(filterDestination !== "all" || filterTripType !== "all" || filterDate) && (
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#526058]">Filter aktif dari pencarian:</span>
            {filterDestination !== "all" && (
              <span className="bg-[#e3ede8] text-[#1f4f3b] font-semibold px-2.5 py-1 rounded-lg">
                Tujuan: {filterDestination}
              </span>
            )}
            {filterTripType !== "all" && (
              <span className="bg-[#e3ede8] text-[#1f4f3b] font-semibold px-2.5 py-1 rounded-lg">
                Tipe: {filterTripType}
              </span>
            )}
            {filterDate && (
              <span className="bg-[#e3ede8] text-[#1f4f3b] font-semibold px-2.5 py-1 rounded-lg">
                Tgl: {filterDate}
              </span>
            )}
            <button
              type="button"
              onClick={onClearFilters}
              className="text-[#eb6437] hover:underline font-bold ml-2 inline-flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Hapus Semua Filter</span>
            </button>
          </div>
        )}

        {/* Catalog Grid or Empty State */}
        {sortedPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#ded8cb] max-w-lg mx-auto my-8">
            <div className="w-14 h-14 rounded-full bg-[#feece5] text-[#eb6437] flex items-center justify-center mx-auto mb-4">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#161b18]">Tidak Ada Paket yang Sesuai</h3>
            <p className="mt-2 text-sm text-[#55625b]">
              Belum ada paket wisata dengan kombinasi kriteria pencarian yang Anda pilih. Anda dapat mengatur ulang filter atau mengonsultasikan paket custom langsung ke tim kami.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={onClearFilters}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1f4f3b] text-white text-xs font-bold hover:bg-[#173d2d] transition-colors"
              >
                Tampilkan Semua Paket
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
