"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, Users, Heart, TrendingUp, Target, Award, CheckCircle2, MapPin, Clock, X, Upload, Linkedin, Globe } from 'lucide-react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

export default function CareersPage() {
  const openPositions = [
    {
      title: "PCB Design Engineer",
      department: "Engineering",
      location: "Gandhinagar, Gujarat",
      type: "Full-time",
      experience: "3-5 years",
      category: "Technical",
      description:
        "We're looking for experienced PCB design engineers to join our growing team. Design cutting-edge circuit boards for innovative products.",
      skills: ["Altium Designer", "Signal Integrity", "Manufacturing Design", "Schematic Capture"],
    },
    {
      title: "Manufacturing Technician",
      department: "Production",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      category: "Technical",
      description:
        "Join our manufacturing team and help produce high-quality electronics. Work with automated assembly lines and quality control systems.",
      skills: ["SMT Assembly", "Quality Assurance", "Troubleshooting", "Documentation"],
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "5+ years",
      category: "Non-Technical",
      description:
        "Lead cross-functional teams to deliver projects on time and within budget. Manage client relationships and oversee production timelines.",
      skills: ["Project Management", "Client Relations", "Supply Chain", "Budget Planning"],
    },
    {
      title: "Quality Assurance Engineer",
      department: "Quality",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-3 years",
      category: "Technical",
      description:
        "Ensure our products meet the highest quality standards. Develop testing procedures and oversee quality control processes.",
      skills: ["IPC Standards", "Testing Equipment", "Data Analysis", "Compliance"],
    },
    {
      title: "Sales Engineer",
      department: "Sales",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "3-7 years",
      category: "Non-Technical",
      description:
        "Support our sales team by providing technical expertise to clients. Identify opportunities and build long-term customer relationships.",
      skills: ["Electronics Knowledge", "Sales Strategy", "Communication", "Client Support"],
    },
    {
      title: "Electronics Technician",
      department: "Technical Support",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "1-3 years",
      category: "Technical",
      description:
        "Provide technical support and troubleshooting for our products. Assist customers with installation and optimization.",
      skills: ["Troubleshooting", "Customer Service", "Technical Knowledge", "Documentation"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive, innovative environment.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities, training programs, and clear advancement paths.",
    },
    {
      icon: Target,
      title: "Flexible Work",
      description: "Flexible schedules and remote work options where applicable.",
    },
    {
      icon: Award,
      title: "Performance Incentives",
      description: "Competitive bonuses and rewards for outstanding performance.",
    },
    {
      icon: Briefcase,
      title: "Professional Development",
      description: "Certifications, workshops, and industry conference attendance.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and continuous improvement in everything we do.",
    },
    {
      title: "Quality",
      description: "Excellence is non-negotiable. We maintain the highest standards in all aspects.",
    },
    {
      title: "Integrity",
      description: "We build trust through honest communication and ethical practices.",
    },
    {
      title: "Collaboration",
      description: "Together, we achieve more. Teamwork and cooperation drive our success.",
    },
  ]

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ACCEPTED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

  const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().regex(/^\+?[\d\s-]{10,}$/, "Please enter a valid phone number (min 10 digits)"),
    position: z.string().min(1, "Please select a position"),
    experience: z.string().min(1, "Please enter your years of experience"),
    linkedin: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
    portfolio: z.string().url("Please enter a valid Portfolio URL").optional().or(z.literal("")),
    cv: z
      .any()
      .refine((files) => files?.length > 0, "CV is required")
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
      .refine(
        (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        "Only .pdf, .doc, and .docx formats are supported."
      ),
  })

  type FormData = z.infer<typeof formSchema>

  const [selectedDepartment, setSelectedDepartment] = useState<string>("All")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [search, setSearch] = useState<string>("")
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      linkedin: "",
      portfolio: "",
    }
  })

  const cvFile = watch("cv");

  const departments = useMemo(
    () => ["All", ...Array.from(new Set(openPositions.map((p) => p.department)))],
    [openPositions]
  )

  const filteredPositions = useMemo(
    () =>
      openPositions.filter((position) => {
        const matchesDept = selectedDepartment === "All" || position.department === selectedDepartment
        const matchesCategory = selectedCategory === "All" || position.category === selectedCategory
        const haystack = `${position.title} ${position.location} ${position.department} ${position.description}`.toLowerCase()
        const matchesSearch = haystack.includes(search.toLowerCase())
        return matchesDept && matchesCategory && matchesSearch
      }),
    [openPositions, selectedDepartment, selectedCategory, search]
  )

  const handleApplyClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle)
    setValue("position", positionTitle)
    setIsApplicationOpen(true)
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log("Application submitted:", data)
    alert(`Application submitted successfully! We'll review your CV and get back to you soon.`)
    setIsApplicationOpen(false)
    reset()
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#020617] py-16 sm:py-24 lg:pb-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

        <div className="relative w-full max-w-none px-6 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8 backdrop-blur-sm">
                <Briefcase className="h-4 w-4" />
                <span>Careers at Jayshree Instruments</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Build the Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Electronics Manufacturing
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Join a team of innovators, engineers, and problem solvers. We're shaping the world of electronics with precision, quality, and passion.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#open-positions">
                  <Button className="rounded-full bg-blue-600 px-8 py-6 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:scale-105">
                    View Open Positions
                  </Button>
                </a>
                <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors">
                  Learn more about us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 flow-root sm:mt-24"
          >
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-full rounded-xl bg-gray-900/5 object-cover shadow-2xl ring-1 ring-gray-900/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-white">
                    <div>
                      <div className="text-xl md:text-3xl font-bold text-blue-400">150+</div>
                      <div className="text-xs md:text-sm text-slate-400 mt-1">Team Members</div>
                    </div>
                    <div>
                      <div className="text-xl md:text-3xl font-bold text-indigo-400">25+</div>
                      <div className="text-xs md:text-sm text-slate-400 mt-1">Years of Excellence</div>
                    </div>
                    <div>
                      <div className="text-xl md:text-3xl font-bold text-purple-400">2</div>
                      <div className="text-xs md:text-sm text-slate-400 mt-1">Global Locations</div>
                    </div>
                    <div>
                      <div className="text-xl md:text-3xl font-bold text-emerald-400">100%</div>
                      <div className="text-xs md:text-sm text-slate-400 mt-1">Employee Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="relative overflow-hidden bg-[#0B1120] px-6 md:px-12 py-12 lg:py-16">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

        <div className="relative w-full max-w-none mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why join
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                {" "}
                Jayshree Instruments
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-400 sm:text-lg max-w-3xl mx-auto">
              We focus on doing great work, learning fast, and keeping the environment transparent, human, and
              collaborative.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 transition-all hover:border-blue-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-white">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* VALUES + LIFE AT EH */}
      <section className="bg-white px-6 md:px-12 py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

        <div className="w-full max-w-none mx-auto flex flex-col gap-16 lg:flex-row relative z-10">
          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  core values
                </span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                These principles guide how we work together, how we treat customers, and how we build products.
              </p>
            </div>

            <div className="grid gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md hover:shadow-blue-500/5"
                >
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Life at Electronics Hero */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="relative h-full overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
              <Image
                src="https://laiblogstorage.blob.core.windows.net/posts/_638155443138816303.jpeg"
                alt="Life at Electronics Hero"
                fill
                className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Life at Jayshree Instruments</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-slate-200 text-sm">Hands-on work with real boards, harnesses, and hardware builds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-slate-200 text-sm">Transparent goals with regular 1:1s and feedback loops.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-slate-200 text-sm">Celebrations for milestones, launches, and team wins.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-slate-200 text-sm">Learning budget for courses, certifications, and conferences.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="bg-slate-50 px-6 md:px-12 py-12 lg:py-16">
        <div className="w-full max-w-none mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Open{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                positions
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg max-w-3xl mx-auto">
              Browse current openings or reach out if your profile doesn&apos;t fit perfectly — we&apos;d still love to
              hear from you.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10 flex flex-col gap-6 rounded-3xl border border-white bg-white p-6 shadow-xl shadow-slate-200/50 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-wrap gap-2">
              {["All", "Technical", "Non-Technical"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${selectedCategory === category
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {category}
                </button>
              ))}

              <div className="h-8 w-px bg-slate-200 mx-2 hidden sm:block" />

              {departments
                .filter((d) => d !== "All")
                .map((dept) => {
                  const isActive = selectedDepartment === dept
                  return (
                    <button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                        }`}
                    >
                      {dept}
                    </button>
                  )
                })}
            </div>

            <div className="w-full sm:w-72">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Target className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search roles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border-0 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
          </motion.div>

          {/* Positions list */}
          <div className="space-y-4">
            {filteredPositions.length === 0 && (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">No roles found</h3>
                <p className="text-slate-500 mb-6">Try adjusting your filters or search terms.</p>
                <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Send us your CV anyway <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            )}

            {filteredPositions.map((position, index) => (
              <motion.div
                key={`${position.title}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{position.title}</h3>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          {position.type}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${position.category === "Technical"
                            ? "bg-purple-50 text-purple-700 border border-purple-100"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                            }`}
                        >
                          {position.category}
                        </span>
                      </div>

                      <p className="mb-6 text-sm text-slate-600 max-w-2xl leading-relaxed">{position.description}</p>

                      <div className="flex flex-wrap gap-6 text-xs font-medium text-slate-500">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        onClick={() => handleApplyClick(position.title)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE HIRING PROCESS */}
      <section className="bg-[#0B1120] px-6 md:px-12 py-12 lg:py-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              hiring process
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            We move fast but keep things human and transparent at every step.
          </p>

          <div className="mt-16 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent hidden md:block -translate-y-1/2" />

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {[
                { step: "01", title: "Apply", text: "Share your CV and a short note about what you'd like to work on." },
                { step: "02", title: "Talk", text: "Intro call to understand your experience, goals, and fit." },
                { step: "03", title: "Task", text: "Role-specific assignment or technical discussion where relevant." },
                {
                  step: "04",
                  title: "Offer",
                  text: "We share a clear offer, expectations, and growth plan before you join.",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="relative group"
                >
                  <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 shadow-xl group-hover:border-blue-500/50 group-hover:shadow-blue-500/20 transition-all duration-300">
                    <span className="text-xl font-bold text-blue-500 group-hover:text-blue-400">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* FINAL CTA - Dark Premium Tech Redesign */}
      {/* FINAL CTA - Clean & Bold Engineering */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Decorative Circuit Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        <div className="absolute top-1/2 left-0 w-24 h-24 border-t border-r border-blue-500/30 rounded-tr-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-24 h-24 border-b border-l border-blue-500/30 rounded-bl-3xl -translate-y-1/2" />

        <div className="relative w-full max-w-none px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-mono font-medium text-blue-400 uppercase tracking-wider">Engineering The Future</span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Ready to <span className="text-blue-500">Engineer</span> <br />
              Your Next Chapter?
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed">
              Join a team where precision meets passion. We are building the next generation of electronics with advanced manufacturing and cutting-edge design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => handleApplyClick("")}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-blue-500 rounded-lg overflow-hidden transition-transform active:scale-95 hover:bg-blue-400"
              >
                <span className="relative z-10">Start Your Application</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <a href="#open-positions">
                <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white border border-slate-700 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
                  View Open Roles
                </button>
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-slate-800 pt-10">
              {[
                { label: "Growth", value: "Unlimited" },
                { label: "Culture", value: "Innovative" },
                { label: "Impact", value: "Global" },
                { label: "Team", value: "World-class" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <dt className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-1">{stat.label}</dt>
                  <dd className="text-xl font-bold text-white">{stat.value}</dd>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {isApplicationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-900">Apply Now</h2>
              <button
                onClick={() => setIsApplicationOpen(false)}
                className="text-slate-500 hover:text-slate-700"
                title="Close"
                aria-label="Close application form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 max-h-[80vh] overflow-y-auto">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Full Name *</label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Enter your full name"
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">Email Address *</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">Phone Number *</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="Enter your phone number"
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Position */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">Position *</label>
                  <select
                    {...register("position")}
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${errors.position ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((pos) => (
                      <option key={pos.title} value={pos.title}>
                        {pos.title}
                      </option>
                    ))}
                  </select>
                  {errors.position && <p className="mt-1 text-xs text-red-500">{errors.position.message}</p>}
                </div>

                {/* Experience */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">Experience (Years) *</label>
                  <input
                    type="number"
                    {...register("experience")}
                    placeholder="e.g. 3"
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${errors.experience ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                  />
                  {errors.experience && <p className="mt-1 text-xs text-red-500">{errors.experience.message}</p>}
                </div>
              </div>

              {/* LinkedIn & Portfolio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-blue-600" /> LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    {...register("linkedin")}
                    placeholder="https://linkedin.com/in/..."
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${errors.linkedin ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                  />
                  {errors.linkedin && <p className="mt-1 text-xs text-red-500">{errors.linkedin.message}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-emerald-600" /> Portfolio URL
                  </label>
                  <input
                    type="url"
                    {...register("portfolio")}
                    placeholder="https://..."
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${errors.portfolio ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
                  />
                  {errors.portfolio && <p className="mt-1 text-xs text-red-500">{errors.portfolio.message}</p>}
                </div>
              </div>

              {/* CV Upload */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Upload CV (PDF/Word, max 5MB) *</label>
                <div className="relative">
                  <input
                    type="file"
                    {...register("cv")}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 text-center transition ${errors.cv ? 'border-red-300 bg-red-50 hover:bg-red-100' : 'border-blue-300 bg-blue-50 hover:border-blue-500 hover:bg-blue-100'}`}
                  >
                    <Upload className={`h-5 w-5 ${errors.cv ? 'text-red-500' : 'text-blue-600'}`} />
                    <div className="text-sm">
                      <p className={`font-medium ${errors.cv ? 'text-red-700' : 'text-blue-700'}`}>
                        {cvFile && cvFile.length > 0 ? cvFile[0].name : "Click to upload CV"}
                      </p>
                    </div>
                  </label>
                </div>
                {errors.cv && <p className="mt-1 text-xs text-red-500">{errors.cv.message as string}</p>}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </main>
  )
}
