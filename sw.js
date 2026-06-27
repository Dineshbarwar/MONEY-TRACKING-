// This app no longer uses a service worker (it caused stale-version issues).
// This file's only job is to clean up any old service worker that earlier
// versions of the app registered on this device, then get out of the way.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', async () => {
  try {
    await self.registration.unregister();
    const clientsList = await self.clients.matchAll({ type: 'window' });
    clientsList.forEach((client) => client.navigate(client.url));
  } catch (e) { /* ignore */ }
});
