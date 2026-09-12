/* =========================================================================
   TRIBU — formulaires (les fenetres qui remontent du bas de l'ecran)
   ========================================================================= */

const Formulaires = {};

/* ---------- petits aides de formulaire ---------- */

function grilleEmojis(liste, choisi) {
  return '<div class="puces grille-emojis" data-role="emojis">' +
    liste.map((e) => '<button type="button" class="puce ' + (e === choisi ? "on" : "") +
      '" data-emoji="' + e + '">' + e + "</button>").join("") + "</div>";
}
function brancherEmojis(f) {
  const g = f.querySelector('[data-role="emojis"]');
  if (!g) return;
  g.onclick = (ev) => {
    const b = ev.target.closest("[data-emoji]");
    if (!b) return;
    g.querySelectorAll(".puce").forEach((p) => p.classList.remove("on"));
    b.classList.add("on");
  };
}
function emojiChoisi(f, defaut) {
  const on = f.querySelector('[data-role="emojis"] .puce.on');
  return on ? on.dataset.emoji : defaut;
}
function puceMultiple(role, options, choisis) {
  return '<div class="puces" data-role="' + role + '" style="margin-bottom:1rem">' +
    options.map((o) => '<button type="button" class="puce ' + (choisis.includes(o.val) ? "on" : "") +
      '" data-val="' + esc(o.val) + '">' + o.html + "</button>").join("") + "</div>";
}
function brancherMulti(f, role, unique) {
  const g = f.querySelector('[data-role="' + role + '"]');
  if (!g) return;
  /* Choix unique : le choix deja retenu ne doit pas ressembler a un bouton
     (curseur « main » au survol), puisque cliquer dessus ne change rien. */
  if (unique) g.classList.add("unique");
  g.onclick = (ev) => {
    const b = ev.target.closest("[data-val]");
    if (!b) return;
    if (unique) g.querySelectorAll(".puce").forEach((p) => p.classList.remove("on"));
    b.classList.toggle("on", unique ? true : !b.classList.contains("on"));
  };
}
function valeursMulti(f, role) {
  return Array.from(f.querySelectorAll('[data-role="' + role + '"] .puce.on')).map((b) => b.dataset.val);
}
function selectRayon(valeur) {
  return '<select name="rayon">' + ordreRayons(rayonsTous()).map((r) =>
    '<option value="' + esc(r) + '"' + (r === valeur ? " selected" : "") + ">" + esc(r) + "</option>").join("") + "</select>";
}
function selectUnite(valeur, nom) {
  return '<select name="' + (nom || "unite") + '">' + UNITES.map((u) =>
    '<option value="' + esc(u) + '"' + (u === (valeur || "") ? " selected" : "") + ">" +
    (u || "— sans —") + "</option>").join("") + "</select>";
}
function boutonsFormulaire(labelOk, avecSuppression) {
  return '<div class="rangee-btn" style="margin-top:1.2rem">' +
    (avecSuppression ? '<button type="button" class="btn danger" data-role="suppr">Supprimer</button>' : "") +
    '<button type="button" class="btn" data-action="fermer">Annuler</button>' +
    '<button type="submit" class="btn principal">' + esc(labelOk) + "</button></div>";
}

/* ================================ TACHE ================================ */

Formulaires.tache = function (tid) {
  if (!estAdmin()) return;
  const t = tid ? etat.taches.find((x) => x.id === tid) : null;
  /* Une tâche neuve propose TOUT LE MONDE : c'est le cas courant, et cela
     évite le piège d'une tâche sans participant — elle n'était assignée à
     personne, donc invisible partout sauf dans l'Administration (12/09/2026). */
  const cour = t || {
    emoji: "🧹", frequence: "semaine", points: 10,
    participants: etat.membres.map((m) => m.id), rotation: true, actif: true
  };
  const assigne = t ? membre(assigneDe(t, new Date())) : null;

  const html = "<form id=\"f-tache\">" +
    '<label class="champ"><span>Nom de la tâche</span>' +
    '<input type="text" name="nom" value="' + esc(cour.nom || "") + '" required maxlength="40" placeholder="Passer l\'aspirateur"></label>' +
    '<label class="champ"><span>Icône</span></label>' + grilleEmojis(EMOJIS_TACHES, cour.emoji) +
    '<label class="champ"><span>À refaire</span></label>' +
    puceMultiple("freq", [
      { val: "jour", html: "Chaque jour" },
      { val: "semaine", html: "Chaque semaine" },
      { val: "mois", html: "Chaque mois" }], [cour.frequence]) +
    (pointsActifs()
      ? '<label class="champ"><span>Points gagnés</span>' +
        '<input type="number" name="points" value="' + (cour.points || 10) + '" min="0" max="500" required></label>'
      : "") +
    '<label class="champ"><span>Qui peut s\'en occuper</span></label>' +
    (etat.membres.length
      ? puceMultiple("part", etat.membres.map((m) => ({ val: m.id, html: esc(m.emoji + " " + m.prenom) })),
        cour.participants || [])
      : '<p class="aide">Ajoutez d\'abord des membres.</p>') +
    '<label class="champ" style="display:flex;gap:.6rem;align-items:flex-start">' +
    '<input type="checkbox" name="rotation" style="width:auto;margin-top:.2rem"' + (cour.rotation !== false ? " checked" : "") + ">" +
    "<span style=\"margin:0\">Chacun son tour<br><small style=\"font-weight:400\">La personne assignée change automatiquement à chaque " +
    "période. Si décoché, c'est toujours la première personne sélectionnée.</small></span></label>" +
    '<label class="champ" style="display:flex;gap:.6rem;align-items:center">' +
    '<input type="checkbox" name="pause" style="width:auto"' + (cour.actif === false ? " checked" : "") + ">" +
    '<span style="margin:0">Mettre en pause</span></label>' +
    (t && assigne
      ? '<div class="bandeau info">👤<div>Actuellement : <b>' + esc(assigne.prenom) + "</b> " +
      libellePeriode(t.frequence) + '. <button type="button" class="lien" data-role="tourner">Passer au suivant</button></div></div>'
      : "") +
    boutonsFormulaire(t ? "Enregistrer" : "Créer la tâche", !!t) +
    "</form>";

  ouvrirFeuille(t ? "Modifier la tâche" : "Nouvelle tâche", html, (f) => {
    brancherEmojis(f);
    brancherMulti(f, "freq", true);
    brancherMulti(f, "part", false);

    const bt = f.querySelector('[data-role="tourner"]');
    if (bt) bt.onclick = () => {
      t.decalage = (t.decalage || 0) + 1;
      sauver("taches");
      fermerFeuille();
      const n = membre(assigneDe(t, new Date()));
      toast(n ? "C'est au tour de " + n.prenom : "Rotation effectuée");
    };

    const bs = f.querySelector('[data-role="suppr"]');
    if (bs) bs.onclick = async () => {
      const ok = await confirmer("Supprimer définitivement la tâche « " + t.nom + " » ?",
        { titre: "Supprimer", ok: "Supprimer", danger: true });
      if (!ok) return;
      etat.taches = etat.taches.filter((x) => x.id !== t.id);
      fermerFeuille();
      sauver("taches");
      toast("Tâche supprimée");
    };

    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const freq = valeursMulti(f, "freq")[0] || "semaine";
      const part = valeursMulti(f, "part");
      if (!part.length) { toast("Choisissez au moins une personne"); return; }

      if (t) {
        t.nom = String(d.get("nom")).trim();
        t.emoji = emojiChoisi(f, "🧹");
        if (t.frequence !== freq) { t.frequence = freq; t.decalage = 0; }
        /* Points éteints : le champ n'est pas affiché. On GARDE la valeur
           existante, sinon modifier une tâche la remettrait à zéro et le
           réglage ne serait plus réversible sans perte. */
        if (pointsActifs()) t.points = Number(d.get("points")) || 0;
        t.participants = part;
        t.rotation = !!d.get("rotation");
        t.actif = !d.get("pause");
      } else {
        const nouvelle = {
          id: id(), nom: String(d.get("nom")).trim(), emoji: emojiChoisi(f, "🧹"),
          frequence: freq,
          /* Même raison : sans le champ, on pose la valeur habituelle, pour
             que la tâche compte normalement si les points reviennent. */
          points: pointsActifs() ? (Number(d.get("points")) || 0) : 10,
          participants: part, rotation: !!d.get("rotation"),
          decalage: 0, actif: !d.get("pause"), creeLe: new Date().toISOString()
        };
        // on cale la rotation pour que la 1re personne choisie commence maintenant
        const n = part.length;
        nouvelle.decalage = ((-indexPeriode(freq, new Date()) % n) + n) % n;
        etat.taches.push(nouvelle);
      }
      fermerFeuille();
      sauver("taches");
      toast(t ? "Tâche enregistrée" : "Tâche créée");
    };
  });
};

/* ================================ COURSE ================================ */

Formulaires.course = function (cid) {
  const c = cid ? etat.courses.find((x) => x.id === cid) : null;
  const cour = c || { nom: "", qte: "", unite: "", rayon: "Épicerie", vrac: false };

  const html = '<form id="f-course">' +
    '<label class="champ"><span>Article</span>' +
    '<input type="text" name="nom" value="' + esc(cour.nom) + '" required maxlength="40" placeholder="Lait"></label>' +
    '<div class="duo"><label class="champ"><span>Quantité</span>' +
    '<input type="text" name="qte" value="' + esc(cour.qte) + '" maxlength="10" inputmode="decimal" placeholder="2"></label>' +
    '<label class="champ"><span>Unité</span>' + selectUnite(cour.unite) + "</label></div>" +
    '<label class="champ"><span>Rayon</span>' + selectRayon(cour.rayon) + "</label>" +
    '<label class="champ" style="display:flex;gap:.6rem;align-items:center">' +
    '<input type="checkbox" name="vrac" style="width:auto"' + (cour.vrac ? " checked" : "") + ">" +
    '<span style="margin:0">🫙 En vrac (prévoir un contenant)</span></label>' +
    boutonsFormulaire(c ? "Enregistrer" : "Ajouter", !!c) + "</form>";

  ouvrirFeuille(c ? "Modifier l'article" : "Ajouter aux courses", html, (f) => {
    if (!c) f.querySelector('[name="nom"]').focus();
    const bs = f.querySelector('[data-role="suppr"]');
    if (bs) bs.onclick = () => { fermerFeuille(); Actions.supprimerCourse(c.id); };
    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      fermerFeuille();
      if (c) {
        c.nom = String(d.get("nom")).trim();
        c.qte = String(d.get("qte")).trim();
        c.unite = String(d.get("unite"));
        c.rayon = String(d.get("rayon"));
        c.vrac = !!d.get("vrac");
        sauver("courses");
        toast("Article modifié");
      } else {
        Actions.ajouterCourse(String(d.get("nom")), String(d.get("rayon")),
          String(d.get("qte")), String(d.get("unite")), { vrac: !!d.get("vrac") });
      }
    };
  });
};

/* ============================ LISTES DE COURSES ============================ */

Formulaires.liste = function (lid) {
  const l = lid ? listesCourses().find((x) => x.id === lid) : null;
  const cour = l || { nom: "", emoji: "🛒", type: "semaine", magasin: "" };
  const implicite = l && !etat.listesCourses.length;

  const html = '<form id="f-liste">' +
    '<label class="champ"><span>Nom de la liste</span>' +
    '<input type="text" name="nom" value="' + esc(cour.nom) + '" required maxlength="30" ' +
    'placeholder="Courses de la semaine"></label>' +
    '<label class="champ"><span>Icône</span></label>' +
    grilleEmojis(EMOJIS_LISTES, cour.emoji) +
    '<label class="champ"><span>Rythme</span></label>' +
    puceMultiple("type", TYPES_LISTE.map((t) => ({ val: t.val, html: t.emoji + " " + t.nom })),
      [cour.type]) +
    '<p class="aide" style="margin:-.5rem 0 1rem">Une liste <b>mensuelle</b> se remplit au fil ' +
    "de l'eau sans rien réclamer : elle ne compte pas dans les rappels de l'accueil.</p>" +
    '<label class="champ"><span>Magasin (facultatif)</span>' +
    '<input type="text" name="magasin" value="' + esc(cour.magasin || "") + '" maxlength="30" ' +
    'placeholder="Leclerc, marché, biocoop…"></label>' +
    boutonsFormulaire(l ? "Enregistrer" : "Créer la liste",
      !!l && !implicite && listesCourses().length > 1) + "</form>";

  ouvrirFeuille(l ? "Modifier la liste" : "Nouvelle liste de courses", html, (f) => {
    brancherEmojis(f);
    brancherMulti(f, "type", true);
    if (!l) f.querySelector('[name="nom"]').focus();

    const bs = f.querySelector('[data-role="suppr"]');
    if (bs) bs.onclick = () => { fermerFeuille(); Actions.supprimerListe(l.id); };

    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);
      const donnees = {
        nom: String(d.get("nom")).trim(),
        emoji: emojiChoisi(f, "🛒"),
        type: valeursMulti(f, "type")[0] || "semaine",
        magasin: String(d.get("magasin") || "").trim()
      };
      fermerFeuille();
      Actions.enregistrerListe(donnees, l ? l.id : null);
      toast(l ? "Liste enregistrée" : "Liste créée 🛒");
    };
  });
};

/* Déplacer un article vers une autre liste (du mois vers la semaine, etc.) */
Formulaires.deplacerCourse = function (cid) {
  const c = etat.courses.find((x) => x.id === cid);
  if (!c) return;
  const autres = listesCourses().filter((l) => l.id !== listeDe(c));
  if (!autres.length) { toast("Il n'y a qu'une seule liste"); return; }

  ouvrirFeuille("Déplacer « " + c.nom + " »",
    '<div id="f-depl">' + autres.map((l) =>
      '<button class="btn plein" data-liste="' + l.id + '" style="margin-bottom:.5rem">' +
      esc((l.emoji || typeListe(l).emoji) + " " + l.nom) +
      (l.magasin ? " — " + esc(l.magasin) : "") + "</button>").join("") +
      '<button class="btn plein" data-action="fermer" style="margin-top:.5rem">Annuler</button></div>',
    (f) => {
      f.onclick = (ev) => {
        const b = ev.target.closest("[data-liste]");
        if (!b) return;
        fermerFeuille();
        Actions.deplacerCourse(cid, b.dataset.liste);
      };
    });
};

/* ================================ RÉSERVE ================================ */

Formulaires.stock = function (sid) {
  const s = sid ? etat.stock.find((x) => x.id === sid) : null;
  const cour = s || { nom: "", qte: "", unite: "", mini: "", rayon: "Épicerie", vrac: false };

  const html = '<form id="f-stock">' +
    '<label class="champ"><span>Article</span>' +
    '<input type="text" name="nom" value="' + esc(cour.nom) + '" required maxlength="40" ' +
    'placeholder="Pâtes, tomates pelées, lessive…"></label>' +
    '<div class="duo"><label class="champ"><span>J\'en ai</span>' +
    '<input type="text" name="qte" value="' + esc(cour.qte) + '" maxlength="10" inputmode="decimal" placeholder="3"></label>' +
    '<label class="champ"><span>Unité</span>' + selectUnite(cour.unite) + "</label></div>" +
    '<label class="champ" style="display:flex;gap:.6rem;align-items:flex-start">' +
    '<input type="checkbox" name="vrac" style="width:auto;margin-top:.2rem"' + (cour.vrac ? " checked" : "") + ">" +
    '<span style="margin:0">Acheté en vrac<br><small style="font-weight:400">Signalé dans la ' +
    "liste de courses pour ne pas oublier bocaux et sacs réutilisables.</small></span></label>" +
    '<label class="champ"><span>Quantité minimum avant de racheter</span>' +
    '<input type="text" name="mini" value="' + esc(cour.mini) + '" maxlength="10" inputmode="decimal" placeholder="2"></label>' +
    '<p class="aide" style="margin:-.5rem 0 1rem">Laissez vide si vous ne voulez pas être prévenue. ' +
    "Sinon, dès que la quantité passe en dessous, l'article vous est proposé dans les courses.</p>" +
    '<label class="champ"><span>Rayon</span>' + selectRayon(cour.rayon) + "</label>" +
    '<label class="champ"><span>À consommer avant le… (facultatif)</span>' +
    '<input type="date" name="peremption" value="' + esc(cour.peremption || "") + '"></label>' +
    '<p class="aide" style="margin:-.4rem 0 1rem">Avec une date, l’article est signalé ' +
    "quand il approche, et le générateur de menus propose en priorité les plats qui " +
    "l'utilisent.</p>" +
    boutonsFormulaire(s ? "Enregistrer" : "Ajouter à la réserve", !!s) + "</form>";

  ouvrirFeuille(s ? "Modifier " + s.nom : "Nouvel article de réserve", html, (f) => {
    if (!s) f.querySelector('[name="nom"]').focus();
    const bs = f.querySelector('[data-role="suppr"]');
    if (bs) bs.onclick = async () => {
      const ok = await confirmer("Retirer « " + s.nom + " » de la réserve ?",
        { titre: "Supprimer", ok: "Retirer", danger: true });
      if (!ok) return;
      fermerFeuille();
      Actions.supprimerStock(s.id);
      toast("Retiré de la réserve");
    };
    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);
      fermerFeuille();
      Actions.enregistrerStock({
        nom: String(d.get("nom")).trim(),
        qte: String(d.get("qte")).trim(),
        unite: String(d.get("unite")),
        mini: String(d.get("mini")).trim(),
        rayon: String(d.get("rayon")),
        vrac: !!d.get("vrac"),
        peremption: String(d.get("peremption") || "")
      }, s ? s.id : null);
      toast(s ? "Réserve mise à jour" : "Ajouté à la réserve 🥫");
    };
  });
};

/* Fin des courses : ce qu'on vient d'acheter rejoint la réserve. */
Formulaires.terminerCourses = function () {
  const cible = listeCourante().id;
  const achetes = etat.courses.filter((c) => c.coche && listeDe(c) === cible);
  if (!achetes.length) { toast("Cochez d'abord ce que vous avez acheté"); return; }

  const connus = [], nouveaux = [], douteux = [];
  achetes.forEach((c) => {
    const s = articleStock(c.nom);
    if (!s) { nouveaux.push(c); return; }
    const ajout = convertirUnite(c.qte, c.unite || "", s.unite || "");
    if (ajout === null) { douteux.push({ c: c, s: s }); return; }
    connus.push({ c: c, s: s, avant: nombre(s.qte) || 0, apres: (nombre(s.qte) || 0) + ajout });
  });

  /* Rien de nouveau à proposer et le réglage est actif : on ne dérange pas. */
  if (reserveAutomatique() && !nouveaux.length && !douteux.length) {
    Actions.terminerCourses({ listeId: cible, enReserve: true, nouveaux: [] });
    return;
  }

  const ligneConnu = (x) =>
    '<div class="ligne"><span style="font-size:1.1rem">🥫</span>' +
    '<div class="ligne-corps"><b>' + esc(x.c.nom) + "</b><small>" +
    esc(formaterQte(x.avant, x.s.unite)) + " → <b>" +
    esc(formaterQte(x.apres, x.s.unite)) + "</b></small></div></div>";

  /* Cochés par défaut. Ils ne l'étaient pas, et c'était une erreur : la
     PREMIÈRE fois, la réserve est vide, donc tout est « nouveau », donc rien
     n'entrait — l'application avait l'air cassée au moment précis où on
     l'essayait. Le garde-fou reste la liste elle-même, qui s'affiche avant
     d'agir : on décoche ce qui ne reste pas à la maison. */
  const ligneNouveau = (c) =>
    '<label class="ligne" style="cursor:pointer">' +
    '<input type="checkbox" data-nouveau="' + esc(c.nom) + '" checked style="width:auto">' +
    '<span class="ligne-corps"><b>' + esc(c.nom) + "</b><small>" +
    esc(formaterQte(c.qte, c.unite) || "quantité non précisée") + " • " + esc(c.rayon) +
    "</small></span></label>";

  /* On demande plutôt que d'ignorer : deux paquets de riz, la personne qui
     revient du magasin sait combien de kilos cela fait. */
  const ligneDouteux = (x) =>
    '<div class="ligne"><span style="font-size:1.1rem">⚖️</span>' +
    '<div class="ligne-corps"><b>' + esc(x.c.nom) + "</b><small>acheté " +
    esc(formaterQte(x.c.qte, x.c.unite) || "?") + " • en réserve : " +
    esc(formaterQte(x.s.qte, x.s.unite)) + "</small></div>" +
    '<input type="number" inputmode="decimal" min="0" step="any" ' +
    'data-saisie="' + esc(x.s.id) + '" placeholder="0" ' +
    'style="width:5rem;flex:0 0 auto;text-align:right">' +
    '<span class="etiquette">' + esc(x.s.unite || "unité") + "</span></div>";

  ouvrirFeuille("Terminer les courses",
    '<p class="aide" style="margin-bottom:.8rem">' + achetes.length +
    " article(s) coché(s). Ils vont quitter la liste.</p>" +

    (connus.length
      ? '<div class="sous-titre" style="margin-top:0"><h3>Rentrent en réserve</h3>' +
        '<span class="etiquette vert">' + connus.length + "</span></div>" +
        '<div class="carte">' + connus.map(ligneConnu).join("") + "</div>"
      : "") +

    (nouveaux.length
      ? '<div class="sous-titre"><h3>Pas encore en réserve</h3>' +
        '<button class="lien" data-role="tout">Tout décocher</button></div>' +
        '<p class="aide" style="margin:-.3rem 0 .4rem">Ils vont être ajoutés à votre ' +
        "réserve. <b>Décochez ce qui ne reste pas à la maison</b> — le gâteau " +
        "d'anniversaire, la pizza du samedi soir : ceux-là disparaîtront simplement " +
        "de la liste.</p>" +
        '<div class="carte">' + nouveaux.map(ligneNouveau).join("") + "</div>"
      : "") +

    (douteux.length
      ? '<div class="sous-titre"><h3>À vous de dire</h3>' +
        '<span class="etiquette chaud">' + douteux.length + "</span></div>" +
        '<p class="aide" style="margin:-.3rem 0 .5rem">Les unités ne correspondent ' +
        "pas. Indiquez ce que vous rapportez, dans l'unité de la réserve — laissez " +
        "vide pour ne rien ajouter.</p>" +
        '<div class="carte">' + douteux.map(ligneDouteux).join("") + "</div>"
      : "") +

    '<label class="champ" style="display:flex;gap:.6rem;align-items:center;margin-top:.8rem">' +
    '<input type="checkbox" id="case-auto" style="width:auto"' +
    (reserveAutomatique() ? " checked" : "") + ">" +
    '<span style="margin:0">Ne plus me demander pour les articles déjà en réserve</span></label>' +

    '<div class="rangee-btn" style="margin-top:.6rem">' +
    '<button class="btn" data-action="fermer">Annuler</button>' +
    '<button class="btn principal" data-role="ok">Terminer</button></div>',

    (f) => {
      const bt = f.querySelector('[data-role="tout"]');
      if (bt) bt.onclick = () => {
        const cases = f.querySelectorAll("[data-nouveau]");
        const tout = Array.from(cases).every((c) => c.checked);
        cases.forEach((c) => { c.checked = !tout; });
        bt.textContent = tout ? "Tout cocher" : "Tout décocher";
      };
      f.querySelector('[data-role="ok"]').onclick = () => {
        const choisis = Array.from(f.querySelectorAll("[data-nouveau]:checked"))
          .map((c) => c.dataset.nouveau);
        const saisies = {};
        f.querySelectorAll("input[data-saisie]").forEach((i) => {
          const v = nombre(i.value);
          if (v !== null && v > 0) saisies[i.dataset.saisie] = v;
        });
        const auto = f.querySelector("#case-auto");
        localStorage.setItem("tribu:reserveAuto", auto && auto.checked ? "1" : "0");
        fermerFeuille();
        Actions.terminerCourses({ listeId: cible, enReserve: true, nouveaux: choisis, saisies: saisies });
      };
    });
};

/* ============================ SIGNALER / PROPOSER ============================ */

Formulaires.retour = function () {
  const html = '<form id="f-retour">' +
    '<p class="aide" style="margin-bottom:1rem">L\'application est en version <b>bêta</b> : ' +
    "vos remarques servent vraiment. Décrivez ce qui s'est passé ou ce que vous aimeriez.</p>" +
    '<label class="champ"><span>De quoi s\'agit-il ?</span></label>' +
    puceMultiple("genre", [
      { val: "bug", html: "🐞 Un problème" },
      { val: "idee", html: "💡 Une idée" },
      { val: "autre", html: "💬 Autre" }], ["bug"]) +
    '<label class="champ"><span>En une phrase</span>' +
    '<input type="text" name="titre" required maxlength="80" ' +
    'placeholder="Le bouton Valider ne fait rien"></label>' +
    '<label class="champ"><span>Détails (que faisiez-vous ? qu\'attendiez-vous ?)</span>' +
    '<textarea name="detail" maxlength="1500" required ' +
    'placeholder="J\'étais dans l\'onglet Tâches, j\'ai appuyé sur…"></textarea></label>' +
    '<p class="aide">Sont joints automatiquement : votre prénom, le nom et le repère de la tribu, ' +
    "la version de l'application et le type d'appareil (par exemple « iPhone · Safari »). Rien d'autre.</p>" +
    '<div class="rangee-btn" style="margin-top:1.2rem">' +
    '<button type="button" class="btn" data-action="fermer">Annuler</button>' +
    '<button type="submit" class="btn principal">Envoyer</button></div></form>';

  ouvrirFeuille("Signaler ou proposer", html, (f) => {
    brancherMulti(f, "genre", true);
    f.onsubmit = async (ev) => {
      ev.preventDefault();
      const bouton = ev.target.querySelector('button[type="submit"]');
      bouton.disabled = true;
      const d = new FormData(ev.target);
      const retour = {
        id: id(),
        genre: valeursMulti(f, "genre")[0] || "autre",
        titre: String(d.get("titre")).trim(),
        detail: String(d.get("detail")).trim(),
        deQui: moi ? moi.prenom : "?",
        famille: etat.famille.code || "?",
        nomFamille: etat.famille.nom || "",
        version: VERSION,
        /* Un resume (« iPhone · Safari »), pas le user-agent complet : c'est
           ce que l'ecran annonce, et c'est tout ce qui sert (revue du 12/09/2026). */
        appareil: typeAppareil(navigator.userAgent),
        /* Instant d'envoi en nombre : les regles Firestore le comparent a
           l'heure du serveur pour autoriser l'effacement au bout de 12 mois. */
        envoyeA: Date.now(),
        envoyeLe: new Date().toISOString()
      };
      const ok = await Store.envoyerRetour(retour);
      fermerFeuille();
      if (ok) {
        toast("Merci ! Votre message est parti 💌");
      } else if (Store.mode !== "nuage") {
        /* Inutile de promettre un envoi differe : il n'existe pas. */
        toast("Sans partage familial, aucun message ne peut être envoyé");
      } else {
        toast("Envoi impossible — réessayez plus tard");
      }
    };
  });
};

/* ================================ REPAS ================================ */

Formulaires.repas = function (jour, moment) {
  const cle = jour + "-" + moment;
  const actuel = (etat.repas[ui.semaine] || {})[cle] || null;
  const liste = etat.recettes.slice().sort((a, b) => a.nom.localeCompare(b.nom));
  const r = actuel && actuel.recetteId ? etat.recettes.find((x) => x.id === actuel.recetteId) : null;
  const e = etatRepas(ui.semaine, jour, moment);
  const pts = Number(reglagesFamille().pointsRepas) || 0;
  const cuisinier = actuel && actuel.cuisinier ? membre(actuel.cuisinier) : null;
  const absents = absentsDuRepas(ui.semaine, jour, moment);

  /* Quand le plat est déjà choisi, ce qu'on vient faire le plus souvent
     n'est pas d'en changer : c'est de dire qui cuisine, ou que c'est fait.
     Ces gestes passent donc devant, et le choix du plat se replie. */
  let h = '<div id="f-repas">';

  /* Une absence : rien à cuisiner, rien à valider, rien à acheter. On montre
     la raison et le moyen d'en sortir, et on saute tout le reste. */
  if (estAbsence(actuel)) {
    const mo = infoMotif(actuel.motif);
    h += '<div class="carte" style="margin-bottom:.8rem">' +
      '<div class="ligne" style="border:none;padding-top:0">' +
      '<span style="font-size:1.5rem">' + mo.emoji + "</span>" +
      '<div class="ligne-corps"><b>' + esc(actuel.texte || mo.nom) + "</b>" +
      "<small>Aucun repas à prévoir. Le générateur ne touchera pas à cette case, " +
      "et rien n'ira dans la liste de courses.</small></div></div>" +
      '<button class="btn plein" data-role="vider" style="margin-top:.5rem">' +
      "↩️ Finalement, on mange à la maison</button></div>";
  }

  if (actuel && !estAbsence(actuel)) {
    h += '<div class="carte" style="margin-bottom:.8rem">' +
      '<div class="ligne" style="border:none;padding-top:0">' +
      '<span style="font-size:1.5rem">' + esc(actuel.restes ? "♻️" : (r ? (r.emoji || "🍽️") : "📝")) + "</span>" +
      '<div class="ligne-corps"><b>' + esc(r ? r.nom : (actuel.texte || "Repas")) + "</b>" +
      (actuel.restes ? "<small>restes — aucune course, aucune réserve entamée</small>" : "") + "</div>" +
      (r ? '<button class="btn mini doux" data-role="consulter">📖</button>' : "") + "</div>" +

      /* --- qui cuisine --- */
      '<div class="sous-titre" style="margin:.6rem 0 .4rem"><h3>Qui cuisine ?</h3>' +
      (pts ? '<span class="etiquette or">' + pts + " pts</span>" : "") + "</div>" +
      '<div class="puces">' +
      '<button class="puce ' + (cuisinier ? "" : "on") + '" data-role="chef" data-id="">Personne</button>' +
      cuisiniersPossibles().map((m) =>
        '<button class="puce ' + (cuisinier && cuisinier.id === m.id ? "on" : "") +
        '" data-role="chef" data-id="' + m.id + '">' +
        esc((m.emoji || "🙂") + " " + m.prenom) + "</button>").join("") +
      "</div>" +
      '<button class="lien" data-role="tour" style="margin-top:.5rem">🔁 Prendre le tour de rôle</button>' +

      /* Différent d'une absence de toute la maison : là on cuisine, mais
         pour moins de monde — et la liste de courses en tient compte. */
      '<div class="sous-titre" style="margin:.7rem 0 .4rem"><h3>Qui ne mange pas ?</h3>' +
      '<span class="etiquette">' + convivesDuRepas(ui.semaine, jour, moment) + " à table</span></div>" +
      '<div class="puces">' + etat.membres.map((m) =>
        '<button class="puce ' + (absents.indexOf(m.id) !== -1 ? "on" : "") +
        '" data-absent-membre="' + m.id + '">' +
        esc((m.emoji || "🙂") + " " + m.prenom) + "</button>").join("") + "</div>" +
      '<p class="aide" style="margin:.35rem 0 0">Cantine, resto entre amis… Les quantités ' +
      "de la liste de courses suivent.</p>" +

      /* --- où en est ce repas --- */
      '<hr class="sep">' +
      (e.statut === "valide"
        ? '<div class="bandeau info">✓<div><b>Repas validé.</b>' +
          (e.parQui && pts ? " " + esc(nomDe(e.parQui)) + " a gagné " + pts + " points." : "") +
          "</div></div>"
        : e.statut === "fait"
          ? '<div class="bandeau">⏳<div><b>Marqué fait par ' + esc(nomDe(e.parQui)) + ".</b> " +
            (estAdmin() ? "À vous de valider." : "En attente d'un administrateur.") + "</div></div>" +
            '<div class="rangee-btn">' +
            '<button class="btn" data-action="repas-annuler" data-jour="' + jour + '" data-moment="' + moment + '">Annuler</button>' +
            (estAdmin()
              ? '<button class="btn principal" data-action="repas-valider" data-jour="' + jour + '" data-moment="' + moment + '">Valider</button>'
              : "") + "</div>"
          : '<button class="btn plein principal" data-action="repas-fait" data-jour="' + jour +
            '" data-moment="' + moment + '">🍽️ C’est fait — j’ai cuisiné</button>') +

      /* --- ce que le repas retire de la réserve --- */
      (r && !actuel.restes && etat.stock.length
        ? '<button class="btn plein doux" data-action="repas-reserve" data-jour="' + jour +
          '" data-moment="' + moment + '" style="margin-top:.5rem">🥫 Retirer de ma réserve</button>'
        : "") +
      "</div>";

    h += '<label class="champ" style="display:flex;gap:.6rem;align-items:flex-start">' +
      '<input type="checkbox" id="repas-restes"' + (actuel.restes ? " checked" : "") +
      ' style="width:auto;margin-top:.25rem"><span style="margin:0">♻️ Ce sont des restes' +
      '<br><small style="font-weight:400">Le plat reste affiché, mais il ne fait acheter ' +
      "aucun ingrédient et n'entame pas la réserve.</small></span></label>";
  }

  /* Le geste qu'on cherche quand on ne mange pas à la maison : une pression,
     pas un texte à taper. */
  if (!estAbsence(actuel)) {
    h += '<div class="sous-titre" style="margin-top:.2rem"><h3>Personne à la maison ?</h3></div>' +
      '<div class="puces" style="margin-bottom:.4rem">' +
      MOTIFS_ABSENCE.map((m) =>
        '<button class="puce" data-absent="' + m.val + '">' +
        m.emoji + " " + esc(m.nom) + "</button>").join("") + "</div>" +
      '<p class="aide" style="margin:0 0 1rem">Aucun repas à prévoir : la case est ' +
      "posée, le générateur la laissera tranquille et rien n'ira dans les courses.</p>";
  }

  /* « 🎲 Autre idée » : refait CE repas avec les reglages memorises du
     generateur, sans toucher au reste de la semaine. Pas pour une absence, ni
     pour un repas deja cuisine. */
  const autreIdee = !estAbsence(actuel) && e.statut !== "fait" && e.statut !== "valide";
  h += '<div class="sous-titre" style="margin-top:.2rem"><h3>' +
    (actuel && !estAbsence(actuel) ? "Changer le plat" : "Choisir un plat") + "</h3></div>" +
    (autreIdee
      ? '<button class="btn plein doux" data-role="autre-idee" style="margin-bottom:.35rem">🎲 ' +
        (actuel && actuel.recetteId ? "Autre idée de plat" : "Proposer un plat") + "</button>" +
        '<p class="aide" style="margin:0 0 .8rem">Selon vos réglages du générateur : ' +
        esc(resumeReglagesGenerateur()) + ".</p>"
      : "") +
    '<div id="filtres-repas"></div>' +
    '<input type="text" id="rech-repas" placeholder="Rechercher un plat ou un ingrédient…" autocomplete="off" style="margin-bottom:.6rem">' +
    '<div id="liste-repas" style="max-height:36dvh;overflow-y:auto;margin-bottom:.9rem"></div>' +
    "<hr class=\"sep\">" +
    '<label class="champ"><span>Ou écrire librement</span>' +
    '<input type="text" id="repas-libre" maxlength="60" placeholder="Chez mamie, resto…" value="' +
    esc(actuel && actuel.texte ? actuel.texte : "") + '"></label>' +
    '<div class="rangee-btn">' +
    (actuel ? '<button class="btn danger" data-role="vider">Vider</button>' : "") +
    '<button class="btn" data-action="fermer">Fermer</button>' +
    '<button class="btn principal" data-role="ok-libre">Valider</button></div></div>';

  ouvrirFeuille(jour.charAt(0).toUpperCase() + jour.slice(1) + " " + (moment === "midi" ? "midi" : "soir"),
    h, (f) => {
      const zone = f.querySelector("#liste-repas");
      const rech = f.querySelector("#rech-repas");

      /* Les mêmes filtres que le cahier de recettes, gardés sur l'appareil
         (au départ : ceux du générateur). Repliés, on ne voit que ceux qui
         sont actifs, pour ne pas repousser la liste hors de l'écran. */
      let filtres = filtresChoixPlat();
      let filtresOuverts = false;
      const zoneF = f.querySelector("#filtres-repas");
      const puceFiltre = (v, libelle, on) =>
        '<button type="button" class="puce ' + (on ? "on" : "") + '" data-filtre-plat="' + esc(v) + '">' +
        libelle + (on && !filtresOuverts ? " ✕" : "") + "</button>";
      const dessinerFiltres = () => {
        zoneF.innerHTML = '<div class="puces" style="margin-bottom:.5rem">' +
          '<button type="button" class="puce" data-role="ouvrir-filtres">🔎 ' +
          (filtresOuverts ? "Replier" : "Filtres") + "</button>" +
          (filtresOuverts
            ? filtresRecettesBase().map(([v, l]) => puceFiltre(v, l, filtres.includes(v))).join("") +
              PROFILS_SANTE.map((p) => puceFiltre("sante:" + p.val, p.emoji + " " + esc(p.nom),
                filtres.includes("sante:" + p.val))).join("")
            : filtres.map((v) => puceFiltre(v, nomFiltreRecette(v), true)).join("")) +
          "</div>" +
          (filtresOuverts
            ? '<button type="button" class="lien" data-role="filtres-generateur" style="margin:-.2rem 0 .6rem">' +
              "↺ Reprendre les filtres du générateur</button>"
            : "");
      };
      zoneF.onclick = (ev) => {
        if (ev.target.closest('[data-role="ouvrir-filtres"]')) {
          filtresOuverts = !filtresOuverts; dessinerFiltres(); return;
        }
        if (ev.target.closest('[data-role="filtres-generateur"]')) {
          filtres = filtresDepuisGenerateur();
        } else {
          const p = ev.target.closest("[data-filtre-plat]");
          if (!p) return;
          const v = p.dataset.filtrePlat;
          filtres = filtres.includes(v) ? filtres.filter((x) => x !== v) : filtres.concat([v]);
        }
        memoriserListe("tribu:filtresChoixPlat", filtres);
        dessinerFiltres();
        dessiner();
      };
      dessinerFiltres();

      const dessiner = () => {
        /* Même tolérance que dans le cahier de recettes : « pates » trouve
           « Pâtes », personne ne tape les accents sur un téléphone. La
           recherche porte aussi sur les ingrédients. */
        const l = liste.filter((x) => recetteCorrespond(x, rech.value, filtres));
        zone.innerHTML = l.length
          ? '<p class="aide" style="margin:0 0 .3rem">' + l.length + " plat" + (l.length > 1 ? "s" : "") + "</p>" +
            l.map((x) => '<button class="ligne" data-recette="' + x.id + '" ' +
            'style="width:100%;background:none;border:none;border-top:1px solid var(--border);text-align:left">' +
            '<span style="font-size:1.3rem">' + esc(x.emoji || "🍽️") + "</span>" +
            '<span class="ligne-corps"><b>' + esc(x.nom) + "</b><small>" +
            (estDessert(x) ? "dessert • " : "") +
            (x.vegetarien ? "végé • " : "") + (x.rapide ? "rapide • " : "") +
            (x.ingredients || []).length + " ingrédient" + ((x.ingredients || []).length > 1 ? "s" : "") +
            "</small></span>" +
            (actuel && actuel.recetteId === x.id ? '<span class="etiquette vert">choisi</span>' : "") +
            "</button>").join("")
          : '<p class="aide">Aucun plat ne correspond.</p>';
      };
      dessiner();
      rech.oninput = dessiner;

      const bAutre = f.querySelector('[data-role="autre-idee"]');
      if (bAutre) bAutre.onclick = () => {
        const g = reglagesGenerateur();
        const res = genererMenus(ui.semaine, Object.assign({}, g,
          { rapideSemaine: g.rapide, cibles: [{ jour: jour, moment: moment }] }));
        if (!res) return;
        const nv = (etat.repas[ui.semaine] || {})[jour + "-" + moment];
        const r = nv && nv.recetteId ? etat.recettes.find((x) => x.id === nv.recetteId) : null;
        toast("🎲 " + (r ? (r.emoji || "🍽️") + " " + r.nom : "Nouveau plat"));
        /* On reste sur la fiche : on relance jusqu'a trouver son bonheur. */
        Formulaires.repas(jour, moment);
      };

      zone.onclick = (ev) => {
        const b = ev.target.closest("[data-recette]");
        if (!b) return;
        fermerFeuille();
        Actions.definirRepas(ui.semaine, jour, moment, { recetteId: b.dataset.recette, texte: "" });
      };

      f.querySelectorAll("[data-absent]").forEach((b) => {
        b.onclick = () => {
          const mo = infoMotif(b.dataset.absent);
          fermerFeuille();
          Actions.marquerAbsence(ui.semaine, jour, moment, mo.val, "");
          toast(mo.emoji + " " + mo.nom + " — aucun repas à prévoir");
        };
      });

      f.querySelectorAll("[data-absent-membre]").forEach((b) => {
        b.onclick = () => {
          const id = b.dataset.absentMembre;
          const l = absentsDuRepas(ui.semaine, jour, moment);
          const i = l.indexOf(id);
          if (i === -1) l.push(id); else l.splice(i, 1);
          fermerFeuille();
          Actions.definirAbsentsRepas(ui.semaine, jour, moment, l);
          const n = Math.max(1, nbConvives() - l.length);
          toast(n + " personne" + (n > 1 ? "s" : "") + " à table pour ce repas");
        };
      });

      f.querySelectorAll('[data-role="chef"]').forEach((b) => {
        b.onclick = () => {
          fermerFeuille();
          Actions.definirCuisinier(ui.semaine, jour, moment, b.dataset.id || null);
          const m = b.dataset.id ? membre(b.dataset.id) : null;
          toast(m ? m.prenom + " cuisine 🍳" : "Personne n'est désigné");
        };
      });
      const bt = f.querySelector('[data-role="tour"]');
      if (bt) bt.onclick = () => {
        const q = cuisinierDuTour(ui.semaine, jour, moment);
        fermerFeuille();
        Actions.definirCuisinier(ui.semaine, jour, moment, q);
        const m = membre(q);
        toast(m ? "C'est au tour de " + m.prenom + " 🔁" : "Personne à désigner");
      };
      const cr = f.querySelector("#repas-restes");
      if (cr) cr.onchange = () => {
        const c = repasDe(ui.semaine, jour, moment);
        if (!c) return;
        c.restes = cr.checked;
        sauver("repas");
        toast(cr.checked ? "Marqué comme restes ♻️" : "Repas normal");
      };

      const bc = f.querySelector('[data-role="consulter"]');
      if (bc) bc.onclick = () => Formulaires.consulterRecette(actuel.recetteId);
      /* Il peut y en avoir deux : celui de la carte d'absence et celui du bas. */
      f.querySelectorAll('[data-role="vider"]').forEach((bv) => {
        bv.onclick = () => { fermerFeuille(); Actions.definirRepas(ui.semaine, jour, moment, null); };
      });
      f.querySelector('[data-role="ok-libre"]').onclick = () => {
        const txt = f.querySelector("#repas-libre").value.trim();
        fermerFeuille();
        Actions.definirRepas(ui.semaine, jour, moment, txt ? { recetteId: null, texte: txt } : null);
      };
    });
};

/* ================ CE QUE LE REPAS RETIRE DE LA RÉSERVE ================

   On ne touche jamais à la réserve sans montrer, ligne à ligne, ce qui va
   être retiré. Une réserve fausse est pire qu'une réserve vide : on s'y fie
   pour faire les courses. */

Formulaires.consommerRepas = function (jour, moment) {
  const lignes = ingredientsARetirer(ui.semaine, jour, moment);
  if (!lignes.length) {
    toast("Aucun ingrédient de ce plat n'est dans votre réserve");
    return;
  }
  const nets = lignes.filter((l) => l.retire !== null);
  const douteux = lignes.filter((l) => l.retire === null);

  const html = '<div id="f-conso">' +
    '<p class="aide" style="margin-bottom:.8rem">Quantités calculées pour <b>' +
    nbConvives() + " personne" + (nbConvives() > 1 ? "s" : "") + "</b>. " +
    "Décochez ce que vous n'avez pas utilisé.</p>" +
    (nets.length
      ? '<div class="carte">' + nets.map((l) =>
        '<label class="ligne" style="cursor:pointer">' +
        '<input type="checkbox" data-stock="' + esc(l.stockId) + '" checked style="width:auto;flex:0 0 auto">' +
        '<div class="ligne-corps"><b>' + esc(l.nom) + "</b><small>" +
        esc(l.avant) + " → " + esc(formaterQte(texteNombre(l.reste), l.unite)) +
        "  (−" + esc(formaterQte(texteNombre(l.retire), l.unite)) + ")</small></div></label>").join("") +
        "</div>"
      : "") +
    /* Unités inconvertibles : l'application ne peut pas deviner combien de
       boîtes font quatre tomates — mais la personne qui vient de cuisiner
       le sait. On demande, au lieu d'ignorer. */
    (douteux.length
      ? '<div class="sous-titre"><h3>À vous de dire</h3>' +
        '<span class="etiquette chaud">' + douteux.length + "</span></div>" +
        '<p class="aide" style="margin:-.3rem 0 .5rem">La recette et la réserve ne ' +
        "sont pas dans la même unité. Indiquez ce que vous avez sorti — laissez vide " +
        "pour ne rien retirer.</p>" +
        '<div class="carte">' + douteux.map((l) =>
          '<div class="ligne"><span style="font-size:1.1rem">⚖️</span>' +
          '<div class="ligne-corps"><b>' + esc(l.nom) + "</b><small>recette : " +
          esc(l.demande || "?") + " • en réserve : " + esc(l.avant) + "</small></div>" +
          '<input type="number" inputmode="decimal" min="0" step="any" ' +
          'data-saisie="' + esc(l.stockId) + '" placeholder="0" ' +
          'style="width:5rem;flex:0 0 auto;text-align:right">' +
          '<span class="etiquette">' + esc(l.unite || "unité") + "</span></div>").join("") +
        "</div>"
      : "") +
    '<div class="rangee-btn" style="margin-top:1rem">' +
    '<button class="btn" data-action="fermer">Annuler</button>' +
    '<button class="btn principal" data-role="ok">Retirer de la réserve</button></div></div>';

  ouvrirFeuille("Ce que ce repas a consommé", html, (f) => {
    f.querySelector('[data-role="ok"]').onclick = () => {
      const garder = Array.from(f.querySelectorAll("input[data-stock]"))
        .filter((c) => !c.checked).map((c) => c.dataset.stock);
      const saisies = {};
      f.querySelectorAll("input[data-saisie]").forEach((i) => {
        const v = nombre(i.value);
        if (v !== null && v > 0) saisies[i.dataset.saisie] = v;
      });
      fermerFeuille();
      const n = Actions.retirerDeLaReserve(nets, garder, saisies);
      toast(n ? n + " article(s) mis à jour dans la réserve 🥫" : "Rien n'a été retiré");
    };
  });
};

/* ==================== LES RÉGLAGES DE LA FAMILLE ==================== */

Formulaires.reglagesFamille = function () {
  if (!estAdmin()) { toast("Seul un administrateur peut changer ces réglages"); return; }
  const g = reglagesFamille();

  const html = '<form id="f-reglages">' +
    '<label class="champ"><span>Nombre de personnes à table</span>' +
    '<input type="number" name="convives" min="1" max="30" value="' + esc(String(g.convives)) + '"></label>' +
    '<p class="aide" style="margin:-.4rem 0 1rem">Les recettes fournies sont écrites pour ' +
    PORTIONS_BASE + " personnes. Les quantités de la liste de courses et de la " +
    "réserve sont ajustées à ce nombre.</p>" +

    '<label class="champ"><span>Points gagnés pour un repas cuisiné</span>' +
    '<input type="number" name="pointsRepas" min="0" max="200" value="' + esc(String(g.pointsRepas)) + '"></label>' +
    '<p class="aide" style="margin:-.4rem 0 1rem">Comme pour une tâche : la personne ' +
    "qui cuisine dit « c'est fait », un administrateur valide, les points tombent. " +
    "Mettez 0 pour ne pas compter la cuisine.</p>" +

    '<label class="champ" style="display:flex;gap:.6rem;align-items:flex-start">' +
    '<input type="checkbox" name="points"' + (g.points !== false ? " checked" : "") +
    ' style="width:auto;margin-top:.25rem"><span style="margin:0">Système de points' +
    '<br><small style="font-weight:400">Points des tâches, classement, cadeaux et objectif ' +
    "commun. Décoché, tout cela disparaît de l'application : les tâches restent, avec " +
    "« c'est fait » et la validation. Rien n'est effacé, et tout revient si vous le " +
    "réactivez.</small></span></label>" +

    '<label class="champ" style="display:flex;gap:.6rem;align-items:flex-start">' +
    '<input type="checkbox" name="antiGaspi"' + (g.antiGaspi !== false ? " checked" : "") +
    ' style="width:auto;margin-top:.25rem"><span style="margin:0">Anti-gaspillage' +
    '<br><small style="font-weight:400">Le générateur de menus propose en priorité ' +
    "les plats qui utilisent ce qui va bientôt périmer dans la réserve.</small></span></label>" +

    boutonsFormulaire("Enregistrer", false) + "</form>";

  ouvrirFeuille("Réglages de la famille", html, (f) => {
    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const n = Number(d.get("convives"));
      if (!(n >= 1 && n <= 30)) { toast("Entre 1 et 30 personnes"); return; }
      etat.reglages = Object.assign({}, etat.reglages, {
        convives: n,
        points: !!d.get("points"),
        pointsRepas: Math.max(0, Math.min(200, Number(d.get("pointsRepas")) || 0)),
        antiGaspi: !!d.get("antiGaspi")
      });
      fermerFeuille();
      sauver("reglages");
      toast("Réglages enregistrés");
    };
  });
};

/* ================================ GENERATEUR DE MENUS ================================ */

/* Les réglages du générateur sont gardés sur l'appareil : d'une semaine à
   l'autre, on retrouve sa façon de faire sans tout recocher. Sur l'appareil
   et non dans la famille, car un membre ordinaire n'a pas le droit d'écrire
   dans les réglages partagés. */
const REGLAGES_GEN_DEFAUT = {
  midi: true, soir: true, remplacer: false,
  regime: "libre", poisson: "", viande: "", vege: "", profil: "",
  saisons: true, reserve: true, soirLeger: true, rapide: true, thermomix: false,
  semaines: 3
};
function reglagesGenerateur() {
  let lu = {};
  try { lu = JSON.parse(localStorage.getItem("tribu:generateur") || "{}") || {}; } catch (e) { lu = {}; }
  return Object.assign({}, REGLAGES_GEN_DEFAUT, lu);
}

/* Les filtres de la liste « Changer le plat » d'un repas, gardés sur
   l'appareil. La première fois, ils reprennent ceux du générateur : on ne
   perd pas son filtre en passant de « 🎲 Autre idée » au choix à la main. */
function filtresDepuisGenerateur() {
  const g = reglagesGenerateur();
  const f = ["plat"];                     // le générateur ne pose jamais de dessert
  if (g.saisons) f.push("saison");
  if (g.thermomix) f.push("thermomix");
  if (g.regime === "vege") f.push("vege");
  if (g.profil) f.push("sante:" + g.profil);
  return f;
}
function filtresChoixPlat() {
  return lireListeMemorisee("tribu:filtresChoixPlat") || filtresDepuisGenerateur();
}

/* Les reglages du generateur en quelques mots, affiches sous « 🎲 Autre
   idée » : on sait sur quoi repose la proposition. */
function resumeReglagesGenerateur() {
  const g = reglagesGenerateur();
  const l = [];
  if (g.regime === "vege") l.push("végétarien");
  else if (g.regime === "sansViande") l.push("sans viande");
  const p = g.profil ? infoProfil(g.profil) : null;
  if (p) l.push(p.nom.toLowerCase());
  if (g.saisons) l.push("de saison");
  if (g.thermomix) l.push("Thermomix de préférence");
  if (g.rapide) l.push("rapide en semaine");
  if (g.soirLeger) l.push("léger le soir");
  if (g.reserve) l.push("ma réserve d’abord");
  return l.length ? l.join(", ") : "aucun filtre";
}

Formulaires.generateur = function () {
  const g = reglagesGenerateur();
  const co = (n) => (g[n] ? " checked" : "");
  const ligneCase = (nom, texte, aide) =>
    '<label class="champ" style="display:flex;gap:.6rem;align-items:flex-start">' +
    '<input type="checkbox" name="' + nom + '"' + co(nom) + ' style="width:auto;margin-top:.25rem">' +
    '<span style="margin:0">' + texte +
    (aide ? '<br><small style="font-weight:400">' + aide + "</small>" : "") +
    "</span></label>";
  /* « Peu importe » n'est pas zéro : c'est « je ne compte pas ». */
  const combien = (nom, valeur) => {
    let o = '<option value=""' + (valeur === "" ? " selected" : "") + ">Peu importe</option>";
    for (let k = 0; k <= 10; k++) {
      o += '<option value="' + k + '"' + (String(valeur) === String(k) ? " selected" : "") + ">" +
        (k === 0 ? "Aucun" : k + " fois") + "</option>";
    }
    return '<select name="' + nom + '">' + o + "</select>";
  };
  const sais = infoSaison(saisonActuelle());
  const nbStock = etat.stock.length;
  const nbThermo = etat.recettes.filter((r) => r.thermomix).length;

  let html = '<form id="f-gen">' +

    '<div class="sous-titre"><h3>Quels repas remplir ?</h3></div>' +
    ligneCase("midi", "Les midis") +
    ligneCase("soir", "Les soirs") +
    ligneCase("remplacer", "Remplacer les repas déjà prévus",
      "Sinon, seules les cases vides sont complétées.") +

    '<div class="sous-titre"><h3>Ce qu\'on mange</h3></div>' +
    '<label class="champ"><span>Régime de la semaine</span><select name="regime">' +
    '<option value="libre"' + (g.regime === "libre" ? " selected" : "") + ">🍽️ De tout</option>" +
    '<option value="sansViande"' + (g.regime === "sansViande" ? " selected" : "") + ">🐟 Sans viande (poisson autorisé)</option>" +
    '<option value="vege"' + (g.regime === "vege" ? " selected" : "") + ">🥦 Végétarien</option>" +
    "</select></label>" +
    '<div id="bloc-repartition">' +
    '<p class="aide" style="margin:-.3rem 0 .7rem">Combien de fois dans la semaine ? ' +
    "Un nombre indiqué est respecté à la lettre.</p>" +
    '<div class="duo"><label class="champ"><span>🐟 Poisson</span>' + combien("poisson", g.poisson) + "</label>" +
    '<label class="champ" id="champ-viande"><span>🍗 Viande</span>' + combien("viande", g.viande) + "</label></div>" +
    '<label class="champ"><span>🥦 Repas végétariens</span>' + combien("vege", g.vege) + "</label>" +
    "</div>" +
    '<p class="aide" id="note-regime" hidden></p>' +

    '<label class="champ"><span>Façon de cuisiner (santé)</span><select name="profil">' +
    '<option value=""' + (g.profil ? "" : " selected") + ">Aucune — tous les plats</option>" +
    PROFILS_SANTE.map((p) =>
      '<option value="' + p.val + '"' + (g.profil === p.val ? " selected" : "") + ">" +
      p.emoji + " " + esc(p.nom) + "</option>").join("") +
    "</select></label>" +
    '<p class="aide" style="margin:-.4rem 0 .2rem">Écarte les plats qui ne suivent pas ' +
    "cette façon de cuisiner. Se combine avec le régime ci-dessus. " +
    '<button type="button" class="lien" data-action="sante-info">Ce que ça veut dire</button></p>' +

    '<div class="sous-titre"><h3>Comment choisir les plats</h3></div>' +
    ligneCase("saisons", "Respecter les saisons",
      "Nous sommes en " + sais.emoji + " " + sais.nom.toLowerCase() +
      " : les plats des autres saisons seront écartés.") +
    ligneCase("reserve", "Utiliser d'abord ce que j'ai en réserve",
      nbStock
        ? "Les plats dont vous avez déjà les ingrédients passent devant (" + nbStock + " article(s) en réserve)."
        : "Votre réserve est vide pour l'instant : cette option ne changera rien.") +
    ligneCase("soirLeger", "Plats plus légers le soir") +
    ligneCase("rapide", "Plats rapides du lundi au vendredi") +
    ligneCase("thermomix", "Privilégier les recettes Thermomix",
      nbThermo + " recette(s) de votre cahier s'y prêtent.") +
    '<label class="champ"><span>Ne pas resservir un plat vu depuis…</span><select name="semaines">' +
    [2, 3, 4, 6].map((k) =>
      '<option value="' + k + '"' + (Number(g.semaines) === k ? " selected" : "") + ">" +
      k + " semaines</option>").join("") +
    "</select></label>" +

    '<div class="rangee-btn" style="margin-top:1.2rem">' +
    '<button type="button" class="btn" data-action="fermer">Annuler</button>' +
    '<button type="submit" class="btn principal">🎲 Générer</button></div></form>';

  ouvrirFeuille("Générer les menus de la semaine", html, (f) => {
    const regime = f.querySelector('[name="regime"]');
    const bloc = f.querySelector("#bloc-repartition");
    const champViande = f.querySelector("#champ-viande");
    const note = f.querySelector("#note-regime");

    /* Un régime décide déjà de tout : inutile de laisser croire qu'on peut
       en plus demander deux viandes. */
    const majRegime = () => {
      const v = regime.value;
      bloc.hidden = (v === "vege");
      champViande.hidden = (v !== "libre");
      note.hidden = (v === "libre");
      note.textContent = v === "vege"
        ? "Toute la semaine sera végétarienne : seuls les plats marqués végétariens seront proposés."
        : "Aucune viande cette semaine : il restera le poisson, les œufs et les plats végétariens.";
    };
    regime.onchange = majRegime;
    majRegime();

    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const o = {
        midi: !!d.get("midi"), soir: !!d.get("soir"), remplacer: !!d.get("remplacer"),
        regime: d.get("regime") || "libre",
        profil: d.get("profil") || "",
        poisson: d.get("poisson") === null ? "" : d.get("poisson"),
        viande: d.get("viande") === null ? "" : d.get("viande"),
        vege: d.get("vege") === null ? "" : d.get("vege"),
        saisons: !!d.get("saisons"), reserve: !!d.get("reserve"),
        soirLeger: !!d.get("soirLeger"), rapide: !!d.get("rapide"),
        thermomix: !!d.get("thermomix"),
        semaines: Number(d.get("semaines")) || 3
      };
      try { localStorage.setItem("tribu:generateur", JSON.stringify(o)); } catch (e) { /* tant pis */ }
      fermerFeuille();

      const res = genererMenus(ui.semaine, Object.assign({}, o, { rapideSemaine: o.rapide }));
      if (!res) return;
      const detail = ["poisson", "viande", "vege"]
        .filter((c) => res.bilan[c])
        .map((c) => res.bilan[c] + " " + nomCategorie(c)).join(", ");
      toast(res.n + " repas proposés 🍽️" + (detail ? " — " + detail : "") +
        (res.absences ? " (" + res.absences + " absence" + (res.absences > 1 ? "s" : "") +
          " respectée" + (res.absences > 1 ? "s" : "") + ")" : ""));
      if (res.choixCourt) {
        setTimeout(() => toast("Seulement " + res.choixCourt.dispo + " plat(s) « " +
          res.choixCourt.nom + " » : certains reviennent plusieurs fois"), 2800);
      }
      if (res.tropDemande) {
        setTimeout(() => toast("Il y avait " + res.tropDemande +
          " repas demandé(s) de plus que de cases à remplir"), 2800);
      }
    };
  });
};

/* ================================ INGREDIENTS -> COURSES ================================ */

/* Les ingrédients de la semaine, moins ce que vous avez déjà en réserve.
   C'est le lien entre les menus et le stock. */
Formulaires.ingredientsVersCourses = function () {
  const ing = ingredientsDeLaSemaine(ui.semaine);
  if (!ing.length) {
    toast("Aucun plat de la bibliothèque prévu cette semaine");
    return;
  }
  /* « Déjà présent » se juge sur LA LISTE VISÉE, pas sur toutes à la fois.
     Sinon le lait noté sur la liste de la pharmacie faisait sauter le lait de
     la liste du drive — et on repartait des courses sans lait. */
  const dejaDans = (listeId) => new Set(etat.courses
    .filter((c) => !c.coche && listeDe(c) === listeId)
    .map((c) => cleArticle(c.nom)));

  /* Pour chaque ingrédient : besoin, stock, reste à acheter. */
  const lignes = ing.map((i) => {
    const m = manquePour(i.nom, i.qte, i.unite);
    return {
      nom: i.nom, rayon: i.rayon, unite: i.unite,
      besoin: i.besoinTexte,
      enStock: m.enStock,
      manque: m.manque,
      connu: m.connu,
      couvert: m.connu && m.manque !== null && m.manque <= 0,
      dejaListe: false          // rempli juste après, selon la liste choisie
    };
  });
  const marquerPour = (listeId) => {
    const deja = dejaDans(listeId);
    lignes.forEach((l) => { l.dejaListe = deja.has(cleArticle(l.nom)); });
  };
  marquerPour(listeCourante().id);

  const couverts = lignes.filter((l) => l.couvert).length;
  const aCocher = (l) => !l.couvert && !l.dejaListe;

  const detailsDe = (l) => {
    const d = [];
    d.push("besoin " + esc(l.besoin || "?"));
    if (l.enStock !== null) d.push("en réserve " + esc(l.enStock));
    if (l.couvert) d.push("✅ rien à acheter");
    else if (l.connu && l.manque !== null && l.enStock !== null) {
      d.push("<b>à acheter " + esc(formaterQte(l.manque, l.unite)) + "</b>");
    }
    if (l.dejaListe) d.push("déjà dans cette liste");
    if (!l.connu) d.push("⚠️ unités différentes, à vérifier");
    return d.join(" • ");
  };

  const listes = listesCourses();
  let html = '<div id="f-ing">' +
    '<p class="aide" style="margin-bottom:.8rem">Les quantités tiennent compte de votre réserve. ' +
    "Décochez ce que vous ne voulez pas acheter.</p>" +
    (listes.length > 1
      ? '<label class="champ"><span>Dans quelle liste ?</span>' +
        '<select id="choix-liste">' + listes.map((l) =>
          '<option value="' + l.id + '"' + (l.id === listeCourante().id ? " selected" : "") + ">" +
          esc((l.emoji || typeListe(l).emoji) + " " + l.nom) +
          (l.magasin ? " — " + esc(l.magasin) : "") + "</option>").join("") + "</select></label>"
      : "");

  if (couverts) {
    html += '<div class="bandeau info">🥫<div><b>' + couverts + " ingrédient(s)</b> sont déjà " +
      "couverts par votre réserve : ils sont décochés.</div></div>";
  }

  let rayonCourant = "";
  lignes.forEach((l, k) => {
    if (l.rayon !== rayonCourant) {
      rayonCourant = l.rayon;
      html += '<div class="sous-titre" style="margin:.9rem 0 .3rem"><h3>' + esc(rayonCourant) + "</h3></div>";
    }
    html += '<label class="ligne" style="cursor:pointer">' +
      '<input type="checkbox" data-k="' + k + '" style="width:auto"' + (aCocher(l) ? " checked" : "") + ">" +
      '<span class="ligne-corps"><b>' + esc(l.nom) + "</b><small data-d=\"" + k + "\">" +
      detailsDe(l) + "</small></span></label>";
  });

  html += '<div class="rangee-btn" style="margin-top:1.2rem">' +
    '<button class="btn" data-action="fermer">Annuler</button>' +
    '<button class="btn principal" data-role="ok">Ajouter aux courses</button></div></div>';

  ouvrirFeuille("Ingrédients de la semaine", html, (f) => {
    /* Changer de liste change ce qui s'y trouve déjà : on relit les cases et
       les mentions, sinon l'écran parlerait d'une autre liste que celle visée. */
    const champListe0 = f.querySelector("#choix-liste");
    if (champListe0) champListe0.onchange = () => {
      marquerPour(champListe0.value);
      lignes.forEach((l, k) => {
        const boite = f.querySelector('input[data-k="' + k + '"]');
        const detail = f.querySelector('small[data-d="' + k + '"]');
        if (boite) boite.checked = aCocher(l);
        if (detail) detail.innerHTML = detailsDe(l);
      });
    };

    f.querySelector('[data-role="ok"]').onclick = () => {
      const choisis = Array.from(f.querySelectorAll('input[type="checkbox"]:checked'))
        .map((c) => lignes[Number(c.dataset.k)]);
      fermerFeuille();
      if (!choisis.length) return;
      const champListe = f.querySelector("#choix-liste");
      const cible = champListe ? champListe.value : listeCourante().id;
      choisis.slice().reverse().forEach((l) => {
        /* On achète ce qui manque vraiment ; si le calcul est impossible,
           on reprend le besoin complet plutôt que d'inventer un chiffre. */
        const qte = (l.connu && l.manque !== null && l.enStock !== null)
          ? texteNombre(l.manque)
          : (nombre(l.besoin) !== null ? texteNombre(nombre(l.besoin)) : l.besoin);
        const enReserve = articleStock(l.nom);
        etat.courses.unshift({
          id: id(), nom: l.nom, qte: qte, unite: l.unite, rayon: l.rayon,
          coche: false, listeId: cible, vrac: !!(enReserve && enReserve.vrac),
          parQui: moi && moi.id, creeLe: new Date().toISOString(),
          /* La semaine de menu qui a produit cet article. C'est ce qui permet
             de le retirer ou de le reduire quand un plat est enleve du menu
             (reconcilierCoursesDuMenu). Un article ajoute a la main n'a pas
             cette marque et n'est jamais touche. */
          menu: ui.semaine
        });
      });
      sauver("courses");
      toast(choisis.length + " article(s) ajouté(s) 🛒");
    };
  });
};

/* ================================ RECETTE ================================ */

Formulaires.recette = function (rid) {
  const r = rid ? etat.recettes.find((x) => x.id === rid) : null;
  const cour = r || { emoji: "🍽️", type: "consistant", vegetarien: false, rapide: false, lien: "", ingredients: [] };
  const ings = (cour.ingredients || []).slice();

  const ligneIng = (i, k) =>
    '<div data-ing="' + k + '" style="margin-bottom:.7rem;padding-bottom:.7rem;border-bottom:1px solid var(--border)">' +
    '<div style="display:flex;gap:.5rem;margin-bottom:.4rem">' +
    '<input type="text" data-c="nom" value="' + esc(i.nom || "") + '" placeholder="Ingrédient" style="flex:1">' +
    '<button type="button" class="btn mini icone" data-role="suppr-ing" style="flex:0 0 auto">🗑️</button></div>' +
    '<div class="duo">' +
    '<input type="text" data-c="qte" value="' + esc(i.qte || "") + '" placeholder="Quantité" ' +
    'inputmode="decimal" maxlength="10" style="flex:.8">' +
    '<span style="flex:1.1">' + selectUnite(i.unite, "unite-ing") + "</span>" +
    '<span style="flex:1.4">' + selectRayon(i.rayon || "Épicerie") + "</span>" +
    "</div></div>";

  const html = '<form id="f-recette">' +
    '<label class="champ"><span>Nom du plat</span>' +
    '<input type="text" name="nom" value="' + esc(cour.nom || "") + '" required maxlength="50"></label>' +
    '<label class="champ"><span>Icône</span></label>' +
    grilleEmojis(EMOJIS_RECETTES, cour.emoji) +
    '<label class="champ"><span>Type de plat</span></label>' +
    puceMultiple("type", [
      { val: "consistant", html: "Consistant" },
      { val: "leger", html: "Léger" }], [cour.type || "consistant"]) +
    '<div class="puces" style="margin-bottom:1rem">' +
    '<label class="puce"><input type="checkbox" name="vege" style="width:auto"' + (cour.vegetarien ? " checked" : "") + "> Végétarien</label>" +
    '<label class="puce"><input type="checkbox" name="rapide" style="width:auto"' + (cour.rapide ? " checked" : "") + "> Rapide</label>" +
    '<label class="puce"><input type="checkbox" name="thermomix" style="width:auto"' + (cour.thermomix ? " checked" : "") + "> 🍲 Robot</label>" +
    '<label class="puce"><input type="checkbox" name="dessert" style="width:auto"' + (cour.plat === "dessert" ? " checked" : "") + "> 🍰 Dessert</label>" +
    "</div>" +
    '<p class="aide" style="margin:-.6rem 0 1rem">Un dessert n’est jamais proposé ' +
    "par le générateur de menus : il se range à part, dans le cahier.</p>" +
    '<label class="champ"><span>Saisons</span></label>' +
    puceMultiple("saisons", SAISONS.map((x) => ({ val: x.val, html: x.emoji + " " + x.nom })),
      cour.saisons || []) +
    '<p class="aide" style="margin:-.5rem 0 .6rem">Aucune saison cochée = le plat convient ' +
    "toute l'année. Sinon, le générateur de menus l'évitera hors saison.</p>" +
    '<button type="button" class="btn plein doux" data-role="deviner" style="margin-bottom:1rem">' +
    "🔎 Deviner d'après les ingrédients</button>" +
    '<label class="champ"><span>Cette recette est prévue pour combien de personnes ?</span>' +
    '<input type="number" name="portions" min="1" max="30" value="' +
    esc(String(cour.portions || PORTIONS_BASE)) + '"></label>' +
    '<p class="aide" style="margin:-.4rem 0 1rem">Les quantités seront ajustées au nombre ' +
    "de personnes de votre famille (<b>" + nbConvives() + "</b> actuellement, modifiable " +
    "dans Administration).</p>" +
    '<label class="champ"><span>Lien vers la recette (Cookomix, blog…)</span>' +
    '<input type="url" name="lien" value="' + esc(cour.lien || "") + '" placeholder="https://…"></label>' +
    (lienExterne(cour.lien) ? '<a class="btn plein doux" href="' + esc(lienExterne(cour.lien)) + '" target="_blank" rel="noopener" ' +
      'style="margin-bottom:1rem;text-decoration:none">Ouvrir la recette ↗</a>' : "") +
    (r && estRecettePerso(r)
      ? '<button type="button" class="btn plein ' + (r.partageId ? "doux" : "") +
      '" data-role="partager" style="margin-bottom:1rem">' +
      (r.partageId ? "🏘️ Partagée avec les autres familles" : "🏘️ Partager avec les autres familles") +
      "</button>"
      : "") +
    "<hr class=\"sep\">" +
    '<div class="sous-titre" style="margin-top:0"><h3>Ingrédients</h3></div>' +
    '<div id="zone-ing">' + ings.map(ligneIng).join("") + "</div>" +
    '<button type="button" class="btn plein doux" data-role="ajout-ing" style="margin-top:.4rem">＋ Ajouter un ingrédient</button>' +
    "<hr class=\"sep\">" +
    '<div class="sous-titre" style="margin-top:0"><h3>Préparation</h3></div>' +
    '<label class="champ"><span>Une étape par ligne</span>' +
    '<textarea name="etapes" rows="8" style="min-height:150px" ' +
    "placeholder=\"Coupez les légumes en cubes.&#10;Faites revenir l'oignon.&#10;" +
    "Laissez mijoter 30 minutes.\">" +
    esc((cour.etapes || []).join("\n")) + "</textarea></label>" +
    boutonsFormulaire(r ? "Enregistrer" : "Créer la recette", !!r) + "</form>";

  ouvrirFeuille(r ? "Modifier la recette" : "Nouvelle recette", html, (f) => {
    brancherEmojis(f);
    brancherMulti(f, "type", true);
    brancherMulti(f, "saisons", false);
    const zone = f.querySelector("#zone-ing");

    f.querySelector('[data-role="deviner"]').onclick = () => {
      const liste = Array.from(zone.querySelectorAll("[data-ing]")).map((row) => ({
        nom: row.querySelector('[data-c="nom"]').value.trim()
      })).filter((i) => i.nom);
      const trouvees = devinerSaisons(liste);
      const g = f.querySelector('[data-role="saisons"]');
      g.querySelectorAll(".puce").forEach((p) => {
        p.classList.toggle("on", trouvees.indexOf(p.dataset.val) !== -1);
      });
      toast(trouvees.length
        ? "Proposé : " + trouvees.map((v) => infoSaison(v).nom).join(", ")
        : "Ces ingrédients se trouvent toute l'année");
    };

    const bp = f.querySelector('[data-role="partager"]');
    if (bp) bp.onclick = () => Formulaires.publierRecette(r.id);

    f.querySelector('[data-role="ajout-ing"]').onclick = () => {
      const div = document.createElement("div");
      div.innerHTML = ligneIng({ nom: "", qte: "", rayon: "Épicerie" }, zone.children.length);
      zone.appendChild(div.firstChild);
      zone.lastChild.querySelector("input").focus();
    };
    zone.onclick = (ev) => {
      const b = ev.target.closest('[data-role="suppr-ing"]');
      if (b) b.closest("[data-ing]").remove();
    };

    const bs = f.querySelector('[data-role="suppr"]');
    if (bs) bs.onclick = async () => {
      /* Une recette au menu ne se supprime pas en silence : les repas qui la
         citaient devenaient des cases mortes, vides à l'écran mais que le
         générateur croyait occupées. On prévient, puis on libère vraiment. */
      const prevus = repasUtilisant(r.id);
      const alerte = prevus.length
        ? "\n\n⚠️ Elle est prévue " + prevus.length + " fois dans vos menus. " +
          (prevus.length > 1 ? "Ces repas redeviendront libres." : "Ce repas redeviendra libre.")
        : "";
      const ok = await confirmer("Supprimer la recette « " + r.nom + " » ?" + alerte,
        { titre: "Supprimer", ok: "Supprimer", danger: true });
      if (!ok) return;
      etat.recettes = etat.recettes.filter((x) => x.id !== r.id);
      prevus.forEach((p) => { delete etat.repas[p.cleSem][p.cleCase]; });
      fermerFeuille();
      sauver("recettes", "repas");
      toast(prevus.length
        ? "Recette supprimée — " + prevus.length + " repas à replanifier"
        : "Recette supprimée");
    };

    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const liste = Array.from(zone.querySelectorAll("[data-ing]")).map((row) => ({
        nom: row.querySelector('[data-c="nom"]').value.trim(),
        qte: row.querySelector('[data-c="qte"]').value.trim(),
        unite: row.querySelector('[name="unite-ing"]').value,
        rayon: row.querySelector('[name="rayon"]').value
      })).filter((i) => i.nom);

      const donnees = {
        nom: String(d.get("nom")).trim(),
        emoji: emojiChoisi(f, "🍽️"),
        type: valeursMulti(f, "type")[0] || "consistant",
        vegetarien: !!d.get("vege"),
        rapide: !!d.get("rapide"),
        thermomix: !!d.get("thermomix"),
        plat: d.get("dessert") ? "dessert" : "principal",
        portions: Math.max(1, Math.min(30, Number(d.get("portions")) || PORTIONS_BASE)),
        lien: String(d.get("lien") || "").trim(),
        saisons: valeursMulti(f, "saisons"),
        etapes: String(d.get("etapes") || "").split(/\r?\n/)
          .map((x) => x.trim()).filter(Boolean),
        ingredients: liste
      };
      if (r) Object.assign(r, donnees);
      else etat.recettes.push(Object.assign({ id: id(), origine: "perso" }, donnees));
      fermerFeuille();
      sauver("recettes");
      toast(r ? "Recette enregistrée" : "Recette ajoutée");
    };
  });
};

/* ================================ RAPPEL ================================ */

Formulaires.note = function (nid) {
  const n = nid ? etat.notes.find((x) => x.id === nid) : null;
  const cour = n || { date: isoDate(new Date()), concernes: [], repetition: "aucune" };

  const html = '<form id="f-note">' +
    '<label class="champ"><span>Quoi ?</span>' +
    '<input type="text" name="titre" value="' + esc(cour.titre || "") + '" required maxlength="60" ' +
    'placeholder="Rendez-vous dentiste"></label>' +
    '<div class="duo"><label class="champ"><span>Date</span>' +
    '<input type="date" name="date" value="' + esc(cour.date || "") + '"></label>' +
    '<label class="champ"><span>Heure</span>' +
    '<input type="time" name="heure" value="' + esc(cour.heure || "") + '"></label></div>' +
    '<p class="aide" style="margin:-.5rem 0 .9rem">Avec une date, le rappel part dans ' +
    "l'<b>agenda</b>. Sans date, il reste dans les <b>pense-bêtes</b>.</p>" +
    '<label class="champ"><span>Où ? (facultatif)</span>' +
    '<input type="text" name="lieu" value="' + esc(cour.lieu || "") + '" maxlength="60" ' +
    'placeholder="Cabinet du Dr Martin, école…"></label>' +
    '<label class="champ"><span>Qui est concerné ? (personne = toute la famille)</span></label>' +
    puceMultiple("qui", etat.membres.map((m) => ({ val: m.id, html: esc(m.emoji + " " + m.prenom) })),
      cour.concernes || []) +
    '<label class="champ"><span>Répétition</span>' +
    '<select name="repetition">' +
    [["aucune", "Aucune"], ["hebdo", "Chaque semaine"], ["mensuel", "Chaque mois"], ["annuel", "Chaque année"]]
      .map(([v, l]) => '<option value="' + v + '"' + (cour.repetition === v ? " selected" : "") + ">" + l + "</option>").join("") +
    "</select></label>" +
    '<label class="champ"><span>Note (facultatif)</span>' +
    '<textarea name="note" maxlength="400">' + esc(cour.note || "") + "</textarea></label>" +
    boutonsFormulaire(n ? "Enregistrer" : "Ajouter", !!n) + "</form>";

  ouvrirFeuille(n ? "Modifier le rappel" : "Nouveau rappel", html, (f) => {
    brancherMulti(f, "qui", false);
    const bs = f.querySelector('[data-role="suppr"]');
    if (bs) bs.onclick = async () => {
      const ok = await confirmer("Supprimer ce rappel ?", { titre: "Supprimer", ok: "Supprimer", danger: true });
      if (!ok) return;
      fermerFeuille();
      Actions.supprimerNote(n.id);
      toast("Rappel supprimé");
    };
    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const donnees = {
        titre: String(d.get("titre")).trim(),
        date: String(d.get("date") || ""),
        heure: String(d.get("heure") || ""),
        lieu: String(d.get("lieu") || "").trim(),
        note: String(d.get("note") || "").trim(),
        concernes: valeursMulti(f, "qui"),
        repetition: String(d.get("repetition") || "aucune")
      };
      if (n) Object.assign(n, donnees);
      else etat.notes.push(Object.assign({ id: id(), fait: false, creeLe: new Date().toISOString() }, donnees));
      fermerFeuille();
      sauver("notes");
      toast(n ? "Rappel enregistré" : "Rappel ajouté 🔔");
    };
  });
};

/* ================================ CADEAU ================================ */

Formulaires.cadeau = function (cid) {
  if (!estAdmin()) return;
  const c = cid ? etat.cadeaux.find((x) => x.id === cid) : null;
  const cour = c || { emoji: "🎁", cout: 50, actif: true };

  const html = '<form id="f-cadeau">' +
    '<label class="champ"><span>Nom du cadeau</span>' +
    '<input type="text" name="nom" value="' + esc(cour.nom || "") + '" required maxlength="40" ' +
    'placeholder="Choisir le film du soir"></label>' +
    '<label class="champ"><span>Icône</span></label>' + grilleEmojis(EMOJIS_CADEAUX, cour.emoji) +
    '<label class="champ"><span>Coût en points</span>' +
    '<input type="number" name="cout" value="' + (cour.cout || 50) + '" min="1" max="100000" required></label>' +
    '<label class="champ" style="display:flex;gap:.6rem;align-items:center">' +
    '<input type="checkbox" name="retire" style="width:auto"' + (cour.actif === false ? " checked" : "") + ">" +
    '<span style="margin:0">Retirer de la boutique</span></label>' +
    boutonsFormulaire(c ? "Enregistrer" : "Créer le cadeau", !!c) + "</form>";

  ouvrirFeuille(c ? "Modifier le cadeau" : "Nouveau cadeau", html, (f) => {
    brancherEmojis(f);
    const bs = f.querySelector('[data-role="suppr"]');
    if (bs) bs.onclick = async () => {
      const ok = await confirmer("Supprimer le cadeau « " + c.nom + " » ?",
        { titre: "Supprimer", ok: "Supprimer", danger: true });
      if (!ok) return;
      etat.cadeaux = etat.cadeaux.filter((x) => x.id !== c.id);
      fermerFeuille();
      sauver("cadeaux");
      toast("Cadeau supprimé");
    };
    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const donnees = {
        nom: String(d.get("nom")).trim(), emoji: emojiChoisi(f, "🎁"),
        cout: Number(d.get("cout")) || 1, actif: !d.get("retire")
      };
      if (c) Object.assign(c, donnees);
      else etat.cadeaux.push(Object.assign({ id: id() }, donnees));
      fermerFeuille();
      sauver("cadeaux");
      toast(c ? "Cadeau enregistré" : "Cadeau ajouté 🎁");
    };
  });
};

/* ================================ MEMBRE ================================ */

Formulaires.membre = async function (mid) {
  if (!estAdmin()) return;
  /* Le compte adulte (adresse e-mail) ne vit pas sur le membre mais a part,
     dans la collection « comptes » : on la relit avant d'ouvrir la fiche. */
  if (Store.mode === "nuage") await Store.listerComptes(etat.famille.code);
  const m = mid ? membre(mid) : null;
  const compte = m ? Store.compteDe(m.id) : null;
  const connexionActuelle = compte ? "email" : "code";
  const cour = m || { emoji: "😀", role: "membre", pin: "" };
  const nbAdmins = etat.membres.filter((x) => x.role === "admin").length;

  const html = '<form id="f-membre">' +
    '<label class="champ"><span>Prénom</span>' +
    '<input type="text" name="prenom" value="' + esc(cour.prenom || "") + '" required maxlength="20"></label>' +
    '<label class="champ"><span>Avatar</span></label>' + grilleEmojis(EMOJIS_MEMBRES, cour.emoji) +

    '<label class="champ" style="display:flex;gap:.6rem;align-items:flex-start">' +
    '<input type="checkbox" name="sansAppareil" id="case-sans-appareil" style="width:auto;margin-top:.2rem"' +
    (cour.sansAppareil ? " checked" : "") + ">" +
    '<span style="margin:0">Pas de téléphone<br><small style="font-weight:400">Profil géré par les parents. ' +
    "L'enfant a ses tâches, ses points et ses cadeaux, mais ne se connecte pas : " +
    "c'est vous qui cochez pour lui.</small></span></label>" +

    '<div id="bloc-connexion">' +
    /* Comment cette personne entrera dans la tribu. Le code a 4 chiffres
       reste demande dans les deux cas : c'est lui qui designe le profil sur
       un telephone partage, l'e-mail ne remplace que le lien d'invitation. */
    '<label class="champ"><span>Comment cette personne rejoint la tribu</span></label>' +
    puceMultiple("connexion", [
      { val: "code", html: "🔑 Par code" },
      { val: "email", html: "📧 Par e-mail" }], [connexionActuelle]) +
    '<p class="aide" style="margin:-.6rem 0 .8rem" id="aide-connexion"></p>' +
    '<label class="champ" id="champ-email"><span>Adresse e-mail</span>' +
    '<input type="email" name="email" autocomplete="email" inputmode="email" ' +
    'value="' + esc(compte ? compte.adresse : "") + '" placeholder="prenom@exemple.fr"></label>' +

    '<label class="champ"><span>Rôle</span></label>' +
    puceMultiple("role", [
      { val: "membre", html: "Membre" },
      { val: "admin", html: "Administrateur" }], [cour.role]) +
    '<p class="aide" style="margin:-.6rem 0 1rem">Un administrateur valide les tâches, accorde les cadeaux ' +
    "et gère les réglages de la famille.</p>" +
    '<label class="champ"><span>Code à 4 chiffres' + (m ? " (laisser vide pour ne pas changer)" : "") + "</span>" +
    champPin('placeholder="' + (m ? "••••" : "1234") + '"') +
    "</label></div>" +

    /* Ses appareils connectés, et le moyen d'en retirer un (étape 2). */
    (m && Store.mode === "nuage" && !m.sansAppareil
      ? '<button type="button" class="btn plein doux" data-role="appareils" data-compte-appareils="' +
        esc(m.id) + '" style="margin:.4rem 0 .2rem">' +
        "📋 Appareils de " + esc(m.prenom) + " (" + appareilsDe(m.id).length + ")</button>"
      : "") +
    boutonsFormulaire(m ? "Enregistrer" : "Ajouter", !!m && etat.membres.length > 1) + "</form>";

  ouvrirFeuille(m ? "Modifier " + m.prenom : "Nouveau membre", html, (f) => {
    brancherEmojis(f);
    brancherMulti(f, "role", true);

    brancherMulti(f, "connexion", true);

    const bAppareils = f.querySelector('[data-role="appareils"]');
    if (bAppareils) bAppareils.onclick = () => Formulaires.appareils(m.id);

    /* Un profil sans téléphone n'a besoin ni de rôle ni de code. */
    const caseSans = f.querySelector("#case-sans-appareil");
    const blocConnexion = f.querySelector("#bloc-connexion");
    const champEmail = f.querySelector("#champ-email");
    const aideCo = f.querySelector("#aide-connexion");
    const majBloc = () => {
      blocConnexion.hidden = caseSans.checked;
      const parEmail = (valeursMulti(f, "connexion")[0] || "code") === "email";
      champEmail.hidden = !parEmail;
      aideCo.innerHTML = parEmail
        ? "Elle recevra un lien par e-mail. En cliquant dessus, elle entre dans la tribu — " +
          "et pourra se reconnecter seule plus tard, sans vous déranger."
        : "Vous lui donnerez un code d'invitation à taper ou à coller. " +
          "Un code par personne <b>et par téléphone</b>.";
    };
    caseSans.onchange = majBloc;
    /* Sur le GROUPE, et apres brancherMulti : les deux ecoutent le meme clic,
       et celui qui coche la puce doit passer en premier, sinon on relit
       l ancien choix. */
    f.querySelector('[data-role="connexion"]').addEventListener("click", majBloc);
    majBloc();

    const bs = f.querySelector('[data-role="suppr"]');
    if (bs) bs.onclick = async () => {
      if (m.id === moi.id) { toast("Vous ne pouvez pas vous supprimer vous-même"); return; }
      if (m.role === "admin" && nbAdmins <= 1) { toast("Il faut au moins un administrateur"); return; }

      /* Les tâches dont il était le SEUL responsable ne disparaissent pas :
         elles restent, sans personne pour s'en occuper, et n'apparaissent
         plus que dans l'onglet Tâches. On le dit avant, pas après. */
      const orphelines = etat.taches.filter((t) =>
        (t.participants || []).length === 1 && t.participants[0] === m.id);
      const alerte = orphelines.length
        ? "\n\n⚠️ " + orphelines.length + " tâche" + (orphelines.length > 1 ? "s n'auront" : " n'aura") +
          " plus personne : " + orphelines.map((t) => t.nom).join(", ") +
          ". Pensez à " + (orphelines.length > 1 ? "les" : "la") + " réattribuer."
        : "";
      const ok = await confirmer("Supprimer " + m.prenom + " de la famille ? Ses points et son historique seront perdus." + alerte,
        { titre: "Supprimer le membre", ok: "Supprimer", danger: true });
      if (!ok) return;
      etat.membres = etat.membres.filter((x) => x.id !== m.id);
      etat.taches.forEach((t) => { t.participants = (t.participants || []).filter((p) => p !== m.id); });
      etat.journal = etat.journal.filter((e) => e.membreId !== m.id);
      /* Ses appareils perdent l'accès en même temps que son profil. Il faut
         les retirer des DEUX endroits : le registre et la liste des appareils
         autorisés — sinon le filet anti-verrouillage, qui conserve les
         appareils qu'il n'arrive pas à rattacher, les remettrait. */
      const sesAppareils = Object.keys(etat.appareils || {})
        .filter((u) => etat.appareils[u] === m.id)
        .concat(m.uids || []);
      sesAppareils.forEach((u) => { delete etat.appareils[u]; });
      etat.membresUid = (etat.membresUid || []).filter((u) => sesAppareils.indexOf(u) === -1);
      etat.adminsUid = (etat.adminsUid || []).filter((u) => sesAppareils.indexOf(u) === -1);
      fermerFeuille();
      sauver("membres", "taches", "journal");
      await Store.retirerAppareils(sesAppareils);
      const sonCompte = Store.compteDe(m.id);
      if (sonCompte) await Store.supprimerCompte(sonCompte.adresse);
      toast(orphelines.length
        ? "Membre supprimé — " + orphelines.length + " tâche" +
          (orphelines.length > 1 ? "s sont" : " est") + " à réattribuer"
        : "Membre supprimé");
    };
    f.onsubmit = async (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const sansAppareil = !!d.get("sansAppareil");
      const pin = String(d.get("pin") || "").trim();
      if (!sansAppareil && pin && !/^[0-9]{4}$/.test(pin)) {
        toast("Le code doit faire 4 chiffres"); return;
      }
      const connexion = sansAppareil ? "code" : (valeursMulti(f, "connexion")[0] || "code");
      const email = String(d.get("email") || "").trim().toLowerCase();
      if (connexion === "email" && !emailPlausible(email)) {
        toast("Vérifiez l'adresse e-mail"); return;
      }
      /* Deux profils ne peuvent pas partager une adresse : la connexion par
         e-mail donne UNE identite, et deux personnes qui la partagent
         entreraient l une chez l autre. */
      if (connexion === "email" && Store.mode !== "nuage") {
        toast("La connexion par e-mail demande le partage familial"); return;
      }
      /* Deux profils ne partagent jamais une adresse : un compte adulte
         designe UN profil (MODELE-COMPTES-APPAREILS.md, I2). */
      if (connexion === "email" &&
        (Store.comptesFamille || []).some((c) => c.adresse === email && (!m || c.membre !== m.id))) {
        toast("Cette adresse est déjà utilisée par un autre membre"); return;
      }
      const role = sansAppareil ? "membre" : (valeursMulti(f, "role")[0] || "membre");
      if (m && m.role === "admin" && role !== "admin" && nbAdmins <= 1) {
        toast("Il faut au moins un administrateur"); return;
      }
      if (sansAppareil && m && aUnAppareil(m)) {
        toast("Retirez d'abord ses appareils : ce profil est déjà connecté quelque part");
        return;
      }

      /* Le compte adulte (adresse e-mail) s'enregistre AVANT le membre. S'il est
         refuse — adresse deja liee a une autre tribu —, on ne cree ni ne modifie
         rien, la fiche reste ouverte et on le dit. Avant, le membre etait cree
         quand meme, sans compte, sur un message ambigu (constate le 10/09/2026).
         Le drapeau « admin » est une COPIE du role, recalculee a chaque fois. */
      const idCible = m ? m.id : id();
      const ancien = (m && Store.mode === "nuage") ? Store.compteDe(m.id) : null;
      if (Store.mode === "nuage" && connexion === "email" && !sansAppareil) {
        const rc = await Store.enregistrerCompte(email, idCible, role === "admin");
        if (!rc.ok) { toast(rc.message); return; }
      }

      if (m) {
        m.prenom = String(d.get("prenom")).trim();
        m.emoji = emojiChoisi(f, "😀");
        m.role = role;
        m.sansAppareil = sansAppareil;

        if (!sansAppareil && pin) Object.assign(m, await champsPin(pin));
        if (sansAppareil) { m.pin = null; m.pinHash = null; m.pinSel = null; }
      } else {
        if (!sansAppareil && !pin) { toast("Choisissez un code à 4 chiffres"); return; }
        const nouveau = {
          id: idCible, prenom: String(d.get("prenom")).trim(), emoji: emojiChoisi(f, "😀"),
          role: role, sansAppareil: sansAppareil,
          creeLe: new Date().toISOString()
        };
        if (!sansAppareil) Object.assign(nouveau, await champsPin(pin));
        etat.membres.push(nouveau);
      }

      /* Puis on range l'ancien compte : l'adresse a change (la nouvelle est
         deja enregistree ci-dessus), ou la personne repasse « par code ». */
      if (Store.mode === "nuage") {
        if (ancien && (connexion !== "email" || sansAppareil || ancien.adresse !== email)) {
          await Store.supprimerCompte(ancien.adresse);
        }
        Store.listerComptes(etat.famille.code);
      }

      fermerFeuille();
      sauver("membres");
      if (!m && !sansAppareil) Formulaires.invitation();     // il lui faut un accès
      else if (!m) toast("Profil créé — à vous de cocher ses tâches 🧒");
      else toast("Profil enregistré");
    };
  });
};

/* ================================ INVITATION ================================ */

Formulaires.invitation = function () {
  if (!estAdmin()) { toast("Seul un administrateur peut inviter"); return; }

  /* Les profils qui peuvent recevoir une invitation : ceux qui se connectent
     (les enfants « sans téléphone » n'en ont pas besoin). */
  const cibles = etat.membres.filter((m) => !m.sansAppareil);

  const html = '<div id="f-invit">' +
    '<p class="aide" style="margin-bottom:1rem">L\'invitation est un lien <b>à usage unique</b>. ' +
    "Envoyez-le à la personne (SMS, message…) : en l'ouvrant, son téléphone sera autorisé " +
    "à accéder à la famille.</p>" +
    '<label class="champ"><span>Pour qui ?</span></label>' +
    puceMultiple("pour", [{ val: "nouveau", html: "➕ Une nouvelle personne" }].concat(
      cibles.map((m) => ({
        val: m.id,
        html: esc((m.emoji || "🙂") + " " + m.prenom) +
          (aUnAppareil(m) ? "" : " (jamais connecté)")
      }))), ["nouveau"]) +
    '<p class="aide" style="margin:-.5rem 0 1rem">Choisissez un prénom existant pour ' +
    "ajouter un <b>deuxième téléphone</b> à quelqu'un, ou pour connecter un profil " +
    "que vous avez créé dans Administration.</p>" +
    '<label class="champ"><span>Valable pendant</span></label>' +
    puceMultiple("duree", [
      { val: "1", html: "24 heures" },
      { val: "7", html: "7 jours" },
      { val: "30", html: "30 jours" }], ["7"]) +
    '<button class="btn principal plein" data-role="creer">Créer l\'invitation</button>' +
    '<div id="resultat-invit" style="margin-top:1rem"></div>' +
    '<button class="btn plein" data-action="fermer" style="margin-top:1rem">Fermer</button></div>';

  ouvrirFeuille("Inviter dans la famille", html, (f) => {
    brancherMulti(f, "duree", true);
    brancherMulti(f, "pour", true);
    const zone = f.querySelector("#resultat-invit");
    const bouton = f.querySelector('[data-role="creer"]');

    bouton.onclick = async () => {
      const pour = valeursMulti(f, "pour")[0] || "nouveau";
      const cible = pour === "nouveau" ? null : membre(pour);
      if (cible && !cible.pinHash && !cible.pin) {
        toast("Donnez d'abord un code à 4 chiffres à " + cible.prenom);
        return;
      }
      bouton.disabled = true;
      const jours = Number(valeursMulti(f, "duree")[0] || 7);
      const inv = await Invitations.creer(jours, cible ? cible.id : null);
      bouton.disabled = false;
      if (!inv) { toast("Création impossible"); return; }
      if (Store.mode === "nuage") await Store.listerComptes(etat.famille.code);
      const compteCible = cible ? Store.compteDe(cible.id) : null;
      const lien = Invitations.lien(inv.jeton);
      const fin = new Date(inv.expireLe).toLocaleDateString("fr-FR",
        { day: "numeric", month: "long", year: "numeric" });

      zone.innerHTML = '<div class="bandeau info">✅<div>Invitation créée pour <b>' +
        esc(inv.profil ? inv.profil.prenom : "une nouvelle personne") +
        "</b>, valable jusqu'au " + esc(fin) +
        (inv.profil ? ".<br>Cette personne devra saisir son code à 4 chiffres." : ".") +
        "</div></div>" +
        /* Le code d'abord : c'est le seul format qui passe partout, y compris
           dans une application sans barre d'adresse, ou dicté au téléphone. */
        codeAvecCopie(inv.jeton) +
        '<p class="aide centre" style="margin:.4rem 0 .7rem">À taper dans ' +
        "<b>J'ai reçu une invitation</b>. Les tirets sont facultatifs.</p>" +
        '<div class="rangee-btn" style="margin-bottom:.5rem">' +
        '<button class="btn principal plein" data-role="partager">Partager le lien</button></div>' +
        '<div class="code-famille" style="font-size:.7rem;word-break:break-all;letter-spacing:0">' +
        esc(lien) + "</div>" +
        '<button class="btn plein mini" data-action="copier" style="margin-top:.4rem" ' +
        'data-texte="' + esc(lien) + '">Copier le lien</button>' +
        /* Si le profil vise a ete cree en mode e-mail, on propose de lui
           envoyer le lien directement : c'est tout l'interet du mode. Le
           bouton n'apparait que la, quand l'invitation existe deja. */
        (compteCible
          ? '<hr class="sep"><button class="btn plein principal" data-role="envoyer-email" ' +
            'style="margin-bottom:.4rem">📧 Envoyer le lien à ' + esc(compteCible.adresse) + "</button>" +
            '<p class="aide">' + esc(cible.prenom) + " recevra un e-mail de Firebase. " +
            "En cliquant dessus, " + esc(cible.prenom) + " entrera dans la tribu — et devra " +
            "confirmer son adresse, puis saisir son code à 4 chiffres.</p>"
          : "") +
        '<p class="aide" style="margin-top:.6rem">Une fois utilisée, elle ne fonctionnera plus. ' +
        "Créez-en une nouvelle pour chaque personne et chaque appareil — " +
        "une icône sur l'écran d'accueil compte comme un appareil.</p>";

      const be = zone.querySelector('[data-role="envoyer-email"]');
      if (be) be.onclick = async () => {
        be.disabled = true;
        be.textContent = "Envoi…";
        const r = await Store.envoyerLienConnexion(compteCible.adresse);
        be.disabled = false;
        if (r.ok) {
          /* Vous vous l'envoyez à vous-même : on retient VOTRE adresse, comme
             « Me connecter par e-mail », et le lien s'ouvrira sans rien
             redemander dans ce navigateur. Pour quelqu'un d'autre, on ne garde
             que « un lien est parti d'ici », jamais son adresse. */
          if (moi && compteCible.membre === moi.id) Store.retenirEmail(compteCible.adresse);
          else Store.marquerLienEnvoyeIci();
          be.textContent = "✅ Envoyé à " + compteCible.adresse;
          be.classList.remove("principal");
          toast("Lien envoyé 💌");
        } else {
          be.textContent = "📧 Réessayer l'envoi";
          toast(r.message || "Envoi impossible");
        }
      };

      const bp = zone.querySelector('[data-role="partager"]');
      bp.onclick = () => {
        if (navigator.share) {
          navigator.share({
            title: "Rejoindre " + etat.famille.nom + " sur Ma Tribu",
            text: "Voici ton invitation pour rejoindre notre organisation familiale :",
            url: lien
          }).catch(() => { });
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(lien).then(() => toast("Lien copié"));
        } else {
          toast("Copiez le lien ci-dessus");
        }
      };
    };
  });
};

/* ==================== PRÉSENTATION DE BIENVENUE ====================

   Un petit carrousel à la première ouverture sur un appareil : un volet par
   fonction, et un dernier volet qui souhaite la bienvenue. Il ne parle que de
   ce que la famille a vraiment : les onglets masqués n'y figurent pas, les
   points n'y sont que s'ils sont activés. Se rejoue depuis le menu du profil. */

Formulaires.bienvenue = function () {
  const textes = {
    accueil: ["🏡", "L'accueil", "Votre journée en un coup d'œil : les tâches du jour, " +
      "le repas du soir, les courses urgentes et les rappels."],
    taches: ["🧹", "Les tâches", "Chacun coche ce qu'il a fait, un administrateur valide. " +
      "« Chacun son tour » fait tourner les corvées tout seul."],
    courses: ["🛒", "Les courses", "Plusieurs listes — la semaine, le drive, la pharmacie — " +
      "rangées par rayon. Collez une liste, ou dictez-la au micro du clavier."],
    reserve: ["🥫", "La réserve", "Ce que vous gardez à la maison, côté alimentaire ou côté " +
      "maison. Indiquez un minimum : l'application vous prévient quand il faut racheter."],
    menus: ["🍽️", "Les menus", "Le générateur propose la semaine à partir de vos recettes et de " +
      "votre réserve. Un bouton envoie aux courses ce qui manque — et suit le menu si vous le changez."],
    recettes: ["📖", "Les recettes", "Des centaines de plats fournis, les vôtres, vos favoris, " +
      "et un catalogue partagé entre les familles."],
    notes: ["🔔", "Les rappels", "Rendez-vous et pense-bêtes, pour toute la famille ou pour " +
      "une seule personne. Ils remontent sur l'accueil le jour venu."]
  };
  const volets = ongletsVisibles().filter((o) => textes[o.vue]).map((o) => textes[o.vue]);
  if (pointsActifs()) volets.push(["🌟", "Les points", "Les tâches validées rapportent des points, " +
    "à échanger contre de petits plaisirs en famille. Et un objectif commun, à atteindre tous ensemble."]);
  volets.push(["👋", "Bienvenue dans votre tribu, " + esc(moi ? moi.prenom : "") + " !",
    "Tout est partagé en temps réel entre les appareils de la famille. " +
    "Vous retrouverez cette présentation à tout moment depuis votre profil."]);

  const html = '<div class="carrousel" id="carrousel">' +
    volets.map((v) => '<div class="volet"><div class="grand">' + v[0] + "</div><h4>" + v[1] +
      "</h4><p>" + v[2] + "</p></div>").join("") + "</div>" +
    '<div class="points-carrousel" id="points-carrousel">' +
    volets.map((v, i) => "<i" + (i === 0 ? ' class="on"' : "") + "></i>").join("") + "</div>" +
    '<div class="rangee-btn">' +
    '<button class="btn" data-role="passer">Passer</button>' +
    '<button class="btn principal" data-role="suivant">Suivant</button></div>';

  ui.bienvenueOuverte = true;
  ouvrirFeuille("Ma Tribu en une minute", html, (feuille) => {
    const bande = feuille.querySelector("#carrousel");
    const points = feuille.querySelectorAll("#points-carrousel i");
    const bSuivant = feuille.querySelector('[data-role="suivant"]');
    const dernier = volets.length - 1;
    /* L'index COURANT est la référence des boutons — pas la position lue
       pendant une animation. Sinon deux appuis rapides sur « Suivant »
       sautaient un volet, voire fermaient la fiche (constaté au test). Un
       balayage au doigt le met à jour une fois le mouvement terminé. */
    let courant = 0;
    let attente = null;
    const rafraichir = () => {
      points.forEach((p, k) => p.classList.toggle("on", k === courant));
      bSuivant.textContent = courant === dernier ? "C'est parti 🏡" : "Suivant";
    };
    const terminer = () => {
      ui.bienvenueOuverte = false;
      try { localStorage.setItem("tribu:bienvenue:" + etat.famille.code, "1"); } catch (e) { }
      fermerFeuille();
    };
    bande.addEventListener("scroll", () => {
      clearTimeout(attente);
      attente = setTimeout(() => {
        courant = Math.max(0, Math.min(dernier,
          Math.round(bande.scrollLeft / Math.max(1, bande.clientWidth))));
        rafraichir();
      }, 120);
    }, { passive: true });
    bSuivant.onclick = () => {
      if (courant >= dernier) { terminer(); return; }
      courant++;
      rafraichir();
      /* D un coup, pas en glissant : le defilement anime entre en conflit avec
         l accrochage (scroll-snap) de Chrome, qui annulait un appui sur deux.
         Le balayage au doigt, lui, reste natif et fluide. */
      bande.scrollTo({ left: courant * bande.clientWidth, behavior: "auto" });
    };
    feuille.querySelector('[data-role="passer"]').onclick = terminer;
    /* Fermée autrement (voile, poignée) : c'est vu quand même. */
    const voile = document.getElementById("voile");
    const surFermeture = () => {
      if (!voile.classList.contains("on")) {
        ui.bienvenueOuverte = false;
        try { localStorage.setItem("tribu:bienvenue:" + etat.famille.code, "1"); } catch (e) { }
        obs.disconnect();
      }
    };
    const obs = new MutationObserver(surFermeture);
    obs.observe(voile, { attributes: true, attributeFilter: ["class"] });
  });
};

/* ==================== FAMILLES FONDATRICES ====================

   La fiche du programme : le numéro obtenu, ou ce qu'il reste à faire pour
   confirmer sa place. `feter` = le grand moment, juste après la validation ;
   elle s'ouvre alors d'elle-même, une seule fois par appareil. */

Formulaires.fondatrice = function (feter) {
  const p = placeFondatrice();
  if (!p || !p.numero) return;
  const pionniere = p.genre === "pionniere";
  const nom = pionniere ? "Famille Pionnière" : "Famille Fondatrice";
  const emoji = pionniere ? "🌱" : "🏅";
  const validee = estFondatrice();
  const av = avancementFondatrice();

  const critere = (fait, titre, detail) =>
    '<div class="ligne' + (fait ? " fait" : "") + '">' +
    '<span class="etape' + (fait ? " ok" : "") + '">' + (fait ? "✓" : "") + "</span>" +
    '<div class="ligne-corps"><b>' + titre + "</b><small>" + detail + "</small></div></div>";

  const avantage = (ico, titre, detail) =>
    '<div class="ligne"><span style="font-size:1.2rem">' + ico + "</span>" +
    '<div class="ligne-corps"><b>' + titre + "</b><small>" + detail + "</small></div></div>";

  const html =
    (feter
      ? '<div class="bandeau info">🎉<div><b>Vous êtes officiellement la ' + nom + " " +
        numeroFondatrice(p.numero) + " de Ma Tribu !</b><br>" +
        "Ce numéro est le vôtre, et il le restera.</div></div>"
      : "") +

    '<div class="carte" style="text-align:center">' +
    '<div style="font-size:2.6rem;line-height:1">' + emoji + "</div>" +
    '<div style="font-family:var(--font-display);font-size:1.15rem;margin:.35rem 0 0">' +
    nom + "</div>" +
    '<div style="font-family:var(--font-display);font-size:2.1rem;font-weight:700;line-height:1.15">' +
    numeroFondatrice(p.numero) + "</div>" +
    '<div class="aide" style="margin-top:.35rem">' +
    (validee
      ? (pionniere
        ? "Votre tribu était là avant le programme. Ce statut vous est offert, sans condition."
        : "Acquis, et définitif.")
      : "Place réservée pendant " + PROGRAMME.jours + " jours") +
    "</div></div>" +

    (validee ? "" :
      '<div class="carte">' +
      '<div class="carte-titre">Ce qu\'il reste à faire</div>' +
      critere(av.membres >= PROGRAMME.membres,
        "Être au moins " + PROGRAMME.membres + " dans la tribu",
        av.membres + " membre" + (av.membres > 1 ? "s" : "") + " pour l'instant") +
      critere(av.validees >= PROGRAMME.validees,
        PROGRAMME.validees + " tâches ou repas validés",
        av.validees + " sur " + PROGRAMME.validees) +
      critere(av.jours >= PROGRAMME.joursUtiles,
        "Utiliser l'application " + PROGRAMME.joursUtiles + " jours différents",
        av.jours + " jour" + (av.jours > 1 ? "s" : "") + " pour l'instant") +
      '<p class="aide" style="margin-top:.7rem">' +
      (av.resteJours > 1 ? "Il vous reste " + av.resteJours + " jours."
        : av.resteJours === 1 ? "C'est le dernier jour." : "Plus que quelques heures.") +
      " Passé ce délai, la place retourne aux autres familles.</p>" +
      "</div>") +

    '<div class="carte">' +
    '<div class="carte-titre">Ce que cela vous donne</div>' +
    avantage(emoji, "Un badge permanent",
      "Il reste sur votre accueil, quoi qu'il arrive ensuite.") +
    avantage("🔢", "Un numéro unique",
      "Le " + numeroFondatrice(p.numero) + " n'appartient qu'à votre tribu.") +
    avantage("🧪", "Les nouveautés en avant-première",
      "Vous les essayez avant tout le monde.") +
    avantage("🗳️", "Votre voix sur la suite",
      "Vos idées passent en premier.") +
    '<button class="btn doux plein" data-action="retour" style="margin-top:.6rem">' +
    "💡 Proposer une idée</button>" +
    "</div>" +

    '<p class="aide" style="text-align:center" id="places-restantes"></p>' +

    '<button class="btn plein' + (feter ? " principal" : "") + '" data-action="fermer" ' +
    'style="margin-top:.4rem">' + (feter ? "Merci !" : "Fermer") + "</button>";

  ouvrirFeuille(feter ? "🎉 " + nom + " " + numeroFondatrice(p.numero) : nom, html, (f) => {
    /* « Proposer une idée » ouvre une autre fiche : on ferme celle-ci avant,
       sinon la seconde remplacerait la première sans qu'on sache d'où on vient. */
    f.querySelectorAll('[data-action="retour"]')
      .forEach((b) => b.addEventListener("click", fermerFeuille));

    /* Le compteur de places demande une lecture au serveur : il s'affiche
       quand elle arrive, sans faire attendre la fiche. S'il n'arrive pas,
       la ligne reste vide — ce n'est qu'un ornement. */
    if (!Store.placesFondatrices) return;
    Store.placesFondatrices().then((places) => {
      const zone = f.querySelector("#places-restantes");
      if (!zone || !places) return;
      const reste = Math.max(0, PROGRAMME.places - places.length);
      zone.textContent = reste
        ? reste + (reste > 1 ? " places encore libres sur " : " place encore libre sur ") + PROGRAMME.places
        : "Les " + PROGRAMME.places + " places sont prises.";
    }).catch(() => { });
  });
};

/* ==================== DÉMÉNAGEMENT VERS matribu-app.fr ====================

   Ce qu'il faut comprendre pour que cette fiche ait du sens : une invitation
   ne peut être créée que par un membre que le serveur reconnaît DÉJÀ. Sur la
   nouvelle adresse, aucun appareil n'est encore reconnu. Les codes doivent
   donc partir d'ICI, de l'ancienne adresse, tant qu'elle répond.
   C'est pour cette raison qu'on ne l'a pas redirigée. */

Formulaires.demenagement = function () {
  const admin = estAdmin();

  const html =
    '<div class="bandeau info">🚚<div><b>Ma Tribu déménage.</b> La nouvelle adresse ' +
    "est plus courte et plus facile à dire. Rien n'est perdu : vos points, vos " +
    "tâches, les menus, les courses et les recettes vous suivent.</div></div>" +

    '<div class="carte" style="text-align:center">' +
    '<div style="font-family:var(--font-display);font-size:1.3rem;font-weight:600;' +
    'word-break:break-all;margin-bottom:.7rem">matribu-app.fr</div>' +
    '<button class="btn doux plein" data-action="copier" data-texte="' +
    esc(ADRESSE_NOUVELLE) + '">Copier l\'adresse</button></div>' +

    '<p class="aide" style="margin:.2rem 0 1rem">Cette adresse-ci reste ouverte ' +
    "le temps que tout le monde déménage. Prenez votre temps : vous pouvez " +
    "revenir ici autant de fois qu'il le faut.</p>" +

    "<hr class=\"sep\">" +

    '<div class="carte-titre">Il faut un code par appareil</div>' +
    '<p class="aide" style="margin:0 0 .8rem">Sur la nouvelle adresse, votre ' +
    "téléphone repart inconnu : il lui faut une invitation, comme au premier " +
    "jour. Et <b>l'icône de l'écran d'accueil compte pour un appareil de plus</b> " +
    "— prévoyez donc deux codes par personne : un pour le navigateur, un pour " +
    "l'icône.</p>" +

    (admin
      ? '<button class="btn principal plein" data-action="inviter" ' +
        'style="margin-bottom:.5rem">✉️ Créer les codes de ma famille</button>' +
        '<p class="aide" style="margin:0 0 1rem">Choisissez le <b>prénom existant</b> ' +
        "de chaque personne — surtout pas « une nouvelle personne », sinon elle " +
        "perdrait ses points et son historique. Durée : <b>30 jours</b>.</p>"
      : '<button class="btn principal plein" data-action="mon-appareil" ' +
        'style="margin-bottom:.5rem">📱 Créer mon code</button>' +
        '<p class="aide" style="margin:0 0 1rem">Ce bouton fabrique un code pour ' +
        "vous seul. S'il est refusé, demandez-le à l'administrateur de votre " +
        "famille : lui peut toujours en créer.</p>") +

    "<hr class=\"sep\">" +

    '<div class="carte-titre">Ensuite, sur chaque téléphone</div>' +
    '<div class="ligne"><span class="etape">1</span><div class="ligne-corps">' +
    "<b>Supprimez l'ancienne icône</b><small>Appui long, puis Supprimer. Elle " +
    "pointe vers l'ancienne adresse.</small></div></div>" +
    '<div class="ligne"><span class="etape">2</span><div class="ligne-corps">' +
    "<b>Ouvrez matribu-app.fr</b><small>Sur iPhone, avec Safari : c'est le seul " +
    "navigateur qui sait poser l'icône sur l'écran d'accueil.</small></div></div>" +
    '<div class="ligne"><span class="etape">3</span><div class="ligne-corps">' +
    "<b>Appuyez sur « J'ai reçu une invitation »</b><small>Et surtout pas sur " +
    "« Créer ma famille » : cela fabriquerait une famille vide.</small></div></div>" +
    '<div class="ligne"><span class="etape">4</span><div class="ligne-corps">' +
    "<b>Entrez le code, puis votre code à 4 chiffres</b><small>Vous retrouvez " +
    "votre profil, vos points et tout le reste.</small></div></div>" +
    '<div class="ligne"><span class="etape">5</span><div class="ligne-corps">' +
    "<b>Reposez l'icône, et donnez-lui le second code</b><small>Elle redemandera " +
    "un code : c'est normal, c'est un appareil de plus.</small></div></div>" +

    '<button class="btn plein" data-action="fermer" style="margin-top:1.2rem">' +
    "Fermer</button>";

  ouvrirFeuille("Déménager ma famille", html, (f) => {
    /* Les deux boutons ouvrent une autre feuille : on ferme celle-ci d'abord,
       sinon la seconde remplacerait la première sans qu'on sache d'où on vient. */
    f.querySelectorAll('[data-action="inviter"], [data-action="mon-appareil"]')
      .forEach((b) => b.addEventListener("click", fermerFeuille));
  });
};

/* ==================== CONNECTER UN AUTRE APPAREIL ==================== */

/* Le cas typique, et déroutant : on ajoute Ma Tribu à l'écran d'accueil de son
   iPhone, et l'icône ouvre une application vierge qui propose de créer une
   famille. Elle n'a pas accès à la mémoire du navigateur — pour le téléphone,
   c'est une autre application. Il lui faut donc sa propre invitation, comme
   à un nouveau téléphone. Ce raccourci évite d'avoir à y penser. */
Formulaires.monAppareil = function () {
  const admin = estAdmin();
  const html = '<div id="f-appareil">' +
    '<div class="bandeau">📱<div>Une icône ajoutée à l\'écran d\'accueil est traitée par ' +
    "le téléphone comme une <b>application séparée</b> : elle ne connaît pas la famille " +
    "ouverte dans votre navigateur, et vous proposera d'en créer une. " +
    "<b>N'en créez pas une deuxième</b> — elle serait vide. Connectez-la avec un code." +
    "</div></div>" +

    '<div class="carte"><div class="carte-titre">En trois gestes</div>' +
    '<div class="ligne"><span class="etape">1</span><div class="ligne-corps">' +
    "<b>Créez le code ci-dessous</b><small>Il vaut pour votre profil " +
    esc(moi.emoji || "🙂") + " " + esc(moi.prenom) + ", et ne sert qu'une fois.</small></div></div>" +
    '<div class="ligne"><span class="etape">2</span><div class="ligne-corps">' +
    "<b>Ouvrez Ma Tribu depuis l'icône</b><small>Celle de l'écran d'accueil, pas le navigateur.</small></div></div>" +
    '<div class="ligne"><span class="etape">3</span><div class="ligne-corps">' +
    "<b>« J'ai reçu une invitation »</b><small>Tapez le code, puis votre code à " +
    "4 chiffres habituel.</small></div></div></div>" +

    /* Tout le monde peut créer un code POUR SOI : c'est le seul moyen de
       connecter l'icône de son propre écran d'accueil sans déranger un
       administrateur. Le serveur vérifie que le code vise bien son profil. */
    '<button class="btn principal plein" data-role="creer">Créer mon code d\'invitation</button>' +
    (admin ? "" :
      '<p class="aide" style="margin-top:.6rem">Ce code ne vaut que pour <b>votre</b> ' +
      "profil et ne donne aucun droit supplémentaire. Si le serveur le refuse, " +
      "demandez-en un à un administrateur : <b>Administration ▸ Inviter</b>, " +
      "en choisissant votre prénom.</p>") +
    '<div id="resultat-appareil" style="margin-top:1rem"></div>' +
    '<button class="btn plein" data-action="fermer" style="margin-top:1rem">Fermer</button></div>';

  ouvrirFeuille("Connecter un appareil", html, (f) => {
    const bouton = f.querySelector('[data-role="creer"]');
    if (!bouton) return;
    const zone = f.querySelector("#resultat-appareil");

    bouton.onclick = async () => {
      if (!moi.pinHash && !moi.pin) {
        toast("Donnez d'abord un code à 4 chiffres à votre profil");
        return;
      }
      bouton.disabled = true;
      const inv = await Invitations.creer(7, moi.id);
      bouton.disabled = false;
      if (!inv) {
        /* Le message court a déjà été affiché ; ici on laisse le chemin de
           secours sous les yeux, sans jargon. */
        zone.innerHTML = '<div class="bandeau">⚠️<div><b>Le serveur a refusé ce code.</b> ' +
          "C'est le cas tant que les règles Firebase n'ont pas été republiées dans leur " +
          "dernière version. En attendant, demandez un code à un administrateur : sur son " +
          "téléphone, <b>Administration ▸ Inviter</b>, en choisissant votre prénom.</div></div>";
        return;
      }
      const lien = Invitations.lien(inv.jeton);
      zone.innerHTML = codeAvecCopie(inv.jeton) +
        '<p class="aide centre" style="margin:.4rem 0 .7rem">Valable 7 jours, une seule fois. ' +
        "Les tirets sont facultatifs.</p>" +
        '<button class="btn plein doux" data-action="copier" data-texte="' + esc(lien) + '">Copier le lien complet</button>';
      bouton.textContent = "Créer un autre code";
    };
  });
};

/* ================ BOUTIQUE POUR UN ENFANT SANS TÉLÉPHONE ================ */

Formulaires.cadeauPour = function (mid) {
  if (!estAdmin()) return;
  const m = membre(mid);
  if (!m) return;
  const pts = pointsDe(mid);
  const dispo = etat.cadeaux.filter((c) => c.actif !== false).sort((a, b) => a.cout - b.cout);

  const html = '<div id="f-cadeau-pour">' +
    '<p class="aide" style="margin-bottom:1rem">' + esc(m.prenom) + " a <b>" + pts + " points</b>. " +
    "Choisissez ce qu'il ou elle souhaite échanger.</p>" +
    (dispo.length
      ? '<div class="grille-cadeaux">' + dispo.map((c) => {
        const assez = pts >= c.cout;
        return '<div class="cadeau"><span class="em">' + esc(c.emoji || "🎁") + "</span>" +
          "<b>" + esc(c.nom) + "</b>" +
          '<span class="etiquette or">' + c.cout + " pts</span>" +
          '<button class="btn mini ' + (assez ? "principal" : "") + '" data-cadeau="' + c.id + '"' +
          (assez ? "" : " disabled") + ">" + (assez ? "Échanger" : "Trop cher") + "</button></div>";
      }).join("") + "</div>"
      : '<p class="aide">Aucun cadeau dans la boutique.</p>') +
    '<button class="btn plein" data-action="fermer" style="margin-top:1rem">Fermer</button></div>';

  ouvrirFeuille("Cadeaux de " + m.prenom, html, (f) => {
    f.onclick = (ev) => {
      const b = ev.target.closest("[data-cadeau]");
      if (!b) return;
      fermerFeuille();
      Actions.accorderCadeauPour(mid, b.dataset.cadeau);
    };
  });
};

/* ================================ POINTS ================================ */

Formulaires.ajustementPoints = function (mid) {
  if (!estAdmin()) return;
  const m = membre(mid);
  if (!m) return;
  const html = '<form id="f-pts">' +
    '<p class="aide" style="margin-bottom:1rem">' + esc(m.prenom) + " a actuellement <b>" +
    pointsDe(m.id) + " points</b>.</p>" +
    '<div class="puces" data-role="rapide" style="margin-bottom:1rem">' +
    [-50, -20, -10, 10, 20, 50].map((n) =>
      '<button type="button" class="puce" data-n="' + n + '">' + (n > 0 ? "+" : "") + n + "</button>").join("") +
    "</div>" +
    '<label class="champ"><span>Nombre de points (négatif pour retirer)</span>' +
    '<input type="number" name="delta" value="10" required></label>' +
    '<label class="champ"><span>Motif</span>' +
    '<input type="text" name="motif" maxlength="60" placeholder="Coup de main exceptionnel"></label>' +
    '<div class="rangee-btn" style="margin-top:1.2rem">' +
    '<button type="button" class="btn" data-action="fermer">Annuler</button>' +
    '<button type="submit" class="btn principal">Appliquer</button></div></form>';

  ouvrirFeuille("Ajuster les points de " + m.prenom, html, (f) => {
    f.querySelector('[data-role="rapide"]').onclick = (ev) => {
      const b = ev.target.closest("[data-n]");
      if (b) f.querySelector('[name="delta"]').value = b.dataset.n;
    };
    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const delta = Number(d.get("delta"));
      if (!delta) { fermerFeuille(); return; }
      fermerFeuille();
      Actions.ajusterPoints(m.id, delta, String(d.get("motif") || "").trim() || "Ajustement");
    };
  });
};

/* L'historique de quelqu'un. Sans argument, c'est le sien.

   Un administrateur peut consulter celui d'un autre membre : c'est
   indispensable pour les enfants sans téléphone, qui ne se connectent jamais
   et dont personne ne pouvait donc voir le détail des points. « Il a 40
   points » sans pouvoir dire d'où ils viennent, ça ne se défend pas devant
   un enfant qui conteste. */
Formulaires.historique = function (mid) {
  const cible = mid && (mid === moi.id || estAdmin()) ? membre(mid) : moi;
  if (!cible) return;
  const sien = etat.journal.filter((e) => e.membreId === cible.id).slice(0, 60);
  const solde = pointsDe(cible.id);

  const entete = '<div class="ligne" style="padding-top:0">' + avatarDe(cible) +
    '<div class="ligne-corps"><b>' + esc(cible.prenom) + "</b><small>" +
    sien.length + " mouvement" + (sien.length > 1 ? "s" : "") + "</small></div>" +
    '<span class="etiquette or">' + solde + " pts</span></div>";

  const html = entete + (sien.length
    ? sien.map((e) =>
      '<div class="ligne"><div class="ligne-corps"><b>' + esc(e.motif) + "</b><small>" +
      new Date(e.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }) +
      "</small></div><span class=\"etiquette " + (e.delta > 0 ? "vert" : "rouge") + '">' +
      (e.delta > 0 ? "+" : "") + e.delta + "</span></div>").join("")
    : '<p class="aide" style="margin-top:.8rem">Aucun mouvement de points pour l\'instant.</p>');

  ouvrirFeuille(cible.id === moi.id ? "Mon historique de points" : "Historique de " + cible.prenom,
    html + '<button class="btn plein" data-action="fermer" style="margin-top:1.2rem">Fermer</button>');
};

/* ================================ RAYONS ================================

   Les rayons fournis ne couvrent pas toutes les maisons : bébé, jardin,
   pharmacie, cave… La famille ajoute les siens, et dit de quel côté ils vont
   — alimentaire ou maison. Rangés dans les réglages : un administrateur les
   écrit, ils valent pour tout le monde. */
Formulaires.rayon = function () {
  if (!estAdmin()) { toast("Seul un administrateur peut ajouter un rayon"); return; }

  const html = '<form id="f-rayon">' +
    '<label class="champ"><span>Nom du rayon</span>' +
    '<input type="text" name="nom" required maxlength="24" autocomplete="off" ' +
    'placeholder="Bébé, Jardin, Pharmacie…"></label>' +
    '<label class="champ"><span>De quel côté de la réserve ?</span></label>' +
    puceMultiple("cote", [
      { val: "alimentaire", html: "🥫 Alimentaire" },
      { val: "maison", html: "🧴 Maison" }], ["alimentaire"]) +
    '<p class="aide" style="margin-top:.7rem">Il apparaîtra dans la réserve, dans la liste de ' +
    "courses et dans la fiche de chaque article. L'application ne devinera pas toute seule " +
    "qu'un produit lui appartient : vous le choisirez à la main.</p>" +
    boutonsFormulaire("Ajouter", false) + "</form>";

  ouvrirFeuille("Nouveau rayon", html, (f) => {
    brancherMulti(f, "cote", true);
    f.onsubmit = (ev) => {
      ev.preventDefault();
      const nom = String(new FormData(ev.target).get("nom") || "").trim();
      if (!nom) { toast("Donnez un nom au rayon"); return; }
      if (rayonsTous().some((r) => pourChercher(r) === pourChercher(nom))) {
        toast("Ce rayon existe déjà");
        return;
      }
      etat.reglages = Object.assign({}, etat.reglages, {
        rayonsPerso: rayonsPerso().concat([{ nom: nom, cote: valeursMulti(f, "cote")[0] || "alimentaire" }])
      });
      fermerFeuille();
      sauver("reglages");
      toast("Rayon « " + nom + " » ajouté");
    };
  });
};

/* ================================ APPARENCE ================================

   Le mode clair/sombre et la palette de couleurs, dans la même fiche. Les
   deux ne valent que pour CET appareil : chacun choisit ce qu'il préfère,
   sans déranger le reste de la tribu et sans droits particuliers. */
Formulaires.apparence = function () {
  let th = "auto";
  try { th = localStorage.getItem("tribu:theme") || "auto"; } catch (e) { /* sans importance */ }
  const pal = paletteActuelle();
  const pastille = (c) => '<span style="display:inline-block;width:.62rem;height:.62rem;' +
    "border-radius:50%;background:" + c + ';border:1px solid rgba(0,0,0,.14);' +
    'margin-right:.12rem;vertical-align:-1px"></span>';

  const html =
    '<p class="aide" style="margin:0 0 .9rem">Ces réglages ne concernent que cet appareil.</p>' +
    '<label class="champ"><span>Mode</span></label>' +
    '<div class="puces">' +
    [["auto", "🌗 Automatique"], ["light", "☀️ Clair"], ["dark", "🌙 Sombre"]].map(([v, l]) =>
      '<button class="puce' + (th === v ? " on" : "") + '" data-action="theme-choix" data-valeur="' +
      v + '">' + l + "</button>").join("") + "</div>" +
    '<label class="champ" style="margin-top:1rem"><span>Palette</span></label>' +
    '<div class="puces">' + PALETTES.map((p) =>
      '<button class="puce' + (pal === p.val ? " on" : "") + '" data-action="palette" data-valeur="' +
      esc(p.val) + '">' + p.apercu.map(pastille).join("") + " " + p.emoji + " " + esc(p.nom) +
      "</button>").join("") + "</div>" +
    '<p class="aide" style="margin-top:.9rem">Le mode sombre existe pour chaque palette : ' +
    "les deux réglages se combinent.</p>" +
    '<button class="btn plein" data-action="fermer" style="margin-top:1rem">Fermer</button>';

  ouvrirFeuille("🎨 Apparence", html);
};

/* ================================ MENU PROFIL ================================ */

Formulaires.menuProfil = function () {
  const etatTexte = Store.mode === "nuage"
    ? '<span class="etat-connexion en-ligne"><i></i>Partagé avec la famille</span>'
    : '<span class="etat-connexion local"><i></i>Sur cet appareil uniquement</span>';
  const alerteCrypto = CRYPTO_DISPO ? "" :
    '<div class="bandeau">⚠️<div>' +
    "Cette page n'est pas servie en <b>https</b> : les codes à 4 chiffres ne peuvent pas " +
    "être chiffrés. À n'utiliser que pour des essais.</div></div>";

  const maj = misesAJour();
  const html =
    (maj.length
      ? '<button class="btn plein principal" data-action="maj-liste" style="margin-bottom:.8rem">' +
        "🔄 " + maj.length + " mise" + (maj.length > 1 ? "s" : "") + " à jour disponible" +
        (maj.length > 1 ? "s" : "") + "</button>"
      : "") +
    '<div class="ligne" style="padding-top:0">' +
    '<span class="avatar">' + esc(moi.emoji || "🙂") + "</span>" +
    '<div class="ligne-corps"><b>' + esc(moi.prenom) + "</b><small>" +
    (estAdmin() ? "Administrateur" : "Membre") + " • " + esc(etat.famille.nom) + "</small></div>" +
    (pointsActifs() ? '<span class="etiquette or">' + pointsDe(moi.id) + " pts</span>" : "") + "</div>" +
    '<p style="margin:.6rem 0 1rem">' + etatTexte + "</p>" + alerteCrypto +
    (pointsActifs()
      ? '<button class="btn plein" data-action="aller" data-vue="points" style="margin-bottom:.5rem">🌟 Points & cadeaux</button>'
      : "") +
    '<button class="btn plein" data-action="aller" data-vue="recettes" style="margin-bottom:.5rem">📖 Mes recettes</button>' +
    (estAdmin()
      ? '<button class="btn plein" data-action="aller" data-vue="admin" style="margin-bottom:.5rem">⚙️ Administration</button>'
      : "") +
    '<button class="btn plein" data-action="mon-appareil" style="margin-bottom:.5rem">📱 Connecter un appareil</button>' +
    (Store.mode === "nuage"
      ? '<button class="btn plein" data-role="mes-appareils" data-compte-appareils="' + esc(moi.id) +
        '" style="margin-bottom:.5rem">📋 Mes appareils (' +
        appareilsDe(moi.id).length + ")</button>"
      : "") +
    '<button class="btn plein" data-action="apparence" style="margin-bottom:.5rem">🎨 Apparence</button>' +
    '<button class="btn plein" data-action="bienvenue" style="margin-bottom:.5rem">✨ Revoir la présentation</button>' +
    '<button class="btn plein" data-role="mon-profil" style="margin-bottom:.5rem">✏️ Modifier mon profil</button>' +
    "<hr class=\"sep\">" +
    '<button class="btn plein doux" data-action="retour" style="margin-bottom:.5rem">' +
    "🐞 Signaler un problème / proposer une idée</button>" +
    '<button class="btn plein doux" data-action="effacer-appareil" style="margin-bottom:.5rem">' +
    "🧹 Effacer les données de cet appareil</button>" +
    (Store.mode === "nuage"
      ? '<button class="btn plein doux" data-role="quitter-tribu" style="margin-bottom:.5rem">' +
        "🚪 Quitter la tribu sur cet appareil</button>"
      : "") +
    '<p class="aide centre" style="margin-bottom:.8rem">Version ' + esc(VERSION) +
    " — merci de vos retours !<br>" +
    /* Obligation légale dès lors que d autres familles que la sienne
       utilisent l application : dire ce qui est collecté et comment le
       faire effacer. La page vit à part, elle se lit sans être connecté. */
    '<a href="confidentialite.html" target="_blank" rel="noopener">Confidentialité et données personnelles</a></p>' +
    '<button class="btn plein danger" data-action="deconnexion">Changer de membre / se déconnecter</button>';

  ouvrirFeuille("Mon profil", html, (f) => {
    const bMesAppareils = f.querySelector('[data-role="mes-appareils"]');
    if (bMesAppareils) bMesAppareils.onclick = () => Formulaires.appareils(moi.id);
    const bQuitter = f.querySelector('[data-role="quitter-tribu"]');
    if (bQuitter) bQuitter.onclick = () => Formulaires.quitterTribu();
    f.querySelector('[data-role="mon-profil"]').onclick = () => {
      if (estAdmin()) { Formulaires.membre(moi.id); return; }
      Formulaires.monProfilSimple();
    };
    f.querySelectorAll('[data-action="aller"], [data-action="maj-liste"]').forEach((b) => {
      b.addEventListener("click", fermerFeuille);
    });
  });
};

/* ===================== QUITTER LA TRIBU SUR CET APPAREIL (étape 4) =====================

   Cet appareil seul quitte la tribu : il est retiré comme depuis la liste des
   appareils (registre, listes d'accès, révoqués), puis il oublie tout ce que
   Ma Tribu garde ici et reçoit une identité neuve. Le membre, ses points et
   ses autres appareils ne changent pas. Jamais le dernier appareil
   administrateur : plus personne ne pourrait gérer la tribu (les règles le
   refusent aussi). */
Formulaires.quitterTribu = async function () {
  if (Store.mode !== "nuage" || !moi) return;
  const admins = etat.adminsUid || [];
  if (admins.indexOf(Store.uid) !== -1 && admins.length <= 1) {
    ouvrirFeuille("Quitter la tribu sur cet appareil",
      '<div class="bandeau">🔑<div><b>C’est le seul appareil administrateur de la tribu.</b> ' +
      "S’il part, plus personne ne pourra la gérer. Donnez d’abord les droits " +
      "d’administrateur à un autre appareil : une invitation « administrateur », ou le lien " +
      "e-mail d’un adulte administrateur.</div></div>" +
      '<button class="btn plein" data-action="fermer" style="margin-top:1rem">Compris</button>');
    return;
  }
  const nom = (etat.famille && etat.famille.nom) || "la tribu";
  const autres = appareilsDe(moi.id).filter((a) => !a.ici).length;
  const ok = await confirmer("Cet appareil quittera « " + nom + " ». Votre profil, vos points" +
    (autres === 0 ? "" : autres === 1 ? " et votre autre appareil" : " et vos " + autres + " autres appareils") +
    " ne changent pas. Pour revenir ici plus tard, il faudra une nouvelle invitation, " +
    "ou le lien e-mail si votre adresse est enregistrée.",
    { titre: "Quitter la tribu sur cet appareil", ok: "Quitter", danger: true });
  if (!ok) return;
  /* Plus d'écoute AVANT de se retirer : sinon le refus qui suit ouvrirait
     l'écran « accès perdu » au lieu de terminer proprement. */
  Store._detacher();
  const r = await Store.retirerAppareil(Store.uid);
  if (!r.ok) {
    toast(r.message);
    Store.abonner(Store.code, Store._cbAbonnement);
    return;
  }
  await Store.oublierCetAppareil();
  /* Un écran, et non un message fugace : le rechargement emportait le message
     avant qu'on ait pu le lire. La page ne se recharge qu'au bouton Terminer. */
  viderEcranTribu();
  Connexion.aller("tribuQuittee", { nom: nom });
};

/* ================================ APPAREILS (étape 2) ================================

   Les appareils rattachés à un membre, et le moyen d'en retirer un : téléphone
   perdu, tablette donnée, ordinateur de bureau quitté. Un administrateur voit
   ceux de chacun ; un membre voit les siens et peut retirer ses AUTRES
   appareils sans déranger personne (parcours P7). L'appareil qu'on tient en
   main n'est pas retirable d'ici : ce sera « Quitter la tribu sur cet
   appareil » (étape 4). */
Formulaires.appareils = function (membreId) {
  const m = membre(membreId);
  if (!m) return;
  const lesMiens = !!(moi && moi.id === membreId);
  if (!estAdmin() && !lesMiens) return;

  const actifs = appareilsDe(membreId);
  const retires = appareilsRetiresDe(membreId);
  const PAR = { creation: "création de la tribu", invitation: "code d’invitation", compte: "lien e-mail" };
  const date = (iso) => {
    const d = iso ? new Date(iso) : null;
    return d && !isNaN(d) ? d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }) : "";
  };
  const icone = (type) => /iPhone|Android|iPad/.test(type || "") ? "📱"
    : /Mac|Windows|Linux/.test(type || "") ? "💻" : "🔹";

  const ligne = (a) => '<div class="ligne">' +
    '<span style="font-size:1.3rem">' + icone(a.type) + "</span>" +
    '<div class="ligne-corps"><b>' + esc(a.type) +
    (a.ici ? ' <span class="etiquette vert">cet appareil</span>' : "") +
    (a.admin ? ' <span class="etiquette">admin</span>' : "") + "</b><small>" +
    (a.ajouteLe
      ? "Ajouté le " + esc(date(a.ajouteLe)) + (PAR[a.par] ? " • par " + PAR[a.par] : "")
      : "Ajouté avant la version 0.50") + "</small></div>" +
    /* Le bouton n'apparaît que si le retrait est permis : jamais sur
       l'appareil qu'on tient (étape 4), ni sur le dernier appareil
       administrateur de la tribu (les règles le refusent). */
    (a.ici ? ""
      : a.admin && (etat.adminsUid || []).length <= 1
        ? '<small class="aide" style="margin:0;text-align:right;line-height:1.3">Seul appareil<br>administrateur</small>'
        : '<button class="btn mini danger" data-retirer="' + esc(a.uid) + '">Retirer</button>') +
    "</div>";

  const html =
    '<div data-feuille-appareils="' + esc(membreId) + '" hidden></div>' +   // repère pour rafraichirAppareils
    '<p class="aide" style="margin-bottom:.8rem">Chaque téléphone, tablette ou ordinateur ' +
    "connecté à ce profil. Retirer un appareil lui coupe <b>tout de suite</b> l’accès à la " +
    "tribu, <b>pour de bon</b> : utile pour un téléphone perdu ou donné.</p>" +
    (actifs.length ? actifs.map(ligne).join("")
      : '<p class="aide">Aucun appareil n’est connecté à ce profil.</p>') +
    (retires.length
      ? '<div class="sous-titre" style="margin-top:1rem"><h3>Appareils retirés</h3></div>' +
        retires.map((r) => '<div class="ligne"><span style="font-size:1.3rem">🚫</span>' +
          '<div class="ligne-corps"><b>' + esc(r.type || "Appareil") + "</b><small>Retiré le " +
          esc(date(r.le)) + (r.par && membre(r.par) ? " par " + esc(membre(r.par).prenom) : "") +
          "</small></div></div>").join("")
      : "") +
    '<button class="btn plein" data-action="fermer" style="margin-top:1rem">Fermer</button>';

  ouvrirFeuille(lesMiens ? "Mes appareils" : "Appareils de " + m.prenom, html, (f) => {
    f.querySelectorAll("[data-retirer]").forEach((b) => {
      b.onclick = async () => {
        const uid = b.dataset.retirer;
        const a = actifs.find((x) => x.uid === uid);
        /* Jamais le dernier appareil administrateur : plus personne ne
           pourrait gérer la tribu (les règles le refusent aussi). */
        const admins = etat.adminsUid || [];
        if (admins.indexOf(uid) !== -1 && admins.length <= 1) {
          toast("C’est le seul appareil administrateur de la tribu : il ne peut pas être retiré.");
          return;
        }
        const ok = await confirmer("Retirer « " + (a ? a.type : "cet appareil") + " » ? Il perdra " +
          "tout de suite l’accès à la tribu, et ne pourra plus y revenir tel quel.",
          { titre: "Retirer cet appareil", ok: "Retirer", danger: true });
        if (ok) {
          const r = await Store.retirerAppareil(uid);
          toast(r.ok ? "Appareil retiré 🚫" : r.message);
        }
        Formulaires.appareils(membreId);    // la fiche reflète le nouvel état
      };
    });
  });
};

/* Quand le serveur change, rendre() ne redessine que l'écran de fond : une
   fenêtre ouverte gardait d'anciens nombres (« Mes appareils (3) » alors qu'il
   y en avait 4). Appelée à chaque changement du document de la famille :
   - la liste des appareils se redessine en entier (rien à y saisir), à la
     même hauteur de défilement ;
   - ailleurs, seul le nombre des boutons « Mes appareils » / « Appareils de … »
     est corrigé : le reste de la fiche peut être en cours de saisie.
   Une confirmation ouverte par-dessus n'a pas ces repères : elle n'est pas touchée. */
Formulaires.rafraichirAppareils = function () {
  if (!document.querySelector("#voile").classList.contains("on")) return;
  const f = document.querySelector("#feuille");
  const liste = f.querySelector("[data-feuille-appareils]");
  if (liste) {
    const haut = f.scrollTop;
    Formulaires.appareils(liste.dataset.feuilleAppareils);
    f.scrollTop = haut;
    return;
  }
  f.querySelectorAll("[data-compte-appareils]").forEach((b) => {
    const n = appareilsDe(b.dataset.compteAppareils).length;
    b.textContent = b.textContent.replace(/\(\d+\)\s*$/, "(" + n + ")");
  });
};

/* Un membre non-admin peut changer son prenom, son avatar et son code. */
Formulaires.monProfilSimple = function () {
  const html = '<form id="f-moi">' +
    '<label class="champ"><span>Prénom</span>' +
    '<input type="text" name="prenom" value="' + esc(moi.prenom) + '" required maxlength="20"></label>' +
    '<label class="champ"><span>Avatar</span></label>' + grilleEmojis(EMOJIS_MEMBRES, moi.emoji) +
    '<label class="champ"><span>Nouveau code à 4 chiffres (facultatif)</span>' +
    champPin('placeholder="••••"') + "</label>" +
    '<div class="rangee-btn" style="margin-top:1.2rem">' +
    '<button type="button" class="btn" data-action="fermer">Annuler</button>' +
    '<button type="submit" class="btn principal">Enregistrer</button></div></form>';

  ouvrirFeuille("Mon profil", html, (f) => {
    brancherEmojis(f);
    f.onsubmit = async (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const pin = String(d.get("pin") || "").trim();
      if (pin && !/^[0-9]{4}$/.test(pin)) { toast("Le code doit faire 4 chiffres"); return; }
      moi.prenom = String(d.get("prenom")).trim();
      moi.emoji = emojiChoisi(f, "😀");
      if (pin) Object.assign(moi, await champsPin(pin));
      fermerFeuille();
      sauver("membres");
      toast("Profil enregistré");
    };
  });
};

/* ======================== CONSULTER UNE RECETTE ========================

   Le déroulé de la recette, en lecture. C'est la fenêtre qu'on ouvre en
   cuisine, une main occupée : de grandes lignes, et le bouton « Modifier »
   à la fin, pas au début. */

Formulaires.consulterRecette = function (rid) {
  const r = etat.recettes.find((x) => x.id === rid);
  if (!r) { toast("Recette introuvable"); return; }

  const ings = (r.ingredients || []).filter((i) => i && i.nom);
  const etapes = (r.etapes || []).filter((e) => String(e).trim());

  const etiquettes =
    (r.vegetarien ? '<span class="etiquette vert">🥦 végé</span>' : "") +
    (r.rapide ? '<span class="etiquette">⏱️ rapide</span>' : "") +
    (r.thermomix ? '<span class="etiquette chaud">🍲 robot</span>' : "") +
    (r.type === "leger" ? '<span class="etiquette">léger</span>' : "") +
    (r.saisons || []).map((v) => {
      const x = infoSaison(v);
      return x ? '<span class="etiquette' + (v === saisonActuelle() ? " vert" : "") + '">' +
        x.emoji + " " + x.nom.toLowerCase() + "</span>" : "";
    }).join("") +
    (r.origine === "importee" && r.deQui
      ? '<span class="etiquette">de ' + esc(r.deQui) + "</span>" : "");

  let html = '<div id="f-voir">' +
    '<div style="text-align:center;margin-bottom:.8rem">' +
    '<div style="font-size:2.6rem;line-height:1">' + esc(r.emoji || "🍽️") + "</div>" +
    '<div class="etiquettes" style="justify-content:center;margin-top:.5rem">' + etiquettes + "</div>" +
    "</div>";

  /* Les façons de cuisiner, avec la raison en clair : « grâce à : poisson
     gras, huile d'olive ». Une étiquette sans explication ne vaut rien. */
  const sante = explicationProfils(r);
  if (sante.length) {
    html += '<div class="carte" style="margin-bottom:.75rem">' +
      '<div class="carte-titre">Façons de cuisiner' +
      '<button class="lien" data-action="sante-info">en savoir plus</button></div>' +
      sante.map((x) =>
        '<div class="ligne ligne-maj" data-action="sante-info" data-valeur="' + x.profil.val + '">' +
        '<span style="font-size:1.2rem">' + x.profil.emoji + "</span>" +
        '<div class="ligne-corps"><b>' + esc(x.profil.nom) + "</b>" +
        (x.texte ? "<small>" + esc(x.texte) + "</small>" : "") + "</div></div>").join("") +
      "</div>";
  }

  html += '<div class="sous-titre" style="margin-top:.4rem"><h3>Ingrédients</h3>' +
    '<span class="etiquette">' + ings.length + "</span></div>";
  html += ings.length
    ? '<div class="carte">' + ings.map((i) =>
      '<div class="ligne"><div class="ligne-corps"><b>' + esc(i.nom) + "</b>" +
      (i.rayon ? "<small>" + esc(i.rayon) + "</small>" : "") + "</div>" +
      '<span class="etiquette">' + esc(formaterQte(i.qte, i.unite) || "—") + "</span></div>").join("") +
    "</div>"
    : rienDu("🥕", "Aucun ingrédient noté.");

  html += '<div class="sous-titre"><h3>Préparation</h3>' +
    (etapes.length ? '<span class="etiquette">' + etapes.length + " étape" +
      (etapes.length > 1 ? "s" : "") + "</span>" : "") + "</div>";
  html += etapes.length
    ? '<div class="carte">' + etapes.map((e, k) =>
      '<div class="ligne" style="align-items:flex-start">' +
      '<span class="etape" style="margin-top:.1rem">' + (k + 1) + "</span>" +
      '<div class="ligne-corps"><b style="font-weight:500;line-height:1.5">' +
      esc(e) + "</b></div></div>").join("") + "</div>"
    /* Pas de déroulé : on le dit sans détour, et on propose de l'écrire. */
    : rienDu("📝", "Le déroulé n'est pas encore écrit.<br>" +
      "Vous pouvez l'ajouter dans <b>Modifier</b>, une étape par ligne.");

  if (lienExterne(r.lien)) {
    html += '<a class="btn plein doux" href="' + esc(lienExterne(r.lien)) + '" target="_blank" rel="noopener" ' +
      'style="margin-top:.6rem;text-decoration:none">Ouvrir la recette d\'origine ↗</a>';
  }

  /* Le favori se marque ici aussi : c'est en lisant la recette qu'on se dit
     « celle-là, on la refera ». Chacun a les siens. */
  html += '<button class="btn plein ' + (estFavori(r) ? "doux" : "") + '" data-role="favori" ' +
    'style="margin-top:.8rem">' +
    (estFavori(r) ? "⭐ Dans vos favoris — retirer" : "☆ Ajouter à mes favoris") + "</button>";

  html += '<div class="rangee-btn" style="margin-top:.6rem">' +
    '<button class="btn" data-action="fermer">Fermer</button>' +
    '<button class="btn principal" data-role="modifier">✏️ Modifier</button></div></div>';

  ouvrirFeuille(r.nom, html, (f) => {
    f.querySelector('[data-role="modifier"]').onclick = () => Formulaires.recette(r.id);
    const bf = f.querySelector('[data-role="favori"]');
    /* On rouvre la fiche : le bouton reflète le nouvel état, sans la fermer. */
    if (bf) bf.onclick = () => { basculerFavori(r.id); Formulaires.consulterRecette(r.id); };
  });
};

/* ================== PARTAGER UNE RECETTE AVEC LES AUTRES ==================

   Publier, c'est rendre la recette visible par TOUTES les familles de l'app.
   On le dit avant, on montre ce qui part vraiment, et on rappelle que c'est
   la version ENREGISTRÉE qui est publiée — pas ce qui vient d'être tapé. */

Formulaires.publierRecette = function (rid) {
  const r = etat.recettes.find((x) => x.id === rid);
  if (!r) return;

  if (Store.mode !== "nuage") {
    toast("Le partage demande la connexion familiale (Firebase)");
    return;
  }
  const dejaPartagee = !!r.partageId;

  const html = '<div id="f-publier">' +
    '<div class="bandeau' + (dejaPartagee ? " info" : "") + '">' + (dejaPartagee ? "🏘️" : "⚠️") +
    "<div>" +
    (dejaPartagee
      ? "<b>" + esc(r.nom) + "</b> est actuellement visible par toutes les familles " +
      "de l'application. Vous pouvez la retirer à tout moment."
      : "Publier <b>" + esc(r.nom) + "</b> la rendra visible par <b>toutes les familles</b> " +
      "de l'application, qui pourront la recopier chez elles.") +
    "</div></div>" +

    '<div class="carte"><div class="carte-titre">Ce qui part vraiment</div>' +
    '<div class="ligne"><span class="etape ok">✓</span><div class="ligne-corps">' +
    "<b>Le plat</b><small>Nom, icône, ingrédients, déroulé, saisons, lien.</small></div></div>" +
    '<div class="ligne"><span class="etape ok">✓</span><div class="ligne-corps">' +
    "<b>Le nom de votre tribu</b><small>« " + esc(etat.famille.nom || "Une famille") +
    " » — pour dire d'où vient la recette.</small></div></div>" +
    '<div class="ligne"><span class="etape ok">✓</span><div class="ligne-corps">' +
    "<b>Le repère technique de votre tribu</b><small>Il ne donne aucun accès à " +
    "votre famille ; il sert seulement à pouvoir retirer la recette plus tard.</small></div></div>" +
    '<div class="ligne"><span class="etape">✗</span><div class="ligne-corps">' +
    "<b>Rien d'autre</b><small>Ni les prénoms, ni les points, ni les courses, " +
    "ni le contenu de votre famille.</small></div></div></div>" +

    (dejaPartagee ? "" :
      '<p class="aide" style="margin-bottom:1rem">C\'est la version <b>enregistrée</b> qui ' +
      "est publiée. Si vous venez de modifier la recette, enregistrez-la d'abord.</p>") +

    '<div class="rangee-btn">' +
    '<button class="btn" data-action="fermer">Annuler</button>' +
    '<button class="btn ' + (dejaPartagee ? "danger" : "principal") + '" data-role="ok">' +
    (dejaPartagee ? "Retirer du catalogue" : "🏘️ Publier") + "</button></div></div>";

  ouvrirFeuille(dejaPartagee ? "Recette partagée" : "Partager la recette", html, (f) => {
    const b = f.querySelector('[data-role="ok"]');
    b.onclick = async () => {
      b.disabled = true;
      const ok = dejaPartagee ? await Partage.retirer(r.id) : await Partage.publier(r.id);
      b.disabled = false;
      if (!ok) return;                       // le message d'échec est déjà affiché
      toast(dejaPartagee ? "Recette retirée du catalogue" : "Recette partagée 🏘️");
      Formulaires.recette(r.id);
    };
  });
};

/* ================== LE CATALOGUE DES RECETTES PARTAGÉES ================== */

Formulaires.catalogue = function () {
  if (Store.mode !== "nuage") {
    ouvrirFeuille("Recettes partagées",
      '<div class="bandeau">🏘️<div>Le catalogue commun demande la connexion familiale ' +
      "(Firebase). Sur cet appareil, l'application fonctionne en local : vos recettes " +
      "restent chez vous.</div></div>" +
      '<button class="btn plein" data-action="fermer">Fermer</button>');
    return;
  }

  ouvrirFeuille("Recettes partagées",
    '<div id="f-catalogue"><p class="aide centre" style="padding:2rem 0">Chargement du ' +
    "catalogue…</p></div>", async () => {
      const fiches = await Store.listerRecettesPartagees();
      const zone = document.querySelector("#f-catalogue");
      if (!zone) return;                     // la feuille a été fermée entre-temps

      if (fiches === null) {
        /* On n'invente pas la cause : on montre celle que le serveur a donnée. */
        zone.innerHTML = '<div class="bandeau">⚠️<div><b>Catalogue illisible.</b> ' +
          "Soit la connexion manque, soit les règles Firebase n'autorisent pas encore " +
          "la lecture de <b>recettesPartagees</b>.</div></div>" +
          (Store.derniereErreur
            ? '<p class="aide">Message du serveur : ' + esc(String(Store.derniereErreur.code ||
              Store.derniereErreur.message || Store.derniereErreur)) + "</p>"
            : "") +
          '<button class="btn plein" data-action="fermer">Fermer</button>';
        return;
      }

      const monCode = etat.famille.code;
      const miennes = fiches.filter((x) => x.familleRef === monCode);
      const autres = fiches.filter((x) => x.familleRef !== monCode);
      const chezMoi = new Set(etat.recettes.map((r) => String(r.nom || "").toLowerCase().trim()));

      const carte = (fiche, aMoi) => {
        const dejaLa = chezMoi.has(String(fiche.nom || "").toLowerCase().trim());
        return '<div class="ligne" style="align-items:flex-start">' +
          '<span style="font-size:1.4rem">' + esc(fiche.emoji || "🍽️") + "</span>" +
          '<div class="ligne-corps"><b>' + esc(fiche.nom) + "</b><small>" +
          (aMoi ? "publiée par vous" : "par " + esc(fiche.parFamille || "une famille")) +
          " • " + (fiche.ingredients || []).length + " ingrédient" +
          ((fiche.ingredients || []).length > 1 ? "s" : "") +
          ((fiche.etapes || []).length ? " • " + fiche.etapes.length + " étape" +
            (fiche.etapes.length > 1 ? "s" : "") : "") +
          "</small>" +
          '<span class="etiquettes">' +
          (fiche.vegetarien ? '<span class="etiquette vert">végé</span>' : "") +
          (fiche.rapide ? '<span class="etiquette">rapide</span>' : "") +
          (dejaLa && !aMoi ? '<span class="etiquette or">déjà chez vous</span>' : "") +
          "</span></div>" +
          (aMoi
            ? '<button class="btn mini danger" data-role="retirer" data-id="' + esc(fiche.id) + '">Retirer</button>'
            : '<button class="btn mini ' + (dejaLa ? "" : "doux") + '" data-role="importer" ' +
            'data-id="' + esc(fiche.id) + '"' + (dejaLa ? " disabled" : "") + ">＋ Ajouter</button>") +
          "</div>";
      };

      let h = "";
      if (!fiches.length) {
        h += rienDu("🏘️", "Le catalogue est vide pour l'instant.<br>" +
          "Publiez une de vos recettes : ouvrez-la, <b>Modifier</b>, puis " +
          "<b>Partager avec les autres familles</b>.");
      }
      if (autres.length) {
        h += '<div class="sous-titre" style="margin-top:0"><h3>Proposées par d\'autres familles</h3>' +
          '<span class="etiquette">' + autres.length + "</span></div>" +
          '<div class="carte">' + autres.map((x) => carte(x, false)).join("") + "</div>";
      } else if (fiches.length) {
        h += rienDu("🏘️", "Aucune autre famille n'a encore publié de recette.");
      }
      if (miennes.length) {
        h += '<div class="sous-titre"><h3>Vos publications</h3>' +
          '<span class="etiquette vert">' + miennes.length + "</span></div>" +
          '<div class="carte">' + miennes.map((x) => carte(x, true)).join("") + "</div>";
      }
      h += '<p class="aide" style="margin-top:.8rem">Une recette ajoutée est <b>recopiée</b> ' +
        "chez vous : vous pouvez la modifier sans rien changer chez la famille qui l'a publiée.</p>" +
        '<button class="btn plein" data-action="fermer" style="margin-top:.6rem">Fermer</button>';
      zone.innerHTML = h;

      zone.querySelectorAll('[data-role="importer"]').forEach((b) => {
        b.onclick = () => {
          const fiche = fiches.find((x) => x.id === b.dataset.id);
          if (!fiche) return;
          if (Partage.importer(fiche)) {
            toast("« " + fiche.nom + " » ajoutée à votre cahier 📖");
            b.disabled = true;
            b.textContent = "Ajoutée ✓";
          }
        };
      });

      zone.querySelectorAll('[data-role="retirer"]').forEach((b) => {
        b.onclick = async () => {
          const fiche = fiches.find((x) => x.id === b.dataset.id);
          if (!fiche) return;
          b.disabled = true;
          /* La recette locale porte le lien vers sa publication. Si elle a été
             publiée depuis un autre téléphone, on retire quand même la fiche. */
          const locale = etat.recettes.find((r) => r.partageId === fiche.id);
          const ok = locale
            ? await Partage.retirer(locale.id)
            : await Store.retirerRecettePartagee(fiche.id);
          if (!ok) { b.disabled = false; toast("Retrait impossible"); return; }
          toast("Publication retirée");
          Formulaires.catalogue();
        };
      });
    });
};

/* ======================= LES MISES À JOUR DISPONIBLES ======================= */

Formulaires.misesAJour = function () {
  const liste = misesAJour();
  if (!liste.length) {
    ouvrirFeuille("Mises à jour",
      rienDu("✅", "Tout est à jour.<br>Rien à valider pour le moment.") +
      '<button class="btn plein" data-action="fermer">Fermer</button>');
    return;
  }

  const html = '<div id="f-maj">' +
    '<p class="aide" style="margin-bottom:.8rem">Ce que l\'application peut ajouter ou ' +
    "compléter chez vous. Rien n'est fait sans votre accord.</p>" +
    '<div class="carte">' + liste.map((m) =>
      '<div class="ligne"><span style="font-size:1.4rem">' + esc(m.emoji) + "</span>" +
      '<div class="ligne-corps"><b>' + esc(m.titre) + "</b><small>" + esc(m.detail) + "</small></div>" +
      '<button class="btn mini doux" data-role="ouvrir" data-cible="' + esc(m.action) +
      '">Voir</button></div>').join("") + "</div>" +
    '<button class="btn plein" data-action="fermer" style="margin-top:1rem">Fermer</button></div>';

  ouvrirFeuille("Mises à jour", html, (f) => {
    /* « Voir » doit montrer, pas valider : on ouvre la fenêtre correspondante. */
    f.querySelectorAll('[data-role="ouvrir"]').forEach((b) => {
      b.onclick = () => {
        if (b.dataset.cible === "recettes-maj") Formulaires.majRecettes();
      };
    });
  });
};

/* ================= METTRE À JOUR LE CAHIER DE RECETTES ================= */

Formulaires.majRecettes = function () {
  if (!estAdmin()) { toast("Seul un administrateur peut mettre à jour le cahier"); return; }
  const d = diagnosticRecettes();

  if (d.rienAFaire) {
    ouvrirFeuille("Cahier de recettes",
      rienDu("✅", "Votre cahier est déjà complet.<br>" +
        etat.recettes.length + " recettes, rien à ajouter.") +
      '<button class="btn plein" data-action="fermer">Fermer</button>');
    return;
  }

  const apercu = d.nouvelles.slice(0, 12);
  const reste = d.nouvelles.length - apercu.length;

  let html = '<div id="f-maj-recettes">';
  if (d.nouvelles.length) {
    html += '<div class="bandeau info">✨<div><b>' + d.nouvelles.length + " nouveau" +
      (d.nouvelles.length > 1 ? "x" : "") + " plat" + (d.nouvelles.length > 1 ? "s" : "") +
      "</b> disponible" + (d.nouvelles.length > 1 ? "s" : "") +
      " dans la bibliothèque de l'application.</div></div>" +
      '<div class="carte">' + apercu.map((r) =>
        '<div class="ligne"><span style="font-size:1.3rem">' + esc(r.emoji || "🍽️") + "</span>" +
        '<div class="ligne-corps"><b>' + esc(r.nom) + "</b><small>" +
        (r.ingredients || []).length + " ingrédient" +
        ((r.ingredients || []).length > 1 ? "s" : "") +
        ((r.etapes || []).length ? " • " + r.etapes.length + " étape" +
          (r.etapes.length > 1 ? "s" : "") : "") +
        (r.thermomix ? " • 🍲 robot" : "") + "</small></div></div>").join("") +
      (reste > 0 ? '<p class="aide centre" style="margin:.5rem 0 0">…et ' + reste +
        " autre" + (reste > 1 ? "s" : "") + "</p>" : "") +
      "</div>";
  }
  if (d.aCompleter) {
    html += '<div class="bandeau">🔄<div><b>' + d.aCompleter + " recette" +
      (d.aCompleter > 1 ? "s" : "") + " à compléter</b><br>" +
      [d.saisons ? d.saisons + " sans saison" : "",
        d.etapes ? d.etapes + " sans déroulé" : "",
        d.unites ? d.unites + " ingrédient" + (d.unites > 1 ? "s" : "") + " sans unité" : "",
        d.ingredients ? d.ingredients + " avec un ingrédient oublié" : ""]
        .filter(Boolean).join(", ") +
      ". Vos propres recettes ne sont pas touchées.</div></div>";
  }
  html += '<p class="aide">Vos recettes personnelles ne sont <b>jamais</b> touchées, et vos ' +
    "quantités sont conservées. En revanche, un ingrédient que vous auriez <b>retiré</b> " +
    "d'une recette fournie sera rétabli : c'est à ce prix que les filtres " +
    "« sans gluten » et « peu de sucre » disent vrai.</p>" +
    '<div class="rangee-btn" style="margin-top:1rem">' +
    '<button class="btn" data-action="fermer">Plus tard</button>' +
    '<button class="btn principal" data-role="ok">Mettre à jour</button></div></div>';

  ouvrirFeuille("Mettre à jour le cahier", html, (f) => {
    const b = f.querySelector('[data-role="ok"]');
    b.onclick = async () => {
      b.disabled = true;
      const bilan = reparerRecettes();
      const ajoutees = ajouterRecettesManquantes();
      await Store.ecrire(["recettes"]);
      fermerFeuille();
      rendre();
      const parts = [];
      if (ajoutees) parts.push(ajoutees + " plat" + (ajoutees > 1 ? "s" : "") +
        " ajouté" + (ajoutees > 1 ? "s" : ""));
      if (bilan.saisons) parts.push(bilan.saisons + " saison" + (bilan.saisons > 1 ? "s" : ""));
      if (bilan.etapes) parts.push(bilan.etapes + " déroulé" + (bilan.etapes > 1 ? "s" : ""));
      if (bilan.unites) parts.push(bilan.unites + " unité" + (bilan.unites > 1 ? "s" : ""));
      if (bilan.ingredients) parts.push(bilan.ingredients + " ingrédient" +
        (bilan.ingredients > 1 ? "s" : ""));
      toast(parts.length ? "Cahier à jour : " + parts.join(", ") + " ✅" : "Cahier déjà à jour");
    };
  });
};

/* ==================== LES FAÇONS DE CUISINER « SANTÉ » ====================

   Cette fenêtre porte l'avertissement. Il n'est pas décoratif : ces profils
   sont calculés à partir d'une liste d'ingrédients, pas à partir de vous.
   Ils indiquent une direction de cuisine, ils ne soignent rien. */

Formulaires.profilsSante = function (val) {
  const choisi = val ? infoProfil(val) : null;

  const avertissement =
    '<div class="bandeau">⚕️<div><b>Ce ne sont pas des régimes médicaux.</b> ' +
    "Ce sont des façons de cuisiner, déduites des ingrédients, qui suivent des " +
    "recommandations nutritionnelles générales. L'application ne connaît ni vos " +
    "quantités, ni le reste de votre journée, ni votre traitement. " +
    "<b>Demandez à votre médecin ou à une diététicienne</b> avant d'en faire une " +
    "règle — surtout si vous suivez un traitement.</div></div>";

  if (choisi) {
    const html = '<div id="f-sante">' + avertissement +
      '<div class="carte"><div class="carte-titre">' + choisi.emoji + " " + esc(choisi.nom) + "</div>" +
      '<p style="margin:0 0 .6rem;font-size:.9rem;line-height:1.55">' + esc(choisi.resume) + "</p>" +
      '<p style="margin:0;font-size:.86rem;line-height:1.6;color:var(--ink-muted);white-space:pre-line">' +
      esc(choisi.detail) + "</p></div>" +
      '<div class="rangee-btn"><button class="btn" data-action="sante-info">Tous les profils</button>' +
      '<button class="btn principal" data-action="fermer">Fermer</button></div></div>';
    ouvrirFeuille("Façon de cuisiner", html);
    return;
  }

  const html = '<div id="f-sante">' + avertissement +
    '<p class="aide" style="margin-bottom:.8rem">Chaque plat est rangé tout seul, ' +
    "d'après ses ingrédients. Vos propres recettes en profitent aussi : modifiez " +
    "les ingrédients, le classement suit.</p>" +
    '<div class="carte">' + PROFILS_SANTE.map((p) => {
      const n = etat.recettes.filter((r) => aLeProfil(r, p.val)).length;
      return '<div class="ligne ligne-maj" data-action="sante-info" data-valeur="' + p.val + '">' +
        '<span style="font-size:1.4rem">' + p.emoji + "</span>" +
        '<div class="ligne-corps"><b>' + esc(p.nom) + "</b><small>" + esc(p.resume) + "</small></div>" +
        '<span class="etiquette' + (n ? " vert" : "") + '">' + n + "</span></div>";
    }).join("") + "</div>" +
    '<p class="aide">Deux profils cochés ensemble se cumulent : le plat doit tenir ' +
    "les deux. Vous pouvez aussi les combiner avec le régime végétarien dans le " +
    "générateur de menus.</p>" +
    '<button class="btn plein" data-action="fermer" style="margin-top:.8rem">Fermer</button></div>';
  ouvrirFeuille("Façons de cuisiner", html);
};

/* Pourquoi ce plat porte-t-il tel profil ? On montre le raisonnement plutôt
   que d'asséner un verdict : c'est ce qui permet d'être en désaccord. */
function explicationProfils(r) {
  const NOMS = {
    poissonGras: "poisson gras", poisson: "poisson", fruitsMer: "fruits de mer",
    oeuf: "œufs", volaille: "volaille", viandeRouge: "viande rouge",
    charcuterie: "charcuterie", legumineuses: "légumineuses",
    cerealesCompletes: "céréales complètes", feculentsRaffines: "féculents raffinés",
    sucres: "sucre", graissesSaturees: "graisses saturées", laitier: "produits laitiers",
    huileOlive: "huile d'olive", oleagineux: "fruits à coque",
    epicesAntiInflam: "épices", vegetalFrais: "légumes frais", selenium: "sélénium",
    selRiche: "ingrédients salés"
  };
  const nom = (c) => NOMS[c] || c;
  return PROFILS_SANTE.map((p) => {
    const n = noterProfil(r, p);
    if (!n.retenu) return null;
    const bouts = [];
    if (n.raisons.pour.length) bouts.push("grâce à : " + n.raisons.pour.map(nom).join(", "));
    if (n.raisons.contre.length) bouts.push("malgré : " + n.raisons.contre.map(nom).join(", "));
    if (p.val === "peuDeSel") bouts.length = 0;
    return { profil: p, texte: bouts.join(" — ") };
  }).filter(Boolean);
}

/* ======================== LES ONGLETS DE LA BARRE ========================

   Toutes les familles ne se servent pas de tout : certaines ne veulent que
   les recettes et les courses. Masquer un onglet ne supprime rien — les
   données restent, elles sont simplement rangées hors de vue, et un
   administrateur peut les faire revenir à tout moment. */

Formulaires.onglets = function () {
  if (!estAdmin()) { toast("Seul un administrateur peut changer les onglets"); return; }
  const caches = ongletsMasques();

  const html = '<div id="f-onglets">' +
    '<p class="aide" style="margin-bottom:.9rem">Décochez ce que la famille n’utilise ' +
    "pas. L’accueil reste toujours là : c’est le chemin de retour.</p>" +
    '<div class="carte">' + ONGLETS.map((o) => {
      const actif = o.obligatoire || caches.indexOf(o.vue) === -1;
      return '<label class="ligne" style="cursor:pointer">' +
        '<input type="checkbox" data-vue="' + o.vue + '"' +
        (actif ? " checked" : "") + (o.obligatoire ? " disabled" : "") +
        ' style="width:auto;flex:0 0 auto">' +
        '<span style="font-size:1.3rem">' + o.emoji + "</span>" +
        '<span class="ligne-corps"><b>' + esc(o.nom) + "</b>" +
        (o.obligatoire ? "<small>toujours visible</small>" : "") + "</span></label>";
    }).join("") + "</div>" +
    '<p class="aide" id="onglets-note"></p>' +
    '<div class="rangee-btn" style="margin-top:1rem">' +
    '<button class="btn" data-action="fermer">Annuler</button>' +
    '<button class="btn principal" data-role="ok">Enregistrer</button></div></div>';

  ouvrirFeuille("Onglets visibles", html, (f) => {
    const note = f.querySelector("#onglets-note");
    const cases = () => Array.from(f.querySelectorAll("input[type=checkbox][data-vue]"));
    const maj = () => {
      const off = cases().filter((c) => !c.checked).map((c) => c.dataset.vue);
      note.innerHTML = off.length
        ? "Masqués : <b>" + off.map((v) =>
          esc((ONGLETS.find((o) => o.vue === v) || {}).nom || v)).join(", ") + "</b>. " +
          "Leur contenu n’est pas supprimé."
        : "Tous les onglets sont visibles.";
    };
    cases().forEach((c) => { c.onchange = maj; });
    maj();

    f.querySelector('[data-role="ok"]').onclick = () => {
      const off = cases().filter((c) => !c.checked).map((c) => c.dataset.vue);
      if (!etat.reglages) etat.reglages = {};
      etat.reglages.ongletsMasques = off;
      /* Si on vient de masquer l'onglet ouvert, on ne laisse pas l'écran
         dans un état impossible : retour à l'accueil. */
      if (off.indexOf(ui.vue) !== -1) ui.vue = "accueil";
      fermerFeuille();
      sauver("reglages");
      toast(off.length ? off.length + " onglet(s) masqué(s)" : "Tous les onglets sont visibles");
    };
  });
};

/* ==================== L'OBJECTIF COMMUN DE LA TRIBU ====================

   Entièrement optionnel : tant qu'il n'est pas activé, rien ne change et le
   classement reste seul. C'est un choix d'ambiance de maison, pas un réglage
   technique — la fenêtre le dit. */

Formulaires.objectif = function () {
  if (!estAdmin()) { toast("Seul un administrateur peut fixer l'objectif"); return; }
  const o = objectifFamille();
  const acquis = pointsCollectifs();

  const html = '<form id="f-objectif">' +
    '<div class="bandeau info">🤝<div>Le classement met chacun contre les autres. ' +
    "L'objectif commun met toute la maison <b>du même côté</b> : les points gagnés " +
    "par chacun s'additionnent vers une récompense partagée. Les deux peuvent " +
    "coexister — ou vous pouvez n'en garder qu'un.</div></div>" +

    '<label class="champ" style="display:flex;gap:.6rem;align-items:center">' +
    '<input type="checkbox" name="actif"' + (o.actif ? " checked" : "") +
    ' style="width:auto"><span style="margin:0">Activer l’objectif commun</span></label>' +

    '<label class="champ"><span>L’objectif</span>' +
    '<input type="text" name="nom" maxlength="50" value="' + esc(o.nom) +
    '" placeholder="Une soirée cinéma en famille"></label>' +
    '<label class="champ"><span>Icône</span></label>' +
    grilleEmojis(EMOJIS_CADEAUX, o.emoji) +
    '<label class="champ"><span>Points à atteindre, tous ensemble</span>' +
    '<input type="number" name="cible" min="10" max="100000" value="' + esc(String(o.cible)) + '"></label>' +
    '<p class="aide" style="margin:-.4rem 0 1rem">Comptez large : c’est la somme de ce ' +
    "que <b>toute la famille</b> gagne. Aujourd’hui, la tribu en est à <b>" + acquis +
    "</b> point" + (acquis > 1 ? "s" : "") + " depuis " +
    (o.depuis ? "le " + esc(dateJolie(o.depuis.slice(0, 10), true)) : "le début") + ".</p>" +

    '<div class="bandeau">💡<div>Les points dépensés en cadeaux <b>ne font pas reculer</b> ' +
    "la tribu : on compte ce qui a été gagné, pas ce qui reste en poche.</div></div>" +

    (o.actif
      ? '<button type="button" class="btn plein doux" data-role="relancer" style="margin-bottom:.6rem">' +
        "🔄 Repartir à zéro (objectif atteint et fêté)</button>"
      : "") +

    boutonsFormulaire("Enregistrer", false) + "</form>";

  ouvrirFeuille("Objectif commun", html, (f) => {
    brancherEmojis(f);

    const br = f.querySelector('[data-role="relancer"]');
    if (br) br.onclick = async () => {
      const ok = await confirmer("Le compteur repart de zéro pour un nouvel objectif. " +
        "Les points de chacun ne sont pas touchés.", { titre: "Repartir à zéro", ok: "Repartir" });
      if (!ok) return;
      etat.reglages = Object.assign({}, etat.reglages, {
        objectif: Object.assign({}, o, {
          depuis: new Date().toISOString(),
          faits: (Number(o.faits) || 0) + 1
        })
      });
      fermerFeuille();
      sauver("reglages");
      toast("Nouvel objectif lancé 🎯");
    };

    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const actif = !!d.get("actif");
      const nom = String(d.get("nom") || "").trim();
      const cible = Math.max(10, Math.min(100000, Number(d.get("cible")) || 500));
      if (actif && !nom) { toast("Donnez un nom à l’objectif"); return; }
      etat.reglages = Object.assign({}, etat.reglages, {
        objectif: {
          actif: actif, nom: nom, emoji: emojiChoisi(f, "🎯"), cible: cible,
          /* La date de départ n'est posée qu'au premier lancement : sinon
             chaque modification effacerait les points déjà gagnés. */
          depuis: o.depuis || new Date().toISOString(),
          faits: Number(o.faits) || 0
        }
      });
      fermerFeuille();
      sauver("reglages");
      toast(actif ? "Objectif commun activé 🤝" : "Objectif commun désactivé");
    };
  });
};

/* ==================== COLLER UNE LISTE DE COURSES ====================

   Une liste arrive rarement article par article : elle est dictée, recopiée
   d'un message, ou tapée d'un trait. On accepte donc un bloc de texte. */

Formulaires.plusieursCourses = function () {
  const listes = listesCourses();
  const html = '<form id="f-plusieurs">' +
    '<label class="champ"><span>Un article par ligne, ou séparés par des virgules</span>' +
    '<textarea name="liste" rows="7" style="min-height:150px" ' +
    'placeholder="pain&#10;lait demi-écrémé&#10;œufs&#10;papier toilette"></textarea></label>' +
    '<p class="aide" style="margin:-.4rem 0 1rem">Chaque article est rangé automatiquement ' +
    "dans son rayon. Vous pourrez ajuster les quantités ensuite.</p>" +
    (listes.length > 1
      ? '<label class="champ"><span>Dans quelle liste ?</span><select name="liste-cible">' +
        listes.map((l) => '<option value="' + l.id + '"' +
          (l.id === listeCourante().id ? " selected" : "") + ">" +
          esc((l.emoji || typeListe(l).emoji) + " " + l.nom) + "</option>").join("") +
        "</select></label>"
      : "") +
    '<div class="rangee-btn" style="margin-top:.6rem">' +
    '<button type="button" class="btn" data-action="fermer">Annuler</button>' +
    '<button type="submit" class="btn principal">Ajouter</button></div></form>';

  ouvrirFeuille("Coller une liste", html, (f) => {
    f.onsubmit = (ev) => {
      ev.preventDefault();
      const d = new FormData(ev.target);   // ev.target = le <form>, pas la feuille
      const champ = f.querySelector('[name="liste-cible"]');
      fermerFeuille();
      const n = Actions.ajouterPlusieursCourses(String(d.get("liste") || ""),
        champ ? { listeId: champ.value } : undefined);
      if (!n) toast("Rien à ajouter");
      else if (n === 1) toast("1 article ajouté 🛒");
    };
  });
};

/* ==================== REPRENDRE UNE SEMAINE DÉJÀ FAITE ==================== */

Formulaires.reprendreSemaine = function () {
  const semaines = semainesRemplies(8);
  if (!semaines.length) {
    ouvrirFeuille("Reprendre une semaine",
      rienDu("📋", "Aucune semaine précédente à reprendre.<br>Celle-ci sera la première.") +
      '<button class="btn plein" data-action="fermer">Fermer</button>');
    return;
  }
  const fmt = { day: "numeric", month: "long" };

  const html = '<div id="f-reprendre">' +
    '<p class="aide" style="margin-bottom:.8rem">Seuls les <b>plats</b> sont recopiés. ' +
    "Le cuisinier, les repas déjà validés et les absences de cette semaine-ci ne " +
    "sont pas touchés.</p>" +
    '<label class="champ" style="display:flex;gap:.6rem;align-items:center">' +
    '<input type="checkbox" id="remplacer-repas" style="width:auto">' +
    '<span style="margin:0">Remplacer les repas déjà prévus</span></label>' +
    '<div class="carte">' + semaines.map((x) => {
      const dim = new Date(x.lundi); dim.setDate(dim.getDate() + 6);
      return '<button class="ligne" data-role="prendre" data-cle="' + esc(x.cle) + '" ' +
        'style="width:100%;background:none;border:none;border-top:1px solid var(--border);text-align:left">' +
        '<span style="font-size:1.3rem">📋</span>' +
        '<span class="ligne-corps"><b>' + esc(x.lundi.toLocaleDateString("fr-FR", fmt)) +
        " – " + esc(dim.toLocaleDateString("fr-FR", fmt)) + "</b><small>" +
        x.nb + " plat" + (x.nb > 1 ? "s" : "") + " • " + esc(x.exemples.join(", ")) +
        "…</small></span></button>";
    }).join("") + "</div>" +
    '<button class="btn plein" data-action="fermer" style="margin-top:1rem">Annuler</button></div>';

  ouvrirFeuille("Reprendre une semaine", html, (f) => {
    f.querySelectorAll('[data-role="prendre"]').forEach((b) => {
      b.onclick = () => {
        const remplacer = f.querySelector("#remplacer-repas").checked;
        fermerFeuille();
        const n = reprendreSemaine(b.dataset.cle, remplacer);
        toast(n ? n + " repas repris 📋" : "Rien à reprendre — les cases sont déjà occupées");
      };
    });
  });
};

/* ==================== LE MENU À AFFICHER ====================

   Beaucoup de familles collent le menu de la semaine sur le frigo.
   L'application sait tout ; il lui manquait juste de le présenter ainsi :
   en grand, sans boutons, lisible à un mètre. */

Formulaires.menuAAfficher = function () {
  const sem = etat.repas[ui.semaine] || {};
  const lundi = lundiDeCle(ui.semaine);
  const dim = new Date(lundi); dim.setDate(dim.getDate() + 6);
  const fmt = { day: "numeric", month: "long" };
  const auj = isoDate(new Date());

  const nom = (c) => {
    if (!c) return "";
    if (estAbsence(c)) {
      const mo = infoMotif(c.motif);
      return mo.emoji + " " + (c.texte || mo.nom);
    }
    if (c.recetteId) {
      const r = etat.recettes.find((x) => x.id === c.recetteId);
      if (r) return (r.emoji || "🍽️") + " " + r.nom + (c.restes ? " (restes)" : "");
    }
    return c.texte ? "📝 " + c.texte : "";
  };

  const lignes = JOURS.map((j, i) => {
    const d = new Date(lundi); d.setDate(d.getDate() + i);
    const cest = isoDate(d) === auj;
    const midi = nom(sem[j + "-midi"]), soir = nom(sem[j + "-soir"]);
    return '<div class="jour-affiche' + (cest ? " aujourdhui" : "") + '">' +
      '<div class="jour-affiche-nom">' + j.charAt(0).toUpperCase() + j.slice(1) +
      ' <small>' + d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" }) + "</small></div>" +
      '<div class="jour-affiche-repas"><span>' + (midi ? esc(midi) : "—") + "</span>" +
      "<span>" + (soir ? esc(soir) : "—") + "</span></div></div>";
  }).join("");

  ouvrirFeuille("",
    '<div id="menu-affiche">' +
    '<h2 style="font-family:var(--font-display);text-align:center;margin:.2rem 0 .1rem">' +
    esc(etat.famille.nom) + "</h2>" +
    '<p class="aide centre" style="margin:0 0 .9rem">Menus du ' +
    esc(lundi.toLocaleDateString("fr-FR", fmt)) + " au " +
    esc(dim.toLocaleDateString("fr-FR", fmt)) + "</p>" +
    '<div class="entete-affiche"><span></span><span>Midi</span><span>Soir</span></div>' +
    lignes +
    '<div class="rangee-btn sans-impression" style="margin-top:1.2rem">' +
    '<button class="btn" data-action="fermer">Fermer</button>' +
    '<button class="btn principal" data-role="imprimer">🖨️ Imprimer</button></div></div>',
    (f) => {
      const b = f.querySelector('[data-role="imprimer"]');
      if (b) b.onclick = () => window.print();
    });
};

/* ==================== LE BILAN DE LA SEMAINE ====================

   Ce qui a été fait, pas ce qui reste à faire. C'est ce qui donne le
   sentiment d'avancer — et la seule vue de l'application qui regarde en
   arrière. Aucune saisie : tout vient du journal des points. */

Formulaires.bilanSemaine = function (cleSem) {
  const cle = cleSem || ui.semaine;
  const b = bilanSemaine(cle);
  const lundi = lundiDeCle(cle);
  const dim = new Date(lundi); dim.setDate(dim.getDate() + 6);
  const fmt = { day: "numeric", month: "long" };
  const o = objectifActif();

  const chiffre = (n, mot, emoji) =>
    '<div style="flex:1;text-align:center">' +
    '<div style="font-size:1.6rem;line-height:1">' + emoji + "</div>" +
    '<div style="font-family:var(--font-display);font-size:1.5rem;line-height:1.1">' + n + "</div>" +
    '<div class="aide" style="margin:0">' + mot + "</div></div>";

  const html = '<div id="f-bilan">' +
    '<p class="aide centre" style="margin:0 0 .9rem">Du ' +
    esc(lundi.toLocaleDateString("fr-FR", fmt)) + " au " +
    esc(dim.toLocaleDateString("fr-FR", fmt)) + "</p>" +

    (b.rien
      ? rienDu("🌱", "Rien n'a encore été validé cette semaine.<br>" +
        "Le bilan se remplira au fur et à mesure.")
      : '<div class="carte" style="display:flex;gap:.4rem">' +
        chiffre(b.taches, "tâche" + (b.taches > 1 ? "s" : "") + " validée" + (b.taches > 1 ? "s" : ""), "🧹") +
        chiffre(b.repasCuisines + "/" + b.repasPrevus, "repas cuisinés", "🍽️") +
        chiffre(b.pointsGagnes, "points gagnés", "🌟") +
        "</div>" +

        (b.classement.length
          ? '<div class="sous-titre"><h3>Qui a fait quoi</h3></div>' +
            '<div class="carte">' + b.classement.map((x) =>
              '<div class="ligne">' + avatarDe(x.membre) +
              '<div class="ligne-corps"><b>' + esc(x.membre.prenom) + "</b></div>" +
              '<span class="etiquette or">+' + x.pts + " pts</span></div>").join("") +
            "</div>"
          : "") +

        (o
          ? '<div class="sous-titre"><h3>Objectif commun</h3></div>' +
            '<div class="carte" style="text-align:center">' +
            '<div style="font-size:1.6rem;line-height:1">' + esc(o.emoji || "🎯") + "</div>" +
            '<div style="font-family:var(--font-display);margin:.2rem 0 .5rem">' + esc(o.nom) + "</div>" +
            '<div class="barre-progression"><i style="width:' +
            Math.min(100, Math.round(pointsCollectifs() / o.cible * 100)) + '%"></i></div>' +
            '<div style="margin-top:.4rem;font-weight:700">' + pointsCollectifs() + " / " + o.cible + "</div></div>"
          : "")) +

    '<button class="btn plein" data-action="fermer" style="margin-top:1rem">Fermer</button></div>';

  ouvrirFeuille("🏁 La semaine en bref", html);
};

/* ============ EFFACER LES DONNÉES DE CET APPAREIL ============

   Une application qui garde des choses dans le téléphone doit offrir le moyen
   de les reprendre. C'est un droit, et c'est aussi une politesse : on prête
   son téléphone, on change d'appareil, on veut simplement faire le ménage.

   Deux situations très différentes, et c'est tout l'enjeu de cette fenêtre :

   - EN MODE PARTAGÉ, la famille vit sur le serveur. Effacer ici ne retire que
     la session et les préférences : on se reconnecte, tout revient.
   - EN MODE HORS PARTAGE, ce téléphone EST la base de données. Effacer, c'est
     perdre la famille pour de bon. On l'écrit en toutes lettres et on demande
     de recopier un mot : une pression malheureuse ne doit pas suffire.

   Ce qui n'est PAS touché : la session Firebase, rangée ailleurs par le
   navigateur. La retirer ferait perdre l'accès de cet appareil à la famille,
   et il faudrait une nouvelle invitation — ce serait une punition, pas un
   ménage. Le bouton le dit. */

Formulaires.effacerAppareil = function () {
  const partage = Store.mode === "nuage";
  /* En partage, on GARDE le repère de la tribu : l'appareil reste membre
     (sa session n'est pas retirée) et l'écran promet qu'on pourra rechoisir
     son profil. Sans ce repère, l'application oubliait quelle tribu ouvrir :
     plus de « Continuer sur cet appareil », et l'invitation était refusée
     puisque l'appareil était déjà inscrit — une impasse (11/09/2026). */
  const garde = partage ? ["tribu:derniereFamille"] : [];
  const cles = Object.keys(localStorage)
    .filter((k) => k.indexOf("tribu:") === 0 && garde.indexOf(k) === -1);
  const familleLocale = cles.filter((k) => k.indexOf("tribu:donnees:") === 0);

  const detail = partage
    ? '<div class="bandeau info">☁️<div><b>Votre famille reste sur le serveur.</b><br>' +
      "Elle n'est pas touchée : ni les tâches, ni les points, ni les recettes. " +
      "Les autres membres ne verront aucun changement.</div></div>" +
      "<p>Sur <b>cet appareil</b>, seront effacés :</p><ul>" +
      "<li>le profil avec lequel vous êtes connecté (il faudra le rechoisir et " +
      "retaper votre code à 4 chiffres) ;</li>" +
      "<li>la copie de la famille gardée sur cet appareil pour aller vite " +
      "(elle sera retéléchargée à la prochaine ouverture) ;</li>" +
      "<li>vos préférences : thème, dernier onglet, bandeaux masqués ;</li>" +
      "<li>l'adresse e-mail éventuellement en attente de connexion.</li></ul>" +
      "<p>Pour revenir, touchez <b>« Continuer sur cet appareil »</b> sur l'écran " +
      "d'accueil : seul le repère de la tribu est gardé pour cela.</p>"
    : '<div class="bandeau">🔴<div><b>Attention : il n\'y a pas de copie ailleurs.</b><br>' +
      "Cette application fonctionne <b>hors partage</b> : ce téléphone est le seul " +
      "endroit où votre famille existe. Tout sera perdu — membres, tâches, points, " +
      "menus, courses, recettes — et <b>rien ne pourra être récupéré</b>." +
      "</div></div>" +
      (familleLocale.length
        ? "<p>Famille enregistrée sur cet appareil : <b>" +
          esc(familleLocale.map((k) => k.replace("tribu:donnees:", "")).join(", ")) +
          "</b>.</p>"
        : "<p>Aucune famille n'est enregistrée sur cet appareil.</p>");

  const html = '<form id="f-effacer">' + detail +
    '<p class="aide">' + cles.length + " élément" + (cles.length > 1 ? "s" : "") +
    " enregistré" + (cles.length > 1 ? "s" : "") + " par Ma Tribu sur cet appareil. " +
    "La session de connexion, elle, n'est pas retirée : cet appareil gardera son " +
    "accès à la famille et n'aura pas besoin d'une nouvelle invitation.</p>" +
    (partage
      ? ""
      : '<label class="champ" style="margin-top:1rem"><span>Recopiez <b>EFFACER</b> pour confirmer</span>' +
        '<input type="text" name="mot" autocomplete="off" autocapitalize="characters" ' +
        'spellcheck="false" style="text-align:center;font-weight:700;letter-spacing:.1em"></label>') +
    '<div class="rangee-btn" style="margin-top:1.2rem">' +
    '<button type="button" class="btn" data-action="fermer">Annuler</button>' +
    '<button type="submit" class="btn danger">Effacer</button></div></form>';

  ouvrirFeuille("Effacer les données de cet appareil", html, (f) => {
    f.onsubmit = async (ev) => {
      ev.preventDefault();
      if (!partage) {
        const mot = String(new FormData(ev.target).get("mot") || "").trim().toUpperCase();
        if (mot !== "EFFACER") { toast("Recopiez EFFACER pour confirmer"); return; }
      }
      ev.target.querySelector('button[type="submit"]').disabled = true;
      /* La copie locale de la famille (cache Firestore) part AVANT les
         repères : c'est elle qui contient les données, pas localStorage.
         Oubliée le 12/09/2026 en activant le cache — l'écran promettait
         d'effacer et laissait la tribu entière dans IndexedDB. */
      await Store.purgerCacheLocal();
      Object.keys(localStorage)
        .filter((k) => k.indexOf("tribu:") === 0 && garde.indexOf(k) === -1)
        .forEach((k) => { try { localStorage.removeItem(k); } catch (e) { } });
      fermerFeuille();
      toast("Données effacées de cet appareil");
      /* On repart d'une page vierge : garder l'état en mémoire donnerait une
         application qui continue d'afficher ce qu'elle vient d'effacer. */
      setTimeout(() => location.reload(), 700);
    };
  });
};

/* ==================== RÉCUPÉRER LES DONNÉES DE LA FAMILLE ====================

   Le droit à la portabilité : tout ce que Ma Tribu garde sur la famille, dans
   un fichier qu'une autre application peut relire. On dit ce qu'il contient,
   et — tout aussi important — ce qu'il ne contient volontairement pas. */

Formulaires.exporterDonnees = async function () {
  if (!estAdmin()) { toast("Seul un administrateur peut exporter la famille"); return; }
  if (Store.mode === "nuage") await Store.listerComptes(etat.famille.code);
  const n = (v) => Array.isArray(v) ? v.length : Object.keys(v || {}).length;
  const partage = peutPartagerFichier();

  const html = '<div id="f-export">' +
    "<p>Le fichier contient <b>tout le contenu de " + esc(etat.famille.nom) + "</b> :</p>" +
    '<ul class="aide" style="margin:.2rem 0 .9rem">' +
    "<li>" + n(etat.membres) + " membre(s) — prénom, avatar, rôle, adresse e-mail le cas échéant</li>" +
    "<li>" + n(etat.taches) + " tâche(s), et " + n(etat.etats) + " suivi(s) de tâches</li>" +
    "<li>" + n(etat.journal) + " ligne(s) de points, les cadeaux et les échanges</li>" +
    "<li>" + n(etat.recettes) + " recette(s), les menus, les courses, la réserve, les pense-bêtes</li>" +
    "<li>" + n(Store.comptesFamille) + " compte(s) adulte(s) — adresse e-mail et profil lié</li>" +
    "<li>les appareils autorisés : type et date d’ajout, sans leurs identifiants</li>" +
    "<li>les réglages de la famille</li></ul>" +
    '<div class="bandeau">🔐<div><b>Ce qui n\'y est pas, volontairement :</b> les empreintes ' +
    "des codes à 4 chiffres, les identifiants des appareils et les index de sécurité. Ils ne " +
    "vous serviraient à rien, et un fichier d'export finit souvent dans un e-mail : ce serait " +
    "les offrir au premier venu.</div></div>" +
    '<p class="aide">Format <b>JSON</b> : un format texte ouvert, que n\'importe quel ' +
    "logiciel sait relire. Gardez ce fichier en lieu sûr : il contient la vie de la maison.</p>" +
    '<button class="btn principal plein" data-role="telecharger" style="margin-top:.6rem">⬇️ Télécharger le fichier</button>' +
    (partage
      ? '<button class="btn plein" data-role="partager" style="margin-top:.5rem">📤 Partager ou enregistrer…</button>' +
        '<p class="aide centre" style="margin-top:.4rem">Sur iPhone, préférez « Partager » : ' +
        "c'est lui qui permet de ranger le fichier dans Fichiers.</p>"
      : "") +
    "</div>";

  ouvrirFeuille("Récupérer les données", html, (f) => {
    f.querySelector('[data-role="telecharger"]').onclick = () => {
      const fichier = telechargerExport();
      toast("Fichier prêt : " + fichier.name);
    };
    const bp = f.querySelector('[data-role="partager"]');
    if (bp) bp.onclick = async () => { await partagerExport(); };
  });
};

/* ========================= SUPPRIMER LA FAMILLE =========================

   Le droit à l'effacement, pour de bon : tout disparaît du serveur, pour tous
   les membres. Irréversible, donc :
   - on propose de récupérer les données AVANT, pas après ;
   - on fait recopier le nom de la famille : un appui malheureux ne suffit pas ;
   - on montre chaque étape pendant qu'elle se déroule ;
   - et si ça s'interrompt, on dit pourquoi et on permet de reprendre. */

Formulaires.supprimerFamille = function () {
  if (!estAdmin()) { toast("Seul un administrateur peut supprimer la famille"); return; }
  const nom = etat.famille.nom || "";
  const code = etat.famille.code;
  const partage = Store.mode === "nuage";
  let drapeauPose = false;

  const html = '<form id="f-suppr-famille">' +
    '<div class="bandeau">🔴<div><b>Tout sera effacé, pour tous les membres, et rien ne pourra ' +
    "être récupéré.</b><br>Membres, tâches, points et leur historique, cadeaux, menus, courses, " +
    "réserve, recettes, pense-bêtes" +
    (partage ? ", invitations en cours, et les recettes que vous avez publiées dans le catalogue commun" : "") +
    ".</div></div>" +
    '<button type="button" class="btn plein doux" data-role="exporter" style="margin:.4rem 0 1rem">' +
    "📦 D'abord, récupérer les données</button>" +
    '<label class="champ"><span>Pour confirmer, recopiez le nom de la famille : <b>' + esc(nom) + "</b></span>" +
    '<input type="text" name="nom" autocomplete="off" spellcheck="false"></label>' +
    '<p class="aide centre" id="suivi-suppr" style="min-height:1.4em;margin:.6rem 0"></p>' +
    '<div class="rangee-btn" style="margin-top:.6rem">' +
    '<button type="button" class="btn" data-action="fermer">Annuler</button>' +
    '<button type="submit" class="btn danger">Supprimer définitivement</button></div></form>';

  ouvrirFeuille("Supprimer la famille", html, (f) => {
    f.querySelector('[data-role="exporter"]').onclick = () => Formulaires.exporterDonnees();
    const suivi = f.querySelector("#suivi-suppr");
    const bouton = f.querySelector('[type="submit"]');

    f.onsubmit = async (ev) => {
      ev.preventDefault();
      /* Tolérant sur la forme (majuscules, accents, espaces), intransigeant
         sur le fond : c'est bien CETTE famille qu'on veut supprimer. */
      const saisi = pourChercher(String(new FormData(ev.target).get("nom") || "")).trim();
      if (!saisi || saisi !== pourChercher(nom).trim()) {
        toast("Recopiez exactement le nom de la famille");
        return;
      }
      bouton.disabled = true;
      f.querySelector('[data-action="fermer"]').disabled = true;
      const bilan = await supprimerFamilleEntiere(code, (m) => { suivi.textContent = m; }, drapeauPose);
      if (bilan.ok) {
        fermerFeuille();
        $("#ecran-app").hidden = true;
        $("#ecran-connexion").hidden = false;
        Connexion.aller("familleSupprimee", { bilan: bilan });
        return;
      }
      /* Si l'on est allé au-delà du drapeau, il est posé : la prochaine
         tentative ne doit pas essayer de le réécrire. */
      if (bilan.etape !== "drapeau") drapeauPose = true;
      bouton.disabled = false;
      bouton.textContent = "Reprendre la suppression";
      f.querySelector('[data-action="fermer"]').disabled = false;
      suivi.textContent = "⚠️ " + motifEchecSuppression(bilan);
    };
  });
};
