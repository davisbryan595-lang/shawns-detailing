# Shawn's Detailing - Professional Mobile Car & Boat Detailing

A premium, production-quality Next.js website for Shawn's Detailing, a mobile car and boat detailing business serving Suffolk and Nassau County, NY.

## Features

- 🎨 **Premium Design** - Sophisticated aesthetic with colors extracted from the business logo
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- ⚡ **Performance Optimized** - Built with Next.js 15, optimized images, and efficient code
- ♿ **Accessible** - WCAG compliant with semantic HTML and ARIA labels
- 🎭 **Smooth Animations** - Framer Motion powered interactions and transitions
- 📊 **SEO Optimized** - Meta tags, structured data (JSON-LD), and semantic markup
- 🖼️ **Interactive Gallery** - Before/after sliders and lightbox modal
- 📝 **Booking System** - Complete contact and booking form
- 🗺️ **Service Area Map** - Embedded Google Maps showing coverage area

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Icons**: Lucide React

## Getting Started

### Installation

1. Clone the repository or download the ZIP file
2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Customization

### Updating Brand Colors

The color palette is defined in `app/globals.css`. To update colors:

1. Open `app/globals.css`
2. Modify the color variables in the `@theme inline` block:

\`\`\`css
--color-brand-navy: #1e3a8a;
--color-brand-royal: #2563eb;
--color-primary: #2563eb;
/* etc. */
\`\`\`

### Updating Logo

Replace `/public/logo.png` with your logo file (keep the same filename or update references in components).

### Updating Services & Pricing

Edit `/data/pricing.json` to modify:
- Services and descriptions
- Pricing information
- Testimonials
- FAQ items

### Updating Content

- **Hero Section**: Edit `/components/hero.tsx`
- **Services**: Edit `/components/services.tsx` and `/data/pricing.json`
- **Gallery Images**: Update image URLs in `/components/gallery.tsx`
- **Contact Info**: Edit `/components/booking.tsx` and `/components/footer.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables

No environment variables are required for the basic site. If you add email functionality or integrations, add them in your Vercel project settings.

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   ├── pricing/
│   │   └── page.tsx        # Pricing page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx            # Hero section
│   ├── services.tsx        # Services grid
│   ├── before-after.tsx    # Before/after sliders
│   ├── gallery.tsx         # Image gallery
│   ├── testimonials.tsx    # Customer reviews
│   ├── service-area.tsx    # Service area map
│   ├── booking.tsx         # Booking form
│   ├── faq.tsx             # FAQ accordion
│   └── footer.tsx          # Footer
├── data/
│   └── pricing.json        # Services, pricing, testimonials, FAQ
└── public/
    └── logo.png            # Business logo
\`\`\`

## Features Breakdown

### Sections

1. **Hero** - Eye-catching introduction with CTAs and stats
2. **Services** - Detailed service cards with pricing
3. **Before/After** - Interactive comparison sliders
4. **Gallery** - Masonry grid with lightbox
5. **Testimonials** - Customer reviews carousel
6. **Service Area** - Map showing coverage
7. **Booking** - Contact form with validation
8. **FAQ** - Expandable accordion
9. **Footer** - Links, contact info, hours

### Animations

- Smooth scroll-triggered reveals
- Hover effects on cards and buttons
- Before/after slider interactions
- Mobile menu transitions
- Success state animations

### SEO

- Semantic HTML structure
- Meta tags for social sharing
- JSON-LD structured data for LocalBusiness
- Optimized images with alt text
- Mobile-friendly design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Shawn's Detailing. All rights reserved.

## Support

For questions or support, contact: info@shawnsdetailing.com or call 631-790-4554
