import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="relative h-14 w-44">
              <Image
                src="/logo.png"
                alt="Shawn's Detailing"
                fill
                className="object-contain drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)] brightness-105 contrast-110"
                priority
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Professional mobile car and boat detailing serving Suffolk and Nassau County with premium service and
              attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#services", label: "Services" },
                { href: "#gallery", label: "Gallery" },
                { href: "#pricing", label: "Pricing" },
                { href: "#testimonials", label: "Reviews" },
                { href: "#contact", label: "Book Now" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline underline-offset-4 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <a
                  href="tel:6317904554"
                  className="hover:text-white transition-colors duration-300"
                >
                  631-790-4554
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <a
                  href="mailto:info@shawnsdetailing.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@shawnsdetailing.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">Suffolk & Nassau County, NY</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-serif font-semibold text-lg text-white mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex justify-between text-gray-400">
                <span>Mon - Sat</span>
                <span>8AM - 6PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span>By Appt</span>
              </li>
            </ul>
            <div className="flex gap-4">
              {[
                { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
                { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Shawn&apos;s Detailing. All rights reserved. Dedicated to creativity, quality & growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
