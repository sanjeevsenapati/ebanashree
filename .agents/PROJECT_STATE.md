# eBanashree Project State & System Reference 🎋

> **Last Updated:** August 24, 2026  
> **Status:** Active / Production Ready  
> **Repository:** `sanjeevsenapati/ebanashree`  
> **Active Branch:** `main` (Source) | `host` (Production Static Deployment)

---

## 📌 1. Executive Summary & Brand Identity

**eBanashree** is a 50-acre Bamboo Farm and Rural Eco Retreat situated in Keonjhar, Odisha, India. It combines sustainable agriculture, carbon sequestration awareness, rural Odia culture, and authentic eco-cottage stays.

* **Co-Founders & Owners:** Minaketan Sethi & Sanjeev Senapati
* **Location:** Keonjhar, Odisha, India
* **Tagline:** *"Bamboo. Nature. Silence. Stay."*
* **Core Value Proposition:** A serene forest destination showcasing 50 acres of cultivated bamboo, eco-hut cottage stays, organic Odia farm dining, carbon sequestration metrics, and immersive nature experiences.

---

## 🏗️ 2. Tech Stack & Architecture

| Layer | Technology / Implementation |
| :--- | :--- |
| **Bundler & Tooling** | Vite v5.4.2 (`vite`) |
| **JS Architecture** | Native Vanilla JavaScript (ES Modules, standard DOM manipulation) |
| **CSS Architecture** | Custom Vanilla CSS with CSS Custom Properties (Variables), Component Scoping, Keyframe Animations |
| **HTML Architecture** | HTML5 Semantic Pages (`index.html`, `bamboo-farming.html`) |
| **Package System** | Node.js (v18+) with `npm` |
| **Deployment Model** | Dual-branch strategy: `main` (source) and `host` (compiled `dist/` build) |

---

## 📁 3. Directory Map & Component Roles

```
ebanashree/
├── AGENTS.md                   # Primary instructions for Antigravity & AI agents
├── .agents/                    # Workspace agent customizations & state documentation
│   ├── PROJECT_STATE.md        # Comprehensive repository state (this file)
│   └── rules/                  # Workspace specific guidelines
│       └── code_and_design.md  # Design system & coding constraints
├── index.html                  # Main retreat landing page & accommodation portal
├── bamboo-farming.html         # Bamboo cultivation science & carbon calculator page
├── package.json                # npm scripts & devDependencies (Vite)
├── vite.config.js              # Vite bundler configuration
├── project.md                  # Detailed conceptual blueprint & vision document
├── README.md                   # User-facing setup & deployment instructions
├── public/                     # Static assets (images, logos, icons)
│   └── images/                 # High-resolution web assets (eco huts, forest, founders)
└── src/                        # Application source code
    ├── css/                    # Custom modular stylesheets
    │   ├── main.css            # Base styles, CSS variables, reset, typography, header, footer
    │   ├── components.css      # Buttons, cards, modals, tabs, forms, calculator widget
    │   └── animations.css      # Keyframes, scroll animations, glassmorphism effects
    └── js/                     # ES Module JavaScript logic
        ├── data.js             # Central data store (zones, huts, gallery items, testimonials)
        ├── main.js             # Core init, navbar scroll, mobile menu, scroll reveal observers
        ├── booking.js          # Direct WhatsApp reservation engine & modal controller
        ├── gallery.js          # Lightbox image preview modal & category filter tabs
        └── map.js              # Interactive 50-acre zone visualizer controller
```

---

## 🎨 4. Design System & Theme Specification

### Color Palette (CSS Variables defined in `src/css/main.css`)
- **Bamboo Green (Primary Accent):** `#2D5A27` / `hsl(113, 39%, 25%)`
- **Forest Dark (Backgrounds/Headers):** `#1E351B` / `hsl(111, 32%, 16%)`
- **Earth Brown (Secondary Accent):** `#7A5230` / `hsl(28, 44%, 33%)`
- **Sand Beige (Warm Backgrounds):** `#F4EFE6` / `hsl(38, 38%, 93%)`
- **Cream Light (Cards/Containers):** `#FAF7F2` / `hsl(38, 40%, 96%)`
- **Off White:** `#FCFBF9`
- **Text Main:** `#222521`
- **Text Muted:** `#5A6258`

### Typography & Aesthetics
- **Headings Font:** 'Playfair Display', Georgia, Serif (Earthy, premium, warm)
- **Body Font:** 'Plus Jakarta Sans', system-ui, Sans-serif (Clean, modern readability)
- **Visual Vibe:** Premium eco-resort feel, generous whitespace, subtle green glow effects (`box-shadow`), glassmorphic backdrop filters (`backdrop-filter: blur(12px)`).

---

## ⚡ 5. Core Features & Functional Breakdown

### 1. Landing Page (`index.html`)
- **Hero Banner:** Full-width hero scene with background image, clear branding, and call-to-action buttons ("Stay With Us", "Explore Retreat").
- **Co-Founders Story:** Storytelling block highlighting Minaketan Sethi and Sanjeev Senapati.
- **Eco Hut Accommodation Suite:** Detailed card grid for cottage options (Bamboo Cottage, Deluxe Stargazer, Eco Tent Camp) with pricing, capacity, amenities, and instant booking CTA.
- **Interactive 50-Acre Zone Visualizer:** Interactive tabbed explorer mapping key areas (Bamboo Groves, Eco Huts, Stargazer Lawn, Bamboo Craft Workshop, Organic Farm).
- **Odia Rural Culture & Cuisine:** Highlighting local farm-to-table Odia meals, pottery, and night bonfires.
- **Filterable Gallery:** Categorized photo grid with interactive lightbox image viewer modal.
- **Direct Reservation Engine:** Dynamic modal with date selection, guest counter, accommodation picker, auto-calculating totals, and generating pre-filled WhatsApp enquiry links (`https://wa.me/...`).

### 2. Bamboo Science & Impact Page (`bamboo-farming.html`)
- **Environmental Impact Metrics:** Educational breakdown of bamboo oxygen production and soil rejuvenation.
- **Interactive Carbon Footprint Calculator:** Users input travel distance/mode to calculate how many eBanashree bamboo plants offset their trip's carbon emissions.
- **Cultivated Bamboo Species:** Profiles of *Dendrocalamus strictus*, *Bambusa bambos*, etc., grown in Keonjhar soil.

---

## 🛠️ 6. Workflow, Commands & Deployment

### Development Commands
```bash
# Install dependencies
npm install

# Run local development server (HMR on port 3000)
npm run dev

# Compile production bundle (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

### Git Deployment Workflow
1. **Source Code (`main` branch):**
   ```bash
   git add .
   git commit -m "Description of updates"
   git push origin main
   ```
2. **Production Deployment (`host` branch):**
   ```bash
   npm run build
   git subtree push --prefix dist origin host
   ```

---

## 📝 7. Instructions for Future Antigravity Agents

When modifying or extending this repository:
1. **Preserve Design Tokens:** Always use existing CSS variables (`var(--color-bamboo-green)`, `var(--color-earth-brown)`, etc.) in `src/css/main.css`.
2. **Keep Data Separated:** Store all structured data arrays and content dictionaries inside `src/js/data.js` rather than hardcoding long objects in DOM logic files.
3. **No External Framework Dependencies:** Maintain the lightweight Vite + Vanilla JS/CSS architecture unless explicitly requested by the user.
4. **Always Verify Builds:** Run `npm run build` to confirm zero compilation errors before declaring completion.
5. **Update State Documentation:** If adding new pages, routes, or modules, update `.agents/PROJECT_STATE.md` and `README.md`.
