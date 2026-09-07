/* Service worker : rend l'app utilisable hors connexion.
 *
 * Strategie « reseau d'abord » : tant qu'il y a du reseau, on sert la
 * derniere version (les mises a jour arrivent donc toutes seules) ; sans
 * reseau, on rejoue la copie mise en cache.
 *
 * Seuls les fichiers de l'app sont mis en cache : les appels a Firebase
 * (autre domaine) passent toujours directement par le reseau.
 */
var CACHE = "tribu-v1";
var ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./recettes.js",
  "./vues.js",
  "./formulaires.js",
  "./app.js",
  "./firebase-config.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (noms) {
      return Promise.all(noms.map(function (nom) {
        return nom === CACHE ? null : caches.delete(nom);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(req).then(function (res) {
      if (res && res.status === 200) {
        var copie = res.clone();
        caches.open(CACHE).then(function (cache) { cache.put(req, copie); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        return hit || (req.mode === "navigate" ? caches.match("./index.html") : undefined);
      });
    })
  );
});
