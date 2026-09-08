/* =========================================================================
   TRIBU — dessin des ecrans
   =========================================================================
   Chaque fonction de `Vues` renvoie le HTML d'un onglet.
   `Connexion` gere les ecrans d'avant-connexion (creer / rejoindre / code).
   ========================================================================= */

/* ------------------------- petits morceaux reutilisables ------------------------- */

function avatarDe(m, taille) {
  if (!m) return '<span class="avatar ' + (taille || "sm") + '">❓</span>';
  return '<span class="avatar ' + (taille || "sm") + '">' + esc(m.emoji || "🙂") + "</span>";
}
function nomDe(idm) {
  const m = membre(idm);
  return m ? m.prenom : "quelqu'un";
}
/* Ancre facultative sur une carte : sert à sauter directement à une section
   de l'administration, qui compte maintenant dix cartes. */
function blocAncre(ancre, titre, contenu, lienTexte, lienAction, lienVue) {
  const html = bloc(titre, contenu, lienTexte, lienAction, lienVue);
  return html ? html.replace('<div class="carte">', '<div class="carte" id="admin-' + ancre + '">') : html;
}

function bloc(titre, contenu, lienTexte, lienAction, lienVue) {
  /* Une carte qui renvoie vers un onglet masqué n'a plus lieu d'être : sinon
     son bouton « Tout voir » ramènerait bêtement à l'accueil. */
  if (lienVue && lienVue !== "accueil" && ongletMasque(lienVue)) return "";
  return '<div class="carte"><div class="carte-titre">' + titre +
    (lienTexte ? '<button class="lien" data-action="' + lienAction +
      (lienVue ? '" data-vue="' + lienVue : "") + '">' + esc(lienTexte) + "</button>" : "") +
    "</div>" + contenu + "</div>";
}
function rienDu(emoji, texte) {
  return '<div class="vide"><span class="emoji">' + emoji + "</span>" + texte + "</div>";
}
function etiquetteFrequence(f) {
  const n = f === "jour" ? "Chaque jour" : f === "mois" ? "Chaque mois" : "Chaque semaine";
  return '<span class="etiquette">' + n + "</span>";
}

const Vues = {};

/* ================================ ACCUEIL ================================ */

/* La nouveauté doit se voir là où l'on regarde. Une pastille de 12 pixels sur
   l'avatar, personne ne la remarque : on annonce donc en toutes lettres, sur
   l'accueil et sur les recettes, ce qui attend d'être ajouté. */
/* La jauge de l'objectif commun. Rendue au même endroit sur l'accueil et
   dans Points & cadeaux : c'est la même information, elle doit avoir la même
   tête aux deux endroits. */
function carteObjectif() {
  const o = objectifActif();
  if (!o) return "";
  const pts = pointsCollectifs();
  const part = Math.min(100, Math.round(pts / o.cible * 100));
  const atteint = pts >= o.cible;

  return '<div class="carte" style="text-align:center">' +
    '<div style="font-size:2rem;line-height:1">' + esc(o.emoji || "🎯") + "</div>" +
    '<div style="font-family:var(--font-display);font-size:1.15rem;margin:.25rem 0 .1rem">' +
    esc(o.nom) + "</div>" +
    '<div class="aide" style="margin-bottom:.7rem">Objectif de toute la tribu' +
    (o.faits ? " • " + o.faits + " déjà atteint" + (o.faits > 1 ? "s" : "") : "") + "</div>" +
    '<div class="barre-progression"><i style="width:' + part + '%"></i></div>' +
    '<div style="margin-top:.5rem;font-weight:700">' + pts + " / " + o.cible + " points</div>" +
    (atteint
      ? '<div class="bandeau info" style="margin:.7rem 0 0;text-align:left">🎉<div>' +
        "<b>Objectif atteint !</b> À vous de fêter ça." +
        (estAdmin() ? " Puis relancez-en un depuis l'administration." : "") + "</div></div>"
      : '<div class="aide" style="margin-top:.35rem">Encore ' + (o.cible - pts) +
        " points, tous ensemble</div>") +
    "</div>";
}

function bandeauMaj() {
  const maj = misesAJour();
  if (!maj.length) return "";
  return '<div class="bandeau info ligne-maj" data-action="maj-liste">✨<div><b>' +
    maj.map((m) => esc(m.detail)).join(" — ") + "</b><br>" +
    "Appuyez ici pour voir ce qui est nouveau et le mettre à jour.</div></div>";
}

/* Combien de lignes un bloc de l'accueil affiche au maximum. Au-delà, on
   annonce le reste et on renvoie sur l'onglet dédié : l'accueil doit rester
   lisible d'un coup d'oeil, même une semaine où tout s'accumule. */
const MAX_LIGNES_ACCUEIL = 5;

function resteAVoir(n) {
  if (n <= 0) return "";
  return '<p class="aide" style="margin:.6rem 0 0">+ ' + n + " autre" +
    (n > 1 ? "s" : "") + " — <b>Tout voir</b></p>";
}

/* Le bandeau de déménagement, sur l'ancienne adresse uniquement. Il passe
   avant tout le reste : c'est la seule information de cet écran qui a une
   date de péremption. */
function bandeauDemenagement() {
  if (!surAncienneAdresse()) return "";
  return '<div class="bandeau ligne-maj" data-action="demenagement">🚚<div>' +
    "<b>Ma Tribu a une nouvelle adresse : matribu-app.fr</b><br>" +
    "Cette adresse-ci continue de fonctionner, rien ne presse. " +
    "Appuyez ici pour savoir comment déménager votre famille.</div></div>";
}

Vues.accueil = function () {
  const h = [];
  const heure = new Date().getHours();
  const salut = heure < 5 ? "Bonne nuit" : heure < 12 ? "Bonjour" : heure < 18 ? "Bon après-midi" : "Bonsoir";
  const auj = new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });

  h.push('<h2 class="titre-section">' + salut + " " + esc(moi.prenom) + " 👋</h2>");
  h.push('<p class="aide" style="margin:-.6rem 0 1rem;text-transform:capitalize">' + esc(auj) + "</p>");

  h.push(bandeauDemenagement());

  /* Le rappel « c'est une bêta » reste discret : il ne doit pas voler la
     vedette aux bandeaux qui, eux, demandent une action. */
  h.push('<div class="bandeau discret">🧪<div><b>Version d\'essai (' + esc(VERSION) + ').</b> ' +
    "Des bugs sont possibles et les données pourraient changer de forme. " +
    '<button class="lien" data-action="retour">Signaler un problème ou proposer une idée</button></div></div>');

  h.push(bandeauMaj());

  /* Le conseil doit arriver AVANT le piège, pas après : une fois l'icône
     posée sur l'écran d'accueil, on se retrouve dans une application vierge
     dont on ne sait pas sortir. Tant qu'on est connecté ici, le code est à
     une pression. Se masque définitivement. */
  if (Store.mode === "nuage" && !ouvertDepuisIcone() &&
    !localStorage.getItem("tribu:conseilEcranAccueil")) {
    h.push('<div class="bandeau info">📱<div><b>Vous comptez ajouter Ma Tribu à votre ' +
      "écran d'accueil ?</b><br>L'icône est une application séparée : il lui faudra " +
      "son propre code, et celui qui vous a servi ici ne fonctionne plus. " +
      "Créez-le maintenant, pendant que vous êtes connecté." +
      '<div class="rangee-btn" style="margin-top:.6rem">' +
      '<button class="btn mini" data-action="masquer-conseil-icone">Plus tard</button>' +
      '<button class="btn mini principal" data-action="mon-appareil">Créer mon code</button>' +
      "</div></div></div>");
  }

  if (Store.mode === "local") {
    h.push('<div class="bandeau">⚠️<div><b>Mode hors partage.</b> Les données restent sur cet appareil. ' +
      "Pour partager avec la famille, remplissez le fichier <b>firebase-config.js</b> (voir le guide).</div></div>");
  }

  /* Premiers pas : tant que la tribu n'est pas installée, on dit quoi faire.
     La carte disparaît d'elle-même une fois tout coché. */
  if (estAdmin() && !localStorage.getItem("tribu:conseilsMasques")) {
    const aInviter = etat.membres.filter((m) => !m.sansAppareil && !aUnAppareil(m));
    const partagees = etat.taches.filter((t) => participantsValides(t).length > 1).length;
    const etapes = [
      {
        fait: etat.membres.length > 1,
        titre: "Ajouter les membres de la famille",
        detail: "Chaque personne a son profil, ses points et ses tâches.",
        action: "membre-nouveau", bouton: "Ajouter"
      },
      {
        fait: etat.membres.length > 1 && !aInviter.length,
        titre: "Envoyer une invitation à chacun",
        detail: aInviter.length
          ? "En attente : " + aInviter.map((m) => m.prenom).join(", ") +
          ". Un lien par personne, et un par téléphone."
          : "C'est le lien d'invitation qui donne l'accès — pas le repère de la tribu.",
        action: "inviter", bouton: "Inviter"
      },
      {
        fait: partagees > 0,
        titre: "Répartir les tâches",
        detail: "Cochez plusieurs personnes sur une tâche et activez « Chacun son tour » : " +
          "l'application changera d'assigné toute seule.",
        action: "aller", vue: "taches", bouton: "Ouvrir"
      }
    ];
    const restantes = etapes.filter((e) => !e.fait);
    if (restantes.length) {
      h.push(bloc("🚀 Premiers pas <span class=\"etiquette\">" +
        (etapes.length - restantes.length) + "/" + etapes.length + "</span>",
        etapes.map((e) =>
          '<div class="ligne' + (e.fait ? " fait" : "") + '">' +
          '<span class="etape' + (e.fait ? " ok" : "") + '">' + (e.fait ? "✓" : "") + "</span>" +
          '<div class="ligne-corps"><b>' + esc(e.titre) + "</b>" +
          (e.fait ? "" : "<small>" + esc(e.detail) + "</small>") + "</div>" +
          (e.fait ? "" : '<button class="btn mini principal" data-action="' + e.action +
            (e.vue ? '" data-vue="' + e.vue : "") + '">' + esc(e.bouton) + "</button>") +
          "</div>").join("") +
        '<button class="lien" data-action="masquer-conseils" style="margin-top:.7rem">' +
        "Masquer ces conseils</button>"));
    }
  }

  /* Mes taches.
     L'accueil est un tableau de bord, pas la liste complète. Sans limite, une
     semaine chargée repoussait le menu du soir, l'agenda et les courses à
     trois écrans de défilement. On montre les premières, on renvoie le reste
     sur l'onglet Tâches — dont le lien est déjà là, à côté du titre. */
  const mes = mesTachesAFaire();
  const mesMontrees = mes.slice(0, MAX_LIGNES_ACCUEIL);
  h.push(bloc("🧹 Mes tâches" + (mes.length ? ' <span class="etiquette chaud">' + mes.length + "</span>" : ""),
    mes.length
      ? mesMontrees.map((x) => ligneTache(x, true)).join("") +
        resteAVoir(mes.length - mesMontrees.length)
      : rienDu("🎉", "Rien à faire pour le moment. Profitez-en !"),
    "Tout voir", "aller", "taches"));

  /* A valider (admin) */
  if (estAdmin()) {
    const aValider = tachesAValider();
    const demandes = echangesEnAttente();
    if (aValider.length || demandes.length) {
      const l = [];
      aValider.forEach((x) => {
        l.push('<div class="ligne">' + avatarDe(membre(x.et.parQui)) +
          '<div class="ligne-corps"><b>' + esc(x.t.emoji + " " + x.t.nom) + "</b><small>" +
          esc(nomDe(x.et.parQui)) + " dit l'avoir faite • +" + x.t.points + " pts</small></div>" +
          '<button class="btn mini danger" data-action="tache-refuser" data-id="' + x.t.id + '">✕</button>' +
          '<button class="btn mini principal" data-action="tache-valider" data-id="' + x.t.id + '">Valider</button>' +
          "</div>");
      });
      demandes.forEach((e) => {
        l.push('<div class="ligne">' + avatarDe(membre(e.membreId)) +
          '<div class="ligne-corps"><b>' + esc((e.cadeauEmoji || "🎁") + " " + e.cadeauNom) + "</b><small>" +
          esc(nomDe(e.membreId)) + " demande ce cadeau • " + e.cout + " pts</small></div>" +
          '<button class="btn mini danger" data-action="echange-refuser" data-id="' + e.id + '">✕</button>' +
          '<button class="btn mini principal" data-action="echange-accorder" data-id="' + e.id + '">Accorder</button>' +
          "</div>");
      });
      if (!ongletMasque("taches")) h.push(bloc("✅ À valider", l.join("")));
    }

    /* Les repas cuisinés attendent la même validation que les tâches : sans
       ce rappel, les points de la cuisine ne tomberaient jamais. */
    const rav = repasAValider();
    if (rav.length && !ongletMasque("menus")) {
      h.push(bloc("🍽️ Repas à valider" +
        ' <span class="etiquette chaud">' + rav.length + "</span>",
        rav.map((x) => {
          const r = x.repas.recetteId ? etat.recettes.find((y) => y.id === x.repas.recetteId) : null;
          return '<div class="ligne">' + avatarDe(membre(x.etat.parQui)) +
            '<div class="ligne-corps"><b>' + esc(r ? r.nom : (x.repas.texte || "Repas")) + "</b><small>" +
            esc(nomDe(x.etat.parQui)) + " a cuisiné • " + esc(x.jour) + " " + esc(x.moment) +
            "</small></div>" +
            '<button class="btn mini principal" data-action="repas-valider" data-semaine="' +
            esc(x.cleSem) + '" data-jour="' + esc(x.jour) + '" data-moment="' +
            esc(x.moment) + '">Valider</button></div>';
        }).join("")));
    }
  }

  /* Menu du jour.
     Il passe avant les tâches des enfants : « qu'est-ce qu'on mange ce soir »
     est la question qu'on se pose le plus souvent dans une journée, et elle
     était reléguée au quatrième bloc, hors de l'écran. */
  const cleSem = cleSemaine(new Date());
  const jour = JOURS[(new Date().getDay() + 6) % 7];
  const sem = etat.repas[cleSem] || {};
  const midi = sem[jour + "-midi"], soir = sem[jour + "-soir"];
  const nomRepas = (c) => {
    if (!c) return null;
    /* Une absence est une réponse, pas un vide : « — non prévu » serait faux. */
    if (estAbsence(c)) {
      const mo = infoMotif(c.motif);
      return mo.emoji + " " + (c.texte || mo.nom);
    }
    if (c.recetteId) {
      const r = etat.recettes.find((x) => x.id === c.recetteId);
      return r ? (r.emoji || "🍽️") + " " + r.nom : null;
    }
    return c.texte ? "🍽️ " + c.texte : null;
  };
  const nm = nomRepas(midi), ns = nomRepas(soir);
  h.push(bloc("🍽️ Aujourd'hui au menu",
    (nm || ns)
      ? '<div class="ligne"><div class="ligne-corps"><small>Midi</small><b>' + esc(nm || "— non prévu") + "</b></div></div>" +
      '<div class="ligne"><div class="ligne-corps"><small>Soir</small><b>' + esc(ns || "— non prévu") + "</b></div></div>"
      : rienDu("🤷", "Aucun repas prévu aujourd'hui."),
    "Voir la semaine", "aller", "menus"));

  /* Tâches des enfants sans téléphone : c'est le parent qui coche.
     Même limite que « Mes tâches » : ce bloc souffrait du même défaut. */
  if (estAdmin()) {
    const enfants = tachesDesEnfants();
    if (enfants.length && !ongletMasque("taches")) {
      const enfantsMontres = enfants.slice(0, MAX_LIGNES_ACCUEIL);
      h.push(bloc("🧒 À faire pour les enfants" +
        ' <span class="etiquette chaud">' + enfants.length + "</span>",
        enfantsMontres.map((x) => {
          const qui = membre(x.assigne);
          return '<div class="ligne">' + avatarDe(qui) +
            '<div class="ligne-corps"><b>' + esc((x.t.emoji || "🧹") + " " + x.t.nom) + "</b><small>" +
            esc(qui.prenom) + " • +" + x.t.points + " pts • " + libellePeriode(x.t.frequence) + "</small></div>" +
            '<button class="btn mini principal" data-action="tache-fait" data-id="' + x.t.id + '">C\'est fait</button>' +
            "</div>";
        }).join("") +
        resteAVoir(enfants.length - enfantsMontres.length) +
        '<p class="aide" style="margin-top:.6rem">Cocher ici vaut validation : les points sont ' +
        "crédités tout de suite à l'enfant.</p>"));
    }
  }

  /* Agenda : la question « qu'est-ce qu'on a cette semaine ? » se pose tous
     les jours, on y répond donc sur l'accueil, sans avoir à ouvrir l'onglet. */
  if (!ongletMasque("notes")) {
    const auj = isoDate(new Date());
    const retard = notesAVenir().filter((n) => estRendezVous(n) && n.date < auj);
    /* Se limiter à quatre jours ne suffisait pas : rien ne bornait le nombre
       de rendez-vous DANS ces jours-là. Une semaine bien remplie faisait à
       elle seule plus d'un écran et demi, et repoussait les courses tout en
       bas. On tient donc un budget de lignes, tous jours confondus. */
    const tousJours = agendaParJour("", 14).filter((j) => j.date >= auj);
    const jours = tousJours.slice(0, 4);
    const totalRdv = tousJours.reduce((n, j) => n + j.notes.length, 0);
    const libres = notesAVenir().filter((n) => !estRendezVous(n)).slice(0, 3);

    let corps = "";
    if (retard.length) {
      corps += '<div class="ligne" style="border:none;padding-bottom:.2rem">' +
        '<span class="etiquette rouge">' + retard.length + " en retard</span></div>" +
        retard.slice(0, 2).map(ligneNote).join("");
    }
    let budget = MAX_LIGNES_ACCUEIL;
    let affiches = 0;
    jours.forEach((j) => {
      /* Un jour dont on n'a plus la place d'afficher le contenu n'apparaît
         pas du tout : un titre de jour suivi de rien serait déroutant. */
      const prises = budget > 0 ? j.notes.slice(0, budget) : [];
      if (!prises.length) return;
      budget -= prises.length;
      affiches += prises.length;
      const dj = joursEntre(auj, j.date);
      corps += '<div class="ligne" style="border:none;padding:.5rem 0 .1rem">' +
        '<small style="font-weight:700;letter-spacing:.05em;text-transform:uppercase;' +
        'color:var(--ink-muted);font-size:.68rem">' +
        esc(dj === 0 ? "Aujourd’hui" : dj === 1 ? "Demain" : dateJolie(j.date)) +
        "</small></div>" + prises.map((n) => ligneNote(n, true)).join("");
    });
    corps += resteAVoir(totalRdv - affiches);
    if (libres.length) {
      corps += '<div class="ligne" style="border:none;padding:.5rem 0 .1rem">' +
        '<small style="font-weight:700;letter-spacing:.05em;text-transform:uppercase;' +
        'color:var(--ink-muted);font-size:.68rem">Pense-bêtes</small></div>' +
        libres.map(ligneNote).join("");
    }
    h.push(bloc("🔔 Agenda & rappels",
      corps || rienDu("😌", "Rien de prévu.<br>Appuyez sur <b>Tout voir</b> pour " +
        "noter un rendez-vous."),
      "Tout voir", "aller", "notes"));
  }

  /* Courses : une ligne par liste, les listes du mois n'ont rien d'urgent */
  const listes = listesCourses();
  const lignesCourses = listes.map((l) => {
    const restants = coursesDe(l.id).filter((c) => !c.coche);
    if (!restants.length) return "";
    const t = typeListe(l);
    return '<button class="ligne" data-action="liste-choisir" data-valeur="' + l.id +
      '" style="width:100%;background:none;border:none;border-top:1px solid var(--border);text-align:left">' +
      '<span style="font-size:1.2rem">' + esc(l.emoji || t.emoji) + "</span>" +
      '<span class="ligne-corps"><b>' + esc(l.nom) + " · " + restants.length + " article" +
      (restants.length > 1 ? "s" : "") + "</b><small>" +
      (t.alerte ? "" : "en préparation • ") +
      esc(restants.slice(0, 3).map((c) => c.nom).join(", ")) +
      (restants.length > 3 ? "…" : "") + "</small></span></button>";
  }).filter(Boolean).join("");

  /* Ce que la réserve a à dire. Ces deux alertes existaient déjà, mais il
     fallait ouvrir Courses ▸ Ma réserve pour les découvrir — autant dire
     jamais. Un anti-gaspi qu'on ne croise pas ne sert à rien. */
  const sousMini = stockSousMinimum();
  const bientotPerime = stockBientotPerime();
  let alerteReserve = "";
  if (sousMini.length || bientotPerime.length) {
    const bouts = [];
    if (sousMini.length) {
      bouts.push("<b>" + sousMini.length + " sous le minimum</b>");
    }
    if (bientotPerime.length) {
      bouts.push("<b>" + bientotPerime.length + " à consommer vite</b>");
    }
    const noms = sousMini.concat(bientotPerime).slice(0, 3).map((s) => s.nom);
    alerteReserve = '<button class="ligne" data-action="reserve-ouvrir" ' +
      'style="width:100%;background:none;border:none;border-top:1px solid var(--border);text-align:left">' +
      '<span style="font-size:1.2rem">🥫</span>' +
      '<span class="ligne-corps"><b>Ma réserve · ' + bouts.join(" · ") + "</b><small>" +
      esc(noms.join(", ")) + (sousMini.length + bientotPerime.length > 3 ? "…" : "") +
      "</small></span></button>";
  }

  h.push(bloc("🛒 Courses",
    (lignesCourses + alerteReserve) || rienDu("✨", "Rien à acheter pour le moment."),
    "Ouvrir", "aller", "courses"));

  /* Classement */
  const cl = classement();
  if (cl.length > 1) {
    h.push(carteObjectif());
    /* Le bilan se propose quand la semaine se termine — samedi, dimanche et
       lundi. Le reste du temps il reste accessible depuis Points & cadeaux :
       une carte de plus tous les jours serait du bruit. */
    const jourSem = new Date().getDay();          // 0 = dimanche, 6 = samedi
    if (jourSem === 0 || jourSem === 6 || jourSem === 1) {
      const bs = bilanSemaine(cleSemaine(new Date()));
      if (!bs.rien) {
        h.push(bloc("🏁 La semaine en bref",
          '<div class="ligne ligne-maj" data-action="bilan-semaine">' +
          '<span style="font-size:1.4rem">🏁</span>' +
          '<div class="ligne-corps"><b>' + bs.taches + " tâche" + (bs.taches > 1 ? "s" : "") +
          ", " + bs.repasCuisines + " repas, " + bs.pointsGagnes + " points</b>" +
          "<small>Appuyez pour voir le détail</small></div></div>"));
      }
    }
    h.push(bloc("🌟 Classement de la tribu",
      cl.map((x, i) =>
        '<div class="ligne"><span class="rang' + (i === 0 ? " or" : "") + '">' + (i + 1) + "</span>" +
        avatarDe(x.m) + '<div class="ligne-corps"><b>' + esc(x.m.prenom) + "</b></div>" +
        '<span class="etiquette or">' + x.pts + " pts</span></div>").join(""),
      "Boutique", "aller", "points"));
  }

  return h.join("");
};

/* ================================ TACHES ================================ */

function ligneTache(x, compact) {
  const t = x.t, et = x.et;
  const jeSuisAssigne = x.assigne === moi.id;
  const boutons = [];

  if (et.statut === "afaire") {
    if (jeSuisAssigne || estAdmin()) {
      boutons.push('<button class="btn mini principal" data-action="tache-fait" data-id="' + t.id + '">C\'est fait</button>');
    }
  } else if (et.statut === "fait") {
    if (estAdmin()) {
      boutons.push('<button class="btn mini danger" data-action="tache-refuser" data-id="' + t.id + '">✕</button>');
      boutons.push('<button class="btn mini principal" data-action="tache-valider" data-id="' + t.id + '">Valider</button>');
    } else if (et.parQui === moi.id) {
      boutons.push('<button class="btn mini" data-action="tache-annuler" data-id="' + t.id + '">Annuler</button>');
    }
  }

  let statutHtml = "";
  if (et.statut === "fait") statutHtml = '<span class="etiquette chaud">à valider</span>';
  else if (et.statut === "valide") statutHtml = '<span class="etiquette vert">✓ validée</span>';

  const qui = membre(x.assigne);
  const sous = compact
    ? "+" + t.points + " pts • " + libellePeriode(t.frequence)
    : (qui ? qui.prenom : "personne d'assigné") + " • +" + t.points + " pts";

  return '<div class="ligne' + (et.statut === "valide" ? " fait" : "") + '">' +
    (compact ? "" : avatarDe(qui)) +
    '<div class="ligne-corps"><b>' + esc((t.emoji || "🧹") + " " + t.nom) + "</b>" +
    "<small>" + esc(sous) + "</small>" +
    (statutHtml || (!compact ? etiquetteFrequence(t.frequence) : "")
      ? '<span class="etiquettes">' + statutHtml + (!compact ? etiquetteFrequence(t.frequence) : "") + "</span>"
      : "") +
    "</div>" +
    (estAdmin() && !compact
      ? '<button class="btn mini icone" data-action="tache-editer" data-id="' + t.id + '">✏️</button>' : "") +
    boutons.join("") + "</div>";
}

Vues.taches = function () {
  const h = [];
  h.push('<div class="segments">' +
    '<button class="' + (ui.filtreTaches === "moi" ? "on" : "") + '" data-action="taches-filtre" data-valeur="moi">Les miennes</button>' +
    '<button class="' + (ui.filtreTaches === "toutes" ? "on" : "") + '" data-action="taches-filtre" data-valeur="toutes">Toute la famille</button>' +
    "</div>");

  const toutes = tachesDuMoment();
  if (!toutes.length) {
    h.push(rienDu("🧹", estAdmin()
      ? "Aucune tâche pour l'instant.<br>Appuyez sur <b>+</b> pour en créer une."
      : "Aucune tâche pour l'instant."));
    return h.join("");
  }

  if (estAdmin()) {
    const av = tachesAValider();
    if (av.length) {
      h.push(bloc("✅ En attente de votre validation", av.map((x) => ligneTache(x, false)).join("")));
    }
  }

  const liste = ui.filtreTaches === "moi"
    ? toutes.filter((x) => x.assigne === moi.id)
    : toutes;

  if (!liste.length) {
    h.push(rienDu("🎉", "Aucune tâche ne vous est attribuée en ce moment."));
    return h.join("");
  }

  [["jour", "Chaque jour"], ["semaine", "Chaque semaine"], ["mois", "Chaque mois"]].forEach(([f, titre]) => {
    const g = liste.filter((x) => x.t.frequence === f);
    if (!g.length) return;
    const faites = g.filter((x) => x.et.statut === "valide").length;
    h.push('<div class="sous-titre"><h3>' + titre + "</h3><span class=\"etiquette\">" +
      faites + "/" + g.length + " ✓</span></div>");
    h.push('<div class="carte">' + g.map((x) => ligneTache(x, false)).join("") + "</div>");
  });

  return h.join("");
};

/* ================================ COURSES ================================ */

Vues.courses = function () {
  const h = [];
  const surStock = ui.ongletCourses === "stock";
  const bas = stockSousMinimum().length;

  h.push('<div class="segments">' +
    '<button class="' + (!surStock ? "on" : "") + '" data-action="courses-onglet" data-valeur="liste">' +
    "🛒 Mes listes</button>" +
    '<button class="' + (surStock ? "on" : "") + '" data-action="courses-onglet" data-valeur="stock">' +
    "🥫 Ma réserve" + (bas ? " · " + bas : "") + "</button></div>");

  return h.join("") + (surStock ? vueReserve() : vueListeCourses());
};

/* ---------------------------- les listes de courses ---------------------------- */

function vueListeCourses() {
  const h = [];
  const listes = listesCourses();
  const active = listeCourante();
  const t = typeListe(active);

  /* Sélecteur de listes */
  h.push('<div class="puces" style="margin-bottom:.8rem">' +
    listes.map((l) => {
      const restants = coursesDe(l.id).filter((c) => !c.coche).length;
      return '<button class="puce ' + (l.id === active.id ? "on" : "") +
        '" data-action="liste-choisir" data-valeur="' + l.id + '">' +
        esc(l.emoji || typeListe(l).emoji) + " " + esc(l.nom) +
        (restants ? " · " + restants : "") + "</button>";
    }).join("") +
    '<button class="puce" data-action="liste-nouvelle">＋</button></div>');

  /* Entête de la liste choisie */
  h.push('<div class="entete-liste">' +
    "<div><b>" + esc(active.nom) + "</b><small>" + esc(t.nom) +
    (active.magasin ? " • " + esc(active.magasin) : "") + "</small></div>" +
    '<button class="btn mini icone" data-action="liste-editer">✏️</button></div>');

  if (!t.alerte) {
    h.push('<div class="bandeau info">📅<div>Liste préparée tranquillement : elle ne compte ' +
      "pas dans les rappels de l'accueil.</div></div>");
  }

  h.push('<form id="form-course-rapide" style="display:flex;gap:.5rem;margin:0 0 .4rem">' +
    '<input type="text" id="champ-course" placeholder="pain, lait, œufs…" autocomplete="off">' +
    '<button class="btn principal" type="submit" style="flex-shrink:0">Ajouter</button></form>' +
    '<p class="aide" style="margin:0 0 1rem">Séparez par des virgules pour en ajouter ' +
    'plusieurs. <button class="lien" data-action="courses-plusieurs">Coller une liste</button></p>');

  const bas = stockSousMinimum();
  if (bas.length && t.alerte) {
    h.push('<div class="bandeau">🥫<div><b>' + bas.length + " article(s) sous le minimum</b> dans votre réserve. " +
      '<button class="lien" data-action="stock-racheter">Les ajouter à cette liste</button></div></div>');
  }

  const dansLaListe = coursesDe(active.id);
  const actifs = dansLaListe.filter((c) => !c.coche);
  const coches = dansLaListe.filter((c) => c.coche);

  if (!dansLaListe.length) {
    h.push(rienDu("🛒", "Cette liste est vide.<br>Tapez un article ci-dessus, ou remplissez-la " +
      "depuis l'onglet Menus."));
    return h.join("");
  }

  const enVrac = actifs.filter((c) => c.vrac).length;
  if (enVrac) {
    h.push('<div class="bandeau">🫙<div><b>' + enVrac + " article(s) en vrac</b> : pensez aux " +
      "bocaux et aux sacs réutilisables.</div></div>");
  }

  const parRayon = {};
  actifs.forEach((c) => { (parRayon[c.rayon] = parRayon[c.rayon] || []).push(c); });

  const ordre = RAYONS.concat(Object.keys(parRayon).filter((r) => !RAYONS.includes(r)));
  ordre.forEach((r) => {
    const l = parRayon[r];
    if (!l || !l.length) return;
    h.push('<div class="sous-titre"><h3>' + esc(r) + '</h3><span class="etiquette">' + l.length + "</span></div>");
    h.push('<div class="carte">' + l.map(ligneCourse).join("") + "</div>");
  });

  if (coches.length) {
    h.push('<div class="sous-titre"><h3>Dans le panier</h3>' +
      '<span class="etiquette vert">' + coches.length + "</span></div>");
    h.push('<div class="carte">' + coches.map(ligneCourse).join("") + "</div>");
    /* Au magasin, c'est le geste qu'on cherche : un bouton franc, pas un lien. */
    h.push('<button class="btn principal plein" data-action="courses-vider" ' +
      'style="margin-bottom:.5rem">✅ Terminer les courses (' + coches.length + ")</button>");
    h.push('<p class="aide centre">Les articles cochés quittent la liste et ' +
      (reserveAutomatique() ? "rejoignent votre réserve." : "vous serez consultée pour la réserve.") +
      ' <button class="lien" data-action="reserve-auto">changer</button></p>');
  }
  return h.join("");
}

function ligneCourse(c) {
  const q = formaterQte(c.qte, c.unite);
  const details = [q, c.vrac ? "🫙 vrac" : ""].filter(Boolean).join(" • ");
  return '<div class="ligne' + (c.coche ? " fait" : "") + '">' +
    '<button class="coche' + (c.coche ? " on" : "") + '" data-action="course-toggle" data-id="' + c.id + '">✓</button>' +
    '<div class="ligne-corps"><b>' + esc(c.nom) + "</b>" +
    (details ? "<small>" + esc(details) + "</small>" : "") + "</div>" +
    (listesCourses().length > 1
      ? '<button class="btn mini icone" data-action="course-deplacer" data-id="' + c.id + '">↔</button>' : "") +
    '<button class="btn mini icone" data-action="course-editer" data-id="' + c.id + '">✏️</button>' +
    '<button class="btn mini icone" data-action="course-suppr" data-id="' + c.id + '">🗑️</button></div>';
}

/* ------------------------------- la réserve ------------------------------- */

/* Poser plusieurs articles d'un coup. C'est aussi la porte d'entrée de la
   dictée : le micro du clavier remplit ce champ comme n'importe quel autre,
   et « du riz des pâtes et du lait » donne bien trois articles. */
function champRapideStock() {
  return '<form id="form-stock-rapide" style="display:flex;gap:.5rem;margin:0 0 .4rem">' +
    '<input type="text" id="champ-stock" placeholder="riz, pâtes, lait…" autocomplete="off">' +
    '<button class="btn principal" type="submit" style="flex-shrink:0">Ajouter</button></form>' +
    '<p class="aide" style="margin:0 0 1rem">Séparez par des virgules, ou dictez avec le ' +
    "micro de votre clavier. Les quantités se règlent ensuite.</p>";
}

function vueReserve() {
  const h = [];
  if (!etat.stock.length) {
    h.push(champRapideStock());
    h.push(rienDu("🥫",
      "Votre réserve est vide.<br>Posez ci-dessus ce que vous gardez " +
      "en permanence : pâtes, conserves, farine, lessive…<br><br>" +
      "Indiquez ensuite une <b>quantité minimum</b> et l'application vous préviendra " +
      "quand il faut racheter."));
    return h.join("");
  }
  h.push(champRapideStock());

  /* Ce qui va se perdre passe avant ce qui manque : on peut racheter demain,
     on ne peut pas rattraper un yaourt périmé. */
  const presses = stockBientotPerime();
  if (presses.length) {
    h.push('<div class="bandeau">⏳<div><b>À finir bientôt : ' +
      esc(presses.map((s) => s.nom).join(", ")) + "</b><br>" +
      "Le générateur de menus proposera en priorité les plats qui les utilisent.</div></div>");
  }

  const bas = stockSousMinimum();
  if (bas.length) {
    h.push('<div class="bandeau">⚠️<div><b>À racheter : ' + esc(bas.map((s) => s.nom).join(", ")) + "</b>" +
      '<br><button class="lien" data-action="stock-racheter">Ajouter à la liste de courses</button></div></div>');
  } else {
    h.push('<div class="bandeau info">✅<div>Tout est au-dessus du minimum.</div></div>');
  }

  const parRayon = {};
  etat.stock.forEach((s) => { (parRayon[s.rayon] = parRayon[s.rayon] || []).push(s); });
  const ordre = RAYONS.concat(Object.keys(parRayon).filter((r) => !RAYONS.includes(r)));

  ordre.forEach((r) => {
    const l = parRayon[r];
    if (!l || !l.length) return;
    h.push('<div class="sous-titre"><h3>' + esc(r) + '</h3><span class="etiquette">' + l.length + "</span></div>");
    h.push('<div class="carte">' + l.sort((a, b) => a.nom.localeCompare(b.nom)).map(ligneStock).join("") + "</div>");
  });
  return h.join("");
}

/* Ce qui va se perdre doit se voir de loin : c'est la seule information de
   la réserve qui a une date limite. */
function etiquettePeremption(s) {
  const j = joursAvantPeremption(s);
  if (j === null) return "";
  if (j < 0) return '<span class="etiquette rouge">périmé</span>';
  if (j === 0) return '<span class="etiquette rouge">à finir aujourd’hui</span>';
  if (j === 1) return '<span class="etiquette rouge">demain</span>';
  if (j <= 5) return '<span class="etiquette chaud">dans ' + j + " jours</span>";
  return '<span class="etiquette">' + esc(dateJolie(s.peremption)) + "</span>";
}

function ligneStock(s) {
  const mini = nombre(s.mini);
  const q = nombre(s.qte);
  const manque = mini !== null && mini > 0 && (q === null || q < mini);
  return '<div class="ligne">' +
    '<div class="ligne-corps"><b>' + esc(s.nom) + "</b><small>" +
    esc(formaterQte(s.qte, s.unite) || "0") +
    (mini !== null && mini > 0 ? " • minimum " + esc(formaterQte(s.mini, s.unite)) : "") + "</small>" +
    (manque || s.vrac || s.peremption
      ? '<span class="etiquettes">' +
        (manque ? '<span class="etiquette rouge">à racheter</span>' : "") +
        etiquettePeremption(s) +
        (s.vrac ? '<span class="etiquette">🫙 vrac</span>' : "") + "</span>"
      : "") +
    "</div>" +
    '<button class="btn mini" data-action="stock-moins" data-id="' + s.id + '">−</button>' +
    '<button class="btn mini" data-action="stock-plus" data-id="' + s.id + '">+</button>' +
    '<button class="btn mini icone" data-action="stock-editer" data-id="' + s.id + '">✏️</button></div>';
}

/* ================================ MENUS ================================ */

Vues.menus = function () {
  const h = [];
  const lundi = lundiDeCle(ui.semaine);
  const dim = new Date(lundi); dim.setDate(dim.getDate() + 6);
  const fmt = { day: "numeric", month: "short" };
  const estSemaineCourante = ui.semaine === cleSemaine(new Date());

  h.push('<div class="semaine-nav">' +
    '<button data-action="semaine-prec">‹</button>' +
    "<b>" + lundi.toLocaleDateString("fr-FR", fmt) + " – " + dim.toLocaleDateString("fr-FR", fmt) +
    (estSemaineCourante ? " • cette semaine" : "") + "</b>" +
    '<button data-action="semaine-suiv">›</button></div>');

  h.push('<div class="rangee-btn" style="margin-bottom:1rem">' +
    '<button class="btn principal" data-action="menus-generer">🎲 Générer</button>' +
    '<button class="btn doux" data-action="menus-courses">🛒 Aux courses</button>' +
    /* Le raccourci vers les recettes ne sert plus qu'aux familles qui ont
       masqué l'onglet : ailleurs il fait doublon avec la barre du bas et
       vole un tiers de la rangée aux deux vrais boutons de cet écran. */
    (ongletMasque("recettes")
      ? '<button class="btn" data-action="aller" data-vue="recettes">📖 Recettes</button>'
      : "") + "</div>");

  h.push('<div class="rangee-btn" style="margin-bottom:1rem">' +
    '<button class="btn doux" data-action="menus-reprendre">📋 Reprendre une semaine</button>' +
    '<button class="btn doux" data-action="menus-afficher">🖨️ Afficher</button></div>');

  /* Ce que donne la semaine, en un coup d'oeil : c'est le meilleur retour
     sur les nombres demandés au générateur. */
  const compo = compositionSemaine(ui.semaine);
  if (compo.total) {
    h.push('<div class="resume-compo">' +
      CATEGORIES_REPAS.map((c) => '<span title="' + esc(c.nom) + '">' + c.emoji + " " +
        (compo[c.val] || 0) + "</span>").join("") +
      (compo.autre ? '<span title="Autre">🍳 ' + compo.autre + "</span>" : "") + "</div>");
  }

  const sem = etat.repas[ui.semaine] || {};
  const aujIso = isoDate(new Date());

  JOURS.forEach((j, i) => {
    const d = new Date(lundi); d.setDate(d.getDate() + i);
    const cest = isoDate(d) === aujIso;
    h.push('<div class="jour-repas' + (cest ? " aujourdhui" : "") + '">' +
      '<div class="entete"><b>' + j + "</b><small>" + d.toLocaleDateString("fr-FR", fmt) + "</small></div>" +
      caseRepas(j, "midi", sem[j + "-midi"]) +
      caseRepas(j, "soir", sem[j + "-soir"]) + "</div>");
  });

  return h.join("");
};

function caseRepas(jour, moment, contenu) {
  let texte = "à définir", libre = true, emoji = "＋";
  if (contenu) {
    if (estAbsence(contenu)) {
      const mo = infoMotif(contenu.motif);
      texte = contenu.texte || mo.nom;
      emoji = mo.emoji;
      libre = false;
    } else if (contenu.recetteId) {
      const r = etat.recettes.find((x) => x.id === contenu.recetteId);
      if (r) { texte = r.nom; libre = false; emoji = r.emoji || "🍽️"; }
    } else if (contenu.texte) {
      texte = contenu.texte; libre = false; emoji = "📝";
    }
  }
  /* Qui cuisine, et où en est le repas : lisible sans ouvrir la case. */
  const e = etatRepas(ui.semaine, jour, moment);
  const cuisinier = contenu && contenu.cuisinier ? membre(contenu.cuisinier) : null;
  let marque = "";
  if (!libre && !estAbsence(contenu)) {
    const manquants = absentsDuRepas(ui.semaine, jour, moment).length;
    if (e.statut === "valide") marque = '<span class="etiquette vert">✓</span>';
    else if (e.statut === "fait") marque = '<span class="etiquette chaud">à valider</span>';
    else if (manquants) marque = '<span class="etiquette">' +
      Math.max(1, nbConvives() - manquants) + " 🍴</span>";
    else if (cuisinier) marque = '<span class="avatar xs">' + esc(cuisinier.emoji || "🙂") + "</span>";
  }
  return '<button class="case-repas" data-action="repas-case" data-jour="' + jour + '" data-moment="' + moment + '">' +
    '<span class="quand">' + (moment === "midi" ? "Midi" : "Soir") + "</span>" +
    "<span>" + (contenu && contenu.restes ? "♻️" : emoji) + "</span>" +
    '<span class="plat' + (libre || estAbsence(contenu) ? " libre" : "") + '">' + esc(texte) +
    (contenu && contenu.restes ? " <small>(restes)</small>" : "") + "</span>" +
    (marque ? '<span class="marque-repas">' + marque + "</span>" : "") + "</button>";
}

/* ================================ RECETTES ================================ */

Vues.recettes = function () {
  const h = [];
  h.push('<input type="text" id="champ-recherche-recette" placeholder="Rechercher un plat ou un ingrédient…" ' +
    'value="' + esc(ui.rechercheRecette) + '" autocomplete="off" style="margin-bottom:.7rem">');

  const s = infoSaison(saisonActuelle());
  const filtres = [
    ["saison", s.emoji + " De saison"],
    ["thermomix", "🍲 Thermomix"],
    ["perso", "✍️ Mes recettes"],
    ["vege", "🌿 Végé"],
    ["rapide", "⚡ Rapide"],
    ["leger", "🥗 Léger"],
    ["plat", "🍽️ Plats"],
    ["dessert", "🍰 Desserts"]
  ];
  const nomFiltre = (v) => {
    if (v.indexOf("sante:") === 0) {
      const p = infoProfil(v.slice(6));
      return p ? p.emoji + " " + p.nom : v;
    }
    const f = filtres.find((x) => x[0] === v);
    return f ? f[1] : v;
  };

  /* Les filtres se sont multipliés : quatre rangées de puces, c'était 600
     pixels avant la première recette — les trois quarts d'un écran de
     téléphone. Ils se replient donc, et ne s'ouvrent que si on le demande.
     Ce qui est actif reste visible en permanence, sinon on filtrerait sans
     s'en souvenir. */
  const actifs = ui.filtresRecettes.slice();
  h.push('<div class="rangee-btn" style="margin-bottom:.7rem">' +
    '<button class="btn ' + (actifs.length ? "principal" : "doux") + '" data-action="recettes-filtres">' +
    "🔎 Filtrer" + (actifs.length ? " (" + actifs.length + ")" : "") + "</button>" +
    '<button class="btn doux" data-action="recettes-partagees">🌍 Partagées</button></div>');

  if (actifs.length && !ui.filtresOuverts) {
    h.push('<div class="puces" style="margin-bottom:.7rem">' +
      actifs.map((v) => '<button class="puce on" data-action="recettes-filtre" data-valeur="' +
        esc(v) + '">' + nomFiltre(v) + " ✕</button>").join("") +
      '<button class="puce" data-action="recettes-filtre-vider">Tout enlever</button></div>');
  }

  if (ui.filtresOuverts) {
    h.push('<div class="puces" style="margin-bottom:.7rem">' +
      filtres.map(([v, l]) =>
        '<button class="puce ' + (ui.filtresRecettes.includes(v) ? "on" : "") +
        '" data-action="recettes-filtre" data-valeur="' + v + '">' + l + "</button>").join("") +
      "</div>");
    h.push('<div class="sous-titre" style="margin:.2rem 0 .45rem"><h3>Façons de cuisiner</h3>' +
      '<button class="lien" data-action="sante-info">Ça veut dire quoi ?</button></div>');
    const rangeeProfils = (f) => '<div class="puces" style="margin-bottom:.7rem">' +
      profilsDeFamille(f).map((p) => {
        const cle = "sante:" + p.val;
        return '<button class="puce ' + (ui.filtresRecettes.includes(cle) ? "on" : "") +
          '" data-action="recettes-filtre" data-valeur="' + cle + '" title="' + esc(p.resume) + '">' +
          p.emoji + " " + esc(p.nom) + "</button>";
      }).join("") + "</div>";
    h.push(rangeeProfils("cuisine"));
    h.push('<div class="sous-titre" style="margin:.2rem 0 .45rem"><h3>Ce qu’on évite</h3></div>');
    h.push(rangeeProfils("eviter"));
  }

  h.push(bandeauMaj());

  const liste = recettesFiltrees();
  const actif = ui.filtresRecettes.length || ui.rechercheRecette.trim();

  if (!liste.length) {
    h.push(rienDu("📖", actif
      ? "Aucun plat ne correspond.<br><button class=\"lien\" data-action=\"recettes-filtre-vider\">Enlever les filtres</button>"
      : "Aucune recette.<br>Appuyez sur <b>+</b> pour en ajouter une."));
    return h.join("");
  }

  h.push('<div class="sous-titre"><h3>' + liste.length + " plat" + (liste.length > 1 ? "s" : "") +
    (actif ? " sur " + etat.recettes.length : "") + "</h3>" +
    (actif ? '<button class="lien" data-action="recettes-filtre-vider">Tout afficher</button>' : "") +
    "</div>");

  /* Le tri. Avec près de deux cents plats, l'ordre du cahier compte autant
     que les filtres : on le met à portée, juste au-dessus de la liste. */
  h.push('<div class="segments">' +
    [["alpha", "🔤 A → Z"], ["recent", "🕐 Récentes"], ["saison", "☀️ De saison"]].map(([v, l]) =>
      '<button class="' + (ui.triRecettes === v ? "on" : "") +
      '" data-action="recettes-tri" data-valeur="' + v + '">' + l + "</button>").join("") +
    "</div>");

  const ligneRecette = (r) =>
    '<div class="ligne ligne-recette" data-action="recette-voir" data-id="' + r.id + '">' +
    '<span style="font-size:1.4rem">' + esc(r.emoji || "🍽️") + "</span>" +
    '<div class="ligne-corps"><b>' + esc(r.nom) + "</b><small>" +
    (r.ingredients || []).length + " ingrédient" + ((r.ingredients || []).length > 1 ? "s" : "") +
    ((r.etapes || []).length ? " • " + r.etapes.length + " étape" +
      (r.etapes.length > 1 ? "s" : "") : "") +
    (r.origine === "importee" && r.deQui ? " • de " + esc(r.deQui) : "") + "</small>" +
    '<span class="etiquettes">' +
    (r.vegetarien ? '<span class="etiquette vert">végé</span>' : "") +
    (r.rapide ? '<span class="etiquette">rapide</span>' : "") +
    (r.thermomix ? '<span class="etiquette chaud">🍲 robot</span>' : "") +
    (r.type === "leger" ? '<span class="etiquette">léger</span>' : "") +
    (r.lien ? '<span class="etiquette chaud">lien</span>' : "") +
    (r.saisons || []).map((v) => {
      const x = infoSaison(v);
      return x ? '<span class="etiquette' + (v === saisonActuelle() ? " vert" : "") + '">' +
        x.emoji + " " + x.nom.toLowerCase() + "</span>" : "";
    }).join("") +
    profilsDe(r).map((v) => {
      const p = infoProfil(v);
      return p ? '<span class="etiquette sante" title="' + esc(p.nom) + '">' +
        p.emoji + "</span>" : "";
    }).join("") +
    (r.partageId ? '<span class="etiquette vert">🌍 partagée</span>' : "") +
    (r.origine === "importee" ? '<span class="etiquette">importée</span>' : "") +
    "</span></div>" +
    '<button class="btn mini icone" data-action="recette-editer" data-id="' + r.id +
    '" aria-label="Modifier">✏️</button></div>';

  if (ui.triRecettes !== "alpha") {
    h.push('<div class="carte">' + liste.map(ligneRecette).join("") + "</div>");
    return h.join("");
  }

  /* En ordre alphabétique, une carte par lettre : ce sont les repères qui
     permettent de retrouver un plat en faisant défiler, sans chercher. */
  let lettre = null;
  let bloc = [];
  const sections = [];
  const vider = () => {
    if (!bloc.length) return;
    sections.push('<div class="sous-titre" id="lettre-' + lettre + '" style="margin:.9rem 0 .4rem">' +
      "<h3>" + lettre + "</h3>" +
      '<span class="etiquette">' + bloc.length + "</span></div>" +
      '<div class="carte">' + bloc.join("") + "</div>");
    bloc = [];
  };
  const lettres = [];
  liste.forEach((r) => {
    const l = lettreRecette(r);
    if (l !== lettre) { vider(); lettre = l; lettres.push(l); }
    bloc.push(ligneRecette(r));
  });
  vider();

  /* 353 plats, c'est cinquante écrans à faire défiler. L'index rend le
     cahier utilisable comme un vrai cahier : on va à la lettre. */
  if (lettres.length > 4) {
    h.push('<div class="index-lettres">' + lettres.map((l) =>
      '<button data-action="recettes-lettre" data-valeur="' + l + '">' + l + "</button>").join("") +
      "</div>");
  }
  h.push(sections.join(""));
  return h.join("");
};

/* ================================ RAPPELS ================================ */

/* `sansQuand` : dans l'agenda, le jour est déjà écrit en titre de section.
   Répéter « demain » sur chaque ligne n'apprend rien et alourdit. */
function ligneNote(n, sansQuand) {
  const auj = isoDate(new Date());
  let badge = "";
  if (n.fait) badge = '<span class="etiquette vert">fait</span>';
  else if (sansQuand) badge = "";
  else if (n.date) {
    const dj = joursEntre(auj, n.date);
    if (dj < 0) badge = '<span class="etiquette rouge">' + dateJolie(n.date) + "</span>";
    else if (dj === 0) badge = '<span class="etiquette chaud">aujourd\'hui</span>';
    else if (dj === 1) badge = '<span class="etiquette chaud">demain</span>';
    else if (dj <= 7) badge = '<span class="etiquette">dans ' + dj + " jours</span>";
  }
  const qui = (n.concernes || []).map((i) => membre(i)).filter(Boolean);
  /* L'heure d'abord : dans un agenda, c'est ce qu'on cherche du regard.
     La date n'est répétée que hors agenda, où elle n'est plus en titre. */
  const sous = [
    n.heure || "",
    n.lieu || "",
    qui.length ? qui.map((m) => m.prenom).join(", ") : "toute la famille"
  ].filter(Boolean).join(" • ");

  return '<div class="ligne' + (n.fait ? " fait" : "") + '">' +
    '<button class="coche' + (n.fait ? " on" : "") + '" data-action="note-toggle" data-id="' + n.id + '">✓</button>' +
    '<div class="ligne-corps"><b>' + esc(n.titre) + "</b><small>" +
    (qui.length
      ? qui.map((m) => '<span class="avatar xs">' + esc(m.emoji || "🙂") + "</span>").join("")
      : "") + esc(sous) + "</small>" +
    (badge || n.note ? '<span class="etiquettes">' + badge +
      (n.repetition && n.repetition !== "aucune" ? '<span class="etiquette">↻</span>' : "") + "</span>" : "") +
    "</div>" +
    '<button class="btn mini icone" data-action="note-editer" data-id="' + n.id + '">✏️</button></div>';
}

Vues.notes = function () {
  const h = [];

  /* Trois usages, trois onglets : l'agenda des rendez-vous datés, les
     pense-bêtes sans date, et ce qui est fait. */
  h.push('<div class="segments">' +
    [["agenda", "📅 Agenda"], ["pensebetes", "📝 Pense-bêtes"], ["faits", "✅ Terminés"]]
      .map(([v, l]) => '<button class="' + (ui.filtreNotes === v ? "on" : "") +
        '" data-action="notes-filtre" data-valeur="' + v + '">' + l + "</button>").join("") +
    "</div>");

  /* Qui est concerné : la question qu'on se pose vraiment devant un agenda
     de famille. « Toute la famille » comprend les rappels sans personne. */
  const qui = ui.filtreQuiNotes;
  h.push('<div class="puces" style="margin-bottom:1rem">' +
    '<button class="puce ' + (qui ? "" : "on") + '" data-action="notes-qui" data-valeur="">' +
    "👨‍👩‍👧 Tout le monde</button>" +
    etat.membres.map((m) =>
      '<button class="puce ' + (qui === m.id ? "on" : "") +
      '" data-action="notes-qui" data-valeur="' + m.id + '">' +
      esc((m.emoji || "🙂") + " " + m.prenom) + "</button>").join("") +
    "</div>");

  const pourQui = (n) => noteConcerne(n, qui);

  if (ui.filtreNotes === "faits") {
    const faits = notesTriees().filter((n) => n.fait && pourQui(n)).reverse();
    h.push(faits.length
      ? '<div class="carte">' + faits.map(ligneNote).join("") + "</div>"
      : rienDu("✅", "Rien de terminé pour l'instant."));
    return h.join("");
  }

  if (ui.filtreNotes === "pensebetes") {
    const libres = notesAVenir().filter((n) => !estRendezVous(n) && pourQui(n));
    h.push(libres.length
      ? '<div class="carte">' + libres.map(ligneNote).join("") + "</div>"
      : rienDu("📝", "Aucun pense-bête.<br>Appuyez sur <b>+</b> : un rappel " +
        "<b>sans date</b> arrive ici, avec une date il part dans l'agenda."));
    return h.join("");
  }

  /* --- L'agenda --- */
  const auj = isoDate(new Date());
  const enRetard = notesAVenir().filter((n) => estRendezVous(n) && n.date < auj && pourQui(n));
  if (enRetard.length) {
    h.push('<div class="sous-titre" style="margin-top:0"><h3>En retard</h3>' +
      '<span class="etiquette rouge">' + enRetard.length + "</span></div>");
    h.push('<div class="carte">' + enRetard.map((n) => ligneNote(n)).join("") + "</div>");
  }

  const jours = agendaParJour(qui).filter((j) => j.date >= auj);
  if (!jours.length && !enRetard.length) {
    h.push(rienDu("📅", "Aucun rendez-vous prévu.<br>Appuyez sur <b>+</b> pour en " +
      "ajouter un : donnez-lui une date, une heure et dites qui est concerné."));
    return h.join("");
  }

  jours.forEach((j) => {
    const dj = joursEntre(auj, j.date);
    const quand = dj === 0 ? "Aujourd'hui" : dj === 1 ? "Demain" : dateJolie(j.date, dj > 300);
    h.push('<div class="sous-titre"><h3>' + esc(quand) + "</h3>" +
      (dj > 1 ? '<span class="etiquette">dans ' + dj + " jours</span>" : "") + "</div>");
    h.push('<div class="carte">' + j.notes.map((n) => ligneNote(n, true)).join("") + "</div>");
  });
  return h.join("");
};

/* ================================ POINTS & CADEAUX ================================ */

Vues.points = function () {
  const h = [];
  h.push(carteObjectif());
  const mesPts = pointsDe(moi.id);
  const dispo = etat.cadeaux.filter((c) => c.actif !== false).sort((a, b) => a.cout - b.cout);
  const prochain = dispo.find((c) => c.cout > mesPts);

  h.push('<div class="carte" style="text-align:center">' +
    '<div style="font-size:2.4rem;font-family:var(--font-display);line-height:1">' + mesPts + "</div>" +
    '<div class="aide" style="margin-top:.1rem">points disponibles</div>' +
    (prochain
      ? '<div style="margin-top:.9rem"><div class="barre-progression"><i style="width:' +
      Math.min(100, Math.round(mesPts / prochain.cout * 100)) + '%"></i></div>' +
      '<div class="aide" style="margin-top:.4rem">Encore ' + (prochain.cout - mesPts) +
      " points pour « " + esc(prochain.nom) + " »</div></div>"
      : "") +
    '<button class="lien" data-action="points-historique" style="margin-top:.9rem">Voir mon historique</button>' +
    ' · <button class="lien" data-action="bilan-semaine">La semaine en bref</button>' +
    "</div>");

  /* Demandes a traiter */
  if (estAdmin()) {
    const dem = echangesEnAttente();
    if (dem.length) {
      h.push(bloc("🎁 Demandes à traiter", dem.map((e) =>
        '<div class="ligne">' + avatarDe(membre(e.membreId)) +
        '<div class="ligne-corps"><b>' + esc((e.cadeauEmoji || "🎁") + " " + e.cadeauNom) + "</b><small>" +
        esc(nomDe(e.membreId)) + " • " + e.cout + " pts</small></div>" +
        '<button class="btn mini danger" data-action="echange-refuser" data-id="' + e.id + '">✕</button>' +
        '<button class="btn mini principal" data-action="echange-accorder" data-id="' + e.id + '">Accorder</button>' +
        "</div>").join("")));
    }
  }

  /* Mes demandes */
  const miennes = etat.echanges.filter((e) => e.membreId === moi.id).slice(0, 5);
  if (miennes.length) {
    h.push(bloc("📬 Mes demandes", miennes.map((e) =>
      '<div class="ligne"><div class="ligne-corps"><b>' + esc((e.cadeauEmoji || "🎁") + " " + e.cadeauNom) +
      "</b><small>" + e.cout + " pts</small></div>" +
      '<span class="etiquette ' + (e.statut === "accorde" ? "vert" : e.statut === "refuse" ? "rouge" : "chaud") + '">' +
      (e.statut === "accorde" ? "accordé" : e.statut === "refuse" ? "refusé" : "en attente") +
      "</span></div>").join("")));
  }

  /* Boutique */
  h.push('<div class="sous-titre"><h3>La boutique</h3>' +
    (estAdmin() ? '<button class="lien" data-action="cadeau-nouveau">Ajouter</button>' : "") + "</div>");
  if (!dispo.length) {
    h.push(rienDu("🎁", estAdmin()
      ? "Aucun cadeau.<br>Appuyez sur <b>+</b> pour créer la première récompense."
      : "Aucun cadeau proposé pour l'instant."));
  } else {
    h.push('<div class="grille-cadeaux">' + dispo.map((c) => {
      const assez = mesPts >= c.cout;
      return '<div class="cadeau"><span class="em">' + esc(c.emoji || "🎁") + "</span>" +
        "<b>" + esc(c.nom) + "</b>" +
        '<span class="etiquette or">' + c.cout + " pts</span>" +
        (estAdmin() ? '<button class="btn mini" data-action="cadeau-editer" data-id="' + c.id + '">Modifier</button>' : "") +
        '<button class="btn mini ' + (assez ? "principal" : "") + '" data-action="cadeau-demander" data-id="' + c.id + '"' +
        (assez ? "" : " disabled") + ">" + (assez ? "Échanger" : "Trop cher") + "</button></div>";
    }).join("") + "</div>");
  }

  /* Classement */
  h.push('<div class="sous-titre"><h3>Classement</h3></div>');
  h.push('<div class="carte">' + classement().map((x, i) =>
    '<div class="ligne"><span class="rang' + (i === 0 ? " or" : "") + '">' + (i + 1) + "</span>" +
    avatarDe(x.m) + '<div class="ligne-corps"><b>' + esc(x.m.prenom) + "</b>" +
    (x.m.sansAppareil ? "<small>profil géré par les parents</small>" : "") + "</div>" +
    '<span class="etiquette or">' + x.pts + " pts</span>" +
    (estAdmin() && x.m.sansAppareil
      ? '<button class="btn mini or" data-action="cadeau-pour" data-id="' + x.m.id + '">🎁</button>' : "") +
    /* D'où viennent ces points ? La question se pose surtout pour les enfants
       sans téléphone, qui ne peuvent pas consulter leur propre historique. */
    (estAdmin()
      ? '<button class="btn mini icone" data-action="points-historique" data-id="' + x.m.id +
        '" aria-label="Voir l\'historique de ' + esc(x.m.prenom) + '">🧾</button>' : "") +
    (estAdmin() ? '<button class="btn mini" data-action="points-ajuster" data-id="' + x.m.id + '">±</button>' : "") +
    "</div>").join("") + "</div>");

  return h.join("");
};

/* ================================ ADMINISTRATION ================================ */

Vues.admin = function () {
  const h = [];
  h.push('<button class="lien" data-action="aller" data-vue="accueil" style="margin-bottom:.8rem">‹ Retour</button>');

  if (!estAdmin()) {
    h.push(rienDu("🔒", "Seuls les administrateurs peuvent modifier les réglages de la famille."));
    return h.join("");
  }

  /* Dix cartes, quatre écrans : sans raccourcis, changer un réglage demande
     de faire défiler tout le reste à chaque fois. */
  h.push('<div class="puces" style="margin-bottom:.9rem">' +
    [["membres", "👨‍👩‍👧 Membres"], ["inviter", "✉️ Inviter"], ["taches", "🧹 Tâches"],
     ["cadeaux", "🎁 Cadeaux"], ["recettes", "📖 Recettes"], ["reglages", "⚙️ Réglages"],
     ["objectif", "🤝 Objectif"], ["onglets", "📱 Onglets"]]
      .map(([a2, l]) => '<button class="puce" data-action="admin-aller" data-valeur="' + a2 + '">' +
        l + "</button>").join("") + "</div>");

  h.push(blocAncre("membres", "👨‍👩‍👧 Membres de la famille",
    etat.membres.map((m) =>
      '<div class="ligne">' + avatarDe(m) +
      '<div class="ligne-corps"><b>' + esc(m.prenom) + "</b><small>" +
      (m.sansAppareil ? "Géré par les parents" : m.role === "admin" ? "Administrateur" : "Membre") +
      " • " + pointsDe(m.id) + " pts" +
      (!m.sansAppareil && !aUnAppareil(m) ? " • en attente d'invitation" : "") + "</small>" +
      (m.sansAppareil ? '<span class="etiquettes"><span class="etiquette">🧒 sans téléphone</span></span>' : "") +
      "</div>" +
      '<button class="btn mini icone" data-action="membre-editer" data-id="' + m.id + '">✏️</button></div>').join(""),
    "Ajouter", "membre-nouveau"));

  h.push(blocAncre("inviter", "✉️ Inviter quelqu'un",
    '<p class="aide">Pour ajouter une personne — ou un nouveau téléphone pour quelqu\'un qui est ' +
    "déjà dans la famille — créez une invitation. C'est un lien <b>à usage unique</b> qui expire " +
    "au bout de quelques jours.</p>" +
    '<p class="aide" style="margin-top:.5rem">Le <b>repère</b> de votre tribu (' + esc(etat.famille.code) +
    ") ne donne accès à rien et n'est jamais à saisir par les autres : il ne sert " +
    "qu'à nommer votre dossier. Ne le confondez pas avec les <b>codes à 4 chiffres</b>, " +
    "qui sont personnels — un par membre.</p>" +
    '<button class="btn plein principal" data-action="inviter" style="margin-top:.8rem">Créer une invitation</button>'));

  h.push(bloc("❓ Comment ça marche",
    '<div class="ligne"><span class="etape">1</span><div class="ligne-corps">' +
    "<b>Vous créez la famille</b><small>C'est fait : vous en êtes administratrice.</small></div></div>" +
    '<div class="ligne"><span class="etape">2</span><div class="ligne-corps">' +
    "<b>Vous invitez chaque membre</b><small>Un lien par personne, et un par téléphone. " +
    "Il ne sert qu'une fois et expire.</small></div></div>" +
    '<div class="ligne"><span class="etape">3</span><div class="ligne-corps">' +
    "<b>Chacun choisit son code à 4 chiffres</b><small>Personnel, différent pour chacun. " +
    "Il sert à prouver qui vous êtes, pas à ouvrir la famille.</small></div></div>" +
    '<button class="lien" data-action="revoir-conseils" style="margin-top:.7rem">' +
    "Revoir les premiers pas sur l'accueil</button>"));

  h.push(bloc("📱 Appareils autorisés",
    '<p class="aide">' + (etat.membresUid || []).length + " appareil(s) peuvent ouvrir cette famille. " +
    "Un appareil perd son accès s'il efface les données du navigateur : il faudra alors une nouvelle invitation.</p>" +
    '<p class="aide" style="margin-top:.5rem">💡 Prévoyez <b>deux administrateurs</b> : si le seul ' +
    "administrateur perd son accès, plus personne ne peut valider les tâches.</p>"));

  h.push(blocAncre("taches", "🧹 Tâches (" + etat.taches.length + ")",
    etat.taches.length
      ? etat.taches.map((t) =>
        '<div class="ligne"><span style="font-size:1.2rem">' + esc(t.emoji || "🧹") + "</span>" +
        '<div class="ligne-corps"><b>' + esc(t.nom) + "</b><small>" +
        (t.frequence === "jour" ? "chaque jour" : t.frequence === "mois" ? "chaque mois" : "chaque semaine") +
        " • " + t.points + " pts • " + participantsValides(t).length + " participant(s)" +
        (t.actif === false ? " • en pause" : "") + "</small></div>" +
        '<button class="btn mini icone" data-action="tache-editer" data-id="' + t.id + '">✏️</button></div>').join("")
      : rienDu("🧹", "Aucune tâche."),
    "Ajouter", "tache-nouvelle"));

  h.push(blocAncre("cadeaux", "🎁 Cadeaux (" + etat.cadeaux.length + ")",
    etat.cadeaux.length
      ? etat.cadeaux.map((c) =>
        '<div class="ligne"><span style="font-size:1.2rem">' + esc(c.emoji || "🎁") + "</span>" +
        '<div class="ligne-corps"><b>' + esc(c.nom) + "</b><small>" + c.cout + " pts" +
        (c.actif === false ? " • retiré" : "") + "</small></div>" +
        '<button class="btn mini icone" data-action="cadeau-editer" data-id="' + c.id + '">✏️</button></div>').join("")
      : rienDu("🎁", "Aucun cadeau."),
    "Ajouter", "cadeau-nouveau"));

  const aCompleter = etat.recettes.filter((r) => r.saisons === undefined).length;
  const nouvelles = recettesManquantes().length;
  h.push(blocAncre("recettes", "📖 Recettes (" + etat.recettes.length + ")",
    '<p class="aide">La bibliothèque de plats sert au générateur de menus.</p>' +
    (aCompleter
      ? '<div class="bandeau" style="margin-top:.6rem">🔄<div><b>' + aCompleter +
        " recette(s) d'une version précédente</b> : saisons et unités incomplètes.</div></div>"
      : "") +
    (nouvelles
      ? '<div class="bandeau info" style="margin-top:.6rem">✨<div><b>' + nouvelles +
        " nouveau(x) plat(s) disponible(s)</b> dans la bibliothèque de l'application.</div></div>"
      : "") +
    '<button class="btn plein doux" data-action="aller" data-vue="recettes" style="margin-top:.6rem">Gérer les recettes</button>' +
    '<button class="btn plein" data-action="recettes-maj" style="margin-top:.5rem">🔄 Mettre à jour les recettes fournies</button>'));

  const g = reglagesFamille();
  h.push(blocAncre("reglages", "⚙️ Réglages de la famille",
    '<div class="ligne"><span style="font-size:1.3rem">🍽️</span>' +
    '<div class="ligne-corps"><b>' + g.convives + " personne" + (g.convives > 1 ? "s" : "") +
    " à table</b><small>Les quantités des recettes sont ajustées à ce nombre.</small></div></div>" +
    '<div class="ligne"><span style="font-size:1.3rem">🌟</span>' +
    '<div class="ligne-corps"><b>' + g.pointsRepas + " points par repas cuisiné</b><small>" +
    (g.pointsRepas ? "Validés comme une tâche." : "La cuisine ne rapporte rien.") + "</small></div></div>" +
    '<div class="ligne"><span style="font-size:1.3rem">♻️</span>' +
    '<div class="ligne-corps"><b>Anti-gaspillage ' + (g.antiGaspi !== false ? "activé" : "désactivé") +
    "</b><small>Priorité aux plats qui utilisent ce qui va périmer.</small></div></div>" +
    '<button class="btn plein doux" data-action="admin-reglages" style="margin-top:.7rem">Modifier</button>'));

  const ob = objectifFamille();
  h.push(blocAncre("objectif", "🤝 Objectif commun",
    '<p class="aide">Le classement met chacun contre les autres ; l’objectif ' +
    "commun met toute la maison du même côté. Facultatif.</p>" +
    (ob.actif
      ? '<div class="ligne" style="margin-top:.5rem"><span style="font-size:1.4rem">' +
        esc(ob.emoji || "🎯") + "</span>" +
        '<div class="ligne-corps"><b>' + esc(ob.nom) + "</b><small>" +
        pointsCollectifs() + " / " + ob.cible + " points" +
        (ob.faits ? " • " + ob.faits + " déjà atteint" + (ob.faits > 1 ? "s" : "") : "") +
        "</small></div>" +
        (objectifAtteint() ? '<span class="etiquette vert">atteint 🎉</span>' : "") + "</div>"
      : '<p class="aide" style="margin-top:.5rem">Désactivé — seul le classement individuel est affiché.</p>') +
    '<button class="btn plein doux" data-action="admin-objectif" style="margin-top:.7rem">' +
    (ob.actif ? "Modifier l’objectif" : "Définir un objectif") + "</button>"));

  /* Onglets visibles : toutes les familles ne se servent pas de tout. */
  const caches = ongletsMasques();
  h.push(blocAncre("onglets", "📱 Onglets visibles",
    '<p class="aide">Ce que la famille voit dans la barre du bas. Masquer un onglet ' +
    "ne supprime rien : le contenu est simplement rangé hors de vue.</p>" +
    '<div class="puces" style="margin-top:.7rem">' +
    ONGLETS.map((o) =>
      '<span class="puce ' + (o.obligatoire || caches.indexOf(o.vue) === -1 ? "on" : "") + '">' +
      o.emoji + " " + esc(o.nom) + "</span>").join("") + "</div>" +
    (caches.length
      ? '<p class="aide" style="margin-top:.6rem">' + caches.length +
        " onglet(s) masqué(s) pour toute la famille.</p>"
      : "") +
    '<button class="btn plein doux" data-action="admin-onglets" style="margin-top:.7rem">Choisir les onglets</button>'));

  return h.join("");
};

/* =========================================================================
   ECRANS DE CONNEXION
   =========================================================================
   Deux portes d'entree seulement :
     - creer une nouvelle famille (on devient administrateur) ;
     - ouvrir une invitation a usage unique.
   Un appareil deja autorise peut simplement changer de profil (avec le code
   a 4 chiffres), sans nouvelle invitation.
   ========================================================================= */

const Connexion = {

  aller(etape, donnees) {
    const el = document.getElementById("ecran-connexion");
    el.innerHTML = this[etape](donnees || {});
    window.scrollTo({ top: 0 });
    this.brancher(etape, donnees || {});
  },

  entete(sousTitre) {
    return '<div class="logo-tribu">🏡</div>' +
      '<h1>Ma Tribu<span class="badge-beta">bêta</span></h1>' +
      '<p class="intro">' + sousTitre + "</p>";
  },

  /* --- 1. Accueil --- */
  accueil() {
    const derniere = localStorage.getItem("tribu:derniereFamille");
    const local = Store.mode === "local"
      ? '<div class="bandeau" style="margin-top:1.4rem">⚠️<div>Le partage familial n\'est pas encore configuré : ' +
      "l'application fonctionnera <b>uniquement sur cet appareil</b>. Voir le guide <b>GUIDE-FIREBASE.md</b>.</div></div>"
      : "";
    /* Le piège de l'icône sur l'écran d'accueil : sur iPhone (et sur beaucoup
       d'Android), cette icône lance une application À PART, avec sa propre
       mémoire. Elle ne connaît donc pas la famille ouverte dans le navigateur,
       et propose d'en créer une — ce qui ferait une deuxième famille, vide.
       On le dit avant, franchement, plutôt que de laisser le piège se refermer. */
    const iconeMaison = !derniere && ouvertDepuisIcone();
    const avertissement = iconeMaison
      ? '<div class="bandeau" style="margin-bottom:1.2rem">📱<div>' +
      "<b>Vous ouvrez Ma Tribu depuis l'icône de l'écran d'accueil.</b><br>" +
      "Le téléphone la traite comme une application séparée : elle ne connaît pas " +
      "la famille déjà ouverte dans votre navigateur.<br><br>" +
      "<b>Ne créez pas une deuxième famille</b> — elle serait vide. " +
      "Demandez plutôt un <b>code d'invitation</b> : dans le navigateur (ou sur le " +
      "téléphone d'un administrateur), <b>Mon profil ▸ 📱 Connecter un appareil</b>. " +
      "Puis revenez ici et appuyez sur <b>J'ai reçu une invitation</b>." +
      "</div></div>"
      : "";

    /* Sur l'ancienne adresse, on prévient avant même la connexion : quelqu'un
       qui arrive ici par un vieux favori doit savoir où est passée l'app. */
    const demenagement = surAncienneAdresse()
      ? '<div class="bandeau" style="margin-bottom:1.2rem">🚚<div>' +
      "<b>Ma Tribu a une nouvelle adresse : matribu-app.fr</b><br>" +
      "Cette adresse-ci reste ouverte le temps que chacun déménage. " +
      "Si votre famille est déjà ici, <b>connectez-vous d'abord ici</b> : " +
      "c'est de cet écran que partent les codes pour la nouvelle adresse." +
      "</div></div>"
      : "";

    return this.entete("La maison, c'est l'affaire de tous.") +
      demenagement +
      avertissement +
      (derniere
        ? '<button class="btn principal plein" id="b-reprendre" style="margin-bottom:.6rem">Continuer sur cet appareil</button>'
        : "") +
      '<button class="btn ' + (derniere || iconeMaison ? "" : "principal ") + 'plein" id="b-creer" style="margin-bottom:.6rem">Créer ma famille</button>' +
      '<button class="btn ' + (iconeMaison ? "principal " : "") + 'plein" id="b-invitation">J\'ai reçu une invitation</button>' +

      '<div class="carte" style="margin-top:1.4rem">' +
      '<div class="carte-titre">Comment ça marche ?</div>' +
      '<div class="ligne"><span class="etape">1</span><div class="ligne-corps">' +
      "<b>Une seule personne crée la famille</b><small>Elle en devient l'administratrice. " +
      "Inutile que les autres la créent aussi.</small></div></div>" +
      '<div class="ligne"><span class="etape">2</span><div class="ligne-corps">' +
      "<b>Elle envoie une invitation à chacun</b><small>Un lien par personne — et un par " +
      "téléphone. Il ne sert qu'une fois.</small></div></div>" +
      '<div class="ligne"><span class="etape">3</span><div class="ligne-corps">' +
      "<b>Chacun ouvre son lien</b><small>Il choisit son prénom, son avatar et un code à " +
      "4 chiffres personnel.</small></div></div>" +
      '<div class="ligne"><span class="etape">4</span><div class="ligne-corps">' +
      "<b>Une icône sur l'écran d'accueil compte comme un appareil de plus</b>" +
      "<small>Elle a sa propre mémoire : il lui faut sa propre invitation. " +
      "Une invitation peut se coller <b>ou se taper</b>, c'est un code court.</small>" +
      "</div></div>" +
      "</div>" + local;
  },

  /* --- 2. Creation d'une famille --- */
  creer() {
    /* Repère tiré au sort assez long pour qu'une autre famille ne tombe
       jamais sur le même : on ne peut pas vérifier à l'avance s'il est libre
       (lire la famille d'autrui est justement interdit). */
    const suggere = nouveauRepere();
    return this.entete("Créons votre tribu. Vous en serez l'administrateur.") +
      '<form id="f-creer">' +
      '<label class="champ"><span>Nom de la famille</span>' +
      '<input type="text" name="nomFamille" placeholder="Famille Martin" required maxlength="40"></label>' +
      '<label class="champ"><span>Repère de la famille</span>' +
      '<input type="text" name="code" value="' + suggere + '" required maxlength="24"></label>' +
      '<p class="aide" style="margin-top:-.4rem;margin-bottom:1rem">Ce repère sert juste à nommer votre tribu. ' +
      "Il ne donne aucun accès : les autres membres vous rejoindront par invitation.</p>" +
      "<hr class=\"sep\">" +
      '<label class="champ"><span>Votre prénom</span>' +
      '<input type="text" name="prenom" placeholder="Amandine" required maxlength="20"></label>' +
      '<label class="champ"><span>Votre avatar</span></label>' +
      '<div class="puces grille-emojis" id="choix-emoji">' +
      EMOJIS_MEMBRES.map((e, i) => '<button type="button" class="puce ' + (i === 0 ? "on" : "") +
        '" data-emoji="' + e + '">' + e + "</button>").join("") + "</div>" +
      '<label class="champ"><span>Votre code à 4 chiffres</span>' +
      '<input type="tel" name="pin" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="1234" required></label>' +
      '<p class="aide" style="margin:-.4rem 0 1rem">Il est enregistré chiffré : même vous ne pourrez plus le relire. ' +
      "Un administrateur peut le réinitialiser si besoin.</p>" +
      '<button class="btn principal plein" type="submit" style="margin-top:.4rem">Créer la famille</button>' +
      '<button class="lien" type="button" id="b-retour" style="display:block;margin:1rem auto 0">Retour</button>' +
      "</form>";
  },

  /* --- 3. Ouvrir une invitation --- */
  invitation(d) {
    return this.entete("Tapez le code d'invitation reçu — ou collez le lien.") +
      '<form id="f-invitation">' +
      '<label class="champ"><span>Code ou lien d\'invitation</span>' +
      '<input type="text" name="jeton" required autocomplete="off" autocapitalize="characters" ' +
      'spellcheck="false" placeholder="ABCD-EFGH-JKLM" ' +
      'style="letter-spacing:.06em;text-align:center;font-weight:700" ' +
      'value="' + esc(d.jetonPreRempli || "") + '"></label>' +
      '<p class="aide" style="margin:-.4rem 0 1rem">12 caractères, les tirets sont facultatifs. ' +
      "Vous pouvez aussi coller le lien reçu par message.</p>" +
      '<button class="btn principal plein" type="submit">Continuer</button>' +
      '<p class="aide centre" style="margin-top:1rem">Une invitation ne sert qu\'une fois et expire. ' +
      "Demandez-en une nouvelle à l'administrateur de la famille si celle-ci ne marche plus.</p>" +
      '<button class="lien" type="button" id="b-retour" style="display:block;margin:1rem auto 0">Retour</button>' +
      "</form>";
  },

  /* --- 4. Choix du profil --- */
  profils(d) {
    /* Les profils gérés (enfants sans téléphone) ne se connectent pas :
       on ne les propose donc pas à la connexion. */
    const membres = ((d.donnees && d.donnees.membres) || []).filter((m) => !m.sansAppareil);
    return this.entete("Bienvenue chez <b>" + esc(d.donnees.famille.nom) + "</b>.<br>Qui êtes-vous ?") +
      '<div class="grille-profils">' + membres.map((m) =>
        '<button class="profil-carte" data-membre="' + m.id + '">' +
        '<span class="em">' + esc(m.emoji || "🙂") + "</span><b>" + esc(m.prenom) + "</b>" +
        "<small>" + (m.role === "admin" ? "admin" : "membre") + "</small></button>").join("") + "</div>" +
      (d.jeton
        ? '<button class="btn plein doux" id="b-nouveau-profil" style="margin-top:1.2rem">Je ne suis pas dans la liste</button>'
        : '<p class="aide centre" style="margin-top:1.2rem">Pour ajouter une personne, un administrateur ' +
        "doit créer une invitation depuis son téléphone.</p>") +
      '<button class="lien" type="button" id="b-retour" style="display:block;margin:1rem auto 0">Retour</button>';
  },

  /* --- 5. Nouveau profil (uniquement via invitation) --- */
  nouveauProfil(d) {
    const nomFamille = (d.invitation && d.invitation.nomFamille) ||
      (d.donnees && d.donnees.famille.nom) || "votre famille";
    return this.entete("Créons votre profil dans <b>" + esc(nomFamille) + "</b>.") +
      '<form id="f-profil">' +
      '<label class="champ"><span>Votre prénom</span>' +
      '<input type="text" name="prenom" required maxlength="20"></label>' +
      '<label class="champ"><span>Votre avatar</span></label>' +
      '<div class="puces grille-emojis" id="choix-emoji">' +
      EMOJIS_MEMBRES.map((e, i) => '<button type="button" class="puce ' + (i === 0 ? "on" : "") +
        '" data-emoji="' + e + '">' + e + "</button>").join("") + "</div>" +
      '<label class="champ"><span>Votre code à 4 chiffres</span>' +
      '<input type="tel" name="pin" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" required></label>' +
      '<button class="btn principal plein" type="submit">Rejoindre la famille</button>' +
      '<button class="lien" type="button" id="b-retour" style="display:block;margin:1rem auto 0">Retour</button>' +
      "</form>";
  },

  /* --- 6. Code a 4 chiffres --- */
  pin(d) {
    return this.entete("Bonjour <b>" + esc(d.membre.prenom) + "</b> " + esc(d.membre.emoji || "") +
      "<br>Entrez votre code à 4 chiffres.") +
      '<div class="pin-points" id="pin-points">' +
      "0123".split("").map(() => '<span class="pin-point"></span>').join("") + "</div>" +
      '<div class="clavier" id="clavier">' +
      [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => '<button data-n="' + n + '">' + n + "</button>").join("") +
      '<button class="vide"></button><button data-n="0">0</button><button data-n="eff">⌫</button></div>' +
      '<button class="lien" type="button" id="b-retour" style="display:block;margin:1.6rem auto 0">Changer de profil</button>';
  },

  /* --- branchements --- */
  brancher(etape, d) {
    const el = document.getElementById("ecran-connexion");

    const retour = el.querySelector("#b-retour");
    if (retour) retour.onclick = () => {
      /* Depuis une invitation on n'a pas de liste de profils à laquelle
         revenir (la famille n'est pas encore lisible) : retour à l'accueil. */
      const versProfils = (etape === "pin" || etape === "nouveauProfil") && d.donnees;
      if (versProfils) this.aller("profils", d);
      else this.aller("accueil");
    };

    if (etape === "accueil") {
      el.querySelector("#b-creer").onclick = () => this.aller("creer");
      el.querySelector("#b-invitation").onclick = () => this.aller("invitation", {});
      const br = el.querySelector("#b-reprendre");
      if (br) br.onclick = async () => {
        const code = localStorage.getItem("tribu:derniereFamille");
        const donnees = await Store.charger(code);
        if (!donnees) { toast("Cet appareil n'a plus accès à cette famille"); return; }
        this.aller("profils", { code: code, donnees: donnees, jeton: null });
      };
    }

    const grilleEmoji = el.querySelector("#choix-emoji");
    if (grilleEmoji) {
      grilleEmoji.onclick = (ev) => {
        const b = ev.target.closest("[data-emoji]");
        if (!b) return;
        grilleEmoji.querySelectorAll(".puce").forEach((p) => p.classList.remove("on"));
        b.classList.add("on");
      };
    }
    const emojiChoisi = () => {
      const on = grilleEmoji && grilleEmoji.querySelector(".puce.on");
      return on ? on.dataset.emoji : "🙂";
    };

    /* --- creation de la famille --- */
    if (etape === "creer") {
      el.querySelector("#f-creer").onsubmit = async (ev) => {
        ev.preventDefault();
        const bouton = ev.target.querySelector('button[type="submit"]');
        const f = new FormData(ev.target);
        const code = String(f.get("code")).trim().toUpperCase();
        const pin = String(f.get("pin")).trim();
        if (!/^[0-9]{4}$/.test(pin)) { toast("Le code doit faire 4 chiffres"); return; }
        bouton.disabled = true;

        /* Vérification honnête : on interroge l'annuaire des repères, qui
           répond oui ou non. On ne devine plus à partir d'un refus. */
        const libre = await Store.repereLibre(code);
        if (libre === false) {
          ev.target.querySelector('[name="code"]').value = nouveauRepere();
          toast("Ce repère est déjà utilisé — en voici un autre");
          bouton.disabled = false;
          return;
        }

        const moiId = id();
        const donnees = etatVide();
        donnees.famille = {
          nom: String(f.get("nomFamille")).trim(), code: code,
          creeLe: new Date().toISOString(), version: 2
        };
        donnees.membres = [Object.assign({
          id: moiId, prenom: String(f.get("prenom")).trim(), emoji: emojiChoisi(),
          role: "admin", uids: [Store.uid], creeLe: new Date().toISOString()
        }, await champsPin(pin))];
        donnees.appareils = { [Store.uid]: moiId };
        donnees.recettes = (window.RECETTES_DEPART || [])
          .map((r) => Object.assign({ id: id(), origine: "depart" }, r));
        donnees.taches = tachesDeDepart(moiId);
        donnees.cadeaux = cadeauxDeDepart();

        etat = donnees;
        recalculerIndex();
        const cree = await Store.creer(code, etat);
        if (!cree) {
          bouton.disabled = false;
          const e = Store.derniereErreur;
          /* On n'invente plus la cause : on l'affiche, avec les pistes. */
          ecranPanne(e, "Création impossible",
            "Firebase a refusé de créer la famille. Les causes possibles : les " +
            "règles de sécurité ne sont pas publiées dans leur dernière version, " +
            "ou le domaine du site n'est pas autorisé dans Firebase " +
            "(Authentication → Paramètres → Domaines autorisés).");
          return;
        }
        await Store.marquerRepere(code);
        await entrerDansFamille(code, moiId);
        toast("Bienvenue dans votre tribu 🏡");
      };
    }

    /* --- ouverture d'une invitation --- */
    if (etape === "invitation") {
      el.querySelector("#f-invitation").onsubmit = async (ev) => {
        ev.preventDefault();
        const bouton = ev.target.querySelector('button[type="submit"]');
        const brut = String(new FormData(ev.target).get("jeton"));
        const jeton = Invitations.extraireJeton(brut);
        if (!jeton) { toast("Lien d'invitation non reconnu"); return; }
        bouton.disabled = true;
        const r = await Invitations.valider(jeton);
        bouton.disabled = false;
        if (!r.ok) { toast(r.message); return; }

        const inv = r.invitation;
        const suite = { code: inv.famille, jeton: jeton, invitation: inv };
        /* L'invitation dit pour qui elle est : soit on crée son profil,
           soit on entre le code du profil qu'elle désigne. */
        if (inv.pour && inv.pour !== "nouveau" && inv.profil) {
          this.aller("pin", Object.assign({ membre: inv.profil }, suite));
        } else {
          this.aller("nouveauProfil", suite);
        }
      };
    }

    /* --- choix du profil --- */
    if (etape === "profils") {
      el.querySelectorAll("[data-membre]").forEach((b) => {
        b.onclick = () => {
          const m = d.donnees.membres.find((x) => x.id === b.dataset.membre);
          this.aller("pin", Object.assign({}, d, { membre: m }));
        };
      });
      const bn = el.querySelector("#b-nouveau-profil");
      if (bn) bn.onclick = () => this.aller("nouveauProfil", d);
    }

    /* --- creation d'un profil via invitation --- */
    if (etape === "nouveauProfil") {
      el.querySelector("#f-profil").onsubmit = async (ev) => {
        ev.preventDefault();
        const bouton = ev.target.querySelector('button[type="submit"]');
        const f = new FormData(ev.target);
        const pin = String(f.get("pin")).trim();
        if (!/^[0-9]{4}$/.test(pin)) { toast("Le code doit faire 4 chiffres"); return; }
        bouton.disabled = true;

        const r = await Invitations.valider(d.jeton);
        if (!r.ok) { toast(r.message); bouton.disabled = false; return; }

        const nouveau = Object.assign({
          id: id(), prenom: String(f.get("prenom")).trim(), emoji: emojiChoisi(),
          role: "membre", uids: [], creeLe: new Date().toISOString()
        }, await champsPin(pin));

        Store.code = d.code;
        /* On RESERVE le jeton avant d'entrer : c'est ce qui le rend vraiment
           a usage unique. Si quelqu'un d'autre l'a pris entre-temps, on
           s'arrete ici, avant d'avoir touche a la famille. */
        const reserve = await Store.reserverInvitation(d.jeton);
        if (!reserve) {
          toast("Cette invitation vient d'être utilisée sur un autre appareil.");
          bouton.disabled = false;
          return;
        }
        const ok = await Store.rejoindre(d.code, d.jeton, { nouveauMembre: nouveau });
        if (!ok) {
          toast("Invitation refusée par le serveur");
          bouton.disabled = false;
          return;
        }
        const entre = await entrerDansFamille(d.code, nouveau.id);
        if (!entre) {
          ecranPanne(Store.derniereErreur, "Presque !",
            "Votre appareil a bien été inscrit, mais la famille n'a pas pu être " +
            "chargée. Rechargez la page.");
          return;
        }
        toast("Bienvenue " + nouveau.prenom + " 👋");
      };
    }

    /* --- saisie du code a 4 chiffres --- */
    if (etape === "pin") {
      let saisie = "";
      let occupe = false;
      const points = el.querySelectorAll("#pin-points .pin-point");
      const maj = () => points.forEach((p, i) => p.classList.toggle("on", i < saisie.length));

      el.querySelector("#clavier").onclick = async (ev) => {
        const b = ev.target.closest("[data-n]");
        if (!b || occupe) return;
        if (b.dataset.n === "eff") { saisie = saisie.slice(0, -1); maj(); return; }
        if (saisie.length >= 4) return;
        saisie += b.dataset.n;
        maj();
        if (saisie.length < 4) return;

        occupe = true;
        const bon = await verifiePin(saisie, d.membre);
        if (!bon) {
          toast("Code incorrect");
          saisie = ""; maj(); occupe = false;
          return;
        }
        const pinSaisi = saisie;

        /* Arrivee par invitation : on inscrit cet appareil dans la famille.
           On n'a pas le droit de lire la famille avant cette inscription,
           donc on n'ajoute que ce qui nous concerne. */
        if (d.jeton) {
          const r = await Invitations.valider(d.jeton);
          if (!r.ok) { toast(r.message); occupe = false; return; }
          Store.code = d.code;
          /* Meme principe : on reserve d'abord, on entre ensuite. */
          const reserve = await Store.reserverInvitation(d.jeton);
          if (!reserve) {
            toast("Cette invitation vient d'être utilisée sur un autre appareil.");
            occupe = false;
            return;
          }
          const ok = await Store.rejoindre(d.code, d.jeton, {
            membreId: d.membre.id,
            admin: (d.membre.role || "membre") === "admin"
          });
          if (!ok) {
            ecranPanne(Store.derniereErreur, "Invitation refusée",
              "Le serveur a refusé l'inscription de cet appareil. Les règles de " +
              "sécurité Firebase ne sont peut-être pas à jour.");
            return;
          }
        }

        const entre = await entrerDansFamille(d.code, d.membre.id);
        if (!entre) {
          if (d.jeton) {
            ecranPanne(Store.derniereErreur, "Presque !",
              "Votre appareil a bien été inscrit, mais la famille n'a pas pu être " +
              "chargée. Rechargez la page.");
            return;
          }
          toast("Cet appareil n'a pas accès à cette famille");
          occupe = false;
          return;
        }
        await migrerPinSiBesoin(moi, pinSaisi);
      };
    }
  }
};

/* --- contenus proposes au premier lancement --- */
function tachesDeDepart(moiId) {
  const base = [
    ["Vider le lave-vaisselle", "🍽️", "jour", 5],
    ["Sortir les poubelles", "🗑️", "semaine", 10],
    ["Passer l'aspirateur", "🧹", "semaine", 15],
    ["Nettoyer la salle de bain", "🚿", "semaine", 20],
    ["Étendre le linge", "🧺", "semaine", 10],
    ["Faire les courses", "🛒", "semaine", 15],
    ["Nettoyer les vitres", "🪟", "mois", 25],
    ["Grand ménage du frigo", "🧴", "mois", 20]
  ];
  return base.map(([nom, emoji, freq, pts]) => ({
    id: id(), nom: nom, emoji: emoji, frequence: freq, points: pts,
    participants: [moiId], rotation: true, decalage: 0, actif: true,
    creeLe: new Date().toISOString()
  }));
}
function cadeauxDeDepart() {
  const base = [
    ["Choisir le film du soir", "🎬", 40],
    ["Un dessert au choix", "🍦", 50],
    ["Soirée pizza", "🍕", 80],
    ["30 min d'écran en plus", "🎮", 60],
    ["Sortie au parc / piscine", "🏊", 150],
    ["Petit cadeau surprise", "🎁", 300]
  ];
  return base.map(([nom, emoji, cout]) => ({
    id: id(), nom: nom, emoji: emoji, cout: cout, actif: true
  }));
}
