/* =========================================================================
   MATRIBU — le mot du jour
   =========================================================================
   Demandé par Amandine le 18/09/2026 (0.60). Un mot à trouver en 6 essais,
   LE MÊME pour toute la tribu — et pour toutes les tribus : il ne dépend
   que de la date du téléphone. On compare le soir, à table.

   TROIS NIVEAUX depuis le 03/11/2026, à sa demande. Ce qui change, c'est la
   LONGUEUR du mot et sa DIFFICULTÉ :
     🐣 Facile     4 lettres, des mots qu'un enfant lit d'un coup d'œil ;
     ⭐ Normal     5 lettres — exactement le jeu d'avant, mots inchangés ;
     🔥 Difficile  6 lettres, des mots plus riches.
   Le nombre d'essais ne change pas : six pour tout le monde.

   CHACUN CHOISIT LE SIEN, depuis l'écran du jeu (son choix, contre un
   réglage tenu par un parent) : un enfant qui progresse passe en Normal
   tout seul. Le niveau est gardé sur l'appareil, et il voyage avec la
   partie du jour pour que la tribu voie à quel niveau chacun a joué.

   LES TROIS MOTS D'UN MÊME JOUR PARLENT DE LA MÊME CHOSE aux dates qui
   comptent : le 2 février, les petits cherchent « pâte », les grands
   « farine » ; le 25 décembre, « noël », « bûche » et « cadeau ». On parle
   donc du même sujet à table, même sans jouer au même niveau.

   SES AUTRES CHOIX
   - Deux aides : une devinette, puis la première lettre. L'aide prise se
     voit dans le résultat. Elles s'ouvrent plus ou moins tôt selon le
     niveau (voir `aides` ci-dessous) : tout de suite en Facile, après 2 et
     4 essais en Normal, après 3 et 5 en Difficile.
   - La tribu voit qui a trouvé, et en combien d'essais, avec de petites
     grilles de couleurs. JAMAIS le mot ni les lettres tapées : elles ne
     quittent pas l'appareil.
   - Pas de points. La « série de la tribu » compte les jours d'affilée où
     quelqu'un de la famille a trouvé : on gagne ensemble, pas les uns
     contre les autres. Peu importe le niveau de celui qui trouve.
   - Les mots tapés sont vérifiés dans un vrai dictionnaire (mots.js).

   LES COULEURS, doublées d'une FORME pour les daltoniens (le vert et
   l'orange se confondent souvent) : carré vert = la lettre est bien placée ;
   ROND orange = elle est dans le mot, ailleurs ; gris = elle n'y est pas.

   CE QUI VOYAGE : un document par membre, familles/{code}/motsDuJour/{id},
   qui porte sa partie du jour et celle de la veille (la série en a besoin) :
     { jour, niveau, grille: "vgogg,ovggv", fini, aide, serie, veille: {…} | null }
   `niveau` décrit la grille qui est dans CE document : c'est lui qui dit
   combien de lettres compte chaque rangée. Deux jours au plus : rien ne
   s'accumule. Voir firestore.rules.

   Chargé APRÈS formulaires.js (il complète Formulaires) et AVANT app.js :
   il n'appelle les fonctions d'app.js (isoDate, deIso, esc, moi, etat,
   Store…) qu'au moment où l'on joue, jamais au chargement.
   ========================================================================= */

/* Six essais, quel que soit le niveau : la grille garde la même allure, et
   l'on compare « trouvé en 3 » d'un joueur à l'autre. */
const MOT_JOUR_ESSAIS = 6;
const CLAVIER_MOT_JOUR = ["AZERTYUIOP", "QSDFGHJKLM", "WXCVBN"];

/* Les trois niveaux, du plus facile au plus difficile.
   `aides` = les essais à faire avant d'avoir droit à la devinette, puis à la
   première lettre. Une aide offerte tout de suite se prend sans réfléchir :
   en Normal et en Difficile, elle se mérite (choix d'Amandine du 22/09/2026,
   étendu aux niveaux le 03/11/2026). En Facile, les deux sont là dès le
   début — pour un enfant qui commence à lire, l'enjeu est de jouer. */
const NIVEAUX_MOT_JOUR = [
  { cle: "facile", nom: "Facile", emoji: "🐣", lettres: 4, aides: [0, 0] },
  { cle: "normal", nom: "Normal", emoji: "⭐", lettres: 5, aides: [2, 4] },
  { cle: "difficile", nom: "Difficile", emoji: "🔥", lettres: 6, aides: [3, 5] }
];
const NIVEAU_MOT_JOUR_DEFAUT = "normal";

/* 366 mots PAR NIVEAU, UN PAR JOUR DE L'ANNÉE, dans l'ordre du calendrier
   d'une année bissextile : le rang 0 est le 1er janvier, le 59 le 29 février,
   le 365 le 31 décembre. Le même mot revient donc à la même date chaque
   année — la crêpe à la Chandeleur, la bûche à Noël, l'école à la rentrée.
   Écrits pour MaTribu : des mots que les enfants connaissent, sans gros
   mot, rangés par saison, jamais deux devinettes pareilles de suite. Tous
   sont dans Lexique 3.83 (voir mots.js).
   Chaque entrée : "MOT SANS ACCENT|orthographe|devinette". */

/* ⭐ NORMAL — 5 lettres. Ces 366 mots sont ceux de la première version, à la
   lettre près : une famille qui joue depuis septembre ne voit aucun
   changement. Le nom `MOTS_DU_JOUR` est celui d'alors ; app.js s'en sert
   pour savoir si ce fichier est bien chargé. */
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

/* 🐣 FACILE — 4 lettres. */
const MOTS_FACILE = [
  "VOEU|voeu|on en fait un au Nouvel An" /* 01 */,
  "BROC|broc|un grand pichet",
  "QUAI|quai|au bord de l'eau ou du train",
  "SEUL|seul|tout seul",
  "SARI|sari|un vêtement indien",
  "FEVE|fève|dans la galette des rois",
  "DUEL|duel|un contre un",
  "HUIT|huit|deux fois quatre",
  "JUIN|juin|le mois avant juillet",
  "KIWI|kiwi|un fruit vert",
  "MINI|mini|tout petit",
  "JOIE|joie|quand on est très content",
  "LUGE|luge|pour glisser sur la neige",
  "HALO|halo|un cercle de lumière",
  "PERE|père|le papa",
  "SOIN|soin|faire attention",
  "DODO|dodo|le mot des petits pour dormir",
  "KAKI|kaki|une couleur verte foncée",
  "ALTO|alto|un instrument à cordes",
  "BRUN|brun|une couleur foncée",
  "BRAS|bras|le long du corps",
  "BISE|bise|un vent froid",
  "PAIN|pain|on l'achète à la boulangerie",
  "RAIE|raie|un poisson plat de la mer",
  "NEUF|neuf|tout nouveau",
  "OCRE|ocre|une couleur de terre",
  "RACE|race|une sorte d'animal",
  "POLE|pôle|tout en haut de la Terre",
  "MOUE|moue|la grimace du boudeur",
  "GAZE|gaze|un pansement léger",
  "FOND|fond|tout au fond",
  "HAIE|haie|des buissons alignés" /* 02 */,
  "PATE|pâte|on la travaille pour les crêpes",
  "VIDE|vide|il n'y a rien dedans",
  "ELAN|élan|un grand animal du nord",
  "BOND|bond|un grand saut",
  "BLEU|bleu|la couleur du ciel",
  "CAVE|cave|sous la maison",
  "BEAU|beau|joli",
  "PIED|pied|au bout de la jambe",
  "SALE|sale|pas propre",
  "BETE|bête|un animal",
  "SOFA|sofa|un grand siège",
  "STOP|stop|le mot pour s'arrêter",
  "ROSE|rose|la fleur du 14 février",
  "CHOU|chou|un légume",
  "PORC|porc|un animal de la ferme",
  "DOUX|doux|tout doux",
  "LOIR|loir|un petit animal qui dort beaucoup",
  "PALE|pâle|presque blanc",
  "FILM|film|on le regarde",
  "CAKE|cake|un gâteau long",
  "CLAN|clan|un grand groupe de famille",
  "AILE|aile|l'oiseau s'en sert pour voler",
  "CURE|cure|un séjour pour se soigner",
  "EXPO|expo|on y regarde des œuvres",
  "VRAI|vrai|pas faux",
  "TOUX|toux|quand on est enrhumé",
  "LIME|lime|pour les ongles",
  "JEEP|jeep|une voiture tout-terrain",
  "ZONE|zone|un endroit délimité" /* 03 */,
  "RAVI|ravi|très content",
  "CUBE|cube|une forme à six faces",
  "AGIR|agir|faire quelque chose",
  "YETI|yéti|le monstre des neiges",
  "ORGE|orge|une céréale",
  "PNEU|pneu|autour de la roue",
  "POIL|poil|sur le dos du chat",
  "CLUB|club|on s'y retrouve pour un sport",
  "JAZZ|jazz|une musique",
  "NAIN|nain|tout petit dans les contes",
  "LOUP|loup|un animal de la forêt",
  "SAGA|saga|une longue histoire",
  "BUEE|buée|sur la vitre froide",
  "SOIE|soie|un tissu très doux",
  "SEAU|seau|pour porter de l'eau",
  "JOUE|joue|on y fait un bisou",
  "TOFU|tofu|fait avec du soja",
  "LABO|labo|on y fait des expériences",
  "JUDO|judo|un sport de combat",
  "CHAT|chat|un animal de la maison",
  "MEMO|mémo|un petit mot pour ne pas oublier",
  "URNE|urne|un grand vase",
  "DIRE|dire|avec la bouche",
  "CIEL|ciel|au-dessus de nos têtes",
  "SUMO|sumo|un sport japonais",
  "ETAU|étau|un outil qui serre fort",
  "VASE|vase|pour les fleurs",
  "ANSE|anse|la poignée du panier",
  "RAIL|rail|le train roule dessus",
  "FILE|file|on y attend son tour",
  "RIRE|rire|ce qu'on fait quand c'est drôle" /* 04 */,
  "TROU|trou|un creux",
  "SEVE|sève|ce qui coule dans l'arbre",
  "PAVE|pavé|une pierre de la rue",
  "MONT|mont|une montagne",
  "GRUE|grue|un grand oiseau",
  "VITE|vite|à toute allure",
  "MULE|mule|un animal qui porte les sacs",
  "DEUX|deux|une paire",
  "CHEF|chef|celui qui commande",
  "TAXI|taxi|une voiture qu'on appelle",
  "CHUT|chut|pour demander le silence",
  "RIME|rime|deux mots qui finissent pareil",
  "PEAU|peau|elle couvre tout le corps",
  "PAPA|papa|le père",
  "PUMA|puma|un gros chat sauvage",
  "VELO|vélo|il a deux roues",
  "NOCE|noce|une grande fête de mariage",
  "YOYO|yoyo|il monte et il descend",
  "TALC|talc|une poudre pour bébé",
  "CRAN|cran|du courage",
  "HALL|hall|la grande entrée",
  "BASE|base|ce sur quoi on s'appuie",
  "BAIN|bain|dans la baignoire",
  "MODE|mode|ce qui plaît en ce moment",
  "SCIE|scie|pour couper le bois",
  "OSER|oser|avoir le courage",
  "CIRE|cire|pour faire briller le bois",
  "BOIS|bois|plein d'arbres",
  "FUIR|fuir|partir très vite",
  "BRIN|brin|on en offre un de muguet" /* 05 */,
  "TOME|tome|un gros livre d'une série",
  "RIDE|ride|un petit pli sur la peau",
  "BORD|bord|tout au bout",
  "TIGE|tige|la plante s'y tient debout",
  "PAIR|pair|deux ensemble",
  "AIDE|aide|un coup de main",
  "PAON|paon|un oiseau avec une belle queue",
  "LUNE|lune|elle brille la nuit",
  "MOIS|mois|il y en a douze dans l'année",
  "TELE|télé|on la regarde au salon",
  "MARS|mars|le mois du printemps",
  "FOUR|four|pour cuire les gâteaux",
  "OEIL|oeil|on s'en sert pour voir",
  "PARC|parc|des arbres et des jeux",
  "DOJO|dojo|la salle du judo",
  "ROLE|rôle|ce qu'on joue au théâtre",
  "CIME|cime|tout en haut de l'arbre",
  "MIEL|miel|c'est l'abeille qui le fait",
  "NUEE|nuée|un gros nuage",
  "TAIE|taie|elle habille l'oreiller",
  "CINQ|cinq|les doigts d'une main",
  "FLOU|flou|pas net",
  "EMOI|émoi|quand le cœur bat fort",
  "GOLF|golf|un sport avec une petite balle",
  "POIS|pois|un petit légume rond",
  "NERF|nerf|un fil dans le corps",
  "KILT|kilt|une jupe écossaise",
  "TUBE|tube|le dentifrice est dedans",
  "GARE|gare|on y prend le train",
  "MERE|mère|la maman",
  "VERT|vert|la couleur de l'herbe" /* 06 */,
  "IDEE|idée|elle arrive dans la tête",
  "ORME|orme|un arbre",
  "LONG|long|pas court",
  "AUGE|auge|le plat du cochon",
  "LOGE|loge|la petite pièce du théâtre",
  "TETE|tête|tout en haut du corps",
  "FORT|fort|pas faible",
  "VOIE|voie|un chemin pour le train",
  "IRIS|iris|une fleur",
  "PION|pion|une pièce du jeu de dames",
  "VISA|visa|un papier pour voyager",
  "RUSE|ruse|une idée maligne",
  "INFO|info|une nouvelle",
  "AUBE|aube|le tout début du jour",
  "VOIR|voir|avec les yeux",
  "PAPY|papy|le papa de papa",
  "OVNI|ovni|un objet volant mystérieux",
  "ZERO|zéro|rien du tout",
  "AMAS|amas|un gros tas",
  "NOTE|note|en musique",
  "METS|mets|un joli mot pour un plat",
  "TONG|tong|une chaussure d'été",
  "CLOU|clou|on le plante avec un marteau",
  "KILO|kilo|mille grammes",
  "MAIN|main|au bout du bras",
  "PAIX|paix|le contraire de la guerre",
  "ROBE|robe|un vêtement de fille",
  "NAGE|nage|dans la piscine",
  "DUNE|dune|une colline de sable",
  "JUPE|jupe|un vêtement" /* 07 */,
  "OTER|ôter|enlever",
  "TUBA|tuba|pour respirer sous l'eau",
  "RUNE|rune|un signe magique",
  "POLO|polo|un sport à cheval",
  "REVE|rêve|dans la nuit, dans la tête",
  "NIER|nier|dire que non",
  "CAGE|cage|la maison de l'oiseau",
  "BAIE|baie|un tout petit fruit",
  "CRIN|crin|un poil de cheval",
  "ACTE|acte|une partie d'une pièce",
  "PARI|pari|on dit qui va gagner",
  "FOIN|foin|l'herbe séchée",
  "AINE|aîné|le plus grand des enfants",
  "VOIX|voix|elle sort de la bouche",
  "MURE|mûre|un petit fruit noir",
  "AUTO|auto|elle a quatre roues",
  "PORT|port|pour les bateaux",
  "JONC|jonc|une plante au bord de l'eau",
  "YOGA|yoga|pour se détendre",
  "FACE|face|le devant",
  "RAME|rame|pour faire avancer la barque",
  "ETUI|étui|pour ranger ses lunettes",
  "NORD|nord|un point sur la boussole",
  "TATA|tata|la sœur de maman",
  "COUR|cour|devant la maison",
  "HIER|hier|le jour d'avant",
  "SURF|surf|sur les vagues",
  "JEUX|jeux|on y joue",
  "OEUF|oeuf|la poule le pond",
  "DENT|dent|dans la bouche",
  "DAIM|daim|un cousin du cerf" /* 08 */,
  "AZUR|azur|le bleu du ciel",
  "MITE|mite|un petit insecte des placards",
  "GRIL|gril|pour cuire la viande",
  "HAUT|haut|pas bas",
  "JARS|jars|le papa des oisons",
  "FAIM|faim|quand le ventre crie",
  "GITE|gîte|une maison pour les vacances",
  "THYM|thym|une herbe qui sent bon",
  "MIME|mime|il joue sans parler",
  "MAIS|maïs|un légume jaune en grains",
  "AIRE|aire|un endroit, un espace",
  "LIER|lier|attacher ensemble",
  "SOIF|soif|quand on veut boire",
  "MARE|mare|une petite étendue d'eau",
  "FLAN|flan|un dessert",
  "TOUR|tour|on y monte par l'escalier",
  "ROTI|rôti|une viande cuite au four",
  "COIN|coin|là où deux murs se touchent",
  "SODA|soda|une boisson qui pique",
  "ILOT|îlot|une toute petite île",
  "PILE|pile|dans la télécommande",
  "ROND|rond|comme un ballon",
  "CAMP|camp|on y plante la tente",
  "GAIN|gain|ce qu'on gagne",
  "ECHO|écho|la voix qui revient",
  "RITE|rite|quelque chose qu'on refait pareil",
  "AOUT|août|le mois des vacances",
  "SILO|silo|une grande réserve à grains",
  "ZOOM|zoom|pour voir de plus près",
  "MAGE|mage|un roi venu d'Orient",
  "EXAM|exam|un contrôle à l'école" /* 09 */,
  "CINE|ciné|on y voit des films",
  "DEMI|demi|la moitié",
  "RANG|rang|les uns derrière les autres",
  "LUTH|luth|un instrument ancien",
  "EGAL|égal|pareil",
  "LAMA|lama|un animal des montagnes",
  "TRIO|trio|à trois",
  "DATE|date|le jour sur le calendrier",
  "SAXO|saxo|un instrument qui brille",
  "PAYS|pays|la France en est un",
  "BUIS|buis|un petit arbre du jardin",
  "CONE|cône|la forme d'une glace",
  "DICO|dico|le livre des mots",
  "LUXE|luxe|très cher et très beau",
  "RENE|rêne|la lanière pour diriger le cheval",
  "MINE|mine|on y creuse la terre",
  "MUET|muet|qui ne parle pas",
  "PRET|prêt|tout est fini",
  "FLOT|flot|l'eau qui coule",
  "ANIS|anis|une graine qui parfume",
  "CRUE|crue|la rivière qui monte",
  "SOIR|soir|avant la nuit",
  "HOTE|hôte|celui qui reçoit",
  "SAGE|sage|pas turbulent",
  "MARI|mari|le monsieur marié",
  "COCO|coco|la noix des îles",
  "MOTO|moto|elle a deux roues et un moteur",
  "LIRE|lire|ce qu'on fait avec un livre",
  "ROUX|roux|la couleur des cheveux de certains",
  "PAGE|page|on la tourne dans un livre" /* 10 */,
  "UNIR|unir|mettre ensemble",
  "BANC|banc|pour s'asseoir dehors",
  "MAIL|mail|un message sur l'ordinateur",
  "THON|thon|un poisson de la mer",
  "BOUT|bout|la fin du morceau",
  "BOUE|boue|de la terre mouillée",
  "JOUR|jour|il fait clair",
  "FAON|faon|le bébé de la biche",
  "LARD|lard|un morceau de cochon",
  "OURS|ours|un gros animal",
  "CHOC|choc|quand deux choses se cognent",
  "BOXE|boxe|un sport avec des gants",
  "LENT|lent|tout doucement",
  "TROT|trot|le cheval va plus vite",
  "POLI|poli|il dit bonjour et merci",
  "CAFE|café|la boisson des grands le matin",
  "LION|lion|un animal d'Afrique",
  "SIRE|sire|on appelle le roi comme ça",
  "SAUT|saut|en l'air, des deux pieds",
  "DOME|dôme|le toit tout rond",
  "CERF|cerf|il porte des bois sur la tête",
  "ORAL|oral|un examen où l'on parle",
  "CANE|cane|la maman du caneton",
  "ACRE|âcre|qui pique le nez",
  "MAXI|maxi|tout grand",
  "DRAP|drap|sur le lit",
  "LAIT|lait|une boisson blanche",
  "SENS|sens|la vue, l'ouïe, le goût",
  "DEFI|défi|quelque chose de difficile à réussir",
  "PEUR|peur|quand on a froid dans le dos",
  "CHAR|char|il défile au carnaval" /* 11 */,
  "GOUT|goût|sucré, salé, acide",
  "TOIT|toit|sur la maison",
  "ROUE|roue|elle tourne",
  "LOBE|lobe|le bas de l'oreille",
  "NOIX|noix|un fruit sec",
  "LOTO|loto|un jeu de numéros",
  "ELFE|elfe|un personnage des contes",
  "SOLE|sole|un poisson plat",
  "COUT|coût|le prix",
  "NOIR|noir|la couleur de la nuit",
  "PUCE|puce|un tout petit insecte",
  "MUSE|muse|elle donne des idées",
  "GEAI|geai|un oiseau du bois",
  "JADE|jade|une pierre verte",
  "SOJA|soja|une graine",
  "BRUT|brut|pas travaillé",
  "RING|ring|le carré de la boxe",
  "MENU|menu|ce qu'on mange aujourd'hui",
  "SEPT|sept|les jours de la semaine",
  "VEAU|veau|le bébé de la vache",
  "ONDE|onde|un rond dans l'eau",
  "PULL|pull|pour avoir chaud",
  "TAXE|taxe|une somme à payer",
  "CASE|case|une petite boîte",
  "GALA|gala|une grande soirée",
  "ETAL|étal|le comptoir du marchand",
  "MIDI|midi|l'heure du déjeuner",
  "LAME|lame|le couteau en a une",
  "FOOT|foot|un sport avec un ballon",
  "VENT|vent|il fait voler les feuilles" /* 12 */,
  "FOIE|foie|un organe",
  "BOUC|bouc|le papa des chevreaux",
  "OUIE|ouïe|le sens des oreilles",
  "BEBE|bébé|le tout-petit",
  "AIGU|aigu|un son très haut",
  "CUVE|cuve|un très grand récipient",
  "RAGE|rage|une grande colère",
  "TRAM|tram|il roule sur des rails en ville",
  "ABRI|abri|pour se mettre à couvert",
  "SOLO|solo|tout seul en musique",
  "PIEU|pieu|un gros piquet",
  "CITE|cité|une grande ville",
  "AVIS|avis|ce qu'on pense",
  "DAIS|dais|un petit toit de tissu",
  "PLAN|plan|un dessin du chemin",
  "CENT|cent|dix fois dix",
  "AMIE|amie|une copine",
  "CODE|code|des chiffres secrets",
  "PLAT|plat|on le pose sur la table",
  "NUIT|nuit|le contraire du jour",
  "TARD|tard|pas tôt",
  "ANGE|ange|il a des ailes",
  "HOUX|houx|la plante piquante de Noël",
  "NOEL|noël|la fête du 25 décembre",
  "GANT|gant|pour les mains",
  "IBIS|ibis|un oiseau à long bec",
  "CAPE|cape|elle flotte derrière le dos",
  "OGRE|ogre|il fait peur dans les contes",
  "POUF|pouf|un siège tout mou",
  "FETE|fête|on la fait le 31 décembre à minuit"
];

/* 🔥 DIFFICILE — 6 lettres. */
const MOTS_DIFFICILE = [
  "AVENIR|avenir|tout ce qui reste à vivre" /* 01 */,
  "ORANGE|orange|un fruit de Noël",
  "BANQUE|banque|l'argent y dort",
  "GRILLE|grille|on voit à travers",
  "ENFANT|enfant|il grandit",
  "PRINCE|prince|il porte une couronne",
  "SAFRAN|safran|l'épice la plus chère",
  "FOUINE|fouine|un petit carnivore curieux",
  "PAYSAN|paysan|il travaille la terre",
  "TORTUE|tortue|elle porte sa maison",
  "SPHINX|sphinx|il pose des énigmes",
  "CITRON|citron|jaune et acide",
  "PALAIS|palais|la maison du roi",
  "ESTIME|estime|le respect qu'on porte",
  "PRENOM|prénom|il est écrit avant le nom",
  "SAUMON|saumon|un poisson rose",
  "BLASON|blason|les armoiries de la famille",
  "GLACON|glaçon|dans le verre ou sur le toit",
  "DESTIN|destin|ce qui devait arriver",
  "PHOQUE|phoque|un animal des banquises",
  "TEMOIN|témoin|il a tout vu",
  "VERITE|vérité|le contraire du mensonge",
  "PHRASE|phrase|elle finit par un point",
  "LIEVRE|lièvre|il court plus vite que la tortue",
  "POTAGE|potage|une soupe",
  "BUREAU|bureau|on y travaille",
  "MARCHE|marche|le samedi matin, sur la place",
  "GOSIER|gosier|le fond de la gorge",
  "PERRON|perron|les marches de l'entrée",
  "ORIENT|orient|là où le soleil se lève",
  "PORCHE|porche|l'entrée couverte",
  "BONNET|bonnet|sur la tête, en hiver" /* 02 */,
  "FARINE|farine|pour les crêpes",
  "SOURCE|source|le début de la rivière",
  "ENCENS|encens|il sent fort et fume",
  "VALEUR|valeur|ce que la chose vaut",
  "LOQUET|loquet|une petite fermeture",
  "POULET|poulet|le dimanche, au four",
  "ANGINE|angine|la gorge qui brûle",
  "BALCON|balcon|au-dessus de la rue",
  "ROSEAU|roseau|il plie mais ne rompt pas",
  "PLATRE|plâtre|blanc, sur les murs",
  "MALICE|malice|un sourire en coin",
  "ETABLI|établi|la table du bricoleur",
  "BAISER|baiser|un bisou",
  "RAGOUT|ragoût|un plat mijoté",
  "ACTEUR|acteur|il joue dans les films",
  "FUSION|fusion|deux qui n'en font qu'un",
  "GRIPPE|grippe|une maladie de l'hiver",
  "ARCADE|arcade|un passage sous les arches",
  "MIMOSA|mimosa|une boule jaune de février",
  "PAGODE|pagode|un temple d'Asie",
  "CHARME|charme|ce qui séduit",
  "FONDUE|fondue|on y trempe le pain",
  "DICTON|dicton|une phrase de nos grands-mères",
  "BOUGIE|bougie|on la souffle",
  "TURBAN|turban|un tissu enroulé sur la tête",
  "ARGILE|argile|la terre du potier",
  "BOBINE|bobine|le fil est enroulé dessus",
  "FIEVRE|fièvre|quand le corps est trop chaud",
  "SIECLE|siècle|cent ans" /* 03 */,
  "TIMBRE|timbre|on le colle sur l'enveloppe",
  "COMETE|comète|une étoile à longue traîne",
  "CONDOR|condor|un très grand rapace",
  "BALISE|balise|elle montre le chemin",
  "MUSEAU|museau|le bout du nez de l'animal",
  "VALLEE|vallée|entre deux montagnes",
  "CELERI|céleri|un légume en branches",
  "BASKET|basket|une chaussure de sport",
  "TISANE|tisane|une infusion du soir",
  "CALIFE|calife|le chef, dans les contes d'Orient",
  "CHARTE|charte|les règles écrites",
  "PELAGE|pelage|le poil de l'animal",
  "MODELE|modèle|ce qu'on copie",
  "VOLCAN|volcan|il crache du feu",
  "POUPEE|poupée|un jouet",
  "HARENG|hareng|un poisson de la mer du Nord",
  "MENTON|menton|sous la bouche",
  "CHALET|chalet|une maison de montagne",
  "RAMEAU|rameau|une petite branche",
  "SIRENE|sirène|moitié femme, moitié poisson",
  "HANCHE|hanche|le haut de la jambe",
  "POULPE|poulpe|il a huit bras",
  "VASSAL|vassal|il sert son seigneur",
  "JUMENT|jument|la femelle du cheval",
  "GRANIT|granit|la pierre de Bretagne",
  "PICHET|pichet|pour servir l'eau",
  "TOUPIE|toupie|elle tourne sur elle-même",
  "UTOPIE|utopie|un monde parfait qui n'existe pas",
  "PETALE|pétale|une partie de la fleur",
  "PEDALE|pédale|on appuie dessus à vélo",
  "BLAGUE|blague|on la raconte pour rire" /* 04 */,
  "PEIGNE|peigne|il démêle",
  "MARBRE|marbre|la pierre des statues",
  "ANANAS|ananas|un fruit des îles",
  "PURETE|pureté|rien d'autre dedans",
  "GLAIVE|glaive|une épée courte",
  "ECORCE|écorce|la peau de l'arbre",
  "INDIGO|indigo|un bleu très foncé",
  "RESEAU|réseau|tout ce qui est relié",
  "PINSON|pinson|on est gai comme lui",
  "LAITUE|laitue|une salade",
  "MADAME|madame|on s'adresse à elle poliment",
  "VESTON|veston|une veste habillée",
  "GRAMME|gramme|mille font un kilo",
  "BALLON|ballon|il rebondit",
  "PYJAMA|pyjama|pour la nuit",
  "GATEAU|gâteau|on souffle dessus",
  "ABBAYE|abbaye|la maison des moines",
  "OPTION|option|on peut la prendre ou non",
  "COUCOU|coucou|il pond chez les autres",
  "TRESOR|trésor|dans un coffre, sur une île",
  "LIMACE|limace|elle laisse une trace brillante",
  "CERCLE|cercle|tout rond",
  "CAGEOT|cageot|la caisse du marchand",
  "ORBITE|orbite|le chemin d'une planète",
  "CHEVRE|chèvre|elle donne un fromage",
  "EPONGE|éponge|elle boit l'eau",
  "SAPHIR|saphir|une pierre bleue",
  "NUANCE|nuance|une toute petite différence",
  "LORIOT|loriot|un oiseau jaune",
  "MUGUET|muguet|on l'offre le 1er mai" /* 05 */,
  "VOLEUR|voleur|il prend ce qui n'est pas à lui",
  "MAIRIE|mairie|on s'y marie",
  "ESCALE|escale|une pause en voyage",
  "LITRON|litron|un petit litre",
  "BOUCLE|boucle|elle ferme la ceinture",
  "SQUARE|square|un petit jardin de ville",
  "VEILLE|veille|le jour d'avant",
  "TULIPE|tulipe|une fleur de Hollande",
  "GUENON|guenon|la femelle du singe",
  "DRAGON|dragon|il crache du feu",
  "FACADE|façade|le devant de la maison",
  "PATATE|patate|un autre nom pour la pomme de terre",
  "CHENIL|chenil|la maison des chiens",
  "VIOLET|violet|entre le bleu et le rouge",
  "ESSAIM|essaim|un nuage d'abeilles",
  "BOUCHE|bouche|pour parler et manger",
  "INDICE|indice|il met sur la piste",
  "HOMARD|homard|un crustacé à grosses pinces",
  "MERITE|mérite|ce qu'on a bien gagné",
  "CANARD|canard|il barbote dans la mare",
  "ACACIA|acacia|un arbre à fleurs blanches",
  "CLARTE|clarté|ce qui est bien éclairé",
  "ENIGME|énigme|une question mystérieuse",
  "GRAINE|graine|on la met en terre",
  "FORMAT|format|la taille de la feuille",
  "ETALON|étalon|un cheval reproducteur",
  "COURSE|course|on y arrive premier",
  "BELIER|bélier|le mâle de la brebis",
  "RYTHME|rythme|on tape du pied dessus",
  "FLEURS|fleurs|on en offre un bouquet",
  "COFFRE|coffre|il se ferme à clé" /* 06 */,
  "FRAISE|fraise|le fruit du printemps",
  "COIFFE|coiffe|une coiffure traditionnelle",
  "FAUCON|faucon|un rapace rapide",
  "KIMONO|kimono|le vêtement du judo",
  "IVOIRE|ivoire|une matière blanche et précieuse",
  "AGNEAU|agneau|le petit de la brebis",
  "RAISON|raison|on l'a ou on a tort",
  "SULTAN|sultan|un souverain d'Orient",
  "QUICHE|quiche|une tarte salée",
  "JARDIN|jardin|derrière la maison",
  "NIVEAU|niveau|facile, normal ou difficile",
  "CUISSE|cuisse|entre la hanche et le genou",
  "LIMITE|limite|on ne va pas plus loin",
  "CINEMA|cinéma|on y voit des films",
  "PUDEUR|pudeur|la retenue",
  "MOULIN|moulin|il tourne au vent",
  "VISAGE|visage|on le lave le matin",
  "SAVANT|savant|il sait beaucoup de choses",
  "POLLEN|pollen|la poudre des fleurs",
  "VIOLON|violon|il a quatre cordes",
  "ZENITH|zénith|le plus haut point du ciel",
  "JOUEUR|joueur|il est dans l'équipe",
  "LETTRE|lettre|on la poste",
  "MERLAN|merlan|un poisson blanc",
  "SEJOUR|séjour|un temps passé ailleurs",
  "BOUTON|bouton|on le passe dans la boutonnière",
  "CABINE|cabine|on s'y change à la plage",
  "BAGAGE|bagage|on le prépare avant de partir",
  "PARVIS|parvis|la place devant l'église",
  "BONBON|bonbon|un plaisir sucré" /* 07 */,
  "FOURMI|fourmi|elle travaille tout l'été",
  "RADEAU|radeau|des troncs sur l'eau",
  "MIROIR|miroir|il renvoie l'image",
  "MENTHE|menthe|elle parfume le sirop",
  "NICKEL|nickel|un métal brillant",
  "DESSIN|dessin|fait au crayon",
  "ECLAIR|éclair|la lumière de l'orage",
  "REQUIN|requin|un grand poisson redouté",
  "PODIUM|podium|les trois premiers y montent",
  "BRONZE|bronze|la troisième marche",
  "SALADE|salade|verte dans le saladier",
  "FEERIE|féerie|un spectacle merveilleux",
  "SOLEIL|soleil|il se lève à l'est",
  "COYOTE|coyote|un cousin du loup",
  "MUSCLE|muscle|il fait bouger le corps",
  "VALISE|valise|on la remplit pour les vacances",
  "DEESSE|déesse|une divinité",
  "LEZARD|lézard|il se chauffe au soleil",
  "COLERE|colère|quand on monte le ton",
  "AMANDE|amande|dans la galette",
  "FOUDRE|foudre|elle tombe pendant l'orage",
  "CABANE|cabane|au fond du jardin",
  "GUIDON|guidon|on le tient à deux mains",
  "MESURE|mesure|on la prend avec un mètre",
  "CRIQUE|crique|une petite plage abritée",
  "MOTEUR|moteur|il fait avancer la voiture",
  "GRANGE|grange|on y range le foin",
  "ASTUCE|astuce|une idée bien trouvée",
  "JASMIN|jasmin|une fleur très parfumée",
  "RIDEAU|rideau|il cache la fenêtre",
  "MIETTE|miette|le petit reste du pain" /* 08 */,
  "RESINE|résine|elle coule du pin",
  "ARMURE|armure|le métal du chevalier",
  "ARTERE|artère|le sang y circule",
  "VOYAGE|voyage|on part loin",
  "TENNIS|tennis|une balle et une raquette",
  "CENDRE|cendre|ce qui reste du feu",
  "AUDACE|audace|le courage d'oser",
  "MOUCHE|mouche|elle tourne autour du gâteau",
  "AVENUE|avenue|une large rue",
  "ETOFFE|étoffe|un beau tissu",
  "LAGUNE|lagune|un lac au bord de la mer",
  "NAVIRE|navire|un grand bateau",
  "RIVAGE|rivage|là où la mer s'arrête",
  "JAMBON|jambon|dans le sandwich",
  "MIRAGE|mirage|on croit voir de l'eau",
  "BITUME|bitume|le noir de la route",
  "TOMATE|tomate|rouge et juteuse",
  "TRAJET|trajet|le chemin parcouru",
  "SIESTE|sieste|un petit somme",
  "CARAFE|carafe|elle contient l'eau de la table",
  "ROCHER|rocher|une grosse pierre",
  "CIGALE|cigale|elle chante dans le Midi",
  "POIVRE|poivre|avec le sel",
  "SILLON|sillon|la trace de la charrue",
  "BARQUE|barque|une petite embarcation",
  "CERISE|cerise|rouge, avec un noyau",
  "FRANGE|frange|les cheveux sur le front",
  "OIGNON|oignon|il fait pleurer",
  "ESPOIR|espoir|on y croit encore",
  "COBAYE|cobaye|un petit rongeur",
  "ORACLE|oracle|il prédit l'avenir" /* 09 */,
  "COMPAS|compas|il trace les cercles",
  "CLIENT|client|il achète",
  "RECORD|record|personne n'a fait mieux",
  "REVEIL|réveil|il sonne le matin",
  "EPAULE|épaule|entre le cou et le bras",
  "GAIETE|gaieté|la bonne humeur",
  "EGLISE|église|elle a un clocher",
  "CHARGE|charge|ce qu'on porte",
  "MANUEL|manuel|le livre de la classe",
  "EPOQUE|époque|un temps de l'histoire",
  "GROTTE|grotte|un trou dans la montagne",
  "MINUIT|minuit|l'heure des douze coups",
  "TEMPLE|temple|un lieu de prière",
  "CHATON|chaton|le petit du chat",
  "CAHIER|cahier|on y écrit ses leçons",
  "MOUTON|mouton|il donne la laine",
  "AUVENT|auvent|un petit toit au-dessus de la porte",
  "NOMBRE|nombre|un, deux, trois…",
  "TRAFIC|trafic|les voitures qui se suivent",
  "TICKET|ticket|un petit billet",
  "BEURRE|beurre|dans le frigo",
  "LYCEEN|lycéen|il est au lycée",
  "BRIQUE|brique|rouge, pour les murs",
  "GIBIER|gibier|ce que rapporte le chasseur",
  "DICTEE|dictée|on écrit ce qu'on entend",
  "TENDRE|tendre|doux et affectueux",
  "CIRQUE|cirque|sous le chapiteau",
  "PIETON|piéton|il marche sur le trottoir",
  "ERABLE|érable|son sirop vient du Canada",
  "PIGEON|pigeon|un oiseau des villes" /* 10 */,
  "CRAYON|crayon|on le taille",
  "RUELLE|ruelle|une rue toute petite",
  "BROSSE|brosse|pour les cheveux ou les dents",
  "BREBIS|brebis|la femelle du mouton",
  "CALCUL|calcul|on le pose pour compter",
  "DEDALE|dédale|un labyrinthe",
  "PLAINE|plaine|un pays tout plat",
  "POUTRE|poutre|elle soutient le toit",
  "MARRON|marron|la couleur du chocolat",
  "COUSIN|cousin|l'enfant de la tante",
  "LAVABO|lavabo|on s'y lave les mains",
  "VACCIN|vaccin|il protège de la maladie",
  "AMITIE|amitié|le lien entre copains",
  "RITUEL|rituel|ce qu'on refait pareil",
  "NARINE|narine|un trou du nez",
  "BOUDIN|boudin|une charcuterie",
  "STUDIO|studio|un très petit logement",
  "OEUVRE|oeuvre|ce que l'artiste a fait",
  "MUSCAT|muscat|un raisin sucré",
  "MOLLET|mollet|derrière la jambe",
  "TIROIR|tiroir|on l'ouvre et on le ferme",
  "BERGER|berger|il garde les moutons",
  "PASTEL|pastel|une craie de couleur",
  "CASQUE|casque|il protège la tête",
  "BRUINE|bruine|une pluie très fine",
  "BANANE|banane|un fruit jaune",
  "FLEUVE|fleuve|il se jette dans la mer",
  "NOTICE|notice|elle explique comment faire",
  "REMEDE|remède|il soigne",
  "MASQUE|masque|on le met pour se déguiser",
  "CUIVRE|cuivre|un métal rouge" /* 11 */,
  "COTEAU|coteau|une pente douce",
  "FIERTE|fierté|on bombe le torse",
  "MANEGE|manège|il tourne à la fête",
  "TRICOT|tricot|fait avec de la laine",
  "CHROME|chrome|il fait briller les pare-chocs",
  "DRUIDE|druide|il cueille le gui",
  "CHAISE|chaise|elle a quatre pieds",
  "AUTEUR|auteur|il écrit les livres",
  "SAMEDI|samedi|le jour avant dimanche",
  "AURORE|aurore|le tout début du jour",
  "REGRET|regret|on aurait préféré autrement",
  "PANIER|panier|on y met les courses",
  "RARETE|rareté|on n'en voit presque jamais",
  "MINUTE|minute|soixante secondes",
  "LOUTRE|loutre|elle nage dans la rivière",
  "SONNET|sonnet|un poème de quatorze vers",
  "FAISAN|faisan|un oiseau des champs",
  "PILOTE|pilote|il conduit l'avion",
  "VERGER|verger|les arbres à fruits",
  "MANOIR|manoir|une grande maison ancienne",
  "VIPERE|vipère|un serpent de chez nous",
  "CHEVEU|cheveu|il y en a des milliers",
  "PYTHON|python|un serpent qui serre fort",
  "ARCHER|archer|il tire à l'arc",
  "VOLUME|volume|la place que ça prend",
  "COURGE|courge|un gros légume d'automne",
  "SPHERE|sphère|une boule parfaite",
  "BETISE|bêtise|une petite sottise",
  "SONATE|sonate|un morceau de musique",
  "SAVANE|savane|la plaine des lions" /* 12 */,
  "REPERE|repère|il aide à se retrouver",
  "LIERRE|lierre|il grimpe le long des murs",
  "MASTIC|mastic|il bouche les trous",
  "EQUIPE|équipe|ils jouent ensemble",
  "SOMMET|sommet|le point le plus haut",
  "RENARD|renard|un animal rusé",
  "KARATE|karaté|un art martial",
  "BEAUTE|beauté|ce qui plaît aux yeux",
  "ECURIE|écurie|la maison des chevaux",
  "AVERSE|averse|une pluie courte et forte",
  "VISITE|visite|on vient vous voir",
  "THORAX|thorax|la cage des poumons",
  "APOGEE|apogée|le point le plus haut",
  "RAISIN|raisin|on le vendange",
  "APPORT|apport|ce qu'on ajoute",
  "HANGAR|hangar|un grand abri",
  "BILLET|billet|il faut le composter",
  "TRUITE|truite|un poisson de rivière",
  "DOUCHE|douche|plus rapide que le bain",
  "FLOCON|flocon|il tombe du ciel en hiver",
  "HOCKEY|hockey|un sport sur glace",
  "SOURIS|souris|elle file sous le meuble",
  "ETOILE|étoile|elle brille au sommet du sapin",
  "CADEAU|cadeau|on le déballe le 25",
  "DINDON|dindon|il fait la roue",
  "POUMON|poumon|il prend l'air",
  "DEMAIN|demain|le jour d'après",
  "VOLANT|volant|on le tient pour conduire",
  "RACINE|racine|elle tient la plante dans la terre",
  "HUITRE|huître|on l'ouvre pour les fêtes"
];

/* ---------- Les niveaux ---------- */

function niveauMotJour(cle) {
  return NIVEAUX_MOT_JOUR.find((n) => n.cle === cle) ||
    NIVEAUX_MOT_JOUR.find((n) => n.cle === NIVEAU_MOT_JOUR_DEFAUT);
}
function motsDuNiveau(cle) {
  return cle === "facile" ? MOTS_FACILE : cle === "difficile" ? MOTS_DIFFICILE : MOTS_DU_JOUR;
}
/* Le dictionnaire de vérification du niveau. Absent (mots.js pas chargé) :
   on accepte tout, mieux vaut un jeu indulgent qu'un jeu bloqué. */
function dicoDuNiveau(cle) {
  const d = cle === "facile" ? (typeof MOTS4 === "string" ? MOTS4 : null)
    : cle === "difficile" ? (typeof MOTS6 === "string" ? MOTS6 : null)
      : (typeof MOTS5 === "string" ? MOTS5 : null);
  return d;
}

/* LE NIVEAU DE CHACUN est gardé sur l'appareil, comme le thème et la
   palette : c'est une préférence de joueur, pas une donnée de la famille.
   Rangé par tribu et par membre — sur une tablette partagée, chacun garde
   le sien. */
function cleNiveauMotJour(idm) { return "tribu:motJourNiveau:" + (Store.code || "") + ":" + idm; }
function niveauChoisiMotJour() {
  try {
    const v = localStorage.getItem(cleNiveauMotJour(moi.id));
    if (NIVEAUX_MOT_JOUR.some((n) => n.cle === v)) return v;
  } catch (e) { /* mémoire refusée : on jouera au niveau par défaut */ }
  return NIVEAU_MOT_JOUR_DEFAUT;
}
function retenirNiveauMotJour(cle) {
  try { localStorage.setItem(cleNiveauMotJour(moi.id), cle); } catch (e) { /* sans gravité */ }
}

/* ---------- Le mot d'une date ---------- */

/* Le rang d'une date « AAAA-MM-JJ » dans les calendriers ci-dessus. */
function rangMotDuJour(iso) {
  const m = Number(String(iso).slice(5, 7)), j = Number(String(iso).slice(8, 10));
  const r = Math.round((Date.UTC(2024, m - 1, j) - Date.UTC(2024, 0, 1)) / 86400000);
  return r >= 0 && r < 366 ? r : 0;
}
function motDuJour(iso, niveau) {
  const n = niveauMotJour(niveau);
  const e = String(motsDuNiveau(n.cle)[rangMotDuJour(iso)]).split("|");
  return { mot: e[0], ortho: e[1] || e[0].toLowerCase(), indice: e[2] || "", niveau: n };
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

/* Le mot tapé existe-t-il ? Chaque dictionnaire n'est découpé qu'à la
   première question posée sur ce niveau, et le résultat est gardé. */
const motsAdmisMotJour = {};
function motAdmis(m, niveau) {
  const n = niveauMotJour(niveau);
  const brut = dicoDuNiveau(n.cle);
  if (typeof brut !== "string") return true;
  if (!motsAdmisMotJour[n.cle]) {
    const s = new Set();
    for (let i = 0; i + n.lettres <= brut.length; i += n.lettres) s.add(brut.substr(i, n.lettres));
    motsDuNiveau(n.cle).forEach((e) => s.add(e.slice(0, n.lettres)));
    motsAdmisMotJour[n.cle] = s;
  }
  return motsAdmisMotJour[n.cle].has(m);
}

/* Les couleurs d'un essai : « v » bien placée, « o » ailleurs dans le mot,
   « g » absente. En DEUX passes, à cause des lettres en double : les lettres
   bien placées d'abord, puis les autres se partagent ce qui reste. Taper
   POMME quand le mot est PLUME : le M bien placé est vert, l'autre gris —
   le mot n'en a qu'un. */
function noterEssai(essai, mot) {
  const res = [], reste = {};
  for (let i = 0; i < mot.length; i++) {
    if (essai[i] === mot[i]) res[i] = "v";
    else { res[i] = "g"; reste[mot[i]] = (reste[mot[i]] || 0) + 1; }
  }
  for (let i = 0; i < mot.length; i++) {
    if (res[i] !== "v" && reste[essai[i]] > 0) { res[i] = "o"; reste[essai[i]]--; }
  }
  return res.join("");
}

/* ---------- Les parties de la tribu ---------- */

/* La partie d'un membre pour une date, telle que la tribu la voit :
   { grille: ["vgogg", …], trouve, fini, aide, serie, niveau }, ou null.
   Elle est dans le document (le jour même) ou dans sa « veille ».
   Le niveau du document dit combien de lettres compte chaque rangée ; un
   document d'avant les niveaux n'en porte pas : c'était 5 lettres. */
function partieMotJour(idm, jour) {
  const d = (etat.motsDuJour || {})[idm];
  if (!d || typeof d !== "object") return null;
  const p = d.jour === jour ? d : (d.veille && d.veille.jour === jour ? d.veille : null);
  if (!p) return null;
  const n = niveauMotJour(p.niveau);
  const bonne = new RegExp("^[vog]{" + n.lettres + "}$");
  const grille = String(p.grille || "").split(",").filter((x) => bonne.test(x));
  const gagne = "v".repeat(n.lettres);
  const trouve = grille.length > 0 && grille[grille.length - 1] === gagne;
  return {
    grille: grille, trouve: trouve, niveau: n,
    fini: !!p.fini || trouve || grille.length >= MOT_JOUR_ESSAIS,
    aide: Math.max(0, Math.min(2, Math.round(Number(p.aide) || 0))),
    serie: Math.max(0, Math.round(Number(p.serie) || 0))
  };
}

/* LA SÉRIE DE LA TRIBU : le nombre de jours d'affilée où au moins une
   personne de la famille a trouvé le mot — à n'importe quel niveau.
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
   vide ("") = un essai fait sur un autre appareil. Le niveau est noté avec
   elles : changer de niveau ne doit pas ressortir les lettres d'un mot qui
   n'a plus la bonne longueur. */
function cleLettresMotJour(idm) { return "tribu:motJour:" + (Store.code || "") + ":" + idm; }
function lettresMotJour(idm, jour, niveau) {
  const n = niveauMotJour(niveau);
  const vide = { essais: [], aide: 0 };
  try {
    const v = JSON.parse(localStorage.getItem(cleLettresMotJour(idm)) || "null");
    if (!v || v.jour !== jour || !Array.isArray(v.essais)) return vide;
    /* Pas de niveau noté = la version d'avant, donc le niveau normal. */
    if (niveauMotJour(v.niveau).cle !== n.cle) return vide;
    const bon = new RegExp("^[A-Z]{" + n.lettres + "}$");
    return {
      essais: v.essais.slice(0, MOT_JOUR_ESSAIS).map((x) => (bon.test(x) ? x : null)),
      aide: Math.max(0, Math.min(2, Math.round(Number(v.aide) || 0)))
    };
  } catch (e) { return vide; }
}
function retenirLettresMotJour(p) {
  try {
    localStorage.setItem(cleLettresMotJour(moi.id), JSON.stringify({
      jour: p.jour, niveau: p.cible.niveau.cle, aide: p.aide,
      essais: p.lignes.map((l) => l.lettres || "")
    }));
  } catch (e) { /* mémoire refusée : la partie reste jouable, sans reprise */ }
}

/* Une partie, remise dans la forme exacte que les règles acceptent. */
function extraitPartieMotJour(x) {
  const n = niveauMotJour(x.niveau);
  const bonne = new RegExp("^[vog]{" + n.lettres + "}$");
  return {
    jour: String(x.jour),
    niveau: n.cle,
    grille: String(x.grille || "").split(",").filter((g) => bonne.test(g))
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
    jour: p.jour, niveau: p.cible.niveau.cle,
    grille: p.lignes.map((l) => l.couleurs).join(","),
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
   ses couleurs).
   LE NIVEAU DU JOUR : si une partie est déjà commencée aujourd'hui, c'est
   le sien qui vaut — on ne change pas la longueur d'une grille en cours.
   Sinon, le niveau choisi sur cet appareil. `force` sert au changement de
   niveau, qui repart à zéro. */
function preparerPartieMotJour(force) {
  const jour = jourMotJour();
  const dejaLa = partieMotJour(moi.id, jour);
  const cle = force || (dejaLa && dejaLa.grille.length ? dejaLa.niveau.cle : niveauChoisiMotJour());
  const cible = motDuJour(jour, cle);
  const srv = force ? null : dejaLa;
  const loc = force ? { essais: [], aide: 0 } : lettresMotJour(moi.id, jour, cle);
  const n = Math.min(MOT_JOUR_ESSAIS, Math.max(loc.essais.length, srv ? srv.grille.length : 0));
  const lignes = [];
  for (let i = 0; i < n; i++) {
    const l = loc.essais[i] || null;
    lignes.push({
      lettres: l,
      couleurs: l ? noterEssai(l, cible.mot) : (srv ? srv.grille[i] : "g".repeat(cible.niveau.lettres))
    });
  }
  const gagne = "v".repeat(cible.niveau.lettres);
  const trouve = lignes.some((l) => l.couleurs === gagne);
  return {
    jour: jour, cible: cible, lignes: lignes, saisie: "",
    aide: Math.max(loc.aide, srv ? srv.aide : 0),
    trouve: trouve, fini: trouve || lignes.length >= MOT_JOUR_ESSAIS || !!(srv && srv.fini),
    serie: srv && srv.trouve ? srv.serie : 0,
    revele: -1, secoue: false
  };
}

/* ---------- Petits morceaux d'écran ---------- */

/* La grille d'une partie en miniature : des couleurs, jamais de lettres.
   `--n` donne le nombre de colonnes, qui change avec le niveau. */
function miniGrilleMotJour(grille) {
  if (!grille || !grille.length) return "";
  return '<span class="mj-mini" style="--n:' + grille[0].length + '" aria-hidden="true">' +
    grille.map((g) => "<span>" + g.split("").map((c) => '<i class="' + c + '"></i>').join("") + "</span>")
      .join("") + "</span>";
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
  const p = partieMotJour(moi.id, jour);
  const n = p && p.grille.length ? p.niveau : niveauMotJour(niveauChoisiMotJour());
  const s = serieTribuMotJour();
  const trouveurs = etat.membres.filter((m) => m.id !== moi.id)
    .filter((m) => { const x = partieMotJour(m.id, jour); return x && x.trouve; })
    .map((m) => m.prenom);
  let titre, bouton;
  if (p && p.trouve) { titre = "Trouvé en " + pluriel(p.grille.length, "essai", "essais") + " 🎉"; bouton = "Voir"; }
  else if (p && p.fini) { titre = "Pas trouvé cette fois"; bouton = "Voir"; }
  else if (p && p.grille.length) {
    titre = "Vous en êtes à " + pluriel(p.grille.length, "essai", "essais") + " sur " + MOT_JOUR_ESSAIS;
    bouton = "Continuer";
  } else { titre = n.lettres + " lettres, " + MOT_JOUR_ESSAIS + " essais : à vous de jouer"; bouton = "Jouer"; }
  const details = [n.emoji + " " + n.nom];
  if (s.n) details.push("🔥 Série de la tribu : " + pluriel(s.n, "jour", "jours"));
  if (trouveurs.length) details.push("Trouvé par " + nomsMotJour(trouveurs));
  return bloc("🔤 Le mot du jour",
    '<div class="ligne ligne-maj" data-action="mot-jour">' +
    (p && p.grille.length ? miniGrilleMotJour(p.grille) : '<span style="font-size:1.5rem">🔤</span>') +
    '<div class="ligne-corps"><b>' + esc(titre) + "</b>" +
    "<small>" + esc(details.join(" · ")) + "</small></div>" +
    '<button class="btn mini principal" data-action="mot-jour">' + bouton + "</button></div>");
}

/* ---------- La fenêtre de jeu ---------- */

/* La partie ouverte à l'écran (une seule à la fois). */
let partieMotJourOuverte = null;

function racineMotJour() { return document.querySelector("#feuille [data-motjour]"); }

Formulaires.motDuJour = function (force) {
  if (!moi) return;
  if (!motDuJourActif()) { toast("Le mot du jour n'est pas activé dans cette tribu"); return; }
  const p = preparerPartieMotJour(force);
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
    '<div class="mj-niveaux"></div>' +
    '<div class="mj-tribu"></div>' +
    "</div>",
    (f) => {
      f.querySelector("[data-motjour]").addEventListener("click", (e) => {
        const t = e.target.closest("[data-mj-touche]");
        if (t) { e.preventDefault(); t.blur(); toucheMotJour(t.dataset.mjTouche); return; }
        const a = e.target.closest('[data-mj="aide"]');
        if (a) { e.preventDefault(); a.blur(); aideMotJour(); return; }
        const n = e.target.closest("[data-mj-niveau]");
        if (n) { e.preventDefault(); n.blur(); changerNiveauMotJour(n.dataset.mjNiveau); }
      });
    });
  majMotJour();
  /* Une partie jouée ici mais pas encore partie en ligne (réseau coupé,
     appli fermée trop tôt) : on la renvoie, sans rien dire. */
  const srv = partieMotJour(moi.id, p.jour);
  if (Store.mode === "nuage" && !force &&
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
  const n = p.cible.niveau;
  r.dataset.niveau = n.cle;
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
    " s'ouvre après " + pluriel(n.aides[p.aide], "essai", "essais");
  r.querySelector(".mj-indice").innerHTML = p.fini ? "" :
    (p.aide ? "Devinette : " + esc(p.cible.indice) +
      (p.aide >= 2 ? " · commence par <b>" + esc(p.cible.mot[0]) + "</b>" : "") : "") +
    (attente ? (p.aide ? "<br>" : "") + attente : "");
  r.querySelector(".mj-grille").innerHTML = grilleMotJour(p);
  r.querySelector(".mj-clavier").innerHTML = p.fini ? "" : clavierMotJour(p);
  r.querySelector(".mj-fin").innerHTML = finMotJour(p);
  r.querySelector(".mj-niveaux").innerHTML = choixNiveauMotJour(p);
  r.querySelector(".mj-tribu").innerHTML = tribuMotJour(p.jour);
  /* L'animation ne se joue qu'une fois : au dessin suivant, plus rien ne
     bouge. */
  p.revele = -1;
  p.secoue = false;
}

/* La ligne sous la grille. Elle sert surtout aux refus (« il faut 5
   lettres »), d'où le rouge ; `info` la passe en couleur d'accent pour ce
   qui n'est pas une erreur — un changement de niveau, le passage de
   minuit. */
function direMotJour(texte, info) {
  const r = racineMotJour();
  const m = r && r.querySelector(".mj-message");
  if (!m) return;
  m.textContent = texte || "";
  m.className = "mj-message" + (info ? " info" : "");
}

function grilleMotJour(p) {
  const NOMS = { v: "bien placée", o: "ailleurs dans le mot", g: "absente" };
  const lettres = p.cible.niveau.lettres;
  let h = "";
  for (let i = 0; i < MOT_JOUR_ESSAIS; i++) {
    const l = p.lignes[i];
    const enCours = !l && i === p.lignes.length && !p.fini;
    let cases = "", dit = "";
    for (let k = 0; k < lettres; k++) {
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
    h += '<div class="mj-rangee' + (enCours && p.secoue ? " secoue" : "") +
      '" style="--n:' + lettres + '"' +
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
    for (let k = 0; k < l.lettres.length; k++) {
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

/* Le choix du niveau, sous le jeu : il ne doit pas prendre la place de la
   grille et du clavier, qui tiennent tout juste sur un petit téléphone. */
function choixNiveauMotJour(p) {
  /* Partie du jour finie : la puce montre le niveau CHOISI, qui vaudra pour
     le prochain mot — sinon le clic ne se voit nulle part. Partie en cours :
     elle montre celui de la grille affichée. */
  const actuel = p.fini ? niveauChoisiMotJour() : p.cible.niveau.cle;
  return '<div class="mj-niveaux-titre">Mon niveau</div>' +
    '<div class="puces unique">' + NIVEAUX_MOT_JOUR.map((n) =>
      '<button type="button" class="puce' + (n.cle === actuel ? " on" : "") + '" ' +
      'data-mj-niveau="' + n.cle + '"' + (n.cle === actuel ? ' aria-current="true"' : "") + ">" +
      n.emoji + " " + esc(n.nom) + " <small>" + n.lettres + " lettres</small></button>").join("") +
    "</div>";
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
      "<small>" + esc(p.niveau.emoji + " " + etatJeu + (aide ? " · " + aide : "")) + "</small></div>" +
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
    direMotJour("Minuit est passé : voici le nouveau mot.", true);
    return;
  }
  if (p.fini) return;
  if (k === "Entree") { validerMotJour(); return; }
  if (k === "Retour") {
    if (!p.saisie) return;
    p.saisie = p.saisie.slice(0, -1);
  } else if (/^[A-Z]$/.test(k)) {
    if (p.saisie.length >= p.cible.niveau.lettres) return;
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
  const n = p.cible.niveau;
  if (p.saisie.length < n.lettres) {
    secouerMotJour("Il faut " + n.lettres + " lettres");
    return;
  }
  if (!motAdmis(p.saisie, n.cle)) {
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
  p.trouve = couleurs === "v".repeat(n.lettres);
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
  return p.aide >= 2 || p.lignes.length >= p.cible.niveau.aides[p.aide];
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

/* CHANGER DE NIVEAU. Trois cas, dits franchement :
   - partie du jour déjà finie : on garde le résultat, le niveau vaudra pour
     le prochain mot. Effacer une partie finie ferait retomber la série de la
     tribu, et laisserait rejouer le même jour ;
   - partie commencée : on prévient que les essais du jour seront perdus ;
   - rien de commencé : on change tout de suite, sans rien demander. */
async function changerNiveauMotJour(cle) {
  const p = partieMotJourOuverte;
  const n = niveauMotJour(cle);
  if (!p || n.cle === p.cible.niveau.cle) return;

  if (p.fini) {
    retenirNiveauMotJour(n.cle);
    majMotJour();
    rendre();
    direMotJour("C'est noté : " + n.emoji + " " + n.nom + " (" + n.lettres +
      " lettres) pour le prochain mot.", true);
    return;
  }
  if (p.lignes.length || p.aide) {
    const ok = await confirmer("Vos " + pluriel(p.lignes.length, "essai", "essais") +
      " d'aujourd'hui seront effacés, et vous repartirez de zéro sur le mot de " +
      n.lettres + " lettres.", { titre: "Passer en " + n.nom + " ?", ok: "Changer de niveau" });
    if (!ok) { Formulaires.motDuJour(); return; }   // la confirmation a fermé le jeu
  }
  retenirNiveauMotJour(n.cle);
  /* On efface aussi les lettres gardées ici : elles n'ont plus la bonne
     longueur, et `force` fait repartir la partie à zéro. */
  try { localStorage.removeItem(cleLettresMotJour(moi.id)); } catch (e) { /* sans gravité */ }
  Formulaires.motDuJour(n.cle);
  publierPartieMotJour(partieMotJourOuverte);
  rendre();
  direMotJour(n.emoji + " " + n.nom + " : " + n.lettres + " lettres, à vous de jouer.", true);
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
