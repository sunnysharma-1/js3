import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at Jayshree Instruments - Join Our Team",
  description:
    "Explore exciting career opportunities at Jayshree Instruments. We're hiring talented engineers, technicians, and professionals for EMS manufacturing roles.",
  openGraph: {
    title: "Careers at Jayshree Instruments",
    description: "Join our team and build the future of electronics manufacturing",
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
