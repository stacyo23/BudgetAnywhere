const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/style.css',
  '/db.js',
  '/index.js',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
]

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js")
        .then(reg => {
          console.log("We found your service worker file!", reg);
        });
    });
  }