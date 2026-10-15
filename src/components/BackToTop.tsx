"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 left-5 z-30 flex items-center justify-center w-11 h-11 rounded-xl bg-white hover:bg-[#f5f2eb] text-[#1f4f3b] shadow-md border border-[#ded8cb] transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#eb6437]"
      aria-label="Kembali ke atas halaman"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
