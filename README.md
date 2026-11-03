<<<<<<< HEAD
# Sree Lasya Katari — Portfolio

Futuristic SDET / Full-Stack portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion and Lenis.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Structure

```
public/            resume.pdf, lasya.png
src/app/           layout, page, template (page transition), robots, sitemap, icon
src/components/
  effects/         SmoothScroll, ScrollProgress, MouseGlow, Particles
  layout/          Navbar, Footer
  sections/        Hero, About, Development, Quality, Automation, ApiDatabase,
                   Skills, Experience, Projects, AIEngineering, Contact
  ui/              MagneticButton, Reveal, SectionHeading, CodePanel,
                   PortraitFrame, FloatPill, SocialLinks
src/lib/data.ts    all site content (edit text, links, projects here)
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import it at https://vercel.com/new (framework is auto-detected as Next.js; no extra settings needed).
3. Set `profile.url` in `src/lib/data.ts` to your production domain (used for SEO metadata, sitemap and robots).
=======
# My-portfolio-
>>>>>>> 9b26ccb3714a0a8597dfb9ebd42e32e3230ad1e6
