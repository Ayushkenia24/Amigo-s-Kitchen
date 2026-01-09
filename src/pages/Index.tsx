import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import USPSection from "@/components/USPSection";
import VideoSection from "@/components/VideoSection";
import ReviewsSection from "@/components/ReviewsSection";
import PartySection from "@/components/PartySection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import StickyOrderButton from "@/components/StickyOrderButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <USPSection />
      <VideoSection />
      <ReviewsSection />
      <PartySection />
      <LocationSection />
      <Footer />
      <StickyOrderButton />
    </div>
  );
};

export default Index;
