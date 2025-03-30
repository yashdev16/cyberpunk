"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Cpu, Shield, Zap, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  onClick: () => void
}

function FeatureCard({ icon, title, description, color, onClick }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        translateY: -10,
        boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 0 15px ${color}`,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card
        className="relative overflow-hidden bg-black/60 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300 h-full"
        onClick={onClick}
      >
        <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${color}`} />
        <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 rounded-full bg-gradient-to-br from-transparent to-black/20 backdrop-blur-sm" />

        <CardHeader>
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${color} shadow-lg mb-4`}
          >
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400">
            Click to learn more about our cutting-edge technology and how it can transform your digital experience.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="group text-gray-400 hover:text-white">
            <span>Learn More</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  const features = [
    {
      icon: <Cpu className="h-6 w-6 text-white" />,
      title: "Neural Interface",
      description: "Connect directly to your neural pathways",
      color: "from-purple-600 to-blue-600",
      content:
        "Our Neural Interface technology allows for unprecedented connection between human cognition and digital systems. Using advanced non-invasive sensors, we can interpret neural signals with 99.7% accuracy, enabling thought-based control of digital environments. This breakthrough technology is the foundation of our immersive experiences, allowing users to navigate, interact, and create using only their thoughts.",
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Quantum Encryption",
      description: "Unbreakable security for your digital assets",
      color: "from-green-600 to-cyan-600",
      content:
        "Our Quantum Encryption protocol leverages the principles of quantum mechanics to create truly unbreakable security. Using quantum entanglement and superposition, we generate encryption keys that cannot be intercepted or duplicated. This revolutionary approach to cybersecurity ensures that your digital assets and personal data remain completely secure, even against the most sophisticated attacks from state-level actors or quantum computers.",
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Hyper Processing",
      description: "Lightning-fast computation for complex tasks",
      color: "from-pink-600 to-orange-600",
      content:
        "Hyper Processing represents a paradigm shift in computational power. By combining advanced parallel processing architectures with our proprietary quantum acceleration algorithms, we've achieved processing speeds that are orders of magnitude beyond conventional systems. This unprecedented computational capability enables real-time rendering of complex environments, instantaneous data analysis, and seamless integration of multiple AI systems—all while maintaining minimal power consumption.",
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Cutting-Edge Features
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore the revolutionary technologies that power our platform and push the boundaries of what's possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                onClick={() => setSelectedFeature(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={selectedFeature !== null} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="bg-black/90 backdrop-blur-lg border border-purple-500/30 text-white max-w-2xl">
          <DialogHeader>
            {selectedFeature !== null && (
              <>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${features[selectedFeature].color}`}
                  >
                    {features[selectedFeature].icon}
                  </div>
                  <DialogTitle className="text-xl">{features[selectedFeature].title}</DialogTitle>
                </div>
                <DialogDescription className="text-gray-400 mt-2">
                  {features[selectedFeature].description}
                </DialogDescription>
              </>
            )}
          </DialogHeader>

          {selectedFeature !== null && (
            <div className="mt-4 text-gray-300">
              <p>{features[selectedFeature].content}</p>
            </div>
          )}

          <DialogFooter className="mt-6">
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              onClick={() => setSelectedFeature(null)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

