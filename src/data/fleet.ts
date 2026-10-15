export interface FleetVehicle {
  id: string;
  name: string;
  category: "jeep" | "van" | "minibus" | "bus" | "mpv";
  categoryLabel: string;
  capacity: string;
  luggage: string;
  description: string;
  features: string[];
  recommendedFor: string[];
  indicativePrice: string;
  image: string;
}

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: "jeep-bromo-4x4",
    name: "Hardtop Jeep Bromo 4x4",
    category: "jeep",
    categoryLabel: "Jeep 4x4 Off-Road",
    capacity: "5 - 6 Penumpang",
    luggage: "Bagasi Ransel / Daypack",
    description: "Armada ikonik dan tangguh 4x4 untuk menembus medan pasir berbisik, tanjakan ekstrem Penanjakan, dan bukit Teletubbies Bromo dengan driver lokal berpengalaman.",
    features: [
      "Penggerak 4 Roda (4WD) Terawat",
      "Driver Handal Medan Bromo",
      "BBM & Unit Standar Off-Road",
      "Kapasitas Nyaman 5-6 Orang",
    ],
    recommendedFor: ["Sunrise Tour Penanjakan", "Kawah Bromo", "Pasir Berbisik", "Bukit Widodaren"],
    indicativePrice: "Mulai Rp 650.000 / unit",
    image: "/images/hero-bromo.jpg",
  },
  {
    id: "toyota-hiace-premio",
    name: "Toyota HiAce Premio Luxury",
    category: "van",
    categoryLabel: "Executive Minivan",
    capacity: "11 - 14 Penumpang",
    luggage: "4 - 6 Koper Besar",
    description: "Minivan kelas premium dengan suspensi empuk, kabin senyap, dan reclining seats ergonomis. Pilihan utama untuk perjalanan keluarga dan rombongan eksekutif.",
    features: [
      "Reclining Captain Seat Ergonomis",
      "Full AC Double Blower Dingin",
      "Port Charger USB Tiap Baris",
      "Audio Multimedia & Karaoke",
    ],
    recommendedFor: ["City Tour Surabaya", "Trip Bromo - Malang", "Perjalanan Dinas Kantor", "Trip Keluarga Bali"],
    indicativePrice: "Mulai Rp 1.200.000 / hari",
    image: "/images/bromo-sunrise.jpg",
  },
  {
    id: "toyota-hiace-commuter",
    name: "Toyota HiAce Commuter",
    category: "van",
    categoryLabel: "Minivan Wisata",
    capacity: "14 - 15 Penumpang",
    luggage: "4 - 5 Koper",
    description: "Kapasitas lega dengan efisiensi tinggi, sangat cocok untuk tour grup kantor, instansi, atau reuni wisata antarkota di Jawa dan Bali.",
    features: [
      "14 Kursi Reclining Standar Tour",
      "AC Sejuk Hingga Baris Belakang",
      "Driver Sopan & Paham Rute Wisata",
      "Kondisi Unit Bersih & Steril",
    ],
    recommendedFor: ["Tour Grup Komunitas", "Drop Off Bandara Juanda", "Ziarah & Wisata Keluarga", "Trip Banyuwangi Ijen"],
    indicativePrice: "Mulai Rp 1.050.000 / hari",
    image: "/images/malang-apple.jpg",
  },
  {
    id: "isuzu-elf-long",
    name: "Isuzu ELF Giga Long",
    category: "minibus",
    categoryLabel: "Microbus Wisata",
    capacity: "17 - 19 Penumpang",
    luggage: "Bagasi Belakang Luas",
    description: "Microbus berdaya angkut besar dengan bodi panjang. Solusi hemat untuk rombongan sekolah, komunitas arisan, atau gathering instansi.",
    features: [
      "17-19 Seat Nyaman & Lapang",
      "Bagasi Ekstra Luas di Belakang",
      "Sound System Karaoke & Mic",
      "Suspensi Kuat Jalur Luar Kota",
    ],
    recommendedFor: ["Study Tour & Rombongan", "Gathering Komunitas", "Trip Yogyakarta - Dieng", "Wisata Religi Jawa Timur"],
    indicativePrice: "Mulai Rp 1.250.000 / hari",
    image: "/images/ijen-bluefire.jpg",
  },
  {
    id: "medium-bus-pariwisata",
    name: "Medium Bus Pariwisata",
    category: "bus",
    categoryLabel: "Bus Wisata Medium",
    capacity: "30 - 35 Penumpang",
    luggage: "Kompartemen Bagasi Samping & Belakang",
    description: "Bus pariwisata modern untuk rombongan instansi perusahaan atau reuni akbar dengan fasilitas hiburan lengkap dan bagasi kargo besar.",
    features: [
      "Kursi Konfigurasi 2-2 Reclining",
      "LCD TV, Audio Sound & Mic Karaoke",
      "Pendingin Udara AC Ducting Tiap Seat",
      "Crew Driver & Co-Driver Berpengalaman",
    ],
    recommendedFor: ["Company Gathering", "Family Gathering Raksasa", "Tour Antarkota Jawa-Bali", "Event Rombongan Pernikahan"],
    indicativePrice: "Hubungi Admin untuk Penawaran",
    image: "/images/bali-temple.jpg",
  },
  {
    id: "toyota-innova-reborn",
    name: "Toyota Kijang Innova Reborn",
    category: "mpv",
    categoryLabel: "Premium Family MPV",
    capacity: "6 - 7 Penumpang",
    luggage: "2 - 3 Koper Sedang",
    description: "MPV andalan dengan kenyamanan berkendara tinggi, ideal untuk private trip keluarga kecil, VIP guest handling, dan operasional bisnis di Surabaya.",
    features: [
      "Kabin Luas & Suspensi Nyaman",
      "Kondisi Mesin Prima & Terawat",
      "Driver Berpakaian Rapi & Tepat Waktu",
      "Opsi All-In BBM + Driver",
    ],
    recommendedFor: ["Private Tour Keluarga", "Antar Jemput Bandara Juanda", "Kunjungan Bisnis Surabaya", "Liburan Akhir Pekan"],
    indicativePrice: "Mulai Rp 650.000 / hari",
    image: "/images/yogya-prambanan.jpg",
  },
];
