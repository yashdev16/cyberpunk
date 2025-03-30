"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap } from "lucide-react"
import ParticleBackground from "./particle-background"

export default function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "ENTER THE CYBERPUNK FUTURE"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [index])

  const glitchVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeInOut",
        yoyo: Number.POSITIVE_INFINITY,
        repeatDelay: 10,
      },
    }),
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block rounded-lg bg-black/50 backdrop-blur-sm px-3 py-1 text-sm border border-purple-500/30"
          >
            WELCOME TO THE FUTURE
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600">
              {text}
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600"></span>
            <motion.span
              className="inline-block ml-1 animate-pulse"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            >
              |
            </motion.span>
          </h1>

          <motion.p
            className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A revolutionary digital experience where technology meets imagination. Dive into a world of endless
            possibilities and cutting-edge innovation.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="relative group h-12 px-8 text-base font-medium bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] transition-all duration-300">
                <span className="mr-2">Get Started</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-30 blur-xl group-hover:opacity-70 transition duration-1000"></span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="h-12 px-8 text-base font-medium border-purple-500 text-purple-500 hover:bg-purple-950/30 hover:text-purple-400 transition-all duration-300"
              >
                <Zap className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

