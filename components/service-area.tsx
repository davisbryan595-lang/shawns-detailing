"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export function ServiceArea() {
  return (
    <section id="service-area" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            Service Area
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">We Come To You</h2>
          <p className="text-lg text-muted-foreground text-balance">
            We happily serve Suffolk County and Nassau County with mobile service to your driveway, office, or marina.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-73.41934744999999!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sLong%20Island%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <h3 className="font-serif font-semibold text-2xl mb-2">Suffolk County</h3>
              <p className="text-muted-foreground">
                Huntington, Smithtown, Babylon, Islip, Brookhaven, East Hampton, Southampton, and surrounding areas
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-muted/50">
              <h3 className="font-serif font-semibold text-2xl mb-2">Nassau County</h3>
              <p className="text-muted-foreground">
                Hempstead, Oyster Bay, North Hempstead, Long Beach, Glen Cove, and surrounding areas
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
