"use client"

import { Shield, Award, Globe2, TrendingUp, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function StatsSection() {
  const stats = [
    {
      id: 1,
      label: "Years in Business",
      value: "25+",
      suffix: "Years",
      description: "established in 2001. Delivering consistent quality and manufacturing excellence for over two decades.",
      icon: Shield,
      color: "blue"
    },
    {
      id: 2,
      label: "Quality Standards",
      value: "ISO",
      suffix: "9001",
      description: "Certified to ISO 9001:2015. We strictly adhere to IPC-A-610 Class 2 & 3 standards for zero-defect reliability.",
      icon: Award,
      color: "emerald"
    },
    {
      id: 3,
      label: "Industries Served",
      value: "12+",
      suffix: "Sectors",
      description: "Deep expertise in Automotive, Medical, Industrial Automation, and Power Electronics sectors.",
      icon: TrendingUp,
      color: "purple"
    },
    {
      id: 4,
      label: "Global Reach",
      value: "100%",
      suffix: "Export",
      description: "Full-service global logistics including DDP shipping and customs handling for seamless delivery worldwide.",
      icon: Globe2,
      color: "cyan"
    }
  ]

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-slate-50">
      {/* Background Elements */}


      <div className="w-full max-w-none px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm mb-6 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">Proven Excellence</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Leading OEMs <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Partner with Jayshree Instruments
              </span>
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We go beyond assembly to offer comprehensive manufacturing solutions. From design validation to global logistics, we ensure your product's success at every stage.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-white border border-slate-200 rounded-2xl p-4 md:p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl bg-${stat.color}-50 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-5 h-5 md:w-7 md:h-7 text-${stat.color}-600`} strokeWidth={1.5} />
                </div>

                <div className="mb-2">
                  <span className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">{stat.value}</span>
                  <span className={`text-sm md:text-lg font-medium text-${stat.color}-600 ml-1 md:ml-2`}>{stat.suffix}</span>
                </div>

                <h3 className="text-sm md:text-lg font-semibold text-slate-800 mb-2 md:mb-3">{stat.label}</h3>

                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
