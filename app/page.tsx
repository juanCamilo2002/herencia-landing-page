import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-hader";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSliderSection } from "@/components/sections/process-slider-section";
import { StorySection } from "@/components/sections/story-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WineShowcaseSection } from "@/components/sections/wine-showcase-section";

export default function Home() {
  return (
    <>
    <SiteHeader />

    <main>
      <HeroSection />
      <StorySection />
      <WineShowcaseSection />
      <ProcessSliderSection />
      <TestimonialsSection />
      <ContactSection />
    </main>

    <SiteFooter/>
    </>
  );
}
