"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Chen",
      role: "CTO",
      company: "NeoTech Industries",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "This platform has completely transformed how we approach digital innovation. The neural interface technology is unlike anything I've experienced before, allowing for seamless integration between thought and action.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia Rodriguez",
      role: "Security Analyst",
      company: "Quantum Shield",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "As someone who works in cybersecurity, I'm extremely impressed by the quantum encryption capabilities. It's provided us with a level of security that was previously thought impossible.",
      rating: 5,
    },
    {
      id: 3,
      name: "Marcus Kim",
      role: "Lead Developer",
      company: "Synapse Systems",
      avatar: "/placeholder.svg?height=80&width=80",
      content:
        "The hyper processing feature has cut our rendering times by 90%. What used to take hours now happens in minutes. This is a game-changer for our development workflow.",
      rating: 4,
    },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  }

  return (
    <section className="relative py-24 overflow-hidden bg-black" ref={containerRef}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            Hear from the pioneers who are already experiencing the future of technology.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative"
            >
              <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 md:p-10">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full blur-xl"></div>

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
                  <Avatar className="w-16 h-16 border-2 border-purple-500/50">
                    <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].name} />
                    <AvatarFallback className="bg-purple-900 text-white">
                      {testimonials[activeIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonials[activeIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-gray-200 italic mb-4">
                      "{testimonials[activeIndex].content}"
                    </p>
                    <div>
                      <h4 className="font-bold text-white">{testimonials[activeIndex].name}</h4>
                      <p className="text-sm text-gray-400">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-purple-500/50 text-purple-500 hover:bg-purple-950/30 hover:text-purple-400"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-purple-500 w-4" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-purple-500/50 text-purple-500 hover:bg-purple-950/30 hover:text-purple-400"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

