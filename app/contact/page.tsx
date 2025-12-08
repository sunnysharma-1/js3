"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?[\d\s-]{10,}$/, "Please enter a valid phone number (min 10 digits)"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
})

type FormData = z.infer<typeof formSchema>

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="shadow-md">
        <CardContent className="p-6 md:p-8">
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">Send Us a Message</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Share your details and requirements, and our team will get back to you with the next steps.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  {...register("firstName")}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  {...register("lastName")}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="9876543210"
                {...register("phone")}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" placeholder="Your Company" {...register("company")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Interested In</Label>
              <select
                id="service"
                {...register("service")}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a service</option>
                <option value="pcb">PCB Assembly</option>
                <option value="prototyping">Prototyping</option>
                <option value="wire-harness">Wire Harness &amp; Box Build</option>
                <option value="design">Design Engineering</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* New: File Upload */}
            <div className="space-y-2">
              <Label htmlFor="file">Upload File (Optional)</Label>
              <Input id="file" type="file" />
              <p className="text-xs text-muted-foreground">
                You can attach BOM, Gerber files, drawings, or project documents.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project requirements..."
                rows={5}
                {...register("message")}
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && (
                <p className="text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-[#0066CC] to-[#00A896]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {submitSuccess && (
              <p className="text-center text-sm text-green-600 font-medium">
                Message sent successfully!
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function ContactInfo() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Contact Information</h2>
        <p className="mb-6 text-sm text-muted-foreground md:text-base">
          Reach out to us through any of the following channels. Our team is ready to assist you with your
          electronics manufacturing needs.
        </p>
      </div>

      <div className="space-y-4">
        {/* Address Card */}
        <Card className="shadow-sm">
          <CardContent className="p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <MapPin className="h-6 w-6 text-[#0066CC]" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Address</h3>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Jayshree Instruments</span>
                  <br />
                  <span className="font-semibold">Manufacturing Unit (Come See Our Process):</span>
                  <br />
                  B122, GIDC Rd, Electronic Zone, Sector 25,
                  <br />
                  Gandhinagar, Gujarat 382044
                  <br />
                  <br />
                  <span className="font-semibold">Head Office (Administration):</span>
                  <br />
                  61/D, Omkar Bhavan, Madalpur, Ellisbridge,
                  <br />
                  Ahmedabad, Gujarat 380006
                  <br />
                  India
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Phone Card */}
        <Card className="shadow-sm">
          <CardContent className="p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-50">
                <Phone className="h-6 w-6 text-[#00A896]" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Phone</h3>
                <p className="text-sm text-muted-foreground space-y-1">
                  <span className="block">
                    <a
                      href="tel:+918866968821"
                      className="text-[#00A896] hover:underline"
                    >
                      +91 8866 968 821
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Card */}
        <Card className="shadow-sm">
          <CardContent className="p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <Mail className="h-6 w-6 text-[#0066CC]" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground space-y-1">
                  <span className="block">
                    <a
                      href="mailto:info@jinst.in"
                      className="text-[#0066CC] hover:underline"
                    >
                      info@jinst.in
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hours Card */}
        <Card className="shadow-sm">
          <CardContent className="p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-50">
                <Clock className="h-6 w-6 text-[#00A896]" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Business Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none bg-gradient-to-br from-[#0066CC] to-[#00A896] text-white shadow-md">
        <CardContent className="p-5 md:p-6">
          <h3 className="mb-2 font-semibold">Quick Response Guarantee</h3>
          <p className="text-sm text-white/90">
            We typically respond to all inquiries within 24 hours during business days. For urgent matters,
            please call us directly.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0066CC] to-[#00A896] py-12 md:py-16 text-white">
        <div className="w-full max-w-none px-6 md:px-12">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 text-4xl font-bold text-balance md:mb-6 md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="text-pretty text-base text-white/90 md:text-lg">
              Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon
              as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 md:py-16">
        <div className="w-full max-w-none px-6 md:px-12">
          {/* Mobile View: Tabs */}
          <div className="lg:hidden">
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="form">Send Message</TabsTrigger>
                <TabsTrigger value="info">Contact Info</TabsTrigger>
              </TabsList>
              <TabsContent value="form">
                <ContactForm />
              </TabsContent>
              <TabsContent value="info">
                <ContactInfo />
              </TabsContent>
            </Tabs>
          </div>

          {/* Desktop View: Grid */}
          <div className="hidden lg:grid gap-12 lg:grid-cols-2 lg:items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="w-full max-w-none px-6 md:px-12">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Visit Our Facility</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
              Schedule a visit to see our state-of-the-art manufacturing facility and meet our team.
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="mx-auto h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.7432719935027!2d72.6338526!3d23.2524275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2c745f9917d5%3A0x2ca6d7e5188d0cb0!2sJayshree%20Instruments%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1763624334066!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
