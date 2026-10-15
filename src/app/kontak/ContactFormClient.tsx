"use client";

import { useState } from "react";
import { BUSINESS, buildWhatsAppUrl, buildWhatsAppTransportUrl } from "@/data/business";
import { MessageCircle } from "lucide-react";

export default function ContactFormClient() {
  const [name, setName] = useState("");
  const [serviceType, setServiceType] = useState<"tour" | "transport">("tour");
  const [destination, setDestination] = useState("Bromo");
  const [participants, setParticipants] = useState("2 - 5 Orang");
  const [travelDate, setTravelDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Halo Teman Piknik! Saya ingin konsultasi rencana perjalanan:
- *Nama:* ${name || "Calon Penjelajah"}
- *Layanan:* ${serviceType === "tour" ? "Paket Wisata Tour" : "Sewa Mobil / Armada"}
- *Destinasi/Tujuan:* ${destination}
- *Jumlah Peserta:* ${participants}
- *Rencana Tanggal:* ${travelDate || "Menyusul"}
${notes ? `- *Catatan Khusus:* ${notes}` : ""}

Mohon informasi paket, ketersediaan jadwal, dan penawaran terbaiknya. Terima kasih!`;

    const targetUrl =
      serviceType === "tour"
        ? buildWhatsAppUrl(text)
        : buildWhatsAppTransportUrl(text);

    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Service Type Selection */}
      <div>
        <label className="block text-xs font-bold text-[#526058] uppercase tracking-wider mb-1.5">
          Pilih Kategori Layanan:
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setServiceType("tour")}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
              serviceType === "tour"
                ? "bg-[#eb6437] text-white border-[#eb6437] shadow-sm"
                : "bg-[#fbf9f5] text-[#3b4540] border-[#ded8cb] hover:bg-[#f0ede3]"
            }`}
          >
            Paket Tour &amp; Trip
          </button>
          <button
            type="button"
            onClick={() => setServiceType("transport")}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
              serviceType === "transport"
                ? "bg-[#1f4f3b] text-white border-[#1f4f3b] shadow-sm"
                : "bg-[#fbf9f5] text-[#3b4540] border-[#ded8cb] hover:bg-[#f0ede3]"
            }`}
          >
            Sewa Mobil &amp; Jeep
          </button>
        </div>
      </div>

      {/* Name Input */}
      <div>
        <label htmlFor="contact-name" className="block text-xs font-bold text-[#526058] mb-1">
          Nama Lengkap:
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="Contoh: Rian Anggara"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-[#ded8cb] bg-[#fbf9f5] text-xs sm:text-sm text-[#161b18] focus:outline-none focus:ring-2 focus:ring-[#1f4f3b]/20"
        />
      </div>

      {/* Destination & Participants in 2 Cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="contact-dest" className="block text-xs font-bold text-[#526058] mb-1">
            Destinasi / Rute:
          </label>
          <select
            id="contact-dest"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-[#ded8cb] bg-[#fbf9f5] text-xs sm:text-sm font-semibold text-[#161b18] focus:outline-none focus:ring-2 focus:ring-[#1f4f3b]/20 cursor-pointer"
          >
            <option value="Bromo Sunrise">Gunung Bromo</option>
            <option value="Kawah Ijen Blue Fire">Kawah Ijen Banyuwangi</option>
            <option value="Malang & Batu">Malang &amp; Kota Batu</option>
            <option value="Bali Tour">Pulau Bali</option>
            <option value="Yogyakarta & Borobudur">Yogyakarta &amp; Candi</option>
            <option value="Drop Juanda / Antarkota">Sewa Drop Bandara / Antarkota</option>
            <option value="Lainnya / Custom">Rute Custom Lainnya</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-participants" className="block text-xs font-bold text-[#526058] mb-1">
            Jumlah Peserta:
          </label>
          <select
            id="contact-participants"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-[#ded8cb] bg-[#fbf9f5] text-xs sm:text-sm font-semibold text-[#161b18] focus:outline-none focus:ring-2 focus:ring-[#1f4f3b]/20 cursor-pointer"
          >
            <option value="1 Orang (Solo Traveler)">1 Orang (Solo Traveler)</option>
            <option value="2 Orang (Pasangan)">2 Orang (Pasangan)</option>
            <option value="3 - 5 Orang (Keluarga Kecil)">3 - 5 Orang (Keluarga Kecil)</option>
            <option value="6 - 14 Orang (HiAce / ELF)">6 - 14 Orang (Grup HiAce / ELF)</option>
            <option value="15 - 30 Orang (Rombongan Bus)">15 - 30 Orang (Rombongan)</option>
            <option value="Lebih dari 30 Orang (Gathering)">Lebih dari 30 Orang (Gathering)</option>
          </select>
        </div>
      </div>

      {/* Travel Date */}
      <div>
        <label htmlFor="contact-date" className="block text-xs font-bold text-[#526058] mb-1">
          Rencana Tanggal Perjalanan:
        </label>
        <input
          id="contact-date"
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-[#ded8cb] bg-[#fbf9f5] text-xs sm:text-sm text-[#161b18] focus:outline-none focus:ring-2 focus:ring-[#1f4f3b]/20"
        />
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="contact-notes" className="block text-xs font-bold text-[#526058] mb-1">
          Catatan / Pertanyaan Tambahan (Opsional):
        </label>
        <textarea
          id="contact-notes"
          rows={3}
          placeholder="Contoh: Butuh penjemputan dari Stasiun Gubeng Surabaya pagi hari..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-[#ded8cb] bg-[#fbf9f5] text-xs sm:text-sm text-[#161b18] focus:outline-none focus:ring-2 focus:ring-[#1f4f3b]/20"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer ${
          serviceType === "tour"
            ? "bg-[#eb6437] hover:bg-[#d95328]"
            : "bg-[#1f4f3b] hover:bg-[#173d2d]"
        }`}
      >
        <MessageCircle className="w-4 h-4" />
        <span>Kirim via WhatsApp {serviceType === "tour" ? "Admin Tour" : "Admin Sewa Mobil"}</span>
      </button>

      <p className="text-[11px] text-[#74817a] text-center">
        Data formulir otomatis diformat menjadi pesan WhatsApp resmi ke nomor {serviceType === "tour" ? BUSINESS.contact.whatsappTourFormatted : BUSINESS.contact.whatsappTransportFormatted}.
      </p>
    </form>
  );
}
