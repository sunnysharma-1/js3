"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Shield,
  Wrench,
  HeadphonesIcon,
  CheckCircle2,
  ArrowRight,
  Clock,
  Award,
  Users,
  Phone,
  Mail,
  MessageSquare,
  FileText,
  Zap,
  Settings,
  Package,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Redesigned single-file After-Sales Support page
// Goals: clearer hierarchy, more accessible color choices, simplified hero, improved CTA, tabbed services, focused support channels

export default function AfterSalesSupportPage() {
  const heroRef = useRef<HTMLElement | null>(null)
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)

  useEffect(() => {
    const heroSection = heroRef.current
    if (!heroSection) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add("animate-in")
    })

    observer.observe(heroSection)
    return () => observer.unobserve(heroSection)
  }, [])

  const services = [
    {
      key: "warranty",
      icon: Shield,
      title: "Warranty Management",
      short: "Fast, transparent claims and lifecycle protection.",
      description:
        "Full warranty management — from registration to claims and reporting. We streamline the process so customers get repairs or replacements with minimal friction.",
      bullets: [
        "Extended and configurable plans",
        "One-click claim initiation",
        "Clear SLA dashboard",
      ],
      color: "bg-gradient-to-br from-cyan-600 to-blue-600",
    },
    {
      key: "diagnostics",
      icon: Settings,
      title: "Diagnostics & Troubleshooting",
      short: "Fast root-cause analysis by certified engineers.",
      description:
        "Remote and on-site diagnostics with actionable reports so your teams can reduce downtime and address recurring issues effectively.",
      bullets: ["Remote session support", "Root-cause reports", "Performance tuning"],
      color: "bg-gradient-to-br from-teal-500 to-cyan-600",
    },
    {
      key: "repair",
      icon: Wrench,
      title: "Repair & Rework",
      short: "Board-level repairs and certified quality checks.",
      description:
        "Component-level repair, conformal coating, and test validation to ensure repaired units meet original specifications.",
      bullets: ["Component replacement", "IPC-level rework", "Functional verification"],
      color: "bg-gradient-to-br from-purple-600 to-violet-500",
    },
    {
      key: "parts",
      icon: Package,
      title: "Spare Parts & Upgrades",
      short: "Keep stock moving and avoid obsolescence.",
      description:
        "Parts sourcing, retrofit programs and obsolescence planning to extend product life and reduce total cost of ownership.",
      bullets: ["Kitted spares", "Retrofit engineering", "Obsolescence tracking"],
      color: "bg-gradient-to-br from-orange-400 to-amber-500",
    },
  ]

  const supportChannels = [
    { icon: Phone, title: "Phone", line: "+91 88669 68821", },
    { icon: Mail, title: "Email", line: "info@jinst.in" },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */
        <header
          ref={heroRef}
          className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 py-12 md:py-16"
          aria-labelledby="hero-heading"
        >
          {/* PCB patterned background (SVG) */}
          <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#083344" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#006479" stopOpacity="0.06" />
                </linearGradient>
                <pattern id="pcb" width="120" height="120" patternUnits="userSpaceOnUse">
                  <rect width="120" height="120" fill="url(#g1)" />
                  <g stroke="#0ea5a4" strokeWidth="1" strokeOpacity="0.12" fill="none">
                    <path d="M10 20 H110" />
                    <path d="M20 10 V110" />
                    <circle cx="30" cy="30" r="3" />
                    <circle cx="90" cy="90" r="3" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pcb)" />

              {/* subtle animated traces */}
              <g stroke="#00ffd0" strokeWidth="1.5" strokeOpacity="0.08" fill="none">
                <path className="trace" d="M100 120 C220 40, 380 200, 500 120 S820 40, 980 120" />
                <path className="trace" d="M120 380 C260 300, 420 460, 560 380 S760 300, 920 380" />
              </g>
            </svg>
          </div>

          <style jsx>{`
          .trace {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: dash 6s linear infinite;
          }
          @keyframes dash {
            to { stroke-dashoffset: 0; }
          }
        `}</style>

          <div className="w-full max-w-none px-6 md:px-12 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/90 backdrop-blur px-4 py-2 border border-slate-200 shadow-sm mb-6">
                  <HeadphonesIcon className="h-5 w-5 text-cyan-600" aria-hidden />
                  <span className="text-sm font-medium text-cyan-700">After‑Sales Support</span>
                </div>

                <h1 id="hero-heading" className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  Support that keeps your products
                  <br />
                  <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">working reliably</span>
                </h1>

                <p className="text-lg text-slate-600 max-w-2xl mb-6">
                  Comprehensive, measurable after-sales services — warranty, diagnostics, repairs and parts — backed by
                  certified engineers and clear SLAs. We specialise in PCB assembly, rework and field reliability.
                </p>

                <div className="flex flex-wrap gap-3 items-center">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 font-semibold">
                    <Link href="/contact" className="flex items-center gap-2">
                      Get Support
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 px-6 py-3 hover:bg-slate-100">
                    <Link href="#services">Explore Services</Link>
                  </Button>

                  <div className="ml-2 text-sm text-slate-500">or call <span className="font-medium text-slate-800">+91 88669 68821</span></div>
                </div>

                <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md">
                  <li className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-cyan-600" />
                    <div>
                      <div className="text-sm font-semibold">&lt; 2 hrs</div>
                      <div className="text-xs text-slate-500">Avg response</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="text-sm font-semibold">98%</div>
                      <div className="text-xs text-slate-500">1st-call resolution</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-amber-500" />
                    <div>
                      <div className="text-sm font-semibold">Certified</div>
                      <div className="text-xs text-slate-500">IPC & field engineers</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-indigo-500" />
                    <div>
                      <div className="text-sm font-semibold">500+</div>
                      <div className="text-xs text-slate-500">clients supported</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5 mt-8 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 border-2 border-slate-100">
                  {/* replace with your PCB assembly hero image - put an image named https://www.newburyelectronics.co.uk/wp-content/uploads/2018/12/pcb-assembly-machine.jpg in public folder */}
                  <Image src="https://www.newburyelectronics.co.uk/wp-content/uploads/2018/12/pcb-assembly-machine.jpg" alt="PCB assembly" fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent to-white/30 mix-blend-overlay" />
                  <div className="absolute left-4 bottom-4 bg-black/40 text-white text-xs px-3 py-1 rounded">SMT Line • Reflow • AOI</div>
                </div>
              </div>
            </div>
          </div>
        </header>
      }
      {/* SERVICES (tabbed + cards) */}
      <section id="services" className="py-12 md:py-16 bg-gray-50">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Comprehensive Support Services</h2>
              <nav aria-label="Service tabs" className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-hide">
                {services.map((s, i) => (
                  <button
                    key={s.key}
                    onClick={() => setActiveServiceIndex(i)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-colors ${i === activeServiceIndex
                      ? "bg-white shadow border border-slate-200"
                      : "text-slate-600 hover:bg-white/80"
                      }`}
                    aria-pressed={i === activeServiceIndex ? "true" : "false"}
                  >
                    <s.icon className="inline-block mr-2 -mt-0.5 h-4 w-4 text-cyan-600" />
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Left: active service details */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${services[activeServiceIndex].color}`}>
                        {React.createElement(services[activeServiceIndex].icon, { className: "h-6 w-6 text-white" })}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{services[activeServiceIndex].title}</h3>
                        <p className="text-sm text-slate-600 mb-3">{services[activeServiceIndex].short}</p>

                        <p className="text-sm text-slate-700 mb-4">{services[activeServiceIndex].description}</p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {services[activeServiceIndex].bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>


                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Compact grid of all services for quick scanning */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((s, i) => (
                    <article
                      key={s.key}
                      className={`p-4 rounded-xl border ${i === activeServiceIndex ? "border-cyan-200 shadow" : "border-slate-100"} bg-white`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${s.color}`}>
                          <s.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{s.title}</h4>
                          <p className="text-sm text-slate-600">{s.short}</p>
                        </div>
                      </div>

                      <div className="mt-3">
                        <Button
                          size="sm"
                          variant={i === activeServiceIndex ? undefined : "outline"}
                          className="mt-2"
                          onClick={() => setActiveServiceIndex(i)}
                        >
                          {i === activeServiceIndex ? "Selected" : "View"}
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Right: contact / channels */}
              <aside className="space-y-4">
                <Card className="p-4">
                  <CardContent className="p-0">
                    <div className="mb-3">
                      <h4 className="text-lg font-semibold">Contact support</h4>
                      <p className="text-sm text-slate-600">Choose a channel and we'll reply quickly.</p>
                    </div>

                    <div className="grid gap-3">
                      {supportChannels.map((c) => (
                        <div key={c.title} className="flex items-center gap-3 p-2 rounded-md border border-slate-100 bg-white">
                          <c.icon className="h-5 w-5 text-cyan-600" />
                          <div className="flex-1">
                            <div className="font-medium">{c.title}</div>
                            <div className="text-sm text-slate-600">{c.line}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* <div className="mt-4 text-center">
                      <Button size="sm" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                        Open Support Portal
                      </Button>
                    </div> */}
                  </CardContent>
                </Card>

                <Card className="p-4">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-2">Why customers choose us</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                        <span>Clear SLAs and transparent reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-4 w-4 text-cyan-600 mt-0.5" />
                        <span>Dedicated account teams for enterprise clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-amber-500 mt-0.5" />
                        <span>Rapid response and prioritized handling for critical issues</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Need help right now?</h3>
              <p className="text-sm opacity-90">Contact our support team or open a ticket in the portal.</p>
            </div>
            <div className="flex gap-3">
              <Button size="default" className="bg-white text-cyan-700 font-semibold px-4 py-2">
                <Link href="/contact">Contact Support</Link>
              </Button>

            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-slate-50">
        <div className="w-full max-w-none px-6 md:px-12 mx-auto text-sm text-slate-600">© {new Date().getFullYear()} JayShree Instruments — All rights reserved.</div>
      </footer>
    </main>
  )
}
