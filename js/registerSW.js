/* all service worker code inspired by lessons from challenge code assignments */

navigator.serviceWorker.register('/js/sw.js').then(reg => {
    console.log('Service worker registered!');
  }).catch(error => {
    console.log('Service worker registration failed: ' + error);
  }
);