"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Package, ArrowRight, Zap, CheckCircle, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BoxBuildPage() {
  const offerings = [
    {
      title: "Mechanical Assembly",
      description: "Precision mechanical assembly including chassis, enclosures, and structural components.",
      image: "https://vectorbluehub.com/zdjecia/artykul/80/559/1920x1080/4/Box-Build__90_.JPG",
    },
    {
      title: "PCB Integration",
      description: "Seamless integration of PCBs into enclosures with proper mounting and alignment.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-2YYQ5PDb7mMIThMaQssDFdHxQRP1nT.png",
    },
    {
      title: "Wire Harness Integration",
      description: "Complete wire harness routing and connection for all internal systems.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20-%20Plant%20Photo-Jz7vz9fkVonxheq1i1YsWivgJON7xV.jpg",
    },
    {
      title: "System Testing",
      description: "Comprehensive functional and environmental testing of complete assemblies.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
    },
    {
      title: "Packaging & Labeling",
      description: "Professional packaging, labeling, and documentation for distribution.",
      image:
        "https://blog.epectec.com/hs-fs/hubfs/Blog/hmi-product-packed-before-delivery.jpg?width=600&name=hmi-product-packed-before-delivery.jpg",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous QA processes ensuring every unit meets specifications.",
      image:
        "https://www.protoexpress.com/wp-content/uploads/2021/12/image4-6.png",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO – darker overlay applied */}
      <section className="relative overflow-hidden bbg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-12 md:py-16">
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

        <div className="relative z-10 w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            {/* Left: copy + stats */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/70 px-4 py-2 backdrop-blur">
                <Package className="h-4 w-4 text-emerald-300" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-100">
                  Box Build & Final Assembly
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-5 text-balance">
                Turnkey{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                  Box Build Solutions
                </span>{" "}
                for Complete Products
              </h1>

              <p className="text-base md:text-lg text-slate-200/90 mb-8 max-w-2xl leading-relaxed">
                From mechanical assembly and PCB integration to harness routing, testing, labeling, and packaging—
                JINST delivers shipment-ready units built to your work instructions and quality standards.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/contact">
                  <Button className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold px-7 py-5 text-base shadow-lg shadow-emerald-500/30">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#process">
                  <Button
                    variant="outline"
                    className="border-slate-500/70 bg-slate-900/40 text-slate-50 hover:bg-slate-800/80 hover:text-white"
                  >
                    View Process
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
                {[
                  { label: "Box Build Projects", value: "300+", icon: Package },
                  { label: "Final QA Yield", value: "> 99%", icon: TrendingUp },
                  { label: "Units Tested", value: "100%", icon: CheckCircle },
                  { label: "On-Time Delivery", value: "98%", icon: Shield },
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
                  <CheckCircle className="h-5 w-5 text-emerald-300 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Mechanical + Electrical Integration</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      Enclosures, PCBs and harnesses built and tested as one complete system.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 text-xs text-slate-200 flex items-start gap-3">
                  <Zap className="h-5 w-5 text-cyan-300 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">Single-Point Responsibility</div>
                    <p className="text-slate-400 text-[11px] leading-snug">
                      One team owns assembly, testing and pack-out for shipment-ready units.
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
      <section className="py-12 md:py-16">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-teal-200/60 shadow-sm mb-6">
                <Package className="h-5 w-5 text-[#00A896]" />
                <span className="text-sm font-medium text-[#00A896]">Box Build & Final Assembly</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base text-slate-700">
                Our box build services bring together mechanical, electrical and test operations into one smooth
                workflow. You ship us components or sub-assemblies, and we return fully built, tested and packed units.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base text-slate-700">
                We support new product introductions, engineering builds and ongoing production with clear work
                instructions, controlled change management and reliable delivery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-[#0066CC] mb-1">100%</div>
                  <div className="text-sm text-gray-700 font-medium">Tested & Verified</div>
                  <p className="mt-1 text-xs text-slate-500">Every unit passes defined test gates.</p>
                </div>
                <div className="p-5 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-[#00A896] mb-1">Turnkey</div>
                  <div className="text-sm text-gray-700 font-medium">Solutions</div>
                  <p className="mt-1 text-xs text-slate-500">From kitting to final packaging.</p>
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
      <section id="process" className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              Complete Assembly Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base text-slate-600">
              From metalwork and PCBs to fully tested, labelled and packed units—one integrated flow.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Mechanical Assembly",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4w_hWqMV9uLMjhDnOgx2pcYWBqROyAI3TQ&s",
              },
              {
                label: "PCB Integration",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWsLqu_IzWkbOCB4Cm-iWyV4seSDOYE5OZw&s",
              },
              {
                label: "Wire Harness Integration",
                src: "https://federalelec.com/wp-content/uploads/2024/06/DSC07005.jpg",
              },
              {
                label: "System Testing",
                src: "/images/design-mode/Testing(1).jpg",
              },
              {
                label: "Packaging & Labeling",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOWNkvINVrFu62i2DNdbJQwFjYwx5dFvPpg&s",
              },
              {
                label: "Final QA & Release",
                src: "https://www.viasion.com/wp-content/uploads/2024/12/Box-Build-Assembly.jpeg",
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items=end p-6">
                  <p className="text-white font-medium text-sm">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Testing Standards */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Quality & Testing Standards</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-pretty text-sm md:text-base">
              Testing is built into the process—not added at the end—so every unit behaves like a reference build in
              the field.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Functional Testing",
                description: "Power-up, I/O, safety and feature validation against golden samples.",
                icon: CheckCircle,
              },
              {
                title: "Environmental Testing",
                description: "Temperature, humidity and vibration test profiles for demanding environments.",
                icon: Zap,
              },
              {
                title: "Visual & Mechanical Inspection",
                description: "Torque, alignment, labelling and cosmetic checks for every build.",
                icon: Shield,
              },
              {
                title: "Documentation & Traceability",
                description: "Serial/batch tracking, test reports and revision control in the pack.",
                icon: TrendingUp,
              },
              {
                title: "Compliance Verification",
                description: "Builds aligned to your compliance and regulatory requirements.",
                icon: CheckCircle,
              },
              {
                title: "Performance Validation",
                description: "Soak tests and long-run validation configured to your field conditions.",
                icon: Zap,
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
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
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
                Built for Real-World Products
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6 text-base text-slate-700">
                From compact IoT products to rugged industrial panels, our box build capability is tuned for multiple
                environments, compliances and life-cycle expectations.
              </p>

              <div className="space-y-4">
                {[
                  "Consumer Electronics & IoT Devices",
                  "Industrial Control Panels & Drives",
                  "Medical & Lab Equipment",
                  "Telecom & Network Infrastructure",
                  "Automotive Electronics & EV Subsystems",
                  "Aerospace & Defense Assemblies (program specific)",
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
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base text-slate-600">
              A modular set of capabilities that can be combined into a complete turnkey box build program.
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#0066CC] via-[#007FAF] to-[#00A896] text-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-center">
            {/* Left: messaging */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/30 text-xs font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                Ready when your product is.
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow-lg">
                Ready to scale your box build program?
              </h2>

              <p className="text-sm md:text-base text-white/90 mb-6 max-w-xl leading-relaxed">
                Share your BOM, enclosure drawings and test requirements. Our engineering and operations teams will
                revert with a clear build strategy, estimated timelines and quality checkpoints tailored to your product.
              </p>

              <div className="space-y-3">
                {[
                  "DFM review for mechanical + electrical integration",
                  "Transparent costing and lead-time assumptions",
                  "Pilot build plan before full-scale rollout",
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
              <h3 className="text-lg font-semibold mb-2">Talk to our team</h3>
              <p className="text-xs md:text-sm text-white/85 mb-5">
                Choose how you&apos;d like to start the conversation. We usually respond within one business day.
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
