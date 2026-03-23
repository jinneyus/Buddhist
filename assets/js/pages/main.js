import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { createTempleCard } from '../components/card.js';
import { temples, filterTemples } from '../data/temples.js';

renderHeader('home');
renderFooter();

// ── Hero search ──────────────────────────────
const searchInput = document.getElementById('heroSearch');
const searchBtn   = document.getElementById('heroSearchBtn');

function doSearch() {
  const q = searchInput.value.trim();
  location.href = `./pages/map.html${q ? '?search=' + encodeURIComponent(q) : ''}`;
}

searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

// ── Region buttons ────────────────────────────
const regionData = [
  { key: '서울', icon: '🏙️', count: temples.filter(t => t.region === '서울').length },
  { key: '부산', icon: '🌊', count: temples.filter(t => t.region === '부산').length },
  { key: '경북', icon: '⛩️', count: temples.filter(t => t.region === '경북').length },
  { key: '경남', icon: '🏔️', count: temples.filter(t => t.region === '경남').length },
  { key: '전남', icon: '🌿', count: temples.filter(t => t.region === '전남').length },
  { key: '강원', icon: '❄️', count: temples.filter(t => t.region === '강원').length },
  { key: '충청', icon: '🌾', count: temples.filter(t => t.region === '충청').length },
];

const regionGrid = document.getElementById('regionGrid');
regionGrid.innerHTML = regionData.map(r => `
  <button class="region-btn" onclick="location.href='./pages/map.html?region=${encodeURIComponent(r.key)}'">
    <span class="region-icon">${r.icon}</span>
    <span class="region-name">${r.key}</span>
    <span class="region-count">${r.count > 0 ? r.count + '개' : '준비중'}</span>
  </button>
`).join('');

// ── Featured temples grid ────────────────────
const featuredGrid = document.getElementById('featuredGrid');
featuredGrid.innerHTML = temples.slice(0, 6).map(t =>
  createTempleCard(t, { linkBase: './pages/' })
).join('');

// ── Season tabs ───────────────────────────────
document.querySelectorAll('.season-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.season-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.season-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('season-' + tab.dataset.season).classList.add('active');
  });
});
