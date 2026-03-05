const CACHE_NAME = 'barcode-pro-v1';
// 需要缓存的资源列表
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

// 安装阶段：缓存所有静态资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 激活阶段：清理旧版本缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 拦截请求：优先从缓存读取
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果命中缓存则返回，否则发起网络请求
        return response || fetch(event.request);
      })
  );
});