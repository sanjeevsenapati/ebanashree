/**
 * eBanashree Booking & Enquiry Modal Engine
 */
import { siteConfig, accommodations } from './data.js';

export function initBookingEngine() {
  const modalBackdrop = document.getElementById('bookingModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const bookingForm = document.getElementById('bookingEnquiryForm');
  const accommodationSelect = document.getElementById('staySelect');

  // Populate accommodation select dropdown
  if (accommodationSelect) {
    accommodationSelect.innerHTML = accommodations.map(stay => `
      <option value="${stay.name}">${stay.name} (${stay.price} ${stay.period})</option>
    `).join('');
  }

  // Global trigger for opening booking modal
  window.openBookingModal = function(preferredStayName = '') {
    if (preferredStayName && accommodationSelect) {
      const matchingOpt = Array.from(accommodationSelect.options).find(opt => opt.value.includes(preferredStayName));
      if (matchingOpt) accommodationSelect.value = matchingOpt.value;
    }
    if (modalBackdrop) {
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeBookingModal = function() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', window.closeBookingModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) window.closeBookingModal();
    });
  }

  // Handle Form Submission -> Pre-fill WhatsApp message
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('guestName')?.value || 'Guest';
      const phone = document.getElementById('guestPhone')?.value || '';
      const stay = accommodationSelect?.value || 'Eco Hut';
      const checkin = document.getElementById('checkinDate')?.value || 'TBD';
      const checkout = document.getElementById('checkoutDate')?.value || 'TBD';
      const guests = document.getElementById('guestCount')?.value || '2 Adults';
      const note = document.getElementById('specialRequests')?.value || 'None';

      const messageText = `Namaste eBanashree! I would like to enquire about a stay:
• Name: ${name}
• Contact Phone: ${phone}
• Accommodation: ${stay}
• Check-in: ${checkin}
• Check-out: ${checkout}
• Guests: ${guests}
• Notes: ${note}`;

      const encodedMsg = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodedMsg}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Show confirmation message in UI
      alert(`Thank you, ${name}! Your booking request details have been prepared. Opening WhatsApp to send your enquiry directly to Minaketan Sethi & eBanashree team.`);

      window.closeBookingModal();
      bookingForm.reset();
    });
  }
}
