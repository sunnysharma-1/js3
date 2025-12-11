"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Wrench,
  ArrowRight,
  Lightbulb,
  Zap,
  TrendingUp,
  CheckCircle,
  Award,
  Sparkles,
  Cpu,
  Layers,
  FileCode,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function DesignEngineeringPage() {
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

  const offerings = [
    {
      title: "Schematic & PCB Layout",
      description: "High-speed digital, mixed-signal, and power electronics design using Altium Designer and KiCad.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg",
    },
    {
      title: "Embedded Firmware",
      description: "Bare-metal C/C++ and RTOS development for STM32, ESP32, Nordic, and TI microcontrollers.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
    },
    {
      title: "DFM & DFA Analysis",
      description: "Proactive pre-production review to optimize panelization, reduce BOM cost, and improve yield.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-2YYQ5PDb7mMIThMaQssDFdHxQRP1nT.png",
    },
    {
      title: "Mechanical Design",
      description: "Industrial enclosure design (IP-rated), thermal simulation, and 3D printing validation.",
      image: "https://vectorbluehub.com/zdjecia/artykul/80/559/1920x1080/4/Box-Build__90_.JPG",
    },
    {
      title: "Reverse Engineering",
      description: "Legacy system modernization, BOM obsolescence recovery, and schematic recreation from physical boards.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20-%20Plant%20Photo-Jz7vz9fkVonxheq1i1YsWivgJON7xV.jpg",
    },
    {
      title: "Prototyping & Bring-Up",
      description: "Rapid V1 build, board bring-up, signal integrity measurement, and functional validation.",
      image: "https://blog.milwaukeeelectronics.com/wp-content/uploads/2015/04/DFT-Engineers2.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO – styled like Global Purchasing page */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 md:py-36"
      >
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://i0.wp.com/pallavaggarwal.in/wp-content/uploads/2019/06/7-essential-thing-good-pcb-design-engineer-1.jpg"
            alt="Design engineering background"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-teal-900/70" />
        </div>

        {/* Soft glows */}
        <div className="pointer-events-none">
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
        </div>

        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-slate-900/60 px-4 py-2 backdrop-blur">
                <Wrench className="h-4 w-4 text-teal-300" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-teal-100">
                  Concept to Production
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-5 text-balance">
                Design for{" "}
                <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  Manufacturing Excellence
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-200/90 mb-8 max-w-2xl leading-relaxed">
                We believe the best manufacturing starts at the design stage. Our engineering team helps you migrate from
                breadboard to industrial-grade PCB, optimise BOMs for cost and availability, and write the firmware that brings it to life.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <Button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-7 py-5 text-base shadow-lg shadow-teal-500/30">
                    Request Design Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Stats – styled like Global Purchasing hero */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Design Engineers", value: "15+", icon: Award },
                  { label: "Successful Designs", value: "500+", icon: Zap },
                  { label: "Board Layers", value: "Up to 32", icon: Layers },
                  { label: "First Pass Yield", value: "> 95%", icon: CheckCircle },
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
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/15 to-emerald-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                      <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-4 shadow-md shadow-black/30">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4 text-teal-300" />
                          <span className="text-xs font-medium text-slate-300">{stat.label}</span>
                        </div>
                        <div className="text-2xl font-semibold text-slate-50">{stat.value}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right visual – similar structure to Global Purchasing hero */}
            <motion.div
              className="relative h-[320px] sm:h-[360px] lg:h-[420px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="absolute inset-0 rounded-3xl border border-teal-400/30 bg-slate-900/60 shadow-2xl shadow-black/50 overflow-hidden">
                <Image
                  src="https://www.pcbnet.com/wp-content/uploads/1/2023/11/image2-1024x576.jpg"
                  alt="Design engineering collaboration"
                  fill
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/40 to-teal-500/20" />
              </div>

              {/* Floating mini cards, like purchasing hero */}
              <motion.div
                className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200 flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">DFM First Approach</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      We design boards that are easy to build, test, and scale.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200 flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-teal-300 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Obsolescence Proofing</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Active component lifecycle management during design phase.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-teal-100 shadow-sm mb-4">
                <Lightbulb className="h-5 w-5 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">Design + Manufacturing Alignment</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                We are not just a design house; we are a manufacturing company that designs. This means every trace layout, every component selection, and every mechanical tolerance
                is chosen with the factory floor in mind.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                Our collaborative process ensures that by the time you reach the prototype stage, the hard work of ensuring manufacturability is already done.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-xl font-bold text-[#0066CC] mb-1">Full Stack</div>
                  <div className="text-sm text-gray-600 font-medium">Hardware & Firmware</div>
                </div>
                <div className="p-5 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-xl font-bold text-[#00A896] mb-1">Altium</div>
                  <div className="text-sm text-gray-600 font-medium">Preferred Tool</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://res.cloudinary.com/uf-552861/image/upload/v1754608392/AdobeStock_215731960_hdtnam.png"
                alt="Design Engineering - wire and tools"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Optimization Process */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Engineering Workflow</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-pretty">
              A structured approach to convert early concepts into stable, production-ready designs.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Requirements Capture",
                description: "Defining technical specs, environmental constraints, and target BOM cost.",
                icon: Lightbulb,
              },
              {
                step: "02",
                title: "Schematic Capture",
                description: "Component selection and logical circuit design using Altium or KiCad.",
                icon: Cpu,
              },
              {
                step: "03",
                title: "PCB Layout",
                description: "Placement, routing, and stackup design with signal integrity in mind.",
                icon: Layers,
              },
              {
                step: "04",
                title: "DFM & Simulation",
                description: "3D interference checks and manufacturing rule compliance verification.",
                icon: Sparkles,
              },
              {
                step: "05",
                title: "Prototyping",
                description: "Rapid build of first-article units for functional validation.",
                icon: Wrench,
              },
              {
                step: "06",
                title: "ToT & Handoff",
                description: "Full Transfer of Technology including Gerbers, BOM, and Source Code.",
                icon: FileCode,
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-teal-400/60 transition-all hover:shadow-lg hover:shadow-teal-400/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-teal-300">{item.step}</div>
                    <div className="flex-1">
                      <IconComponent className="h-6 w-6 text-teal-300 mb-2" />
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engineering Expertise */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://i0.wp.com/pallavaggarwal.in/wp-content/uploads/2019/06/7-essential-thing-good-pcb-design-engineer-1.jpg"
                alt="Engineering expertise"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full mb-6">
                <Lightbulb className="h-5 w-5 text-teal-600" />
                <span className="text-sm font-medium text-teal-600">Technical Competencies</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                Tools & Technologies
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We use industry-standard tools to ensure your design files are compatible, maintainable, and professional.
              </p>

              <div className="space-y-4">
                {[
                  "PCB Design: Altium Designer, KiCad, Cadence",
                  "Mechanical: SolidWorks, AutoCAD",
                  "Firmware: ST CubeIDE, ESP-IDF, Keil",
                  "Simulation: LTSpice, HyperLynx",
                  "Analogue & Power Management Design",
                  "RF & Wireless Connectivity (BLE, Wi-Fi, LoRa)",
                ].map((capability, index) => (
                  <motion.div
                    key={capability}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{capability}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              Design Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base">
              End-to-end design engineering services to make your products manufacturing-ready.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={offering.image || "/placeholder.svg"}
                      alt={offering.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-gray-900 text-lg">{offering.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{offering.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0066CC] via-[#007FAF] to-[#00A896] text-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/30 text-xs font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                Designed to build right the first time.
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow-lg">
                Ready to make your design manufacturing-ready?
              </h2>

              <p className="text-sm md:text-base text-white/90 mb-6 max-w-xl leading-relaxed">
                Share your schematics, PCB layouts and BOM. Our engineering team will respond with a structured DFM/DFT
                review, risk highlights and optimisation recommendations.
              </p>

              <div className="space-y-3">
                {[
                  "Complete DFM / DFT review with clear action items",
                  "BOM rationalisation and component risk analysis",
                  "Plan for pilot build and validation before scale-up",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-white/95">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/25 p-6 shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Talk to our design team</h3>
              <p className="text-xs md:text-sm text-white/85 mb-5">
                Choose how you&apos;d like to start the conversation. We usually respond within one business day.
              </p>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Email</span>
                  <span className="font-medium">info@jinst.in</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Phone</span>
                  <span className="font-medium">+91 88669 68821</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="bg-white text-[#0066CC] hover:bg-white/90 shadow-lg px-5 py-2 text-sm md:text-base">
                    Share Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/15 bg-transparent px-5 py-2 text-sm md:text-base"
                  >
                    Schedule a Call
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-[11px] md:text-xs text-white/70">
                Prefer NDA first? Mention it in your message and we&apos;ll share a standard template or review yours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
