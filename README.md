# Secret PDF Landing - Nuxt 3

A modern, GDPR & HIPAA compliant PDF generation service landing page built with Nuxt 3, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Nuxt 3
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + @tailwindcss/typography
- **Markdown:** marked + marked-highlight
- **Syntax Highlighting:** highlight.js

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at http://localhost:3000/

## Build

```bash
# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build
npm run preview
```

## Project Structure

```
├── app.vue                 # Main app component
├── nuxt.config.ts         # Nuxt configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── pages/                 # File-based routing
│   ├── index.vue          # Homepage
│   ├── legal.vue          # Legal mentions
│   ├── privacy.vue        # Privacy policy
│   └── blog/
│       ├── index.vue      # Blog listing
│       └── [slug].vue     # Blog post detail
├── components/            # Vue components
├── assets/                # Static assets
│   └── css/
│       └── style.css      # Global styles
└── data/                  # Data files (blog posts, etc.)
```

## Key Features

- 🚀 Server-Side Rendering (SSR) with Nuxt 3
- 📱 Fully responsive design
- 🎨 Tailwind CSS for styling
- 📝 Blog with markdown support
- 🔍 SEO optimized with meta tags
- ♿ Accessible components
- 🌙 Smooth scroll behavior
- 📦 Auto-imported components

## Migration from Vite/Vue Router

This project was migrated from a Vite + Vue Router setup to Nuxt 3. Key changes:

- `router-link` → `NuxtLink`
- `useRoute`/`useRouter` are auto-imported from Nuxt
- File-based routing instead of manual router configuration
- `useHead()` composable for SEO meta tags
- No need for manual `main.ts` - Nuxt handles app initialization
