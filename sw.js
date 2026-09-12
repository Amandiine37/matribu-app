/* Service worker : rend l'app utilisable hors connexion.
 *
 * Strategie « reseau d'abord » : tant qu'il y a du reseau, on sert la
 * derniere version (les mises a jour arrivent donc toutes seules) ; sans
 * reseau, on rejoue la copie mise en cache.
 *
 * Seuls les fichiers de l'app sont mis en cache : les appels a Firebase
 * (autre domaine) passent toujours directement par le reseau.
 */
/* v2 (13/09/2026) : les fichiers de l'app sont demandes en "no-cache", voir
 * plus bas. Changer ce nom fait repartir chaque appareil d'un cache propre. */
var CACHE = "tribu-v2";
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
    /* "no-cache" : le navigateur REVALIDE le fichier aupres du serveur a chaque
     * fois au lieu de le ressortir de son cache HTTP. GitHub Pages sert tout
     * avec 10 minutes de cache (max-age=600) : sans cela, un telephone ouvert
     * juste apres un depot melangeait un fichier neuf et un ancien — un
     * carrousel sans son style, une correction absente (constate le 13/09/2026).
     * Le cout : une requete conditionnelle par fichier, qui repond 304 quand
     * rien n'a change. Hors connexion, on retombe sur la copie du cache. */
    fetch(req, { cache: "no-cache" }).then(function (res) {
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
