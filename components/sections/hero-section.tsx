"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(1)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const slides = [
    {
      id: 0,
      title: "Development",
      video:
        "https://videos.pexels.com/video-files/3571936/3571936-sd_640_360_30fps.mp4",
      fallbackImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%201-Ya8hk3l3SlnaasOUk4Vlp7LZiRpDY0.webp",
    },
    {
      id: 1,
      title: "Design Research",
      video:
        "https://videos.pexels.com/video-files/3571937/3571937-sd_640_360_30fps.mp4",
      fallbackImage:
        "https://5.imimg.com/data5/SELLER/Default/2025/8/539147602/CJ/FI/CB/23776993/pcb-design-research-development-service.jpeg",
    },
    {
      id: 2,
      title: "Design Engineering",
      video:
        "https://videos.pexels.com/video-files/3571938/3571938-sd_640_360_30fps.mp4",
      fallbackImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg",
    },
    {
      id: 3,
      title: "Product Design",
      video:
        "https://videos.pexels.com/video-files/3571939/3571939-sd_640_360_30fps.mp4",
      fallbackImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service-yywzjFnivLbwthBAkIVKi86etnnzIQ.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e5a8e] via-[#1a7a9e] to-[#00a8a8] min-h-[700px] flex flex-col justify-center">
      <div className="w-full max-w-none px-6 md:px-12 py-12 lg:py-16 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="relative z-10 text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
              Precision Electronics Manufacturing Services
            </h1>

            <p className="text-xl lg:text-2xl font-semibold">
              25+ Years of Engineering Excellence & Production Scalability
            </p>

            <p className="text-base lg:text-lg text-white/90 max-w-xl">
              From rapid prototyping to mass production—we deliver IPC Class 3 compliant PCB Assembly, Wire Harnessing, and Box Builds.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* Updated Button to link to /contact */}
              <Button
                asChild
                size="lg"
                className="bg-white text-[#1e5a8e] hover:bg-white/90 font-semibold"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              {/* Updated Button to link to /services */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold bg-transparent"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 h-[400px] lg:h-full">
            <div
              className="relative h-full w-full overflow-hidden"
              style={{
                clipPath:
                  activeSlide !== -1
                    ? "none"
                    : "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <div className="relative h-full w-full overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${activeSlide === index ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <div
                      className="h-full w-full"
                      style={{
                        clipPath:
                          isLargeScreen
                            ? "polygon(15% 0, 100% 0, 100% 100%, 0 100%)"
                            : "none",
                      }}
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        poster={slide.fallbackImage}
                      >
                        <source src={slide.video} type="video/mp4" />
                        <img
                          src={slide.fallbackImage || "/placeholder.svg"}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </video>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-white/95 backdrop-blur-sm mt-auto">
        <div className="w-full max-w-none px-6 md:px-12 py-4">
          <div className="flex flex-wrap justify-center lg:justify-end gap-8 lg:gap-12 text-sm lg:text-base">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                className={`transition-colors hover:text-[#1e5a8e] ${activeSlide === index
                  ? "text-[#1e5a8e] font-bold"
                  : "text-gray-400"
                  }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}