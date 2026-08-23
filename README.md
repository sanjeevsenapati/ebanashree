# eBanashree — 50-Acre Bamboo Farm & Eco Retreat 🎋

> **Bamboo. Nature. Silence. Stay.**  
> A 50-acre bamboo farm and eco retreat destination located in Keonjhar, Odisha, India.  
> Co-Founded by **Minaketan Sethi** & **Sanjeev Senapati**.

---

## 🍃 Overview

**eBanashree** combines sustainable bamboo cultivation with authentic rural eco-tourism. The web application showcases the 50-acre retreat, eco hut cottage stays, carbon sequestration impact, authentic Odia farm dining, and local experiences with an interactive WhatsApp enquiry system.

### Key Features
- **Co-Founders Story**: Meet co-founders Minaketan Sethi and Sanjeev Senapati.
- **50-Acre Farm Visualizer**: Interactive zone explorer (Groves, Eco Huts, Stargazing Lawn, Craft Workshop, Organic Farm).
- **Eco Hut Accommodations**: Detailed view of cottage types, amenities, and nightly rates.
- **Environmental Carbon Calculator**: Interactive tool calculating travel emissions neutralized by bamboo plants on `bamboo-farming.html`.
- **Photo Gallery**: Filterable photo showcase with lightbox image preview.
- **Direct Reservation Engine**: Modal interface generating pre-formatted WhatsApp booking enquiries.

---

## 📁 Repository Structure

```
ebanashree/
├── index.html              # Main homepage & retreat overview
├── bamboo-farming.html     # Bamboo farming science & carbon calculator page
├── package.json            # Node.js dependencies & scripts
├── vite.config.js          # Vite build configuration
├── project.md              # Detailed project concept & vision document
├── public/                 # Static public assets & images
│   └── images/             # High-res photos (eco huts, bamboo forest, co-founders)
└── src/                    # Application source files
    ├── css/                # Custom CSS styling (main.css, components.css, animations.css)
    └── js/                 # ES modules (data.js, main.js, booking.js, gallery.js, map.js)
```

---

## 🛠️ Getting Started & How to Use

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your system.

### 2. Installation
Clone the repository and install dependencies:

```bash
# Clone the repository
git clone git@github.com:sanjeevsenapati/ebanashree.git
cd ebanashree

# Install dependencies
npm install
```

### 3. Run Locally (Development Mode)
Start the local development server with hot module replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the website.

---

## 📦 How to Create / Build the Static Site

To compile and build the static website for production deployment:

```bash
npm run build
```

This command generates an optimized, minified production build in the `dist/` directory containing all compiled HTML, CSS, JavaScript, and optimized image assets.

### Preview Production Build Locally
To test the built static files locally before deploying:

```bash
npm run preview
```

---

## 🚀 Branching & Deployment Strategy

This repository utilizes a two-branch workflow:

1. **`main` branch**: Contains all source code, components, styles, and development files.
2. **`host` branch**: Hosts only the compiled static distribution output (`dist/` directory contents) for web hosting (e.g., GitHub Pages or static host).

### How to Update `main` and Push Static Build to `host`

#### Step 1: Commit and Push Source Code to `main` Branch
```bash
git add .
git commit -m "Update source code and README"
git push origin main
```

#### Step 2: Build the Static Site
```bash
npm run build
```

#### Step 3: Deploy `dist/` Contents to `host` Branch
You can push the generated `dist/` folder contents directly to the `host` branch using `git subtree`:

```bash
# Push contents of dist directory to remote host branch
git subtree push --prefix dist origin host
```

*Alternatively, if using an automated workflow or manual orphan branch:*
```bash
git checkout host
# Copy dist contents into root
git add .
git commit -m "Deploy production static build"
git push origin host
git checkout main
```

---

## 📄 License & Credits

- **eBanashree Bamboo Farm & Eco Retreat**, Keonjhar, Odisha.
- **Co-Founders & Owners**: Minaketan Sethi & Sanjeev Senapati.
