const APP_VERSION = "1.1.1"; // Increment version to force update
const CACHE_NAME = `judo-reference-cache-v${APP_VERSION}`;
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/app.js",
  "/js/sw-register.js",
  "/js/state.js",
  "/js/techniques.js",
  "/js/techniques-data.js",
  "/js/favorites-component.js",
  "/js/home-component.js",
  "/js/technique-detail-component.js",
  "/js/technique-family-component.js",
  "/js/header-component.js",
  "/js/root-component.js",
  "/js/i18n/en.js",
  "/js/i18n/fr.js",
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/judo.svg",
  "/manifest.json",
];

// Simplified install event - no special offline page handling
self.addEventListener("install", (event) => {
  console.log("Service Worker installing");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Caching app assets");
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log("Skip waiting - forcing activation");
        return self.skipWaiting(); // Force activation
      })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating");
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => {
              console.log("Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log("Service Worker activated");
        return self.clients.claim(); // Take control of clients immediately
      })
  );
});

// Fetch event handler
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") return;

  // Skip YouTube resources only
  if (event.request.url.includes("youtube.com")) {
    return;
  }

  // Instead of skipping CDNs entirely, add special handling:
  const isExternalResource =
    event.request.url.includes("unpkg.com") ||
    event.request.url.includes("cdnjs.cloudflare.com");

  if (isExternalResource) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200) {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
              console.log("Cached external resource:", event.request.url);
            });

            return response;
          })
          .catch((error) => {
            console.log("Failed to fetch external resource:", error);
            // For stylesheets, return an empty CSS file to prevent rendering errors
            if (event.request.url.includes(".css")) {
              return new Response("/* Empty CSS fallback */", {
                headers: { "Content-Type": "text/css" },
              });
            }
            // For other resources, let the error propagate
          });
      })
    );
    return;
  }

  const url = new URL(event.request.url);

  // Special handling for navigation requests (HTML pages)
  const isNavigationRequest = event.request.mode === "navigate";

  // For the navigation requests handler
  if (isNavigationRequest) {
    console.log("Navigation request for:", url.pathname, "Hash:", url.hash);

    event.respondWith(
      // Try network first for navigation requests
      fetch(event.request)
        .then((response) => {
          console.log("Network response succeeded for navigation");

          // Cache the response for future offline use
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch((error) => {
          console.log(
            "Network failed for navigation, falling back to cache",
            error
          );

          // Only try to find exactly what was cached, no fallbacks
          return caches.match(event.request);
        })
    );
  } else {
    // For non-navigation requests (assets, API calls), use cache-first strategy
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached response
          return cachedResponse;
        }

        // If not in cache, try network
        return fetch(event.request)
          .then((response) => {
            // Don't cache if response is invalid
            if (
              !response ||
              response.status !== 200 ||
              response.type !== "basic"
            ) {
              return response;
            }

            // Clone the response to cache it
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });

            return response;
          })
          .catch((error) => {
            console.log("Asset fetch failed:", error);
            // Let the error propagate - no fallbacks
          });
      })
    );
  }
});

// Listen for messages from the main thread
self.addEventListener("message", (event) => {
  if (event.data.action === "skipWaiting") {
    console.log("Skip waiting message received");
    self.skipWaiting();
  }
});
