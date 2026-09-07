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
const RAYONS = ["Fruits & légumes", "Boucherie", "Poissonnerie", "Crèmerie",
  "Boulangerie", "Épicerie", "Surgelés", "Boissons", "Entretien", "Autre"];
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
const REGLAGES_DEFAUT = { convives: 4, pointsRepas: 15, antiGaspi: true };
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

const VERSION = "0.24 bêta";

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

function surAncienneAdresse() {
  return location.hostname === HOTE_ANCIEN;
}

/* Unites utilisables pour les ingredients, le stock et les courses.
   "" = pas d'unite, on compte simplement (4 carottes). */
const UNITES = ["", "g", "kg", "ml", "cl", "l", "boîte(s)", "paquet(s)", "pot(s)",
  "bocal(aux)", "sachet(s)", "tranche(s)", "bouquet(s)", "branche(s)", "gousse(s)",
  "tête(s)", "bûche(s)", "morceau(x)", "pincée(s)", "c. à soupe", "c. à café"];

/* Familles d'unites convertibles entre elles, avec leur valeur de reference. */
const FAMILLES_UNITES = {
  masse: { g: 1, kg: 1000 },
  volume: { ml: 1, cl: 10, l: 1000 }
};

/* Rubriques rangees dans le document principal de la famille.
   `etats` et `journal` sont a part : ils ont leurs propres regles de securite. */
const CLES_DOC = ["famille", "membres", "membresUid", "adminsUid", "appareils", "taches",
  "bareme", "courses", "listesCourses", "stock", "recettes", "repas", "notes", "cadeaux",
  "tarifs", "echanges", "reglages", "jetonUtilise"];

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
function ouvrirFeuille(titre, html, apres) {
  const f = $("#feuille");
  f.innerHTML = '<div class="feuille-poignee"></div>' +
    (titre ? "<h3>" + esc(titre) + "</h3>" : "") + html;
  $("#voile").classList.add("on");
  if (apres) apres(f);
}
function fermerFeuille() {
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
function codeInvitation() {
  const alea = crypto.getRandomValues(new Uint8Array(12));
  let s = "";
  for (let i = 0; i < 12; i++) s += LETTRES_CODE[alea[i] % LETTRES_CODE.length];
  return s;
}
/* Presentation en trois groupes : plus facile a relire et a dicter. */
function codeLisible(jeton) {
  const t = String(jeton || "");
  if (!/^[A-Z2-9]{12}$/.test(t)) return t;
  return t.slice(0, 4) + "-" + t.slice(4, 8) + "-" + t.slice(8);
}

/* Repere de famille tire au sort. Il sert d'identifiant du dossier : deux
   familles ne peuvent pas porter le meme. Comme on n'a pas le droit de lire
   les familles des autres, impossible de verifier a l'avance qu'il est libre
   -> on le prend assez long pour que la collision soit negligeable. */
function nouveauRepere() {
  const lettres = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";   // sans I, O, 0, 1
  let s = "";
  const alea = crypto.getRandomValues(new Uint8Array(6));
  for (let i = 0; i < 6; i++) s += lettres[alea[i] % lettres.length];
  return "MAISON-" + s;
}

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
    membres: [], membresUid: [], adminsUid: [], appareils: {},
    taches: [], bareme: {}, etats: {},
    courses: [], listesCourses: [], stock: [], recettes: [], repas: {}, notes: [],
    cadeaux: [], tarifs: {}, echanges: [], journal: [],
    reglages: Object.assign({}, REGLAGES_DEFAUT), jetonUtilise: null
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
  filtresRecettes: [],           // "perso", "vege", "rapide", "leger"
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

function recettesFiltrees() {
  const q = ui.rechercheRecette.toLowerCase().trim();
  const f = ui.filtresRecettes;
  return etat.recettes.filter((r) => {
    if (q && !r.nom.toLowerCase().includes(q) &&
      !(r.ingredients || []).some((i) => i.nom.toLowerCase().includes(q))) return false;
    if (f.includes("perso") && !estRecettePerso(r)) return false;
    if (f.includes("vege") && !r.vegetarien) return false;
    if (f.includes("rapide") && !r.rapide) return false;
    if (f.includes("leger") && r.type !== "leger") return false;
    if (f.includes("saison") && !estDeSaison(r)) return false;
    if (f.includes("thermomix") && !r.thermomix) return false;
    if (f.includes("dessert") && !estDessert(r)) return false;
    if (f.includes("plat") && estDessert(r)) return false;
    /* Les profils santé voyagent dans la même liste, préfixés : « sante:coeur ».
       Plusieurs profils cochés se cumulent — le plat doit tenir les deux. */
    for (let k = 0; k < f.length; k++) {
      if (f[k].indexOf("sante:") === 0 && !aLeProfil(r, f[k].slice(6))) return false;
    }
    return true;
  }).sort(comparerRecettes(ui.triRecettes));
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
function estAdmin() { return !!(moi && moi.role === "admin"); }

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
    if (o.depuis && String(e.date || "") < o.depuis) return s;
    return s + e.delta;
  }, 0);
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
  const ajoute = (u, estAdminDuProfil) => {
    if (!u) return;
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
    if (uids.indexOf(u) === -1 && !orphelin(u)) uids.push(u);
  });
  if (Store.uid && uids.indexOf(Store.uid) === -1) uids.push(Store.uid);

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
  uid: null,              // identifiant de CET appareil
  raison: "",
  _db: null, _fs: null, _unsubs: [],

  configOk() {
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
    const cle = (window.CONFIG_FIREBASE || {}).cleAppCheck;
    if (!cle || cle === "A_REMPLIR") return;
    try {
      const ac = await import(base + "firebase-app-check.js");
      ac.initializeAppCheck(a, {
        provider: new ac.ReCaptchaV3Provider(cle),
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
      const [app, auth, fs] = await Promise.all([
        import(base + "firebase-app.js"),
        import(base + "firebase-auth.js"),
        import(base + "firebase-firestore.js")
      ]);
      const a = app.initializeApp(window.CONFIG_FIREBASE);
      await this._activerAppCheck(a, base);
      const au = auth.getAuth(a);
      const cred = await auth.signInAnonymously(au);
      this._fs = fs;
      this._db = fs.getFirestore(a);
      this.uid = cred.user.uid;
      this.mode = "nuage";
    } catch (err) {
      console.warn("Firebase indisponible, passage en mode local :", err);
      this.mode = "local";
      this.raison = "erreur";
      this.uid = this._uidLocal();
    }
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
      await this._fs.setDoc(this._fs.doc(this._db, "reperes", code),
        { creeLe: Date.now() });
    } catch (err) {
      console.warn("Repère non enregistré dans l'annuaire :", err);
    }
  },

  async creer(code, donnees) {
    this.derniereErreur = null;
    if (this.mode !== "nuage") { this._ecrireLocal(code, donnees); return true; }
    try {
      const principal = {};
      CLES_DOC.forEach((c) => { principal[c] = propre(donnees[c]); });
      await this._fs.setDoc(this._fs.doc(this._db, "familles", code), principal);
      return true;
    } catch (err) {
      console.warn("Création refusée :", err);
      this.derniereErreur = err;
      return false;
    }
  },

  abonner(code, cb) {
    this.code = code;
    this._detacher();
    if (this.mode === "nuage") {
      const d = this._db, fs = this._fs;
      const surErreur = (err) => console.warn("Ecoute interrompue :", err);
      this._unsubs.push(fs.onSnapshot(fs.doc(d, "familles", code), (s) => {
        if (s.exists()) cb(s.data(), "doc");
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
    } else {
      const surStockage = (ev) => {
        if (ev.key === this._cleLocale(code) && ev.newValue) cb(JSON.parse(ev.newValue), "tout");
      };
      window.addEventListener("storage", surStockage);
      this._unsubs.push(() => window.removeEventListener("storage", surStockage));
    }
  },

  _detacher() {
    this._unsubs.forEach((u) => { try { u(); } catch (e) { } });
    this._unsubs = [];
  },

  /* --- ecriture du document principal (une ou plusieurs rubriques) --- */
  async ecrire(cles) {
    if (this.mode !== "nuage") { this._ecrireLocal(this.code, etat); return; }
    const morceau = {};
    cles.forEach((c) => { if (CLES_DOC.indexOf(c) !== -1) morceau[c] = propre(etat[c]); });
    if (!Object.keys(morceau).length) return;
    try {
      await this._fs.setDoc(this._fs.doc(this._db, "familles", this.code), morceau, { merge: true });
    } catch (err) {
      console.warn("Echec de l'enregistrement :", err);
      toast("Enregistrement refusé (droits insuffisants ?)");
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
    if (this.mode !== "nuage") {
      const t = JSON.parse(localStorage.getItem("tribu:retours") || "[]");
      t.unshift(retour);
      localStorage.setItem("tribu:retours", JSON.stringify(t.slice(0, 50)));
      return true;
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

  /* --- invitations --- */
  async creerInvitation(inv) {
    this.derniereErreur = null;
    if (this.mode !== "nuage") {
      const t = JSON.parse(localStorage.getItem("tribu:invitations") || "{}");
      t[inv.jeton] = inv;
      localStorage.setItem("tribu:invitations", JSON.stringify(t));
      return true;
    }
    try {
      const { jeton, ...corps } = inv;
      await this._fs.setDoc(this._fs.doc(this._db, "invitations", jeton), propre(corps));
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
      const t = JSON.parse(localStorage.getItem("tribu:invitations") || "{}");
      return t[jeton] || null;
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

  async consommerInvitation(jeton) {
    if (this.mode !== "nuage") {
      const t = JSON.parse(localStorage.getItem("tribu:invitations") || "{}");
      if (t[jeton]) { t[jeton].utilisee = true; t[jeton].utiliseeLe = Date.now(); }
      localStorage.setItem("tribu:invitations", JSON.stringify(t));
      return;
    }
    await this._fs.setDoc(this._fs.doc(this._db, "invitations", jeton),
      { utilisee: true, utiliseeLe: Date.now() }, { merge: true });
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
      recalculerIndexSur(d);
      this._ecrireLocal(code, d);
      return true;
    }
    try {
      const morceau = {
        membresUid: this._fs.arrayUnion(this.uid),
        appareils: { [this.uid]: membreId },
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

  const v = etatVide();
  const garde = { etats: etat.etats, journal: etat.journal };
  etat = Object.assign(v, d || {});
  if (portee === "doc") {          // le document principal ne porte pas ces deux-la
    etat.etats = garde.etats;
    etat.journal = garde.journal;
  }
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

async function entrerDansFamille(code, membreId, opts) {
  const d = await Store.charger(code);
  if (!d) return false;
  appliquerDonnees(d);
  moi = membre(membreId);
  if (!moi) return false;
  Store.code = code;
  Store.abonner(code, (nouv, portee) => { appliquerDonnees(nouv, portee); rendre(); });
  ecrireSession({ code: code, membreId: membreId });
  localStorage.setItem("tribu:derniereFamille", code);
  verifierRepere(code);          // en arrière-plan, sans bloquer l'ouverture
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
      await crediterTache(t, cle, beneficiaire);
      rendre();
      const m = membre(beneficiaire);
      toast(m && t.points ? "+" + t.points + " points pour " + m.prenom + " 🌟" : "Validé");
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

    await crediterTache(t, cle, gagnant);
    rendre();
    const m = membre(gagnant);
    toast(m && t.points ? "+" + t.points + " points pour " + m.prenom + " 🌟" : "Validé");
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

  /* Une liste dictée ou recopiée arrive rarement article par article : on
     accepte « pain, lait, œufs » comme trois lignes. Les séparateurs sont la
     virgule, le point-virgule et le retour à la ligne. */
  ajouterPlusieursCourses(texte, opts) {
    const noms = String(texte || "").split(/[\n,;]+/)
      .map((x) => x.trim()).filter(Boolean);
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
    /* Même tolérance que pour la réserve : « Oeufs » dans la liste et « Œufs »
       au minimum, c'est le même article — on ne l'ajoute pas deux fois. */
    const dejaLa = new Set(etat.courses.filter((c) => !c.coche).map((c) => cleArticle(c.nom)));
    const aAjouter = bas.filter((s) => !dejaLa.has(cleArticle(s.nom)));
    if (!aAjouter.length) { toast("Ils sont déjà dans la liste de courses"); return; }
    const ok = await confirmer("Ajouter " + aAjouter.length + " article(s) à la liste de courses ?",
      { titre: "Réapprovisionner", ok: "Ajouter" });
    if (!ok) return;
    const cible = listeCourante().id;
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
async function crediterTache(t, cle, beneficiaire) {
  if (!beneficiaire || !t.points) return;
  await ajouterAuJournal({
    id: "t|" + t.id + "|" + clePeriode(t.frequence, new Date()),
    type: "tache", refId: t.id, cleEtat: cle.replace(/\|/g, "__"),
    membreId: beneficiaire, delta: t.points, motif: "Tâche : " + t.nom
  });
}

/* Ajoute une ligne au journal des points.
   Le serveur verifie le montant : si la ligne existe deja ou si le montant ne
   correspond pas au bareme, elle est refusee et rien n'est credite. */
async function ajouterAuJournal(entree) {
  entree.date = new Date().toISOString();
  entree.parAdmin = moi ? moi.id : null;
  const ok = await Store.ecrireJournal(entree);
  if (!ok) return false;
  if (!etat.journal.some((x) => x.id === entree.id)) etat.journal.unshift(entree);
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
    const inv = {
      jeton: codeInvitation(),
      famille: etat.famille.code,
      nomFamille: etat.famille.nom,
      pour: cible ? cible.id : "nouveau",
      profil: cible ? {
        id: cible.id, prenom: cible.prenom, emoji: cible.emoji || "🙂",
        role: cible.role || "membre",
        pinHash: cible.pinHash || null, pinSel: cible.pinSel || null,
        pin: cible.pinHash ? null : (cible.pin || null)
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
    if (inv.utilisee) return { ok: false, message: "Cette invitation a déjà été utilisée." };
    if (inv.expireLe && inv.expireLe < Date.now()) return { ok: false, message: "Cette invitation a expiré." };
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
     nom de la tribu. Ni code de famille secret, ni prénoms, ni points. */
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
      lien: r.lien || "",
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
      etapes: (fiche.etapes || []).slice(0, 20), lien: fiche.lien || "",
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
      "avoine", "sarrasin", "epeautre", "millet"]
  },
  feculentsRaffines: {
    mots: ["riz", "pate", "spaghetti", "tagliatelle", "nouille", "vermicelle",
      "semoule", "pain", "farine", "gnocchi", "lasagne", "chapelure",
      "pomme de terre", "puree", "polenta", "tortilla", "wrap", "frite",
      "couscous", "baguette", "chips"],
    sauf: ["pate de curry", "pate de miso", "riz complet", "pain complet",
      "farine complete", "pate a tartiner"]
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
  JOURS.forEach((j) => {
    ["midi", "soir"].forEach((m) => {
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
  const plan = repartitionSouhaitee(cases.length, quotas).plan;

  /* L'anti-gaspillage est un réglage de la famille, pas une case à cocher à
     chaque génération : on le lit là, sauf si l'appelant tranche lui-même. */
  const antiGaspi = opt.antiGaspi !== undefined
    ? !!opt.antiGaspi : reglagesFamille().antiGaspi !== false;
  const recents = recettesUtiliseesRecemment(cleSem, Math.max(0, Number(opt.semaines) || 3));
  const utilises = new Set();
  /* Combien de plats de chaque genre sont déjà posés dans la semaine. */
  const genresPoses = {};
  const bilan = { poisson: 0, viande: 0, vege: 0, autre: 0 };

  if (!etat.repas[cleSem]) etat.repas[cleSem] = {};

  cases.forEach((c, rang) => {
    const voulu = plan[rang];
    let meilleur = null, meilleurScore = -1e9;
    pool.forEach((r) => {
      let s = Math.random() * 1.5;
      const cat = categorieRepas(r);
      if (utilises.has(r.id)) s -= 40;
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
    etat.repas[cleSem][c.jour + "-" + c.moment] = { recetteId: meilleur.id, texte: "" };
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
      const cle = ing.nom.toLowerCase().trim();
      if (!parNom.has(cle)) {
        parNom.set(cle, { nom: ing.nom, rayon: ing.rayon || "Autre", morceaux: [] });
      }
      parNom.get(cle).morceaux.push({ qte: qteAjustee(ing.qte, facteur), unite: ing.unite || "" });
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
  }).sort((a, b) =>
    RAYONS.indexOf(a.rayon) - RAYONS.indexOf(b.rayon) || a.nom.localeCompare(b.nom));
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
    const besoin = qteAjustee(ing.qte, facteur);
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
  menus: ["Menus", "Repas de la semaine"],
  notes: ["Rappels", "À ne pas oublier"],
  points: ["Points & cadeaux", "La boutique de la famille"],
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
  $("#mes-points").textContent = pointsDe(moi.id);

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
function qteAjustee(qte, facteur) {
  const n = nombre(qte);
  if (n === null || !facteur || facteur === 1) return qte;
  const v = n * facteur;
  const arrondi = v >= 10 ? Math.round(v) : Math.round(v * 10) / 10;
  return texteNombre(arrondi);
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
  ui.vue = vue;
  memoriserVue();
  window.scrollTo({ top: 0 });
  rendre();
}

/* On retient l'onglet ouvert : recharger la page ne doit pas ramener
   brutalement à l'accueil au milieu de ce qu'on était en train de faire. */
function memoriserVue() {
  try {
    localStorage.setItem("tribu:vue", JSON.stringify({
      vue: ui.vue,
      ongletCourses: ui.ongletCourses,
      listeActive: ui.listeActive || null
    }));
  } catch (e) { /* sans importance */ }
}

function restaurerVue() {
  let v;
  try { v = JSON.parse(localStorage.getItem("tribu:vue") || "null"); } catch (e) { return; }
  if (!v || !v.vue || !Vues[v.vue]) return;
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
    case "recettes-partagees": Formulaires.catalogue(); break;
    case "recettes-maj": Formulaires.majRecettes(); break;
    case "recettes-filtre": {
      const f = b.dataset.valeur;
      const i = ui.filtresRecettes.indexOf(f);
      if (i === -1) ui.filtresRecettes.push(f); else ui.filtresRecettes.splice(i, 1);
      rendre();
      break;
    }
    case "recettes-filtre-vider": ui.filtresRecettes = []; ui.rechercheRecette = ""; rendre(); break;
    case "recettes-tri": ui.triRecettes = b.dataset.valeur; rendre(); break;
    case "recettes-filtres": ui.filtresOuverts = !ui.filtresOuverts; rendre(); break;
    case "recettes-lettre": {
      /* Saut instantané, pas « smooth » : sur trente mille pixels le
         défilement animé est long et donne le tournis — et il est purement
         et simplement ignoré par certains navigateurs. */
      const cible = document.getElementById("lettre-" + b.dataset.valeur);
      if (cible) cible.scrollIntoView({ block: "start" });
      break;
    }
    case "sante-info": Formulaires.profilsSante(b.dataset.valeur || null); break;

    case "note-toggle": Actions.basculerNote(v); break;
    case "note-nouvelle": Formulaires.note(null); break;
    case "note-editer": Formulaires.note(v); break;
    case "notes-filtre": ui.filtreNotes = b.dataset.valeur; rendre(); break;
    case "notes-qui": ui.filtreQuiNotes = b.dataset.valeur || ""; rendre(); break;
    case "admin-onglets": Formulaires.onglets(); break;
    case "admin-aller": {
      const cible = document.getElementById("admin-" + b.dataset.valeur);
      if (cible) cible.scrollIntoView({ block: "start" });
      break;
    }
    case "admin-reglages": Formulaires.reglagesFamille(); break;
    case "admin-objectif": Formulaires.objectif(); break;
    /* `data-semaine` est facultatif : l'accueil peut proposer un repas de la
       semaine précédente, il ne faut pas valider la case d'à côté. */
    case "repas-fait": Actions.repasFait(b.dataset.semaine || ui.semaine, b.dataset.jour, b.dataset.moment); break;
    case "repas-valider": Actions.validerRepas(b.dataset.semaine || ui.semaine, b.dataset.jour, b.dataset.moment); break;
    case "repas-annuler": Actions.annulerRepasFait(b.dataset.semaine || ui.semaine, b.dataset.jour, b.dataset.moment); break;
    case "repas-reserve": Formulaires.consommerRepas(b.dataset.jour, b.dataset.moment); break;

    case "cadeau-demander": Actions.demanderCadeau(v); break;
    case "cadeau-nouveau": Formulaires.cadeau(null); break;
    case "cadeau-editer": Formulaires.cadeau(v); break;
    case "echange-accorder": Actions.accorderEchange(v); break;
    case "echange-refuser": Actions.refuserEchange(v); break;
    case "points-ajuster": Formulaires.ajustementPoints(v); break;
    case "points-historique": Formulaires.historique(); break;
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
    case "demenagement": Formulaires.demenagement(); break;
    case "masquer-conseil-icone":
      localStorage.setItem("tribu:conseilEcranAccueil", "1");
      rendre();
      break;
    case "maj-liste": Formulaires.misesAJour(); break;
    case "deconnexion": fermerFeuille(); deconnecter(); break;

    case "theme": {
      const actuel = document.documentElement.dataset.theme || "auto";
      const suivant = actuel === "auto" ? "light" : actuel === "light" ? "dark" : "auto";
      if (suivant === "auto") delete document.documentElement.dataset.theme;
      else document.documentElement.dataset.theme = suivant;
      localStorage.setItem("tribu:theme", suivant);
      Formulaires.menuProfil();
      break;
    }
    case "copier": {
      const t = b.dataset.texte || "";
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(() => toast("Copié"));
      else toast(t);
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

/* Recherche dans la bibliotheque de recettes */
document.addEventListener("input", (e) => {
  if (e.target.id !== "champ-recherche-recette") return;
  ui.rechercheRecette = e.target.value;
  ui.focus = "champ-recherche-recette";
  rendre();
});

/* Devine le rayon d'un article */
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
    "sac poubelle", "nettoyant", "savon", "shampoing", "dentifrice", "mouchoir", "couche"]
};
function devinerRayon(nom) {
  const n = nom.toLowerCase();
  for (const r of etat.recettes) {
    for (const i of (r.ingredients || [])) {
      if (i.nom && i.nom.toLowerCase() === n) return i.rayon || "Épicerie";
    }
  }
  for (const rayon in MOTS_RAYONS) {
    if (MOTS_RAYONS[rayon].some((m) => n.includes(m))) return rayon;
  }
  return "Épicerie";
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

  /* Sur téléphone, la mémoire d'un site peut être effacée pour faire de la
     place. Cette demande met la session à l'abri quand le navigateur la
     comprend, et ne coûte rien quand il l'ignore (c'est le cas de Safari). */
  if (navigator.storage && navigator.storage.persist) {
    try { navigator.storage.persist(); } catch (e) { /* sans importance */ }
  }

  await Store.preparer();

  /* Un lien d'invitation a-t-il ete ouvert ? */
  const params = new URLSearchParams(location.search);
  const jetonUrl = params.get("invitation");
  if (jetonUrl) {
    history.replaceState(null, "", location.pathname);
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
      ecranPanne(Store.derniereErreur, "Accès refusé");
      return;
    }
    ecrireSession(null);
  }
  $("#ecran-connexion").hidden = false;
  Connexion.aller("accueil");
}

if ("serviceWorker" in navigator &&
  (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => { }));
}

document.addEventListener("DOMContentLoaded", demarrer);
