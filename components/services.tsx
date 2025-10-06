"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Shield, Droplet, Star, Gem, Anchor, ArrowRight } from "lucide-react"
import pricingData from "@/data/pricing.json"

const iconMap = {
  sparkles: Sparkles,
  zap: Zap,
  shield: Shield,
  droplet: Droplet,
  star: Star,
  gem: Gem,
  anchor: Anchor,
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground text-balance">
            From quick washes to premium ceramic coatings, we offer comprehensive detailing solutions for every need and
            budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pricingData.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-serif">{service.name}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.pricing ? (
                        <div className="space-y-1">
                          {service.pricing.map((price, i) => (
                            <div key={i} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{price.type}</span>
                              <span className="font-semibold">${price.price}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-2xl font-bold text-primary">
                          {typeof service.price === "number" ? `$${service.price}` : service.price}
                        </div>
                      )}
                      <div className="text-sm text-muted-foreground">Duration: {service.duration}</div>
                    </div>

                    {service.includes && (
                      <div className="pt-4 border-t">
                        <p className="text-sm font-medium mb-2">Includes:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {service.includes.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                          {service.includes.length > 3 && (
                            <li className="text-primary">+ {service.includes.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                    )}

                    <Button asChild className="w-full rounded-full bg-transparent" variant="outline">
                      <a href="#contact">
                        Book This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
