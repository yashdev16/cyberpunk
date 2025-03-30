"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:info@example.com", label: "Email" },
  ]

  const footerLinks = [
    { name: "About", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
  ]

  return (
    <footer className="relative border-t border-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>

      <div className="container relative z-10 px-4 py-12 md:py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold">CP</span>
              </div>
              <h3 className="text-xl font-bold text-white">CyberPunk</h3>
            </div>
            <p className="text-gray-400 max-w-xs">
              Pushing the boundaries of what's possible with cutting-edge technology and immersive digital experiences.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300 group"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)",
                  }}
                  aria-label={link.label}
                >
                  <span className="group-hover:animate-pulse">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.slice(0, 3).map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Resources</h4>
                <ul className="space-y-2">
                  {footerLinks.slice(3, 5).map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {footerLinks.slice(5).map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} CyberPunk Technologies. All rights reserved.</p>

          <div className="mt-4 sm:mt-0">
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/30 to-cyan-900/30 text-xs text-gray-400 border border-purple-500/30">
              Powered by Next.js + Tailwind + Framer Motion
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

