"use client";

import { useState, useSyncExternalStore } from "react";
import { DESTINATIONS } from "@/data/destinations";
import { TripType } from "@/data/packages";
import { buildWhatsAppCustomTripUrl } from "@/data/business";
import { Search, MapPin, Users, Calendar, MessageCircle, Compass } from "lucide-react";

interface QuickSearchProps {
  onSearch: (filters: {
    destination: string;
    tripType: string;
    date: string;
  }) => void;
  selectedDestination: string;
  selectedTripType: string;
}

const TRIP_TYPES: TripType[] = ["Open Trip", "Private Trip", "Family Trip", "Company Trip"];
const subscribe = () => () => {};

export default function QuickSearch({
  onSearch,
  selectedDestination,
  selectedTripType,
}: QuickSearchProps) {
  const [destination, setDestination] = useState(selectedDestination || "all");
  const [tripType, setTripType] = useState(selectedTripType || "all");
  const [date, setDate] = useState("");

  const minDate = useSyncExternalStore(
    subscribe,
    () => new Date().toISOString().split("T")[0],
    () => ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ destination, tripType, date });

    // Scroll smoothly to catalog
    const catalogElement = document.getElementById("paket-wisata");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setDestination("all");
    setTripType("all");
    setDate("");
    onSearch({ destination: "all", tripType: "all", date: "" });
  };

  return (
    <div className="relative -mt-8 sm:-mt-12 z-20 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-2xl border border-[#ded8cb] shadow-stone-900/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#ebe6dc] gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1f4f3b] uppercase">
            <Compass className="w-4 h-4 text-[#eb6437]" />
            <span>Pilih & Rencanakan Perjalanan</span>
          </div>
          <span className="text-[11px] text-[#526058]">
            *Opsi perjalanan demo yang dapat disesuaikan via konsultasi
          </span>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-end">
          {/* Destinasi */}
          <div className="md:col-span-4 flex flex-col gap-1.5">
            <label htmlFor="search-destination" className="text-xs font-semibold text-[#252c28] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#eb6437]" />
              <span>Tujuan Wisata</span>
            </label>
            <div className="relative">
              <select
                id="search-destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-[#fbf9f5] border border-[#ded8cb] focus:border-[#29644b] rounded-xl px-3.5 py-3 text-sm text-[#161b18] font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#29644b]/20"
              >
                <option value="all">Semua Destinasi Pilihan</option>
                {DESTINATIONS.map((dest) => (
                  <option key={dest.slug} value={dest.slug}>
                    {dest.name} ({dest.province})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#526058]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tipe Perjalanan */}
          <div className="md:col-span-3 flex flex-col gap-1.5">
            <label htmlFor="search-triptype" className="text-xs font-semibold text-[#252c28] flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#eb6437]" />
              <span>Tipe Trip</span>
            </label>
            <div className="relative">
              <select
                id="search-triptype"
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full bg-[#fbf9f5] border border-[#ded8cb] focus:border-[#29644b] rounded-xl px-3.5 py-3 text-sm text-[#161b18] font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#29644b]/20"
              >
                <option value="all">Semua Tipe Trip</option>
                {TRIP_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#526058]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tanggal Perjalanan */}
          <div className="md:col-span-3 flex flex-col gap-1.5">
            <label htmlFor="search-date" className="text-xs font-semibold text-[#252c28] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#eb6437]" />
              <span>Perkiraan Tanggal</span>
            </label>
            <input
              type="date"
              id="search-date"
              min={minDate || undefined}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-[#fbf9f5] border border-[#ded8cb] focus:border-[#29644b] rounded-xl px-3.5 py-3 text-sm text-[#161b18] font-medium focus:outline-none focus:ring-2 focus:ring-[#29644b]/20"
            />
          </div>

          {/* Tombol Cari */}
          <div className="md:col-span-2 flex flex-col gap-1">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#1f4f3b] hover:bg-[#173d2d] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-md transition-all duration-200 active:scale-95"
            >
              <Search className="w-4 h-4" />
              <span>Cari Paket</span>
            </button>
          </div>
        </form>

        {/* Sub-actions & WhatsApp shortcut */}
        <div className="mt-3 pt-3 flex flex-wrap items-center justify-between text-xs text-[#55625b] gap-2">
          <div className="flex items-center gap-3">
            {(destination !== "all" || tripType !== "all" || date) && (
              <button
                type="button"
                onClick={handleReset}
                className="text-[#eb6437] hover:underline font-medium"
              >
                Reset Filter
              </button>
            )}
            <span>Punya rencana rute khusus?</span>
          </div>

          <a
            href={buildWhatsAppCustomTripUrl({
              destination: destination !== "all" ? destination : undefined,
              tripType: tripType !== "all" ? tripType : undefined,
              date: date || undefined,
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#1f4f3b] hover:text-[#eb6437] font-semibold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Kirim Rencana Langsung via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
