// The name of the cache
const cacheName = 'cache-json_student';

// On first load, create the cache 
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      // Fetch data & add fetch result to cache
      return cache.addAll(['/json_student/', '/json_student/index.html', '/json_student/nina.png','/json_student/olivia.png', '/json_student/morten.png', 'json_student/mystyle.css', 'json_student/members.json ]);
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
