"use client"

import { useEffect, useRef } from "react"
import {
  Cpu,
  Zap,
  Box,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Package,
  Globe,
  TestTube,
  Shield,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: "pcb",
    icon: Cpu,
    title: "PCB Assembly (PCBA)",
    path: "/services/pcb",
    shortDesc: "IPC Class 3 compliant assembly with precision SMT & THT lines.",
    fullDesc:
      "Precision PCBA manufacturing utilizing high-speed Pick & Place machines, automated solder paste inspection (SPI), and 12-zone reflow ovens. We handle everything from 01005 components to complex BGAs with zero-defect reliability.",
    features: [
      "0201/01005 Component Capability",
      "BGA, uBGA, QFN, & CSP Handling",
      "Automated Optical Inspection (AOI)",
      "3D Solder Paste Inspection (SPI)",
      "Conformal Coating & Potting",
      "ICT & Flying Probe Testing",
    ],
    image:
      "https://ecelectronics.com/wp-content/uploads/2025/05/shutterstock_2137865295-1-scaled-1.jpg",
    category: "Core Manufacturing",
  },
  {
    id: "prototyping",
    icon: Zap,
    title: "Rapid Prototyping (NPI)",
    path: "/services/prototyping",
    shortDesc: "Accelerated NPI services with DFM feedback in 24-48 hours.",
    fullDesc:
      "Bridge the gap between design and production. Our dedicated NPI lines allow for rapid iterations, helping you validate electrical performance and mechanical fit before committing to mass production volume.",
    features: [
      "24-48 Hour Turnaround",
      "Comprehensive DFM/DFA Reports",
      "BOM Scrubbing & Optimization",
      "Pre-Compliance Validation",
      "Small Batch Pilot Runs",
      "Quick-Turn Printed Circuit Boards",
    ],
    image:
      "https://foxtronicsems.com/wp-content/uploads/2025/07/rapid-prototyping-img-2.jpg",
    category: "Engineering & NPI",
  },
  {
    id: "wire-harness",
    icon: Box,
    title: "Wire Harnessing",
    path: "/services/wire-harness",
    shortDesc: "Automated cutting, stripping, and crimping solutions.",
    fullDesc:
      "Custom cable assemblies and wire harnesses for automotive, industrial, and medical applications. We utilize automated tooling for crimping and perform 100% pull-force and continuity testing.",
    features: [
      "Automated Cutting & Stripping",
      "Pull-Force Validation",
      "Cross-Section Analysis",
      "Continuity & Hi-Pot Testing",
      "Overmolding Capabilities",
      "Mixed-Connector Assemblies",
    ],
    image:
      "https://www.nai-group.com/wp-content/uploads/2018/08/43.-Testing-board-1.jpg",
    category: "Core Manufacturing",
  },
  {
    id: "design",
    icon: Wrench,
    title: "Design Services",
    path: "/services/design-engineering",
    shortDesc: "Schematic-to-Gerber design & BOM cost reduction.",
    fullDesc:
      "Our engineering team helps you optimize your product for manufacturability (DFM) and testability (DFT) from day one. We handle PCB layout, stackup design, and component selection to minimize production costs.",
    features: [
      "PCB Layout & Stackup Design",
      "Signal Integrity & Thermal Analysis",
      "BOM Cost Reduction (Value Eng.)",
      "Firmware Development",
      "Enclosure & Mechanical Design",
      "Obsolecence Management",
    ],
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Engineering & NPI",
  },
  {
    id: "box-build",
    icon: Package,
    title: "Box Build Integration",
    path: "/services/box-build",
    shortDesc: "Turnkey system integration, firmware & functional test.",
    fullDesc:
      "Complete system integration including electromechanical assembly, potting, ultrasonic welding, and clean-room assembly. We deliver finished goods ready for end-user distribution.",
    features: [
      "Electromechanical Assembly",
      "Firmware Flashing & Config",
      "Ultrasonic Welding",
      "Potting & Encapsulation",
      "End-of-Line Visual Quality Check",
      "Retail Packaging & Logistics",
    ],
    image:
      "https://www.pcbstartech.com/wp-content/uploads/2019/08/company-profile-2.jpg",
    category: "Core Manufacturing",
  },
  {
    id: "after-sales",
    icon: Shield,
    title: "Lifecycle Support",
    path: "/services/after-sales-support",
    shortDesc: "Global RMA management and component-level repair.",
    fullDesc:
      "Extend your product's lifecycle with our dedicated repair center. We handle warranty returns, analyzing failures down to the component level to provide root cause analysis and corrective actions.",
    features: [
      "Component Level Debug",
      "BGA Rework & Reballing",
      "Warranty Management (RMA)",
      "Root Cause Analysis (RCA)",
      "Refurbishment & Upgrades",
      "E-Waste Disposal Compliance",
    ],
    image:
      "https://images.pexels.com/photos/8867439/pexels-photo-8867439.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Lifecycle Services",
  },
]

const capabilities = [
  { title: "ISO 9001:2015 Certified", description: "Consistent QMS standards for every build" },
  { title: "IPC-A-610 Class 2 & 3", description: "Workmanship standards compliance" },
  { title: "RoHS & REACH", description: "Environmental compliance for global markets" },
  { title: "ESD S20.20", description: "Strict electrostatic discharge controls" },
  { title: "ICT & FCT Testing", description: "100% functional verification available" },
  { title: "Strategic Sourcing", description: "Direct distributor relationships & traceability" },
]

export default function ServicesClient() {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Animations
      const tl = gsap.timeline()

      tl.from(".hero-badge", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-heading",
          {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-text",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-stats > div",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4",
        )

      // 3D Card Tilt Effect
      const card = document.querySelector(".perspective-1000") as HTMLElement
      if (card) {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2

          const rotateX = ((y - centerY) / centerY) * -5 // Max 5deg rotation
          const rotateY = ((x - centerX) / centerX) * 5

          gsap.to(card.querySelector(".shadow-2xl"), {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.5,
            ease: "power2.out",
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card.querySelector(".shadow-2xl"), {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          })
        })
      }

      // Scroll Parallax for Background
      gsap.to(".absolute.inset-0.overflow-hidden > div", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-heading",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      // Existing animations for other sections...
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })

      gsap.from(".service-pill", {
        scrollTrigger: {
          trigger: ".services-strip",
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
      })

      gsap.from(".tabs-section", {
        scrollTrigger: {
          trigger: ".tabs-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })

      // Graph Section Animations
      const graphTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".graph-section",
          start: "top 70%",
        },
      })

      graphTl.from(".graph-section h2, .graph-section p, .graph-legend-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      })

      // Animate Donut Segments (Scroll-Linked)
      gsap.utils.toArray(".donut-segment").forEach((segment: any) => {
        const value = segment.getAttribute("data-value")
        gsap.to(segment, {
          scrollTrigger: {
            trigger: ".graph-section",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          strokeDasharray: `${value} 251.2`,
          ease: "none",
        })
      })

      // Rotate Chart on Scroll
      gsap.to(".graph-section svg", {
        scrollTrigger: {
          trigger: ".graph-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        rotation: 90,
        ease: "none",
      })

      // CTA Section Animations
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={rootRef} className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO + LIVE EMS DASHBOARD */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-12 md:py-16 bg-[#0B1120]">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[30%] rounded-full bg-indigo-500/10 blur-[100px] animate-pulse delay-2000" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="w-full max-w-none px-6 md:px-12 relative z-10 mx-auto">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Left Side: Content */}
            <div className="flex flex-col items-start text-left">
              <div className="hero-badge inline-flex items-center gap-2 mb-6 sm:mb-8 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-sky-400 backdrop-blur-md shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span>ISO 9001:2015 & IATF 16949 COMPLIANT</span>
              </div>

              <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4 sm:mb-6">
                Precision Electronics <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                  Manufacturing Scaled
                </span>
              </h1>

              <p className="hero-text text-sm sm:text-base md:text-lg text-slate-400 max-w-xl leading-relaxed mb-6 sm:mb-8">
                From rapid NPI to mass production, we act as your strategic EMS partner, delivering high-reliability electronics with complete supply chain transparency.
              </p>

              <div className="hero-cta flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 text-sm sm:text-base font-bold bg-sky-500 hover:bg-sky-400 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all duration-300 rounded-full"
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                {/* <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 text-sm sm:text-base font-bold border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-300 rounded-full backdrop-blur-sm"
                >
                  <Link href="#core-services">
                    Explore Capabilities
                  </Link>
                </Button> */}
              </div>

              {/* Stats Row */}
              <div className="hero-stats mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-slate-800/50 pt-6 sm:pt-8 w-full">
                {[
                  { value: "99.8%", label: "First Pass Yield" },
                  { value: "50M+", label: "Components Placed" },
                  { value: "Automotive", label: "Grade Quality" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: 3D Dashboard Card */}
            <div className="relative perspective-1000 group mt-8 lg:mt-0">
              {/* Glow Effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              <Card className="relative border-slate-700/50 bg-[#0F172A]/90 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
                {/* Card Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800/50">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                      System Online
                    </span>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Metric Cards */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-sky-400" />
                        <span className="text-xs font-medium text-sky-400">+12%</span>
                      </div>
                      <div className="text-lg sm:text-2xl font-bold text-white mb-1">842</div>
                      <div className="text-[11px] sm:text-xs text-slate-500">Active Components</div>
                    </div>
                    <div className="p-3 sm:p-4 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                        <span className="text-xs font-medium text-emerald-400">98.2%</span>
                      </div>
                      <div className="text-lg sm:text-2xl font-bold text-white mb-1">Efficiency</div>
                      <div className="text-[11px] sm:text-xs text-slate-500">Production Rate</div>
                    </div>
                  </div>

                  {/* Graph Placeholder */}
                  <div className="p-3 sm:p-4 rounded-2xl bg-slate-800/30 border border-slate-700/30">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase">
                        Output Velocity
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-500">Last 24h</span>
                    </div>
                    <div className="h-20 sm:h-24 flex items-end gap-1">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-sky-500/20 to-sky-500 rounded-t-sm hover:from-sky-400/40 hover:to-sky-400 transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Active Job */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 to-transparent border border-sky-500/20">
                    <div className="h-10 w-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Package className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white">Autonomous Line Active</div>
                      <div className="text-xs text-slate-400">Throughput: 1,200 UPH</div>
                    </div>
                    <div className="ml-auto">
                      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-sky-500 border-t-transparent animate-spin" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 uppercase tracking-widest">
              Scroll
            </span>
            <div className="h-10 sm:h-12 w-[1px] bg-gradient-to-b from-slate-400 to-transparent" />
          </div>
        </div>
      </section>

      {/* CORE SERVICE STACK (CLEAN DESIGN, NO SCROLL EFFECT) */}
      <section id="core-services" className="bg-slate-50 py-12 md:py-16">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="mb-10 md:mb-16 flex flex-col items-center text-center">
            <span className="mb-3 inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-sky-700">
              Service Tiers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Manufacturing Service Stack
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 text-pretty">
              From initial concept validation to full-scale global distribution, select the service capability that fits your program's maturity.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
            {/* Left: main cards */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {services.slice(0, 4).map((service, index) => (
                <Link key={service.id} href={service.path} className="h-full">
                  <Card className="group h-full cursor-pointer border-slate-200 hover:border-sky-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-5 sm:p-6 md:p-8 flex flex-col h-full">
                      <div className="mb-5 sm:mb-6 flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                          </div>
                          <div>
                            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-sky-600 mb-0.5">
                              Tier {index + 1}
                            </p>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6 flex-grow">
                        {service.shortDesc}
                      </p>
                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 group-hover:text-sky-600 transition-colors">
                          {service.category}
                        </span>
                        <span className="text-xs font-bold text-sky-600 group-hover:underline">
                          Learn more
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Right: quick “at a glance” summary */}
            <div className="lg:sticky lg:top-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
                How we scale with you
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8">
                Most partners begin with{" "}
                <span className="font-bold text-slate-900">Rapid NPI</span>, optimize designs via{" "}
                <span className="font-bold text-slate-900">DFM Engineers</span>, and scale volumes with our{" "}
                <span className="font-bold text-slate-900">Automated SMT Lines</span> +
                <span className="font-bold text-slate-900"> System Integration</span>.
              </p>

              <div className="space-y-5 sm:space-y-6 relative">
                {/* Connecting line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100" />

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-4 ring-white">
                    <span className="text-xs sm:text-sm font-bold">1</span>
                  </div>
                  <div className="pt-1.5 sm:pt-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Design / EVT</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      NPI & DFM/DFA Review
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-4 ring-white">
                    <span className="text-xs sm:text-sm font-bold">2</span>
                  </div>
                  <div className="pt-1.5 sm:pt-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">DVT / PVT</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Pilot Run & Reliability Testing
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="relative z-10 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 ring-4 ring-white">
                    <span className="text-xs sm:text-sm font-bold">3</span>
                  </div>
                  <div className="pt-1.5 sm:pt-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Mass Production</h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Box Build & Supply Chain
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 rounded-2xl bg-slate-50 p-5 sm:p-6 border border-slate-100">
                <p className="font-bold text-slate-900 mb-2 text-sm">
                  Not sure where to start?
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Share your volumes, target markets, and current design maturity.
                  Our engineering team will map the right service stack for you.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full bg-white hover:bg-slate-50 text-slate-700 border-slate-200"
                >
                  <Link href="/contact">Consult Engineering Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW (TECHNICAL CARDS) */}
      <section className="bg-white py-12 md:py-16">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Advanced Manufacturing Infrastructure
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              State-of-the-art facility equipped for complex, high-mix builds. We invest in the latest technology to ensure precision at every step.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link key={service.id} href={service.path} className="group">
                <div className="h-full bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-sky-200 hover:bg-white hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 relative overflow-hidden">

                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="h-14 w-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shadow-sm group-hover:scale-110 group-hover:border-sky-200 transition-all duration-300">
                        <service.icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-sky-600 transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                      {service.shortDesc}
                    </p>

                    {/* Footer */}
                    <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between group-hover:border-sky-100 transition-colors">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {service.category}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-sky-500 group-hover:border-sky-500 group-hover:text-white transition-all duration-300">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE BREAKDOWN (TABS) */}
      <section className="tabs-section bg-slate-50 py-12 md:py-16 border-t border-slate-200">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Detailed Service Breakdown
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 text-pretty">
              Switch between services to explore features, process coverage, and typical use-cases.
            </p>
          </div>

          <Tabs
            defaultValue="pcb"
            className="grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]"
          >
            <TabsList className="flex lg:flex-col justify-start lg:justify-stretch overflow-x-auto lg:overflow-visible rounded-2xl bg-white border border-slate-200 p-2 shadow-sm h-auto lg:h-fit sticky lg:top-24 z-10 max-w-full gap-2">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex items-center gap-2 sm:gap-3 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700 data-[state=active]:shadow-none w-auto lg:w-full justify-start shrink-0 lg:shrink transition-all"
                >
                  <service.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="whitespace-nowrap">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="min-h-[420px] sm:min-h-[480px] md:min-h-[500px]">
              {services.map((service) => (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <div className="grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-lg shadow-sky-500/20">
                          <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                            {service.title}
                          </h3>
                          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                            {service.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 text-pretty">
                        {service.fullDesc}
                      </p>

                      <div className="mb-6 sm:mb-8">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 sm:mb-4">
                          Key Features
                        </h4>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 text-emerald-500 shrink-0" />
                              <span className="text-xs sm:text-sm font-medium text-slate-700">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <Link href={service.path}>
                          <Button className="bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/20 text-sm sm:text-base">
                            View Service Page
                          </Button>
                        </Link>
                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="border-slate-300 text-slate-700 hover:border-sky-500 hover:text-sky-700 hover:bg-sky-50 text-sm sm:text-base"
                        >
                          <Link href="/contact?type=quote">Request Quote</Link>
                        </Button>
                      </div>
                    </div>

                    <div className="order-1 lg:order-2 relative h-56 sm:h-72 md:h-80 lg:h-[500px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* OUR CAPABILITIES (CLEAN, STATIC) */}
      <section className="bg-white py-10 sm:py-12 md:py-20">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-emerald-700">
              Quality & Compliance
            </span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Our Capabilities
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 text-pretty">
              Certifications, standards, and in-house controls that keep your builds repeatable, auditable, and
              production-ready at scale.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
            {/* Left: capability cards */}
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
              {capabilities.slice(0, 4).map((capability) => (
                <Card
                  key={capability.title}
                  className="border-slate-200 bg-slate-50 hover:bg-white hover:border-sky-400 hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-5 sm:p-6 md:p-8">
                    <div className="mb-3 sm:mb-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-slate-900">
                        {capability.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right: summary / reassurance panel */}
            <div className="lg:sticky lg:top-24 rounded-3xl border border-slate-200 bg-slate-900 p-6 sm:p-8 shadow-2xl shadow-slate-900/20 text-slate-100">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                Built for Audited, High-Reliability Sectors
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8">
                Whether you&apos;re building for <span className="font-bold text-white">Automotive, Medical, or Industrial IoT</span>,
                our processes are strictly aligned with <span className="font-bold text-white">IPC-A-610 Class 3</span>,{" "}
                <span className="font-bold text-white">ISO 9001:2015</span>, and traceable quality systems. Cost of failure is not an option.
              </p>

              <ul className="space-y-3 sm:space-y-4 text-sm border-t border-slate-800 pt-5 sm:pt-6">
                {capabilities.slice(4).map((capability) => (
                  <li key={capability.title} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 shrink-0" />
                    <span className="text-slate-300">
                      <span className="font-bold text-white">{capability.title}:</span>{" "}
                      {capability.description}
                    </span>
                  </li>
                ))}
              </ul>


            </div>
          </div>
        </div>
      </section>

      {/* GRAPH SECTION (DONUT CHART) */}
      <section className="graph-section bg-slate-950 py-14 sm:py-16 md:py-24 overflow-hidden">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-5 sm:mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Cost Efficiency</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Transparent <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Cost Breakdown
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                We believe in complete transparency. Our optimized manufacturing processes significantly reduce overhead, putting more value into your actual product.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { label: "Raw Materials & Components", value: "65%", color: "bg-emerald-500" },
                  { label: "Manufacturing & Assembly", value: "25%", color: "bg-sky-500" },
                  { label: "Quality Assurance & Testing", value: "10%", color: "bg-indigo-500" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="graph-legend-item flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors gap-2"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`h-3 w-3 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`} />
                      <span className="text-sm font-medium text-slate-300">{item.label}</span>
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Visualization */}
            <div className="order-1 lg:order-2 flex justify-center relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] sm:blur-[100px] rounded-full" />

              <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px] aspect-square">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {/* Background Circle */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="12" />

                  {/* Segment 1: 65% (Emerald) */}
                  <circle
                    className="donut-segment"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="12"
                    strokeDasharray="0 251.2"
                    strokeLinecap="round"
                    data-value="163.28"
                  />
                  {/* Segment 2: 25% (Sky) */}
                  <circle
                    className="donut-segment"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="12"
                    strokeDasharray="0 251.2"
                    strokeDashoffset="-163.28"
                    strokeLinecap="round"
                    data-value="62.8"
                  />
                  {/* Segment 3: 10% (Indigo) */}
                  <circle
                    className="donut-segment"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="12"
                    strokeDasharray="0 251.2"
                    strokeDashoffset="-226.08"
                    strokeLinecap="round"
                    data-value="25.12"
                  />
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Total Value
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-1 sm:mt-2">
                    100%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW CTA SECTION */}
      <section className="cta-section relative py-16 sm:py-20 md:py-32 overflow-hidden bg-slate-950">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none" />

        <div className="w-full max-w-none relative z-10 px-6 md:px-12 mx-auto text-center">
          <div className="cta-content max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                Scale Production?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
              Join industry leaders who trust us with their mission-critical electronics. From prototype to mass production, we&apos;re ready to build.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/contact?type=quote" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="h-14 sm:h-16 w-full sm:w-auto px-8 sm:px-10 text-base sm:text-lg font-bold bg-sky-500 hover:bg-sky-400 text-white shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_50px_rgba(14,165,233,0.5)] transition-all duration-300 rounded-full hover:-translate-y-1"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </Link>
              {/* <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 sm:h-16 w-full sm:w-auto px-8 sm:px-10 text-base sm:text-lg font-bold border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all duration-300 rounded-full backdrop-blur-sm"
                >
                  Talk to Engineering
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
