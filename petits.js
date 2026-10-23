/* ============================================================================
   MATRIBU — LES PETITS À TABLE          module séparé, 18/10/2026
   ============================================================================

   Demandé par Amandine : « proposer des menus compatibles avec l'âge des
   enfants pour préparer un menu unique, et avoir une partie indiquant
   l'adaptation en fonction de l'âge ». Puis : « construis cette partie comme
   un module à part, dans l'idée où ça pourrait être une partie payante ».

   UN MODULE, ET VRAIMENT. Ce fichier ne sait rien faire tout seul et personne
   ne l'appelle sans avoir vérifié qu'il existe (`typeof cartePetits ===
   "function"`). NE PAS LIVRER CE FICHIER SUFFIT À NE PAS LIVRER LA FONCTION :
   rien à désactiver, rien qui casse, aucune trace à l'écran. C'est le schéma
   déjà suivi par `motdujour.js`.

   AUCUNE DONNÉE NOMINATIVE — et c'est une décision d'Amandine, prise contre ma
   première idée. Je voulais une date de naissance sur la fiche de chaque
   enfant ; elle a répondu « date de naissance rajoute des soucis sur la
   confidentialité ». Elle avait raison, et la page de confidentialité de
   MaTribu le promet noir sur blanc, dans ses trois premières phrases :
   « MaTribu ne demande ni numéro de téléphone, NI DATE DE NAISSANCE, ni photo ».

   On enregistre donc une caractéristique du FOYER, pas de l'enfant : « il y a
   un enfant de 6 à 8 mois à la maison ». Rien n'est rattaché à un prénom,
   l'écran dit « Pour un enfant de 6 à 8 mois », et une tranche de trois mois
   n'identifie personne. C'est tout ce dont la fonction a besoin : pour savoir
   s'il faut mixer ou couper, le jour et le mois n'apportent rien.

   CE QUE DIT CE MODULE, ET CE QU'IL NE DIT PAS. Ce sont des repères généraux,
   ceux que publient les autorités de santé françaises pour la diversification
   alimentaire. Ils ne remplacent ni un médecin, ni une PMI, ni ce que vous
   savez de VOTRE enfant — une allergie, un reflux, une naissance prématurée
   changent tout. L'écran le dit, à chaque fois, et sans le noyer dans une
   petite ligne grise.

   Le générateur de menus n'est PAS touché : il continue de proposer le même
   menu pour toute la maison. C'était l'idée d'Amandine — un menu unique —, et
   filtrer le cahier pendant les cinq premières années d'un enfant
   appauvrirait les repas de toute la famille.
   ========================================================================= */

/* Les tranches, telles qu'on les coche. Larges exprès : trois mois de marge,
   c'est assez pour la cuisine et trop peu pour identifier quelqu'un. */
const TRANCHES_PETITS = [
  { val: "4-6", nom: "4 à 6 mois", emoji: "🍼" },
  { val: "6-8", nom: "6 à 8 mois", emoji: "🥄" },
  { val: "9-11", nom: "9 à 11 mois", emoji: "🥣" },
  { val: "12-17", nom: "1 an à 18 mois", emoji: "🧒" },
  { val: "18-35", nom: "18 mois à 3 ans", emoji: "🧒" },
  { val: "3-5", nom: "3 à 5 ans", emoji: "🧒" }
];
/* Le mois le PLUS JEUNE de la tranche : c'est lui qui commande, puisque c'est
   le plus fragile. « 9 à 11 mois » se décide comme neuf mois. */
const PLUS_JEUNE = { "4-6": 4, "6-8": 6, "9-11": 9, "12-17": 12, "18-35": 18, "3-5": 36 };

/* La texture et la part, pour chaque tranche. Une phrase, pas un cours. */
const TEXTURE_PETITS = {
  "4-6": "Purée bien lisse, sans morceau, à la cuillère. Un seul aliment nouveau à la fois, " +
    "et quelques cuillères suffisent : le lait reste le repas principal.",
  "6-8": "Mixé lisse, puis de plus en plus épais. Deux à quatre cuillères à soupe de légumes, " +
    "et une cuillère à café de viande ou de poisson bien mixé.",
  "9-11": "Écrasé à la fourchette, avec de petits morceaux fondants. On peut poser quelques " +
    "bâtonnets cuits dans l'assiette : c'est l'âge où l'on attrape tout seul.",
  "12-17": "Le plat de la famille, coupé en petits morceaux. La part se prélève avant " +
    "d'assaisonner.",
  "18-35": "Comme les grands, en morceaux de la taille d'un dé, dans une assiette à part.",
  "3-5": "Presque tout, dans l'assiette de la famille. Restent les aliments durs et ronds, " +
    "qui se coupent encore."
};

/* ---------------------------------------------------------------------------
   LES POINTS D'ATTENTION, rattachés à ce qu'il y a VRAIMENT dans le plat.

   Chacun porte l'âge en dessous duquel il s'applique, et un mot sur ce qu'on
   fait — pas seulement ce qu'on évite : « prélever avant de saler » est utile,
   « attention au sel » ne l'est pas.

   `mots` se compare en MOTS ENTIERS, avec le même outil que le reste de
   l'application (contientProduit) : « pâte de curry » ne déclenche pas
   « pâtes », « bouillon de bœuf » ne déclenche pas « bœuf ».
   --------------------------------------------------------------------------- */
const ALERTES_PETITS = [
  {
    cle: "miel", avant: 12, titre: "Pas de miel",
    mots: ["miel"],
    texte: "Le miel est déconseillé avant un an, même cuit : il peut contenir une bactérie " +
      "que l'intestin d'un bébé ne sait pas encore arrêter. Retirez sa part avant, ou " +
      "remplacez par une compote."
  },
  {
    cle: "coque", avant: 60, titre: "Fruits à coque : en poudre, jamais entiers",
    mots: ["noix", "noisette", "amande", "pistache", "cacahuete", "arachide", "noix de cajou",
      "pignon", "graines de courge", "graines de tournesol"],
    /* Trouvé à l'essai : une tarte aux pommes déclenchait l'alerte à cause de
       sa POUDRE d'amande — que le texte de l'alerte autorise justement. */
    sauf: ["poudre", "puree", "lait", "huile", "beurre", "farine"],
    texte: "Entiers ou en morceaux, ils s'étouffent très facilement jusqu'à cinq ans. " +
      "En poudre ou en purée, il n'y a pas de problème — c'est même recommandé tôt."
  },
  {
    cle: "ronds", avant: 60, titre: "Coupez dans la longueur",
    mots: ["raisin", "tomate cerise", "olive", "cerise", "mirabelle", "saucisse", "knacki",
      "chipolata", "mozzarella"],
    /* Trouvés à l'essai : l'HUILE d'olive et la CHAIR à saucisse n'ont rien de
       rond ni de dur, et déclenchaient l'alerte. */
    sauf: ["huile", "chair", "pate", "jus", "vinaigre"],
    texte: "Rond, lisse et de la taille d'une gorge : c'est la forme qui bouche. Coupez en " +
      "deux dans la LONGUEUR, puis en quatre — jamais en rondelles."
  },
  {
    cle: "cru", avant: 60, titre: "Bien cuit pour les petits",
    mots: ["tartare", "carpaccio", "saumon fume", "truite fumee", "huitre", "sushi",
      "mayonnaise", "tiramisu", "mousse au chocolat", "oeuf poche", "oeuf mollet"],
    texte: "Œufs, poissons et coquillages crus ou peu cuits sont déconseillés avant cinq ans. " +
      "Prévoyez une part cuite à cœur, ou autre chose ce soir-là."
  },
  {
    cle: "laitCru", avant: 60, titre: "Fromages au lait cru : pas encore",
    mots: ["lait cru", "reblochon", "mont d'or", "roquefort", "gorgonzola", "camembert",
      "brie", "munster", "bleu"],
    texte: "Les fromages au lait cru et à croûte fleurie sont déconseillés avant cinq ans. " +
      "Un fromage au lait pasteurisé ou cuit (emmental, comté) passe sans souci."
  },
  {
    cle: "charcuterie", avant: 36, titre: "Charcuterie : plus tard",
    /* « pate » est à bannir d'une liste de mots : une fois les accents retirés,
       la PÂTE brisée d'une tarte devient le PÂTÉ (trouvé à l'essai). On nomme
       donc les préparations en entier. */
    mots: ["jambon cru", "chorizo", "saucisson", "lardon", "bacon", "rillettes",
      "pate de campagne", "pate en croute", "andouille", "merguez", "boudin"],
    texte: "Trop salée et trop grasse pour un tout-petit, et crue pour certaines. Servez-lui " +
      "la garniture, ou un peu de jambon blanc à la place."
  },
  {
    cle: "epices", avant: 36, titre: "Prélevez avant d'épicer",
    mots: ["piment", "harissa", "curry", "ras el-hanout", "paprika fort", "poivre de cayenne",
      "tabasco", "moutarde", "wasabi"],
    texte: "Rien d'interdit, mais le goût est fort et l'estomac petit. Mettez sa part de côté " +
      "avant d'ajouter les épices : il goûtera le plat, pas le piment."
  },
  {
    cle: "predateur", avant: 36, titre: "Gros poissons : pas trop souvent",
    mots: ["thon", "espadon", "lotte", "raie", "fletan", "marlin", "requin"],
    texte: "Ces poissons concentrent le mercure : les autorités recommandent de les réserver " +
      "aux occasions pour les jeunes enfants. Un cabillaud, un lieu ou une sardine, autant " +
      "qu'on veut."
  },
  {
    cle: "sucre", avant: 12, titre: "Pas de sucre ajouté",
    mots: ["sucre", "sirop", "confiture", "nutella", "chocolat", "bonbon", "caramel",
      "sucre glace", "cassonade"],
    texte: "Avant un an, on n'ajoute pas de sucre : le goût sucré s'installe vite et le reste " +
      "paraît fade ensuite. Une compote sans sucre ou un fruit écrasé fait le dessert."
  },
  {
    cle: "alcool", avant: 60, titre: "L'alcool de cuisson ne part pas entièrement",
    mots: ["vin", "biere", "cidre", "rhum", "cognac", "porto", "kirsch", "champagne",
      "cremant", "whisky", "calvados", "armagnac"],
    texte: "Même après cuisson, il en reste une part. Pour un jeune enfant, prélevez avant " +
      "de déglacer, ou remplacez par du bouillon ou du jus de raisin."
  },
  {
    cle: "cafeine", avant: 60, titre: "Ni café ni thé",
    mots: ["cafe", "the", "the vert", "matcha", "cacao amer", "guarana"],
    texte: "La caféine et la théine n'ont pas leur place dans l'assiette d'un jeune enfant. " +
      "Préparez sa part sans."
  }
];

/* Le sel ne s'attrape pas par un ingrédient — il est partout et presque jamais
   écrit. On regarde donc aussi le DÉROULÉ : « salez », « rectifiez
   l'assaisonnement », « bouillon cube ». */
const MOTS_SEL = ["sel", "salez", "saler", "sale", "assaisonnement", "assaisonnez",
  "bouillon", "cube", "sauce soja", "fond de veau"];

function tranchesDuFoyer() {
  const l = (typeof reglagesFamille === "function" && reglagesFamille().petits) || [];
  return Array.isArray(l) ? l.filter((v) => PLUS_JEUNE[v] !== undefined) : [];
}
/* La tranche qui commande : la plus jeune de la maison. */
function trancheLaPlusJeune() {
  const l = tranchesDuFoyer().slice().sort((a, b) => PLUS_JEUNE[a] - PLUS_JEUNE[b]);
  return l[0] || null;
}
function infoTranche(val) {
  return TRANCHES_PETITS.find((t) => t.val === val) || null;
}

/* ===================== LE CAHIER DES PETITS (18/10/2026) =====================

   Quelles recettes de bébé se montrent à cette maison. La règle vient de la
   table : un bébé de 9 mois mange encore une purée écrite pour 6 mois,
   l'inverse n'est pas vrai. On ouvre donc, pour chaque tranche cochée,
   CETTE tranche et CELLE D'AVANT — pas tout le cahier, sinon un parent de
   quatre ans recevrait huit premières purées dont il n'a plus l'usage.

   Aucune tranche cochée : le cahier reste fermé, et le filtre n'apparaît
   même pas. */
function bandesDuCahier() {
  const vals = TRANCHES_PETITS.map((t) => t.val);
  const ouvertes = [];
  tranchesDuFoyer().forEach((v) => {
    const k = vals.indexOf(v);
    if (k === -1) return;
    if (ouvertes.indexOf(v) === -1) ouvertes.push(v);
    const avant = vals[k - 1];
    if (avant && ouvertes.indexOf(avant) === -1) ouvertes.push(avant);
  });
  return ouvertes;
}
/* Appelée par app.js sous un `typeof` : sans ce fichier, aucune recette de
   bébé ne passe nulle part. Un plat ordinaire passe toujours. */
function bebeVisible(r) {
  if (!r || typeof estPourBebe !== "function" || !estPourBebe(r)) return true;
  return bandesDuCahier().indexOf(r.des) !== -1;
}

/* ================= LA SYNCHRO FAMILLE / BÉBÉ (18/10/2026) =================

   Un seul panier, deux repas : si bébé mange une purée de carotte, la
   famille peut manger des carottes autrement le même soir.

   CE QUI RAPPROCHE DEUX PLATS : le légume ou le fruit VEDETTE, celui qui
   est dans le NOM du plat. « Gratin de courgettes » est un plat de
   courgettes ; une blanquette qui contient deux carottes n'en est pas un —
   c'est pour cela qu'on ne regarde PAS la liste des ingrédients côté
   famille. Côté bébé, si le nom ne dit rien (« Soupe de légumes »), on se
   rabat sur ses ingrédients : la liste est courte et voulue. */
const LEGUMES_PARTAGES = ["carotte", "courgette", "patate douce", "potimarron",
  "potiron", "courge", "haricot vert", "panais", "brocoli", "chou-fleur", "epinard",
  "petit pois", "poireau", "navet", "pomme de terre", "tomate", "poivron", "aubergine",
  "betterave", "celeri", "fenouil", "champignon", "concombre", "endive", "artichaut",
  "asperge", "mais", "lentille", "pois chiche", "haricot rouge",
  "riz", "semoule", "quinoa", "boulgour",
  "pomme", "poire", "banane", "abricot", "mangue", "peche", "fraise", "framboise",
  "cerise", "prune", "orange", "ananas", "kiwi", "melon", "myrtille"];

/* Un texte réduit à ses mots, sans accent et sans pluriel — MOT À MOT.
   « haricots verts » doit rejoindre « haricot vert » : le pluriel porte sur
   les deux mots, et ne le faire que sur le dernier ne marchait pas. */
function motsPourSynchro(texte) {
  return " " + String(texte || "").toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ").trim()
    .split(" ")
    .map((m) => (m.length > 3 && /[sx]$/.test(m) ? m.slice(0, -1) : m))
    .join(" ") + " ";
}
function contientVedette(texte, mot) {
  return motsPourSynchro(texte).indexOf(motsPourSynchro(mot).slice(0, -1)) !== -1;
}
/* Les vedettes d'un texte, les plus longues d'abord, en jetant celles qu'une
   plus longue contient déjà : « pomme de terre » chasse « pomme ». Sans
   cela, une compote de pomme proposait un poulet aux pommes de terre. */
function vedettesDe(texte) {
  const trouves = LEGUMES_PARTAGES.filter((l) => contientVedette(texte, l))
    .sort((a, b) => b.length - a.length);
  const gardes = [];
  trouves.forEach((l) => {
    if (!gardes.some((g) => contientVedette(g, l))) gardes.push(l);
  });
  return gardes;
}
function vedettesDuPlat(r) { return vedettesDe((r && r.nom) || ""); }
/* Côté bébé seulement : le repli sur les ingrédients. */
function vedettesDeLaRecetteBebe(r) {
  const n = vedettesDuPlat(r);
  if (n.length) return n;
  return vedettesDe((((r && r.ingredients) || []).map((x) => x && x.nom).join(" ; ")));
}

/* On en montre trois, pas davantage : une liste de trente propositions sous
   une recette, personne ne la lit. Celles de saison passent devant. */
const SYNCHRO_MONTREES = 3;
function troisDeSaison(l) {
  return l.slice().sort((a, b) => {
    const sa = typeof estDeSaison === "function" ? (estDeSaison(a) ? 0 : 1) : 0;
    const sb = typeof estDeSaison === "function" ? (estDeSaison(b) ? 0 : 1) : 0;
    return sa - sb || String(a.nom).localeCompare(String(b.nom));
  }).slice(0, SYNCHRO_MONTREES);
}
/* Les plats de la famille qui partagent une vedette avec cette recette de
   bébé. Les plats de fête restent dehors : ce n'est pas un mardi soir. */
function platsFamilleAvec(r) {
  const cles = vedettesDeLaRecetteBebe(r);
  if (!cles.length) return [];
  return troisDeSaison((etat.recettes || []).filter((x) =>
    !(typeof estPourBebe === "function" && estPourBebe(x)) &&
    !(typeof estDeFete === "function" && estDeFete(x)) &&
    vedettesDuPlat(x).some((l) => cles.indexOf(l) !== -1)));
}
/* Et l'inverse : les recettes de bébé qui vont avec ce plat de la famille.
   Seulement celles que la maison a le droit de voir. */
function recettesBebeAvec(r) {
  const cles = vedettesDuPlat(r);
  if (!cles.length) return [];
  return troisDeSaison((etat.recettes || []).filter((x) =>
    (typeof estPourBebe === "function" && estPourBebe(x)) && bebeVisible(x) &&
    vedettesDeLaRecetteBebe(x).some((l) => cles.indexOf(l) !== -1)));
}

/* Le mot qui nomme ce qu'on partage : « les mêmes carottes », et pas une
   phrase générique — c'est ce qui rend la proposition évidente. */
function motDesVedettes(cles) {
  if (!cles.length) return "les mêmes ingrédients";
  const noms = cles.slice(0, 2).map((l) =>
    l === "riz" || l === "mais" || l === "quinoa" || l === "boulgour" ||
    l === "semoule" ? "le même " + l : "les mêmes " + l + "s");
  return noms.join(" et ");
}
function blocSynchro(titre, emoji, liste, cles) {
  if (!liste.length) return "";
  const ech = (s) => (typeof esc === "function" ? esc(s) : String(s));
  return '<div class="sous-titre" style="margin:.7rem 0 .35rem"><h3>' +
    emoji + " " + titre + " " + ech(motDesVedettes(cles)) + "</h3></div>" +
    '<div class="puces">' + liste.map((x) =>
      '<button class="puce" data-action="recette-voir" data-id="' + ech(x.id) + '">' +
      ech((x.emoji || "🍽️") + " " + x.nom) + "</button>").join("") + "</div>";
}
/* Ce qui s'ajoute sous une fiche de recette, dans un sens ou dans l'autre. */
function synchroDuPlat(r) {
  if (typeof estPourBebe === "function" && estPourBebe(r)) {
    return blocSynchro("Pour la famille, avec", "🍽️",
      platsFamilleAvec(r), vedettesDeLaRecetteBebe(r));
  }
  return blocSynchro("Pour bébé, avec", "👶", recettesBebeAvec(r), vedettesDuPlat(r));
}
/* Et sous un repas déjà prévu dans la semaine : « si tu prévois ça, voilà
   pour bébé ». Rien si la maison n'a pas de tout-petit. */
function ligneBebeDuRepas(r) {
  if (!r || !trancheLaPlusJeune()) return "";
  if (typeof estPourBebe === "function" && estPourBebe(r)) return "";
  return synchroDuPlat(r);
}

/* Un plat se lit en MORCEAUX — son nom, chaque ingrédient, chaque étape — et
   jamais d'un bloc. Deux raisons, les deux trouvées à l'essai :
   - le NOM porte parfois l'essentiel (« Tartare de saumon ») et il manquait ;
   - « sauf » n'a de sens que sur le morceau qui a déclenché : « huile d'olive »
     ne doit pas être sauvée par une olive citée trois lignes plus bas. */
function morceauxDuPlat(r) {
  return [(r && r.nom) || ""]
    .concat(((r && r.ingredients) || []).map((i) => (i && i.nom) || ""))
    .concat((r && r.etapes) || [])
    .filter((t) => String(t).trim());
}
function platContient(r, mots, sauf) {
  if (typeof motsDe !== "function" || typeof contientProduit !== "function") return false;
  return morceauxDuPlat(r).some((t) => {
    const m = motsDe(t);
    if ((sauf || []).some((p) => contientProduit(m, p))) return false;
    return mots.some((p) => contientProduit(m, p));
  });
}

/* Ce qu'il faut dire pour CE plat et CETTE tranche. Rien d'inventé : une
   alerte ne sort que si le plat la contient vraiment. */
function alertesDuPlat(r, trancheVal) {
  const mois = PLUS_JEUNE[trancheVal];
  if (mois === undefined) return [];
  const l = ALERTES_PETITS.filter((a) => mois < a.avant && platContient(r, a.mots, a.sauf));
  /* Le sel : avant un an on ne sale pas du tout, après on prélève avant. */
  if (mois < 36 && platContient(r, MOTS_SEL)) {
    l.push({
      cle: "sel", titre: mois < 12 ? "Pas de sel" : "Prélevez avant de saler",
      texte: mois < 12
        ? "Les reins d'un bébé ne savent pas encore éliminer le sel. Mettez sa part de côté " +
          "avant de saler, et méfiez-vous des bouillons cubes, déjà très salés."
        : "Prenez sa part avant l'assaisonnement final : un plat salé pour des adultes l'est " +
          "beaucoup trop pour lui."
    });
  }
  return l;
}

/* La carte affichée sous une recette. Rend "" si la famille n'a coché aucune
   tranche : un module qu'on n'utilise pas ne doit rien occuper. */
function cartePetits(r) {
  if (!r) return "";
  /* UNE RECETTE DU CAHIER DES PETITS EST DÉJÀ ÉCRITE POUR L'ÂGE
     (18/10/2026). Deux conséquences : on affiche l'âge de LA RECETTE, pas
     celui du plus jeune de la maison ; et on n'affiche AUCUN avertissement.
     Le second point n'est pas un détail : ces recettes disent elles-mêmes
     « aucun sucre », « sans sel », « ni miel » — ces mots-là auraient
     déclenché des alertes sur des plats qui n'en contiennent pas. */
  const duCahier = typeof estPourBebe === "function" && estPourBebe(r);
  const tranche = duCahier ? r.des : trancheLaPlusJeune();
  if (!tranche || !infoTranche(tranche)) return "";
  const t = infoTranche(tranche);
  const alertes = duCahier ? [] : alertesDuPlat(r, tranche);
  const ech = (s) => (typeof esc === "function" ? esc(s) : String(s));
  return '<div class="carte" style="margin-bottom:.75rem">' +
    '<div class="carte-titre">' + t.emoji + " " +
    (duCahier ? "Recette écrite pour les " : "Pour un enfant de ") + ech(t.nom) + "</div>" +
    '<div class="ligne"><span style="font-size:1.2rem">🥄</span>' +
    '<div class="ligne-corps"><b style="font-weight:500;line-height:1.5">' +
    ech(TEXTURE_PETITS[tranche]) + "</b></div></div>" +
    alertes.map((a) =>
      '<div class="ligne" style="align-items:flex-start">' +
      '<span style="font-size:1.1rem;margin-top:.1rem">⚠️</span>' +
      '<div class="ligne-corps"><b>' + ech(a.titre) + "</b><small>" + ech(a.texte) +
      "</small></div></div>").join("") +
    /* Le même panier, deux repas (18/10/2026). */
    synchroDuPlat(r) +
    '<p class="aide" style="margin:.6rem 0 0">Repères généraux de la diversification ' +
    "alimentaire. Ils ne remplacent pas votre médecin ou votre PMI, et ne savent rien " +
    "d'une allergie ou d'une histoire particulière.</p>" +
    "</div>";
}
