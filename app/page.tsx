"use client";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-hader";
import { Bottle3DSection } from "@/components/sections/bottle-3d-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSliderSection } from "@/components/sections/process-slider-section";
import { StorySection } from "@/components/sections/story-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WineShowcaseSection } from "@/components/sections/wine-showcase-section";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";



export default function Home() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      scriptProps={{
        async: true,
        defer: true
      }}
    >

      <SiteHeader />

      <main>
        <HeroSection />
        <StorySection />
        <WineShowcaseSection />
        <Bottle3DSection />
        <ProcessSliderSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <SiteFooter />

    </GoogleReCaptchaProvider>
  );
}
