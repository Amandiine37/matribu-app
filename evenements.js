/* MATRIBU ÉVÉNEMENTS — LE MODULE (18/10/2026)

   Un événement, c'est une date qui demande de l'organisation : Noël, un
   anniversaire, un réveillon, un repas de famille. Il porte son menu par
   services et les envies de chacun. Tout est ici : les types, les écrans,
   les feuilles de saisie, les actions et les clics.

   CE FICHIER EST UN MODULE À PART, comme petits.js. Chaque appel depuis le
   reste de l'application est protégé par `typeof` :

     app.js          l'onglet ne se propose que si evenementsActifs() existe,
                     aller() renvoie à l'accueil, les actions se greffent sur
                     Actions, les clics passent d'abord par routerEvenements()
     vues.js         le décompte de l'accueil ne s'affiche pas sans la fonction
     formulaires.js  la case de l'option et les ingrédients vers les courses

   NE PAS LIVRER CE FICHIER SUFFIT À NE PAS LIVRER LA FONCTION. Rien à
   désactiver, rien qui casse : l'onglet n'apparaît pas, la case de réglage
   non plus, et la valeur déjà enregistrée dans la base n'est pas touchée —
   remettre le fichier rend tout. Une vraie version « sans le module » doit
   retirer AUSSI la ligne <script src="evenements.js"> d'index.html et son
   entrée dans sw.js, sinon le navigateur signale un fichier manquant dans
   sa console (sans rien casser pour autant).

   CE QUI N'EST PAS ICI, et c'est voulu : estDeFete() reste dans app.js
   parce que le générateur de la semaine s'en sert pour écarter les plats de
   fête de ses tirages, et le cahier de fête reste dans recettes.js parce que
   ce sont des recettes de la bibliothèque, pas de l'organisation. */

/* ======================= 1. CE QU'UN ÉVÉNEMENT EST ======================= */

/* ======================== LES ÉVÉNEMENTS (18/10/2026) ========================

   Un événement, c'est une date qui demande de l'organisation : Noël, un
   anniversaire, un réveillon, un repas de famille. Il porte son menu (par
   services, parce qu'un réveillon n'est pas un plat du soir) et les envies de
   chacun. Option de la famille : sans elle, rien de tout cela n'existe.

   Le TYPE décide de ce qu'on propose : un anniversaire et un Noël veulent des
   envies, un simple repas de famille n'en a que faire. */
const TYPES_EVENEMENT = [
  { val: "noel", nom: "Noël", emoji: "🎄", souhaits: true },
  { val: "nouvelAn", nom: "Nouvel An", emoji: "🎆", souhaits: false },
  { val: "anniversaire", nom: "Anniversaire", emoji: "🎂", souhaits: true },
  { val: "repas", nom: "Repas de famille", emoji: "🍽️", souhaits: false },
  { val: "fete", nom: "Fête", emoji: "🎉", souhaits: false },
  { val: "autre", nom: "Autre", emoji: "📌", souhaits: true }
];
/* Les services d'un vrai repas de fête, dans l'ordre où on les sert. Aucun
   n'est obligatoire : on remplit ce qu'on veut, et le reste n'apparaît pas. */
const SERVICES_FETE = [
  { val: "apero", nom: "Apéritif", emoji: "🥂" },
  { val: "entree", nom: "Entrée", emoji: "🥗" },
  { val: "plat", nom: "Plat", emoji: "🍖" },
  { val: "accompagnement", nom: "Accompagnement", emoji: "🥔" },
  { val: "fromage", nom: "Fromage", emoji: "🧀" },
  { val: "dessert", nom: "Dessert", emoji: "🍰" },
  { val: "boisson", nom: "Boissons", emoji: "🍷" }
];
function evenementsActifs() { return reglagesFamille().evenements === true; }

/* ===================== 2. LIRE UN ÉVÉNEMENT ===================== */

function infoTypeEvenement(v) {
  return TYPES_EVENEMENT.find((t) => t.val === v) || TYPES_EVENEMENT[TYPES_EVENEMENT.length - 1];
}
function infoService(v) { return SERVICES_FETE.find((s) => s.val === v) || SERVICES_FETE[2]; }
/* Les plus proches d'abord : c'est l'ordre dans lequel on s'en occupe. Ceux
   qui sont passés ferment la marche, du plus récent au plus ancien. */
function evenementsTries() {
  const auj = isoDate(new Date());
  const l = (etat.evenements || []).slice();
  const passe = (e) => String(e.date || "9999-99-99") < auj;
  return l.sort((a, b) => {
    if (passe(a) !== passe(b)) return passe(a) ? 1 : -1;
    const c = String(a.date || "9999").localeCompare(String(b.date || "9999"));
    return passe(a) ? -c : c;
  });
}
function evenement(eid) { return (etat.evenements || []).find((e) => e.id === eid) || null; }
function evenementsAVenir() {
  const auj = isoDate(new Date());
  return evenementsTries().filter((e) => e.date && e.date >= auj);
}
/* « dans 3 jours », « demain », « aujourd'hui ! » — ce qu'on veut lire d'un
   coup d'œil sur l'accueil. */
function decompteEvenement(e) {
  if (!e || !e.date) return "";
  const n = joursEntre(isoDate(new Date()), e.date);
  if (n < 0) return n === -1 ? "hier" : "il y a " + pluriel(-n, "jour", "jours");
  if (n === 0) return "c'est aujourd'hui !";
  if (n === 1) return "demain";
  return "dans " + pluriel(n, "jour", "jours");
}
function convivesEvenement(e) {
  const n = Number(e && e.convives);
  return n > 0 ? n : nbConvives();
}
/* Les plats posés sur un service : { recetteId } pour un plat du cahier,
   { texte } pour ce qu'on écrit à la main (« la bûche de la boulangerie »). */
function platsDuService(e, service) {
  return (((e && e.menu) || {})[service] || []).filter(Boolean);
}
function menuVide(e) {
  return !SERVICES_FETE.some((s) => platsDuService(e, s.val).length);
}
function nomDuPlat(p) {
  if (!p) return "";
  if (p.recetteId) {
    const r = etat.recettes.find((x) => x.id === p.recetteId);
    return r ? r.nom : "(plat retiré du cahier)";
  }
  return p.texte || "";
}

/* LES INGRÉDIENTS DE TOUT LE MENU, pour le nombre de convives de la soirée.
   Même forme que ingredientsDeLaSemaine : c'est ce qui permet de réutiliser la
   fenêtre des courses telle quelle, avec sa réserve et son placard, au lieu
   d'en écrire une deuxième qui finirait par en dire autre chose. */
function ingredientsDeLEvenement(e) {
  const parNom = new Map();
  const combien = convivesEvenement(e);
  SERVICES_FETE.forEach((s) => {
    platsDuService(e, s.val).forEach((p) => {
      const r = p.recetteId ? etat.recettes.find((x) => x.id === p.recetteId) : null;
      if (!r) return;
      const facteur = facteurConvives(r, combien);
      (r.ingredients || []).forEach((ing) => {
        if (!ing || !ing.nom) return;
        const cle = cleArticle(ing.nom);
        if (!parNom.has(cle)) {
          parNom.set(cle, { nom: ing.nom, rayon: ing.rayon || "Autre", morceaux: [] });
        }
        const unite = uniteCanonique(ing.unite);
        parNom.get(cle).morceaux.push({ qte: qteAjustee(ing.qte, facteur, unite), unite: unite });
      });
    });
  });
  return Array.from(parNom.values()).map((x) => {
    const total = additionnerQuantites(x.morceaux);
    const principal = total.paquets[0] || { qte: null, unite: "" };
    return {
      nom: x.nom, rayon: x.rayon,
      qte: principal.qte === null ? "" : texteNombre(principal.qte),
      unite: principal.unite, besoinTexte: total.texte,
      plusieursUnites: total.paquets.length > 1
    };
  }).sort((a, b) => {
    if (a.rayon !== b.rayon) return ordreRayons([a.rayon, b.rayon])[0] === a.rayon ? -1 : 1;
    return a.nom.localeCompare(b.nom);
  });
}

/* ---- Les envies (la liste au père Noël) ----

   « pour » désigne un membre (son identifiant) ou quelqu'un d'extérieur à la
   tribu, écrit « hors:Mamie » — on offre aussi à des gens qui n'ont pas
   l'application, et c'est justement là qu'on ne sait plus quoi prendre. */
function souhaitsDe(e) { return (e && e.souhaits) || []; }
function clePour(val) { return String(val || ""); }
function nomPour(val) {
  const v = clePour(val);
  if (v.indexOf("hors:") === 0) return v.slice(5);
  const m = membre(v);
  /* Un membre effacé après qu'on a noté une envie pour lui : on dit ce qui
     s'est passé plutôt que d'afficher « quelqu'un » (18/10/2026). L'envie
     reste visible — c'est le seul moyen de la déplacer ou de la retirer. */
  return m ? m.prenom : "une personne retirée de la tribu";
}
function emojiPour(val) {
  const v = clePour(val);
  if (v.indexOf("hors:") === 0) return "🙋";
  const m = membre(v);
  return (m && m.emoji) || "🙂";
}
/* Les destinataires d'un événement, dans l'ordre : la tribu, puis les autres
   tels qu'ils ont été écrits. */
function destinatairesSouhaits(e) {
  const vus = [];
  etat.membres.forEach((m) => vus.push(m.id));
  souhaitsDe(e).forEach((s) => { if (vus.indexOf(clePour(s.pour)) === -1) vus.push(clePour(s.pour)); });
  return vus;
}

/* ---- LES COULISSES ----

   Ce qui doit rester une surprise : qui offre quoi, ce qui est déjà acheté, le
   prix. Les envies, elles, restent ouvertes — une liste au père Noël est faite
   pour être lue.

   CE QUE LE CODE FAIT, ET CE QU'IL NE FAIT PAS. Tout ce que la tribu
   enregistre arrive sur le téléphone de CHAQUE membre : le code masque
   l'écran, il ne rend pas les coulisses illisibles à quelqu'un de décidé.
   C'est un rideau, pas un coffre — et l'écran le dit en toutes lettres.

   On garde une EMPREINTE du code, jamais le code : personne ne le retrouve en
   lisant les réglages. Le rideau se referme à chaque ouverture de
   l'application : l'autorisation ne vit qu'en mémoire. */
async function empreinteCode(code) {
  const texte = String(Store.code || "tribu") + "|" + String(code || "");
  const octets = new TextEncoder().encode(texte);
  const brut = await crypto.subtle.digest("SHA-256", octets);
  return Array.from(new Uint8Array(brut)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
function codeCoulissesPose() { return !!reglagesFamille().codeCoulisses; }
/* LES COULISSES SONT UNE AFFAIRE D'ADMINISTRATEUR (18/10/2026, sa demande).

   Avant, sans code posé, elles s'ouvraient pour TOUT LE MONDE : les enfants
   lisaient « 🤫 Papa s'en occupe » dès l'ouverture de l'écran, et il fallait
   penser à poser un code pour l'éviter. Une surprise gâchée ne se rattrape pas :
   la discrétion est maintenant l'état par défaut.

   Le code garde son utilité PAR-DESSUS, entre adultes : un téléphone
   déverrouillé posé sur la table ne raconte plus tout. */
function coulissesOuvertes() {
  if (!estAdmin()) return false;
  return !codeCoulissesPose() || ui.coulisses === true;
}

/* ========================= 3. LES DEUX ÉCRANS ========================= */

/* ============================== ÉVÉNEMENTS ==============================
   (18/10/2026, demandé par Amandine : « planifier les fêtes, moins de charge
   mentale ».) Deux écrans dans un : la liste, et le détail d'un événement —
   son menu par services et les envies de chacun. */

function ligneEvenement(e) {
  const t = infoTypeEvenement(e.type);
  const d = [];
  if (e.date) d.push(dateJolie(e.date, true));
  const dec = decompteEvenement(e);
  if (dec) d.push(dec);
  if (e.lieu) d.push(e.lieu);
  const n = souhaitsDe(e).length;
  return '<button class="ligne" style="width:100%;background:none;border:none;text-align:left" ' +
    'data-action="evenement-ouvrir" data-id="' + esc(e.id) + '">' +
    '<span style="font-size:1.5rem">' + t.emoji + "</span>" +
    '<span class="ligne-corps"><b>' + esc(e.nom || t.nom) + "</b><small>" + esc(d.join(" • ")) + "</small>" +
    '<span class="etiquettes">' +
    (menuVide(e) ? "" : '<span class="etiquette">🍽️ menu</span>') +
    (n ? '<span class="etiquette">🎁 ' + pluriel(n, "envie", "envies") + "</span>" : "") +
    "</span></span><span>›</span></button>";
}

function blocMenuEvenement(e) {
  const h = [];
  h.push('<div class="sous-titre"><h3>🍽️ Le menu</h3>' +
    (menuVide(e) ? "" : '<button class="lien" data-action="evenement-courses" data-id="' +
      esc(e.id) + '">🛒 Aux courses</button>') + "</div>");
  h.push('<p class="aide" style="margin:-.3rem 0 .6rem">Pour ' +
    pluriel(convivesEvenement(e), "convive", "convives") +
    ". Les quantités des courses suivront ce nombre.</p>");
  h.push('<div class="carte">');
  SERVICES_FETE.forEach((s) => {
    const plats = platsDuService(e, s.val);
    h.push('<div class="ligne"><span style="font-size:1.2rem">' + s.emoji + "</span>" +
      '<div class="ligne-corps"><b>' + esc(s.nom) + "</b>" +
      (plats.length
        ? plats.map((p, k) => "<small>" + esc(nomDuPlat(p)) +
          ' <button class="lien" data-action="plat-retirer" data-id="' + esc(e.id) +
          '" data-service="' + s.val + '" data-rang="' + k + '">retirer</button></small>').join("")
        : '<small class="aide">rien de prévu</small>') +
      "</div>" +
      '<button class="btn mini" data-action="plat-ajouter" data-id="' + esc(e.id) +
      '" data-service="' + s.val + '">＋</button></div>');
  });
  h.push("</div>");
  return h.join("");
}

function ligneSouhait(e, s) {
  const ouvert = coulissesOuvertes();
  const pris = s.reservePar ? membre(s.reservePar) : null;
  const details = [];
  if (s.prix) details.push(s.prix);
  if (s.ou) details.push(s.ou);
  if (s.note) details.push(s.note);
  /* Les coulisses ne s'affichent QUE le rideau ouvert : sinon la surprise
     tomberait en passant devant l'écran de quelqu'un. */
  const secret = ouvert
    ? '<span class="etiquettes">' +
      (s.achete ? '<span class="etiquette vert">✅ acheté</span>'
        : pris ? '<span class="etiquette chaud">🤫 ' + esc(pris.prenom) + " s\u0027en occupe</span>"
          : '<span class="etiquette">personne dessus</span>') + "</span>"
    : "";
  const boutons = ouvert
    ? '<button class="btn mini" data-action="souhait-reserver" data-id="' + esc(e.id) +
      '" data-souhait="' + esc(s.id) + '">' + (s.reservePar === (moi && moi.id) ? "↺" : "🤫") + "</button>" +
      '<button class="btn mini' + (s.achete ? " principal" : "") + '" data-action="souhait-achete" data-id="' +
      esc(e.id) + '" data-souhait="' + esc(s.id) + '">✅</button>'
    : "";
  return '<div class="ligne' + (ouvert && s.achete ? " fait" : "") + '">' +
    '<span style="font-size:1.2rem">🎁</span>' +
    '<div class="ligne-corps"><b>' + esc(s.quoi) + "</b>" +
    (details.length ? "<small>" + esc(details.join(" • ")) + "</small>" : "") + secret + "</div>" +
    '<button class="btn mini icone" data-action="souhait-editer" data-id="' + esc(e.id) +
    '" data-souhait="' + esc(s.id) + '">✏️</button>' + boutons + "</div>";
}

function blocSouhaits(e) {
  const h = [];
  const ouvert = coulissesOuvertes();
  /* Un membre ordinaire n'a rien à ouvrir ni à poser : on ne lui montre pas
     une porte qu'il ne peut pas pousser (18/10/2026). */
  h.push('<div class="sous-titre"><h3>🎁 Les envies</h3>' +
    (!estAdmin() ? ""
      : codeCoulissesPose()
        ? (ouvert
          ? '<button class="lien" data-action="coulisses-fermer">🔓 Refermer</button>'
          : '<button class="lien" data-action="coulisses-ouvrir">🔒 Voir les coulisses</button>')
        : '<button class="lien" data-action="coulisses-code">🔒 Poser un code</button>') + "</div>");
  h.push('<p class="aide" style="margin:-.3rem 0 .7rem">' +
    (!estAdmin()
      ? "Chacun écrit ce qui lui ferait plaisir, et lit les envies des autres. " +
        "<b>Qui offre quoi</b> ne se voit que du côté des parents."
      : !codeCoulissesPose()
        ? "Vous voyez qui s'occupe de quoi — les enfants, non. Posez un code si vous " +
          "voulez qu'on ne le lise pas non plus sur votre téléphone."
        : ouvert
          ? "Vous voyez qui s'occupe de quoi. <b>Refermez</b> avant de passer le téléphone."
          : "Qui offre quoi est derrière le rideau. Ouvrez-le avec votre code.") +
    "</p>");
  destinatairesSouhaits(e).forEach((pour) => {
    const siens = souhaitsDe(e).filter((s) => clePour(s.pour) === pour);
    if (!siens.length && clePour(pour).indexOf("hors:") === 0) return;
    h.push('<div class="sous-titre" style="margin:.8rem 0 .3rem"><h3>' +
      emojiPour(pour) + " " + esc(nomPour(pour)) + "</h3>" +
      '<button class="lien" data-action="souhait-nouveau" data-id="' + esc(e.id) +
      '" data-pour="' + esc(pour) + '">＋ Ajouter</button></div>');
    h.push(siens.length
      ? '<div class="carte">' + siens.map((s) => ligneSouhait(e, s)).join("") + "</div>"
      : '<p class="aide" style="margin:0 0 .6rem">Rien de noté pour l\u0027instant.</p>');
  });
  h.push('<div class="rangee-btn" style="margin-top:.8rem">' +
    '<button class="btn doux" data-action="souhait-nouveau" data-id="' + esc(e.id) +
    '">🙋 Pour quelqu\u0027un hors de la tribu</button></div>');
  return h.join("");
}

function vueEvenement(e) {
  const t = infoTypeEvenement(e.type);
  const h = [];
  h.push('<div class="rangee-btn" style="margin-bottom:.9rem">' +
    '<button class="btn doux" data-action="evenement-retour">‹ Tous les événements</button>' +
    '<button class="btn doux" data-action="evenement-editer" data-id="' + esc(e.id) + '">✏️ Modifier</button></div>');
  const d = [];
  if (e.date) d.push(dateJolie(e.date, true));
  if (e.heure) d.push(heureJolie(e.heure));
  if (e.lieu) d.push(e.lieu);
  h.push('<div class="carte"><div class="ligne">' +
    '<span style="font-size:1.8rem">' + t.emoji + "</span>" +
    '<div class="ligne-corps"><b>' + esc(e.nom || t.nom) + "</b><small>" + esc(d.join(" • ")) + "</small>" +
    '<span class="etiquettes"><span class="etiquette chaud">' + esc(decompteEvenement(e)) + "</span>" +
    '<span class="etiquette">' + esc(t.nom) + "</span>" +
    (e.chezNous ? '<span class="etiquette vert">🏡 chez nous</span>' : "") +
    "</span></div></div>" +
    (e.note ? '<div class="ligne"><span>📝</span><div class="ligne-corps"><small>' +
      esc(e.note) + "</small></div></div>" : "") + "</div>");
  h.push(blocMenuEvenement(e));
  if (t.souhaits) h.push(blocSouhaits(e));
  h.push('<div class="rangee-btn" style="margin-top:1.2rem">' +
    '<button class="btn danger" data-action="evenement-supprimer" data-id="' + esc(e.id) +
    '">Supprimer l\u0027événement</button></div>');
  return h.join("");
}

Vues.evenements = function () {
  const ouvert = ui.evenementOuvert ? evenement(ui.evenementOuvert) : null;
  if (ouvert) return vueEvenement(ouvert);
  const h = [];
  h.push(carteAjout("evenement-nouveau", "Nouvel événement",
    "une date, un type, et tout se range autour"));
  const l = evenementsTries();
  if (!l.length) {
    h.push(rienDu("🎉", "Aucun événement pour l\u0027instant.<br>Noël, un anniversaire, " +
      "un repas de famille : posez la date, le menu et les envies suivront."));
    return h.join("");
  }
  const auj = isoDate(new Date());
  const aVenir = l.filter((e) => !e.date || e.date >= auj);
  const passes = l.filter((e) => e.date && e.date < auj);
  if (aVenir.length) h.push(bloc("📅 À venir", aVenir.map(ligneEvenement).join("")));
  if (passes.length) h.push(bloc("✔️ Passés", passes.map(ligneEvenement).join("")));
  return h.join("");
};

/* ====================== 4. LES FEUILLES DE SAISIE ====================== */

/* ============================ ÉVÉNEMENTS ============================ */

Formulaires.evenement = function (eid) {
  const e = eid ? evenement(eid) : null;
  const cour = e || { type: "noel", date: "", chezNous: true, convives: nbConvives() };
  const html = '<form id="f-evenement">' +
    '<label class="champ"><span>Quel type ?</span><select name="type">' +
    TYPES_EVENEMENT.map((t) => '<option value="' + t.val + '"' +
      (cour.type === t.val ? " selected" : "") + ">" + t.emoji + " " + esc(t.nom) + "</option>").join("") +
    "</select></label>" +
    '<label class="champ"><span>Son nom</span>' +
    '<input type="text" name="nom" value="' + esc(cour.nom || "") + '" required maxlength="60" ' +
    'placeholder="Noël chez nous, les 40 ans de Papa…"></label>' +
    '<div class="duo"><label class="champ"><span>Date</span>' +
    '<input type="date" name="date" value="' + esc(cour.date || "") + '" required></label>' +
    '<label class="champ"><span>Heure</span>' +
    '<input type="time" name="heure" value="' + esc(cour.heure || "") + '"></label></div>' +
    '<label class="champ"><span>Où ? (facultatif)</span>' +
    '<input type="text" name="lieu" value="' + esc(cour.lieu || "") + '" maxlength="60" ' +
    'placeholder="Chez nous, chez Mamie…"></label>' +
    '<label class="champ" style="display:flex;gap:.6rem;align-items:flex-start">' +
    '<input type="checkbox" name="chezNous"' + (cour.chezNous !== false ? " checked" : "") +
    ' style="width:auto;margin-top:.25rem">' +
    '<span style="margin:0">C\u0027est nous qui recevons' +
    '<br><small style="font-weight:400">Alors le menu et les courses ont un sens. ' +
    "Sinon, l\u0027événement reste une date à ne pas oublier.</small></span></label>" +
    '<label class="champ"><span>Combien à table ?</span>' +
    '<input type="number" name="convives" min="1" max="60" value="' +
    esc(String(cour.convives || nbConvives())) + '"></label>' +
    '<label class="champ"><span>Note (facultatif)</span>' +
    '<textarea name="note" maxlength="400" placeholder="Qui vient, ce qu\u0027il reste à faire…">' +
    esc(cour.note || "") + "</textarea></label>" +
    boutonsFormulaire(e ? "Enregistrer" : "Créer", false) + "</form>";

  ouvrirFeuille(e ? "Modifier l\u0027événement" : "Nouvel événement", html, (f) => {
    f.onsubmit = (ev2) => {
      ev2.preventDefault();
      const d = new FormData(ev2.target);
      fermerFeuille();
      Actions.enregistrerEvenement({
        type: String(d.get("type")), nom: String(d.get("nom")).trim(),
        date: String(d.get("date") || ""), heure: String(d.get("heure") || ""),
        lieu: String(d.get("lieu") || "").trim(), chezNous: !!d.get("chezNous"),
        convives: Math.max(1, Number(d.get("convives")) || nbConvives()),
        note: String(d.get("note") || "").trim()
      }, eid);
      toast(e ? "Événement mis à jour" : "Événement créé 🎉");
    };
  });
};

/* Choisir un plat pour un service : le cahier de recettes, ou ce qu'on écrit à
   la main — la bûche de la boulangerie n'est pas une recette. */
Formulaires.platEvenement = function (eid, service) {
  const e = evenement(eid);
  if (!e) return;
  const s = infoService(service);
  const html = '<div>' +
    '<input type="text" id="rech-plat-fete" placeholder="Rechercher un plat…" autocomplete="off" ' +
    'style="margin-bottom:.6rem">' +
    '<div id="liste-plats-fete" style="max-height:38dvh;overflow-y:auto;margin-bottom:.9rem"></div>' +
    '<hr class="sep">' +
    '<label class="champ"><span>Ou écrire librement</span>' +
    '<input type="text" id="plat-libre" maxlength="70" placeholder="Bûche de la boulangerie, foie gras…"></label>' +
    '<div class="rangee-btn">' +
    '<button type="button" class="btn" data-action="fermer">Annuler</button>' +
    '<button type="button" class="btn principal" data-role="ok-libre">Ajouter</button></div></div>';

  ouvrirFeuille(s.emoji + " " + s.nom, html, (f) => {
    const zone = f.querySelector("#liste-plats-fete");
    const rech = f.querySelector("#rech-plat-fete");
    /* Chaque service propose ce qui lui correspond, et les plats du cahier de
       fête passent devant : c'est pour eux qu'on ouvre cette fenêtre
       (18/10/2026). Le fromage n'a pas de recette : on écrit librement. */
    const dessiner = () => {
      const q = pourChercher(rech.value || "").trim();
      const l = etat.recettes
        /* Une purée de bébé n'a rien à faire dans un menu de réveillon
           (18/10/2026). */
        .filter((r) => !estPourBebe(r))
        .filter((r) => service === "fromage" ? false : placeAuRepas(r) === service ||
          (service === "plat" && estPlatPrincipal(r)))
        .filter((r) => !q || pourChercher(r.nom).includes(q))
        .sort((a, b) => (estDeFete(b) ? 1 : 0) - (estDeFete(a) ? 1 : 0) ||
          a.nom.localeCompare(b.nom))
        .slice(0, 60);
      zone.innerHTML = l.length
        ? l.map((r) => '<button type="button" class="ligne" style="width:100%;background:none;' +
          'border:none;text-align:left" data-recette="' + esc(r.id) + '">' +
          '<span style="font-size:1.2rem">' + esc(r.emoji || "🍽️") + "</span>" +
          '<span class="ligne-corps"><b>' + esc(r.nom) + "</b>" +
          (estDeFete(r) ? "<small>✨ plat de fête</small>" : "") + "</span></button>").join("")
        : '<p class="aide">' + (service === "fromage"
          ? "Un plateau ne se range pas dans un cahier de recettes : écrivez-le ci-dessous."
          : "Aucun plat ne correspond.") + "</p>";
    };
    dessiner();
    rech.oninput = dessiner;
    zone.onclick = (ev2) => {
      const b = ev2.target.closest("[data-recette]");
      if (!b) return;
      fermerFeuille();
      Actions.poserPlat(eid, service, { recetteId: b.dataset.recette });
    };
    f.querySelector('[data-role="ok-libre"]').onclick = () => {
      const txt = f.querySelector("#plat-libre").value.trim();
      if (!txt) { toast("Choisissez un plat ou écrivez-en un"); return; }
      fermerFeuille();
      Actions.poserPlat(eid, service, { texte: txt });
    };
  });
};

Formulaires.souhait = function (eid, sid, pour) {
  const e = evenement(eid);
  if (!e) return;
  const s = sid ? souhaitsDe(e).find((x) => x.id === sid) : null;
  const cour = s || { pour: pour || "" };
  const horsTribu = clePour(cour.pour).indexOf("hors:") === 0;
  const ouvert = coulissesOuvertes();
  const html = '<form id="f-souhait">' +
    (s
      ? '<p class="aide" style="margin:0 0 .8rem">Pour <b>' + esc(nomPour(cour.pour)) + "</b></p>"
      : '<label class="champ"><span>Pour qui ?</span><select name="pour">' +
        etat.membres.map((m) => '<option value="' + esc(m.id) + '"' +
          (clePour(cour.pour) === m.id ? " selected" : "") + ">" +
          esc((m.emoji || "🙂") + " " + m.prenom) + "</option>").join("") +
        '<option value="hors"' + (horsTribu || !cour.pour ? " selected" : "") +
        ">🙋 Quelqu\u0027un hors de la tribu…</option></select></label>" +
        '<label class="champ" id="champ-hors"><span>Son prénom</span>' +
        '<input type="text" name="horsNom" maxlength="40" value="' +
        esc(horsTribu ? nomPour(cour.pour) : "") + '" placeholder="Mamie, la maîtresse…"></label>') +
    '<label class="champ"><span>Qu\u0027est-ce qui ferait plaisir ?</span>' +
    '<input type="text" name="quoi" value="' + esc(cour.quoi || "") + '" required maxlength="80" ' +
    'placeholder="Un livre de recettes, des patins…"></label>' +
    '<div class="duo"><label class="champ"><span>Prix indicatif</span>' +
    '<input type="text" name="prix" value="' + esc(cour.prix || "") + '" maxlength="20" ' +
    'placeholder="30 €"></label>' +
    '<label class="champ"><span>Où le trouver</span>' +
    '<input type="text" name="ou" value="' + esc(cour.ou || "") + '" maxlength="40" ' +
    'placeholder="Librairie, en ligne…"></label></div>' +
    '<label class="champ"><span>Précision (taille, couleur…)</span>' +
    '<input type="text" name="note" value="' + esc(cour.note || "") + '" maxlength="80"></label>' +
    (ouvert && s
      ? '<p class="aide" style="margin:0 0 .8rem">🤫 Les coulisses se règlent sur la ligne, ' +
        "avec les boutons 🤫 et ✅.</p>"
      : "") +
    boutonsFormulaire(s ? "Enregistrer" : "Ajouter", false) +
    (s ? '<button type="button" class="btn danger" style="width:100%;margin-top:.5rem" ' +
      'data-role="suppr">Retirer de la liste</button>' : "") + "</form>";

  ouvrirFeuille(s ? "Modifier l\u0027envie" : "Une envie", html, (f) => {
    const sel = f.querySelector('[name="pour"]');
    const champHors = f.querySelector("#champ-hors");
    const majHors = () => { if (champHors) champHors.hidden = !sel || sel.value !== "hors"; };
    if (sel) sel.onchange = majHors;
    majHors();
    const bs = f.querySelector('[data-role="suppr"]');
    if (bs) bs.onclick = () => { fermerFeuille(); Actions.supprimerSouhait(eid, sid); };
    f.onsubmit = (ev2) => {
      ev2.preventDefault();
      const d = new FormData(ev2.target);
      let destinataire = cour.pour;
      if (!s) {
        destinataire = String(d.get("pour") || "");
        if (destinataire === "hors") {
          const nom = String(d.get("horsNom") || "").trim();
          if (!nom) { toast("Pour qui ? Écrivez un prénom"); return; }
          destinataire = "hors:" + nom;
        }
      }
      fermerFeuille();
      Actions.enregistrerSouhait(eid, {
        pour: destinataire, quoi: String(d.get("quoi")).trim(),
        prix: String(d.get("prix") || "").trim(), ou: String(d.get("ou") || "").trim(),
        note: String(d.get("note") || "").trim()
      }, sid);
      toast(s ? "Envie mise à jour" : "Envie notée 🎁");
    };
  });
};

/* LE RIDEAU DES COULISSES. On dit franchement ce qu'il protège et ce qu'il ne
   protège pas : promettre un coffre quand on n'offre qu'un rideau, c'est pire
   que de ne rien promettre. */
Formulaires.coulisses = function () {
  const html = '<form id="f-coulisses">' +
    '<p class="aide" style="margin:0 0 .9rem">Derrière le rideau : qui offre quoi, ' +
    "ce qui est déjà acheté. Les envies, elles, restent ouvertes à tous.</p>" +
    '<label class="champ"><span>Le code</span>' +
    '<input type="password" name="code" inputmode="numeric" autocomplete="off" required ' +
    'maxlength="20" placeholder="••••"></label>' +
    boutonsFormulaire("Ouvrir", false) + "</form>";
  ouvrirFeuille("🔒 Les coulisses", html, (f) => {
    f.onsubmit = async (ev2) => {
      ev2.preventDefault();
      const code = String(new FormData(ev2.target).get("code") || "");
      const emp = await empreinteCode(code);
      if (emp !== reglagesFamille().codeCoulisses) { toast("Ce n\u0027est pas le bon code"); return; }
      fermerFeuille();
      ui.coulisses = true;
      rendre();
      toast("Coulisses ouvertes 🤫 — refermez avant de passer le téléphone");
    };
  });
};

Formulaires.codeCoulisses = function () {
  if (!estAdmin()) { toast("Un administrateur pose le code"); return; }
  const pose = codeCoulissesPose();
  const html = '<form id="f-code">' +
    '<p class="aide" style="margin:0 0 .9rem">Un code à quatre chiffres suffit. Il cache ' +
    "<b>qui offre quoi</b> et <b>ce qui est acheté</b> — jamais les envies elles-mêmes.</p>" +
    '<div class="bandeau">⚠️<div>Ce code masque l\u0027écran, il ne met rien sous clé : ' +
    "tout ce que la tribu enregistre arrive sur le téléphone de chaque membre. " +
    "C\u0027est un rideau pour éviter de gâcher la surprise, pas un coffre-fort.</div></div>" +
    '<label class="champ"><span>' + (pose ? "Nouveau code" : "Le code") + "</span>" +
    '<input type="password" name="code" inputmode="numeric" autocomplete="off" ' +
    'maxlength="20" placeholder="••••"></label>' +
    boutonsFormulaire(pose ? "Changer" : "Poser le code", false) +
    (pose ? '<button type="button" class="btn danger" style="width:100%;margin-top:.5rem" ' +
      'data-role="retirer">Retirer le code</button>' : "") + "</form>";
  ouvrirFeuille(pose ? "Changer le code" : "Poser un code", html, (f) => {
    const br = f.querySelector('[data-role="retirer"]');
    if (br) br.onclick = () => {
      fermerFeuille();
      const r = Object.assign({}, etat.reglages || {});
      delete r.codeCoulisses;
      etat.reglages = r;
      ui.coulisses = true;
      sauver("reglages");
      toast("Code retiré : les coulisses sont ouvertes à tous");
    };
    f.onsubmit = async (ev2) => {
      ev2.preventDefault();
      const code = String(new FormData(ev2.target).get("code") || "").trim();
      if (code.length < 4) { toast("Au moins quatre chiffres"); return; }
      const emp = await empreinteCode(code);
      fermerFeuille();
      etat.reglages = Object.assign({}, etat.reglages || {}, { codeCoulisses: emp });
      ui.coulisses = true;
      sauver("reglages");
      toast("Code posé 🔒");
    };
  });
};

/* ======================== 5. L'OPTION DE LA FAMILLE ========================

   Le bloc vient des réglages de la famille, où il vivait avant d'être
   déplacé ici. Sans ce fichier, la case n'apparaît pas du tout. */
function blocOptionEvenements(g) {
  return '<label class="champ" style="display:flex;gap:.6rem;align-items:flex-start">' +
    '<input type="checkbox" name="evenements"' + (g.evenements === true ? " checked" : "") +
    ' style="width:auto;margin-top:.25rem"><span style="margin:0">Les événements' +
    '<br><small style="font-weight:400">Un onglet de plus pour préparer Noël, un ' +
    "anniversaire, un repas de famille : la date et son décompte, le menu par services " +
    "(apéritif, entrée, plat, dessert) avec ses courses, et la liste des envies de chacun. " +
    "Décoché, l'onglet disparaît — rien n'est perdu.</small></span></label>";
}

/* ========================== 6. LES ACTIONS ==========================

   Elles rejoignent l'objet Actions au chargement de app.js, qui est lu en
   dernier. Les appels « Actions.enregistrerEvenement(...) » des feuilles de
   saisie ci-dessus continuent donc de marcher sans être retouchés. */
const ACTIONS_EVENEMENTS = {
  /* --- Événements (18/10/2026) --- */
  enregistrerEvenement(donnees, eid) {
    const e = eid ? evenement(eid) : null;
    if (e) { Object.assign(e, donnees); }
    else {
      etat.evenements.push(Object.assign({
        id: "e|" + id(), menu: {}, souhaits: [], creeLe: new Date().toISOString()
      }, donnees));
    }
    sauver("evenements");
  },
  async supprimerEvenement(eid) {
    const e = evenement(eid);
    if (!e) return;
    const ok = await confirmer("Supprimer « " + e.nom + " » ? Son menu et les envies notées " +
      "disparaissent avec lui.", { titre: "Supprimer l'événement", ok: "Supprimer", danger: true });
    if (!ok) return;
    etat.evenements = etat.evenements.filter((x) => x.id !== eid);
    if (ui.evenementOuvert === eid) ui.evenementOuvert = null;
    sauver("evenements");
    toast("Événement supprimé");
  },
  poserPlat(eid, service, plat) {
    const e = evenement(eid);
    if (!e) return;
    e.menu = e.menu || {};
    e.menu[service] = (e.menu[service] || []).concat([plat]);
    sauver("evenements");
    toast(infoService(service).emoji + " " + nomDuPlat(plat) + " ajouté");
  },
  retirerPlat(eid, service, rang) {
    const e = evenement(eid);
    if (!e || !e.menu || !e.menu[service]) return;
    e.menu[service] = e.menu[service].filter((x, k) => k !== Number(rang));
    if (!e.menu[service].length) delete e.menu[service];
    sauver("evenements");
  },
  enregistrerSouhait(eid, donnees, sid) {
    const e = evenement(eid);
    if (!e) return;
    e.souhaits = e.souhaits || [];
    const s = sid ? e.souhaits.find((x) => x.id === sid) : null;
    if (s) Object.assign(s, donnees);
    else {
      e.souhaits.push(Object.assign({
        id: "s|" + id(), parQui: moi && moi.id, creeLe: new Date().toISOString()
      }, donnees));
    }
    sauver("evenements");
  },
  async supprimerSouhait(eid, sid) {
    const e = evenement(eid);
    if (!e) return;
    const s = souhaitsDe(e).find((x) => x.id === sid);
    if (!s) return;
    const ok = await confirmer("Retirer « " + s.quoi + " » de la liste ?",
      { titre: "Retirer cette envie", ok: "Retirer", danger: true });
    if (!ok) return;
    e.souhaits = souhaitsDe(e).filter((x) => x.id !== sid);
    sauver("evenements");
  },
  /* Les coulisses : réservées à qui a passé le rideau. On ne touche jamais à
     l'envie elle-même, seulement à ce qui doit rester une surprise. */
  reserverSouhait(eid, sid) {
    if (!coulissesOuvertes()) return;
    const e = evenement(eid);
    const s = e && souhaitsDe(e).find((x) => x.id === sid);
    if (!s) return;
    s.reservePar = s.reservePar === (moi && moi.id) ? null : (moi && moi.id);
    if (!s.reservePar) s.achete = false;
    sauver("evenements");
    toast(s.reservePar ? "C'est vous qui vous en occupez 🤫" : "Plus personne dessus");
  },
  basculerAchete(eid, sid) {
    if (!coulissesOuvertes()) return;
    const e = evenement(eid);
    const s = e && souhaitsDe(e).find((x) => x.id === sid);
    if (!s) return;
    s.achete = !s.achete;
    if (s.achete && !s.reservePar) s.reservePar = moi && moi.id;
    sauver("evenements");
    toast(s.achete ? "Acheté ✅" : "Plus acheté");
  },
  fermerCoulisses() {
    ui.coulisses = false;
    rendre();
    toast("Coulisses refermées 🔒");
  }
};

/* =========================== 7. LES CLICS ===========================

   app.js appelle cette fonction avant son propre aiguillage. Elle rend
   `true` quand le clic était pour nous, `false` sinon — et app.js continue
   son chemin. */
function routerEvenements(a, v, b) {
  switch (a) {
    case "evenement-nouveau": Formulaires.evenement(null); break;
    case "evenement-editer": Formulaires.evenement(v); break;
    case "evenement-ouvrir": ui.evenementOuvert = v; aller("evenements"); break;
    case "evenement-retour": ui.evenementOuvert = null; rendre(); break;
    case "evenement-supprimer": Actions.supprimerEvenement(v); break;
    case "evenement-courses":
      Formulaires.ingredientsVersCourses({ evenement: evenement(v) }); break;
    case "plat-ajouter": Formulaires.platEvenement(v, b.dataset.service); break;
    case "plat-retirer": Actions.retirerPlat(v, b.dataset.service, b.dataset.rang); break;
    case "souhait-nouveau": Formulaires.souhait(v, null, b.dataset.pour || ""); break;
    case "souhait-editer": Formulaires.souhait(v, b.dataset.souhait); break;
    case "souhait-reserver": Actions.reserverSouhait(v, b.dataset.souhait); break;
    case "souhait-achete": Actions.basculerAchete(v, b.dataset.souhait); break;
    case "coulisses-ouvrir": Formulaires.coulisses(); break;
    case "coulisses-fermer": Actions.fermerCoulisses(); break;
    case "coulisses-code": Formulaires.codeCoulisses(); break;
    default: return false;
  }
  return true;
}
