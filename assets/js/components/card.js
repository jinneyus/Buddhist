export function createTempleCard(temple, options = {}) {
  const { linkBase = '../pages/', showPrice = false } = options;
  const hasTemplestay = temple.templestay?.available;

  return `
    <article class="temple-card" onclick="location.href='${linkBase}temple-detail.html?id=${temple.id}'">
      <div class="card-image">
        <img src="${temple.images[0]}" alt="${temple.name}" loading="lazy">
        <div class="card-badges">
          ${hasTemplestay ? '<span class="badge badge-templestay">템플스테이</span>' : ''}
          <span class="badge badge-region">${temple.region}</span>
        </div>
      </div>
      <div class="card-body">
        <span class="card-region">${temple.region} · ${temple.city}</span>
        <h3 class="card-title">${temple.name}</h3>
        <p class="card-desc">${temple.shortDesc}</p>
        <div class="card-tags">
          ${temple.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        ${showPrice && hasTemplestay ? `
          <div class="card-footer">
            <span class="card-price">1박 ${temple.templestay.pricePerNight.toLocaleString()}원~</span>
            <span class="btn btn-accent btn-sm">자세히 보기</span>
          </div>
        ` : `
          <div class="card-footer">
            <span class="btn btn-outline btn-sm">상세 정보</span>
          </div>
        `}
      </div>
    </article>
  `;
}
