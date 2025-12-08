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
    return () => observer.unobserve(heroSection)
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
        "https://www.zuken.com/en/wp-content/uploads/sites/2/2018/10/cr-8000-DFM-Panel1-lg-1125x731.gif",
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
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO – dark, with background image like PCB page vibe */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-slate-950 text-white py-12 md:py-16"
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://ecelectronics.com/wp-content/uploads/2019/08/MG_5326-scaled.jpg"
            alt="Prototyping background"
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay so content pops */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-sky-900/75 backdrop-blur-[2px]" />
        </div>


        {/* Soft glows */}
        <div className="pointer-events-none">
          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute left-[-60px] bottom-[-60px] h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-none px-6 md:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* LEFT: copy + CTA + stats */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-slate-900/70 backdrop-blur-md px-5 py-2 border border-cyan-400/40 shadow-sm">
                <Sparkles className="h-5 w-5 text-cyan-300" />
                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-100">
                  Rapid Prototyping Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                From concept to{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                  working prototype
                </span>{" "}
                in days.
              </h1>

              <p className="text-base md:text-lg text-slate-200 max-w-2xl mb-6">
                Transform ideas into functional prototypes with fast turnaround, engineering support and
                production-minded builds from day one.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-sky-500 to-emerald-400 hover:from-sky-400 hover:to-emerald-300 text-slate-950 font-semibold px-7 py-5 text-sm md:text-base shadow-lg shadow-cyan-500/40">
                    Request a Prototype Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                {/* <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-cyan-300 text-cyan-100 hover:bg-cyan-300 hover:text-slate-900 bg-transparent font-semibold px-7 py-5 text-sm md:text-base"
                  >
                    View Prototype Portfolio
                  </Button>
                </Link> */}
              </div>

              {/* Stats row – glassy cards on dark */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
                {[
                  { label: "Prototypes built", value: "500+", icon: CheckCircle },
                  { label: "Typical turnaround", value: "24–72h", icon: Zap },
                  { label: "Institutes served", value: "100+", icon: Users },
                  { label: "On-time success", value: "98%", icon: Sparkles },
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

            {/* RIGHT: visual stack like other pages */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                {/* Main hero image card */}
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
                    Quick-turn PCBs • Testing • Iteration
                  </div>
                </div>

                {/* Floating mini card */}
                <motion.div
                  className="absolute -bottom-6 left-4 w-56 rounded-2xl bg-slate-950/90 shadow-xl border border-slate-700 p-4 backdrop-blur"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      Student capstone batch
                    </span>
                    <span className="text-[10px] rounded-full bg-emerald-400/15 border border-emerald-300/60 px-2 py-0.5 text-emerald-200">
                      Delivered in 48h
                    </span>
                  </div>
                  <p className="text-xs text-slate-100 mb-2">
                    Mixed-signal controller prototypes with DFM suggestions and test report.
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Boards</span>
                    <span className="font-semibold text-slate-100">30 units / batch</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="w-full max-w-none mx-auto">
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
                src="https://sooneasy.com/wp-content/uploads/2023/05/PCB-prototyping.png"
                alt="Prototyping Lab"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prototype Showcase Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 bg-white">
        <div className="w-full max-w-none mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              Prototype Development Process
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
                src="/assets/image1p.png"
                alt="Complex PCB Prototype Assembly"
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
                src="/assets/image2p.png"
                alt="Prototype Component Assembly"
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
                src="/assets/image3p.png"
                alt="Prototype Testing and Validation"
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 md:px-12">
        <div className="w-full max-w-none mx-auto">
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
      <section className="py-12 md:py-16 px-6 md:px-12">
        <div className="w-full max-w-none mx-auto">
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
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white px-6 md:px-12">
        <div className="w-full max-w-none mx-auto">
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#0066CC] to-[#00A896] text-white px-6 md:px-12">
        <div className="w-full max-w-none mx-auto text-center">
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
