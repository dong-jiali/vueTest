// serviceWorker.js
console.log('init service worker')

self.addEventListener('install', function (e) {
  e.waitUnitl(
    caches.open('v1').then(cache => {
      return cache.addAll([
        './index.html',
        './main.js'
      ])
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.responseWith(
    caches.match(event.request).then(function (response) {
      // 检查是否己经缓存过
      if (response) {
        var fetchRequest = fetch.request.clone()
        return fetch(fetchRequest).then(
          function (response) {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }
            var responseToCache = response.clone()
            caches.open('v1')
              .then(function (cache) {
                cache.put(event.request, responseToCache)
              })
            return response
          }
        )
      }
    })
  )
})
