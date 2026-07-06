# Sri Laxmi Narasimha Jewellery - Business Preview Website

A premium, high-fidelity frontend preview website built for **SRI LAXMI NARASIMHA JEWELLERY**, located in Gate Bazar, Kharagpur, West Bengal. This is a static, design-agency-grade staging site designed to showcase the brand's visual identity, collections, and contact details before the production launch.

---

## 🌟 Features

- **Branding & Design System**: High-end Obsidian Charcoal (`#0A0A0B`) & Champagne Gold (`#D4AF37`) palette tailored for luxury Indian jewelry.
- **Dynamic Header**: Sticky glassmorphic navbar with scroll-based contrast protection and an active responsive drawer for mobile devices.
- **Mandalic Hero Section**: Custom-designed, floating vector star-mandala badge showcasing the artistry of jewelry making.
- **Heritage About Section**: Spotlights BIS Hallmarking guarantees, customizable fittings, and detailed trust matrices.
- **Interactive Artisanal Gallery**: Grid of detailed vector jewelry drawings with a custom built-in lightbox modal (featuring keyboard escape accessibility).
- **Sentiment Carousel**: Accessible testimonial slider with rotation pause controls, prev/next buttons, and full support for `prefers-reduced-motion`.
- **Privacy-First Location Map**: Lazy-loaded Google Maps iframe that triggers zero third-party cookie requests until the visitor clicks "Load Map".
- **SEO & Staging Protection**: Equipped with site-wide `noindex` safeguards and an active sitemap generator that prevents duplicate local listings during preview.

---

## 🛠️ Tech Stack

- **Framework**: [Astro v5.2](https://astro.build/) (Static Mode)
- **Styles**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-First configuration)
- **Typography**: `@fontsource/cormorant-garamond` (Serif Headings) & `@fontsource/inter` (Sans-Serif Body)
- **Integrations**: `@astrojs/sitemap` (Dynamic Sitemap creation)

---

## 🚀 Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

### Build & Preview

Generate the static production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```
/
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # Base layout with SEO & sitemap configuration
│   ├── components/
│   │   ├── Navbar.astro        # Responsive sticky glass header
│   │   └── Footer.astro        # Detailed copyright and showroom details
│   ├── sections/
│   │   ├── Hero.astro          # Landing intro & mandate artwork
│   │   ├── About.astro         # Legacy details & certificates
│   │   ├── Collections.astro   # Signature catalog showcases
│   │   ├── Gallery.astro       # Interactive SVG gallery with lightbox modal
│   │   ├── Testimonials.astro  # Accessible slide review carousel
│   │   └── Location.astro      # Lazy Google Map & contact links
│   ├── styles/
│   │   └── global.css          # Tailwind imports & custom theme tokens
│   ├── data/
│   │   └── config.ts           # Central business variables & safety switches
│   └── pages/
│       └── index.astro         # Compilation homepage
├── public/
│   ├── favicon.svg             # Elegant gold monogram favicon
│   ├── og-image.svg            # Open Graph social preview graphic
│   └── robots.txt              # Safe blocking crawler instructions
├── astro.config.mjs            # Sitemap, base prefix, and Tailwind setup
└── package.json
```

---

## 🔒 Staging SEO Safety (Noindex Guard)

While this site resides on a temporary staging URL (e.g., GitHub Pages or Vercel preview), it is safeguarded from search engine indexing to prevent duplicate local citations and SEO ranking conflicts with the client's future official domain.

### How to Go Live (Disable Safety Guard)

When the client approves the design and the site is ready to migrate to its custom domain:

1. Open [src/data/config.ts](file:///Users/diwakaracharya/Documents/business-kharagpur/jewellery/laxmi%20narshima/src/data/config.ts).
2. Set `isPreview` to `false`:
   ```typescript
   export const businessConfig = {
     ...
     isPreview: false, // Disables robots noindex tags
     ...
   };
   ```
3. Set your production domain in `siteUrl` in [src/data/config.ts](file:///Users/diwakaracharya/Documents/business-kharagpur/jewellery/laxmi%20narshima/src/data/config.ts) and [astro.config.mjs](file:///Users/diwakaracharya/Documents/business-kharagpur/jewellery/laxmi%20narshima/astro.config.mjs).
4. Update [public/robots.txt](file:///Users/diwakaracharya/Documents/business-kharagpur/jewellery/laxmi%20narshima/public/robots.txt) to allow search crawler indexing:
   ```text
   User-agent: *
   Allow: /
   Sitemap: https://yourcustomdomain.com/sitemap-index.xml
   ```

---

## 🚢 GitHub Pages Deployment

The project is configured for automated builds and deployment via GitHub Actions:

1. Push this project to a new private/public GitHub repository.
2. In the repository settings, navigate to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the site on every push to the `main` branch.

---

## ⚖️ Licensing

*All rights reserved.* The logo design, copywriting, contact details, and visual themes are custom creations and proprietary property of the client, **Sri Laxmi Narasimha Jewellery**.
