const CACHE_NAME = 'fin-portfolio-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // Додай сюди посилання на зовнішні CSS/JS, якщо вони використовуються,
  // наприклад: 'https://cdn.tailwindcss.com',
  // Або іконки, якщо вони є локально.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
