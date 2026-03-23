export function renderFooter() {
  const base = location.pathname.includes('/pages/') ? '../' : './';

  document.getElementById('footer').innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="${base}index.html" class="site-logo">
            <span class="logo-icon">☸</span> 한국의 사찰
          </a>
          <p>전국 사찰 정보를 한 곳에서.<br>
          여행, 문화, 힐링을 위한<br>
          대한민국 사찰 안내 서비스입니다.</p>
        </div>
        <div class="footer-col">
          <h4>사찰 탐색</h4>
          <ul>
            <li><a href="${base}pages/map.html">지도로 찾기</a></li>
            <li><a href="${base}pages/map.html?region=서울">서울 사찰</a></li>
            <li><a href="${base}pages/map.html?region=경북">경북 사찰</a></li>
            <li><a href="${base}pages/map.html?region=전남">전남 사찰</a></li>
            <li><a href="${base}pages/map.html?templestay=true">템플스테이 사찰</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>템플스테이</h4>
          <ul>
            <li><a href="${base}pages/templestay.html">템플스테이 안내</a></li>
            <li><a href="${base}pages/templestay.html#programs">프로그램 소개</a></li>
            <li><a href="${base}pages/templestay.html#price">가격 안내</a></li>
            <li><a href="${base}pages/templestay.html#faq">자주 묻는 질문</a></li>
            <li><a href="https://www.templestay.com" target="_blank" rel="noopener">공식 예약 사이트 ↗</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>관련 링크</h4>
          <ul>
            <li><a href="https://www.jogyesa.kr" target="_blank" rel="noopener">대한불교조계종 ↗</a></li>
            <li><a href="https://www.templestay.com" target="_blank" rel="noopener">한국불교문화사업단 ↗</a></li>
            <li><a href="https://english.visitkorea.or.kr" target="_blank" rel="noopener">한국관광공사 ↗</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 한국의 사찰. 본 서비스는 사찰 안내 목적으로 제작되었습니다.</p>
        <p>사진 출처: Unsplash · 지도: Kakao Maps API</p>
      </div>
    </footer>
    <button class="scroll-top-btn" id="scrollTopBtn" aria-label="맨 위로">↑</button>
  `;

  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
