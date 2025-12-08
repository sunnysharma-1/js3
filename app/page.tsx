"use client"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import VideoIntroductionSection from "@/components/sections/video-introduction-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ProcessSection } from "@/components/sections/process-section"


import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <VideoIntroductionSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProcessSection />

      <CTASection />
    </main>
  )
}
