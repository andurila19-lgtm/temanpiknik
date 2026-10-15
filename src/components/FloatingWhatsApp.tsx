"use client";

import { useState } from "react";
import { buildWhatsAppUrl } from "@/data/business";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-30 flex items-end gap-3 group"
    >
      {/* Tooltip Dialog */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#161b18] px-3.5 py-2 rounded-xl shadow-md border border-[#ded8cb] text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span>Ada rencana trip? Yuk tanya Teman Piknik!</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-stone-700 p-0.5 rounded-full cursor-pointer"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#1f4f3b] hover:bg-[#173d2d] text-white shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#eb6437]"
        aria-label="Chat via WhatsApp Resmi Teman Piknik"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="sr-only">Chat WhatsApp</span>
      </a>
    </aside>
  );
}
