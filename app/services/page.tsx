import type { Metadata } from "next"
import ServicesClient from "./ServicesClient"

export const metadata: Metadata = {
  title: "Electronics Manufacturing Services - PCB Assembly, Prototyping & More | Jayshree Instruments",
  description:
    "Comprehensive EMS solutions including PCB Assembly (SMT/THT), Rapid Prototyping, Wire Harness, Box Build & Design Engineering. ISO certified facility with 20+ years experience.",
  keywords: [
    "PCB Assembly Services",
    "Electronics Prototyping",
    "Wire Harness Manufacturing",
    "Box Build Assembly",
    "Design Engineering",
    "EMS Services India",
  ],
  openGraph: {
    title: "Electronics Manufacturing Services | Jayshree Instruments",
    description: "Comprehensive EMS solutions from PCB Assembly to Design Engineering",
    images: ["/electronics-manufacturing-facility-wide.jpg"],
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
