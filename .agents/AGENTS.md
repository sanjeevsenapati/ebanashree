# AGENTS.md — Antigravity Agent Guidelines & Repository Context 🎋

Welcome agent! This file contains essential instructions for working on the **eBanashree** project repository.

---

## 📌 Project Quick Reference

* **Project Name:** eBanashree (50-Acre Bamboo Farm & Eco Retreat)
* **Location:** Keonjhar, Odisha, India
* **Co-Founders:** Minaketan Sethi & Sanjeev Senapati
* **Tech Stack:** Vite v5.4.2, Vanilla JavaScript (ES Modules), Custom Modular Vanilla CSS, HTML5
* **Detailed State Document:** Refer to [`.agents/PROJECT_STATE.md`](file:///.agents/PROJECT_STATE.md) for full architecture, data flow, feature matrix, and deployment instructions.

---

## 📐 Core Engineering & Design Rules

1. **Vanilla Architectural Integrity:**
   - Keep the project lean using Vite + ES Modules + Vanilla CSS.
   - Do NOT add heavy client frameworks (React, Vue, Tailwind) unless explicitly requested by the user.

2. **Design System Adherence:**
   - Always reference CSS custom properties defined in [`src/css/main.css`](file:///src/css/main.css) (e.g. `var(--color-bamboo-green)`, `var(--color-earth-brown)`, `var(--color-sand-beige)`).
   - Maintain the premium eco-retreat visual tone: natural tones, smooth hover micro-animations, glassmorphic overlays, clean typography.

3. **Data Management:**
   - Place dynamic component data, room rates, zone descriptions, gallery items, and testimonials inside [`src/js/data.js`](file:///src/js/data.js).

4. **Testing & Verification:**
   - Test development changes with `npm run dev`.
   - Verify production compilation with `npm run build` prior to completing tasks.

5. **Deployment Protocol:**
   - Source code commits go to `main`.
   - Production static output is deployed from `dist/` to the `host` branch (`git subtree push --prefix dist origin host`).
