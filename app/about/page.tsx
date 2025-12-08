"use client"

import {
  Heart,
  Lightbulb,
  Shield,
  Users,
  Award,
  Handshake,
  Zap,
  Target,
  CheckCircle2,
  Globe,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function useCounter(end: number, duration = 2) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return { count, ref }
}

export default function AboutPage() {
  const [selectedInnovator, setSelectedInnovator] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const coreValuesRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background Animations
      gsap.to(".gsap-blob-1", {
        y: 50,
        x: 30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
      gsap.to(".gsap-blob-2", {
        y: -40,
        x: -20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      })
      gsap.to(".gsap-blob-3", {
        scale: 1.1,
        opacity: 0.8,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      // Content Animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: coreValuesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      tl.to(".gsap-header", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
        .to(".gsap-card", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)"
        }, "-=0.4")

    }, coreValuesRef)

    return () => ctx.revert()
  }, [])

  // 🔹 Updated to 22 years
  const yearsCounter = useCounter(25, 2)
  const industriesCounter = useCounter(10, 2)
  const projectsCounter = useCounter(500, 2.5)

  const innovatorsData = [
    {
      name: "Rajesh Sharma",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
      heading: "Engineering Solutions, Not Just Circuits",
      description:
        "With 20+ years in embedded systems, Rajesh leads our DFM initiative, ensuring every board we build is optimized for yield and reliability before it hits the production line.",
    },
    {
      name: "Priya Desai",
      role: "Quality Assurance Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      heading: "Zero Defects is a Mindset, Not a Metric",
      description:
        "Priya oversees our ISO certified QMS. Her rigorous approach to IQC, in-process QC, and final OQC ensures that only flawless products leave our facility.",
    },
    {
      name: "Amit Patel",
      role: "Production Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      heading: "Scalability with Precision",
      description:
        "Amit manages our high-speed SMT lines. His focus on process capability (Cpk) and lean manufacturing principles allows us to scale from prototypes to mass production seamlessly.",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "We align our manufacturing schedules with your market demands, acting as a true partner.",
      gradient: "from-[#0066CC] to-[#00A896]",
    },
    {
      icon: Lightbulb,
      title: "Continuous Improvement",
      description: "We optimize production cycles with every batch, reducing costs and lead times.",
      gradient: "from-[#00A896] to-[#0066CC]",
    },
    {
      icon: Handshake,
      title: "Reliable Partnerships",
      description: "Our relationships are built on transparency, on-time delivery, and open communication.",
      gradient: "from-[#0066CC] to-[#00A896]",
    },
    {
      icon: Award,
      title: "Zero Compromise on Quality",
      description: "IPC Class 3 compliance is not an option; it's our standard operating procedure.",
      gradient: "from-[#00A896] to-[#0066CC]",
    },
    {
      icon: Shield,
      title: "IP Protection",
      description: "Your designs are your assets. We sign strict NDAs to ensure your IP stays secure.",
      gradient: "from-[#0066CC] to-[#00A896]",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "We invest in training our technicians on the latest SMT and assembly technologies.",
      gradient: "from-[#00A896] to-[#0066CC]",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Merged Hero & Story Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating orbs */}
          <motion.div
            className="absolute top-10 -left-32 w-96 h-96 bg-gradient-to-br from-[#0066CC]/25 to-[#00A896]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 80, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-br from-[#00A896]/18 to-[#0066CC]/18 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 0.8, 1.2],
              x: [0, -60, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-[#0066CC]/15 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [0.8, 1.3, 0.8],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
          />

          {/* Subtle grid / pattern */}
          <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#1f293780_1px,transparent_1px),linear-gradient(to_bottom,#1f293780_1px,transparent_1px)] bg-[size:18px_18px]" />
        </div>

        <div className="w-full max-w-none px-6 md:px-12 relative z-10">
          {/* Top Section - Main Heading & Images */}
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mx-auto lg:mx-0 px-4 py-2 bg-gradient-to-r from-[#0066CC]/20 to-[#00A896]/20 rounded-full border border-[#0066CC]/40 backdrop-blur-sm"
              >
                <span className="text-xl font-semibold text-sky-100">Since 2001</span>
              </motion.div>

              <div>
                <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl text-balance leading-tight mb-6 text-white">
                  Transforming Ideas into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#22c55e] to-[#a5f3fc]">
                    Manufacturing Excellence
                  </span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-slate-200 text-pretty mb-6">
                  For over{" "}
                  <span className="font-semibold text-[#38bdf8]">
                    25+ years
                  </span>
                  , Jayshree Instruments has been at the forefront of electronics manufacturing, delivering
                  innovative EMS solutions to startups, corporates, and OEMs worldwide.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-slate-300 text-pretty">
                  Jayshree Instruments started in 1999 with a single SMT line. Today, we handle complex, high-mix low-volume and high-volume production for Automotive, Medical, and Industrial sectors.
                </p>
              </div>

              {/* Mobile Image View (Visible only on lg and below) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block lg:hidden relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 my-8"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=1000&fit=crop"
                  alt="Manufacturing facility"
                  fill
                  className="object-cover"
                />
                {/* Floating badge for mobile */}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 rounded-xl p-3 shadow-lg border border-slate-700/80 backdrop-blur-sm flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#22c55e] flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-sky-100">99.9%</div>
                    <div className="text-[10px] text-slate-300">Quality Rate</div>
                  </div>
                </div>
              </motion.div>

              {/* Animated Stats Grid */}
              <div ref={yearsCounter.ref} className="grid grid-cols-3 gap-2 md:gap-6 pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center p-2 md:p-4 rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.85)] border border-slate-700/70 bg-slate-900/80 hover:border-sky-400/50 hover:shadow-[0_22px_60px_rgba(15,23,42,0.95)] transition-all"
                >
                  <div className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#22c55e] mb-1 md:mb-2">
                    {yearsCounter.count}+
                  </div>
                  <div className="text-[10px] md:text-sm text-slate-300 font-medium">
                    Years Experience
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  ref={projectsCounter.ref}
                  className="text-center p-2 md:p-4 rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.85)] border border-slate-700/70 bg-slate-900/80 hover:border-sky-400/50 hover:shadow-[0_22px_60px_rgba(15,23,42,0.95)] transition-all"
                >
                  <div className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#22c55e] mb-1 md:mb-2">
                    {projectsCounter.count}+
                  </div>
                  <div className="text-[10px] md:text-sm text-slate-300 font-medium">
                    Projects Delivered
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  ref={industriesCounter.ref}
                  className="text-center p-2 md:p-4 rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.85)] border border-slate-700/70 bg-slate-900/80 hover:border-sky-400/50 hover:shadow-[0_22px_60px_rgba(15,23,42,0.95)] transition-all"
                >
                  <div className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#22c55e] mb-1 md:mb-2">
                    {industriesCounter.count}+
                  </div>
                  <div className="text-[10px] md:text-sm text-slate-300 font-medium">
                    Industries Served
                  </div>
                </motion.div>
              </div>

              {/* Certifications badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {["ISO 9001", "ISO 14001", "ISO 45001"].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-[#0f172a]/80 to-[#020617]/80 rounded-full border border-slate-600/60 hover:border-sky-400/70 transition-all"
                  >
                    <span className="text-sm font-semibold text-slate-100">✓ {cert}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Unified Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[600px]">
                {/* Main large image */}
                <motion.div
                  className="absolute top-0 right-0 w-80 h-96 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] border border-slate-700/80 bg-slate-900"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=1000&fit=crop"
                    alt="Manufacturing facility"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Secondary image */}
                <motion.div
                  className="absolute bottom-0 left-0 w-72 h-80 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] border border-slate-700/80 bg-slate-900"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Image
                    src="https://www.pcbstartech.com/wp-content/uploads/2019/08/company-profile-2.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Small circular image */}
                <motion.div
                  className="absolute top-32 left-10 w-32 h-32 rounded-full overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.7)] border border-slate-700/80 bg-slate-900"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop"
                    alt="PCB"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Floating quality stat card */}
                <motion.div
                  className="absolute bottom-32 right-10 bg-slate-900/95 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-slate-700/80 backdrop-blur-sm"
                  animate={{
                    y: [0, 10, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#38bdf8] to-[#22c55e] flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-sky-100">99.9%</div>
                      <div className="text-xs text-slate-300">Quality Rate</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative rotating element */}
                <motion.div
                  className="absolute top-10 right-20 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#38bdf8]/30 to-[#22c55e]/30 backdrop-blur-sm border border-slate-600/70"
                  animate={{
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Team Members & Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/90 rounded-3xl p-6 md:p-12 border border-slate-700/80 shadow-[0_24px_70px_rgba(0,0,0,0.85)]"
          >
            <div className="grid gap-12 lg:grid-cols-3 items-center">
              {/* Left - Text Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white md:text-4xl mb-4">
                    Our Expert Team Behind the Excellence
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-slate-200 text-pretty">
                    At Jayshree Instruments, our team is our greatest asset. From DFM engineers identifying potential issues before production to skilled technicians handling complex hand-soldering, every member is committed to the success of your product.
                  </p>
                </div>

                {/* Team highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "DFM & DFA Expertise", subtitle: "Optimizing for yield" },
                    { title: "IPC Certified Techs", subtitle: "Standardized quality" },
                    { title: "Supply Chain Pros", subtitle: "Managing global logistics" },
                    { title: "Test Engineering", subtitle: "Rigorous validation" },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * (idx + 1) }}
                      className="flex items-start gap-3 p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/90 rounded-lg border border-slate-700/80"
                    >
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#22c55e] flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-50">{item.title}</div>
                        <div className="text-xs text-slate-300">{item.subtitle}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right - Team Member Avatars */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center justify-center lg:items-end gap-6"
              >
                <div className="text-center lg:text-right">
                  <p className="text-sm font-semibold text-sky-300 mb-2">Meet Our Team</p>
                  <p className="text-slate-300 text-sm">
                    Experts with 25+ years of combined experience
                  </p>
                </div>

                <div className="flex justify-center lg:justify-end items-center -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
                  ].map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0, x: 20 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      whileHover={{ scale: 1.15, zIndex: 10, y: -8 }}
                      className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-slate-900 shadow-[0_18px_45px_rgba(0,0,0,0.9)] bg-slate-800 hover:shadow-[0_22px_60px_rgba(0,0,0,1)] transition-shadow"
                    >
                      <Image src={src || "/placeholder.svg"} alt="Team member" fill className="object-cover" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-center lg:text-right"
                >
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-slate-800/90 to-slate-900/90 rounded-full border border-slate-600/80">
                    <span className="text-xs font-semibold text-slate-100">
                      3+ Core Leaders
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Core Values Section - Replaces Video */}
      <section ref={coreValuesRef} className="py-12 md:py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
        {/* GSAP Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066CC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />

          {/* Animated Blobs */}
          <div className="gsap-blob-1 absolute top-0 -left-20 w-96 h-96 bg-[#0066CC]/10 rounded-full blur-3xl mix-blend-multiply" />
          <div className="gsap-blob-2 absolute bottom-0 -right-20 w-96 h-96 bg-[#00A896]/10 rounded-full blur-3xl mix-blend-multiply" />
          <div className="gsap-blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-none px-6 md:px-12 relative z-10">
          <div className="gsap-header text-center mb-16 md:mb-20 opacity-0 translate-y-10">
            <div className="inline-block px-4 py-2 bg-[#0066CC]/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-[#0066CC] uppercase tracking-wide">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl leading-tight text-balance mb-6">
              Driven by Quality,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#00A896]">
                Defined by Reliability
              </span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto text-pretty">
              Our core values guide every decision, project, and partnership. They are the foundation of our culture and the promise we make to our clients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="gsap-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden opacity-0 translate-y-10"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066CC] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>




      {/* Why Choose Jayshree Instruments section */}
      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-[#0066CC]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#00A896]/5 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-none px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#0066CC]/10 rounded-full">
              <span className="text-sm font-semibold text-[#0066CC] uppercase tracking-wide">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl mb-6 text-balance">
              Why Choose Jayshree Instruments for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#00A896]">
                Product Development?
              </span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto text-pretty">
              We combine state-of-the-art SMT lines, a skilled workforce, and robust quality systems to ensure your product is built right, every time.
            </p>
          </motion.div>

          <div className="space-y-8 lg:space-y-12">
            {[
              {
                number: "01",
                icon: Users,
                title: "Engineering-First DNA",
                description: "We don't just assemble; we engineer. Our team provides in-depth DFM feedback to lower your BOM cost and improve yield.",
                details: "Expertise in complex footprints, rigid-flex boards, and high-reliability interconnects.",
                gradient: "from-[#0066CC] to-[#00A896]",
                color: "#0066CC",
              },
              {
                number: "02",
                icon: Shield,
                title: "IP Protection & Trust",
                description: "We understand the value of your IP. Our facility implements strict physical and digital security protocols.",
                details: "NDA-driven engagement models ensuring your designs remain confidential.",
                gradient: "from-[#00A896] to-[#0066CC]",
                color: "#00A896",
              },
              {
                number: "03",
                icon: Award,
                title: "Certified Manufacturing",
                description: "Our processes are ISO 9001:2015 certified, ensuring consistent quality management across all builds.",
                gradient: "from-[#0066CC] to-[#00A896]",
                color: "#0066CC",
                features: [
                  {
                    title: "ESD Safe Facility",
                    desc: "Controlled environment assembly",
                  },
                  {
                    title: "Automated Inspection",
                    desc: "AOI & X-Ray capabilities",
                  },
                  {
                    title: "Traceability",
                    desc: "Full lot & component tracking",
                  },
                ],
              },
              {
                number: "04",
                icon: Target,
                title: "End-to-End Testing",
                description: "We catch defects before they ship. From ICT to Functional Test, we ensure 100% functionality.",
                gradient: "from-[#00A896] to-[#0066CC]",
                color: "#00A896",
                sections: [
                  {
                    title: "In-Circuit Test (ICT)",
                    text: "Component level verification",
                  },
                  {
                    title: "Functional Test (FCT)",
                    text: "Real-world simulation testing",
                  },
                ],
              },
              {
                number: "05",
                icon: Zap,
                title: "Flexible Scalability",
                description: "Whether you need 10 prototypes or 10,000 production units, our flexible lines adapt to your volume needs.",
                details: "Seamless NPI to Mass Production transition without switching vendors.",
                gradient: "from-[#0066CC] to-[#00A896]",
                color: "#0066CC",
              },
              {
                number: "06",
                icon: Globe,
                title: "Strategic Sourcing",
                description: "Direct relationships with global distributors and manufacturers ensure authentic parts and better pricing.",
                details: "Proactive obsolescence management and alternative part suggestions.",
                gradient: "from-[#00A896] to-[#0066CC]",
                color: "#00A896",
              },
            ].map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Number Badge - Large */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`relative w-24 h-24 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl`}
                    >
                      <span className="text-4xl lg:text-5xl font-bold text-white">{item.number}</span>
                      <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="flex-1 w-full">
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200 relative overflow-hidden group">
                      {/* Decorative gradient on hover */}
                      <div
                        className={`absolute top-0 ${isEven ? "left-0" : "right-0"} w-1 h-full bg-gradient-to-b ${item.gradient} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`}
                      />

                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Text Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                          <p className="text-base text-gray-700 leading-relaxed mb-4">{item.description}</p>

                          {item.details && (
                            <p className="text-sm text-gray-600 leading-relaxed italic">{item.details}</p>
                          )}

                          {item.features && (
                            <div className="grid gap-4 mt-6 sm:grid-cols-3">
                              {item.features.map((feature, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                  className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-[#00A896] transition-colors"
                                >
                                  <div className="flex items-start gap-2 mb-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#00A896] flex-shrink-0 mt-0.5" />
                                    <div className="font-semibold text-sm text-gray-900">{feature.title}</div>
                                  </div>
                                  <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                              ))}
                            </div>
                          )}

                          {item.sections && (
                            <div className="grid gap-4 mt-6 sm:grid-cols-2">
                              {item.sections.map((section, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                  className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-[#00A896] transition-colors"
                                >
                                  <div className="font-semibold text-sm text-gray-900">{section.title}</div>
                                  <p className="text-xs text-gray-600 leading-relaxed">{section.text}</p>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core EMS Services section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-20 lg:py-24">
        {/* Decorative background: angled band, dots, soft glow */}
        <div className="pointer-events-none absolute inset-0">
          {/* Angled gradient strip on the right */}
          <div className="absolute -right-28 top-[-10%] h-[140%] w-[55%] -skew-x-6 bg-gradient-to-br from-[#0066CC]/25 via-[#00A896]/10 to-slate-800/40" />

          {/* Dot pattern on the left */}
          <div className="absolute -left-8 top-20 h-44 w-44 rounded-3xl bg-[radial-gradient(circle,_rgba(148,163,184,0.7)_1px,_transparent_1px)] [background-size:16px_16px] opacity-60" />

          {/* Soft glow behind cards */}
          <div className="absolute inset-x-10 bottom-[-40px] h-48 rounded-full bg-[#0066CC]/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-5 py-2 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-6 rounded-full bg-gradient-to-r from-[#0066CC] to-[#00A896]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                Our Services
              </span>
            </div>

            <h2 className="mt-5 text-balance text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Core EMS Services
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
              Comprehensive electronics manufacturing solutions from PCB assembly to final packaging,
              engineered for reliability, scalability, and faster time-to-market.
            </p>
          </motion.div>

          {/* Service cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                ),
                title: "PCB Assembly Services",
                description:
                  "Surface-mount (SMT), through-hole (THT), and mixed-technology PCB assembly with fine-pitch capability and AOI-backed quality.",
                gradient: "from-[#0066CC] to-[#00A896]",
              },
              {
                icon: (
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Wire & Cable Harnessing",
                description:
                  "Custom wire harness design and assembly with routing, labeling, and testing for automotive, industrial, and consumer platforms.",
                gradient: "from-[#00A896] to-[#0066CC]",
              },
              {
                icon: (
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                ),
                title: "Box Build Assembly",
                description:
                  "Complete product assembly including enclosures, sub-assemblies, firmware loading, and functional testing for market-ready units.",
                gradient: "from-[#0066CC] to-[#00A896]",
              },
              {
                icon: (
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Prototyping & Product Development",
                description:
                  "Rapid prototypes with DFM input, EVT/DVT support, and validation testing to de-risk full-scale production.",
                gradient: "from-[#00A896] to-[#0066CC]",
              },
              {
                icon: <Shield className="h-7 w-7" />,
                title: "Global Component Sourcing",
                description:
                  "Strategic sourcing from vetted suppliers, alternates management, lifecycle risk checks, and BOM cost optimization.",
                gradient: "from-[#0066CC] to-[#00A896]",
              },
              {
                icon: <CheckCircle2 className="h-7 w-7" />,
                title: "Testing, QA & Final Packaging",
                description:
                  "In-circuit, functional, and burn-in testing with structured QA and export-ready packaging for safe global shipment.",
                gradient: "from-[#00A896] to-[#0066CC]",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group h-full rounded-2xl bg-slate-900/80 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.75)] ring-1 ring-slate-700/70 transition-all duration-300 hover:shadow-[0_22px_60px_rgba(15,23,42,0.9)] hover:ring-[#00A896]/60"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg shadow-slate-900/70`}
                >
                  {service.icon}
                </motion.div>
                <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#0066CC]/10 rounded-full">
              <span className="text-sm font-semibold text-[#0066CC] uppercase tracking-wide">Industries</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl mb-6 text-balance">
              Industries We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#00A896]">
                Proudly Serve
              </span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto text-pretty">
              Trusted by leading companies across diverse sectors. We deliver specialized EMS solutions with
              industry-specific expertise and compliance standards.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Consumer Electronics",
                description:
                  "Smart devices, wearables, IoT products, and home automation systems with cutting-edge technology.",
                image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=600&fit=crop",
                icon: "📱",
                stats: "200+ Products Delivered",
              },
              {
                title: "Industrial Automation",
                description: "Control systems, PLCs, sensors, and automation equipment for manufacturing excellence.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
                icon: "🏭",
                stats: "150+ Automation Projects",
              },
              {
                title: "Renewable Energy",
                description:
                  "Solar inverters, battery management systems, and energy storage solutions for sustainability.",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
                icon: "⚡",
                stats: "100+ Energy Systems",
              },
              {
                title: "Medical Devices",
                description:
                  "Diagnostic equipment, patient monitoring, and medical-grade electronics with full compliance.",
                image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=600&fit=crop",
                icon: "🏥",
                stats: "50+ Medical Devices",
              },
              {
                title: "Automotive Electronics",
                description:
                  "EV components, infotainment systems, and automotive control units with IATF certification.",
                image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
                icon: "🚗",
                stats: "80+ Automotive Projects",
              },
              {
                title: "Telecommunications",
                description: "Network equipment, 5G infrastructure, and communication devices for connectivity.",
                image: "https://www.venture-mfg.com/wp-content/uploads/2022/12/Multilayer-PCB-2.jpg",
                icon: "📡",
                stats: "120+ Telecom Solutions",
              },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} className="h-full w-full">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 h-12 w-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {industry.icon}
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-bold text-[#0066CC]">{industry.stats}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066CC] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 mb-4">{industry.description}</p>

                  {/* Learn More Link */}
                  {/* <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center text-[#0066CC] font-semibold text-sm"
                  >
                    View Projects
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div> */}
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066CC] to-[#00A896] origin-left"
                />
              </motion.div>
            ))}
          </div>

          {/* Trust Badge Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#0066CC]/10 to-[#00A896]/10 rounded-full">
              <CheckCircle2 className="h-6 w-6 text-[#00A896]" />
              <span className="text-sm font-semibold text-gray-700">
                Serving 500+ companies across 6 major industries with ISO & IATF certified quality
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our 7-Step Process section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#0066CC]/10 rounded-full">
              <span className="text-sm font-semibold text-[#0066CC] uppercase tracking-wide">Our Process</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl mb-6 text-balance">
              Our 7-Step{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#00A896]">
                EMS Journey
              </span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto text-pretty">
              From initial consultation to final delivery, we guide your project through a proven process that ensures
              quality, efficiency, and success at every stage.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Timeline Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0066CC] via-[#00A896] to-[#0066CC] opacity-30" />
            </div>

            {/* Process Steps */}
            <div className="space-y-12 lg:space-y-20">
              {[
                {
                  number: "01",
                  title: "Consultation & Design",
                  description:
                    "We begin by understanding your requirements, technical specifications, and project goals. Our design team collaborates with you to create optimal solutions that balance functionality, manufacturability, and cost-effectiveness.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                  gradient: "from-[#0066CC] to-[#00A896]",
                  features: ["Requirement Analysis", "Design Consultation", "Feasibility Study"],
                },
                {
                  number: "02",
                  title: "Prototyping",
                  description:
                    "Rapid prototyping allows us to validate designs before full-scale production. We create functional prototypes for testing, user feedback, and design iteration, ensuring your product meets all specifications.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                  gradient: "from-[#00A896] to-[#0066CC]",
                  features: ["Rapid Prototyping", "Design Validation", "User Testing"],
                },
                {
                  number: "03",
                  title: "Procurement",
                  description:
                    "Leveraging our global sourcing network, we procure high-quality components at competitive prices. Our vetted suppliers across Asia, Europe, and the Americas ensure reliable supply chains and fast turnaround times.",
                  icon: <Globe className="h-8 w-8" />,
                  gradient: "from-[#0066CC] to-[#00A896]",
                  features: ["Global Sourcing", "Quality Verification", "Cost Optimization"],
                },
                {
                  number: "04",
                  title: "Manufacturing",
                  description:
                    "Our state-of-the-art manufacturing facility uses advanced equipment and processes for precision assembly. From SMT and through-hole assembly to wire harnessing, we handle all aspects of production with expertise.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  ),
                  gradient: "from-[#00A896] to-[#0066CC]",
                  features: ["PCB Assembly", "Wire Harnessing", "Box Build"],
                },
                {
                  number: "05",
                  title: "Quality Control",
                  description:
                    "Rigorous testing and inspection at every production stage ensure defect-free output. Our QC team performs functional testing, visual inspection, and compliance verification to meet international standards.",
                  icon: <CheckCircle2 className="h-8 w-8" />,
                  gradient: "from-[#0066CC] to-[#00A896]",
                  features: ["Functional Testing", "Visual Inspection", "Compliance Verification"],
                },
                {
                  number: "06",
                  title: "Assembly & Packaging",
                  description:
                    "Final assembly brings all components together in our dedicated assembly station. We perform user testing, DFM optimization, and professional packaging to ensure your product is market-ready.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  ),
                  gradient: "from-[#00A896] to-[#0066CC]",
                  features: ["Final Assembly", "User Testing", "Professional Packaging"],
                },
                {
                  number: "07",
                  title: "Logistics & Delivery",
                  description:
                    "We ensure timely delivery with tracking and comprehensive after-sales support. Our logistics partners provide reliable shipping, and our support team remains available for warranty, diagnostics, and ongoing assistance.",
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  ),
                  gradient: "from-[#0066CC] to-[#00A896]",
                  features: ["Timely Delivery", "Shipment Tracking", "After-Sales Support"],
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 w-full"
                  >
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#0066CC]/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg`}
                        >
                          {step.icon}
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}
                            >
                              STEP {step.number}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.features.map((feature, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                            className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Number Circle - Center on Desktop */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="hidden lg:flex flex-shrink-0 relative z-10"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(0, 168, 150, 0.4)",
                          "0 0 0 20px rgba(0, 168, 150, 0)",
                          "0 0 0 0 rgba(0, 168, 150, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1,
                        delay: index * 0.2,
                      }}
                      className={`h-20 w-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl border-4 border-white`}
                    >
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </motion.div>
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] rounded-2xl shadow-2xl">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-1">Ready to Start Your Project?</h3>
                <p className="text-sm text-white/90">Let's discuss how we can bring your ideas to life</p>
              </div>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-[#0066CC] rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </motion.button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Compliance Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-[#0066CC]/20 to-[#00A896]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-[#00A896]/20 to-[#0066CC]/20 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              x: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="w-full max-w-none px-6 md:px-12 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0066CC]/20 to-[#00A896]/20 rounded-full border border-[#0066CC]/30 mb-6">
              <span className="text-sm font-semibold text-[#00A896]">✓ Certified Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              Global Certifications &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#00A896]">
                Compliance Standards
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto text-pretty">
              Our commitment to quality, safety, and environmental responsibility is validated by internationally
              recognized certifications and compliance standards.
            </p>
          </motion.div>

          <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16 no-scrollbar">
            {[
              {

                name: "ISO 9001:2015",
                fullName: "Quality Management System",
                color: "from-blue-500 to-cyan-500",
                icon: "✓",
                description: "Demonstrates our commitment to consistent quality management and customer satisfaction.",
                benefits: ["Quality Assurance", "Process Optimization", "Customer Focus"],
              },
              {

                name: "ISO 14001:2015",
                fullName: "Environmental Management",
                color: "from-green-500 to-teal-500",
                icon: "🌱",
                description: "Validates our environmental responsibility and sustainable manufacturing practices.",
                benefits: ["Eco-Friendly", "Waste Reduction", "Sustainability"],
              },
              {

                name: "RoHS Compliant",
                fullName: "Restriction of Hazardous Substances",
                color: "from-yellow-500 to-orange-500",
                icon: "♻️",
                description: "Ensures compliance with hazardous substance restrictions and environmental protection standards.",
                benefits: ["Safe Materials", "Compliance", "Environmental Protection"],
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative min-w-[85vw] md:min-w-0 snap-center first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 border border-slate-700 group-hover:border-[#0066CC]/50 transition-all duration-300 h-full flex flex-col">
                  {/* Year Badge */}
                  {/* <div className="inline-flex items-center gap-2 mb-4 w-fit">
                    <span className="text-xs font-bold text-[#00A896] bg-[#00A896]/10 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div> */}

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl md:text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {cert.icon}
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-sm text-[#00A896] font-semibold mb-4">{cert.fullName}</p>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{cert.description}</p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {cert.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cert.color}`} />
                        <span className="text-xs text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border border-slate-700 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/10 to-[#00A896]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Certification Portfolio</h3>

              <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 items-center md:justify-items-center no-scrollbar">
                {[
                  {
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9001-xwLQ0mNZ14VJTQAoYgagrqVfirAT95.webp",
                    alt: "ISO 9001",
                    title: "ISO 9001:2015",
                  },
                  {
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14001-FAPM1Y5pmLMYGHAdvfy4xUTtEJFHso.jpg",
                    alt: "ISO 14001",
                    title: "ISO 14001:2015",
                  },
                  {
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20ROSH-zvoomjNPlQ1IZ19FmeE3CzlzYI4aQ7.jpg",
                    alt: "RoHS",
                    title: "RoHS Compliant",
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={cert.alt}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="group relative min-w-[280px] md:min-w-0 w-full max-w-xs snap-center flex-shrink-0"
                  >
                    <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl border-2 border-slate-700 group-hover:border-[#0066CC]/50 transition-all bg-white p-6 flex items-center justify-center">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.alt}
                        width={200}
                        height={200}
                        className="object-contain drop-shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/0 to-[#0066CC]/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    </div>
                    <p className="text-center text-white font-semibold mt-4 text-sm">{cert.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0066CC]/10 to-[#00A896]/10 rounded-full border border-[#0066CC]/30">
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#00A896]">
                ✓ Trusted by 500+ Companies Worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
