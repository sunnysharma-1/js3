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
      title: "Quick-Turn Prototyping",
      description: "Rapid turnaround times from 24-72 hours for urgent prototype needs.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg",
    },
    {
      title: "Design for Manufacturing (DFM) Review",
      description: "Expert analysis to optimize your design for cost-effective production.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXZwdRwNcyx_iHKRumv2bIEHWg_0_E9D70Q&s",
    },
    {
      title: "Functional Testing",
      description: "Comprehensive testing to validate design functionality before mass production.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
    },
    {
      title: "Iterative Design Support",
      description: "Multiple revision cycles with engineering feedback and recommendations.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20-%20Plant%20Photo-Jz7vz9fkVonxheq1i1YsWivgJON7xV.jpg",
    },
    {
      title: "Low-Volume Production",
      description: "Bridge the gap between prototype and full production with small batch runs.",
      image:
        "https://www.raypcb.com/wp-content/uploads/2025/09/low-volume-pcb-assembly-manufacturer.jpg",
    },
    {
      title: "Engineering Consultation",
      description: "Access to experienced engineers for design optimization and troubleshooting.",
      image:
        "https://images.jdmagicbox.com/quickquotes/images_main/electronics-engineering-consultant-service-383223444-7x1aj.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO – unified with other service pages */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-12 md:py-16"
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://excel-assemblies.com/wp-content/uploads/2021/05/Open-wire-1024x678-1.jpeg"
            alt="Electronics prototyping background"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/80 to-sky-900/80" />
        </div>

        {/* Soft glow orbs */}
        <div className="pointer-events-none -z-10">
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />
        </div>

        {/* Subtle grid pattern (very light) */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-35" aria-hidden>
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="proto-grid" width="72" height="72" patternUnits="userSpaceOnUse">
                <rect width="72" height="72" fill="transparent" />
                <path d="M0 36 H72" stroke="#0f172a" strokeWidth="1" strokeOpacity="0.5" />
                <path d="M36 0 V72" stroke="#0f172a" strokeWidth="1" strokeOpacity="0.5" />
                <circle cx="18" cy="18" r="2" fill="#38bdf8" opacity="0.45" />
                <circle cx="54" cy="54" r="2" fill="#22c55e" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#proto-grid)" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* LEFT: copy + CTAs + stats (same family as other heroes) */}
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-500/40 bg-slate-950/70 px-5 py-2 shadow-sm backdrop-blur">
                <Sparkles className="h-5 w-5 text-cyan-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  Rapid Prototyping Services
                </span>
              </div>

              <h1 className="mb-4 text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                From concept to{" "}
                <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
                  working prototype
                </span>{" "}
                in days.
              </h1>

              <p className="mb-7 max-w-2xl text-balance text-base text-slate-200/90 md:text-lg">
                Transform ideas into functional prototypes with fast turnaround, engineering support,
                and production-minded builds from day one.
              </p>

              <div className="mb-9 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-5 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/40 hover:from-blue-400 hover:to-cyan-300 md:text-base">
                    Request a Prototype Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                {/* <Link href="#process">
                  <Button
                    variant="outline"
                    className="rounded-full border-sky-300 bg-slate-950/40 px-7 py-5 text-sm font-semibold text-cyan-100 hover:bg-slate-900 md:text-base"
                  >
                    View Prototype Process
                  </Button>
                </Link> */}
              </div>

              {/* Stats row – same layout language as other service pages */}
              <div className="grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Prototypes built", value: "500+", icon: CheckCircle },
                  { label: "Typical turnaround", value: "24–72h", icon: Clock },
                  { label: "Institutes served", value: "100+", icon: Users },
                  { label: "On-time success", value: "98%", icon: Sparkles },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/18 to-emerald-500/18 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="relative flex items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-950/80 px-3 py-3 shadow-md shadow-black/40">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/15">
                          <Icon className="h-4 w-4 text-cyan-300" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-50">
                            {item.value}
                          </div>
                          <div className="text-[11px] text-slate-300">
                            {item.label}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* RIGHT: visual block + floating mini case card */}
            <motion.div
              className="relative h-[320px] sm:h-[360px] lg:h-[420px]"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="absolute inset-0 overflow-hidden rounded-3xl border border-sky-400/40 bg-slate-950/70 shadow-2xl shadow-black/50">
                <Image
                  src="https://excel-assemblies.com/wp-content/uploads/2021/05/Open-wire-1024x678-1.jpeg"
                  alt="Prototyping Lab"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/65 via-slate-900/30 to-cyan-500/25" />
                <div className="absolute bottom-4 left-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs text-slate-50 backdrop-blur flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Quick-turn PCBs • Testing • Iteration
                </div>
              </div>

              {/* Floating mini case study card */}
              <motion.div
                className="absolute -bottom-6 left-4 w-60 rounded-2xl border border-sky-400/40 bg-slate-950/85 p-4 shadow-xl backdrop-blur"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                    Student capstone batch
                  </span>
                  <span className="text-[10px] rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300">
                    Delivered in 48h
                  </span>
                </div>
                <p className="mb-2 text-xs text-slate-200">
                  Mixed-signal controller prototypes with DFM suggestions and a concise test report.
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Boards</span>
                  <span className="font-semibold text-slate-50">30 units / batch</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator (optional, matches other pages) */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-sky-400/60 bg-slate-950/70 p-2 backdrop-blur">
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-sky-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                We specialize in rapid prototyping services that help innovators, startups and established companies
                validate designs early. Our streamlined process gets you functional boards without compromising on
                quality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                Whether you&apos;re a student working on a project, a startup building an MVP, or a product team
                trialing a new concept, we provide the infrastructure and engineering support to bring your ideas to
                life.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-[#0066CC] mb-1">24–72h</div>
                  <div className="text-sm text-gray-600 font-medium">Turnaround Time</div>
                </div>
                <div className="p-5 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-[#00A896] mb-1">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Prototypes Built</div>
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
                src="https://mekoprint.com/media/1rof5wdm/wiring-harness_1.jpg?width=1200&height=650&v=1da8f2947b5aa50&quality=80"
                alt="Prototyping Lab"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prototype Showcase Section */}
      <section
        id="process"
        className="py-12 md:py-16 bg-white"
      >
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              Wire Harness Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base">
              From initial concept to functional testing, see how we bring your prototypes to life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/assets/Wire Harness 1.jpg"
                alt="Wire Harness Assembly"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Complex PCB Prototyping</p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="/assets/Wire Harness 2.jpg"
                alt="Wire Harness Integration"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Component Integration</p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/assets/Wire Harness.jpg"
                alt="Wire Harness Testing"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Testing &amp; Validation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rapid Development Advantages */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose Our Rapid Prototyping?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-pretty">
              Get to market faster with a streamlined prototyping workflow and engineering-backed support.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Lightning-Fast Turnaround",
                description: "24–72 hour delivery for most prototypes without sacrificing quality.",
                icon: Clock,
              },
              {
                title: "Expert Engineering Support",
                description: "Access to experienced engineers who provide design feedback and optimization.",
                icon: Users,
              },
              {
                title: "Iterative Development",
                description: "Multiple revision cycles to refine your design based on real-world testing.",
                icon: Lightbulb,
              },
              {
                title: "Cost-Effective Solutions",
                description: "Prototyping options that work for startups, students and product teams.",
                icon: Rocket,
              },
              {
                title: "Full Testing Capabilities",
                description: "Functional and environmental testing to validate your design thoroughly.",
                icon: Zap,
              },
              {
                title: "Production-Ready Designs",
                description: "Prototypes optimized for a seamless transition to volume manufacturing.",
                icon: ArrowRight,
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-400/60 transition-all hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  <IconComponent className="h-8 w-8 text-cyan-400 mb-4" />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Industry Applications</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                Prototyping for Every Industry
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Our rapid prototyping services support a wide range of industries and applications, from consumer
                electronics to industrial systems and emerging IoT devices.
              </p>

              <div className="space-y-4">
                {[
                  "Consumer Electronics & IoT Devices",
                  "Medical Device Prototypes",
                  "Industrial Control Systems",
                  "Automotive Electronics",
                  "Telecommunications Equipment",
                  "Smart Home & Connected Devices",
                ].map((industry, index) => (
                  <motion.div
                    key={industry}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Rocket className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{industry}</p>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-2YYQ5PDb7mMIThMaQssDFdHxQRP1nT.png"
                alt="Prototyping Applications"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base">
              Comprehensive prototyping services to accelerate your product development.
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#0066CC] to-[#00A896] text-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow-lg">
            Ready to Prototype Your Next Innovation?
          </h2>
          <p className="text-lg text-white/95 mb-8 text-pretty drop-shadow-md">
            Share your design files and requirements. Our team will help you move from idea to working prototype with
            clarity and speed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0066CC] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 hover:text-white bg-white/10 backdrop-blur-sm shadow-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
