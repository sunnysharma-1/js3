"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  ChevronDown,
  Cpu,
  Wrench,
  Cable,
  Pencil,
  Headphones,
  Grid3x3,
  Lightbulb,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { motion } from "framer-motion"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
  ]

  const serviceLinks = [
    {
      href: "/services",
      label: "All Services",
      icon: Grid3x3,
      description: "View our complete service portfolio",
    },
    {
      href: "/services/pcb",
      label: "PCB Assembly",
      icon: Cpu,
      description: "SMT & Through-hole assembly",
    },
    {
      href: "/services/prototyping",
      label: "Prototype – Development & Support",
      icon: Wrench,
      description: "Rapid prototyping solutions",
    },
    {
      href: "/services/box-build",
      label: "Build Box",
      icon: Grid3x3,
      description: "Complete box assembly",
    },
    {
      href: "/services/wire-harness",
      label: "Wire Harness & Cable Harness",
      icon: Cable,
      description: "Custom cable assemblies",
    },
    {
      href: "/services/global-purchasing",
      label: "Global Purchase",
      icon: Lightbulb,
      description: "Parts sourcing & procurement",
    },
    {
      href: "/services/design-engineering",
      label: "Design Engineering",
      icon: Pencil,
      description: "PCB design & engineering",
    },
    {
      href: "/services/after-sales-support",
      label: "After Sales Support",
      icon: Headphones,
      description: "Warranty & technical support",
    },
  ]

  const isServicesActive = pathname.startsWith("/services")

  return (
    <header >
      {/* UPDATES FOR DESKTOP:
        1. max-w-7xl: Prevents content from stretching too wide on 4k screens.
        2. mx-auto: Centers the content.
        3. h-20: Fixed height for consistency (instead of arbitrary h-23).
      */}
      <div className="mx-auto flex h-21 w-full max-w-7xl items-center justify-between px-8 sm:px-6 lg:px-6">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center shrink-0">
          {/* UPDATES:
            Resized the container to fit the header height (h-14). 
            The original h-60 was too large for a standard sticky navbar.
          */}
          <div className="relative h-60 w-60 md:h-70 md:w-60">
            <Image
              src="/images/design-mode/Black_and_White_Circular_Art___Design_Logo__1_-removebg-preview.png"
              alt="Jayshree Instruments Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Optional: Add Company Name text next to logo for better desktop visibility if needed */}
          {/* <span className="ml-2 text-xl font-bold hidden xl:block">Jayshree</span> */}
        </Link>

        {/* Desktop Navigation - Center */}
        {/* UPDATES:
           1. lg:gap-6 xl:gap-10: Adjusts spacing based on screen size (tighter on laptops, wider on large screens).
           2. text-sm xl:text-base: Adjusts font size for readability.
        */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold xl:text-base transition-colors hover:text-[#4A90E2] after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:bg-[#4A90E2] after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#4A90E2] after:w-full"
                    : "text-gray-700 after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm xl:text-base font-semibold transition-colors hover:text-[#4A90E2] focus:outline-none data-[state=open]:text-[#4A90E2] ${
                isServicesActive ? "text-[#4A90E2]" : "text-gray-700"
              }`}
            >
              Services
              <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-80 p-2 mt-2">
              <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">
                Our Services
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[60vh] overflow-y-auto">
                {serviceLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={`cursor-pointer flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-blue-50 ${
                          index === 0
                            ? "bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100"
                            : ""
                        }`}
                      >
                        <div
                          className={`mt-0.5 ${
                            index === 0 ? "text-[#4A90E2]" : "text-gray-500"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div
                            className={`font-medium ${
                              index === 0 ? "text-[#4A90E2]" : "text-gray-900"
                            }`}
                          >
                            {link.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">
                            {link.description}
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Contact Info - Desktop */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
          <div className="flex items-center gap-2 text-sm xl:text-base">
            <a
              href="tel:+918866968821"
              className="text-gray-700 hover:text-[#4A90E2] transition-colors whitespace-nowrap"
            >
              +91 88669 68821
            </a>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-[#00A896] to-[#008C7A] hover:from-[#008C7A] hover:to-[#00A896] text-white rounded-lg px-6 font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:hidden"
          >
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="relative group h-11 px-2 md:px-6 rounded-full overflow-hidden bg-transparent hover:bg-transparent"
              >
                {/* Gradient Border/Background Layer */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0066CC] to-[#00A896] p-[2px]">
                  <span className="absolute inset-0 rounded-full bg-white transition-opacity duration-300 group-hover:opacity-0" />
                </span>

                {/* Content */}
                <span className="relative flex items-center gap-3 px-4">
                  {/* Custom Hamburger Icon */}
                  <div className="flex flex-col gap-[4px] items-end justify-center py-1">
                    <span className="w-5 h-0.5 bg-[#0066CC] rounded-full group-hover:bg-white transition-all duration-300" />
                    <span className="w-3 h-0.5 bg-[#00A896] rounded-full group-hover:bg-white group-hover:w-5 transition-all duration-300" />
                    <span className="w-5 h-0.5 bg-[#0066CC] rounded-full group-hover:bg-white transition-all duration-300" />
                  </div>
                </span>
              </Button>
            </SheetTrigger>
          </motion.div>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col px-4 overflow-y-auto">
            {/* ✨ Hero Card / Interesting Design Block */}
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 shadow-lg relative overflow-hidden shrink-0">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" />
              <div className="absolute -left-16 bottom-0 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300/80">
                    Precision Electronics
                  </p>
                  <p className="text-sm font-semibold leading-tight mt-0.5">
                    End-to-End EMS Partner
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                  PCB Assembly
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                  Box Build
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                  Wire Harness
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-200/80">
                <div className="flex flex-col items-end">
                  <span className="font-semibold text-sm">100%+</span>
                  <span>Quality Focus</span>
                </div>
              </div>
            </div>

            {/* ⚡ Quick Actions */}
            <div className="mt-4 grid grid-cols-2 gap-3 shrink-0">
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-xl border-dashed border-[#4A90E2]/40 text-xs font-medium flex items-center justify-center gap-1"
              >
                <Link href="/services" onClick={() => setIsOpen(false)}>
                  View Services
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-10 rounded-xl bg-gradient-to-r from-[#00A896] to-[#008C7A] text-xs font-medium text-white shadow-md hover:shadow-lg"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </Button>
            </div>

            <div className="mt-5 space-y-2 flex-1">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.18em]">
                  Navigation
                </span>
              </div>

              {/* Primary pages */}
              <nav className="flex flex-col gap-2 mt-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3 py-2 text-base font-semibold transition-colors ${
                        isActive
                          ? "bg-blue-50 text-[#1D4ED8] border border-blue-100"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{link.label}</span>
                    </Link>
                  )
                })}

                {/* Services - collapsible in mobile */}
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className={`mt-2 flex w-full items-center justify-between rounded-xl px-3 py-2 text-base font-semibold transition-colors border ${
                    isServicesActive
                      ? "bg-blue-50 text-[#1D4ED8] border-blue-200"
                      : "text-gray-700 hover:bg-gray-100 border-gray-200/70"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>Services</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 border border-emerald-100">
                      Core Offering
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 space-y-1 pl-3 border-l border-gray-200">
                    {serviceLinks.map((link, index) => {
                      const Icon = link.icon
                      const isActive = pathname === link.href
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-start gap-3 rounded-lg px-2 py-2 text-xs transition-colors ${
                            isActive
                              ? "bg-blue-50 text-[#1D4ED8]"
                              : index === 0
                              ? "bg-gradient-to-r from-blue-50 to-teal-50 text-[#2563EB]"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <div className="mt-0.5">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-semibold">{link.label}</div>
                            <div className="text-[11px] text-gray-500">
                              {link.description}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </nav>
            </div>

            {/* Bottom: Contact & CTA */}
            <div className="border-t pt-4 mt-3 mb-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="text-[10px] uppercase text-gray-400 mb-0.5 tracking-[0.18em]">
                    Call Us
                  </div>
                  <a
                    href="tel:+918866968821"
                    className="font-semibold text-gray-800 hover:text-[#4A90E2]"
                  >
                    +91 88669 68821
                  </a>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-[#00A896] to-[#008C7A] hover:from-[#008C7A] hover:to-[#00A896] text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 h-11"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}