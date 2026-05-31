const CACHE_NAME = '123vietnamese-v1';
const BASE = '/123Vietnamese/';
const urlsToCache = [
  BASE,
  BASE + 'index.html',
  BASE + 'lessons-data.json',
  BASE + 'manifest.json',
  BASE + 'icon-192.png',
  BASE + 'icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
