"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Factory,
  Truck,
  LineChart,
  CheckCircle2,
  Sparkles,
  Warehouse,
  Ship,
  DollarSign,
  PackageSearch,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function GlobalPurchasingPage() {
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
      title: "Global Component Sourcing",
      description: "Strategic sourcing of electronic components from qualified global suppliers.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%202-7FHY3dWqix92oGFzI5wjCrPrlII6i6.jpg",
    },
    {
      title: "Cost Optimization & Negotiation",
      description: "Volume-based negotiation, alternate sourcing, and cost-down programs.",
      image:
        "https://images.pexels.com/photos/4968396/pexels-photo-4968396.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Supplier Qualification",
      description: "End-to-end supplier evaluation, audits, and onboarding for long-term reliability.",
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Risk & Obsolescence Management",
      description: "Lifecycle tracking, last-time-buy planning, and risk mitigation for critical parts.",
      image:
        "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Logistics & Consolidation",
      description: "Global logistics coordination, shipment consolidation, and customs support.",
      image:
        "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Inventory & Buffer Stock",
      description: "Strategic stocking models to support JIT deliveries and reduce line-down risk.",
      image:
        "https://www.versaclouderp.com/blog/wp-content/uploads/2025/03/Essentials-of-Inventory-What-is-Buffer-Stock.png",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-12 md:py-16"
      >
        {/* Background video / image overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Global Supply Chain"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-sky-900/75" />
        </div>

        {/* Glows */}
        <div className="pointer-events-none">
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/60 px-4 py-2 backdrop-blur">
                <Globe2 className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                  Global Purchasing & Supply
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-5 text-balance">
                Global{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  Sourcing & Supply
                </span>{" "}
                for Your Builds
              </h1>

              <p className="text-base md:text-lg text-slate-200/90 mb-8 max-w-2xl leading-relaxed">
                JINST’s global purchasing team secures critical components, metal parts, harness materials,
                plastics, and custom parts from a vetted worldwide network — fully aligned to your wire harness,
                PCB assembly, and box-build requirements.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-7 py-5 text-base shadow-lg shadow-cyan-500/30">
                    Share Your BOM
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-slate-500/70 bg-slate-900/40 text-slate-50 hover:bg-slate-800/80 hover:text-white"
                  >
                    Book a Call with JINST
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Global Suppliers", value: "150+", icon: Warehouse },
                  { label: "Cost Savings", value: "8–18%", icon: DollarSign },
                  { label: "Countries Covered", value: "10+", icon: Globe2 },
                  { label: "On-Time Delivery", value: "98%", icon: Truck },
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
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-emerald-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                      <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-4 shadow-md shadow-black/30">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4 text-cyan-300" />
                          <span className="text-xs font-medium text-slate-300">{stat.label}</span>
                        </div>
                        <div className="text-2xl font-semibold text-slate-50">{stat.value}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right visual */}
            <motion.div
              className="relative h-[320px] sm:h-[360px] lg:h-[420px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="absolute inset-0 rounded-3xl border border-cyan-400/30 bg-slate-900/60 shadow-2xl shadow-black/50 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%202-7FHY3dWqix92oGFzI5wjCrPrlII6i6.jpg"
                  alt="JINST Global Purchasing"
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/40 to-cyan-500/20" />
              </div>

              {/* Floating mini cards */}
              <motion.div
                className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200 flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Qualified Supplier Network</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Audited partners for metals, plastics, harness materials, PCBs, and enclosures.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200 flex items-start gap-3">
                  <LineChart className="h-5 w-5 text-cyan-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Aligned with JINST Manufacturing</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Purchasing integrated with JINST wire harness, PCB, and box-build schedules.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                What We Do in Global Purchasing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                JINST acts as your extended procurement team — identifying, qualifying, and managing suppliers across
                Asia and beyond, tightly integrated with our own manufacturing units.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                From electronic components and connectors to sheet metal, plastics, and custom machined parts, we
                ensure material availability, competitive pricing, and consistent quality aligned to your build plans.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-[#0066CC] mb-1">150+</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Qualified Global Suppliers</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 border border-teal-100 shadow-sm">
                  <div className="text-2xl font-bold text-[#00A896] mb-1">8–18%</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">Typical Cost Savings</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200 bg-slate-900"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTttF8fE_Tx23akIGOmsIZ0ZhFr_x_BqJ0Q&s"
                alt="Global Purchasing JINST"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Integrated Supply Chain</p>
                  <p className="text-sm text-slate-50 font-medium">
                    Purchasing, logistics, and production aligned under one team.
                  </p>
                </div>
                <Sparkles className="h-6 w-6 text-cyan-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              Global Purchasing Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              From component sourcing to end-to-end logistics, JINST manages the complete procurement lifecycle.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Electronics & Semiconductors",
                description:
                  "Actives, passives, connectors, relays, sensors, power devices, and custom electronics assemblies.",
                icon: CpuIconPlaceholder, // we'll define a small placeholder below
              },
              {
                title: "Metal & Mechanical Parts",
                description: "Sheet metal, machined parts, brackets, cabinets, chassis, and mechanical hardware.",
                icon: Factory,
              },
              {
                title: "Plastics & Enclosures",
                description: "Injection molded parts, custom housings, and plastic enclosures for assemblies.",
                icon: PackageSearch,
              },
              {
                title: "Harness & Cable Materials",
                description: "Cables, connectors, terminals, sleeves, and accessories for wire harness builds.",
                icon: Zap,
              },
              {
                title: "Global Logistics",
                description: "Ocean, air, and courier logistics with consolidation and customs documentation support.",
                icon: Ship,
              },
              {
                title: "Supplier & Quality Management",
                description: "Supplier audits, PPAP, incoming inspection, and continuous performance tracking.",
                icon: ShieldCheck,
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-xl border border-slate-200 bg-slate-50/40 p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/15 to-emerald-500/20">
                      <Icon className="h-5 w-5 text-[#0066CC]" />
                    </span>
                    <h3 className="text-base md:text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SUPPLIER NETWORK SECTION */}
      <section className="py-12 md:py-16 bg-slate-900 text-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Integrated Supplier Network</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
              A curated ecosystem of manufacturers, distributors, and logistics partners aligned with JINST operations.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tier-1 Manufacturers",
                description: "Direct relationships with component and mechanical part manufacturers.",
                icon: Factory,
              },
              {
                title: "Distribution Partners",
                description: "Global distributors and stockists for quick-turn and shortage management.",
                icon: Warehouse,
              },
              {
                title: "Harness & Box-Build Partners",
                description:
                  "Specialized houses aligned with JINST wire harness, PCB, and box-build operations where needed.",
                icon: Zap,
              },
              {
                title: "Logistics Partners",
                description: "Freight forwarders, couriers, and 3PL partners integrated into our planning.",
                icon: Truck,
              },
              {
                title: "Quality & Inspection Labs",
                description: "Independent testing and inspection partners for critical and high-reliability parts.",
                icon: ShieldCheck,
              },
              {
                title: "Local & Regional Vendors",
                description: "Near-site suppliers to support urgent requirements and serviceability.",
                icon: Globe2,
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-xl border border-slate-700 bg-slate-800/70 p-7 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  <Icon className="h-7 w-7 text-cyan-300 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER – CARDS */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              End-to-end global purchasing services designed around your manufacturing and product roadmap.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-200 overflow-hidden group bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={offering.image || "/placeholder.svg"}
                      alt={offering.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-gray-900 text-base md:text-lg">{offering.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {offering.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#0066CC] via-sky-600 to-[#00A896] text-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow-lg">
            Ready to Streamline Your Global Sourcing with JINST?
          </h2>
          <p className="text-base md:text-lg text-white/95 mb-8 text-pretty drop-shadow-md">
            Share your BOM, target costs, and build schedules. Our global purchasing team will come back with an
            aligned sourcing and supply plan customized for your products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0066CC] hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all font-semibold"
              >
                Share Your BOM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/15 hover:text-white bg-white/5 backdrop-blur-sm shadow-lg"
              >
                Book a Call with JINST
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/80">
            <CheckCircle2 className="h-4 w-4" />
            <span>Ideal for wire harness, PCB assembly, and complete box-build programs.</span>
          </div>
        </div>
      </section>
    </main>
  )
}

/**
 * Small inline placeholder icon so we don't have to import the whole lucide Cpu just for one place.
 * You can replace this with `Cpu` from lucide-react if you prefer.
 */
const CpuIconPlaceholder = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    className={`h-5 w-5 ${props.className || ""}`}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="8" y="8" width="8" height="8" fill="currentColor" stroke="none" />
    <path d="M9 2v2M15 2v2M9 22v-2M15 22v-2M2 9h2M2 15h2M22 9h-2M22 15h-2" />
  </svg>
);

