"use client";

import { useState } from "react";
import { GENERAL_FAQS } from "@/data/faqs";
import { buildWhatsAppUrl } from "@/data/business";
import { ChevronDown, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-cara-pesan");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#fbf9f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#1f4f3b] mb-2">
            Tanya Jawab
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#161b18] tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#55625b] leading-relaxed">
            Informasi penting seputar alur pemesanan, penyesuaian jadwal, dan konsultasi perjalanan bersama Teman Piknik.
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-3.5">
          {GENERAL_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#ded8cb] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:bg-[#f5f2eb]"
                >
                  <span className="font-bold text-base sm:text-lg text-[#161b18] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#1f4f3b] text-white rotate-180"
                        : "bg-[#f5f2eb] text-[#55625b]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#55625b] leading-relaxed animate-in fade-in duration-200 border-t border-[#f0ede3] pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#f5f2eb] border border-[#ded8cb] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-[#161b18] text-base">
              Masih punya pertanyaan lain seputar rencana trip?
            </h3>
            <p className="text-xs sm:text-sm text-[#55625b] mt-0.5">
              Tim Teman Piknik siap berdiskusi dan membantu merencanakan liburanmu.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#eb6437] hover:bg-[#d95328] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shrink-0 active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
