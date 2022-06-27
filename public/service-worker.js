// change static cache name after the app changed
const staticCacheName = "dabravesce-sw-v4";
const dynamicCacheName = "dabravesce-sw-d-v4";

const assetsToCache = [
  ".", // or 'index.html' | ?i=0-0-0-0
  "https://www.dabravesce.by/static/js/albums/Gospels/John.js",
  "https://www.dabravesce.by/static/js/albums/Gospels/Luke.js",
  "https://www.dabravesce.by/static/js/albums/Gospels/Mark.js",
  "https://www.dabravesce.by/static/js/albums/Gospels/Matthew.js",
  "https://www.dabravesce.by/static/js/albums/Prayers/Canons.js",
  "https://www.dabravesce.by/static/js/albums/Prayers/Daily.js",
  "https://www.dabravesce.by/static/js/albums/Prayers/Easter.js",
  "https://www.dabravesce.by/static/js/albums/Prayers/Housel.js",
  "https://www.dabravesce.by/static/js/albums/Prayers/Lithury.js",
  "https://www.dabravesce.by/static/js/albums/Songs/Christmas.js",
  "https://www.dabravesce.by/static/js/albums/Songs/Easters.js",
  "https://www.dabravesce.by/static/js/albums/Songs/Folk.js",
  "https://www.dabravesce.by/static/js/albums/Songs/Prayal.js",
  "https://www.dabravesce.by/static/js/albums/albums.js",
  "https://www.dabravesce.by/static/js/albums/apostles.js",
  "https://www.dabravesce.by/static/js/albums/contacts.js",
  "https://www.dabravesce.by/static/js/albums/epistles.js",
  "https://www.dabravesce.by/static/js/albums/gospels.js",
  "https://www.dabravesce.by/static/js/albums/prayers.js",
  "https://www.dabravesce.by/static/js/albums/songs.js",
];

self.addEventListener("install", async () => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(assetsToCache);
});

// uncomment on app change to delete the cached versions of SW
/*
self.addEventListener("activate", async (event) => {
  const cacheNames = await caches.keys();
  // delete all SW cached versions except for the current one
  await Promise.all(
    cacheNames
      .filter((name) => name !== staticCacheName)
      .filter((name) => name !== dynamicCacheName)
      .map((name) => caches.delete(name))
  );
});
*/

self.addEventListener("fetch", (event) => {
  const { request } = event;
  event.respondWith(cacheFirst(request));

  // console.log(event.request.url)
  // const { request } = event
  // const url = new URL(request.url)

  // if (url.origin === location.origin) {
  //     event.respondWith(cacheFirst(request))
  // } else {
  //     event.respondWith(networkFirst(request))
  // }
});

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request).response; // .response
  return cachedResponse ?? (await fetch(request)); // fetch if chached nothing
}

// async function networkFirst(request) {
// const cache = await caches.open(dynamicCacheName)
// try {
// const response = await fetch(request)
// await cache.put(request, response.clone())
// return response
// } catch (e) {
// const cached = await cache.match(request)
// return cached ?? caches.match('offline.html')
// // ?? when there is no network and cache is empty
// // offline.html is a file to create
// }
// }
