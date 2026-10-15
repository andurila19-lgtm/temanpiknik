/**
 * Data Pertanyaan Umum (FAQ) Teman Piknik Tour Organizer
 *
 * Seluruh jawaban disusun secara transparan, informatif, dan mengarahkan
 * calon peserta untuk mengonfirmasi detail resmi kepada tim Teman Piknik via WhatsApp.
 */

export interface FAQItem {
  id: string;
  category: "Pemesanan" | "Layanan Trip" | "Fasilitas & Harga" | "Konsultasi";
  question: string;
  answer: string;
}

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: "faq-cara-pesan",
    category: "Pemesanan",
    question: "Bagaimana cara memesan perjalanan di Teman Piknik?",
    answer:
      "Proses pemesanan sangat mudah dan personal. Anda cukup memilih destinasi atau paket wisata yang diminati di website ini, lalu klik tombol 'Konsultasi via WhatsApp'. Tim kami akan membantu mengecek ketersediaan jadwal, memberikan rincian penawaran resmi, dan membimbing langkah konfirmasi pemesanan.",
  },
  {
    id: "faq-private-trip",
    category: "Layanan Trip",
    question: "Apakah tersedia pilihan perjalanan private (Private Trip)?",
    answer:
      "Ya, opsi perjalanan private (Private Trip) dapat diajukan sesuai kebutuhan Anda, baik untuk pasangan, keluarga kecil, maupun rombongan perusahaan. Dengan private trip, armada kendaraan dan jadwal perjalanan tidak digabung dengan peserta lain.",
  },
  {
    id: "faq-jadwal-custom",
    category: "Layanan Trip",
    question: "Apakah jadwal dan rute perjalanan bisa disesuaikan (custom itinerary)?",
    answer:
      "Tentu saja. Untuk skema perjalanan private atau group tour, Anda dapat mendiskusikan destinasi impian, durasi, titik penjemputan di area Surabaya/sekitarnya, dan preferensi waktu bersama tim Teman Piknik melalui WhatsApp.",
  },
  {
    id: "faq-harga-fasilitas",
    category: "Fasilitas & Harga",
    question: "Apa saja yang termasuk dalam harga paket wisata?",
    answer:
      "Rincian fasilitas resmi (seperti jenis transportasi, tiket masuk wisata, akomodasi penginapan, jeep lokal, dan pemandu) akan dicantumkan secara transparan dalam lembar penawaran resmi saat Anda berkonsultasi via WhatsApp sebelum melakukan pembayaran.",
  },
  {
    id: "faq-ketersediaan-tanggal",
    category: "Pemesanan",
    question: "Bagaimana cara mengetahui ketersediaan tanggal keberangkatan?",
    answer:
      "Karena kuota destinasi tertentu (seperti tiket pendakian Bromo, Kawah Ijen, atau ketersediaan hotel) memiliki batasan kuota harian, Anda dapat langsung menghubungi WhatsApp kami dengan menyebutkan perkiraan tanggal keberangkatan untuk dicek secara langsung.",
  },
  {
    id: "faq-konsultasi-gratis",
    category: "Konsultasi",
    question: "Apakah bisa berkonsultasi terlebih dahulu sebelum memutuskan memesan?",
    answer:
      "Tentu saja bisa dan sangat dianjurkan! Tim Teman Piknik siap berdiskusi, memberikan rekomendasi destinasi terbaik sesuai anggaran dan musim liburan, tanpa ada kewajiban langsung memesan.",
  },
];
