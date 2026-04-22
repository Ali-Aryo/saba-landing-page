# SABA Management Consulting — Landing Page

A premium, dark-themed consulting landing page built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

| Layer            | Technology                        |
| ---------------- | --------------------------------- |
| Framework        | Next.js 15 (App Router)           |
| Language         | TypeScript                        |
| Styling          | Tailwind CSS v4 + CSS Variables   |
| Icons            | Lucide React                      |
| Forms            | React Hook Form + Zod             |
| Package Manager  | pnpm                              |
| Deployment       | Netlify                           |



## Deployment (Netlify)

### Netlify Forms (Email Forwarding)

The contact form is pre-configured with `data-netlify="true"` and a honeypot field for spam protection. After deployment:

1. Go to your Netlify Dashboard → **Forms**.
2. The "contact" form will appear automatically.
3. Set up email notifications under **Site settings → Forms → Form notifications**.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design system tokens + global styles
│   ├── layout.tsx        # Root layout with Inter font + SEO metadata
│   └── page.tsx          # Main landing page
├── components/
│   ├── layout/
│   │   ├── Header.tsx    # Glassmorphic fixed navigation
│   │   └── Footer.tsx    # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx              # Hero with tech grid background
│   │   ├── CoreCompetencies.tsx  # Glass cards for services
│   │   ├── GlobalInsights.tsx    # Bento grid for insights
│   │   └── ContactSection.tsx    # Contact form (RHF + Zod)
│   └── ui/
│       ├── Button.tsx    # Primary/Secondary/Tertiary variants
│       ├── Input.tsx     # Form input with label + error
│       └── Textarea.tsx  # Form textarea with label + error
```

## Design System

Based on the **"Obsidian Architect"** design philosophy:

- **Dark nocturnal palette** anchored at `#0A0E1A`
- **No-line rule** — boundaries via tonal shifts, not borders
- **Glassmorphism** for floating elements (backdrop-blur + opacity)
- **Inter typeface** with tight tracking for editorial authority
- **Ghost borders** at ≤15% opacity only where accessibility requires it
