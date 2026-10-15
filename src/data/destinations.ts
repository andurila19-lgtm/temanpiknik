/**
 * Data Destinasi Wisata Pilihan Teman Piknik Tour Organizer
 * Destinasi: Bromo, Kawah Ijen, Bali, Yogyakarta, Malang, Banyuwangi
 */

export interface Destination {
  id: string;
  slug: string;
  name: string;
  province: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  heroImage: string;
  thumbnail: string;
  accentColor: string;
  packageCountHint: number;
}

export const DESTINATIONS: Destination[] = [
  {
    id: "dest-bromo",
    slug: "bromo",
    name: "Gunung Bromo",
    province: "Jawa Timur",
    badge: "Ikonik Jawa Timur",
    tagline: "Kaldera megah, lautan pasir, dan sunrise magis di atas awan",
    description:
      "Taman Nasional Bromo Tengger Semeru menawarkan lanskap vulkanik spektakuler. Nikmati sensasi melintasi Lautan Pasir dengan Jeep 4x4, menyaksikan detik-detik fajar di Penanjakan atau Bukit Kingkong, mendaki bibir kawah aktif, serta keindahan Bukit Teletubbies dan Pasir Berbisik.",
    highlights: [
      "Sunrise megah Penanjakan / Kingkong Hill",
      "Petualangan Jeep 4x4 melintasi Lautan Pasir",
      "Kawah aktif Bromo & Pura Luhur Poten",
      "Savana hijau & Bukit Teletubbies",
    ],
    heroImage: "/images/destinations/bromo-hero.jpg",
    thumbnail: "/images/destinations/bromo-card.jpg",
    accentColor: "from-amber-700/80 to-emerald-900/90",
    packageCountHint: 1,
  },
  {
    id: "dest-ijen",
    slug: "ijen",
    name: "Kawah Ijen",
    province: "Jawa Timur",
    badge: "Fenomena Langka Dunia",
    tagline: "Danau asam toska terbesar dan pesona api biru legendaris",
    description:
      "Kawah Ijen merupakan salah satu destinasi paling unik di dunia. Terkenal dengan fenomena Blue Fire yang hanya ada di dua tempat di bumi, danau kawah kawah asam berwarna toska pekat, serta aktivitas para penambang belerang tradisional yang tangguh.",
    highlights: [
      "Fenomena langka Blue Fire dini hari",
      "Sunrise spektakuler danau toska Kawah Ijen",
      "Jalur pendakian malam dengan pemandangan bintang",
      "Melihat ketangguhan penambang belerang tradisional",
    ],
    heroImage: "/images/destinations/ijen-hero.jpg",
    thumbnail: "/images/destinations/ijen-crater.jpg",
    accentColor: "from-cyan-900/80 to-teal-950/90",
    packageCountHint: 1,
  },
  {
    id: "dest-bali",
    slug: "bali",
    name: "Pulau Bali",
    province: "Bali",
    badge: "Eksotis & Budaya",
    tagline: "Harmoni pura sakral, pantai tropis, dan sawah berundak Ubud",
    description:
      "Pulau Dewata selalu menyajikan pengalaman liburan tak terlupakan. Mulai dari keindahan tebing pantai Kelingking di Nusa Penida, pura air Ulun Danu di tepi Danau Bratan yang sejuk, hamparan terasering padi Tegallalang, hingga panorama senja di Pura Tanah Lot.",
    highlights: [
      "Pura Ulun Danu Bratan di perbukitan Bedugul",
      "Eksplorasi Nusa Penida & Kelingking Beach",
      "Terasering hijau Ubud & Desa Penglipuran",
      "Sunset eksotis di Pura Tanah Lot",
    ],
    heroImage: "/images/destinations/bali-hero.jpg",
    thumbnail: "/images/destinations/bali-kelingking.jpg",
    accentColor: "from-emerald-800/80 to-amber-900/90",
    packageCountHint: 1,
  },
  {
    id: "dest-yogyakarta",
    slug: "yogyakarta",
    name: "Yogyakarta",
    province: "D.I. Yogyakarta",
    badge: "Warisan Budaya",
    tagline: "Kemegahan candi dunia, kehangatan budaya, dan suasana Malioboro",
    description:
      "Yogyakarta adalah perpaduan sempurna antara warisan mahakarya arsitektur kuno dan keramahan masyarakat. Saksikan kemegahan relief Candi Prambanan dan Borobudur, jelajahi goa kapur eksotis, hingga menikmati malam santai penuh musik jalanan di kawasan Malioboro.",
    highlights: [
      "Warisan Candi Prambanan & Borobudur",
      "Nuansa malam legendaris kawasan Malioboro",
      "Petualangan lava tour Merapi atau susur goa",
      "Wisata kuliner khas dan sentra kerajinan batik",
    ],
    heroImage: "/images/destinations/jogja-hero.jpg",
    thumbnail: "/images/destinations/jogja-borobudur.jpg",
    accentColor: "from-amber-900/80 to-stone-900/90",
    packageCountHint: 1,
  },
  {
    id: "dest-malang",
    slug: "malang",
    name: "Malang & Kota Batu",
    province: "Jawa Timur",
    badge: "Sejuk & Ramah Keluarga",
    tagline: "Udara pegunungan segar, air terjun megah, dan wahana wisata seru",
    description:
      "Malang dan Kota Batu adalah destinasi favorit liburan keluarga dari Surabaya. Dikelilingi pegunungan berhawa dingin, kawasan ini menawarkan keindahan air terjun alami Coban Rondo, serunya petik apel langsung di kebun, warna-warni Kampung Jodipan, dan ragam theme park modern.",
    highlights: [
      "Keindahan alami Air Terjun Coban Rondo & labirin",
      "Wisata petik apel & agrowisata Kota Batu",
      "Keceriaan Kampung Warna-Warni Jodipan",
      "Pusat kuliner legendaris bakso dan apel Malang",
    ],
    heroImage: "/images/destinations/malang-hero.jpg",
    thumbnail: "/images/destinations/malang-jodipan.jpg",
    accentColor: "from-teal-800/80 to-emerald-950/90",
    packageCountHint: 1,
  },
  {
    id: "dest-banyuwangi",
    slug: "banyuwangi",
    name: "Banyuwangi",
    province: "Jawa Timur",
    badge: "The Sunrise of Java",
    tagline: "Savana ala Afrika di Baluran, pantai perawan, dan pulau tersembunyi",
    description:
      "Terletak di ujung timur Pulau Jawa, Banyuwangi menyimpan kekayaan alam luar biasa. Rasakan atmosfer padang savana Bekol di Taman Nasional Baluran, keindahan pantai berpasir merah saat senja di Pulau Merah, serta perairan hijau zamrud di Teluk Hijau.",
    highlights: [
      "Savana Bekol & Hutan Mangrove TN Baluran",
      "Pantai Pulau Merah dengan sunset memukau",
      "Petualangan tersembunyi ke Teluk Hijau (Green Bay)",
      "Kekayaan kuliner sego tempong & kopi Osing",
    ],
    heroImage: "/images/destinations/banyuwangi-hero.jpg",
    thumbnail: "/images/destinations/banyuwangi-pulaumerah.jpg",
    accentColor: "from-orange-900/80 to-emerald-900/90",
    packageCountHint: 1,
  },
];
