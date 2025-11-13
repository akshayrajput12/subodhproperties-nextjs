# SubodhProperties

A modern real estate website built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

- 🏠 Property listings with advanced filtering
- 🔍 Search functionality with URL-based filters
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎨 Custom color scheme (Sky Soft Blue & Peach)
- 📝 Contact and enquiry forms
- 🗺️ Property location maps
- 👤 Agent information cards

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI)
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React

## Getting Started

### Installation

```bash
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
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── properties/        # Property listings & details
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PropertyCard.tsx
│   ├── PropertyDetailPanel.tsx
│   ├── EnquiryForm.tsx
│   ├── SearchBar.tsx
│   └── ui/                # shadcn/ui components
├── data/
│   └── properties.ts      # Property data source
├── types/
│   └── index.ts           # TypeScript types
└── styles/
    └── globals.css        # Global styles
```

## Data Management

All property data is managed in `src/data/properties.ts`. This single source of truth contains:
- Property listings
- Agent information
- Property specifications
- Images and media

## Color Scheme

- **Sky Soft:** `rgb(193, 222, 232)` - Secondary color
- **Peach:** `rgb(251, 217, 185)` - Primary CTA color
- **Text:** `#111111` - Main text color
- **Muted:** `#555555` - Secondary text color

## Deployment

Deploy easily on Vercel:

```bash
vercel
```

Or use any Next.js-compatible hosting platform.

## Adding New Properties

Edit `src/data/properties.ts` and add new property objects following the `Property` type definition.

## License

MIT
