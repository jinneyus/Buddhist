export function renderHeader(activePage = '') {
  const base = location.pathname.includes('/pages/') ? '../' : './';
  const navItems = [
    { label: '사찰 탐색', href: `${base}pages/map.html`, key: 'map' },
    { label: '템플스테이', href: `${base}pages/templestay.html`, key: 'templestay' },
  ];

  const navLinks = navItems
    .map(item => `<a href="${item.href}" class="${activePage === item.key ? 'active' : ''}">${item.label}</a>`)
    .join('');

  const mobileLinks = navItems
    .map(item => `<a href="${item.href}">${item.label}</a>`)
    .join('');

  document.getElementById('header').innerHTML = `
    <header class="site-header">
      <a href="${base}index.html" class="site-logo">
        <span class="logo-icon">☸</span>
        한국의 사찰
      </a>
      <nav class="site-nav">
        ${navLinks}
        <a href="${base}pages/templestay.html" class="btn btn-gold btn-sm header-cta">템플스테이 예약</a>
      </nav>
      <button class="hamburger-btn" id="hamburgerBtn" aria-label="메뉴 열기">
        <span></span><span></span><span></span>
      </button>
    </header>
    <nav class="mobile-nav" id="mobileNav">
      ${mobileLinks}
      <a href="${base}pages/templestay.html" style="color:var(--color-gold-light);font-weight:700;">템플스테이 예약</a>
    </nav>
  `;

  document.getElementById('hamburgerBtn').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.toggle('open');
  });
}
