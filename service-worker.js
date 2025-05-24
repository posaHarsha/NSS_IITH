self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('scanner-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/html5-qrcode.min.js',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        '/beep.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
