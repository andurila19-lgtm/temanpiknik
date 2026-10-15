/**
 * Data Katalog Paket Wisata Teman Piknik Tour Organizer (DATA DEMO)
 *
 * PERINGATAN PENTING:
 * Semua harga, durasi, destinasi, dan rincian fasilitas di bawah ini adalah
 * konten ilustratif untuk presentasi desain website penawaran oleh Reaksy.
 * Bukan merupakan penawaran resmi yang mengikat dari Teman Piknik.
 * Calon peserta diwajibkan untuk mengonfirmasi ketersediaan, rincian fasilitas resmi,
 * dan penyesuaian jadwal langsung via WhatsApp resmi Teman Piknik.
 */

export type TripType = "Open Trip" | "Private Trip" | "Family Trip" | "Company Trip";

export interface ItineraryItem {
  time: string;
  activity: string;
  description: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  activities: ItineraryItem[];
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  destinationSlug: string;
  destinationName: string;
  duration: string;
  durationDays: number;
  durationNights: number;
  indicativePrice: number;
  indicativePriceDisplay: string;
  priceUnit: string;
  tripTypes: TripType[];
  badge?: string;
  summary: string;
  description: string;
  highlights: string[];
  heroImage: string;
  gallery: {
    url: string;
    caption: string;
  }[];
  itinerary: DayItinerary[];
  facilitiesSample: {
    included: string[];
    excluded: string[];
  };
  preparationTips: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "pkg-bromo-eksplorasi",
    slug: "eksplorasi-bromo",
    title: "Eksplorasi Bromo",
    destinationSlug: "bromo",
    destinationName: "Gunung Bromo",
    duration: "2 Hari 1 Malam",
    durationDays: 2,
    durationNights: 1,
    indicativePrice: 1250000,
    indicativePriceDisplay: "Rp1.250.000",
    priceUnit: "/ orang",
    tripTypes: ["Open Trip", "Private Trip", "Family Trip"],
    badge: "Paling Populer",
    summary:
      "Jelajahi keajaiban kaldera Bromo, berburu sunrise magis di Penanjakan, jelajah Jeep 4x4 di Lautan Pasir, dan mendaki tangga kawah aktif.",
    description:
      "Paket Eksplorasi Bromo dirancang untuk menghadirkan pengalaman petualangan vulkanik terbaik di Jawa Timur dengan titik kumpul fleksibel dari Surabaya atau Malang. Dimulai dengan perjalanan malam, menyambut fajar spektakuler di atas lautan awan, dilanjutkan dengan jelajah jeep melintasi Pasir Berbisik dan savana hijau Bukit Teletubbies.",
    highlights: [
      "Menyaksikan sunrise legendaris dari viewpoint Penanjakan / Kingkong Hill",
      "Sensasi berfoto di atas Jeep 4x4 melintasi Lautan Pasir Bromo",
      "Mendaki tangga kawah aktif Bromo & melihat Pura Poten di kaki gunung",
      "Eksplorasi savana hijau Bukit Teletubbies dan Pasir Berbisik",
    ],
    heroImage: "/images/destinations/bromo-hero.jpg",
    gallery: [
      {
        url: "/images/destinations/bromo-hero.jpg",
        caption: "Kaldera Bromo Tengger dengan latar fajar keemasan",
      },
      {
        url: "/images/destinations/bromo-card.jpg",
        caption: "Siluet Gunung Batok dari jalur pandang Bromo",
      },
      {
        url: "/images/destinations/bromo-jeep.jpg",
        caption: "Iring-iringan Jeep 4x4 di Lautan Pasir Bromo",
      },
      {
        url: "/images/destinations/bromo-stair.jpg",
        caption: "Tangga pendakian menuju bibir kawah aktif Bromo",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Penjemputan Surabaya/Malang & Menuju Transit Point Bromo",
        activities: [
          {
            time: "23:00 - 00:00",
            activity: "Penjemputan Peserta",
            description:
              "Bertemu dengan tim Teman Piknik di meeting point area Surabaya (Stasiun Gubeng / Pasar Turi / Hotel). Briefing persiapan keberangkatan.",
          },
          {
            time: "00:30 - 02:30",
            activity: "Perjalanan Menuju Rest Area Bromo",
            description:
              "Perjalanan via darat menuju rest area transit jeep di kawasan Tosari / Sukapura.",
          },
          {
            time: "02:30 - 03:00",
            activity: "Oper Jeep 4x4 & Persiapan Pendakian",
            description:
              "Pindah ke Jeep 4x4 lokal berlisensi dan mengenakan jaket hangat sebelum menanjak ke puncak viewpoint.",
          },
        ],
      },
      {
        day: 2,
        title: "Sunrise Golden Hour, Lautan Pasir, Kawah Bromo & Kembali",
        activities: [
          {
            time: "03:30 - 05:30",
            activity: "Sunrise Point Penanjakan / Kingkong Hill",
            description:
              "Menikmati hangatnya kopi lokal sambil menunggu momen fajar menyinari kaldera Tengger dan Gunung Semeru di kejauhan.",
          },
          {
            time: "06:00 - 08:30",
            activity: "Kawah Bromo & Pura Luhur Poten",
            description:
              "Turun ke Lautan Pasir, berjalan kaki atau berkuda (opsional) menuju tangga kawah aktif Bromo untuk menyaksikan gemuruh kawah belerang.",
          },
          {
            time: "08:45 - 10:00",
            activity: "Pasir Berbisik & Savana Bukit Teletubbies",
            description:
              "Sesi foto estetik di hamparan pasir berbisik dan bukit hijau savana Teletubbies dengan latar jeep 4x4.",
          },
          {
            time: "10:30 - 12:00",
            activity: "Kembali ke Rest Area & Sarapan Pagi",
            description:
              "Bersih-bersih, sarapan hangat khas pegunungan, dan persiapan kembali ke Surabaya.",
          },
          {
            time: "12:30 - 15:30",
            activity: "Perjalanan Pulang ke Surabaya",
            description:
              "Pengantaran kembali ke stasiun atau titik awal di Surabaya. Trip berkesan selesai.",
          },
        ],
      },
    ],
    facilitiesSample: {
      included: [
        "Ilustrasi: Transportasi AC penjemputan PP dari Surabaya",
        "Ilustrasi: Sewa Jeep 4x4 untuk 5 lokasi Bromo",
        "Ilustrasi: Tiket masuk kawasan Taman Nasional Bromo Tengger Semeru",
        "Ilustrasi: Driver merangkap tour leader berpengalaman",
        "Ilustrasi: Bahan bakar, tol, dan parkir",
        "Ilustrasi: Dokumentasi foto perjalanan (konfirmasi ketersediaan fotografer)",
      ],
      excluded: [
        "Sewa kuda di lautan pasir (opsional)",
        "Pengeluaran pribadi (jaket, sarung tangan, sewa ojek)",
        "Tipping sukarela untuk driver / kru lokal",
        "Asuransi perjalanan di luar asuransi tiket resmi TNBTS",
      ],
    },
    preparationTips: [
      "Suhu udara di Bromo saat dini hari bisa mencapai 5°C - 10°C, kenakan jaket tebal windbreaker/winter jacket.",
      "Gunakan sepatu olahraga atau trekking yang nyaman untuk berjalan di pasir dan tangga.",
      "Siapkan masker penutup hidung untuk perlindungan dari debu pasir dan bau belerang ringan.",
      "Bawa powerbank ekstra karena suhu dingin cenderung mempercepat baterai ponsel habis.",
    ],
    faqs: [
      {
        question: "Apakah rute ini aman untuk anak-anak atau orang tua?",
        answer:
          "Secara umum aman karena Jeep mengantar sampai dekat titik aktivitas. Untuk tangga kawah Bromo memiliki 250 anak tangga, peserta lansia dapat memilih bersantai di area sekitar pura atau bawah tangga jika lelah.",
      },
      {
        question: "Kapan waktu terbaik untuk menyaksikan sunrise Bromo?",
        answer:
          "Musim kemarau (Mei hingga Oktober) umumnya menyajikan langit cerah tanpa kabut tebal, namun Bromo memiliki keunikan pemandangan awan tersendiri sepanjang tahun.",
      },
      {
        question: "Apakah bisa request private trip untuk keluarga kecil?",
        answer:
          "Bisa! Teman Piknik melayani konsultasi private trip dengan jadwal dan kapasitas kendaraan yang disesuaikan khusus untuk rombongan Anda.",
      },
    ],
  },
  {
    id: "pkg-kawah-ijen",
    slug: "jelajah-kawah-ijen",
    title: "Jelajah Kawah Ijen",
    destinationSlug: "ijen",
    destinationName: "Kawah Ijen",
    duration: "2 Hari 1 Malam",
    durationDays: 2,
    durationNights: 1,
    indicativePrice: 950000,
    indicativePriceDisplay: "Rp950.000",
    priceUnit: "/ orang",
    tripTypes: ["Open Trip", "Private Trip"],
    badge: "Fenomena Langka",
    summary:
      "Pendakian malam menuju kaldera Ijen, menyaksikan fenomena langka Blue Fire dunia, dan danau toska terbesar di Asia.",
    description:
      "Kawah Ijen menghadirkan petualangan malam yang tak ada duanya. Menyusuri jalur pendakian sepanjang 3 km di bawah taburan bintang, menuruni tepi kawah untuk melihat pancaran lidah api biru (Blue Fire) yang hanya ada dua di dunia, lalu menyambut fajar dengan pemandangan danau kawah asam berwarna toska yang mempesona.",
    highlights: [
      "Menyaksikan fenomena langka dunia Blue Fire (api biru)",
      "Sunrise menakjubkan di bibir danau toska Kawah Ijen",
      "Pemandangan Gunung Meranti dan Raung dari puncak",
      "Mengenal kehidupan dan perjuangan penambang belerang tradisional",
    ],
    heroImage: "/images/destinations/ijen-hero.jpg",
    gallery: [
      {
        url: "/images/destinations/ijen-hero.jpg",
        caption: "Pemandangan kawah dan kaldera belerang Ijen",
      },
      {
        url: "/images/destinations/ijen-bluefire.jpg",
        caption: "Pancaran fenomena langka Blue Fire di dasar kawah Ijen",
      },
      {
        url: "/images/destinations/ijen-crater.jpg",
        caption: "Bibir kawah dan lanskap bebatuan vulkanik Ijen",
      },
      {
        url: "/images/destinations/ijen-lake.jpg",
        caption: "Permukaan danau asam berwarna toska pekat Kawah Ijen",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Berangkat dari Surabaya Menuju Kawasan Ijen (Banyuwangi/Bondowoso)",
        activities: [
          {
            time: "18:00 - 19:00",
            activity: "Kumpul dan Penjemputan di Surabaya",
            description:
              "Bertemu di meeting point Surabaya. Pembagian masker gas dan briefing keselamatan pendakian kawah.",
          },
          {
            time: "19:00 - 01:00",
            activity: "Perjalanan Menuju Pos Paltuding Ijen",
            description:
              "Perjalanan melintasi jalur pantai utara atau pegunungan dengan perhentian makan malam.",
          },
          {
            time: "01:00 - 01:45",
            activity: "Tiba di Paltuding & Registrasi Tiket",
            description:
              "Pemeriksaan kesehatan, registrasi izin pendakian BKSDA, dan persiapan senter kepala.",
          },
        ],
      },
      {
        day: 2,
        title: "Trekking Malam, Blue Fire, Danau Kawah & Perjalanan Pulang",
        activities: [
          {
            time: "02:00 - 04:00",
            activity: "Pendakian Menuju Puncak Kawah Ijen (3 km)",
            description:
              "Trekking menyusuri jalur tanah menanjak dipandu oleh guide lokal berpengalaman.",
          },
          {
            time: "04:00 - 05:00",
            activity: "Melihat Blue Fire & Danau Kawah",
            description:
              "Menyaksikan kobaran gas belerang biru menyala dalam kegelapan kawah (kondisi cuaca dan aktivitas vulkanik memungkinkan).",
          },
          {
            time: "05:30 - 07:00",
            activity: "Sunrise & Panorama Danau Asam Toska",
            description:
              "Abadikan lanskap danau kawah terindah di dunia dengan kabut belerang yang dramatis.",
          },
          {
            time: "07:30 - 09:30",
            activity: "Turun Kembali ke Paltuding",
            description:
              "Trekking santai menuruni lereng dengan pemandangan pegunungan hijau yang segar.",
          },
          {
            time: "10:00 - 18:00",
            activity: "Perjalanan Kembali ke Surabaya",
            description:
              "Perjalanan pulang ke Surabaya dengan perhentian makan siang lokal dan pusat oleh-oleh.",
          },
        ],
      },
    ],
    facilitiesSample: {
      included: [
        "Ilustrasi: Transportasi mobil AC Surabaya - Paltuding PP",
        "Ilustrasi: Tiket masuk resmi Taman Wisata Alam Kawah Ijen",
        "Ilustrasi: Masker respirator gas belerang standar kawah",
        "Ilustrasi: Senter kepala (headlamp) selama pendakian",
        "Ilustrasi: Pemandu lokal (local guide) jalur kawah",
        "Ilustrasi: Driver, BBM, tol, dan biaya parkir",
      ],
      excluded: [
        "Sewa troli dorong lokal (taksi manusia) jika tidak kuat jalan",
        "Biaya surat keterangan sehat puskesmas (wajib regulasi setempat)",
        "Pengeluaran makan dan minum pribadi",
        "Tipping sukarela",
      ],
    },
    preparationTips: [
      "Jalur pendakian Ijen memiliki kemiringan menanjak 30-40 derajat pada kilometer awal; siapkan fisik dan stamina ringan sebelumnya.",
      "Suhu di Paltuding dan puncak berkisar antara 10°C - 15°C; bawa jaket hangat, sarung tangan, dan kupluk.",
      "Masker gas wajib digunakan saat berada di dekat kawah belerang.",
      "Peserta dengan riwayat asma akut atau gangguan pernapasan berat disarankan berkonsultasi sebelum memesan.",
    ],
    faqs: [
      {
        question: "Apakah Blue Fire selalu terlihat setiap malam?",
        answer:
          "Munculnya Blue Fire bergantung pada konsentrasi gas belerang, arah angin, dan cuaca. Waktu terbaik melihatnya adalah antara pukul 02:30 - 04:30 sebelum fajar tiba.",
      },
      {
        question: "Jika saya lelah mendaki, apakah ada alternatif?",
        answer:
          "Masyarakat lokal menyediakan jasa sewa troli dorong (taksi dorong) dari Paltuding menuju puncak kawah dengan tarif yang disepakati langsung dengan penambang.",
      },
      {
        question: "Apakah butuh surat sehat dokter?",
        answer:
          "Berdasarkan aturan BKSDA saat ini, pengunjung wajib menyertakan surat keterangan sehat dari dokter/puskesmas yang bisa diurus di pos sebelum pendakian.",
      },
    ],
  },
  {
    id: "pkg-liburan-bali",
    slug: "liburan-bali",
    title: "Liburan Bali",
    destinationSlug: "bali",
    destinationName: "Pulau Bali",
    duration: "3 Hari 2 Malam",
    durationDays: 3,
    durationNights: 2,
    indicativePrice: 1850000,
    indicativePriceDisplay: "Rp1.850.000",
    priceUnit: "/ orang",
    tripTypes: ["Family Trip", "Private Trip", "Company Trip"],
    badge: "Favorit Liburan",
    summary:
      "Paket lengkap menyusuri keindahan Pulau Dewata: Bedugul Ulun Danu, tebing Kelingking Nusa Penida, Ubud, dan sunset Tanah Lot.",
    description:
      "Nikmati perpaduan budaya luhur, alam eksotis, dan ketenangan pulau Bali dalam paket 3 hari 2 malam. Cocok untuk liburan bersama keluarga maupun rekan kerja dari Surabaya. Dari danau berkabut di Bedugul, keajaiban tebing Nusa Penida, hingga senja magis di Pura Tanah Lot.",
    highlights: [
      "Ikon Pura Ulun Danu di tengah danau Bratan Bedugul",
      "Eksplorasi Nusa Penida (Kelingking Beach & Broken Beach)",
      "Pemandangan asri terasering sawah Ubud & seni lokal",
      "Momen sunset spektakuler di Pura Tanah Lot",
    ],
    heroImage: "/images/destinations/bali-hero.jpg",
    gallery: [
      {
        url: "/images/destinations/bali-hero.jpg",
        caption: "Kemegahan Pura Ulun Danu di tepian Danau Bratan",
      },
      {
        url: "/images/destinations/bali-kelingking.jpg",
        caption: "Tebing ikonik menyerupai T-Rex di Kelingking Beach Nusa Penida",
      },
      {
        url: "/images/destinations/bali-tegallalang.jpg",
        caption: "Hamparan sawah berundak hijau di Tegallalang Ubud",
      },
      {
        url: "/images/destinations/bali-tanahlot.jpg",
        caption: "Siluet sunset megah di Pura Tanah Lot",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Penjemputan di Bali, Bedugul & Sunset Tanah Lot",
        activities: [
          {
            time: "09:00 - 10:00",
            activity: "Penjemputan Bandara Ngurah Rai / Hotel Denpasar",
            description: "Penyambutan oleh tim Teman Piknik dan pengantaran koper.",
          },
          {
            time: "11:30 - 14:00",
            activity: "Pura Ulun Danu Bratan Bedugul & Makan Siang",
            description:
              "Menikmati sejuknya udara pegunungan dan panorama pura sakral di tepi danau.",
          },
          {
            time: "16:00 - 18:30",
            activity: "Sunset di Pura Tanah Lot",
            description:
              "Menyaksikan ombak samudera dan matahari terbenam dengan siluet pura batu karang.",
          },
          {
            time: "19:30 - 21:00",
            activity: "Check-in Hotel & Acara Bebas",
            description: "Istirahat di hotel kawasan Kuta / Seminyak.",
          },
        ],
      },
      {
        day: 2,
        title: "One Day Trip Eksplorasi Nusa Penida Barat",
        activities: [
          {
            time: "06:30 - 08:00",
            activity: "Menuju Pelabuhan Sanur & Fast Boat ke Nusa Penida",
            description: "Penyeberangan cepat melintasi Selat Badung.",
          },
          {
            time: "09:00 - 12:00",
            activity: "Kelingking Beach & Paluang Cliff",
            description:
              "Foto ikonik tebing T-Rex dan panorama laut biru toska bergradasi.",
          },
          {
            time: "12:30 - 15:30",
            activity: "Broken Beach, Angel's Billabong & Makan Siang",
            description: "Melihat formasi kolam alami dan jembatan batu karang alami.",
          },
          {
            time: "16:30 - 18:00",
            activity: "Kembali ke Sanur & Makan Malam Khas Bali",
            description: "Menyeberang kembali ke daratan Bali utama.",
          },
        ],
      },
      {
        day: 3,
        title: "Tegallalang Ubud, Belanja Oleh-Oleh & Transfer Airport",
        activities: [
          {
            time: "08:30 - 11:30",
            activity: "Ubud Art Market & Terasering Tegallalang",
            description: "Jalan santai di pematang sawah dan belanja kerajinan kayu lokal.",
          },
          {
            time: "12:00 - 14:00",
            activity: "Makan Siang & Pusat Oleh-Oleh Krisna / Joger",
            description: "Berburu pie susu, kacang disco, dan cinderamata khas Bali.",
          },
          {
            time: "14:30 - Selesai",
            activity: "Pengantaran ke Bandara Ngurah Rai",
            description: "Drop off tepat waktu untuk penerbangan pulang ke Surabaya.",
          },
        ],
      },
    ],
    facilitiesSample: {
      included: [
        "Ilustrasi: Transportasi mobil ber-AC selama tour di Bali",
        "Ilustrasi: Akomodasi hotel 2 malam pilihan (bintang 3/setara)",
        "Ilustrasi: Tiket fast boat Sanur - Nusa Penida PP",
        "Ilustrasi: Transportasi mobil tour lokal di Nusa Penida",
        "Ilustrasi: Tiket masuk seluruh objek wisata sesuai program",
        "Ilustrasi: Driver ramah merangkap tour guide & BBM",
      ],
      excluded: [
        "Tiket pesawat / kapal Surabaya - Bali PP",
        "Makan di luar program dan pengeluaran pribadi",
        "Biaya aktivitas watersport atau ayunan bali swing",
        "Tipping sukarela untuk driver/guide",
      ],
    },
    preparationTips: [
      "Bawa pakaian santai yang nyaman, kacamata hitam, sunblock SPF tinggi, dan topi pantai.",
      "Siapkan pakaian ganti dan sandal anti licin untuk trip pantai Nusa Penida.",
      "Jaga kesopanan dan kenakan kain sarung saat memasuki area pura suci di Bali.",
    ],
    faqs: [
      {
        question: "Apakah paket ini bisa dimulai dari penjemputan Surabaya?",
        answer:
          "Bisa dikoordinasikan, baik via darat (jalur tol Jawa - ferry Ketapang) maupun paket tiket pesawat. Silakan diskusikan preferensi transportasi rombongan via WhatsApp.",
      },
      {
        question: "Bolehkah mengganti destinasi ke Bali Utara atau Timur?",
        answer:
          "Sangat bisa! Untuk skema Private Trip, itinerary dapat disesuaikan sepenuhnya mengikuti daftar destinasi impian Anda.",
      },
    ],
  },
  {
    id: "pkg-pesona-jogja",
    slug: "pesona-yogyakarta",
    title: "Pesona Yogyakarta",
    destinationSlug: "yogyakarta",
    destinationName: "Yogyakarta",
    duration: "3 Hari 2 Malam",
    durationDays: 3,
    durationNights: 2,
    indicativePrice: 1650000,
    indicativePriceDisplay: "Rp1.650.000",
    priceUnit: "/ orang",
    tripTypes: ["Family Trip", "Company Trip", "Private Trip"],
    badge: "Warisan Budaya",
    summary:
      "Menyusuri mahakarya Candi Prambanan, kemegahan Borobudur, petualangan lava Merapi, dan syahdunya malam di Malioboro.",
    description:
      "Yogyakarta selalu membuat siapa saja rindu untuk kembali. Paket Pesona Yogyakarta menyatukan kunjungan ke situs warisan dunia UNESCO, petualangan alam yang mendebarkan, dan wisata belanja budaya di jantung kota yang ramah.",
    highlights: [
      "Mengagumi arsitektur megah Candi Prambanan & relief kuno",
      "Wisata sejarah Candi Borobudur saat fajar/pagi",
      "Sensasi offroad Jeep Lava Tour Merapi",
      "Menikmati kopi jos dan musisi jalanan di Malioboro",
    ],
    heroImage: "/images/destinations/jogja-hero.jpg",
    gallery: [
      {
        url: "/images/destinations/jogja-hero.jpg",
        caption: "Kompleks candi Hindu termegah di Indonesia, Candi Prambanan",
      },
      {
        url: "/images/destinations/jogja-borobudur.jpg",
        caption: "Siluet stupa Candi Borobudur di kala mentari pagi menyingsing",
      },
      {
        url: "/images/destinations/jogja-malioboro.jpg",
        caption: "Kehangatan pedestrian Malioboro di senja hari",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Penjemputan di Stasiun Tugu / Bandara YIA & Candi Prambanan",
        activities: [
          {
            time: "10:00 - 11:30",
            activity: "Penyambutan Peserta di Stasiun Tugu / YIA",
            description: "Bertemu tim Teman Piknik dan langsung menuju pusat kota.",
          },
          {
            time: "12:00 - 13:30",
            activity: "Makan Siang Gudeg Legendaris",
            description: "Menikmati kuliner otentik khas Yogyakarta.",
          },
          {
            time: "14:00 - 17:00",
            activity: "Eksplorasi Candi Prambanan",
            description:
              "Menyusuri kompleks candi Siwa, Brahma, Wisnu, dan mendengarkan kisah relief Ramayana.",
          },
          {
            time: "18:30 - Selesai",
            activity: "Malam Santai di Malioboro",
            description: "Jalan kaki santai menikmati suasana malam dan kuliner angkringan.",
          },
        ],
      },
      {
        day: 2,
        title: "Borobudur Sunrise & Petualangan Jeep Lava Tour Merapi",
        activities: [
          {
            time: "06:00 - 09:30",
            activity: "Kunjungan ke Kawasan Candi Borobudur",
            description: "Menyaksikan mahakarya stupa terbesar di dunia dalam suasana pagi sejuk.",
          },
          {
            time: "10:30 - 13:30",
            activity: "Jeep Lava Tour Gunung Merapi",
            description:
              "Offroad menyusuri Kali Kuning, bunker Kaliadem, dan Museum Sisa Hartaku.",
          },
          {
            time: "14:30 - 16:30",
            activity: "Wisata Tebing Breksi atau Candi Ijo",
            description: "Menikmati lanskap Yogyakarta dari ketinggian bukit batu kapur.",
          },
        ],
      },
      {
        day: 3,
        title: "Keraton Jogja, Sentra Bakpia & Kembali ke Surabaya",
        activities: [
          {
            time: "08:30 - 11:00",
            activity: "Keraton Yogyakarta / Tamansari Water Castle",
            description: "Menelusuri sejarah kesultanan dan lorong bawah tanah Tamansari.",
          },
          {
            time: "11:30 - 13:30",
            activity: "Belanja Oleh-Oleh Khas (Bakpia Kukus/Batik)",
            description: "Membeli buah tangan khas Jogja yang hangat langsung dari pabriknya.",
          },
          {
            time: "14:00 - Selesai",
            activity: "Pengantaran ke Stasiun / Kereta Pulang",
            description: "Sesi penutupan perjalanan dan ucapan terima kasih.",
          },
        ],
      },
    ],
    facilitiesSample: {
      included: [
        "Ilustrasi: Transportasi mobil AC nyaman selama 3 hari di Jogja",
        "Ilustrasi: Menginap 2 malam di hotel pilihan pusat kota Jogja",
        "Ilustrasi: Sewa Jeep offroad Merapi short/medium track",
        "Ilustrasi: Tiket masuk seluruh destinasi wisata sesuai program",
        "Ilustrasi: Driver berpengalaman, BBM, tol, dan parkir",
      ],
      excluded: [
        "Tiket kereta / pesawat Surabaya - Yogyakarta PP",
        "Tiket naik struktur stupa atas Borobudur (apabila ada kuota khusus)",
        "Pengeluaran makan di luar program dan oleh-oleh pribadi",
      ],
    },
    preparationTips: [
      "Bawa masker dan kacamata saat mengikuti Jeep Lava Tour Merapi untuk kenyamanan dari percikan air dan debu.",
      "Gunakan pakaian bernapas dan alas kaki santai untuk keliling candi yang luas.",
    ],
    faqs: [
      {
        question: "Apakah bisa dijemput langsung dari Surabaya naik armada Teman Piknik?",
        answer:
          "Bisa! Kami melayani perjalanan darat langsung via tol Surabaya - Solo - Jogja, atau menjemput Anda langsung di Stasiun Tugu / Bandara YIA Yogyakarta.",
      },
      {
        question: "Apakah tiket naik ke Candi Borobudur sudah dijamin?",
        answer:
          "Tiket pelataran candi sudah termasuk. Untuk tiket naik ke struktur utama candi diatur oleh kuota harian pemerintah dan kami bantu proses reservasinya sebelum keberangkatan.",
      },
    ],
  },
  {
    id: "pkg-trip-malang",
    slug: "trip-malang",
    title: "Trip Malang & Batu",
    destinationSlug: "malang",
    destinationName: "Malang & Kota Batu",
    duration: "2 Hari 1 Malam",
    durationDays: 2,
    durationNights: 1,
    indicativePrice: 850000,
    indicativePriceDisplay: "Rp850.000",
    priceUnit: "/ orang",
    tripTypes: ["Family Trip", "Open Trip", "Company Trip"],
    badge: "Harga Terbaik",
    summary:
      "Liburan sejuk ramah keluarga: Air Terjun Coban Rondo, serunya petik apel segar, dan spot foto ceria Kampung Warna-Warni Jodipan.",
    description:
      "Destinasi terdekat dan paling menyegarkan dari Surabaya! Trip Malang & Batu menghadirkan kombinasi wisata alam air terjun berhawa dingin, sensasi memetik buah apel segar langsung dari pohonnya, serta foto ceria di lorong warna-warni Kampung Jodipan.",
    highlights: [
      "Kesejukan percikan Air Terjun Coban Rondo & labirin hijau",
      "Sensasi makan apel sepuasnya langsung di kebun petani Batu",
      "Spot foto Instagramable di Kampung Warna-Warni Jodipan",
      "Wisata kuliner bakso Malang otentik dan kuliner malam Alun-Alun Batu",
    ],
    heroImage: "/images/destinations/malang-hero.jpg",
    gallery: [
      {
        url: "/images/destinations/malang-hero.jpg",
        caption: "Air Terjun Coban Rondo di tengah rimbunnya hutan pinus",
      },
      {
        url: "/images/destinations/malang-waterfall.jpg",
        caption: "Tetesan air sejuk pegunungan di Coban Rondo",
      },
      {
        url: "/images/destinations/malang-jodipan.jpg",
        caption: "Keceriaan dinding warna-warni Kampung Jodipan Malang",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Penjemputan Surabaya, Air Terjun Coban Rondo & Suasana Batu",
        activities: [
          {
            time: "07:30 - 08:30",
            activity: "Penjemputan Peserta di Surabaya",
            description: "Berangkat via tol Surabaya - Singosari / Malang.",
          },
          {
            time: "10:30 - 13:00",
            activity: "Kawasan Coban Rondo & Labirin Hijau",
            description:
              "Menikmati pemandangan air terjun setinggi 84 meter dan permainan mencari jalan di taman labirin.",
          },
          {
            time: "13:30 - 15:30",
            activity: "Makan Siang & Agrowisata Petik Apel Batu",
            description:
              "Memetik apel hijau manalagi segar langsung dari pohon di lereng Gunung Panderman.",
          },
          {
            time: "16:30 - 19:30",
            activity: "Alun-Alun Kota Batu & Pos Ketan Legenda",
            description: "Menikmati malam dingin Kota Batu dengan sajian ketan manis legendaris.",
          },
        ],
      },
      {
        day: 2,
        title: "Kampung Warna-Warni Jodipan, Bakso Malang & Kembali",
        activities: [
          {
            time: "08:30 - 11:00",
            activity: "Eksplorasi Kampung Warna-Warni Jodipan",
            description:
              "Menelusuri gang estetik penuh mural cerah dan jembatan kaca di atas sungai Brantas.",
          },
          {
            time: "11:30 - 13:30",
            activity: "Wisata Kuliner Bakso Malang Asli",
            description: "Menyantap semangkuk bakso hangat dengan pangsit renyah dan tahu bakso khas.",
          },
          {
            time: "14:00 - 15:30",
            activity: "Pusat Keripik Buah & Apel Malang",
            description: "Belanja oleh-oleh keripik nangka, apel, salak, dan strudel.",
          },
          {
            time: "16:00 - 18:00",
            activity: "Perjalanan Pulang ke Surabaya",
            description: "Tiba kembali di titik penjemputan awal di Surabaya.",
          },
        ],
      },
    ],
    facilitiesSample: {
      included: [
        "Ilustrasi: Transportasi mobil AC Surabaya - Malang PP",
        "Ilustrasi: Tiket masuk kawasan Air Terjun Coban Rondo",
        "Ilustrasi: Tiket masuk kebun apel + makan apel sepuasnya di kebun",
        "Ilustrasi: Tiket masuk Kampung Warna-Warni Jodipan",
        "Ilustrasi: Akomodasi 1 malam di hotel sejuk kawasan Batu",
        "Ilustrasi: Driver, BBM, tol Surabaya-Malang PP, dan parkir",
      ],
      excluded: [
        "Makan siang & malam di luar program",
        "Apel yang dipetik untuk dibawa pulang (dihitung per kilogram)",
        "Pengeluaran belanja pribadi",
      ],
    },
    preparationTips: [
      "Siapkan jaket atau sweater untuk malam hari di Kota Batu yang dingin.",
      "Gunakan alas kaki yang tidak licin saat berjalan di sekitar bebatuan air terjun.",
    ],
    faqs: [
      {
        question: "Apakah bisa request tambah destinasi museum angkut atau jatim park?",
        answer:
          "Tentu saja! Rute Malang & Batu sangat fleksibel untuk disesuaikan dengan destinasi theme park impian keluarga Anda.",
      },
    ],
  },
  {
    id: "pkg-explore-banyuwangi",
    slug: "explore-banyuwangi",
    title: "Explore Banyuwangi",
    destinationSlug: "banyuwangi",
    destinationName: "Banyuwangi",
    duration: "3 Hari 2 Malam",
    durationDays: 3,
    durationNights: 2,
    indicativePrice: 1450000,
    indicativePriceDisplay: "Rp1.450.000",
    priceUnit: "/ orang",
    tripTypes: ["Open Trip", "Private Trip", "Family Trip"],
    badge: "Eksotis",
    summary:
      "Jelajah pesona The Sunrise of Java: Padang Savana Bekol Baluran, senja Pulau Merah, dan keindahan perawan Teluk Hijau.",
    description:
      "Banyuwangi adalah surga tersembunyi di tapal kuda Jawa Timur. Mulai dari nuansa safari liar di Savana Baluran (Africa van Java), bermain pasir putih di Teluk Hijau Meru Betiri, hingga memandang matahari terbenam dengan siluet bukit kerucut di Pantai Pulau Merah.",
    highlights: [
      "Suasana savana liar ala Afrika di Bekol TN Baluran",
      "Pemandangan laut zamrud di Teluk Hijau (Green Bay)",
      "Sunset eksotis di Pantai Pulau Merah",
      "Mencicipi kuliner khas Sego Tempong yang pedas mantap",
    ],
    heroImage: "/images/destinations/banyuwangi-hero.jpg",
    gallery: [
      {
        url: "/images/destinations/banyuwangi-hero.jpg",
        caption: "Hamparan padang rumput savana Bekol di kaki Gunung Baluran",
      },
      {
        url: "/images/destinations/banyuwangi-pulaumerah.jpg",
        caption: "Pantai Pulau Merah dengan deburan ombak dan bukit pulau yang khas",
      },
      {
        url: "/images/destinations/banyuwangi-telukhijau.jpg",
        caption: "Air laut berwarna hijau toska alami di Pantai Teluk Hijau",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan Surabaya - Banyuwangi & Savana Baluran",
        activities: [
          {
            time: "06:00 - 07:00",
            activity: "Penjemputan di Surabaya",
            description: "Berangkat pagi hari melintasi jalur Pantura Probolinggo - Situbondo.",
          },
          {
            time: "12:00 - 13:30",
            activity: "Makan Siang Ikan Bakar Pantura",
            description: "Istirahat santai tepi pantai di kawasan Pasir Putih Situbondo.",
          },
          {
            time: "14:30 - 17:30",
            activity: "Taman Nasional Baluran (Africa van Java)",
            description:
              "Menyusuri Savana Bekol, menara pandang, dan hutan bakau Pantai Bama yang asri.",
          },
          {
            time: "19:00 - Selesai",
            activity: "Check-in Hotel di Kota Banyuwangi",
            description: "Santap malam kuliner sego tempong khas Banyuwangi.",
          },
        ],
      },
      {
        day: 2,
        title: "Eksplorasi Teluk Hijau (Green Bay) & Sunset Pulau Merah",
        activities: [
          {
            time: "07:30 - 10:30",
            activity: "Perjalanan Menuju Taman Nasional Meru Betiri",
            description: "Melintasi perkebunan kakao dan karet legendaris.",
          },
          {
            time: "10:30 - 13:30",
            activity: "Teluk Hijau & Pantai Batu",
            description:
              "Trekking ringan melewati perbukitan asri menuju teluk berpasir putih halus dengan gradasi air laut hijau zamrud.",
          },
          {
            time: "14:30 - 17:30",
            activity: "Pantai Pulau Merah",
            description:
              "Menikmati santai sore, bermain air, dan menikmati momen golden sunset terbaik di Banyuwangi.",
          },
        ],
      },
      {
        day: 3,
        title: "Pusat Oleh-Oleh Osing & Perjalanan Kembali ke Surabaya",
        activities: [
          {
            time: "08:30 - 10:30",
            activity: "Belanja Kopi Osing, Sale Pisang & Batik Gajah Oling",
            description: "Membawa pulang kuliner khas suku asli Banyuwangi.",
          },
          {
            time: "11:00 - 18:00",
            activity: "Perjalanan Kembali ke Surabaya",
            description: "Drop off peserta di stasiun atau alamat asal di Surabaya.",
          },
        ],
      },
    ],
    facilitiesSample: {
      included: [
        "Ilustrasi: Transportasi mobil AC Surabaya - Banyuwangi PP",
        "Ilustrasi: Akomodasi hotel 2 malam di Banyuwangi",
        "Ilustrasi: Tiket masuk Taman Nasional Baluran",
        "Ilustrasi: Tiket masuk Teluk Hijau & Pantai Pulau Merah",
        "Ilustrasi: Driver berpengalaman, BBM, tol, dan parkir",
      ],
      excluded: [
        "Perahu nelayan Teluk Hijau (opsional jika tidak ingin trekking)",
        "Makan di luar jadwal tour",
        "Pengeluaran pribadi",
      ],
    },
    preparationTips: [
      "Bawa pakaian ganti ekstra dan tas tahan air (dry bag) saat mengunjungi Teluk Hijau.",
      "Gunakan sandal trekking atau sepatu yang nyaman untuk berjalan di jalur pantai berbatu.",
    ],
    faqs: [
      {
        question: "Apakah bisa dikombinasikan dengan pendakian Kawah Ijen?",
        answer:
          "Sangat bisa! Paket Banyuwangi + Kawah Ijen adalah salah satu kombinasi terfavorit. Hubungi kami untuk penyesuaian jadwal.",
      },
    ],
  },
];

/**
 * Filter helpers
 */
export function getPackageBySlug(slug: string): TourPackage | undefined {
  return TOUR_PACKAGES.find((p) => p.slug === slug);
}

export function getPackagesByDestination(destSlug: string): TourPackage[] {
  return TOUR_PACKAGES.filter((p) => p.destinationSlug === destSlug);
}

export function getRelatedPackages(currentSlug: string, limit = 3): TourPackage[] {
  return TOUR_PACKAGES.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
