"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

type FormValues = z.infer<typeof formSchema>

export default function CtaSection() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setFormState("loading")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submitted:", data)
      setFormState("success")
      form.reset()
    } catch (error) {
      console.error("Form submission error:", error)
      setFormState("error")
    }
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
              Ready to Join the Revolution?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sign up now to be among the first to experience our groundbreaking technology. Early adopters will receive
              exclusive benefits and priority access.
            </p>
          </motion.div>

          <motion.div
            className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full blur-xl"></div>

            {formState === "success" ? (
              <motion.div
                className="flex flex-col items-center justify-center py-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You for Joining!</h3>
                <p className="text-gray-400 max-w-md">
                  We've received your email. Get ready to experience the future of technology. We'll be in touch soon
                  with exclusive updates.
                </p>
                <Button
                  className="mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                  onClick={() => setFormState("idle")}
                >
                  Sign Up Another Email
                </Button>
              </motion.div>
            ) : formState === "error" ? (
              <motion.div
                className="flex flex-col items-center justify-center py-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <AlertCircle className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Something Went Wrong</h3>
                <p className="text-gray-400 max-w-md">
                  We couldn't process your request. Please try again or contact support if the problem persists.
                </p>
                <Button
                  className="mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
                  onClick={() => setFormState("idle")}
                >
                  Try Again
                </Button>
              </motion.div>
            ) : (
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">Join the Waitlist</h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              className="bg-black/50 border-gray-700 focus:border-purple-500 text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] transition-all duration-300"
                        disabled={formState === "loading"}
                      >
                        {formState === "loading" ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </div>
                        ) : (
                          "Get Early Access"
                        )}
                      </Button>
                    </motion.div>

                    <p className="text-xs text-gray-500 text-center">
                      By signing up, you agree to our{" "}
                      <a href="#" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                </Form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

