const CACHE_NAME = 'meupix-v1';

const ASSETS = [
  './',
  './index.html',

  // imagens
  'pagamentos.files/imagens/capa-pix.png',
  'pagamentos.files/imagens/favicon.png',
  'pagamentos.files/imagens/logo-pix.png',
  'pagamentos.files/imagens/Compartilhamentos.png',
  'pagamentos.files/imagens/loading-pix.png',
  'pagamentos.files/imagens/loading-compartilhar.png',
  'pagamentos.files/imagens/error.png',
  'pagamentos.files/imagens/logo.png',
  'https://is.gd/isgd_favicon.ico',
  // scripts
  'pagamentos.files/script/jquery.min.js',
  'pagamentos.files/script/qr-code-styling.js',
  'pagamentos.files/script/html2canvas.min.js',
  'pagamentos.files/script/clipboard.min.js'
];

// INSTALAR
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// ATIVAR
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

// FETCH
self.addEventListener('fetch', (event) => {

  // Navegação → retornar index offline
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Restante: cache primeiro
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(networkRes => {
        const clone = networkRes.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return networkRes;
      });
    })
  );
});

