# Quick Reference Guide - KIOSK Mega Mart Website

This guide helps you quickly make common updates to the website.

---

## Update Contact Information

### Phone Numbers

**Files to update:**
1. [components/Hero.tsx](components/Hero.tsx) - Lines 5-6
2. [components/HowToOrder.tsx](components/HowToOrder.tsx) - Lines 35-36
3. [components/Footer.tsx](components/Footer.tsx) - Lines 5-6
4. [components/StickyButtons.tsx](components/StickyButtons.tsx) - Lines 5-6

**Current numbers:**
- Primary: 9811339376
- Secondary: 9625783541

### WhatsApp Number

**Files to update:**
1. [components/Hero.tsx](components/Hero.tsx) - Line 5
2. [components/HowToOrder.tsx](components/HowToOrder.tsx) - Line 35
3. [components/Footer.tsx](components/Footer.tsx) - Line 5
4. [components/StickyButtons.tsx](components/StickyButtons.tsx) - Line 5

**Current number:** 919811339376

---

## Update Store Timings

**Files to update:**
1. [components/Hero.tsx](components/Hero.tsx) - Line 36 (text content)
2. [components/LocationTimings.tsx](components/LocationTimings.tsx) - Lines 37-38

**Current timings:** 10:00 AM – 10:00 PM (Daily)

---

## Update Store Address

**File to update:**
1. [components/LocationTimings.tsx](components/LocationTimings.tsx) - Line 4

**Current address:**
```
Shop No. 10, BESTECH Square Mall, LG 9-10-11, Sector 57, Gurugram
```

---

## Update Google Maps Location

**File to update:**
1. [components/LocationTimings.tsx](components/LocationTimings.tsx)

**Two places to update:**
- Line 5: `googleMapsLink` - For "Get Directions" button
- Line 29: `iframe src` - For embedded map

### How to get new map embed code:
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the URL in line 29

---

## Update WhatsApp Message Template

**Files to update:**
1. [components/Hero.tsx](components/Hero.tsx) - Line 6
2. [components/HowToOrder.tsx](components/HowToOrder.tsx) - Line 36
3. [components/Footer.tsx](components/Footer.tsx) - Line 6
4. [components/StickyButtons.tsx](components/StickyButtons.tsx) - Line 6

**Current message:**
```
"Hello! I would like to place an order for groceries."
```

**Format:**
```typescript
const whatsappMessage = encodeURIComponent("Your new message here");
```

---

## Add/Remove Product Categories

**File to update:**
1. [components/WhatWeOffer.tsx](components/WhatWeOffer.tsx) - Lines 14-75

### Category Structure:
```typescript
{
  icon: IconName,  // Import from lucide-react
  title: "Category Name",
  description: "Category description",
  color: "from-color-400 to-color-500"  // Tailwind gradient
}
```

### Available Icons (some examples):
- Apple, Wheat, Milk, Sparkles, Cookie
- Droplet, Pencil, Blocks, UtensilsCrossed, Coffee
- See full list at: https://lucide.dev

### Color Options:
- Green: `from-green-400 to-emerald-500`
- Orange: `from-amber-400 to-orange-500`
- Blue: `from-blue-400 to-cyan-500`
- Purple: `from-purple-400 to-violet-500`
- Pink: `from-pink-400 to-rose-500`
- Teal: `from-teal-400 to-cyan-600`

---

## Update SEO Meta Tags

**File to update:**
1. [app/layout.tsx](app/layout.tsx) - Lines 16-34

### Title (Line 17)
```typescript
title: "Your New Title Here"
```

### Description (Line 18)
```typescript
description: "Your new description here"
```

### Keywords (Line 19)
```typescript
keywords: "keyword1, keyword2, keyword3"
```

---

## Update Primary Brand Color

**File to update:**
1. [tailwind.config.ts](tailwind.config.ts) - Lines 14-24

### Primary Color Palette:
```typescript
primary: {
  50: '#f0fdf4',   // Lightest
  100: '#dcfce7',
  // ... through to
  900: '#14532d',  // Darkest
}
```

**Tool to generate colors:** https://uicolors.app/create

---

## Update Order Process Steps

**File to update:**
1. [components/HowToOrder.tsx](components/HowToOrder.tsx) - Lines 5-29

### Step Structure:
```typescript
{
  icon: IconName,
  number: "1",
  title: "Step Title",
  description: "Step description",
  contacts: ["phone1", "phone2"],  // Optional, only for first step
  color: "from-blue-400 to-blue-600"
}
```

---

## Common Development Commands

### Start Development Server
```bash
npm run dev
```
Open http://localhost:3000

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Check for Errors
```bash
npm run lint
```

### Install Dependencies
```bash
npm install
```

---

## Component Locations Quick Map

```
Hero Section          → components/Hero.tsx
Categories Grid       → components/WhatWeOffer.tsx
How to Order Steps    → components/HowToOrder.tsx
Location & Map        → components/LocationTimings.tsx
Footer                → components/Footer.tsx
Mobile Sticky Buttons → components/StickyButtons.tsx
Main Page             → app/page.tsx
SEO & Metadata        → app/layout.tsx
Global Styles         → app/globals.css
Tailwind Config       → tailwind.config.ts
```

---

## Color Customization Guide

### Text Colors
```
Gray text: text-gray-600, text-gray-700, text-gray-900
Primary text: text-primary-600, text-primary-700
White text: text-white
```

### Background Colors
```
White: bg-white
Primary: bg-primary-600, bg-primary-700
Gray: bg-gray-50, bg-gray-100
```

### Gradients
```
Green: bg-gradient-to-br from-primary-50 to-white
Custom: bg-gradient-to-br from-[color] to-[color]
```

---

## Typography Quick Reference

### Headings
```
Main headline:   text-4xl sm:text-5xl lg:text-6xl
Section titles:  text-3xl sm:text-4xl lg:text-5xl
Card titles:     text-xl
```

### Body Text
```
Large:   text-lg sm:text-xl
Regular: text-base
Small:   text-sm
```

### Font Weights
```
Regular:   font-normal
Medium:    font-medium
Semibold:  font-semibold
Bold:      font-bold
```

---

## Responsive Design Classes

### Show/Hide
```
Hidden on mobile:    hidden sm:block
Hidden on desktop:   sm:hidden
```

### Layout
```
Stack on mobile:     flex flex-col sm:flex-row
Grid responsive:     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
```

### Spacing
```
Responsive padding:  px-4 sm:px-6 lg:px-8
Responsive margin:   mb-4 sm:mb-6 lg:mb-8
```

---

## Icon Usage

### Import Icons
```typescript
import { IconName } from 'lucide-react';
```

### Use in Component
```tsx
<IconName className="w-6 h-6" />
```

### Browse All Icons
Visit: https://lucide.dev

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## Important Notes

1. **Always test after changes:** Run `npm run dev` and check in browser
2. **Build before deploying:** Run `npm run build` to catch errors
3. **Backup before major changes:** Keep a copy of files you're modifying
4. **Update in multiple files:** Remember contact info appears in 4+ files
5. **Check mobile view:** Most users will be on mobile devices

---

## Need Help?

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev
- **TypeScript Docs:** https://www.typescriptlang.org/docs

---

**Last Updated:** December 2024
