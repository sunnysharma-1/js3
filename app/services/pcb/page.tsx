"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Play,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const offerings = [
  {
    title: "Surface Mount Technology (SMT)",
    description:
      "High-speed automated SMT assembly with precision placement for complex boards.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg",
  },
  {
    title: "Through-Hole Assembly",
    description:
      "Traditional through-hole assembly for components requiring mechanical strength.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service-yywzjFnivLbwthBAkIVKi86etnnzIQ.jpg",
  },
  {
    title: "Mixed Technology Assembly",
    description:
      "Combining SMT and through-hole techniques for optimal board design.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-2YYQ5PDb7mMIThMaQssDFdHxQRP1nT.png",
  },
  {
    title: "BGA and Micro-BGA Assembly",
    description: "Advanced ball grid array assembly with X-ray inspection.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
  },
  {
    title: "Lead-Free & RoHS Compliant",
    description:
      "Environmentally friendly assembly meeting global compliance standards.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20-%20Plant%20Photo-Jz7vz9fkVonxheq1i1YsWivgJON7xV.jpg",
  },
  {
    title: "Automated Optical Inspection (AOI)",
    description:
      "State-of-the-art AOI systems ensuring zero-defect manufacturing.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%201-Ya8hk3l3SlnaasOUk4Vlp7LZiRpDY0.webp",
  },
]

const process = [
  {
    step: "01",
    title: "Design Review",
    description: "Comprehensive DFM analysis for manufacturability.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%202-7FHY3dWqix92oGFzI5wjCrPrlII6i6.jpg",
  },
  {
    step: "02",
    title: "Material Procurement",
    description: "Sourcing components from verified global suppliers.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%201-Ya8hk3l3SlnaasOUk4Vlp7LZiRpDY0.webp",
  },
  {
    step: "03",
    title: "SMT Assembly",
    description: "Automated pick-and-place with precise solder paste.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg",
  },
  {
    step: "04",
    title: "Reflow Soldering",
    description: "Controlled profiles for reliable solder joints.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service-yywzjFnivLbwthBAkIVKi86etnnzIQ.jpg",
  },
  {
    step: "05",
    title: "Inspection & Testing",
    description: "AOI, X-ray, and functional testing for QA.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
  },
  {
    step: "06",
    title: "Delivery",
    description: "Secure packaging and on-time global shipment.",
    image:
      "https://www.pcbinternational.com/images/shippingPCB.jpg",
  },
]

const technologies = [
  {
    name: "High-Speed SMT Lines",
    description:
      "Latest generation pick-and-place machines with 0201 component capability.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-2YYQ5PDb7mMIThMaQssDFdHxQRP1nT.png",
  },
  {
    name: "X-Ray Inspection",
    description:
      "Advanced X-ray systems for BGA and hidden solder joint inspection.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
  },
  {
    name: "3D AOI Systems",
    description:
      "3D automated optical inspection for comprehensive quality control.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20-%20Plant%20Photo-Jz7vz9fkVonxheq1i1YsWivgJON7xV.jpg",
  },
  {
    name: "Reflow Ovens",
    description:
      "Precision reflow ovens with nitrogen atmosphere for perfect joints.",
    image:
      "https://www.itechsmt.com/cdn/shop/articles/RF-C835C_800x500_eb0c3a8e-fce7-4e06-8bb6-6f7072dfd9f7.jpg?v=1672896367&width=1000",
  },
]

const industries = [
  {
    industry: "Automotive",
    icon: "🚗",
    details: "AEC-Q200 compliant assemblies for automotive electronics.",
  },
  {
    industry: "Medical Devices",
    icon: "⚕️",
    details: "Support for ISO 13485 flows for medical electronics.",
  },
  {
    industry: "Industrial IoT",
    icon: "🏭",
    details: "Rugged designs for harsh industrial environments.",
  },
  {
    industry: "Consumer Electronics",
    icon: "📱",
    details: "High-volume, cost-optimized consumer electronics builds.",
  },
  {
    industry: "Telecommunications",
    icon: "📡",
    details: "High-reliability assemblies for telecom infrastructure.",
  },
  {
    industry: "Aerospace & Defense",
    icon: "✈️",
    details: "Stringent process controls for mission-critical systems.",
  },
]

export default function PCBAssemblyPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const heroSection = heroRef.current
    if (!heroSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(heroSection)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO – styled like Global Purchasing hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 md:py-24"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB-mbzBx2eRmgzx3lkGgrLJ1sJtulmhZh.webp"
            alt="PCB assembly background"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/85 to-sky-900/80" />
        </div>

        {/* Soft glow orbs */}
        <div className="pointer-events-none">
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-none px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            {/* LEFT – copy + CTAs */}
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/70 px-4 py-2 shadow-sm backdrop-blur">
                <Cpu className="h-4 w-4 text-sky-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
                  PCB Assembly &amp; Manufacturing
                </span>
              </div>

              <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                Precision PCB Assembly{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
                  from Prototype to Production
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-balance text-base text-slate-200/90 md:text-lg">
                ISO 9001:2015-driven processes, high-speed SMT lines, and strict
                quality control to bring your electronics to life with
                reliability, repeatability, and scale.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-sky-500 px-7 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Stats – 4 cards */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  {
                    label: "First Pass Yield",
                    value: "99.8%",
                    icon: CheckCircle2,
                  },
                  {
                    label: "Quick-Turn Proto",
                    value: "24–48h",
                    icon: Zap,
                  },
                  {
                    label: "Boards / Month",
                    value: "100k+",
                    icon: TrendingUp,
                  },
                  {
                    label: "Layer Count",
                    value: "Up to 12L",
                    icon: Cpu,
                  },
                ].map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/18 to-emerald-500/14 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-4 shadow-md shadow-black/40">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4 text-sky-300" />
                          <span className="text-[11px] font-medium text-slate-300">
                            {stat.label}
                          </span>
                        </div>
                        <div className="text-xl font-semibold text-slate-50">
                          {stat.value}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* RIGHT – visual block + floating info cards */}
            <motion.div
              className="relative h-[320px] sm:h-[360px] lg:h-[420px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="absolute inset-0 overflow-hidden rounded-3xl border border-sky-400/30 bg-slate-900/60 shadow-2xl shadow-black/50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg"
                  alt="PCB assembly line"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/40 to-sky-500/20" />
              </div>

              {/* Floating mini cards */}
              <motion.div
                className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="flex items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200">
                  <Shield className="mt-0.5 h-5 w-5 text-emerald-400" />
                  <div>
                    <div className="mb-1 text-sm font-semibold">
                      ISO &amp; IPC Compliant
                    </div>
                    <p className="text-[11px] leading-snug text-slate-400">
                      ISO 9001:2015 processes with IPC-trained operators on
                      every SMT and THT line.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200">
                  <TrendingUp className="mt-0.5 h-5 w-5 text-sky-400" />
                  <div>
                    <div className="mb-1 text-sm font-semibold">
                      Proto to Mass Production
                    </div>
                    <p className="text-[11px] leading-snug text-slate-400">
                      Dedicated lanes for NPI, quick-turn prototypes, and
                      high-volume production programs.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNICAL CAPABILITIES */}
      <section className="relative bg-white px-6 py-12 md:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl mix-blend-multiply animate-blob" />
            <div className="absolute top-1/3 -right-64 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-none px-6 md:px-12">
          <motion.div {...fadeUp()} className="mb-10 text-center md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              SPECIFICATIONS
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold md:text-3xl text-slate-900">
              Technical Capabilities
            </h2>
            <p className="mt-3 max-w-2xl text-balance text-sm text-slate-600 md:mx-auto md:text-base">
              Our manufacturing lines are configured to handle a wide range of
              complex requirements, from prototype agility to production volume.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-slate-900/5"
          >
            <div className="grid divide-y divide-slate-200 md:grid-cols-2 md:divide-y-0 md:divide-x">
              {/* Column 1 */}
              <div className="divide-y divide-slate-200">
                {[
                  { label: "Layer Count", value: "1 – 40 Layers" },
                  { label: "Board Types", value: "Rigid, Flex, Rigid-Flex, HDI, Aluminum, Rogers" },
                  { label: "Max Board Size", value: "500mm × 600mm" },
                  { label: "Min Trace / Space", value: "3mil / 3mil (0.075mm)" },
                ].map((spec, i) => (
                  <div key={i} className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-medium text-slate-500">{spec.label}</span>
                    <span className="text-sm font-semibold text-slate-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="divide-y divide-slate-200">
                {[
                  { label: "Min Component Size", value: "0201 (Imperial) / 008004 (Metric)" },
                  { label: "Min BGA Pitch", value: "0.3mm (with X-Ray Inspection)" },
                  { label: "Surface Finishes", value: "HASL, ENIG, Immersion Silver/Tin, OSP, Hard Gold" },
                  { label: "Testing Capabilities", value: "3D AOI, X-Ray, ICT, Flying Probe, Functional Test" },
                ].map((spec, i) => (
                  <div key={i} className="flex items-center justify-between p-4 sm:px-6 hover:bg-slate-50/50 transition-colors">
                    <span className="text-sm font-medium text-slate-500">{spec.label}</span>
                    <span className="text-sm font-semibold text-slate-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sky-50/50 p-4 text-center text-xs text-slate-500 sm:p-6 border-t border-slate-100">
              * For specifications outside these standard ranges, please contact our engineering team for a custom feasibility review.
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        id="capabilities"
        className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-screen-2xl gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <motion.div {...fadeUp()}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              WHAT WE DO
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold md:text-3xl">
              End-to-End PCB Assembly Services
            </h2>
            <p className="mt-4 text-sm text-slate-600 md:text-base">
              From single-layer to complex multi-layer boards with fine-pitch
              BGAs, our lines are tuned to handle both prototype volumes and
              production runs at scale.
            </p>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              IPC-certified engineers and operators monitor every step—from
              paste printing and placement to reflow, inspection, and testing—
              so each board meets your reliability targets.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="rounded-xl border border-sky-100 bg-white px-4 py-4 shadow-sm"
              >
                <div className="text-sm font-medium text-slate-900">
                  99.8% First Pass Yield
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Robust process controls and AOI at key stages.
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="rounded-xl border border-emerald-100 bg-white px-4 py-4 shadow-sm"
              >
                <div className="text-sm font-medium text-slate-900">
                  24–48h Quick-Turn
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Fast-track lanes for prototype and pilot builds.
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            {...scaleIn(0.1)}
            className="relative h-[260px] rounded-2xl border border-slate-200 bg-white shadow-lg sm:h-[320px]"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB-mbzBx2eRmgzx3lkGgrLJ1sJtulmhZh.webp"
              alt="PCB manufacturing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/45 via-transparent" />
            <div className="absolute bottom-4 left-4 flex gap-3 text-[11px] text-white">
              <div className="rounded-lg bg-slate-900/75 px-3 py-2">
                SMT • THT • BGA • Mixed Tech
              </div>
              <div className="hidden rounded-lg bg-slate-900/75 px-3 py-2 sm:block">
                Prototype • NPI • Production
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <motion.div {...fadeUp()} className="mb-10 text-center md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              INDUSTRY FOCUS
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold md:text-3xl">
              PCB Assemblies for Critical Applications
            </h2>
            <p className="mt-3 max-w-2xl text-balance text-sm text-slate-600 md:mx-auto md:text-base">
              We support customers across regulated, safety-critical, and
              high-reliability domains with documented, traceable processes.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => (
              <motion.div
                key={item.industry}
                {...fadeUp(index * 0.08)}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-sky-200 hover:shadow-md"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 md:text-base">
                  {item.industry}
                </h3>
                <p className="mt-2 text-xs text-slate-600 md:text-sm">
                  {item.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COST OPTIMIZATION */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <motion.div
            {...scaleIn()}
            className="relative h-[260px] rounded-2xl border border-slate-200 bg-white shadow-lg sm:h-[320px]"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global20Purchasing202-rWbpck0rQ5O5KQr493uY7k3sul5yo7.jpg"
              alt="Cost optimization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/45 via-transparent" />
            <div className="absolute bottom-4 left-4 flex gap-3 text-[11px] text-white">
              <div className="flex items-center gap-1 rounded-lg bg-slate-900/75 px-3 py-2">
                <TrendingUp className="h-3 w-3 text-emerald-400" />
                <span>Optimized BOM Cost</span>
              </div>
              <div className="hidden rounded-lg bg-slate-900/75 px-3 py-2 sm:block">
                Global sourcing • Volume lanes
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-medium text-emerald-700">
              <TrendingUp className="h-4 w-4" />
              Cost Optimization & Throughput
            </div>

            <h2 className="mt-3 text-balance text-2xl font-semibold md:text-3xl">
              Maximize Yield, Minimize Total Cost
            </h2>

            <p className="mt-3 text-sm text-slate-600 md:text-base">
              We leverage DFM reviews, BOM engineering, and lean manufacturing
              to reduce your landed cost without compromising on reliability or
              performance.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-900">
              {[
                "DFM and DFA input during early design stages.",
                "Bulk and alternate-component sourcing strategies.",
                "Lean production scheduling to reduce changeover time.",
                "Scrap and rework reduction through in-line checks.",
                "Flexible volume-based commercial models.",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  {...fadeUp(0.15 + index * 0.06)}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-xs text-slate-700 md:text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <motion.div {...fadeUp()} className="mb-10 text-center md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              HOW WE WORK
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold md:text-3xl">
              A Structured 6-Step Assembly Process
            </h2>
            <p className="mt-3 max-w-2xl text-balance text-sm text-slate-600 md:mx-auto md:text-base">
              Each stage has defined inputs, outputs, and quality checks.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                {...fadeUp(index * 0.08)}
                whileHover={{ y: -6 }}
              >
                <Card className="group h-full overflow-hidden border-slate-200 bg-white shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-sky-600 shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 md:text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <motion.div {...fadeUp()} className="mb-10 text-center md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              EQUIPMENT
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold md:text-3xl">
              Advanced Technology on the Line
            </h2>
            <p className="mt-3 max-w-2xl text-balance text-sm text-slate-600 md:mx-auto md:text-base">
              Modern SMT, inspection, and thermal systems ensure repeatable,
              measurable quality.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {technologies.map((tech, index) => (
              <motion.div key={tech.name} {...scaleIn(index * 0.08)}>
                <Card className="group overflow-hidden border-slate-200 bg-white shadow-sm transition-all hover:border-sky-200 hover:shadow-md">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                      {tech.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 md:text-sm">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <motion.div {...fadeUp()} className="mb-10 text-center md:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              SERVICE MENU
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold md:text-3xl">
              Built Around Your Assembly Needs
            </h2>
            <p className="mt-3 max-w-2xl text-balance text-sm text-slate-600 md:mx-auto md:text-base">
              Mix and match services from prototyping through full-box builds.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <motion.div key={offering.title} {...fadeUp(index * 0.07)}>
                <Card className="group h-full overflow-hidden border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                      {offering.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 md:text-sm">
                      {offering.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <motion.div
            {...scaleIn()}
            className="relative h-[260px] rounded-2xl border border-slate-200 bg-white shadow-lg sm:h-[320px]"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-jacobyavin-12863114-UKlwXg0mhArmDWJpbKF0f5jK4ZZoBZ.jpg"
              alt="Quality inspection of PCB"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/45 via-transparent" />
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-medium text-emerald-700">
              <Shield className="h-4 w-4" />
              Quality Assurance &amp; Test
            </div>
            <h2 className="mt-3 text-balance text-2xl font-semibold md:text-3xl">
              Rigorous Quality Control, End-to-End
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Multiple checkpoints ensure that every assembly leaving the line
              is fully inspected, validated, and ready for integration into
              your product.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-900">
              {[
                "Incoming component inspection and verification.",
                "In-process AOI and X-ray for hidden joints.",
                "Functional testing, burn-in, and custom test jigs.",
                "Final visual inspection and ESD-safe packaging.",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  {...fadeUp(0.15 + index * 0.06)}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-xs text-slate-700 md:text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-emerald-100 px-4 py-16 text-slate-900 sm:px-6 md:py-18 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-2xl font-semibold md:text-3xl">
            Ready to Start Your PCB Assembly Project?
          </h2>
          <p className="mt-3 text-balance text-sm text-slate-700 md:text-base">
            Share your Gerbers, BOM, and requirements to receive a detailed
            quote and lead-time estimate from the Jayshree Instruments team.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full bg-sky-600 px-7 text-sm font-semibold text-white shadow-md hover:bg-sky-700"
              >
                Get a Project Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-sky-300 bg-white px-7 text-sm font-semibold text-sky-700 hover:bg-sky-50"
              >
                Talk to an Engineer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
