import HeroSection from "../components/features/landing/HeroSection";
import NavSection from "../components/features/landing/NavSection";
import FeaturesSection from "../components/features/landing/FeaturesSection";
import TrustSignalsSection from "../components/features/landing/TrustSignalsSection";
import ChallengeCard from "../components/features/landing/ChallengeCard";
import Testimonial from "../components/features/landing/Testimonial";
import Footer from "../components/features/landing/Footer";
import MobileSectionNav from "../components/features/landing/MobileSectionNav";

export default function Landing() {
  return (
    <div className="w-full min-h-screen bg-surface-dim dark">
      {/* Top Navigation Bar */}
      <NavSection />

      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Trust Signals / Stats */}
      <TrustSignalsSection />
      {/* Featured Challenge Card */}
      <ChallengeCard
        title={`Challenge of the Day"} description={"Join 4,200 scholars in today's deep-work simulation. Unlock the
            "Flow State" badge and earn double XP.`}
      >
        Mastering The <br /> Art of Focus
      </ChallengeCard>
      {/* Testimonials Section */}
      <Testimonial />
      {/* Footer */}
      <Footer />
      {/* Mobile Navigation */}
      <MobileSectionNav />
    </div>
  );
}
