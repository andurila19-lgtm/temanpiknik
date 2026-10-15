"use client";

import { useState } from "react";
import { TOUR_PACKAGES } from "@/data/packages";
import HeroSection from "./HeroSection";
import QuickSearch from "./QuickSearch";
import FeaturedPackages from "./FeaturedPackages";
import DestinationsSection from "./DestinationsSection";
import WhyChooseUs from "./WhyChooseUs";
import AboutSection from "./AboutSection";
import GallerySection from "./GallerySection";
import SocialProofSection from "./SocialProofSection";
import BookingStepsSection from "./BookingStepsSection";
import FAQSection from "./FAQSection";
import FinalCTASection from "./FinalCTASection";

export default function HomeContainer() {
  const [filterDestination, setFilterDestination] = useState<string>("all");
  const [filterTripType, setFilterTripType] = useState<string>("all");
  const [filterDate, setFilterDate] = useState<string>("");

  const handleSearch = (filters: {
    destination: string;
    tripType: string;
    date: string;
  }) => {
    setFilterDestination(filters.destination);
    setFilterTripType(filters.tripType);
    setFilterDate(filters.date);
  };

  const handleSelectDestination = (destSlug: string) => {
    setFilterDestination(destSlug);
    // Scroll smoothly to catalog
    const catalogElement = document.getElementById("paket-wisata");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClearFilters = () => {
    setFilterDestination("all");
    setFilterTripType("all");
    setFilterDate("");
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. QUICK SEARCH / PILIH PERJALANAN */}
      <QuickSearch
        onSearch={handleSearch}
        selectedDestination={filterDestination}
        selectedTripType={filterTripType}
      />

      {/* 3. PAKET WISATA UNGGULAN */}
      <FeaturedPackages
        packages={TOUR_PACKAGES}
        filterDestination={filterDestination}
        filterTripType={filterTripType}
        filterDate={filterDate}
        onClearFilters={handleClearFilters}
        onSelectDestination={handleSelectDestination}
      />

      {/* 4. DESTINASI EKSPLORASI */}
      <DestinationsSection onSelectDestination={handleSelectDestination} />

      {/* 5. MENGAPA MEMILIH KAMI */}
      <WhyChooseUs />

      {/* 6. TENTANG TEMAN PIKNIK */}
      <AboutSection />

      {/* 7. GALERI PERJALANAN DENGAN LIGHTBOX */}
      <GallerySection />

      {/* 8. TESTIMONI & SOCIAL PROOF GOOGLE MAPS */}
      <SocialProofSection />

      {/* 9. CARA PEMESANAN */}
      <BookingStepsSection />

      {/* 10. FAQ ACCORDION */}
      <FAQSection />

      {/* 11. CTA AKHIR */}
      <FinalCTASection />
    </>
  );
}
