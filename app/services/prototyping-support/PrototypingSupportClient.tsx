"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  Lightbulb,
  Users,
  GraduationCap,
  Rocket,
  Zap,
  CheckCircle2,
  ArrowRight,
  Cpu,
  FileText,
  TestTube,
  Package,
  Sparkles,
  Target,
  CircuitBoard,
  Award,
  Heart,
  Star,
  Quote,
  ChevronRight,
  Download,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRef } from "react"

const packages = [
  {
    name: "Basic Package",
    description: "Perfect for simple academic or PoC projects.",
    price: "$200",
    features: ["Design consultation", "PCB prototyping", "Assembly & validation"],
    color: "from-blue-500 via-cyan-500 to-teal-500",
    popular: false,
  },
  {
    name: "Standard Package",
    description: "Balanced bundle for most projects and research work.",
    price: "$350",
    features: ["Design consultation", "Circuit simulation", "PCB prototyping", "Assembly & validation"],
    color: "from-teal-500 via-blue-500 to-cyan-500",
    popular: true,
  },
  {
    name: "Premium Package",
    description: "End-to-end support for high-stakes and startup builds.",
    price: "$500",
    features: [
      "Design consultation",
      "Circuit simulation",
      "PCB prototyping",
      "Assembly & validation",
      "Educational mentorship",
      "Iterative development support",
    ],
    color: "from-cyan-500 via-blue-600 to-teal-600",
    popular: false,
  },
]

const whoWeSupport = [
  {
    icon: GraduationCap,
    title: "Students & Colleges",
    description:
      "Transform your academic projects into reality—whether it's a final year project, competition entry, or hands-on learning prototype.",
    benefits: [
      "Special student pricing up to 40% off",
      "Educational mentorship from industry experts",
      "Quick 48-hour turnaround for urgent projects",
      "Free design review and optimization",
    ],
    color: "from-blue-500 via-cyan-500 to-teal-500",
    stats: { projects: "200+", colleges: "50+" },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype%201-lW7RnR3FC9GA1M4VzePrxYhgAgJAGA.jpg",
  },
  {
    icon: Users,
    title: "Faculty Research Projects",
    description:
      "Advance your research with professional-grade prototypes, detailed documentation, and reliable iteration support.",
    benefits: [
      "Research-grade quality with documentation",
      "Complete IP protection and confidentiality",
      "Iterative development support for revisions",
      "Publication-ready technical specifications",
    ],
    color: "from-teal-500 via-blue-500 to-cyan-500",
    stats: { papers: "100+", universities: "30+" },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype-Q7ZiAHET4axkKd48srOWiJdcfhxaZ2.jpg",
  },
  {
    icon: Rocket,
    title: "Startups & Entrepreneurs",
    description:
      "Accelerate your MVP journey—from investor demos to pilot runs—with cost-optimized, scalable prototyping support.",
    benefits: [
      "Rapid MVP development in 5–7 days",
      "Cost-optimized solutions for lean budgets",
      "Scalability planning for production transition",
      "Comprehensive NDA and IP protection",
    ],
    color: "from-cyan-500 via-blue-600 to-teal-600",
    stats: { startups: "150+", funding: "$50M+" },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype-rzBk9wKHwcuTq7115nVPyac40XuLqj.webp",
  },
]

const offerings = [
  {
    icon: FileText,
    title: "Design Consultation",
    description:
      "Work directly with experienced engineers to refine your concept, schematics, and architecture for manufacturability.",
    details: [
      "Comprehensive schematic review and feedback",
      "Design for Manufacturing (DFM) analysis",
      "Component selection and sourcing recommendations",
      "Cost optimization strategies",
      "Signal integrity and power distribution planning",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Testing2-zuho0XuniXPHpC9ilOcON96hr8ZWAl.jpg",
  },
  {
    icon: Cpu,
    title: "Circuit Simulation",
    description:
      "Validate your design virtually and catch issues early before committing to fabrication and assembly.",
    details: [
      "SPICE circuit simulation and analysis",
      "Signal integrity and EMI/EMC analysis",
      "Thermal modeling and heat dissipation",
      "Power consumption and efficiency analysis",
      "Worst-case scenario testing",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20testing%203-2tuDpnLrCdPJYlwr1aEz1lZR6rCRcZ.jpg",
  },
  {
    icon: CircuitBoard,
    title: "PCB Prototyping",
    description:
      "High-quality PCBs with quick turnaround—supporting simple boards through to complex HDI designs.",
    details: [
      "1–16 layer PCB fabrication",
      "Rigid, flexible, and rigid-flex PCBs",
      "HDI (High-Density Interconnect) technology",
      "Quick-turn options (24–48 hours)",
      "Advanced materials (Rogers, Teflon, etc.)",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB-lgCSelsub9Lfxylqe3lHChysLiUKQW.webp",
  },
  {
    icon: Package,
    title: "Assembly & Validation",
    description:
      "Turnkey assembly with sourcing, mounting, and functional testing—delivering ready-to-evaluate prototypes.",
    details: [
      "SMT and through-hole assembly",
      "BGA, QFN, and micro-component placement",
      "Component sourcing and procurement",
      "Functional testing and validation",
      "Quality inspection and documentation",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-WUbVBIclyUWnbIbEwZ8UHjosaYwrju.jpg",
  },
]

const process = [
  {
    step: "01",
    title: "Submit Your Idea",
    description:
      "Share your concept, schematics, or even a rough sketch. We review every submission and respond within 24 hours.",
    icon: Lightbulb,
    details: ["Upload files via secure portal", "24-hour initial response", "Free feasibility assessment"],
  },
  {
    step: "02",
    title: "Design Review & Optimization",
    description:
      "Our engineers perform DFM checks, suggest components, and optimize the design for cost and performance.",
    icon: FileText,
    details: ["DFM analysis", "Component recommendations", "Cost optimization", "Technical consultation"],
  },
  {
    step: "03",
    title: "Simulation & Virtual Testing",
    description:
      "We simulate the circuit to validate critical behavior—reducing risk before moving into fabrication.",
    icon: TestTube,
    details: ["SPICE simulation", "Signal integrity analysis", "Thermal modeling", "Performance validation"],
  },
  {
    step: "04",
    title: "Rapid Prototyping",
    description:
      "With an approved design, we fabricate and assemble your prototype with professional-grade processes.",
    icon: Zap,
    details: ["Fast PCB fabrication", "Professional assembly", "Quality inspection", "Progress updates"],
  },
  {
    step: "05",
    title: "Testing & Delivery",
    description:
      "Each prototype is functionally tested, documented, securely packed, and shipped to your doorstep.",
    icon: CheckCircle2,
    details: ["Functional testing", "Quality assurance", "Documentation package", "Secure delivery"],
  },
]

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Final Year Student, IIT Delhi",
    image: "/diverse-students-studying.png",
    quote:
      "The team helped me complete my final year project ahead of schedule. Their technical guidance was invaluable and the prototype quality was top-notch.",
    rating: 5,
    project: "IoT-based Smart Home System",
  },
  {
    name: "Dr. Priya Menon",
    role: "Associate Professor, NIT Trichy",
    image: "/diverse-professor-lecturing.png",
    quote:
      "We've collaborated on multiple research projects. Their documentation, confidentiality, and iteration support have been crucial for our publications.",
    rating: 5,
    project: "Wireless Sensor Network Research",
  },
  {
    name: "Amit Patel",
    role: "Founder, TechStart Solutions",
    image: "/entrepreneur.png",
    quote:
      "They turned our MVP in just 6 days, helping us secure seed funding. The cost optimization and scalability inputs were exactly what we needed.",
    rating: 5,
    project: "Wearable Health Monitor MVP",
  },
]

const faqs = [
  {
    question: "What files do I need to provide?",
    answer:
      "We accept Gerber files, schematics (PDF, Eagle, KiCad, Altium), BOM (Bill of Materials), and assembly drawings. If you only have a concept, we can help from scratch.",
  },
  {
    question: "How long does prototyping take?",
    answer:
      "Typical timelines are 5–7 days for complete assembly. We also offer 48–72 hour quick-turn options at a premium. Bare PCB fabrication alone can be done in 24–48 hours.",
  },
  {
    question: "Do you provide design services?",
    answer:
      "Yes. We handle schematic capture, PCB layout, and design optimization. Share your concept or specs and we’ll build a production-ready design.",
  },
  {
    question: "Is my intellectual property protected?",
    answer:
      "Absolutely. We sign NDAs before deep technical discussions and maintain strict confidentiality. Your files are never shared with third parties.",
  },
  {
    question: "What if the prototype doesn't work?",
    answer:
      "We provide comprehensive testing. If there’s a manufacturing issue, we remake it at no cost. We can also support debugging for design-related issues.",
  },
  {
    question: "Can you help with component sourcing?",
    answer:
      "Yes. We work with global distributors, source authentic parts, and suggest alternates for obsolete or long-lead components.",
  },
]

export default function PrototypingSupportClient() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50"
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

        {/* Floating Images */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-400/50"
          animate={{ y: [0, -20, 0], rotate: [2, 5, 2] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Image src="/images/design-mode/Prototype%201.jpg" alt="PCB Prototype" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-10 w-56 h-40 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400/50"
          animate={{ y: [0, 20, 0], rotate: [-3, -6, -3] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Image src="/images/design-mode/Prototype.jpg" alt="Assembly Process" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/4 w-48 h-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-teal-400/50"
          animate={{ y: [0, -15, 0], rotate: [1, 3, 1] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Image src="/images/design-mode/Prototype.webp" alt="Testing Setup" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />
        </motion.div>

        {/* Glow blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Hero Content */}
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="container relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur-md px-6 py-3 border border-cyan-400/30 shadow-lg"
            >
              <Sparkles className="h-5 w-5 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700">Trusted by 500+ Innovators Since 2003</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl text-slate-900 leading-tight"
            >
              Got an Idea?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600">
                We Bring It to Life
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-xl md:text-2xl text-slate-700 max-w-3xl leading-relaxed"
            >
              From concept sketches to working prototypes in days—not weeks. We empower students, researchers, and
              startups with rapid PCB prototyping that is fast, affordable, and IP-protected.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cyan-500/30"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white bg-white font-semibold px-8 py-6 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch How It Works
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { number: "500+", label: "Projects Delivered", icon: CheckCircle2 },
                { number: "100+", label: "Colleges Served", icon: GraduationCap },
                { number: "48hrs", label: "Fastest Turnaround", icon: Zap },
                { number: "98%", label: "Success Rate", icon: Award },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/30 group-hover:border-cyan-500/50 transition-all shadow-lg">
                    <stat.icon className="h-6 w-6 text-cyan-600 mb-2" />
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-cyan-600/50 rounded-full flex justify-center p-2 bg-white/60 backdrop-blur">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-600 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 mb-4">
              <Users className="h-4 w-4 text-cyan-700" />
              <span className="text-sm font-semibold text-cyan-700">Who We Support</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
              Empowering Innovators at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Every Stage
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
              From first-time builders to experienced researchers and founders, we tailor our support to your context,
              timelines, and goals.
            </p>
          </motion.div>

          <div className="space-y-24">
            {whoWeSupport.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image side */}
                <div className="flex-1 relative">
                  <motion.div
                    className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`} />

                    {/* Stats */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                      <div className="flex gap-4">
                        {Object.entries(item.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-slate-900">{value}</div>
                            <div className="text-xs text-slate-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Icon badge */}
                    <div
                      className={`absolute bottom-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content side */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{item.description}</p>

                  <div className="space-y-4 mb-8">
                    {item.benefits.map((benefit, idx) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div
                          className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-slate-700 leading-relaxed">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${item.color} text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all`}
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 mb-4">
              <Sparkles className="h-4 w-4 text-cyan-700" />
              <span className="text-sm font-semibold text-cyan-700">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
              End-to-End{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Prototyping Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
              From idea validation and simulation to fabrication and fully tested assemblies—everything under one
              roof.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-2 border-cyan-200/50 hover:border-cyan-400/50 hover:shadow-2xl transition-all h-full bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-56">
                      <Image
                        src={offering.image || "/placeholder.svg"}
                        alt={offering.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20" />

                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                        <offering.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">{offering.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{offering.description}</p>

                      <div className="space-y-2">
                        {offering.details.map((detail, idx) => (
                          <motion.div
                            key={detail}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 className="h-4 w-4 text-cyan-600 shrink-0 mt-1" />
                            <span className="text-sm text-slate-700">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-cyan-600" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
              From Idea to Prototype in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                5 Simple Steps
              </span>
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-slate-700">
              A clear, repeatable process that keeps you informed, reduces risk, and speeds up every iteration.
            </p>

            <div className="max-w-5xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Connecting line */}
                  {index < process.length - 1 && (
                    <div className="absolute left-10 top-24 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-teal-400" />
                  )}

                  <div className="flex gap-8 items-start">
                    {/* Icon */}
                    <motion.div
                      className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500 flex items-center justify-center shrink-0 shadow-xl shadow-cyan-500/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className="h-10 w-10 text-white" />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="flex-1 bg-white/90 backdrop-blur-md rounded-2xl p-8 border-2 border-cyan-200/50 hover:border-cyan-400/50 transition-all group shadow-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm font-bold text-cyan-600 mb-2">STEP {step.step}</div>
                          <h3 className="text-2xl font-bold mb-3 text-slate-900">{step.title}</h3>
                        </div>
                        <ChevronRight className="h-6 w-6 text-cyan-600 group-hover:translate-x-2 transition-transform" />
                      </div>

                      <p className="text-slate-700 leading-relaxed mb-6">{step.description}</p>

                      <div className="flex flex-wrap gap-3">
                        {step.details.map((detail) => (
                          <div
                            key={detail}
                            className="px-4 py-2 rounded-full bg-cyan-100 border border-cyan-300 text-sm text-cyan-800 font-medium"
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PACKAGES / PRICING */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 mb-4">
              <Target className="h-4 w-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-700">Packages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
              Simple Packages for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                Any Project Size
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Choose a package that matches your budget and complexity. Custom quotations are always available for
              unique needs.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full relative overflow-hidden border-2 ${
                    pkg.popular ? "border-emerald-500 shadow-2xl" : "border-slate-200"
                  } bg-white`}
                >
                  {pkg.popular && (
                    <div className="absolute top-3 right-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${pkg.color} mb-4`}
                    >
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{pkg.description}</p>
                    <div className="text-3xl font-bold text-slate-900 mb-4">{pkg.price}</div>
                    <ul className="space-y-2 mb-6 text-sm text-slate-700">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`mt-auto w-full bg-gradient-to-r ${pkg.color} text-white hover:shadow-lg hover:shadow-emerald-400/40`}
                    >
                      Choose {pkg.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 mb-4">
              <Heart className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-600">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
              Loved by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Innovators Worldwide
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Hear directly from students, professors, and founders who trusted us with their critical prototypes.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all bg-white">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-blue-500 mb-4" />

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>

                    <p className="text-slate-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>

                    <div className="text-sm text-blue-600 font-semibold">Project: {testimonial.project}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 mb-4">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-slate-900">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Everything you need to know about our prototyping services. If you still have questions, we’re just a
              message away.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 flex items-start gap-3 text-slate-900">
                      <ChevronRight className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-8">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA – REDESIGNED */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <motion.div
          className="absolute -top-10 right-10 w-72 h-72 bg-white/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            {/* Left: messaging */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold mb-4 border border-white/30">
                <Sparkles className="h-4 w-4" />
                <span>From concept to working prototype in days</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Ready to Transform Your Idea
                <span className="block">Into a Working Prototype?</span>
              </h2>
              <p className="text-lg mb-6 max-w-xl text-white/90">
                Join 500+ innovators who have brought their ideas to life with our rapid prototyping services. Share
                your files and get a clear, actionable plan—not a generic quote.
              </p>

              <div className="grid gap-3 text-sm mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5" />
                  <p>Free design review and feasibility feedback from experienced engineers.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5" />
                  <p>Flexible options for students, research teams, and startups.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5" />
                  <p>IP protection with NDAs and secure file handling.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-10 py-6 text-lg shadow-2xl"
                >
                  Start Your Project Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-semibold px-10 py-6 text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-white/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  <span>Free Design Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  <span>48-Hour Quick-Turn Option</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  <span>100% IP Protected</span>
                </div>
              </div>
            </div>

            {/* Right: snapshot card */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-white/15 blur-3xl" />
              <div className="relative rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/70">Sample Prototype Snapshot</p>
                    <p className="text-sm font-semibold text-white">Wearable Health Monitor MVP</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-100">
                    Delivered in 6 days
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-white/90">
                  <div className="rounded-xl border border-white/25 bg-white/5 p-3">
                    <p className="text-[11px] text-white/70">Boards Fabricated</p>
                    <p className="mt-1 text-lg font-semibold text-white">20 pcs</p>
                    <p className="mt-1 text-[11px] text-white/70">For demo & testing</p>
                  </div>
                  <div className="rounded-xl border border-white/25 bg-white/5 p-3">
                    <p className="text-[11px] text-white/70">Layers & Tech</p>
                    <p className="mt-1 text-lg font-semibold text-white">4-Layer</p>
                    <p className="mt-1 text-[11px] text-white/70">HDI + fine-pitch BGA</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/25 bg-white/5 p-3 text-xs text-white/90">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] text-white/70">From files received to first tested unit</p>
                    <span className="rounded-full bg-cyan-500/25 px-2 py-0.5 text-[11px] text-cyan-50">
                      7 business days
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] text-white/85">
                    Included DFM feedback, BOM optimization, assembly, and functional validation report.
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-white/25 pt-4">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300 text-slate-900 flex items-center justify-center text-xs font-bold">
                    PCB
                  </div>
                  <div className="text-[11px] text-white/90">
                    <p className="font-semibold text-white">Send your BOM & Gerbers</p>
                    <p>We’ll respond with issues, suggestions, and a clear path to your first working prototype.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
