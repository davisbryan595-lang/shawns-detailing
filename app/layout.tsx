import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shawn's Detailing - Professional Mobile Car & Boat Detailing | Suffolk & Nassau County",
  description:
    "Premium mobile car and boat detailing serving Suffolk County and Nassau County. From express details to ceramic coating, we bring showroom shine to your driveway.",
  keywords:
    "car detailing, boat detailing, mobile detailing, ceramic coating, Suffolk County, Nassau County, Long Island",
  openGraph: {
    title: "Shawn's Detailing - Professional Mobile Car & Boat Detailing",
    description: "Showroom shine, wherever you are. Serving Suffolk & Nassau County.",
    images: ["/logo.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Shawn's Detailing",
              image: "/logo.png",
              telephone: "631-790-4554",
              priceRange: "$$",
              areaServed: [
                {
                  "@type": "City",
                  name: "Suffolk County",
                },
                {
                  "@type": "City",
                  name: "Nassau County",
                },
              ],
              openingHours: "Mo-Sa 08:00-18:00",
              description: "Professional mobile car and boat detailing service",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
