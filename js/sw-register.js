/**
 * Service worker registration and update handling
 */

// Function to show update notification
function showUpdateNotification() {
  // Create update notification if it doesn't exist
  if (!document.getElementById('update-toast')) {
    const updateToast = document.createElement('div');
    updateToast.id = 'update-toast';
    updateToast.className = 'update-notification';
    updateToast.innerHTML = `
      <p>A new version is available!</p>
      <button id="update-button">Update Now</button>
    `;
    document.body.appendChild(updateToast);

    // Add event listener to update button
    document.getElementById('update-button').addEventListener('click', () => {
      updateToast.classList.add('hidden');

      // Tell the service worker to skip waiting
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ action: 'skipWaiting' });
      }
    });
  }

  // Show the toast
  setTimeout(() => {
    document.getElementById('update-toast').classList.add('visible');
  }, 1000);
}

/**
 * Registers the service worker and sets up update handling
 */
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('ServiceWorker registered with scope:', registration.scope);

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New version available
                showUpdateNotification();
              }
            });
          });
        })
        .catch(error => {
          console.error('ServiceWorker registration failed:', error);
        });

      // Detect controller change
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          window.location.reload();
          refreshing = true;
        }
      });
    });
  }
}