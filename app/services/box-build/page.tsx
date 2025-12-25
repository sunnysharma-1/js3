"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Package, ArrowRight, Zap, CheckCircle, TrendingUp, Shield, Settings, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BoxBuildPage() {
  const offerings = [
    {
      title: "Electromechanical Integration",
      description: "Seamless integration of PCBs, harnessing, chassis, and displays with torque-calibrated assembly.",
      image: "https://vectorbluehub.com/zdjecia/artykul/80/559/1920x1080/4/Box-Build__90_.JPG",
    },
    {
      title: "Cable Routing & Management",
      description: "Industrial-grade cable dressing, labeling, and routing for clean airflow and serviceability.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-2YYQ5PDb7mMIThMaQssDFdHxQRP1nT.png",
    },
    {
      title: "Potting & Conformal Coating",
      description: "Automated potting and conformal coating for IP67/IP68 environmental sealing.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20-%20Plant%20Photo-Jz7vz9fkVonxheq1i1YsWivgJON7xV.jpg",
    },
    {
      title: "System-Level Testing",
      description: "Full functional validation, high-voltage safety testing (hipot), and burn-in cycling.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
    },
    {
      title: "Software Loading & Config",
      description: "Firmware flashing, MAC address serialization, and customer-specific configuration loading.",
      image:
        "https://blog.epectec.com/hs-fs/hubfs/Blog/hmi-product-packed-before-delivery.jpg?width=600&name=hmi-product-packed-before-delivery.jpg",
    },
    {
      title: "Final Packaging",
      description: "Retail-ready packaging with custom foam inserts, user manuals, and accessory kitting.",
      image:
        "https://www.protoexpress.com/wp-content/uploads/2021/12/image4-6.png",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO – darker overlay applied */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 md:py-36">
        {/* Background image + strong dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://www.globalwellpcba.com/wp-content/uploads/2024/09/Complex-circuit-board-system-with-various-connectors-and-wiring.webp"
            alt="Box build assembly line"
            fill
            className="object-cover opacity-30"
          />
          {/* solid dark base */}
          <div className="absolute inset-0 bg-slate-950/80" />
          {/* dark gradient tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-teal-900/80" />
        </div>

        {/* Glows */}
        <div className="pointer-events-none">
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            {/* Left: copy + stats */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/70 px-4 py-2 backdrop-blur">
                <Settings className="h-4 w-4 text-emerald-300" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-100">
                  Electromechanical Integration
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-5 text-balance">
                Complete{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                  Product Assembly
                </span>{" "}
                ready for shipment.
              </h1>

              <p className="text-base md:text-lg text-slate-200/90 mb-8 max-w-2xl leading-relaxed">
                Beyond just PCBA. We handle complex chassis assembly, cable routing, potting, and software configuration.
                Your product leaves our floor tested, packed, and ready for the end-user.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <Button className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold px-7 py-5 text-base shadow-lg shadow-emerald-500/30">
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#process">
                  <Button
                    variant="outline"
                    className="border-slate-500/70 bg-slate-900/40 text-slate-50 hover:bg-slate-800/80 hover:text-white"
                  >
                    View Capabilities
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
                {[
                  { label: "Daily Output", value: "500+", icon: Package },
                  { label: "IP Rating", value: "IP67/68", icon: Shield },
                  { label: "Test Coverage", value: "100%", icon: CheckCircle },
                  { label: "On-Time Ship", value: "99.2%", icon: TrendingUp },
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
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/18 to-cyan-500/16 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                      <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/70 px-4 py-4 shadow-md shadow-black/30">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4 text-emerald-300" />
                          <span className="text-xs font-medium text-slate-300">{stat.label}</span>
                        </div>
                        <div className="text-2xl font-semibold text-slate-50">{stat.value}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right: visual block */}
            <motion.div
              className="relative h-[320px] sm:h-[360px] lg:h-[420px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="absolute inset-0 rounded-3xl border border-emerald-400/30 bg-slate-900/70 shadow-2xl shadow-black/50 overflow-hidden">
                <Image
                  src="https://www.globalwellpcba.com/wp-content/uploads/2024/09/Complex-circuit-board-system-with-various-connectors-and-wiring.webp"
                  alt="JINST Box Build"
                  fill
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/40 to-emerald-500/25" />
              </div>

              {/* Floating mini cards */}
              <motion.div
                className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200 flex items-start gap-3">
                  <Wrench className="h-5 w-5 text-emerald-300 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Precision Assembly</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Torque-controlled fastening and tamper-proof sealing.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200 flex items-start gap-3">
                  <Zap className="h-5 w-5 text-cyan-300 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">HV & Safety Test</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Electrical safety compliance verified before shipping.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-emerald-400/60 rounded-full flex justify-center p-2 bg-slate-900/70 backdrop-blur">
            <motion.div
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-teal-200/60 shadow-sm mb-6">
                <Settings className="h-5 w-5 text-[#00A896]" />
                <span className="text-sm font-medium text-[#00A896]">System Integration</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base text-slate-700">
                Box build at JINST extends beyond enclosure assembly. We orchestrate the entire electromechanical BOM, managing plastics, metalwork, and custom cabling to deliver a fully integrated product.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base text-slate-700">
                Our technicians follow detailed digital work instructions for each step—thermal paste application, screw torque sequences,
                gasket installation, and connector mating—ensuring consistency across thousands of units.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-lg font-bold text-[#0066CC] mb-1">Firmware Loading</div>
                  <div className="text-sm text-gray-700 font-medium">Included</div>
                  <p className="mt-1 text-xs text-slate-500">We flash and verify your code.</p>
                </div>
                <div className="p-5 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-lg font-bold text-[#00A896] mb-1">Drop Shipping</div>
                  <div className="text-sm text-gray-700 font-medium">Available</div>
                  <p className="mt-1 text-xs text-slate-500">Direct to your end customer.</p>
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
                alt="Box Build Assembly"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assembly Process Showcase */}
      <section id="process" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              Assembly Workflow
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base text-slate-600">
              Sequential integration steps with quality gates at every stage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Sub-Assembly Prep",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4w_hWqMV9uLMjhDnOgx2pcYWBqROyAI3TQ&s",
                desc: "Pre-forming cables, mounting standoffs, and heat-staking plastics."
              },
              {
                label: "PCB Integration",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWsLqu_IzWkbOCB4Cm-iWyV4seSDOYE5OZw&s",
                desc: "Precise board mounting with ESD controls and alignment checks."
              },
              {
                label: "Cable Routing",
                src: "https://federalelec.com/wp-content/uploads/2024/06/DSC07005.jpg",
                desc: "Clean routing with zip ties, clips, and strain relief."
              },
              {
                label: "System Configuration",
                src: "/images/design-mode/Testing(1).jpg",
                desc: "Firmware flashing and functional verification."
              },
              {
                label: "Final QA",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOWNkvINVrFu62i2DNdbJQwFjYwx5dFvPpg&s",
                desc: "Cosmetic checks, gap verification, and safety labeling."
              },
              {
                label: "Pack & Ship",
                src: "https://www.viasion.com/wp-content/uploads/2024/12/Box-Build-Assembly.jpeg",
                desc: "Custom foam, user manuals, and accessory kitting."
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="relative h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white font-bold text-lg mb-1">{item.label}</p>
                  <p className="text-slate-300 text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Testing Standards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Validation & Safety</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-pretty text-sm md:text-base">
              We ensure every shipped unit is safe, updated, and fully functional.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Functional Test FCT",
                description: "Automated test rigs to exercise all inputs, outputs, and communication ports.",
                icon: CheckCircle,
              },
              {
                title: "Burn-In Testing",
                description: "Operating units at elevated temperatures to screen for infant mortality failures.",
                icon: Zap,
              },
              {
                title: "Hipot & Ground Bond",
                description: "Electrical safety testing for mains-powered devices to ensure user safety.",
                icon: Shield,
              },
              {
                title: "Traceability",
                description: "Serial number tracking for every board and major sub-assembly in the unit.",
                icon: TrendingUp,
              },
              {
                title: "Environmental Seal",
                description: "Vacuum or pressure decay testing to verify IP ratings (water/dust proofing).",
                icon: CheckCircle,
              },
              {
                title: "Software Config",
                description: "Uploading the correct firmware version and calibration data for the specific market.",
                icon: Settings,
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-7 rounded-xl border border-slate-600 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
                >
                  <IconComponent className="h-8 w-8 text-emerald-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
                <Package className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium text-orange-600">Industry Applications</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                Proven Across Industries
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6 text-base text-slate-700">
                From handheld medical devices to 19-inch rack-mount industrial controllers, we have the floor space and the expertise.
              </p>

              <div className="space-y-4">
                {[
                  "Industrial Controllers & PLCs",
                  "Medical Diagnostic Devices",
                  "EV Charging Stations",
                  "IoT Gateways & Sensors",
                  "Telecommunications Rack Units",
                  "Consumer Appliances",
                ].map((industry, index) => (
                  <motion.div
                    key={industry}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Package className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <p className="text-gray-800 font-medium text-sm md:text-base">{industry}</p>
                  </motion.div>
                ))}
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
                src="/assets/Build Box 1.jpg"
                alt="Industry Applications"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer – cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              Turnkey Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base text-slate-600">
              Modular services to take your product from PCBA to retail-ready box.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 overflow-hidden group bg-white">
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
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-center">
            {/* Left: messaging */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/30 text-xs font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                Simplify your supply chain.
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow-lg">
                Ready to consolidate your manufacturing?
              </h2>

              <p className="text-sm md:text-base text-white/90 mb-6 max-w-xl leading-relaxed">
                Stop managing five different vendors for one product. Move your final assembly to JINST and get a single point of accountability for quality and schedule.
              </p>

              <div className="space-y-3">
                {[
                  "Reduced logistics and handling costs",
                  "Unified quality control for the entire product",
                  "Direct shipment to end-users (Drop-shipping)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-white/95">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: contact block */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/25 p-6 shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Start a conversation</h3>
              <p className="text-xs md:text-sm text-white/85 mb-5">
                Send us your assembly drawings or just a photo of your current setup.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/90">Email</span>
                  <span className="font-medium">info@jinst.in</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/90">Phone</span>
                  <span className="font-medium">+91 88669 68821</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="bg-white text-[#0066CC] hover:bg-white/90 shadow-lg px-5 py-2 text-sm md:text-base">
                    Request Integration Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/15 bg-transparent px-5 py-2 text-sm md:text-base"
                  >
                    Schedule a Visit
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
