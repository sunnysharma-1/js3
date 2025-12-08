import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Jayshree Instruments - Electronics Manufacturing Services (EMS) India",
  description:
    "Leading EMS company in India offering PCB Assembly, Wire Harness, Box Build, Prototyping & Design Engineering. ISO 9001 certified with 20+ years experience. Trusted by startups, corporates & OEMs.",
  keywords: [
    "Electronics Manufacturing Services",
    "EMS India",
    "PCB Assembly",
    "Wire Harness",
    "Box Build",
    "Prototyping",
    "Design Engineering",
    "Contract Manufacturing",
    "Electronics Assembly",
  ],
  authors: [{ name: "Jayshree Instruments" }],
  creator: "Jayshree Instruments",
  publisher: "Jayshree Instruments",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.jayshreeinstruments.com",
    siteName: "Jayshree Instruments",
    title: "Jayshree Instruments - Your EMS Partner",
    description:
      "Leading Electronics Manufacturing Services provider in India. PCB Assembly, Prototyping, Wire Harness & Design Engineering.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jayshree Instruments - Electronics Manufacturing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayshree Instruments - Electronics Manufacturing Services",
    description: "Leading EMS provider in India. PCB Assembly, Prototyping, Wire Harness & Design Engineering.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          {children}
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
