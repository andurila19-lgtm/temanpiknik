"use client";

import { useState, useMemo, useRef } from "react";
import { TourPackage, TripType } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { SlidersHorizontal, ArrowUpDown, RefreshCw, ChevronLeft, ChevronRight, Search } from "lucide-react";

interface PackageCatalogClientProps {
  initialPackages: TourPackage[];
}

export default function PackageCatalogClient({ initialPackages }: PackageCatalogClientProps) {
  const [selectedDestination, setSelectedDestination] = useState<string>("all");
  const [selectedTripType, setSelectedTripType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "duration">("featured");

  // Drag-to-scroll refs & state
  const tabsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const categories = [
    { label: "Semua Paket", value: "all" },
    { label: "Bromo", value: "bromo" },
    { label: "Kawah Ijen", value: "ijen" },
    { label: "Bali", value: "bali" },
    { label: "Yogyakarta", value: "yogyakarta" },
    { label: "Malang", value: "malang" },
    { label: "Banyuwangi", value: "banyuwangi" },
  ];

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

  // Filtered packages
  const filteredPackages = useMemo(() => {
    return initialPackages.filter((pkg) => {
      const destMatch =
        selectedDestination === "all" || pkg.destinationSlug === selectedDestination;
      const tripMatch =
        selectedTripType === "all" || pkg.tripTypes.includes(selectedTripType as TripType);
      const searchMatch =
        !searchQuery.trim() ||
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.destinationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase());

      return destMatch && tripMatch && searchMatch;
    });
  }, [initialPackages, selectedDestination, selectedTripType, searchQuery]);

  // Sorted packages
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

  const handleClearFilters = () => {
    setSelectedDestination("all");
    setSelectedTripType("all");
    setSearchQuery("");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#ded8cb] shadow-sm flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Keyword Search Input */}
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-[#526058] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari rute wisata (contoh: Bromo, Ijen Blue Fire, Ubud)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#ded8cb] bg-[#fbf9f5] text-xs sm:text-sm text-[#161b18] placeholder-[#74817a] focus:outline-none focus:ring-2 focus:ring-[#1f4f3b]/20"
            />
          </div>

          {/* Trip Type Filter */}
          <div className="sm:col-span-4">
            <select
              value={selectedTripType}
              onChange={(e) => setSelectedTripType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#ded8cb] bg-[#fbf9f5] text-xs sm:text-sm font-semibold text-[#161b18] focus:outline-none focus:ring-2 focus:ring-[#1f4f3b]/20 cursor-pointer"
            >
              <option value="all">Semua Tipe Trip</option>
              <option value="open">Open Trip (Gabungan)</option>
              <option value="private">Private Trip (Eksklusif)</option>
              <option value="custom">Custom Trip (Rombongan)</option>
            </select>
          </div>
        </div>

        {/* Destination Scroll Tabs & Sort Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-3 border-t border-[#ebe6dc]">
          {/* Draggable Category Tabs */}
          <div className="relative flex items-center w-full md:max-w-2xl min-w-0 gap-1.5">
            <button
              type="button"
              onClick={() => scrollTabs("left")}
              aria-label="Geser ke kiri"
              className="flex shrink-0 w-8 h-8 items-center justify-center rounded-lg bg-white border border-[#ded8cb] text-[#1f4f3b] hover:bg-[#f0ede3] shadow-sm active:scale-95 transition-all z-10 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div
              ref={tabsRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className="flex-1 flex items-center gap-2 overflow-x-auto pb-1 pt-1 scroll-smooth select-none cursor-grab active:cursor-grabbing scrollbar-none touch-pan-x"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {categories.map((cat) => {
                const isSelected = selectedDestination === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={(e) => {
                      if (hasDragged) {
                        e.preventDefault();
                        return;
                      }
                      setSelectedDestination(cat.value);
                    }}
                    className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 shrink-0 cursor-pointer active:scale-95 touch-manipulation select-none flex items-center justify-center ${
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

            <button
              type="button"
              onClick={() => scrollTabs("right")}
              aria-label="Geser ke kanan"
              className="flex shrink-0 w-8 h-8 items-center justify-center rounded-lg bg-white border border-[#ded8cb] text-[#1f4f3b] hover:bg-[#f0ede3] shadow-sm active:scale-95 transition-all z-10 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Sort Controller */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <label htmlFor="sort-catalog" className="text-xs font-medium text-[#526058] flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Urutan:</span>
            </label>
            <select
              id="sort-catalog"
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

        {/* Active Filters Summary */}
        {(selectedDestination !== "all" || selectedTripType !== "all" || searchQuery) && (
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
            <span className="text-[#526058]">Filter aktif:</span>
            {selectedDestination !== "all" && (
              <span className="bg-[#e3ede8] text-[#1f4f3b] font-semibold px-2.5 py-1 rounded-lg">
                Destinasi: {selectedDestination}
              </span>
            )}
            {selectedTripType !== "all" && (
              <span className="bg-[#e3ede8] text-[#1f4f3b] font-semibold px-2.5 py-1 rounded-lg">
                Tipe: {selectedTripType}
              </span>
            )}
            {searchQuery && (
              <span className="bg-[#e3ede8] text-[#1f4f3b] font-semibold px-2.5 py-1 rounded-lg">
                Kata kunci: &ldquo;{searchQuery}&rdquo;
              </span>
            )}
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-[#eb6437] hover:underline font-bold ml-2 inline-flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Filter</span>
            </button>
          </div>
        )}
      </div>

      {/* Package Grid or Empty State */}
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
            Silakan ubah kata kunci atau reset filter untuk melihat katalog lengkap paket perjalanan kami.
          </p>
          <button
            type="button"
            onClick={handleClearFilters}
            className="mt-6 px-5 py-2.5 rounded-xl bg-[#1f4f3b] text-white text-xs font-bold hover:bg-[#173d2d] transition-colors cursor-pointer"
          >
            Tampilkan Semua Paket
          </button>
        </div>
      )}
    </div>
  );
}
