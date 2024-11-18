const CACHE_NAME = 'g320-guide-v1';
const urlsToCache = [
  '/KitchenBossG320/',
  '/KitchenBossG320/index.html',
  '/KitchenBossG320/script.js',
  '/KitchenBossG320/kitchenboss-g320.jpg',
  '/KitchenBossG320/manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap'
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
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
}); 