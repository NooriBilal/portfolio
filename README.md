# Bilal Noori — Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff0055?style=for-the-badge&logo=framer)

A modern, responsive single-page portfolio website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Single-page layout with smooth scroll navigation
- Animated hero section with floating background elements
- Skills section with animated progress bars
- Work experience and education timelines
- Project showcase with expandable cards and code examples
- Contact form with mailto fallback
- Fully responsive (mobile-first)
- Dark navy/indigo color scheme

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Utilities | clsx, tailwind-merge |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/NooriBilal/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navigation with active section tracking
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Animated hero with CTA buttons
│   │   ├── About.tsx       # Personal introduction
│   │   ├── Skills.tsx      # Skill bars organized by category
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Education.tsx   # Education timeline
│   │   ├── Certificates.tsx# Certificate cards grid
│   │   ├── Projects.tsx    # Project showcase cards
│   │   └── Contact.tsx     # Contact form + social links
│   └── ui/
│       ├── SectionTitle.tsx # Reusable animated section header
│       ├── ProjectCard.tsx  # Expandable project card
│       ├── TimelineItem.tsx # Timeline row for experience/education
│       └── SkillBadge.tsx   # Animated skill progress bar
├── data/
│   └── portfolio.ts        # All content data — edit to customize
└── lib/
    └── utils.ts            # cn() utility (clsx + tailwind-merge)
```

## Customization

All content lives in `src/data/portfolio.ts`. Update:

- `personalInfo` — name, title, email, GitHub, CV URL
- `skills` — add/remove skills and adjust levels (0-100)
- `experiences` — replace TODO placeholders with real work history
- `education` — replace TODO placeholders with real education
- `certificates` — add real certificates with credential URLs
- `projects` — update project details and GitHub URLs

### Adding Your CV

Place your CV PDF at `public/cv-bilal-noori.pdf` and it will be served at `/cv-bilal-noori.pdf`.

## Deployment (Vercel)

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live at `https://your-project.vercel.app`

### Environment Variables

No environment variables are required for the base portfolio. If you add backend integrations (e.g., email API), set them in the Vercel dashboard under **Settings → Environment Variables**.

## Contributing

This is a personal portfolio — feel free to fork and use as a template for your own portfolio.

## License

MIT
