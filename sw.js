// 每次修改代码后，手动改一下版本号（v3, v4...）
const CACHE_NAME = 'mybarcode-v4';

const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './js/jsbarcode.js',
  './js/qrcode.js',
  './js/xlsx.js',
  './js/bwipjs.js',
  './js/html2canvas.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // addAll 如果其中有一个文件路径错了，整个 Service Worker 就会安装失败
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 激活时清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
