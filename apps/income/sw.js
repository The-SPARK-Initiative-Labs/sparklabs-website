// Self-destruct: the Real Income app moved to hub.sparkinitiative.io.
// This replaces the old caching worker — it clears caches, unregisters
// itself, and reloads any open clients so they hit the redirect page.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    try {
      const ks = await caches.keys();
      await Promise.all(ks.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const cs = await self.clients.matchAll({ type: 'window' });
      cs.forEach((c) => { try { c.navigate(c.url); } catch (e) {} });
    } catch (e) {}
  })());
});
