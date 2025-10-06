"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const beforeAfterImages = [
  {
    title: "Exterior Transformation",
    before: "/dirty-car-exterior-before-detailing.jpg",
    after: "/shiny-clean-car-exterior-after-professional-detail.jpg",
  },
  {
    title: "Interior Deep Clean",
    before: "/dirty-car-interior-seats-before-cleaning.jpg",
    after: "/pristine-clean-car-interior-seats-after-detailing.jpg",
  },
  {
    title: "Wheel & Rim Restoration",
    before: "/dirty-car-wheel-and-rim-before-cleaning.jpg",
    after: "/shiny-clean-car-wheel-and-rim-after-detailing.jpg",
  },
  {
    title: "Boat Detailing",
    before: "/boat-exterior-before-detailing-with-oxidation.jpg",
    after: "/boat-exterior-after-detailing-shiny-and-protected.jpg",
  },
]

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  return (
    <Card className="overflow-hidden">
      <div
        className="relative aspect-[4/3] cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image */}
        <img
          src={after || "/placeholder.svg"}
          alt={`${title} - After`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image with Clip */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <img
            src={before || "/placeholder.svg"}
            alt={`${title} - Before`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Slider Line */}
        <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg" style={{ left: `${sliderPosition}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-6 bg-gray-400" />
              <div className="w-0.5 h-6 bg-gray-400" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          After
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-serif font-semibold text-lg">{title}</h3>
      </div>
    </Card>
  )
}

export function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">See The Difference</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Drag the slider to reveal the transformation. Our attention to detail speaks for itself.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {beforeAfterImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BeforeAfterSlider {...image} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
