# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite agricultural website with a comprehensive component library built using shadcn/ui and Radix UI. The project uses Tailwind CSS for styling and includes security features for content protection.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint the codebase
npm run lint

# Preview production build
npm run preview
```

## Project Architecture

### Core Structure
- **Single Page Application**: All content is rendered in `App.tsx` as distinct sections
- **Section-based Layout**: Main content divided into Hero, About, Services, Products, Sustainability, and Contact sections
- **Component System**: Uses shadcn/ui components with extensive Radix UI integration
- **Security Layer**: Custom security utilities in `src/lib/security.ts` for anti-scraping and rate limiting

### Key Directories

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui component library (40+ components)
│   ├── common/          # Shared common components
│   ├── Header.tsx       # Main navigation
│   ├── Footer.tsx       # Site footer
│   └── WhatsAppWidget.tsx
├── sections/            # Page sections (Hero, About, Services, etc.)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and services
│   ├── security.ts      # Security utilities and protection measures
│   ├── emailService.ts  # Email handling via EmailJS
│   └── utils.ts         # General utilities
└── types/              # TypeScript type definitions
```

### Component System
The project uses shadcn/ui with Radix UI primitives. Import components like:
```typescript
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
```

Available UI components include: accordion, alert-dialog, alert, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, label, menubar, navigation-menu, pagination, popover, progress, radio-group, scroll-area, select, separator, slider, switch, table, tabs, textarea, toggle, tooltip, and more.

### Security Features
The application implements several security measures:
- Anti-scraping protection (disabled right-click on images, keyboard shortcuts)
- Rate limiting for form submissions via `RateLimiter` class
- XSS prevention with input sanitization
- Content Security Policy headers
- Bot detection and handling

### Styling System
- **Tailwind CSS**: Primary styling framework with custom design tokens
- **CSS Custom Properties**: Theme system using HSL color values
- **Dark Mode**: Configured via `darkMode: ["class"]`
- **Design Tokens**: Extensive color system with semantic naming (primary, secondary, muted, accent, etc.)
- **Animation**: Custom keyframes for accordions and caret blinking

### State Management
Currently uses React's built-in state management (useState, useEffect). No external state management library is configured.

### Key Dependencies
- **React 19.2.0** with TypeScript
- **Vite 7.2.4** for build tooling
- **Tailwind CSS 3.4.19** for styling
- **Radix UI** components for accessible UI primitives
- **EmailJS** for contact form functionality
- **React Hook Form + Zod** for form handling and validation
- **Lucide React** for icons

## Development Notes

### Build Configuration
- TypeScript compilation with `tsc -b` before Vite build
- ESLint configured for React and TypeScript
- PostCSS with Tailwind CSS processing
- Vite configuration supports React with TypeScript

### Security Initialization
The app initializes security measures on mount via `initSecurity()` in `App.tsx`. This includes anti-scraping protection and bot detection.

### Component Conventions
- Use functional components with TypeScript
- Import paths use `@/` alias pointing to `src/`
- Follow shadcn/ui component patterns for consistency
- Implement proper TypeScript types for all props and components