"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cable, ArrowRight, Zap, CheckCircle, TrendingUp, Shield, Layers, Settings, Microscope } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function WireHarnessPage() {
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const heroSection = heroRef.current
    if (!heroSection) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-in")
      },
      { threshold: 0.1 }
    )
    observer.observe(heroSection)
    return () => observer.disconnect()
  }, [])

  const offerings = [
    {
      title: "Custom Cable Assemblies",
      description: "Multi-conductor cables, coax, and ribbon cable assemblies cut, stripped, and terminated to length.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg",
    },
    {
      title: "Wire Harness Manufacturing",
      description: "Complex form-board harness assembly with lacing, breakouts, and abrasion protection.",
      image: "https://federalelec.com/wp-content/uploads/2024/06/DSC07005.jpg",
    },
    {
      title: "Automated Crimping",
      description: "Automated crimp centers (Komax/Schleuniger) with integrated crimp force monitoring (CFM).",
      image: "https://www.viasion.com/wp-content/uploads/2024/12/Box-Build-Assembly.jpeg",
    },
    {
      title: "Connector Overmolding",
      description: "Low-pressure molding (LPM) and overmolding for IP-rated strain relief and durability.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-2YYQ5PDb7mMIThMaQssDFdHxQRP1nT.png",
    },
    {
      title: "Testing & Validation",
      description: "Cirris/automated testers for continuity, shorts, miswire, and HiPot verification.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
    },
    {
      title: "Marking & Identification",
      description: "Inkjet wire marking, heat-shrink labels, and color-coding for easy installation.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20-%20Plant%20Photo-Jz7vz9fkVonxheq1i1YsWivgJON7xV.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 md:py-36"
      >
        <div className="absolute inset-0">
          <Image
            src="https://federalelec.com/wp-content/uploads/2024/06/DSC07005.jpg"
            alt="Wire Harness Production"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-blue-900/70" />
        </div>

        <div className="pointer-events-none">
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-slate-900/60 px-4 py-2 backdrop-blur">
                <Cable className="h-4 w-4 text-blue-300" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-blue-100">
                  Custom Cable Assemblies
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-5 text-balance">
                Precision{" "}
                <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                  Wire Harnesses
                </span>{" "}
                & Cable Assemblies
              </h1>

              <p className="text-base md:text-lg text-slate-200/90 mb-8 max-w-2xl leading-relaxed">
                From simple ribbon cables to complex industrial harnesses. We cut, strip, crimp, and test with automated precision.
                Built to IPC/WHMA-A-620 standards for reliability in harsh environments.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold px-7 py-5 text-base shadow-lg shadow-blue-500/30">
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Connections", value: "1M+ / yr", icon: Zap },
                  { label: "Continuity Test", value: "100%", icon: CheckCircle },
                  { label: "Pull Force", value: "Verified", icon: Settings },
                  { label: "Defect Rate", value: "< 50 PPM", icon: TrendingUp },
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
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/15 to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                      <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-4 shadow-md shadow-black/30">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4 text-blue-300" />
                          <span className="text-xs font-medium text-slate-300">{stat.label}</span>
                        </div>
                        <div className="text-2xl font-semibold text-slate-50">{stat.value}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              className="relative h-[320px] sm:h-[360px] lg:h-[420px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="absolute inset-0 rounded-3xl border border-blue-400/30 bg-slate-900/60 shadow-2xl shadow-black/50 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%202-7FHY3dWqix92oGFzI5wjCrPrlII6i6.jpg"
                  alt="Wire Harness Details"
                  fill
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/40 to-blue-500/20" />
              </div>

              <motion.div
                className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200 flex items-start gap-3">
                  <Shield className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">IPC/WHMA-A-620</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Built to Class 2 & 3 acceptability standards.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200 flex items-start gap-3">
                  <Microscope className="h-5 w-5 text-blue-300 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Automated QA</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Crimp height and pull-force validation checks.
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
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-100 shadow-sm mb-4">
                <Cable className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Cable & Harness Solutions</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                A loose wire is a single point of failure. We engineer and build harnesses that organize, protect, and secure your product's nervous system.
                Whether you need 10 prototypes or 10,000 production units, our automated cutting and crimping lines ensure consistency.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                We work with all major connector brands (TE, Molex, JST, Amphenol) and can suggest cost-effective alternatives for non-critical paths.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-xl font-bold text-[#0066CC] mb-1">Automated</div>
                  <div className="text-sm text-gray-600 font-medium">Cutting & Stripping</div>
                </div>
                <div className="p-5 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-xl font-bold text-[#00A896] mb-1">Digital</div>
                  <div className="text-sm text-gray-600 font-medium">Test Boards</div>
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
                src="https://www.viasion.com/wp-content/uploads/2024/12/Box-Build-Assembly.jpeg"
                alt="Wire Harness Assembly"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Crimping & Assembly Standard</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-pretty">
              Quality means a gas-tight crimp and a verified connection every single time.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Cut & Strip",
                description: "Automated processing ensures consistent wire lengths and defect-free stripping.",
                icon: Layers,
              },
              {
                step: "02",
                title: "Termination",
                description: "Semi-automatic and fully automatic crimping with Crimp Force Monitoring (CFM).",
                icon: Settings,
              },
              {
                step: "03",
                title: "Assembly",
                description: "Routing wires on 1:1 scale form-boards with lacing and protective bundling.",
                icon: Cable,
              },
              {
                step: "04",
                title: "Pull Testing",
                description: "Regular tensile strength verification samples to validate tool calibration.",
                icon: TrendingUp,
              },
              {
                step: "05",
                title: "Continuity Check",
                description: "100% automated electrical testing for opens, shorts, and miswires.",
                icon: Zap,
              },
              {
                step: "06",
                title: "Label & Pack",
                description: "Clear identification labels and kitted packaging for line-side efficiency.",
                icon: ArrowRight,
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
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-400/60 transition-all hover:shadow-lg hover:shadow-blue-400/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-bold text-blue-300">{item.step}</div>
                    <div className="flex-1">
                      <IconComponent className="h-6 w-6 text-blue-300 mb-2" />
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

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              Harness Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base">
              From signal to power, we build connections you can trust.
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0066CC] via-[#007FAF] to-[#00A896] text-white px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/30 text-xs font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                No loose connections.
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow-lg">
                Need a reliable cabling partner?
              </h2>

              <p className="text-sm md:text-base text-white/90 mb-6 max-w-xl leading-relaxed">
                Send us your drawings or a sample harness. We'll reverse engineer or quote directly, often identifying cost-saving alternatives for connectors.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-white/95">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-emerald-300" />
                  <span>Free sample evaluation and quoting</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-white/95">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-emerald-300" />
                  <span>Connector alternative suggestions (Cost Down)</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/25 p-6 shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Get a Quote</h3>
              <p className="text-xs md:text-sm text-white/85 mb-5">
                We typically respond with a preliminary estimate within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="bg-white text-[#0066CC] hover:bg-white/90 shadow-lg px-5 py-2 text-sm md:text-base">
                    Send Drawings
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
