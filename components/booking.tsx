"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MessageCircle, CheckCircle2 } from "lucide-react"
import pricingData from "@/data/pricing.json"

export function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    service: "",
    date: "",
    address: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-12 pb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="text-3xl font-serif font-bold mb-4">Booking Request Received!</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for choosing Shawn's Detailing. We'll contact you within 24 hours to confirm your
                  appointment.
                </p>
                <Button onClick={() => setIsSubmitted(false)} size="lg" className="rounded-full">
                  Book Another Service
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">Book Your Appointment</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Ready to give your vehicle the care it deserves? Fill out the form below or contact us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-[#434E9E]/90 text-white">
              <CardHeader>
                <CardTitle className="font-serif text-white">Contact Information</CardTitle>
                <CardDescription className="text-gray-200">
                  Get in touch with us directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="tel:6317904554"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-200">631-790-4554</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/16317904554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-gray-200">Message us</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-200">info@shawnsdetailing.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#748BAA]/90 text-white">
              <CardHeader>
                <CardTitle className="font-serif text-white">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-200">Monday - Saturday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-200">Sunday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Request a Booking</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Doe"
                        className="[&::placeholder]:text-black"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="(631) 790-4554"
                        className="[&::placeholder]:text-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className="[&::placeholder]:text-black"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="vehicleType">Vehicle Type *</Label>
                      <Select
                        value={formData.vehicleType}
                        onValueChange={(value) => handleChange("vehicleType", value)}
                      >
                        <SelectTrigger id="vehicleType">
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car">Car</SelectItem>
                          <SelectItem value="suv">SUV</SelectItem>
                          <SelectItem value="truck">Truck</SelectItem>
                          <SelectItem value="van">Van</SelectItem>
                          <SelectItem value="semi">Semi Truck</SelectItem>
                          <SelectItem value="boat">Boat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {pricingData.services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="[&::placeholder]:text-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Service Address *</Label>
                    <Input
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      placeholder="123 Main St, Huntington, NY 11743"
                      className="[&::placeholder]:text-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Notes</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Any special requests or details we should know?"
                      rows={4}
                      className="[&::placeholder]:text-black"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
