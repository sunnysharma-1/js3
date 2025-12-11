"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Zap,
  ArrowRight,
  Lightbulb,
  Clock,
  Users,
  Rocket,
  Sparkles,
  CheckCircle,
  GraduationCap,
  Briefcase,
  Microscope
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function PrototypingPage() {
  const heroRef = useRef<HTMLElement | null>(null)

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
      title: "Quick-Turn (24-72h)",
      description: "24-72h Rocket Build service for time-critical validation of bare boards and simple assemblies.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg",
    },
    {
      title: "DFM Feedback",
      description: "Comprehensive DFM/DFA analysis to identify yield risks and cost drivers before mass production.",
      image: "https://www.zuken.com/en/wp-content/uploads/sites/2/2018/10/cr-8000-DFM-Panel1-lg-1125x731.gif",
    },
    {
      title: "Functional Testing",
      description: "Power-up testing and firmware flashing to ensure your prototype is ready for immediate evaluation.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
    },
    {
      title: "Component Sourcing",
      description: "Rapid BOM procurement through authorized distributors (DigiKey/Mouser) and strategic partners.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20-%20Plant%20Photo-Jz7vz9fkVonxheq1i1YsWivgJON7xV.jpg",
    },
    {
      title: "Small Batch (10-100)",
      description: "Pilot production runs to validate process capability and refine assembly instructions.",
      image: "https://www.raypcb.com/wp-content/uploads/2025/09/low-volume-pcb-assembly-manufacturer.jpg",
    },
    {
      title: "Lab Support",
      description: "Access to our engineering lab for X-ray verification, probing, and BGA rework.",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/electronics-engineering-consultant-service-383223444-7x1aj.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-slate-950 text-white py-20 md:py-28"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://ecelectronics.com/wp-content/uploads/2019/08/MG_5326-scaled.jpg"
            alt="Prototyping background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-sky-900/75 backdrop-blur-[2px]" />
        </div>

        <div className="pointer-events-none">
          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute left-[-60px] bottom-[-60px] h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-slate-900/70 backdrop-blur-md px-5 py-2 border border-cyan-400/40 shadow-sm">
                <Sparkles className="h-5 w-5 text-cyan-300" />
                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-100">
                  Rapid Prototyping
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
                Fail fast.{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                  Learn faster.
                </span>{" "}
                Launch.
              </h1>

              <p className="text-base md:text-lg text-slate-200 max-w-2xl mb-6 leading-relaxed">
                Whether you're a student building a capstone project or a startup launching an MVP,
                we provide the speed, engineering feedback, and industrial quality you need to validate your design.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-sky-500 to-emerald-400 hover:from-sky-400 hover:to-emerald-300 text-slate-950 font-semibold px-7 py-5 text-sm md:text-base shadow-lg shadow-cyan-500/40">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
                {[
                  { label: "Turnaround", value: "24h+", icon: Zap },
                  { label: "Min Order", value: "1 Unit", icon: CheckCircle },
                  { label: "Students", value: "Welcome", icon: GraduationCap },
                  { label: "Startups", value: "Supported", icon: Rocket },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl bg-slate-900/70 border border-cyan-400/30 px-3 py-3 shadow-sm backdrop-blur"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/80">
                        <Icon className="h-4 w-4 text-cyan-300" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-50">{item.value}</div>
                        <div className="text-xs text-slate-400">{item.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/40 bg-slate-900/80 backdrop-blur">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype201-Ha8AzMi6OqmAUzwWFG0UhUYxbjZZC4.jpg"
                    alt="Prototyping Lab"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-cyan-500/25" />
                  <div className="absolute left-4 bottom-4 rounded-full bg-slate-950/80 text-xs text-slate-50 px-3 py-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Rapid Iteration Lab
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEGMENTATION: Student vs Enterprise */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Tailored Support for Every Stage
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We understand that a final-year project has different needs than a commercial product launch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Startups Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Rocket className="h-32 w-32" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Startups & Innovators</h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Need to validate your MVP quickly? We offer agile prototyping services with industrial-grade quality,
                helping you get to market faster without high upfront tooling costs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "No Minimum Order Quantity (MOQ = 1)",
                  "Design feasibility consultation",
                  "Rapid component sourcing",
                  "Firmware upload & basic functional test",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 hover:text-orange-800">
                  Launch Your MVP
                </Button>
              </Link>
            </motion.div>

            {/* Enterprise Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white p-8 shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Briefcase className="h-32 w-32" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-300">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Enterprise NPI</h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Scaling to mass production? We treat your prototype as "Production V0". Full traceability,
                detailed DFM reports, PPAP levels, and supply chain risk mitigation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Comprehensive DFM & DFT Engineering Review",
                  "Supply chain risk analysis for scale",
                  "IPC Class 2/3 assembly standards",
                  "Detailed First Article Inspection (FAI) Reports",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold">
                  Start NPI Process
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              Prototyping Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Everything you need to validate your design under one roof.
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0066CC] to-[#00A896] text-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow-lg">
            Got a design ready?
          </h2>
          <p className="text-lg text-white/95 mb-8 text-pretty drop-shadow-md">
            Send us your Gerbers and BOM. We'll get back to you with a quote and DFM feedback within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0066CC] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all"
              >
                Upload Files <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
