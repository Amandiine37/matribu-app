/* LE CAHIER DES PETITS — RECETTES POUR BÉBÉ (18/10/2026)

   Demandé par Amandine : « crée un cahier recette spécial bébé ».

   CE FICHIER APPARTIENT AU MODULE « LES PETITS À TABLE ». Comme petits.js, il
   est protégé partout : sans lui, la liste n'existe pas, et personne ne s'en
   aperçoit. Il ne se lit qu'au moment de « Mettre à jour les recettes
   fournies », qui ajoute au cahier de la famille ce qui lui manque.

   D'OÙ VIENNENT CES RECETTES. Elles sont écrites ici, pour MaTribu. Rien n'a
   été recopié d'un site ou d'un livre : les recettes des autres leur
   appartiennent, même quand elles sont gratuites à lire. Ce qui est repris,
   ce sont des faits que personne ne possède — une purée de carotte se donne
   dès 4 mois, les morceaux fondants viennent vers 9 mois.

   LES RÈGLES QUE CHAQUE RECETTE RESPECTE, sans exception :
   - aucun sel, nulle part, et aucun bouillon du commerce ;
   - aucun sucre ajouté avant 1 an (les compotes sont sucrées par le fruit) ;
   - aucun miel avant 1 an ;
   - aucun fruit à coque entier, aucun aliment rond et dur ;
   - rien de cru : viande, poisson et œuf sont toujours bien cuits ;
   - le lait est un lait infantile tant que l'enfant n'a pas 1 an.

   CE NE SONT QUE DES REPÈRES. Ils ne remplacent ni un médecin, ni une PMI, et
   ne savent rien d'une allergie ou d'une histoire particulière. Chaque
   nouvel aliment se propose seul, quelques jours de suite.

   « des » dit la tranche d'âge, avec les mêmes valeurs que petits.js.
   « portions » compte en PORTIONS DE BÉBÉ : on cuisine une fois, on congèle
   le reste en bacs à glaçons. */
window.RECETTES_BEBE = [

  /* ====================== 4 à 6 mois — les premières ======================
     Une seule saveur à la fois, lisse comme une crème, sans morceau. */

  {
    nom: "Première purée de carotte",
    emoji: "🥕", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "4-6", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Épluchez les carottes et coupez-les en rondelles fines.",
      "Faites cuire 20 minutes à la vapeur, jusqu'à ce qu'une pointe de couteau s'enfonce toute seule.",
      "Mixez très finement, en ajoutant l'eau de cuisson cuillère par cuillère : la texture doit être lisse, à peine plus épaisse qu'une crème.",
      "Ajoutez l'huile hors du feu, juste avant de servir. Congelez le reste en bacs à glaçons."
    ],
    lien: "",
    ingredients: [
      { nom: "Carottes", qte: "300", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Première purée de courgette",
    emoji: "🥒", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "4-6", portions: 6,
    saisons: ["printemps", "ete"],
    etapes: [
      "Épluchez les courgettes entièrement et retirez les pépins : la peau et les graines sont trop fortes pour un premier essai.",
      "Coupez en rondelles et faites cuire 15 minutes à la vapeur.",
      "Mixez finement. La courgette rend de l'eau : ajoutez peu de liquide.",
      "Ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Courgettes", qte: "400", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Première purée de patate douce",
    emoji: "🍠", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "4-6", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Épluchez la patate douce et coupez-la en cubes.",
      "Faites cuire 20 minutes à la vapeur.",
      "Mixez finement en détendant avec l'eau de cuisson : la patate douce épaissit beaucoup en refroidissant.",
      "Ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Patate douce", qte: "350", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Première purée de potimarron",
    emoji: "🎃", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "4-6", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Retirez les graines du potimarron et coupez la chair en cubes. La peau part toute seule après cuisson.",
      "Faites cuire 20 minutes à la vapeur.",
      "Mixez très finement.",
      "Ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Potimarron", qte: "400", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Première purée de haricots verts",
    emoji: "🫛", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "4-6", portions: 6,
    saisons: ["ete"],
    etapes: [
      "Équeutez les haricots et retirez le fil s'il y en a un.",
      "Faites cuire 20 minutes à la vapeur, bien tendres.",
      "Mixez longuement, puis passez au tamis : la peau des haricots laisse des filaments qu'un bébé ne gère pas encore.",
      "Ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Haricots verts", qte: "350", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Première purée de panais",
    emoji: "🥔", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "4-6", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Épluchez les panais et retirez le cœur dur des gros, qui reste fibreux.",
      "Coupez en rondelles et faites cuire 20 minutes à la vapeur.",
      "Mixez très finement en détendant avec l'eau de cuisson.",
      "Ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Panais", qte: "350", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Première compote de pomme",
    emoji: "🍎", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "4-6", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Épluchez les pommes, retirez le cœur et coupez-les en morceaux.",
      "Faites cuire 15 minutes à couvert avec deux cuillères d'eau, à feu doux.",
      "Mixez finement. Aucun sucre : la pomme cuite est déjà sucrée, et c'est ce goût-là qu'on apprend.",
      "Laissez tiédir avant de servir."
    ],
    lien: "",
    ingredients: [
      { nom: "Pommes", qte: "4", unite: "", rayon: "Fruits & légumes" }
    ],
    plat: "dessert"
  },
  {
    nom: "Première compote de poire",
    emoji: "🍐", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "4-6", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Choisissez des poires bien mûres : elles n'ont alors besoin de presque rien.",
      "Épluchez, retirez le cœur, coupez en morceaux.",
      "Faites cuire 10 minutes à couvert avec une cuillère d'eau.",
      "Mixez finement, sans sucre."
    ],
    lien: "",
    ingredients: [
      { nom: "Poires", qte: "4", unite: "", rayon: "Fruits & légumes" }
    ],
    plat: "dessert"
  },

  /* ====================== 6 à 8 mois — on associe ======================
     Deux saveurs, les premières protéines en très petite quantité, et la
     texture reste lisse ou à peine moulinée. */

  {
    nom: "Purée carotte et pomme de terre",
    emoji: "🥕", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "6-8", portions: 6,
    saisons: ["automne", "hiver", "printemps"],
    etapes: [
      "Épluchez carottes et pomme de terre, coupez-les en morceaux de même taille pour qu'ils cuisent ensemble.",
      "Faites cuire 20 minutes à la vapeur.",
      "Mixez : la pomme de terre donne une purée qui tient à la cuillère, la carotte garde la douceur.",
      "Ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Carottes", qte: "250", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Pomme de terre", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Purée de courgette au riz",
    emoji: "🍚", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "6-8", portions: 6,
    saisons: ["printemps", "ete"],
    etapes: [
      "Faites cuire le riz 20 minutes dans trois fois son volume d'eau, sans rien y ajouter : il doit être très mou.",
      "Pendant ce temps, cuisez les courgettes épluchées 15 minutes à la vapeur.",
      "Mixez le tout ensemble. Le riz épaissit : détendez avec un peu d'eau de cuisson.",
      "Ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Courgettes", qte: "300", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Riz rond", qte: "40", unite: "g", rayon: "Épicerie" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Purée de brocoli et pomme de terre",
    emoji: "🥦", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "6-8", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Détachez les petits bouquets de brocoli et épluchez la pomme de terre.",
      "Faites cuire 18 minutes à la vapeur : le brocoli doit s'écraser sans résistance.",
      "Mixez finement. La pomme de terre adoucit le goût un peu vert du brocoli.",
      "Ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Brocoli", qte: "250", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Pomme de terre", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Purée de potiron aux lentilles corail",
    emoji: "🎃", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "6-8", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Rincez les lentilles corail à l'eau claire.",
      "Faites-les cuire 20 minutes dans trois fois leur volume d'eau, avec le potiron en cubes.",
      "Mixez très finement : les lentilles corail fondent et donnent une purée veloutée.",
      "Ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Potiron", qte: "300", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Lentilles corail", qte: "40", unite: "g", rayon: "Épicerie" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Petite purée de poulet et carotte",
    emoji: "🍗", type: "leger", vegetarien: false, rapide: true, thermomix: true,
    bebe: true, des: "6-8", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Faites cuire le blanc de poulet 15 minutes à la vapeur, bien à cœur : plus de rose nulle part.",
      "Cuisez les carottes en rondelles 20 minutes à la vapeur.",
      "Mixez le tout très finement, en détendant avec l'eau de cuisson.",
      "Ajoutez l'huile hors du feu. À cet âge, dix grammes de viande par repas suffisent largement."
    ],
    lien: "",
    ingredients: [
      { nom: "Blanc de poulet", qte: "60", unite: "g", rayon: "Boucherie" },
      { nom: "Carottes", qte: "300", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Petite purée de colin et courgette",
    emoji: "🐟", type: "leger", vegetarien: false, rapide: true, thermomix: true,
    bebe: true, des: "6-8", portions: 6,
    saisons: ["printemps", "ete"],
    etapes: [
      "Vérifiez le dos de colin au doigt : pas la moindre arête.",
      "Faites-le cuire 10 minutes à la vapeur, jusqu'à ce que la chair se détache en lamelles.",
      "Cuisez les courgettes épluchées 15 minutes à la vapeur.",
      "Mixez finement l'ensemble et ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Dos de colin", qte: "60", unite: "g", rayon: "Poissonnerie" },
      { nom: "Courgettes", qte: "300", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Velouté de petits pois pour bébé",
    emoji: "🫛", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "6-8", portions: 6,
    saisons: ["printemps", "ete"],
    etapes: [
      "Faites cuire les petits pois 15 minutes à la vapeur avec la feuille de menthe.",
      "Mixez longuement, puis passez au tamis pour retirer les peaux.",
      "Détendez à l'eau de cuisson jusqu'à une texture de velouté.",
      "Ajoutez l'huile hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Petits pois", qte: "300", unite: "g", rayon: "Surgelés" },
      { nom: "Menthe", qte: "1", unite: "feuille(s)", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Semoule au lait de bébé",
    emoji: "🥣", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "6-8", portions: 4,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Préparez le lait infantile comme d'habitude, puis faites-le chauffer doucement sans le faire bouillir.",
      "Versez la semoule fine en pluie et remuez sans arrêt 3 minutes.",
      "Laissez gonfler hors du feu 5 minutes : la semoule épaissit encore.",
      "Servez tiède, sans sucre. Un peu de compote de pomme par-dessus suffit à parfumer."
    ],
    lien: "",
    ingredients: [
      { nom: "Semoule de blé fine", qte: "30", unite: "g", rayon: "Épicerie" },
      { nom: "Lait infantile", qte: "25", unite: "cl", rayon: "Épicerie" }
    ],
    plat: "dessert"
  },
  {
    nom: "Compote pomme et banane",
    emoji: "🍌", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "6-8", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Faites cuire les pommes épluchées 15 minutes à couvert avec deux cuillères d'eau.",
      "Écrasez la banane crue à la fourchette, bien mûre, sans fil noir.",
      "Mélangez les deux hors du feu : la banane ne se cuit pas, elle se marie à la pomme tiède.",
      "Servez aussitôt, la banane noircit vite."
    ],
    lien: "",
    ingredients: [
      { nom: "Pommes", qte: "3", unite: "", rayon: "Fruits & légumes" },
      { nom: "Banane", qte: "1", unite: "", rayon: "Fruits & légumes" }
    ],
    plat: "dessert"
  },
  {
    nom: "Compote poire et abricot",
    emoji: "🍑", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "6-8", portions: 6,
    saisons: ["ete"],
    etapes: [
      "Dénoyautez les abricots et coupez les poires épluchées en morceaux.",
      "Faites cuire 12 minutes à couvert avec deux cuillères d'eau.",
      "Mixez finement. L'abricot est acidulé : la poire l'adoucit, et aucun sucre n'est nécessaire.",
      "Laissez tiédir."
    ],
    lien: "",
    ingredients: [
      { nom: "Poires", qte: "2", unite: "", rayon: "Fruits & légumes" },
      { nom: "Abricots", qte: "4", unite: "", rayon: "Fruits & légumes" }
    ],
    plat: "dessert"
  },

  /* ====================== 9 à 11 mois — les morceaux ======================
     On écrase à la fourchette, on laisse de petits morceaux fondants, et on
     pose de quoi attraper tout seul. */

  {
    nom: "Écrasé de pomme de terre et épinards",
    emoji: "🥬", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "9-11", portions: 6,
    saisons: ["automne", "hiver", "printemps"],
    etapes: [
      "Faites cuire les pommes de terre épluchées 25 minutes à la vapeur.",
      "Faites tomber les épinards 5 minutes dans une poêle, sans matière grasse, puis hachez-les finement.",
      "Écrasez les pommes de terre à la fourchette — surtout pas au mixeur, qui les rend collantes — et mélangez aux épinards.",
      "Ajoutez l'huile hors du feu et détendez avec un peu d'eau de cuisson."
    ],
    lien: "",
    ingredients: [
      { nom: "Pommes de terre", qte: "400", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Épinards frais", qte: "150", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Dahl de lentilles corail tout doux",
    emoji: "🍲", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "9-11", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Rincez les lentilles et faites-les cuire 20 minutes avec la carotte en petits dés et trois fois leur volume d'eau.",
      "Ajoutez le lait de coco en fin de cuisson et laissez épaissir 5 minutes.",
      "Écrasez grossièrement à la fourchette : il doit rester des morceaux de carotte fondants.",
      "Aucune épice forte avant 3 ans ; une pincée de curcuma suffit à colorer et parfumer."
    ],
    lien: "",
    ingredients: [
      { nom: "Lentilles corail", qte: "100", unite: "g", rayon: "Épicerie" },
      { nom: "Carottes", qte: "150", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Lait de coco", qte: "10", unite: "cl", rayon: "Épicerie" },
      { nom: "Curcuma", qte: "1", unite: "pincée(s)", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Boulettes de poulet moelleuses",
    emoji: "🍗", type: "consistant", vegetarien: false, rapide: true, thermomix: false,
    bebe: true, des: "9-11", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Mixez le blanc de poulet cru avec la courgette râpée : la courgette apporte l'eau qui empêche la boulette d'être sèche.",
      "Ajoutez la chapelure, mélangez et formez de petites boulettes de la taille d'une noisette écrasée — jamais rondes et dures.",
      "Faites cuire 12 minutes à la vapeur ou au four à 180 °C, bien à cœur.",
      "Laissez tiédir : ça s'attrape tout seul avec les doigts."
    ],
    lien: "",
    ingredients: [
      { nom: "Blanc de poulet", qte: "200", unite: "g", rayon: "Boucherie" },
      { nom: "Courgette", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Chapelure", qte: "2", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Galettes de légumes à attraper",
    emoji: "🥔", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "9-11", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Râpez la courgette et la carotte, puis pressez-les dans un torchon propre pour retirer l'eau.",
      "Mélangez avec l'œuf battu et la farine jusqu'à obtenir une pâte souple.",
      "Faites cuire à la poêle 3 minutes de chaque côté, à feu doux, dans un filet d'huile. L'œuf doit être entièrement cuit.",
      "Coupez en bâtonnets tièdes : c'est fait pour être pris à la main."
    ],
    lien: "",
    ingredients: [
      { nom: "Courgette", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Carotte", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Œuf", qte: "1", unite: "", rayon: "Crèmerie" },
      { nom: "Farine", qte: "3", unite: "c. à soupe", rayon: "Épicerie" },
      { nom: "Huile d'olive", qte: "1", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Bâtonnets de légumes vapeur",
    emoji: "🥕", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "9-11", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Taillez les légumes en bâtonnets de la longueur d'un doigt : assez longs pour dépasser du poing fermé.",
      "Faites cuire 15 minutes à la vapeur. Ils doivent s'écraser entre deux doigts — jamais croquants.",
      "Laissez tiédir et posez-en deux ou trois sur la tablette.",
      "Restez à côté pendant qu'il mange, toujours assis."
    ],
    lien: "",
    ingredients: [
      { nom: "Carottes", qte: "2", unite: "", rayon: "Fruits & légumes" },
      { nom: "Courgette", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Patate douce", qte: "1", unite: "", rayon: "Fruits & légumes" }
    ],
    plat: "accompagnement"
  },
  {
    nom: "Risotto de bébé à la courgette",
    emoji: "🍚", type: "leger", vegetarien: true, rapide: false, thermomix: true,
    bebe: true, des: "9-11", portions: 6,
    saisons: ["printemps", "ete"],
    etapes: [
      "Faites revenir la courgette en tout petits dés 5 minutes dans l'huile.",
      "Ajoutez le riz et couvrez d'eau chaude, louche après louche, en remuant 20 minutes.",
      "Hors du feu, ajoutez le fromage frais : il remplace le parmesan, trop salé pour un bébé.",
      "Écrasez à peine : il doit rester des grains et des dés reconnaissables."
    ],
    lien: "",
    ingredients: [
      { nom: "Riz rond", qte: "100", unite: "g", rayon: "Épicerie" },
      { nom: "Courgette", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Fromage frais nature", qte: "2", unite: "c. à soupe", rayon: "Crèmerie" },
      { nom: "Huile d'olive", qte: "1", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Colin écrasé aux carottes",
    emoji: "🐟", type: "leger", vegetarien: false, rapide: true, thermomix: false,
    bebe: true, des: "9-11", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Passez le dos de colin entre vos doigts, millimètre par millimètre : aucune arête ne doit rester.",
      "Faites cuire 10 minutes à la vapeur avec les carottes en rondelles.",
      "Écrasez à la fourchette, pas au mixeur : le poisson s'effiloche tout seul en lamelles fondantes.",
      "Ajoutez l'huile et un filet de citron hors du feu."
    ],
    lien: "",
    ingredients: [
      { nom: "Dos de colin", qte: "150", unite: "g", rayon: "Poissonnerie" },
      { nom: "Carottes", qte: "250", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Citron", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Huile de colza", qte: "1", unite: "c. à café", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Gratin de chou-fleur fondant",
    emoji: "🥬", type: "leger", vegetarien: true, rapide: false, thermomix: false,
    bebe: true, des: "9-11", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Faites cuire les bouquets de chou-fleur 20 minutes à la vapeur, bien tendres.",
      "Écrasez-les grossièrement et mélangez au fromage frais.",
      "Versez dans un plat, parsemez de chapelure et enfournez 15 minutes à 180 °C.",
      "Servez tiède, en petites cuillerées : le dessus doit rester moelleux, jamais croustillant."
    ],
    lien: "",
    ingredients: [
      { nom: "Chou-fleur", qte: "400", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Fromage frais nature", qte: "3", unite: "c. à soupe", rayon: "Crèmerie" },
      { nom: "Chapelure", qte: "1", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Compote pomme et mangue",
    emoji: "🥭", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "9-11", portions: 6,
    saisons: ["hiver", "printemps"],
    etapes: [
      "Faites cuire les pommes épluchées 15 minutes à couvert.",
      "Coupez la mangue bien mûre en dés et ajoutez-la 3 minutes en fin de cuisson.",
      "Écrasez à la fourchette en laissant quelques morceaux : à cet âge, la bouche apprend à les gérer.",
      "Servez tiède, sans sucre."
    ],
    lien: "",
    ingredients: [
      { nom: "Pommes", qte: "2", unite: "", rayon: "Fruits & légumes" },
      { nom: "Mangue", qte: "1", unite: "", rayon: "Fruits & légumes" }
    ],
    plat: "dessert"
  },
  {
    nom: "Riz au lait tout doux",
    emoji: "🍮", type: "leger", vegetarien: true, rapide: false, thermomix: false,
    bebe: true, des: "9-11", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Faites gonfler le riz 5 minutes dans l'eau bouillante, puis égouttez.",
      "Versez le lait infantile et laissez cuire 25 minutes à feu très doux, en remuant souvent.",
      "Aucun sucre : la vanille suffit à donner l'impression du dessert.",
      "Laissez tiédir, le riz au lait épaissit en refroidissant."
    ],
    lien: "",
    ingredients: [
      { nom: "Riz rond", qte: "80", unite: "g", rayon: "Épicerie" },
      { nom: "Lait infantile", qte: "50", unite: "cl", rayon: "Épicerie" },
      { nom: "Vanille", qte: "1", unite: "pincée(s)", rayon: "Épicerie" }
    ],
    plat: "dessert"
  },

  /* ================= 1 an à 18 mois — vers la table des grands =================
     L'enfant mange presque le plat de la famille : on coupe petit, on ne sale
     pas sa part, et on sert avant d'assaisonner le reste. */

  {
    nom: "Mini-gratin de courgettes",
    emoji: "🧀", type: "leger", vegetarien: true, rapide: false, thermomix: false,
    bebe: true, des: "12-17", portions: 4,
    saisons: ["printemps", "ete"],
    etapes: [
      "Faites revenir les courgettes en rondelles 10 minutes à la poêle.",
      "Battez l'œuf avec le fromage frais et mélangez aux courgettes.",
      "Versez dans de petits ramequins et enfournez 20 minutes à 180 °C : l'œuf doit être pris jusqu'au cœur.",
      "Démoulez tiède et coupez en cubes à prendre avec les doigts."
    ],
    lien: "",
    ingredients: [
      { nom: "Courgettes", qte: "400", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Œuf", qte: "1", unite: "", rayon: "Crèmerie" },
      { nom: "Fromage frais nature", qte: "3", unite: "c. à soupe", rayon: "Crèmerie" }
    ],
    plat: ""
  },
  {
    nom: "Soupe de légumes à la cuillère",
    emoji: "🥣", type: "leger", vegetarien: true, rapide: true, thermomix: true,
    bebe: true, des: "12-17", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Épluchez tous les légumes et coupez-les en cubes de même taille.",
      "Couvrez d'eau — pas de bouillon du commerce, beaucoup trop salé — et laissez cuire 25 minutes.",
      "Mixez en gardant la soupe épaisse : à la cuillère, elle ne doit pas couler.",
      "Servez tiède avec un filet d'huile et, pour les grands, salez seulement dans leur assiette."
    ],
    lien: "",
    ingredients: [
      { nom: "Carottes", qte: "2", unite: "", rayon: "Fruits & légumes" },
      { nom: "Poireau", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Pommes de terre", qte: "2", unite: "", rayon: "Fruits & légumes" },
      { nom: "Navet", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Huile d'olive", qte: "1", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: "entree"
  },
  {
    nom: "Petites pâtes aux légumes fondants",
    emoji: "🍝", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "12-17", portions: 4,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Faites cuire les petites pâtes deux minutes de plus que le paquet ne l'indique : elles doivent être très tendres.",
      "Pendant ce temps, faites fondre les tomates et la courgette en dés 15 minutes à la poêle.",
      "Mélangez, ajoutez le fromage frais hors du feu.",
      "Servez tiède, dans une assiette creuse : c'est l'âge de la cuillère qu'on tient tout seul."
    ],
    lien: "",
    ingredients: [
      { nom: "Petites pâtes", qte: "120", unite: "g", rayon: "Épicerie" },
      { nom: "Tomates", qte: "2", unite: "", rayon: "Fruits & légumes" },
      { nom: "Courgette", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Fromage frais nature", qte: "2", unite: "c. à soupe", rayon: "Crèmerie" }
    ],
    plat: ""
  },
  {
    nom: "Omelette aux légumes en lanières",
    emoji: "🍳", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "12-17", portions: 4,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Faites revenir les légumes coupés très fin 10 minutes à la poêle.",
      "Battez les œufs et versez-les par-dessus, à feu doux.",
      "Laissez cuire jusqu'à ce qu'il ne reste aucune partie coulante : l'œuf se mange toujours bien cuit.",
      "Faites glisser sur une planche et coupez en lanières de la largeur d'un doigt."
    ],
    lien: "",
    ingredients: [
      { nom: "Œufs", qte: "3", unite: "", rayon: "Crèmerie" },
      { nom: "Poivron", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Courgette", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Huile d'olive", qte: "1", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Boulettes de bœuf et purée",
    emoji: "🥩", type: "consistant", vegetarien: false, rapide: true, thermomix: false,
    bebe: true, des: "12-17", portions: 4,
    saisons: ["automne", "hiver"],
    etapes: [
      "Mélangez le bœuf haché avec la mie de pain trempée dans un peu de lait : c'est elle qui garde la boulette tendre.",
      "Formez de petites boulettes et faites-les cuire 12 minutes à la poêle, à cœur — aucune trace rosée.",
      "Pendant ce temps, écrasez les pommes de terre cuites à la vapeur avec un filet d'huile.",
      "Servez une boulette coupée en deux sur la purée."
    ],
    lien: "",
    ingredients: [
      { nom: "Bœuf haché", qte: "250", unite: "g", rayon: "Boucherie" },
      { nom: "Mie de pain", qte: "1", unite: "tranche(s)", rayon: "Boulangerie" },
      { nom: "Pommes de terre", qte: "400", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Huile d'olive", qte: "1", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Poisson pané maison",
    emoji: "🐟", type: "consistant", vegetarien: false, rapide: true, thermomix: false,
    bebe: true, des: "12-17", portions: 4,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Coupez le dos de cabillaud en bâtonnets, après avoir vérifié l'absence d'arêtes.",
      "Passez-les dans la farine, puis dans l'œuf battu, puis dans la chapelure.",
      "Enfournez 15 minutes à 200 °C en les retournant à mi-cuisson.",
      "C'est la version sans sel et sans friture de ce que les enfants réclament."
    ],
    lien: "",
    ingredients: [
      { nom: "Dos de cabillaud", qte: "400", unite: "g", rayon: "Poissonnerie" },
      { nom: "Chapelure", qte: "5", unite: "c. à soupe", rayon: "Épicerie" },
      { nom: "Farine", qte: "2", unite: "c. à soupe", rayon: "Épicerie" },
      { nom: "Œuf", qte: "1", unite: "", rayon: "Crèmerie" }
    ],
    plat: ""
  },
  {
    nom: "Muffins salés aux légumes",
    emoji: "🧁", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "12-17", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Râpez la carotte et la courgette, pressez-les pour retirer l'eau.",
      "Mélangez la farine, la levure, les œufs, le lait et l'huile, puis ajoutez les légumes.",
      "Répartissez dans des moules à muffins et enfournez 20 minutes à 180 °C.",
      "Ils se congèlent très bien : un muffin sorti la veille fait le repas du lendemain."
    ],
    lien: "",
    ingredients: [
      { nom: "Farine", qte: "150", unite: "g", rayon: "Épicerie" },
      { nom: "Levure chimique", qte: "1", unite: "sachet(s)", rayon: "Épicerie" },
      { nom: "Œufs", qte: "2", unite: "", rayon: "Crèmerie" },
      { nom: "Lait", qte: "10", unite: "cl", rayon: "Crèmerie" },
      { nom: "Carotte", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Courgette", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Huile d'olive", qte: "3", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Pancakes à la banane sans sucre",
    emoji: "🥞", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "12-17", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Écrasez la banane bien mûre à la fourchette : c'est elle qui sucre tout.",
      "Ajoutez les œufs, la farine et le lait, mélangez sans trop travailler la pâte.",
      "Faites cuire de petites galettes 2 minutes de chaque côté, à feu doux.",
      "Servez tièdes, nature. Ni sucre, ni miel : avant 1 an le miel est interdit, et après, il n'apporte rien ici."
    ],
    lien: "",
    ingredients: [
      { nom: "Banane", qte: "2", unite: "", rayon: "Fruits & légumes" },
      { nom: "Œufs", qte: "2", unite: "", rayon: "Crèmerie" },
      { nom: "Farine", qte: "100", unite: "g", rayon: "Épicerie" },
      { nom: "Lait", qte: "10", unite: "cl", rayon: "Crèmerie" }
    ],
    plat: "dessert"
  },

  /* ================= 18 mois à 3 ans — il mange comme nous =================
     Les mêmes plats, en plus doux et sans sel ajouté dans sa part. */

  {
    nom: "Croquettes de poisson et pomme de terre",
    emoji: "🐟", type: "consistant", vegetarien: false, rapide: true, thermomix: false,
    bebe: true, des: "18-35", portions: 4,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Écrasez les pommes de terre cuites à la vapeur, sans les mixer.",
      "Émiettez le poisson cuit et vérifié, puis mélangez-le à la purée avec l'œuf.",
      "Formez des galettes, roulez-les dans la chapelure et faites-les dorer 4 minutes de chaque côté à la poêle.",
      "Laissez tiédir : elles se tiennent très bien à la main."
    ],
    lien: "",
    ingredients: [
      { nom: "Dos de cabillaud", qte: "300", unite: "g", rayon: "Poissonnerie" },
      { nom: "Pommes de terre", qte: "400", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Œuf", qte: "1", unite: "", rayon: "Crèmerie" },
      { nom: "Chapelure", qte: "4", unite: "c. à soupe", rayon: "Épicerie" },
      { nom: "Huile d'olive", qte: "2", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Poulet au lait de coco très doux",
    emoji: "🍛", type: "consistant", vegetarien: false, rapide: true, thermomix: false,
    bebe: true, des: "18-35", portions: 4,
    saisons: ["automne", "hiver"],
    etapes: [
      "Faites revenir le poulet en dés 5 minutes, puis ajoutez les carottes et la courgette en petits cubes.",
      "Versez le lait de coco, ajoutez une pincée de curcuma, et laissez mijoter 20 minutes à couvert.",
      "Aucun piment, aucun curry fort : à cet âge, la douceur suffit et fait découvrir un parfum nouveau.",
      "Servez avec du riz bien cuit."
    ],
    lien: "",
    ingredients: [
      { nom: "Blanc de poulet", qte: "300", unite: "g", rayon: "Boucherie" },
      { nom: "Carottes", qte: "2", unite: "", rayon: "Fruits & légumes" },
      { nom: "Courgette", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Lait de coco", qte: "20", unite: "cl", rayon: "Épicerie" },
      { nom: "Curcuma", qte: "1", unite: "pincée(s)", rayon: "Épicerie" },
      { nom: "Riz", qte: "150", unite: "g", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Tarte fine aux légumes du jardin",
    emoji: "🥧", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "18-35", portions: 6,
    saisons: ["ete", "automne"],
    etapes: [
      "Déroulez la pâte et piquez-la à la fourchette.",
      "Étalez le fromage frais, puis rangez les rondelles de courgette et de tomate en les faisant se chevaucher.",
      "Un filet d'huile, une pincée d'herbes, et 25 minutes à 190 °C.",
      "Coupez en parts fines : la croûte se tient à la main."
    ],
    lien: "",
    ingredients: [
      { nom: "Pâte brisée", qte: "1", unite: "", rayon: "Crèmerie" },
      { nom: "Courgette", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Tomates", qte: "2", unite: "", rayon: "Fruits & légumes" },
      { nom: "Fromage frais nature", qte: "3", unite: "c. à soupe", rayon: "Crèmerie" },
      { nom: "Herbes de Provence", qte: "1", unite: "pincée(s)", rayon: "Épicerie" },
      { nom: "Huile d'olive", qte: "1", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Chili doux aux haricots rouges",
    emoji: "🫘", type: "consistant", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "18-35", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Faites revenir l'oignon et le poivron en petits dés 10 minutes.",
      "Ajoutez les tomates concassées et les haricots rouges rincés et bien égouttés.",
      "Laissez mijoter 20 minutes. Une pincée de paprika doux, et rien de plus : pas de piment avant 3 ans.",
      "Écrasez légèrement les haricots à la fourchette avant de servir."
    ],
    lien: "",
    ingredients: [
      { nom: "Haricots rouges", qte: "1", unite: "boîte(s)", rayon: "Épicerie" },
      { nom: "Tomates concassées", qte: "1", unite: "boîte(s)", rayon: "Épicerie" },
      { nom: "Poivron", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Oignon", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Paprika doux", qte: "1", unite: "pincée(s)", rayon: "Épicerie" },
      { nom: "Huile d'olive", qte: "1", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: ""
  },
  {
    nom: "Gaufres de légumes",
    emoji: "🧇", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "18-35", portions: 6,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Râpez la pomme de terre et la carotte, pressez-les fortement dans un torchon.",
      "Mélangez avec les œufs et la farine.",
      "Faites cuire 5 minutes au gaufrier : les creux retiennent les légumes et la gaufre se tient toute seule.",
      "Servez tiède avec une cuillère de fromage frais."
    ],
    lien: "",
    ingredients: [
      { nom: "Pommes de terre", qte: "300", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Carotte", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Œufs", qte: "2", unite: "", rayon: "Crèmerie" },
      { nom: "Farine", qte: "4", unite: "c. à soupe", rayon: "Épicerie" },
      { nom: "Fromage frais nature", qte: "2", unite: "c. à soupe", rayon: "Crèmerie" }
    ],
    plat: ""
  },
  {
    nom: "Crumble de pommes sans sucre ajouté",
    emoji: "🍏", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "18-35", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Coupez les pommes en dés et faites-les compoter 10 minutes à couvert.",
      "Du bout des doigts, mélangez la farine, les flocons d'avoine et le beurre jusqu'à obtenir un sable grossier.",
      "Répartissez sur les pommes et enfournez 25 minutes à 180 °C.",
      "La pomme sucre le dessert à elle seule : inutile d'en rajouter."
    ],
    lien: "",
    ingredients: [
      { nom: "Pommes", qte: "5", unite: "", rayon: "Fruits & légumes" },
      { nom: "Farine", qte: "80", unite: "g", rayon: "Épicerie" },
      { nom: "Flocons d'avoine", qte: "50", unite: "g", rayon: "Épicerie" },
      { nom: "Beurre", qte: "60", unite: "g", rayon: "Crèmerie" }
    ],
    plat: "dessert"
  },

  /* ================= 3 à 5 ans — les plats qu'on réclame =================
     Il mange tout, mais ce sont encore des portions d'enfant : des plats
     doux, qu'on tient à la fourchette et qu'on reconnaît dans l'assiette. */

  {
    nom: "Hachis parmentier aux légumes cachés",
    emoji: "🥧", type: "consistant", vegetarien: false, rapide: false, thermomix: false,
    bebe: true, des: "3-5", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Faites revenir le bœuf haché avec l'oignon et la carotte râpée très fin : fondue dans la viande, elle ne se voit plus.",
      "Écrasez les pommes de terre cuites à la vapeur avec le lait.",
      "Montez le plat, viande puis purée, et enfournez 25 minutes à 190 °C.",
      "Laissez reposer 5 minutes avant de servir : les parts se tiennent mieux."
    ],
    lien: "",
    ingredients: [
      { nom: "Bœuf haché", qte: "400", unite: "g", rayon: "Boucherie" },
      { nom: "Pommes de terre", qte: "800", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Carotte", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Oignon", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Lait", qte: "10", unite: "cl", rayon: "Crèmerie" }
    ],
    plat: ""
  },
  {
    nom: "Nuggets de poulet maison",
    emoji: "🍗", type: "consistant", vegetarien: false, rapide: true, thermomix: false,
    bebe: true, des: "3-5", portions: 4,
    saisons: ["automne", "hiver", "printemps", "ete"],
    etapes: [
      "Coupez le poulet en morceaux de la taille d'une bouchée d'enfant.",
      "Passez-les dans la farine, l'œuf battu puis la chapelure mélangée aux flocons d'avoine mixés.",
      "Enfournez 18 minutes à 200 °C en les retournant à mi-cuisson : dorés dehors, bien cuits dedans.",
      "Servez avec des bâtonnets de légumes et une sauce au fromage frais."
    ],
    lien: "",
    ingredients: [
      { nom: "Blanc de poulet", qte: "400", unite: "g", rayon: "Boucherie" },
      { nom: "Chapelure", qte: "5", unite: "c. à soupe", rayon: "Épicerie" },
      { nom: "Flocons d'avoine", qte: "2", unite: "c. à soupe", rayon: "Épicerie" },
      { nom: "Farine", qte: "2", unite: "c. à soupe", rayon: "Épicerie" },
      { nom: "Œuf", qte: "1", unite: "", rayon: "Crèmerie" }
    ],
    plat: ""
  },
  {
    nom: "Soupe-repas aux petites pâtes",
    emoji: "🍜", type: "consistant", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "3-5", portions: 6,
    saisons: ["automne", "hiver"],
    etapes: [
      "Faites cuire les légumes en petits dés 20 minutes dans de l'eau.",
      "Ajoutez les petites pâtes et laissez cuire 8 minutes de plus.",
      "Ne mixez pas : à cet âge, on aime reconnaître ce qu'on mange.",
      "Une cuillère de fromage râpé dans l'assiette, et c'est le repas entier."
    ],
    lien: "",
    ingredients: [
      { nom: "Petites pâtes", qte: "120", unite: "g", rayon: "Épicerie" },
      { nom: "Carottes", qte: "2", unite: "", rayon: "Fruits & légumes" },
      { nom: "Courgette", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Poireau", qte: "1", unite: "", rayon: "Fruits & légumes" },
      { nom: "Fromage râpé", qte: "50", unite: "g", rayon: "Crèmerie" }
    ],
    plat: ""
  },
  {
    nom: "Clafoutis aux fruits peu sucré",
    emoji: "🍒", type: "leger", vegetarien: true, rapide: true, thermomix: false,
    bebe: true, des: "3-5", portions: 6,
    saisons: ["ete"],
    etapes: [
      "Dénoyautez les fruits un par un : un noyau est rond et dur, c'est exactement ce qu'il ne faut pas laisser.",
      "Battez les œufs avec la farine, le lait et une cuillère de sucre — une seule, pour toute la plaque.",
      "Versez sur les fruits rangés dans le plat et enfournez 35 minutes à 180 °C.",
      "Servez tiède, le clafoutis se tient mieux."
    ],
    lien: "",
    ingredients: [
      { nom: "Cerises", qte: "400", unite: "g", rayon: "Fruits & légumes" },
      { nom: "Œufs", qte: "3", unite: "", rayon: "Crèmerie" },
      { nom: "Farine", qte: "80", unite: "g", rayon: "Épicerie" },
      { nom: "Lait", qte: "25", unite: "cl", rayon: "Crèmerie" },
      { nom: "Sucre", qte: "1", unite: "c. à soupe", rayon: "Épicerie" }
    ],
    plat: "dessert"
  }
];
