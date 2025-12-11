"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CircuitBoard } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-slate-950">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#0f172a,transparent)]" />
      </div>

      {/* Animated Circuit Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Floating Schematic Elements */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-64 h-64 border border-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-10 w-80 h-80 border border-emerald-500/20 rounded-full blur-3xl"
      />

      <div className="relative w-full max-w-none px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8">
            <CircuitBoard className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-mono font-medium text-blue-400 uppercase tracking-wider">Engineering Precision</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Ready to Scale Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              Electronic Production?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with an EMS provider that prioritizes your success. Precision, Quality, and Reliability — delivered on time, every time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
            >
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-lg border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-full transition-all backdrop-blur-sm"
            >
              <Link href="/contact">
                Book a Factory Visit
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              ISO 9001:2015 Certified
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              IPC Class 2 & 3 Standards
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
              Rapid Turnaround
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
