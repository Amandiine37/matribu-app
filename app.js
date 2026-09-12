/* =========================================================================
   TRIBU — noyau de l'application
   =========================================================================
   Ce fichier contient : les outils de base (dates, points, affichage),
   la securite (codes chiffres, invitations), le stockage (local ou partage
   via Firebase), la connexion des membres, et toutes les actions.

   Le dessin des ecrans est dans vues.js, les formulaires dans formulaires.js.

   ---------------------------------------------------------------------------
   COMMENT L'ACCES EST PROTEGE (version 2)
   ---------------------------------------------------------------------------
   1. Le code de la famille ne donne plus aucun acces. Il ne sert qu'a
      afficher un nom lisible. Pour entrer, il faut que l'appareil soit
      inscrit dans la liste `membresUid` de la famille.
   2. On y entre par une INVITATION a usage unique creee par un
      administrateur (un long jeton aleatoire, valable quelques jours).
   3. Les codes a 4 chiffres ne sont jamais enregistres tels quels : on
      garde seulement une empreinte chiffree (PBKDF2), impossible a relire.
   4. Les points vivent dans un JOURNAL en ecriture unique. Chaque ligne est
      creee par un administrateur, ne peut plus etre modifiee ensuite, et son
      montant est verifie par Firebase lui-meme (voir firestore.rules).
      Personne ne peut donc s'attribuer des points depuis son telephone.
   ========================================================================= */

/* ============================ 1. Outils ============================ */

const $ = (sel) => document.querySelector(sel);
/* « À catégoriser » vient en TÊTE : c'est là que tombent les produits que
   l'application n'a pas su reconnaître à la saisie rapide. En premier, on les
   voit et on les range ; en dernier, ils seraient oubliés. « Autre » reste un
   choix délibéré, pour ce qui n'entre dans aucun rayon. */
const RAYONS = ["À catégoriser", "Fruits & légumes", "Boucherie", "Poissonnerie", "Crèmerie",
  "Boulangerie", "Épicerie", "Surgelés", "Boissons",
  "Entretien", "Hygiène", "Maison", "Animaux", "Autre"];

/* La réserve se lit en deux côtés : ce qui se mange, et le reste. On ne
   cherche pas la lessive en pensant au dîner (demande d'Amandine, 12/09/2026).
   « À catégoriser » et « Autre » n'appartiennent à aucun des deux : ils
   s'affichent des DEUX côtés, justement pour qu'on les range. */
const RAYONS_MAISON = ["Entretien", "Hygiène", "Maison", "Animaux"];
const RAYONS_NEUTRES = ["À catégoriser", "Autre"];
/* Rayons ajoutés par la famille (Administration ▸ Rayons). Rangés dans les
   réglages, donc écrits par un administrateur seulement, et valables pour
   toute la maison. Chacun déclare son côté : alimentaire ou maison. */
function rayonsPerso() {
  const l = (etat.reglages && etat.reglages.rayonsPerso) || [];
  return Array.isArray(l) ? l.filter((r) => r && r.nom) : [];
}
function rayonsTous() {
  const noms = RAYONS.slice();
  rayonsPerso().forEach((r) => { if (noms.indexOf(r.nom) === -1) noms.push(r.nom); });
  return noms;
}
/* Les rayons d'un écran, dans l'ordre ALPHABÉTIQUE (demande d'Amandine,
   12/09/2026), sauf « À catégoriser » qui reste en tête : c'est le seul qui
   demande une action. */
function ordreRayons(noms) {
  return noms.slice().sort((a, b) => {
    if (a === b) return 0;
    if (a === "À catégoriser") return -1;
    if (b === "À catégoriser") return 1;
    return String(a).localeCompare(String(b), "fr");
  });
}
function coteDuRayon(r) {
  const perso = rayonsPerso().find((x) => x.nom === r);
  if (perso) return perso.cote === "maison" ? "maison" : "alimentaire";
  if (RAYONS_NEUTRES.indexOf(r) !== -1) return "neutre";
  return RAYONS_MAISON.indexOf(r) !== -1 ? "maison" : "alimentaire";
}
function rayonDuCote(r, cote) {
  const c = coteDuRayon(r);
  return c === "neutre" || c === cote;
}
const JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

/* Les raisons de ne pas avoir de repas à prévoir. Une case marquée ainsi
   n'est pas une case oubliée : c'est une décision, et le générateur doit la
   respecter — même quand on lui demande de tout remplacer. */
const MOTIFS_ABSENCE = [
  { val: "resto", nom: "Au restaurant", emoji: "🍽️" },
  { val: "proches", nom: "Chez des proches", emoji: "🏡" },
  { val: "cantine", nom: "À la cantine", emoji: "🏫" },
  { val: "deplacement", nom: "En déplacement", emoji: "✈️" },
  { val: "saute", nom: "Pas de repas", emoji: "🌙" },
  { val: "autre", nom: "Absent", emoji: "🚪" }
];
function infoMotif(val) {
  return MOTIFS_ABSENCE.find((m) => m.val === val) || MOTIFS_ABSENCE[MOTIFS_ABSENCE.length - 1];
}
function estAbsence(c) { return !!(c && c.absent); }

/* Réglages de la famille et leurs valeurs par défaut. Déclarés ici, avec les
   autres constantes : `etatVide()` s'en sert dès le chargement du fichier. */
const REGLAGES_DEFAUT = { convives: 4, points: true, pointsRepas: 15, antiGaspi: true };

/* Les palettes de couleurs (styles.css). Choisies PAR APPAREIL, comme le mode
   clair/sombre : chacun la sienne, sans droits particuliers — un réglage rangé
   sur le profil ne serait modifiable que par un administrateur.
   `val` vide = la palette d'origine, aucun attribut posé sur la page. */
const PALETTES = [
  { val: "", nom: "Maison", emoji: "🌿", apercu: ["#F2EFE6", "#4E7A6A", "#C4703F"] },
  { val: "myrtille", nom: "Myrtille", emoji: "🫐", apercu: ["#EFF0F7", "#4C5BA8", "#9B5FA8"] },
  { val: "pivoine", nom: "Pivoine", emoji: "🌸", apercu: ["#F7EFF1", "#A84D6E", "#C4703F"] },
  { val: "lagon", nom: "Lagon", emoji: "🌊", apercu: ["#EAF4F4", "#1F7A81", "#D2694F"] },
  { val: "cannelle", nom: "Cannelle", emoji: "🍁", apercu: ["#F6EFE3", "#A8622A", "#B5452F"] },
  { val: "ardoise", nom: "Ardoise", emoji: "🖤", apercu: ["#F1F2F3", "#3A4A5A", "#B4562F"] }
];
function paletteActuelle() {
  try { return localStorage.getItem("tribu:palette") || ""; } catch (e) { return ""; }
}
function appliquerPalette(v) {
  if (v) document.documentElement.dataset.palette = v;
  else delete document.documentElement.dataset.palette;
  try { localStorage.setItem("tribu:palette", v); } catch (e) { /* sans importance */ }
}
const PORTIONS_BASE = 4;      // les recettes fournies sont écrites pour 4
/* Les grilles d'icones. Elles sont volontairement fournies : c'est ce qui
   permet a chacun de se reconnaitre du premier coup d'oeil dans les listes. */
const EMOJIS_MEMBRES = [
  "😀", "😄", "😎", "🥳", "🤓", "🙂", "😺", "🧑", "👦", "👧",
  "🦊", "🐻", "🐼", "🦁", "🐨", "🐧", "🦉", "🐬", "🐢", "🦄",
  "🐯", "🐰", "🐥", "🦋", "🐝", "🐙", "🐳", "🦖", "🐴", "🐶",
  "🌻", "🌷", "🌺", "🍀", "🌵", "🍄", "🌈", "⭐", "🔥", "⚡",
  "🚀", "⚽", "🏀", "🎾", "🎸", "🎹", "🎤", "🎨", "📚", "🎯",
  "🎮", "🛹", "🏄", "🚲", "🧩", "💎", "👑", "🎩"];

const EMOJIS_TACHES = [
  "🧹", "🧽", "🧼", "🪣", "🧴", "🧻", "🪥", "🚿", "🛁", "🚽",
  "🍽️", "🧑‍🍳", "🧊", "🗑️", "♻️", "📦", "🛏️", "🛋️", "🪑", "🪟",
  "🧺", "👕", "🧦", "👟", "🖼️", "🕯️", "💡", "🔌", "🔋", "🚪",
  "🌱", "🌳", "🍂", "🌾", "❄️", "🏡", "🚗", "🚲", "📬", "📮",
  "🛒", "🐕", "🐈", "🐟", "🐹", "🔧", "🔨", "🪛", "🧰", "🧯"];

const EMOJIS_CADEAUX = [
  "🎁", "🌟", "🎟️", "🎫", "🛍️", "💶", "🧸", "🎲", "🃏", "🧩",
  "🍿", "🍦", "🍫", "🍪", "🧁", "🎂", "🍭", "🥤", "🧋", "🍕",
  "🍔", "🌮", "🥞", "🧇", "🎬", "🎮", "📱", "🎧", "📸", "🔭",
  "🎡", "🎢", "🎪", "🎠", "🏕️", "🏖️", "🎣", "⚽", "🏊", "🎳",
  "🚴", "🛼", "⛸️", "🎿", "🐴", "🎨", "🎻", "🪁", "💤", "🎈"];

const EMOJIS_RECETTES = [
  "🍽️", "🍲", "🥘", "🍜", "🍝", "🍚", "🍛", "🥣", "🫕", "🥫",
  "🥗", "🥙", "🌯", "🥪", "🍔", "🌮", "🍕", "🥧", "🥟", "🧆",
  "🍗", "🍖", "🥩", "🥓", "🍤", "🦐", "🐟", "🍣", "🍱", "🥚",
  "🍳", "🥞", "🧇", "🧀", "🥔", "🍅", "🥦", "🥕", "🌽", "🍆",
  "🥑", "🍄", "🫑", "🥬", "🧅", "🧄", "🫘", "🌿", "🍞", "🥖",
  "🥐", "🍰", "🍮", "🍯", "🍋", "🍎", "☕"];

const EMOJIS_LISTES = [
  "🛒", "📅", "📝", "🛍️", "🧺", "🏪", "🥖", "🥕", "🍎", "🐟",
  "🥩", "🧊", "🧽", "🧼", "🧴", "💊", "🎁", "🎂", "🎄", "🎒",
  "✏️", "🏕️", "🌻", "🔧", "📦", "👶", "🐾", "🐶", "🍼", "🎨"];

const VERSION = "0.50 bêta";

/* ---------- Demenagement vers matribu-app.fr ----------
   L'application vit a DEUX adresses pendant la transition : l'ancienne
   (github.io) et la nouvelle. C'est volontaire. Brancher le domaine sur
   l'ancien depot aurait redirige tout le monde, et comme une invitation ne
   peut etre creee que par un membre DEJA reconnu par le serveur, chaque
   famille se serait retrouvee enfermee dehors : ses donnees intactes, mais
   plus personne pour les ouvrir. Tant que les deux adresses repondent,
   chacun migre a son rythme et personne ne risque rien.
   Le bandeau n'apparait donc que sur l'ancienne adresse. */
const ADRESSE_NOUVELLE = "https://matribu-app.fr";
const HOTE_ANCIEN = "amandiine37.github.io";

/* L'ancienne adresse, c'est l'hote ET le chemin /MaTribu/ : un site de test
   pose sur le meme hote (amandiine37.github.io/matribu-test/) ne doit pas se
   croire sur l'ancienne adresse ni afficher le bandeau de demenagement. */
function surAncienneAdresse() {
  return location.hostname === HOTE_ANCIEN && /^\/MaTribu(\/|$)/i.test(location.pathname);
}

/* Unites utilisables pour les ingredients, le stock et les courses.
   "" = pas d'unite, on compte simplement (4 carottes). */
const UNITES = ["", "g", "kg", "ml", "cl", "l", "boîte(s)", "bouteille(s)", "paquet(s)", "pot(s)",
  "bocal(aux)", "sachet(s)", "tranche(s)", "bouquet(s)", "branche(s)", "gousse(s)",
  "tête(s)", "bûche(s)", "morceau(x)", "pincée(s)", "c. à soupe", "c. à café"];

/* Familles d'unites convertibles entre elles, avec leur valeur de reference. */
const FAMILLES_UNITES = {
  masse: { g: 1, kg: 1000 },
  volume: { ml: 1, cl: 10, l: 1000 }
};

/* Rubriques rangees dans le document principal de la famille.
   `etats` et `journal` sont a part : ils ont leurs propres regles de securite. */
const CLES_DOC = ["famille", "membres", "membresUid", "adminsUid", "appareils", "appareilsInfos", "taches",
  "bareme", "courses", "listesCourses", "stock", "repas", "notes", "cadeaux",
  "tarifs", "echanges", "reglages", "jetonUtilise"];

/* LES RECETTES VIVENT A PART (12/09/2026).

   Elles pesaient 350 Ko des 348 Ko du document principal. Or Firestore
   renvoie le document ENTIER a tous les appareils a la moindre modification :
   cocher un article de courses reexpediait donc 350 Ko de recettes a chacun
   (mesure du banc d'essai). Elles ont maintenant leur propre document,
   familles/{code}/rubriques/recettes, qui ne bouge que lorsqu'une recette
   change — c'est-a-dire presque jamais.

   TRANSITION : une famille pas encore deplacee garde ses recettes dans le
   document principal. L'application lit donc les DEUX endroits, et le
   document a part fait foi des qu'il existe (Store.recettesAPart). */
const RUBRIQUES = "rubriques";
const RUBRIQUE_RECETTES = "recettes";

/* ---------- INTERRUPTEUR DU DEPLACEMENT DES RECETTES ----------

   POURQUOI il existe : un telephone reste en 0.48 lit les recettes dans le
   document principal. Une fois la famille deplacee, elles n'y sont plus — ce
   telephone les verrait disparaitre. L'interrupteur permet donc de deposer la
   0.50 partout SANS rien deplacer, le temps que chacun l'ait chargee.

   false = rien ne bouge. Les familles gardent leurs recettes dans le document
           principal, les nouvelles familles y naissent aussi. La 0.48 et la
           0.50 cohabitent sans risque. L'application sait deja LIRE les deux
           rangements : c'est le seul reglage a modifier.

   true  = chaque famille est deplacee a la premiere ouverture par un de ses
           administrateurs, une seule fois. Le document principal passe de
           348 Ko a 2 Ko, et une modification de la liste de courses coute
           alors 4 Ko au lieu de 348 (mesures du banc d'essai).

   QUAND le passer a true : quand tous les telephones de toutes les familles
   ont ouvert la 0.50 au moins une fois. Le service worker etant en « reseau
   d'abord », il suffit que chacun ouvre l'application avec du reseau.

   Le retour en arriere n'est PAS automatique : une famille deja deplacee le
   reste (l'application continue de la lire correctement, quel que soit
   l'interrupteur). Il ne protege que celles qui ne le sont pas encore. */
const DEPLACER_RECETTES = false;

/* Les saisons, au sens cuisine : ce qu'on a envie de manger et ce qu'on
   trouve sur l'étal. Une recette sans saison indiquée convient toute l'annee. */
const SAISONS = [
  { val: "printemps", nom: "Printemps", emoji: "🌸", mois: [3, 4, 5] },
  { val: "ete", nom: "Été", emoji: "☀️", mois: [6, 7, 8] },
  { val: "automne", nom: "Automne", emoji: "🍂", mois: [9, 10, 11] },
  { val: "hiver", nom: "Hiver", emoji: "❄️", mois: [12, 1, 2] }
];

/* Calendrier des fruits et legumes, pour proposer les saisons d'une recette
   a partir de ses ingredients. Volontairement court : les produits courants
   suffisent, le reste est considere comme disponible toute l'annee. */
const CALENDRIER = {
  printemps: ["asperge", "radis", "épinard", "petit pois", "artichaut", "fraise", "rhubarbe",
    "oseille", "blette", "navet", "laitue", "cresson", "carotte nouvelle", "oignon nouveau"],
  ete: ["courgette", "tomate", "aubergine", "poivron", "concombre", "haricot vert", "melon",
    "pastèque", "abricot", "pêche", "nectarine", "cerise", "framboise", "basilic", "maïs",
    "fenouil", "prune", "figue", "laitue", "tomate cerise"],
  automne: ["potiron", "potimarron", "courge", "champignon", "poireau", "chou", "brocoli",
    "betterave", "raisin", "pomme", "poire", "noix", "châtaigne", "céleri", "panais",
    "épinard", "fenouil", "figue"],
  hiver: ["poireau", "chou", "endive", "carotte", "navet", "panais", "céleri", "potiron",
    "courge", "orange", "clémentine", "mandarine", "pamplemousse", "kiwi", "poire", "pomme",
    "salsifis", "topinambour", "mâche", "betterave"]
};

/* Types de liste de courses. « mensuelle » = on la remplit au fil de l'eau
   sans acheter tout de suite : elle ne déclenche donc pas les rappels. */
const TYPES_LISTE = [
  { val: "semaine", nom: "Chaque semaine", emoji: "🛒", alerte: true },
  { val: "mois", nom: "Une fois par mois", emoji: "📅", alerte: false },
  { val: "ponctuelle", nom: "Ponctuelle", emoji: "📝", alerte: true }
];
/* Liste implicite des familles créées avant les listes multiples. */
const LISTE_PRINCIPALE = {
  id: "liste-principale", nom: "Mes courses", emoji: "🛒",
  type: "semaine", magasin: ""
};

function id() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function pad(n) { return String(n).padStart(2, "0"); }
function propre(v) { return JSON.parse(JSON.stringify(v)); }

/* Le champ du code a 4 chiffres : masque, avec un oeil pour le relire.

   Le TYPE du champ ne change JAMAIS : il reste `tel` avec un `inputmode`
   numerique. C'est volontaire — passer en `type="password"` ramenerait le
   clavier de lettres sur iPhone et reveillerait le gestionnaire de mots de
   passe. On masque donc a l'affichage seulement (styles.css, .pin-masque).

   A la CONNEXION, le code etait deja masque : cet ecran-la a ses propres
   points et son clavier maison. Il ne restait visible qu'ici, la ou on le
   CHOISIT — c'est-a-dire souvent devant quelqu'un. */
function champPin(attrs) {
  return '<div class="champ-pin">' +
    '<input type="tel" name="pin" inputmode="numeric" maxlength="4" class="pin-masque" ' +
    (attrs || "") + ">" +
    '<button type="button" class="oeil-pin" data-role="voir-pin" ' +
    'aria-label="Afficher le code">👁️</button></div>';
}

/* Un seul branchement, pose sur la page entiere : ces champs apparaissent sur
   l'ecran de connexion, dans la fiche d'un membre et dans « Mon profil », et
   tous sont redessines sans arret. Un branchement par formulaire finirait
   toujours par en oublier un. */
document.addEventListener("click", (ev) => {
  const b = ev.target.closest ? ev.target.closest('[data-role="voir-pin"]') : null;
  if (!b) return;
  ev.preventDefault();
  const champ = b.parentNode.querySelector("input");
  if (!champ) return;
  const masque = champ.classList.toggle("pin-masque");
  b.textContent = masque ? "👁️" : "🙈";
  b.setAttribute("aria-label", masque ? "Afficher le code" : "Masquer le code");
  champ.focus();
});

/* Un lien vers l'exterieur, et RIEN d'autre.

   `esc()` protege le HTML, mais pas l'adresse elle-meme : « javascript:... »
   reste un lien valide, et cliquer dessus execute du code dans la page, avec
   la session de celui qui clique.

   Le risque n'est pas theorique ici : le lien d'une recette voyage d'une
   famille a l'autre par le catalogue partage. Une recette piegee, publiee
   une fois, atteindrait toutes les familles qui l'importent.

   On n'accepte donc que http et https. Le reste devient un lien vide, et le
   bouton ne s'affiche pas. */
function lienExterne(url) {
  const u = String(url == null ? "" : url).trim();
  return /^https?:\/\/[^\s]+$/i.test(u) ? u : "";
}

/* --- Quantites et unites --- */

/* "1,2" ou "1.2" -> 1.2 ; texte vide ou illisible -> null */
function nombre(v) {
  if (v === null || v === undefined || v === "") return null;
  const n = parseFloat(String(v).replace(",", ".").trim());
  return isNaN(n) ? null : n;
}
/* 1.5 -> "1,5" ; 3 -> "3" */
function texteNombre(n) {
  if (n === null || n === undefined) return "";
  return String(Math.round(n * 100) / 100).replace(".", ",");
}
function formaterQte(qte, unite) {
  const brut = String(qte == null ? "" : qte).trim();
  /* Ancien format, d'avant la séparation quantité / unité : « 800 g »,
     « 2 briques »… On l'affiche tel quel plutôt que d'en perdre la moitié. */
  if (!unite && /[a-zà-ÿ]/i.test(brut)) return brut;
  const n = nombre(brut);
  const q = n === null ? brut : texteNombre(n);
  if (!q) return unite || "";
  return unite ? q + " " + unite : q;
}
function familleUnite(u) {
  for (const f in FAMILLES_UNITES) if (FAMILLES_UNITES[f][u] !== undefined) return f;
  return null;
}
/* Convertit une quantite d'une unite vers une autre. null si impossible. */
function convertirUnite(qte, de, vers) {
  const n = nombre(qte);
  if (n === null) return null;
  if ((de || "") === (vers || "")) return n;
  const fa = familleUnite(de), fb = familleUnite(vers);
  if (!fa || fa !== fb) return null;
  return n * FAMILLES_UNITES[fa][de] / FAMILLES_UNITES[fa][vers];
}

/* Additionne des quantites { qte, unite }. Celles qui ne se convertissent pas
   restent affichees a part : « 500 g + 2 boîte(s) ». */
function additionnerQuantites(liste) {
  const paquets = [];
  liste.forEach((x) => {
    const n = nombre(x.qte);
    if (n === null) { paquets.push({ qte: null, unite: x.unite || "", texte: String(x.qte || "") }); return; }
    const trouve = paquets.find((p) => p.qte !== null && convertirUnite(1, x.unite || "", p.unite) !== null);
    if (trouve) trouve.qte += convertirUnite(n, x.unite || "", trouve.unite);
    else paquets.push({ qte: n, unite: x.unite || "", texte: "" });
  });
  return {
    paquets: paquets,
    texte: paquets.map((p) => p.qte === null ? p.texte : formaterQte(p.qte, p.unite))
      .filter(Boolean).join(" + ")
  };
}

/* --- Dates et periodes --- */
function isoDate(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
function deIso(s) { const [a, m, j] = s.split("-").map(Number); return new Date(a, m - 1, j); }
function lundiDe(d) {
  const t = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  t.setDate(t.getDate() - ((t.getDay() + 6) % 7));
  return t;
}
function numSemaine(d) {
  const t = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  t.setDate(t.getDate() - ((t.getDay() + 6) % 7) + 3);      // jeudi de la semaine
  const pj = new Date(t.getFullYear(), 0, 4);
  pj.setDate(pj.getDate() - ((pj.getDay() + 6) % 7) + 3);   // jeudi de la semaine 1
  return { annee: t.getFullYear(), num: 1 + Math.round((t - pj) / (7 * 86400000)) };
}
function cleSemaine(d) { const s = numSemaine(d); return s.annee + "-S" + pad(s.num); }
function lundiDeCle(cle) {
  const [a, n] = cle.split("-S").map(Number);
  const pj = new Date(a, 0, 4);
  pj.setDate(pj.getDate() - ((pj.getDay() + 6) % 7));       // lundi de la semaine 1
  pj.setDate(pj.getDate() + (n - 1) * 7);
  return pj;
}
function indexPeriode(freq, d) {
  if (freq === "jour") return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  if (freq === "mois") return d.getFullYear() * 12 + d.getMonth();
  const l = lundiDe(d);
  return Math.floor(Date.UTC(l.getFullYear(), l.getMonth(), l.getDate()) / 86400000 / 7);
}
function clePeriode(freq, d) {
  if (freq === "jour") return isoDate(d);
  if (freq === "mois") return d.getFullYear() + "-" + pad(d.getMonth() + 1);
  return cleSemaine(d);
}
/* Le premier instant de la periode en cours. Sert a verifier qu'une tache
   n'a pas deja ete payee dans cette periode, meme si sa frequence a change
   entre-temps. */
function debutDePeriode(freq, d) {
  if (freq === "jour") return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  if (freq === "mois") return new Date(d.getFullYear(), d.getMonth(), 1);
  const l = lundiDe(d);
  return new Date(l.getFullYear(), l.getMonth(), l.getDate());
}
function libellePeriode(freq) {
  if (freq === "jour") return "aujourd'hui";
  if (freq === "mois") return "ce mois-ci";
  return "cette semaine";
}
function dateJolie(s, avecAnnee) {
  if (!s) return "";
  const d = deIso(s);
  const o = { weekday: "short", day: "numeric", month: "short" };
  if (avecAnnee) o.year = "numeric";
  return d.toLocaleDateString("fr-FR", o);
}
function joursEntre(a, b) { return Math.round((deIso(b) - deIso(a)) / 86400000); }

/* --- Affichage --- */
let minuterieToast;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("on");
  clearTimeout(minuterieToast);
  minuterieToast = setTimeout(() => t.classList.remove("on"), 2600);
}
/* La page de derrière reste figée tant qu'une feuille est ouverte, puis
   revient exactement où elle était. Une feuille qui en remplace une autre
   (confirmation, fiche suivante) ne refige pas : on garde la position d'origine. */
function figerPage() {
  const b = document.body;
  if (b.classList.contains("feuille-ouverte")) return;
  b.dataset.defilement = String(window.scrollY || 0);
  b.style.top = -(window.scrollY || 0) + "px";
  b.classList.add("feuille-ouverte");
}
function libererPage() {
  const b = document.body;
  if (!b.classList.contains("feuille-ouverte")) return;
  const y = Number(b.dataset.defilement || 0);
  b.classList.remove("feuille-ouverte");
  b.style.top = "";
  window.scrollTo(0, y);
}
function ouvrirFeuille(titre, html, apres) {
  const f = $("#feuille");
  f.innerHTML = '<div class="feuille-poignee"></div>' +
    (titre ? "<h3>" + esc(titre) + "</h3>" : "") + html;
  f.scrollTop = 0;
  figerPage();
  $("#voile").classList.add("on");
  if (apres) apres(f);
}
function fermerFeuille() {
  libererPage();
  $("#voile").classList.remove("on");
  setTimeout(() => { if (!$("#voile").classList.contains("on")) $("#feuille").innerHTML = ""; }, 250);
}
function confirmer(message, opts) {
  opts = opts || {};
  return new Promise((resolve) => {
    ouvrirFeuille(opts.titre || "Confirmer",
      '<p style="margin:.2rem 0 1.2rem;line-height:1.5;font-size:.92rem">' + esc(message) + "</p>" +
      '<div class="rangee-btn">' +
      '<button class="btn" data-role="non">Annuler</button>' +
      '<button class="btn ' + (opts.danger ? "danger" : "principal") + '" data-role="oui">' +
      esc(opts.ok || "Confirmer") + "</button></div>",
      (f) => {
        f.querySelector('[data-role="non"]').onclick = () => { fermerFeuille(); resolve(false); };
        f.querySelector('[data-role="oui"]').onclick = () => { fermerFeuille(); resolve(true); };
      });
  });
}

/* ============================ 2. Securite ============================ */

/* Le chiffrement du navigateur n'existe qu'en https ou sur localhost.
   Ailleurs (http simple), on previent au lieu de faire semblant. */
const CRYPTO_DISPO = !!(window.crypto && window.crypto.subtle && window.isSecureContext);

function octetsVersHex(o) {
  return Array.from(o).map((b) => b.toString(16).padStart(2, "0")).join("");
}
function hexVersOctets(h) {
  const o = new Uint8Array(h.length / 2);
  for (let i = 0; i < o.length; i++) o[i] = parseInt(h.substr(i * 2, 2), 16);
  return o;
}
function jetonAleatoire(octets) {
  return octetsVersHex(crypto.getRandomValues(new Uint8Array(octets || 24)));
}

/* Code d'invitation : 12 caracteres tires au sort, sans I, O, 0 ni 1 pour
   qu'il puisse etre LU, DICTE et RETAPE. C'est indispensable : sur iPhone,
   l'icone de l'ecran d'accueil est une application separee, sans barre
   d'adresse — un lien n'y suffit pas, il faut pouvoir taper le code.
   32^12 ≈ un milliard de milliards de combinaisons : le deviner est hors
   de portee, et l'invitation ne sert qu'une fois. */
const LETTRES_CODE = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/* Tirer des caracteres au hasard dans un alphabet, sans favoriser personne.

   Un octet vaut 0 a 255. Le ramener a l'alphabet par un simple reste ne tombe
   juste que si la taille de l'alphabet divise 256. Nos 32 caracteres tombent
   juste (8 octets par lettre, verifie) : il n'y a aucun biais aujourd'hui.

   Mais c'est vrai par HASARD, pas par construction. Retirer une lettre
   ambigue de plus — exactement l'esprit de cet alphabet — ferait sortir
   certaines lettres 12 % plus souvent, en silence et sans rien casser.

   On ecarte donc les octets qui depassent le dernier multiple complet. Le
   tirage reste equitable quelle que soit la taille de l'alphabet, et on ne
   perd jamais plus de quelques octets. */
function tirerCaracteres(alphabet, combien) {
  const n = alphabet.length;
  const plafond = Math.floor(256 / n) * n;   // au-dela, l'octet est rejete
  let s = "";
  while (s.length < combien) {
    /* Par petits paquets : `getRandomValues` refuse au-dela de 65 536 octets.
       Nos codes font 6 et 12 caracteres, on n'y arrivera jamais — mais une
       fonction qui explose sur une demande plus grande est un piege pose
       pour le jour ou quelqu'un s'en resservira ailleurs. */
    const paquet = Math.min(256, Math.max(8, (combien - s.length) * 2));
    const alea = crypto.getRandomValues(new Uint8Array(paquet));
    for (let i = 0; i < alea.length && s.length < combien; i++) {
      if (alea[i] < plafond) s += alphabet[alea[i] % n];
    }
  }
  return s;
}

function codeInvitation() {
  return tirerCaracteres(LETTRES_CODE, 12);
}
/* Presentation en trois groupes : plus facile a relire et a dicter. */
function codeLisible(jeton) {
  const t = String(jeton || "");
  if (!/^[A-Z2-9]{12}$/.test(t)) return t;
  return t.slice(0, 4) + "-" + t.slice(4, 8) + "-" + t.slice(8);
}

/* Les refus de Firebase, dits en francais.

   Les messages d'origine sont en anglais et parlent de codes internes :
   « auth/invalid-action-code » ne veut rien dire pour la personne qui vient
   de cliquer sur un lien. On traduit ceux qu'on peut vraiment rencontrer, et
   on garde un repli honnete pour les autres plutot qu'un mensonge rassurant. */
function messageAuth(err) {
  const code = String((err && err.code) || "");
  const table = {
    "auth/invalid-email": "Cette adresse e-mail n'est pas valide.",
    "auth/invalid-action-code": "Ce lien a déjà servi, ou il a expiré. Demandez-en un nouveau.",
    "auth/expired-action-code": "Ce lien a expiré. Demandez-en un nouveau.",
    "auth/invalid-continue-uri": "L'adresse de retour n'est pas autorisée dans Firebase.",
    "auth/unauthorized-continue-uri": "Ce domaine n'est pas autorisé dans Firebase (Authentication ▸ Paramètres ▸ Domaines autorisés).",
    "auth/operation-not-allowed": "La connexion par e-mail n'est pas activée dans la console Firebase.",
    "auth/too-many-requests": "Trop de tentatives. Réessayez dans quelques minutes.",
    "auth/network-request-failed": "Pas de connexion. Vérifiez votre réseau.",
    "auth/user-disabled": "Ce compte a été désactivé.",
    "auth/quota-exceeded": "Le quota d'e-mails du jour est atteint. Réessayez demain."
  };
  return table[code] || ("La connexion a échoué" + (code ? " (" + code + ")" : "") + ".");
}

/* Une adresse e-mail plausible. On ne cherche pas a valider la norme, qui est
   un cauchemar : juste a attraper la faute de frappe evidente avant d'envoyer
   un courrier dans le vide. */
function emailPlausible(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || "").trim());
}

/* Une adresse e-mail, toujours sous la meme forme : sans espaces, en
   minuscules. C'est ainsi qu'elle nomme la fiche compte, et c'est en
   minuscules que les regles la comparent. */
function normaliserEmail(v) { return String(v == null ? "" : v).trim().toLowerCase(); }

/* Ce qu'on retient d'un appareil pour le reconnaitre dans une liste : un
   RESUME, jamais la signature complete du navigateur, qui en dit bien plus
   qu'il n'en faut. L'ordre des tests compte : Edge et Samsung se declarent
   aussi « Chrome », et Chrome se declare aussi « Safari ». */
function typeAppareil(ua) {
  const t = String(ua || "");
  const sys = /iPhone/.test(t) ? "iPhone" : /iPad/.test(t) ? "iPad"
    : /Android/.test(t) ? "Android" : /Macintosh/.test(t) ? "Mac"
    : /Windows/.test(t) ? "Windows" : /Linux/.test(t) ? "Linux" : "Appareil";
  const nav = /EdgA?\/|EdgiOS\//.test(t) ? "Edge" : /SamsungBrowser\//.test(t) ? "Samsung"
    : /Firefox\/|FxiOS\//.test(t) ? "Firefox" : /CriOS\/|Chrome\//.test(t) ? "Chrome"
    : /Safari\//.test(t) ? "Safari" : "";
  return sys + (nav ? " · " + nav : "");
}
function infoAppareil(par) {
  return {
    ajouteLe: new Date().toISOString(),
    type: typeAppareil(navigator.userAgent) + (ouvertDepuisIcone() ? " · icône" : ""),
    par: par
  };
}

/* Retrait progressif de membre.uids (MODELE-COMPTES-APPAREILS.md, section
   12). Tout identifiant qui ne vivait que dans ce vieux champ est recopie
   dans le registre des appareils, rattache au meme membre, puis le champ
   est retire. Rend vrai si quelque chose a change : il faut alors ecrire. */
function migrerUidsVersAppareils(d) {
  let change = false;
  d.appareils = d.appareils || {};
  (d.membres || []).forEach((m) => {
    if (!m || !Array.isArray(m.uids)) return;
    m.uids.forEach((u) => {
      if (u && d.appareils[u] === undefined) { d.appareils[u] = m.id; }
    });
    delete m.uids;
    change = true;
  });
  return change;
}

/* --- Mode EMULATEUR : tests automatiques, sur ce PC seulement ---
   Actif UNIQUEMENT si la page est servie par localhost ET que l'adresse porte
   « ?emulateur=1 ». L'application parle alors au faux Firebase lance depuis
   le dossier famille-tests (projet « demo-matribu ») : un projet demo-
   n'existe pas chez Google, aucune requete ne peut atteindre la vraie base.
   Sur les sites publies, EMULATEUR vaut toujours false. */
const EMULATEUR = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
  && new URLSearchParams(location.search).has("emulateur");
const CONFIG_EMULATEUR = {
  apiKey: "demo-cle", authDomain: "demo-matribu.firebaseapp.com",
  projectId: "demo-matribu", appId: "demo-matribu"
};
function configFirebase() { return EMULATEUR ? CONFIG_EMULATEUR : window.CONFIG_FIREBASE; }
/* L'adresse de la page sans ses parametres (lien magique, invitation). En
   mode emulateur on garde ce mode, sinon un rechargement en sortirait. */
function adresseNette() { return location.pathname + (EMULATEUR ? "?emulateur=1" : ""); }

/* Termine un lien magique : rattache l'appareil, puis ouvre la famille sur
   l'ecran des profils — le code a 4 chiffres reste demande. */
async function terminerLienCompte(adresse) {
  const r = await Store.rattacherParEmail(adresse);
  if (!r.ok && r.etape === "lien") {
    /* La preuve a echoue (mauvaise adresse, lien use ou perime) : on reste
       sur l'ecran de confirmation, avec la raison, et le lien en place. */
    Store.erreurEmail = r.message;
    Connexion.aller("confirmerEmail", {});
    return false;
  }
  /* Le lien ne sert qu'une fois : on le retire de l'adresse, sinon un
     rechargement le representerait et echouerait. */
  history.replaceState(null, "", adresseNette());
  Store.lienCompte = false;
  Store.erreurEmail = "";
  if (!r.ok) {
    Connexion.aller("rattachementImpossible", { message: r.message });
    return false;
  }
  const donnees = await Store.charger(r.code);
  if (!donnees) {
    Connexion.aller("rattachementImpossible",
      { message: "L’appareil est rattaché, mais la famille reste illisible pour l’instant. Rechargez la page." });
    return false;
  }
  localStorage.setItem("tribu:derniereFamille", r.code);
  toast(r.dejaMembre ? "Cet appareil était déjà rattaché" : "Appareil rattaché à votre profil ✅");
  /* Le lien dit deja QUI entre : on va droit a son code a 4 chiffres, sans
     lui faire rechoisir son nom dans la liste de tous les membres. « Changer
     de profil » reste possible depuis cet ecran (telephone partage). Si le
     profil est introuvable, on retombe sur la liste. */
  const d = { code: r.code, donnees: donnees, jeton: null };
  const profil = (donnees.membres || []).find((x) => x.id === r.membre);
  Connexion.aller(profil ? "pin" : "profils", profil ? Object.assign(d, { membre: profil }) : d);
  return true;
}

/* Copier, avec un vrai filet de secours.

   navigator.clipboard n existe QUE dans un contexte securise. En local, sur
   une adresse en http, ou dans certains navigateurs anciens, il est absent :
   se contenter d afficher le texte dans un toast, comme avant, laissait
   l utilisateur sans rien. On repasse donc par la vieille methode du champ
   invisible, qui marche partout.

   Le bouton confirme LUI-MEME en devenant une coche : sur un telephone, un
   message qui apparait en bas de l ecran passe souvent inapercu. */
async function copierTexte(texte, bouton) {
  const t = String(texte == null ? "" : texte);
  let ok = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(t);
      ok = true;
    }
  } catch (e) { ok = false; }
  if (!ok) {
    try {
      const z = document.createElement("textarea");
      z.value = t;
      z.setAttribute("readonly", "");
      z.style.cssText = "position:fixed;top:-1000px;opacity:0";
      document.body.appendChild(z);
      z.select();
      ok = document.execCommand("copy");
      document.body.removeChild(z);
    } catch (e) { ok = false; }
  }
  if (ok && bouton) {
    const avant = bouton.textContent;
    bouton.textContent = "✅";
    bouton.classList.add("copie");
    setTimeout(() => { bouton.textContent = avant; bouton.classList.remove("copie"); }, 1600);
  }
  toast(ok ? "Copié" : "Copie impossible — sélectionnez le texte à la main");
  return ok;
}

/* Un code affiche en gros, avec une icone pour le copier juste a cote.
   Recopier douze caracteres a la main sur un telephone est une corvee et une
   source de fautes : l icone doit etre LA, contre le code, pas dans un bouton
   plus bas qu on ne relie pas au texte. Le bouton reste utilisable au clavier
   et porte un libelle pour les lecteurs d ecran. */
function codeAvecCopie(texte, affichage) {
  const brut = String(texte == null ? "" : texte);
  const vu = affichage == null ? codeLisible(brut) : String(affichage);
  return '<div class="code-famille avec-copie">' +
    '<span class="code-texte">' + esc(vu) + '</span>' +
    '<button type="button" class="btn-copie" data-action="copier" ' +
    'data-texte="' + esc(brut) + '" title="Copier" aria-label="Copier le code">📋</button>' +
    '</div>';
}

/* Repere de famille tire au sort. Il sert d'identifiant du dossier : deux
   familles ne peuvent pas porter le meme. Comme on n'a pas le droit de lire
   les familles des autres, impossible de verifier a l'avance qu'il est libre
   -> on le prend assez long pour que la collision soit negligeable. */
function nouveauRepere() {
  /* Le meme alphabet que les invitations, et surtout LE MEME : il etait
     recopie ici, et deux copies finissent toujours par diverger. */
  return "MAISON-" + tirerCaracteres(LETTRES_CODE, 6);
}

/* Un repere au format tire au sort. Les regles Firestore imposent le MEME
   format a la creation d'une famille : si l'un change, l'autre aussi. */
const FORMAT_REPERE = /^MAISON-[A-HJ-NP-Z2-9]{6}$/;
function repereConforme(code) { return FORMAT_REPERE.test(String(code || "")); }

/* Transforme un code a 4 chiffres en empreinte impossible a relire.
   PBKDF2 = on repasse 150 000 fois dans une moulinette, ce qui rend les
   essais en masse tres lents. */
async function hachePin(pin, selHex) {
  if (!CRYPTO_DISPO) return { sel: "", hash: "", clair: pin };
  const sel = selHex ? hexVersOctets(selHex) : crypto.getRandomValues(new Uint8Array(16));
  const cle = await crypto.subtle.importKey("raw", new TextEncoder().encode(pin),
    "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: sel, iterations: 150000, hash: "SHA-256" }, cle, 256);
  return { sel: octetsVersHex(sel), hash: octetsVersHex(new Uint8Array(bits)) };
}

/* Fabrique les champs a enregistrer pour un membre. */
async function champsPin(pin) {
  const r = await hachePin(pin);
  return r.hash ? { pinHash: r.hash, pinSel: r.sel, pin: null } : { pin: pin, pinHash: null, pinSel: null };
}

async function verifiePin(pin, m) {
  if (!m) return false;
  if (m.pinHash && m.pinSel) {
    const r = await hachePin(pin, m.pinSel);
    return r.hash === m.pinHash;
  }
  return !!m.pin && m.pin === pin;   // ancien format : converti au prochain enregistrement
}

/* Convertit en douceur les anciens codes en clair vers le format chiffre. */
async function migrerPinSiBesoin(m, pin) {
  if (!m || m.pinHash || !CRYPTO_DISPO) return;
  Object.assign(m, await champsPin(pin));
  await Store.ecrire(["membres"]);
}

/* ============================ 3. Etat ============================ */

function etatVide() {
  return {
    famille: { nom: "", code: "", creeLe: "", version: 2 },
    membres: [], membresUid: [], adminsUid: [], appareils: {}, appareilsInfos: {},
    taches: [], bareme: {}, etats: {},
    courses: [], listesCourses: [], stock: [], recettes: [], repas: {}, notes: [],
    cadeaux: [], tarifs: {}, echanges: [], journal: [],
    reglages: Object.assign({}, REGLAGES_DEFAUT), jetonUtilise: null,
    /* Place dans le programme « Familles Fondatrices » : { numero, genre,
       statut, reserveeLe, valideeLe }, ou null. Volontairement HORS de
       CLES_DOC : elle s'ecrit par ses propres methodes, en silence, et ne
       doit jamais partir dans une ecriture de rubrique ordinaire. */
    fondatrice: null
  };
}

let etat = etatVide();
let moi = null;                       // membre connecte
const ui = {
  vue: "accueil",
  semaine: cleSemaine(new Date()),
  filtreTaches: "moi",
  filtreNotes: "agenda",         // "agenda", "pensebetes", "faits"
  filtreQuiNotes: "",            // "" = tout le monde, sinon un id de membre
  ongletCourses: "liste",        // "liste" ou "stock"
  rechercheRecette: "",
  rechercheStock: "",            // recherche dans la réserve
  rechercheCourses: "",          // recherche dans la liste de courses
  /* Côté de la réserve regardé : "alimentaire" ou "maison". Gardé sur
     l'appareil, comme les rayons repliés. */
  coteReserve: (() => {
    try { return localStorage.getItem("tribu:coteReserve") === "maison" ? "maison" : "alimentaire"; }
    catch (e) { return "alimentaire"; }
  })(),
  /* Rayons repliés de la réserve : une longue réserve devenait un mur à faire
     défiler. Gardés sur l'appareil d'une ouverture à l'autre. */
  rayonsReplies: lireListeMemorisee("tribu:rayonsReplies") || [],
  /* "perso", "vege", "rapide", "leger"… gardés sur l'appareil d'une ouverture
     à l'autre (avant, ils se perdaient à chaque rechargement). */
  filtresRecettes: (() => {
    try { const l = JSON.parse(localStorage.getItem("tribu:filtresRecettes") || "[]"); return Array.isArray(l) ? l : []; }
    catch (e) { return []; }
  })(),
  triRecettes: "alpha",          // "alpha", "recent", "saison"
  filtresOuverts: false,         // les rangées de filtres sont repliées
  focus: null
};

/* Les plats fournis avec l'application : on ne les propose pas au partage,
   toutes les familles les ont déjà. Le reste est considéré comme « à vous ». */
const NOMS_DEPART = new Set((window.RECETTES_DEPART || [])
  .map((r) => r.nom.toLowerCase().trim()));

/* Un dessert n'est pas un plat : il n'a rien à faire dans le générateur de
   menus du midi et du soir. On le range à part, sans le cacher. */
function estDessert(r) { return !!r && r.plat === "dessert"; }

function estRecettePerso(r) {
  if (r.origine === "perso") return true;
  if (r.origine) return false;                       // "depart" ou "importee"
  return !NOMS_DEPART.has(String(r.nom || "").toLowerCase().trim());
}

/* Favoris, PROPRES À CHAQUE PERSONNE (choix d'Amandine, 12 septembre 2026) :
   les goûts diffèrent dans une famille. Ils sont rangés sur la recette, dans
   une liste `favoris` d'identifiants de membres — les recettes sont déjà
   partagées par la tribu, et « recettes » fait partie des rubriques qu'un
   membre ordinaire a le droit d'enregistrer : aucun droit d'administrateur
   n'est nécessaire pour marquer ses propres favoris. */
/* Les cadeaux proposés au premier lancement des versions précédentes. Comme
   les recettes de départ, ils n'ont aucune marque : on les reconnaît par leur
   nom, comparé sans accents ni ponctuation. Ceux de la liste actuelle portent
   `origine: "depart"`, ce qui rendra le prochain renouvellement exact. */
const CADEAUX_ORIGINE = ["choisir le film du soir", "un dessert au choix", "soiree pizza",
  "30 min d ecran en plus", "sortie au parc piscine", "petit cadeau surprise"];
function cleCadeau(nom) {
  return pourChercher(String(nom || "")).replace(/[^a-z0-9]+/g, " ").trim();
}
function estCadeauOrigine(c) {
  return c.origine === "depart" || CADEAUX_ORIGINE.indexOf(cleCadeau(c.nom)) !== -1;
}
/* Ce que le renouvellement ferait : ce qui part, ce qui arrive. Un cadeau
   présent dans les deux listes reste en place — il n'est ni retiré, ni
   dupliqué, et garde le coût que la famille lui a donné. */
function cadeauxAremplacer() {
  const nouveaux = cadeauxDeDepart();
  const clesNouvelles = nouveaux.map((n) => cleCadeau(n.nom));
  const dejaLa = (nom) => etat.cadeaux.some((c) => cleCadeau(c.nom) === cleCadeau(nom));
  return {
    aRetirer: etat.cadeaux.filter((c) => estCadeauOrigine(c) &&
      clesNouvelles.indexOf(cleCadeau(c.nom)) === -1),
    aAjouter: nouveaux.filter((n) => !dejaLa(n.nom))
  };
}

function estFavori(r) {
  return !!(moi && (r.favoris || []).indexOf(moi.id) !== -1);
}
function basculerFavori(rid) {
  const r = etat.recettes.find((x) => x.id === rid);
  if (!r || !moi) return;
  const l = (r.favoris || []).slice();
  const i = l.indexOf(moi.id);
  if (i === -1) l.push(moi.id); else l.splice(i, 1);
  r.favoris = l;
  sauver("recettes");
  toast(i === -1 ? "Ajouté à vos favoris ⭐" : "Retiré de vos favoris");
}

/* --- Saisons --- */

function saisonActuelle(d) {
  const m = (d || new Date()).getMonth() + 1;
  return (SAISONS.find((s) => s.mois.indexOf(m) !== -1) || SAISONS[0]).val;
}
function infoSaison(val) {
  return SAISONS.find((s) => s.val === val) || null;
}
/* Sans saison indiquée, une recette convient toute l'année. */
function estDeSaison(r, d) {
  const l = r.saisons || [];
  if (!l.length) return true;
  return l.indexOf(saisonActuelle(d)) !== -1;
}
function saisonsToutelAnnee(r) { return !(r.saisons || []).length; }

/* Produits dont le nom contient celui d'un produit saisonnier sans en être un :
   des pommes de terre ne sont pas des pommes. On les écarte du calendrier. */
const PRODUITS_TOUTE_ANNEE = ["pomme de terre", "haricot rouge", "haricot blanc",
  "haricot sec", "tomate pelee", "tomate concassee", "coulis de tomate"];

/* Découpe un nom en mots comparables : sans accent, au singulier.
   « Courgettes » → ["courgette"] ; « Pommes de terre » → ["pomme","de","terre"] */
function motsDe(texte) {
  return String(texte || "")
    .toLowerCase()
    .replace(/œ/g, "oe").replace(/æ/g, "ae")   // sinon « bœuf » se coupe en deux
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .split(/[^a-z]+/)
    .filter(Boolean)
    .map((m) => (m.length > 3 && /[sx]$/.test(m) ? m.slice(0, -1) : m));
}

/* Un texte réduit à sa forme la plus simple, pour chercher. Sur un téléphone
   personne ne tape les accents : « pates » doit trouver « Pâtes », « creme »
   doit trouver « Crème », et « boeuf » doit trouver « Bœuf ». On garde les
   espaces, contrairement à `motsDe` : ici on cherche dans une phrase, pas
   dans une liste de mots. */
function pourChercher(texte) {
  return String(texte || "")
    .toLowerCase()
    .replace(/œ/g, "oe").replace(/æ/g, "ae")
    .normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/* Le produit figure-t-il dans ce nom ? On compare des MOTS ENTIERS : sinon
   « courgette » déclencherait « courge », et « poireau » déclencherait
   « poire ». C'est exactement le piège qu'on veut éviter. */
function contientProduit(mots, produit) {
  return suiteDeMots(mots, motsDe(produit));
}
/* Même chose, mais avec un produit DÉJÀ découpé : c'est ce qui permet de ne
   pas redécouper « pomme de terre » des milliers de fois d'affilée. */
function suiteDeMots(mots, p) {
  for (let i = 0; i + p.length <= mots.length; i++) {
    let ok = true;
    for (let j = 0; j < p.length; j++) { if (mots[i + j] !== p[j]) { ok = false; break; } }
    if (ok) return true;
  }
  return false;
}

/* Propose des saisons d'après les ingrédients : si un ingrédient n'est de
   saison qu'à un moment, la recette l'est aussi. Une aide, pas une vérité. */
function devinerSaisons(ingredients) {
  const scores = {};
  SAISONS.forEach((s) => { scores[s.val] = 0; });
  let trouves = 0;

  (ingredients || []).forEach((ing) => {
    const mots = motsDe(ing.nom);
    if (!mots.length) return;
    if (PRODUITS_TOUTE_ANNEE.some((p) => contientProduit(mots, p))) return;
    const dedans = [];
    for (const s in CALENDRIER) {
      if (CALENDRIER[s].some((p) => contientProduit(mots, p))) dedans.push(s);
    }
    /* Un produit disponible partout (ou inconnu) ne dit rien d'utile. */
    if (!dedans.length || dedans.length === SAISONS.length) return;
    trouves++;
    dedans.forEach((s) => { scores[s] += 1; });
  });

  if (!trouves) return [];
  const max = Math.max.apply(null, Object.values(scores));
  if (!max) return [];
  return SAISONS.filter((s) => scores[s.val] >= max).map((s) => s.val);
}

/* Cuisine du monde : le champ « cuisine » (pays ou région d'origine) des
   plats fournis. Les copies des familles plus anciennes ne l'ont pas : on le
   retrouve alors dans la bibliothèque de départ, par le nom du plat. */
let _cuisinesDepart = null;
function cuisineDe(r) {
  if (!r) return "";
  if (r.cuisine) return r.cuisine;
  if (!_cuisinesDepart) {
    _cuisinesDepart = new Map((window.RECETTES_DEPART || []).filter((x) => x.cuisine)
      .map((x) => [x.nom.toLowerCase().trim(), x.cuisine]));
  }
  return _cuisinesDepart.get(String(r.nom || "").toLowerCase().trim()) || "";
}
function estCuisineDuMonde(r) { return !!cuisineDe(r); }

/* Un plat passe-t-il cette recherche et ces filtres ? Source UNIQUE, pour le
   cahier de recettes ET la liste « Changer le plat » d'un repas : quand deux
   écrans parlent du même état, ils appellent la même fonction. */
function recetteCorrespond(r, recherche, f) {
  const q = pourChercher(recherche || "").trim();
  f = f || [];
  if (q && !pourChercher(r.nom).includes(q) &&
    !(r.ingredients || []).some((i) => pourChercher(i.nom).includes(q))) return false;
  if (f.includes("perso") && !estRecettePerso(r)) return false;
  /* Recopiée depuis le catalogue d'une autre famille. Même repère que
     l'étiquette « importée » de la liste : les deux ne peuvent pas diverger. */
  if (f.includes("importee") && r.origine !== "importee") return false;
  if (f.includes("favori") && !estFavori(r)) return false;
  if (f.includes("vege") && !r.vegetarien) return false;
  if (f.includes("rapide") && !r.rapide) return false;
  if (f.includes("leger") && r.type !== "leger") return false;
  if (f.includes("saison") && !estDeSaison(r)) return false;
  if (f.includes("thermomix") && !r.thermomix) return false;
  if (f.includes("dessert") && !estDessert(r)) return false;
  if (f.includes("plat") && estDessert(r)) return false;
  if (f.includes("monde") && !estCuisineDuMonde(r)) return false;
  /* Les profils santé voyagent dans la même liste, préfixés : « sante:coeur ».
     Plusieurs profils cochés se cumulent — le plat doit tenir les deux. */
  for (let k = 0; k < f.length; k++) {
    if (f[k].indexOf("sante:") === 0 && !aLeProfil(r, f[k].slice(6))) return false;
  }
  return true;
}

function recettesFiltrees() {
  return etat.recettes.filter((r) => recetteCorrespond(r, ui.rechercheRecette, ui.filtresRecettes))
    .sort(comparerRecettes(ui.triRecettes));
}

/* Une liste gardée sur l'appareil (les filtres cochés, par exemple) : on la
   retrouve à la prochaine ouverture au lieu de tout recocher. */
function lireListeMemorisee(cle) {
  try {
    const l = JSON.parse(localStorage.getItem(cle) || "null");
    return Array.isArray(l) ? l : null;
  } catch (e) { return null; }
}
function memoriserListe(cle, l) {
  try { localStorage.setItem(cle, JSON.stringify(l)); } catch (e) { /* navigation privée */ }
}

/* Les trois façons de ranger le cahier. « recent » se fie d'abord à la date
   de création ; les plats fournis n'en ont pas, on retombe alors sur leur
   ordre d'arrivée dans la liste — ce qui met bien en tête ceux que la
   dernière mise à jour vient d'ajouter. */
function comparerRecettes(tri) {
  const rang = new Map();
  etat.recettes.forEach((r, k) => rang.set(r.id, k));
  const alpha = (a, b) => a.nom.localeCompare(b.nom, "fr");

  if (tri === "recent") {
    return (a, b) => String(b.creeLe || "").localeCompare(String(a.creeLe || "")) ||
      (rang.get(b.id) - rang.get(a.id));
  }
  if (tri === "saison") {
    return (a, b) => (estDeSaison(b) ? 1 : 0) - (estDeSaison(a) ? 1 : 0) ||
      /* à saison égale, les plats vraiment de saison passent devant ceux
         qui conviennent toute l'année : ce sont eux qu'on cherche. */
      (saisonsToutelAnnee(a) ? 1 : 0) - (saisonsToutelAnnee(b) ? 1 : 0) ||
      alpha(a, b);
  }
  return alpha;
}

/* La lettre sous laquelle ranger un plat : sans accent, en majuscule.
   « Œufs cocotte » et « Omelette » se retrouvent ainsi au même endroit. */
function lettreRecette(r) {
  const m = motsDe(r.nom)[0] || "";
  return (m.charAt(0) || "#").toUpperCase();
}

function membre(idm) { return etat.membres.find((m) => m.id === idm) || null; }
/* Administrateur = un PROFIL administrateur, utilise sur un APPAREIL qui a
   les droits d'administrateur cote serveur (liste adminsUid). Le code a 4
   chiffres ne fait que choisir le profil sur l'appareil. Sans cette seconde
   condition, l'application ouvrait l'administration sur un telephone entre
   comme simple membre, et Firestore refusait ensuite chaque enregistrement
   (« droits insuffisants », constate le 10/09/2026). En mode local, il n'y a
   pas de serveur : le role suffit. */
function estAdmin() {
  if (!(moi && moi.role === "admin")) return false;
  return Store.mode !== "nuage" || (etat.adminsUid || []).indexOf(Store.uid) !== -1;
}
/* Un profil administrateur choisi sur un appareil qui n'en a pas les droits. */
function adminSansDroitsIci() { return !!(moi && moi.role === "admin") && !estAdmin(); }

/* Profil « géré » : un enfant sans téléphone. Il participe normalement aux
   tâches, aux points et aux cadeaux, mais ne se connecte pas lui-même : ce
   sont les parents qui cochent pour lui et qui dépensent ses points. */
function estGere(idm) {
  const m = typeof idm === "string" ? membre(idm) : idm;
  return !!(m && m.sansAppareil);
}
function membresGeres() { return etat.membres.filter((m) => m.sansAppareil); }

/* Combien d'appareils sont rattachés à ce profil dans le registre. */
function registreAppareils(membreId) {
  return Object.keys(etat.appareils || {})
    .filter((u) => etat.appareils[u] === membreId).length;
}

/* Ce profil s'est-il déjà connecté quelque part ?
   Deux sources à consulter — et c'est important : depuis le passage aux
   invitations, un appareil qui rejoint s'inscrit dans le registre `appareils`
   et NON dans le champ `uids` du profil (il n'a pas le droit de réécrire la
   liste des membres). Ne regarder que `uids` afficherait « en attente
   d'invitation » sur des gens pourtant bien connectés. */
function aUnAppareil(m) {
  if (!m) return false;
  return !!((m.uids || []).length || registreAppareils(m.id));
}
function membresConnectables() { return etat.membres.filter((m) => !m.sansAppareil); }

/* --- Les appareils d'un membre (étape 2) ---
   Pour la fiche « Appareils » : cet appareil d'abord, puis par date d'ajout.
   Un appareil d'avant la 0.50 n'a pas d'informations : « Appareil » suffit. */
function appareilsDe(membreId) {
  const infos = etat.appareilsInfos || {};
  return Object.keys(etat.appareils || {})
    .filter((u) => etat.appareils[u] === membreId)
    .map((u) => ({
      uid: u, ici: u === Store.uid,
      admin: (etat.adminsUid || []).indexOf(u) !== -1,
      type: (infos[u] && infos[u].type) || "Appareil",
      ajouteLe: (infos[u] && infos[u].ajouteLe) || "",
      par: (infos[u] && infos[u].par) || ""
    }))
    .sort((a, b) => (b.ici ? 1 : 0) - (a.ici ? 1 : 0) || a.ajouteLe.localeCompare(b.ajouteLe));
}
function appareilsRetiresDe(membreId) {
  const r = etat.appareilsRevoques || {};
  return Object.keys(r)
    .filter((u) => r[u] && r[u].membre === membreId)
    .map((u) => Object.assign({ uid: u }, r[u]))
    .sort((a, b) => String(b.le || "").localeCompare(String(a.le || "")));
}

/* Les tâches en attente des enfants gérés, pour que le parent les coche. */
function tachesDesEnfants() {
  return tachesDuMoment().filter((x) => x.assigne && estGere(x.assigne) && x.et.statut === "afaire");
}
function pointsDe(idm) {
  return etat.journal.reduce((s, e) => s + (e.membreId === idm ? e.delta : 0), 0);
}
/* ---------------------- L'objectif commun de la tribu ----------------------

   Le classement met chacun contre les autres ; l'objectif commun met toute la
   maison du même côté. Avec des enfants d'âges différents, le petit qui perd
   toujours au classement peut au moins gagner AVEC les autres.

   On compte les points GAGNÉS depuis le lancement de l'objectif, pas les
   points détenus : sinon un cadeau échangé par l'un ferait reculer la tribu
   entière, ce qui n'aurait aucun sens. */
const OBJECTIF_DEFAUT = { actif: false, nom: "", emoji: "🎯", cible: 500, depuis: null, faits: 0 };

function objectifFamille() {
  return Object.assign({}, OBJECTIF_DEFAUT, (etat.reglages && etat.reglages.objectif) || {});
}
function objectifActif() {
  const o = objectifFamille();
  return o.actif && o.cible > 0 ? o : null;
}
function pointsCollectifs() {
  const o = objectifFamille();
  return etat.journal.reduce((s, e) => {
    if (e.delta <= 0) return s;                       // un cadeau ne défait rien
    /* Une ligne SANS date compte quand même. Sans cette précaution, une date
       absente passait pour la plus ancienne du monde : la ligne disparaissait
       du compteur commun tout en restant dans le total personnel, qui ne
       regarde pas la date. Deux compteurs qui se contredisent, c'est le
       meilleur moyen de ne plus croire ni l'un ni l'autre. */
    if (o.depuis && e.date && String(e.date) < o.depuis) return s;
    return s + e.delta;
  }, 0);
}
/* « depuis le 5 septembre » — la phrase qui manquait sous la jauge.
   Le compteur commun ne compte que ce qui a été gagné APRÈS le lancement de
   l objectif. Sans cette date sous les yeux, une barre qui ne monte pas passe
   pour une panne, alors que c est le réglage qui parle. */
function depuisQuandObjectif() {
  const o = objectifFamille();
  return o.depuis
    ? "depuis le " + dateJolie(String(o.depuis).slice(0, 10), true)
    : "depuis le début";
}
function objectifAtteint() {
  const o = objectifActif();
  return !!o && pointsCollectifs() >= o.cible;
}

function classement() {
  return etat.membres.map((m) => ({ m, pts: pointsDe(m.id) }))
    .sort((a, b) => b.pts - a.pts || a.m.prenom.localeCompare(b.m.prenom));
}

/* Les listes que Firebase utilise pour verifier les droits et les montants.
   A recalculer des qu'on touche aux membres, aux taches ou aux cadeaux. */
/* Recalcule les listes que Firebase utilise pour vérifier les droits et les
   montants. Travaille sur n'importe quel document, pas seulement sur l'état
   courant — indispensable pour le mode local, où l'appareil qui rejoint n'a
   rien en mémoire. */
function recalculerIndexSur(d) {
  const uids = [];
  const admins = [];
  const profil = (idm) => (d.membres || []).find((m) => m.id === idm) || null;
  /* Un appareil retiré (étape 2) n'est JAMAIS remis dans les listes d'accès,
     d'où qu'il vienne : les règles refuseraient d'ailleurs l'écriture (I4). */
  const revoque = (u) => !!(d.appareilsRevoques && d.appareilsRevoques[u]);
  const ajoute = (u, estAdminDuProfil) => {
    if (!u || revoque(u)) return;
    if (uids.indexOf(u) === -1) uids.push(u);
    if (estAdminDuProfil && admins.indexOf(u) === -1) admins.push(u);
  };
  /* Deux sources : les appareils notés dans chaque profil (écrits par un
     administrateur) et le registre `appareils`, rempli par ceux qui
     rejoignent par invitation sans pouvoir lire le reste de la famille. */
  (d.membres || []).forEach((m) => (m.uids || []).forEach((u) => ajoute(u, m.role === "admin")));
  Object.keys(d.appareils || {}).forEach((u) => {
    const m = profil(d.appareils[u]);
    if (m) ajoute(u, m.role === "admin");
  });

  /* Filet anti-verrouillage. Un appareil déjà autorisé qu'on n'arrive pas à
     rattacher à un profil appartient quand même à quelqu'un : le retirer le
     mettrait dehors sans prévenir. On ne retire donc que les appareils dont
     le profil a été supprimé, et jamais celui qui est en train d'écrire. */
  const orphelin = (u) => {
    const cible = (d.appareils || {})[u];
    return cible !== undefined && !profil(cible);
  };
  (d.membresUid || []).forEach((u) => {
    if (uids.indexOf(u) === -1 && !orphelin(u) && !revoque(u)) uids.push(u);
  });
  if (Store.uid && uids.indexOf(Store.uid) === -1 && !revoque(Store.uid)) uids.push(Store.uid);

  /* Filet anti-verrouillage des ADMINISTRATEURS : un recalcul ne doit jamais
     laisser la tribu sans aucun appareil administrateur — plus personne ne
     pourrait la gerer, ni meme la supprimer. C'est arrive le 10/09/2026 : le
     seul appareil administrateur s'etait range sous un autre profil en
     ouvrant une invitation, et le recalcul suivant l'avait retire des
     administrateurs. On garde alors ceux d'avant (s'ils sont toujours la). */
  if (!admins.length) {
    (d.adminsUid || []).forEach((u) => { if (uids.indexOf(u) !== -1) admins.push(u); });
  }

  d.membresUid = uids;
  d.adminsUid = admins;
  d.bareme = {};
  (d.taches || []).forEach((t) => { d.bareme[t.id] = t.points || 0; });
  d.tarifs = {};
  (d.cadeaux || []).forEach((c) => { d.tarifs[c.id] = c.cout || 0; });
  return d;
}

function recalculerIndex() { return recalculerIndexSur(etat); }

/* --- Taches --- */
function participantsValides(t) {
  return (t.participants || []).filter((x) => membre(x));
}
function assigneDe(t, d) {
  const p = participantsValides(t);
  if (!p.length) return null;
  if (t.rotation === false) return p[0];
  const n = p.length;
  const i = (((indexPeriode(t.frequence, d) + (t.decalage || 0)) % n) + n) % n;
  return p[i];
}
function cleEtat(t, d) { return t.id + "|" + clePeriode(t.frequence, d); }
function etatTache(t, d) {
  return etat.etats[cleEtat(t, d)] || { statut: "afaire" };
}
function tachesDuMoment() {
  const d = new Date();
  return etat.taches.filter((t) => t.actif !== false).map((t) => ({
    t, d, assigne: assigneDe(t, d), et: etatTache(t, d)
  }));
}
function mesTachesAFaire() {
  return tachesDuMoment().filter((x) => x.assigne === (moi && moi.id) && x.et.statut === "afaire");
}
function tachesAValider() {
  return tachesDuMoment().filter((x) => x.et.statut === "fait");
}
function echangesEnAttente() {
  return etat.echanges.filter((e) => e.statut === "demande");
}

/* --- Notes --- */
function notesTriees() {
  return etat.notes.slice().sort((a, b) => (a.date || "9999").localeCompare(b.date || "9999"));
}
function notesAVenir() { return notesTriees().filter((n) => !n.fait); }

/* --- L'agenda partagé ---
   Un rappel avec une date est un rendez-vous, un rappel sans date est un
   pense-bête. Même objet, deux usages : inutile d'inventer une deuxième
   liste que la famille devrait tenir à jour en double. */
function estRendezVous(n) { return !!(n && n.date); }

/* Concerne-t-il cette personne ? Sans personne cochée, le rappel vaut pour
   toute la famille — il apparaît donc dans le filtre de chacun. */
function noteConcerne(n, membreId) {
  if (!membreId) return true;
  const l = (n && n.concernes) || [];
  return !l.length || l.indexOf(membreId) !== -1;
}

/* Les rendez-vous à venir, regroupés par jour : c'est ce qui donne un agenda
   lisible plutôt qu'une liste plate. */
function agendaParJour(membreId, combienDeJours) {
  const auj = isoDate(new Date());
  const limite = combienDeJours ? decalerIso(auj, combienDeJours) : null;
  const jours = new Map();
  notesAVenir().forEach((n) => {
    if (!estRendezVous(n) || !noteConcerne(n, membreId)) return;
    if (limite && n.date > limite) return;
    if (!jours.has(n.date)) jours.set(n.date, []);
    jours.get(n.date).push(n);
  });
  /* Dans une journée, ce qui a une heure passe avant ce qui n'en a pas. */
  jours.forEach((l) => l.sort((a, b) =>
    String(a.heure || "99:99").localeCompare(String(b.heure || "99:99"))));
  return Array.from(jours.entries()).map(([date, notes]) => ({ date: date, notes: notes }));
}

function decalerIso(iso, jours) {
  const d = deIso(iso);
  d.setDate(d.getDate() + jours);
  return isoDate(d);
}
function notesUrgentes() {
  const auj = isoDate(new Date());
  return notesAVenir().filter((n) => n.date && n.date <= auj);
}

/* ============================ 4. Stockage ============================ */

const Store = {
  mode: "local",          // "local" ou "nuage"
  code: null,
  uid: null,              // identifiant de CET appareil (session anonyme) : le seul que Firestore autorise
  lienCompte: false,      // l'adresse ouverte contient un lien magique a terminer
  erreurEmail: "",
  comptesFamille: [],     // cache des comptes adultes de la famille (administrateurs seulement)
  raison: "",
  _db: null, _fs: null, _auth: null, _au: null, _unsubs: [], _compteApp: null, _base: "",

  configOk() {
    if (EMULATEUR) return true;   // faux Firebase local : voir EMULATEUR
    const c = window.CONFIG_FIREBASE;
    const remplie = !!(c && c.apiKey && c.apiKey !== "A_REMPLIR" && c.projectId && c.projectId !== "A_REMPLIR");
    if (!remplie) return false;

    /* Garde-fou : sur un serveur de test (localhost), on reste en mode local
       pour ne pas écrire dans la vraie base de la famille. Pour tester quand
       même la synchronisation, ouvrir l'adresse avec « ?nuage=1 ». */
    const local = location.hostname === "localhost" || location.hostname === "127.0.0.1";
    if (local && !new URLSearchParams(location.search).has("nuage")) {
      this.raison = "localhost";
      console.info("Serveur de test : mode local forcé (ajoutez ?nuage=1 pour utiliser Firebase).");
      return false;
    }
    return true;
  },

  /* App Check : atteste que la requête vient bien de NOTRE site, et pas d'une
     copie de l'application branchée sur la même base. Le code étant public,
     c'est le seul garde-fou contre quelqu'un qui viendrait consommer le quota
     gratuit avec un clone.

     Deux précautions importantes :
     - sans clé configurée, on ne charge rien du tout : l'application marche
       exactement comme avant ;
     - un échec n'interrompt jamais le démarrage. Tant que la « contrainte »
       n'est pas activée dans la console Firebase, un jeton manquant est
       simplement ignoré par le serveur. */
  async _activerAppCheck(a, base) {
    if (EMULATEUR) return;        // l'emulateur ne verifie pas App Check
    const cle = (window.CONFIG_FIREBASE || {}).cleAppCheck;
    if (!cle || cle === "A_REMPLIR") return;
    try {
      const ac = await import(base + "firebase-app-check.js");
      /* reCAPTCHA ENTERPRISE, et non la version 3 : Firebase a rendu cette
         derniere obsolete et la console ne permet plus de s'y enregistrer.
         Le quota gratuit du plan Spark couvre tres largement une poignee de
         familles : aucun frais a prevoir. */
      ac.initializeAppCheck(a, {
        provider: new ac.ReCaptchaEnterpriseProvider(cle),
        isTokenAutoRefreshEnabled: true
      });
    } catch (err) {
      console.warn("App Check indisponible, on continue sans :", err);
    }
  },

  async preparer() {
    this.raison = "";
    if (!this.configOk()) {
      this.mode = "local";
      if (!this.raison) this.raison = "config";   // configOk() peut dire « localhost »
      this.uid = this._uidLocal();
      return;
    }
    try {
      const base = "https://www.gstatic.com/firebasejs/10.12.2/";
      /* Firestore pèse 426 Ko, deux fois le reste du SDK (mesure du
         12/09/2026). On lance son téléchargement TOUT DE SUITE, mais on ne
         l'attend qu'une fois la session ouverte : il arrive donc pendant la
         connexion au lieu de la retarder. Rien d'autre ne change — le reste
         du code trouve `_fs` et `_db` en place, comme avant. */
      const promesseFirestore = import(base + "firebase-firestore.js");
      const [app, auth] = await Promise.all([
        import(base + "firebase-app.js"),
        import(base + "firebase-auth.js")
      ]);
      const a = app.initializeApp(configFirebase());
      /* App Check n'est PAS attendu (mesure du 12/09/2026) : il importait un
         quatrième module puis le script reCAPTCHA avant même d'ouvrir la
         session, et tout ce temps s'ajoutait au démarrage. Il s'installe
         maintenant en parallèle ; les requêtes suivantes porteront son jeton.
         Sans le mode « Appliquer », une requête partie trop tôt n'est de
         toute façon jamais refusée. La session du lien e-mail, elle, garde
         son attente : elle n'est pas sur le chemin du démarrage. */
      this._activerAppCheck(a, base);
      const au = auth.getAuth(a);
      if (EMULATEUR) auth.connectAuthEmulator(au, "http://127.0.0.1:9099");
      this._auth = auth;
      this._au = au;
      this._base = base;

      /* LA SESSION DE L'APPAREIL, et elle seule : anonyme, gardee sur le
         telephone, c'est elle que Firestore autorise. L'identite d'un adulte
         (lien magique) vit dans une AUTRE session, a part — voir _compte().
         Les deux ne se remplacent donc jamais : le piege de la 0.49, ou la
         session anonyme ecrasait la session e-mail, n'existe plus.
         Une session deja presente est reprise telle quelle ; si ce n'est pas
         une session anonyme (reliquat d'essais de la 0.49), on la remplace.
         Voir MODELE-COMPTES-APPAREILS.md, sections 2 et 5. */
      let u = await this._sessionExistante();
      if (!u || !u.isAnonymous) u = (await auth.signInAnonymously(au)).user;

      /* Firestore, enfin attendu : son téléchargement a couru pendant toute
         l'ouverture de la session, il est donc déjà là — ou presque. */
      const fs = await promesseFirestore;
      this._fs = fs;
      /* CACHE LOCAL (12/09/2026) — la plus grosse economie de l'application.

         Sans lui, chaque ouverture redemandait TOUT au serveur : le document
         de la tribu, les etats, le journal. Mesure du banc d'essai : 802
         documents lus a chaque ouverture, l'historique en entier compris.

         Avec lui, Firestore garde les donnees dans le navigateur et se
         reabonne avec un JETON DE REPRISE : le serveur ne renvoie plus que ce
         qui a change depuis la derniere fois. Une ouverture sans nouveaute ne
         coute alors presque rien.

         `persistentMultipleTabManager` : sur un meme appareil, l'icone de
         l'ecran d'accueil et le navigateur peuvent etre ouverts ensemble.
         Sans lui, la seconde fenetre se verrait refuser le cache.

         REPLI OBLIGATOIRE : en navigation privee, ou si le navigateur refuse
         IndexedDB, l'initialisation echoue. On repart alors sur la memoire
         seule — moins economique, mais l'application fonctionne. */
      try {
        this._db = fs.initializeFirestore(a, {
          localCache: fs.persistentLocalCache({ tabManager: fs.persistentMultipleTabManager() })
        });
        this.cacheLocal = true;
      } catch (err) {
        console.warn("Cache local indisponible, mémoire seule :", err);
        this._db = fs.getFirestore(a);
        this.cacheLocal = false;
      }
      if (EMULATEUR) fs.connectFirestoreEmulator(this._db, "127.0.0.1", 8085);
      this.uid = u.uid;
      this.mode = "nuage";
      /* Un lien magique a-t-il ete ouvert ? On le note seulement : il se
         termine une fois l'application prete (demarrerVraiment). */
      this.lienCompte = auth.isSignInWithEmailLink(au, location.href);
    } catch (err) {
      console.warn("Firebase indisponible, passage en mode local :", err);
      this.mode = "local";
      /* Deux pannes différentes, deux explications : le serveur injoignable,
         ou la mémoire du navigateur qui ne répond pas. */
      this.raison = (err && err.code === "stockage-bloque") ? "stockage" : "erreur";
      this.uid = this._uidLocal();
    }
  },

  /* La session deja restauree par Firebase, s'il y en a une.
     onAuthStateChanged repond une premiere fois des que la restauration est
     finie : c'est le seul moyen fiable de savoir si quelqu'un est deja
     connecte, currentUser valant null tant que la lecture n'est pas faite. */
  _sessionExistante() {
    return new Promise((ok, ko) => {
      /* Firebase relit la session enregistrée dans la mémoire du navigateur
         (IndexedDB) : d'habitude c'est instantané, sans réseau. Si cette
         mémoire est indisponible ou bloquée (navigation privée restrictive,
         stockage plein, autre onglet resté figé), Firebase attendait SANS FIN :
         le démarrage s'arrêtait sans rien dire, sur « Ça coince — aucun
         message technique » (constaté le 11/09/2026). On borne donc l'attente
         et on le dit clairement. */
      const minuterie = setTimeout(() => {
        const e = new Error("La mémoire du navigateur ne répond pas.");
        e.code = "stockage-bloque";
        ko(e);
      }, this.DELAI_SESSION);
      const stop = this._auth.onAuthStateChanged(this._au, (u) => {
        clearTimeout(minuterie); stop(); ok(u || null);
      });
    });
  },
  /* Assez long pour un vieux téléphone, assez court pour répondre avant le
     garde-fou des 8 secondes d'index.html. */
  DELAI_SESSION: 4000,

  /* --- Connexion par lien magique ---------------------------------------

     Firebase envoie l'e-mail lui-meme, gratuitement : aucun serveur a tenir,
     aucun frais. En echange, il faut lui redonner l'adresse au moment de
     terminer la connexion — c'est une securite, elle empeche qu'un lien
     intercepte suffise a entrer.

     L'adresse est gardee sur l'appareil qui a DEMANDE le lien. Quand le lien
     est ouvert ailleurs (l'admin qui invite depuis son telephone, par
     exemple), on ne l'a pas : l'application demande alors de la confirmer,
     ce qui est une friction acceptable et, en verite, une protection. */
  CLE_EMAIL_ATTENTE: "tribu:emailLien",
  /* « Un lien vient d'être envoyé d'ici pour quelqu'un d'autre » : juste une
     date, JAMAIS l'adresse de cette personne. Sert seulement à expliquer
     pourquoi on redemande l'adresse si le lien s'ouvre sur cet appareil. */
  CLE_LIEN_ENVOYE: "tribu:lienEnvoyeIci",
  /* Pourquoi l'adresse n'est pas connue au retour d'un lien : "envoyeIci",
     "expire" ou "ailleurs". L'écran de confirmation dit la vraie raison. */
  raisonEmailAbsent: "",

  /* --- La session du COMPTE ADULTE ---------------------------------------

     Une seconde application Firebase, a part, dont la session n'est JAMAIS
     gardee sur le telephone. Par defaut, Firebase conserve une session d'une
     ouverture a l'autre : on ne compte donc sur aucun effacement spontane, et
     on prend deux precautions explicites — la persistance « en memoire »
     choisie a la main, et la fermeture (signOut) des que le rattachement est
     fait. Elle ne sert qu'a une chose : prouver une adresse pour rattacher
     CET appareil a son profil. Elle n'ouvre jamais la famille elle-meme.
     Creee a la demande seulement : la plupart des ouvertures n'en ont pas
     besoin. Voir MODELE-COMPTES-APPAREILS.md, section 5. */
  async _compte() {
    if (this._compteApp) return this._compteApp;
    if (this.mode !== "nuage") return null;
    const base = this._base;
    const [app, auth, fs] = await Promise.all([
      import(base + "firebase-app.js"),
      import(base + "firebase-auth.js"),
      import(base + "firebase-firestore.js")
    ]);
    const a = app.initializeApp(configFirebase(), "compte");
    await this._activerAppCheck(a, base);
    const au = auth.initializeAuth(a, { persistence: auth.inMemoryPersistence });
    if (EMULATEUR) auth.connectAuthEmulator(au, "http://127.0.0.1:9099");
    /* L'e-mail de connexion est redige par Firebase, en anglais par defaut.
       Cette langue-ci choisit sa traduction francaise. */
    au.languageCode = "fr";
    const db = fs.getFirestore(a);
    if (EMULATEUR) fs.connectFirestoreEmulator(db, "127.0.0.1", 8085);
    this._compteApp = { auth: auth, au: au, fs: fs, db: db };
    return this._compteApp;
  },

  async envoyerLienConnexion(email) {
    const adresse = normaliserEmail(email);
    if (!adresse) return { ok: false, message: "Adresse manquante" };
    if (this.mode !== "nuage") {
      return { ok: false, message: "Le partage n'est pas activé : la connexion par e-mail est impossible." };
    }
    /* Le lien ramene sur la page d'accueil, SANS rien dans l'adresse : ni
       jeton, ni adresse e-mail. Firebase deconseille d'y mettre l'adresse,
       cela ouvrirait la porte a une injection de session. */
    const url = location.origin + adresseNette();
    try {
      const c = await this._compte();
      await c.auth.sendSignInLinkToEmail(c.au, adresse, { url: url, handleCodeInApp: true });
      return { ok: true };
    } catch (err) {
      console.warn("Lien de connexion non envoye :", err);
      this.derniereErreur = err;
      return { ok: false, message: messageAuth(err) };
    }
  },

  /* Retient l'adresse SUR CET APPAREIL, pour ne pas la redemander au retour.
     Appele seulement quand la personne demande le lien pour elle-meme : un
     administrateur qui invite quelqu'un d'autre ne doit pas garder l'adresse
     de cette personne, sinon c'est elle qu'on lui proposerait ensuite. */
  /* L'adresse est datee et PERIME toute seule au bout d'une heure : largement
     de quoi ouvrir un e-mail qu'on vient de demander. (Firebase ne documente
     pas la duree de vie du lien lui-meme ; seul son usage unique est etabli.)
     Sans cela, une adresse restait indefiniment dans
     le telephone de quelqu'un qui n'a jamais termine sa connexion : une
     donnee personnelle conservee pour rien, ce qui est exactement ce qu'il
     faut eviter. */
  DUREE_EMAIL_ATTENTE: 3600000,

  retenirEmail(email) {
    const paquet = { a: String(email || "").trim().toLowerCase(), t: Date.now() };
    try { localStorage.setItem(this.CLE_EMAIL_ATTENTE, JSON.stringify(paquet)); }
    catch (e) { /* navigation privee : on redemandera, ce n'est pas grave */ }
  },
  emailRetenu() {
    /* Par défaut, le lien vient d'un autre navigateur ; on précise ensuite. */
    this.raisonEmailAbsent = this._lienEnvoyeIci() ? "envoyeIci" : "ailleurs";
    let brut = null;
    try { brut = localStorage.getItem(this.CLE_EMAIL_ATTENTE); } catch (e) { return ""; }
    if (!brut) return "";
    let p = null;
    try { p = JSON.parse(brut); } catch (e) { p = null; }
    /* Ancien format (une simple chaine) : on ne le garde pas, on l'efface. */
    if (!p || typeof p !== "object" || !p.a) { this.oublierEmail(); return ""; }
    if (Date.now() - (Number(p.t) || 0) > this.DUREE_EMAIL_ATTENTE) {
      this.oublierEmail();
      this.raisonEmailAbsent = "expire";
      return "";
    }
    this.raisonEmailAbsent = "";
    return p.a;
  },
  oublierEmail() {
    try { localStorage.removeItem(this.CLE_EMAIL_ATTENTE); } catch (e) { }
    try { localStorage.removeItem(this.CLE_LIEN_ENVOYE); } catch (e) { }
  },
  /* Un lien envoyé d'ici pour quelqu'un d'autre (fiche d'invitation) : on
     n'en garde que la date, une heure au plus, comme l'adresse retenue. */
  marquerLienEnvoyeIci() {
    try { localStorage.setItem(this.CLE_LIEN_ENVOYE, String(Date.now())); } catch (e) { }
  },
  _lienEnvoyeIci() {
    let t = 0;
    try { t = Number(localStorage.getItem(this.CLE_LIEN_ENVOYE)) || 0; } catch (e) { return false; }
    return !!t && Date.now() - t <= this.DUREE_EMAIL_ATTENTE;
  },

  /* Termine un lien magique et rattache CET appareil au profil de l'adresse.
     Rend { ok, etape, code, membre, dejaMembre, message }. Ne leve jamais.

     1. la session du COMPTE prouve l'adresse (lien + adresse, comme l'exige
        Firebase quand le lien est ouvert ailleurs que la ou il a ete demande) ;
     2. elle lit SA fiche compte, la seule chose qu'elle a le droit de lire :
        elle y apprend la famille et le profil ;
     3. si CET appareil est deja membre (la session de l'APPAREIL lit la
        famille), il n'y a rien a ecrire ;
     4. sinon elle ajoute cet appareil, sans lire la famille — meme technique
        que l'entree par invitation. Les regles verifient tout ;
     5. dans tous les cas, la session du compte est FERMEE. */
  async rattacherParEmail(email) {
    const adresse = normaliserEmail(email);
    const res = { ok: false, etape: "lien", code: null, membre: null, dejaMembre: false, message: "" };
    if (!adresse) { res.message = "Adresse manquante"; return res; }
    let c = null;
    try {
      c = await this._compte();
      if (!c) { res.message = "Le partage n'est pas activé."; return res; }
      await c.auth.signInWithEmailLink(c.au, adresse, location.href);
      this.oublierEmail();
    } catch (err) {
      console.warn("Lien de connexion refuse :", err);
      this.derniereErreur = err;
      /* Ici, « invalid-email » ne veut pas dire « adresse mal ecrite » : c'est
         Firebase qui refuse une adresse DIFFERENTE de celle du lien (constate
         sur l'emulateur le 10/09/2026). Le dire tel quel eviterait de faire
         chercher une faute de frappe qui n'existe pas. */
      res.message = (err && err.code === "auth/invalid-email")
        ? "Cette adresse ne correspond pas au lien reçu. Vérifiez-la, ou ouvrez " +
          "le lien dans le navigateur d’où vous l’avez demandé."
        : messageAuth(err);
      return res;
    }
    try {
      res.etape = "compte";
      const fiche = await c.fs.getDoc(c.fs.doc(c.db, "comptes", adresse));
      if (!fiche.exists()) {
        res.message = "Aucune famille n'a enregistré cette adresse. Demandez à un " +
          "administrateur de l’ajouter à votre profil.";
        return res;
      }
      const f = fiche.data();
      res.code = f.famille;
      res.membre = f.membre;
      /* Deja rattache ? C'est la session de l'APPAREIL qui essaie de lire. */
      const deja = await this.charger(f.famille);
      if (deja) { res.dejaMembre = true; res.ok = true; this.derniereErreur = null; return res; }
      res.etape = "ecriture";
      const morceau = {
        appareils: { [this.uid]: f.membre },
        appareilsInfos: { [this.uid]: infoAppareil("compte") },
        membresUid: c.fs.arrayUnion(this.uid)
      };
      if (f.admin === true) morceau.adminsUid = c.fs.arrayUnion(this.uid);
      await c.fs.setDoc(c.fs.doc(c.db, "familles", f.famille), morceau, { merge: true });
      this.derniereErreur = null;
      res.ok = true;
      return res;
    } catch (err) {
      console.warn("Rattachement refuse :", err);
      this.derniereErreur = err;
      res.message = (err && err.code === "permission-denied")
        ? "Le serveur a refusé le rattachement. Les règles Firebase ne sont peut-être pas encore publiées."
        : "Le rattachement a échoué" + (err && err.code ? " (" + err.code + ")" : "") + ".";
      return res;
    } finally {
      /* Fermee dans TOUS les cas : cette session ne doit jamais survivre. */
      await this._effacerCompteConnexion(c);
    }
  },

  /* Mieux que fermer la session du compte : SUPPRIMER la fiche que Firebase
     Authentication vient de creer pour cette adresse. Elle ne sert plus a
     rien — l'identite durable est comptes/{adresse}, et les regles ne
     regardent que l'adresse prouvee. Sans cela, toute adresse ayant ouvert
     un lien, meme inconnue de toute tribu, resterait conservee chez Firebase
     (constate sur l'emulateur le 10/09/2026). Le prochain lien en recreera
     une, supprimee de la meme facon.
     La suppression est permise depuis l'appareil parce que la connexion date
     de quelques secondes. Si elle echoue (reseau), on ferme au moins la
     session : c'etait le comportement d'avant. */
  async _effacerCompteConnexion(c) {
    if (!c) return;
    const u = c.au.currentUser;
    if (u) {
      try { await c.auth.deleteUser(u); return; }   // ferme aussi la session
      catch (e) { console.warn("Fiche de connexion non supprimee :", e); }
    }
    try { await c.auth.signOut(c.au); } catch (e) { /* deja fermee */ }
  },

  /* --- Comptes adultes : ce que l'administration en voit ---
     Ils vivent A PART de la famille (collection « comptes »). Un
     administrateur retrouve ceux de SA famille par une requete filtree. */
  async listerComptes(code) {
    if (this.mode !== "nuage") { this.comptesFamille = []; return []; }
    try {
      const fs = this._fs;
      const q = await fs.getDocs(fs.query(fs.collection(this._db, "comptes"),
        fs.where("famille", "==", code)));
      const l = [];
      q.forEach((d) => l.push(Object.assign({ adresse: d.id }, d.data())));
      this.comptesFamille = l;
      return l;
    } catch (err) {
      console.warn("Comptes illisibles :", err);
      this.derniereErreur = err;
      return this.comptesFamille;
    }
  },
  compteDe(membreId) {
    return (this.comptesFamille || []).find((c) => c.membre === membreId) || null;
  },
  async enregistrerCompte(email, membreId, admin) {
    const adresse = normaliserEmail(email);
    if (this.mode !== "nuage") return { ok: false, message: "Le partage n'est pas activé." };
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "comptes", adresse), {
        famille: etat.famille.code, membre: membreId, admin: !!admin,
        ajouteLe: new Date().toISOString(), ajoutePar: moi ? moi.id : null
      });
      return { ok: true };
    } catch (err) {
      console.warn("Compte refuse :", err);
      this.derniereErreur = err;
      /* L'appareil est forcement administrateur ici (estAdmin) : un refus veut
         donc dire que l'adresse appartient deja a une autre tribu (1 adresse =
         1 tribu). Le formulaire n'enregistre alors RIEN. */
      return { ok: false, message: (err && err.code === "permission-denied")
        ? "Cette adresse est déjà liée à une autre tribu : rien n’a été enregistré. " +
          "Choisissez une autre adresse, ou « 🔑 Par code »."
        : "Enregistrement impossible" + (err && err.code ? " (" + err.code + ")" : "") + "." };
    }
  },
  async supprimerCompte(email) {
    if (this.mode !== "nuage") return { ok: true };
    try {
      await this._fs.deleteDoc(this._fs.doc(this._db, "comptes", normaliserEmail(email)));
      return { ok: true };
    } catch (err) { this.derniereErreur = err; return { ok: false }; }
  },
  /* Pour l'effacement de la famille (droit a l'effacement). */
  async supprimerComptesDe(code) {
    if (this.mode !== "nuage") return { ok: true, n: 0 };
    try {
      const fs = this._fs;
      const q = await fs.getDocs(fs.query(fs.collection(this._db, "comptes"),
        fs.where("famille", "==", code)));
      const refs = [];
      q.forEach((d) => refs.push(d.ref));
      return await this._effacerRefs(refs);
    } catch (err) { this.derniereErreur = err; return { ok: false, n: 0, err: err }; }
  },

  /* En mode local, l'appareil s'invente un identifiant stable. */
  _uidLocal() {
    let u = localStorage.getItem("tribu:appareil");
    if (!u) { u = "local-" + jetonAleatoire(8); localStorage.setItem("tribu:appareil", u); }
    return u;
  },

  _cleLocale(code) { return "tribu:donnees:" + code; },
  _lireLocal(code) {
    const brut = localStorage.getItem(this._cleLocale(code));
    return brut ? JSON.parse(brut) : null;
  },
  _ecrireLocal(code, d) {
    localStorage.setItem(this._cleLocale(code), JSON.stringify(d));
  },

  /* --- lecture ---
     Ne leve jamais d'exception : renvoie null et note la cause dans
     `derniereErreur`, pour que l'appelant puisse expliquer plutot que planter. */
  derniereErreur: null,

  /* CET appareil est-il deja inscrit dans la famille `code` ? Renvoie le nom
     de la famille et le profil sous lequel il est inscrit, ou null. Un
     appareil qui n'en fait pas partie ne peut pas la lire : la lecture est
     refusee, et c'est justement la reponse « non ». */
  async profilDeCetAppareil(code) {
    if (!code) return null;
    let d = null;
    if (this.mode !== "nuage") d = this._lireLocal(code);
    else {
      try {
        const s = await this._fs.getDoc(this._fs.doc(this._db, "familles", code));
        d = s.exists() ? s.data() : null;
      } catch (err) { return null; }
    }
    if (!d) return null;
    const membres = d.membres || [];
    const idProfil = (d.appareils || {})[this.uid] ||
      (membres.find((x) => (x.uids || []).indexOf(this.uid) !== -1) || {}).id;
    if (!idProfil && (d.membresUid || []).indexOf(this.uid) === -1) return null;
    const m = membres.find((x) => x.id === idProfil);
    return { nomFamille: (d.famille && d.famille.nom) || code, prenom: m ? m.prenom : "un autre profil" };
  },

  async charger(code) {
    this.derniereErreur = null;
    if (this.mode !== "nuage") return this._lireLocal(code);
    try {
      const d = await this._fs.getDoc(this._fs.doc(this._db, "familles", code));
      if (!d.exists()) return null;
      const principal = d.data();
      const e = {};
      const j = [];
      try {
        const [etats, journal] = await Promise.all([
          this._fs.getDocs(this._fs.collection(this._db, "familles", code, "etats")),
          this._fs.getDocs(this._fs.collection(this._db, "familles", code, "journal"))
        ]);
        etats.forEach((s) => { e[s.id.replace(/__/g, "|")] = s.data(); });
        journal.forEach((s) => j.push(Object.assign({ id: s.id }, s.data())));
      } catch (err) {
        /* Les rubriques annexes peuvent etre refusees sans que tout soit perdu. */
        console.warn("Lecture partielle (états / points) :", err);
        this.derniereErreur = err;
      }
      return Object.assign({}, principal, { etats: e, journal: j });
    } catch (err) {
      console.warn("Lecture refusée :", err);
      this.derniereErreur = err;
      return null;
    }
  },

  /* Petit annuaire des repères déjà pris. Il ne contient QUE la date de
     création : savoir qu'un repère existe n'ouvre aucun accès. Il sert
     uniquement à dire honnêtement « ce nom est déjà utilisé » au lieu de le
     deviner à partir d'un refus, qui peut avoir d'autres causes. */
  async repereLibre(code) {
    if (this.mode !== "nuage") return !this._lireLocal(code);
    try {
      const d = await this._fs.getDoc(this._fs.doc(this._db, "reperes", code));
      return !d.exists();
    } catch (err) {
      console.warn("Annuaire des repères illisible :", err);
      return null;                     // on ne sait pas : on tentera quand même
    }
  },

  async marquerRepere(code) {
    if (this.mode !== "nuage") return;
    try {
      /* Une vraie date Firebase, a l'heure du SERVEUR : la console l'affiche
         en clair (« 19 août 2026 à 22:28:28 »), la ou un nombre de
         millisecondes restait illisible. Personne ne la relit : seule
         l'existence du repere compte. Les reperes plus anciens gardent leur
         nombre. */
      await this._fs.setDoc(this._fs.doc(this._db, "reperes", code),
        { creeLe: this._fs.serverTimestamp() });
    } catch (err) {
      console.warn("Repère non enregistré dans l'annuaire :", err);
    }
  },

  /* Date de dernière ouverture de la tribu, à l'heure du SERVEUR. Elle ne
     sert qu'au ménage : repérer, dans la console, les tribus qui ne servent
     plus. Une seule date pour toute la tribu, jamais par personne. */
  async noterOuverture(code) {
    if (this.mode !== "nuage") return;
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "familles", code),
        { vuLe: this._fs.serverTimestamp() }, { merge: true });
    } catch (err) {
      console.warn("Date d'ouverture non enregistrée :", err);
    }
  },

  /* ---- programme « Familles Fondatrices » (collection `fondateurs`) ----
     Le numero est l'IDENTIFIANT du document : c'est Firestore qui garantit
     qu'une seule tribu peut l'obtenir (firestore.rules, match /fondateurs).
     Tout se passe en arriere-plan : personne n'a rien demande, donc un echec
     est silencieux et sera retente a la prochaine ouverture. */

  /* Les places deja prises, 100 au plus. `null` = liste illisible. */
  async placesFondatrices() {
    if (this.mode !== "nuage") return null;
    try {
      const fs = this._fs;
      const r = await fs.getDocs(fs.query(fs.collection(this._db, "fondateurs"), fs.limit(100)));
      const places = [];
      r.forEach((s) => places.push(this._placeLue(s.id, s.data())));
      return places;
    } catch (err) {
      console.warn("Places fondatrices illisibles :", err);
      return null;
    }
  },

  _placeLue(ident, d) {
    d = d || {};
    return {
      numero: Number(ident), famille: d.famille || "",
      genre: d.genre || "fondatrice", statut: d.statut || "reservee",
      reserveeLe: d.reserveeLe && d.reserveeLe.toMillis ? d.reserveeLe.toMillis() : 0
    };
  },

  async placeFondatrice(numero) {
    if (this.mode !== "nuage") return null;
    try {
      const s = await this._fs.getDoc(this._fs.doc(this._db, "fondateurs", String(numero)));
      return s.exists() ? this._placeLue(numero, s.data()) : null;
    } catch (err) { return null; }
  },

  /* Reserve la place. Echoue si une autre tribu l'a prise entre-temps : c'est
     exactement ce qu'on attend, et le seul endroit ou l'unicite se joue. */
  async reserverPlaceFondatrice(numero, genre, code) {
    if (this.mode !== "nuage") return false;
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "fondateurs", String(numero)), {
        famille: code, genre: genre, statut: "reservee",
        reserveeLe: this._fs.serverTimestamp()
      });
      return true;
    } catch (err) { return false; }
  },

  async validerPlaceFondatrice(numero) {
    if (this.mode !== "nuage") return false;
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "fondateurs", String(numero)),
        { statut: "validee", valideeLe: this._fs.serverTimestamp() }, { merge: true });
      return true;
    } catch (err) { return false; }
  },

  async libererPlaceFondatrice(numero) {
    if (this.mode !== "nuage") return false;
    try {
      await this._fs.deleteDoc(this._fs.doc(this._db, "fondateurs", String(numero)));
      return true;
    } catch (err) { return false; }
  },

  /* Inscrit la place DANS la tribu. A faire AVANT de reserver : les regles
     verifient que la tribu annonce bien ce numero, et son document n'en porte
     qu'un seul — c'est ce qui l'empeche d'en viser deux a la fois. */
  async inscrirePlaceFondatrice(place) {
    if (this.mode !== "nuage") { this._ecrireLocal(this.code, etat); return true; }
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "familles", this.code),
        { fondatrice: place }, { merge: true });
      return true;
    } catch (err) {
      console.warn("Place fondatrice non inscrite :", err);
      return false;
    }
  },

  async creer(code, donnees) {
    this.derniereErreur = null;
    if (this.mode !== "nuage") { this._ecrireLocal(code, donnees); return true; }
    try {
      const principal = {};
      CLES_DOC.forEach((c) => { principal[c] = propre(donnees[c]); });
      /* Interrupteur ferme : la famille nait a l'ancienne, recettes dans le
         document principal, pour rester lisible par un telephone en 0.48. */
      if (!DEPLACER_RECETTES) principal.recettes = propre(donnees.recettes || []);
      await this._fs.setDoc(this._fs.doc(this._db, "familles", code), principal);
      if (DEPLACER_RECETTES) {
        /* Interrupteur ouvert : une famille neuve nait deja rangee, elle
           n'aura donc jamais a etre deplacee. */
        await this._fs.setDoc(
          this._fs.doc(this._db, "familles", code, RUBRIQUES, RUBRIQUE_RECETTES),
          { liste: propre(donnees.recettes || []) });
        this.recettesAPart = true;
      }
      return true;
    } catch (err) {
      console.warn("Création refusée :", err);
      this.derniereErreur = err;
      return false;
    }
  },

  abonner(code, cb) {
    this.code = code;
    this._cbAbonnement = cb;             // pour se réabonner après un simple accroc
    /* On ne sait pas encore si CETTE famille a ete deplacee : c'est l'ecoute
       du document des recettes qui le dira. */
    this.recettesAPart = false;
    this._detacher();
    if (this.mode === "nuage") {
      const d = this._db, fs = this._fs;
      /* Un refus peut signifier que cet appareil a été retiré : on vérifie
         (étape 3, _verifierAcces). Les autres erreurs restent notées seulement. */
      const surErreur = (err) => {
        console.warn("Ecoute interrompue :", err);
        /* Une ouverture attend peut-etre cette reponse : un refus doit la
           faire echouer tout de suite (voir abonnerEtAttendre). */
        if (this._surRefus && err && err.code === "permission-denied") this._surRefus(err);
        if (err && err.code === "permission-denied") this._verifierAcces(code);
      };
      /* `includeMetadataChanges` : sans cette option, quand RIEN n'a change
         depuis la derniere ouverture, le serveur confirme la synchronisation
         mais ne livre aucun instantane — l'attente de l'ouverture tombait
         alors dans sa minuterie de repli, pour rien (3,7 s mesurees au banc).
         Avec elle, la confirmation arrive et l'entree est immediate.
         Le prix : un redessin de plus par enregistrement (l'echo local, puis
         l'accuse de reception du serveur). */
      this._unsubs.push(fs.onSnapshot(fs.doc(d, "familles", code), { includeMetadataChanges: true }, (s) => {
        if (!s.exists()) return;
        /* `fromCache` distingue une reponse DU SERVEUR d'une reponse du cache
           local. Toute la securite de l'ouverture repose sur cette nuance. */
        if (this._surDoc) this._surDoc(s.data(), !s.metadata.fromCache);
        cb(s.data(), "doc");
      }, surErreur));
      this._unsubs.push(fs.onSnapshot(fs.collection(d, "familles", code, "etats"), (q) => {
        const e = {};
        q.forEach((s) => { e[s.id.replace(/__/g, "|")] = s.data(); });
        cb({ etats: e }, "etats");
      }, surErreur));
      this._unsubs.push(fs.onSnapshot(fs.collection(d, "familles", code, "journal"), (q) => {
        const j = [];
        q.forEach((s) => j.push(Object.assign({ id: s.id }, s.data())));
        cb({ journal: j }, "journal");
      }, surErreur));
      /* Les recettes, dans leur document a part. Absent = famille pas encore
         deplacee : on garde alors celles du document principal. */
      this._unsubs.push(fs.onSnapshot(fs.doc(d, "familles", code, RUBRIQUES, RUBRIQUE_RECETTES), (s) => {
        if (!s.exists()) return;
        this.recettesAPart = true;
        cb({ recettes: (s.data() || {}).liste || [] }, "recettes");
      }, surErreur));
    } else {
      const surStockage = (ev) => {
        if (ev.key === this._cleLocale(code) && ev.newValue) cb(JSON.parse(ev.newValue), "tout");
      };
      window.addEventListener("storage", surStockage);
      this._unsubs.push(() => window.removeEventListener("storage", surStockage));
    }
  },

  /* Combien de temps on laisse au serveur avant de se contenter du cache. */
  DELAI_HORS_LIGNE: 2500,

  /* Ouvre l'ecoute ET attend le premier etat de la tribu.

     Avant, l'application LISAIT la tribu (charger) puis s'y ABONNAIT : les
     memes documents arrivaient deux fois a chaque ouverture — 802 documents
     mesures au banc d'essai pour 401 documents reels. Ici, on ne fait plus
     que s'abonner.

     CE QU'ON ATTEND AU JUSTE : une reponse DU SERVEUR.

     Depuis que le cache local existe, il repond instantanement — y compris
     sur un appareil qui vient d'etre RETIRE de la tribu. Entrer sur cette
     seule foi reviendrait a defaire l'invariant I4 (« un appareil revoque ne
     revient jamais ») : jusqu'ici, c'est la lecture au serveur qui le
     refusait. Trois issues, donc :

     - le serveur repond       -> on entre, lui seul fait foi ;
     - le serveur refuse       -> on n'entre pas, ecran neutre ;
     - le serveur se tait et le cache connait la tribu (hors ligne)
                               -> on entre au bout de DELAI_HORS_LIGNE, pour
                                  que l'application reste utilisable dans le
                                  metro.

     Une tribu qui n'existe pas ne livre aucun instantane : la minuterie tombe
     alors sur `null` et l'ouverture echoue, comme avant. */
  abonnerEtAttendre(code, cb) {
    if (this.mode !== "nuage") {
      const d = this._lireLocal(code);
      if (d) { cb(d, "tout"); this.abonner(code, cb); }
      return Promise.resolve(d);
    }
    return new Promise((resoudre) => {
      let fini = false, duCache = null;
      const finir = (v) => {
        if (fini) return;
        fini = true;
        clearTimeout(minuterie);
        this._surDoc = null;
        this._surRefus = null;
        resoudre(v);
      };
      const minuterie = setTimeout(() => finir(duCache), this.DELAI_HORS_LIGNE);
      this._surDoc = (donnees, duServeur) => {
        if (duServeur) finir(donnees); else duCache = donnees;
      };
      this._surRefus = () => finir(null);
      this.abonner(code, cb);
    });
  },

  _detacher() {
    this._unsubs.forEach((u) => { try { u(); } catch (e) { } });
    this._unsubs = [];
  },

  /* Étape 3 — un appareil retiré réagit tout de suite.
     Une écoute refusée peut vouloir dire que cet appareil a été retiré, ou
     que la tribu a été supprimée. On ne conclut pas sur un seul refus : on
     relit la famille directement au serveur.
     - Toujours refusé : l'accès est perdu, on prévient l'application (une fois).
     - Relu sans problème : simple accroc, on se réabonne (au plus toutes les 30 s).
     - Serveur injoignable : on ne conclut rien ; l'écoute se refusera de
       nouveau au retour du réseau si l'accès est vraiment perdu. */
  async _verifierAcces(code) {
    if (this._verifAcces || this.code !== code) return;
    this._verifAcces = true;
    try {
      await this._fs.getDocFromServer(this._fs.doc(this._db, "familles", code));
      if (this.code === code && this._cbAbonnement
          && Date.now() - (this._dernierReabonnement || 0) > 30000) {
        this._dernierReabonnement = Date.now();
        this.abonner(code, this._cbAbonnement);
      }
    } catch (err) {
      if (err && err.code === "permission-denied" && this.code === code) {
        this._detacher();
        accesPerdu(code);
      }
    } finally {
      this._verifAcces = false;
    }
  },

  /* « Repartir de zéro » (étape 3) et « Quitter la tribu » (étape 4) : tout ce
     que Ma Tribu garde dans ce navigateur est effacé, et la session de
     l'appareil est supprimée (à défaut, fermée). Au prochain démarrage
     l'appareil reçoit une identité NEUVE : c'est elle qu'une nouvelle
     invitation ou le lien e-mail pourront rattacher, l'ancienne étant
     révoquée pour de bon (invariant I4). Jamais appelée sans que la personne
     l'ait demandé : un refus du serveur peut avoir d'autres causes. */
  async oublierCetAppareil() {
    this._detacher();
    Object.keys(localStorage).filter((k) => k.indexOf("tribu:") === 0)
      .forEach((k) => { try { localStorage.removeItem(k); } catch (e) { } });

    await this.purgerCacheLocal();

    if (this.mode === "nuage" && this._au && this._au.currentUser) {
      try { await this._auth.deleteUser(this._au.currentUser); return; }
      catch (e) { console.warn("Session de l'appareil non supprimée, fermée à la place :", e); }
      try { await this._auth.signOut(this._au); } catch (e) { /* déjà fermée */ }
    }
  },

  /* LE CACHE LOCAL GARDE UNE COPIE COMPLETE DE LA TRIBU (12/09/2026).

     Depuis qu'il est actif, effacer les reperes de localStorage ne suffit
     PLUS : le document de la famille, les membres (avec l'empreinte de leur
     code) et tout l'historique dorment dans IndexedDB. Sans cette purge, ils
     resteraient sur l'appareil — exactement ce que « Repartir de zero »,
     « Quitter la tribu » et « Effacer les donnees de cet appareil »
     promettent d'effacer. Les trois l'appellent.

     Il faut arreter Firestore avant d'effacer : c'est la seule facon de
     liberer sa base. Les trois appelants rechargent la page juste apres, la
     base arretee n'a donc jamais a resservir. Idempotente : un second appel
     (base deja arretee) ne fait rien. */
  async purgerCacheLocal() {
    if (this.mode !== "nuage" || !this._db || !this._fs || !this._fs.clearIndexedDbPersistence) return;
    if (this._cachePurge) return;
    this._cachePurge = true;
    this._detacher();
    try {
      await this._fs.terminate(this._db);
      await this._fs.clearIndexedDbPersistence(this._db);
    } catch (e) { console.warn("Cache local non effacé :", e); }
  },

  /* --- ecriture du document principal (une ou plusieurs rubriques) --- */
  async ecrire(cles) {
    if (this.mode !== "nuage") { this._ecrireLocal(this.code, etat); return; }
    /* Les recettes suivent le rangement de LEUR famille, pas l'interrupteur :
       une famille deja deplacee ecrit dans son document a part, une famille
       restee a l'ancienne continue d'ecrire dans le document principal.
       C'est exactement ce qui permet aux deux versions de cohabiter, et ce qui
       evite qu'une sauvegarde laisse les recettes a moitie a chaque endroit.
       Les appels de l'application (sauver("recettes")) n'ont rien a en savoir. */
    const veutRecettes = cles.indexOf("recettes") !== -1;
    if (veutRecettes && this.recettesAPart) {
      await this.ecrireRecettes();
      cles = cles.filter((c) => c !== "recettes");
    }
    const morceau = {};
    cles.forEach((c) => { if (CLES_DOC.indexOf(c) !== -1) morceau[c] = propre(etat[c]); });
    if (veutRecettes && !this.recettesAPart) morceau.recettes = propre(etat.recettes);
    if (!Object.keys(morceau).length) return;
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "familles", this.code), morceau, { merge: true });
    } catch (err) {
      console.warn("Echec de l'enregistrement :", err);
      toast("Enregistrement refusé (droits insuffisants ?)");
    }
  },

  /* Le document des recettes. Ecrit en entier : une famille en a quelques
     centaines, et elles ne changent qu'a la main. */
  async ecrireRecettes() {
    if (this.mode !== "nuage") { this._ecrireLocal(this.code, etat); return; }
    try {
      await this._fs.setDoc(
        this._fs.doc(this._db, "familles", this.code, RUBRIQUES, RUBRIQUE_RECETTES),
        { liste: propre(etat.recettes) });
      this.recettesAPart = true;
    } catch (err) {
      console.warn("Echec de l'enregistrement des recettes :", err);
      toast("Enregistrement refusé (droits insuffisants ?)");
    }
  },

  /* DEPLACEMENT, une seule fois par famille.

     L'ordre compte : on ecrit d'abord les recettes a leur nouvelle place, on
     ne retire le champ de l'ancien document QU'ENSUITE. Si le reseau coupe au
     milieu, au pire les recettes existent aux deux endroits — jamais nulle
     part. */
  async migrerRecettes(code) {
    try {
      const ref = this._fs.doc(this._db, "familles", code, RUBRIQUES, RUBRIQUE_RECETTES);
      const s = await this._fs.getDoc(ref);
      if (s.exists()) { this.recettesAPart = true; return false; }
      await this._fs.setDoc(ref, { liste: propre(etat.recettes) });
      this.recettesAPart = true;
      await this._fs.setDoc(this._fs.doc(this._db, "familles", code),
        { recettes: this._fs.deleteField() }, { merge: true });
      console.info("Recettes déplacées dans leur propre document (" + etat.recettes.length + ").");
      return true;
    } catch (err) {
      console.warn("Déplacement des recettes impossible :", err);
      return false;
    }
  },

  /* Retire vraiment des appareils du registre.
     Indispensable : une ecriture « fusionnee » ajoute ou remplace des cles,
     mais n'en supprime jamais. Il faut le demander explicitement. */
  async retirerAppareils(uids) {
    if (!uids.length) return;
    if (this.mode !== "nuage") { this._ecrireLocal(this.code, etat); return; }
    const morceau = { appareils: {} };
    uids.forEach((u) => { morceau.appareils[u] = this._fs.deleteField(); });
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "familles", this.code), morceau, { merge: true });
    } catch (err) {
      console.warn("Retrait d'appareil refusé :", err);
    }
  },

  /* Retire UN appareil (étape 2, parcours P5) : il sort du registre, de ses
     informations et des listes d'accès, et il est inscrit parmi les révoqués
     pour ne jamais revenir (invariant I4). Le tout en UNE écriture : les
     règles vérifient l'ensemble — droits d'administrateur, ou
     retireUnDeSesAppareils pour un membre qui retire l'un de SES appareils. */
  async retirerAppareil(uid) {
    const membreId = (etat.appareils || {})[uid] || null;
    const tombe = {
      le: new Date().toISOString(), par: moi ? moi.id : null, membre: membreId,
      type: ((etat.appareilsInfos || {})[uid] || {}).type || null
    };
    const estAdminUid = (etat.adminsUid || []).indexOf(uid) !== -1;
    if (this.mode === "nuage") {
      const fs = this._fs;
      const morceau = {
        appareils: { [uid]: fs.deleteField() },
        appareilsInfos: { [uid]: fs.deleteField() },
        appareilsRevoques: { [uid]: tombe },
        membresUid: fs.arrayRemove(uid)
      };
      if (estAdminUid) morceau.adminsUid = fs.arrayRemove(uid);
      try {
        await fs.setDoc(fs.doc(this._db, "familles", this.code), morceau, { merge: true });
      } catch (err) {
        console.warn("Retrait d'appareil refusé :", err);
        this.derniereErreur = err;
        return {
          ok: false, message: (err && err.code === "permission-denied")
            ? "Le serveur a refusé ce retrait." : "Retrait impossible pour l’instant."
        };
      }
    }
    /* Même chose dans l'état en mémoire, sans attendre l'écoute en direct. */
    if (etat.appareils) delete etat.appareils[uid];
    if (etat.appareilsInfos) delete etat.appareilsInfos[uid];
    etat.appareilsRevoques = Object.assign({}, etat.appareilsRevoques || {}, { [uid]: tombe });
    etat.membresUid = (etat.membresUid || []).filter((u) => u !== uid);
    etat.adminsUid = (etat.adminsUid || []).filter((u) => u !== uid);
    if (this.mode !== "nuage") this._ecrireLocal(this.code, etat);
    rendre();
    return { ok: true };
  },

  /* --- ecriture de l'etat d'une tache --- */
  async ecrireEtat(cle, valeur) {
    if (this.mode !== "nuage") { this._ecrireLocal(this.code, etat); return; }
    try {
      await this._fs.setDoc(
        this._fs.doc(this._db, "familles", this.code, "etats", cle.replace(/\|/g, "__")),
        propre(valeur), { merge: true });
    } catch (err) {
      console.warn("Echec de l'enregistrement de la tache :", err);
      toast("Enregistrement refusé");
    }
  },

  /* --- ajout d'une ligne au journal des points (jamais de modification) --- */
  async ecrireJournal(entree) {
    if (this.mode !== "nuage") { this._ecrireLocal(this.code, etat); return true; }
    const { id: ident, ...corps } = entree;
    try {
      await this._fs.setDoc(
        this._fs.doc(this._db, "familles", this.code, "journal", ident),
        propre(corps));
      return true;
    } catch (err) {
      console.warn("Ligne de points refusee :", err);
      toast("Points refusés par le serveur");
      return false;
    }
  },

  /* --- retours des utilisateurs (bugs, idées) ---
     Ils partent dans une collection à part, que personne ne peut relire depuis
     l'application : ils se consultent dans la console Firebase. */
  async envoyerRetour(retour) {
    /* On ne garde RIEN en mode hors partage.

       Ces messages etaient empiles dans le telephone — prenom, repere de la
       famille, modele d'appareil — et personne ne les relisait jamais : aucun
       code ne les envoie quand la connexion revient, et l'application ne sait
       pas les afficher. C'etait donc de la donnee personnelle conservee pour
       rien, ce qui ne se defend pas. On le dit franchement a la place, et on
       efface au passage ce qui traine des versions precedentes. */
    if (this.mode !== "nuage") {
      try { localStorage.removeItem("tribu:retours"); } catch (e) { }
      return false;
    }
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "retours", retour.id), propre(retour));
      return true;
    } catch (err) {
      console.warn("Retour non envoyé :", err);
      this.derniereErreur = err;
      return false;
    }
  },

  /* --- recettes partagées entre familles ---
     Une petite bibliothèque commune, ouverte à toutes les familles de l'app.
     On n'y met QUE ce qu'une famille décide explicitement de publier. */
  async publierRecette(fiche) {
    if (this.mode !== "nuage") return false;
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "recettesPartagees", fiche.id), propre(fiche));
      return true;
    } catch (err) {
      console.warn("Publication refusée :", err);
      this.derniereErreur = err;
      return false;
    }
  },

  async listerRecettesPartagees() {
    if (this.mode !== "nuage") return null;
    try {
      const q = await this._fs.getDocs(this._fs.collection(this._db, "recettesPartagees"));
      const l = [];
      q.forEach((s) => l.push(Object.assign({ id: s.id }, s.data())));
      return l.sort((a, b) => String(b.publieLe || "").localeCompare(String(a.publieLe || "")));
    } catch (err) {
      console.warn("Lecture du catalogue refusée :", err);
      this.derniereErreur = err;
      return null;
    }
  },

  async retirerRecettePartagee(idFiche) {
    if (this.mode !== "nuage") return false;
    try {
      await this._fs.deleteDoc(this._fs.doc(this._db, "recettesPartagees", idFiche));
      return true;
    } catch (err) {
      console.warn("Retrait refusé :", err);
      this.derniereErreur = err;
      return false;
    }
  },

  /* --- Droit a l'effacement ------------------------------------------

     Supprimer une famille, c'est vider plusieurs endroits, dans un ordre qui
     compte : le drapeau d'abord (c'est lui qui deverrouille le journal et les
     etats cote serveur), les sous-collections ensuite (Firestore ne les
     efface PAS avec leur parent : elles resteraient stockees, orphelines),
     et le document de la famille en dernier — tant qu'il existe, c'est lui
     qui prouve au serveur qu'on en est l'administrateur.

     Chaque methode rend { ok, n, err } et ne leve jamais : l'orchestration
     doit pouvoir dire exactement ou elle s'est arretee, pour reprendre. */

  async marquerSuppression(code, parQui) {
    if (this.mode !== "nuage") return { ok: true, n: 0 };
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "familles", code),
        { suppression: { le: new Date().toISOString(), par: parQui || null } }, { merge: true });
      return { ok: true, n: 1 };
    } catch (err) { this.derniereErreur = err; return { ok: false, n: 0, err: err }; }
  },

  /* Efface des documents dix a la fois : assez pour aller vite, pas assez
     pour saturer la connexion d'un telephone. */
  async _effacerRefs(refs) {
    let n = 0;
    for (let i = 0; i < refs.length; i += 10) {
      const lot = refs.slice(i, i + 10);
      const r = await Promise.allSettled(lot.map((ref) => this._fs.deleteDoc(ref)));
      n += r.filter((x) => x.status === "fulfilled").length;
      const echec = r.find((x) => x.status === "rejected");
      if (echec) { this.derniereErreur = echec.reason; return { ok: false, n: n, err: echec.reason }; }
    }
    return { ok: true, n: n };
  },

  async viderSousCollection(code, nom) {
    if (this.mode !== "nuage") {
      /* En local, journal et etats vivent DANS le document de la famille : ils
         partiront avec lui. On les compte seulement, pour le compte rendu. */
      const d = this._lireLocal(code) || {};
      const v = d[nom];
      return { ok: true, n: Array.isArray(v) ? v.length : Object.keys(v || {}).length };
    }
    try {
      const q = await this._fs.getDocs(this._fs.collection(this._db, "familles", code, nom));
      const refs = [];
      q.forEach((s) => refs.push(s.ref));
      return await this._effacerRefs(refs);
    } catch (err) { this.derniereErreur = err; return { ok: false, n: 0, err: err }; }
  },

  /* Les invitations embarquent un prenom et l'empreinte d'un code : elles
     sont des donnees personnelles a part entiere, et elles survivaient a
     tout. On les retrouve par la famille qu'elles visent. */
  async supprimerInvitationsDe(code) {
    if (this.mode !== "nuage") {
      const t = this._invitationsLocales();
      let n = 0;
      Object.keys(t).forEach((j) => { if (t[j] && t[j].famille === code) { delete t[j]; n++; } });
      this._ecrireInvitationsLocales(t);
      return { ok: true, n: n };
    }
    try {
      const fs = this._fs;
      const q = await fs.getDocs(fs.query(fs.collection(this._db, "invitations"),
        fs.where("famille", "==", code)));
      const refs = [];
      q.forEach((s) => refs.push(s.ref));
      return await this._effacerRefs(refs);
    } catch (err) { this.derniereErreur = err; return { ok: false, n: 0, err: err }; }
  },

  /* Les retours d'une famille partent avec elle (revue du 12/09/2026) : ils
     portent un prenom, le nom et le repere de la famille. On les retrouve par
     le repere, comme les invitations. */
  async supprimerRetoursDe(code) {
    if (this.mode !== "nuage") return { ok: true, n: 0 };
    try {
      const fs = this._fs;
      const q = await fs.getDocs(fs.query(fs.collection(this._db, "retours"),
        fs.where("famille", "==", code)));
      const refs = [];
      q.forEach((s) => refs.push(s.ref));
      return await this._effacerRefs(refs);
    } catch (err) { this.derniereErreur = err; return { ok: false, n: 0, err: err }; }
  },

  /* MENAGE des invitations MORTES d'une tribu (12/09/2026).

     Sur le telephone, ce menage existait deja : `_invitationsLocales()` efface
     a chaque acces les invitations expirees et celles utilisees depuis plus de
     deux jours. Dans le nuage, RIEN ne le faisait : elles s'accumulaient
     depuis le premier jour. Or chacune embarque un prenom et l'empreinte d'un
     code a 4 chiffres (Invitations.creer) — les garder sans usage, c'est
     garder ces informations pour rien.

     Memes criteres qu'en local, volontairement :
     - expiree : elle ne fonctionne plus de toute facon ;
     - utilisee depuis plus de DELAI_PURGE_INVITATION : les deux jours de
       sursis servent a represente le meme jeton si l'entree a echoue juste
       apres la reservation (reseau coupe).

     JAMAIS une invitation EN ATTENTE : son lien fonctionne encore, quelqu'un
     est peut-etre en train de s'en servir. Elle partira a son expiration.

     Effacer une invitation ne retire l'acces de personne : l'acces vient de
     la liste des appareils de la famille, et l'invitation n'est consultee
     qu'au moment d'entrer (voir les tests, « MENAGE — invitations mortes »). */
  async purgerInvitationsDe(code) {
    if (this.mode !== "nuage") return { ok: true, n: 0 };   // deja fait a chaque acces
    try {
      const fs = this._fs;
      const q = await fs.getDocs(fs.query(fs.collection(this._db, "invitations"),
        fs.where("famille", "==", code)));
      const maintenant = Date.now();
      const refs = [];
      q.forEach((s) => {
        const inv = s.data() || {};
        const perimee = inv.expireLe && inv.expireLe < maintenant;
        const consommee = inv.utilisee &&
          (maintenant - (Number(inv.utiliseeLe) || 0) > this.DELAI_PURGE_INVITATION);
        if (perimee || consommee) refs.push(s.ref);
      });
      if (!refs.length) return { ok: true, n: 0 };
      return await this._effacerRefs(refs);
    } catch (err) {
      console.warn("Ménage des invitations impossible :", err);
      return { ok: false, n: 0, err: err };
    }
  },

  async supprimerRecettesDe(code) {
    if (this.mode !== "nuage") return { ok: true, n: 0 };
    try {
      const fs = this._fs;
      const q = await fs.getDocs(fs.query(fs.collection(this._db, "recettesPartagees"),
        fs.where("familleRef", "==", code)));
      const refs = [];
      q.forEach((s) => refs.push(s.ref));
      return await this._effacerRefs(refs);
    } catch (err) { this.derniereErreur = err; return { ok: false, n: 0, err: err }; }
  },

  /* Le repere aussi. Le garder « pour qu'une autre famille ne le reprenne
     pas » ne protegeait rien : une famille qui tirerait le meme repere serait
     un document neuf, ou aucun ancien appareil n'est inscrit. Et un code peut
     rester rattachable aux personnes qui l'ont utilise. On l'efface donc avec
     le reste, AVANT le document de la famille (les regles lisent celui-ci
     pour verifier qu'on en est administrateur). */
  async supprimerRepere(code) {
    if (this.mode !== "nuage") return { ok: true, n: 0 };
    try {
      await this._fs.deleteDoc(this._fs.doc(this._db, "reperes", code));
      return { ok: true, n: 1 };
    } catch (err) { this.derniereErreur = err; return { ok: false, n: 0, err: err }; }
  },

  async supprimerDocFamille(code) {
    if (this.mode !== "nuage") {
      try { localStorage.removeItem(this._cleLocale(code)); } catch (e) { }
      return { ok: true, n: 1 };
    }
    try {
      await this._fs.deleteDoc(this._fs.doc(this._db, "familles", code));
      return { ok: true, n: 1 };
    } catch (err) { this.derniereErreur = err; return { ok: false, n: 0, err: err }; }
  },

  /* --- invitations ---

     Le magasin local des invitations est SENSIBLE : chaque entree embarque le
     profil vise, donc un prenom et l'empreinte de son code a 4 chiffres. Une
     invitation deja utilisee ou expiree n'a plus aucune utilite : elle ne
     ferait que garder ces informations a disposition de qui ouvrirait le
     telephone. On fait donc le menage a chaque acces.

     Deux jours de sursis apres l'usage, et pas zero : si l'entree dans la
     famille echoue juste apres la reservation (reseau coupe), il faut
     pouvoir represente le meme jeton — c'est tout le mecanisme de reprise. */
  DELAI_PURGE_INVITATION: 2 * 86400000,

  _invitationsLocales() {
    let t;
    try { t = JSON.parse(localStorage.getItem("tribu:invitations") || "{}"); }
    catch (e) { t = {}; }
    const maintenant = Date.now();
    let change = false;
    Object.keys(t).forEach((j) => {
      const inv = t[j] || {};
      const perimee = inv.expireLe && inv.expireLe < maintenant;
      const consommee = inv.utilisee &&
        (maintenant - (Number(inv.utiliseeLe) || 0) > this.DELAI_PURGE_INVITATION);
      if (perimee || consommee) { delete t[j]; change = true; }
    });
    if (change) this._ecrireInvitationsLocales(t);
    return t;
  },
  _ecrireInvitationsLocales(t) {
    try {
      if (Object.keys(t).length) localStorage.setItem("tribu:invitations", JSON.stringify(t));
      else localStorage.removeItem("tribu:invitations");
    } catch (e) { /* plus de place : tant pis, ce n'est qu'un cache */ }
  },

  async creerInvitation(inv) {
    this.derniereErreur = null;
    if (this.mode !== "nuage") {
      const t = this._invitationsLocales();
      t[inv.jeton] = inv;
      this._ecrireInvitationsLocales(t);
      return true;
    }
    try {
      const { jeton, ...corps } = inv;
      /* La date de creation, a l'heure du SERVEUR : la console Firebase
         l'affiche alors en clair (« 12 septembre 2026 à 21:05 »), la ou un
         nombre de millisecondes restait illisible. C'est possible ici parce
         que RIEN dans l'application ne relit ce champ : il ne sert qu'a la
         lecture humaine.
         `expireLe` et `utiliseeLe`, eux, restent des nombres — les regles
         Firestore comparent l'un, le menage des invitations compare l'autre.
         Et `propre()` (un aller-retour JSON) detruirait le marqueur du
         serveur : on le repose donc APRES. */
      const corpsPropre = propre(corps);
      corpsPropre.creeeLe = this._fs.serverTimestamp();
      await this._fs.setDoc(this._fs.doc(this._db, "invitations", jeton), corpsPropre);
      return true;
    } catch (err) {
      console.warn("Invitation refusée :", err);
      this.derniereErreur = err;
      return false;
    }
  },

  async lireInvitation(jeton) {
    this.derniereErreur = null;
    if (this.mode !== "nuage") {
      return this._invitationsLocales()[jeton] || null;
    }
    try {
      const d = await this._fs.getDoc(this._fs.doc(this._db, "invitations", jeton));
      return d.exists() ? Object.assign({ jeton: jeton }, d.data()) : null;
    } catch (err) {
      console.warn("Lecture de l'invitation refusée :", err);
      this.derniereErreur = err;
      return null;
    }
  },

  /* RESERVER le jeton — l'etape qui rend l'invitation reellement a usage
     unique.

     Elle se fait AVANT d'entrer dans la famille, et c'est tout l'interet :
     ecrire sur un seul document est atomique chez Firestore, et la regle
     exige que le jeton soit encore libre. Deux appareils qui presentent le
     meme code au meme instant : un seul gagne, l'autre est refuse net.
     Auparavant on entrait d'abord et on brulait ensuite — entre les deux,
     un second appareil pouvait se glisser.

     On signe la reservation avec l'identifiant de l'appareil. C'est ce qui
     permet de RECOMMENCER si l'entree echoue juste apres (reseau coupe) :
     le jeton nous appartient deja, on le represente et on repasse. */
  async reserverInvitation(jeton) {
    if (this.mode !== "nuage") {
      const t = this._invitationsLocales();
      if (t[jeton] && t[jeton].utilisee && t[jeton].utiliseePar !== this.uid) return false;
      if (t[jeton]) {
        t[jeton].utilisee = true;
        t[jeton].utiliseeLe = Date.now();
        t[jeton].utiliseePar = this.uid;
      }
      this._ecrireInvitationsLocales(t);
      return true;
    }
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "invitations", jeton),
        { utilisee: true, utiliseeLe: Date.now(), utiliseePar: this.uid }, { merge: true });
      return true;
    } catch (err) {
      /* Refuse = quelqu'un d'autre l'a pris avant nous. Sauf si c'est nous
         qui l'avions deja reserve : dans ce cas on peut continuer. */
      const dejaAMoi = await this.jetonEstAMoi(jeton);
      if (dejaAMoi) return true;
      console.warn("Reservation du jeton refusee :", err);
      this.derniereErreur = err;
      return false;
    }
  },

  /* Ce jeton m'appartient-il deja ? Sert aux reprises apres echec. */
  async jetonEstAMoi(jeton) {
    const inv = await this.lireInvitation(jeton);
    return !!(inv && inv.utilisee === true && inv.utiliseePar === this.uid);
  },

  /* Entree dans la famille : on inscrit CET appareil dans la liste autorisee.
     C'est la seule ecriture qu'un non-membre a le droit de faire, et
     uniquement en presentant un jeton d'invitation valide.

     Point important : a cet instant, l'appareil n'a PAS encore le droit de
     lire la famille. On ne peut donc rien recopier de l'existant : on ajoute
     seulement, avec arrayUnion et une fusion de map. Sinon on ecraserait
     les autres membres. */
  async rejoindre(code, jeton, opts) {
    const nouveau = opts.nouveauMembre || null;
    const membreId = nouveau ? nouveau.id : opts.membreId;

    if (this.mode !== "nuage") {
      /* On repart du document enregistré, surtout PAS de l'état en mémoire :
         un appareil qui rejoint n'a encore rien chargé, et on effacerait la
         famille entière. */
      const d = this._lireLocal(code);
      if (!d) return false;
      if (nouveau) { d.membres = (d.membres || []).concat([nouveau]); }
      d.appareils = Object.assign({}, d.appareils || {});
      d.appareils[this.uid] = membreId;
      d.appareilsInfos = Object.assign({}, d.appareilsInfos || {});
      d.appareilsInfos[this.uid] = infoAppareil("invitation");
      recalculerIndexSur(d);
      this._ecrireLocal(code, d);
      return true;
    }
    try {
      const morceau = {
        membresUid: this._fs.arrayUnion(this.uid),
        appareils: { [this.uid]: membreId },
        appareilsInfos: { [this.uid]: infoAppareil("invitation") },
        jetonUtilise: jeton
      };
      if (nouveau) morceau.membres = this._fs.arrayUnion(propre(nouveau));
      if (opts.admin) morceau.adminsUid = this._fs.arrayUnion(this.uid);
      await this._fs.setDoc(this._fs.doc(this._db, "familles", code), morceau, { merge: true });
      return true;
    } catch (err) {
      console.warn("Invitation refusee :", err);
      this.derniereErreur = err;
      return false;
    }
  }
};

/* Enregistre le document principal + redessine. */
function sauver(...cles) {
  if (cles.some((c) => ["membres", "taches", "cadeaux"].indexOf(c) !== -1)) {
    /* Seul un administrateur ecrit les membres et le registre des appareils :
       la migration ne se fait donc que depuis son appareil. */
    if (estAdmin() && migrerUidsVersAppareils(etat)) {
      ["membres", "appareils"].forEach((c) => { if (cles.indexOf(c) === -1) cles.push(c); });
    }
    recalculerIndex();
    ["membresUid", "adminsUid", "bareme", "tarifs"].forEach((c) => {
      if (cles.indexOf(c) === -1) cles.push(c);
    });
  }
  Store.ecrire(cles);
  rendre();
}
function sauverEtat(cle) {
  Store.ecrireEtat(cle, etat.etats[cle]);
  rendre();
}

/* ============================ 5. Session ============================ */

const CLE_SESSION = "tribu:session";
function lireSession() {
  try { return JSON.parse(localStorage.getItem(CLE_SESSION) || "null"); } catch (e) { return null; }
}
function ecrireSession(s) {
  if (s) localStorage.setItem(CLE_SESSION, JSON.stringify(s));
  else localStorage.removeItem(CLE_SESSION);
}

function appliquerDonnees(d, portee) {
  if (portee === "etats") { etat.etats = d.etats || {}; return; }
  if (portee === "journal") { etat.journal = d.journal || []; return; }
  if (portee === "recettes") { etat.recettes = d.recettes || []; return; }

  const v = etatVide();
  const garde = { etats: etat.etats, journal: etat.journal, recettes: etat.recettes };
  etat = Object.assign(v, d || {});
  if (portee === "doc") {          // le document principal ne porte pas ces deux-la
    etat.etats = garde.etats;
    etat.journal = garde.journal;
  }
  /* Famille deja deplacee : le champ « recettes » du document principal est
     perime — il n'y est meme plus. Sans cette ligne, un instantane du
     document principal ecraserait la bonne liste par un tableau vide. */
  if (Store.recettesAPart) etat.recettes = garde.recettes;
  /* Reprise des donnees de la version 1 */
  if (d && d.etatsTaches && !Object.keys(etat.etats || {}).length) etat.etats = d.etatsTaches;

  ["membres", "taches", "courses", "listesCourses", "stock", "recettes", "notes", "cadeaux",
    "echanges", "journal", "membresUid", "adminsUid"]
    .forEach((c) => { if (!Array.isArray(etat[c])) etat[c] = []; });
  ["etats", "repas", "reglages", "bareme", "tarifs", "appareils"].forEach((c) => {
    if (!etat[c] || typeof etat[c] !== "object") etat[c] = {};
  });
  if (!etat.famille || typeof etat.famille !== "object") etat.famille = { nom: "", code: "" };
  if (moi) moi = membre(moi.id) || moi;
}

/* ================= Vos données : récupérer, effacer =================

   Le RGPD donne deux droits qu'on ne peut pas se contenter d'écrire sur une
   page : récupérer ses données, et les faire effacer. Les voici, à portée de
   pouce, pour l'administrateur de la famille. */

/* Ce qui NE part PAS dans le fichier d'export.

   Tout le contenu de la famille y est — c'est ce que demande le droit à la
   portabilité. Mais pas les pièces de sécurité : empreintes des codes à 4
   chiffres, identifiants d'appareils, index que le serveur utilise pour
   vérifier les droits. Ils ne servent à rien à qui récupère ses données, et
   un fichier d'export finit souvent dans un e-mail ou un dossier partagé : y
   laisser les empreintes des codes reviendrait à les offrir au premier venu. */
const CHAMPS_NON_EXPORTES = ["membresUid", "adminsUid", "appareils", "appareilsInfos",
  "appareilsRevoques", "jetonUtilise", "bareme", "tarifs", "suppression"];
const CHAMPS_MEMBRE_NON_EXPORTES = ["pin", "pinHash", "pinSel", "uids"];

function donneesExportables() {
  const membres = (etat.membres || []).map((m) => {
    const copie = Object.assign({}, m);
    CHAMPS_MEMBRE_NON_EXPORTES.forEach((k) => { delete copie[k]; });
    return copie;
  });
  const sortie = {
    format: "ma-tribu-export",
    versionFormat: 1,
    application: "Ma Tribu " + VERSION,
    exporteLe: new Date().toISOString(),
    exportePar: moi ? moi.prenom : null,
    aSavoir: "Les codes à 4 chiffres, les identifiants d'appareils et les index " +
      "de sécurité ne sont volontairement pas inclus.",
    famille: etat.famille,
    membres: membres
  };
  CLES_DOC.forEach((c) => {
    if (c === "famille" || c === "membres" || CHAMPS_NON_EXPORTES.indexOf(c) !== -1) return;
    sortie[c] = etat[c];
  });
  /* Les recettes ne sont plus dans CLES_DOC (elles ont leur propre document),
     mais elles font partie des donnees de la famille : le droit a la
     portabilite ne s'arrete pas a un detail de rangement. */
  sortie.recettes = etat.recettes;
  /* Les comptes adultes et les appareils, SANS leurs identifiants techniques. */
  sortie.comptes = (Store.comptesFamille || []).map((c) =>
    ({ adresse: c.adresse, membre: c.membre, admin: !!c.admin, ajouteLe: c.ajouteLe }));
  /* TOUS les appareils du registre, y compris ceux ajoutes avant la 0.50 et
     qui n'ont donc pas d'informations : les oublier rendrait l'export
     incomplet, precisement sur les plus anciens. */
  sortie.appareils = Object.keys(etat.appareils || {}).map((u) =>
    Object.assign({ membre: etat.appareils[u], type: "inconnu (ajouté avant la version 0.50)" },
      (etat.appareilsInfos || {})[u] || {}));
  sortie.etatsDesTaches = etat.etats || {};
  sortie.journalDesPoints = etat.journal || [];
  return propre(sortie);
}

function nomFichierExport() {
  const jour = new Date().toISOString().slice(0, 10);
  const repere = String((etat.famille && etat.famille.code) || "famille").replace(/[^A-Za-z0-9-]/g, "");
  return "ma-tribu-" + repere + "-" + jour + ".json";
}

/* Remettre le fichier. Deux chemins, parce qu'aucun ne marche partout : le
   téléchargement classique (ordinateur, Android), et la feuille de partage
   (iPhone, où un téléchargement lancé depuis l'icône de l'écran d'accueil ne
   mène nulle part). L'écran propose les deux quand les deux existent. */
function fichierExport() {
  return new File([JSON.stringify(donneesExportables(), null, 2)], nomFichierExport(),
    { type: "application/json" });
}
function peutPartagerFichier() {
  try {
    return !!(navigator.canShare &&
      navigator.canShare({ files: [new File(["{}"], "essai.json", { type: "application/json" })] }));
  } catch (e) { return false; }
}
function telechargerExport() {
  const f = fichierExport();
  const url = URL.createObjectURL(f);
  const a = document.createElement("a");
  a.href = url;
  a.download = f.name;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  return f;
}
async function partagerExport() {
  const f = fichierExport();
  try { await navigator.share({ files: [f], title: f.name }); return true; }
  catch (e) { return false; }   // annulé par la personne : rien de grave
}

/* L'effacement complet, étape par étape, avec compte rendu.

   `suivi(message)` est appelé à chaque étape pour que l'écran montre où l'on
   en est : le journal d'une famille ancienne compte des centaines de lignes,
   et un bouton qui mouline sans rien dire fait croire à une panne.

   `dejaMarquee` : reprise d'une suppression interrompue. Le drapeau est déjà
   posé, et le serveur refuserait qu'on le réécrive — il est irréversible. */
async function supprimerFamilleEntiere(code, suivi, dejaMarquee) {
  const dire = typeof suivi === "function" ? suivi : () => { };
  const bilan = { journal: 0, etats: 0, invitations: 0, recettes: 0, comptes: 0, retours: 0, rubriques: 0, repere: 0, ok: false, etape: "", err: null };
  const etape = async (nom, message, travail) => {
    bilan.etape = nom;
    dire(message);
    const r = await travail();
    if (bilan[nom] !== undefined) bilan[nom] = r.n || 0;
    if (!r.ok) { bilan.err = r.err || Store.derniereErreur; return false; }
    return true;
  };

  /* Plus d'écoute en direct : on ne veut pas voir la famille se vider sous
     nos yeux, ni déclencher des erreurs à chaque document effacé. */
  Store._detacher();

  if (!dejaMarquee && !(await etape("drapeau", "Verrouillage de la famille…",
    () => Store.marquerSuppression(code, moi ? moi.id : null)))) return bilan;
  if (!(await etape("journal", "Effacement de l'historique des points…",
    () => Store.viderSousCollection(code, "journal")))) return bilan;
  if (!(await etape("etats", "Effacement du suivi des tâches…",
    () => Store.viderSousCollection(code, "etats")))) return bilan;
  if (!(await etape("invitations", "Effacement des invitations…",
    () => Store.supprimerInvitationsDe(code)))) return bilan;
  if (!(await etape("recettes", "Retrait des recettes publiées…",
    () => Store.supprimerRecettesDe(code)))) return bilan;
  if (!(await etape("comptes", "Effacement des comptes adultes…",
    () => Store.supprimerComptesDe(code)))) return bilan;
  /* Les retours envoyes par cette famille : prenom, nom et repere y figurent,
     ils ne doivent pas lui survivre (revue du 12/09/2026). */
  if (!(await etape("retours", "Effacement des retours envoyés…",
    () => Store.supprimerRetoursDe(code)))) return bilan;
  /* Les recettes vivent dans une sous-collection depuis le 12/09/2026 :
     Firestore n'efface pas les sous-collections avec leur parent, il faut
     donc la vider explicitement, comme le journal et les etats. */
  if (!(await etape("rubriques", "Effacement des recettes de la famille…",
    () => Store.viderSousCollection(code, "rubriques")))) return bilan;
  if (!(await etape("repere", "Effacement du repère de la tribu…",
    () => Store.supprimerRepere(code)))) return bilan;
  /* La place du programme part avec la tribu, AVANT le document de la
     famille : c'est lui qui prouve au serveur qu'on en est administrateur.
     Le numéro retourne alors au pot. Sans conséquence si cela échoue : la
     suppression de la tribu, elle, ne doit jamais être bloquée par un badge. */
  if (etat.fondatrice && etat.fondatrice.numero) {
    dire("Libération de la place Famille Fondatrice…");
    try { await Store.libererPlaceFondatrice(etat.fondatrice.numero); } catch (e) { }
  }

  if (!(await etape("famille", "Effacement de la famille…",
    () => Store.supprimerDocFamille(code)))) return bilan;

  /* Et ce que CET appareil gardait de cette famille. */
  ["tribu:session", "tribu:derniereFamille", "tribu:vue",
    "tribu:recettesMaj:" + code, "tribu:repereVerifie:" + code, "tribu:donnees:" + code,
    "tribu:vu:" + code, "tribu:fondatrice:" + code, "tribu:fondatriceFetee:" + code,
    "tribu:menageInv:" + code, "tribu:recettesAPart:" + code]
    .forEach((k) => { try { localStorage.removeItem(k); } catch (e) { } });

  bilan.ok = true;
  bilan.etape = "fini";
  return bilan;
}

/* Pourquoi ça a coincé, en une phrase qu'on peut comprendre. */
function motifEchecSuppression(bilan) {
  const code = String((bilan.err && bilan.err.code) || "");
  if (code === "permission-denied") {
    return bilan.etape === "drapeau"
      ? "Le serveur refuse : seul un administrateur peut supprimer la famille."
      : "Le serveur refuse cette étape. Les règles Firebase n'ont sans doute pas encore " +
        "été republiées avec la version qui autorise l'effacement.";
  }
  if (code === "unavailable" || code === "deadline-exceeded") {
    return "La connexion a été perdue en cours de route. Rien n'est cassé : " +
      "relancez, la suppression reprendra là où elle s'est arrêtée.";
  }
  return "La suppression s'est arrêtée à l'étape « " + bilan.etape + " »" +
    (code ? " (" + code + ")" : "") + ". Relancez-la : elle reprend là où elle en était.";
}

async function entrerDansFamille(code, membreId, opts) {
  /* On repart d'un état vide : en changeant de tribu, les états et le journal
     de la précédente resteraient affichés le temps que les écoutes répondent. */
  etat = etatVide();
  moi = null;

  /* UNE SEULE RÉCUPÉRATION (12/09/2026).

     L'application lisait la tribu, PUIS s'y abonnait : les mêmes documents
     arrivaient deux fois à chaque ouverture. Désormais on ne fait que
     s'abonner, et on attend la première réponse du serveur.

     Les données sont appliquées dès qu'elles arrivent ; le DESSIN, lui,
     attend que le profil soit choisi — d'où le garde-fou « if (!moi) ».
     Sans lui, rendre() travaillerait sans savoir qui regarde. */
  const d = await Store.abonnerEtAttendre(code, (nouv, portee) => {
    appliquerDonnees(nouv, portee);
    if (!moi) return;            // entrée pas encore terminée : on garde, on ne dessine pas
    rendre();
    if (portee === "doc") Formulaires.rafraichirAppareils();   // fenêtre ouverte à jour
  });
  /* Refus, ou profil introuvable : on ne garde RIEN de ce que le cache a pu
     livrer en chemin. Sur un appareil retire de la tribu, ses donnees ne
     doivent pas rester en memoire vive, meme sans etre affichees. */
  const renoncer = () => { Store._detacher(); Store.code = null; etat = etatVide(); moi = null; return false; };
  if (!d) return renoncer();
  moi = membre(membreId);
  if (!moi) return renoncer();

  /* Une suppression a été lancée puis interrompue (réseau coupé, application
     fermée en cours de route). La famille est à moitié effacée : l'ouvrir
     comme si de rien n'était montrerait un historique vidé, sans explication.
     On propose plutôt de terminer — et on cesse d'écouter. */
  if (d.suppression) {
    Store._detacher();
    Store.code = code;
    $("#ecran-app").hidden = true;
    $("#ecran-connexion").hidden = false;
    Connexion.aller("suppressionEnCours", { code: code, admin: estAdmin() });
    return true;
  }
  ecrireSession({ code: code, membreId: membreId });
  localStorage.setItem("tribu:derniereFamille", code);
  verifierRepere(code);          // en arrière-plan, sans bloquer l'ouverture
  noterOuverture(code);          // idem : la date du jour, pour le ménage
  suivreProgrammeFondatrices(code);   // idem : la place dans le programme
  menageInvitations(code);       // idem : on efface les invitations mortes
  migrerRecettesSiBesoin(code);  // idem : les recettes dans leur propre document
  majRecettesSiBesoin();         // idem : complète les recettes d'avant
  $("#ecran-connexion").hidden = true;
  $("#ecran-app").hidden = false;
  /* Ouverture depuis une session déjà enregistrée : on reprend là où on
     s'était arrêté. Après une vraie connexion, on repart de l'accueil. */
  ui.vue = "accueil";
  if (opts && opts.reprendreVue) restaurerVue();
  memoriserVue();
  rendre();
  prechaufferCahier();           // pour que la première génération soit vive
  return true;
}

/* Classer 353 plats coûte une demi-seconde la première fois. Fait au
   démarrage, hors du chemin critique, cela ne se voit pas ; fait au moment
   où l'on appuie sur « Générer », cela se voit beaucoup. On attend que
   l'écran soit dessiné avant de s'y mettre. */
function prechaufferCahier() {
  const travail = () => {
    try {
      etat.recettes.forEach((r) => { categorieRepas(r); genrePlat(r); });
    } catch (e) { /* sans importance : ce n'est qu'une avance de travail */ }
  };
  if (window.requestIdleCallback) window.requestIdleCallback(travail, { timeout: 3000 });
  else setTimeout(travail, 1200);
}

/* Les familles créées avant l'annuaire des repères n'y figurent pas : leur nom
   pourrait donc être proposé à quelqu'un d'autre, qui se heurterait alors à un
   refus difficile à comprendre. On répare en douceur, une seule fois par
   appareil et par famille, sans jamais bloquer l'ouverture de l'application. */
async function verifierRepere(code) {
  if (Store.mode !== "nuage") return;
  const cle = "tribu:repereVerifie:" + code;
  if (localStorage.getItem(cle)) return;
  localStorage.setItem(cle, "1");
  try {
    if (await Store.repereLibre(code) === true) await Store.marquerRepere(code);
  } catch (e) { /* sans importance : on réessaiera sur un autre appareil */ }
}

/* Note la date d'ouverture de la tribu, AU PLUS une fois par jour et par
   appareil : la date du dernier envoi est gardée sur l'appareil. Sans ce
   garde-fou, chaque ouverture écrirait dans la tribu pour rien. Un échec est
   sans importance : la date sera notée à la prochaine ouverture. */
async function noterOuverture(code) {
  if (Store.mode !== "nuage") return;
  const cle = "tribu:vu:" + code;
  const jour = new Date().toISOString().slice(0, 10);
  try {
    if (localStorage.getItem(cle) === jour) return;
    localStorage.setItem(cle, jour);
  } catch (e) { /* mémoire du navigateur indisponible : on écrit quand même */ }
  await Store.noterOuverture(code);
}

/* Deplace les recettes de la famille dans leur propre document, UNE fois.

   Reserve a un administrateur : l'operation retire un champ du document
   principal. Une famille dont aucun administrateur n'ouvre l'application
   reste a l'ancienne organisation — elle fonctionne, elle coute seulement
   plus cher. Le drapeau est garde sur l'appareil pour ne pas refaire la
   verification a chaque ouverture. */
async function migrerRecettesSiBesoin(code) {
  if (!DEPLACER_RECETTES) return;         // voir l'interrupteur, en haut du fichier
  if (Store.mode !== "nuage" || !estAdmin()) return;
  if (Store.recettesAPart) return;
  const cle = "tribu:recettesAPart:" + code;
  try { if (localStorage.getItem(cle)) return; } catch (e) { /* memoire indisponible */ }
  if (!etat.recettes.length) return;      // rien a deplacer : on reessaiera
  const fait = await Store.migrerRecettes(code);
  try { localStorage.setItem(cle, "1"); } catch (e) { /* sans importance */ }
  if (fait) rendre();
}

/* Efface les invitations mortes de la tribu, AU PLUS une fois par jour et par
   appareil. Seul un appareil ADMINISTRATEUR en a le droit côté serveur : sur
   les autres, la demande partirait pour être refusée.

   Rien n'est annoncé : personne n'a demandé ce ménage, et il ne change rien à
   ce qui s'affiche. Un échec est sans importance — on réessaiera demain, ou
   depuis le téléphone d'un autre administrateur. */
async function menageInvitations(code) {
  if (Store.mode !== "nuage" || !estAdmin()) return;
  const cle = "tribu:menageInv:" + code;
  const jour = new Date().toISOString().slice(0, 10);
  try {
    if (localStorage.getItem(cle) === jour) return;
    localStorage.setItem(cle, jour);
  } catch (e) { /* mémoire du navigateur indisponible : on fait le ménage quand même */ }
  const r = await Store.purgerInvitationsDe(code);
  if (r && r.n) console.info("Invitations effacées (expirées ou utilisées) : " + r.n);
}

/* ============== Familles Fondatrices (programme de lancement) ==============

   Les 100 premieres tribus qui utilisent VRAIMENT l'application recoivent un
   numero permanent. Le deroule voulu : place reservee -> utilisation reelle
   -> validation. Sans validation dans les 7 jours, la place retourne au pot.

   CE QUE LE SERVEUR GARANTIT (firestore.rules, match /fondateurs) : le numero
   est unique — c'est l'IDENTIFIANT du document, et Firestore refuse d'en
   creer un qui existe deja —, il va de 1 a 100, une tribu ne reserve que pour
   elle-meme, et elle n'en detient qu'un a la fois.

   CE QU'IL NE GARANTIT PAS : les criteres ci-dessous. Les regles n'ont pas de
   boucle et ne savent pas recompter un historique ; sans Cloud Function
   (ecartees volontairement), c'est l'application qui mesure. Un telephone
   bidouille pourrait donc se valider trop tot. Il ne pourrait pour autant ni
   voler le numero d'une autre tribu, ni en prendre deux. La liste complete se
   relit dans la console Firebase. */
const PROGRAMME = {
  places: 100,
  jours: 7,              // delai pour valider sa place
  membres: 2,            // au moins deux personnes dans la tribu
  validees: 5,           // au moins cinq taches ou repas valides
  joursUtiles: 2,        // sur au moins deux jours differents
  /* Une tribu creee AVANT cette date etait deja la : elle n'a plus rien a
     prouver, c'est une PIONNIERE, validee d'emblee. A caler sur le jour de
     la mise en ligne du programme. */
  depuis: "2026-09-13"
};

/* LE PROGRAMME NE TOURNE QUE SUR LES VRAIES ADRESSES.

   Le site d'essai (amandiine37.github.io/matribu-test/) partage la MEME base
   Firebase que la production : sans ce garde-fou, une tribu creee pour un
   essai prendrait un vrai numero de Famille Fondatrice, et il faudrait aller
   le reprendre a la main dans la console.

   Restent donc actifs : matribu-app.fr, l'ancienne adresse /MaTribu, et
   l'emulateur — qui, lui, tape dans une base bidon ou rien ne compte.
   Restent inactifs : le site d'essai, et localhost meme avec ?nuage=1 (qui
   ecrit, lui, dans la vraie base). */
function programmeActif() {
  if (Store.mode !== "nuage") return false;        // mode local : rien a reserver
  if (EMULATEUR) return true;                      // bac a sable, sans consequence
  return /(^|\.)matribu-app\.fr$/i.test(location.hostname) || surAncienneAdresse();
}

/* « #042 » : trois chiffres, comme sur un maillot. */
function numeroFondatrice(n) { return "#" + String(n).padStart(3, "0"); }

function placeFondatrice() { return etat.fondatrice || null; }
function estFondatrice() {
  const p = placeFondatrice();
  return !!(p && p.statut === "validee");
}
/* Deja la avant le programme : pionniere. Sinon : fondatrice.

   La comparaison porte sur du TEXTE, et c'est volontaire : une date ISO
   («2026-09-12T21:05:00.000Z») se compare caractere par caractere dans le bon
   ordre. « 2026-09-12T… » passe avant « 2026-09-13 », et « 2026-09-13T08:00 »
   passe apres — donc une tribu creee le 13, meme a huit heures du matin, est
   bien une fondatrice.

   SANS DATE DU TOUT : pionniere. Toute tribu creee par l'application en pose
   une ; un document qui n'en a pas vient forcement d'une version ancienne.
   La traiter comme une nouvelle venue lui ferait regagner une place qu'elle
   a deja meritee. */
function genreDeLaTribu() {
  const cree = String((etat.famille || {}).creeLe || "");
  return !cree || cree < PROGRAMME.depuis ? "pionniere" : "fondatrice";
}

/* Ou en est la tribu par rapport aux criteres.

   Tout se lit dans ce qu'elle a deja : ses membres, et le suivi des taches
   (`etats`). On ne compte PAS dans le journal des points : une tribu qui a
   desactive les points n'y ecrit plus, et elle merite sa place autant qu'une
   autre. Un repas cuisine compte comme une tache : c'est de l'usage reel. */
function avancementFondatrice() {
  const jours = {};
  let validees = 0;
  Object.keys(etat.etats || {}).forEach((c) => {
    const e = etat.etats[c];
    if (!e || e.statut !== "valide" || !e.valideLe) return;
    validees++;
    jours[String(e.valideLe).slice(0, 10)] = 1;
  });
  const nbJours = Object.keys(jours).length;
  const nbMembres = (etat.membres || []).length;
  const p = placeFondatrice();
  const depart = p && p.reserveeLe ? Date.parse(p.reserveeLe) : 0;
  const fin = depart ? depart + PROGRAMME.jours * 86400000 : 0;
  return {
    membres: nbMembres, validees: validees, jours: nbJours,
    resteJours: fin ? Math.max(0, Math.ceil((fin - Date.now()) / 86400000)) : PROGRAMME.jours,
    expiree: !!fin && Date.now() > fin,
    ok: nbMembres >= PROGRAMME.membres
      && validees >= PROGRAMME.validees
      && nbJours >= PROGRAMME.joursUtiles
  };
}

/* Une place reservee puis oubliee retourne au pot au bout de 7 jours. */
function placePerimee(p) {
  return !!(p && p.statut !== "validee" && p.reserveeLe
    && Date.now() > p.reserveeLe + PROGRAMME.jours * 86400000);
}

/* Inscrit la place dans la tribu : en memoire ET dans son document. */
async function inscrirePlace(numero, genre, statut) {
  const avant = placeFondatrice();
  const place = {
    numero: numero, genre: genre, statut: statut,
    reserveeLe: statut === "reservee" || !avant ? new Date().toISOString() : avant.reserveeLe,
    valideeLe: statut === "validee" ? new Date().toISOString() : null
  };
  const ok = await Store.inscrirePlaceFondatrice(place);
  if (ok) etat.fondatrice = place;
  return ok;
}

async function oublierPlace() {
  if (!placeFondatrice()) return;
  if (await Store.inscrirePlaceFondatrice(null)) etat.fondatrice = null;
}

/* Le moment 🎉, une seule fois par appareil. La trace de la fete reste dans
   la memoire du navigateur, pas dans la tribu : c'est un evenement d'ecran,
   pas une donnee de famille — et chaque telephone merite son moment. */
function feterFondatrice(code) {
  const cle = "tribu:fondatriceFetee:" + code;
  try {
    if (localStorage.getItem(cle)) return;
    localStorage.setItem(cle, "1");
  } catch (e) { return; }
  try { Formulaires.fondatrice(true); } catch (e) { /* l'ecran suffit */ }
}

/* Suit le programme en arriere-plan, a l'ouverture de la tribu. Seul un
   appareil ADMINISTRATEUR ecrit : les regles refusent les autres, inutile de
   les faire echouer pour rien. Rien n'est bloquant et rien n'est annonce
   ici : c'est l'ecran qui montrera l'avancement. */
async function suivreProgrammeFondatrices(code) {
  if (!programmeActif() || !estAdmin()) return;
  try {
    const p = placeFondatrice();

    /* 1. Place acquise : il n'y a plus rien a faire, jamais. */
    if (p && p.statut === "validee") return;

    /* 2. Place reservee : on la valide des que les criteres sont atteints. */
    if (p && p.numero) {
      const place = await Store.placeFondatrice(p.numero);
      /* Elle ne nous appartient plus (liberee, puis reprise par une autre
         tribu) : on l'oublie, et on repartira du premier numero libre. */
      if (!place || place.famille !== code) { await oublierPlace(); return; }
      if (place.statut === "validee") { await inscrirePlace(p.numero, place.genre, "validee"); return; }
      const av = avancementFondatrice();
      if (place.genre === "pionniere" || av.ok) {
        if (await Store.validerPlaceFondatrice(p.numero)) {
          await inscrirePlace(p.numero, place.genre, "validee");
          rendre();
          feterFondatrice(code);
        }
        return;
      }
      if (av.expiree) { await Store.libererPlaceFondatrice(p.numero); await oublierPlace(); }
      return;
    }

    /* 3. Aucune place : on en reserve une, au plus une fois par jour et par
       appareil — inutile de relire les 100 places a chaque ouverture. */
    const cle = "tribu:fondatrice:" + code;
    const jour = new Date().toISOString().slice(0, 10);
    try {
      if (localStorage.getItem(cle) === jour) return;
      localStorage.setItem(cle, jour);
    } catch (e) { /* memoire du navigateur indisponible : on tente quand meme */ }
    await reserverUnePlace(code);
  } catch (err) {
    console.warn("Programme Familles Fondatrices :", err);
  }
}

/* Prend le premier numero libre. Si deux tribus visent le meme au meme
   instant, c'est le SERVEUR qui tranche : la seconde reservation est refusee,
   et on passe simplement au numero suivant. */
async function reserverUnePlace(code) {
  const prises = await Store.placesFondatrices();
  if (!prises) return;                       // liste illisible : on reessaiera
  const occupe = {};
  prises.forEach((p) => { occupe[String(p.numero)] = p; });
  const genre = genreDeLaTribu();

  for (let n = 1; n <= PROGRAMME.places; n++) {
    const deja = occupe[String(n)];
    if (deja) {
      /* Le menage : une place oubliee depuis plus de 7 jours redevient
         disponible. Les regles autorisent n'importe quelle tribu a la
         liberer — c'est ainsi que le pot se remplit, sans serveur. */
      if (!placePerimee(deja)) continue;
      if (!(await Store.libererPlaceFondatrice(n))) continue;
    }
    /* On annonce le numero chez soi AVANT de le reserver : c'est ce que les
       regles verifient, et c'est ce qui empeche d'en viser deux. */
    if (!(await inscrirePlace(n, genre, "reservee"))) return;
    if (!(await Store.reserverPlaceFondatrice(n, genre, code))) continue;
    /* Une pionniere a deja fait ses preuves : validee dans la foulee. */
    if (genre === "pionniere" && await Store.validerPlaceFondatrice(n)) {
      await inscrirePlace(n, genre, "validee");
      rendre();
      feterFondatrice(code);
      return;
    }
    rendre();
    return;
  }
  /* Les 100 places sont prises : on n'annonce rien chez soi. */
  await oublierPlace();
}

/* Deconnexion : l'appareil reste autorise, on revient juste au choix du profil. */
async function deconnecter() {
  const code = Store.code || localStorage.getItem("tribu:derniereFamille");
  ecrireSession(null);
  moi = null;
  Store._detacher();
  $("#ecran-app").hidden = true;
  $("#ecran-connexion").hidden = false;
  if (code) {
    const d = await Store.charger(code);
    if (d) {
      etat = etatVide();
      Connexion.aller("profils", { code: code, donnees: d, jeton: null });
      return;
    }
  }
  etat = etatVide();
  Connexion.aller("accueil");
}

/* Étape 3 — l'appareil retiré réagit tout de suite.

   Appelée quand le serveur a CONFIRMÉ le refus (Store._verifierAcces), ou au
   démarrage quand la tribu est refusée. On coupe les écoutes et on efface ce
   qui était affiché : les données en mémoire, la fenêtre ouverte, les vues,
   les onglets et l'en-tête. Puis l'écran neutre.

   Rien n'est effacé du navigateur ici — ni la session, ni le repère de la
   tribu : un refus peut aussi venir d'un réglage du serveur. C'est
   « Repartir de zéro », sur cet écran, qui les efface, et seulement si la
   personne le demande. */
/* Efface de l'écran tout ce qui vient de la tribu, et repasse sur l'écran de
   connexion. Sert dans les deux cas : accès perdu (étape 3) et départ
   volontaire (étape 4). */
function viderEcranTribu() {
  Store._detacher();
  Store.code = null;
  fermerFeuille();
  $("#feuille").innerHTML = "";
  moi = null;
  etat = etatVide();
  document.querySelectorAll("#ecran-app .vue").forEach((s) => { s.innerHTML = ""; });
  $("#nav-inner").innerHTML = "";
  $("#titre-vue").textContent = "";
  $("#sous-titre-vue").textContent = "";
  $("#mes-points").textContent = "0";
  $("#btn-profil").textContent = "🙂";
  $("#fab").hidden = true;
  $("#ecran-app").hidden = true;
  $("#ecran-connexion").hidden = false;
}

function accesPerdu(code) {
  viderEcranTribu();
  Connexion.aller("accesPerdu", { code: code });
}

/* ============================ 6. Actions ============================ */

const Actions = {

  /* --- Taches --- */
  async marquerFaite(tacheId) {
    const t = etat.taches.find((x) => x.id === tacheId);
    if (!t) return;
    const d = new Date();
    const cle = cleEtat(t, d);
    if ((etat.etats[cle] || {}).statut === "valide") return;

    /* Les points reviennent a la personne a qui la tache est attribuee.
       Si un parent coche a la place d'un enfant, c'est l'enfant qui gagne. */
    const assigne = assigneDe(t, d);
    const beneficiaire = assigne || (moi && moi.id);
    const gere = !!(assigne && estGere(assigne));

    /* Un enfant sans telephone ne peut pas valider lui-meme : quand le parent
       coche pour lui, cela vaut validation, sinon la tache resterait bloquee. */
    const directe = estAdmin() && gere;

    etat.etats[cle] = {
      statut: directe ? "valide" : "fait",
      parQui: beneficiaire,
      faitLe: new Date().toISOString(),
      valideLe: directe ? new Date().toISOString() : null,
      valideePar: directe ? moi.id : null
    };
    await Store.ecrireEtat(cle, etat.etats[cle]);

    if (directe) {
      const credite = await crediterTache(t, cle, beneficiaire);
      rendre();
      const m = membre(beneficiaire);
      /* On n'annonce des points que s'ils ont vraiment été donnés : annoncer
         « +15 points » sans rien créditer est le meilleur moyen de perdre la
         confiance des enfants. */
      toast(credite && m ? "+" + t.points + " points pour " + m.prenom + " 🌟"
        : t.points ? "Validé — points déjà donnés pour cette période"
          : "Validé");
      return;
    }
    rendre();
    toast(estAdmin() ? "Fait ! À valider ci-dessous." : "Fait ! En attente de validation.");
  },

  annulerFaite(tacheId) {
    const t = etat.taches.find((x) => x.id === tacheId);
    if (!t) return;
    const cle = cleEtat(t, new Date());
    if ((etat.etats[cle] || {}).statut !== "fait") return;
    etat.etats[cle] = { statut: "afaire", parQui: null, faitLe: null, valideLe: null, valideePar: null };
    sauverEtat(cle);
  },

  async valider(tacheId) {
    const t = etat.taches.find((x) => x.id === tacheId);
    if (!t || !estAdmin()) return;
    const cle = cleEtat(t, new Date());
    const e = etat.etats[cle];
    if (!e || e.statut !== "fait") return;

    const gagnant = e.parQui || assigneDe(t, new Date());
    e.statut = "valide";
    e.valideLe = new Date().toISOString();
    e.valideePar = moi.id;
    etat.etats[cle] = e;
    await Store.ecrireEtat(cle, e);

    const credite = await crediterTache(t, cle, gagnant);
    rendre();
    const m = membre(gagnant);
    toast(credite && m ? "+" + t.points + " points pour " + m.prenom + " 🌟"
      : t.points ? "Validé — points déjà donnés pour cette période"
        : "Validé");
  },

  async refuser(tacheId) {
    const t = etat.taches.find((x) => x.id === tacheId);
    if (!t || !estAdmin()) return;
    const ok = await confirmer("Renvoyer « " + t.nom + " » en « à faire » ? Aucun point ne sera donné.",
      { titre: "Refuser la tâche", ok: "Renvoyer", danger: true });
    if (!ok) return;
    const cle = cleEtat(t, new Date());
    etat.etats[cle] = { statut: "afaire", parQui: null, faitLe: null, valideLe: null, valideePar: null };
    sauverEtat(cle);
  },

  /* --- Qui cuisine --- */

  definirCuisinier(cleSem, jour, moment, membreId) {
    const sem = etat.repas[cleSem];
    const c = sem && sem[jour + "-" + moment];
    if (!c) { toast("Choisissez d'abord un plat"); return; }
    c.cuisinier = membreId || null;
    sauver("repas");
  },

  async repasFait(cleSem, jour, moment) {
    const c = repasDe(cleSem, jour, moment);
    if (!c) return;
    const cle = cleEtatRepas(cleSem, jour, moment);
    if ((etat.etats[cle] || {}).statut === "valide") return;

    const beneficiaire = c.cuisinier || (moi && moi.id);
    /* Comme pour les tâches : un administrateur qui coche pour un profil géré
       valide du même geste, sinon le repas resterait bloqué. */
    const directe = estAdmin() && (estGere(beneficiaire) || beneficiaire === moi.id);

    etat.etats[cle] = {
      statut: directe ? "valide" : "fait",
      parQui: beneficiaire,
      faitLe: new Date().toISOString(),
      valideLe: directe ? new Date().toISOString() : null,
      valideePar: directe ? moi.id : null
    };
    await Store.ecrireEtat(cle, etat.etats[cle]);
    if (directe) await crediterRepas(cleSem, jour, moment, beneficiaire);
    rendre();
    const m = membre(beneficiaire);
    const pts = Number(reglagesFamille().pointsRepas) || 0;
    toast(directe && m && pts
      ? "+" + pts + " points pour " + m.prenom + " 🍽️"
      : "Repas fait ! En attente de validation.");
  },

  async validerRepas(cleSem, jour, moment) {
    if (!estAdmin()) return;
    const cle = cleEtatRepas(cleSem, jour, moment);
    const e = etat.etats[cle];
    if (!e || e.statut !== "fait") return;
    e.statut = "valide";
    e.valideLe = new Date().toISOString();
    e.valideePar = moi.id;
    etat.etats[cle] = e;
    await Store.ecrireEtat(cle, e);
    await crediterRepas(cleSem, jour, moment, e.parQui);
    rendre();
    const m = membre(e.parQui);
    const pts = Number(reglagesFamille().pointsRepas) || 0;
    toast(m && pts ? "+" + pts + " points pour " + m.prenom + " 🍽️" : "Validé");
  },

  annulerRepasFait(cleSem, jour, moment) {
    const cle = cleEtatRepas(cleSem, jour, moment);
    if ((etat.etats[cle] || {}).statut !== "fait") return;
    etat.etats[cle] = { statut: "afaire", parQui: null, faitLe: null, valideLe: null, valideePar: null };
    sauverEtat(cle);
  },

  /* Retire de la réserve ce que le repas a consommé. `garder` = les articles
     que l'on a choisi de ne pas décompter. */
  /* `lignes` = ce que l'application a su calculer, `garder` = ce qu'on ne
     décompte pas, `saisies` = { idArticle: quantité } pour ce que l'on a
     tapé soi-même quand les unités ne se convertissent pas. */
  retirerDeLaReserve(lignes, garder, saisies) {
    const hors = new Set(garder || []);
    const mains = saisies || {};
    let n = 0;
    const retirer = (stockId, combien) => {
      const s = etat.stock.find((x) => x.id === stockId);
      if (!s || !(combien > 0)) return;
      s.qte = texteNombre(Math.max(0, (nombre(s.qte) || 0) - combien));
      s.majLe = new Date().toISOString();
      n++;
    };
    (lignes || []).forEach((l) => {
      if (hors.has(l.stockId) || l.retire === null) return;
      retirer(l.stockId, l.retire);
    });
    Object.keys(mains).forEach((id) => retirer(id, nombre(mains[id])));
    if (n) sauver("stock");
    return n;
  },

  /* --- Courses --- */

  ajouterPlusieursCourses(texte, opts) {
    const noms = nomsSaisis(texte);
    if (!noms.length) return 0;
    /* On ajoute dans l'ordre lu : `ajouterCourse` empile en tête, donc on
       parcourt à l'envers. */
    noms.slice().reverse().forEach((n) => Actions.ajouterCourse(n, devinerRayon(n), "", "", opts));
    if (noms.length > 1) toast(noms.length + " articles ajoutés 🛒");
    return noms.length;
  },

  ajouterCourse(nom, rayon, qte, unite, opts) {
    nom = (nom || "").trim();
    if (!nom) return;
    opts = opts || {};
    /* Un article hérite du vrac de sa fiche de réserve : inutile de le
       recocher à chaque fois, et on n'oublie pas le bocal. */
    const enReserve = articleStock(nom);
    etat.courses.unshift({
      id: id(), nom: nom, qte: String(qte || "").trim(), unite: unite || "",
      rayon: rayon || "Autre", coche: false,
      listeId: opts.listeId || listeCourante().id,
      vrac: opts.vrac !== undefined ? !!opts.vrac : !!(enReserve && enReserve.vrac),
      parQui: moi && moi.id, creeLe: new Date().toISOString()
    });
    sauver("courses");
  },

  /* Renouveler les cadeaux proposés par l'application, sans toucher à ceux
     que la famille a inventés. Un cadeau présent dans les deux listes n'est
     pas retiré puis recréé : il reste tel quel, avec son coût éventuellement
     modifié. Les points déjà gagnés ne bougent pas. */
  async remplacerCadeauxDeDepart() {
    if (!estAdmin()) { toast("Seul un administrateur peut mettre les cadeaux à jour"); return; }
    const bilan = cadeauxAremplacer();
    if (!bilan.aRetirer.length && !bilan.aAjouter.length) {
      toast("La liste est déjà à jour");
      return;
    }
    const morceaux = [];
    if (bilan.aRetirer.length) {
      morceaux.push(bilan.aRetirer.length + " ancien" + (bilan.aRetirer.length > 1 ? "s" : "") +
        " cadeau" + (bilan.aRetirer.length > 1 ? "x" : "") + " de l'application " +
        (bilan.aRetirer.length > 1 ? "seront retirés" : "sera retiré"));
    }
    if (bilan.aAjouter.length) {
      morceaux.push(bilan.aAjouter.length + " nouveau" + (bilan.aAjouter.length > 1 ? "x" : "") +
        (bilan.aAjouter.length > 1 ? " seront ajoutés" : " sera ajouté"));
    }
    const ok = await confirmer(morceaux.join(", et ") + ". Les cadeaux que vous avez créés " +
      "vous-même ne sont pas touchés, et les points déjà gagnés non plus.",
      { titre: "Mettre les cadeaux à jour", ok: "Mettre à jour" });
    if (!ok) return;
    const partis = new Set(bilan.aRetirer.map((c) => c.id));
    etat.cadeaux = etat.cadeaux.filter((c) => !partis.has(c.id)).concat(bilan.aAjouter);
    sauver("cadeaux");
    toast("Cadeaux mis à jour ✨");
  },

  /* Retirer un rayon créé par la famille. Les articles qui s'y trouvaient
     gardent ce nom : ils s'affichent alors dans un rayon inconnu, à leur
     place alphabétique, jusqu'à ce qu'on les range ailleurs. On le dit avant. */
  async supprimerRayon(nom) {
    if (!estAdmin()) { toast("Seul un administrateur peut retirer un rayon"); return; }
    const dedans = etat.stock.filter((s) => s.rayon === nom).length +
      etat.courses.filter((c) => c.rayon === nom).length;
    const ok = await confirmer("Retirer le rayon « " + nom + " » ?" + (dedans
      ? " " + dedans + " article(s) y sont rangés : ils garderont ce nom jusqu'à ce que vous les changiez."
      : ""), { titre: "Retirer un rayon", ok: "Retirer", danger: true });
    if (!ok) return;
    etat.reglages = Object.assign({}, etat.reglages, {
      rayonsPerso: rayonsPerso().filter((r) => r.nom !== nom)
    });
    sauver("reglages");
    toast("Rayon retiré");
  },

  /* --- Réserve ---

     Remplir sa réserve article par article, à travers un formulaire, décourage
     vite. Ici on en pose plusieurs d'un coup — au clavier ou en dictant avec
     le micro du téléphone. Les quantités se règlent ensuite, tranquillement :
     ce qui compte à cet instant, c'est que la liste existe. */
  ajouterPlusieursStock(texte) {
    const noms = nomsSaisis(texte);
    if (!noms.length) return 0;
    const ajoutes = [];
    const connus = [];
    noms.forEach((n) => {
      /* Déjà en réserve : on ne crée pas de doublon. La comparaison connaît
         le singulier et le pluriel. */
      if (articleStock(n)) { connus.push(n); return; }
      etat.stock.push({
        id: id(), nom: n.charAt(0).toUpperCase() + n.slice(1),
        qte: "", unite: "", mini: "", rayon: devinerRayon(n)
      });
      ajoutes.push(n);
    });
    if (ajoutes.length) sauver("stock");
    if (ajoutes.length && connus.length) {
      toast(ajoutes.length + " ajouté(s) — " + connus.length + " déjà en réserve");
    } else if (ajoutes.length) {
      toast(ajoutes.length + " article(s) en réserve 🥫");
    } else if (connus.length) {
      toast(connus.length > 1 ? "Ils sont déjà en réserve" : "Il est déjà en réserve");
    }
    return ajoutes.length;
  },

  /* --- Listes de courses --- */
  enregistrerListe(donnees, lid) {
    assurerListes();
    if (lid) {
      const l = etat.listesCourses.find((x) => x.id === lid);
      if (!l) return;
      Object.assign(l, donnees);
      ui.listeActive = l.id;
    } else {
      const nouvelle = Object.assign({ id: id(), creeLe: new Date().toISOString() }, donnees);
      etat.listesCourses.push(nouvelle);
      ui.listeActive = nouvelle.id;
    }
    sauver("listesCourses");
  },

  async supprimerListe(lid) {
    const l = listesCourses().find((x) => x.id === lid);
    if (!l) return;
    if (listesCourses().length <= 1) { toast("Gardez au moins une liste"); return; }
    const n = coursesDe(lid).length;
    const ok = await confirmer("Supprimer « " + l.nom + " »" +
      (n ? " et ses " + n + " article(s)" : "") + " ?",
      { titre: "Supprimer la liste", ok: "Supprimer", danger: true });
    if (!ok) return;
    etat.courses = etat.courses.filter((c) => listeDe(c) !== lid);
    etat.listesCourses = etat.listesCourses.filter((x) => x.id !== lid);
    ui.listeActive = listeParDefaut().id;
    sauver("courses", "listesCourses");
    toast("Liste supprimée");
  },

  /* Déplacer un article d'une liste à l'autre (ex : du mois vers la semaine). */
  deplacerCourse(cid, listeId) {
    const c = etat.courses.find((x) => x.id === cid);
    if (!c) return;
    c.listeId = listeId;
    c.coche = false;
    sauver("courses");
    const l = listesCourses().find((x) => x.id === listeId);
    toast("Déplacé vers « " + (l ? l.nom : "?") + " »");
  },
  basculerCourse(cid) {
    const c = etat.courses.find((x) => x.id === cid);
    if (!c) return;
    c.coche = !c.coche;
    sauver("courses");
  },
  supprimerCourse(cid) {
    etat.courses = etat.courses.filter((x) => x.id !== cid);
    sauver("courses");
  },
  /* Les courses cochées sortent de la liste. Si l'article existe dans la
     réserve, on propose d'y ajouter ce qui vient d'être acheté. */
  /* Fin des courses : les articles cochés quittent la liste et rejoignent la
     réserve. `nouveaux` = les noms que l'on accepte d'y créer en plus. */
  async terminerCourses(opts) {
    opts = opts || {};
    const cible = opts.listeId || listeCourante().id;
    const achetes = etat.courses.filter((c) => c.coche && listeDe(c) === cible);
    if (!achetes.length) { toast("Aucun article coché"); return; }

    const aCreer = new Set(opts.nouveaux || []);
    /* `saisies` = { idArticle: quantité } quand les unités ne se convertissent
       pas et que l'on a tapé soi-même ce qu'on a rapporté. */
    const saisies = opts.saisies || {};
    let majes = 0, crees = 0, ignores = 0;

    if (opts.enReserve !== false) {
      achetes.forEach((c) => {
        const s = articleStock(c.nom);
        if (s) {
          let ajout = convertirUnite(c.qte, c.unite || "", s.unite || "");
          /* Unités incompatibles (2 boîtes vs 500 g) : on ne bricole pas un
             chiffre faux. Si la quantité a été saisie à la main, on la prend ;
             sinon on ne touche à rien et on le signale. */
          if (ajout === null && saisies[s.id] !== undefined) ajout = nombre(saisies[s.id]);
          if (ajout === null) { ignores++; return; }
          s.qte = texteNombre((nombre(s.qte) || 0) + ajout);
          s.majLe = new Date().toISOString();
          majes++;
        } else if (aCreer.has(c.nom)) {
          etat.stock.push({
            id: id(), nom: c.nom, qte: String(c.qte || "").trim(), unite: c.unite || "",
            mini: "", rayon: c.rayon || "Autre", vrac: !!c.vrac,
            majLe: new Date().toISOString()
          });
          crees++;
        }
      });
    }

    const partis = new Set(achetes.map((c) => c.id));
    etat.courses = etat.courses.filter((c) => !partis.has(c.id));
    sauver("courses", "stock");

    const bilan = [];
    if (majes) bilan.push(majes + " réapprovisionné" + (majes > 1 ? "s" : ""));
    if (crees) bilan.push(crees + " ajouté" + (crees > 1 ? "s" : "") + " à la réserve");
    toast(bilan.length
      ? "Courses terminées : " + bilan.join(", ") + " ✅"
      : achetes.length + " article(s) retiré(s) de la liste");
    if (ignores) {
      setTimeout(() => toast(ignores + " article(s) à vérifier : unités différentes"), 2800);
    }
  },

  /* --- Stock --- */
  enregistrerStock(donnees, sid) {
    /* Une réserve ne descend pas sous zéro. Les boutons + et − le garantissent
       déjà ; la saisie au clavier, non — et « −5 kg de farine » ne fait pas que
       s'afficher bizarrement : le réapprovisionnement croit qu'il manque le
       minimum PLUS cinq kilos, et on achète beaucoup trop.
       Les quantités en toutes lettres (« un peu ») restent acceptées. */
    ["qte", "mini"].forEach((champ) => {
      const v = nombre(donnees[champ]);
      if (v !== null && v < 0) donnees[champ] = "0";
    });
    if (sid) {
      const s = etat.stock.find((x) => x.id === sid);
      if (!s) return;
      Object.assign(s, donnees, { majLe: new Date().toISOString() });
    } else {
      etat.stock.push(Object.assign({ id: id(), majLe: new Date().toISOString() }, donnees));
    }
    sauver("stock");
  },
  supprimerStock(sid) {
    etat.stock = etat.stock.filter((x) => x.id !== sid);
    sauver("stock");
  },
  /* Boutons + / − directement dans la liste du stock */
  ajusterStock(sid, delta) {
    const s = etat.stock.find((x) => x.id === sid);
    if (!s) return;
    const q = nombre(s.qte) || 0;
    s.qte = texteNombre(Math.max(0, q + delta));
    s.majLe = new Date().toISOString();
    sauver("stock");
  },

  /* Envoie dans les courses tout ce qui est passé sous le minimum. */
  async racheterSousMinimum() {
    const bas = stockSousMinimum();
    if (!bas.length) { toast("Rien à racheter, tout est au-dessus du minimum"); return; }
    const liste = listeCourante();
    const cible = liste.id;
    /* « Déjà là » se juge sur LA LISTE OÙ L'ON AJOUTE, pas sur toutes à la
       fois : la farine notée sur la liste du drive ne doit pas empêcher de la
       remettre sur celle du supermarché, sinon on repart sans.
       La comparaison reste tolérante : « Oeufs » et « Œufs », c'est le même
       article, on ne l'ajoute pas deux fois. */
    const dejaLa = new Set(etat.courses
      .filter((c) => !c.coche && listeDe(c) === cible)
      .map((c) => cleArticle(c.nom)));
    const aAjouter = bas.filter((s) => !dejaLa.has(cleArticle(s.nom)));
    if (!aAjouter.length) {
      toast("Ils sont déjà dans « " + liste.nom + " »");
      return;
    }
    const ok = await confirmer("Ajouter " + aAjouter.length + " article(s) à « " + liste.nom + " » ?",
      { titre: "Réapprovisionner", ok: "Ajouter" });
    if (!ok) return;
    aAjouter.slice().reverse().forEach((s) => {
      /* Ce qui MANQUE pour revenir au minimum, pas le minimum lui-même : avec
         200 g de farine et un minimum d'1 kg, on achète 800 g, pas 1 kg.
         Quand la quantité en réserve n'est pas un nombre (« un peu »), on ne
         peut rien soustraire : on propose alors le minimum entier. */
      const mini = nombre(s.mini) || 0;
      const q = nombre(s.qte);
      const manque = q === null ? mini : Math.max(mini - q, 0);
      etat.courses.unshift({
        id: id(), nom: s.nom, qte: texteNombre(manque || mini), unite: s.unite || "",
        rayon: s.rayon || "Autre", coche: false, listeId: cible, vrac: !!s.vrac,
        parQui: moi && moi.id, creeLe: new Date().toISOString()
      });
    });
    sauver("courses");
    toast(aAjouter.length + " article(s) ajouté(s) 🛒");
  },

  /* --- Repas --- */
  /* Marquer une absence : on efface le plat, le cuisinier et l'état — il n'y
     a plus rien à cuisiner ni à valider. */
  marquerAbsence(cleSem, jour, moment, motif, texte) {
    if (!etat.repas[cleSem]) etat.repas[cleSem] = {};
    etat.repas[cleSem][jour + "-" + moment] = {
      recetteId: null, texte: String(texte || "").trim(),
      absent: true, motif: motif || "autre"
    };
    sauver("repas");
  },

  /* Qui ne mange pas à ce repas — le repas a quand même lieu. */
  definirAbsentsRepas(cleSem, jour, moment, ids) {
    const c = repasDe(cleSem, jour, moment);
    if (!c) { toast("Choisissez d'abord un plat"); return; }
    c.absents = (ids || []).slice();
    sauver("repas");
  },

  definirRepas(cleSem, jour, moment, valeur) {
    if (!etat.repas[cleSem]) etat.repas[cleSem] = {};
    /* Changer le plat ne doit pas effacer qui cuisine : c'est souvent la même
       personne qui s'y colle, quel que soit le menu. */
    const avant = etat.repas[cleSem][jour + "-" + moment];
    if (valeur && avant && avant.cuisinier && !valeur.cuisinier) valeur.cuisinier = avant.cuisinier;
    /* Qui mange ne dépend pas du plat : changer de recette ne doit pas
       ramener à table ceux qui sont à la cantine. */
    if (valeur && avant && avant.absents && !valeur.absents) valeur.absents = avant.absents.slice();
    etat.repas[cleSem][jour + "-" + moment] = valeur;
    sauver("repas");
  },

  /* --- Notes --- */
  basculerNote(nid) {
    const n = etat.notes.find((x) => x.id === nid);
    if (!n) return;
    if (!n.fait && n.repetition && n.repetition !== "aucune" && n.date) {
      const d = deIso(n.date);
      if (n.repetition === "hebdo") d.setDate(d.getDate() + 7);
      else if (n.repetition === "mensuel") d.setMonth(d.getMonth() + 1);
      else d.setFullYear(d.getFullYear() + 1);
      n.date = isoDate(d);
      sauver("notes");
      toast("Reporté au " + dateJolie(n.date, true));
      return;
    }
    n.fait = !n.fait;
    sauver("notes");
  },
  supprimerNote(nid) {
    etat.notes = etat.notes.filter((x) => x.id !== nid);
    sauver("notes");
  },

  /* --- Cadeaux et points --- */
  async demanderCadeau(cid) {
    const c = etat.cadeaux.find((x) => x.id === cid);
    if (!c || !moi) return;
    if (pointsDe(moi.id) < c.cout) { toast("Pas encore assez de points"); return; }
    const ok = await confirmer("Échanger " + c.cout + " points contre « " + c.nom +
      " » ? Un administrateur devra accepter.", { titre: "Demander ce cadeau", ok: "Demander" });
    if (!ok) return;
    etat.echanges.unshift({
      id: id(), membreId: moi.id, cadeauId: c.id, cadeauNom: c.nom, cadeauEmoji: c.emoji,
      cout: c.cout, statut: "demande", demandeLe: new Date().toISOString(),
      traiteLe: null, traitePar: null
    });
    sauver("echanges");
    toast("Demande envoyée 🎁");
  },

  async accorderEchange(eid) {
    const e = etat.echanges.find((x) => x.id === eid);
    if (!e || !estAdmin() || e.statut !== "demande") return;
    if (pointsDe(e.membreId) < e.cout) { toast("Ce membre n'a plus assez de points"); return; }

    const ok = await ajouterAuJournal({
      id: "c|" + e.id, type: "cadeau", refId: e.cadeauId,
      membreId: e.membreId, delta: -e.cout, motif: "Cadeau : " + e.cadeauNom
    });
    if (!ok) return;
    e.statut = "accorde";
    e.traiteLe = new Date().toISOString();
    e.traitePar = moi.id;
    sauver("echanges");
    toast("Cadeau accordé 🎉");
  },

  async refuserEchange(eid) {
    const e = etat.echanges.find((x) => x.id === eid);
    if (!e || !estAdmin() || e.statut !== "demande") return;
    const ok = await confirmer("Refuser la demande de cadeau « " + e.cadeauNom + " » ?",
      { titre: "Refuser", ok: "Refuser", danger: true });
    if (!ok) return;
    e.statut = "refuse";
    e.traiteLe = new Date().toISOString();
    e.traitePar = moi.id;
    sauver("echanges");
  },

  /* Un parent dépense les points d'un enfant qui n'a pas de téléphone :
     il n'y a personne pour faire la demande, donc l'échange est direct. */
  async accorderCadeauPour(membreId, cadeauId) {
    if (!estAdmin()) return;
    const c = etat.cadeaux.find((x) => x.id === cadeauId);
    const m = membre(membreId);
    if (!c || !m) return;
    if (pointsDe(membreId) < c.cout) { toast("Pas assez de points"); return; }
    const ok = await confirmer("Échanger " + c.cout + " points de " + m.prenom +
      " contre « " + c.nom + " » ?", { titre: "Offrir ce cadeau", ok: "Échanger" });
    if (!ok) return;

    const eid = id();
    const credite = await ajouterAuJournal({
      id: "c|" + eid, type: "cadeau", refId: c.id,
      membreId: membreId, delta: -c.cout, motif: "Cadeau : " + c.nom
    });
    if (!credite) return;
    etat.echanges.unshift({
      id: eid, membreId: membreId, cadeauId: c.id, cadeauNom: c.nom, cadeauEmoji: c.emoji,
      cout: c.cout, statut: "accorde", demandeLe: new Date().toISOString(),
      traiteLe: new Date().toISOString(), traitePar: moi.id
    });
    sauver("echanges");
    toast(c.nom + " pour " + m.prenom + " 🎉");
  },

  async ajusterPoints(membreId, delta, motif) {
    if (!estAdmin()) return;
    const ok = await ajouterAuJournal({
      id: "a|" + id(), type: "ajustement", refId: null,
      membreId: membreId, delta: delta, motif: motif || "Ajustement"
    });
    if (ok) { rendre(); toast((delta > 0 ? "+" : "") + delta + " points"); }
  }
};

/* Credite les points d'une tache validee, une seule fois par periode. */
/* Une tache a-t-elle deja ete payee dans la periode en cours ?

   Le garde-fou de l'identifiant (« tache X, semaine 37 ») ne suffisait pas :
   il depend de la frequence. Passer une tache de « chaque jour » a « chaque
   semaine » changeait la cle, et le meme travail pouvait etre credite une
   seconde fois dans la meme journee. On regarde donc les DATES du journal,
   qui ne mentent pas, plutot que la forme de la cle. */
function dejaPayeeDansLaPeriode(t) {
  const debut = debutDePeriode(t.frequence, new Date());
  return (etat.journal || []).some((e) =>
    e.type === "tache" && e.refId === t.id && e.delta > 0 &&
    e.date && new Date(e.date) >= debut);
}

async function crediterTache(t, cle, beneficiaire) {
  if (!beneficiaire || !t.points) return false;
  if (dejaPayeeDansLaPeriode(t)) return false;
  return await ajouterAuJournal({
    id: "t|" + t.id + "|" + clePeriode(t.frequence, new Date()),
    type: "tache", refId: t.id, cleEtat: cle.replace(/\|/g, "__"),
    membreId: beneficiaire, delta: t.points, motif: "Tâche : " + t.nom
  });
}

/* Ajoute une ligne au journal des points.
   Le serveur verifie le montant : si la ligne existe deja ou si le montant ne
   correspond pas au bareme, elle est refusee et rien n'est credite.

   ORDRE IMPORTANT : la ligne entre dans `etat.journal` AVANT l'ecriture.
   En mode local, `Store.ecrireJournal` enregistre tout `etat` sur l'appareil ;
   ajouter la ligne apres revenait a sauvegarder une photo prise trop tot, et
   les points du dernier geste disparaissaient au rechargement. Si l'ecriture
   echoue, on retire la ligne : rien ne doit rester a l'ecran qui ne soit
   reellement enregistre. */
async function ajouterAuJournal(entree) {
  entree.date = new Date().toISOString();
  entree.parAdmin = moi ? moi.id : null;
  const nouvelle = !etat.journal.some((x) => x.id === entree.id);
  if (nouvelle) etat.journal.unshift(entree);
  const ok = await Store.ecrireJournal(entree);
  if (!ok) {
    if (nouvelle) etat.journal = etat.journal.filter((x) => x !== entree);
    return false;
  }
  return true;
}

/* ============================ 7. Invitations ============================ */

const Invitations = {

  /* L'invitation embarque tout ce qu'il faut pour entrer : le nom de la tribu
     et, si elle vise un profil existant, ce profil (avec l'empreinte de son
     code, pour pouvoir le vérifier). C'est indispensable : tant qu'il n'est
     pas inscrit, l'appareil invité n'a pas le droit de lire la famille. */
  async creer(joursValidite, pourMembreId) {
    /* Un membre ordinaire peut créer une invitation POUR LUI-MÊME : c'est
       ainsi qu'il ajoute l'icône de son écran d'accueil sans déranger un
       administrateur. Pour tout le reste, il faut l'être. */
    const pourMoi = !!(moi && pourMembreId && pourMembreId === moi.id);
    if (!estAdmin() && !pourMoi) return null;
    const cible = pourMembreId ? membre(pourMembreId) : null;

    /* Un profil d'avant le chiffrement porte encore son code EN CLAIR. Il ne
       doit jamais entrer tel quel dans une invitation (revue du 12/09/2026) :
       on le hache ici, et un administrateur en profite pour corriger le
       profil lui-meme. Un membre qui s'invite seul n'a pas le droit d'ecrire
       la liste des membres : son profil sera corrige a sa prochaine connexion
       (migrerPinSiBesoin). Dans tous les cas, l'invitation ne transporte
       qu'une empreinte, jamais le code. */
    let verrou = cible ? { pinHash: cible.pinHash || null, pinSel: cible.pinSel || null } : null;
    if (cible && !cible.pinHash && cible.pin && CRYPTO_DISPO) {
      const h = await champsPin(cible.pin);
      verrou = { pinHash: h.pinHash, pinSel: h.pinSel };
      if (estAdmin()) { Object.assign(cible, h); await Store.ecrire(["membres"]); }
    }

    const inv = {
      jeton: codeInvitation(),
      famille: etat.famille.code,
      nomFamille: etat.famille.nom,
      pour: cible ? cible.id : "nouveau",
      profil: cible ? {
        id: cible.id, prenom: cible.prenom, emoji: cible.emoji || "🙂",
        role: cible.role || "membre",
        pinHash: verrou.pinHash, pinSel: verrou.pinSel,
        pin: null
      } : null,
      profilRole: cible ? (cible.role || "membre") : "",
      creeePar: moi.id,
      creeeLe: Date.now(),
      expireLe: Date.now() + (joursValidite || 7) * 86400000,
      utilisee: false,
      utiliseeLe: null
    };
    const ok = await Store.creerInvitation(inv);
    if (!ok) {
      /* Un membre qui s'invite lui-même se heurte au serveur tant que les
         règles Firebase n'ont pas été republiées. On le dit clairement,
         avec le chemin de secours, au lieu d'un message technique. */
      toast(estAdmin()
        ? "Invitation refusée : règles Firebase à vérifier"
        : "Refusé par le serveur — demandez le code à un administrateur");
      return null;
    }
    return inv;
  },

  lien(jeton) {
    const base = location.origin + location.pathname;
    return base + "?invitation=" + jeton;
  },

  /* Accepte tout ce qu'on peut lui donner : un lien collé, un code tapé avec
     ou sans tirets, en minuscules, avec des espaces. Les invitations créées
     avant le passage aux codes courts (48 caractères hexadécimaux) restent
     valables : c'est la longueur qui distingue les deux formats. */
  extraireJeton(texte) {
    const t = (texte || "").trim();
    const dansLien = t.match(/invitation=([A-Za-z0-9-]+)/);
    const brut = dansLien ? dansLien[1] : t;
    const nu = brut.replace(/[^A-Za-z0-9]/g, "");
    /* Ancien format : identifiant hexadécimal, sensible à la casse. */
    if (/^[a-f0-9]{32,}$/i.test(nu)) return nu.toLowerCase();
    const code = nu.toUpperCase();
    return /^[A-Z2-9]{12}$/.test(code) ? code : null;
  },

  /* On ne lit QUE l'invitation : la famille n'est pas encore lisible pour cet
     appareil, et c'est justement ce qui la protège. */
  async valider(jeton) {
    const inv = await Store.lireInvitation(jeton);
    if (!inv) {
      return {
        ok: false,
        message: Store.derniereErreur
          ? "Impossible de lire l'invitation (connexion ?)."
          : "Cette invitation n'existe pas ou a été supprimée."
      };
    }
    /* Deja utilisee ? Une seule exception : si c'est CET appareil qui l'a
       reservee. L'entree a du echouer juste apres (reseau coupe, page fermee)
       et il faut pouvoir reprendre, sinon la personne se retrouve enfermee
       dehors avec un code mort. */
    if (inv.utilisee && inv.utiliseePar !== Store.uid) {
      return { ok: false, message: "Cette invitation a déjà été utilisée." };
    }
    if (inv.expireLe && inv.expireLe < Date.now()) return { ok: false, message: "Cette invitation a expiré." };
    /* Un appareil DEJA inscrit dans cette famille n'accepte pas d'invitation
       pour elle. Sinon il se rangeait sous le profil invite, a la place du
       sien — et un administrateur perdait ainsi ses droits : c'est arrive le
       10/09/2026, en ouvrant l'invitation d'un membre dans la meme fenetre
       privee que celle ou la tribu avait ete creee. */
    const deja = await Store.profilDeCetAppareil(inv.famille);
    if (deja) {
      /* L'écran d'invitation s'en sert pour RAMENER l'appareil dans sa tribu
         (données effacées, tribu oubliée…) sans rien écrire : refuser
         simplement laissait la personne dans une impasse (11/09/2026). */
      return {
        ok: false, dejaMembre: true, code: inv.famille, invitation: inv,
        message: "Cet appareil fait déjà partie de la tribu « " + deja.nomFamille + " », comme « " +
          deja.prenom + " ». Une invitation sert à faire entrer un AUTRE appareil : ouvrez-la " +
          "sur le téléphone de la personne invitée."
      };
    }
    return { ok: true, invitation: inv };
  }
};

/* ============ Remise à niveau des recettes d'une famille existante ============

   Les plats fournis sont recopiés dans la famille le jour de sa création :
   les améliorations apportées ensuite au fichier `recettes.js` ne les
   atteignent donc jamais. Cette fonction complète ce qui manque — et
   UNIQUEMENT ce qui manque, sans jamais écraser ce que la famille a saisi. */

const UNITES_CONNUES = {
  "g": "g", "gr": "g", "gramme": "g", "grammes": "g",
  "kg": "kg", "kilo": "kg", "kilos": "kg",
  "ml": "ml", "cl": "cl", "l": "l", "litre": "l", "litres": "l",
  "boite": "boîte(s)", "boites": "boîte(s)", "boîte": "boîte(s)", "boîtes": "boîte(s)",
  "paquet": "paquet(s)", "paquets": "paquet(s)",
  "pot": "pot(s)", "pots": "pot(s)",
  "bocal": "bocal(aux)", "bocaux": "bocal(aux)",
  "sachet": "sachet(s)", "sachets": "sachet(s)",
  "tranche": "tranche(s)", "tranches": "tranche(s)",
  "bouquet": "bouquet(s)", "bouquets": "bouquet(s)",
  "branche": "branche(s)", "branches": "branche(s)",
  "gousse": "gousse(s)", "gousses": "gousse(s)",
  "tete": "tête(s)", "tête": "tête(s)", "têtes": "tête(s)",
  "buche": "bûche(s)", "bûche": "bûche(s)", "bûches": "bûche(s)",
  "morceau": "morceau(x)", "morceaux": "morceau(x)",
  "pincee": "pincée(s)", "pincée": "pincée(s)", "pincées": "pincée(s)",
  "c. à soupe": "c. à soupe", "c. a soupe": "c. à soupe",
  "c. à café": "c. à café", "c. a cafe": "c. à café"
};
function normaliserUnite(txt) {
  const t = String(txt || "").trim().toLowerCase();
  if (!t) return "";
  if (UNITES.indexOf(txt) !== -1) return txt;          // déjà au bon format
  return UNITES_CONNUES[t] !== undefined ? UNITES_CONNUES[t] : null;
}

function reparerRecettes() {
  const reference = new Map((window.RECETTES_DEPART || [])
    .map((r) => [r.nom.toLowerCase().trim(), r]));
  let saisonsAjoutees = 0;
  let unitesSeparees = 0;
  let etapesAjoutees = 0;
  let ingredientsAjoutes = 0;

  etat.recettes.forEach((r) => {
    /* Saisons absentes : on reprend celles du plat de référence, s'il existe.
       Une recette maison reste « toute l'année » tant que rien n'est coché. */
    const ref = reference.get(String(r.nom || "").toLowerCase().trim());
    if (r.saisons === undefined) {
      r.saisons = ref ? (ref.saisons || []).slice() : [];
      if (r.saisons.length) saisonsAjoutees++;
    }
    if (r.thermomix === undefined) r.thermomix = !!(ref && ref.thermomix);
    if (r.etapes === undefined) {
      r.etapes = ref ? (ref.etapes || []).slice() : [];
      if (r.etapes.length) etapesAjoutees++;
    }
    /* Ingrédient oublié dans une recette fournie : plusieurs d'entre elles
       farinaient la viande ou sucraient la pâte sans que ce soit dans la
       liste. Ce n'est pas qu'une coquille : les filtres « sans gluten » et
       « peu de sucre » s'y fiaient et donnaient une réponse fausse.
       On AJOUTE seulement, jamais on ne modifie ni ne retire : vos propres
       corrections sur une recette restent intactes. */
    if (ref && Array.isArray(r.ingredients)) {
      const presents = new Set(r.ingredients.map((i) =>
        String((i && i.nom) || "").toLowerCase().trim()));
      (ref.ingredients || []).forEach((i) => {
        const cle = String(i.nom || "").toLowerCase().trim();
        if (!cle || presents.has(cle)) return;
        r.ingredients.push({ nom: i.nom, qte: i.qte, unite: i.unite, rayon: i.rayon });
        presents.add(cle);
        ingredientsAjoutes++;
      });
    }

    /* Quantité et unité collées : « 800 g » -> 800 + g. En cas de doute sur
       l'unité, on ne touche à rien : mieux vaut l'ancien format qu'une perte. */
    (r.ingredients || []).forEach((i) => {
      if (i.unite !== undefined && i.unite !== null) return;
      const m = String(i.qte || "").trim().match(/^([0-9]+(?:[.,][0-9]+)?)\s*(.*)$/);
      if (!m) return;
      const u = normaliserUnite(m[2]);
      if (u === null) return;
      i.qte = m[1];
      i.unite = u;
      unitesSeparees++;
    });
  });

  return {
    saisons: saisonsAjoutees, unites: unitesSeparees, etapes: etapesAjoutees,
    ingredients: ingredientsAjoutes
  };
}

/* Les plats fournis avec l'application que cette famille n'a pas (encore).
   On ne les ajoute JAMAIS d'office : une famille a pu en supprimer exprès. */
function recettesManquantes() {
  const presentes = new Set(etat.recettes.map((r) => String(r.nom || "").toLowerCase().trim()));
  return (window.RECETTES_DEPART || [])
    .filter((r) => !presentes.has(r.nom.toLowerCase().trim()));
}

function ajouterRecettesManquantes() {
  const aAjouter = recettesManquantes();
  aAjouter.forEach((r) => {
    etat.recettes.push(Object.assign({ id: id(), origine: "depart" }, JSON.parse(JSON.stringify(r))));
  });
  if (aAjouter.length) sauver("recettes");
  return aAjouter.length;
}

/* ---------------------- Notifications de mise à jour ----------------------
   Ce que l'application propose de nouveau et que cette famille n'a pas encore.
   Réservé aux administrateurs : eux seuls peuvent y donner suite. */
/* Ce qui manque au cahier de recettes de cette famille.
   UNE SEULE fonction fait ce constat : la pastille de notification et la
   fenêtre de mise à jour s'y réfèrent toutes les deux. Quand elles comptaient
   chacune de leur côté, elles finissaient par se contredire — la pastille
   restait allumée alors que la fenêtre annonçait « rien à faire ». */
function diagnosticRecettes() {
  const reference = new Map((window.RECETTES_DEPART || [])
    .map((r) => [r.nom.toLowerCase().trim(), r]));
  const manqueChamp = (r) =>
    r.saisons === undefined || r.thermomix === undefined || r.etapes === undefined;
  const manqueUnite = (r) =>
    (r.ingredients || []).some((i) => i.unite === undefined || i.unite === null);
  /* Un ingrédient présent dans la recette d'origine mais absent de la copie
     de la famille : c'est ce qui faussait les filtres sans gluten et sucre. */
  const manqueIngredient = (r) => {
    const ref = reference.get(String(r.nom || "").toLowerCase().trim());
    if (!ref) return false;
    const presents = new Set((r.ingredients || []).map((i) =>
      String((i && i.nom) || "").toLowerCase().trim()));
    return (ref.ingredients || []).some((i) =>
      !presents.has(String(i.nom || "").toLowerCase().trim()));
  };

  const aCompleter = etat.recettes.filter((r) =>
    manqueChamp(r) || manqueUnite(r) || manqueIngredient(r));
  const d = {
    aCompleter: aCompleter.length,
    saisons: etat.recettes.filter((r) => r.saisons === undefined).length,
    etapes: etat.recettes.filter((r) => r.etapes === undefined).length,
    unites: etat.recettes.reduce((n, r) =>
      n + (r.ingredients || []).filter((i) => i.unite === undefined || i.unite === null).length, 0),
    ingredients: etat.recettes.filter(manqueIngredient).length,
    nouvelles: recettesManquantes()
  };
  d.rienAFaire = !d.aCompleter && !d.nouvelles.length;
  return d;
}

function misesAJour() {
  if (!moi || !estAdmin()) return [];
  const d = diagnosticRecettes();
  if (d.rienAFaire) return [];

  const details = [];
  if (d.nouvelles.length) details.push(d.nouvelles.length + " nouveau" +
    (d.nouvelles.length > 1 ? "x" : "") + " plat" + (d.nouvelles.length > 1 ? "s" : "") + " à ajouter");
  if (d.aCompleter) details.push(d.aCompleter + " recette" +
    (d.aCompleter > 1 ? "s" : "") + " à compléter");

  return [{
    id: "recettes", emoji: "📖", titre: "Cahier de recettes",
    detail: details.join(" • "), action: "recettes-maj"
  }];
}

/* Lancée une fois par famille, par un administrateur, au démarrage. */
async function majRecettesSiBesoin() {
  if (!estAdmin()) return;
  const cle = "tribu:recettesMaj:" + (etat.famille.code || "?");
  if (localStorage.getItem(cle)) return;
  const besoin = diagnosticRecettes().aCompleter > 0;
  localStorage.setItem(cle, "1");
  if (!besoin) return;
  const bilan = reparerRecettes();
  const parts = [];
  if (bilan.saisons) parts.push(bilan.saisons + " saison" + (bilan.saisons > 1 ? "s" : ""));
  if (bilan.etapes) parts.push(bilan.etapes + " déroulé" + (bilan.etapes > 1 ? "s" : ""));
  if (bilan.unites) parts.push(bilan.unites + " unité" + (bilan.unites > 1 ? "s" : ""));
  if (bilan.ingredients) parts.push(bilan.ingredients + " ingrédient" +
    (bilan.ingredients > 1 ? "s" : "") + " oublié" + (bilan.ingredients > 1 ? "s" : ""));
  if (parts.length) {
    await Store.ecrire(["recettes"]);
    rendre();
    toast("Recettes mises à jour : " + parts.join(", "));
  }
}

/* ==================== Partage de recettes entre familles ==================== */

const Partage = {

  /* Ce qui part vraiment dans le catalogue commun : la recette, et le seul
     nom de la tribu, plus son repere technique (familleRef) pour pouvoir la
     retirer — il ne donne aucun acces. Ni prenoms, ni points (revue du 12/09/2026). */
  ficheDe(r) {
    return {
      id: id(),
      nom: r.nom,
      emoji: r.emoji || "🍽️",
      type: r.type || "consistant",
      vegetarien: !!r.vegetarien,
      rapide: !!r.rapide,
      saisons: (r.saisons || []).slice(0, 4),
      etapes: (r.etapes || []).slice(0, 20),
      /* On ne publie pas un lien qu'on refuserait d'ouvrir. */
      lien: lienExterne(r.lien),
      ingredients: (r.ingredients || []).slice(0, 40).map((i) => ({
        nom: i.nom, qte: i.qte || "", unite: i.unite || "", rayon: i.rayon || "Autre"
      })),
      parFamille: etat.famille.nom || "Une famille",
      familleRef: etat.famille.code,      // sert à pouvoir retirer sa publication
      publieLe: new Date().toISOString(),
      version: VERSION
    };
  },

  async publier(recetteId) {
    const r = etat.recettes.find((x) => x.id === recetteId);
    if (!r) return false;
    if (Store.mode !== "nuage") {
      toast("Le partage demande la connexion familiale (Firebase)");
      return false;
    }
    if (!estRecettePerso(r)) {
      toast("Seules vos propres recettes peuvent être partagées");
      return false;
    }
    const fiche = this.ficheDe(r);
    const ok = await Store.publierRecette(fiche);
    if (!ok) { toast("Publication refusée par le serveur"); return false; }
    r.partageId = fiche.id;
    sauver("recettes");
    return true;
  },

  async retirer(recetteId) {
    const r = etat.recettes.find((x) => x.id === recetteId);
    if (!r || !r.partageId) return false;
    const ok = await Store.retirerRecettePartagee(r.partageId);
    if (!ok) { toast("Retrait impossible"); return false; }
    r.partageId = null;
    sauver("recettes");
    return true;
  },

  /* Recopie une recette du catalogue dans la bibliothèque de la famille. */
  importer(fiche) {
    const existe = etat.recettes.some((r) =>
      r.nom.toLowerCase().trim() === String(fiche.nom).toLowerCase().trim());
    if (existe) { toast("Vous avez déjà un plat de ce nom"); return false; }
    etat.recettes.push({
      id: id(),
      nom: fiche.nom, emoji: fiche.emoji || "🍽️", type: fiche.type || "consistant",
      vegetarien: !!fiche.vegetarien, rapide: !!fiche.rapide,
      saisons: (fiche.saisons || []).slice(0, 4),
      etapes: (fiche.etapes || []).slice(0, 20),
      /* Une fiche venue d'ailleurs : son lien est filtre avant d'entrer. */
      lien: lienExterne(fiche.lien),
      ingredients: (fiche.ingredients || []).map((i) => ({
        nom: i.nom, qte: i.qte || "", unite: i.unite || "", rayon: i.rayon || "Autre"
      })),
      origine: "importee",
      deQui: fiche.parFamille || "",
      creeLe: new Date().toISOString()
    });
    sauver("recettes");
    return true;
  }
};

/* ============================ 8. Generateur de menus ============================ */

/* --- De quoi est fait un plat -------------------------------------------
   Le rayon des ingrédients est ce qu'il y a de plus sûr (Boucherie,
   Poissonnerie), mais un thon en boîte se range en épicerie : on regarde
   donc aussi les noms, en MOTS ENTIERS pour ne pas confondre « échalotte »
   et « lotte ». Un plat qui contient les deux compte comme poisson : c'est
   celui-là qu'on cherche à placer dans la semaine. */
const MOTS_POISSON = ["poisson", "saumon", "thon", "cabillaud", "colin", "merlu",
  "lieu noir", "truite", "sardine", "maquereau", "anchois", "dorade", "sole",
  "haddock", "crevette", "moule", "gambas", "crabe", "surimi", "calamar",
  "encornet", "saint jacques", "bulot", "seiche", "eglefin", "rouget", "lotte",
  "hareng", "poulpe", "espadon", "julienne de la mer", "fruits de mer"];
const MOTS_VIANDE = ["viande", "boeuf", "poulet", "volaille", "dinde", "porc",
  "veau", "agneau", "canard", "lapin", "jambon", "lardon", "saucisse", "saucisson",
  "merguez", "chorizo", "bacon", "steak", "escalope", "magret", "roti", "gigot",
  "paleron", "chipolata", "knacki", "andouille", "boudin", "pancetta",
  "charcuterie", "gesier", "tripe", "onglet", "bavette", "cuisse", "aiguillette"];
/* Un bouillon de bœuf ne fait pas un repas de viande : on ne le compte pas. */
const INGREDIENTS_NEUTRES = ["bouillon", "cube", "fond"];

function ingredientCompte(ing) {
  const mots = motsDe(ing && ing.nom);
  return !INGREDIENTS_NEUTRES.some((m) => contientProduit(mots, m));
}
function citeUnProduit(r, liste) {
  return (r.ingredients || []).some((ing) => {
    if (!ingredientCompte(ing)) return false;
    const mots = motsDe(ing.nom);
    return liste.some((p) => contientProduit(mots, p));
  });
}

/* "vege" | "poisson" | "viande" | "autre" (œufs, fromage, pâtes...)
   Gardé en mémoire : le générateur pose la question pour chaque plat à
   chaque case de la semaine — 353 x 14 fois. Sans cela, cette seule
   fonction coûtait un demi-quart de seconde par génération. La table est
   liée aux OBJETS recettes et se vide donc d'elle-même au rechargement ;
   la signature des ingrédients la remet à jour si on modifie la recette. */
const _cacheCategorie = new WeakMap();
function categorieRepas(r) {
  if (!r) return "autre";
  const cle = (r.vegetarien ? "v|" : "") +
    (r.ingredients || []).map((i) => (i && i.nom) + "/" + (i && i.rayon)).join("|");
  const vu = _cacheCategorie.get(r);
  if (vu && vu.cle === cle) return vu.cat;

  let cat = "autre";
  const ing = r.ingredients || [];
  if (r.vegetarien) cat = "vege";
  else if (ing.some((i) => i.rayon === "Poissonnerie") || citeUnProduit(r, MOTS_POISSON)) cat = "poisson";
  else if (ing.some((i) => i.rayon === "Boucherie") || citeUnProduit(r, MOTS_VIANDE)) cat = "viande";
  _cacheCategorie.set(r, { cle: cle, cat: cat });
  return cat;
}
const CATEGORIES_REPAS = [
  { val: "poisson", nom: "Poisson", emoji: "🐟" },
  { val: "viande", nom: "Viande", emoji: "🍗" },
  { val: "vege", nom: "Végétarien", emoji: "🥦" }
];
function nomCategorie(val) {
  const c = CATEGORIES_REPAS.find((x) => x.val === val);
  return c ? c.emoji + " " + c.nom.toLowerCase() : "autre";
}

/* ======================= Profils de cuisine « santé » =======================

   ATTENTION, ET C'EST DIT AUSSI DANS L'APPLICATION :
   ce ne sont PAS des régimes médicaux. Ce sont des FAÇONS DE CUISINER,
   déduites des ingrédients, qui suivent des recommandations nutritionnelles
   générales et largement admises. Un plat « ❤️ cœur » n'est pas un
   médicament, et une portion démesurée reste une portion démesurée.
   Ce qui compte vraiment — les quantités, la journée entière, le traitement
   en cours — l'application ne le connaît pas.

   Le calcul est fait à partir des ingrédients, jamais saisi à la main : il
   suit donc automatiquement vos propres recettes et celles que vous importez.
   ========================================================================= */

/* --- Le vocabulaire : à quels groupes appartient un ingrédient ---
   `mots` se compare en MOTS ENTIERS (voir contientProduit) ; `sauf` sert aux
   pièges — une « pâte de curry » n'est pas un féculent, un « bouillon de
   bœuf » n'est pas de la viande. */
const GROUPES_ALIMENTS = {
  poissonGras: { mots: ["saumon", "sardine", "maquereau", "hareng", "truite", "anchois", "thon"] },
  poisson: { mots: MOTS_POISSON },
  fruitsMer: {
    mots: ["crevette", "moule", "saint jacques", "calamar", "encornet", "crabe",
      "gambas", "bulot", "seiche", "poulpe", "fruits de mer"]
  },
  oeuf: { mots: ["oeuf"] },
  volaille: { mots: ["poulet", "dinde", "volaille"], sauf: ["bouillon", "cube", "fond"] },
  viandeRouge: {
    mots: ["boeuf", "agneau", "porc", "veau", "bavette", "steak", "paleron",
      "onglet", "magret", "canard", "gigot", "jarret"],
    sauf: ["bouillon", "cube", "fond"]
  },
  charcuterie: {
    mots: ["lardon", "jambon", "saucisse", "saucisson", "chorizo", "bacon",
      "merguez", "andouille", "boudin", "pancetta", "petit sale", "charcuterie"]
  },
  legumineuses: {
    mots: ["lentille", "pois chiche", "haricot blanc", "haricot rouge", "flageolet",
      "feve", "pois casse", "falafel", "houmous"]
  },
  cerealesCompletes: {
    mots: ["boulgour", "quinoa", "riz complet", "pain complet", "farine complete",
      "avoine", "sarrasin", "epeautre", "millet", "pate complete", "pates completes"]
  },
  feculentsRaffines: {
    mots: ["riz", "pate", "spaghetti", "tagliatelle", "nouille", "vermicelle",
      "semoule", "pain", "farine", "gnocchi", "lasagne", "chapelure",
      "pomme de terre", "puree", "polenta", "tortilla", "wrap", "frite",
      "couscous", "baguette", "chips"],
    sauf: ["pate de curry", "pate de miso", "riz complet", "pain complet",
      "farine complete", "pate a tartiner", "pate complete", "pates completes"]
  },
  sucres: {
    mots: ["sucre", "miel", "sirop", "confiture", "chocolat", "caramel", "nutella",
      "pepites de chocolat", "cassonade", "sucre glace", "bonbon", "biscuit",
      "speculoos", "pate a tartiner"],
    /* Le sucre des fruits n'est pas du sucre ajouté : une compote sans sucre
       reste une compote sans sucre. */
    sauf: ["sucrine", "patate douce", "petits pois"]
  },
  graissesSaturees: {
    mots: ["beurre", "creme", "fromage", "emmental", "gruyere", "parmesan",
      "mozzarella", "feta", "chevre", "ricotta", "gorgonzola", "mascarpone",
      "raclette", "reblochon", "comte", "lait de coco"]
  },
  laitier: {
    mots: ["lait", "creme", "beurre", "fromage", "yaourt", "emmental", "gruyere",
      "parmesan", "mozzarella", "feta", "chevre", "ricotta", "gorgonzola",
      "mascarpone", "raclette", "reblochon", "comte"],
    sauf: ["lait de coco", "lait de soja", "lait d amande"]
  },
  huileOlive: { mots: ["huile d olive"] },
  oleagineux: { mots: ["noix", "amande", "noisette", "pignon", "cacahuete", "graine"] },
  /* Volontairement court : le thym d'un bouquet garni ne fait pas un plat
     anti-inflammatoire. On ne garde que ce qui est utilisé en quantité. */
  epicesAntiInflam: { mots: ["curcuma", "gingembre", "cannelle"] },
  /* Ce qui apporte beaucoup de sel sans qu'on y pense. */
  selRiche: {
    mots: ["charcuterie", "lardon", "jambon", "saucisse", "saucisson", "chorizo",
      "bacon", "merguez", "andouille", "boudin", "pancetta", "petit sale",
      "sauce soja", "bouillon", "cube", "olive", "cape", "anchois", "miso",
      "morue", "surimi", "moutarde", "fromage", "feta", "parmesan", "emmental",
      "gruyere", "roquefort", "raclette", "comte", "mozzarella", "chevre",
      "gorgonzola", "reblochon", "bleu", "cheddar", "brie", "camembert",
      "pecorino", "mimolette", "haddock", "saumon fume", "tapenade"],
    sauf: ["huile d olive"]
  },
  iode: {
    mots: MOTS_POISSON.concat(["algue", "nori", "lait", "yaourt", "oeuf", "fromage"])
  },
  selenium: {
    mots: ["noix", "graine", "oeuf", "thon", "sardine", "champignon", "riz complet",
      "lentille", "poisson", "saumon"]
  },
  cruciferes: {
    mots: ["chou", "chou fleur", "brocoli", "navet", "radis", "roquette",
      "cresson", "rutabaga", "colza"]
  },
  soja: { mots: ["tofu", "sauce soja", "lait de soja", "edamame", "miso"] },
  /* Le gluten se cache : la sauce soja est faite de blé, les bouillons cubes
     en contiennent presque toujours. Mieux vaut signaler de trop que de
     rassurer à tort — c'est dit dans la fenêtre d'explication. */
  gluten: {
    mots: ["farine", "pain", "pate", "chapelure", "semoule", "boulgour", "couscous",
      "spaghetti", "tagliatelle", "nouille", "lasagne", "gnocchi", "epeautre",
      "biere", "tortilla", "wrap", "vermicelle", "sauce soja", "bouillon", "cube",
      "macaroni", "coquillette", "penne", "fusilli", "farfalle", "rigatoni",
      "tortellini", "cannelloni", "torsade", "papillon", "linguine", "orzo",
      "seitan", "orge", "seigle", "biscuit", "biscotte", "brioche", "croissant",
      "crepe", "gaufre", "genoise", "speculoos", "ravioles", "raviole"],
    sauf: ["pate de curry", "pate de miso", "vermicelle de riz", "farine de riz",
      "pate a tartiner", "bouillon de legumes maison"]
  }
};

/* Les listes de produits, découpées une fois pour toutes au chargement. */
const _MOTS_GROUPES = {};
Object.keys(GROUPES_ALIMENTS).forEach((cle) => {
  const g = GROUPES_ALIMENTS[cle];
  _MOTS_GROUPES[cle] = { mots: (g.mots || []).map(motsDe), sauf: (g.sauf || []).map(motsDe) };
});

/* Tous les groupes d'un ingrédient en UN passage, gardés par nom : « Oignon »
   revient dans quarante recettes, on ne l'analyse qu'une fois. Sans cela, le
   classement des 175 plats prenait presque une demi-seconde. */
const _cacheIngredient = new Map();
function groupesDe(ing) {
  const nom = String((ing && ing.nom) || "");
  const vu = _cacheIngredient.get(nom);
  if (vu) return vu;
  const mots = motsDe(nom);
  const trouves = new Set();
  Object.keys(_MOTS_GROUPES).forEach((cle) => {
    const g = _MOTS_GROUPES[cle];
    if (g.sauf.some((p) => suiteDeMots(mots, p))) return;
    if (g.mots.some((p) => suiteDeMots(mots, p))) trouves.add(cle);
  });
  _cacheIngredient.set(nom, trouves);
  return trouves;
}

/* Le rayon dit parfois ce que le nom ne dit pas : tout ce qui vient du rayon
   fruits et légumes est du végétal frais, sans avoir à lister le monde. */
function ingredientEstDe(ing, cle) {
  if (!ing || !ing.nom) return false;
  return groupesDe(ing).has(cle);
}
function estVegetalFrais(ing) {
  return !!ing && ing.rayon === "Fruits & légumes";
}
function compter(r, cle) {
  return (r.ingredients || []).filter((i) => ingredientEstDe(i, cle)).length;
}

/* --- Les profils ---
   `pour` = ce qui fait monter la note, `contre` = ce qui la fait descendre,
   `interdit` = un seul ingrédient suffit à écarter le plat.
   `seuil` = la note à atteindre. Les valeurs ont été réglées en regardant ce
   que cela retenait vraiment dans le cahier : un profil qui garde tout ne
   sert à rien, un profil qui ne garde rien non plus. */
const PROFILS_SANTE = [
  {
    val: "coeur", nom: "Cœur & cholestérol", emoji: "❤️",
    resume: "Moins de graisses saturées, plus de poisson, de légumineuses et d'huile d'olive.",
    detail: "Ce qui est admis pour le cholestérol : remplacer les graisses saturées " +
      "(beurre, crème, fromage en quantité, charcuterie) par des graisses insaturées " +
      "(huile d'olive, oléagineux, poisson gras), et donner plus de place aux fibres " +
      "— légumineuses, légumes, céréales complètes.",
    pour: { poissonGras: 2, poisson: 1, legumineuses: 1.5, cerealesCompletes: 1, huileOlive: 1, oleagineux: 1, vegetalFrais: 0.4 },
    contre: { charcuterie: 2.5, viandeRouge: 1.5, graissesSaturees: 1.2 },
    seuil: 2
  },
  {
    val: "glycemie", nom: "Glycémie", emoji: "🩸",
    resume: "Des fibres et des protéines plutôt que des féculents raffinés et du sucre.",
    detail: "Ce qui fait monter la glycémie, ce sont les glucides rapides pris seuls. " +
      "Les légumineuses, les légumes et les céréales complètes ralentissent l'absorption ; " +
      "une protéine dans l'assiette aussi. Le sucre ajouté et les féculents raffinés " +
      "servis seuls font l'inverse. Attention : la QUANTITÉ compte autant que le plat.",
    pour: { legumineuses: 2, cerealesCompletes: 1.5, vegetalFrais: 0.5, poisson: 1, volaille: 1, oeuf: 1 },
    contre: { sucres: 2.5, feculentsRaffines: 1.2 },
    seuil: 2
  },
  {
    val: "antiinflam", nom: "Anti-inflammatoire", emoji: "🌿",
    resume: "Cuisine méditerranéenne : poisson gras, huile d'olive, légumes, épices.",
    detail: "L'alimentation de type méditerranéen est celle qui est le plus souvent " +
      "conseillée en cas d'arthrose : poisson gras (oméga-3), huile d'olive, légumes, " +
      "fruits à coque, curcuma et gingembre ; moins de charcuterie, de viande rouge et " +
      "de sucre. Les preuves sont réelles sur le plan général, plus modestes sur " +
      "l'arthrose elle-même : c'est une aide, pas un traitement.",
    pour: { poissonGras: 2.5, huileOlive: 1.2, oleagineux: 1, epicesAntiInflam: 1.2, vegetalFrais: 0.5, legumineuses: 1 },
    contre: { charcuterie: 2.5, viandeRouge: 1.5, sucres: 1.5, graissesSaturees: 0.8 },
    seuil: 2
  },
  {
    val: "iodeSelenium", nom: "Iode & sélénium", emoji: "🦋",
    resume: "Les plats riches en iode et en sélénium, les deux minéraux de la thyroïde.",
    detail: "La thyroïde a besoin d'iode pour fabriquer ses hormones, et de sélénium " +
      "pour les transformer. Ce profil met en avant les plats qui en apportent : " +
      "poisson, fruits de mer, œufs, produits laitiers, fruits à coque.\n\n" +
      "⚠️ Ce n'est PAS un régime « thyroïde ». Une hypothyroïdie et une hyperthyroïdie " +
      "demandent des choses opposées sur l'iode. Demandez à votre médecin dans quel " +
      "sens vous en servir. À signaler aussi : les crucifères crus en grande quantité " +
      "et le soja peuvent interférer — un point à évoquer avec lui, pas de quoi " +
      "supprimer un chou du menu.",
    /* Le poisson et les fruits de mer d'abord : ce sont eux qui en apportent
       vraiment. Les laitiers comptent peu, sinon un gratin dauphinois
       ressortirait comme un plat de la thyroïde — ce serait ridicule. */
    pour: { poisson: 2, fruitsMer: 2, oeuf: 1.2, laitier: 0.4, oleagineux: 0.8, selenium: 0.6 },
    contre: {},
    /* Il faut une vraie source, pas seulement un fond de crème : sans poisson,
       fruits de mer ni œuf, un plat n'entre pas dans ce profil. */
    requis: ["poisson", "fruitsMer", "oeuf"],
    seuil: 2.6
  },
  {
    val: "sportif", nom: "Sportif", emoji: "💪",
    resume: "Une vraie source de protéines, des féculents pour l'énergie, et les minéraux dépensés à l'effort.",
    detail: "Après un effort, le corps a besoin de deux choses : des protéines pour " +
      "réparer le muscle, et des glucides pour refaire ses réserves. Ce profil met " +
      "donc en avant les plats qui associent une vraie source de protéines — viande, " +
      "volaille, poisson, œufs, légumineuses — à des féculents, et qui apportent au " +
      "passage les minéraux que l'entraînement fait perdre : le fer de la viande " +
      "rouge et des lentilles, le magnésium des fruits à coque et des céréales " +
      "complètes, le calcium des laitiers.\n\n" +
      "⚠️ Ce n'est pas un plan nutritionnel. Les besoins d'un joggeur du dimanche et " +
      "ceux d'un athlète en préparation n'ont rien à voir, et ce qui compte le plus — " +
      "les quantités, le moment du repas, la boisson — l'application ne le connaît pas.",
    /* Les féculents comptent POUR ici, alors qu'ils comptent contre ailleurs :
       c'est le carburant, et c'est bien la différence de ce profil. */
    pour: {
      volaille: 2, poisson: 1.8, legumineuses: 1.8, oeuf: 1.5, fruitsMer: 1.5,
      viandeRouge: 1.8, cerealesCompletes: 1.2, laitier: 0.5, oleagineux: 0.8,
      feculentsRaffines: 0.4, vegetalFrais: 0.2
    },
    contre: { sucres: 1.5, charcuterie: 1 },
    /* Un gratin de courgettes à la crème n'est pas un plat de sportif : sans
       source franche de protéines, le plat n'entre pas dans le profil. */
    requis: ["volaille", "poisson", "fruitsMer", "oeuf", "viandeRouge", "legumineuses"],
    /* Réglé en mesurant sur le cahier : à 2,8 le profil gardait un plat sur
       trois et ne triait plus rien ; à 3,5 il écartait des plats évidents.
       À 3,2 il en retient 78 sur 367, soit la même proportion que les autres
       façons de cuisiner (cœur 91, anti-inflammatoire 100, glycémie 78). */
    seuil: 3.2
  },
  {
    val: "peuDeSel", nom: "Peu de sel", emoji: "🧂", famille: "eviter",
    resume: "Aucun ingrédient naturellement très salé : ni charcuterie, ni fromage, ni bouillon cube.",
    detail: "Le sel de la salière n'est qu'une petite part de ce qu'on avale : " +
      "l'essentiel vient de la charcuterie, des fromages, des bouillons cubes, " +
      "de la sauce soja, des olives et des conserves. Ce profil ne retient que les " +
      "plats qui n'en contiennent aucun — à vous de saler raisonnablement ensuite.",
    pour: {}, contre: {}, interdit: ["selRiche"], seuil: 0
  },
  {
    val: "peuDeSucre", nom: "Peu de sucre", emoji: "🍬", famille: "eviter",
    resume: "Aucun sucre ajouté : ni sucre, ni miel, ni sirop, ni chocolat.",
    detail: "Écarte les plats qui contiennent du sucre ajouté sous une forme ou " +
      "une autre : sucre, cassonade, miel, sirop, confiture, chocolat, pâte à " +
      "tartiner, biscuits.\n\n" +
      "Ce n'est pas « sans sucre » : les fruits, le lait et les féculents en " +
      "contiennent naturellement, et c'est très bien ainsi. Une compote de pommes " +
      "sans sucre ajouté reste sucrée — elle l'est par la pomme. Pour la glycémie, " +
      "regardez plutôt le profil 🩸, qui tient compte de l'ensemble du plat.",
    pour: {}, contre: {}, interdit: ["sucres"], seuil: 0
  },
  {
    val: "sansGluten", nom: "Sans gluten", emoji: "🌾", famille: "eviter",
    resume: "Aucun ingrédient à base de blé, d'orge ou de seigle.",
    detail: "Écarte tout ce qui contient du blé, de l'orge ou du seigle : farine, " +
      "pain, pâtes, semoule, boulgour, chapelure, pâte à tarte…\n\n" +
      "⚠️ Ce tri se fait sur le NOM des ingrédients. Il ne remplace pas la lecture " +
      "des étiquettes : la sauce soja est faite de blé, les bouillons cubes en " +
      "contiennent presque toujours, et beaucoup de produits industriels en " +
      "renferment sans le dire dans leur nom. En cas de maladie cœliaque, " +
      "vérifiez toujours l'emballage.",
    pour: {}, contre: {}, interdit: ["gluten"], seuil: 0
  },
  {
    val: "sansLactose", nom: "Sans lactose", emoji: "🥛", famille: "eviter",
    resume: "Aucun produit laitier : ni lait, ni beurre, ni crème, ni fromage.",
    detail: "Écarte tous les produits laitiers. C'est plus strict que « sans " +
      "lactose » au sens propre : le beurre et les fromages affinés (parmesan, " +
      "comté) n'en contiennent presque plus. Si vous les tolérez, ce filtre vous " +
      "privera de plats que vous pourriez manger.\n\n" +
      "⚠️ Comme pour le gluten, le tri se fait sur le nom des ingrédients : " +
      "vérifiez les étiquettes des produits tout prêts.",
    pour: {}, contre: {}, interdit: ["laitier"], seuil: 0
  }
];
/* Deux rangées à l'écran : ce qu'on cherche, et ce qu'on évite. */
function profilsDeFamille(f) {
  return PROFILS_SANTE.filter((p) => (p.famille || "cuisine") === f);
}

function infoProfil(val) {
  return PROFILS_SANTE.find((p) => p.val === val) || null;
}

/* La note d'un plat pour un profil, et les raisons de cette note : c'est ce
   qui permet d'expliquer « pourquoi ce plat » plutôt que de l'asséner. */
function noterProfil(r, profil) {
  const raisons = { pour: [], contre: [], bloque: null };
  let note = 0;

  /* Un dessert n'entre pas dans une façon de cuisiner : des œufs et des
     amandes suffiraient à faire passer un brownie pour un plat de la
     thyroïde. En revanche « sans gluten », « sans lactose » et « peu de
     sel » gardent tout leur sens sur un gâteau — ce sont des faits. */
  if (estDessert(r) && (profil.famille || "cuisine") === "cuisine") {
    return { note: -99, retenu: false, raisons: raisons };
  }

  if ((profil.requis || []).length &&
    !profil.requis.some((cle) => compter(r, cle))) {
    return { note: -99, retenu: false, raisons: raisons };
  }

  (profil.interdit || []).forEach((cle) => {
    const t = (r.ingredients || []).filter((i) => ingredientEstDe(i, cle));
    if (t.length) raisons.bloque = t.map((i) => i.nom);
  });
  if (raisons.bloque) return { note: -99, retenu: false, raisons: raisons };

  Object.keys(profil.pour || {}).forEach((cle) => {
    const n = cle === "vegetalFrais"
      ? (r.ingredients || []).filter(estVegetalFrais).length
      : compter(r, cle);
    if (n) { note += n * profil.pour[cle]; raisons.pour.push(cle); }
  });
  Object.keys(profil.contre || {}).forEach((cle) => {
    const n = compter(r, cle);
    if (n) { note -= n * profil.contre[cle]; raisons.contre.push(cle); }
  });

  return { note: note, retenu: note >= profil.seuil, raisons: raisons };
}

/* Les profils d'un plat. Le calcul coûte cher pour rien si on le refait à
   chaque affichage : on le garde en mémoire tant que les ingrédients ne
   changent pas. La table est associée aux OBJETS recettes, elle disparaît
   donc toute seule quand la famille est rechargée. */
const _cacheProfils = new WeakMap();
function profilsDe(r) {
  if (!r) return [];
  const cle = (r.ingredients || []).map((i) => i && i.nom).join("|");
  const enCache = _cacheProfils.get(r);
  if (enCache && enCache.cle === cle) return enCache.profils;
  const profils = PROFILS_SANTE.filter((p) => noterProfil(r, p).retenu).map((p) => p.val);
  _cacheProfils.set(r, { cle: cle, profils: profils });
  return profils;
}
function aLeProfil(r, val) {
  return profilsDe(r).indexOf(val) !== -1;
}

/* --- Le genre d'un plat -------------------------------------------------
   Une semaine de quatre soupes n'est pas une semaine variée, même si les
   quatre recettes sont différentes. Le générateur n'avait aucune notion de
   « type de plat » : il ne s'interdisait que de répéter la même recette.
   On classe donc grossièrement, d'après le nom — c'est suffisant pour
   éviter la monotonie, et « autre » n'est jamais pénalisé. */
const GENRES_PLAT = [
  { val: "soupe", mots: ["soupe", "veloute", "potage", "gaspacho", "bouillabaisse",
    "minestrone", "consomme"] },
  { val: "salade", mots: ["salade", "taboule", "poke bowl", "buddha bowl", "bowl"] },
  { val: "tarte", mots: ["tarte", "quiche", "pizza", "cake", "clafoutis", "tartelette"] },
  { val: "pates", mots: ["pate", "spaghetti", "tagliatelle", "macaroni", "nouille",
    "lasagne", "gnocchi", "raviole", "penne", "coquillette", "one pot pasta"] },
  { val: "riz", mots: ["riz", "risotto", "paella", "quinoa", "boulgour", "semoule",
    "polenta", "orge", "sarrasin"] },
  { val: "mijote", mots: ["curry", "tajine", "colombo", "dahl", "chili", "mafe",
    "blanquette", "bourguignon", "navarin", "osso buco", "marengo", "pot au feu"] },
  { val: "gratin", mots: ["gratin", "tian", "parmentier", "hachis", "moussaka", "farci"] },
  { val: "poele", mots: ["poelee", "wok", "saute", "brochette", "papillote", "grille"] }
];
/* Le coût du deuxième plat d'un même genre dans la semaine. Réglé à
   l'observation : trop haut, on n'a jamais deux fois des pâtes ; trop bas,
   on retombe sur quatre soupes. */
const PENALITE_GENRE = 4;

/* Le genre est demandé pour CHAQUE recette à CHAQUE case de la semaine :
   353 plats x 14 repas. Sans mise en mémoire, la génération passait de
   270 ms à 710 ms — soit deux à trois secondes sur un téléphone. */
const _cacheGenre = new Map();
function genrePlat(r) {
  const nom = String((r && r.nom) || "");
  const vu = _cacheGenre.get(nom);
  if (vu !== undefined) return vu;
  const mots = motsDe(nom);
  let trouve = "autre";
  for (let i = 0; i < GENRES_PLAT.length && trouve === "autre"; i++) {
    const g = GENRES_PLAT[i];
    for (let j = 0; j < g.mots.length; j++) {
      if (contientProduit(mots, g.mots[j])) { trouve = g.val; break; }
    }
  }
  _cacheGenre.set(nom, trouve);
  return trouve;
}

/* Ce que contient une semaine déjà prévue. C'est le meilleur retour sur les
   nombres demandés au générateur : on voit tout de suite ce qu'on mange. */
function compositionSemaine(cleSem) {
  const c = { poisson: 0, viande: 0, vege: 0, autre: 0, total: 0 };
  Object.keys(etat.repas[cleSem] || {}).forEach((k) => {
    const v = etat.repas[cleSem][k];
    if (!v || !v.recetteId) return;
    const r = etat.recettes.find((x) => x.id === v.recetteId);
    if (!r) return;
    c[categorieRepas(r)]++;
    c.total++;
  });
  return c;
}

/* Part des ingrédients d'un plat que l'on a déjà dans la réserve (0 à 1).
   Sert à proposer en premier ce qui ne demande presque pas de courses. */
function couvertureReserve(r) {
  const ing = (r.ingredients || []).filter((i) => i && i.nom);
  if (!ing.length || !etat.stock.length) return 0;
  let ok = 0;
  ing.forEach((i) => {
    const m = manquePour(i.nom, i.qte, i.unite || "");
    if (m.enStock === null) return;               // pas du tout en réserve
    if (m.connu && m.manque !== null && m.manque > 0) return;  // pas assez
    ok++;
  });
  return ok / ing.length;
}

/* Une étiquette par repas de la semaine, mélangée : c'est ce qui garantit
   « deux poissons » plutôt que « deux poissons si la chance le veut ». */
function repartitionSouhaitee(nb, quotas) {
  const l = [];
  CATEGORIES_REPAS.forEach((c) => {
    const n = quotas[c.val];
    for (let k = 0; k < n && l.length < nb; k++) l.push(c.val);
  });
  const places = l.length;
  while (l.length < nb) l.push("libre");
  for (let i = l.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = l[i]; l[i] = l[j]; l[j] = t;
  }
  return { plan: l, places: places };
}

function recettesUtiliseesRecemment(cleSem, nbSemaines) {
  const vus = new Set();
  const lundi = lundiDeCle(cleSem);
  for (let k = 1; k <= nbSemaines; k++) {
    const d = new Date(lundi); d.setDate(d.getDate() - 7 * k);
    const sem = etat.repas[cleSemaine(d)];
    if (!sem) continue;
    Object.values(sem).forEach((c) => { if (c && c.recetteId) vus.add(c.recetteId); });
  }
  return vus;
}

function genererMenus(cleSem, opt) {
  opt = opt || {};
  const regime = opt.regime || "libre";
  /* Les desserts restent en dehors : on remplit des midis et des soirs. */
  let pool = etat.recettes.filter((r) => !estDessert(r));
  if (!pool.length) { toast("Ajoutez d'abord des recettes"); return null; }

  /* Le régime, lui, n'est pas une préférence : les plats écartés le sont
     pour de bon, ils ne peuvent pas ressortir faute de mieux. */
  if (regime === "vege") pool = pool.filter((r) => categorieRepas(r) === "vege");
  else if (regime === "sansViande") pool = pool.filter((r) => categorieRepas(r) !== "viande");
  if (!pool.length) {
    toast(regime === "vege"
      ? "Aucun plat végétarien dans votre cahier de recettes"
      : "Aucun plat sans viande dans votre cahier de recettes");
    return null;
  }

  /* Le profil santé écarte franchement, comme le régime : quand on cuisine
     pour la glycémie de quelqu'un, on ne veut pas d'exception « faute de
     mieux ». Si le choix devient trop court, on le dit plus bas. */
  const profil = opt.profil ? infoProfil(opt.profil) : null;
  if (profil) {
    pool = pool.filter((r) => aLeProfil(r, profil.val));
    if (!pool.length) {
      toast("Aucun plat « " + profil.nom + " » avec ces réglages");
      return null;
    }
  }

  const semaine = etat.repas[cleSem] || {};
  const cases = [];
  let absences = 0;
  /* Regeneration CIBLEE (« 🎲 Autre idée » dans la fiche d'un repas) : on ne
     refait que ces cases-la, avec les memes reglages que le generateur, en
     tenant compte du reste de la semaine deja prevu. */
  const cibles = opt.cibles ? new Set(opt.cibles.map((c) => c.jour + "-" + c.moment)) : null;
  JOURS.forEach((j) => {
    ["midi", "soir"].forEach((m) => {
      if (cibles) {
        if (cibles.has(j + "-" + m) && !estAbsence(semaine[j + "-" + m])) cases.push({ jour: j, moment: m });
        return;
      }
      if (m === "midi" && !opt.midi) return;
      if (m === "soir" && !opt.soir) return;
      /* Une absence n'est jamais remplie, même en mode « remplacer » : c'est
         une décision de la famille, pas une case restée vide. */
      if (estAbsence(semaine[j + "-" + m])) { absences++; return; }
      if (semaine[j + "-" + m] && !opt.remplacer) return;
      cases.push({ jour: j, moment: m });
    });
  });
  if (!cases.length) { toast("Rien à remplir avec ces options"); return null; }

  /* Un nombre demandé (« 2 poissons ») est un nombre exact : la catégorie
     ne réapparaît pas ailleurs dans la semaine. Une catégorie laissée sur
     « peu importe » reste, elle, entièrement libre. */
  const quotas = {};
  const fixees = [];
  CATEGORIES_REPAS.forEach((c) => {
    let n = opt[c.val];
    if (regime === "vege") n = (c.val === "vege" ? cases.length : 0);
    else if (regime === "sansViande" && c.val === "viande") n = 0;
    if (n === null || n === undefined || n === "") { quotas[c.val] = 0; return; }
    quotas[c.val] = Math.max(0, Math.min(Number(n) || 0, cases.length));
    fixees.push(c.val);
  });
  const demande = CATEGORIES_REPAS.reduce((s, c) => s + quotas[c.val], 0);
  /* Ce que contenaient les cases ciblees avant d'etre refaites. */
  const recetteDeCase = (v) => (v && v.recetteId ? etat.recettes.find((x) => x.id === v.recetteId) || null : null);
  const avant = {};
  if (cibles) cases.forEach((c) => {
    const k = c.jour + "-" + c.moment;
    avant[k] = semaine[k] ? Object.assign({}, semaine[k]) : null;
  });
  /* En regeneration ciblee, une case garde la categorie du plat qu'elle
     remplace quand vous en aviez fixe le nombre (« 2 poissons ») : changer un
     poisson donne un autre poisson, et le compte de la semaine reste juste. */
  const plan = cibles
    ? cases.map((c) => {
      const r = recetteDeCase(avant[c.jour + "-" + c.moment]);
      const cat = r ? categorieRepas(r) : null;
      return cat && fixees.indexOf(cat) !== -1 ? cat : "libre";
    })
    : repartitionSouhaitee(cases.length, quotas).plan;

  /* L'anti-gaspillage est un réglage de la famille, pas une case à cocher à
     chaque génération : on le lit là, sauf si l'appelant tranche lui-même. */
  const antiGaspi = opt.antiGaspi !== undefined
    ? !!opt.antiGaspi : reglagesFamille().antiGaspi !== false;
  const recents = recettesUtiliseesRecemment(cleSem, Math.max(0, Number(opt.semaines) || 3));
  const utilises = new Set();
  /* Combien de plats de chaque genre sont déjà posés dans la semaine. */
  const genresPoses = {};
  const bilan = { poisson: 0, viande: 0, vege: 0, autre: 0 };
  /* En regeneration ciblee, le reste de la semaine compte : pas de doublon
     avec un plat deja prevu un autre jour, et la variete des genres tient
     compte de ce qui est deja pose. */
  if (cibles) {
    Object.keys(semaine).forEach((k) => {
      if (cibles.has(k)) return;
      const r = recetteDeCase(semaine[k]);
      if (!r) return;
      utilises.add(r.id);
      const g = genrePlat(r);
      if (g !== "autre") genresPoses[g] = (genresPoses[g] || 0) + 1;
    });
  }

  if (!etat.repas[cleSem]) etat.repas[cleSem] = {};

  cases.forEach((c, rang) => {
    const voulu = plan[rang];
    let meilleur = null, meilleurScore = -1e9;
    pool.forEach((r) => {
      let s = Math.random() * 1.5;
      const cat = categorieRepas(r);
      if (utilises.has(r.id)) s -= 40;
      /* « Autre idée » : jamais le plat qu'on vient d'ecarter. */
      if (cibles) {
        const a = recetteDeCase(avant[c.jour + "-" + c.moment]);
        if (a && a.id === r.id) s -= 100;
      }
      if (recents.has(r.id)) s -= 6;
      /* Variété : chaque plat du même genre déjà posé rend le suivant moins
         probable. Le premier est gratuit, le deuxième coûte, le troisième
         coûte le double. Assez fort pour tenir tête aux bonus cumulés,
         assez souple pour céder quand le choix est vraiment étroit. */
      const genre = genrePlat(r);
      if (genre !== "autre") s -= PENALITE_GENRE * (genresPoses[genre] || 0);
      /* La répartition demandée passe avant le reste. */
      if (voulu !== "libre") s += (cat === voulu ? 30 : -30);
      else if (fixees.indexOf(cat) !== -1) s -= 20;   // son compte est déjà fait
      /* Hors saison, on écarte franchement : un gratin de courgettes en
         janvier, ce n'est pas une bonne idée. */
      if (opt.saisons !== false && !estDeSaison(r)) s -= 25;
      /* Hors saison, on écarte fort (−25) ; en saison on encourage juste un
         peu. À +3, ce bonus s'ajoutait à « léger » et « rapide » et écrasait
         le hasard : les mêmes plats revenaient chaque semaine. */
      if (opt.saisons !== false && !saisonsToutelAnnee(r) && estDeSaison(r)) s += 1.5;
      if (opt.soirLeger && c.moment === "soir" && r.type === "leger") s += 2.5;
      if (opt.soirLeger && c.moment === "midi" && r.type === "consistant") s += 1.5;
      if (opt.rapideSemaine && c.jour !== "samedi" && c.jour !== "dimanche" && r.rapide) s += 2.5;
      if (opt.thermomix && r.thermomix) s += 3;
      /* Ce dont on a déjà les ingrédients passe devant : moins de courses,
         moins de perte. Ça pèse, sans écraser la saison ni la répartition. */
      if (opt.reserve) s += couvertureReserve(r) * 10;
      /* Ce qui va se perdre passe devant tout le reste de la réserve : c'est
         maintenant ou jamais qu'on l'utilise. */
      if (antiGaspi) s += urgenceAntiGaspi(r) * 14;
      if (s > meilleurScore) { meilleurScore = s; meilleur = r; }
    });
    if (!meilleur) return;
    utilises.add(meilleur.id);
    const gm = genrePlat(meilleur);
    if (gm !== "autre") genresPoses[gm] = (genresPoses[gm] || 0) + 1;
    bilan[categorieRepas(meilleur)]++;
    const k = c.jour + "-" + c.moment;
    const nouvelle = { recetteId: meilleur.id, texte: "" };
    /* En regeneration ciblee, seul le plat change : on garde qui cuisine et
       qui ne mange pas. (« Ce sont des restes » ne vaut plus pour un autre plat.) */
    if (cibles && avant[k]) {
      if (avant[k].cuisinier) nouvelle.cuisinier = avant[k].cuisinier;
      if ((avant[k].absents || []).length) nouvelle.absents = avant[k].absents.slice();
    }
    etat.repas[cleSem][k] = nouvelle;
  });

  sauver("repas");
  return {
    n: cases.length, bilan: bilan,
    tropDemande: Math.max(0, demande - cases.length),
    /* Moins de plats disponibles que de repas à remplir : il y aura forcément
       des répétitions. Mieux vaut l'annoncer que de laisser croire au hasard. */
    choixCourt: profil && pool.length < cases.length ? { nom: profil.nom, dispo: pool.length } : null,
    absences: absences
  };
}

/* Où cette recette est-elle programmée ? Toutes semaines confondues.
   Sert avant une suppression : une recette effacée laissait derrière elle des
   cases pointant vers le vide. À l'écran elles semblaient libres, mais le
   générateur les croyait occupées et ne les remplissait plus jamais. */
function repasUtilisant(recetteId) {
  const trouves = [];
  Object.keys(etat.repas || {}).forEach((cleSem) => {
    const sem = etat.repas[cleSem] || {};
    Object.keys(sem).forEach((cleCase) => {
      if (sem[cleCase] && sem[cleCase].recetteId === recetteId) {
        trouves.push({ cleSem: cleSem, cleCase: cleCase });
      }
    });
  });
  return trouves;
}

/* Tous les ingredients des repas prevus, regroupes par nom et additionnes. */
function ingredientsDeLaSemaine(cleSem) {
  const sem = etat.repas[cleSem] || {};
  const parNom = new Map();
  Object.keys(sem).forEach((cleCase) => {
    const c = sem[cleCase];
    if (!c || !c.recetteId) return;
    /* Un repas de restes ne fait acheter personne : c'est justement ce qu'on
       a déjà cuisiné la veille. */
    if (c.restes) return;
    const r = etat.recettes.find((x) => x.id === c.recetteId);
    if (!r) return;
    /* Les quantités se comptent repas par repas : si deux personnes mangent
       à la cantine jeudi midi, on n'achète pas pour elles. */
    const p = cleCase.split("-");
    const facteur = facteurConvives(r, convivesDuRepas(cleSem, p[0], p[1]));
    (r.ingredients || []).forEach((ing) => {
      /* Le regroupement se fait sur le nom NORMALISÉ, celui qui sait que
         « Échalote » et « Échalotes » sont le même produit. Comparer les
         libellés bruts faisait deux lignes dans la liste de courses, et on
         se retrouvait à en acheter deux fois devant l'étal. */
      const cle = cleArticle(ing.nom);
      if (!parNom.has(cle)) {
        parNom.set(cle, { nom: ing.nom, rayon: ing.rayon || "Autre", morceaux: [] });
      }
      parNom.get(cle).morceaux.push({ qte: qteAjustee(ing.qte, facteur, ing.unite || ""), unite: ing.unite || "" });
    });
  });

  return Array.from(parNom.values()).map((e) => {
    const total = additionnerQuantites(e.morceaux);
    const principal = total.paquets[0] || { qte: null, unite: "" };
    return {
      nom: e.nom, rayon: e.rayon,
      qte: principal.qte === null ? "" : texteNombre(principal.qte),
      unite: principal.unite,
      besoinTexte: total.texte
    };
  /* Même ordre qu'à l'écran : alphabétique, « À catégoriser » en tête. Avant,
     ce tri lisait la POSITION dans la liste des rayons — un rayon créé par la
     famille en serait absent, et se serait retrouvé tout en haut. */
  }).sort((a, b) => {
    if (a.rayon !== b.rayon) return ordreRayons([a.rayon, b.rayon])[0] === a.rayon ? -1 : 1;
    return a.nom.localeCompare(b.nom);
  });
}


/* ==================== Qui cuisine, et ce que ça rapporte ====================

   Faire la cuisine est la corvée la plus lourde de la maison, et la seule qui
   ne rapportait rien. Elle suit donc exactement le même chemin qu'une tâche :
   on est désigné, on dit « c'est fait », un administrateur valide, les points
   tombent. Et pour la même raison que les tâches, la validation est vérifiée
   par le serveur — sinon chacun pourrait s'attribuer des points.

   L'état d'un repas est rangé dans `etats`, comme celui d'une tâche, et pas
   dans `repas` : `repas` est librement modifiable par tous les membres, ce
   qui en fait un mauvais endroit pour ce qui doit être prouvé. */

function cleEtatRepas(cleSem, jour, moment) {
  return "repas|" + cleSem + "|" + jour + "-" + moment;
}
function etatRepas(cleSem, jour, moment) {
  return etat.etats[cleEtatRepas(cleSem, jour, moment)] || { statut: "afaire" };
}
function repasDe(cleSem, jour, moment) {
  return (etat.repas[cleSem] || {})[jour + "-" + moment] || null;
}

/* Le tour de cuisine : on ne compte que les personnes qui peuvent vraiment
   cuisiner — les tout-petits sans téléphone n'ont rien à faire dans la
   rotation, l'administrateur les ajoute à la main s'il le souhaite. */
function cuisiniersPossibles() {
  return etat.membres.filter((m) => !m.sansAppareil);
}
function cuisinierDuTour(cleSem, jour, moment) {
  const l = cuisiniersPossibles();
  if (!l.length) return null;
  /* Un rang stable dans la semaine : même semaine, même ordre, sans avoir à
     stocker quoi que ce soit. */
  const rang = JOURS.indexOf(jour) * 2 + (moment === "soir" ? 1 : 0);
  const sem = Number(String(cleSem).replace(/[^0-9]/g, "")) || 0;
  return l[(rang + sem) % l.length].id;
}

/* --- Le bilan de la semaine -------------------------------------------
   Tout est déjà dans le journal des points : on ne demande rien de plus,
   on se contente de refermer la semaine et de la montrer. */
function bilanSemaine(cleSem) {
  const lundi = lundiDeCle(cleSem);
  const finIso = decalerIso(isoDate(lundi), 7);
  const debutIso = isoDate(lundi);
  const dansLaSemaine = (e) => {
    const d = String(e.date || "").slice(0, 10);
    return d >= debutIso && d < finIso;
  };
  const lignes = etat.journal.filter(dansLaSemaine);
  const parMembre = {};
  let taches = 0, repas = 0, gagnes = 0;
  lignes.forEach((e) => {
    if (e.delta > 0) {
      gagnes += e.delta;
      parMembre[e.membreId] = (parMembre[e.membreId] || 0) + e.delta;
    }
    if (e.type === "tache") taches++;
    if (e.type === "repas") repas++;
  });
  /* Les repas prévus et effectivement cuisinés, même sans points. */
  let cuisines = 0, prevus = 0;
  JOURS.forEach((j) => ["midi", "soir"].forEach((m) => {
    const c = repasDe(cleSem, j, m);
    if (c && !estAbsence(c) && (c.recetteId || c.texte)) prevus++;
    if (etatRepas(cleSem, j, m).statut === "valide") cuisines++;
  }));
  return {
    taches: taches, repasPoints: repas, repasCuisines: cuisines, repasPrevus: prevus,
    pointsGagnes: gagnes,
    classement: Object.keys(parMembre)
      .map((id) => ({ membre: membre(id), pts: parMembre[id] }))
      .filter((x) => x.membre)
      .sort((a, b) => b.pts - a.pts),
    rien: !lignes.length && !cuisines && !prevus
  };
}

/* --- Reprendre une semaine déjà faite ---------------------------------
   Les familles mangent par cycles : refaire les quatorze cases chaque
   dimanche est une corvée inutile quand la semaine d'il y a trois semaines
   convenait très bien. */
function semainesRemplies(combien) {
  const l = [];
  const lundi = lundiDeCle(ui.semaine);
  for (let k = 1; k <= (combien || 8); k++) {
    const d = new Date(lundi); d.setDate(d.getDate() - 7 * k);
    const cle = cleSemaine(d);
    const sem = etat.repas[cle];
    if (!sem) continue;
    const plats = Object.keys(sem).filter((c) => sem[c] && sem[c].recetteId && !sem[c].absent);
    if (!plats.length) continue;
    l.push({
      cle: cle, lundi: new Date(d), nb: plats.length,
      exemples: plats.slice(0, 3).map((c) => {
        const r = etat.recettes.find((x) => x.id === sem[c].recetteId);
        return r ? r.nom : "";
      }).filter(Boolean)
    });
  }
  return l;
}

/* On recopie les PLATS, rien d'autre : ni le cuisinier (le tour aura changé),
   ni l'état « fait/validé » (ce serait s'attribuer des points d'avance), ni
   les absences (elles appartenaient à cette semaine-là). */
function reprendreSemaine(cleSource, remplacer) {
  const source = etat.repas[cleSource];
  if (!source) return 0;
  if (!etat.repas[ui.semaine]) etat.repas[ui.semaine] = {};
  const cible = etat.repas[ui.semaine];
  let n = 0;
  JOURS.forEach((j) => ["midi", "soir"].forEach((m) => {
    const cle = j + "-" + m;
    const c = source[cle];
    if (!c || c.absent || (!c.recetteId && !c.texte)) return;
    /* Une absence déjà posée cette semaine-ci ne se fait pas écraser, et un
       repas déjà validé non plus. */
    const dejaLa = cible[cle];
    if (estAbsence(dejaLa)) return;
    if (etatRepas(ui.semaine, j, m).statut === "valide") return;
    if (dejaLa && !remplacer) return;
    cible[cle] = { recetteId: c.recetteId || null, texte: c.texte || "", restes: !!c.restes };
    n++;
  }));
  if (n) sauver("repas");
  return n;
}

/* Les repas cuisinés qui attendent un administrateur. On regarde la semaine
   affichée et la précédente : un dimanche soir se valide souvent le lundi. */
function repasAValider() {
  const l = [];
  const lundi = lundiDeCle(ui.semaine);
  [0, -7].forEach((d) => {
    const dd = new Date(lundi); dd.setDate(dd.getDate() + d);
    const cle = cleSemaine(dd);
    JOURS.forEach((j) => ["midi", "soir"].forEach((m) => {
      if (etatRepas(cle, j, m).statut !== "fait") return;
      const c = repasDe(cle, j, m);
      if (!c) return;
      l.push({ cleSem: cle, jour: j, moment: m, repas: c, etat: etatRepas(cle, j, m) });
    }));
  });
  return l;
}

async function crediterRepas(cleSem, jour, moment, beneficiaire) {
  const pts = Number(reglagesFamille().pointsRepas) || 0;
  if (!beneficiaire || !pts) return;
  /* La règle Firebase compare le montant à `reglages.pointsRepas`. Sur une
     famille créée avant cette version, le réglage n'existe pas encore : on
     l'inscrit avant, sinon le serveur refuserait la ligne sans qu'on
     comprenne pourquoi. */
  if (!etat.reglages || etat.reglages.pointsRepas === undefined) {
    etat.reglages = Object.assign({}, REGLAGES_DEFAUT, etat.reglages || {});
    if (estAdmin()) await Store.ecrire(["reglages"]);
  }
  const cle = cleEtatRepas(cleSem, jour, moment);
  const c = repasDe(cleSem, jour, moment);
  const r = c && c.recetteId ? etat.recettes.find((x) => x.id === c.recetteId) : null;
  await ajouterAuJournal({
    id: "r|" + cleSem + "|" + jour + "-" + moment,
    type: "repas", refId: cleSem + "|" + jour + "-" + moment,
    cleEtat: cle.replace(/\|/g, "__"),
    membreId: beneficiaire, delta: pts,
    motif: "Repas : " + ((r && r.nom) || (c && c.texte) || jour + " " + moment)
  });
}

/* ==================== Ce qu'un repas retire de la réserve ====================

   La moitié manquante du retour du magasin : les courses remplissaient la
   réserve, rien ne la vidait. On ne le fait JAMAIS sans confirmation — on ne
   met jamais exactement ce que dit la recette, et une réserve fausse est pire
   qu'une réserve vide. */

function ingredientsARetirer(cleSem, jour, moment) {
  const c = repasDe(cleSem, jour, moment);
  if (!c || !c.recetteId || c.restes) return [];
  const r = etat.recettes.find((x) => x.id === c.recetteId);
  if (!r) return [];
  const facteur = facteurConvives(r, convivesDuRepas(cleSem, jour, moment));
  const lignes = [];
  (r.ingredients || []).forEach((ing) => {
    const s = articleStock(ing.nom);
    if (!s) return;                               // pas en réserve : rien à retirer
    const besoin = qteAjustee(ing.qte, facteur, ing.unite || "");
    const retire = convertirUnite(besoin, ing.unite || "", s.unite || "");
    lignes.push({
      stockId: s.id, nom: s.nom,
      avant: formaterQte(s.qte, s.unite),
      demande: formaterQte(besoin, ing.unite),
      retire: retire,                             // null = unités incompatibles
      unite: s.unite || "",
      reste: retire === null ? null : Math.max(0, (nombre(s.qte) || 0) - retire)
    });
  });
  return lignes;
}

/* ==================== Les dates de péremption ====================

   La réserve sait ce qu'on a ; avec une date, elle sait aussi ce qui va se
   perdre. Le générateur s'en sert pour proposer d'abord les plats qui
   l'utilisent — c'est la version anti-gaspi de « utiliser ma réserve ». */

function joursAvantPeremption(s) {
  if (!s || !s.peremption) return null;
  return joursEntre(isoDate(new Date()), s.peremption);
}
function stockBientotPerime(marge) {
  const m = marge === undefined ? 5 : marge;
  return etat.stock.filter((s) => {
    const j = joursAvantPeremption(s);
    return j !== null && j <= m;
  }).sort((a, b) => String(a.peremption).localeCompare(String(b.peremption)));
}
/* Part des ingrédients d'un plat qui sont sur le point de se perdre. */
function urgenceAntiGaspi(r) {
  const presses = stockBientotPerime(7);
  if (!presses.length) return 0;
  const noms = new Set(presses.map((s) => s.nom.toLowerCase().trim()));
  const ing = (r.ingredients || []).filter((i) => i && i.nom);
  if (!ing.length) return 0;
  const n = ing.filter((i) => noms.has(i.nom.toLowerCase().trim())).length;
  return n ? n / ing.length : 0;
}

/* Rentrer les achats en réserve sans confirmation : réglage de l'appareil,
   activé par défaut — c'est le geste que l'on attend au retour du magasin. */
function reserveAutomatique() {
  return localStorage.getItem("tribu:reserveAuto") !== "0";
}

/* ======================= Les listes de courses ======================= */

/* Tant que la famille n'a pas créé de listes, tout vit dans une liste
   implicite. Elle n'est écrite dans les données qu'au moment où on en
   ajoute une deuxième — inutile de bousculer les familles existantes. */
function listesCourses() {
  return etat.listesCourses.length ? etat.listesCourses : [LISTE_PRINCIPALE];
}
function listeParDefaut() { return listesCourses()[0]; }
function listeDe(c) { return c.listeId || LISTE_PRINCIPALE.id; }
function listeCourante() {
  return listesCourses().find((l) => l.id === ui.listeActive) || listeParDefaut();
}
function coursesDe(listeId) {
  return etat.courses.filter((c) => listeDe(c) === listeId);
}
function typeListe(l) {
  return TYPES_LISTE.find((t) => t.val === (l && l.type)) || TYPES_LISTE[0];
}
/* Ce qui compte comme « à acheter » : les listes ponctuelles et hebdomadaires.
   La liste du mois se remplit tranquillement, elle ne réclame rien. */
function coursesUrgentes() {
  const ids = listesCourses().filter((l) => typeListe(l).alerte).map((l) => l.id);
  return etat.courses.filter((c) => !c.coche && ids.indexOf(listeDe(c)) !== -1);
}
/* Matérialise la liste implicite : nécessaire dès qu'il y en a une deuxième. */
function assurerListes() {
  if (etat.listesCourses.length) return;
  etat.listesCourses = [Object.assign({}, LISTE_PRINCIPALE, { creeLe: new Date().toISOString() })];
}

/* ============================ Stock (la réserve) ============================ */

/* Le nom d'un article, ramené à sa forme comparable : sans accent, au
   singulier, « œ » relu « oe ». Sans cela, « Tomate » ne retrouvait pas
   « Tomates » et « Oeufs » ne retrouvait pas « Œufs » — l'article repartait
   alors en double dans la réserve au lieu d'être réapprovisionné.
   Le résultat est gardé en mémoire : cette comparaison tourne des dizaines
   de milliers de fois pendant une génération de menus. */
const _cacheNomArticle = new Map();
function cleArticle(nom) {
  const brut = String(nom || "");
  let v = _cacheNomArticle.get(brut);
  if (v === undefined) {
    v = motsDe(brut).join(" ");
    _cacheNomArticle.set(brut, v);
  }
  return v;
}
/* Deux libellés désignent-ils le même produit ? On reste STRICT sur les mots :
   « lait » et « lait de coco » ne sont pas le même article, et les confondre
   ferait bien plus de dégâts qu'un doublon. */
function memeArticle(a, b) {
  const x = cleArticle(a);
  return !!x && x === cleArticle(b);
}

function articleStock(nom) {
  const n = cleArticle(nom);
  if (!n) return null;
  return etat.stock.find((s) => cleArticle(s.nom) === n) || null;
}

/* ---------------------- Saisie d'une liste, à la voix ----------------------

   Au clavier on écrit « pain, lait, œufs ». Au micro du téléphone on dit
   « du pain du lait et des œufs » : pas de virgules, et un article devant
   chaque mot. Les deux doivent donner la même liste.

   On découpe donc aussi sur « et » et « puis », et on retire l'article de
   tête. Attention aux mots qui commencent comme un article : « laitue » et
   « lessive » ne doivent pas être amputés — d'où les espaces exigés après
   « la », « le », « du »… et les limites de mot autour de « et ». */
/* Les articles partitifs marquent aussi une frontière : « du pain du lait »
   est une liste de deux. On coupe donc sur « du », « des », « de la »,
   « de l' » — mais JAMAIS sur « de » ni « d' » seuls, sinon « pommes de
   terre », « lait de coco » et « huile d'olive » se briseraient en morceaux.
   Et on exige un espace AVANT : le « du » qui ouvre la phrase reste au
   traitement de l'article de tête, juste en dessous. */
const SEPARATEURS_SAISIE =
  /[\n,;]+|\bet\b|\bpuis\b|\s+du\s+|\s+des\s+|\s+de\s+la\s+|\s+de\s+l'/i;
const ARTICLE_INITIAL =
  /^(?:de\s+l'|de\s+la\s+|de\s+|du\s+|des\s+|d'|l'|un\s+|une\s+|le\s+|la\s+|les\s+)/i;

function nomsSaisis(texte) {
  return String(texte || "")
    .split(SEPARATEURS_SAISIE)
    .map((x) => x.trim().replace(ARTICLE_INITIAL, "").trim())
    .filter(Boolean);
}

/* Un article est « à racheter » quand sa quantité passe sous le minimum. */
function stockSousMinimum() {
  return etat.stock.filter((s) => {
    const mini = nombre(s.mini);
    const q = nombre(s.qte);
    return mini !== null && mini > 0 && (q === null || q < mini);
  });
}

/* Ce qu'il reste vraiment à acheter pour un ingrédient, compte tenu du stock.
   Renvoie { manque, unite, connu } — `connu` est faux quand les unités ne se
   convertissent pas (on ne devine pas, on le dit). */
function manquePour(nom, qte, unite) {
  const s = articleStock(nom);
  const besoin = nombre(qte);
  if (!s) return { manque: besoin, unite: unite, connu: true, enStock: null };
  const dispo = convertirUnite(s.qte, s.unite || "", unite || "");
  if (besoin === null || dispo === null) {
    return { manque: besoin, unite: unite, connu: false, enStock: formaterQte(s.qte, s.unite) };
  }
  return {
    manque: Math.max(0, besoin - dispo), unite: unite, connu: true,
    enStock: formaterQte(s.qte, s.unite)
  };
}

/* ============================ 9. Rendu general ============================ */

const TITRES = {
  accueil: ["Accueil", ""],
  taches: ["Tâches", "Qui fait quoi"],
  courses: ["Courses", "Liste partagée"],
  reserve: ["Ma réserve", "Ce qu'on garde à la maison"],
  menus: ["Menus", "Repas de la semaine"],
  notes: ["Rappels", "À ne pas oublier"],
  points: ["Points & cadeaux", "Les moments à partager"],
  recettes: ["Mes recettes", "Bibliothèque de plats"],
  admin: ["Administration", "Réglages de la famille"]
};

function rendre() {
  if (!moi) return;
  const v = ui.vue;

  const maj = misesAJour();
  $("#btn-profil").innerHTML = esc(moi.emoji || "🙂") +
    (maj.length ? '<span class="point-maj"></span>' : "");
  $("#btn-profil").title = maj.length
    ? maj.length + " mise(s) à jour disponible(s)" : "Mon profil";
  $("#titre-vue").textContent = TITRES[v] ? TITRES[v][0] : "Ma Tribu";
  $("#sous-titre-vue").textContent = v === "accueil" ? etat.famille.nom : (TITRES[v] ? TITRES[v][1] : "");
  $("#btn-points").hidden = !pointsActifs();
  $("#mes-points").textContent = pointsActifs() ? pointsDe(moi.id) : "0";

  document.querySelectorAll(".vue").forEach((s) => s.classList.remove("active"));
  const cible = $("#vue-" + v);
  cible.classList.add("active");
  cible.innerHTML = Vues[v]();

  majBarre();
  majPastilles();
  majFab();

  if (ui.focus) {
    const el = document.getElementById(ui.focus);
    if (el) { el.focus(); if (el.setSelectionRange) { const n = el.value.length; el.setSelectionRange(n, n); } }
    ui.focus = null;
  }
}

/* La barre du bas se redessine à chaque affichage : les onglets masqués par
   l'administrateur disparaissent, et le libellé actif suit la vue. */
function majBarre() {
  const nav = $("#nav-inner");
  const visibles = ongletsVisibles();
  const signature = visibles.map((o) => o.vue).join(",");
  if (nav.dataset.signature !== signature) {
    nav.innerHTML = visibles.map((o) =>
      '<button data-vue="' + o.vue + '"><span class="ic">' + o.emoji + "</span>" +
      esc(o.nom) + "</button>").join("");
    nav.dataset.signature = signature;
  }
  nav.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("active", b.dataset.vue === ui.vue);
  });
}

function majPastilles() {
  const compteurs = {
    taches: mesTachesAFaire().length + (estAdmin() ? tachesAValider().length : 0),
    courses: coursesUrgentes().length,
    notes: notesUrgentes().length
  };
  document.querySelectorAll(".nav button").forEach((b) => {
    const anc = b.querySelector(".pastille");
    if (anc) anc.remove();
    const n = compteurs[b.dataset.vue];
    if (n) {
      const s = document.createElement("span");
      s.className = "pastille";
      s.textContent = n > 99 ? "99+" : n;
      b.appendChild(s);
    }
  });
}

/* --- Les onglets que la famille a choisi de cacher ---
   Réglage d'administration : certaines familles ne se servent que des recettes
   et des courses, la barre du bas n'a pas à leur imposer le reste.
   L'accueil ne se masque jamais : il faut toujours un chemin de retour. */
const ONGLETS = [
  { vue: "accueil", nom: "Accueil", emoji: "🏡", obligatoire: true },
  { vue: "taches", nom: "Tâches", emoji: "🧹" },
  { vue: "courses", nom: "Courses", emoji: "🛒" },
  /* La réserve avait son onglet caché DANS l'écran Courses : personne ne la
     trouvait. Elle a maintenant sa place dans la barre du bas, et reste
     masquable comme les autres (demande d'Amandine, 12/09/2026). */
  { vue: "reserve", nom: "Réserve", emoji: "🥫" },
  { vue: "menus", nom: "Menus", emoji: "🍽️" },
  { vue: "recettes", nom: "Recettes", emoji: "📖" },
  { vue: "notes", nom: "Rappels", emoji: "🔔" }
];
/* --- Les réglages de la famille ---
   Rangés dans `reglages`, que seuls les administrateurs peuvent écrire
   (voir firestore.rules) : le nombre de convives et le barème d'un repas
   ne sont pas des préférences d'appareil, ils valent pour toute la maison. */
function reglagesFamille() {
  return Object.assign({}, REGLAGES_DEFAUT, etat.reglages || {});
}

/* Le système de points est-il en service ? Réglage de famille, comme
   l'objectif commun : certaines maisons veulent des tâches sans compétition
   ni récompenses. Activé par défaut — les familles existantes ne changent
   pas. Éteint, il masque le compteur de l'en-tête, l'écran Points & cadeaux,
   le classement, l'objectif commun et les « +N pts » ; les tâches, « c'est
   fait » et la validation restent. Rien n'est effacé : l'historique repart
   à l'identique si on le rallume. */
function pointsActifs() {
  return reglagesFamille().points !== false;
}
function nbConvives() {
  const n = Number(reglagesFamille().convives);
  return n > 0 && n <= 30 ? n : PORTIONS_BASE;
}
/* De combien il faut multiplier les quantités d'une recette pour la table.
   Une recette peut annoncer son propre nombre de parts. */
function facteurConvives(r, combien) {
  const base = Number(r && r.portions) > 0 ? Number(r.portions) : PORTIONS_BASE;
  const n = combien === undefined ? nbConvives() : combien;
  return n / base;
}

/* Qui manque à ce repas-là. Différent d'une absence de toute la maison :
   ici on cuisine quand même, mais pour moins de monde. */
function absentsDuRepas(cleSem, jour, moment) {
  const c = repasDe(cleSem, jour, moment);
  const l = (c && c.absents) || [];
  /* Un membre supprimé depuis ne doit pas continuer à compter. */
  return l.filter((id) => !!membre(id));
}
function convivesDuRepas(cleSem, jour, moment) {
  const n = nbConvives() - absentsDuRepas(cleSem, jour, moment).length;
  return Math.max(1, n);
}
/* Une quantité mise à l'échelle, arrondie de façon lisible : personne
   n'achète 1,3333 oignon. */
function qteAjustee(qte, facteur, unite) {
  const n = nombre(qte);
  if (n === null || n <= 0 || !facteur || facteur === 1) return qte;
  const v = n * facteur;
  /* Sans unité, on ne compte pas une matière mais des objets : des oignons,
     des œufs, des tomates. « 0,5 oignon » sur une liste de courses n'aide
     personne — on arrondit au supérieur, et jamais à zéro. Les grammes et
     les litres, eux, se divisent très bien. */
  if (!unite) return texteNombre(Math.max(1, Math.ceil(v)));
  const arrondi = v >= 10 ? Math.round(v) : Math.round(v * 10) / 10;
  return texteNombre(arrondi);
}

/* Amener une section juste sous la barre du haut.

   `scrollIntoView` vise le haut de la FENÊTRE, pas le haut de la zone
   visible : la barre étant collante, elle recouvrait le titre visé et on
   croyait avoir raté sa cible. On ne peut pas réserver une hauteur fixe
   dans la feuille de style, car cette barre grandit quand le titre passe
   sur deux lignes — sur un petit écran, « Administration / Réglages de la
   famille » en prend trois. On la mesure donc à l'instant du saut.

   Saut instantané, jamais « smooth » : sur trente mille pixels le défilement
   animé est long, donne le tournis, et certains navigateurs l'ignorent. */
function allerAuBloc(cible) {
  if (!cible) return;
  const barre = document.querySelector(".topbar");
  const marge = (barre ? barre.getBoundingClientRect().height : 0) + 12;
  const y = cible.getBoundingClientRect().top + window.scrollY - marge;
  window.scrollTo(0, Math.max(0, y));
}

/* Tourne-t-on depuis l'icône de l'écran d'accueil plutôt que dans le
   navigateur ? Les deux façons de le savoir : iOS pose `standalone`, les
   autres répondent à la requête média. */
function ouvertDepuisIcone() {
  return window.navigator.standalone === true ||
    !!(window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);
}

function ongletsMasques() {
  const l = (etat.reglages && etat.reglages.ongletsMasques) || [];
  return Array.isArray(l) ? l : [];
}
function ongletMasque(vue) {
  return ongletsMasques().indexOf(vue) !== -1;
}
function ongletsVisibles() {
  return ONGLETS.filter((o) => o.obligatoire || !ongletMasque(o.vue));
}

const FAB = {
  taches: { admin: true, action: "tache-nouvelle" },
  courses: { admin: false, action: "course-nouvelle" },
  stock: { admin: false, action: "stock-nouveau" },
  reserve: { admin: false, action: "stock-nouveau" },
  notes: { admin: false, action: "note-nouvelle" },
  recettes: { admin: false, action: "recette-nouvelle" },
  points: { admin: true, action: "cadeau-nouveau" }
};
function majFab() {
  const f = $("#fab");
  /* L'onglet Courses abrite deux listes : le bouton + change de rôle. */
  const cle = ui.vue === "courses" && ui.ongletCourses === "stock" ? "stock" : ui.vue;
  const conf = FAB[cle];
  if (!conf || (conf.admin && !estAdmin())) { f.hidden = true; return; }
  f.hidden = false;
  f.dataset.action = conf.action;
}

function aller(vue) {
  /* Un onglet masqué ne doit pas rester atteignable par un vieux raccourci
     ou par la vue mémorisée : on retombe sur l'accueil, jamais sur du vide. */
  if (vue !== "accueil" && vue !== "admin" && ongletMasque(vue)) vue = "accueil";
  /* Points éteints : l'écran Points & cadeaux n'est plus atteignable, même
     par un vieux raccourci ou par la vue mémorisée. */
  if (vue === "points" && !pointsActifs()) vue = "accueil";
  ui.vue = vue;
  memoriserVue();
  window.scrollTo({ top: 0 });
  rendre();
}

/* On retient l'onglet ouvert ET le moment. Recharger la page ne doit pas
   ramener brutalement à l'accueil au milieu des courses ; mais rouvrir
   l'application le lendemain n'est pas la même chose que revenir d'un coup
   d'œil sur une autre appli. D'où le délai : on reprend si c'est récent,
   sinon on ouvre sur l'accueil (choix d'Amandine, 12 septembre 2026). */
const DELAI_REPRISE_VUE = 1800000;        // 30 minutes
function memoriserVue() {
  try {
    localStorage.setItem("tribu:vue", JSON.stringify({
      vue: ui.vue,
      ongletCourses: ui.ongletCourses,
      listeActive: ui.listeActive || null,
      le: Date.now()
    }));
  } catch (e) { /* sans importance */ }
}

function restaurerVue() {
  let v;
  try { v = JSON.parse(localStorage.getItem("tribu:vue") || "null"); } catch (e) { return; }
  if (!v || !v.vue || !Vues[v.vue]) return;
  /* Trop ancien, ou souvenir d'une version qui ne datait pas encore : on
     ouvre sur l'accueil. Le cas « sans date » n'arrive qu'une fois. */
  if (!v.le || Date.now() - v.le > DELAI_REPRISE_VUE) return;
  /* L'administration n'a pas de sens pour un membre ordinaire. */
  if (v.vue === "admin" && !estAdmin()) return;
  ui.vue = v.vue;
  if (v.ongletCourses) ui.ongletCourses = v.ongletCourses;
  if (v.listeActive) ui.listeActive = v.listeActive;
}

/* ============================ 10. Ecoute des clics ============================ */

document.addEventListener("click", (e) => {
  const nav = e.target.closest(".nav button");
  if (nav) { aller(nav.dataset.vue); return; }
  if (e.target.id === "voile") { fermerFeuille(); return; }

  const b = e.target.closest("[data-action]");
  if (!b) return;
  const a = b.dataset.action;
  const v = b.dataset.id;

  switch (a) {
    case "aller": aller(b.dataset.vue); break;
    case "fermer": fermerFeuille(); break;

    case "tache-fait": Actions.marquerFaite(v); break;
    case "tache-annuler": Actions.annulerFaite(v); break;
    case "tache-valider": Actions.valider(v); break;
    case "tache-refuser": Actions.refuser(v); break;
    case "tache-nouvelle": Formulaires.tache(null); break;
    case "tache-editer": Formulaires.tache(v); break;
    case "taches-filtre": ui.filtreTaches = b.dataset.valeur; rendre(); break;

    case "course-toggle": Actions.basculerCourse(v); break;
    case "course-suppr": Actions.supprimerCourse(v); break;
    case "course-nouvelle": Formulaires.course(); break;
    case "courses-plusieurs": Formulaires.plusieursCourses(); break;
    case "course-editer": Formulaires.course(v); break;
    case "courses-vider": Formulaires.terminerCourses(); break;
    case "reserve-auto": {
      const on = localStorage.getItem("tribu:reserveAuto") !== "0";
      localStorage.setItem("tribu:reserveAuto", on ? "0" : "1");
      rendre();
      toast(on ? "Le récapitulatif sera affiché à chaque fois"
               : "Les achats connus rentreront directement en réserve");
      break;
    }
    case "courses-onglet": ui.ongletCourses = b.dataset.valeur; rendre(); break;
    /* Depuis l'accueil : ouvrir directement la réserve, pas la liste. */
    case "reserve-ouvrir": ui.ongletCourses = "stock"; aller("courses"); break;
    case "liste-choisir": ui.listeActive = b.dataset.valeur; ui.ongletCourses = "liste"; rendre(); break;
    case "liste-nouvelle": Formulaires.liste(null); break;
    case "liste-editer": Formulaires.liste(listeCourante().id); break;
    case "course-deplacer": Formulaires.deplacerCourse(v); break;

    /* réserve */
    case "stock-nouveau": Formulaires.stock(null); break;
    case "stock-editer": Formulaires.stock(v); break;
    case "stock-plus": Actions.ajusterStock(v, 1); break;
    case "stock-moins": Actions.ajusterStock(v, -1); break;
    case "stock-racheter": Actions.racheterSousMinimum(); break;

    /* retours */
    case "retour": Formulaires.retour(); break;

    case "semaine-prec": {
      const d = lundiDeCle(ui.semaine); d.setDate(d.getDate() - 7);
      ui.semaine = cleSemaine(d); rendre(); break;
    }
    case "semaine-suiv": {
      const d = lundiDeCle(ui.semaine); d.setDate(d.getDate() + 7);
      ui.semaine = cleSemaine(d); rendre(); break;
    }
    case "repas-case": Formulaires.repas(b.dataset.jour, b.dataset.moment); break;
    case "menus-generer": Formulaires.generateur(); break;
    case "menus-reprendre": Formulaires.reprendreSemaine(); break;
    case "menus-afficher": Formulaires.menuAAfficher(); break;
    case "bilan-semaine": Formulaires.bilanSemaine(b.dataset.valeur || ui.semaine); break;
    case "menus-courses": Formulaires.ingredientsVersCourses(); break;

    case "recette-nouvelle": Formulaires.recette(null); break;
    case "recette-editer": Formulaires.recette(v); break;
    case "recette-voir": Formulaires.consulterRecette(v); break;
    case "recette-favori": basculerFavori(v); break;
    case "cadeaux-defaut": Actions.remplacerCadeauxDeDepart(); break;
    case "recettes-partagees": Formulaires.catalogue(); break;
    case "recettes-maj": Formulaires.majRecettes(); break;
    case "recettes-filtre": {
      const f = b.dataset.valeur;
      const i = ui.filtresRecettes.indexOf(f);
      if (i === -1) ui.filtresRecettes.push(f); else ui.filtresRecettes.splice(i, 1);
      memoriserListe("tribu:filtresRecettes", ui.filtresRecettes);
      rendre();
      break;
    }
    case "recettes-filtre-vider":
      ui.filtresRecettes = []; ui.rechercheRecette = "";
      memoriserListe("tribu:filtresRecettes", ui.filtresRecettes);
      rendre();
      break;
    case "recettes-tri": ui.triRecettes = b.dataset.valeur; rendre(); break;
    case "recettes-filtres": ui.filtresOuverts = !ui.filtresOuverts; rendre(); break;

    /* Réserve : replier un rayon, ou tous. Retenu sur l'appareil. */
    case "rayon-nouveau": Formulaires.rayon(); break;
    case "rayon-suppr": Actions.supprimerRayon(b.dataset.valeur); break;

    /* Réserve : passer du côté alimentaire au côté maison. */
    case "reserve-cote":
      ui.coteReserve = b.dataset.valeur === "maison" ? "maison" : "alimentaire";
      try { localStorage.setItem("tribu:coteReserve", ui.coteReserve); } catch (e) { /* sans importance */ }
      rendre();
      break;
    case "stock-rayon": {
      const liste = (ui.rayonsReplies || []).slice();
      const k = liste.indexOf(b.dataset.valeur);
      if (k === -1) liste.push(b.dataset.valeur); else liste.splice(k, 1);
      ui.rayonsReplies = liste;
      memoriserListe("tribu:rayonsReplies", liste);
      rendre();
      break;
    }
    case "stock-replier-tout": {
      const tous = etat.stock.map((s) => s.rayon).filter((r, i, t) => t.indexOf(r) === i);
      ui.rayonsReplies = b.dataset.valeur === "replier" ? tous : [];
      memoriserListe("tribu:rayonsReplies", ui.rayonsReplies);
      rendre();
      break;
    }
    case "recettes-lettre": {
      allerAuBloc(document.getElementById("lettre-" + b.dataset.valeur));
      break;
    }
    case "sante-info": Formulaires.profilsSante(b.dataset.valeur || null); break;

    case "note-toggle": Actions.basculerNote(v); break;
    case "note-nouvelle": Formulaires.note(null); break;
    case "note-editer": Formulaires.note(v); break;
    case "notes-filtre": ui.filtreNotes = b.dataset.valeur; rendre(); break;
    case "notes-qui": ui.filtreQuiNotes = b.dataset.valeur || ""; rendre(); break;
    case "admin-onglets": Formulaires.onglets(); break;
    case "admin-exporter": Formulaires.exporterDonnees(); break;
    case "admin-supprimer-famille": Formulaires.supprimerFamille(); break;
    case "admin-aller": {
      allerAuBloc(document.getElementById("admin-" + b.dataset.valeur));
      break;
    }
    case "admin-reglages": Formulaires.reglagesFamille(); break;
    case "admin-objectif": Formulaires.objectif(); break;
    /* `data-semaine` est facultatif : l'accueil peut proposer un repas de la
       semaine précédente, il ne faut pas valider la case d'à côté. */
    case "repas-fait":
    case "repas-valider":
    case "repas-annuler": {
      const sem = b.dataset.semaine || ui.semaine;
      const faire = { "repas-fait": Actions.repasFait, "repas-valider": Actions.validerRepas,
        "repas-annuler": Actions.annulerRepasFait }[a];
      /* Depuis la fiche du repas, on la redessine une fois l'action faite :
         rendre() ne met a jour que l'ecran de fond, et le bouton « C'est
         fait » restait affiche jusqu'a ce qu'on ferme et rouvre la fiche. */
      const dansFiche = !!b.closest("#feuille");
      Promise.resolve(faire.call(Actions, sem, b.dataset.jour, b.dataset.moment)).then(() => {
        if (dansFiche && $("#voile").classList.contains("on") && sem === ui.semaine) {
          Formulaires.repas(b.dataset.jour, b.dataset.moment);
        }
      });
      break;
    }
    case "repas-reserve": Formulaires.consommerRepas(b.dataset.jour, b.dataset.moment); break;

    case "cadeau-demander": Actions.demanderCadeau(v); break;
    case "cadeau-nouveau": Formulaires.cadeau(null); break;
    case "cadeau-editer": Formulaires.cadeau(v); break;
    case "echange-accorder": Actions.accorderEchange(v); break;
    case "echange-refuser": Actions.refuserEchange(v); break;
    case "points-ajuster": Formulaires.ajustementPoints(v); break;
    case "points-historique": Formulaires.historique(v); break;
    case "cadeau-pour": Formulaires.cadeauPour(v); break;

    case "membre-nouveau": Formulaires.membre(null); break;
    case "membre-editer": Formulaires.membre(v); break;
    case "inviter": Formulaires.invitation(); break;
    case "masquer-conseils":
      localStorage.setItem("tribu:conseilsMasques", "1");
      rendre();
      toast("Conseils masqués — ils reviennent depuis Administration");
      break;
    case "revoir-conseils":
      localStorage.removeItem("tribu:conseilsMasques");
      aller("accueil");
      break;
    case "menu-profil": Formulaires.menuProfil(); break;
    case "mon-appareil": Formulaires.monAppareil(); break;
    case "effacer-appareil": Formulaires.effacerAppareil(); break;
    case "demenagement": Formulaires.demenagement(); break;
    case "fondatrice": Formulaires.fondatrice(); break;
    case "masquer-conseil-icone":
      localStorage.setItem("tribu:conseilEcranAccueil", "1");
      rendre();
      break;
    case "maj-liste": Formulaires.misesAJour(); break;
    case "deconnexion": fermerFeuille(); deconnecter(); break;

    /* Apparence : le mode clair/sombre ET la palette, dans la même fiche.
       Chaque choix se voit tout de suite et la fiche se rouvre pour montrer
       ce qui est retenu. Tout cela ne vaut que pour cet appareil. */
    case "apparence": Formulaires.apparence(); break;
    case "theme-choix": {
      const v = b.dataset.valeur || "auto";
      if (v === "auto") delete document.documentElement.dataset.theme;
      else document.documentElement.dataset.theme = v;
      try { localStorage.setItem("tribu:theme", v); } catch (e) { /* sans importance */ }
      Formulaires.apparence();
      break;
    }
    case "palette":
      appliquerPalette(b.dataset.valeur || "");
      Formulaires.apparence();
      break;
    /* Une panne reseau ne doit pas condamner l'appareil au mode local pour la
       duree de la session : on retente proprement, en rechargeant. */
    case "reessayer":
      toast("Nouvelle tentative…");
      location.reload();
      break;

    case "copier": {
      const t = b.dataset.texte || "";
      copierTexte(t, b);
      break;
    }
  }
});

/* Saisie rapide dans la liste de courses */
document.addEventListener("submit", (e) => {
  if (e.target.id !== "form-course-rapide") return;
  e.preventDefault();
  const champ = document.getElementById("champ-course");
  const val = champ.value.trim();
  if (!val) return;
  champ.value = "";
  ui.focus = "champ-course";
  Actions.ajouterPlusieursCourses(val);
});

/* Saisie rapide dans la réserve — le même geste, l'autre étagère */
document.addEventListener("submit", (e) => {
  if (e.target.id !== "form-stock-rapide") return;
  e.preventDefault();
  const champ = document.getElementById("champ-stock");
  const val = champ.value.trim();
  if (!val) return;
  champ.value = "";
  ui.focus = "champ-stock";
  Actions.ajouterPlusieursStock(val);
  rendre();
});

/* Recherche dans la bibliotheque de recettes */
document.addEventListener("input", (e) => {
  if (e.target.id !== "champ-recherche-recette") return;
  ui.rechercheRecette = e.target.value;
  ui.focus = "champ-recherche-recette";
  rendre();
});

/* Recherche dans la réserve */
document.addEventListener("input", (e) => {
  if (e.target.id !== "champ-recherche-stock") return;
  ui.rechercheStock = e.target.value;
  ui.focus = "champ-recherche-stock";
  rendre();
});

/* Recherche dans la liste de courses */
document.addEventListener("input", (e) => {
  if (e.target.id !== "champ-recherche-courses") return;
  ui.rechercheCourses = e.target.value;
  ui.focus = "champ-recherche-courses";
  rendre();
});

/* Devine le rayon d'un article */
/* Expressions prioritaires : des noms composés dont le mot principal appartient
   à un autre rayon. Une sauce tomate n'est pas un légume, l'eau de javel n'est
   pas une boisson, le lait de coco n'est pas de la crèmerie. Testées AVANT les
   listes de mots ci-dessous, sur le nom entier. */
const EXPRESSIONS_RAYONS = [
  ["sauce tomate", "Épicerie"], ["coulis de tomate", "Épicerie"],
  ["concentré de tomate", "Épicerie"], ["concentre de tomate", "Épicerie"],
  ["tomate pelée", "Épicerie"], ["tomate pelee", "Épicerie"],
  ["tomates pelées", "Épicerie"], ["tomates pelees", "Épicerie"],
  ["tomate concassée", "Épicerie"], ["tomate concassee", "Épicerie"],
  ["tomates concassées", "Épicerie"], ["tomates concassees", "Épicerie"],
  ["sauce soja", "Épicerie"], ["jus de citron", "Épicerie"],
  ["pâte à tartiner", "Épicerie"], ["pate a tartiner", "Épicerie"],
  ["beurre de cacahuète", "Épicerie"], ["beurre de cacahuete", "Épicerie"],
  ["lait de coco", "Épicerie"], ["lait de soja", "Épicerie"],
  ["lait d'amande", "Épicerie"], ["lait d amande", "Épicerie"],
  ["eau de javel", "Entretien"], ["savon de marseille", "Entretien"],
  ["poisson pané", "Surgelés"], ["poisson pane", "Surgelés"]
];

const MOTS_RAYONS = {
  "Fruits & légumes": ["pomme", "banane", "tomate", "salade", "carotte", "oignon", "ail ", "courgette",
    "pomme de terre", "pommes de terre", "citron", "fraise", "poireau", "champignon", "brocoli",
    "concombre", "avocat", "orange", "raisin", "persil", "basilic", "épinard", "haricot", "poivron",
    "aubergine", "melon", "kiwi", "poire", "endive", "radis"],
  "Boucherie": ["poulet", "boeuf", "bœuf", "porc", "jambon", "lardon", "steak", "saucisse", "merguez",
    "dinde", "veau", "agneau", "escalope", "rôti", "roti", "viande"],
  "Poissonnerie": ["saumon", "cabillaud", "poisson", "crevette", "moule", "colin", "truite", "sole"],
  "Crèmerie": ["lait", "beurre", "yaourt", "fromage", "crème", "creme", "oeuf", "œuf", "gruyère",
    "gruyere", "mozzarella", "chèvre", "chevre", "féta", "feta", "parmesan", "pâte brisée",
    "pâte feuilletée", "gnocchi", "reblochon"],
  "Boulangerie": ["pain", "baguette", "brioche", "croissant", "viennoiserie"],
  "Surgelés": ["surgelé", "surgele", "glace", "frites", "pizza surgelée"],
  "Boissons": ["eau", "jus", "vin", "bière", "biere", "soda", "café", "cafe", "thé", "sirop"],
  "Entretien": ["lessive", "liquide vaisselle", "éponge", "eponge", "papier toilette", "sopalin",
    "sac poubelle", "nettoyant", "javel", "balai", "serpill", "adoucissant", "detergent", "détergent"],
  /* L'hygiène quitte l'entretien : on ne range pas son dentifrice avec la
     lessive, et on ne le cherche pas au même endroit. */
  "Hygiène": ["savon", "shampoing", "shampooing", "gel douche", "dentifrice", "brosse à dents",
    "mouchoir", "couche", "coton", "rasoir", "déodorant", "deodorant", "crème solaire",
    "serviette hygiénique", "tampon", "papier hygi"],
  "Maison": ["pile", "ampoule", "bougie", "allumette", "scotch", "colle", "vis ", "clou",
    "sac congélation", "film étirable", "papier cuisson", "aluminium", "vaisselle jetable"],
  "Animaux": ["croquette", "litière", "litiere", "pâtée", "patee", "friandise chien",
    "friandise chat", "foin", "graines pour"],
  /* EN DERNIER, volontairement. L'épicerie n'existait pas dans ce dictionnaire :
     elle servait de valeur par défaut, et tout l'inconnu y tombait en silence.
     Maintenant que l'inconnu va dans « À catégoriser », il faut reconnaître les
     basiques, sinon ce rayon deviendrait un fourre-tout.
     Placée à la fin parce que la comparaison se fait sur des morceaux de mots :
     « liquide vaisselle » contient « sel ». Les rayons précis passent d'abord. */
  "Épicerie": ["riz", "pâte", "pate", "farine", "sucre", "sel", "poivre", "huile", "vinaigre",
    "conserve", "lentille", "pois chiche", "semoule", "couscous", "quinoa", "boulgour",
    "céréale", "cereale", "biscuit", "gâteau", "gateau", "chocolat", "confiture", "miel",
    "compote", "moutarde", "ketchup", "mayonnaise", "bouillon", "épice", "epice", "levure",
    "sachet de", "bocal", "boîte de", "boite de", "coulis", "concentré de", "concentre de"]
};
function devinerRayon(nom) {
  const n = nom.toLowerCase();
  for (const r of etat.recettes) {
    for (const i of (r.ingredients || [])) {
      if (i.nom && i.nom.toLowerCase() === n) return i.rayon || "À catégoriser";
    }
  }
  /* Les expressions d'abord : « sauce tomate » avant « tomate ». */
  for (const e of EXPRESSIONS_RAYONS) {
    if (n.includes(e[0])) return e[1];
  }
  for (const rayon in MOTS_RAYONS) {
    if (MOTS_RAYONS[rayon].some((m) => n.includes(m))) return rayon;
  }
  /* Non reconnu : on le dit, au lieu de le ranger d'office en « Épicerie ».
     Le rayon « À catégoriser » s'affiche en tête de la réserve et de la liste
     de courses : on le corrige d'un geste, quand on veut. */
  return "À catégoriser";
}

/* ============================ 11. Ecran de panne ============================ */

/* Regle d'or : l'application ne doit JAMAIS rester blanche. Si quelque chose
   casse au demarrage, on affiche ce qui s'est passe, en clair, avec de quoi
   s'en sortir sans ordinateur. */
let panneAffichee = false;

function ecranPanne(err, titre, conseil) {
  if (panneAffichee) return;
  panneAffichee = true;

  const app = document.getElementById("ecran-app");
  const el = document.getElementById("ecran-connexion");
  if (!el) return;
  if (app) app.hidden = true;
  el.hidden = false;

  const morceaux = [];
  if (err) {
    if (err.code) morceaux.push(err.code);
    if (err.message) morceaux.push(err.message);
    if (!morceaux.length) morceaux.push(String(err));
  }
  (window.__erreursDemarrage || []).forEach((t) => { if (morceaux.indexOf(t) === -1) morceaux.push(t); });
  const detail = morceaux.join(" — ") || "Aucun message technique.";

  /* Message adapte a la cause la plus probable */
  let explication = conseil;
  if (!explication && err && err.code === "permission-denied") {
    explication = "Firebase refuse l'accès aux données. Le plus souvent : les règles de sécurité " +
      "publiées ne correspondent pas à la version de l'application qui est en ligne.";
  }
  if (!explication) explication = "L'application n'a pas réussi à démarrer.";

  el.innerHTML =
    '<div class="logo-tribu">🏡</div>' +
    "<h1>" + esc(titre || "Ça coince") + "</h1>" +
    '<p class="intro">' + esc(explication) + "</p>" +
    '<div class="carte"><div class="carte-titre">Détail technique</div>' +
    '<p style="font-size:.78rem;line-height:1.5;word-break:break-word;margin:0">' +
    esc(detail) + "</p></div>" +
    '<button class="btn principal plein" data-role="recharger" style="margin-bottom:.5rem">Recharger la page</button>' +
    '<button class="btn plein" data-role="vider" style="margin-bottom:.5rem">Vider le cache et recharger</button>' +
    '<button class="btn plein danger" data-role="zero">Repartir de zéro sur cet appareil</button>' +
    '<p class="aide centre" style="margin-top:1rem">Si ça ne suffit pas, faites une capture ' +
    "d'écran de ce message.</p>";

  el.querySelector('[data-role="recharger"]').onclick = () => location.reload();
  el.querySelector('[data-role="vider"]').onclick = async () => {
    await viderCacheLocal();
    location.reload();
  };
  const bz = el.querySelector('[data-role="zero"]');
  let confirme = false;
  bz.onclick = async () => {
    if (!confirme) {
      confirme = true;
      bz.textContent = "Confirmer ? Vos données de CET appareil seront effacées";
      return;
    }
    localStorage.clear();
    await viderCacheLocal();
    location.reload();
  };
}

async function viderCacheLocal() {
  try {
    if (window.caches) {
      const noms = await caches.keys();
      await Promise.all(noms.map((n) => caches.delete(n)));
    }
    if (navigator.serviceWorker) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
  } catch (e) { console.warn("Nettoyage du cache impossible :", e); }
}

window.__signalerPanne = function () {
  const app = document.getElementById("ecran-app");
  if (app && !app.hidden) return;          // l'app tourne : ce n'est pas fatal
  if (!document.getElementById("chargement")) return;
  ecranPanne(null);
};

/* ============================ 12. Demarrage ============================ */

async function demarrer() {
  try {
    await demarrerVraiment();
  } catch (err) {
    console.error("Démarrage impossible :", err);
    ecranPanne(err);
  }
}

async function demarrerVraiment() {
  const th = localStorage.getItem("tribu:theme");
  if (th && th !== "auto") document.documentElement.dataset.theme = th;
  appliquerPalette(paletteActuelle());     // la palette choisie sur cet appareil

  /* Sur téléphone, la mémoire d'un site peut être effacée pour faire de la
     place. Cette demande met la session à l'abri quand le navigateur la
     comprend, et ne coûte rien quand il l'ignore (c'est le cas de Safari). */
  if (navigator.storage && navigator.storage.persist) {
    try { navigator.storage.persist(); } catch (e) { /* sans importance */ }
  }

  await Store.preparer();

  /* Un lien magique a-t-il ete ouvert ? On le termine AVANT tout le reste :
     c'est lui qui rattache cet appareil a une famille. Sans l'adresse en
     memoire ici, on la demande — Firebase l'exige quand le lien est ouvert
     sur un autre appareil que celui qui l'a demande. */
  if (Store.lienCompte) {
    $("#ecran-connexion").hidden = false;
    const adresse = Store.emailRetenu();
    if (!adresse) { Connexion.aller("confirmerEmail", {}); return; }
    await terminerLienCompte(adresse);
    return;
  }

  /* Un lien d'invitation a-t-il ete ouvert ? */
  const params = new URLSearchParams(location.search);
  const jetonUrl = params.get("invitation");
  if (jetonUrl) {
    history.replaceState(null, "", adresseNette());
    $("#ecran-connexion").hidden = false;
    Connexion.aller("invitation", { jetonPreRempli: jetonUrl });
    return;
  }

  const s = lireSession();
  if (s && s.code && s.membreId) {
    const ok = await entrerDansFamille(s.code, s.membreId, { reprendreVue: true });
    if (ok) return;
    /* Echec : soit la famille a disparu, soit Firebase refuse l'accès.
       Dans le second cas on l'explique au lieu de renvoyer bêtement au départ. */
    if (Store.derniereErreur && Store.derniereErreur.code === "permission-denied") {
      accesPerdu(s.code);          // même écran neutre qu'en cours d'utilisation (étape 3)
      return;
    }
    /* UNE PANNE N'EST PAS UN DEPART.

       Quand Firebase ne repond pas, l'application se replie en mode local et
       l'ouverture de la famille echoue forcement : elle n'existe pas sur ce
       telephone. On effacait alors la session — donc une simple coupure de
       reseau, un metro, un avion, deconnectait la personne et lui redemandait
       son profil et son code a 4 chiffres au retour.

       On la garde. L'ecran d'accueil affiche le bandeau de panne et son bouton
       « Reessayer », et la session repart toute seule des que le reseau est la.
       On n'efface que si la famille est vraiment introuvable, serveur joignable. */
    if (!(Store.mode === "local" && (Store.raison === "erreur" || Store.raison === "stockage"))) {
      ecrireSession(null);
    }
  }
  $("#ecran-connexion").hidden = false;
  Connexion.aller("accueil");
}

if ("serviceWorker" in navigator &&
  (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => { }));
}

document.addEventListener("DOMContentLoaded", demarrer);
