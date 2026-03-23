import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { temples } from '../data/temples.js';

renderHeader('templestay');
renderFooter();

// ── TS temples ────────────────────────────────
const tsTemples = temples.filter(t => t.templestay?.available);

// ── Render TS cards ───────────────────────────
function renderTsCards(list) {
  const grid = document.getElementById('tsTemplesGrid');
  grid.innerHTML = list.map(t => `
    <div class="ts-card" onclick="location.href='./temple-detail.html?id=${t.id}'">
      <div class="ts-card-image">
        <img src="${t.images[0]}" alt="${t.name}" loading="lazy">
        <div class="card-badges" style="position:absolute;top:12px;left:12px;">
          <span class="badge badge-region">${t.region}</span>
        </div>
      </div>
      <div class="ts-card-body">
        <div class="ts-card-programs">
          ${t.templestay.programs.map(p => `<span class="ts-card-program">${p}</span>`).join('')}
        </div>
        <h3 class="card-title" style="margin-bottom:4px;">${t.name}</h3>
        <p class="card-region" style="margin-bottom:12px;">${t.region} · ${t.city}</p>
        <p class="card-desc">${t.shortDesc}</p>
        <div class="card-footer" style="padding-top:var(--space-4);border-top:1px solid var(--color-border);margin-top:var(--space-4);">
          <div>
            <div class="ts-card-price">${t.templestay.pricePerNight.toLocaleString()}원~</div>
            <div class="ts-card-price-note">1박 2일 / 1인 기준</div>
          </div>
          <span class="btn btn-accent btn-sm">자세히 보기</span>
        </div>
      </div>
    </div>
  `).join('');
}

renderTsCards(tsTemples);

// ── Filter ────────────────────────────────────
document.getElementById('tsRegionFilter').addEventListener('change', function () {
  const region = this.value;
  const filtered = region ? tsTemples.filter(t => t.region === region) : tsTemples;
  renderTsCards(filtered);
});

document.getElementById('tsProgramFilter').addEventListener('change', function () {
  const prog = this.value;
  const filtered = prog ? tsTemples.filter(t => t.templestay.programs.includes(prog)) : tsTemples;
  renderTsCards(filtered);
});

// ── Program tabs ──────────────────────────────
document.querySelectorAll('.program-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.program-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.program-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('prog-' + tab.dataset.prog).classList.add('active');
  });
});

// ── FAQ accordion ─────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
