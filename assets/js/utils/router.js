export function getQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

export function navigateTo(path, params = {}) {
  const query = new URLSearchParams(params).toString();
  window.location.href = path + (query ? '?' + query : '');
}

export function getBasePath() {
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  return depth > 1 ? '../' : './';
}
