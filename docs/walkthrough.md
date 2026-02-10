# Portfolio Build Walkthrough

I have updated your portfolio to match the **Outpace Design Aesthetic**: a high-signal, light-mode experience featuring bold corporate typography, ample whitespace, and a striking orange (`#FF3B00`) accent.

## 🚀 Design Overhaul: The "Outpace" Look

### 1. Visual Identity
- **Theme**: Pure White (`#FFFFFF`) background with Deep Black (`#0F0F0F`) text.
- **Typography**: Heavy, tracking-tight headings (Inter Black) for a premium, agency feel.
- **Accent**: A vibrant Orange (`#FF3B00`) used sparingly for CTAs and key metrics.

### 2. Redesigned Components
- **Floating Dock**: Transformed into a **White Pill** fixed to the bottom center, with drop shadows and orange active states.
- **Bento Grids**: Now use a light grey (`#F5F5F7`) background with subtle borders, abandoning the dark glassmorphism for a cleaner look.
- **Impact Section**: Metrics are now bold orange highlights against a light card background.

---

## 🛠 Project Components

- **HomeSection**: Clean, high-contrast hero with "Immediately Available" pulse in orange.
- **ImpactSection**: Grid of key stats (92% Search Success, 50K Revenue) in the new visual style.
- **WorkSection**: Professional timeline with lighter grey cards and sharp black typography.
- **SkillsSection**: Clean pill tags on grey bento cards.
- **AIProjects**: Interactive white cards that expand to show n8n workflows.

---

## 🖱 How to Preview

1. **Navigate to the directory**:
   ```bash
   cd /Users/sarthak/Documents/sarthak-portfolio
   ```
2. **Start the development server**:
   ```bash
   npm run dev
   ```
3. **Open in browser**: 
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Technical Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion (hover scales, layout transitions)
- **Scroll**: Lenis (weighted smooth scroll)

> [!TIP]
> If you encounter a `JavaScript heap out of memory` error during development, run the following command to increase memory allocation:
> ```bash
> export NODE_OPTIONS="--max-old-space-size=4096" && npm run dev
> ```
