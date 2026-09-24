/* =========================================================================
   MATRIBU — le mot du jour
   =========================================================================
   Demandé par Amandine le 18/09/2026 (0.60). Un mot de 5 lettres à trouver
   en 6 essais, LE MÊME pour toute la tribu — et pour toutes les tribus : il
   ne dépend que de la date du téléphone. On compare le soir, à table.

   SES CHOIX
   - Le même mot pour les grands et les petits, avec deux aides : une
     devinette, puis la première lettre. L'aide prise se voit dans le
     résultat.
   - La tribu voit qui a trouvé, et en combien d'essais, avec de petites
     grilles de couleurs. JAMAIS le mot ni les lettres tapées : elles ne
     quittent pas l'appareil.
   - Pas de points. La « série de la tribu » compte les jours d'affilée où
     quelqu'un de la famille a trouvé : on gagne ensemble, pas les uns
     contre les autres.
   - Les mots tapés sont vérifiés dans un vrai dictionnaire (mots5.js).

   LES COULEURS, doublées d'une FORME pour les daltoniens (le vert et
   l'orange se confondent souvent) : carré vert = la lettre est bien placée ;
   ROND orange = elle est dans le mot, ailleurs ; gris = elle n'y est pas.

   CE QUI VOYAGE : un document par membre, familles/{code}/motsDuJour/{id},
   qui porte sa partie du jour et celle de la veille (la série en a besoin) :
     { jour, grille: "vgogg,ovggv", fini, aide, serie, veille: {…} | null }
   Deux jours au plus : rien ne s'accumule. Voir firestore.rules.

   Chargé APRÈS formulaires.js (il complète Formulaires) et AVANT app.js :
   il n'appelle les fonctions d'app.js (isoDate, deIso, esc, moi, etat,
   Store…) qu'au moment où l'on joue, jamais au chargement.
   ========================================================================= */

const MOT_JOUR_LETTRES = 5;
const MOT_JOUR_ESSAIS = 6;
/* Les essais à faire avant d'avoir droit à chaque aide : la devinette après
   deux vraies tentatives, la première lettre après quatre (22/09/2026, choix
   d'Amandine). Une aide offerte tout de suite se prend sans réfléchir. */
const MOT_JOUR_AIDES = [2, 4];
const CLAVIER_MOT_JOUR = ["AZERTYUIOP", "QSDFGHJKLM", "WXCVBN"];

/* 366 mots, UN PAR JOUR DE L'ANNÉE, dans l'ordre du calendrier d'une année
   bissextile : le rang 0 est le 1er janvier, le 59 le 29 février, le 365 le
   31 décembre. Le même mot revient donc à la même date chaque année — la
   crêpe à la Chandeleur, la bûche à Noël, l'école à la rentrée.
   Écrits pour MaTribu : des mots que les enfants connaissent, sans gros
   mot, rangés par saison, jamais deux devinettes pareilles de suite. Tous
   sont dans Lexique 3.83 (voir mots5.js).
   Chaque entrée : "MOT SANS ACCENT|orthographe|devinette". */
const MOTS_DU_JOUR = [
  "ANNEE|année|le temps qui passe" /* 01 */,
  "VOEUX|vœux|au Nouvel An",
  "HIBOU|hibou|un oiseau de nuit",
  "GIVRE|givre|la météo en hiver",
  "MULOT|mulot|un petit animal des champs",
  "REINE|reine|dans les contes",
  "TRONC|tronc|d'un arbre",
  "CARRE|carré|une forme",
  "VACHE|vache|un animal de la ferme",
  "IGLOO|igloo|une maison de glace",
  "CARTE|carte|un jeu ou un plan",
  "OASIS|oasis|dans le désert",
  "TITRE|titre|en haut d'une page",
  "MICRO|micro|pour chanter",
  "COBRA|cobra|un serpent",
  "TOILE|toile|pour peindre",
  "PENTE|pente|en montagne",
  "AIDER|aider|donner un coup de main",
  "RONCE|ronce|une plante qui pique",
  "BLANC|blanc|une couleur",
  "LACER|lacer|attacher ses chaussures",
  "BRAVE|brave|courageux",
  "FOUET|fouet|dans la cuisine",
  "LIGNE|ligne|un trait",
  "PANDA|panda|un animal sauvage",
  "CALME|calme|pas agité",
  "TIEDE|tiède|ni chaud ni froid",
  "MACHE|mâche|une salade",
  "NOTER|noter|écrire",
  "MORSE|morse|un animal des pôles",
  "COUPE|coupe|un trophée",
  "RAYON|rayon|au magasin" /* 02 */,
  "CREPE|crêpe|un dessert",
  "VALSE|valse|une danse",
  "LACET|lacet|sur une chaussure",
  "POTEE|potée|un plat d'hiver",
  "SALUT|salut|pour dire bonjour",
  "LUNDI|lundi|un jour de la semaine",
  "VILLE|ville|beaucoup de maisons",
  "CRIER|crier|faire du bruit",
  "FURET|furet|un petit animal",
  "NEIGE|neige|la météo",
  "OUTIL|outil|pour bricoler",
  "SAUGE|sauge|une herbe du jardin",
  "COEUR|cœur|le corps",
  "NAVET|navet|un légume",
  "EVIER|évier|dans la cuisine",
  "BISOU|bisou|un petit baiser",
  "PAIRE|paire|deux ensemble",
  "ETAGE|étage|dans la maison",
  "DRONE|drone|il vole sans pilote",
  "LARGE|large|pas étroit",
  "MAIRE|maire|un métier",
  "SKIER|skier|sur la neige",
  "PETIT|petit|pas grand",
  "ANCRE|ancre|sur un bateau",
  "FROID|froid|l'hiver",
  "FERME|ferme|à la campagne",
  "TAUPE|taupe|un animal du jardin",
  "ZESTE|zeste|la peau du citron",
  "MAMIE|mamie|la famille" /* 03 */,
  "ZEBRE|zèbre|un animal sauvage",
  "BOCAL|bocal|dans la cuisine",
  "CORDE|corde|pour grimper",
  "MUSEE|musée|on y voit des œuvres",
  "GANTS|gants|en hiver",
  "ONGLE|ongle|au bout du doigt",
  "BAGUE|bague|un bijou",
  "FLUTE|flûte|un instrument de musique",
  "SAULE|saule|un arbre",
  "SOUPE|soupe|un plat chaud",
  "CHOUX|choux|des légumes",
  "GUIDE|guide|il montre le chemin",
  "ONCLE|oncle|la famille",
  "ROUTE|route|pour les voitures",
  "TACHE|tâche|une chose à faire",
  "ROBOT|robot|un jouet",
  "GELER|geler|quand il fait très froid",
  "HEROS|héros|dans les histoires",
  "POCHE|poche|sur un vêtement",
  "PANNE|panne|quand ça ne marche plus",
  "PIZZA|pizza|un plat",
  "LAINE|laine|pour tricoter",
  "LIBRE|libre|pas enfermé",
  "FORME|forme|rond, carré ou triangle",
  "BECHE|bêche|pour creuser le jardin",
  "VINGT|vingt|un nombre",
  "ORTIE|ortie|une plante qui pique",
  "TUYAU|tuyau|pour l'eau",
  "TRIER|trier|les déchets",
  "MALLE|malle|pour ranger",
  "FARCE|farce|une blague" /* 04 */,
  "TABLE|table|dans la maison",
  "LEVRE|lèvre|la bouche",
  "BEIGE|beige|une couleur",
  "RADIS|radis|un légume",
  "ALLEE|allée|dans le jardin",
  "CREME|crème|dans le frigo",
  "COLIS|colis|par la poste",
  "AVRIL|avril|un mois",
  "VIEUX|vieux|pas jeune",
  "SIEGE|siège|pour s'asseoir",
  "ROSEE|rosée|l'eau du matin sur l'herbe",
  "SUSHI|sushi|un plat",
  "POUCE|pouce|un doigt",
  "BOULE|boule|toute ronde",
  "SOEUR|sœur|la famille",
  "PISTE|piste|au ski ou au cirque",
  "PEPIN|pépin|dans un fruit",
  "SERRE|serre|pour protéger les plantes",
  "WAGON|wagon|dans un train",
  "JAUNE|jaune|une couleur",
  "TUILE|tuile|sur le toit",
  "HEURE|heure|le temps qui passe",
  "FEVES|fèves|des légumes",
  "FILLE|fille|la famille",
  "PRISE|prise|pour brancher",
  "POING|poing|la main fermée",
  "POINT|point|un signe",
  "MARDI|mardi|un jour de la semaine",
  "VERRE|verre|sur la table",
  "RATON|raton|un animal laveur" /* 05 */,
  "GRAND|grand|pas petit",
  "HERBE|herbe|au jardin",
  "GECKO|gecko|un petit lézard",
  "PHOTO|photo|un souvenir",
  "PUREE|purée|un accompagnement",
  "LILAS|lilas|une fleur",
  "BRAVO|bravo|pour féliciter",
  "DOIGT|doigt|la main",
  "MIMER|mimer|jouer sans parler",
  "FRONT|front|le visage",
  "PIANO|piano|un instrument de musique",
  "JEUDI|jeudi|un jour de la semaine",
  "SEIZE|seize|un nombre",
  "GENIE|génie|il sort de la lampe",
  "POULE|poule|un animal de la ferme",
  "GAZON|gazon|au jardin",
  "SUPER|super|génial",
  "TEXTE|texte|à lire",
  "FLEUR|fleur|au jardin",
  "POSTE|poste|pour envoyer une lettre",
  "MILLE|mille|un nombre",
  "HERON|héron|un oiseau",
  "APPEL|appel|au téléphone",
  "SAUCE|sauce|dans la cuisine",
  "NEVEU|neveu|la famille",
  "CUIRE|cuire|en cuisine",
  "MARIN|marin|sur un bateau",
  "GRELE|grêle|la météo",
  "CANNE|canne|pour marcher ou pêcher",
  "MAMAN|maman|la famille",
  "PLACE|place|dans la ville" /* 06 */,
  "FILET|filet|pour pêcher",
  "RUCHE|ruche|la maison des abeilles",
  "MONDE|monde|la Terre entière",
  "METRO|métro|un moyen de transport",
  "RADIO|radio|pour écouter",
  "CALIN|câlin|un geste doux",
  "FRITE|frite|un accompagnement",
  "JEUNE|jeune|pas vieux",
  "JOUET|jouet|pour jouer",
  "MERLE|merle|un oiseau",
  "GORGE|gorge|le cou",
  "SPORT|sport|pour bouger",
  "SALLE|salle|une pièce de la maison",
  "DANSE|danse|un loisir",
  "SAVON|savon|dans la salle de bain",
  "BERET|béret|un chapeau",
  "DROLE|drôle|qui fait rire",
  "SEMER|semer|au jardin",
  "DINDE|dinde|un animal de la ferme",
  "CHANT|chant|la musique",
  "MAREE|marée|la mer monte et descend",
  "MALIN|malin|rusé",
  "ALGUE|algue|dans la mer",
  "HYENE|hyène|un animal sauvage",
  "FRERE|frère|la famille",
  "VOILE|voile|un sport",
  "VOLER|voler|comme un oiseau",
  "HARPE|harpe|un instrument de musique",
  "CHAUD|chaud|l'été",
  "KAYAK|kayak|un petit bateau" /* 07 */,
  "POEME|poème|à réciter",
  "VAGUE|vague|à la mer",
  "LOURD|lourd|le contraire de léger",
  "MATIN|matin|un moment de la journée",
  "CRABE|crabe|un animal de la mer",
  "GALET|galet|au bord de l'eau",
  "TROLL|troll|dans les contes",
  "LARME|larme|quand on pleure",
  "LAMPE|lampe|dans la maison",
  "TENTE|tente|au camping",
  "PHARE|phare|au bord de la mer",
  "AMOUR|amour|un grand sentiment",
  "RUGBY|rugby|un sport",
  "SHORT|short|un vêtement d'été",
  "ORAGE|orage|la météo",
  "PINCE|pince|un outil",
  "LAPIN|lapin|un animal aux longues oreilles",
  "AVION|avion|un moyen de transport",
  "DUVET|duvet|au camping",
  "NAGER|nager|dans la piscine",
  "PIECE|pièce|de monnaie ou de la maison",
  "BAIES|baies|des petits fruits",
  "PLAGE|plage|au bord de la mer",
  "NOYAU|noyau|dans un fruit",
  "TERRE|terre|notre planète",
  "BIJOU|bijou|une bague ou un collier",
  "PALME|palme|pour nager",
  "ACIDE|acide|comme le citron",
  "BOUEE|bouée|à la mer",
  "NOEUD|nœud|avec une corde",
  "OMBRE|ombre|à l'abri du soleil" /* 08 */,
  "OCEAN|océan|la mer",
  "BULLE|bulle|de savon",
  "ETANG|étang|dans la nature",
  "PECHE|pêche|un fruit",
  "LOUVE|louve|la maman du loup",
  "PLIER|plier|le linge",
  "HAMAC|hamac|pour se reposer",
  "GLACE|glace|un dessert",
  "BILLE|bille|un jeu",
  "GUEPE|guêpe|un insecte",
  "CLOWN|clown|au cirque",
  "PAUME|paume|la main",
  "SIROP|sirop|une boisson",
  "MATCH|match|en sport",
  "PELER|peler|en cuisine",
  "PRUNE|prune|un fruit",
  "VITRE|vitre|à la fenêtre",
  "MELON|melon|un fruit",
  "MAGIE|magie|au cirque",
  "SABLE|sable|à la plage",
  "TONGS|tongs|des chaussures d'été",
  "PATTE|patte|au bout de la jambe d'un animal",
  "USINE|usine|on y fabrique des choses",
  "HOTEL|hôtel|pour dormir en voyage",
  "BRUIT|bruit|le contraire du silence",
  "CURRY|curry|une épice",
  "CANOE|canoë|sur l'eau",
  "VOTER|voter|pour choisir",
  "CONTE|conte|une histoire",
  "GEANT|géant|dans les contes",
  "EPICE|épice|dans le placard" /* 09 */,
  "PREAU|préau|dans la cour de l'école",
  "COUDE|coude|le corps",
  "CRAIE|craie|à l'école",
  "POMPE|pompe|pour gonfler",
  "CHIPS|chips|à l'apéritif",
  "FREIN|frein|pour s'arrêter",
  "TOAST|toast|au petit-déjeuner",
  "TRAIN|train|un moyen de transport",
  "SUCRE|sucre|dans le placard",
  "REGLE|règle|à l'école",
  "PORTE|porte|dans la maison",
  "DOUZE|douze|un nombre",
  "REPAS|repas|à table",
  "GOMME|gomme|à l'école",
  "LINGE|linge|à laver",
  "ACHAT|achat|au magasin",
  "PATES|pâtes|dans le placard",
  "LECON|leçon|à l'école",
  "SALON|salon|dans la maison",
  "PONEY|poney|un petit cheval",
  "ECOLE|école|on y apprend",
  "MINOU|minou|un petit chat",
  "LOUPE|loupe|pour voir en grand",
  "PAUSE|pause|un petit repos",
  "GIGOT|gigot|un plat du dimanche",
  "STYLO|stylo|à l'école",
  "PERLE|perle|un bijou",
  "PLUIE|pluie|la météo",
  "JAMBE|jambe|le corps",
  "RECRE|récré|la pause à l'école" /* 10 */,
  "GLOBE|globe|une boule du monde",
  "NAPPE|nappe|sur la table",
  "BICHE|biche|un animal de la forêt",
  "ARBRE|arbre|dans la nature",
  "COLLE|colle|à l'école",
  "MERCI|merci|un mot poli",
  "AIGLE|aigle|un oiseau",
  "LYCEE|lycée|après le collège",
  "CARPE|carpe|un poisson",
  "LIVRE|livre|on le lit",
  "CHIEN|chien|un animal de compagnie",
  "AIMER|aimer|un verbe du cœur",
  "POMME|pomme|un fruit",
  "SINGE|singe|un animal sauvage",
  "IMAGE|image|à regarder",
  "CYGNE|cygne|un oiseau",
  "TROIS|trois|un nombre",
  "DINER|dîner|le repas du soir",
  "CHENE|chêne|un arbre",
  "COMTE|comté|un fromage",
  "COING|coing|un fruit d'automne",
  "VOLET|volet|à la fenêtre",
  "BOIRE|boire|quand on a soif",
  "GENOU|genou|le corps",
  "COURT|court|pas long",
  "BALLE|balle|un jouet",
  "FIGUE|figue|un fruit",
  "STADE|stade|pour le sport",
  "NUAGE|nuage|dans le ciel",
  "BOITE|boîte|pour ranger",
  "VIDEO|vidéo|à regarder" /* 11 */,
  "FABLE|fable|une histoire",
  "ORGUE|orgue|un instrument de musique",
  "VESTE|veste|un vêtement",
  "DRAPS|draps|sur le lit",
  "DAMES|dames|un jeu de plateau",
  "PUITS|puits|pour tirer de l'eau",
  "ROUGE|rouge|une couleur",
  "BRUME|brume|la météo",
  "TANTE|tante|la famille",
  "KOALA|koala|un animal sauvage",
  "BALAI|balai|pour faire le ménage",
  "LAVER|laver|pour nettoyer",
  "SELLE|selle|pour s'asseoir sur un vélo",
  "RAMER|ramer|sur un bateau",
  "MAUVE|mauve|une couleur",
  "GILET|gilet|un vêtement",
  "REVER|rêver|la nuit",
  "FUSEE|fusée|dans l'espace",
  "PLEIN|plein|le contraire de vide",
  "TASSE|tasse|sur la table",
  "ORQUE|orque|un animal de la mer",
  "TARTE|tarte|un dessert",
  "MACON|maçon|il construit les murs",
  "VIGNE|vigne|pour le raisin",
  "LEGER|léger|le contraire de lourd",
  "TALON|talon|le pied",
  "OLIVE|olive|un petit fruit",
  "OVALE|ovale|une forme",
  "NICHE|niche|la maison du chien",
  "FORET|forêt|dans la nature" /* 12 */,
  "FRIGO|frigo|dans la cuisine",
  "HETRE|hêtre|un arbre",
  "PLUME|plume|sur un oiseau",
  "ECRAN|écran|la télé ou l'ordinateur",
  "LOTUS|lotus|une fleur d'eau",
  "BISON|bison|un animal sauvage",
  "ROCHE|roche|une pierre",
  "CADRE|cadre|au mur",
  "CHAMP|champ|à la campagne",
  "BOTTE|botte|une chaussure",
  "TEMPS|temps|il passe… ou il fait beau",
  "SABOT|sabot|une chaussure en bois",
  "CHIOT|chiot|un bébé animal",
  "SCENE|scène|au théâtre",
  "TRIBU|tribu|la famille",
  "POELE|poêle|dans la cuisine",
  "POIRE|poire|un fruit",
  "CACAO|cacao|dans le placard",
  "LUTIN|lutin|dans les contes",
  "HIVER|hiver|une saison",
  "DENTS|dents|dans la bouche",
  "RENNE|renne|un animal du Grand Nord",
  "SAPIN|sapin|un arbre",
  "BUCHE|bûche|un dessert de Noël",
  "NIECE|nièce|la famille",
  "TIGRE|tigre|un animal sauvage",
  "TAPIS|tapis|dans la maison",
  "JOUER|jouer|on le fait à la récré",
  "DATTE|datte|un fruit sec",
  "OEUFS|œufs|dans le frigo"
];

/* ---------- Le mot d'une date ---------- */

/* Le rang d'une date « AAAA-MM-JJ » dans le calendrier ci-dessus. */
function rangMotDuJour(iso) {
  const m = Number(String(iso).slice(5, 7)), j = Number(String(iso).slice(8, 10));
  const r = Math.round((Date.UTC(2024, m - 1, j) - Date.UTC(2024, 0, 1)) / 86400000);
  return r >= 0 && r < MOTS_DU_JOUR.length ? r : 0;
}
function motDuJour(iso) {
  const e = String(MOTS_DU_JOUR[rangMotDuJour(iso)]).split("|");
  return { mot: e[0], ortho: e[1] || e[0].toLowerCase(), indice: e[2] || "" };
}
/* La date du téléphone : un nouveau mot à minuit, à l'heure de chacun. */
function jourMotJour() { return isoDate(new Date()); }
function veilleMotJour(iso) {
  const d = deIso(iso);
  d.setDate(d.getDate() - 1);
  return isoDate(d);
}

/* Comme on tape : majuscules, sans accents ; « œ » devient « OE ». */
function motSansAccent(s) {
  return String(s == null ? "" : s).toLowerCase().replace(/œ/g, "oe").replace(/æ/g, "ae")
    .normalize("NFD").replace(/[̀-ͯ]/g, "").toUpperCase();
}

/* Le mot tapé existe-t-il ? Le dictionnaire (mots5.js) n'est lu qu'à la
   première question. Sans lui (fichier absent), on accepte tout : mieux vaut
   un jeu indulgent qu'un jeu bloqué. */
let motsAdmisMotJour = null;
function motAdmis(m) {
  if (typeof MOTS5 !== "string") return true;
  if (!motsAdmisMotJour) {
    motsAdmisMotJour = new Set();
    for (let i = 0; i + MOT_JOUR_LETTRES <= MOTS5.length; i += MOT_JOUR_LETTRES) {
      motsAdmisMotJour.add(MOTS5.substr(i, MOT_JOUR_LETTRES));
    }
    MOTS_DU_JOUR.forEach((e) => motsAdmisMotJour.add(e.slice(0, MOT_JOUR_LETTRES)));
  }
  return motsAdmisMotJour.has(m);
}

/* Les couleurs d'un essai : « v » bien placée, « o » ailleurs dans le mot,
   « g » absente. En DEUX passes, à cause des lettres en double : les lettres
   bien placées d'abord, puis les autres se partagent ce qui reste. Taper
   POMME quand le mot est PLUME : le M bien placé est vert, l'autre gris —
   le mot n'en a qu'un. */
function noterEssai(essai, mot) {
  const res = [], reste = {};
  for (let i = 0; i < MOT_JOUR_LETTRES; i++) {
    if (essai[i] === mot[i]) res[i] = "v";
    else { res[i] = "g"; reste[mot[i]] = (reste[mot[i]] || 0) + 1; }
  }
  for (let i = 0; i < MOT_JOUR_LETTRES; i++) {
    if (res[i] !== "v" && reste[essai[i]] > 0) { res[i] = "o"; reste[essai[i]]--; }
  }
  return res.join("");
}

/* ---------- Les parties de la tribu ---------- */

/* La partie d'un membre pour une date, telle que la tribu la voit :
   { grille: ["vgogg", …], trouve, fini, aide, serie }, ou null. Elle est dans
   le document (le jour même) ou dans sa « veille ». */
function partieMotJour(idm, jour) {
  const d = (etat.motsDuJour || {})[idm];
  if (!d || typeof d !== "object") return null;
  const p = d.jour === jour ? d : (d.veille && d.veille.jour === jour ? d.veille : null);
  if (!p) return null;
  const grille = String(p.grille || "").split(",").filter((x) => /^[vog]{5}$/.test(x));
  const trouve = grille.length > 0 && grille[grille.length - 1] === "vvvvv";
  return {
    grille: grille, trouve: trouve,
    fini: !!p.fini || trouve || grille.length >= MOT_JOUR_ESSAIS,
    aide: Math.max(0, Math.min(2, Math.round(Number(p.aide) || 0))),
    serie: Math.max(0, Math.round(Number(p.serie) || 0))
  };
}

/* LA SÉRIE DE LA TRIBU : le nombre de jours d'affilée où au moins une
   personne de la famille a trouvé le mot.
   Chaque document ne garde que deux jours : la série voyage donc de jour en
   jour, inscrite dans la partie de celui qui trouve (champ « serie »). Le
   premier qui trouve aujourd'hui prend la série d'hier, plus un ; les
   suivants reprennent la sienne. Personne n'a trouvé hier : on repart de 1. */
function serieDuJourMotJour(jour) {
  let s = 0;
  Object.keys(etat.motsDuJour || {}).forEach((idm) => {
    const p = partieMotJour(idm, jour);
    if (p && p.trouve) s = Math.max(s, p.serie || 1);
  });
  return s;
}
/* { n, aujourdhui } : aujourdhui = déjà prolongée ce jour. Sinon, la série
   d'hier tient encore jusqu'à minuit — à la tribu de la prolonger. */
function serieTribuMotJour() {
  const auj = jourMotJour();
  const a = serieDuJourMotJour(auj);
  if (a) return { n: a, aujourdhui: true };
  return { n: serieDuJourMotJour(veilleMotJour(auj)), aujourdhui: false };
}

/* Les LETTRES tapées restent sur l'appareil : dans les données partagées,
   n'importe qui dans la famille pourrait lire le mot. Rangées par tribu et
   par membre — une tablette partagée garde la partie de chacun. Une ligne
   vide ("") = un essai fait sur un autre appareil. */
function cleLettresMotJour(idm) { return "tribu:motJour:" + (Store.code || "") + ":" + idm; }
function lettresMotJour(idm, jour) {
  try {
    const v = JSON.parse(localStorage.getItem(cleLettresMotJour(idm)) || "null");
    if (!v || v.jour !== jour || !Array.isArray(v.essais)) return { essais: [], aide: 0 };
    return {
      essais: v.essais.slice(0, MOT_JOUR_ESSAIS).map((x) => (/^[A-Z]{5}$/.test(x) ? x : null)),
      aide: Math.max(0, Math.min(2, Math.round(Number(v.aide) || 0)))
    };
  } catch (e) { return { essais: [], aide: 0 }; }
}
function retenirLettresMotJour(p) {
  try {
    localStorage.setItem(cleLettresMotJour(moi.id), JSON.stringify({
      jour: p.jour, aide: p.aide, essais: p.lignes.map((l) => l.lettres || "")
    }));
  } catch (e) { /* mémoire refusée : la partie reste jouable, sans reprise */ }
}

/* Une partie, remise dans la forme exacte que les règles acceptent. */
function extraitPartieMotJour(x) {
  return {
    jour: String(x.jour),
    grille: String(x.grille || "").split(",").filter((g) => /^[vog]{5}$/.test(g))
      .slice(0, MOT_JOUR_ESSAIS).join(","),
    fini: !!x.fini,
    aide: Math.max(0, Math.min(2, Math.round(Number(x.aide) || 0))),
    serie: Math.max(0, Math.min(100000, Math.round(Number(x.serie) || 0)))
  };
}

/* Ce qui part en ligne : des couleurs, jamais de lettres. Le document
   ENTIER, avec la veille qu'il faut garder pour la série. */
function publierPartieMotJour(p) {
  const ancien = (etat.motsDuJour || {})[moi.id];
  let veille = null;
  if (ancien && ancien.jour === veilleMotJour(p.jour)) veille = extraitPartieMotJour(ancien);
  else if (ancien && ancien.jour === p.jour && ancien.veille &&
    ancien.veille.jour === veilleMotJour(p.jour)) veille = extraitPartieMotJour(ancien.veille);
  if (p.trouve && !p.serie) {
    p.serie = serieDuJourMotJour(p.jour) || serieDuJourMotJour(veilleMotJour(p.jour)) + 1;
  }
  const doc = extraitPartieMotJour({
    jour: p.jour, grille: p.lignes.map((l) => l.couleurs).join(","),
    fini: p.fini, aide: p.aide, serie: p.trouve ? p.serie : 0
  });
  doc.veille = veille;
  /* Tout de suite en mémoire, sans attendre le serveur : l'accueil et la
     tribu se mettent à jour même hors ligne. */
  etat.motsDuJour = Object.assign({}, etat.motsDuJour, { [moi.id]: doc });
  return Store.ecrireMotDuJour(moi.id, doc);
}

/* La partie de CET appareil, pour aujourd'hui : les lettres d'ici, et ce
   que le serveur sait en plus (un essai fait sur un autre appareil n'a que
   ses couleurs). */
function preparerPartieMotJour() {
  const jour = jourMotJour();
  const cible = motDuJour(jour);
  const srv = partieMotJour(moi.id, jour);
  const loc = lettresMotJour(moi.id, jour);
  const n = Math.min(MOT_JOUR_ESSAIS, Math.max(loc.essais.length, srv ? srv.grille.length : 0));
  const lignes = [];
  for (let i = 0; i < n; i++) {
    const l = loc.essais[i] || null;
    lignes.push({ lettres: l, couleurs: l ? noterEssai(l, cible.mot) : (srv ? srv.grille[i] : "ggggg") });
  }
  const trouve = lignes.some((l) => l.couleurs === "vvvvv");
  return {
    jour: jour, cible: cible, lignes: lignes, saisie: "",
    aide: Math.max(loc.aide, srv ? srv.aide : 0),
    trouve: trouve, fini: trouve || lignes.length >= MOT_JOUR_ESSAIS || !!(srv && srv.fini),
    serie: srv && srv.trouve ? srv.serie : 0,
    revele: -1, secoue: false
  };
}

/* ---------- Petits morceaux d'écran ---------- */

/* La grille d'une partie en miniature : des couleurs, jamais de lettres. */
function miniGrilleMotJour(grille) {
  if (!grille || !grille.length) return "";
  return '<span class="mj-mini" aria-hidden="true">' + grille.map((g) =>
    "<span>" + g.split("").map((c) => '<i class="' + c + '"></i>').join("") + "</span>").join("") +
    "</span>";
}
function nomsMotJour(l) {
  if (l.length < 2) return l.join("");
  return l.slice(0, -1).join(", ") + " et " + l[l.length - 1];
}
function aideTexteMotJour(aide) {
  return aide >= 2 ? "avec la 1re lettre" : aide === 1 ? "avec la devinette" : "";
}
function avantDemainMotJour() {
  const d = new Date();
  const minuit = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  const min = Math.max(1, Math.round((minuit - d) / 60000));
  const h = Math.floor(min / 60);
  return h ? h + " h " + String(min % 60).padStart(2, "0") : min + " min";
}
const BRAVOS_MOT_JOUR = ["Du premier coup, incroyable !", "Impressionnant !", "Bravo !",
  "Bien joué !", "Ouf, trouvé !", "Juste à temps !"];

/* ---------- La carte de l'accueil ---------- */

function carteMotDuJour() {
  if (!moi || typeof motDuJourActif !== "function" || !motDuJourActif()) return "";
  const jour = jourMotJour();
  const p = partieMotJour(moi.id, jour) || { grille: [], trouve: false, fini: false, aide: 0 };
  const s = serieTribuMotJour();
  const trouveurs = etat.membres.filter((m) => m.id !== moi.id)
    .filter((m) => { const x = partieMotJour(m.id, jour); return x && x.trouve; })
    .map((m) => m.prenom);
  let titre, bouton;
  if (p.trouve) { titre = "Trouvé en " + pluriel(p.grille.length, "essai", "essais") + " 🎉"; bouton = "Voir"; }
  else if (p.fini) { titre = "Pas trouvé cette fois"; bouton = "Voir"; }
  else if (p.grille.length) {
    titre = "Vous en êtes à " + pluriel(p.grille.length, "essai", "essais") + " sur " + MOT_JOUR_ESSAIS;
    bouton = "Continuer";
  } else { titre = "5 lettres, 6 essais : à vous de jouer"; bouton = "Jouer"; }
  const details = [];
  if (s.n) details.push("🔥 Série de la tribu : " + pluriel(s.n, "jour", "jours"));
  if (trouveurs.length) details.push("Trouvé par " + nomsMotJour(trouveurs));
  return bloc("🔤 Le mot du jour",
    '<div class="ligne ligne-maj" data-action="mot-jour">' +
    (p.grille.length ? miniGrilleMotJour(p.grille) : '<span style="font-size:1.5rem">🔤</span>') +
    '<div class="ligne-corps"><b>' + esc(titre) + "</b>" +
    (details.length ? "<small>" + esc(details.join(" · ")) + "</small>" : "") + "</div>" +
    '<button class="btn mini principal" data-action="mot-jour">' + bouton + "</button></div>");
}

/* ---------- La fenêtre de jeu ---------- */

/* La partie ouverte à l'écran (une seule à la fois). */
let partieMotJourOuverte = null;

function racineMotJour() { return document.querySelector("#feuille [data-motjour]"); }

Formulaires.motDuJour = function () {
  if (!moi) return;
  if (!motDuJourActif()) { toast("Le mot du jour n'est pas activé dans cette tribu"); return; }
  const p = preparerPartieMotJour();
  partieMotJourOuverte = p;
  ouvrirFeuille("🔤 Le mot du jour",
    '<div class="mj" data-motjour>' +
    '<div class="mj-tete"></div>' +
    '<p class="mj-indice"></p>' +
    '<div class="mj-grille"></div>' +
    '<p class="mj-message" role="status" aria-live="polite"></p>' +
    '<div class="mj-clavier"></div>' +
    '<div class="mj-fin"></div>' +
    '<p class="aide mj-legende"><i class="v"></i>bien placée <i class="o"></i>ailleurs dans le mot ' +
    '<i class="g"></i>absente</p>' +
    '<div class="mj-tribu"></div>' +
    "</div>",
    (f) => {
      f.querySelector("[data-motjour]").addEventListener("click", (e) => {
        const t = e.target.closest("[data-mj-touche]");
        if (t) { e.preventDefault(); t.blur(); toucheMotJour(t.dataset.mjTouche); return; }
        const a = e.target.closest('[data-mj="aide"]');
        if (a) { e.preventDefault(); a.blur(); aideMotJour(); }
      });
    });
  majMotJour();
  /* Une partie jouée ici mais pas encore partie en ligne (réseau coupé,
     appli fermée trop tôt) : on la renvoie, sans rien dire. */
  const srv = partieMotJour(moi.id, p.jour);
  if (Store.mode === "nuage" &&
    (p.lignes.length > (srv ? srv.grille.length : 0) || p.aide > (srv ? srv.aide : 0))) {
    publierPartieMotJour(p);
  }
};

/* La tribu, sous la grille. Appelée aussi quand une autre partie change
   (voir entrerDansFamille) : on ne touche alors qu'à ce bloc, jamais à ce
   que la personne est en train de taper. */
Formulaires.rafraichirMotDuJour = function () {
  const r = racineMotJour();
  if (!r || !partieMotJourOuverte) return;
  const t = r.querySelector(".mj-tribu");
  if (t) t.innerHTML = tribuMotJour(partieMotJourOuverte.jour);
};

function majMotJour() {
  const r = racineMotJour();
  const p = partieMotJourOuverte;
  if (!r || !p) return;
  const essai = Math.min(p.lignes.length + 1, MOT_JOUR_ESSAIS);
  r.querySelector(".mj-tete").innerHTML =
    '<span class="aide" style="margin:0">' + esc(dateJolie(p.jour)) +
    (p.fini ? "" : " · essai " + essai + " sur " + MOT_JOUR_ESSAIS) + "</span>" +
    (p.fini || p.aide >= 2 ? "" :
      '<button type="button" class="btn mini doux" data-mj="aide"' +
      (aideOuverteMotJour(p) ? "" : " disabled") + ">" +
      (p.aide ? "🔠 La première lettre" : "💡 Une devinette") + "</button>");

  /* Sous la grille : la devinette prise, et/ou le moment où la suivante
     s'ouvrira. La ligne est déjà réservée et centrée — le bouton, lui, ne
     tiendrait pas la phrase sur un écran étroit. */
  const attente = p.fini || p.aide >= 2 || aideOuverteMotJour(p) ? "" :
    (p.aide ? "🔠 La première lettre" : "💡 La devinette") +
    " s'ouvre après " + MOT_JOUR_AIDES[p.aide] + " essais";
  r.querySelector(".mj-indice").innerHTML = p.fini ? "" :
    (p.aide ? "Devinette : " + esc(p.cible.indice) +
      (p.aide >= 2 ? " · commence par <b>" + esc(p.cible.mot[0]) + "</b>" : "") : "") +
    (attente ? (p.aide ? "<br>" : "") + attente : "");
  r.querySelector(".mj-grille").innerHTML = grilleMotJour(p);
  r.querySelector(".mj-clavier").innerHTML = p.fini ? "" : clavierMotJour(p);
  r.querySelector(".mj-fin").innerHTML = finMotJour(p);
  r.querySelector(".mj-tribu").innerHTML = tribuMotJour(p.jour);
  /* L'animation ne se joue qu'une fois : au dessin suivant, plus rien ne
     bouge. */
  p.revele = -1;
  p.secoue = false;
}

function direMotJour(texte) {
  const r = racineMotJour();
  const m = r && r.querySelector(".mj-message");
  if (m) m.textContent = texte || "";
}

function grilleMotJour(p) {
  const NOMS = { v: "bien placée", o: "ailleurs dans le mot", g: "absente" };
  let h = "";
  for (let i = 0; i < MOT_JOUR_ESSAIS; i++) {
    const l = p.lignes[i];
    const enCours = !l && i === p.lignes.length && !p.fini;
    let cases = "", dit = "";
    for (let k = 0; k < MOT_JOUR_LETTRES; k++) {
      if (l) {
        const lettre = l.lettres ? l.lettres[k] : "";
        cases += '<span class="mj-case ' + l.couleurs[k] + (i === p.revele ? " revele" : "") +
          '" style="--i:' + k + '">' + esc(lettre) + "</span>";
        dit += (k ? ", " : "") + (lettre ? lettre + " " : "") + NOMS[l.couleurs[k]];
      } else {
        const lettre = enCours ? (p.saisie[k] || "") : "";
        cases += '<span class="mj-case' + (lettre ? " pleine" : "") + '">' + esc(lettre) + "</span>";
      }
    }
    h += '<div class="mj-rangee' + (enCours && p.secoue ? " secoue" : "") + '"' +
      (l ? ' role="img" aria-label="Essai ' + (i + 1) + " : " + esc(dit) + '"' : "") + ">" + cases + "</div>";
  }
  return h;
}

/* L'état de chaque touche : la meilleure information connue sur la lettre. */
function clavierMotJour(p) {
  const RANG = { g: 1, o: 2, v: 3 };
  const etats = {};
  p.lignes.forEach((l) => {
    if (!l.lettres) return;
    for (let k = 0; k < MOT_JOUR_LETTRES; k++) {
      const c = l.couleurs[k], x = l.lettres[k];
      if (!etats[x] || RANG[c] > RANG[etats[x]]) etats[x] = c;
    }
  });
  return CLAVIER_MOT_JOUR.map((rang, i) =>
    '<div class="mj-rang">' +
    (i === 2 ? '<button type="button" class="mj-touche large" data-mj-touche="Entree">Valider</button>' : "") +
    rang.split("").map((x) =>
      '<button type="button" class="mj-touche' + (etats[x] ? " " + etats[x] : "") +
      '" data-mj-touche="' + x + '">' + x + "</button>").join("") +
    (i === 2 ? '<button type="button" class="mj-touche large" data-mj-touche="Retour" ' +
      'aria-label="Effacer la dernière lettre">⌫</button>' : "") +
    "</div>").join("");
}

function finMotJour(p) {
  if (!p.fini) return "";
  const s = serieTribuMotJour();
  const aide = aideTexteMotJour(p.aide);
  return "<p><b>" + (p.trouve
    ? esc(BRAVOS_MOT_JOUR[Math.min(p.lignes.length, MOT_JOUR_ESSAIS) - 1]) + "</b><br>Trouvé en " +
      pluriel(p.lignes.length, "essai", "essais") + (aide ? ", " + aide : "") + "."
    : "Pas trouvé cette fois !</b>") +
    "<br>Le mot était « <b>" + esc(p.cible.ortho) + "</b> » (" + esc(p.cible.indice) + ").</p>" +
    '<p class="aide">' + (s.n ? "🔥 Série de la tribu : " + pluriel(s.n, "jour", "jours") + " · " : "") +
    "Nouveau mot dans " + avantDemainMotJour() + ".</p>";
}

/* La tribu : qui a trouvé, qui cherche encore, qui n'a pas joué. */
function tribuMotJour(jour) {
  const s = serieTribuMotJour();
  const joues = [], pasJoue = [];
  etat.membres.forEach((m) => {
    const p = partieMotJour(m.id, jour);
    if (p && (p.grille.length || p.aide)) joues.push({ m: m, p: p });
    else if (!m.sansAppareil || m.id === moi.id) pasJoue.push(m);
  });
  const rang = (x) => (x.p.trouve ? x.p.grille.length : x.p.fini ? 20 : 10);
  joues.sort((a, b) => rang(a) - rang(b) || a.m.prenom.localeCompare(b.m.prenom));
  const lignes = joues.map((x) => {
    const p = x.p;
    const etatJeu = p.trouve ? "Trouvé en " + pluriel(p.grille.length, "essai", "essais")
      : p.fini ? "Pas trouvé"
        : "Cherche encore" + (p.grille.length ? " · " + pluriel(p.grille.length, "essai", "essais") : "");
    const aide = aideTexteMotJour(p.aide);
    return '<div class="ligne">' + avatarDe(x.m) +
      '<div class="ligne-corps"><b>' + esc(x.m.prenom) + (x.m.id === moi.id ? " (vous)" : "") + "</b>" +
      "<small>" + esc(etatJeu + (aide ? " · " + aide : "")) + "</small></div>" +
      miniGrilleMotJour(p.grille) + "</div>";
  });
  const serie = s.n
    ? "🔥 " + pluriel(s.n, "jour", "jours") + (s.aujourdhui ? "" : " : à prolonger aujourd'hui")
    : "Trouvez le mot pour lancer une série";
  return '<div class="mj-tribu-titre"><span>Aujourd\'hui dans la tribu</span>' +
    '<span class="aide" style="margin:0;font-weight:400">' + esc(serie) + "</span></div>" +
    (lignes.join("") || '<p class="aide">Personne n\'a encore joué aujourd\'hui.</p>') +
    (pasJoue.length ? '<p class="aide">Pas encore joué : ' +
      esc(nomsMotJour(pasJoue.map((m) => m.prenom + (m.id === moi.id ? " (vous)" : "")))) + "</p>" : "");
}

/* ---------- Jouer ---------- */

function toucheMotJour(k) {
  const p = partieMotJourOuverte;
  if (!p || !racineMotJour()) return;
  /* Fenêtre restée ouverte passé minuit : on passe au mot du nouveau jour,
     plutôt que de finir la partie d'hier sous la date d'aujourd'hui. */
  if (jourMotJour() !== p.jour) {
    Formulaires.motDuJour();
    direMotJour("Minuit est passé : voici le nouveau mot.");
    return;
  }
  if (p.fini) return;
  if (k === "Entree") { validerMotJour(); return; }
  if (k === "Retour") {
    if (!p.saisie) return;
    p.saisie = p.saisie.slice(0, -1);
  } else if (/^[A-Z]$/.test(k)) {
    if (p.saisie.length >= MOT_JOUR_LETTRES) return;
    p.saisie += k;
  } else return;
  direMotJour("");
  majMotJour();
}

function secouerMotJour(message) {
  const p = partieMotJourOuverte;
  p.secoue = true;
  majMotJour();
  direMotJour(message);
}

function validerMotJour() {
  const p = partieMotJourOuverte;
  if (p.saisie.length < MOT_JOUR_LETTRES) {
    secouerMotJour("Il faut " + MOT_JOUR_LETTRES + " lettres");
    return;
  }
  if (!motAdmis(p.saisie)) {
    secouerMotJour("« " + p.saisie + " » n'est pas dans notre dictionnaire");
    return;
  }
  if (p.lignes.some((l) => l.lettres === p.saisie)) {
    secouerMotJour("Vous avez déjà essayé « " + p.saisie + " »");
    return;
  }
  const couleurs = noterEssai(p.saisie, p.cible.mot);
  p.lignes.push({ lettres: p.saisie, couleurs: couleurs });
  p.revele = p.lignes.length - 1;
  p.saisie = "";
  p.trouve = couleurs === "vvvvv";
  p.fini = p.trouve || p.lignes.length >= MOT_JOUR_ESSAIS;
  retenirLettresMotJour(p);
  const envoi = publierPartieMotJour(p);    // calcule aussi la série si c'est trouvé
  direMotJour("");
  majMotJour();
  rendre();                                // la carte de l'accueil, derrière
  /* Hors réseau, Firebase garde l'envoi et le fait tout seul au retour de la
     connexion : la promesse attend, sans échouer. Un échec veut donc dire un
     REFUS du serveur (règles pas encore publiées, appareil retiré…). La
     partie reste sur l'appareil, et repart à la prochaine ouverture. */
  Promise.resolve(envoi).then((ok) => {
    if (!ok && Store.mode === "nuage" && racineMotJour()) {
      direMotJour("Partie gardée sur ce téléphone, mais la tribu ne peut pas la voir pour l'instant.");
    }
  });
}

/* L'aide suivante est-elle méritée ? p.aide vaut 0 ou 1 ici : c'est le
   nombre d'aides déjà prises, donc l'indice du seuil à atteindre. */
function aideOuverteMotJour(p) {
  return p.aide >= 2 || p.lignes.length >= MOT_JOUR_AIDES[p.aide];
}

function aideMotJour() {
  const p = partieMotJourOuverte;
  if (!p || p.fini || p.aide >= 2) return;
  /* Le bouton grisé ne se touche pas, mais rien ne dit qu'il restera le seul
     chemin : la règle se vérifie ici aussi. */
  if (!aideOuverteMotJour(p)) return;
  p.aide++;
  retenirLettresMotJour(p);
  publierPartieMotJour(p);
  majMotJour();
  rendre();
}

/* Le clavier de l'ordinateur marche aussi, tant que la fenêtre est ouverte.
   Jamais quand on tape dans un champ : ce jeu n'en a pas, mais une autre
   fenêtre pourrait s'être ouverte par-dessus. */
document.addEventListener("keydown", (e) => {
  if (!partieMotJourOuverte || !racineMotJour()) return;
  const voile = document.getElementById("voile");
  if (!voile || !voile.classList.contains("on")) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const t = e.target;
  if (t && t.tagName && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
  if (e.key === "Enter") { e.preventDefault(); toucheMotJour("Entree"); return; }
  if (e.key === "Backspace") { e.preventDefault(); toucheMotJour("Retour"); return; }
  const l = motSansAccent(e.key);
  if (/^[A-Z]$/.test(l)) { e.preventDefault(); toucheMotJour(l); }
});
