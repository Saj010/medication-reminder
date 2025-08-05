// service-worker.js
self.addEventListener('push', function(event) {
  const data = event.data?.json() || {};
  self.registration.showNotification(data.title || "Reminder", {
    body: data.body || "It's time to take your medication.",
    icon: "icons/icon-192.png"
  });
});
