/**
 * eBanashree Main Entry & Application Controller
 */
import { siteConfig, accommodations, experiences, bambooForestBenefits } from './data.js';
import { initBookingEngine } from './booking.js';
import { initGalleryEngine } from './gallery.js';
import { initFarmVisualizer } from './map.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Sticky & Transparent Navbar Logic
  const navbar = document.getElementById('mainNavbar');
  const heroSection = document.getElementById('hero');

  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.remove('scrolled');
      if (heroSection) navbar.classList.add('transparent');
    }
  }

  window.addEventListener('scroll', updateNavbar);
  updateNavbar();

  // 2. Initialize Mobile Navigation Overlay
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileOverlay = document.getElementById('mobileMenuOverlay');
  const mobileClose = document.getElementById('mobileMenuClose');

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener('click', () => {
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileClose && mobileOverlay) {
    mobileClose.addEventListener('click', () => {
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileOverlay) {
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // 3. Render Accommodations Grid
  const stayGrid = document.getElementById('accommodationsGrid');
  if (stayGrid) {
    stayGrid.innerHTML = accommodations.map(stay => `
      <div class="stay-card fade-up">
        <div class="stay-image-wrap">
          <img src="${stay.image}" alt="${stay.name}" loading="lazy" decoding="async" class="stay-image" />
          <span class="stay-tag">${stay.tagline}</span>
        </div>
        <div class="stay-content">
          <h3 class="stay-title">${stay.name}</h3>
          <p class="stay-desc">${stay.desc}</p>
          <div style="font-size:0.85rem; font-weight:600; color:var(--primary-green); margin-bottom: 0.75rem;">
            <span>👥 Occupancy: ${stay.occupancy}</span> • <span>🛏️ ${stay.bedConfig}</span>
          </div>
          <div class="stay-amenities">
            ${stay.amenities.map(am => `<span class="amenity-chip">${am}</span>`).join('')}
          </div>
          <div class="stay-footer" style="justify-content: center; margin-top: 1rem;">
            <button class="btn btn-primary" style="width: 100%;" onclick="openBookingModal('${stay.name}')">Enquire to Book</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Render & Filter Experiences Grid
  const expGrid = document.getElementById('experiencesGrid');
  const expFilterBtns = document.querySelectorAll('.exp-filter-btn');

  function renderExperiences(category = 'all') {
    if (!expGrid) return;
    const filtered = category === 'all' ? experiences : experiences.filter(e => e.category === category);

    expGrid.innerHTML = filtered.map(exp => `
      <div class="exp-card fade-up visible">
        <div class="exp-icon">${exp.icon}</div>
        <h3 class="exp-title">${exp.title}</h3>
        <p class="exp-desc">${exp.desc}</p>
        <button class="btn btn-outline" style="margin-top:auto; padding: 0.6rem 1.25rem; font-size: 0.85rem;" onclick="openBookingModal('Experience: ${exp.title}')">
          Enquire Activity
        </button>
      </div>
    `).join('');
  }

  if (expFilterBtns) {
    expFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        expFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-exp-filter') || 'all';
        renderExperiences(cat);
      });
    });
  }

  renderExperiences();

  // 4b. Render Bamboo Forest Health & Wellness Benefits Grid
  const benefitsGrid = document.getElementById('bambooBenefitsGrid');
  if (benefitsGrid) {
    benefitsGrid.innerHTML = bambooForestBenefits.map(b => `
      <div class="benefit-card fade-up">
        <div class="benefit-header">
          <div class="benefit-icon">${b.icon}</div>
          <div class="benefit-stat-chip">
            <span class="stat-chip-val">${b.stat}</span>
            <span class="stat-chip-lbl">${b.statLabel}</span>
          </div>
        </div>
        <h3 class="benefit-title">${b.title}</h3>
        <span class="benefit-subtitle">${b.subtitle}</span>
        <p class="benefit-desc">${b.desc}</p>
      </div>
    `).join('');
  }

  // 5. Initialize Sub-modules
  initBookingEngine();
  initGalleryEngine();
  initFarmVisualizer();

  // 6. Scroll Reveal Observer (Intersection Observer)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
    observer.observe(el);
  });
});
