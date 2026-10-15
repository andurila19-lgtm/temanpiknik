import HomeContainer from "@/components/HomeContainer";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teman Piknik Tour Organizer | Temukan Perjalanan Serumu",
  description:
    "Agen perjalanan wisata profesional di Surabaya. Eksplorasi paket wisata Bromo, Kawah Ijen, Bali, Yogyakarta, Malang, dan Banyuwangi bersama Teman Piknik.",
  keywords: [
    "Teman Piknik",
    "Tour Organizer Surabaya",
    "Paket Wisata Bromo",
    "Paket Wisata Kawah Ijen",
    "Open Trip Surabaya",
    "Private Trip Surabaya",
    "Paket Liburan Bali",
    "Paket Wisata Malang",
    "Agen Tour Surabaya",
  ],
  authors: [{ name: "Teman Piknik Tour Organizer" }],
  openGraph: {
    title: "Teman Piknik Tour Organizer | Temukan Perjalanan Serumu",
    description:
      "Temukan perjalanan seru, jelajahi destinasi pilihan, dan ciptakan momen tak terlupakan bersama Teman Piknik Tour Organizer Surabaya.",
    url: BUSINESS.siteUrl,
    siteName: "Teman Piknik Tour Organizer",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${BUSINESS.siteUrl}/images/destinations/bromo-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Teman Piknik Tour Organizer - Waktunya Berangkat, Cerita Baru Menanti",
      },
    ],
  },
  alternates: {
    canonical: BUSINESS.siteUrl,
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: BUSINESS.name,
    description:
      "Agen perjalanan wisata berlokasi di Surabaya, Jawa Timur yang melayani paket wisata Bromo, Ijen, Bali, Jogja, Malang, dan Banyuwangi.",
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.contact.whatsappFormatted,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street + ", " + BUSINESS.address.subdistrict,
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      postalCode: BUSINESS.address.postalCode,
      addressCountry: "ID",
    },
    sameAs: [
      BUSINESS.contact.instagramUrl,
      BUSINESS.contact.googleMapsUrl,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeContainer />
    </>
  );
}
