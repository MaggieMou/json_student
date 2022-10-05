// The name of the cache
const cacheName = 'cache-members';

// On first load, create the cache 
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      // Fetch data & add fetch result to cache
      return cache.addAll(['/members/', '/members/index.html', '/members/nina.png']);
    })
  );
});

// If a file is not available online (if offline)   
// open the cache, and look for a match
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then(cache => cache.match(event.request))
    )
  );
});
