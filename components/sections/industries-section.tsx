"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Car, Heart, Factory, Leaf, Smartphone, Radio, ArrowRight, CheckCircle2 } from "lucide-react"

const industries = [
  {
    id: 1,
    name: "Automotive Electronics",
    icon: Car,
    description:
      "We manufacture rigorous Class 3 boards for EV powertrains and ADAS modules. Our lines are equipped for trace-level auditing required by ISO 26262.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop",
    highlights: ["EV Battery Management", "ADAS Sensor Fusion", "ISO 26262 Compliant"],
    stats: { projects: "500+", clients: "Marquee OEMs" },
  },
  {
    id: 2,
    name: "Medical Devices",
    icon: Heart,
    description:
      "From patient monitoring to diagnostic imaging, we handle high-mix, low-volume builds with full component traceability as per ISO 13485.",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e2e8b4e9?w=1200&h=800&fit=crop",
    highlights: ["IEC 60601-1 Ready", "ISO 13485 Certified", "Class II & III Devices"],
    stats: { projects: "300+", clients: "MedTech Startups" },
  },
  {
    id: 3,
    name: "Industrial Automation",
    icon: Factory,
    description:
      "Ruggedized PCBs designed to withstand vibration and high temperatures. We build PLCs and motor drives that run 24/7 in harsh factory floors.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop",
    highlights: ["High-Power RF Design", "Conformal Coating", "HMI Systems"],
    stats: { projects: "400+", clients: "Industrial Giants" },
  },
  {
    id: 4,
    name: "Renewable Energy",
    icon: Leaf,
    description:
      "High-current interconnects and power electronics for solar inverters and battery storage systems. We test at full load to ensure field reliability.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop",
    highlights: ["Solar Inverters", "BMS Assembly", "High Voltage Testing"],
    stats: { projects: "250+", clients: "Energy Providers" },
  },
  {
    id: 5,
    name: "IoT & Consumer",
    icon: Smartphone,
    description:
      "Miniaturized 0201 assemblies and BGA mounting for wearables and smart home devices. We handle firmware flashing and plastic enclosure assembly.",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&h=800&fit=crop",
    highlights: ["RF/BLE Tuning", "OTA Firmware", "Box Build"],
    stats: { projects: "600+", clients: "Consumer Brands" },
  },
  {
    id: 6,
    name: "Telecom & 5G",
    icon: Radio,
    description:
      "Controlled impedance boards for high-frequency signal integrity. We manufacture base station sub-units and optical interconnect boards.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop",
    highlights: ["Rogers/High-Freq Materials", "Signal Integrity", "Backplane Assembly"],
    stats: { projects: "350+", clients: "Telecom Majors" },
  },
]

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0)

  const ActiveIcon = industries[activeIndustry].icon

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-none px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">Industries We Serve</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since 2001, Jayshree Instruments has delivered reliable EMS solutions across diverse industries — from
            automotive to medical devices.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side - Industry List */}
          <div className="lg:col-span-2 space-y-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 group ${activeIndustry === index
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 hover:border-blue-300"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg transition-colors ${activeIndustry === index ? "bg-white/20" : "bg-blue-50 group-hover:bg-blue-100"
                        }`}
                    >
                      <Icon className={`w-6 h-6 ${activeIndustry === index ? "text-white" : "text-blue-600"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold">{industry.name}</h3>
                      {activeIndustry === index && (
                        <div className="flex gap-4 mt-2 text-sm">
                          <span className="text-white/90">{industry.stats.projects} Projects</span>
                          <span className="text-white/90">{industry.stats.clients} Clients</span>
                        </div>
                      )}
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform ${activeIndustry === index
                        ? "text-white translate-x-1"
                        : "text-gray-400 group-hover:translate-x-1"
                        }`}
                    />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Side - Industry Details */}
          <div className="lg:col-span-3">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Background Image with Parallax Effect */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out">
                <Image
                  src={industries[activeIndustry].image || "/placeholder.svg"}
                  alt={industries[activeIndustry].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                {/* Icon Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                    <ActiveIcon className="w-6 h-6 text-cyan-400" />
                    <span className="text-white font-semibold">{industries[activeIndustry].name}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-100 text-lg mb-6 leading-relaxed max-w-2xl">
                  {industries[activeIndustry].description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {industries[activeIndustry].highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-white text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-3xl font-bold text-white">{industries[activeIndustry].stats.projects}</div>
                      <div className="text-gray-300 text-sm">Completed Projects</div>
                    </div>
                    <div className="w-px h-12 bg-white/20" />
                    <div>
                      <div className="text-3xl font-bold text-white">{industries[activeIndustry].stats.clients}</div>
                      <div className="text-gray-300 text-sm">Happy Clients</div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/30 px-8">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Number Indicator */}
                <div className="absolute top-8 right-8 text-8xl font-bold text-white/10">
                  {String(industries[activeIndustry].id).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
