let cacheId = 'mws-rest-1';

// load the cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheId).then(cache => {
      return cache.addAll([
        '/',
        '../index.html',
        '../restaurant.html',
        '../css/styles.css',
        '../data/restaurants.json',
        '../img/imgNA.svg',
        './dbhelper.js',
        './main.js',
        './registerSW.js',
        './restaurant_info.js',
        ])
        .catch(error => {
          console.log('Cache open failed: ' + error);
        });
    }));
});

// serve from cache if it is there
self.addEventListener('fetch', (event) => {
  let req = event.request;
  let cacheReqUrl = new URL(event.request.url);
  if (event.request.url.includes('restaurant.html')) {
    const cacheUrl = 'restaurant.html';
    req = new Request(cacheUrl);
  }

  event.respondWith(
    caches.match(req).then(response => {
      return response || fetch(event.request)
        .then(fetchedRes => {
          return caches.open(cacheId).then(cache => {
            console.log('hit the cache');
            cache.put(event.request, fetchedRes.clone());
            return fetchedRes;
          });
        }).catch(error => {
          return new Response('Restaurant Reviews has no internet connection', {
            status: 404,
            statusText: 'Restaurant Reviews has no internet connection'
        });
      })
  }));
});