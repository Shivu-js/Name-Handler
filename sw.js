const CACHE_NAME = "name-app-v1";

const files = [
  "/",
  "index.html",
  "styyle.css",
  "scriptt.js"
];

self.addEventListener("install", (event)=>{

  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(files))
  );

});

self.addEventListener("fetch",(event)=>{

  event.respondWith(
    caches.match(event.request)
    .then(res => res || fetch(event.request))
  );

});