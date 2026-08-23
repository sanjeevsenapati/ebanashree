/**
 * eBanashree Gallery & Fullscreen Lightbox Engine
 */
import { galleryItems } from './data.js';

export function initGalleryEngine() {
  const galleryContainer = document.getElementById('galleryGridContainer');
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  let currentCategory = 'all';

  function renderGallery(cat = 'all') {
    if (!galleryContainer) return;

    const filtered = cat === 'all' ? galleryItems : galleryItems.filter(item => item.category === cat);

    galleryContainer.innerHTML = filtered.map(item => `
      <div class="gallery-item fade-up visible" data-id="${item.id}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <div class="gallery-caption">${item.title}</div>
        </div>
      </div>
    `).join('');

    // Attach click events for lightbox
    document.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('click', () => {
        const id = parseInt(el.getAttribute('data-id'));
        const item = galleryItems.find(g => g.id === id);
        if (item) openLightbox(item);
      });
    });
  }

  function openLightbox(item) {
    if (lightboxModal && lightboxImg) {
      lightboxImg.src = item.image;
      if (lightboxCaption) lightboxCaption.textContent = item.title;
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (filterButtons) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter') || 'all';
        renderGallery(currentCategory);
      });
    });
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  renderGallery();
}
