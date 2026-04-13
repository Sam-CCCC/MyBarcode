const CACHE_NAME = 'barcodepro-v1.0';

// 这里的路径必须和你仓库中的实际路径完全一致
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './js/bwip-js-min.js',
  './js/xlsx.full.min.js'
];

// 安装 SW 并缓存资源
self.addEventListener('install', event => {
  // 强制跳过等待，让新版本立即生效
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Service Worker: 缓存核心文件');
      return cache.addAll(urlsToCache);
    })
  );
});

// 激活 SW 并清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: 清理旧缓存', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // 确保 SW 激活后立即控制所有客户端
  return self.clients.claim();
});

// 拦截请求：优先尝试缓存，没网再找网络
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});