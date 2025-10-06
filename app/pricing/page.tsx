import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import pricingData from "@/data/pricing.json"

export const metadata = {
  title: "Pricing - Shawn's Detailing",
  description: "View our competitive pricing for car and boat detailing services in Suffolk and Nassau County.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">Pricing</h1>
            <p className="text-lg text-muted-foreground text-balance mb-8">
              Transparent pricing for premium detailing services. All prices include mobile service within our core
              service area.
            </p>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Download Price List (PDF)
            </Button>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {pricingData.services.map((service) => (
              <Card key={service.id}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-serif">{service.name}</CardTitle>
                      <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      {service.pricing ? (
                        <div className="space-y-1">
                          {service.pricing.map((price, i) => (
                            <div key={i} className="flex justify-between md:justify-end gap-4">
                              <span className="text-muted-foreground">{price.type}</span>
                              <span className="font-bold text-xl">${price.price}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-3xl font-bold text-primary">
                          {typeof service.price === "number" ? `$${service.price}` : service.price}
                        </div>
                      )}
                      <div className="text-sm text-muted-foreground mt-2">{service.duration}</div>
                    </div>
                  </div>
                </CardHeader>
                {service.includes && (
                  <CardContent>
                    <p className="font-medium mb-3">What's Included:</p>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-12 p-6 bg-muted/50 rounded-xl">
            <h3 className="font-serif font-semibold text-xl mb-4">Important Notes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• All prices include mobile service within our core Suffolk and Nassau County service areas</li>
              <li>• Extended travel outside core areas may incur a small travel fee</li>
              <li>• Heavily soiled vehicles may require additional time and cost</li>
              <li>• Ceramic coating pricing varies based on vehicle size and package selected</li>
              <li>• We accept cash, all major credit cards, Venmo, Zelle, and Apple Pay</li>
              <li>• 24-hour cancellation notice required to avoid fees</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
