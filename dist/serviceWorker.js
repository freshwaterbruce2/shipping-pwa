const CACHE_NAME = 'walmart-dc8980-shipping-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/assets/index.css',
  '/assets/index.js',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

// Install service worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate service worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Clearing old cache', cacheName);
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch resources with network-first, fallback to cache strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // Try network first
    fetch(event.request)
      .then((response) => {
        // Clone the response to store in cache
        const responseToCache = response.clone();
        
        // Only cache successful responses from our origin
        if (response.ok && event.request.url.startsWith(self.location.origin)) {
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
        }
        
        return response;
      })
      .catch(() => {
        // If network request fails, try cache
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              console.log('Service Worker: Serving cached content', event.request.url);
              return cachedResponse;
            }
            
            // For navigation requests, return the offline page if we can't serve from cache
            if (event.request.mode === 'navigate') {
              return caches.match('/');
            }
            
            // Otherwise, let the error propagate
            return new Response('Network error occurred', {
              status: 408,
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Handle data sync when coming online
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Syncing...', event.tag);
  if (event.tag === 'sync-shipping-data') {
    event.waitUntil(syncShippingData());
  }
});

// Handle push notifications
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : { title: 'New Update', body: 'Check your app for updates' };
  
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});

async function syncShippingData() {
  console.log('Syncing shipping data...');
  
  try {
    // Get data from IndexedDB
    const DB_NAME = "ShippingDB"; 
    const DB_VERSION = 1; 
    const db = await new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      // Note: No upgrade logic here, assuming DB is created/upgraded by the main app
    });

    // Here we would synchronize with a server if we had one
    // For now, just log that we tried to sync
    console.log('Data sync simulated - app is offline-only');
    
    // Close the database connection opened here
    db.close();

    // Post message to clients to update UI
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_COMPLETE',
        timestamp: new Date().toISOString()
      });
    });

    return true;
  } catch (error) {
    console.error('Sync failed:', error);
    return false;
  }
}

// Log service worker lifecycle
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'LOG_STATUS') {
    console.log('Service Worker: Status requested by client');
    event.ports[0].postMessage({
      status: 'active',
      version: CACHE_NAME
    });
  }
});
