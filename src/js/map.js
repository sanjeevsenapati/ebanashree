/**
 * eBanashree Interactive 50-Acre Farm Visualizer
 */
import { farmZones } from './data.js';

export function initFarmVisualizer() {
  const container = document.getElementById('farmZonesContainer');

  if (!container) return;

  container.innerHTML = farmZones.map(zone => `
    <div class="farm-zone-card fade-up">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 0.75rem;">
        <span class="zone-number">${zone.code}</span>
        <span style="font-size: 1.5rem;">${zone.icon}</span>
      </div>
      <h3 class="zone-title">${zone.title}</h3>
      <div style="font-size: 0.8rem; font-weight: 600; color: var(--accent-gold); margin-bottom: 0.5rem;">${zone.subtitle}</div>
      <p class="zone-desc">${zone.desc}</p>
    </div>
  `).join('');
}
