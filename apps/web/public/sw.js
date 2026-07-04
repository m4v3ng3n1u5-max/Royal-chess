// Simple service worker for basic offline caching of shell assets and routes
const CACHE_NAME = 'royal-chess-shell-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/favicon.ico',
  '/manifest.json',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Network-first for API requests, cache-first for navigation and static assets
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    // Serve cached assets first
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((res) => {
          // Optionally cache fetched assets
          if (event.request.method === 'GET') {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, res.clone()));
          }
          return res.clone();
        }).catch(() => {
          // Fallback to root for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
        });
      })
    );
  } else {
    // For cross-origin requests try network first
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
