import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { getTempleById } from '../data/temples.js';
import { getQueryParam } from '../utils/router.js';

renderHeader('');
renderFooter();

const id     = getQueryParam('id');
const temple = getTempleById(id);

if (!temple) {
  document.getElementById('detailContent').innerHTML = `
    <div style="text-align:center;padding:var(--space-20);color:var(--color-text-muted);">
      <div style="font-size:64px;margin-bottom:var(--space-6);">🏯</div>
      <h2 style="font-family:var(--font-heading);margin-bottom:var(--space-4);">사찰을 찾을 수 없습니다.</h2>
      <a href="./map.html" class="btn btn-primary">사찰 목록으로</a>
    </div>`;
} else {
  document.title = `${temple.name} - 한국의 사찰`;
  renderDetail(temple);

  // Init Kakao mini map
  window.initDetailMap = function () {
    if (typeof kakao === 'undefined') return;
    const map = new kakao.maps.Map(document.getElementById('detailMap'), {
      center: new kakao.maps.LatLng(temple.lat, temple.lng),
      level: 4,
    });
    new kakao.maps.Marker({
      position: new kakao.maps.LatLng(temple.lat, temple.lng),
      map,
      title: temple.name,
    });
  };

  if (typeof kakao !== 'undefined' && kakao.maps) {
    kakao.maps.load(window.initDetailMap);
  }
}

function renderDetail(t) {
  const hasTs = t.templestay?.available;

  document.getElementById('detailContent').innerHTML = `
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <a href="../index.html">홈</a>
      <span>›</span>
      <a href="./map.html">사찰 탐색</a>
      <span>›</span>
      <span>${t.name}</span>
    </nav>

    <!-- Header -->
    <div class="detail-header">
      <div class="detail-badges">
        <span class="badge badge-region">${t.region} · ${t.city}</span>
        ${hasTs ? '<span class="badge badge-templestay">템플스테이 운영</span>' : ''}
        ${t.tags.slice(0, 2).map(tag => `<span class="badge badge-gold">${tag}</span>`).join('')}
      </div>
      <div class="detail-header-top">
        <div>
          <h1 class="detail-title">${t.name}</h1>
          <p class="detail-english">${t.englishName}</p>
        </div>
        <a href="./map.html" class="btn btn-outline btn-sm">← 목록으로</a>
      </div>
      <div class="detail-meta">
        <span class="detail-meta-item">📍 <strong>${t.address}</strong></span>
        <span class="detail-meta-item">☎ <a href="tel:${t.phone}">${t.phone}</a></span>
        ${t.website ? `<span class="detail-meta-item">🌐 <a href="${t.website}" target="_blank" rel="noopener">공식 웹사이트</a></span>` : ''}
      </div>
    </div>

    <!-- Gallery -->
    <div class="gallery">
      <div class="gallery-main" id="galleryMain" onclick="openModal(0)">
        <img src="${t.images[0]}" alt="${t.name}" id="mainImg">
        <div class="gallery-main-overlay">📷 클릭하여 크게 보기</div>
      </div>
      ${t.images.length > 1 ? `
        <div class="gallery-thumbs">
          ${t.images.map((img, i) => `
            <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="selectThumb(${i})">
              <img src="${img}" alt="${t.name} ${i + 1}" loading="lazy">
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>

    <!-- Two-column layout -->
    <div class="detail-grid">
      <!-- Main content -->
      <div>
        <!-- Description -->
        <div class="detail-section">
          <h2><span class="section-icon">📜</span> 사찰 소개</h2>
          <p class="detail-desc">${t.description}</p>
        </div>

        <!-- Basic info -->
        <div class="detail-section">
          <h2><span class="section-icon">ℹ️</span> 기본 정보</h2>
          <table class="info-table">
            <tr><td>창건</td><td>${t.founded}</td></tr>
            <tr><td>종파</td><td>${t.denomination}</td></tr>
            <tr><td>본존불</td><td>${t.mainBuddha}</td></tr>
            <tr><td>주소</td><td>${t.address}</td></tr>
            <tr><td>전화</td><td><a href="tel:${t.phone}">${t.phone}</a></td></tr>
            ${t.website ? `<tr><td>홈페이지</td><td><a href="${t.website}" target="_blank" rel="noopener">${t.website}</a></td></tr>` : ''}
          </table>
        </div>

        ${hasTs ? renderTemplestaySection(t.templestay) : ''}

        <!-- Nearby -->
        <div class="detail-section">
          <h2><span class="section-icon">📍</span> 주변 정보</h2>
          <div class="nearby-tabs">
            <button class="nearby-tab active" onclick="switchNearby('restaurants', this)">🍽️ 음식점</button>
            <button class="nearby-tab" onclick="switchNearby('attractions', this)">🗺️ 관광지</button>
          </div>
          <div id="nearby-restaurants" class="nearby-panel active">
            ${renderNearbyList(t.nearbyRestaurants, 'restaurant')}
          </div>
          <div id="nearby-attractions" class="nearby-panel">
            ${renderNearbyList(t.nearbyAttractions, 'attraction')}
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="detail-sidebar">
        <!-- Mini map -->
        <div class="detail-section">
          <h2><span class="section-icon">🗺️</span> 위치</h2>
          <div id="detailMap"></div>
          <p class="map-address">📍 ${t.address}</p>
          <a href="https://map.kakao.com/link/to/${encodeURIComponent(t.name)},${t.lat},${t.lng}"
             target="_blank" rel="noopener"
             class="btn btn-outline btn-sm" style="margin-top:var(--space-3);width:100%;justify-content:center;">
            카카오맵에서 길 찾기
          </a>
        </div>

        ${hasTs ? `
          <div class="detail-section ts-section" style="text-align:center;">
            <h2 style="justify-content:center;"><span class="section-icon">🧘</span> 템플스테이 예약</h2>
            <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-5);">
              한국불교문화사업단 공식 예약 사이트를 통해 예약 가능합니다.
            </p>
            <a href="https://www.templestay.com" target="_blank" rel="noopener"
               class="btn btn-accent btn-lg" style="width:100%;justify-content:center;">
              지금 예약하기
            </a>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  // Gallery interactions
  window.selectThumb = function(i) {
    document.getElementById('mainImg').src = t.images[i];
    document.querySelectorAll('.gallery-thumb').forEach((th, idx) => {
      th.classList.toggle('active', idx === i);
    });
  };

  // Nearby tab switch
  window.switchNearby = function(type, btn) {
    document.querySelectorAll('.nearby-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nearby-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('nearby-' + type).classList.add('active');
  };

  // Modal
  window.openModal = function(i) {
    document.getElementById('lightboxImg').src = t.images[i];
    document.getElementById('lightboxModal').classList.add('open');
  };
}

function renderTemplestaySection(ts) {
  return `
    <div class="detail-section ts-section">
      <h2><span class="section-icon">🧘</span> 템플스테이</h2>
      <div class="ts-programs">
        ${ts.programs.map(p => `<span class="ts-program-tag">${p}</span>`).join('')}
      </div>
      <div class="ts-price-box">
        <div>
          <div class="ts-price-label">1박 2일 (1인 기준)</div>
          <div class="ts-price-amount">${ts.pricePerNight.toLocaleString()}원</div>
        </div>
        <div style="text-align:right;">
          <div class="ts-price-label">당일형</div>
          <div class="ts-price-amount">${ts.pricePerDay.toLocaleString()}원</div>
        </div>
      </div>
      <p class="ts-desc">${ts.description}</p>
      <div class="ts-schedule">
        <div class="ts-schedule-title">🕐 일정 안내 (예시)</div>
        <ul>${ts.schedule.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <p style="font-size:var(--text-xs);color:var(--color-text-muted);">
        ※ 수용 인원: 최대 ${ts.capacity}명 · 예약 문의: ${ts.contact}
      </p>
    </div>
  `;
}

function renderNearbyList(items, type) {
  if (!items || items.length === 0) return '<p style="color:var(--color-text-muted);font-size:var(--text-sm);">정보가 없습니다.</p>';
  const icon = type === 'restaurant' ? '🍽️' : '🏛️';
  return `<div class="nearby-list">${items.map(item => `
    <div class="nearby-item">
      <div class="nearby-icon">${icon}</div>
      <div class="nearby-info">
        <div class="nearby-name">${item.name}</div>
        <div class="nearby-meta">
          <span>${item.category}</span>
          <span>📍 ${item.distance}</span>
          ${item.rating ? `<span class="nearby-rating">★ ${item.rating}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('')}</div>`;
}
