/* inspired by -- ok, lifted from -- my challenge sw assignment */

navigator.serviceWorker.register('/js/sw.js').then(reg => {
    console.log('Service worker registered!');
  }).catch(error => {
    console.log('Service worker registration failed: ' + error);
  }
);