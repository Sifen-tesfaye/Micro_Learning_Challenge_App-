import HeroSection from "../components/features/landing/HeroSection";
import NavSection from "../components/features/landing/NavSection";
import FeaturesSection from "../components/features/landing/FeaturesSection";
import TrustSignalsSection from "../components/features/landing/TrustSignalsSection";
import ChallengeCard from "../components/features/landing/ChallengeCard";
import Testimonial from "../components/features/landing/Testimonial";
import Footer from "../components/features/landing/Footer";
import MobileSectionNav from "../components/features/landing/MobileSectionNav";
import { landingPageData } from "../components/features/landing/landingData";

export default function Landing() {
  return (
    <div className="w-full min-h-screen bg-surface-dim dark">
      <NavSection {...landingPageData.nav} />
      <HeroSection {...landingPageData.hero} />
      <FeaturesSection {...landingPageData.features} />
      <TrustSignalsSection items={landingPageData.trustSignals} />
      <ChallengeCard
        challengeImage={landingPageData.challenge.image}
        cta={landingPageData.challenge.cta}
        description={landingPageData.challenge.description}
        eyebrow={landingPageData.challenge.eyebrow}
        meta={landingPageData.challenge.meta}
        title={landingPageData.challenge.title}
      />
      <Testimonial
        highlightedTitle={landingPageData.testimonials.highlightedTitle}
        items={landingPageData.testimonials.items}
        platformImage={landingPageData.testimonials.platformImage}
        title={landingPageData.testimonials.title}
      />
      <Footer {...landingPageData.footer} />
      <MobileSectionNav items={landingPageData.mobileNav} />
    </div>
  );
}
