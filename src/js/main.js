/**
 * eBanashree Main Entry & Application Controller
 */
import { siteConfig, accommodations, experiences, bambooForestBenefits, teamMembers, eventDays, deforestationData } from './data.js';
import { initBookingEngine } from './booking.js';
import { initGalleryEngine } from './gallery.js';
import { initFarmVisualizer } from './map.js';

document.addEventListener('DOMContentLoaded', () => {
  // 0. Coming Soon Popup Logic
  const comingSoonBackdrop = document.getElementById('comingSoonModalBackdrop');
  const comingSoonClose = document.getElementById('comingSoonCloseBtn');
  const comingSoonExplore = document.getElementById('comingSoonExploreBtn');

  if (comingSoonBackdrop && !sessionStorage.getItem('comingSoonDismissed')) {
    setTimeout(() => {
      comingSoonBackdrop.classList.add('active');
    }, 800); // Slight delay for effect
  }

  function dismissComingSoon() {
    if (comingSoonBackdrop) {
      comingSoonBackdrop.classList.remove('active');
      sessionStorage.setItem('comingSoonDismissed', 'true');
    }
  }

  if (comingSoonClose) comingSoonClose.addEventListener('click', dismissComingSoon);
  if (comingSoonExplore) comingSoonExplore.addEventListener('click', dismissComingSoon);

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

  // 4c. Render Team Members Grouped by Category
  const teamGrid = document.getElementById('teamGridContainer');
  if (teamGrid) {
    // Group members by category
    const groupedMembers = teamMembers.reduce((acc, member) => {
      acc[member.category] = acc[member.category] || [];
      acc[member.category].push(member);
      return acc;
    }, {});

    teamGrid.innerHTML = Object.entries(groupedMembers).map(([category, members]) => `
      <div class="team-category-section" style="margin-bottom: 2rem;">
        <h3 style="margin-top: 1rem; margin-bottom: 1.5rem; color: var(--primary-green); font-family: var(--font-serif); font-size: 1.8rem;" class="fade-up">${category}</h3>
        <div class="advisors-cards-grid" style="margin-bottom: 1.5rem;">
          ${members.map(member => `
            <div class="founder-card fade-up">
              <img src="${member.image}" alt="${member.name} - ${member.role}" class="founder-card-img" style="height: 220px;" loading="lazy" decoding="async" />
              <div class="founder-card-body">
                <h3 class="founder-name">${member.name}</h3>
                <span class="founder-role">${member.role}</span>
                <p class="founder-bio">${member.bio}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 4d. Render Event Days
  const eventsGrid = document.getElementById('eventsGridContainer');
  if (eventsGrid) {
    eventsGrid.innerHTML = eventDays.map(event => `
      <div class="exp-card fade-up visible">
        ${event.images && event.images.length > 0 ? `
          <div class="event-image-gallery">
            ${event.images.map(img => `<img src="${img}" alt="${event.title}" class="event-gallery-img" loading="lazy" />`).join('')}
          </div>
        ` : ''}
        <div style="font-size:0.85rem; font-weight:700; color:var(--accent-gold-light); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem; margin-top: 0.5rem;">
          ${event.date}
        </div>
        <h3 class="exp-title">${event.title}</h3>
        <p class="exp-desc">${event.desc}</p>
      </div>
    `).join('');
  }

  // 4e. Render Deforestation Section (Metrics, Pillars, Comparison)
  const deforestMetricsContainer = document.getElementById('deforestationMetricsGrid');
  if (deforestMetricsContainer && deforestationData.metrics) {
    deforestMetricsContainer.innerHTML = deforestationData.metrics.map(m => `
      <div class="deforest-stat-card fade-up">
        <div class="deforest-stat-num">${m.value}</div>
        <div class="deforest-stat-label">${m.label}</div>
        <div class="deforest-stat-sub">${m.sub}</div>
      </div>
    `).join('');
  }

  const deforestPillarsContainer = document.getElementById('deforestationPillarsGrid');
  if (deforestPillarsContainer && deforestationData.pillars) {
    deforestPillarsContainer.innerHTML = deforestationData.pillars.map(p => `
      <div class="deforest-card fade-up">
        <div class="deforest-card-header">
          <div class="deforest-card-icon">${p.icon}</div>
          <span class="deforest-card-badge">${p.badge}</span>
        </div>
        <h3 class="deforest-card-title">${p.title}</h3>
        <p class="deforest-card-desc">${p.desc}</p>
        <div class="deforest-card-footer">
          <span class="deforest-footer-stat">${p.stat}</span>
          <span class="deforest-footer-label">${p.statLabel}</span>
        </div>
      </div>
    `).join('');
  }

  const deforestComparisonContainer = document.getElementById('deforestationComparisonBody');
  if (deforestComparisonContainer && deforestationData.comparisons) {
    deforestComparisonContainer.innerHTML = deforestationData.comparisons.map(c => `
      <tr>
        <td style="font-weight:600; color:var(--text-main);">${c.feature}</td>
        <td class="cell-timber">🪓 ${c.timber}</td>
        <td class="cell-bamboo">🎋 ${c.bamboo}</td>
      </tr>
    `).join('');
  }

  const deforestChallengesContainer = document.getElementById('deforestationChallengesGrid');
  if (deforestChallengesContainer && deforestationData.challenges) {
    deforestChallengesContainer.innerHTML = deforestationData.challenges.map(ch => `
      <div class="deforest-challenge-card fade-up">
        <div class="challenge-header">
          <span class="challenge-badge">${ch.badge}</span>
          <div class="challenge-icon">${ch.icon}</div>
        </div>
        <h3 class="challenge-title">${ch.challenge}</h3>
        <p class="challenge-desc">${ch.description}</p>
        <div class="challenge-commitment-box">
          <span class="challenge-action-tag">🎋 Our Direct Action</span>
          <p class="challenge-commitment-text">${ch.commitment}</p>
        </div>
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
