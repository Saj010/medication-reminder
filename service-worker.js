// service-worker.js

// Listen for push events sent from Firebase
self.addEventListener('push', function(event) {
  const data = event.data?.json() || {};

  const title = data.title || '💊 Medication Reminder';
  const options = {
    body: data.body || 'Time to take your medication.',
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png',
    data: {
      url: '/'  // You can change this to deep-link if needed
    }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification click (optional)
self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});
