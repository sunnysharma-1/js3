"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import React from "react"

export function ServicesSection() {
  const services = [
    {
      key: "pcb",
      title: "PCB Assembly (PCBA)",
      description:
        "Surface Mount (SMT) & Through-Hole (THT) assembly. Capability for 01005 passives, fine-pitch BGAs, QFNs, and PoP technology with 100% AOI coverage.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-pfFT58scAf392uAYx98LXppMxjZnMW.png",
      span: "lg:row-span-2 lg:col-span-1",
    },
    {
      key: "design",
      title: "Design for Manufacturing",
      description:
        "In-depth DFM/DFA analysis to optimize yield, ensure manufacturability, and reduce BOM costs before the first prototype is built.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      span: "lg:col-span-2",
    },
    {
      key: "testing",
      title: "Functional Testing",
      description:
        "Custom test fixture development, In-Circuit Testing (ICT), Flying Probe, and full functional verification to ensure zero-defect shipments.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Testing%201-0jbz8kQVkrc9xoGfCI8B2XpnQ09Vc4.jpg",
      span: "lg:col-span-1",
    },
    {
      key: "sourcing",
      title: "Strategic Component Sourcing",
      description:
        "Global supply chain management with vetted distributors. We handle obsolescence management and ensure full component traceability.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%201-2DfrGR74bngePYWCEn40HTe7dTjgFV.webp",
      span: "lg:col-span-2",
    },
    {
      key: "wire-harness",
      title: "Wire Harnessing",
      description:
        "Automated cutting, stripping, and crimping for complex wire harnesses and industrial cable assemblies.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Harness-DcMFYx4fME7FgHmKZz7zIIJVyVD8hO.avif",
      span: "lg:col-span-1",
    },
  ]

  /**
   * slugMap: maps service.key to the URL you want.
   * Update these to exactly match the routes in your Header or router.
   */
  const slugMap: Record<string, string> = {
    "pcb": "/services/pcb",
    "design": "/services/design-engineering",
    "testing": "/services/prototyping", // change to /services/pcb-testing or /services/quality if you prefer
    "sourcing": "/services/global-purchasing", // change to match your route
    "wire-harness": "/services/wire-harness",
  }

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="w-full max-w-none px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0066CC]">Comprehensive EMS Capabilities</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Specializing in High-Mix, Low-Volume to Medium-Volume production with IPC Class 3 quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {services.map((service, index) => {
            const href = slugMap[service.key] ?? "/services" // fallback
            return (
              <Link
                key={service.key}
                href={href}
                className={`relative group overflow-hidden rounded-lg ${service.span} block focus:outline-none focus:ring-4 focus:ring-[#00A896]/20`}
                aria-label={`Open ${service.title} page`}
              >
                {/* Image (parent must be position:relative for Image fill) */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>

                  <p className="text-white/90 text-sm leading-relaxed mb-4 max-h-20 overflow-hidden">
                    {service.description}
                  </p>

                  <div className="flex justify-end">
                    <Button
                      variant="secondary"
                      className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 shadow-sm"
                      asChild
                    >
                      <div>Read More</div>
                    </Button>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
