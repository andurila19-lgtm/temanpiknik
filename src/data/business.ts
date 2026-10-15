/**
 * Konfigurasi Informasi Bisnis Resmi Teman Piknik Tour Organizer
 * Berlokasi di Surabaya, Jawa Timur.
 *
 * PERINGATAN PENTING:
 * - Data di bawah ini bersumber dari informasi publik yang telah terverifikasi.
 * - Rating Google Maps (386 ulasan) adalah data yang tersedia, tidak boleh mengarang bintang fiktif atau kutipan ulasan palsu.
 * - Email, jam operasional resmi, detail legalitas, dan paket resmi belum dikonfirmasi oleh pemilik bisnis.
 *   Jangan menambahkan data tersebut sebagai klaim resmi tanpa verifikasi.
 */

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  category: string;
  address: {
    street: string;
    subdistrict: string;
    district: string;
    city: string;
    province: string;
    postalCode: string;
    full: string;
  };
  contact: {
    whatsappTourNumber: string;
    whatsappTourFormatted: string;
    whatsappTourUrl: string;
    whatsappTransportNumber: string;
    whatsappTransportFormatted: string;
    whatsappTransportUrl: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    whatsappUrl: string;
    instagramHandle: string;
    instagramUrl: string;
    instagramBankUrl: string;
    tiktokUrl: string;
    youtubeUrl: string;
    googleMapsUrl: string;
  };
  services: {
    id: string;
    title: string;
    description: string;
    whatsappType: "tour" | "transport";
  }[];
  socialProof: {
    reviewCount: number;
    platform: string;
    note: string;
  };
  disclaimer: {
    demoNote: string;
    pricingNote: string;
  };
  siteUrl: string;
}

export const BUSINESS: BusinessConfig = {
  name: "Teman Piknik Tour Organizer",
  legalName: "PT. TEMAN PIKNIK EKASUGA PERKASA",
  tagline: "Paket Wisata & Sewa Armada Wisata Surabaya Terpercaya",
  category: "Tour agency & rental transportasi wisata",
  address: {
    street: "1 No. 4 A, Jl. Dinoyo Lor",
    subdistrict: "Keputran",
    district: "Kecamatan Tegalsari",
    city: "Surabaya",
    province: "Jawa Timur",
    postalCode: "60265",
    full: "1 No. 4 A, Jl. Dinoyo Lor, Keputran, Kec. Tegalsari, Surabaya, Jawa Timur 60265",
  },
  contact: {
    whatsappTourNumber: "6285257157171",
    whatsappTourFormatted: "+62 852-5715-7171",
    whatsappTourUrl: "https://wa.me/6285257157171",
    whatsappTransportNumber: "6282245266116",
    whatsappTransportFormatted: "+62 822-4526-6116",
    whatsappTransportUrl: "https://wa.me/6282245266116",
    // Aliases for default contact
    whatsappNumber: "6285257157171",
    whatsappFormatted: "+62 852-5715-7171",
    whatsappUrl: "https://wa.me/6285257157171",
    instagramHandle: "@temanpiknik.id",
    instagramUrl: "https://www.instagram.com/temanpiknik.id/",
    instagramBankUrl: "https://www.instagram.com/temanpiknik.bank",
    tiktokUrl: "https://www.tiktok.com/@temanpiknik",
    youtubeUrl: "https://youtube.com/@temanpikniktourorganizer",
    googleMapsUrl: "https://maps.app.goo.gl/2nS3gpns8AVDrWCcA",
  },
  services: [
    {
      id: "paket-wisata",
      title: "Paket Wisata (Open & Private Trip)",
      description: "Trip Bromo Sunrise, Kawah Ijen Blue Fire, Malang, Bali, dan Jogja untuk rombongan maupun perorangan.",
      whatsappType: "tour",
    },
    {
      id: "sewa-jeep-bromo",
      title: "Sewa Jeep Bromo 4x4",
      description: "Jeep tangguh dengan driver berpengalaman untuk sunrise view point, kawah Bromo, Pasir Berbisik, dan Bukit Teletubbies.",
      whatsappType: "transport",
    },
    {
      id: "sewa-hiace-elf",
      title: "Sewa HiAce & ELF Giga",
      description: "Toyota HiAce Premio/Commuter dan Isuzu ELF Long berkapasitas 10-19 kursi dengan driver ramah dan unit bersih terawat.",
      whatsappType: "transport",
    },
    {
      id: "sewa-bus-wisata",
      title: "Sewa Bus Pariwisata & Mobil Keluarga",
      description: "Medium Bus 30-35 seat, Big Bus 45-59 seat, serta Innova Reborn & Avanza untuk gathering kantor dan liburan keluarga.",
      whatsappType: "transport",
    },
  ],
  socialProof: {
    reviewCount: 386,
    platform: "Google Maps",
    note: "Berdasarkan 386+ ulasan publik di Google Maps dengan legalitas resmi PT. Teman Piknik Ekasuga Perkasa.",
  },
  disclaimer: {
    demoNote:
      "Website ini merupakan demo penawaran profesional dari Reaksy untuk PT. Teman Piknik Ekasuga Perkasa Surabaya.",
    pricingNote:
      "Rincian paket resmi, ketersediaan unit armada, dan penawaran harga resmi dapat langsung dikonfirmasi melalui WhatsApp admin.",
  },
  siteUrl: "https://temanpiknik.reaksy.dev",
};

/**
 * Format pesan WhatsApp pemesanan paket wisata (Admin Tour)
 */
export function buildWhatsAppUrl(packageName?: string): string {
  const base = BUSINESS.contact.whatsappTourUrl;
  const message = packageName
    ? `Halo Teman Piknik, saya tertarik memesan paket wisata "${packageName}". Mohon info ketersediaan tanggal, harga resmi, rincian fasilitas, dan alur booking. Terima kasih.`
    : `Halo Teman Piknik, saya ingin memesan paket tour / konsultasi liburan. Mohon informasi pilihan paket dan tanggal keberangkatan yang tersedia. Terima kasih.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Format pesan WhatsApp sewa kendaraan / armada / jeep
 */
export function buildWhatsAppTransportUrl(vehicleName?: string): string {
  const base = BUSINESS.contact.whatsappTransportUrl;
  const message = vehicleName
    ? `Halo Teman Piknik, saya ingin menyewa ${vehicleName}. Mohon informasi tarif sewa, ketersediaan unit, rute, dan fasilitas armada. Terima kasih.`
    : `Halo Teman Piknik, saya ingin menanyakan sewa kendaraan wisata (Jeep Bromo / HiAce / ELF / Bus Pariwisata). Mohon rincian tarif dan ketersediaan armada. Terima kasih.`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppCustomTripUrl(params: {
  destination?: string;
  tripType?: string;
  date?: string;
}): string {
  const parts: string[] = ["Halo Teman Piknik, saya ingin merencanakan trip wisata khusus:"];
  if (params.destination) parts.push(`• Destinasi Tujuan: ${params.destination}`);
  if (params.tripType) parts.push(`• Jenis Perjalanan: ${params.tripType}`);
  if (params.date) parts.push(`• Rencana Tanggal: ${params.date}`);
  parts.push("Mohon estimasi biaya resmi, pilihan armada, dan rincian itinerary. Terima kasih.");
  return `${BUSINESS.contact.whatsappTourUrl}?text=${encodeURIComponent(parts.join("\n"))}`;
}
