"use client"

import { useMemo, useState } from "react"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const featuredPost = {
  id: 1,
  title: "Top PCB Testing Methods Used by Indian EMS Companies",
  excerpt:
    "Printed Circuit Board (PCB) testing is a critical process in the electronics manufacturing industry, especially in India, where electronics manufacturing is growing rapidly. Learn about the essential testing methods used by professional EMS providers.",
  category: "PCB",
  date: "March 2025",
  readTime: "6 min read",
  image: "/pcb-testing-methods-electronics.jpg",
  author: "Nirav Patel",
  slug: "top-pcb-testing-methods-indian-ems",
}

const blogPosts = [
  {
    id: 2,
    title: "Why Box Build Assembly Is Critical for Industrial Automation Systems",
    excerpt:
      "Industrial automation is the backbone of many industries in India. Explore how box build assembly services support industrial automation systems with efficiency and precision.",
    category: "Box Build Assembly",
    date: "March 2025",
    readTime: "7 min read",
    image: "https://vectorbluehub.com/zdjecia/artykul/80/561/1920x1080/4/Box-Build__153_.JPG",
    author: "Nirav Patel",
    slug: "box-build-assembly-industrial-automation",
  },
  {
    id: 3,
    title: "Design for Manufacturability (DFM): Why It Matters in PCB Design",
    excerpt:
      "In today's electronics world, making products quickly and efficiently is crucial. Learn why DFM principles are essential for successful PCB design and manufacturing.",
    category: "PCB Design",
    date: "March 2025",
    readTime: "8 min read",
    image: "/pcb-design-manufacturability-dfm.jpg",
    author: "Nirav Patel",
    slug: "design-for-manufacturability-pcb",
  },
  {
    id: 4,
    title: "Key Considerations for Wire Harness Assembly for Medical Devices",
    excerpt:
      "Medical devices require sophisticated, compact, and efficient wire harness assemblies. Discover the key considerations and best practices for medical device wire harness manufacturing.",
    category: "Wire Harness",
    date: "February 2025",
    readTime: "7 min read",
    image: "/wire-harness-medical-devices-assembly.jpg",
    author: "Nirav Patel",
    slug: "wire-harness-assembly-medical-devices",
  },
  {
    id: 5,
    title: "Latest Trends in PCB Assembly Automation",
    excerpt:
      "Printed circuit boards power everything from industrial machinery to home appliances. Explore the latest automation technologies transforming the PCB manufacturing scene.",
    category: "PCB",
    date: "February 2025",
    readTime: "6 min read",
    image: "/pcb-assembly-automation-technology.jpg",
    author: "Nirav Patel",
    slug: "latest-trends-pcb-assembly-automation",
  },
  {
    id: 6,
    title: "Top Applications of Wire Harnesses in Industrial Machinery",
    excerpt:
      "Wire harnesses are essential components in virtually every industrial setting. Learn about the diverse applications and importance of quality wire harness design.",
    category: "Wire Harness",
    date: "February 2025",
    readTime: "6 min read",
    image: "/wire-harness-industrial-machinery-applications.jpg",
    author: "Nirav Patel",
    slug: "wire-harness-industrial-machinery-applications",
  },
  {
    id: 7,
    title: "Shielded vs Unshielded Cable Assemblies: Pros & Cons Explained",
    excerpt:
      "When choosing between shielded and unshielded cable assemblies, understanding the differences is crucial. Get detailed insights on pros and cons for various industrial applications.",
    category: "Cable Assembly",
    date: "February 2025",
    readTime: "7 min read",
    image: "/shielded-unshielded-cable-assemblies.jpg",
    author: "Nirav Patel",
    slug: "shielded-vs-unshielded-cable-assemblies",
  },
  {
    id: 8,
    title: "Low-Volume vs High-Volume PCB Assembly: Key Differences",
    excerpt:
      "Whether you're a startup creating prototypes or an established brand scaling up, choosing the right PCB assembly approach is critical for success.",
    category: "PCB",
    date: "January 2025",
    readTime: "8 min read",
    image: "/pcb-assembly-low-volume-high-volume.jpg",
    author: "Nirav Patel",
    slug: "low-volume-high-volume-pcb-assembly",
  },
  {
    id: 9,
    title: "Types of Wiring Harness: A Complete Guide for Modern Applications",
    excerpt:
      "Wiring harnesses are the unsung heroes of modern electrical systems. Understand the major types of wiring harness used in automotive, electronics, and industrial sectors.",
    category: "Wire Harness",
    date: "January 2025",
    readTime: "9 min read",
    image: "/types-wiring-harness-modern-applications.jpg",
    author: "Jayshree Instruments",
    slug: "types-wiring-harness-complete-guide",
  },
]

const categories = ["All", "PCB", "Wire Harness", "Cable Assembly", "Box Build Assembly", "PCB Design"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const filteredPosts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim()

    return blogPosts.filter((post) => {
      const matchCategory =
        selectedCategory === "All" ? true : post.category.toLowerCase() === selectedCategory.toLowerCase()

      const matchSearch =
        term.length === 0
          ? true
          : post.title.toLowerCase().includes(term) ||
          post.excerpt.toLowerCase().includes(term) ||
          post.author.toLowerCase().includes(term)

      return matchCategory && matchSearch
    })
  }, [selectedCategory, searchTerm])

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden py-10 md:py-14 lg:py-16">
        {/* Glows / background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-[#0066CC]/25 blur-3xl"
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#00A896]/25 blur-3xl"
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1.1, 1, 1.1] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937_0,_#020617_55%)] opacity-95" />
        </div>

        <div className="relative z-10 w-full max-w-none px-6 sm:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)]">
            {/* Left: copy, search, category pills */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-100 backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Knowledge Hub
              </div>

              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                  Insights from the{" "}
                  <span className="bg-gradient-to-r from-[#4CC2FF] via-[#3FD1C6] to-[#00A896] bg-clip-text text-transparent">
                    Electronics Manufacturing
                  </span>{" "}
                  floor.
                </h1>
                <p className="max-w-xl mx-auto lg:mx-0 text-pretty text-sm md:text-base text-slate-200">
                  Deep dives on PCB assembly, wire harnessing, box build, and more—written by engineers and
                  practitioners at Jayshree Instruments.
                </p>
              </div>



              {/* Search + categories (desktop search here) */}
              <div className="space-y-4">
                <div className="relative max-w-md hidden lg:block">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search articles by topic, keyword, or author..."
                    className="h-11 rounded-2xl border border-slate-600 bg-slate-950/70 pl-11 text-sm text-slate-50 placeholder:text-slate-500 focus:border-[#4CC2FF] focus-visible:ring-[#4CC2FF]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {categories.map((category) => {
                    const isActive = category === selectedCategory
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${isActive
                          ? "bg-gradient-to-r from-[#0066CC] to-[#00A896] text-white shadow-md shadow-emerald-500/25"
                          : "border border-slate-600/80 bg-slate-950/70 text-slate-200 hover:border-slate-400 hover:text-slate-50"
                          }`}
                      >
                        {category}
                      </button>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right: Featured article card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#4CC2FF]/20 via-[#00A896]/15 to-transparent blur-3xl" />
              <Card className="relative overflow-hidden rounded-[24px] border border-slate-700/70 bg-slate-900/90 shadow-2xl shadow-black/60">
                <div className="relative h-52 w-full sm:h-60">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                    <Badge className="bg-gradient-to-r from-[#0066CC] to-[#00A896] text-[11px] text-white">
                      Featured
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-black/70 text-[11px] text-slate-100 backdrop-blur border-none"
                    >
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="space-y-4 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {featuredPost.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span className="hidden text-[11px] text-slate-300 sm:inline">
                      By {featuredPost.author}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold leading-snug text-slate-50 sm:text-xl">
                    {featuredPost.title}
                  </h2>
                  <p className="line-clamp-3 text-xs text-slate-200 sm:text-sm">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-300 sm:hidden">By {featuredPost.author}</span>
                    <Button
                      asChild
                      size="sm"
                      className="group bg-gradient-to-r from-[#00C58A] to-[#4CC2FF] text-xs font-medium text-slate-950"
                    >
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read article
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES – LIGHT SECTION */}
      <section className="bg-gradient-to-b from-white to-slate-100 py-10 md:py-14">
        <div className="w-full max-w-none px-6 sm:px-12">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
              <p className="mt-1 text-sm text-slate-600">
                Technical explainers, industry insights, and trending topics from our engineering team.
              </p>
            </div>

            {searchTerm || selectedCategory !== "All" ? (
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <span>
                  Showing <span className="font-semibold text-slate-900">{filteredPosts.length}</span> article
                  {filteredPosts.length !== 1 ? "s" : ""}{" "}
                  {selectedCategory !== "All" && (
                    <>
                      in <span className="font-semibold text-slate-900">{selectedCategory}</span>
                    </>
                  )}
                  {searchTerm && (
                    <>
                      {" "}
                      for &quot;<span className="font-semibold text-slate-900">{searchTerm}</span>&quot;
                    </>
                  )}
                </span>

                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-3 text-xs text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : null}
          </div>

          {/* Mobile Search */}
          <div className="mb-8 lg:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search articles..."
                className="h-11 rounded-xl border border-slate-300 bg-white pl-10 text-sm text-slate-900 placeholder:text-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Content */}
          {filteredPosts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
              No articles match your search. Try different keywords or categories.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute left-3 top-3 bg-slate-900/80 text-white text-[11px]">
                      {post.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col justify-between pb-6">
                    <p className="mb-4 text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>By {post.author}</span>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-medium text-[#0066CC] hover:text-[#00A896]"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* Newsletter Section - Dark Premium Tech Redesign */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#020617]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#020617_100%)] opacity-50" />
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          {/* Glowing Orbs */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066CC] rounded-full blur-[120px] opacity-20"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.2, 1, 1.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00A896] rounded-full blur-[120px] opacity-20"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/50"
          >
            {/* Glass Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 lg:p-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#0066CC]/20 to-[#00A896]/20 border border-white/10 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-medium text-emerald-300 tracking-wide uppercase">Weekly Tech Brief</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Stay Ahead of the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CC2FF] to-[#00A896]">
                    Manufacturing Curve
                  </span>
                </h2>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
                  Join 5,000+ engineers and industry leaders. Get exclusive insights on PCB assembly, DFM strategies, and emerging tech delivered to your inbox.
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-slate-400" /> No spam
                  </span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-slate-400" /> Unsubscribe anytime
                  </span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-slate-400" /> Free forever
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0066CC] to-[#00A896] rounded-2xl opacity-20 blur-lg" />
                <div className="relative bg-slate-950/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider ml-1">
                        Work Email
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#00A896] rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-[2px]" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@company.com"
                          className="relative h-12 bg-slate-900/80 border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus:border-transparent focus:ring-0 transition-all"
                        />
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="w-full h-12 bg-gradient-to-r from-[#0066CC] to-[#00A896] hover:from-[#005bb5] hover:to-[#008c7d] text-white font-semibold rounded-xl shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Subscribe Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
