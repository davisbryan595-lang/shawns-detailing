import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { BeforeAfter } from "@/components/before-after"
import { Testimonials } from "@/components/testimonials"
import { ServiceArea } from "@/components/service-area"
import { Booking } from "@/components/booking"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <ServiceArea />
      <Booking />
      <FAQ />
      <Footer />
    </main>
  )
}
