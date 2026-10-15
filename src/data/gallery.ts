/**
 * Data Galeri Perjalanan Teman Piknik Tour Organizer
 * Seluruh foto bersumber dari dokumentasi terbuka berlisensi resmi (Creative Commons/Wikimedia)
 * dan diberi keterangan foto ilustratif untuk kebutuhan presentasi desain.
 */

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: "Pegunungan" | "Bahari & Pantai" | "Warisan Budaya" | "Aktivitas";
  imageUrl: string;
  aspectRatio: "square" | "landscape" | "portrait";
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Matahari Terbit di Kaldera Tengger",
    location: "Gunung Bromo, Jawa Timur",
    category: "Pegunungan",
    imageUrl: "/images/destinations/bromo-hero.jpg",
    aspectRatio: "landscape",
    caption:
      "Pesona fajar keemasan menyinari lautan awan dan puncak vulkanik Bromo Tengger Semeru.",
  },
  {
    id: "gal-2",
    title: "Tebing Megah Kelingking T-Rex",
    location: "Nusa Penida, Bali",
    category: "Bahari & Pantai",
    imageUrl: "/images/destinations/bali-kelingking.jpg",
    aspectRatio: "portrait",
    caption:
      "Pemandangan ikonik formasi tebing kapur purba yang menghadap laut biru toska bergradasi.",
  },
  {
    id: "gal-3",
    title: "Danau Asam Toska Kawah Ijen",
    location: "Kawah Ijen, Banyuwangi",
    category: "Pegunungan",
    imageUrl: "/images/destinations/ijen-lake.jpg",
    aspectRatio: "landscape",
    caption:
      "Danau kawah asam alami terbesar di dunia dengan kepulan asap belerang yang dramatis.",
  },
  {
    id: "gal-4",
    title: "Kemegahan Candi Prambanan",
    location: "Sleman, D.I. Yogyakarta",
    category: "Warisan Budaya",
    imageUrl: "/images/destinations/jogja-hero.jpg",
    aspectRatio: "landscape",
    caption:
      "Mahakarya arsitektur Hindu abad ke-9 yang menjulang megah dengan ukiran relief epik.",
  },
  {
    id: "gal-5",
    title: "Sensasi Melintasi Lautan Pasir",
    location: "Kaldera Bromo, Jawa Timur",
    category: "Aktivitas",
    imageUrl: "/images/destinations/bromo-jeep.jpg",
    aspectRatio: "square",
    caption:
      "Iring-iringan Jeep 4x4 berlatar belakang tebing kaldera dan deru angin Pasir Berbisik.",
  },
  {
    id: "gal-6",
    title: "Gemuruh Segar Coban Rondo",
    location: "Pujon, Malang",
    category: "Pegunungan",
    imageUrl: "/images/destinations/malang-hero.jpg",
    aspectRatio: "portrait",
    caption:
      "Air terjun alami setinggi 84 meter yang dikelilingi rimbunnya hutan pinus lereng pegunungan.",
  },
  {
    id: "gal-7",
    title: "Senja Hangat Malioboro",
    location: "Kawasan Malioboro, Yogyakarta",
    category: "Warisan Budaya",
    imageUrl: "/images/destinations/jogja-malioboro.jpg",
    aspectRatio: "landscape",
    caption:
      "Suasana malam khas kota Jogja yang hangat dengan alunan musik dan lampu pedestrian.",
  },
  {
    id: "gal-8",
    title: "Sunset Keemasan Pulau Merah",
    location: "Pesanggaran, Banyuwangi",
    category: "Bahari & Pantai",
    imageUrl: "/images/destinations/banyuwangi-pulaumerah.jpg",
    aspectRatio: "landscape",
    caption:
      "Cahaya lembayung senja membias di atas hamparan pasir dan bukit karang Pantai Pulau Merah.",
  },
  {
    id: "gal-9",
    title: "Warna-Warni Ceria Kampung Jodipan",
    location: "Kota Malang, Jawa Timur",
    category: "Aktivitas",
    imageUrl: "/images/destinations/malang-jodipan.jpg",
    aspectRatio: "landscape",
    caption:
      "Kreativitas warga mengubah bantaran sungai menjadi kanvas mural ceria penuh daya pikat.",
  },
  {
    id: "gal-10",
    title: "Harmoni Alam Pura Ulun Danu",
    location: "Danau Bratan Bedugul, Bali",
    category: "Warisan Budaya",
    imageUrl: "/images/destinations/bali-hero.jpg",
    aspectRatio: "landscape",
    caption:
      "Kesejukan udara pegunungan Bedugul dengan panorama pura air yang tenang nan sakral.",
  },
  {
    id: "gal-11",
    title: "Savana Liar Bekol Baluran",
    location: "TN Baluran, Jawa Timur",
    category: "Pegunungan",
    imageUrl: "/images/destinations/banyuwangi-hero.jpg",
    aspectRatio: "landscape",
    caption:
      "Padang rumput savana terbuka ala Afrika dengan latar belakang kerucut Gunung Baluran.",
  },
  {
    id: "gal-12",
    title: "Keajaiban Blue Fire Kawah Ijen",
    location: "Dasar Kawah Ijen, Banyuwangi",
    category: "Aktivitas",
    imageUrl: "/images/destinations/ijen-bluefire.jpg",
    aspectRatio: "square",
    caption:
      "Pijaran nyala api biru belerang yang hanya bisa disaksikan di kegelapan dini hari.",
  },
];
