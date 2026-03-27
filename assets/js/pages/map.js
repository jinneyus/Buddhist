import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { temples, filterTemples } from '../data/temples.js';
import { getQueryParam } from '../utils/router.js';

renderHeader('map');
renderFooter();

// ── State ─────────────────────────────────────
let currentFilters = {
  search:        getQueryParam('search') || '',
  region:        getQueryParam('region') || '',
  templestayOnly: getQueryParam('templestay') === 'true',
};
let kakaoMap    = null;
let markers     = [];
let infowindow  = null;
let activeCard  = null;

// ── DOM refs ──────────────────────────────────
const searchInput    = document.getElementById('sidebarSearch');
const regionSelect   = document.getElementById('regionSelect');
const tsCheck        = document.getElementById('tsOnlyCheck');
const templeList     = document.getElementById('templeList');
const resultCount    = document.getElementById('resultCount');

// Pre-fill from URL params
searchInput.value = currentFilters.search;
regionSelect.value = currentFilters.region;
tsCheck.checked = currentFilters.templestayOnly;

// ── Kakao Maps init ───────────────────────────
function initMap() {
  const container = document.getElementById('kakaoMap');
  kakaoMap = new kakao.maps.Map(container, {
    center: new kakao.maps.LatLng(36.3, 127.8),
    level: 8,
  });
  infowindow = new kakao.maps.InfoWindow({ zIndex: 1, removable: true });
  renderAll();
}

// ── Marker & List render ──────────────────────
function renderAll() {
  const filtered = filterTemples(currentFilters);
  renderList(filtered);
  renderMarkers(filtered);
  resultCount.innerHTML = `<strong>${filtered.length}</strong>개의 사찰`;
}

function renderList(list) {
  if (list.length === 0) {
    templeList.innerHTML = `
      <div style="text-align:center;padding:var(--space-12);color:var(--color-text-muted);">
        <div style="font-size:40px;margin-bottom:var(--space-4);">🏯</div>
        <p>검색 결과가 없습니다.</p>
      </div>`;
    return;
  }
  templeList.innerHTML = list.map(t => createListCard(t)).join('');

  // Click events
  templeList.querySelectorAll('.list-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = Number(card.dataset.id);
      const temple = temples.find(t => t.id === id);
      if (!temple || !kakaoMap) return;

      // Highlight card
      document.querySelectorAll('.list-card').forEach(c => c.classList.remove('highlighted'));
      card.classList.add('highlighted');

      // Pan to marker
      kakaoMap.panTo(new kakao.maps.LatLng(temple.lat, temple.lng));
      kakaoMap.setLevel(5);

      // Show infowindow
      const marker = markers.find(m => m.templeId === id);
      if (marker) showInfoWindow(temple, marker);
    });
  });
}

function createListCard(t) {
  const hasTs = t.templestay?.available;
  return `
    <div class="list-card" data-id="${t.id}">
      <div class="list-card-img">
        <img src="${t.images[0]}" alt="${t.name}" loading="lazy">
      </div>
      <div class="list-card-body">
        <div class="list-card-top">
          <span class="list-card-name">${t.name}</span>
          <span class="list-card-region">${t.region}</span>
        </div>
        <p class="list-card-desc">${t.shortDesc}</p>
        <div class="list-card-footer">
          ${hasTs ? '<span class="badge badge-templestay">템플스테이</span>' : ''}
          <a href="../pages/temple-detail.html?id=${t.id}" class="btn btn-primary btn-sm" onclick="event.stopPropagation()">상세보기</a>
        </div>
      </div>
    </div>
  `;
}

function renderMarkers(list) {
  // Remove old markers
  markers.forEach(m => m.marker.setMap(null));
  markers = [];

  list.forEach(t => {
    const markerPos = new kakao.maps.LatLng(t.lat, t.lng);
    const marker = new kakao.maps.Marker({
      position: markerPos,
      title: t.name,
      map: kakaoMap,
    });
    markers.push({ templeId: t.id, marker });

    kakao.maps.event.addListener(marker, 'click', () => {
      showInfoWindow(t, marker);

      // Highlight list card
      document.querySelectorAll('.list-card').forEach(c => c.classList.remove('highlighted'));
      const card = templeList.querySelector(`[data-id="${t.id}"]`);
      if (card) {
        card.classList.add('highlighted');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });
}

function showInfoWindow(temple, marker) {
  const content = `
    <div class="kakao-info-window" onclick="location.href='../pages/temple-detail.html?id=${temple.id}'">
      <img src="${temple.images[0]}" alt="${temple.name}">
      <div class="kakao-info-body">
        <div class="kakao-info-name">${temple.name}</div>
        <div class="kakao-info-region">${temple.region} · ${temple.city}</div>
        ${temple.templestay?.available ? '<span class="badge badge-templestay" style="margin-bottom:8px;display:inline-flex;">템플스테이</span>' : ''}
        <a href="../pages/temple-detail.html?id=${temple.id}" class="kakao-info-link" onclick="event.stopPropagation()">자세히 보기</a>
      </div>
    </div>`;
  infowindow.setContent(content);
  infowindow.open(kakaoMap, marker.marker || marker);
}

// ── Filter events ─────────────────────────────
searchInput.addEventListener('input', () => {
  currentFilters.search = searchInput.value;
  renderAll();
});

regionSelect.addEventListener('change', () => {
  currentFilters.region = regionSelect.value;
  renderAll();
});

tsCheck.addEventListener('change', () => {
  currentFilters.templestayOnly = tsCheck.checked;
  renderAll();
});

// ── Kakao Maps SDK load ───────────────────────
if (typeof kakao !== 'undefined') {
  kakao.maps.load(initMap);
} else {
  document.getElementById('kakaoMap').innerHTML =
    `<div style="display:flex;align-items:center;justify-content:center;height:100%;background:#f5f5f5;color:#888;flex-direction:column;gap:12px;">
      <span style="font-size:48px">🗺️</span>
      <p style="font-size:14px">지도를 불러오지 못했습니다.</p>
      <p style="font-size:12px;color:#aaa;">Kakao Maps API 키 또는 도메인 등록을 확인해 주세요.</p>
    </div>`;
  renderAll();
}
