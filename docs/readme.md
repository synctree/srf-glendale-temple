# SRF Glendale Temple Website & Interactive Information System

This repository contains two interconnected web applications:

1. **Main Temple Website** (`/`)
   - Responsive design for various screen sizes
   - Optimized for desktop and mobile viewing
   - Primary public-facing website for the temple
   - Blog posts and announcements
   - Event information
   - Contact details

2. **Interactive Information Center** (`/kiosk`)
   - Optimized for 43" 4K touchscreen display
   - Larger touch targets and text
   - Kiosk-specific navigation
   - Auto-return to home functionality
   - Specialized layout for standing interaction

## Technical Architecture

Both applications share:
- The same Next.js codebase
- Contentful CMS backend
- Core content types and data
- Basic functionality

But differ in:
- Layout and styling
- Navigation patterns
- Interactive elements
- Screen optimization

## Content Management

Content is managed through Contentful with shared content types:
- Posts
- Authors
- Events
- Announcements

Each piece of content can be tagged for:
- Website display
- Kiosk display
- Or both

## Development

To run the development server:
```bash
pnpm dev
```

Access the different versions at:
- Main website: http://localhost:3000
- Kiosk version: http://localhost:3000/kiosk

## Deployment

Both versions deploy to the same Vercel instance but serve different purposes:
- Main website: https://srf-glendale-temple.org
- Kiosk: https://srf-glendale-temple.org/kiosk

## Documentation

- [Main Website Specification](./website.md)
- [Interactive Information Center Specification](./information-center/system.md)
