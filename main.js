// (A) FILES TO CACHE
const cName = "js-notice",
cFiles = [
  // (A1) STATIC FILES
  "notice-board.html",
  "style.css",
  "notice-board.js",
  "css/bootstrap.min.css",
  "css/all.min.css",
  "https://fonts.googleapis.com",
  "https://fonts.gstatic.com",
  "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
  "js/bootstrap.bundle.min.js",
  "js/all.min.js"
];

// (B) CREATE/INSTALL CACHE
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(cName)
    .then((cache) => { return cache.addAll(cFiles); })
    .catch((err) => { console.error(err) })
  );
});

// (C) LOAD FROM CACHE FIRST, FALLBACK TO NETWORK IF NOT FOUND
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request)
    .then((res) => { return res || fetch(evt.request); })
  );
});
