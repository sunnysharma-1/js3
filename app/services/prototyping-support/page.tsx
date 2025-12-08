import type { Metadata } from "next"
import PrototypingSupportClient from "./PrototypingSupportClient"

export const metadata: Metadata = {
  title: "Prototyping Support Services - Student, Faculty & Startup EMS Support | Jayshree Instruments",
  description:
    "Rapid PCB prototyping services for students, colleges, faculty research projects, and startups. Design consultation, circuit simulation, PCB prototyping, assembly & validation. Fast, affordable, and IP-protected.",
  keywords: [
    "Rapid PCB Prototyping",
    "Student EMS Support",
    "Prototype PCB India",
    "College PCB Projects",
    "Faculty Research PCB",
    "Startup Prototyping Services",
    "Circuit Simulation Services",
    "PCB Design Consultation",
  ],
  openGraph: {
    title: "Prototyping Support Services | Jayshree Instruments",
    description: "Bring your ideas to life with our rapid prototyping services for students, faculty, and startups",
    images: ["/prototype-pcb-assembly.jpg"],
  },
}

export default function PrototypingSupportPage() {
  return <PrototypingSupportClient />
}
