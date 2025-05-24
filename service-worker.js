self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('nss-scanner-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/html5-qrcode.min.js',
        '/beep.ogg',
        '/icon-192.png',
        '/icon-512.png',
        '/service-worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
