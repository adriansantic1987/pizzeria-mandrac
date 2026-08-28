import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MenuSection from "@/components/Menu/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import VacationModal from "@/components/VacationModal";

export default function Home() {
  return (
    <>
      {/* Automated Vacation Notice Overlay */}
      <VacationModal />

      {/* Dynamic analytics view logger */}
      <AnalyticsTracker />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero />

        {/* Story/About Us Section (Moved above Menu) */}
        <AboutUs />

        {/* Menu Cards List Section */}
        <MenuSection />

        {/* Photo Gallery Carousel Section */}
        <GallerySection />

        {/* Customer Reviews & Google Score Section */}
        <ReviewsSection />
      </main>

      {/* Footer Area with consolidated Address, Hours, Maps and Action Box */}
      <Footer />
    </>
  );
}
