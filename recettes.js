/* =========================================================================
   BIBLIOTHEQUE DE RECETTES DE DEPART
   =========================================================================

   Ce sont les plats proposes au premier lancement, pour que le generateur
   de menus ait de quoi piocher tout de suite. Ce ne sont PAS des recettes
   copiees d'un site : uniquement le nom du plat, ses ingredients et un
   champ "lien" laisse vide.

   -> Dans l'app (Menus > Mes recettes), vous pouvez coller dans "lien"
      l'adresse de la recette Cookomix correspondante : un bouton ouvrira
      alors la vraie recette sur leur site.

   -> Vous pouvez aussi ajouter/modifier/supprimer des recettes directement
      dans l'app, sans toucher a ce fichier. Celui-ci ne sert qu'au tout
      premier demarrage d'une famille.

   Champs :
     nom          nom du plat
     emoji        petite icone
     type         "consistant" (plutot le soir/midi copieux) ou "leger"
     vegetarien   true / false
     rapide       true = moins de 30 min
     thermomix    true si le plat se prete bien au robot cuiseur
     saisons      liste parmi "printemps", "ete", "automne", "hiver".
                  Liste vide = le plat convient toute l'annee.
     etapes       le deroule, une consigne par ligne. Ecrit pour l'appli :
                  aucune recette n'est recopiee d'un site.
     lien         adresse web de la recette (a vous de la remplir)
     cuisine      (facultatif) pays ou region d'origine d'un plat de cuisine
                  du monde : "Mexique", "Vietnam"... Sert au filtre « Du monde ».
     ingredients  liste { nom, qte, unite, rayon }
                  qte = un nombre ecrit en texte ("800", "1,2")
                  unite = "g", "kg", "cl", "l", "boite(s)"... ou "" pour un
                  simple compte (4 carottes)
   ========================================================================= */

window.RECETTES_DEPART = [
  { nom:"Blanquette de veau", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir la viande dans un peu de beurre sans la colorer, puis couvrez d'eau à hauteur.", "Ajoutez les carottes en rondelles, l'oignon piqué et un peu de thym. Laissez mijoter 1 h à feu doux.", "Faites revenir les champignons émincés à part, ajoutez-les en fin de cuisson.", "Prélevez un peu de bouillon, liez-le avec la crème et versez sur la viande.", "Servez avec le riz cuit à l'eau salée."], lien:"", ingredients:[
    {nom:"Veau à blanquette", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Champignons de Paris", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Bœuf bourguignon", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer les lardons puis la viande en morceaux dans une cocotte.", "Ajoutez les oignons et les carottes en rondelles, laissez colorer 5 minutes.", "Versez le vin rouge, complétez d'eau à hauteur, salez, poivrez, ajoutez du thym.", "Couvrez et laissez mijoter 2 h 30 à feu très doux : la viande doit s'effilocher.", "Servez avec les pommes de terre cuites à l'eau ou à la vapeur."], lien:"", ingredients:[
    {nom:"Bœuf à mijoter", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Lardons", qte:"150", unite:"g", rayon:"Boucherie"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin rouge", qte:"50", unite:"cl", rayon:"Boissons"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Hachis parmentier", emoji:"🥧", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Cuisez les pommes de terre à l'eau salée, écrasez-les avec le lait et un peu de beurre.", "Faites revenir l'oignon haché, ajoutez la viande hachée et laissez cuire 10 minutes.", "Étalez la viande au fond d'un plat, recouvrez de purée, lissez à la fourchette.", "Parsemez de gruyère et enfournez 25 minutes à 200 °C jusqu'à belle coloration."], lien:"", ingredients:[
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Lasagnes bolognaise", emoji:"🍝", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites revenir l'oignon haché, ajoutez la viande puis le coulis de tomates. Mijotez 20 minutes.", "Préparez une béchamel avec le lait, un peu de beurre et de farine, jusqu'à épaississement.", "Alternez dans un plat : sauce, plaques, béchamel. Terminez par la béchamel.", "Couvrez de gruyère et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Plaques à lasagnes", qte:"1", unite:"paquet(s)", rayon:"Épicerie"},
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Coulis de tomates", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Spaghettis bolognaise", emoji:"🍝", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites revenir l'oignon haché dans un peu d'huile.", "Ajoutez la viande, laissez colorer, versez le coulis de tomates.", "Salez, poivrez, laissez mijoter 20 minutes à découvert.", "Cuisez les spaghettis al dente, mélangez à la sauce et servez avec le parmesan."], lien:"", ingredients:[
    {nom:"Spaghettis", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Bœuf haché", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Coulis de tomates", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Risotto aux champignons", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites chauffer le bouillon et gardez-le au chaud.", "Faites suer l'échalote hachée, ajoutez le riz et remuez jusqu'à ce qu'il devienne translucide.", "Versez le bouillon louche par louche en remuant, en attendant chaque absorption.", "Ajoutez les champignons émincés à mi-cuisson. Comptez 18 minutes en tout.", "Hors du feu, incorporez le parmesan et laissez reposer 2 minutes."], lien:"", ingredients:[
    {nom:"Riz arborio", qte:"320", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Risotto au potiron", emoji:"🎃", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Coupez le potiron en petits cubes et faites-le revenir avec l'oignon haché.", "Ajoutez le riz, remuez, puis versez le bouillon chaud progressivement.", "Remuez régulièrement pendant 18 minutes : le potiron va fondre dans le riz.", "Terminez avec le parmesan hors du feu."], lien:"", ingredients:[
    {nom:"Riz arborio", qte:"320", unite:"g", rayon:"Épicerie"},
    {nom:"Potiron", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Poulet rôti et pommes de terre", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Frottez le poulet de sel, poivre et thym, glissez l'ail dans la cavité.", "Enfournez à 200 °C pendant 1 h 15, en arrosant de jus toutes les 20 minutes.", "Ajoutez les pommes de terre coupées en quartiers autour du poulet à mi-cuisson.", "Laissez reposer 10 minutes avant de découper."], lien:"", ingredients:[
    {nom:"Poulet fermier", qte:"1", unite:"", rayon:"Boucherie"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"tête(s)", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"1", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poulet au curry et riz", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez le poulet en morceaux et faites-le dorer dans une sauteuse.", "Ajoutez l'oignon émincé, puis le curry, et remuez pour enrober.", "Versez le lait de coco, laissez mijoter 20 minutes à feu doux.", "Servez sur le riz basmati cuit à part."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Curry en poudre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poulet basquaise", emoji:"🌶️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete", "automne"], etapes:["Faites dorer les cuisses de poulet de tous côtés, réservez.", "Faites revenir les oignons et les poivrons en lanières 10 minutes.", "Ajoutez les tomates concassées, remettez le poulet, couvrez.", "Laissez mijoter 40 minutes à feu doux. Servez avec le riz."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Poivrons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Chili con carne", cuisine:"Mexique", emoji:"🌶️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et le poivron en dés.", "Ajoutez la viande hachée, laissez colorer, puis les tomates concassées.", "Incorporez les haricots rouges égouttés, épicez à votre goût.", "Laissez mijoter 30 minutes à découvert. Servez avec le riz."], lien:"", ingredients:[
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Haricots rouges", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Curry de pois chiches", cuisine:"Inde", emoji:"🥘", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon haché avec le curry pour libérer les arômes.", "Ajoutez les pois chiches égouttés et le lait de coco.", "Laissez mijoter 15 minutes, puis incorporez les épinards jusqu'à ce qu'ils tombent.", "Servez avec le riz basmati."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Épinards", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curry en poudre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Dahl de lentilles corail", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et le gingembre râpé.", "Ajoutez les lentilles rincées, les tomates et le lait de coco.", "Complétez d'eau à hauteur et laissez cuire 20 minutes en remuant de temps en temps.", "Les lentilles doivent se défaire : rectifiez le sel et servez."], lien:"", ingredients:[
    {nom:"Lentilles corail", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"}]},

  { nom:"Gratin dauphinois", emoji:"🥔", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Frottez un plat avec une gousse d'ail, beurrez-le.", "Coupez les pommes de terre en fines rondelles, sans les rincer.", "Disposez-les en couches, salez, poivrez, muscadez, versez le mélange lait-crème.", "Enfournez 1 h 15 à 160 °C : la lame d'un couteau doit s'enfoncer sans effort."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"1,2", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Crème liquide", qte:"40", unite:"cl", rayon:"Crèmerie"},
    {nom:"Lait", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Noix de muscade", qte:"1", unite:"pincée(s)", rayon:"Épicerie"}]},

  { nom:"Gratin de courgettes", emoji:"🥒", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les courgettes en rondelles et faites-les revenir 10 minutes pour les dessécher.", "Battez les œufs avec la crème, salez, poivrez.", "Disposez les courgettes dans un plat, versez l'appareil, parsemez de gruyère.", "Enfournez 30 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème liquide", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Gratin de pâtes au jambon", emoji:"🧀", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Cuisez les macaronis al dente, égouttez.", "Préparez une béchamel : beurre, farine, lait, en fouettant jusqu'à épaississement.", "Mélangez les pâtes, la béchamel et le jambon coupé en lanières.", "Versez dans un plat, couvrez de gruyère, enfournez 20 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Macaronis", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Jambon blanc", qte:"4", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Quiche lorraine", emoji:"🥧", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Étalez la pâte dans un moule, piquez-la à la fourchette.", "Faites revenir les lardons à sec, égouttez-les et répartissez-les sur la pâte.", "Battez les œufs avec la crème, salez peu, poivrez, muscadez.", "Versez, parsemez de gruyère et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Lardons", qte:"200", unite:"g", rayon:"Boucherie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Tarte aux légumes du soleil", emoji:"🍅", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Étalez la pâte, badigeonnez-la de moutarde.", "Coupez la courgette, l'aubergine et les tomates en fines rondelles.", "Disposez-les en rosace en alternant les couleurs, salez, poivrez, ajoutez des herbes.", "Émiettez le chèvre par-dessus et enfournez 35 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Courgette", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aubergine", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Chèvre", qte:"1", unite:"bûche(s)", rayon:"Crèmerie"},
    {nom:"Herbes de Provence", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Ratatouille", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:true, saisons:["ete"], etapes:["Coupez tous les légumes en cubes réguliers.", "Faites revenir séparément l'aubergine, la courgette et le poivron : chacun garde ainsi sa tenue.", "Faites suer l'oignon, ajoutez les tomates concassées et les herbes.", "Réunissez le tout et laissez mijoter 40 minutes à feu doux, à découvert."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Herbes de Provence", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Soupe de légumes maison", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Épluchez et coupez grossièrement les poireaux, carottes et pommes de terre.", "Couvrez de bouillon et laissez cuire 25 minutes à petits bouillons.", "Mixez jusqu'à obtenir une texture lisse, allongez d'eau si c'est trop épais.", "Rectifiez le sel et servez bien chaud."], lien:"", ingredients:[
    {nom:"Poireaux", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"}]},

  { nom:"Velouté de potimarron", emoji:"🎃", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Coupez le potimarron en cubes — la peau se mange, inutile de l'éplucher.", "Ajoutez la pomme de terre en morceaux et couvrez de bouillon.", "Laissez cuire 20 minutes, jusqu'à ce que la lame d'un couteau s'enfonce sans résistance.", "Mixez finement, incorporez la crème hors du feu."], lien:"", ingredients:[
    {nom:"Potimarron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pomme de terre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème liquide", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Bouillon de légumes", qte:"75", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Soupe à l'oignon gratinée", emoji:"🧅", type:"leger", vegetarien:true, rapide:false, thermomix:true, saisons:["hiver"], etapes:["Émincez les oignons très finement et faites-les fondre 25 minutes à feu doux : ils doivent blondir sans brûler.", "Versez le bouillon chaud et laissez frémir 20 minutes.", "Répartissez dans des bols, posez une tranche de pain sur chacun.", "Couvrez de gruyère et passez sous le gril jusqu'à ce que le fromage dore."], lien:"", ingredients:[
    {nom:"Oignons", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de bœuf", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Gruyère râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Velouté de courgettes au fromage", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Coupez les courgettes en rondelles sans les éplucher, émincez l'oignon.", "Couvrez de bouillon et laissez cuire 20 minutes.", "Ajoutez le fromage à tartiner et mixez longuement pour un résultat velouté.", "Poivrez généreusement avant de servir."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fromage à tartiner", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"75", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Salade César", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites griller les blancs de poulet, laissez tiédir puis émincez-les.", "Lavez et essorez la romaine, coupez-la en larges lanières.", "Mélangez la salade avec la sauce, ajoutez le poulet et les croûtons.", "Terminez par de larges copeaux de parmesan."], lien:"", ingredients:[
    {nom:"Laitue romaine", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Blancs de poulet", qte:"2", unite:"", rayon:"Boucherie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Croûtons", qte:"1", unite:"paquet(s)", rayon:"Épicerie"},
    {nom:"Sauce César", qte:"1", unite:"pot(s)", rayon:"Épicerie"}]},

  { nom:"Salade de quinoa et féta", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Rincez le quinoa et cuisez-le 12 minutes à l'eau salée, égouttez et laissez refroidir.", "Coupez le concombre en dés et les tomates cerises en deux.", "Mélangez le tout, émiettez la féta par-dessus.", "Ajoutez la menthe ciselée, un filet d'huile d'olive et du citron."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe fraîche", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade niçoise", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites durcir les œufs 9 minutes, rafraîchissez-les et écalez-les.", "Cuisez les haricots verts 8 minutes à l'eau bouillante salée, gardez-les croquants.", "Coupez les tomates en quartiers, disposez tous les éléments dans un plat.", "Ajoutez le thon émietté et les olives, arrosez de vinaigrette."], lien:"", ingredients:[
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Haricots verts", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de vin", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Croque-monsieur et salade", emoji:"🥪", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Beurrez légèrement les tranches de pain de mie sur la face extérieure.", "Garnissez de jambon et de gruyère, refermez.", "Faites dorer à la poêle ou au four 10 minutes à 200 °C.", "Servez avec la salade verte assaisonnée."], lien:"", ingredients:[
    {nom:"Pain de mie", qte:"8", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Jambon blanc", qte:"4", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Gruyère râpé", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Omelette aux herbes", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Battez les œufs à la fourchette sans excès, salez et poivrez.", "Ciselez finement le persil et la ciboulette, incorporez-les.", "Faites chauffer le beurre dans une poêle, versez les œufs.", "Ramenez les bords vers le centre pendant 3 minutes, pliez et servez baveuse."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Quiche aux poireaux", emoji:"🥧", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Émincez les poireaux et faites-les fondre 15 minutes à couvert avec un peu de beurre.", "Étalez la pâte dans un moule et répartissez les poireaux.", "Battez les œufs avec la crème, salez, poivrez, versez sur les poireaux.", "Enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Poireaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Saumon à l'oseille et riz", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les pavés de saumon 6 minutes à la poêle, côté peau d'abord.", "Dans une autre poêle, faites tomber l'oseille avec un peu de beurre.", "Ajoutez la crème, laissez réduire 3 minutes.", "Nappez le saumon de sauce et servez avec le riz."], lien:"", ingredients:[
    {nom:"Pavés de saumon", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Crème liquide", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Oseille ou épinards", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Cabillaud et légumes vapeur", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Détaillez le brocoli en bouquets et les carottes en bâtonnets.", "Faites cuire les légumes 12 minutes à la vapeur.", "Ajoutez les dos de cabillaud dans le panier pour les 8 dernières minutes.", "Servez avec un filet de citron, du sel et un tour de moulin."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Brocoli", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Papillotes de poisson au citron", emoji:"🍋", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Découpez quatre grands carrés de papier cuisson.", "Posez un filet de poisson sur chacun, ajoutez des rondelles de courgette et de citron.", "Salez, poivrez, ajoutez l'aneth, fermez hermétiquement les papillotes.", "Enfournez 18 minutes à 190 °C et ouvrez à table."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courgette", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Moules marinières et frites", emoji:"🦪", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete", "automne"], etapes:["Grattez et rincez les moules à grande eau, jetez celles qui restent ouvertes.", "Faites suer les échalotes hachées, versez le vin blanc et portez à ébullition.", "Ajoutez les moules, couvrez et secouez la casserole 5 minutes : elles doivent toutes s'ouvrir.", "Parsemez de persil et servez avec les frites."], lien:"", ingredients:[
    {nom:"Moules", qte:"2", unite:"kg", rayon:"Poissonnerie"},
    {nom:"Vin blanc", qte:"25", unite:"cl", rayon:"Boissons"},
    {nom:"Échalotes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Frites surgelées", qte:"1", unite:"kg", rayon:"Surgelés"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Couscous poulet-merguez", cuisine:"Maghreb", emoji:"🍛", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites dorer les cuisses de poulet, réservez. Faites griller les merguez à part.", "Faites revenir les légumes coupés en gros morceaux, couvrez d'eau, salez, épicez.", "Remettez le poulet, ajoutez les pois chiches, laissez mijoter 40 minutes.", "Préparez la semoule en la couvrant d'eau bouillante salée, égrenez à la fourchette.", "Servez la semoule, les légumes et les viandes séparément."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Merguez", qte:"8", unite:"", rayon:"Boucherie"},
    {nom:"Semoule", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"}]},

  { nom:"Tajine de légumes", cuisine:"Maroc", emoji:"🥘", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon avec le ras el-hanout.", "Ajoutez les carottes et les courgettes en gros tronçons, couvrez d'eau à mi-hauteur.", "Ajoutez les pois chiches et les abricots secs, couvrez et laissez mijoter 35 minutes.", "Servez sur la semoule préparée à part."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Abricots secs", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Semoule", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Ras el-hanout", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Pizza maison", emoji:"🍕", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Étalez la pâte sur une plaque, étalez le coulis de tomates jusqu'aux bords.", "Répartissez les champignons émincés et la mozzarella en morceaux.", "Saupoudrez d'origan, arrosez d'un filet d'huile d'olive.", "Enfournez 12 minutes dans un four très chaud, à 250 °C."], lien:"", ingredients:[
    {nom:"Pâte à pizza", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Coulis de tomates", qte:"25", unite:"cl", rayon:"Épicerie"},
    {nom:"Mozzarella", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Champignons", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Origan", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Galettes de sarrasin", emoji:"🥞", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Mélangez la farine, un œuf, de l'eau et une pincée de sel jusqu'à obtenir une pâte fluide. Laissez reposer 1 h.", "Faites cuire les galettes une par une dans une poêle très chaude.", "Garnissez chacune d'un œuf, de jambon et de gruyère.", "Repliez les quatre côtés et laissez fondre le fromage à couvert."], lien:"", ingredients:[
    {nom:"Farine de sarrasin", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"6", unite:"", rayon:"Crèmerie"},
    {nom:"Jambon blanc", qte:"4", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Gruyère râpé", qte:"120", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Tartiflette", emoji:"🧀", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Cuisez les pommes de terre 20 minutes à l'eau, laissez tiédir et coupez-les en rondelles.", "Faites revenir les lardons et les oignons émincés.", "Alternez pommes de terre et lardons dans un plat, versez la crème.", "Posez le reblochon coupé en deux, croûte vers le haut. Enfournez 30 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"1,2", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Reblochon", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Lardons", qte:"200", unite:"g", rayon:"Boucherie"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Endives au jambon", emoji:"🥬", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites cuire les endives 20 minutes à la vapeur, puis pressez-les pour ôter l'eau : c'est ce qui évite l'amertume.", "Enroulez chaque endive dans une tranche de jambon.", "Préparez une béchamel avec le beurre, la farine et le lait.", "Nappez, couvrez de gruyère et gratinez 25 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Endives", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Jambon blanc", qte:"8", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poêlée de gnocchis aux légumes", emoji:"🥔", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites revenir les gnocchis à sec dans une poêle chaude jusqu'à ce qu'ils dorent.", "Ajoutez la courgette en dés et les tomates cerises coupées en deux.", "Laissez cuire 8 minutes en remuant.", "Hors du feu, ajoutez la mozzarella en morceaux et le basilic ciselé."], lien:"", ingredients:[
    {nom:"Gnocchis", qte:"700", unite:"g", rayon:"Crèmerie"},
    {nom:"Courgette", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Mozzarella", qte:"125", unite:"g", rayon:"Crèmerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Pâtes carbonara", emoji:"🍝", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites rissoler les lardons à sec, sans matière grasse.", "Battez les œufs avec le parmesan râpé et beaucoup de poivre.", "Cuisez les tagliatelles al dente, gardez une louche d'eau de cuisson.", "Hors du feu, mélangez pâtes, lardons et œufs : la chaleur suffit à lier. Détendez avec l'eau réservée."], lien:"", ingredients:[
    {nom:"Tagliatelles", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Lardons", qte:"200", unite:"g", rayon:"Boucherie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Pâtes au pesto et tomates", emoji:"🌿", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Faites torréfier les pignons à sec quelques minutes.", "Cuisez les penne al dente.", "Coupez les tomates cerises en deux et faites-les revenir 3 minutes.", "Mélangez les pâtes au pesto hors du feu, ajoutez les tomates et les pignons."], lien:"", ingredients:[
    {nom:"Penne", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Pesto", qte:"1", unite:"pot(s)", rayon:"Épicerie"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pignons de pin", qte:"50", unite:"g", rayon:"Épicerie"}]},

  { nom:"Rôti de porc et haricots verts", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete", "automne"], etapes:["Badigeonnez le rôti de moutarde, salez, poivrez.", "Enfournez 1 h à 180 °C avec les oignons émincés autour, en arrosant régulièrement.", "Cuisez les haricots verts 10 minutes à l'eau bouillante salée.", "Laissez reposer la viande 10 minutes avant de trancher."], lien:"", ingredients:[
    {nom:"Rôti de porc", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Haricots verts", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Saucisses et purée maison", emoji:"🌭", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Cuisez les pommes de terre 25 minutes à l'eau salée.", "Écrasez-les au presse-purée avec le beurre puis le lait chaud, petit à petit.", "Faites griller les saucisses 15 minutes à feu moyen en les retournant.", "Servez la purée bien lisse avec les saucisses."], lien:"", ingredients:[
    {nom:"Saucisses", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"50", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Boulettes de bœuf à la tomate", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Mélangez la viande, la chapelure et l'œuf, salez, poivrez. Formez des boulettes.", "Faites-les dorer de tous côtés dans une sauteuse.", "Versez le coulis de tomates, couvrez et laissez mijoter 20 minutes.", "Servez sur les spaghettis cuits al dente."], lien:"", ingredients:[
    {nom:"Bœuf haché", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Chapelure", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Coulis de tomates", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Œuf", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Spaghettis", qte:"400", unite:"g", rayon:"Épicerie"}]},

  { nom:"Wok de légumes et nouilles", cuisine:"Asie", emoji:"🥡", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Coupez les carottes et le poivron en fines lanières.", "Faites chauffer un wok très fort, saisissez les légumes 5 minutes en remuant sans cesse.", "Ajoutez les pousses de soja et la sauce soja.", "Incorporez les nouilles cuites, mélangez 2 minutes et servez aussitôt."], lien:"", ingredients:[
    {nom:"Nouilles chinoises", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pousses de soja", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"5", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Croque-tartines chèvre-miel", emoji:"🍯", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites griller les tranches de pain.", "Répartissez le chèvre en rondelles, arrosez d'un filet de miel.", "Passez 5 minutes sous le gril, jusqu'à ce que le fromage soit fondant.", "Parsemez de noix concassées et servez avec la salade."], lien:"", ingredients:[
    {nom:"Pain de campagne", qte:"8", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Chèvre", qte:"2", unite:"bûche(s)", rayon:"Crèmerie"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"50", unite:"g", rayon:"Épicerie"}]},

  { nom:"Parmentier de poisson", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Cuisez les pommes de terre et écrasez-les avec un peu de crème.", "Faites fondre le poireau émincé 10 minutes à couvert.", "Pochez le poisson 6 minutes dans l'eau frémissante, égouttez et émiettez-le.", "Alternez poisson, poireau et purée dans un plat, couvrez de gruyère.", "Enfournez 25 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Poireau", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème liquide", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Tarte à la tomate et moutarde", emoji:"🍅", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Étalez la pâte, piquez-la et badigeonnez-la de moutarde.", "Coupez les tomates en rondelles et laissez-les dégorger 10 minutes sur du papier absorbant.", "Disposez-les en rosace, salez, poivrez, ajoutez les herbes.", "Parsemez de gruyère et enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Tomates", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gruyère râpé", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Herbes de Provence", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Bowl poulet-avocat", emoji:"🥑", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Cuisez le riz et laissez-le tiédir.", "Faites griller les blancs de poulet, laissez reposer puis émincez-les.", "Coupez les avocats en lamelles, arrosez-les de citron vert pour qu'ils ne noircissent pas.", "Composez les bols : riz, poulet, avocat, maïs égoutté."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"2", unite:"", rayon:"Boucherie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  /* ---------------- Soupes et veloutés (le robot excelle ici) ---------------- */

  { nom:"Velouté de carottes au cumin", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Épluchez et coupez les carottes et la pomme de terre en rondelles.", "Faites suer l'oignon, ajoutez les légumes et le cumin.", "Couvrez de bouillon et laissez cuire 25 minutes.", "Mixez finement : le cumin se révèle après le mixage."], lien:"", ingredients:[
    {nom:"Carottes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pomme de terre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"75", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Soupe de tomates au basilic", emoji:"🍅", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Faites revenir l'oignon et l'ail hachés sans les colorer.", "Ajoutez les tomates coupées en quartiers, laissez compoter 20 minutes.", "Mixez, puis passez au chinois si vous voulez ôter les peaux.", "Incorporez la crème et le basilic ciselé au dernier moment."], lien:"", ingredients:[
    {nom:"Tomates", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Crème liquide", qte:"10", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Velouté de brocoli", emoji:"🥦", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Détaillez le brocoli en bouquets, coupez la pomme de terre en morceaux.", "Couvrez de bouillon et laissez cuire 15 minutes : n'allez pas au-delà, le brocoli perdrait sa couleur.", "Mixez longuement pour un résultat très lisse.", "Ajoutez la crème hors du feu."], lien:"", ingredients:[
    {nom:"Brocoli", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pomme de terre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"70", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème liquide", qte:"10", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Velouté de champignons", emoji:"🍄", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne"], etapes:["Nettoyez les champignons sans les laver, émincez-les.", "Faites-les revenir à feu vif avec les échalotes jusqu'à évaporation de l'eau.", "Versez le bouillon, laissez frémir 15 minutes.", "Mixez et incorporez la crème."], lien:"", ingredients:[
    {nom:"Champignons de Paris", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"60", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Gaspacho andalou", cuisine:"Espagne", emoji:"🥒", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Coupez grossièrement les tomates, le concombre et le poivron.", "Mixez le tout avec l'ail et l'huile d'olive jusqu'à obtenir une texture bien lisse.", "Salez, poivrez, ajoutez un trait de vinaigre.", "Placez au moins 2 h au réfrigérateur : le gaspacho se sert très frais."], lien:"", ingredients:[
    {nom:"Tomates", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"cl", rayon:"Épicerie"},
    {nom:"Vinaigre de vin", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Velouté de petits pois à la menthe", emoji:"🌱", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Faites suer l'oignon émincé.", "Ajoutez les petits pois et le bouillon, laissez cuire 10 minutes seulement.", "Mixez avec les feuilles de menthe.", "Servez chaud, ou bien frais l'été."], lien:"", ingredients:[
    {nom:"Petits pois", qte:"600", unite:"g", rayon:"Surgelés"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe fraîche", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"60", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Soupe de lentilles corail et carottes", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon avec le curry.", "Ajoutez les carottes en rondelles et les lentilles rincées.", "Versez le lait de coco et de l'eau à hauteur, laissez cuire 20 minutes.", "Mixez ou laissez tel quel, selon l'envie."], lien:"", ingredients:[
    {nom:"Lentilles corail", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Curry en poudre", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Soupe de courgettes au curry", emoji:"🥒", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Coupez les courgettes en rondelles sans les éplucher.", "Faites revenir l'oignon avec le curry, ajoutez les courgettes.", "Couvrez de bouillon et laissez cuire 15 minutes.", "Mixez finement et rectifiez l'assaisonnement."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curry en poudre", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"50", unite:"cl", rayon:"Épicerie"}]},

  /* ---------------- Risottos et plats mijotés au robot ---------------- */

  { nom:"Risotto aux asperges", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["printemps"], etapes:["Coupez les asperges en tronçons, réservez les pointes à part.", "Faites suer l'échalote, nacrez le riz, versez le bouillon chaud louche par louche.", "Ajoutez les tronçons d'asperge à mi-cuisson, les pointes 5 minutes avant la fin.", "Terminez au parmesan, hors du feu."], lien:"", ingredients:[
    {nom:"Riz arborio", qte:"320", unite:"g", rayon:"Épicerie"},
    {nom:"Asperges vertes", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Risotto tomate-mozzarella", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["ete"], etapes:["Nacrez le riz avec un peu d'huile, puis versez le bouillon progressivement.", "Ajoutez les tomates cerises coupées en deux à mi-cuisson.", "Après 18 minutes, coupez le feu et ajoutez la mozzarella en dés.", "Couvrez 2 minutes : elle doit filer. Parsemez de basilic."], lien:"", ingredients:[
    {nom:"Riz arborio", qte:"320", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates cerises", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Mozzarella", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Risotto aux épinards", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["printemps"], etapes:["Faites suer l'oignon, nacrez le riz, mouillez au bouillon chaud petit à petit.", "À 15 minutes, ajoutez les épinards : ils réduisent énormément.", "Poursuivez 3 minutes en remuant.", "Incorporez le parmesan hors du feu."], lien:"", ingredients:[
    {nom:"Riz arborio", qte:"320", unite:"g", rayon:"Épicerie"},
    {nom:"Épinards", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Risotto aux crevettes", emoji:"🍤", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:[], etapes:["Faites suer l'échalote, nacrez le riz, déglacez au vin blanc.", "Versez le bouillon chaud louche par louche pendant 18 minutes.", "Ajoutez les crevettes les 4 dernières minutes : au-delà elles durcissent.", "Poivrez et servez sans attendre."], lien:"", ingredients:[
    {nom:"Riz arborio", qte:"320", unite:"g", rayon:"Épicerie"},
    {nom:"Crevettes décortiquées", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"10", unite:"cl", rayon:"Boissons"},
    {nom:"Bouillon de poisson", qte:"1", unite:"l", rayon:"Épicerie"}]},

  { nom:"One-pot pâtes tomate-mozzarella", emoji:"🍝", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Mettez dans une grande casserole les pâtes crues, les tomates cerises, l'ail émincé.", "Couvrez d'eau juste à hauteur, salez.", "Portez à ébullition et laissez cuire 12 minutes en remuant : l'eau devient une sauce.", "Hors du feu, ajoutez la mozzarella et le basilic."], lien:"", ingredients:[
    {nom:"Penne", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates cerises", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Mozzarella", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Bœuf Stroganoff", cuisine:"Russie", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites saisir la viande émincée à feu vif, réservez.", "Faites revenir les oignons puis les champignons dans la même poêle.", "Ajoutez la moutarde et la crème, laissez épaissir 5 minutes.", "Remettez la viande juste pour la réchauffer. Servez sur les tagliatelles."], lien:"", ingredients:[
    {nom:"Bœuf à mijoter", qte:"700", unite:"g", rayon:"Boucherie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Tagliatelles", qte:"400", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poulet tikka masala", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:[], etapes:["Faites mariner le poulet en morceaux dans le yaourt et les épices, 30 minutes si possible.", "Faites-le dorer à feu vif, réservez.", "Faites revenir le gingembre râpé, ajoutez les tomates, laissez réduire 10 minutes.", "Remettez le poulet, mijotez 15 minutes. Servez avec le riz basmati."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"700", unite:"g", rayon:"Boucherie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Garam masala", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Curry de légumes au lait de coco", cuisine:"Inde", emoji:"🥘", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon avec la pâte de curry.", "Ajoutez les carottes en rondelles et le chou-fleur en bouquets.", "Versez le lait de coco, couvrez et laissez cuire 20 minutes.", "Servez avec le riz basmati."], lien:"", ingredients:[
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pâte de curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Gratin de chou-fleur béchamel", emoji:"🧀", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Détaillez le chou-fleur en bouquets, cuisez-les 10 minutes à l'eau bouillante salée.", "Préparez la béchamel : faites fondre le beurre, ajoutez la farine, puis le lait en fouettant.", "Disposez le chou-fleur égoutté dans un plat, nappez de béchamel.", "Couvrez de gruyère et gratinez 25 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Gruyère râpé", qte:"120", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Houmous et légumes croquants", cuisine:"Liban", emoji:"🫘", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Égouttez et rincez les pois chiches.", "Mixez-les avec le tahini, le jus de citron, un peu d'eau et de l'huile d'olive.", "Mixez longuement : c'est ce qui rend le houmous crémeux. Salez.", "Servez avec les carottes et le concombre en bâtonnets, et le pain pita tiède."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tahini", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pain pita", qte:"4", unite:"", rayon:"Boulangerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  /* ---------------- Viandes ---------------- */

  { nom:"Poulet au citron et olives", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites dorer les cuisses de poulet, réservez.", "Faites fondre les oignons émincés 10 minutes.", "Remettez le poulet, ajoutez les citrons en quartiers et les olives, couvrez d'eau à mi-hauteur.", "Laissez mijoter 40 minutes à couvert. Servez avec la semoule."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Olives vertes", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Semoule", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poulet à la moutarde", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez le poulet en morceaux et faites-le dorer.", "Ajoutez la moutarde et remuez pour enrober.", "Versez la crème, laissez mijoter 15 minutes à feu doux sans faire bouillir.", "Servez avec le riz."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Moutarde", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Escalopes à la crème et champignons", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer les escalopes 3 minutes de chaque côté, réservez au chaud.", "Faites revenir les champignons émincés jusqu'à évaporation de leur eau.", "Versez la crème, laissez réduire 5 minutes, remettez les escalopes.", "Servez avec les tagliatelles."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème liquide", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Tagliatelles", qte:"400", unite:"g", rayon:"Épicerie"}]},

  { nom:"Sauté de veau aux olives", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer les morceaux de veau de tous côtés.", "Ajoutez les oignons émincés, puis les tomates concassées.", "Couvrez et laissez mijoter 1 h à feu doux.", "Ajoutez les olives 10 minutes avant la fin. Servez avec le riz."], lien:"", ingredients:[
    {nom:"Sauté de veau", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Olives noires", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Filet mignon aux pommes", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne"], etapes:["Faites dorer le filet mignon de tous côtés dans une cocotte.", "Ajoutez les pommes coupées en quartiers, couvrez.", "Laissez cuire 30 minutes à feu doux.", "Retirez la viande, ajoutez la crème au jus, laissez réduire, nappez.", "Servez avec les pommes de terre vapeur."], lien:"", ingredients:[
    {nom:"Filet mignon de porc", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Pommes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Brochettes de poulet mariné", emoji:"🍢", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez le poulet en cubes, faites-le mariner avec le citron, l'huile et des herbes 30 minutes.", "Coupez les poivrons et la courgette en morceaux de même taille.", "Montez les brochettes en alternant viande et légumes.", "Faites griller 12 minutes en les retournant. Servez avec la semoule."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Poivrons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courgette", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Semoule", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Herbes de Provence", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Burgers maison", emoji:"🍔", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites griller les steaks 3 minutes de chaque côté, posez le cheddar dessus en fin de cuisson.", "Faites toaster les pains coupés en deux.", "Montez : sauce, salade, steak, tomate.", "Servez aussitôt avec les frites cuites au four."], lien:"", ingredients:[
    {nom:"Steaks hachés", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Pains à burger", qte:"4", unite:"", rayon:"Boulangerie"},
    {nom:"Cheddar", qte:"4", unite:"tranche(s)", rayon:"Crèmerie"},
    {nom:"Tomate", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Frites surgelées", qte:"800", unite:"g", rayon:"Surgelés"}]},

  { nom:"Rôti de bœuf et gratin de chou-fleur", emoji:"🥩", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Sortez la viande 1 h avant : elle cuit bien mieux à température ambiante.", "Saisissez le rôti puis enfournez 20 minutes à 210 °C pour une viande rosée.", "Cuisez le chou-fleur 10 minutes, disposez-le dans un plat avec la crème et le gruyère.", "Gratinez 20 minutes. Laissez reposer la viande avant de trancher."], lien:"", ingredients:[
    {nom:"Rôti de bœuf", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème liquide", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Nouilles sautées au bœuf", cuisine:"Chine", emoji:"🥡", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Émincez le bœuf très finement et faites-le mariner 10 minutes dans la sauce soja.", "Saisissez-le à feu très vif 2 minutes, réservez.", "Faites sauter les carottes et le poivron en lanières.", "Ajoutez les nouilles cuites et la viande, mélangez 2 minutes."], lien:"", ingredients:[
    {nom:"Bœuf émincé", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Nouilles chinoises", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"5", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Riz cantonais", cuisine:"Chine", emoji:"🍚", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Utilisez du riz cuit la veille : il tient mieux à la poêle.", "Faites une omelette fine, roulez-la et coupez-la en lanières.", "Faites sauter le riz à feu vif, ajoutez le jambon en dés et les petits pois.", "Incorporez l'omelette et la sauce soja, mélangez et servez."], lien:"", ingredients:[
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Jambon blanc", qte:"3", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Petits pois", qte:"200", unite:"g", rayon:"Surgelés"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pad thaï aux crevettes", cuisine:"Thaïlande", emoji:"🍜", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites tremper les nouilles de riz 10 minutes dans l'eau chaude.", "Saisissez les crevettes 2 minutes, réservez.", "Brouillez les œufs dans le wok, ajoutez les nouilles égouttées et la sauce.", "Remettez les crevettes, ajoutez les pousses de soja.", "Servez avec les cacahuètes concassées et le citron vert."], lien:"", ingredients:[
    {nom:"Nouilles de riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Crevettes décortiquées", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Pousses de soja", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Cacahuètes", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Paella express", cuisine:"Espagne", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites dorer les morceaux de poulet dans une grande poêle.", "Ajoutez les poivrons en lanières, puis le riz, remuez pour l'enrober.", "Versez deux fois son volume d'eau chaude avec le safran, laissez cuire 15 minutes sans remuer.", "Ajoutez les fruits de mer et les petits pois, poursuivez 5 minutes.", "Laissez reposer 5 minutes hors du feu avant de servir."], lien:"", ingredients:[
    {nom:"Riz rond", qte:"350", unite:"g", rayon:"Épicerie"},
    {nom:"Cuisses de poulet", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Fruits de mer surgelés", qte:"400", unite:"g", rayon:"Surgelés"},
    {nom:"Poivrons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"150", unite:"g", rayon:"Surgelés"},
    {nom:"Safran", qte:"1", unite:"sachet(s)", rayon:"Épicerie"}]},

  /* ---------------- Poissons ---------------- */

  { nom:"Dos de cabillaud sauce citron", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Faites cuire les dos de cabillaud 8 minutes à la vapeur ou à la poêle.", "Faites fondre le beurre à feu doux, ajoutez le jus des citrons.", "Fouettez sans faire bouillir : la sauce doit rester lisse.", "Nappez le poisson et servez avec le riz."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Gratin de poisson aux poireaux", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Émincez les poireaux et faites-les fondre 15 minutes à couvert.", "Préparez une béchamel légère avec le lait et la farine.", "Disposez le poisson en morceaux et les poireaux dans un plat, nappez.", "Couvrez de gruyère et enfournez 25 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Poireaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"40", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"30", unite:"g", rayon:"Épicerie"},
    {nom:"Gruyère râpé", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Tartare de saumon à l'aneth", emoji:"🍣", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Coupez le saumon au couteau en petits dés — surtout pas au mixeur.", "Ciselez l'échalote et l'aneth très finement.", "Mélangez avec le jus de citron vert, salez, poivrez.", "Laissez reposer 20 minutes au frais et servez avec le pain grillé."], lien:"", ingredients:[
    {nom:"Saumon très frais", qte:"500", unite:"g", rayon:"Poissonnerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Sardines grillées et salade", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Videz et rincez les sardines, épongez-les.", "Faites-les griller 3 minutes de chaque côté à feu vif.", "Préparez la salade avec les tomates en quartiers.", "Servez les sardines très chaudes avec du citron et le pain grillé."], lien:"", ingredients:[
    {nom:"Sardines", qte:"12", unite:"", rayon:"Poissonnerie"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Laitue", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Truite aux amandes", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Farinez légèrement les truites et faites-les cuire 5 minutes de chaque côté au beurre.", "Réservez-les au chaud.", "Faites blondir les amandes dans le beurre de cuisson.", "Versez sur les truites et servez avec les pommes de terre vapeur."], lien:"", ingredients:[
    {nom:"Truites", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Amandes effilées", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Spaghettis aux fruits de mer", emoji:"🍝", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites revenir l'ail haché dans l'huile sans le brûler.", "Ajoutez les fruits de mer, déglacez au vin blanc, laissez évaporer 5 minutes.", "Cuisez les spaghettis al dente, gardez un peu d'eau de cuisson.", "Mélangez le tout, ajoutez le persil et un peu d'eau de cuisson pour lier."], lien:"", ingredients:[
    {nom:"Spaghettis", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Fruits de mer surgelés", qte:"500", unite:"g", rayon:"Surgelés"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"10", unite:"cl", rayon:"Boissons"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  /* ---------------- Végétarien ---------------- */

  { nom:"Chili sin carne", cuisine:"Mexique", emoji:"🌶️", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et le poivron en dés.", "Ajoutez les tomates concassées, les haricots rouges et le maïs égouttés.", "Épicez généreusement et laissez mijoter 25 minutes.", "Servez avec le riz."], lien:"", ingredients:[
    {nom:"Haricots rouges", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Galettes de lentilles", emoji:"🫘", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Cuisez les lentilles 25 minutes à l'eau, égouttez-les bien.", "Râpez la carotte, hachez l'oignon.", "Écrasez grossièrement les lentilles, mélangez avec les légumes, l'œuf et la chapelure.", "Formez des galettes et faites-les dorer 4 minutes de chaque côté."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Carotte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Chapelure", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Œuf", qte:"1", unite:"", rayon:"Crèmerie"}]},

  { nom:"Buddha bowl aux falafels", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Mixez les pois chiches avec des herbes et des épices, formez des boulettes.", "Faites-les dorer à la poêle 8 minutes en les retournant.", "Cuisez le boulgour, laissez tiédir.", "Composez les bols : boulgour, concombre, tomates, falafels.", "Mélangez le yaourt avec la menthe ciselée pour la sauce."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"1", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Menthe fraîche", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Lasagnes aux légumes", emoji:"🍝", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["ete"], etapes:["Coupez courgettes et aubergine en fines tranches, faites-les griller à la poêle.", "Préparez une béchamel avec le lait.", "Alternez coulis, plaques, légumes et béchamel dans un plat.", "Couvrez de gruyère et enfournez 40 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Plaques à lasagnes", qte:"1", unite:"paquet(s)", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aubergine", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coulis de tomates", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"150", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Aubergines farcies", emoji:"🍆", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les aubergines en deux, quadrillez la chair et enfournez 25 minutes à 200 °C.", "Creusez-les, hachez la chair récupérée.", "Mélangez avec le riz cuit, les tomates en dés et les pignons.", "Garnissez les demi-aubergines, émiettez la féta, repassez 15 minutes au four."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Pignons de pin", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Quinoa aux légumes rôtis", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne"], etapes:["Coupez le potimarron en cubes et l'oignon rouge en quartiers.", "Enfournez-les 30 minutes à 200 °C avec un filet d'huile.", "Cuisez le quinoa 12 minutes à l'eau salée.", "Mélangez, ajoutez la féta émiettée et les noix concassées."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Potimarron", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Noix", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tortilla espagnole", cuisine:"Espagne", emoji:"🍳", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Coupez les pommes de terre en fines rondelles et l'oignon en lamelles.", "Faites-les cuire doucement dans l'huile 20 minutes, sans les colorer. Égouttez.", "Battez les œufs, mélangez-y les pommes de terre, laissez reposer 10 minutes.", "Cuisez à feu doux 8 minutes, retournez à l'aide d'une assiette, 5 minutes de plus."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"700", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"6", unite:"", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Galettes de pommes de terre", emoji:"🥔", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Râpez les pommes de terre et pressez-les fort pour ôter l'eau : c'est la clé du croustillant.", "Mélangez avec l'oignon râpé, les œufs et la farine.", "Formez des galettes fines dans une poêle bien chaude.", "Faites dorer 4 minutes de chaque côté. Servez avec la salade."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Tarte fine aux oignons", emoji:"🧅", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Émincez les oignons et faites-les fondre 30 minutes à feu très doux : ils doivent confire.", "Étalez la pâte, piquez-la.", "Répartissez les oignons, ajoutez la crème et le thym.", "Enfournez 25 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Oignons", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Thym", qte:"1", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tarte rustique aux champignons", emoji:"🍄", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne"], etapes:["Faites revenir les échalotes puis les champignons émincés jusqu'à évaporation de l'eau.", "Ajoutez la crème et le persil, laissez épaissir.", "Étalez la pâte, garnissez le centre, repliez grossièrement les bords.", "Enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade de lentilles et féta", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Cuisez les lentilles 25 minutes à l'eau non salée, salez en fin de cuisson.", "Rincez-les à l'eau froide et égouttez.", "Coupez les radis en rondelles, ciselez l'échalote et le persil.", "Mélangez, émiettez la féta, assaisonnez d'huile et de vinaigre."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Radis", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de vin", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Gratin de blettes", emoji:"🥬", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["printemps", "automne"], etapes:["Séparez le vert des côtes. Cuisez les côtes 15 minutes à l'eau, le vert 5 minutes.", "Pressez le vert pour ôter l'eau.", "Préparez une béchamel avec le beurre, la farine et le lait.", "Disposez les blettes dans un plat, nappez, couvrez de gruyère, gratinez 25 minutes."], lien:"", ingredients:[
    {nom:"Blettes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Gruyère râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Soupe au pistou", emoji:"🥣", type:"leger", vegetarien:true, rapide:false, thermomix:true, saisons:["ete"], etapes:["Coupez les légumes en petits dés, couvrez d'eau salée.", "Laissez cuire 25 minutes, ajoutez les coquillettes les 10 dernières minutes.", "Pilez le basilic avec l'ail, l'huile d'olive et le parmesan pour faire le pistou.", "Servez la soupe et ajoutez une cuillère de pistou dans chaque assiette."], lien:"", ingredients:[
    {nom:"Haricots verts", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Courgette", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coquillettes", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pommes de terre farcies au fromage", emoji:"🥔", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Enfournez les pommes de terre entières 1 h à 200 °C, jusqu'à ce qu'elles soient tendres.", "Coupez un chapeau, creusez-les délicatement.", "Mélangez la chair avec la crème et le fromage coupé en dés.", "Regarnissez et repassez 15 minutes au four. Servez avec la salade."], lien:"", ingredients:[
    {nom:"Grosses pommes de terre", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fromage à raclette", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Poêlée de légumes d'hiver", emoji:"🥕", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Épluchez et coupez tous les légumes en cubes réguliers.", "Faites rissoler les lardons, réservez-les.", "Faites revenir les légumes 25 minutes à feu moyen, en remuant de temps en temps.", "Remettez les lardons en fin de cuisson."], lien:"", ingredients:[
    {nom:"Panais", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Navets", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lardons", qte:"150", unite:"g", rayon:"Boucherie"}]},

  { nom:"Salade de chou croquante", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Émincez le chou le plus finement possible, râpez les carottes.", "Mélangez le yaourt et la moutarde pour la sauce.", "Ajoutez les raisins secs.", "Mélangez et laissez reposer 30 minutes au frais avant de servir."], lien:"", ingredients:[
    {nom:"Chou blanc", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Raisins secs", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"1", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Crêpes salées complètes", emoji:"🥞", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Mélangez la farine, les œufs et le lait sans grumeaux. Laissez reposer 30 minutes.", "Faites cuire les crêpes une à une dans une poêle chaude.", "Garnissez chacune de jambon et de gruyère.", "Repliez et laissez fondre le fromage à couvert."], lien:"", ingredients:[
    {nom:"Farine", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Jambon blanc", qte:"4", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Gruyère râpé", qte:"120", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Clafoutis de tomates cerises", emoji:"🍅", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Battez les œufs avec la farine puis le lait, jusqu'à obtenir une pâte lisse.", "Salez, poivrez.", "Disposez les tomates cerises entières dans un plat beurré, versez l'appareil.", "Émiettez le chèvre par-dessus et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Tomates cerises", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Chèvre", qte:"1", unite:"bûche(s)", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"10", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Soupe thaï au poulet", cuisine:"Thaïlande", emoji:"🍜", type:"leger", vegetarien:false, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir le gingembre râpé, ajoutez le poulet en lanières.", "Versez le lait de coco et autant d'eau, laissez frémir 10 minutes.", "Ajoutez les nouilles de riz, poursuivez 4 minutes.", "Hors du feu, ajoutez le jus de citron vert et la coriandre."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Nouilles de riz", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Boulettes de poulet à l'indienne", cuisine:"Inde", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Mélangez le poulet haché, la chapelure et le curry, formez des boulettes.", "Faites-les dorer de tous côtés.", "Versez le lait de coco, laissez mijoter 15 minutes à feu doux.", "Servez avec le riz basmati."], lien:"", ingredients:[
    {nom:"Poulet haché", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Chapelure", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"25", unite:"cl", rayon:"Épicerie"},
    {nom:"Curry en poudre", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Gratin de ravioles aux épinards", emoji:"🧀", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites tomber les épinards 3 minutes à la poêle, pressez-les.", "Disposez les ravioles et les épinards en couches dans un plat.", "Versez la crème, salez, poivrez.", "Parsemez de gruyère et enfournez 20 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Ravioles", qte:"6", unite:"paquet(s)", rayon:"Crèmerie"},
    {nom:"Épinards", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème liquide", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Cari de poisson créole", cuisine:"La Réunion", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites revenir les oignons avec le curcuma et le gingembre râpé.", "Ajoutez les tomates coupées en morceaux, laissez compoter 10 minutes.", "Posez les filets de poisson dessus, couvrez, laissez cuire 10 minutes à feu doux.", "Servez avec le riz."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Salade de pâtes au thon", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Cuisez les farfalle al dente, rincez-les à l'eau froide.", "Coupez les tomates cerises en deux, égouttez le maïs et le thon.", "Mélangez le tout avec les olives.", "Assaisonnez et laissez reposer 30 minutes au frais."], lien:"", ingredients:[
    {nom:"Farfalle", qte:"350", unite:"g", rayon:"Épicerie"},
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Olives noires", qte:"80", unite:"g", rayon:"Épicerie"}]},

  { nom:"Quiche au saumon et poireaux", emoji:"🥧", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Émincez les poireaux et faites-les fondre 15 minutes à couvert.", "Étalez la pâte, répartissez les poireaux puis le saumon en lanières.", "Battez les œufs avec la crème, poivrez, salez très peu — le saumon l'est déjà.", "Versez et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Saumon fumé", qte:"150", unite:"g", rayon:"Poissonnerie"},
    {nom:"Poireaux", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Chakchouka", cuisine:"Maghreb", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites revenir l'oignon et les poivrons en lanières 15 minutes.", "Ajoutez les tomates en morceaux et le cumin, laissez réduire 15 minutes.", "Creusez quatre puits, cassez un œuf dans chacun.", "Couvrez et laissez cuire 6 minutes : le blanc doit être pris, le jaune coulant.", "Servez à la poêle avec le pain."], lien:"", ingredients:[
    {nom:"Poivrons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Poulet rôti aux herbes et légumes racines", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Frottez le poulet de sel, poivre et romarin.", "Coupez les légumes racines en gros morceaux et disposez-les dans le plat.", "Enfournez 1 h 15 à 190 °C en arrosant régulièrement.", "Laissez reposer 10 minutes avant de découper."], lien:"", ingredients:[
    {nom:"Poulet fermier", qte:"1", unite:"", rayon:"Boucherie"},
    {nom:"Panais", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Navets", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Romarin", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Velouté de butternut au lard", emoji:"🎃", type:"leger", vegetarien:false, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Épluchez la courge et coupez-la en cubes.", "Faites suer l'oignon, ajoutez la courge et le bouillon, laissez cuire 25 minutes.", "Faites rissoler les lardons à part jusqu'à ce qu'ils soient croustillants.", "Mixez le velouté, ajoutez la crème, parsemez de lardons au moment de servir."], lien:"", ingredients:[
    {nom:"Courge butternut", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lardons", qte:"150", unite:"g", rayon:"Boucherie"},
    {nom:"Bouillon de volaille", qte:"70", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème liquide", qte:"10", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Pizza blanche chèvre-miel", emoji:"🍕", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Étalez la pâte, tartinez-la de crème fraîche.", "Répartissez le chèvre en rondelles.", "Enfournez 12 minutes à 250 °C.", "À la sortie, arrosez de miel et parsemez de noix concassées."], lien:"", ingredients:[
    {nom:"Pâte à pizza", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Chèvre", qte:"2", unite:"bûche(s)", rayon:"Crèmerie"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Noix", qte:"50", unite:"g", rayon:"Épicerie"}]},

  { nom:"Blanquette de poisson", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites fondre les poireaux et les carottes en rondelles 15 minutes.", "Couvrez d'eau, laissez cuire 10 minutes.", "Ajoutez le poisson en morceaux et pochez 6 minutes à frémissement.", "Retirez le poisson, liez le bouillon avec la crème, nappez. Servez avec le riz."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"700", unite:"g", rayon:"Poissonnerie"},
    {nom:"Poireaux", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Wraps poulet-crudités", emoji:"🌯", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites griller le poulet, laissez tiédir et émincez-le.", "Mélangez le yaourt avec des herbes pour la sauce.", "Tartinez les tortillas, garnissez de salade, tomate et poulet.", "Roulez serré, coupez en deux en biais."], lien:"", ingredients:[
    {nom:"Tortillas", qte:"4", unite:"", rayon:"Boulangerie"},
    {nom:"Blancs de poulet", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Laitue", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomate", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"1", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poêlée de pommes de terre et saucisse fumée", emoji:"🥔", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Cuisez les pommes de terre 15 minutes à l'eau, laissez tiédir et coupez-les en rondelles.", "Faites revenir les oignons émincés.", "Ajoutez les pommes de terre et laissez-les bien dorer sans trop remuer.", "Ajoutez la saucisse en rondelles, réchauffez 5 minutes, parsemez de persil."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Saucisse fumée", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Rôti de porc aux pruneaux", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer le rôti de tous côtés dans une cocotte.", "Ajoutez les oignons émincés et un verre d'eau, couvrez.", "Laissez mijoter 1 h à feu doux, ajoutez les pruneaux à mi-cuisson.", "Retirez la viande, ajoutez la crème au jus, laissez réduire et nappez.", "Servez avec les pommes de terre."], lien:"", ingredients:[
    {nom:"Rôti de porc", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Pruneaux", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Curry de crevettes au lait de coco", cuisine:"Thaïlande", emoji:"🍤", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon émincé et l'ail dans un peu d'huile.", "Ajoutez la pâte de curry et remuez 1 minute pour la réveiller.", "Versez le lait de coco et laissez frémir 5 minutes.", "Ajoutez les crevettes et comptez 3 minutes : au-delà, elles durcissent.", "Servez avec le riz et un peu de coriandre."], lien:"", ingredients:[
    {nom:"Crevettes décortiquées", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Pâte de curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile de tournesol", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Brandade de morue", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["hiver"], etapes:["Dessalez la morue la veille en changeant l'eau trois fois.", "Pochez-la 10 minutes à petits frémissements, puis émiettez-la en retirant arêtes et peau.", "Écrasez les pommes de terre cuites avec l'huile d'olive et l'ail.", "Mélangez le poisson et la purée, allongez avec un peu de lait chaud.", "Versez dans un plat, parsemez de chapelure et dorez 15 minutes au four."], lien:"", ingredients:[
    {nom:"Morue salée", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"10", unite:"cl", rayon:"Épicerie"},
    {nom:"Lait", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poisson pané maison et purée", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez les filets en gros bâtonnets.", "Passez-les dans la farine, puis dans l'œuf battu, puis dans la chapelure.", "Faites-les dorer 3 minutes de chaque côté à la poêle, dans un peu d'huile.", "Écrasez les pommes de terre cuites avec le lait chaud et une noix de beurre.", "Servez avec un quartier de citron."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Chapelure", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de tournesol", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Saint-jacques poêlées aux poireaux", emoji:"🐚", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Émincez les poireaux en fines rondelles et faites-les fondre 15 minutes au beurre, à couvert.", "Ajoutez la crème et laissez épaissir doucement.", "Séchez les noix de saint-jacques dans du papier absorbant : c'est ce qui les fera dorer.", "Saisissez-les 1 minute par face à feu vif, pas plus.", "Dressez la fondue de poireaux, posez les noix dessus."], lien:"", ingredients:[
    {nom:"Noix de saint-jacques", qte:"12", unite:"", rayon:"Poissonnerie"},
    {nom:"Poireaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Croquettes de thon", emoji:"🥫", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Écrasez les pommes de terre cuites à la fourchette.", "Mélangez avec le thon égoutté, l'œuf, la moutarde et le persil haché.", "Formez des galettes avec les mains humides.", "Faites-les dorer 4 minutes par face dans un peu d'huile.", "Servez avec une salade verte."], lien:"", ingredients:[
    {nom:"Thon en boîte", qte:"3", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Pommes de terre", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile de tournesol", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Bar au four et fenouil", emoji:"🐟", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["ete", "automne"], etapes:["Émincez les fenouils et disposez-les dans un plat avec l'huile d'olive.", "Posez le poisson vidé dessus, glissez des rondelles de citron dans le ventre.", "Arrosez de vin blanc et salez.", "Enfournez 30 minutes à 190 °C en arrosant une fois à mi-cuisson.", "La chair se détache toute seule de l'arête quand c'est prêt."], lien:"", ingredients:[
    {nom:"Bar", qte:"2", unite:"", rayon:"Poissonnerie"},
    {nom:"Fenouil", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Soupe de poisson express", emoji:"🍲", type:"leger", vegetarien:false, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, le poireau et l'ail.", "Ajoutez les tomates concassées, le safran et un litre d'eau.", "Laissez frémir 15 minutes.", "Ajoutez les morceaux de poisson et comptez 8 minutes.", "Mixez ou laissez en morceaux, selon l'envie, et servez avec du pain grillé."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"500", unite:"g", rayon:"Poissonnerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poireaux", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Safran", qte:"1", unite:"pincée(s)", rayon:"Épicerie"},
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Moules au curry", emoji:"🦪", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Grattez et rincez les moules, jetez celles qui restent ouvertes.", "Faites suer l'échalote, ajoutez le curry et la crème.", "Versez les moules, couvrez et laissez 6 minutes à feu vif en secouant la casserole.", "Elles sont prêtes quand elles sont toutes ouvertes.", "Parsemez de persil et servez avec des frites ou du pain."], lien:"", ingredients:[
    {nom:"Moules", qte:"2", unite:"kg", rayon:"Poissonnerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Curry", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Échalotes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tarte au thon et tomates", emoji:"🥧", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Étalez la pâte dans un moule et piquez-la à la fourchette.", "Tartinez-la de moutarde : c'est ce qui empêche le fond de détremper.", "Répartissez le thon égoutté, puis les rondelles de tomates.", "Couvrez de fromage râpé et d'herbes de Provence.", "Enfournez 30 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Herbes de Provence", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Filets de sole meunière", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Farinez légèrement les filets et tapotez pour retirer l'excédent.", "Faites chauffer le beurre jusqu'à ce qu'il mousse, sans le laisser noircir.", "Déposez les filets et comptez 2 minutes par face.", "Retirez-les, ajoutez le jus de citron dans la poêle et laissez grésiller.", "Nappez les filets de ce beurre citronné, parsemez de persil."], lien:"", ingredients:[
    {nom:"Filets de sole", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Beurre", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Wok de crevettes aux légumes", cuisine:"Asie", emoji:"🍤", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez tous les légumes en fines lanières avant d'allumer le feu : après, tout va très vite.", "Saisissez les crevettes 2 minutes à feu vif, réservez-les.", "Faites sauter les légumes 5 minutes : ils doivent rester croquants.", "Remettez les crevettes, ajoutez la sauce soja et le gingembre râpé.", "Servez aussitôt sur des nouilles."], lien:"", ingredients:[
    {nom:"Crevettes décortiquées", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Poivrons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Nouilles chinoises", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"}]},

  { nom:"Cabillaud à la crème de poireaux", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Émincez les poireaux et faites-les fondre 20 minutes à couvert, à feu doux.", "Ajoutez la crème, salez, poivrez et laissez épaissir.", "Posez les dos de cabillaud sur ce lit de poireaux.", "Couvrez et laissez cuire 10 minutes à feu très doux.", "Le poisson est cuit quand il se sépare en gros pétales."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Poireaux", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poulet chasseur", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne"], etapes:["Faites dorer les morceaux de poulet de tous côtés dans une cocotte.", "Réservez-les, faites revenir les échalotes et les champignons dans le même gras.", "Déglacez au vin blanc et laissez réduire de moitié.", "Ajoutez les tomates concassées, l'estragon et le poulet.", "Couvrez et laissez mijoter 40 minutes à feu doux."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Échalotes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Estragon", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Cordon bleu maison", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Ouvrez les escalopes en portefeuille sans les séparer complètement.", "Glissez une tranche de jambon et une de fromage à l'intérieur, refermez.", "Passez dans la farine, puis l'œuf battu, puis la chapelure.", "Faites dorer 5 minutes par face à feu moyen : le fromage doit fondre avant que la panure ne brûle.", "Servez avec des haricots verts ou une purée."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Jambon blanc", qte:"4", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Emmental", qte:"4", unite:"tranche(s)", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"50", unite:"g", rayon:"Épicerie"}]},

  { nom:"Osso buco de veau", emoji:"🥩", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Farinez les tranches de veau et faites-les dorer dans l'huile d'olive.", "Ajoutez l'oignon, la carotte et le céleri en petits dés.", "Déglacez au vin blanc, laissez évaporer, puis versez les tomates.", "Couvrez et laissez mijoter 1 h 30 à tout petit feu.", "Terminez avec le zeste de citron et le persil hachés ensemble."], lien:"", ingredients:[
    {nom:"Jarret de veau", qte:"4", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Céleri", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Navarin d'agneau", emoji:"🐑", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites dorer les morceaux d'agneau, saupoudrez de farine et remuez 2 minutes.", "Mouillez à hauteur, ajoutez l'ail et le thym, laissez mijoter 45 minutes.", "Ajoutez les navets et les carottes taillés en gros morceaux.", "Poursuivez 30 minutes, puis ajoutez les petits pois en fin de cuisson.", "La viande doit se défaire à la cuillère."], lien:"", ingredients:[
    {nom:"Épaule d'agneau", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Navets", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"300", unite:"g", rayon:"Surgelés"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poulet yassa", cuisine:"Sénégal", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites mariner le poulet au moins 2 heures avec le jus de citron, l'oignon émincé et l'huile.", "Égouttez les morceaux et faites-les dorer à la poêle.", "Faites confire les oignons de la marinade 20 minutes à feu doux : ils doivent fondre.", "Remettez le poulet, ajoutez la moutarde et un verre d'eau.", "Laissez mijoter 30 minutes et servez avec du riz."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Oignons", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de tournesol", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Keftas d'agneau et boulgour", cuisine:"Maroc", emoji:"🍢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Mélangez la viande hachée avec l'oignon râpé, le cumin, la menthe et un peu de sel.", "Formez des boudins autour de piques, ou de simples boulettes allongées.", "Faites-les griller 4 minutes par face.", "Faites gonfler le boulgour dans le double d'eau bouillante, à couvert.", "Servez avec du yaourt et un filet de citron."], lien:"", ingredients:[
    {nom:"Agneau haché", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Porc au caramel", cuisine:"Vietnam", emoji:"🥢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez le porc en cubes réguliers.", "Faites un caramel à sec avec le sucre, puis stoppez-le avec la sauce soja — attention aux projections.", "Ajoutez la viande et enrobez-la bien.", "Versez un verre d'eau, le gingembre râpé, et laissez réduire 20 minutes à feu doux.", "La sauce doit napper la viande. Servez avec du riz."], lien:"", ingredients:[
    {nom:"Filet mignon de porc", qte:"700", unite:"g", rayon:"Boucherie"},
    {nom:"Sucre", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Petit salé aux lentilles", emoji:"🥓", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dessaler la viande 1 heure dans l'eau froide, puis égouttez.", "Mettez-la dans une cocotte avec l'oignon piqué de clous de girofle et la carotte.", "Couvrez d'eau et laissez cuire 1 heure à petits bouillons.", "Ajoutez les lentilles et poursuivez 30 minutes.", "Retirez l'oignon, tranchez la viande et servez sur les lentilles."], lien:"", ingredients:[
    {nom:"Petit salé", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Saucisses fumées", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Lentilles vertes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Clous de girofle", qte:"2", unite:"", rayon:"Épicerie"}]},

  { nom:"Magret de canard aux pommes", emoji:"🦆", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Quadrillez le gras du magret au couteau, sans entamer la chair.", "Posez-le côté gras dans une poêle froide, puis allumez : 8 minutes suffisent à le faire fondre et dorer.", "Retournez et comptez 4 minutes de plus pour une chair rosée.", "Laissez reposer 5 minutes sous une feuille d'aluminium avant de trancher.", "Faites poêler les quartiers de pommes dans un peu de graisse rendue, avec le miel."], lien:"", ingredients:[
    {nom:"Magret de canard", qte:"2", unite:"", rayon:"Boucherie"},
    {nom:"Pommes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Bavette à l'échalote", emoji:"🥩", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Sortez la viande du réfrigérateur 30 minutes avant : elle cuira plus régulièrement.", "Saisissez les bavettes 2 minutes par face à feu très vif, réservez au chaud.", "Faites fondre les échalotes ciselées dans la même poêle, à feu doux.", "Déglacez au vinaigre puis au vin rouge, laissez réduire.", "Montez la sauce avec une noix de beurre et nappez la viande."], lien:"", ingredients:[
    {nom:"Bavette de bœuf", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Échalotes", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin rouge", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Vinaigre de vin", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poulet tandoori et riz", cuisine:"Inde", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Mélangez le yaourt, les épices tandoori, l'ail et le jus de citron.", "Entaillez les morceaux de poulet et enrobez-les de cette marinade.", "Laissez reposer au frais au moins 2 heures, une nuit si vous pouvez.", "Enfournez 35 minutes à 200 °C en retournant à mi-cuisson.", "Servez avec du riz basmati et du concombre au yaourt."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Épices tandoori", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Boulettes suédoises", cuisine:"Suède", emoji:"🍽️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Trempez la chapelure dans le lait, puis mélangez-la à la viande, l'œuf et l'oignon râpé.", "Assaisonnez de muscade et formez des boulettes de la taille d'une noix.", "Faites-les dorer à la poêle en les roulant, réservez.", "Dans la même poêle, faites un roux avec le beurre et la farine, mouillez de bouillon puis de crème.", "Remettez les boulettes 10 minutes dans la sauce. Servez avec une purée."], lien:"", ingredients:[
    {nom:"Bœuf haché", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Chapelure", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Noix de muscade", qte:"1", unite:"pincée(s)", rayon:"Épicerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Farine", qte:"30", unite:"g", rayon:"Épicerie"},
    {nom:"Bouillon de bœuf", qte:"25", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Émincé de dinde à la crème", emoji:"🦃", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les escalopes en lanières.", "Saisissez-les 3 minutes à feu vif, réservez : trop cuites, elles deviennent sèches.", "Faites suer les champignons émincés jusqu'à ce que leur eau s'évapore.", "Ajoutez la crème, la moutarde, laissez épaissir 5 minutes.", "Remettez la viande juste pour la réchauffer. Servez avec des tagliatelles."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Tagliatelles", qte:"400", unite:"g", rayon:"Épicerie"}]},

  { nom:"Bo bun au bœuf", cuisine:"Vietnam", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites tremper les vermicelles de riz dans l'eau bouillante, puis rincez-les à l'eau froide.", "Faites mariner le bœuf émincé avec la sauce soja, l'ail et un peu de sucre.", "Saisissez-le 2 minutes à feu très vif.", "Dressez dans un grand bol : vermicelles, carotte râpée, concombre, salade, viande.", "Arrosez de sauce nuoc-mâm allongée d'eau et de citron, parsemez de cacahuètes."], lien:"", ingredients:[
    {nom:"Bœuf à griller", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Vermicelles de riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cacahuètes", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Sucre", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Nuoc-mâm", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Veau Marengo", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites dorer les morceaux de veau, saupoudrez de farine et remuez.", "Ajoutez l'oignon, l'ail et les tomates concassées.", "Mouillez au vin blanc, ajoutez le bouquet garni.", "Couvrez et laissez mijoter 1 h 15 à feu doux.", "Ajoutez les champignons 20 minutes avant la fin."], lien:"", ingredients:[
    {nom:"Épaule de veau", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Bouquet garni", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Rougail saucisse", cuisine:"La Réunion", emoji:"🌶️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites bouillir les saucisses 10 minutes pour les dessaler, puis coupez-les en tronçons.", "Faites-les dorer à la poêle, réservez.", "Faites revenir les oignons, l'ail, le gingembre et le curcuma.", "Ajoutez les tomates, laissez compoter 10 minutes.", "Remettez les saucisses, couvrez et laissez mijoter 25 minutes. Servez avec du riz."], lien:"", ingredients:[
    {nom:"Saucisses fumées", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Tomates", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tian de légumes provençal", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites fondre les oignons émincés au fond d'un plat à gratin.", "Coupez courgettes, aubergines et tomates en rondelles de même épaisseur.", "Rangez-les debout en les alternant, bien serrées.", "Arrosez d'huile d'olive, salez, parsemez de thym et d'ail haché.", "Enfournez 1 heure à 180 °C : les légumes doivent confire, pas bouillir."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aubergines", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Gnocchis au gorgonzola", emoji:"🧀", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites chauffer la crème à feu doux avec le gorgonzola coupé en morceaux.", "Remuez jusqu'à obtenir une sauce lisse, poivrez généreusement.", "Plongez les gnocchis dans l'eau bouillante salée : ils sont cuits quand ils remontent.", "Égouttez-les et versez-les dans la sauce.", "Parsemez de noix concassées et servez tout de suite."], lien:"", ingredients:[
    {nom:"Gnocchis", qte:"800", unite:"g", rayon:"Crèmerie"},
    {nom:"Gorgonzola", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Noix", qte:"80", unite:"g", rayon:"Épicerie"}]},

  { nom:"Boulettes de courgettes à la féta", emoji:"🥒", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Râpez les courgettes, salez-les et laissez dégorger 15 minutes.", "Pressez-les fortement entre vos mains : c'est l'étape qui fait tenir les boulettes.", "Mélangez avec la féta émiettée, l'œuf, la farine et la menthe.", "Formez des galettes et faites-les dorer 4 minutes par face.", "Servez avec du yaourt citronné."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"1", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Curry de patate douce", cuisine:"Inde", emoji:"🍠", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, l'ail et le gingembre.", "Ajoutez le curry et remuez 1 minute.", "Versez les patates douces en cubes, le lait de coco et un verre d'eau.", "Laissez mijoter 25 minutes à couvert.", "Ajoutez les épinards en fin de cuisson, juste le temps qu'ils tombent."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Épinards", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Soupe de nouilles au miso", cuisine:"Japon", emoji:"🍜", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Portez un litre d'eau à frémissement — surtout pas à ébullition.", "Délayez le miso dans une louche d'eau chaude avant de l'incorporer.", "Ajoutez les champignons émincés et le tofu en dés, laissez 5 minutes.", "Faites cuire les nouilles à part et répartissez-les dans les bols.", "Versez le bouillon dessus, parsemez d'oignons nouveaux."], lien:"", ingredients:[
    {nom:"Pâte de miso", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Nouilles chinoises", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Tofu", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Champignons de Paris", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Riz sauté aux légumes et œuf", cuisine:"Chine", emoji:"🍚", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Utilisez du riz cuit la veille : froid, il ne colle pas.", "Faites sauter les légumes en petits dés 5 minutes à feu vif.", "Poussez-les sur le côté, versez les œufs battus et brouillez-les rapidement.", "Ajoutez le riz, mélangez tout et laissez-le grésiller sans trop remuer.", "Assaisonnez de sauce soja et servez aussitôt."], lien:"", ingredients:[
    {nom:"Riz", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Petits pois", qte:"200", unite:"g", rayon:"Surgelés"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Œufs cocotte aux épinards", emoji:"🥚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "automne"], etapes:["Faites tomber les épinards à la poêle avec une noix de beurre.", "Répartissez-les au fond de petits ramequins beurrés.", "Ajoutez une cuillère de crème, puis cassez un œuf dans chacun.", "Salez, poivrez, parsemez de fromage râpé.", "Enfournez 12 minutes à 180 °C au bain-marie : le blanc pris, le jaune coulant."], lien:"", ingredients:[
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Épinards", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Fromage râpé", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Beurre", qte:"10", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Tarte aux épinards et ricotta", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps", "automne"], etapes:["Faites tomber les épinards, puis pressez-les pour retirer toute l'eau.", "Mélangez-les avec la ricotta, les œufs et la muscade.", "Étalez la pâte dans le moule et versez l'appareil.", "Parsemez de parmesan.", "Enfournez 35 minutes à 190 °C, jusqu'à ce que le dessus soit doré."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Épinards", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Noix de muscade", qte:"1", unite:"pincée(s)", rayon:"Épicerie"}]},

  { nom:"Frittata aux courgettes", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites revenir les courgettes en rondelles 10 minutes, jusqu'à ce qu'elles dorent.", "Battez les œufs avec le parmesan, du sel et du poivre.", "Versez-les sur les courgettes et baissez le feu au minimum.", "Laissez prendre 10 minutes à couvert, sans remuer.", "Terminez 3 minutes sous le gril pour dorer le dessus."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade de betteraves et chèvre", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les betteraves cuites en cubes.", "Préparez une vinaigrette avec le vinaigre balsamique, l'huile et une pointe de miel.", "Mélangez les betteraves à la roquette au dernier moment, sinon elle rosit.", "Émiettez le chèvre par-dessus.", "Parsemez de noix concassées."], lien:"", ingredients:[
    {nom:"Betteraves cuites", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Fromage de chèvre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Roquette", qte:"100", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Vinaigre balsamique", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Miel", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Taboulé libanais", cuisine:"Liban", emoji:"🌿", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites gonfler le boulgour 15 minutes dans un peu d'eau tiède.", "Hachez le persil très finement : dans ce taboulé-là, c'est l'ingrédient principal.", "Coupez les tomates en tout petits dés et ciselez les oignons nouveaux.", "Mélangez le tout avec le jus de citron et l'huile d'olive.", "Laissez reposer 1 heure au frais avant de servir."], lien:"", ingredients:[
    {nom:"Boulgour", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"3", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade grecque", cuisine:"Grèce", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les tomates en quartiers généreux et le concombre en demi-rondelles épaisses.", "Émincez l'oignon rouge très finement.", "Ajoutez les olives et la féta en gros cubes — surtout pas émiettée.", "Arrosez d'huile d'olive et d'origan, ne salez qu'à peine : la féta l'est déjà.", "Servez sans laisser attendre, avec du pain."], lien:"", ingredients:[
    {nom:"Tomates", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Olives noires", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Origan", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Soupe de chou-fleur au curcuma", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Détaillez le chou-fleur en bouquets.", "Faites revenir l'oignon avec le curcuma pour le réveiller.", "Ajoutez le chou-fleur, la pomme de terre et couvrez de bouillon.", "Laissez cuire 20 minutes, jusqu'à ce que la lame d'un couteau s'enfonce sans effort.", "Mixez longuement, ajoutez la crème hors du feu."], lien:"", ingredients:[
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Pâtes aux brocolis et amandes", emoji:"🥦", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les brocolis 8 minutes dans l'eau des pâtes, puis récupérez-les.", "Faites cuire les pâtes dans la même eau.", "Pendant ce temps, faites blondir l'ail et les amandes effilées dans l'huile d'olive.", "Écrasez grossièrement les brocolis à la fourchette dans la poêle.", "Mélangez aux pâtes avec un peu d'eau de cuisson et du parmesan."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Brocoli", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pâtes à la crème de courgettes", emoji:"🍝", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Faites revenir les courgettes en rondelles avec l'oignon, 15 minutes à couvert.", "Mixez avec la ricotta et un peu d'eau de cuisson des pâtes.", "Faites cuire les pâtes al dente.", "Mélangez-les à la crème de courgettes hors du feu.", "Parsemez de basilic et de parmesan."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"40", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Polenta crémeuse aux champignons", emoji:"🌽", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Portez le lait et l'eau à frémissement, salez.", "Versez la polenta en pluie en fouettant sans arrêt pour éviter les grumeaux.", "Remuez 5 à 10 minutes, jusqu'à ce qu'elle épaississe, puis incorporez le beurre et le parmesan.", "Faites sauter les champignons à feu vif avec l'ail et le persil.", "Servez la polenta bien crémeuse, les champignons dessus."], lien:"", ingredients:[
    {nom:"Polenta", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de patates douces", emoji:"🍠", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les patates douces en fines rondelles, à la mandoline si vous en avez une.", "Frottez le plat avec une gousse d'ail.", "Rangez les rondelles en couches, salez et poivrez entre chacune.", "Versez la crème mélangée au lait, jusqu'à affleurer.", "Enfournez 50 minutes à 180 °C, couvert les 30 premières minutes."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Lait", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Curry de chou-fleur et pois chiches", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon avec les épices jusqu'à ce que ça sente bon.", "Ajoutez le chou-fleur en bouquets et enrobez-le bien.", "Versez les tomates et les pois chiches égouttés.", "Laissez mijoter 25 minutes à couvert.", "Terminez avec un filet de citron et de la coriandre."], lien:"", ingredients:[
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Caponata sicilienne", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites revenir les aubergines en cubes dans l'huile d'olive, en plusieurs fois.", "Faites suer le céleri et l'oignon à part, ajoutez les tomates.", "Réunissez le tout, ajoutez les olives et les câpres.", "Versez le vinaigre et le sucre : c'est l'aigre-doux qui fait la caponata.", "Laissez compoter 20 minutes. Elle est meilleure tiède, ou le lendemain."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Céleri", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Olives vertes", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Câpres", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de vin", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sucre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Aubergines à la parmigiana", emoji:"🍆", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les aubergines en tranches, salez-les et laissez dégorger 30 minutes.", "Épongez-les et faites-les griller à la poêle, sans les noyer d'huile.", "Préparez une sauce tomate avec l'ail et le basilic, laissez réduire 20 minutes.", "Alternez dans un plat : aubergines, sauce, mozzarella, parmesan.", "Enfournez 35 minutes à 180 °C et laissez reposer 10 minutes avant de servir."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coulis de tomate", qte:"70", unite:"cl", rayon:"Épicerie"},
    {nom:"Mozzarella", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Courge farcie au quinoa", emoji:"🎃", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les courges en deux, retirez les graines et enfournez-les 30 minutes à 180 °C.", "Faites cuire le quinoa dans le double d'eau, 15 minutes.", "Mélangez-le avec l'oignon revenu, les noix, les cranberries et la féta.", "Creusez un peu la chair des courges et incorporez-la à la farce.", "Remplissez, remettez 15 minutes au four."], lien:"", ingredients:[
    {nom:"Courge butternut", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Quinoa", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Noix", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Endives braisées au fromage", emoji:"🥬", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Retirez le cône amer à la base des endives avec la pointe d'un couteau.", "Faites-les colorer au beurre, puis ajoutez le sucre et un fond d'eau.", "Couvrez et laissez braiser 25 minutes : elles doivent devenir fondantes.", "Rangez-les dans un plat, nappez de crème et couvrez de fromage.", "Passez 15 minutes au four à 200 °C."], lien:"", ingredients:[
    {nom:"Endives", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fromage râpé", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Poireaux vinaigrette et œuf dur", emoji:"🥚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "hiver"], etapes:["Fendez les poireaux en deux dans la longueur et rincez-les bien entre les feuilles.", "Faites-les cuire 15 minutes à l'eau bouillante salée, puis égouttez-les longuement.", "Faites durcir les œufs 9 minutes, écalez-les et écrasez-les à la fourchette.", "Préparez une vinaigrette bien moutardée.", "Nappez les poireaux tièdes, parsemez d'œuf et de ciboulette."], lien:"", ingredients:[
    {nom:"Poireaux", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de vin", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile de tournesol", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Soupe de haricots blancs", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, la carotte et le céleri en petits dés.", "Ajoutez les haricots égouttés, la tomate et le bouillon.", "Laissez frémir 20 minutes.", "Mixez la moitié de la soupe seulement : on garde ainsi de la mâche.", "Servez avec un filet d'huile d'olive et du romarin."], lien:"", ingredients:[
    {nom:"Haricots blancs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Céleri", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"75", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Romarin", qte:"1", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Croquettes de riz au fromage", emoji:"🧀", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Mélangez le riz cuit refroidi avec les œufs et le parmesan.", "Prenez une cuillerée dans la main, glissez un dé de mozzarella au centre et refermez en boule.", "Roulez les boules dans la chapelure.", "Faites-les dorer à la poêle dans un peu d'huile, en les tournant régulièrement.", "Servez avec une sauce tomate et de la salade."], lien:"", ingredients:[
    {nom:"Riz", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Mozzarella", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile de tournesol", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Coulis de tomates", qte:"25", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Salade de pâtes au pesto et tomates séchées", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire les pâtes, rincez-les à l'eau froide et égouttez-les bien.", "Mélangez-les au pesto tant qu'elles sont encore un peu tièdes : il s'accroche mieux.", "Ajoutez les tomates séchées coupées en lanières et les pignons grillés à sec.", "Incorporez la mozzarella en billes et la roquette au dernier moment.", "Servez frais, mais pas glacé."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Pesto", qte:"1", unite:"pot(s)", rayon:"Épicerie"},
    {nom:"Tomates séchées", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Mozzarella", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Pignons de pin", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Roquette", qte:"80", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Velouté de topinambours", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["hiver"], etapes:["Épluchez les topinambours et coupez-les en morceaux — plongez-les aussitôt dans l'eau citronnée, ils noircissent vite.", "Faites revenir l'oignon, ajoutez les topinambours et la pomme de terre.", "Couvrez de bouillon et laissez cuire 25 minutes.", "Mixez très finement.", "Ajoutez la crème hors du feu et parsemez de noisettes concassées."], lien:"", ingredients:[
    {nom:"Topinambours", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Noisettes", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade de chèvre chaud", emoji:"🧀", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez le fromage de chèvre en rondelles et posez-les sur des tranches de pain.", "Arrosez d'un filet de miel.", "Passez 5 minutes sous le gril, jusqu'à ce que le fromage blondisse.", "Préparez une vinaigrette au vinaigre balsamique.", "Dressez la salade, les toasts chauds dessus, et les noix."], lien:"", ingredients:[
    {nom:"Fromage de chèvre", qte:"2", unite:"bûche(s)", rayon:"Crèmerie"},
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Noix", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre balsamique", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pommes de terre au four et fromage blanc", emoji:"🥔", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:[], etapes:["Lavez les pommes de terre sans les éplucher et piquez-les à la fourchette.", "Enveloppez-les dans du papier aluminium.", "Enfournez 1 heure à 200 °C : elles sont prêtes quand un couteau entre sans résistance.", "Mélangez le fromage blanc avec la ciboulette, l'échalote et du poivre.", "Fendez les pommes de terre en croix et garnissez généreusement."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fromage blanc", qte:"500", unite:"g", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Échalotes", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Colin sauce vierge", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les tomates en petits dés, ciselez l'échalote et le basilic.", "Mélangez-les avec l'huile d'olive et le jus de citron, laissez reposer à température : c'est ce repos qui fait la sauce.", "Faites cuire les filets 8 minutes à la vapeur ou au four.", "Nappez le poisson de sauce vierge au moment de servir, jamais avant."], lien:"", ingredients:[
    {nom:"Filets de colin", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Échalotes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Maquereaux à la moutarde", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Videz et rincez les maquereaux, incisez la peau de trois traits.", "Badigeonnez-les de moutarde à l'intérieur et à l'extérieur.", "Posez-les sur une plaque huilée avec des rondelles de citron.", "Enfournez 20 minutes à 200 °C.", "Servez avec des pommes de terre vapeur."], lien:"", ingredients:[
    {nom:"Maquereaux", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Moutarde", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"700", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Curry de poisson aux épinards", cuisine:"Inde", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon avec le curry et le gingembre râpé.", "Versez le lait de coco et laissez frémir 5 minutes.", "Ajoutez les épinards et laissez-les tomber.", "Déposez les morceaux de poisson et couvrez : 8 minutes à feu doux suffisent.", "Ne remuez pas, le poisson se déferait. Servez avec du riz."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Épinards", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade de lentilles au haddock", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les lentilles 20 minutes dans l'eau non salée : le sel les durcit.", "Pochez le haddock 5 minutes dans du lait chaud pour l'adoucir, puis émiettez-le.", "Préparez une vinaigrette bien moutardée avec l'échalote ciselée.", "Mélangez lentilles tièdes, haddock et vinaigrette.", "Parsemez de persil et servez tiède."], lien:"", ingredients:[
    {nom:"Haddock", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Échalotes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de vin", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poêlée de calamars à l'ail", emoji:"🦑", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les calamars en anneaux et séchez-les bien.", "Faites chauffer l'huile jusqu'à ce qu'elle frémisse.", "Saisissez les calamars 2 minutes à feu très vif : au-delà, ils deviennent caoutchouteux.", "Ajoutez l'ail haché et le persil hors du feu.", "Servez aussitôt avec un filet de citron."], lien:"", ingredients:[
    {nom:"Calamars", qte:"700", unite:"g", rayon:"Poissonnerie"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Cabillaud au chorizo", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites revenir les rondelles de chorizo à sec : elles rendent une huile parfumée.", "Retirez-les, faites dorer les pommes de terre en cubes dans cette huile.", "Ajoutez les poivrons, laissez cuire 15 minutes.", "Posez les dos de cabillaud dessus, couvrez, 8 minutes à feu doux.", "Remettez le chorizo au moment de servir."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Chorizo", qte:"100", unite:"g", rayon:"Boucherie"},
    {nom:"Pommes de terre", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Tacos de poisson", cuisine:"Mexique", emoji:"🌮", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez le poisson en gros morceaux, enrobez-les de paprika et de cumin.", "Faites-les saisir 4 minutes à la poêle.", "Râpez le chou et mélangez-le au yaourt et au jus de citron vert.", "Réchauffez les tortillas 30 secondes à la poêle sèche.", "Garnissez de poisson, de salade de chou et d'avocat."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Tortillas", qte:"8", unite:"", rayon:"Boulangerie"},
    {nom:"Chou blanc", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Soupe thaï aux crevettes", cuisine:"Thaïlande", emoji:"🍜", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites frémir le lait de coco avec la citronnelle, le gingembre et la pâte de curry.", "Laissez infuser 10 minutes à feu doux, sans bouillir.", "Ajoutez les champignons émincés, puis les crevettes.", "Comptez 3 minutes : elles sont cuites dès qu'elles rosissent.", "Terminez au jus de citron vert et à la coriandre."], lien:"", ingredients:[
    {nom:"Crevettes décortiquées", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citronnelle", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Pâte de curry", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Rillettes de maquereau et crudités", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Égouttez les maquereaux et écrasez-les à la fourchette.", "Mélangez avec le fromage frais, le jus de citron et la ciboulette.", "Poivrez généreusement, ne salez pas : le poisson l'est déjà.", "Laissez reposer 1 heure au frais pour que les saveurs se lient.", "Servez avec des bâtonnets de carotte, de concombre et du pain grillé."], lien:"", ingredients:[
    {nom:"Maquereaux en boîte", qte:"3", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Fromage frais", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de fruits de mer", emoji:"🦐", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Faites suer les échalotes au beurre, saupoudrez de farine et remuez 2 minutes.", "Versez le lait puis le vin blanc en fouettant, laissez épaissir.", "Ajoutez les fruits de mer égouttés et les champignons revenus.", "Répartissez dans des plats individuels, couvrez de fromage râpé.", "Gratinez 15 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Fruits de mer", qte:"700", unite:"g", rayon:"Surgelés"},
    {nom:"Champignons de Paris", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"40", unite:"cl", rayon:"Crèmerie"},
    {nom:"Vin blanc", qte:"10", unite:"cl", rayon:"Boissons"},
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Échalotes", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Daurade au four et pommes de terre", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Coupez les pommes de terre en fines rondelles et disposez-les au fond du plat avec l'oignon.", "Arrosez d'huile d'olive, salez, enfournez 20 minutes à 200 °C.", "Posez la daurade vidée dessus, avec du thym et des rondelles de citron.", "Arrosez de vin blanc et poursuivez 25 minutes.", "La chair doit se détacher facilement de l'arête centrale."], lien:"", ingredients:[
    {nom:"Daurade", qte:"2", unite:"", rayon:"Poissonnerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Pâtes aux sardines et fenouil", emoji:"🍝", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Émincez le fenouil et faites-le fondre 15 minutes à l'huile d'olive.", "Ajoutez les raisins secs, les pignons et les sardines égouttées.", "Écrasez grossièrement à la fourchette.", "Faites cuire les pâtes et gardez une louche d'eau de cuisson.", "Mélangez le tout, allongez avec l'eau de cuisson jusqu'à obtenir une sauce liée."], lien:"", ingredients:[
    {nom:"Sardines en boîte", qte:"3", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Fenouil", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Raisins secs", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Pignons de pin", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Bouillabaisse express", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir le poireau, l'oignon et le fenouil émincés.", "Ajoutez les tomates, l'ail, le safran et couvrez d'eau.", "Laissez frémir 20 minutes, puis mixez ou laissez tel quel.", "Ajoutez les poissons en morceaux et les moules, comptez 10 minutes.", "Servez avec des croûtons frottés à l'ail."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Moules", qte:"500", unite:"g", rayon:"Poissonnerie"},
    {nom:"Fenouil", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Safran", qte:"1", unite:"pincée(s)", rayon:"Épicerie"},
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Poireaux", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tartare de dorade au citron vert", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Demandez au poissonnier un filet très frais, et travaillez-le bien froid.", "Coupez-le au couteau en petits dés — jamais au robot, la chair s'écraserait.", "Mélangez avec l'échalote ciselée, l'huile d'olive et le jus de citron vert.", "Laissez 10 minutes au frais, pas plus : le citron cuirait le poisson.", "Servez avec de l'avocat en tranches et du pain grillé."], lien:"", ingredients:[
    {nom:"Filets de dorade", qte:"500", unite:"g", rayon:"Poissonnerie"},
    {nom:"Citron vert", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Échalotes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poulet au paprika et poivrons", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["ete", "automne"], etapes:["Faites dorer les morceaux de poulet, réservez.", "Faites fondre les oignons et les poivrons en lanières.", "Saupoudrez de paprika, remuez 1 minute hors du feu pour qu'il ne brûle pas.", "Remettez le poulet, ajoutez les tomates, couvrez.", "Laissez mijoter 35 minutes, ajoutez la crème en fin de cuisson."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Poivrons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Sauté de porc aux champignons", emoji:"🥩", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne"], etapes:["Faites dorer les cubes de porc de tous côtés.", "Réservez la viande, faites suer les champignons jusqu'à évaporation de leur eau.", "Déglacez au vin blanc, remettez la viande.", "Couvrez et laissez mijoter 45 minutes à feu doux.", "Ajoutez la crème et le persil en fin de cuisson."], lien:"", ingredients:[
    {nom:"Sauté de porc", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Boulettes d'agneau à la menthe", emoji:"🍢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Mélangez la viande hachée avec l'oignon râpé, la menthe et le cumin.", "Formez des boulettes de la taille d'une noix.", "Faites-les dorer 8 minutes en les roulant dans la poêle.", "Ajoutez les tomates concassées et laissez mijoter 15 minutes.", "Servez avec de la semoule et du yaourt."], lien:"", ingredients:[
    {nom:"Agneau haché", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Semoule", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Curry de poulet aux épinards", cuisine:"Inde", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon, l'ail et le gingembre.", "Ajoutez le curry et le poulet en morceaux, enrobez bien.", "Versez le yaourt cuillère par cuillère en remuant : versé d'un coup, il tranche.", "Laissez mijoter 25 minutes à couvert.", "Ajoutez les épinards en fin de cuisson, juste le temps qu'ils fondent."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Épinards", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"3", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poulet aux quarante gousses d'ail", emoji:"🧄", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Ne pelez pas l'ail : les gousses en chemise confisent sans devenir amères.", "Faites dorer le poulet dans une cocotte, ajoutez toutes les gousses.", "Versez un verre de vin blanc, ajoutez le thym, couvrez hermétiquement.", "Laissez cuire 1 heure à feu doux sans jamais soulever le couvercle.", "Écrasez les gousses sur du pain grillé : c'est là que tout se joue."], lien:"", ingredients:[
    {nom:"Poulet fermier", qte:"1", unite:"", rayon:"Boucherie"},
    {nom:"Ail", qte:"3", unite:"tête(s)", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"}]},

  { nom:"Escalope milanaise", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Aplatissez les escalopes entre deux feuilles de papier cuisson.", "Passez-les dans la farine, l'œuf battu, puis la chapelure mélangée au parmesan.", "Faites-les dorer 4 minutes par face dans un mélange beurre-huile.", "Épongez-les sur du papier absorbant.", "Servez avec un quartier de citron et des spaghettis à la tomate."], lien:"", ingredients:[
    {nom:"Escalopes de veau", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Chapelure", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Spaghettis", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile de tournesol", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Coulis de tomates", qte:"40", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Chou farci", emoji:"🥬", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Blanchissez les feuilles de chou 5 minutes à l'eau bouillante, égouttez-les à plat.", "Mélangez la viande hachée, le riz cru, l'oignon et l'œuf.", "Garnissez chaque feuille et roulez-la en serrant.", "Rangez les paupiettes dans une cocotte, couvrez de bouillon tomaté.", "Laissez mijoter 1 h 15 à couvert, à tout petit feu."], lien:"", ingredients:[
    {nom:"Chou vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Riz", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Coulis de tomate", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de bœuf", qte:"50", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Tomates farcies", emoji:"🍅", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les chapeaux des tomates, videz-les et salez l'intérieur : elles rendront leur eau.", "Mélangez la chair hachée avec la viande, l'oignon, l'ail et le persil.", "Garnissez généreusement, remettez les chapeaux.", "Disposez le riz autour dans le plat avec un verre d'eau.", "Enfournez 1 heure à 180 °C."], lien:"", ingredients:[
    {nom:"Tomates", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Chair à saucisse", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Riz", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poivrons farcis à la viande", emoji:"🫑", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete", "automne"], etapes:["Coupez les poivrons en deux dans la longueur, retirez graines et cloisons.", "Faites revenir l'oignon et la viande hachée, ajoutez les tomates et le riz cuit.", "Assaisonnez de cumin et de paprika.", "Garnissez les demi-poivrons, posez-les dans un plat huilé.", "Enfournez 40 minutes à 190 °C, en couvrant les 20 premières minutes."], lien:"", ingredients:[
    {nom:"Poivrons", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Riz", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Parmentier de canard", emoji:"🦆", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Effilochez la chair des cuisses de canard confites, en retirant peau et os.", "Faites revenir l'échalote, ajoutez la viande et le persil.", "Écrasez les pommes de terre cuites avec un peu de leur eau et une noix de beurre.", "Alternez viande puis purée dans un plat.", "Parsemez de chapelure et dorez 25 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Confit de canard", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Échalotes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Chapelure", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Bœuf aux oignons", emoji:"🥢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Émincez le bœuf très finement, en travers des fibres.", "Faites-le mariner 20 minutes avec la sauce soja, l'ail et la fécule.", "Saisissez-le 2 minutes à feu très vif, réservez.", "Faites revenir les oignons en lamelles jusqu'à ce qu'ils blondissent.", "Réunissez le tout 1 minute et servez avec du riz."], lien:"", ingredients:[
    {nom:"Bœuf à griller", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Oignons", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Fécule de maïs", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poulet mafé", cuisine:"Afrique de l'Ouest", emoji:"🥜", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites dorer les morceaux de poulet, réservez.", "Faites revenir l'oignon, ajoutez le concentré de tomate et laissez cuire 2 minutes.", "Délayez la pâte d'arachide dans un peu d'eau chaude et versez-la.", "Remettez le poulet, ajoutez les carottes et le chou en gros morceaux.", "Laissez mijoter 45 minutes : la sauce doit épaissir et prendre une couleur ambrée."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Pâte d'arachide", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Concentré de tomate", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Chou blanc", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Colombo de porc", cuisine:"Antilles", emoji:"🌶️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites mariner le porc 1 heure avec l'ail, le citron vert et la poudre à colombo.", "Faites-le dorer, ajoutez l'oignon et les courgettes en cubes.", "Versez de l'eau à hauteur et laissez mijoter 45 minutes.", "Ajoutez les pommes de terre 20 minutes avant la fin.", "Rectifiez au citron vert juste avant de servir."], lien:"", ingredients:[
    {nom:"Sauté de porc", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Poudre à colombo", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Saucisse de Toulouse et haricots blancs", emoji:"🌭", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer les saucisses de tous côtés, réservez-les.", "Faites revenir l'oignon et l'ail dans la graisse rendue.", "Ajoutez les haricots égouttés et les tomates concassées.", "Remettez les saucisses, couvrez et laissez mijoter 25 minutes.", "Parsemez de persil au moment de servir."], lien:"", ingredients:[
    {nom:"Saucisses de Toulouse", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Haricots blancs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Blanquette de dinde", emoji:"🦃", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir la dinde sans la colorer, couvrez d'eau à hauteur.", "Ajoutez carottes, poireau et oignon piqué, laissez frémir 40 minutes.", "Faites un roux avec le beurre et la farine, mouillez avec le bouillon filtré.", "Ajoutez la crème hors du feu, puis la viande et les champignons.", "Servez avec du riz."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Champignons de Paris", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Poireaux", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Pot-au-feu", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Mettez la viande dans l'eau froide et portez doucement à frémissement.", "Écumez soigneusement pendant le premier quart d'heure : c'est ce qui donne un bouillon clair.", "Ajoutez l'oignon piqué de clous de girofle et laissez cuire 2 heures.", "Ajoutez carottes, navets et poireaux, poursuivez 45 minutes.", "Servez le bouillon d'abord, la viande et les légumes ensuite."], lien:"", ingredients:[
    {nom:"Bœuf à pot-au-feu", qte:"1,2", unite:"kg", rayon:"Boucherie"},
    {nom:"Carottes", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Navets", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poireaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Clous de girofle", qte:"2", unite:"", rayon:"Épicerie"}]},

  { nom:"Curry rouge de bœuf", cuisine:"Thaïlande", emoji:"🌶️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites chauffer la pâte de curry dans un peu de lait de coco jusqu'à ce qu'elle parfume.", "Ajoutez le bœuf en cubes et enrobez-le.", "Versez le reste du lait de coco et laissez mijoter 1 h 15 à petit feu.", "Ajoutez les haricots verts et les poivrons 15 minutes avant la fin.", "Terminez au basilic thaï et servez avec du riz."], lien:"", ingredients:[
    {nom:"Bœuf à mijoter", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Pâte de curry rouge", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Haricots verts", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Paupiettes de veau", emoji:"🥩", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer les paupiettes de tous côtés dans une cocotte.", "Réservez-les, faites suer les échalotes et les carottes en rondelles.", "Déglacez au vin blanc, remettez les paupiettes.", "Couvrez et laissez mijoter 45 minutes à feu doux.", "Retirez la ficelle avant de servir, avec des tagliatelles."], lien:"", ingredients:[
    {nom:"Paupiettes de veau", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Échalotes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Tagliatelles", qte:"400", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poulet à la crème et à l'estragon", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites dorer les blancs de poulet 5 minutes par face, réservez.", "Déglacez la poêle au vin blanc en grattant les sucs.", "Ajoutez la crème et l'estragon effeuillé, laissez réduire de moitié.", "Remettez le poulet 5 minutes dans la sauce.", "Servez avec du riz ou des haricots verts."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Estragon", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"10", unite:"cl", rayon:"Boissons"},
    {nom:"Haricots verts", qte:"600", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Wok de porc aux légumes croquants", cuisine:"Asie", emoji:"🥢", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Taillez tous les légumes en fines lanières avant d'allumer le feu.", "Saisissez le porc émincé 3 minutes à feu vif, réservez.", "Faites sauter les légumes 4 minutes : ils doivent rester fermes.", "Remettez la viande, ajoutez la sauce soja et le gingembre.", "Servez immédiatement, sur du riz ou des nouilles."], lien:"", ingredients:[
    {nom:"Filet mignon de porc", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Brocoli", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Nouilles chinoises", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"}]},

  { nom:"Travers de porc au miel", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Mélangez le miel, la sauce soja, l'ail et le gingembre.", "Badigeonnez les travers et laissez mariner 2 heures au frais.", "Enfournez 1 heure à 160 °C, en arrosant toutes les 20 minutes.", "Montez à 220 °C les 10 dernières minutes pour laquer.", "Servez avec du riz et des légumes vapeur."], lien:"", ingredients:[
    {nom:"Travers de porc", qte:"1,2", unite:"kg", rayon:"Boucherie"},
    {nom:"Miel", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Rôti de dinde aux marrons", emoji:"🦃", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Faites dorer le rôti de tous côtés dans une cocotte.", "Ajoutez les oignons émincés et un verre de bouillon.", "Couvrez et laissez cuire 1 heure à feu doux.", "Ajoutez les marrons 20 minutes avant la fin.", "Laissez reposer 10 minutes avant de trancher : la viande sera plus moelleuse."], lien:"", ingredients:[
    {nom:"Rôti de dinde", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Marrons cuits", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"20", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Cuisses de poulet au four et citron", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Disposez les cuisses dans un plat avec les pommes de terre en quartiers.", "Arrosez d'huile d'olive et du jus d'un citron, salez, ajoutez le thym.", "Glissez les rondelles du second citron entre les morceaux.", "Enfournez 50 minutes à 200 °C, en retournant à mi-cuisson.", "La peau doit être dorée et croustillante."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Émincé de porc au curry et pommes", emoji:"🍏", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne"], etapes:["Faites revenir l'oignon, ajoutez le porc émincé et saisissez-le.", "Saupoudrez de curry et remuez 1 minute.", "Ajoutez les pommes en quartiers et un verre d'eau.", "Laissez mijoter 20 minutes à couvert.", "Ajoutez la crème hors du feu et servez avec du riz."], lien:"", ingredients:[
    {nom:"Filet mignon de porc", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Pommes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curry", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de courgettes à la viande", emoji:"🥒", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites revenir les courgettes en rondelles jusqu'à ce qu'elles rendent leur eau.", "Faites cuire la viande hachée avec l'oignon et l'ail.", "Mélangez le tout dans un plat à gratin.", "Battez les œufs avec la crème, versez sur le mélange.", "Parsemez de fromage râpé et enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poule au pot", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Plongez la poule dans l'eau froide, portez à frémissement et écumez.", "Ajoutez l'oignon piqué, le bouquet garni, laissez cuire 1 h 30.", "Ajoutez carottes, navets et poireaux, poursuivez 40 minutes.", "Faites cuire le riz dans une partie du bouillon.", "Servez la volaille entourée de ses légumes, le bouillon à part."], lien:"", ingredients:[
    {nom:"Poule", qte:"1", unite:"", rayon:"Boucherie"},
    {nom:"Carottes", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poireaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Navets", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouquet garni", qte:"1", unite:"", rayon:"Fruits & légumes"}]},
  { nom:"Galettes de pois chiches", emoji:"🧆", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Mixez les pois chiches égouttés avec l'ail, le cumin et la coriandre.", "Ajoutez la farine jusqu'à obtenir une pâte qui se tient.", "Formez des galettes avec les mains humides.", "Faites-les dorer 4 minutes par face dans un peu d'huile.", "Servez avec une sauce au yaourt et au citron."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Farine", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Lentilles à la tomate et féta", emoji:"🫘", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et l'ail dans l'huile d'olive.", "Ajoutez les tomates concassées et le cumin, laissez compoter 10 minutes.", "Versez les lentilles cuites et réchauffez le tout 5 minutes.", "Émiettez la féta par-dessus hors du feu.", "Terminez par un filet d'huile d'olive et du persil."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Soupe de patate douce au gingembre", emoji:"🍠", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et le gingembre râpé.", "Ajoutez les patates douces en cubes et couvrez de bouillon.", "Laissez cuire 20 minutes.", "Mixez très finement, puis incorporez le lait de coco.", "Servez avec quelques graines de courge grillées."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"75", unite:"cl", rayon:"Épicerie"},
    {nom:"Graines de courge", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Velouté de céleri-rave", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Épluchez le céleri généreusement : la peau est fibreuse.", "Faites-le revenir avec l'oignon et la pomme de terre.", "Couvrez de bouillon et laissez cuire 25 minutes.", "Mixez longuement pour obtenir une texture très lisse.", "Ajoutez la crème hors du feu et parsemez de noisettes concassées."], lien:"", ingredients:[
    {nom:"Céleri-rave", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Noisettes", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de fenouil", emoji:"🌿", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les fenouils en quartiers et faites-les blanchir 10 minutes.", "Égouttez-les bien : c'est ce qui évite un gratin noyé.", "Rangez-les dans un plat, nappez de crème.", "Parsemez de parmesan et de chapelure.", "Enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Fenouil", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Tarte aux poireaux et chèvre", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Émincez les poireaux et faites-les fondre 20 minutes à couvert.", "Étalez la pâte, piquez-la et répartissez les poireaux.", "Battez les œufs avec la crème, versez sur les poireaux.", "Répartissez les rondelles de chèvre.", "Enfournez 35 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Poireaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fromage de chèvre", qte:"1", unite:"bûche(s)", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Salade de haricots verts et amandes", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire les haricots 8 minutes à l'eau bouillante salée.", "Plongez-les aussitôt dans l'eau glacée : ils gardent ainsi leur couleur.", "Faites griller les amandes à sec dans une poêle.", "Préparez une vinaigrette à la moutarde et à l'échalote.", "Mélangez au dernier moment pour que les haricots restent croquants."], lien:"", ingredients:[
    {nom:"Haricots verts", qte:"700", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Échalotes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Wok de tofu aux légumes", cuisine:"Asie", emoji:"🥢", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Pressez le tofu 15 minutes entre deux assiettes pour en chasser l'eau.", "Coupez-le en cubes et faites-le dorer sur toutes les faces.", "Réservez-le, faites sauter les légumes 5 minutes à feu vif.", "Remettez le tofu, ajoutez la sauce soja et le sésame.", "Servez sur du riz, aussitôt."], lien:"", ingredients:[
    {nom:"Tofu", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Brocoli", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Graines de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Chili de patate douce", cuisine:"Mexique", emoji:"🍠", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, l'ail et le poivron.", "Ajoutez les épices et remuez 1 minute pour les réveiller.", "Versez les patates douces en cubes, les tomates et les haricots rouges.", "Laissez mijoter 30 minutes à couvert.", "Servez avec du riz, du yaourt et de la coriandre."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Haricots rouges", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"1", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Halloumi grillé et salade de tomates", emoji:"🧀", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez le halloumi en tranches épaisses et séchez-les.", "Faites-les griller 2 minutes par face dans une poêle très chaude, sans matière grasse.", "Coupez les tomates en quartiers, ajoutez l'oignon rouge et la menthe.", "Assaisonnez d'huile d'olive et de citron.", "Posez le halloumi encore chaud sur la salade et servez sans attendre."], lien:"", ingredients:[
    {nom:"Halloumi", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Tomates", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Œufs pochés à la florentine", emoji:"🥚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "automne"], etapes:["Faites tomber les épinards au beurre, égouttez-les et liez-les à la crème.", "Portez une casserole d'eau vinaigrée à frémissement, sans bouillir.", "Cassez chaque œuf dans un ramequin puis faites-le glisser dans l'eau.", "Comptez 3 minutes, sortez à l'écumoire et épongez.", "Posez les œufs sur les épinards, râpez du parmesan par-dessus."], lien:"", ingredients:[
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Épinards", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Vinaigre de vin", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Soupe de panais aux noisettes", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et les panais en morceaux.", "Couvrez de bouillon et laissez cuire 25 minutes.", "Mixez jusqu'à obtenir une crème lisse.", "Faites torréfier les noisettes à sec et concassez-les.", "Servez la soupe parsemée de noisettes et d'un filet d'huile."], lien:"", ingredients:[
    {nom:"Panais", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noisettes", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de pois chiches au cumin", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Égouttez et rincez les pois chiches.", "Coupez le concombre, les tomates et l'oignon rouge en petits dés.", "Préparez une vinaigrette au citron, à l'huile d'olive et au cumin.", "Mélangez tout et laissez reposer 30 minutes au frais.", "Ajoutez la menthe ciselée au dernier moment."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Gratin d'aubergines au chèvre", emoji:"🍆", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les aubergines en tranches et faites-les griller au four 20 minutes.", "Préparez une sauce tomate avec l'ail et le basilic.", "Alternez aubergines, sauce et rondelles de chèvre dans un plat.", "Terminez par du chèvre et un filet d'huile d'olive.", "Enfournez 25 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fromage de chèvre", qte:"2", unite:"bûche(s)", rayon:"Crèmerie"},
    {nom:"Coulis de tomate", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poêlée de champignons à l'ail", emoji:"🍄", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne"], etapes:["Nettoyez les champignons à sec, avec un pinceau ou un linge : lavés, ils se gorgent d'eau.", "Faites-les sauter à feu vif dans du beurre, sans les remuer au début.", "Attendez qu'ils aient rendu puis réabsorbé leur eau.", "Ajoutez l'ail et le persil hachés seulement à la fin, sinon l'ail brûle.", "Servez sur du pain grillé ou avec une purée."], lien:"", ingredients:[
    {nom:"Champignons de Paris", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"}]},

  { nom:"Brocolis rôtis au parmesan", emoji:"🥦", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Détaillez le brocoli en petits bouquets, gardez les tiges épluchées.", "Mélangez-les avec l'huile d'olive et l'ail émincé.", "Étalez sur une plaque sans les superposer : c'est ce qui les fait rôtir au lieu de cuire à la vapeur.", "Enfournez 22 minutes à 220 °C.", "Râpez le parmesan à la sortie du four et ajoutez un filet de citron."], lien:"", ingredients:[
    {nom:"Brocoli", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Quiche sans pâte aux courgettes", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Râpez les courgettes, salez-les et laissez dégorger 15 minutes, puis pressez-les.", "Battez les œufs avec la farine, le lait et le fromage râpé.", "Incorporez les courgettes et la menthe ciselée.", "Versez dans un moule beurré.", "Enfournez 35 minutes à 180 °C : le dessus doit être doré et ferme."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Lait", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"10", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Tarte tatin d'oignons", emoji:"🧅", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites fondre les oignons émincés 40 minutes à feu très doux avec le beurre.", "Ajoutez le sucre et le vinaigre balsamique, laissez caraméliser.", "Versez dans un moule, tassez bien.", "Posez la pâte dessus en rentrant les bords à l'intérieur.", "Enfournez 30 minutes à 200 °C, attendez 5 minutes avant de démouler."], lien:"", ingredients:[
    {nom:"Oignons", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Vinaigre balsamique", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sucre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Buddha bowl quinoa-avocat", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire le quinoa 15 minutes dans le double d'eau.", "Râpez la carotte, coupez l'avocat et le concombre.", "Rincez les pois chiches et faites-les rôtir 10 minutes au paprika.", "Préparez une sauce au yaourt, citron et tahini.", "Disposez chaque élément par secteurs dans le bol : c'est ce qui rend le plat appétissant."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Tahini", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Curry de haricots rouges", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon, l'ail et le gingembre.", "Ajoutez les épices et laissez-les crépiter quelques secondes.", "Versez les tomates et les haricots rouges égouttés.", "Laissez mijoter 20 minutes en écrasant un peu de haricots pour épaissir.", "Servez avec du riz et de la coriandre."], lien:"", ingredients:[
    {nom:"Haricots rouges", qte:"3", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Nouilles soba aux légumes", cuisine:"Japon", emoji:"🍜", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire les nouilles de sarrasin 5 minutes, rincez-les à l'eau froide.", "Faites sauter les légumes en julienne 4 minutes à feu vif.", "Mélangez sauce soja, vinaigre de riz, sésame et un peu de miel.", "Réunissez nouilles, légumes et sauce hors du feu.", "Parsemez de graines de sésame et d'oignons nouveaux."], lien:"", ingredients:[
    {nom:"Nouilles de sarrasin", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Chou blanc", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Graines de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Miel", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de riz", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade de courgettes crues au citron", emoji:"🥒", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Taillez les courgettes en fins rubans à l'économe.", "Salez-les légèrement et laissez 10 minutes, puis épongez.", "Assaisonnez d'huile d'olive, de jus de citron et de zeste.", "Ajoutez les pignons grillés et les copeaux de parmesan.", "Servez tout de suite : ces rubans ramollissent vite."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Pignons de pin", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Purée de pois cassés", emoji:"🫛", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Rincez les pois cassés, inutile de les tremper.", "Faites-les cuire 45 minutes dans trois fois leur volume d'eau, avec la carotte et l'oignon.", "Salez seulement en fin de cuisson.", "Mixez avec un filet d'huile d'olive jusqu'à obtenir une purée onctueuse.", "Servez avec des croûtons et une pointe de cumin."], lien:"", ingredients:[
    {nom:"Pois cassés", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Poêlée de blettes à la tomate", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "automne"], etapes:["Séparez les côtes des feuilles : elles ne cuisent pas à la même vitesse.", "Faites revenir l'ail, ajoutez les côtes coupées en tronçons, 10 minutes.", "Ajoutez les tomates concassées et laissez mijoter 10 minutes.", "Incorporez les feuilles ciselées en fin de cuisson, 3 minutes suffisent.", "Servez avec du riz ou des pois chiches."], lien:"", ingredients:[
    {nom:"Blettes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tofu mariné au sésame", cuisine:"Asie", emoji:"🍚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Pressez le tofu puis coupez-le en cubes.", "Laissez-le mariner 30 minutes dans la sauce soja, le sésame, l'ail et le gingembre.", "Faites-le dorer à la poêle sans le remuer trop souvent.", "Versez le reste de marinade en fin de cuisson pour le laquer.", "Servez sur du riz avec des oignons nouveaux."], lien:"", ingredients:[
    {nom:"Tofu", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Sauce soja", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Graines de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Soupe de carottes au lait de coco", emoji:"🥕", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon avec le curcuma et le gingembre.", "Ajoutez les carottes en rondelles et couvrez de bouillon.", "Laissez cuire 25 minutes.", "Mixez, puis incorporez le lait de coco hors du feu.", "Servez avec un trait de citron vert."], lien:"", ingredients:[
    {nom:"Carottes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"75", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de chou-fleur au curry", emoji:"🥬", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire le chou-fleur 12 minutes à l'eau bouillante, égouttez soigneusement.", "Préparez une béchamel, parfumez-la au curry.", "Mélangez le chou-fleur à la sauce dans un plat.", "Couvrez de fromage râpé et de chapelure.", "Enfournez 25 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Curry", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"30", unite:"g", rayon:"Épicerie"}]},

  { nom:"Salade de mâche, noix et pommes", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Lavez la mâche délicatement, elle est fragile, et essorez-la bien.", "Coupez les pommes en fines lamelles, arrosez-les de citron pour qu'elles ne noircissent pas.", "Concassez les noix grossièrement.", "Préparez une vinaigrette à l'huile de noix et au vinaigre de cidre.", "Assemblez au dernier moment."], lien:"", ingredients:[
    {nom:"Mâche", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pommes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de noix", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Poêlée de haricots verts à l'ail", emoji:"🫛", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire les haricots 8 minutes à l'eau bouillante salée.", "Égouttez-les et séchez-les rapidement.", "Faites chauffer l'huile d'olive avec l'ail émincé, sans le colorer.", "Faites sauter les haricots 5 minutes dans cette huile parfumée.", "Ajoutez le persil et un tour de moulin à poivre."], lien:"", ingredients:[
    {nom:"Haricots verts", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Risotto d'orge aux légumes", emoji:"🌾", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne"], etapes:["Faites revenir l'oignon, ajoutez l'orge perlé et remuez 2 minutes.", "Versez le bouillon chaud louche par louche, en attendant chaque absorption.", "Comptez 35 minutes : l'orge reste plus ferme qu'un riz à risotto.", "Ajoutez les légumes coupés fin à mi-cuisson.", "Terminez avec le parmesan et une noix de beurre, hors du feu."], lien:"", ingredients:[
    {nom:"Orge perlé", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"70", unite:"g", rayon:"Crèmerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Clafoutis de légumes d'été", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites revenir courgettes, poivrons et tomates 15 minutes.", "Battez les œufs avec le lait, la farine et les herbes.", "Répartissez les légumes dans un plat beurré, versez l'appareil.", "Parsemez de fromage râpé.", "Enfournez 35 minutes à 180 °C : le clafoutis doit être pris mais moelleux."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Herbes de Provence", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Beurre", qte:"10", unite:"g", rayon:"Crèmerie"},
    {nom:"Fromage râpé", qte:"60", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Soupe de cresson", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Lavez le cresson à grande eau et retirez les grosses tiges.", "Faites revenir l'oignon, ajoutez les pommes de terre et couvrez d'eau.", "Laissez cuire 20 minutes.", "Ajoutez le cresson et comptez 3 minutes seulement : au-delà, il perd sa couleur.", "Mixez aussitôt, ajoutez la crème hors du feu."], lien:"", ingredients:[
    {nom:"Cresson", qte:"2", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Galettes de flocons d'avoine aux légumes", emoji:"🌾", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites gonfler les flocons d'avoine 10 minutes dans le lait chaud.", "Râpez la carotte et la courgette, pressez-les pour retirer l'eau.", "Mélangez le tout avec les œufs et le fromage râpé.", "Formez des galettes et faites-les dorer 4 minutes par face.", "Servez avec une salade verte."], lien:"", ingredients:[
    {nom:"Flocons d'avoine", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courgettes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Fromage râpé", qte:"60", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Papeton d'aubergines", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites cuire les aubergines coupées en deux 40 minutes au four.", "Récupérez la chair à la cuillère et écrasez-la.", "Mélangez-la aux œufs battus, à l'ail et au persil.", "Versez dans un moule beurré.", "Enfournez 35 minutes à 180 °C au bain-marie. Servez avec un coulis de tomate."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Coulis de tomate", qte:"25", unite:"cl", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"10", unite:"g", rayon:"Crèmerie"}]},
  { nom:"Soupe de courgettes au fromage frais", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Faites revenir l'oignon sans le colorer.", "Ajoutez les courgettes en rondelles, inutile de les éplucher.", "Couvrez d'eau à hauteur seulement : les courgettes en rendent beaucoup.", "Laissez cuire 15 minutes puis mixez avec le fromage frais.", "Servez tiède en été, avec de la menthe ciselée."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Fromage frais", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tarte aux pommes", emoji:"🥧", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:["automne", "hiver"], etapes:["Étalez la pâte dans le moule et piquez le fond à la fourchette.", "Saupoudrez d'un peu de semoule ou de poudre d'amande : cela absorbe le jus des pommes.", "Rangez les lamelles de pommes en rosace, bien serrées.", "Parsemez de sucre et de petits morceaux de beurre.", "Enfournez 40 minutes à 180 °C, jusqu'à ce que les bords des pommes dorent."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Pommes", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sucre", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Poudre d'amande", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Crumble aux pommes", emoji:"🍎", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["automne", "hiver"], etapes:["Coupez les pommes en cubes et répartissez-les dans un plat.", "Du bout des doigts, mélangez farine, sucre et beurre froid jusqu'à obtenir un sable grossier.", "Ne travaillez pas trop la pâte : c'est ce qui garde le croustillant.", "Émiettez-la sur les fruits sans tasser.", "Enfournez 35 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Pommes", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"80", unite:"g", rayon:"Épicerie"}]},

  { nom:"Clafoutis aux cerises", emoji:"🍒", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:["ete"], etapes:["Beurrez un plat et répartissez les cerises, sans les dénoyauter si vous aimez la tradition.", "Battez les œufs avec le sucre, ajoutez la farine puis le lait petit à petit.", "Versez la pâte sur les fruits.", "Enfournez 40 minutes à 180 °C.", "Laissez tiédir : le clafoutis se mange à peine chaud, jamais brûlant."], lien:"", ingredients:[
    {nom:"Cerises", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Lait", qte:"40", unite:"cl", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"100", unite:"g", rayon:"Épicerie"}]},

  { nom:"Mousse au chocolat", emoji:"🍫", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Faites fondre le chocolat au bain-marie, laissez-le tiédir.", "Incorporez les jaunes d'œufs un par un.", "Montez les blancs en neige ferme avec une pincée de sel.", "Incorporez-les en trois fois, en soulevant la masse : c'est ce geste qui garde l'air.", "Réfrigérez au moins 4 heures."], lien:"", ingredients:[
    {nom:"Chocolat noir", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"6", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"30", unite:"g", rayon:"Épicerie"}]},

  { nom:"Crème brûlée", emoji:"🍮", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:[], etapes:["Faites chauffer la crème avec la gousse de vanille fendue, laissez infuser 20 minutes.", "Fouettez les jaunes avec le sucre sans les faire blanchir.", "Versez la crème chaude dessus en remuant doucement.", "Répartissez dans des ramequins et enfournez 45 minutes à 100 °C.", "Réfrigérez 4 heures, puis caramélisez le sucre juste avant de servir."], lien:"", ingredients:[
    {nom:"Crème liquide", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"6", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Île flottante", emoji:"🍮", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Faites chauffer le lait avec la vanille.", "Montez les blancs en neige ferme avec un peu de sucre.", "Pochez-les 2 minutes dans le lait frémissant, en les retournant, puis égouttez.", "Préparez la crème anglaise avec les jaunes, le sucre et le lait, sans dépasser 82 °C.", "Laissez refroidir, posez les blancs dessus et nappez de caramel."], lien:"", ingredients:[
    {nom:"Œufs", qte:"6", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"75", unite:"cl", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Riz au lait", emoji:"🍚", type:"leger", vegetarien:true, rapide:false, thermomix:true, plat:"dessert", saisons:[], etapes:["Rincez le riz puis blanchissez-le 2 minutes à l'eau bouillante.", "Faites chauffer le lait avec la vanille et le sucre.", "Ajoutez le riz et laissez cuire 35 minutes à tout petit feu, en remuant souvent.", "Il doit rester un peu de liquide : il sera absorbé en refroidissant.", "Servez tiède ou froid, nature ou avec du caramel."], lien:"", ingredients:[
    {nom:"Riz rond", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Lait", qte:"1", unite:"l", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Gâteau au yaourt", emoji:"🍰", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:[], etapes:["Videz le yaourt dans un saladier et gardez le pot : il sert de mesure.", "Ajoutez 2 pots de sucre, 3 pots de farine, 1 demi-pot d'huile, les œufs et la levure.", "Mélangez sans insister, juste assez pour que ce soit lisse.", "Versez dans un moule beurré.", "Enfournez 35 minutes à 180 °C : la lame d'un couteau doit ressortir sèche."], lien:"", ingredients:[
    {nom:"Yaourt nature", qte:"1", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Farine", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"},
    {nom:"Huile de tournesol", qte:"6", unite:"cl", rayon:"Épicerie"},
    {nom:"Beurre", qte:"10", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Fondant au chocolat", emoji:"🍫", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Faites fondre le chocolat avec le beurre au bain-marie.", "Fouettez les œufs avec le sucre, incorporez le chocolat fondu.", "Ajoutez la farine en pluie, mélangez juste ce qu'il faut.", "Versez dans un moule et enfournez 20 minutes à 180 °C, pas plus.", "Le centre doit encore trembler : c'est là tout le fondant."], lien:"", ingredients:[
    {nom:"Chocolat noir", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"60", unite:"g", rayon:"Épicerie"}]},

  { nom:"Tarte au citron meringuée", emoji:"🍋", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:["hiver"], etapes:["Faites cuire le fond de tarte à blanc 20 minutes, lesté de haricots secs.", "Faites épaissir le jus de citron avec les œufs, le sucre et le beurre, sans cesser de remuer.", "Versez la crème sur le fond refroidi.", "Montez les blancs en neige très ferme avec le sucre.", "Recouvrez et passez 8 minutes à 200 °C pour dorer la meringue."], lien:"", ingredients:[
    {nom:"Pâte sablée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Citron", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"180", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Salade de fruits frais", emoji:"🍓", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Coupez les fruits en morceaux réguliers, ni trop gros ni trop petits.", "Arrosez de jus de citron au fur et à mesure : les pommes et les bananes noircissent vite.", "Ajoutez un peu de sucre et de menthe ciselée.", "Laissez reposer 1 heure au frais pour que les jus se mêlent.", "Remuez délicatement avant de servir."], lien:"", ingredients:[
    {nom:"Pommes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oranges", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bananes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Sucre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Compote de pommes maison", emoji:"🍎", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:["automne", "hiver"], etapes:["Épluchez et coupez les pommes en morceaux.", "Mettez-les dans une casserole avec 3 cuillères d'eau et la cannelle.", "Couvrez et laissez cuire 20 minutes à feu doux, en remuant de temps en temps.", "Écrasez à la fourchette pour une compote rustique, mixez pour une texture lisse.", "Sucrez seulement à la fin, si nécessaire : les pommes le sont souvent assez."], lien:"", ingredients:[
    {nom:"Pommes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Sucre", qte:"30", unite:"g", rayon:"Épicerie"}]},

  { nom:"Crêpes sucrées", emoji:"🥞", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:[], etapes:["Mélangez la farine, le sucre et les œufs, puis versez le lait petit à petit pour éviter les grumeaux.", "Ajoutez le beurre fondu et laissez reposer 1 heure : la pâte s'assouplit.", "Huilez à peine la poêle, elle doit être bien chaude.", "Versez une petite louche et tournez la poêle pour étaler.", "Retournez quand les bords se décollent."], lien:"", ingredients:[
    {nom:"Farine", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Gaufres", emoji:"🧇", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Mélangez farine, sucre, levure, jaunes d'œufs, lait et beurre fondu.", "Montez les blancs en neige et incorporez-les délicatement.", "Laissez reposer 30 minutes.", "Faites chauffer le gaufrier et beurrez-le légèrement.", "Comptez 3 à 4 minutes par gaufre, jusqu'à ce qu'elle soit dorée et croustillante."], lien:"", ingredients:[
    {nom:"Farine", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"40", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"},
    {nom:"Sucre", qte:"60", unite:"g", rayon:"Épicerie"}]},

  { nom:"Pain perdu", emoji:"🍞", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Battez les œufs avec le lait, le sucre et la vanille.", "Trempez les tranches de pain rassis 30 secondes de chaque côté : rassis, il boit sans se déliter.", "Faites-les dorer au beurre à feu moyen, 3 minutes par face.", "Saupoudrez de sucre à la sortie de la poêle.", "Servez tiède, avec de la compote ou des fruits rouges."], lien:"", ingredients:[
    {nom:"Pain rassis", qte:"8", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"40", unite:"cl", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Tiramisu", emoji:"☕", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Fouettez les jaunes avec le sucre jusqu'à ce que le mélange blanchisse.", "Incorporez le mascarpone, puis les blancs montés en neige.", "Trempez les biscuits dans le café froid, très rapidement : trop imbibés, ils s'effondrent.", "Alternez biscuits et crème dans un plat, deux couches.", "Réfrigérez 6 heures et saupoudrez de cacao au dernier moment."], lien:"", ingredients:[
    {nom:"Mascarpone", qte:"500", unite:"g", rayon:"Crèmerie"},
    {nom:"Biscuits à la cuillère", qte:"30", unite:"", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Café", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Cacao", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Panna cotta aux fruits rouges", emoji:"🍮", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:["ete"], etapes:["Faites ramollir la gélatine dans l'eau froide.", "Chauffez la crème avec le sucre et la vanille, sans bouillir.", "Essorez la gélatine et dissolvez-la dans la crème chaude.", "Versez dans des verrines et réfrigérez 4 heures.", "Nappez d'un coulis de fruits rouges au moment de servir."], lien:"", ingredients:[
    {nom:"Crème liquide", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Fruits rouges", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Gélatine", qte:"4", unite:"", rayon:"Épicerie"},
    {nom:"Sucre", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Far breton", emoji:"🍮", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:[], etapes:["Faites tremper les pruneaux dans du thé tiède 30 minutes.", "Mélangez la farine, le sucre et les œufs, puis le lait progressivement.", "Beurrez généreusement un plat et répartissez les pruneaux égouttés.", "Versez la pâte dessus.", "Enfournez 45 minutes à 180 °C : le far doit être bien doré et un peu bombé."], lien:"", ingredients:[
    {nom:"Pruneaux", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"75", unite:"cl", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"}]},

  { nom:"Quatre-quarts", emoji:"🍰", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:[], etapes:["Pesez les œufs : leur poids donne celui du beurre, du sucre et de la farine.", "Travaillez le beurre mou avec le sucre jusqu'à obtenir une pommade.", "Incorporez les œufs un à un, puis la farine et la levure.", "Versez dans un moule à cake beurré.", "Enfournez 45 minutes à 170 °C."], lien:"", ingredients:[
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"}]},

  { nom:"Madeleines", emoji:"🍪", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Fouettez les œufs avec le sucre, ajoutez la farine et la levure.", "Incorporez le beurre fondu et le zeste de citron.", "Réfrigérez la pâte au moins 2 heures : c'est le choc du froid au four qui fait la bosse.", "Remplissez les moules aux deux tiers.", "Enfournez 4 minutes à 240 °C puis 6 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Levure chimique", qte:"0,5", unite:"sachet(s)", rayon:"Épicerie"}]},

  { nom:"Cookies aux pépites de chocolat", emoji:"🍪", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Travaillez le beurre mou avec les deux sucres.", "Ajoutez l'œuf, puis la farine et le bicarbonate.", "Incorporez les pépites sans trop mélanger.", "Formez des boules espacées sur la plaque : elles s'étalent beaucoup.", "Enfournez 11 minutes à 180 °C. Ils paraissent trop mous : ils durciront en refroidissant."], lien:"", ingredients:[
    {nom:"Farine", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"125", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Pépites de chocolat", qte:"200", unite:"g", rayon:"Épicerie"}]},

  { nom:"Brownie aux noix", emoji:"🍫", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Faites fondre le chocolat et le beurre ensemble.", "Fouettez les œufs et le sucre, puis versez le chocolat.", "Ajoutez la farine et les noix concassées.", "Versez dans un moule carré, la pâte doit être épaisse.", "Enfournez 22 minutes à 180 °C : le brownie doit rester moelleux au centre."], lien:"", ingredients:[
    {nom:"Chocolat noir", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Noix", qte:"100", unite:"g", rayon:"Épicerie"}]},

  { nom:"Muffins aux myrtilles", emoji:"🫐", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["ete"], etapes:["Mélangez d'un côté les ingrédients secs, de l'autre les liquides.", "Réunissez les deux et mélangez à peine : une pâte à muffins doit rester grumeleuse.", "Farinez les myrtilles avant de les incorporer, elles resteront en suspension.", "Remplissez les caissettes aux trois quarts.", "Enfournez 22 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Myrtilles", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"}]},

  { nom:"Tarte aux fraises", emoji:"🍓", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:["printemps", "ete"], etapes:["Faites cuire le fond de tarte à blanc 25 minutes, laissez-le refroidir complètement.", "Préparez une crème pâtissière avec le lait, les jaunes, le sucre et la maïzena.", "Filmez-la au contact et laissez refroidir : c'est ce qui évite la peau.", "Étalez la crème sur le fond, rangez les fraises coupées en deux.", "Ne montez la tarte qu'au dernier moment, sinon la pâte détrempe."], lien:"", ingredients:[
    {nom:"Pâte sablée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Fraises", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Fécule de maïs", qte:"40", unite:"g", rayon:"Épicerie"}]},
  { nom:"Tarte aux abricots", emoji:"🍑", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:["ete"], etapes:["Étalez la pâte et parsemez le fond de poudre d'amande.", "Rangez les demi-abricots côté bombé vers le bas, bien serrés.", "Saupoudrez de sucre.", "Enfournez 40 minutes à 180 °C.", "Les abricots doivent légèrement colorer sur les bords : c'est là que le goût se concentre."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Abricots", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Poudre d'amande", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre", qte:"80", unite:"g", rayon:"Épicerie"}]},

  { nom:"Tarte aux prunes", emoji:"🍇", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:["ete", "automne"], etapes:["Dénoyautez les prunes et coupez-les en deux.", "Étalez la pâte, saupoudrez de semoule fine pour absorber le jus.", "Disposez les prunes côté peau vers le bas.", "Sucrez et enfournez 40 minutes à 180 °C.", "Servez tiède, avec un peu de crème fraîche."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Prunes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Sucre", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Semoule", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Poires pochées à la vanille", emoji:"🍐", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:["automne", "hiver"], etapes:["Épluchez les poires en gardant la queue, elles se tiennent mieux.", "Portez l'eau, le sucre, la vanille et la cannelle à frémissement.", "Plongez les poires et laissez pocher 20 minutes à petit feu.", "Laissez-les refroidir dans le sirop : c'est ce qui les parfume jusqu'au cœur.", "Faites réduire le sirop et nappez au moment de servir."], lien:"", ingredients:[
    {nom:"Poires", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sucre", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"},
    {nom:"Cannelle", qte:"1", unite:"branche(s)", rayon:"Épicerie"}]},

  { nom:"Pommes au four", emoji:"🍎", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["automne", "hiver"], etapes:["Évidez le cœur des pommes sans percer le fond.", "Garnissez de beurre, de sucre et d'une pincée de cannelle.", "Ajoutez quelques raisins secs ou une noix dans chaque trou.", "Versez un fond d'eau dans le plat pour éviter que ça n'attache.", "Enfournez 35 minutes à 180 °C, jusqu'à ce que la chair soit fondante."], lien:"", ingredients:[
    {nom:"Pommes", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Raisins secs", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Banana bread", emoji:"🍌", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:[], etapes:["Écrasez les bananes bien mûres à la fourchette : plus elles sont tachées, meilleur c'est.", "Mélangez-les au beurre fondu et au sucre.", "Ajoutez les œufs, puis la farine et le bicarbonate.", "Versez dans un moule à cake.", "Enfournez 50 minutes à 170 °C, en couvrant de papier si le dessus dore trop vite."], lien:"", ingredients:[
    {nom:"Bananes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"220", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"90", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"}]},

  { nom:"Crème au chocolat", emoji:"🍫", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:[], etapes:["Faites chauffer le lait avec le chocolat cassé en morceaux.", "Fouettez les jaunes avec le sucre et la fécule.", "Versez le lait chocolaté dessus en remuant, puis remettez sur le feu.", "Faites épaissir sans bouillir, en remuant sans arrêt.", "Répartissez en pots et réfrigérez 3 heures."], lien:"", ingredients:[
    {nom:"Chocolat noir", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Lait", qte:"75", unite:"cl", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Fécule de maïs", qte:"20", unite:"g", rayon:"Épicerie"}]},

  { nom:"Semoule au lait", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:[], etapes:["Portez le lait à frémissement avec le sucre et la vanille.", "Versez la semoule en pluie en remuant sans arrêt.", "Laissez cuire 8 minutes à feu doux : elle épaissit très vite.", "Versez dans des ramequins ou un moule.", "Servez tiède ou froid, nature ou avec du caramel."], lien:"", ingredients:[
    {nom:"Semoule fine", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Lait", qte:"75", unite:"cl", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Flan pâtissier", emoji:"🍮", type:"leger", vegetarien:true, rapide:false, thermomix:true, plat:"dessert", saisons:[], etapes:["Étalez la pâte dans un moule haut et réservez au frais.", "Faites chauffer le lait avec la vanille.", "Fouettez les œufs, le sucre et la fécule, versez le lait chaud dessus.", "Faites épaissir sur le feu comme une crème pâtissière, puis versez sur la pâte.", "Enfournez 40 minutes à 180 °C. Le dessus doit être bien coloré, presque brûlé par endroits."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"1", unite:"l", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Fécule de maïs", qte:"90", unite:"g", rayon:"Épicerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Moelleux aux amandes", emoji:"🌰", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Travaillez le beurre mou avec le sucre.", "Ajoutez les œufs un à un, puis la poudre d'amande et la farine.", "Parfumez d'un peu de zeste d'orange.", "Versez dans un moule et parsemez d'amandes effilées.", "Enfournez 30 minutes à 175 °C."], lien:"", ingredients:[
    {nom:"Poudre d'amande", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Amandes effilées", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Oranges", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Financiers", emoji:"🍰", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Faites fondre le beurre jusqu'à ce qu'il devienne noisette et sente bon : c'est tout le goût du financier.", "Mélangez la poudre d'amande, le sucre glace et la farine.", "Incorporez les blancs d'œufs non montés, puis le beurre tiède.", "Remplissez les moules aux trois quarts.", "Enfournez 15 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Poudre d'amande", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre glace", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"50", unite:"g", rayon:"Épicerie"}]},

  { nom:"Tarte tatin", emoji:"🍎", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:["automne", "hiver"], etapes:["Faites un caramel à sec dans le moule, ajoutez le beurre.", "Rangez les demi-pommes debout, bien serrées : elles vont fondre et se tasser.", "Laissez compoter 20 minutes à feu doux sur la plaque.", "Posez la pâte dessus en rentrant les bords, piquez-la.", "Enfournez 30 minutes à 190 °C, attendez 10 minutes avant de retourner."], lien:"", ingredients:[
    {nom:"Pommes", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Crumble poires-chocolat", emoji:"🍐", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["automne", "hiver"], etapes:["Coupez les poires en cubes et répartissez-les dans le plat.", "Parsemez de pépites de chocolat.", "Sablez farine, sucre, poudre d'amande et beurre froid du bout des doigts.", "Émiettez sur les fruits.", "Enfournez 30 minutes à 190 °C. Servez tiède."], lien:"", ingredients:[
    {nom:"Poires", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pépites de chocolat", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"90", unite:"g", rayon:"Crèmerie"},
    {nom:"Poudre d'amande", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre", qte:"70", unite:"g", rayon:"Épicerie"}]},

  { nom:"Salade d'oranges à la cannelle", emoji:"🍊", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["hiver"], etapes:["Pelez les oranges à vif, en retirant toute la peau blanche.", "Coupez-les en rondelles au-dessus d'un plat pour récupérer le jus.", "Disposez-les en rosace, saupoudrez de cannelle.", "Ajoutez un filet de miel et quelques amandes effilées.", "Laissez reposer 1 heure au frais avant de servir."], lien:"", ingredients:[
    {nom:"Oranges", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Amandes effilées", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Mousse au citron", emoji:"🍋", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["hiver"], etapes:["Faites épaissir le jus de citron avec les jaunes, le sucre et le beurre, sans bouillir.", "Laissez refroidir complètement.", "Montez les blancs en neige très ferme.", "Incorporez-les délicatement à la crème au citron.", "Répartissez en verrines et réfrigérez 3 heures."], lien:"", ingredients:[
    {nom:"Citron", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"60", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Fromage blanc aux fruits rouges", emoji:"🍓", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["ete"], etapes:["Fouettez le fromage blanc avec un peu de sucre et de vanille.", "Écrasez la moitié des fruits rouges à la fourchette avec une cuillère de sucre.", "Alternez fromage blanc et coulis dans des verrines.", "Terminez par les fruits entiers.", "Réfrigérez 30 minutes avant de servir."], lien:"", ingredients:[
    {nom:"Fromage blanc", qte:"500", unite:"g", rayon:"Crèmerie"},
    {nom:"Fruits rouges", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Sucre", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Verrines fraises-mascarpone", emoji:"🍓", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["printemps", "ete"], etapes:["Fouettez le mascarpone avec le sucre et la vanille jusqu'à ce qu'il soit léger.", "Coupez les fraises en morceaux, gardez-en pour le décor.", "Émiettez les biscuits au fond des verrines.", "Alternez crème et fraises.", "Réfrigérez 2 heures et décorez au dernier moment."], lien:"", ingredients:[
    {nom:"Fraises", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Mascarpone", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Biscuits à la cuillère", qte:"10", unite:"", rayon:"Épicerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Gâteau de semoule aux raisins", emoji:"🍮", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Faites tremper les raisins secs dans de l'eau tiède.", "Cuisez la semoule dans le lait sucré et vanillé, 8 minutes.", "Hors du feu, ajoutez les œufs battus et les raisins égouttés.", "Versez dans un moule caramélisé.", "Enfournez 30 minutes à 180 °C au bain-marie, puis réfrigérez avant de démouler."], lien:"", ingredients:[
    {nom:"Semoule fine", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Lait", qte:"75", unite:"cl", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Raisins secs", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Beignets de pommes", emoji:"🍩", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["automne", "hiver"], etapes:["Coupez les pommes en rondelles épaisses et retirez le cœur à l'emporte-pièce.", "Préparez une pâte avec la farine, l'œuf, le lait et une pincée de sel.", "Trempez les rondelles dans la pâte.", "Faites frire 3 minutes dans l'huile chaude, en retournant à mi-cuisson.", "Épongez et roulez dans le sucre encore chaud."], lien:"", ingredients:[
    {nom:"Pommes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de friture", qte:"1", unite:"l", rayon:"Épicerie"}]},

  { nom:"Truffes au chocolat", emoji:"🍫", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["hiver"], etapes:["Portez la crème à frémissement et versez-la sur le chocolat en morceaux.", "Attendez 2 minutes, puis remuez du centre vers l'extérieur jusqu'à obtenir une ganache lisse.", "Ajoutez le beurre, laissez prendre 4 heures au frais.", "Formez des boules à la petite cuillère, avec les mains froides.", "Roulez-les dans le cacao et conservez au réfrigérateur."], lien:"", ingredients:[
    {nom:"Chocolat noir", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Crème liquide", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Cacao", qte:"50", unite:"g", rayon:"Épicerie"}]},

  { nom:"Rochers à la noix de coco", emoji:"🥥", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Mélangez la noix de coco râpée, le sucre et les blancs d'œufs.", "Laissez reposer 15 minutes, la coco absorbe le liquide.", "Formez des petites pyramides avec les mains humides.", "Posez-les sur du papier cuisson.", "Enfournez 15 minutes à 180 °C : ils doivent dorer sans sécher."], lien:"", ingredients:[
    {nom:"Noix de coco râpée", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"}]},

  { nom:"Tarte à la rhubarbe", emoji:"🥧", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:["printemps"], etapes:["Coupez la rhubarbe en tronçons, saupoudrez de sucre et laissez dégorger 1 heure.", "Égouttez-la soigneusement : c'est ce qui évite la tarte détrempée.", "Étalez la pâte, parsemez de poudre d'amande.", "Répartissez la rhubarbe, versez un appareil œufs-crème-sucre.", "Enfournez 45 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Rhubarbe", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Poudre d'amande", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Soupe de fraises à la menthe", emoji:"🍓", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:["printemps", "ete"], etapes:["Mixez la moitié des fraises avec le sucre et le jus de citron.", "Coupez le reste en quartiers et ajoutez-les au coulis.", "Ciselez la menthe et mélangez.", "Laissez reposer 1 heure au frais : les fraises rendent leur jus et parfument la soupe.", "Servez très frais, avec une boule de glace ou un biscuit."], lien:"", ingredients:[
    {nom:"Fraises", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Sucre", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Pêches rôties au miel", emoji:"🍑", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["ete"], etapes:["Coupez les pêches en deux et retirez le noyau.", "Posez-les côté coupé vers le haut dans un plat.", "Déposez une noisette de beurre et un filet de miel dans chaque creux.", "Enfournez 25 minutes à 190 °C.", "Servez tièdes, avec des amandes effilées grillées et un peu de crème."], lien:"", ingredients:[
    {nom:"Pêches", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Miel", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Amandes effilées", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Charlotte aux poires", emoji:"🍐", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:["automne", "hiver"], etapes:["Tapissez un moule de biscuits trempés rapidement dans le sirop des poires.", "Fouettez le mascarpone avec le sucre, puis incorporez la crème montée.", "Alternez crème et morceaux de poires.", "Terminez par une couche de biscuits, posez un poids dessus.", "Réfrigérez au moins 6 heures avant de démouler."], lien:"", ingredients:[
    {nom:"Poires", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Biscuits à la cuillère", qte:"30", unite:"", rayon:"Épicerie"},
    {nom:"Mascarpone", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème liquide", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"80", unite:"g", rayon:"Épicerie"}]},

  { nom:"Sablés de Noël", emoji:"🍪", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:["hiver"], etapes:["Sablez la farine et le beurre froid entre vos doigts.", "Ajoutez le sucre, l'œuf et les épices, formez une boule sans pétrir.", "Réfrigérez 1 heure : une pâte froide se découpe net.", "Étalez sur 5 mm et découpez à l'emporte-pièce.", "Enfournez 12 minutes à 180 °C, ils doivent à peine blondir."], lien:"", ingredients:[
    {nom:"Farine", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Cake aux fruits confits", emoji:"🍰", type:"leger", vegetarien:true, rapide:false, thermomix:false, plat:"dessert", saisons:["hiver"], etapes:["Farinez les fruits confits : ainsi ils ne tombent pas au fond du moule.", "Travaillez le beurre mou avec le sucre, ajoutez les œufs un à un.", "Incorporez la farine et la levure, puis les fruits.", "Versez dans un moule à cake chemisé.", "Enfournez 55 minutes à 160 °C."], lien:"", ingredients:[
    {nom:"Fruits confits", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"}]},

  { nom:"Pâtes à la sauce au thon", emoji:"🍝", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites blondir l'ail émincé dans l'huile d'olive, sans le colorer.", "Ajoutez les tomates concassées et laissez réduire 15 minutes à découvert.", "Émiettez le thon égoutté dans la sauce, hors du feu : cuit trop longtemps, il devient sec.", "Faites cuire les pâtes al dente et gardez une louche d'eau de cuisson.", "Mélangez le tout, allongez avec l'eau de cuisson, terminez au persil et au citron."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Pâtes crémeuses au thon et citron", emoji:"🍋", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire les pâtes et prélevez une louche d'eau de cuisson.", "Mélangez la ricotta avec le zeste et le jus du citron, allongez avec l'eau de cuisson.", "Ajoutez le thon égoutté et émietté.", "Versez sur les pâtes chaudes hors du feu : la sauce ne doit jamais bouillir.", "Poivrez généreusement et parsemez de ciboulette."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"One pot pasta au saumon et épinards", emoji:"🍲", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Mettez dans une seule casserole les pâtes crues, les épinards, l'échalote émincée et le zeste de citron.", "Couvrez d'eau à hauteur, pas plus : c'est elle qui deviendra la sauce.", "Portez à ébullition et laissez cuire 10 minutes en remuant souvent.", "Ajoutez le saumon en cubes 4 minutes avant la fin.", "Hors du feu, incorporez la ricotta et le jus de citron."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Pavés de saumon", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Épinards", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Échalotes", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"One pot pasta poulet-curry", emoji:"🍲", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites dorer les morceaux de poulet dans la casserole, réservez-les.", "Remettez tout ensemble : pâtes crues, poulet, oignon, poivron, curry.", "Couvrez d'eau à hauteur et portez à ébullition.", "Laissez cuire 11 minutes en remuant régulièrement pour que les pâtes n'attachent pas.", "Ajoutez le lait de coco en fin de cuisson et laissez épaissir 2 minutes."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Blancs de poulet", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Lait de coco", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"One pot pasta aux légumes du soleil", emoji:"🍲", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez courgette, poivron et tomates en dés réguliers.", "Mettez tout dans la casserole avec les pâtes crues, l'ail et le basilic.", "Couvrez d'eau à hauteur et faites cuire 11 minutes à gros bouillons.", "Remuez souvent : l'amidon des pâtes lie la sauce tout seul.", "Terminez par un filet d'huile d'olive et du basilic frais."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"One pot riz aux pois chiches et épinards", emoji:"🍲", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites revenir l'oignon avec le curcuma et le cumin.", "Ajoutez le riz cru et enrobez-le bien des épices.", "Versez deux fois son volume d'eau, ajoutez les pois chiches égouttés.", "Couvrez et laissez cuire 18 minutes sans remuer.", "Hors du feu, ajoutez les épinards et laissez-les tomber sous le couvercle 3 minutes."], lien:"", ingredients:[
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Épinards", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Cake salé au thon et tomates séchées", emoji:"🍞", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Battez les œufs avec l'huile et le lait.", "Incorporez la farine et la levure sans trop travailler la pâte.", "Ajoutez le thon égoutté, les tomates séchées en lanières et le basilic.", "Versez dans un moule à cake chemisé.", "Enfournez 40 minutes à 180 °C : la lame d'un couteau doit ressortir sèche."], lien:"", ingredients:[
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates séchées", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"12", unite:"cl", rayon:"Crèmerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"8", unite:"cl", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Cake salé courgette et menthe", emoji:"🍞", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Râpez les courgettes, salez légèrement et pressez-les fort : sans cela le cake reste humide.", "Battez les œufs avec l'huile d'olive et le lait.", "Ajoutez farine et levure, puis les courgettes et la menthe ciselée.", "Versez dans un moule chemisé.", "Enfournez 45 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"8", unite:"cl", rayon:"Épicerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"},
    {nom:"Lait", qte:"12", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Cake salé saumon et aneth", emoji:"🍞", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire le saumon 8 minutes à la vapeur, puis émiettez-le en gros morceaux.", "Préparez la pâte : œufs, lait, huile, farine, levure.", "Incorporez le saumon et l'aneth ciselé délicatement, pour garder des morceaux.", "Versez dans un moule à cake.", "Enfournez 40 minutes à 180 °C et laissez tiédir avant de démouler."], lien:"", ingredients:[
    {nom:"Pavés de saumon", qte:"350", unite:"g", rayon:"Poissonnerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"12", unite:"cl", rayon:"Crèmerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"},
    {nom:"Huile de tournesol", qte:"8", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Cake salé aux légumes du soleil", emoji:"🍞", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites revenir courgette, poivron et oignon en petits dés, 12 minutes.", "Laissez-les refroidir : versés chauds, ils cuiraient les œufs.", "Mélangez œufs, lait, huile d'olive, farine et levure.", "Incorporez les légumes et les herbes.", "Enfournez 45 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"8", unite:"cl", rayon:"Épicerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"},
    {nom:"Lait", qte:"12", unite:"cl", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Herbes de Provence", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Cake salé poulet et curry", emoji:"🍞", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez le poulet en petits dés et faites-le dorer avec le curry.", "Laissez refroidir.", "Préparez la pâte : œufs, lait, huile, farine, levure.", "Ajoutez le poulet et les raisins secs.", "Enfournez 45 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"300", unite:"g", rayon:"Boucherie"},
    {nom:"Curry", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Raisins secs", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"12", unite:"cl", rayon:"Crèmerie"},
    {nom:"Huile de tournesol", qte:"8", unite:"cl", rayon:"Épicerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"}]},

  { nom:"Quiche sans pâte au thon", emoji:"🥧", type:"leger", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Battez les œufs avec le lait et la farine jusqu'à obtenir une pâte lisse.", "Ajoutez le thon égoutté et les tomates en dés.", "Versez dans un moule beurré : la pâte forme sa propre croûte en cuisant.", "Parsemez d'herbes.", "Enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"30", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"10", unite:"g", rayon:"Crèmerie"},
    {nom:"Herbes de Provence", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Quiche brocolis et saumon", emoji:"🥧", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les brocolis 6 minutes à l'eau bouillante, égouttez-les bien.", "Étalez la pâte, piquez-la et répartissez brocolis et saumon en cubes.", "Battez les œufs avec la crème, l'aneth et le poivre.", "Versez l'appareil.", "Enfournez 35 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Brocoli", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pavés de saumon", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Quiche aux champignons et persil", emoji:"🍄", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne"], etapes:["Faites sauter les champignons à feu vif jusqu'à évaporation complète de leur eau.", "Ajoutez l'ail et le persil hors du feu.", "Étalez la pâte, répartissez les champignons.", "Versez l'appareil œufs-crème.", "Enfournez 35 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Champignons de Paris", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tarte fine tomates et basilic", emoji:"🍅", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Déroulez la pâte feuilletée sur sa feuille de cuisson et piquez-la à la fourchette.", "Coupez les tomates en fines rondelles, laissez-les 10 minutes sur du papier absorbant.", "Rangez-les en les faisant se chevaucher, arrosez d'huile d'olive.", "Enfournez 25 minutes à 200 °C.", "Ajoutez le basilic à la sortie du four, jamais avant : il noircirait."], lien:"", ingredients:[
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Tomates", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tarte rapide courgettes-ricotta", emoji:"🥧", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Taillez les courgettes en fines rondelles à l'économe.", "Étalez la pâte et tartinez-la de ricotta mélangée au zeste de citron.", "Disposez les courgettes en rosace par-dessus.", "Arrosez d'huile d'olive et poivrez.", "Enfournez 30 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tarte fine aux champignons et thym", emoji:"🍄", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne"], etapes:["Faites sauter les champignons émincés à feu vif avec l'échalote.", "Égouttez-les : une garniture humide détrempe la pâte.", "Étalez la pâte feuilletée, piquez-la, répartissez les champignons.", "Parsemez de thym et d'un filet d'huile.", "Enfournez 25 minutes à 210 °C."], lien:"", ingredients:[
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Champignons de Paris", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalotes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tarte express poireaux et saumon", emoji:"🥧", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Émincez les poireaux et faites-les fondre 15 minutes à couvert.", "Étalez la pâte et répartissez les poireaux refroidis.", "Posez le saumon en cubes par-dessus.", "Battez les œufs avec la crème et versez.", "Enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Poireaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pavés de saumon", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"}]},
  { nom:"Poke bowl au saumon", cuisine:"Hawaï", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire le riz et laissez-le tiédir.", "Coupez le saumon très frais en cubes réguliers, au couteau.", "Faites-le mariner 15 minutes dans le jus de citron vert et l'huile de sésame.", "Dressez le riz au fond du bol, puis chaque garniture par secteurs : avocat, concombre, edamames.", "Parsemez de graines de sésame et servez frais."], lien:"", ingredients:[
    {nom:"Saumon très frais", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Bowl thon, avocat et quinoa", emoji:"🥑", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire le quinoa 15 minutes dans le double d'eau, égouttez et laissez tiédir.", "Coupez l'avocat, les tomates cerises et le concombre.", "Égouttez le thon et détaillez-le en gros morceaux.", "Assaisonnez d'huile d'olive et de citron, sans saler : le thon apporte déjà ce qu'il faut.", "Dressez par secteurs et parsemez de graines de courge."], lien:"", ingredients:[
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Quinoa", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Graines de courge", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de lentilles, pomme et noix", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les lentilles 20 minutes dans l'eau non salée : le sel les durcit.", "Égouttez-les et laissez-les tiédir.", "Coupez la pomme en petits dés, arrosez-la de citron.", "Préparez une vinaigrette à l'huile de noix et au vinaigre de cidre.", "Mélangez le tout et parsemez de noix concassées et de persil."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Pommes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de noix", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Bowl patate douce et pois chiches rôtis", emoji:"🍠", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez la patate douce en cubes, enrobez-la de paprika et d'huile d'olive.", "Séchez les pois chiches et mélangez-les au cumin.", "Étalez le tout sur une plaque sans superposer, c'est ce qui les fait rôtir.", "Enfournez 30 minutes à 210 °C en remuant à mi-cuisson.", "Servez sur un lit de quinoa avec une sauce au yaourt et citron."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Quinoa", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Salade de riz complet aux crevettes", emoji:"🍤", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire le riz complet 35 minutes, rincez-le à l'eau froide.", "Coupez le concombre et les tomates cerises.", "Ajoutez les crevettes et la menthe ciselée.", "Assaisonnez d'huile d'olive, de citron vert et d'un peu de gingembre râpé.", "Laissez reposer 30 minutes au frais avant de servir."], lien:"", ingredients:[
    {nom:"Riz complet", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Crevettes décortiquées", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"}]},

  { nom:"Salade de haricots blancs au thon", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Rincez et égouttez les haricots blancs.", "Émincez l'oignon rouge très finement et laissez-le 10 minutes dans le jus de citron : il s'adoucit.", "Ajoutez le thon égoutté et les tomates en quartiers.", "Assaisonnez d'huile d'olive et de persil.", "Meilleure après une heure au frais."], lien:"", ingredients:[
    {nom:"Haricots blancs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Papillote de saumon aux légumes croquants", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Taillez carotte et courgette en fins bâtonnets.", "Posez-les au centre d'une feuille de papier cuisson, le pavé de saumon dessus.", "Ajoutez une rondelle de citron, un peu de gingembre râpé et un filet d'huile d'olive.", "Fermez hermétiquement en repliant les bords : c'est la vapeur enfermée qui cuit tout.", "Enfournez 18 minutes à 200 °C et ouvrez à table."], lien:"", ingredients:[
    {nom:"Pavés de saumon", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Cabillaud en croûte d'herbes", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Mixez le persil, la ciboulette, l'ail et l'huile d'olive en une pâte verte.", "Étalez-la sur les dos de cabillaud.", "Posez-les sur un lit de tomates cerises coupées en deux.", "Enfournez 15 minutes à 200 °C.", "Le poisson est cuit dès qu'il se sépare en gros pétales — pas une minute de plus."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Sardines à la tomate et riz complet", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire le riz complet 35 minutes.", "Pendant ce temps, faites compoter les tomates avec l'ail et l'origan, 20 minutes.", "Ajoutez les sardines égouttées en fin de cuisson, sans les écraser.", "Servez sur le riz, avec un filet d'huile d'olive et du citron.", "Un plat de placard, riche en oméga-3 et prêt en une demi-heure."], lien:"", ingredients:[
    {nom:"Sardines en boîte", qte:"3", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Riz complet", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Origan", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Curry de lentilles au potiron", cuisine:"Inde", emoji:"🎃", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, l'ail et le gingembre avec le curcuma et le cumin.", "Ajoutez le potiron en cubes et les lentilles corail rincées.", "Versez le lait de coco et deux verres d'eau.", "Laissez mijoter 25 minutes : les lentilles corail se défont et lient le plat.", "Terminez au citron vert et à la coriandre."], lien:"", ingredients:[
    {nom:"Lentilles corail", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Potiron", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Boulettes de lentilles à la tomate", emoji:"🫘", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:[], etapes:["Écrasez grossièrement les lentilles cuites à la fourchette.", "Mélangez-les à l'oignon râpé, l'œuf, les flocons d'avoine et le cumin.", "Laissez reposer 15 minutes : les flocons absorbent l'humidité et tout se tient.", "Formez des boulettes et faites-les dorer 8 minutes à la poêle.", "Laissez-les mijoter 15 minutes dans la sauce tomate."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Flocons d'avoine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Chili de quinoa aux haricots noirs", cuisine:"Mexique", emoji:"🌶️", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites revenir oignon, poivron et ail.", "Ajoutez le cumin et le paprika, remuez pour les réveiller.", "Versez le quinoa rincé, les haricots noirs et les tomates.", "Ajoutez un verre d'eau et laissez mijoter 20 minutes à couvert.", "Servez avec de l'avocat en dés et de la coriandre."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Haricots noirs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Avocats", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Sauté de dinde au gingembre et brocolis", emoji:"🦃", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Émincez la dinde en fines lanières.", "Détaillez le brocoli en petits bouquets et blanchissez-les 4 minutes.", "Saisissez la dinde 3 minutes à feu très vif, réservez.", "Faites sauter le brocoli avec l'ail et le gingembre râpé.", "Réunissez le tout, ajoutez un filet de citron et servez avec du riz complet."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Brocoli", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz complet", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Blancs de poulet au paprika et patates douces", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les patates douces en quartiers et enrobez-les d'huile d'olive et de paprika.", "Enfournez-les 15 minutes à 210 °C avant d'ajouter le poulet.", "Frottez les blancs de poulet de paprika et d'ail écrasé.", "Poursuivez 20 minutes ensemble.", "Arrosez de jus de citron à la sortie du four."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Patates douces", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Crevettes sautées à l'ail et courgettes", emoji:"🍤", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Taillez les courgettes en rubans à l'économe.", "Faites-les sauter 4 minutes à feu vif, elles doivent rester fermes.", "Ajoutez l'ail émincé et les crevettes, 3 minutes de plus.", "Déglacez au jus de citron et parsemez de persil.", "Servez tel quel ou sur du riz complet."], lien:"", ingredients:[
    {nom:"Crevettes décortiquées", qte:"500", unite:"g", rayon:"Poissonnerie"},
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Riz complet aux légumes et œufs mollets", emoji:"🥚", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire le riz complet 35 minutes.", "Faites sauter carottes, courgette et petits pois 8 minutes.", "Plongez les œufs 6 minutes dans l'eau bouillante, puis dans l'eau glacée : le jaune reste coulant.", "Mélangez riz et légumes, assaisonnez d'huile d'olive et de citron.", "Posez les œufs écalés et coupés en deux par-dessus."], lien:"", ingredients:[
    {nom:"Riz complet", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courgettes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"200", unite:"g", rayon:"Surgelés"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Poêlée de sarrasin aux champignons", emoji:"🌾", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne"], etapes:["Rincez le sarrasin et faites-le cuire 15 minutes dans le double d'eau.", "Faites sauter les champignons à feu vif jusqu'à évaporation de leur eau.", "Ajoutez l'échalote, l'ail et le persil.", "Mélangez au sarrasin égoutté.", "Terminez par des noisettes concassées et un filet d'huile."], lien:"", ingredients:[
    {nom:"Sarrasin", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalotes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noisettes", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Curry de pois cassés au lait de coco", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Rincez les pois cassés, inutile de les tremper.", "Faites revenir oignon, ail et gingembre avec le curcuma.", "Ajoutez les pois cassés et trois fois leur volume d'eau.", "Laissez cuire 45 minutes, jusqu'à ce qu'ils se défassent.", "Incorporez le lait de coco et le citron vert en fin de cuisson."], lien:"", ingredients:[
    {nom:"Pois cassés", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade de vermicelles de riz aux crevettes", cuisine:"Vietnam", emoji:"🍜", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites tremper les vermicelles de riz 5 minutes dans l'eau bouillante, rincez à l'eau froide.", "Râpez la carotte, taillez le concombre en bâtonnets.", "Ajoutez les crevettes, la menthe et la coriandre.", "Assaisonnez de citron vert, d'un peu de sucre et d'huile — pas de sauce salée, le citron suffit.", "Parsemez de cacahuètes concassées."], lien:"", ingredients:[
    {nom:"Vermicelles de riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Crevettes décortiquées", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cacahuètes", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile de tournesol", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Velouté de patate douce et lentilles corail", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon avec le curcuma et le gingembre.", "Ajoutez la patate douce en cubes et les lentilles corail.", "Couvrez d'eau et laissez cuire 20 minutes.", "Mixez : les lentilles corail donnent une texture veloutée sans crème.", "Servez avec un filet de citron et des graines de courge."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lentilles corail", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Graines de courge", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade de quinoa, concombre et menthe", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire le quinoa 15 minutes, rincez-le à l'eau froide et égouttez bien.", "Coupez le concombre et les tomates cerises en petits dés.", "Ciselez beaucoup de menthe : c'est elle qui fait le plat.", "Assaisonnez d'huile d'olive, de citron et de poivre.", "Laissez reposer une heure au frais."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"2", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Quinoa aux brocolis et amandes", emoji:"🥦", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire le quinoa 15 minutes.", "Détaillez le brocoli en petits bouquets et faites-le rôtir 20 minutes à 210 °C.", "Faites griller les amandes à sec.", "Mélangez le tout avec l'huile d'olive, le zeste et le jus de citron.", "Servez tiède, c'est là que c'est le meilleur."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Brocoli", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poêlée de haricots blancs aux tomates et romarin", emoji:"🫘", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites blondir l'ail et le romarin dans l'huile d'olive.", "Ajoutez les tomates cerises et laissez-les éclater à feu vif.", "Versez les haricots blancs rincés.", "Laissez mijoter 10 minutes en écrasant quelques haricots : la sauce épaissit toute seule.", "Servez avec du pain grillé frotté à l'ail."], lien:"", ingredients:[
    {nom:"Haricots blancs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates cerises", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Romarin", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},
  { nom:"Compote pomme-poire sans sucre ajouté", emoji:"🍏", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:["automne", "hiver"], etapes:["Épluchez pommes et poires, coupez-les en morceaux.", "Mettez-les dans une casserole avec deux cuillères d'eau et la cannelle.", "Couvrez et laissez cuire 20 minutes à feu doux.", "Écrasez à la fourchette ou mixez selon la texture voulue.", "Ne sucrez pas : les fruits mûrs suffisent largement, goûtez avant d'en douter."], lien:"", ingredients:[
    {nom:"Pommes", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Poires", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Salade d'agrumes à la menthe", emoji:"🍊", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["hiver"], etapes:["Pelez les agrumes à vif, en retirant toute la peau blanche.", "Détachez les quartiers au-dessus d'un saladier pour garder le jus.", "Ciselez la menthe et mélangez.", "Laissez reposer 30 minutes au frais.", "Aucun sucre : le pamplemousse et l'orange se répondent très bien seuls."], lien:"", ingredients:[
    {nom:"Oranges", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pamplemousse", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Clémentines", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poires rôties à la cannelle", emoji:"🍐", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["automne", "hiver"], etapes:["Coupez les poires en deux et retirez le cœur à la cuillère.", "Posez-les côté coupé vers le haut dans un plat.", "Saupoudrez de cannelle et ajoutez un fond d'eau.", "Enfournez 30 minutes à 190 °C.", "Servez tièdes avec des noix concassées — le fruit rôti se suffit à lui-même."], lien:"", ingredients:[
    {nom:"Poires", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Noix", qte:"60", unite:"g", rayon:"Épicerie"}]},

  { nom:"Mousse de fruits rouges au fromage blanc", emoji:"🍓", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["ete"], etapes:["Mixez les fruits rouges en coulis.", "Fouettez le fromage blanc pour l'alléger.", "Incorporez le coulis en marbrant, sans mélanger complètement.", "Répartissez en verrines et réfrigérez 2 heures.", "Sans sucre ajouté : goûtez d'abord, les fruits de saison sont souvent assez doux."], lien:"", ingredients:[
    {nom:"Fruits rouges", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Fromage blanc", qte:"500", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Billes énergie dattes et amandes", emoji:"🌰", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:[], etapes:["Faites tremper les dattes 10 minutes dans l'eau chaude si elles sont sèches.", "Mixez-les avec les amandes et les flocons d'avoine jusqu'à obtenir une pâte collante.", "Ajoutez le cacao non sucré et mixez encore.", "Formez des billes entre vos paumes humides.", "Roulez-les dans la noix de coco et gardez-les au frais. Le sucre vient uniquement des dattes."], lien:"", ingredients:[
    {nom:"Dattes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Amandes", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Flocons d'avoine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Cacao", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Noix de coco râpée", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Muffins banane-avoine sans sucre ajouté", emoji:"🍌", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Écrasez les bananes très mûres : ce sont elles qui sucrent tout.", "Mélangez-les aux œufs et au yaourt.", "Incorporez les flocons d'avoine mixés, la levure et la cannelle.", "Répartissez dans des caissettes aux trois quarts.", "Enfournez 22 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Bananes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Flocons d'avoine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Yaourt nature", qte:"1", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"}]},

  { nom:"Brochettes de fruits frais", emoji:"🍉", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["ete"], etapes:["Coupez les fruits en cubes de taille régulière.", "Enfilez-les sur des piques en alternant les couleurs.", "Arrosez d'un filet de citron vert pour éviter que la banane ne noircisse.", "Parsemez de menthe ciselée.", "Servez très frais — c'est le dessert que les enfants préparent eux-mêmes."], lien:"", ingredients:[
    {nom:"Melon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fraises", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Raisin", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Pommes râpées au fromage blanc", emoji:"🍎", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["automne", "hiver"], etapes:["Râpez les pommes avec la peau, juste avant de servir.", "Arrosez aussitôt de jus de citron.", "Mélangez au fromage blanc battu.", "Parsemez de cannelle et de noisettes concassées.", "Un dessert de dix minutes, sans four et sans sucre ajouté."], lien:"", ingredients:[
    {nom:"Pommes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fromage blanc", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Noisettes", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Abricots rôtis au romarin", emoji:"🍑", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["ete"], etapes:["Coupez les abricots en deux et dénoyautez-les.", "Rangez-les côté coupé vers le haut dans un plat.", "Glissez quelques brins de romarin entre les fruits.", "Enfournez 20 minutes à 200 °C : le sucre de l'abricot caramélise tout seul.", "Servez tièdes, avec des amandes effilées grillées."], lien:"", ingredients:[
    {nom:"Abricots", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Romarin", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Riz au lait à la vanille sans sucre", emoji:"🍚", type:"leger", vegetarien:true, rapide:false, thermomix:true, plat:"dessert", saisons:[], etapes:["Faites chauffer le lait avec la gousse de vanille fendue et grattée.", "Ajoutez le riz rond et laissez cuire 35 minutes à tout petit feu, en remuant souvent.", "Incorporez les raisins secs à mi-cuisson : ils gonflent et sucrent le riz.", "Retirez du feu quand il reste un peu de liquide, il sera absorbé en refroidissant.", "Aucun sucre ajouté : la vanille et les raisins font tout le travail."], lien:"", ingredients:[
    {nom:"Riz rond", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Lait", qte:"1", unite:"l", rayon:"Crèmerie"},
    {nom:"Vanille", qte:"1", unite:"", rayon:"Épicerie"},
    {nom:"Raisins secs", qte:"80", unite:"g", rayon:"Épicerie"}]},

  { nom:"Ananas rôti au citron vert", emoji:"🍍", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:["hiver"], etapes:["Épluchez l'ananas et retirez le cœur fibreux.", "Coupez-le en tranches épaisses.", "Posez-les dans un plat, arrosez de jus de citron vert.", "Enfournez 25 minutes à 200 °C en retournant à mi-cuisson.", "Parsemez de menthe et de noix de coco râpée."], lien:"", ingredients:[
    {nom:"Ananas", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noix de coco râpée", qte:"30", unite:"g", rayon:"Épicerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Yaourt glacé aux fruits rouges", emoji:"🍦", type:"leger", vegetarien:true, rapide:true, thermomix:true, plat:"dessert", saisons:["ete"], etapes:["Congelez les fruits rouges la veille, étalés sur une plaque.", "Mixez-les encore gelés avec le yaourt et le jus de citron.", "Mixez par à-coups : la préparation doit rester glacée, pas fondre.", "Servez immédiatement, à la cuillère.", "Aucun sucre ajouté : la texture glacée arrondit déjà l'acidité."], lien:"", ingredients:[
    {nom:"Fruits rouges", qte:"500", unite:"g", rayon:"Surgelés"},
    {nom:"Yaourt nature", qte:"3", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  /* --- Plats pensés pour les sportifs -------------------------------------
     Une vraie source de protéines, un féculent pour l'énergie, et de quoi
     refaire les minéraux perdus à l'effort. Écrits pour l'application,
     comme les autres : aucune recette n'est recopiée d'un site. */

  { nom:"Poulet mariné au yaourt, boulgour aux herbes", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Mélangez le yaourt, le jus de citron, l'ail écrasé et le cumin, puis faites-y mariner le poulet coupé en gros morceaux au moins une heure au frais.", "Faites cuire le boulgour dans deux fois son volume d'eau salée, à couvert, jusqu'à absorption complète.", "Saisissez le poulet égoutté à la poêle bien chaude, en plusieurs fois pour qu'il colore au lieu de bouillir.", "Ciselez menthe et persil, mélangez-les au boulgour tiède avec un filet d'huile d'olive.", "Servez le poulet sur le boulgour, avec le reste de citron."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"cuillère(s) à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"2", unite:"cuillère(s) à soupe", rayon:"Épicerie"}]},

  { nom:"Bol de quinoa, pois chiches rôtis et feta", emoji:"🥗", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete", "automne"], etapes:["Égouttez et séchez les pois chiches, mélangez-les au paprika et à un filet d'huile, puis enfournez 25 minutes à 200 °C : ils doivent croquer.", "Faites cuire le quinoa dans de l'eau salée, égouttez et laissez tiédir.", "Coupez le concombre en dés et les tomates cerises en deux, émincez l'oignon rouge très fin.", "Mélangez le tout, ajoutez la feta émiettée et les pois chiches encore chauds.", "Assaisonnez au jus de citron et à l'huile d'olive juste avant de servir."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Feta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"1", unite:"cuillère(s) à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"cuillère(s) à soupe", rayon:"Épicerie"}]},

  { nom:"Dahl de lentilles corail aux épinards", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, l'ail et le gingembre râpé dans un peu d'huile.", "Ajoutez le curcuma, laissez chauffer quelques secondes pour réveiller les épices.", "Versez les lentilles corail rincées, les tomates concassées et le lait de coco, complétez d'un peu d'eau.", "Laissez mijoter 20 minutes à découvert : les lentilles doivent se défaire.", "Ajoutez les épinards en fin de cuisson, le temps qu'ils tombent. Servez avec le riz complet."], lien:"", ingredients:[
    {nom:"Lentilles corail", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Riz complet", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Épinards", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"cuillère(s) à café", rayon:"Épicerie"},
    {nom:"Huile de tournesol", qte:"1", unite:"cuillère(s) à soupe", rayon:"Épicerie"}]},

  { nom:"Saumon rôti, patates douces et brocolis", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les patates douces en gros cubes, enfournez-les 20 minutes à 200 °C avec un filet d'huile d'olive.", "Ajoutez les pavés de saumon sur la même plaque et poursuivez 12 à 15 minutes.", "Faites cuire les brocolis à la vapeur, en gardant du croquant.", "Faites dorer les graines de courge à sec dans une poêle, une minute suffit.", "Répartissez le tout, parsemez de graines et de persil, arrosez de jus de citron."], lien:"", ingredients:[
    {nom:"Pavés de saumon", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Patates douces", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Brocolis", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Graines de courge", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"cuillère(s) à soupe", rayon:"Épicerie"}]},

  { nom:"Omelette épinards-feta et pain complet", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites tomber les épinards à la poêle avec l'oignon émincé, jusqu'à ce qu'il n'y ait plus d'eau.", "Battez les œufs, salez peu : la feta sale déjà beaucoup.", "Versez les œufs sur les épinards, émiettez la feta par-dessus.", "Laissez prendre à feu doux, sans remuer, puis repliez ou passez sous le gril une minute.", "Servez avec le pain complet grillé."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Épinards", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Feta", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Pain complet", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"1", unite:"cuillère(s) à soupe", rayon:"Épicerie"}]},

  { nom:"Steak haché, boulgour aux épinards et haricots verts", emoji:"🥩", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire le boulgour dans deux fois son volume d'eau salée, à couvert.", "Faites tomber les épinards avec l'oignon émincé, puis mélangez-les au boulgour.", "Cuisez les haricots verts à l'eau bouillante salée, 8 minutes, puis rafraîchissez-les pour garder la couleur.", "Saisissez les steaks à la poêle très chaude, une à deux minutes par face selon l'épaisseur.", "Servez sans attendre, le boulgour encore chaud."], lien:"", ingredients:[
    {nom:"Steaks hachés", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Épinards", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Haricots verts", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"1", unite:"cuillère(s) à soupe", rayon:"Épicerie"}]},

  { nom:"Pâtes complètes au thon, roquette et pignons", emoji:"🍝", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire les pâtes complètes dans une grande quantité d'eau salée.", "Pendant ce temps, faites blondir l'ail émincé dans l'huile d'olive, sans le brûler.", "Ajoutez le thon égoutté et émietté, réchauffez une minute à peine.", "Faites dorer les pignons à sec dans une petite poêle.", "Égouttez les pâtes, mélangez-les à la poêle avec le zeste et le jus du citron, puis ajoutez la roquette hors du feu et les pignons."], lien:"", ingredients:[
    {nom:"Pâtes complètes", qte:"500", unite:"g", rayon:"Épicerie"},
    {nom:"Thon au naturel", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Roquette", qte:"100", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pignons", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"cuillère(s) à soupe", rayon:"Épicerie"}]},

  { nom:"Chili de haricots rouges et quinoa", cuisine:"Mexique", emoji:"🌶️", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, l'ail et le poivron coupé en dés.", "Ajoutez le cumin et le paprika, mélangez quelques secondes.", "Versez les tomates concassées, les haricots rouges égouttés et le quinoa avec un verre d'eau.", "Laissez mijoter 25 minutes à couvert, en remuant de temps en temps : le quinoa cuit dans la sauce.", "Ajoutez le maïs en fin de cuisson et rectifiez l'assaisonnement."], lien:"", ingredients:[
    {nom:"Haricots rouges", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Quinoa", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"cuillère(s) à café", rayon:"Épicerie"},
    {nom:"Paprika", qte:"1", unite:"cuillère(s) à café", rayon:"Épicerie"}]},

  { nom:"Wok de poulet, riz complet et légumes croquants", cuisine:"Asie", emoji:"🥢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire le riz complet à l'eau salée : il demande une bonne vingtaine de minutes.", "Coupez le poulet en lanières fines et les légumes en bâtonnets réguliers.", "Saisissez le poulet dans un wok très chaud, réservez-le dès qu'il est doré.", "Faites sauter les légumes deux à trois minutes seulement, ils doivent rester croquants.", "Remettez le poulet, ajoutez le gingembre râpé et la sauce soja, mélangez et servez sur le riz."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Riz complet", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Brocolis", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"3", unite:"cuillère(s) à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"2", unite:"cuillère(s) à soupe", rayon:"Épicerie"}]},

  { nom:"Sardines grillées, écrasé de pommes de terre et roquette aux noix", emoji:"🐠", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les pommes de terre à l'eau salée, puis écrasez-les grossièrement à la fourchette avec l'huile d'olive et l'ail écrasé.", "Passez les sardines sous le gril, 3 minutes de chaque côté, la peau bien tendue.", "Concassez les noix à la main.", "Assaisonnez la roquette au jus de citron, ajoutez les noix.", "Servez les sardines sur l'écrasé, la salade à côté."], lien:"", ingredients:[
    {nom:"Sardines fraîches", qte:"12", unite:"", rayon:"Poissonnerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Roquette", qte:"100", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"cuillère(s) à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de lentilles, œufs mollets et noix", emoji:"🥗", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les lentilles vertes 20 minutes dans de l'eau non salée, avec une feuille de laurier.", "Plongez les œufs 6 minutes dans l'eau bouillante, puis refroidissez-les aussitôt pour arrêter la cuisson.", "Préparez une vinaigrette bien moutardée avec l'huile d'olive et le vinaigre.", "Mélangez les lentilles encore tièdes à l'échalote ciselée et à la vinaigrette : tièdes, elles s'imprègnent mieux.", "Ajoutez les noix concassées, le persil, et posez les œufs coupés en deux au dernier moment."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Noix", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"cuillère(s) à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"cuillère(s) à soupe", rayon:"Épicerie"},
    {nom:"Laurier", qte:"1", unite:"feuille(s)", rayon:"Épicerie"},
    {nom:"Vinaigre de vin", qte:"1", unite:"cuillère(s) à soupe", rayon:"Épicerie"}]},

  { nom:"Escalopes de dinde, boulgour et champignons", emoji:"🦃", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire le boulgour dans deux fois son volume de bouillon, à couvert.", "Faites sauter les champignons émincés à feu vif, sans les entasser : sinon ils rendent leur eau et bouillent.", "Ajoutez l'oignon en fin de cuisson des champignons.", "Saisissez les escalopes 3 minutes par face dans la même poêle.", "Mélangez champignons et boulgour, parsemez de persil, servez avec les escalopes."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"cuillère(s) à soupe", rayon:"Épicerie"},
    {nom:"Bouillon de volaille", qte:"50", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Curry de pois chiches au lait de coco et riz complet", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Lancez la cuisson du riz complet, qui sera le plus long.", "Faites revenir l'oignon et l'ail, ajoutez la pâte de curry et laissez-la chauffer une minute.", "Versez les pois chiches égouttés, les tomates concassées et le lait de coco.", "Laissez mijoter 15 minutes à découvert pour que la sauce épaississe.", "Ajoutez les épinards en fin de cuisson et un trait de jus de citron avant de servir."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Riz complet", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Épinards", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Pâte de curry", qte:"2", unite:"cuillère(s) à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Cabillaud, lentilles vertes et citron", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les lentilles 20 minutes avec la carotte en dés, l'oignon et le laurier, dans de l'eau non salée.", "Salez seulement en fin de cuisson, sinon la peau des lentilles durcit.", "Posez les dos de cabillaud sur les lentilles chaudes, couvrez et laissez cuire 8 minutes à feu doux : la vapeur suffit.", "Arrosez de jus de citron et d'un filet d'huile d'olive.", "Parsemez de persil et servez dans l'assiette creuse, avec un peu du jus de cuisson."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"cuillère(s) à soupe", rayon:"Épicerie"},
    {nom:"Laurier", qte:"1", unite:"feuille(s)", rayon:"Épicerie"}]},

  /* --- Cuisine du monde (ajoutée le 11 septembre 2026) --------------------
     Écrites pour l'appli, comme le reste du cahier : aucune recette recopiée. */

  { nom:"Nems au porc", cuisine:"Vietnam", emoji:"🥢", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Réhydratez les champignons noirs et les vermicelles 10 minutes dans l'eau chaude, égouttez et coupez-les aux ciseaux.", "Mélangez le porc haché, les carottes râpées, l'oignon haché, l'œuf, les champignons, les vermicelles et le nuoc-mâm.", "Trempez une galette de riz quelques secondes dans l'eau tiède, posez une cuillerée de farce, rabattez les côtés et roulez bien serré.", "Faites cuire les nems dans l'huile chaude 8 à 10 minutes en les retournant, jusqu'à ce qu'ils soient bien dorés.", "Servez chaud avec la salade et la menthe : chacun enroule son nem dans une feuille avant de le tremper dans la sauce."], lien:"", ingredients:[
    {nom:"Galettes de riz", qte:"1", unite:"paquet(s)", rayon:"Épicerie"},
    {nom:"Porc haché", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Vermicelles de riz", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons noirs séchés", qte:"20", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Nuoc-mâm", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile de friture", qte:"50", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Rouleaux de printemps aux crevettes", cuisine:"Vietnam", emoji:"🥬", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites tremper les vermicelles 5 minutes dans l'eau bouillante, puis rincez-les à l'eau froide.", "Taillez les carottes en fins bâtonnets, lavez la salade, la menthe et la coriandre.", "Trempez une galette de riz quelques secondes dans l'eau tiède et posez-la sur un torchon humide.", "Garnissez d'une feuille de salade, de vermicelles, de carottes, d'herbes et de crevettes, puis roulez serré en rabattant les côtés.", "Servez frais avec la sauce hoisin allongée d'un peu d'eau."], lien:"", ingredients:[
    {nom:"Galettes de riz", qte:"1", unite:"paquet(s)", rayon:"Épicerie"},
    {nom:"Crevettes cuites décortiquées", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Vermicelles de riz", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Sauce hoisin", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Phở au bœuf", cuisine:"Vietnam", emoji:"🍜", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites griller à sec l'oignon coupé en deux et le gingembre en tranches, jusqu'à ce qu'ils noircissent un peu.", "Ajoutez-les au bouillon avec l'anis étoilé et la cannelle, laissez frémir 30 minutes, puis relevez de nuoc-mâm.", "Cuisez les nouilles de riz selon le paquet et répartissez-les dans de grands bols.", "Déposez dessus le bœuf tranché très finement, cru : le bouillon brûlant le cuira.", "Versez le bouillon filtré, puis chacun ajoute germes de soja, herbes et citron vert à son goût."], lien:"", ingredients:[
    {nom:"Rumsteck", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Bouillon de bœuf", qte:"2", unite:"l", rayon:"Épicerie"},
    {nom:"Nouilles de riz plates", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Anis étoilé", qte:"3", unite:"", rayon:"Épicerie"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Nuoc-mâm", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Germes de soja", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Bœuf lok lak", cuisine:"Cambodge", emoji:"🥩", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez le bœuf en cubes et faites-le mariner 10 minutes avec la sauce soja, la sauce huître, le sucre et l'ail écrasé.", "Lancez la cuisson du riz.", "Faites sauter la viande 3 à 4 minutes à feu très vif dans un wok : elle doit rester tendre.", "Préparez une petite sauce avec le jus des citrons verts, du sel et beaucoup de poivre.", "Servez la viande sur un lit de salade, avec les tomates, l'oignon rouge émincé, le riz et la sauce à part."], lien:"", ingredients:[
    {nom:"Rumsteck", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sauce huître", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sucre", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Porc aigre-doux", cuisine:"Chine", emoji:"🍍", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Coupez le porc en cubes, roulez-les dans la maïzena et faites-les dorer à la poêle, puis réservez.", "Faites revenir l'oignon et les poivrons en morceaux 5 minutes : ils doivent rester croquants.", "Mélangez le ketchup, le vinaigre, la sauce soja, le sucre et le jus de l'ananas.", "Remettez la viande, ajoutez l'ananas et la sauce, laissez épaissir 5 minutes en remuant.", "Servez avec le riz."], lien:"", ingredients:[
    {nom:"Filet mignon de porc", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Ananas en morceaux", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poivrons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ketchup", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de riz", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sucre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Maïzena", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Gyozas poêlés au porc", cuisine:"Japon", emoji:"🥟", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Hachez finement le chou, salez-le et pressez-le au bout de 10 minutes pour en retirer l'eau.", "Mélangez le porc, le chou, le gingembre râpé, la ciboulette ciselée, un peu de sauce soja et d'huile de sésame.", "Déposez une cuillerée de farce au centre de chaque galette, mouillez le bord et refermez en pinçant.", "Faites dorer le dessous des gyozas à la poêle, versez un fond d'eau, couvrez et laissez cuire 6 minutes à la vapeur.", "Servez avec une sauce faite de sauce soja et d'un trait de vinaigre de riz."], lien:"", ingredients:[
    {nom:"Galettes pour gyozas", qte:"1", unite:"paquet(s)", rayon:"Surgelés"},
    {nom:"Porc haché", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Chou chinois", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de riz", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Ramen au porc et œuf mollet", cuisine:"Japon", emoji:"🍜", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer la poitrine de porc en tranches, arrosez de sauce soja et laissez caraméliser.", "Cuisez les œufs 6 minutes dans l'eau bouillante, plongez-les dans l'eau froide et écalez-les.", "Faites chauffer le bouillon avec les champignons émincés, puis délayez-y la pâte miso hors du feu.", "Cuisez les nouilles à part et répartissez-les dans les bols.", "Versez le bouillon, disposez le porc, les œufs coupés en deux, le maïs et les cives émincées."], lien:"", ingredients:[
    {nom:"Nouilles ramen", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Poitrine de porc", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Bouillon de volaille", qte:"1,5", unite:"l", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Pâte miso", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Cives", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poulet teriyaki et riz", cuisine:"Japon", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Lancez la cuisson du riz et celle du brocoli en petits bouquets à la vapeur.", "Mélangez la sauce soja, le miel, le gingembre râpé et l'ail écrasé.", "Faites dorer le poulet en morceaux 6 à 8 minutes à la poêle.", "Versez la sauce et laissez-la réduire 3 minutes en enrobant bien le poulet : elle doit devenir brillante.", "Parsemez de graines de sésame et servez avec le riz et le brocoli."], lien:"", ingredients:[
    {nom:"Cuisses de poulet désossées", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Sauce soja", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Brocoli", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Chirashi au saumon", cuisine:"Japon", emoji:"🍣", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Rincez le riz jusqu'à ce que l'eau soit claire, puis cuisez-le.", "Assaisonnez le riz tiède avec le vinaigre de riz, une pincée de sucre et de sel.", "Coupez le saumon en fines tranches, l'avocat et le concombre en dés, les radis en rondelles.", "Répartissez le riz dans des bols et disposez joliment le saumon et les légumes par-dessus.", "Parsemez de sésame et servez avec la sauce soja."], lien:"", ingredients:[
    {nom:"Saumon qualité sashimi", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Riz rond", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Vinaigre de riz", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sucre", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Poulet katsu curry", cuisine:"Japon", emoji:"🍛", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites revenir l'oignon, les carottes et les pommes de terre en dés, saupoudrez de curry et d'une cuillerée de farine.", "Mouillez d'eau à hauteur et laissez mijoter 20 minutes : la sauce doit épaissir.", "Passez les escalopes dans la farine, l'œuf battu puis la chapelure panko.", "Faites-les dorer 4 minutes de chaque côté dans un fond d'huile, puis coupez-les en lanières.", "Servez le poulet croustillant sur le riz, nappé de sauce au curry."], lien:"", ingredients:[
    {nom:"Escalopes de poulet", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Chapelure panko", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Pommes de terre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curry en poudre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de tournesol", qte:"10", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Bibimbap au bœuf", cuisine:"Corée", emoji:"🍚", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites mariner le bœuf en fines lamelles avec la sauce soja et l'huile de sésame.", "Faites sauter séparément, chacun 2 à 3 minutes : les épinards, les carottes en bâtonnets, la courgette, les germes de soja.", "Saisissez le bœuf à feu vif, puis faites cuire les œufs au plat.", "Répartissez le riz dans les bols et disposez chaque garniture en petit tas, l'œuf au centre.", "Servez avec la pâte de piment : chacun mélange tout avant de manger."], lien:"", ingredients:[
    {nom:"Rumsteck", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Épinards frais", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courgette", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Germes de soja", qte:"150", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pâte de piment gochujang", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Curry vert de poulet", cuisine:"Thaïlande", emoji:"🍛", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Lancez la cuisson du riz.", "Faites revenir la pâte de curry 1 minute dans un peu d'huile, puis versez le lait de coco.", "Ajoutez le poulet en lamelles et les haricots verts coupés en deux, laissez frémir 10 minutes.", "Ajoutez la courgette en demi-rondelles et cuisez encore 5 minutes : elle doit rester ferme.", "Parsemez de basilic et servez avec le riz."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Pâte de curry vert", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Haricots verts", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Courgette", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de tournesol", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Nasi goreng au poulet", cuisine:"Indonésie", emoji:"🍳", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Utilisez de préférence un riz cuit la veille : il ne colle pas.", "Faites revenir les échalotes et l'ail hachés, puis le poulet en petits dés jusqu'à ce qu'il soit doré.", "Ajoutez les petits pois et le riz, faites sauter 5 minutes à feu vif.", "Arrosez de sauce soja sucrée et mélangez bien.", "Servez chaque assiette surmontée d'un œuf au plat, avec des rondelles de concombre."], lien:"", ingredients:[
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Blancs de poulet", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Échalotes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Petits pois surgelés", qte:"150", unite:"g", rayon:"Surgelés"},
    {nom:"Sauce soja sucrée", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Butter chicken", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:[], etapes:["Faites mariner le poulet en morceaux 30 minutes dans le yaourt avec la moitié du garam masala.", "Faites fondre le beurre, faites-y revenir l'oignon, l'ail et le gingembre hachés.", "Ajoutez le reste des épices et le coulis de tomates, laissez mijoter 10 minutes.", "Ajoutez le poulet égoutté, cuisez 15 minutes, puis incorporez la crème.", "Servez avec le riz basmati."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Yaourt nature", qte:"1", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Coulis de tomates", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Garam masala", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Palak paneer", cuisine:"Inde", emoji:"🥬", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:[], etapes:["Faites cuire les épinards 5 minutes, puis mixez-les grossièrement.", "Faites revenir l'oignon, l'ail et le gingembre hachés, ajoutez les tomates en dés et le garam masala.", "Ajoutez les épinards et la crème, laissez mijoter 10 minutes à feu doux.", "Faites dorer le fromage en cubes à la poêle, puis ajoutez-le à la sauce au dernier moment.", "Servez avec le riz basmati."], lien:"", ingredients:[
    {nom:"Épinards surgelés", qte:"600", unite:"g", rayon:"Surgelés"},
    {nom:"Paneer ou halloumi", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Garam masala", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Samoussas aux légumes", cuisine:"Inde", emoji:"🥟", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:[], etapes:["Cuisez les pommes de terre en dés 10 minutes à l'eau salée, égouttez.", "Faites revenir l'oignon haché avec le curry, ajoutez les pommes de terre, les petits pois et la coriandre, écrasez légèrement.", "Coupez les feuilles de brick en deux, pliez chaque bande en triangle autour d'une cuillerée de farce.", "Badigeonnez d'un peu d'huile et enfournez 15 minutes à 200 °C jusqu'à ce qu'ils soient dorés.", "Servez avec le yaourt mélangé à la menthe ciselée et une salade."], lien:"", ingredients:[
    {nom:"Feuilles de brick", qte:"1", unite:"paquet(s)", rayon:"Crèmerie"},
    {nom:"Pommes de terre", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Petits pois surgelés", qte:"200", unite:"g", rayon:"Surgelés"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curry en poudre", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile de tournesol", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Falafels, pita et sauce au yaourt", cuisine:"Liban", emoji:"🧆", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:[], etapes:["Égouttez les pois chiches et séchez-les bien dans un torchon.", "Mixez-les avec l'oignon, l'ail, le persil, la coriandre, le cumin et la farine, sans en faire une purée.", "Façonnez de petites boulettes et faites-les dorer à la poêle dans un fond d'huile, 3 minutes de chaque côté.", "Mélangez le yaourt avec un filet de citron, du sel et un peu de cumin.", "Servez dans les pitas tièdes avec la salade, les tomates et la sauce."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Pains pita", qte:"4", unite:"", rayon:"Boulangerie"},
    {nom:"Yaourt grec", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile de tournesol", qte:"10", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Pastilla au poulet", cuisine:"Maroc", emoji:"🥧", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites mijoter les cuisses de poulet 40 minutes avec les oignons émincés, la cannelle, le gingembre et un verre d'eau.", "Effilochez la viande, faites réduire les oignons et liez-les avec les œufs battus, en remuant sur feu doux.", "Faites griller les amandes à sec.", "Beurrez un moule, tapissez-le de feuilles de brick qui débordent, garnissez de poulet, d'oignons et d'amandes, puis refermez.", "Badigeonnez de beurre fondu et enfournez 20 minutes à 180 °C. Saupoudrez d'un peu de cannelle avant de servir."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Feuilles de brick", qte:"1", unite:"paquet(s)", rayon:"Crèmerie"},
    {nom:"Oignons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Amandes effilées", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Cannelle", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Gingembre en poudre", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Beurre", qte:"50", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Couscous aux sept légumes", cuisine:"Maroc", emoji:"🥘", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon avec le ras el hanout, ajoutez les tomates en morceaux et 1,5 l d'eau.", "Ajoutez les carottes et les navets en tronçons, laissez cuire 20 minutes.", "Ajoutez les courgettes, le potiron en cubes et les pois chiches égouttés, cuisez encore 15 minutes.", "Préparez la semoule : couvrez-la d'eau bouillante salée, laissez gonfler 5 minutes puis égrainez avec un peu de beurre.", "Servez la semoule avec les légumes et le bouillon à part."], lien:"", ingredients:[
    {nom:"Semoule", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Navets", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Potiron", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Ras el hanout", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Moussaka", cuisine:"Grèce", emoji:"🍆", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete", "automne"], etapes:["Coupez les aubergines en tranches, badigeonnez-les d'huile et faites-les dorer 20 minutes au four à 200 °C.", "Faites revenir l'oignon et la viande, ajoutez le coulis de tomates et la cannelle, laissez mijoter 15 minutes.", "Préparez une béchamel avec le lait, un peu de beurre et de farine.", "Alternez dans un plat : aubergines, viande, aubergines, puis couvrez de béchamel et de parmesan.", "Enfournez 35 minutes à 180 °C et laissez reposer 10 minutes avant de couper."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Agneau haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coulis de tomates", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan râpé", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Goulash", cuisine:"Hongrie", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites dorer la viande en cubes dans une cocotte, puis réservez.", "Faites fondre les oignons émincés, ajoutez le paprika hors du feu pour qu'il ne brûle pas.", "Remettez la viande, ajoutez le concentré de tomates, les poivrons en lanières et 1 l d'eau.", "Couvrez et laissez mijoter 1 h 30 à feu doux.", "Ajoutez les pommes de terre en gros cubes et cuisez encore 30 minutes."], lien:"", ingredients:[
    {nom:"Bœuf à mijoter", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Oignons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Concentré de tomates", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Enchiladas au poulet", cuisine:"Mexique", emoji:"🌯", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites revenir l'oignon et le poulet en petits morceaux avec le cumin et le paprika.", "Ajoutez les haricots rouges égouttés et la moitié du coulis de tomates, laissez cuire 10 minutes.", "Garnissez chaque tortilla de ce mélange, roulez-les et rangez-les serrées dans un plat.", "Nappez du reste de coulis et parsemez de cheddar.", "Enfournez 20 minutes à 190 °C et servez avec la crème fraîche et la coriandre."], lien:"", ingredients:[
    {nom:"Tortillas", qte:"8", unite:"", rayon:"Boulangerie"},
    {nom:"Blancs de poulet", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Haricots rouges", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Coulis de tomates", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Cheddar râpé", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Enchiladas aux haricots noirs", cuisine:"Mexique", emoji:"🌯", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:[], etapes:["Faites revenir l'oignon et le poivron en dés avec le cumin.", "Ajoutez les haricots noirs et le maïs égouttés, écrasez grossièrement une partie des haricots.", "Garnissez chaque tortilla, roulez-les et rangez-les dans un plat.", "Nappez de coulis de tomates et parsemez de cheddar.", "Enfournez 20 minutes à 190 °C et servez avec l'avocat en tranches et un filet de citron vert."], lien:"", ingredients:[
    {nom:"Tortillas", qte:"8", unite:"", rayon:"Boulangerie"},
    {nom:"Haricots noirs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Coulis de tomates", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Cheddar râpé", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Avocat", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Fajitas de bœuf aux poivrons", cuisine:"Mexique", emoji:"🫑", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete", "automne"], etapes:["Coupez la viande en fines lanières et faites-la mariner 10 minutes avec le jus d'un citron vert, le cumin et le paprika.", "Faites sauter les poivrons et l'oignon en lanières à feu vif 5 minutes.", "Ajoutez la viande et saisissez-la 3 minutes : elle doit rester rosée.", "Faites tiédir les tortillas à la poêle.", "Chacun garnit sa tortilla de viande, de légumes et d'une cuillerée de crème, puis la roule."], lien:"", ingredients:[
    {nom:"Bavette", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Poivrons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Tortillas", qte:"8", unite:"", rayon:"Boulangerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Quesadillas au fromage et maïs", cuisine:"Mexique", emoji:"🧀", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Égouttez le maïs et coupez le poivron en petits dés.", "Parsemez la moitié de chaque tortilla de cheddar, de maïs, de poivron et de coriandre.", "Repliez les tortillas en deux.", "Faites-les dorer à sec dans une poêle, 2 minutes de chaque côté, jusqu'à ce que le fromage fonde.", "Coupez en triangles et servez avec une salade et la crème fraîche."], lien:"", ingredients:[
    {nom:"Tortillas", qte:"8", unite:"", rayon:"Boulangerie"},
    {nom:"Cheddar râpé", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Burritos au bœuf et haricots rouges", cuisine:"Mexique", emoji:"🌯", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Cuisez le riz.", "Faites revenir l'oignon et la viande avec le cumin, ajoutez les haricots rouges égouttés et les tomates en dés, laissez cuire 10 minutes.", "Faites tiédir les grandes tortillas.", "Garnissez-les de riz, de viande et de cheddar, rabattez les côtés puis roulez bien serré.", "Faites-les dorer 2 minutes de chaque côté à la poêle avant de servir."], lien:"", ingredients:[
    {nom:"Grandes tortillas", qte:"4", unite:"", rayon:"Boulangerie"},
    {nom:"Bœuf haché", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Haricots rouges", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Riz", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Cheddar râpé", qte:"120", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Tacos de poulet mariné", cuisine:"Mexique", emoji:"🌮", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites mariner le poulet en lamelles 10 minutes avec le jus d'un citron vert, le paprika et un filet d'huile.", "Coupez les tomates et l'avocat en dés, émincez finement l'oignon rouge.", "Faites dorer le poulet 6 à 8 minutes à la poêle.", "Faites tiédir les petites tortillas.", "Garnissez-les de poulet, de tomates, d'avocat, d'oignon et de coriandre, avec un dernier filet de citron vert."], lien:"", ingredients:[
    {nom:"Tortillas", qte:"12", unite:"", rayon:"Boulangerie"},
    {nom:"Blancs de poulet", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Tomates", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile de tournesol", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Feijoada", cuisine:"Brésil", emoji:"🫘", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites dorer les lardons, l'échine en cubes et les saucisses en rondelles dans une cocotte.", "Ajoutez l'oignon et l'ail hachés, laissez fondre 5 minutes.", "Ajoutez les haricots noirs avec leur jus, une feuille de laurier et un verre d'eau.", "Couvrez et laissez mijoter 1 h à feu doux, en écrasant quelques haricots pour épaissir.", "Servez avec le riz et des quartiers d'orange, comme au Brésil."], lien:"", ingredients:[
    {nom:"Haricots noirs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Échine de porc", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Saucisses fumées", qte:"2", unite:"", rayon:"Boucherie"},
    {nom:"Lardons", qte:"150", unite:"g", rayon:"Boucherie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Oranges", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Laurier", qte:"1", unite:"feuille(s)", rayon:"Épicerie"}]},

  { nom:"Empanadas au bœuf", cuisine:"Argentine", emoji:"🥟", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites revenir l'oignon et le poivron en petits dés, puis la viande avec le cumin et le paprika.", "Hors du feu, ajoutez l'œuf dur haché et les olives coupées en rondelles.", "Découpez des disques dans la pâte, garnissez-en la moitié et refermez en chausson en pinçant le bord.", "Dorez au jaune d'œuf et enfournez 20 minutes à 200 °C.", "Servez chaud ou tiède, avec une salade verte."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Bœuf haché", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Olives vertes", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Poulet jerk, riz aux haricots rouges", cuisine:"Jamaïque", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Mixez les cives, l'ail, le piment, le thym, la sauce soja et le jus des citrons verts pour faire la marinade.", "Enrobez-en les cuisses de poulet et laissez mariner au moins 1 h au frais.", "Faites rôtir le poulet 40 minutes à 200 °C en l'arrosant de temps en temps.", "Pendant ce temps, cuisez le riz dans le lait de coco allongé d'eau, avec les haricots rouges égouttés.", "Servez le poulet bien doré avec le riz."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Cives", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Piment", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Haricots rouges", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"20", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Ceviche de daurade au citron vert", cuisine:"Pérou", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Cuisez les patates douces en rondelles à la vapeur, laissez refroidir.", "Coupez le poisson, très frais, en petits cubes et mettez-le dans un saladier bien froid.", "Arrosez du jus des citrons verts, ajoutez l'oignon rouge en fines lamelles et le piment haché, laissez « cuire » 10 minutes au frais.", "Ajoutez le maïs égoutté et la coriandre ciselée, salez.", "Servez tout de suite, avec les rondelles de patate douce."], lien:"", ingredients:[
    {nom:"Filets de daurade", qte:"500", unite:"g", rayon:"Poissonnerie"},
    {nom:"Citron vert", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Piment", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Patates douces", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de butternut au parmesan", emoji:"🧀", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Épluchez la courge, coupez-la en tranches fines et émincez l'oignon.", "Rangez les tranches dans un plat beurré en alternant avec l'oignon.", "Versez la crème, salez, poivrez, parsemez de parmesan et de chapelure.", "Enfournez 40 minutes à 180 °C : la pointe du couteau doit entrer sans effort."], lien:"", ingredients:[
    {nom:"Courge butternut", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"},
    {nom:"Sauge", qte:"4", unite:"feuille(s)", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de poireaux au comté", emoji:"🧀", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Coupez les poireaux en tronçons et faites-les cuire 15 minutes à l'eau bouillante salée, puis égouttez-les bien.", "Préparez une béchamel : faites fondre le beurre, ajoutez la farine, puis le lait petit à petit sans cesser de remuer.", "Râpez un peu de muscade dans la sauce, ajoutez la moitié du comté.", "Disposez les poireaux dans un plat, nappez de sauce, couvrez du reste de fromage.", "Enfournez 25 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Poireaux", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Comté", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Noix de muscade", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Gratin de panais à la crème", emoji:"🥔", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Épluchez les panais et les pommes de terre, coupez-les en rondelles fines.", "Frottez un plat avec une gousse d'ail, beurrez-le, puis rangez les rondelles en couches.", "Mélangez la crème avec l'ail restant écrasé, salez, poivrez, versez sur les légumes.", "Parsemez d'emmental et enfournez 50 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Panais", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Emmental", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"10", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Tian de légumes d'hiver au chèvre", emoji:"🍆", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez tous les légumes en rondelles de la même épaisseur.", "Rangez-les debout, serrés et alternés, dans un plat huilé.", "Arrosez d'huile d'olive, ajoutez le thym, salez et poivrez.", "Enfournez 45 minutes à 190 °C, puis répartissez le chèvre en rondelles et remettez 10 minutes."], lien:"", ingredients:[
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Panais", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courge butternut", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bûche de chèvre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Pommes de terre boulangères", emoji:"🥔", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:[], etapes:["Émincez les oignons et faites-les blondir doucement dans le beurre.", "Coupez les pommes de terre en rondelles fines et rangez-les dans un plat en alternant avec les oignons.", "Versez le bouillon chaud jusqu'à mi-hauteur, ajoutez le thym et le laurier.", "Enfournez 1 heure à 180 °C : le dessus doit être doré et le bouillon presque absorbé."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"}]},

  { nom:"Choux de Bruxelles rôtis au parmesan", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les choux en deux, retirez les feuilles abîmées.", "Mélangez-les avec l'huile d'olive, du sel et du poivre, étalez-les côté plat sur une plaque.", "Enfournez 25 minutes à 210 °C, jusqu'à ce que les bords caramélisent.", "Parsemez de parmesan et de zeste de citron à la sortie du four."], lien:"", ingredients:[
    {nom:"Choux de Bruxelles", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Quiche aux champignons et comté", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:[], etapes:["Faites revenir les champignons émincés avec l'échalote jusqu'à ce que l'eau soit évaporée.", "Battez les œufs avec la crème et le lait, salez, poivrez.", "Étalez la pâte dans un moule, piquez-la, répartissez les champignons et le comté râpé.", "Versez l'appareil et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Lait", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Comté", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Tarte aux blettes et féta", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Séparez le vert des côtes de blettes : coupez les côtes en petits dés, ciselez le vert.", "Faites revenir les côtes 10 minutes avec l'oignon, ajoutez le vert et laissez-le tomber.", "Mélangez hors du feu avec les œufs battus, la féta émiettée et un peu de muscade.", "Garnissez le fond de tarte et enfournez 30 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Blettes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Noix de muscade", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Quiche au potimarron et noisettes", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez le potimarron en cubes sans l'éplucher et faites-le rôtir 20 minutes au four.", "Battez les œufs avec la crème, salez, poivrez.", "Répartissez les cubes sur la pâte, versez l'appareil, parsemez de noisettes concassées et de fromage.", "Enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Potimarron", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Noisettes", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Emmental", qte:"60", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Pizza aux légumes d'hiver", emoji:"🍕", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites revenir le poireau et les champignons à la poêle, réservez.", "Étalez la pâte, tartinez-la de crème, salez, poivrez.", "Répartissez les légumes, la courge en fines lamelles crues et la mozzarella.", "Enfournez 15 minutes à 240 °C, puis ajoutez quelques feuilles de roquette."], lien:"", ingredients:[
    {nom:"Pâte à pizza", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Poireau", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Champignons de Paris", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Courge butternut", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Mozzarella", qte:"125", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Roquette", qte:"50", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Cake salé aux olives et féta", emoji:"🥧", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Mélangez la farine et la levure, ajoutez les œufs, le lait et l'huile pour obtenir une pâte lisse.", "Incorporez les olives coupées en deux, la féta en dés et les herbes.", "Versez dans un moule à cake garni de papier cuisson.", "Enfournez 45 minutes à 180 °C : la lame d'un couteau doit ressortir sèche."], lien:"", ingredients:[
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"8", unite:"cl", rayon:"Épicerie"},
    {nom:"Olives vertes", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Origan", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Pâtes aux champignons et crème", emoji:"🍝", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire les pâtes dans une grande eau salée.", "Pendant ce temps, saisissez les champignons émincés à feu vif avec l'ail, sans les remuer tout de suite.", "Versez la crème, laissez épaissir deux minutes, salez et poivrez.", "Égouttez les pâtes, mélangez-les à la sauce avec le persil et le parmesan."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Lasagnes butternut-épinards", emoji:"🍝", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites rôtir la courge en cubes 25 minutes au four, puis écrasez-la grossièrement.", "Faites tomber les épinards avec l'ail et égouttez-les.", "Préparez une béchamel avec le beurre, la farine et le lait.", "Alternez plaques de lasagnes, courge, épinards et béchamel, terminez par du fromage râpé.", "Enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Plaques de lasagnes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Courge butternut", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Épinards", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"60", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Emmental", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Spaghettis à l'ail et au persil", emoji:"🍝", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire les spaghettis très al dente, gardez une louche d'eau de cuisson.", "Faites blondir l'ail en fines lamelles dans l'huile d'olive, à feu doux, sans le brûler.", "Ajoutez les pâtes égouttées, le persil haché et un peu d'eau de cuisson.", "Mélangez vivement hors du feu pour lier, poivrez généreusement."], lien:"", ingredients:[
    {nom:"Spaghettis", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"50", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Gnocchis poêlés aux épinards", emoji:"🥔", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver", "printemps"], etapes:["Faites dorer les gnocchis à la poêle dans un peu de beurre, sans les cuire à l'eau.", "Ajoutez l'ail puis les épinards, laissez-les tomber deux minutes.", "Versez la crème, salez, poivrez, laissez épaissir.", "Servez avec le parmesan râpé."], lien:"", ingredients:[
    {nom:"Gnocchis", qte:"600", unite:"g", rayon:"Épicerie"},
    {nom:"Épinards", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"50", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Risotto aux poireaux et citron", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Émincez les poireaux et faites-les fondre doucement dans le beurre.", "Ajoutez le riz, remuez jusqu'à ce qu'il devienne translucide.", "Versez le bouillon chaud louche par louche, en remuant, pendant une vingtaine de minutes.", "Hors du feu, ajoutez le parmesan, le zeste et le jus du citron."], lien:"", ingredients:[
    {nom:"Riz à risotto", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Poireaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Boulgour aux légumes rôtis", emoji:"🍚", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les légumes en cubes, mélangez-les à l'huile et aux épices, étalez-les sur une plaque.", "Enfournez 30 minutes à 200 °C en remuant à mi-cuisson.", "Faites gonfler le boulgour dans le bouillon chaud, à couvert, pendant 10 minutes.", "Mélangez le tout, ajoutez le persil et un filet de citron."], lien:"", ingredients:[
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Panais", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Semoule aux pois chiches et raisins secs", emoji:"🍚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Versez la semoule dans un saladier, couvrez de bouillon bouillant, filmez et laissez gonfler 5 minutes.", "Égrenez à la fourchette avec un peu d'huile d'olive.", "Faites revenir l'oignon avec les épices, ajoutez les pois chiches égouttés et les raisins.", "Mélangez à la semoule, parsemez d'amandes et de coriandre."], lien:"", ingredients:[
    {nom:"Semoule de blé", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Raisins secs", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Amandes effilées", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Cannelle", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Riz pilaf aux lentilles et oignons frits", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:[], etapes:["Faites cuire les lentilles 20 minutes à l'eau non salée, égouttez.", "Faites frire les oignons en fines lamelles dans l'huile jusqu'à ce qu'ils soient bien dorés, réservez-en la moitié.", "Ajoutez le riz et les épices aux oignons restants, versez le bouillon, couvrez et laissez cuire 12 minutes.", "Mélangez riz et lentilles hors du feu, couvrez de nouveau 5 minutes, garnissez des oignons frits."], lien:"", ingredients:[
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Lentilles vertes", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Oignons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"60", unite:"cl", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"}]},

  { nom:"Polenta au four aux légumes d'hiver", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["hiver"], etapes:["Versez la polenta en pluie dans le bouillon bouillant et remuez jusqu'à épaississement.", "Ajoutez le beurre et le fromage, étalez sur 2 cm dans un plat et laissez prendre.", "Faites rôtir les légumes en cubes avec l'huile et le thym, 30 minutes à 200 °C.", "Coupez la polenta en parts, passez-la 10 minutes au four, servez avec les légumes."], lien:"", ingredients:[
    {nom:"Polenta", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courge butternut", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Comté", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tajine de pois chiches et courge", cuisine:"Maroc", emoji:"🍲", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon avec les épices dans un peu d'huile.", "Ajoutez la courge en cubes, les carottes en rondelles et les tomates concassées.", "Versez le bouillon, couvrez et laissez mijoter 30 minutes.", "Ajoutez les pois chiches et les abricots secs, poursuivez 10 minutes, parsemez de coriandre."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Courge butternut", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Abricots secs", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ras el-hanout", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Dahl de lentilles vertes au chou-fleur", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, l'ail et le gingembre avec les épices.", "Ajoutez les lentilles rincées et l'eau, laissez cuire 25 minutes à couvert.", "Ajoutez les fleurettes de chou-fleur et le lait de coco, poursuivez 12 minutes.", "Rectifiez le sel et servez avec du riz."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curry", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Ragoût de haricots blancs aux légumes", emoji:"🍲", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites suer l'oignon, la carotte et le céleri coupés en petits dés.", "Ajoutez les tomates concassées, le bouillon, le laurier et le romarin.", "Laissez mijoter 25 minutes à découvert, le temps que la sauce épaississe.", "Ajoutez les haricots égouttés, réchauffez 10 minutes, arrosez d'un filet d'huile d'olive."], lien:"", ingredients:[
    {nom:"Haricots blancs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Céleri branche", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Romarin", qte:"1", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Mijoté de lentilles aux carottes et thym", emoji:"🍲", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon et les carottes en rondelles dans l'huile.", "Ajoutez les lentilles rincées, le thym, le laurier et le bouillon.", "Laissez cuire 30 minutes à petits bouillons, en ajoutant de l'eau si besoin.", "Salez seulement en fin de cuisson, ajoutez une cuillère de moutarde et le persil."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"80", unite:"cl", rayon:"Épicerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Laurier", qte:"1", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Potée végétarienne au chou", emoji:"🍲", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Coupez le chou en larges lanières, les légumes en gros morceaux.", "Mettez le tout dans une cocotte avec le bouillon et le laurier.", "Laissez mijoter 40 minutes à couvert.", "Ajoutez les pommes de terre 20 minutes avant la fin, servez brûlant avec de la moutarde."], lien:"", ingredients:[
    {nom:"Chou vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Navets", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poireau", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tofu braisé aux champignons et sauce soja", emoji:"🫘", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Pressez le tofu entre deux torchons, coupez-le en cubes et faites-le dorer sur toutes les faces.", "Réservez-le, saisissez les champignons à feu vif dans la même poêle.", "Ajoutez l'ail, le gingembre, la sauce soja et un peu d'eau, remettez le tofu.", "Laissez réduire 5 minutes, parsemez d'oignons nouveaux et de sésame."], lien:"", ingredients:[
    {nom:"Tofu ferme", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poêlée de chou kale et pois chiches", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Retirez les côtes du chou et déchirez les feuilles en morceaux.", "Faites dorer les pois chiches égouttés à la poêle avec le paprika, jusqu'à ce qu'ils croustillent.", "Ajoutez l'ail puis le chou, faites-le tomber 5 minutes à feu vif.", "Terminez par le jus de citron et les graines de courge."], lien:"", ingredients:[
    {nom:"Chou kale", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Graines de courge", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Wok de chou chinois au gingembre", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Émincez le chou, les carottes en fins bâtonnets et l'oignon.", "Faites chauffer le wok très fort, saisissez les légumes deux à trois minutes en remuant sans arrêt.", "Ajoutez l'ail et le gingembre râpé, puis la sauce soja et un filet d'huile de sésame.", "Servez aussitôt sur les nouilles, avec les cacahuètes concassées."], lien:"", ingredients:[
    {nom:"Chou chinois", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Nouilles chinoises", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Cacahuètes", qte:"50", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poêlée de topinambours et champignons", emoji:"🍄", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Brossez les topinambours, coupez-les en rondelles épaisses sans les éplucher.", "Faites-les revenir 15 minutes à couvert dans le beurre, à feu moyen.", "Ajoutez les champignons et l'ail, montez le feu pour les colorer.", "Parsemez de persil et de noisettes concassées avant de servir."], lien:"", ingredients:[
    {nom:"Topinambours", qte:"700", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Noisettes", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Galettes de quinoa aux épinards", emoji:"🧆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:[], etapes:["Faites cuire le quinoa 15 minutes, égouttez-le et laissez-le tiédir.", "Faites tomber les épinards, pressez-les bien et hachez-les.", "Mélangez quinoa, épinards, œufs, féta et chapelure, salez et poivrez.", "Formez des galettes et faites-les dorer 4 minutes de chaque côté à la poêle."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Épinards", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Féta", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Boulettes de pois chiches à la sauce tomate", emoji:"🧆", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:[], etapes:["Mixez grossièrement les pois chiches avec l'oignon, l'ail, le cumin et le persil.", "Ajoutez la chapelure et l'œuf, formez des boulettes et faites-les dorer à la poêle.", "Faites mijoter les tomates concassées avec un peu d'huile et d'origan pendant 15 minutes.", "Déposez les boulettes dans la sauce, laissez 10 minutes à feu doux, servez avec le riz."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Chapelure", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de chou rouge, pommes et noix", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Émincez le chou très finement et massez-le une minute avec un peu de sel : il s'attendrit.", "Coupez les pommes en bâtonnets et arrosez-les de jus de citron.", "Préparez une vinaigrette avec la moutarde, le vinaigre et l'huile de noix.", "Mélangez le tout, ajoutez les noix et les raisins secs juste avant de servir."], lien:"", ingredients:[
    {nom:"Chou rouge", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pommes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Raisins secs", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de noix", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade d'endives, noix et bleu", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Coupez les endives en tronçons, retirez le cœur amer.", "Émiettez le fromage bleu et concassez les noix.", "Fouettez la crème avec le vinaigre, la moutarde et un peu de poivre.", "Mélangez au dernier moment pour que les endives restent croquantes."], lien:"", ingredients:[
    {nom:"Endives", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bleu", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Noix", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"5", unite:"cl", rayon:"Crèmerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Pain complet", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Salade de quinoa, orange et fenouil", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Faites cuire le quinoa 15 minutes, rincez-le à l'eau froide et égouttez bien.", "Émincez le fenouil très finement, pelez les oranges à vif et récupérez le jus.", "Mélangez le jus d'orange avec l'huile d'olive et un peu de vinaigre.", "Assemblez le tout, ajoutez les olives et la menthe."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Fenouil", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oranges", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Œufs cocotte aux champignons", emoji:"🥚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites revenir les champignons émincés avec l'échalote jusqu'à évaporation de l'eau.", "Répartissez-les au fond de quatre ramequins beurrés, ajoutez une cuillère de crème.", "Cassez un œuf dans chaque ramequin, salez, poivrez, couvrez de fromage râpé.", "Faites cuire 12 minutes au bain-marie à 180 °C : le blanc doit être pris, le jaune coulant."], lien:"", ingredients:[
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Emmental", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"},
    {nom:"Pain complet", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Frittata aux poireaux et chèvre", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Émincez les poireaux et faites-les fondre 15 minutes à la poêle avec un peu d'huile.", "Battez les œufs avec la crème, salez, poivrez.", "Versez sur les poireaux, parsemez de chèvre, laissez prendre 5 minutes à feu doux.", "Terminez 5 minutes sous le gril, jusqu'à ce que le dessus soit doré."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Poireaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bûche de chèvre", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Quiche aux asperges vertes", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Cassez le pied dur des asperges, coupez-les en tronçons et faites-les blanchir 5 minutes.", "Battez les œufs avec la crème et le lait, salez, poivrez.", "Étalez la pâte, piquez-la, répartissez les asperges et le fromage râpé.", "Versez l'appareil et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Asperges vertes", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Lait", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Comté", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Tarte aux petits pois et chèvre frais", emoji:"🥧", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les petits pois 5 minutes à l'eau bouillante salée, rafraîchissez-les.", "Écrasez le chèvre frais à la fourchette avec la crème, la menthe et le zeste de citron.", "Étalez la pâte, faites-la cuire à blanc 15 minutes à 180 °C.", "Garnissez de crème au chèvre, parsemez les petits pois, servez tiède."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Petits pois", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Chèvre frais", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Clafoutis salé aux asperges", emoji:"🥧", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Coupez les asperges en tronçons, faites-les revenir 5 minutes à la poêle.", "Battez les œufs avec la farine, le lait et la crème jusqu'à obtenir une pâte lisse.", "Ajoutez les asperges et le fromage, versez dans un plat beurré.", "Enfournez 30 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Asperges vertes", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Lait", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Risotto aux petits pois et menthe", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["printemps"], etapes:["Faites revenir l'oignon nouveau dans le beurre, ajoutez le riz et remuez jusqu'à ce qu'il devienne translucide.", "Versez le bouillon chaud louche par louche pendant une vingtaine de minutes.", "Ajoutez les petits pois 5 minutes avant la fin.", "Hors du feu, incorporez le parmesan et la menthe ciselée."], lien:"", ingredients:[
    {nom:"Riz à risotto", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Petits pois", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Pâtes aux asperges et ricotta", emoji:"🍝", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les pâtes, gardez une louche d'eau de cuisson.", "Coupez les asperges en biseau et faites-les sauter 6 minutes avec l'ail.", "Détendez la ricotta avec l'eau de cuisson et le zeste de citron.", "Mélangez le tout hors du feu, poivrez généreusement."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Asperges vertes", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"40", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Pâtes aux petits pois, menthe et féta", emoji:"🍝", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les pâtes et jetez les petits pois dans l'eau 4 minutes avant la fin.", "Égouttez, gardez un peu d'eau de cuisson.", "Mélangez avec l'huile d'olive, la menthe ciselée et le zeste de citron.", "Ajoutez la féta émiettée juste avant de servir."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Petits pois", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Spaghettis aux courgettes et basilic", emoji:"🍝", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Taillez les courgettes en fines rondelles et faites-les sauter à feu vif avec l'ail.", "Faites cuire les spaghettis très al dente.", "Réunissez pâtes et courgettes avec un peu d'eau de cuisson pour lier.", "Hors du feu, ajoutez le basilic et le parmesan."], lien:"", ingredients:[
    {nom:"Spaghettis", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Gnocchis aux petits pois et parmesan", emoji:"🥔", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites dorer les gnocchis à la poêle dans le beurre.", "Ajoutez les petits pois et un fond d'eau, couvrez 5 minutes.", "Versez la crème, laissez épaissir.", "Parsemez de parmesan et de ciboulette."], lien:"", ingredients:[
    {nom:"Gnocchis", qte:"600", unite:"g", rayon:"Épicerie"},
    {nom:"Petits pois", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade de radis, féta et menthe", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Lavez les radis et coupez-les en fines rondelles.", "Émiettez la féta et ciselez la menthe.", "Fouettez l'huile d'olive avec le jus de citron et un peu de poivre.", "Mélangez au dernier moment pour garder le croquant."], lien:"", ingredients:[
    {nom:"Radis", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain complet", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Salade de fèves, menthe et pecorino", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Écossez les fèves, ébouillantez-les 2 minutes et retirez la petite peau.", "Mélangez-les avec l'huile d'olive, le jus de citron et la menthe.", "Ajoutez le pecorino en copeaux.", "Laissez reposer 10 minutes avant de servir, sur du pain grillé si vous voulez."], lien:"", ingredients:[
    {nom:"Fèves", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Pecorino", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Salade d'asperges et œuf mollet", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les asperges 8 minutes à l'eau salée, elles doivent rester fermes.", "Plongez les œufs 6 minutes dans l'eau bouillante, puis dans l'eau froide, et écalez-les.", "Préparez une vinaigrette avec la moutarde, le vinaigre et l'huile.", "Dressez les asperges tièdes, l'œuf coupé en deux, la vinaigrette et la ciboulette."], lien:"", ingredients:[
    {nom:"Asperges vertes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade de pommes de terre nouvelles à l'aneth", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les pommes de terre entières 20 minutes à l'eau salée, sans les éplucher.", "Coupez-les en deux encore tièdes et arrosez-les tout de suite de vinaigre.", "Mélangez le yaourt, la moutarde, l'aneth et les oignons nouveaux.", "Enrobez les pommes de terre de sauce et servez tiède."], lien:"", ingredients:[
    {nom:"Pommes de terre nouvelles", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de quinoa, petits pois et radis", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire le quinoa 15 minutes, rincez-le à l'eau froide.", "Faites cuire les petits pois 4 minutes, rafraîchissez-les.", "Coupez les radis en rondelles et ciselez les herbes.", "Mélangez le tout avec l'huile d'olive et le jus de citron."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Petits pois", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Féta", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Taboulé de printemps aux herbes", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites gonfler la semoule dans son volume d'eau bouillante, à couvert, 10 minutes.", "Égrenez à la fourchette avec un filet d'huile d'olive.", "Ajoutez les herbes hachées très finement, les radis et les oignons nouveaux.", "Assaisonnez généreusement de jus de citron et laissez reposer au frais."], lien:"", ingredients:[
    {nom:"Semoule de blé", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"2", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Velouté d'asperges", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Réservez quelques pointes d'asperges, coupez le reste en tronçons.", "Faites suer l'oignon dans le beurre, ajoutez les asperges et le bouillon.", "Laissez cuire 20 minutes, puis mixez très finement.", "Ajoutez la crème, rectifiez l'assaisonnement et décorez des pointes réservées."], lien:"", ingredients:[
    {nom:"Asperges vertes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"80", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Soupe de fanes de radis", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Lavez très soigneusement les fanes et retirez les tiges dures.", "Faites suer l'oignon et la pomme de terre en dés dans le beurre.", "Ajoutez les fanes, couvrez de bouillon et laissez cuire 15 minutes.", "Mixez, ajoutez la crème : rien ne se jette, et c'est délicieux."], lien:"", ingredients:[
    {nom:"Fanes de radis", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"70", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Omelette aux asperges et chèvre", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Coupez les asperges en tronçons et faites-les sauter 6 minutes à la poêle.", "Battez les œufs à la fourchette, salez, poivrez.", "Versez sur les asperges, laissez prendre à feu doux.", "Parsemez de chèvre et de ciboulette, pliez l'omelette et servez aussitôt."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Asperges vertes", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Bûche de chèvre", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Frittata aux petits pois et menthe", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites revenir les oignons nouveaux, ajoutez les petits pois et un fond d'eau, couvrez 5 minutes.", "Battez les œufs avec la crème et la menthe ciselée.", "Versez dans la poêle, laissez prendre 6 minutes à feu doux.", "Terminez 4 minutes sous le gril et servez tiède."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Petits pois", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Œufs mimosa et salade verte", emoji:"🥚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les œufs 10 minutes, rafraîchissez-les et écalez-les.", "Coupez-les en deux, écrasez les jaunes avec la mayonnaise et la moutarde.", "Garnissez les blancs de cette préparation à la petite cuillère.", "Servez sur la salade assaisonnée, avec de la ciboulette."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Mayonnaise", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Laitue", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poêlée de légumes nouveaux", emoji:"🥕", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Brossez les carottes et les navets nouveaux, coupez-les en deux dans la longueur.", "Faites-les revenir 12 minutes à couvert dans le beurre, avec un fond d'eau.", "Ajoutez les petits pois et les oignons nouveaux, poursuivez 5 minutes.", "Terminez par le cerfeuil et une pointe de sucre pour glacer les légumes."], lien:"", ingredients:[
    {nom:"Carottes nouvelles", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Cerfeuil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Wok d'asperges et tofu au sésame", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Coupez le tofu en cubes et faites-le dorer sur toutes ses faces, réservez.", "Saisissez les asperges en biseau à feu vif 5 minutes.", "Ajoutez l'ail, le gingembre, la sauce soja et le tofu.", "Terminez par l'huile de sésame et les graines, servez avec le riz."], lien:"", ingredients:[
    {nom:"Tofu ferme", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Asperges vertes", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Croquettes d'épinards et ricotta", emoji:"🧆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites tomber les épinards, pressez-les très fort et hachez-les.", "Mélangez-les avec la ricotta, l'œuf, la chapelure et le parmesan.", "Formez des croquettes et roulez-les dans un peu de chapelure.", "Faites-les dorer 4 minutes de chaque côté à la poêle."], lien:"", ingredients:[
    {nom:"Épinards", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Orge perlé aux petits pois et citron", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["printemps"], etapes:["Rincez l'orge et faites-le cuire 30 minutes dans le bouillon.", "Ajoutez les petits pois 6 minutes avant la fin.", "Hors du feu, incorporez le zeste et le jus du citron, l'huile d'olive et le parmesan.", "Parsemez d'herbes fraîches."], lien:"", ingredients:[
    {nom:"Orge perlé", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Petits pois", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"80", unite:"cl", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Gratin d'asperges au parmesan", emoji:"🧀", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les asperges 8 minutes à l'eau salée et égouttez-les soigneusement.", "Préparez une béchamel légère avec le beurre, la farine et le lait.", "Rangez les asperges dans un plat, nappez de sauce, couvrez de parmesan.", "Enfournez 20 minutes à 200 °C, jusqu'à ce que le dessus soit doré."], lien:"", ingredients:[
    {nom:"Asperges vertes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"40", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"30", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Noix de muscade", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Gratin de courgettes au chèvre", emoji:"🧀", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps", "ete"], etapes:["Coupez les courgettes en rondelles et faites-les dégorger 10 minutes avec un peu de sel.", "Faites-les revenir à la poêle avec l'ail pour évaporer l'eau.", "Disposez-les dans un plat, ajoutez la crème battue avec les œufs.", "Parsemez de chèvre en rondelles et enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Bûche de chèvre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Légumes nouveaux rôtis au four", emoji:"🥕", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Brossez les légumes sans les éplucher, coupez-les en morceaux réguliers.", "Mélangez-les à l'huile d'olive, au thym et à l'ail en chemise.", "Enfournez 35 minutes à 200 °C en remuant à mi-cuisson.", "Servez avec le fromage frais aux herbes."], lien:"", ingredients:[
    {nom:"Pommes de terre nouvelles", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes nouvelles", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"tête(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Fromage frais", qte:"200", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Curry de petits pois et pommes de terre", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["printemps"], etapes:["Faites revenir l'oignon, l'ail et le gingembre avec les épices.", "Ajoutez les pommes de terre en cubes et les tomates concassées, couvrez d'eau.", "Laissez mijoter 20 minutes, puis ajoutez les petits pois pour 8 minutes.", "Terminez par la coriandre et servez avec du riz."], lien:"", ingredients:[
    {nom:"Petits pois", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curry", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Boulettes de fèves à la menthe", emoji:"🧆", type:"leger", vegetarien:true, rapide:false, thermomix:true, saisons:["printemps"], etapes:["Écossez les fèves, ébouillantez-les 2 minutes et retirez la peau.", "Mixez-les grossièrement avec l'oignon, l'ail, la menthe et le cumin.", "Ajoutez la farine, formez des boulettes et laissez-les reposer 20 minutes au frais.", "Faites-les dorer à la poêle et servez avec le yaourt citronné."], lien:"", ingredients:[
    {nom:"Fèves", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Cabillaud rôti aux asperges vertes", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Disposez les asperges dans un plat, arrosez d'huile d'olive, enfournez 10 minutes à 200 °C.", "Posez les dos de cabillaud dessus, salez, poivrez, ajoutez des rondelles de citron.", "Poursuivez 12 minutes : le poisson doit s'effeuiller à la fourchette.", "Parsemez d'aneth au moment de servir."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Asperges vertes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Pavé de saumon et écrasé de pommes de terre nouvelles", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les pommes de terre 20 minutes à l'eau salée, écrasez-les à la fourchette avec l'huile d'olive.", "Saisissez les pavés de saumon côté peau 5 minutes, puis 2 minutes de l'autre côté.", "Ajoutez la ciboulette et les oignons nouveaux à l'écrasé.", "Servez le saumon sur l'écrasé, avec un quartier de citron."], lien:"", ingredients:[
    {nom:"Pavés de saumon", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Pommes de terre nouvelles", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Truite au four, fenouil et citron", emoji:"🐟", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Émincez le fenouil et étalez-le dans un plat avec l'huile d'olive.", "Posez les truites dessus, garnissez-les de rondelles de citron et d'aneth.", "Arrosez de vin blanc, salez, poivrez.", "Enfournez 30 minutes à 190 °C en arrosant une fois."], lien:"", ingredients:[
    {nom:"Truites", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Fenouil", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"10", unite:"cl", rayon:"Boissons"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Papillote de cabillaud aux légumes nouveaux", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Taillez les carottes et les navets en fins bâtonnets.", "Répartissez-les sur quatre feuilles de papier cuisson, posez le poisson dessus.", "Ajoutez une rondelle de citron, un peu de beurre, du sel et du poivre.", "Fermez les papillotes et enfournez 18 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Carottes nouvelles", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade de crevettes, asperges et avocat", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les asperges 8 minutes, rafraîchissez-les à l'eau glacée.", "Coupez l'avocat en lamelles et arrosez-le de citron.", "Fouettez l'huile, le citron et la moutarde pour la sauce.", "Dressez la salade, les asperges, les crevettes et l'avocat, arrosez au dernier moment."], lien:"", ingredients:[
    {nom:"Crevettes", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Asperges vertes", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Avocat", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Laitue", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Maquereaux grillés et salade de radis", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Entaillez les maquereaux, huilez-les et salez-les.", "Faites-les griller 5 minutes de chaque côté à la poêle ou au four très chaud.", "Coupez les radis en rondelles, mélangez-les au cresson et à la vinaigrette.", "Servez le poisson brûlant avec la salade fraîche et du pain."], lien:"", ingredients:[
    {nom:"Maquereaux", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Radis", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Cresson", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Risotto aux crevettes et petits pois", emoji:"🍚", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["printemps"], etapes:["Faites revenir l'échalote dans le beurre, ajoutez le riz et remuez.", "Versez le bouillon chaud louche par louche pendant vingt minutes.", "Ajoutez les petits pois 5 minutes avant la fin, puis les crevettes 2 minutes.", "Hors du feu, ajoutez le zeste de citron et un peu de persil."], lien:"", ingredients:[
    {nom:"Riz à risotto", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Crevettes", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Petits pois", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de poisson", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Quiche au saumon et épinards", emoji:"🥧", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites tomber les épinards et pressez-les pour retirer l'eau.", "Battez les œufs avec la crème, salez peu, poivrez.", "Répartissez les épinards et le saumon en morceaux sur la pâte.", "Versez l'appareil et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Saumon", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Épinards", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Gigot d'agneau aux herbes et pommes de terre nouvelles", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Piquez le gigot d'ail, frottez-le d'huile, de thym et de romarin.", "Disposez les pommes de terre autour, salez, poivrez.", "Enfournez 1 heure à 200 °C en arrosant toutes les vingt minutes.", "Laissez reposer 15 minutes sous un papier aluminium avant de trancher."], lien:"", ingredients:[
    {nom:"Gigot d'agneau", qte:"1,5", unite:"kg", rayon:"Boucherie"},
    {nom:"Pommes de terre nouvelles", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Romarin", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Sauté de veau aux carottes nouvelles", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites dorer la viande en morceaux dans une cocotte, réservez-la.", "Faites revenir les oignons nouveaux et les carottes coupées en deux.", "Remettez la viande, versez le vin blanc et le bouillon, ajoutez le thym.", "Couvrez et laissez mijoter 1 h 15 à feu doux, jusqu'à ce que la viande soit fondante."], lien:"", ingredients:[
    {nom:"Veau à mijoter", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Carottes nouvelles", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Bouillon de volaille", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poulet rôti au citron et asperges", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Glissez un citron coupé en deux et du thym dans le poulet, frottez la peau d'huile et de sel.", "Enfournez 1 heure à 200 °C en arrosant du jus de cuisson.", "Ajoutez les asperges autour du poulet pour les 15 dernières minutes.", "Laissez reposer 10 minutes avant de découper."], lien:"", ingredients:[
    {nom:"Poulet", qte:"1", unite:"", rayon:"Boucherie"},
    {nom:"Asperges vertes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poulet aux petits pois et oignons nouveaux", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites dorer les morceaux de poulet dans un peu d'huile.", "Ajoutez les oignons nouveaux, puis le bouillon et le vin blanc.", "Laissez cuire 25 minutes à couvert, ajoutez les petits pois pour les 8 dernières minutes.", "Liez la sauce avec la crème et parsemez d'estragon."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Petits pois", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Vin blanc", qte:"10", unite:"cl", rayon:"Boissons"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Estragon", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Côtes d'agneau grillées et écrasé de fèves", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Écossez les fèves, ébouillantez-les 2 minutes et retirez la peau.", "Écrasez-les à la fourchette avec l'huile d'olive, la menthe et un peu de citron.", "Faites griller les côtes 3 minutes de chaque côté, elles doivent rester rosées.", "Salez à la sortie du feu et servez sur l'écrasé de fèves."], lien:"", ingredients:[
    {nom:"Côtes d'agneau", qte:"8", unite:"", rayon:"Boucherie"},
    {nom:"Fèves", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Wok de bœuf aux asperges et sésame", emoji:"🥬", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Coupez le bœuf en fines lanières et faites-le mariner 10 minutes dans la sauce soja et le gingembre.", "Saisissez la viande très rapidement dans le wok brûlant, réservez-la.", "Faites sauter les asperges en biseau 5 minutes avec l'ail.", "Remettez la viande, ajoutez l'huile de sésame et les graines, servez avec le riz."], lien:"", ingredients:[
    {nom:"Bœuf à griller", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Asperges vertes", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Salade de melon, féta et menthe", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez le melon en cubes et retirez les graines.", "Émiettez la féta par-dessus et ciselez la menthe.", "Arrosez d'un filet d'huile d'olive et donnez un tour de moulin à poivre.", "Servez bien frais, avec du pain de campagne."], lien:"", ingredients:[
    {nom:"Melon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Salade de pastèque, concombre et olives", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez la pastèque et le concombre en cubes de la même taille.", "Ajoutez les olives noires et l'oignon rouge en fines lamelles.", "Assaisonnez d'huile d'olive, de jus de citron et de poivre.", "Ajoutez la féta et la menthe juste avant de servir, très frais."], lien:"", ingredients:[
    {nom:"Pastèque", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tzatziki, pita et crudités", cuisine:"Grèce", emoji:"🥙", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Râpez le concombre, salez-le et laissez-le dégorger 15 minutes, puis pressez-le.", "Mélangez-le au yaourt avec l'ail écrasé, la menthe et un filet d'huile d'olive.", "Faites tiédir les pains pita et coupez les crudités en bâtonnets.", "Servez le tzatziki bien frais, à partager."], lien:"", ingredients:[
    {nom:"Concombre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Yaourt grec", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pain pita", qte:"4", unite:"", rayon:"Boulangerie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Panzanella aux tomates et pain grillé", cuisine:"Italie", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez le pain rassis en gros cubes et faites-le griller au four 10 minutes.", "Coupez les tomates en quartiers, salez-les et laissez-les rendre leur jus 10 minutes.", "Mélangez pain, tomates, concombre, oignon rouge, câpres et basilic.", "Arrosez d'huile d'olive et de vinaigre, laissez le pain s'imbiber 15 minutes."], lien:"", ingredients:[
    {nom:"Pain de campagne", qte:"300", unite:"g", rayon:"Boulangerie"},
    {nom:"Tomates", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Câpres", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de maïs, tomates et coriandre", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Égouttez le maïs et coupez les tomates en dés.", "Ajoutez l'oignon rouge émincé et le poivron en petits morceaux.", "Assaisonnez de jus de citron vert, d'huile d'olive et de cumin.", "Terminez par la coriandre ciselée et l'avocat en cubes."], lien:"", ingredients:[
    {nom:"Maïs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Avocat", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Salade de haricots blancs, tomates et basilic", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Rincez et égouttez soigneusement les haricots blancs.", "Coupez les tomates en quartiers et l'oignon rouge en fines lamelles.", "Assaisonnez d'huile d'olive, de vinaigre et d'ail écrasé.", "Ajoutez le basilic déchiré à la main au dernier moment."], lien:"", ingredients:[
    {nom:"Haricots blancs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de lentilles, tomates et concombre", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites cuire les lentilles 20 minutes à l'eau non salée, égouttez et laissez tiédir.", "Coupez les tomates et le concombre en petits dés.", "Préparez une vinaigrette bien moutardée avec l'huile d'olive et le vinaigre.", "Mélangez le tout avec les herbes et les oignons nouveaux."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de riz, maïs et poivrons", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites cuire le riz, rincez-le à l'eau froide et égouttez-le très bien.", "Coupez les poivrons en petits dés, égouttez le maïs.", "Mélangez le tout avec les olives, les cornichons et les œufs durs en quartiers.", "Assaisonnez d'une vinaigrette à la moutarde et laissez reposer au frais."], lien:"", ingredients:[
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Olives vertes", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Cornichons", qte:"6", unite:"", rayon:"Épicerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de pâtes, tomates cerises et olives", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire les pâtes, rincez-les à l'eau froide pour stopper la cuisson.", "Coupez les tomates cerises en deux et la mozzarella en cubes.", "Mélangez avec les olives, le basilic et l'huile d'olive.", "Laissez au frais une demi-heure : la salade est meilleure reposée."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates cerises", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Mozzarella", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Olives noires", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Brochettes de légumes grillés", emoji:"🍢", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les légumes en morceaux réguliers, de la taille d'une bouchée.", "Enfilez-les sur des brochettes en alternant les couleurs.", "Badigeonnez d'huile d'olive mélangée à l'ail écrasé et aux herbes.", "Faites griller 12 minutes en les retournant régulièrement."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aubergine", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Herbes de Provence", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Épis de maïs grillés au beurre d'herbes", emoji:"🌽", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire les épis 10 minutes à l'eau bouillante non salée.", "Mélangez le beurre mou avec l'ail, le persil et la ciboulette hachés.", "Faites griller les épis 5 minutes en les tournant, jusqu'à ce qu'ils colorent.", "Roulez-les dans le beurre d'herbes et servez tout de suite."], lien:"", ingredients:[
    {nom:"Maïs en épis", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Aubergines grillées à la crème de sésame", cuisine:"Liban", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les aubergines en tranches épaisses, badigeonnez-les d'huile.", "Faites-les griller 8 minutes de chaque côté, elles doivent être fondantes.", "Mélangez la purée de sésame avec le yaourt, le citron et l'ail.", "Nappez les aubergines de sauce et parsemez de persil et de graines de sésame."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Purée de sésame", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poivrons grillés marinés à l'huile d'olive", emoji:"🫑", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites griller les poivrons entiers au four, 30 minutes à 220 °C, jusqu'à ce que la peau noircisse.", "Enfermez-les 10 minutes dans un saladier couvert : la peau se retirera toute seule.", "Pelez-les, épépinez-les et coupez-les en lanières.", "Assaisonnez d'huile d'olive, d'ail et de vinaigre, laissez mariner quelques heures."], lien:"", ingredients:[
    {nom:"Poivron", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Tomates confites au four et burrata", emoji:"🍅", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les tomates en deux, posez-les sur une plaque côté chair vers le haut.", "Parsemez d'ail en lamelles, de thym, de sucre et d'huile d'olive.", "Enfournez 1 h 30 à 130 °C : elles doivent confire sans brûler.", "Servez tièdes avec la burrata, du basilic et du pain grillé."], lien:"", ingredients:[
    {nom:"Tomates", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Burrata", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Sucre", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Soupe froide de concombre au yaourt", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Épluchez les concombres et retirez les graines.", "Mixez-les avec le yaourt, l'ail, la menthe et un filet d'huile d'olive.", "Allongez d'un peu d'eau glacée si la soupe est trop épaisse.", "Laissez au frais au moins deux heures et servez avec des glaçons."], lien:"", ingredients:[
    {nom:"Concombre", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Yaourt grec", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Gaspacho de melon à la menthe", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Coupez le melon en morceaux et retirez les graines.", "Mixez-le avec le concombre, le jus de citron et une pointe de piment.", "Rectifiez avec un filet d'huile d'olive et un peu de sel.", "Servez très frais, avec de la menthe ciselée."], lien:"", ingredients:[
    {nom:"Melon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Piment", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Pizza aux légumes grillés et chèvre", emoji:"🍕", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites griller les légumes en tranches fines 10 minutes au four.", "Étalez la pâte, tartinez-la de coulis de tomate.", "Répartissez les légumes, la mozzarella et le chèvre en rondelles.", "Enfournez 15 minutes à 240 °C et ajoutez le basilic à la sortie."], lien:"", ingredients:[
    {nom:"Pâte à pizza", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Courgettes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aubergine", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coulis de tomate", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Mozzarella", qte:"125", unite:"g", rayon:"Crèmerie"},
    {nom:"Bûche de chèvre", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Quiche aux haricots verts et chèvre", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les haricots verts 10 minutes à l'eau bouillante salée, égouttez-les bien.", "Battez les œufs avec la crème, salez, poivrez.", "Étalez la pâte, répartissez les haricots et le chèvre en rondelles.", "Versez l'appareil et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Haricots verts", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Bûche de chèvre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Poêlée de maïs, poivrons et haricots noirs", cuisine:"Mexique", emoji:"🌽", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites revenir l'oignon et les poivrons en dés à feu vif.", "Ajoutez le maïs égoutté et laissez-le colorer sans remuer.", "Incorporez les haricots noirs, le cumin et le paprika fumé.", "Terminez par la coriandre et un filet de citron vert."], lien:"", ingredients:[
    {nom:"Maïs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Haricots noirs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Riz froid aux légumes croquants et sésame", emoji:"🍚", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites cuire le riz, rincez-le à l'eau froide et laissez-le égoutter longuement.", "Taillez les légumes en tout petits dés ou en bâtonnets.", "Préparez une sauce avec la sauce soja, l'huile de sésame, le citron et le gingembre râpé.", "Mélangez au dernier moment pour garder le croquant, parsemez de sésame."], lien:"", ingredients:[
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Boulgour aux tomates et pois chiches", emoji:"🍚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites gonfler le boulgour 10 minutes dans le bouillon chaud, à couvert.", "Coupez les tomates en dés et égouttez les pois chiches.", "Mélangez le tout avec l'huile d'olive, le citron et les épices.", "Ajoutez beaucoup de persil et de menthe, servez tiède ou froid."], lien:"", ingredients:[
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Galettes de maïs et courgette", emoji:"🧆", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Râpez la courgette, salez-la et pressez-la pour retirer l'eau.", "Mélangez-la au maïs, aux œufs, à la farine et aux herbes.", "Formez des galettes à la cuillère dans une poêle huilée bien chaude.", "Faites-les dorer 3 minutes de chaque côté et servez avec du fromage blanc citronné."], lien:"", ingredients:[
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Fromage blanc", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Omelette aux poivrons et oignons", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites fondre les oignons et les poivrons en lanières 15 minutes à feu doux.", "Battez les œufs à la fourchette, salez, poivrez.", "Versez-les sur les légumes et laissez prendre doucement.", "Roulez ou pliez l'omelette et servez avec une salade verte."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Laitue", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Bruschettas tomates-basilic", cuisine:"Italie", emoji:"🍞", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites griller les tranches de pain et frottez-les avec une gousse d'ail.", "Coupez les tomates en petits dés, salez-les et laissez-les s'égoutter 10 minutes.", "Mélangez-les à l'huile d'olive et au basilic déchiré.", "Garnissez le pain au dernier moment pour qu'il reste croustillant."], lien:"", ingredients:[
    {nom:"Pain de campagne", qte:"8", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Tomates", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Mozzarella", qte:"125", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Poke bowl végétarien au tofu mariné", cuisine:"Hawaï", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites mariner le tofu en cubes 20 minutes dans la sauce soja, le gingembre et l'huile de sésame.", "Faites cuire le riz et laissez-le tiédir.", "Préparez les garnitures : concombre, carotte, avocat, radis, maïs.", "Faites dorer le tofu à la poêle et dressez tout dans un grand bol."], lien:"", ingredients:[
    {nom:"Tofu ferme", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Avocat", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Maïs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Dorade grillée aux herbes", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Entaillez les dorades sur les deux faces et glissez-y des rondelles de citron.", "Badigeonnez-les d'huile d'olive, salez, poivrez, ajoutez le thym.", "Faites griller 8 minutes de chaque côté, à feu moyen pour ne pas brûler la peau.", "Servez avec une salade de tomates et du pain."], lien:"", ingredients:[
    {nom:"Dorades", qte:"2", unite:"", rayon:"Poissonnerie"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Brochettes de gambas à l'ail", emoji:"🍤", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Décortiquez les gambas en gardant la queue et enfilez-les sur des brochettes.", "Préparez une marinade avec l'huile, l'ail écrasé, le paprika et le citron.", "Laissez mariner 20 minutes au frais.", "Faites griller 3 minutes de chaque côté : elles doivent rester nacrées."], lien:"", ingredients:[
    {nom:"Gambas", qte:"800", unite:"g", rayon:"Poissonnerie"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Thon mi-cuit au sésame et salade croquante", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Roulez les pavés de thon dans les graines de sésame en pressant bien.", "Saisissez-les 1 minute par face dans une poêle très chaude : le cœur reste rouge.", "Préparez la salade : concombre, radis, carotte en fins rubans.", "Tranchez le thon et servez-le avec la sauce soja et le citron vert."], lien:"", ingredients:[
    {nom:"Pavés de thon", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Graines de sésame", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Bar à la plancha et légumes grillés", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les légumes en tranches, huilez-les et salez-les.", "Faites-les griller à la plancha ou à la poêle très chaude, en plusieurs fois.", "Saisissez les filets de bar côté peau 4 minutes, puis 1 minute de l'autre côté.", "Arrosez de jus de citron et servez tout de suite."], lien:"", ingredients:[
    {nom:"Filets de bar", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aubergine", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Sardines à l'escabèche", emoji:"🐟", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites dorer les sardines 2 minutes par face dans l'huile, puis déposez-les dans un plat creux.", "Dans la même poêle, faites revenir l'oignon, les carottes en rondelles et l'ail.", "Ajoutez le vinaigre, un peu d'eau, le laurier et le poivre, laissez frémir 5 minutes.", "Versez brûlant sur les sardines et laissez mariner au moins une nuit au frais."], lien:"", ingredients:[
    {nom:"Sardines", qte:"12", unite:"", rayon:"Poissonnerie"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Vinaigre de cidre", qte:"15", unite:"cl", rayon:"Épicerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"6", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tartare de thon au concombre", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez le thon très frais en petits cubes réguliers, au couteau.", "Ajoutez le concombre en tout petits dés et les oignons nouveaux ciselés.", "Assaisonnez de sauce soja, d'huile de sésame et de jus de citron vert.", "Dressez en cercle et servez aussitôt, bien frais."], lien:"", ingredients:[
    {nom:"Thon frais", qte:"500", unite:"g", rayon:"Poissonnerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Avocat", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Salade de thon frais, tomates et haricots verts", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire les haricots verts 10 minutes et rafraîchissez-les à l'eau glacée.", "Saisissez le thon 2 minutes par face et laissez-le tiédir avant de l'émietter.", "Coupez les tomates en quartiers et les œufs durs en deux.", "Assemblez avec les olives et une vinaigrette au citron."], lien:"", ingredients:[
    {nom:"Thon frais", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Haricots verts", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Olives noires", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Encornets grillés à la persillade", emoji:"🦑", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Nettoyez les encornets et fendez-les en deux dans la longueur.", "Faites-les griller 2 minutes par face à feu très vif, pas plus, sinon ils durcissent.", "Hachez ensemble l'ail et le persil et faites-les revenir 30 secondes dans l'huile.", "Versez la persillade sur les encornets et ajoutez le jus de citron."], lien:"", ingredients:[
    {nom:"Encornets", qte:"800", unite:"g", rayon:"Poissonnerie"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"2", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Papillote de dorade aux tomates cerises", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Posez chaque filet sur une feuille de papier cuisson.", "Répartissez les tomates cerises coupées en deux, les olives et les rondelles de citron.", "Arrosez d'huile d'olive, salez, poivrez, ajoutez du thym.", "Fermez les papillotes et enfournez 15 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Filets de dorade", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Tomates cerises", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de crevettes, melon et menthe", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez le melon en billes ou en cubes.", "Mélangez-le aux crevettes décortiquées et au concombre en dés.", "Préparez une sauce légère avec le yaourt, le citron vert et la menthe.", "Servez très frais, sur un lit de roquette."], lien:"", ingredients:[
    {nom:"Crevettes", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Melon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Roquette", qte:"100", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Moules à la provençale", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Grattez et rincez les moules, jetez celles qui restent ouvertes.", "Faites revenir l'oignon, l'ail et les tomates concassées dans l'huile d'olive.", "Ajoutez le vin blanc et les herbes, portez à ébullition.", "Versez les moules, couvrez et secouez la cocotte : elles sont prêtes dès qu'elles s'ouvrent."], lien:"", ingredients:[
    {nom:"Moules", qte:"2", unite:"kg", rayon:"Poissonnerie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de riz au maquereau et citron", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire le riz, rincez-le à l'eau froide et égouttez-le bien.", "Émiettez les filets de maquereau en retirant les arêtes.", "Ajoutez le concombre, les tomates cerises et les oignons nouveaux.", "Assaisonnez d'huile d'olive, de jus de citron et d'aneth."], lien:"", ingredients:[
    {nom:"Filets de maquereau", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poulet grillé mariné au yaourt et citron", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Mélangez le yaourt, le jus de citron, l'ail, le paprika et le cumin.", "Faites-y mariner les morceaux de poulet au moins deux heures au frais.", "Faites griller 20 minutes en retournant souvent, la marinade doit caraméliser.", "Servez avec une salade de concombre et du pain."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"8", unite:"", rayon:"Boucherie"},
    {nom:"Yaourt nature", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pain pita", qte:"4", unite:"", rayon:"Boulangerie"}]},

  { nom:"Brochettes de bœuf mariné aux poivrons", emoji:"🍢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez la viande en cubes de 3 cm et faites-la mariner 30 minutes dans l'huile, l'ail et le paprika.", "Enfilez-la sur des brochettes en alternant avec les poivrons et les oignons.", "Faites griller 4 minutes par face à feu vif.", "Laissez reposer deux minutes avant de servir, avec du riz."], lien:"", ingredients:[
    {nom:"Bœuf à griller", qte:"700", unite:"g", rayon:"Boucherie"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Côtes de porc grillées et salade de tomates", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Sortez la viande du réfrigérateur 20 minutes avant de la cuire.", "Huilez les côtes, poivrez-les et faites-les griller 5 minutes par face.", "Salez seulement à la sortie du gril.", "Servez avec les tomates en tranches, l'oignon rouge et beaucoup de basilic."], lien:"", ingredients:[
    {nom:"Côtes de porc", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Tomates", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de poulet, pêches et roquette", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites griller les blancs de poulet 6 minutes par face, laissez-les reposer puis tranchez-les.", "Coupez les pêches en quartiers et faites-les colorer 2 minutes à la poêle.", "Préparez une vinaigrette au miel et au vinaigre.", "Dressez la roquette, le poulet tiède, les pêches et les amandes grillées."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Pêches", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Roquette", qte:"150", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Miel", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Melon et jambon cru", emoji:"🍈", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les melons en quartiers et retirez les graines.", "Retirez l'écorce ou laissez-la, selon la façon dont vous servez.", "Disposez les tranches de jambon cru en vagues autour du melon.", "Donnez un tour de moulin à poivre et servez très frais."], lien:"", ingredients:[
    {nom:"Melon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Jambon cru", qte:"12", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Travers de porc laqués au barbecue", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Préparez la sauce : ketchup, miel, sauce soja, ail et paprika fumé.", "Badigeonnez les travers et laissez-les mariner au moins deux heures.", "Faites-les cuire 1 heure au four à 160 °C, couverts de papier aluminium.", "Terminez 10 minutes au gril ou au barbecue en les badigeonnant encore."], lien:"", ingredients:[
    {nom:"Travers de porc", qte:"1,2", unite:"kg", rayon:"Boucherie"},
    {nom:"Ketchup", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Miel", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Paprika", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Salade de pommes de terre au jambon et cornichons", emoji:"🥗", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites cuire les pommes de terre 20 minutes à l'eau salée, épluchez-les tièdes.", "Coupez-les en rondelles et arrosez-les tout de suite de vinaigre et de bouillon.", "Ajoutez le jambon en dés, les cornichons et l'oignon rouge.", "Liez avec la moutarde et l'huile, laissez reposer une heure avant de servir."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Jambon blanc", qte:"200", unite:"g", rayon:"Boucherie"},
    {nom:"Cornichons", qte:"8", unite:"", rayon:"Épicerie"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"10", unite:"cl", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Merguez grillées et légumes du soleil", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les légumes en gros morceaux et faites-les revenir 20 minutes avec l'ail et les herbes.", "Piquez à peine les merguez et faites-les griller 10 minutes en les tournant.", "Laissez les légumes finir de compoter pendant ce temps.", "Servez les merguez sur les légumes, avec de la semoule."], lien:"", ingredients:[
    {nom:"Merguez", qte:"8", unite:"", rayon:"Boucherie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aubergine", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Semoule de blé", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Herbes de Provence", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Asperges blanches, sauce mousseline", emoji:"🥬", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Épluchez les asperges blanches de la pointe vers le pied, sans appuyer.", "Faites-les cuire 15 minutes à l'eau bouillante salée, elles doivent rester fermes.", "Montez une sauce hollandaise au bain-marie avec les jaunes, le beurre fondu et le citron.", "Allégez-la avec la crème fouettée et servez les asperges tièdes."], lien:"", ingredients:[
    {nom:"Asperges blanches", qte:"1,5", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème liquide", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Tarte fine aux asperges et chèvre", emoji:"🥧", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Étalez la pâte feuilletée sur une plaque et piquez-la à la fourchette.", "Tartinez-la de fromage frais mélangé au zeste de citron.", "Rangez les asperges crues taillées en deux dans la longueur, arrosez d'huile.", "Enfournez 20 minutes à 200 °C et parsemez de chèvre à la sortie."], lien:"", ingredients:[
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Asperges vertes", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Fromage frais", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Bûche de chèvre", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Œufs brouillés aux asperges", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Coupez les asperges en petits tronçons et faites-les sauter 6 minutes au beurre.", "Battez les œufs et versez-les dans une casserole à feu très doux.", "Remuez sans arrêt jusqu'à ce qu'ils épaississent : ils doivent rester crémeux.", "Ajoutez la crème hors du feu, les asperges et la ciboulette, servez sur du pain grillé."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Asperges vertes", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"5", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Salade d'asperges, radis et parmesan", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Taillez les asperges crues en fins rubans à l'économe.", "Coupez les radis en rondelles très fines.", "Assaisonnez d'huile d'olive, de jus de citron, de sel et de poivre.", "Ajoutez des copeaux de parmesan et quelques pousses d'épinard."], lien:"", ingredients:[
    {nom:"Asperges vertes", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Pousses d'épinard", qte:"100", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Artichauts à la barigoule", emoji:"🌿", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Tournez les artichauts : retirez les feuilles dures et coupez les pointes.", "Faites revenir carottes, oignons et ail en petits dés dans l'huile d'olive.", "Ajoutez les artichauts, le vin blanc, le bouillon et le thym.", "Couvrez et laissez mijoter 30 minutes, jusqu'à ce que le cœur soit fondant."], lien:"", ingredients:[
    {nom:"Artichauts", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Bouillon de légumes", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade d'artichauts poivrade au citron", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Retirez les feuilles extérieures des petits artichauts et coupez-les en quatre.", "Plongez-les aussitôt dans de l'eau citronnée pour qu'ils ne noircissent pas.", "Émincez-les très finement à la mandoline ou au couteau.", "Assaisonnez d'huile d'olive, de citron et de parmesan, servez tout de suite."], lien:"", ingredients:[
    {nom:"Artichauts poivrade", qte:"12", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Roquette", qte:"100", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Artichauts farcis à la ricotta", emoji:"🌿", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les fonds d'artichauts 20 minutes à l'eau citronnée.", "Mélangez la ricotta avec les herbes, le parmesan, l'ail et un œuf.", "Garnissez les fonds de cette farce et posez-les dans un plat huilé.", "Enfournez 20 minutes à 190 °C, jusqu'à ce que le dessus soit doré."], lien:"", ingredients:[
    {nom:"Fonds d'artichauts", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poêlée d'artichauts et pommes de terre nouvelles", emoji:"🥔", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Coupez les artichauts en quartiers et les pommes de terre en deux.", "Faites-les revenir ensemble 10 minutes dans l'huile d'olive.", "Ajoutez l'ail en chemise, le thym et un fond d'eau, couvrez 20 minutes.", "Découvrez à la fin pour les laisser dorer et parsemez de persil."], lien:"", ingredients:[
    {nom:"Artichauts", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre nouvelles", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Velouté de fèves à la sarriette", emoji:"🥣", type:"leger", vegetarien:true, rapide:false, thermomix:true, saisons:["printemps"], etapes:["Écossez les fèves, ébouillantez-les 2 minutes et retirez la petite peau.", "Faites suer l'oignon dans le beurre, ajoutez les fèves et le bouillon.", "Laissez cuire 15 minutes avec la sarriette, puis mixez très finement.", "Ajoutez la crème et servez avec quelques fèves entières."], lien:"", ingredients:[
    {nom:"Fèves", qte:"1,5", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"70", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"},
    {nom:"Sarriette", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Petits pois à la française", emoji:"🫛", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites fondre le beurre dans une cocotte et ajoutez les oignons nouveaux entiers.", "Ajoutez les petits pois, la laitue coupée en lanières et un verre d'eau.", "Couvrez et laissez étuver 20 minutes à feu doux.", "Salez, poivrez, ajoutez une noix de beurre frais avant de servir."], lien:"", ingredients:[
    {nom:"Petits pois", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Laitue", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Cerfeuil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tartines de petits pois écrasés et féta", emoji:"🍞", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les petits pois 5 minutes et rafraîchissez-les.", "Écrasez-les grossièrement à la fourchette avec l'huile d'olive et le citron.", "Faites griller les tranches de pain et frottez-les d'ail.", "Garnissez, émiettez la féta et ajoutez la menthe."], lien:"", ingredients:[
    {nom:"Petits pois", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"8", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Wok de pois gourmands au gingembre", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Effilez les pois gourmands et coupez les carottes en fins bâtonnets.", "Faites chauffer le wok très fort et saisissez les légumes 4 minutes en remuant.", "Ajoutez l'ail et le gingembre râpé, puis la sauce soja.", "Terminez par l'huile de sésame et servez avec les nouilles."], lien:"", ingredients:[
    {nom:"Pois gourmands", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Nouilles chinoises", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tourte aux blettes et raisins secs", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites tomber le vert des blettes à la poêle et pressez-le bien.", "Mélangez-le aux raisins réhydratés, aux pignons, aux œufs et au parmesan.", "Garnissez un moule foncé de pâte, couvrez d'un second disque et soudez les bords.", "Enfournez 40 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Blettes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Pâte brisée", qte:"2", unite:"", rayon:"Boulangerie"},
    {nom:"Raisins secs", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Pignons de pin", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Cannellonis aux épinards et ricotta", emoji:"🍝", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["hiver", "printemps"], etapes:["Faites tomber les épinards avec l'ail, pressez-les et hachez-les.", "Mélangez-les à la ricotta, à un œuf et à la moitié du parmesan.", "Garnissez les cannellonis à la poche ou à la petite cuillère.", "Nappez de coulis de tomate et de crème, couvrez de parmesan, enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Cannellonis", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Épinards", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Coulis de tomate", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Soupe d'oseille et pommes de terre", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Faites fondre l'oseille lavée dans le beurre : elle réduit en quelques minutes.", "Ajoutez les pommes de terre en dés et le bouillon.", "Laissez cuire 20 minutes, puis mixez.", "Liez avec la crème et un jaune d'œuf hors du feu, l'acidité de l'oseille fait le reste."], lien:"", ingredients:[
    {nom:"Oseille", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"80", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Salade de cresson, œuf poché et croûtons", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites dorer les croûtons de pain à l'huile d'olive avec une gousse d'ail.", "Pochez les œufs 3 minutes dans de l'eau frémissante vinaigrée.", "Assaisonnez le cresson d'une vinaigrette bien moutardée.", "Dressez, posez l'œuf tiède et parsemez de croûtons."], lien:"", ingredients:[
    {nom:"Cresson", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Galettes de sarrasin aux épinards et chèvre", cuisine:"Bretagne", emoji:"🥞", type:"leger", vegetarien:true, rapide:false, thermomix:true, saisons:["hiver", "printemps"], etapes:["Mélangez la farine de sarrasin, l'eau et le sel, laissez reposer la pâte une heure.", "Faites tomber les épinards avec l'ail et pressez-les.", "Cuisez les galettes une par une dans une poêle très chaude, à peine huilée.", "Garnissez d'épinards, de chèvre et d'un œuf, repliez les bords et laissez fondre."], lien:"", ingredients:[
    {nom:"Farine de sarrasin", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Épinards", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Bûche de chèvre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Pâtes au pesto d'ail des ours", emoji:"🍝", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Lavez et séchez les feuilles d'ail des ours.", "Mixez-les avec les pignons, le parmesan et l'huile d'olive jusqu'à obtenir un pesto.", "Faites cuire les pâtes et gardez un peu d'eau de cuisson.", "Mélangez hors du feu avec le pesto détendu d'une cuillère d'eau de cuisson."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Ail des ours", qte:"150", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pignons de pin", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"10", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Navets glacés au miel et thym", emoji:"🥕", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Épluchez les navets nouveaux en gardant un bout de fane.", "Mettez-les dans une sauteuse avec le beurre, le miel et un fond d'eau.", "Couvrez et laissez cuire 15 minutes à feu moyen.", "Découvrez et laissez le jus réduire en sirop, en les roulant dedans."], lien:"", ingredients:[
    {nom:"Navets nouveaux", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Carottes nouvelles rôties au cumin", emoji:"🥕", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Brossez les carottes sans les éplucher et coupez-les en deux dans la longueur.", "Mélangez-les à l'huile d'olive, au cumin, au sel et au poivre.", "Enfournez 25 minutes à 210 °C, jusqu'à ce qu'elles caramélisent.", "Servez avec le yaourt citronné et la coriandre."], lien:"", ingredients:[
    {nom:"Carottes nouvelles", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Betteraves rôties au miel et noisettes", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Enveloppez les betteraves crues dans du papier aluminium et enfournez 1 heure à 200 °C.", "Laissez tiédir, pelez-les et coupez-les en quartiers.", "Arrosez de miel, de vinaigre et d'huile de noix.", "Parsemez de noisettes concassées et de fromage frais émietté."], lien:"", ingredients:[
    {nom:"Betteraves crues", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Noisettes", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Fromage frais", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de noix", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Roquette", qte:"100", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Chou-rave rémoulade", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Épluchez les choux-raves et râpez-les en gros brins.", "Mélangez la moutarde, le yaourt, le citron et un peu d'huile.", "Enrobez le chou-rave de sauce et laissez reposer 15 minutes.", "Ajoutez la pomme en bâtonnets et beaucoup de ciboulette."], lien:"", ingredients:[
    {nom:"Chou-rave", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile de tournesol", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Fricassée de légumes primeurs à la crème", emoji:"🥕", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Coupez les légumes en morceaux de taille égale.", "Faites-les revenir au beurre 5 minutes, puis ajoutez un fond de bouillon.", "Couvrez et laissez cuire 12 minutes : ils doivent rester légèrement croquants.", "Versez la crème, laissez épaissir et ajoutez les herbes fraîches."], lien:"", ingredients:[
    {nom:"Carottes nouvelles", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Asperges vertes", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Bouillon de légumes", qte:"15", unite:"cl", rayon:"Épicerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Cerfeuil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de pommes de terre nouvelles aux herbes", emoji:"🥔", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Coupez les pommes de terre nouvelles en rondelles sans les éplucher.", "Rangez-les dans un plat frotté d'ail, en couches, avec les herbes.", "Versez la crème allongée de lait, salez, poivrez.", "Enfournez 45 minutes à 180 °C et laissez reposer 10 minutes avant de servir."], lien:"", ingredients:[
    {nom:"Pommes de terre nouvelles", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Lait", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Emmental", qte:"60", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Poêlée de grenailles à l'ail et au romarin", emoji:"🥔", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Lavez les grenailles et coupez en deux les plus grosses.", "Faites-les cuire 12 minutes à couvert dans l'huile d'olive, à feu moyen.", "Ajoutez l'ail en chemise et le romarin, découvrez et laissez dorer.", "Salez à la fleur de sel au moment de servir."], lien:"", ingredients:[
    {nom:"Pommes de terre nouvelles", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"6", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Romarin", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pâtes primavera aux légumes nouveaux", cuisine:"Italie", emoji:"🍝", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Taillez tous les légumes en petits morceaux réguliers.", "Faites-les sauter 8 minutes à l'huile d'olive, en gardant du croquant.", "Faites cuire les pâtes et réunissez-les aux légumes avec un peu d'eau de cuisson.", "Ajoutez le parmesan, le basilic et le zeste de citron hors du feu."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Asperges vertes", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes nouvelles", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Risotto à l'ail des ours", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["printemps"], etapes:["Faites revenir l'échalote dans le beurre, ajoutez le riz et nacrez-le.", "Versez le bouillon chaud louche par louche pendant vingt minutes.", "Mixez l'ail des ours avec un peu d'huile d'olive.", "Incorporez cette purée verte et le parmesan hors du feu."], lien:"", ingredients:[
    {nom:"Riz à risotto", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Ail des ours", qte:"150", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Lasagnes aux asperges et ricotta", emoji:"🍝", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites sauter les asperges en tronçons 6 minutes, réservez les pointes.", "Mélangez la ricotta avec un œuf, du parmesan et du zeste de citron.", "Préparez une béchamel légère avec le beurre, la farine et le lait.", "Alternez plaques, asperges, ricotta et béchamel, puis enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Plaques de lasagnes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Asperges vertes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Riz aux petits pois et citron confit", emoji:"🍚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites revenir l'oignon nouveau, ajoutez le riz et remuez une minute.", "Versez le bouillon, couvrez et laissez cuire 12 minutes.", "Ajoutez les petits pois pour les 5 dernières minutes.", "Hors du feu, incorporez le citron confit haché et beaucoup d'herbes."], lien:"", ingredients:[
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Petits pois", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"60", unite:"cl", rayon:"Épicerie"},
    {nom:"Citron confit", qte:"1", unite:"", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Nouilles sautées aux légumes de printemps", emoji:"🍜", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les nouilles et rincez-les à l'eau froide.", "Saisissez les asperges, les pois gourmands et les carottes au wok, très fort.", "Ajoutez l'ail, le gingembre, la sauce soja et un peu de bouillon.", "Versez les nouilles, faites sauter 2 minutes et terminez par le sésame."], lien:"", ingredients:[
    {nom:"Nouilles chinoises", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Asperges vertes", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pois gourmands", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pâtes au pesto de roquette et noix", emoji:"🍝", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Mixez la roquette avec les noix, le parmesan, l'ail et l'huile d'olive.", "Faites cuire les pâtes et gardez une louche d'eau de cuisson.", "Détendez le pesto avec cette eau pour qu'il nappe bien.", "Mélangez hors du feu et servez avec quelques feuilles entières."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Roquette", qte:"150", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"10", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Cake salé aux asperges et féta", emoji:"🥧", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Coupez les asperges en tronçons et faites-les sauter 5 minutes.", "Mélangez farine et levure, ajoutez les œufs, le lait et l'huile.", "Incorporez les asperges, la féta en dés et la menthe.", "Enfournez 45 minutes à 180 °C dans un moule à cake."], lien:"", ingredients:[
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"8", unite:"cl", rayon:"Épicerie"},
    {nom:"Asperges vertes", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Quiche aux blettes et pignons", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Séparez le vert des côtes ; coupez les côtes en dés et faites-les revenir 10 minutes.", "Ajoutez le vert ciselé et laissez-le tomber, puis égouttez.", "Battez les œufs avec la crème, salez, poivrez, ajoutez de la muscade.", "Garnissez la pâte, parsemez de pignons et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Blettes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Pignons de pin", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noix de muscade", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Pissaladière aux oignons nouveaux", cuisine:"Provence", emoji:"🍕", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Émincez les oignons et faites-les fondre 40 minutes à feu très doux, sans les colorer.", "Étalez la pâte sur une plaque et répartissez la fondue d'oignons.", "Décorez d'olives noires et de brins de thym.", "Enfournez 20 minutes à 210 °C et servez tiède."], lien:"", ingredients:[
    {nom:"Pâte à pizza", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Oignons nouveaux", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Œufs cocotte aux petits pois et menthe", emoji:"🥚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les petits pois 5 minutes et écrasez-les grossièrement avec la menthe.", "Répartissez-les dans quatre ramequins beurrés.", "Cassez un œuf par ramequin, ajoutez une cuillère de crème, salez, poivrez.", "Faites cuire 12 minutes au bain-marie à 180 °C."], lien:"", ingredients:[
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Petits pois", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"40", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Omelette aux fanes et herbes du jardin", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Lavez soigneusement les fanes de radis et retirez les tiges dures.", "Faites-les fondre 5 minutes au beurre avec l'oignon nouveau.", "Battez les œufs avec les herbes ciselées, salez, poivrez.", "Versez sur les fanes et laissez prendre à feu doux, l'omelette doit rester baveuse."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Fanes de radis", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Œufs durs sauce cressonnière", emoji:"🥚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les œufs 10 minutes, rafraîchissez-les et écalez-les.", "Mixez le cresson cru avec le fromage blanc, la moutarde et le citron.", "Nappez les œufs coupés en deux de cette sauce verte.", "Servez avec des pommes de terre tièdes et beaucoup de ciboulette."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Cresson", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Fromage blanc", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre nouvelles", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Soupe printanière aux légumes nouveaux", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Coupez tous les légumes en petits dés réguliers.", "Faites-les suer 5 minutes au beurre sans les colorer.", "Mouillez avec le bouillon et laissez cuire 15 minutes seulement.", "Ajoutez les petits pois en fin de cuisson et beaucoup de cerfeuil : la soupe reste verte et croquante."], lien:"", ingredients:[
    {nom:"Carottes nouvelles", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Poireau", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"},
    {nom:"Cerfeuil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Bouillon de légumes nouveaux et vermicelles", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Taillez les légumes en très fins bâtonnets.", "Portez le bouillon à frémissement et jetez-y les légumes 5 minutes.", "Ajoutez les vermicelles et laissez cuire 3 minutes de plus.", "Servez aussitôt avec les herbes fraîches et un filet de citron."], lien:"", ingredients:[
    {nom:"Bouillon de légumes", qte:"1,2", unite:"l", rayon:"Épicerie"},
    {nom:"Carottes nouvelles", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pois gourmands", qte:"150", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Vermicelles", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Filet de lieu à l'oseille", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites fondre l'oseille dans le beurre : elle devient une purée en trois minutes.", "Ajoutez la crème et laissez réduire doucement.", "Saisissez les filets de lieu 4 minutes par face dans une poêle chaude.", "Nappez de sauce à l'oseille et servez avec du riz."], lien:"", ingredients:[
    {nom:"Filets de lieu", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Oseille", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Sole meunière et pommes vapeur", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Farinez légèrement les soles et tapotez-les pour retirer l'excédent.", "Faites-les cuire 4 minutes par face dans le beurre mousseux.", "Arrosez-les de beurre pendant la cuisson et ajoutez le jus de citron à la fin.", "Servez avec les pommes de terre cuites à la vapeur et le persil."], lien:"", ingredients:[
    {nom:"Filets de sole", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Farine", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Beurre", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre nouvelles", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Cabillaud et fondue de poireaux nouveaux", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Émincez les poireaux et faites-les fondre 20 minutes au beurre, à couvert.", "Ajoutez la crème et laissez épaissir.", "Posez les dos de cabillaud sur la fondue, couvrez et laissez cuire 10 minutes à feu doux.", "Terminez par un tour de moulin et un peu d'aneth."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Poireaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Saumon en croûte d'herbes et asperges", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Mixez la chapelure avec le persil, l'aneth, le zeste de citron et un peu de beurre.", "Tassez cette croûte sur les pavés de saumon.", "Disposez les asperges autour, arrosez d'huile d'olive.", "Enfournez 15 minutes à 200 °C : la croûte doit dorer sans sécher le poisson."], lien:"", ingredients:[
    {nom:"Pavés de saumon", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Asperges vertes", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Chapelure", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Sardines marinées au citron et aux herbes", emoji:"🐟", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps", "ete"], etapes:["Demandez à votre poissonnier de lever les filets, ou faites-le à la main.", "Disposez-les à plat dans un plat creux et couvrez-les de jus de citron.", "Laissez mariner 2 heures au frais : la chair blanchit toute seule.", "Égouttez, arrosez d'huile d'olive et parsemez d'échalote et d'herbes."], lien:"", ingredients:[
    {nom:"Sardines", qte:"16", unite:"", rayon:"Poissonnerie"},
    {nom:"Citron", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Brochettes de saumon à l'aneth", emoji:"🍢", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Coupez le saumon en cubes de 3 cm et enfilez-les sur des brochettes avec des rondelles de citron.", "Badigeonnez d'huile d'olive et d'aneth haché, poivrez.", "Faites griller 3 minutes par face : le cœur doit rester légèrement rosé.", "Servez avec le boulgour et un yaourt citronné."], lien:"", ingredients:[
    {nom:"Saumon", qte:"700", unite:"g", rayon:"Poissonnerie"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Rillettes de truite fumée et crudités", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Émiettez la truite fumée à la fourchette.", "Mélangez-la au fromage frais, au citron, à l'échalote et à la ciboulette.", "Poivrez généreusement, salez à peine : le poisson fumé l'est déjà.", "Servez frais avec des bâtonnets de crudités et du pain grillé."], lien:"", ingredients:[
    {nom:"Truite fumée", qte:"250", unite:"g", rayon:"Poissonnerie"},
    {nom:"Fromage frais", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Salade de lentilles au saumon fumé", emoji:"🥗", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les lentilles 20 minutes à l'eau non salée, égouttez et laissez tiédir.", "Assaisonnez-les tièdes d'une vinaigrette à la moutarde et à l'échalote.", "Ajoutez le saumon fumé en lanières et les oignons nouveaux.", "Terminez par l'aneth et une cuillère de crème citronnée."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Saumon fumé", qte:"200", unite:"g", rayon:"Poissonnerie"},
    {nom:"Échalote", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"5", unite:"cl", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Épaule d'agneau confite aux légumes nouveaux", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites colorer l'épaule sur toutes ses faces dans une cocotte.", "Ajoutez l'ail, le thym, le vin blanc et un verre d'eau.", "Couvrez et enfournez 3 heures à 150 °C, en retournant la viande à mi-cuisson.", "Ajoutez les légumes nouveaux la dernière heure : la viande se détache à la cuillère."], lien:"", ingredients:[
    {nom:"Épaule d'agneau", qte:"1,5", unite:"kg", rayon:"Boucherie"},
    {nom:"Carottes nouvelles", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre nouvelles", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"tête(s)", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Thym", qte:"4", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Lapin à la moutarde et petits pois", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Badigeonnez les morceaux de lapin de moutarde et faites-les dorer.", "Ajoutez les échalotes, le vin blanc et le bouillon.", "Couvrez et laissez mijoter 45 minutes à feu doux.", "Ajoutez les petits pois 10 minutes avant la fin et liez la sauce avec la crème."], lien:"", ingredients:[
    {nom:"Lapin", qte:"1", unite:"", rayon:"Boucherie"},
    {nom:"Moutarde", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Échalote", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Bouillon de volaille", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Petits pois", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Escalopes de veau à l'oseille", emoji:"🥩", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites dorer les escalopes 3 minutes par face et réservez-les au chaud.", "Jetez l'oseille dans la poêle : elle fond en deux minutes.", "Ajoutez la crème et déglacez avec un peu de bouillon.", "Remettez la viande une minute dans la sauce et servez avec le riz."], lien:"", ingredients:[
    {nom:"Escalopes de veau", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Oseille", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Bouillon de volaille", qte:"10", unite:"cl", rayon:"Épicerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poulet aux morilles et asperges", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites tremper les morilles séchées 30 minutes dans de l'eau tiède, puis rincez-les bien.", "Faites dorer les blancs de poulet et réservez-les.", "Faites revenir les morilles avec l'échalote, versez le vin jaune et la crème.", "Remettez le poulet, laissez mijoter 15 minutes et ajoutez les asperges cuites."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Morilles", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Asperges vertes", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Crème fraîche", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Émincé de dinde aux petits pois et estragon", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Coupez la dinde en lanières et faites-la saisir 4 minutes à feu vif.", "Ajoutez les oignons nouveaux et déglacez au bouillon.", "Ajoutez les petits pois, couvrez et laissez cuire 8 minutes.", "Liez avec la crème et l'estragon ciselé, servez avec des pâtes."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Petits pois", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"15", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Estragon", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pâtes", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Rôti de porc aux navets nouveaux", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites colorer le rôti sur toutes ses faces dans une cocotte.", "Ajoutez les oignons, le thym et un verre de bouillon.", "Enfournez 1 heure à 180 °C, en arrosant régulièrement.", "Ajoutez les navets glacés au miel pour les 25 dernières minutes."], lien:"", ingredients:[
    {nom:"Rôti de porc", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Navets nouveaux", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"25", unite:"cl", rayon:"Épicerie"},
    {nom:"Miel", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Boulettes de veau à la menthe et petits pois", emoji:"🧆", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Mélangez la viande hachée avec l'œuf, la chapelure, la menthe et l'oignon râpé.", "Formez des boulettes et faites-les dorer à la poêle.", "Ajoutez le bouillon et les petits pois, couvrez et laissez mijoter 15 minutes.", "Servez avec la semoule et un yaourt à la menthe."], lien:"", ingredients:[
    {nom:"Veau haché", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Petits pois", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"25", unite:"cl", rayon:"Épicerie"},
    {nom:"Semoule de blé", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"}]},

  { nom:"Salade de poulet, asperges et estragon", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites pocher les blancs de poulet 15 minutes dans un bouillon frémissant.", "Faites cuire les asperges 8 minutes et rafraîchissez-les.", "Émiettez le poulet tiède et mélangez-le aux asperges et aux pousses.", "Assaisonnez d'une sauce au yaourt, moutarde, citron et estragon."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Asperges vertes", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pousses d'épinard", qte:"100", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Estragon", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"50", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Blanquette d'agneau aux légumes primeurs", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites revenir la viande sans la colorer, couvrez d'eau et écumez.", "Ajoutez un oignon piqué, du thym et du laurier, laissez mijoter 1 h 15.", "Ajoutez carottes et navets nouveaux pour les 25 dernières minutes.", "Liez le bouillon avec la crème et le jaune d'œuf, hors du feu, et ajoutez le citron."], lien:"", ingredients:[
    {nom:"Épaule d'agneau", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Carottes nouvelles", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Brochettes d'agneau à la menthe et au citron", emoji:"🍢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Coupez l'agneau en cubes et laissez-le mariner 1 heure avec l'huile, le citron, l'ail et la menthe.", "Enfilez-le sur des brochettes avec des morceaux d'oignon nouveau.", "Faites griller 4 minutes par face, la viande doit rester rosée.", "Servez avec la semoule et un yaourt à la menthe."], lien:"", ingredients:[
    {nom:"Gigot d'agneau", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Oignons nouveaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Semoule de blé", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Quiche aux poireaux nouveaux et saumon fumé", emoji:"🥧", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Émincez les poireaux et faites-les fondre 20 minutes au beurre.", "Battez les œufs avec la crème, poivrez, ne salez presque pas.", "Étalez la pâte, répartissez les poireaux et le saumon fumé en lanières.", "Versez l'appareil et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Poireaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Saumon fumé", qte:"150", unite:"g", rayon:"Poissonnerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Gratin d'asperges et pommes de terre nouvelles", emoji:"🧀", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les pommes de terre 15 minutes à l'eau, coupez-les en rondelles.", "Faites blanchir les asperges 6 minutes.", "Alternez les deux dans un plat beurré, versez la crème et le lait.", "Couvrez de comté râpé et enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Asperges vertes", qte:"700", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre nouvelles", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Lait", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Comté", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Salade de pois chiches, radis et herbes", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Rincez les pois chiches et égouttez-les bien.", "Coupez les radis en rondelles et les oignons nouveaux en fines lamelles.", "Assaisonnez d'huile d'olive, de citron et de cumin.", "Ajoutez une grande quantité de persil et de menthe hachés."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Radis", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Curry de légumes nouveaux au lait de coco", cuisine:"Inde", emoji:"🍛", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Faites revenir l'oignon, l'ail et le gingembre avec les épices.", "Ajoutez les carottes et les navets en morceaux, couvrez de lait de coco.", "Laissez mijoter 15 minutes, puis ajoutez les petits pois et les asperges.", "Poursuivez 6 minutes et terminez par la coriandre et le citron vert."], lien:"", ingredients:[
    {nom:"Carottes nouvelles", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Asperges vertes", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curry", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tarte aux poireaux nouveaux et comté", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Émincez les poireaux et faites-les fondre 20 minutes à couvert.", "Battez les œufs avec la crème et la moutarde.", "Étalez la pâte, garnissez de poireaux et de comté râpé.", "Versez l'appareil et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Poireaux", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Comté", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Poêlée d'épinards, pois chiches et citron", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver", "printemps"], etapes:["Faites dorer les pois chiches égouttés avec le cumin et le paprika.", "Ajoutez l'ail en lamelles, puis les épinards par poignées.", "Laissez-les tomber deux minutes à feu vif.", "Terminez par le jus de citron, le zeste et un filet d'huile d'olive."], lien:"", ingredients:[
    {nom:"Épinards", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade tiède de lentilles et légumes primeurs", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les lentilles 20 minutes à l'eau non salée.", "Faites sauter les carottes et les navets nouveaux 10 minutes à l'huile d'olive.", "Mélangez le tout tiède avec une vinaigrette moutardée.", "Ajoutez les oignons nouveaux, le persil et un peu de vinaigre de cidre."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes nouvelles", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Riz cantonais aux légumes de printemps", emoji:"🍚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire le riz la veille si possible : il saute mieux quand il est froid.", "Faites une omelette fine, roulez-la et coupez-la en lanières.", "Saisissez les légumes au wok, ajoutez le riz et faites-le sauter à feu vif.", "Incorporez l'omelette, la sauce soja et les oignons nouveaux."], lien:"", ingredients:[
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Petits pois", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Gnocchis à la crème d'oseille", emoji:"🥔", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites dorer les gnocchis à la poêle dans le beurre.", "Faites fondre l'oseille dans une casserole, elle réduit très vite.", "Ajoutez la crème et laissez épaissir deux minutes.", "Mélangez aux gnocchis et servez avec du parmesan."], lien:"", ingredients:[
    {nom:"Gnocchis", qte:"600", unite:"g", rayon:"Épicerie"},
    {nom:"Oseille", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Wrap au poulet, crudités et sauce yaourt", emoji:"🌯", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites griller les blancs de poulet et coupez-les en lanières.", "Préparez la sauce : yaourt, citron, ail, menthe, sel et poivre.", "Faites tiédir les galettes de blé quelques secondes à la poêle.", "Garnissez de salade, radis, carotte râpée, poulet et sauce, puis roulez serré."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Galettes de blé", qte:"8", unite:"", rayon:"Boulangerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Laitue", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Velouté de châtaignes", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites suer l'oignon et le céleri en dés dans le beurre.", "Ajoutez les châtaignes cuites et le bouillon, laissez mijoter 20 minutes.", "Mixez très finement : la soupe doit être veloutée, presque sucrée.", "Ajoutez la crème, rectifiez le sel et servez avec quelques éclats de châtaigne."], lien:"", ingredients:[
    {nom:"Châtaignes cuites", qte:"500", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Céleri branche", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"80", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Risotto aux cèpes", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne"], etapes:["Faites tremper les cèpes séchés 20 minutes dans l'eau tiède, gardez l'eau de trempage filtrée.", "Faites revenir l'échalote, nacrez le riz, puis versez le bouillon louche par louche.", "Ajoutez les cèpes et leur eau de trempage à mi-cuisson.", "Hors du feu, incorporez le beurre froid et le parmesan, et laissez reposer deux minutes."], lien:"", ingredients:[
    {nom:"Riz à risotto", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Cèpes séchés", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poêlée de girolles à la crème et persil", emoji:"🍄", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne"], etapes:["Nettoyez les girolles au pinceau, sans les passer sous l'eau.", "Faites-les sauter à feu vif dans le beurre : elles rendent leur eau, laissez-la s'évaporer.", "Ajoutez l'échalote et l'ail, puis la crème, et laissez épaissir deux minutes.", "Parsemez de persil et servez sur du pain grillé ou avec des pâtes."], lien:"", ingredients:[
    {nom:"Girolles", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Œufs brouillés aux cèpes", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne"], etapes:["Faites sauter les cèpes en lamelles à feu vif, salez-les en fin de cuisson.", "Battez les œufs et faites-les cuire à feu très doux, en remuant sans arrêt.", "Retirez du feu quand ils sont encore crémeux et ajoutez la crème.", "Servez avec les cèpes et beaucoup de ciboulette, sur du pain grillé."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Cèpes", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"5", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Tartines de champignons à l'ail et fromage frais", emoji:"🍞", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne"], etapes:["Faites sauter les champignons émincés à feu vif avec l'ail.", "Laissez l'eau s'évaporer complètement, salez et poivrez.", "Faites griller le pain et tartinez-le de fromage frais citronné.", "Garnissez de champignons chauds et de persil."], lien:"", ingredients:[
    {nom:"Champignons de Paris", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"8", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Fromage frais", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tourte aux champignons et pommes de terre", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites sauter les champignons avec l'échalote jusqu'à évaporation complète.", "Coupez les pommes de terre crues en rondelles très fines.", "Garnissez un moule de pâte, alternez pommes de terre et champignons, versez la crème.", "Couvrez d'un second disque, soudez, dorez à l'œuf et enfournez 45 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"2", unite:"", rayon:"Boulangerie"},
    {nom:"Champignons de Paris", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade tiède de lentilles et champignons", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les lentilles 20 minutes à l'eau non salée avec le thym.", "Faites sauter les champignons à feu vif dans l'huile.", "Mélangez le tout tiède avec une vinaigrette moutardée et l'échalote hachée.", "Ajoutez les noix concassées et le persil au moment de servir."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de noix", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"1", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de courge muscade au comté", emoji:"🧀", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez la courge en tranches fines, inutile de l'éplucher si la peau est tendre.", "Rangez-la dans un plat beurré avec l'oignon émincé et la sauge.", "Versez la crème allongée de lait, salez, poivrez, couvrez de comté.", "Enfournez 45 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Courge muscade", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Comté", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Lait", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauge", qte:"4", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Lasagnes au potimarron et sauge", emoji:"🍝", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne"], etapes:["Faites rôtir le potimarron en cubes 25 minutes, puis écrasez-le avec la sauge.", "Préparez une béchamel avec le beurre, la farine et le lait.", "Alternez plaques de lasagnes, purée de potimarron, béchamel et parmesan.", "Enfournez 35 minutes à 180 °C et laissez reposer 10 minutes."], lien:"", ingredients:[
    {nom:"Plaques de lasagnes", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Potimarron", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"60", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Sauge", qte:"6", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Noix de muscade", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Risotto à la courge et au gorgonzola", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne"], etapes:["Faites rôtir la moitié de la courge en cubes ; râpez l'autre moitié.", "Nacrez le riz avec l'échalote, ajoutez la courge râpée puis le bouillon, louche par louche.", "Incorporez le gorgonzola hors du feu : il fond et lie le risotto.", "Ajoutez les cubes rôtis et quelques noix concassées."], lien:"", ingredients:[
    {nom:"Riz à risotto", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Courge butternut", qte:"700", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Gorgonzola", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Noix", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Gnocchis de courge à la sauge", emoji:"🥔", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne"], etapes:["Faites cuire la courge au four 40 minutes, écrasez-la et laissez-la sécher à feu doux.", "Mélangez-la à la farine, à l'œuf et au parmesan, sans trop travailler la pâte.", "Formez des boudins, coupez des gnocchis et pochez-les jusqu'à ce qu'ils remontent.", "Faites-les sauter dans le beurre avec la sauge."], lien:"", ingredients:[
    {nom:"Courge butternut", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Sauge", qte:"8", unite:"feuille(s)", rayon:"Fruits & légumes"}]},

  { nom:"Galettes de potimarron et flocons d'avoine", emoji:"🧆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["automne"], etapes:["Faites cuire le potimarron à la vapeur et écrasez-le.", "Mélangez-le aux flocons d'avoine, aux œufs, à l'oignon râpé et aux épices.", "Laissez reposer 15 minutes pour que les flocons gonflent.", "Formez des galettes et faites-les dorer 4 minutes de chaque côté."], lien:"", ingredients:[
    {nom:"Potimarron", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Flocons d'avoine", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Fromage blanc", qte:"200", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Salade de potimarron rôti et féta", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["automne"], etapes:["Coupez le potimarron en quartiers, sans l'éplucher, et faites-le rôtir 30 minutes à 200 °C.", "Laissez tiédir et mélangez-le à la mâche ou à la roquette.", "Ajoutez la féta émiettée et les graines de courge grillées.", "Assaisonnez d'huile de noix, de vinaigre et d'un peu de miel."], lien:"", ingredients:[
    {nom:"Potimarron", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Mâche", qte:"150", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Graines de courge", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Miel", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de noix", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pizza à la courge, gorgonzola et noix", emoji:"🍕", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne"], etapes:["Taillez la courge en lamelles très fines à l'économe.", "Étalez la pâte et tartinez-la de crème fraîche poivrée.", "Répartissez la courge crue, le gorgonzola en morceaux et les noix.", "Enfournez 15 minutes à 240 °C et ajoutez quelques feuilles de roquette à la sortie."], lien:"", ingredients:[
    {nom:"Pâte à pizza", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Courge butternut", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Gorgonzola", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Noix", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Roquette", qte:"50", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Chou rouge braisé aux pommes", emoji:"🥬", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Émincez le chou rouge finement et les pommes en quartiers.", "Faites revenir l'oignon dans le beurre, ajoutez le chou et les pommes.", "Versez le vinaigre et un peu d'eau, ajoutez le laurier et une cuillère de sucre.", "Couvrez et laissez braiser 45 minutes à feu doux, en remuant de temps en temps."], lien:"", ingredients:[
    {nom:"Chou rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vinaigre de cidre", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sucre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Poêlée de choux de Bruxelles aux marrons", emoji:"🌰", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les choux en deux et faites-les blanchir 5 minutes.", "Faites-les dorer côté plat dans le beurre, sans les remuer.", "Ajoutez les marrons cuits et laissez colorer ensemble.", "Terminez par une cuillère de miel, du poivre et un peu de vinaigre."], lien:"", ingredients:[
    {nom:"Choux de Bruxelles", qte:"700", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Châtaignes cuites", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Miel", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Céleri rémoulade", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Épluchez le céleri-rave et râpez-le en gros brins.", "Arrosez-le tout de suite de jus de citron pour qu'il ne noircisse pas.", "Mélangez la mayonnaise avec la moutarde, le yaourt et du poivre.", "Enrobez le céleri et laissez reposer une heure au frais avant de servir."], lien:"", ingredients:[
    {nom:"Céleri-rave", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Mayonnaise", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Moutarde", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de céleri-rave et pommes de terre", emoji:"🧀", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez le céleri-rave et les pommes de terre en rondelles fines.", "Frottez le plat d'ail, beurrez-le, rangez les légumes en couches.", "Versez la crème et le lait, râpez un peu de muscade.", "Enfournez 50 minutes à 180 °C et laissez dorer sous le gril à la fin."], lien:"", ingredients:[
    {nom:"Céleri-rave", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Lait", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Emmental", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Noix de muscade", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Panais rôtis au miel et au thym", emoji:"🥕", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les panais en bâtonnets réguliers.", "Mélangez-les à l'huile d'olive, au miel, au thym, au sel et au poivre.", "Étalez-les sur une plaque sans les entasser.", "Enfournez 30 minutes à 200 °C en remuant à mi-cuisson : ils doivent caraméliser."], lien:"", ingredients:[
    {nom:"Panais", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"4", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Noisettes", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Crumble salé de légumes racines", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les légumes en cubes et faites-les revenir 15 minutes avec le thym.", "Ajoutez la crème et versez le tout dans un plat à gratin.", "Préparez la pâte à crumble du bout des doigts : farine, beurre froid, parmesan et noisettes.", "Émiettez-la sur les légumes et enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Panais", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Céleri-rave", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Noisettes", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tarte aux poires et roquefort", emoji:"🥧", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne"], etapes:["Étalez la pâte feuilletée et piquez-la à la fourchette.", "Répartissez les poires en lamelles fines et le roquefort émietté.", "Parsemez de noix concassées et d'un peu de thym.", "Enfournez 25 minutes à 200 °C et servez tiède avec une salade."], lien:"", ingredients:[
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Poires", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Roquefort", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Noix", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Mâche", qte:"100", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Pâtes aux noix et à la ricotta", emoji:"🍝", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Mixez les noix avec la ricotta, l'ail, le parmesan et un peu d'eau de cuisson.", "Faites cuire les pâtes très al dente.", "Mélangez-les à la crème de noix hors du feu, elle ne doit pas bouillir.", "Poivrez généreusement et ajoutez quelques cerneaux entiers."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Noix", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Minestrone d'automne", cuisine:"Italie", emoji:"🥣", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne"], etapes:["Coupez tous les légumes en petits dés réguliers.", "Faites-les suer dans l'huile d'olive, en commençant par l'oignon et le céleri.", "Ajoutez les tomates concassées, les haricots et le bouillon, laissez mijoter 30 minutes.", "Ajoutez les pâtes 10 minutes avant la fin et servez avec du parmesan."], lien:"", ingredients:[
    {nom:"Haricots blancs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Céleri branche", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courgettes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poireau", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pâtes", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Velouté de chou-fleur rôti aux amandes", emoji:"🥣", type:"leger", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Coupez le chou-fleur en fleurettes et faites-le rôtir 25 minutes à 200 °C avec l'huile.", "Gardez-en quelques-unes pour la décoration.", "Mixez le reste avec le bouillon chaud et les amandes.", "Ajoutez la crème, rectifiez l'assaisonnement et servez avec les fleurettes rôties."], lien:"", ingredients:[
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"70", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Choucroute garnie", cuisine:"Alsace", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Rincez la choucroute crue à l'eau froide et pressez-la.", "Faites revenir l'oignon dans la graisse, ajoutez la choucroute, le vin blanc, le laurier et les baies de genièvre.", "Laissez cuire 1 h 30 à couvert, à feu très doux.", "Ajoutez les viandes et les pommes de terre pour les 45 dernières minutes."], lien:"", ingredients:[
    {nom:"Choucroute crue", qte:"1,5", unite:"kg", rayon:"Épicerie"},
    {nom:"Saucisses de Strasbourg", qte:"8", unite:"", rayon:"Boucherie"},
    {nom:"Poitrine fumée", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Saucisse de Montbéliard", qte:"2", unite:"", rayon:"Boucherie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"30", unite:"cl", rayon:"Boissons"},
    {nom:"Baies de genièvre", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"}]},

  { nom:"Dinde aux marrons", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Mélangez les marrons, la chair à saucisse, l'oignon et les herbes pour la farce.", "Garnissez la dinde, refermez-la et bridez-la.", "Enfournez 2 heures à 180 °C en arrosant toutes les vingt minutes.", "Laissez reposer 15 minutes avant de découper et servez avec le jus."], lien:"", ingredients:[
    {nom:"Dinde", qte:"1", unite:"", rayon:"Boucherie"},
    {nom:"Châtaignes cuites", qte:"500", unite:"g", rayon:"Épicerie"},
    {nom:"Chair à saucisse", qte:"300", unite:"g", rayon:"Boucherie"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"}]},

  { nom:"Pintade aux choux", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer la pintade en morceaux dans une cocotte, réservez-la.", "Faites revenir les lardons, l'oignon et le chou émincé dans la même cocotte.", "Remettez la pintade, mouillez au vin blanc et au bouillon.", "Couvrez et laissez mijoter 1 heure à feu doux."], lien:"", ingredients:[
    {nom:"Pintade", qte:"1", unite:"", rayon:"Boucherie"},
    {nom:"Chou vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lardons", qte:"150", unite:"g", rayon:"Boucherie"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Bouillon de volaille", qte:"25", unite:"cl", rayon:"Épicerie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"}]},

  { nom:"Canard aux navets", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer les cuisses de canard côté peau pour rendre la graisse.", "Retirez l'excédent, ajoutez l'oignon, le bouillon et le thym.", "Couvrez et laissez mijoter 1 heure.", "Faites glacer les navets à part au miel et ajoutez-les pour les 20 dernières minutes."], lien:"", ingredients:[
    {nom:"Cuisses de canard", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Navets", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Miel", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Poulet au raisin et aux noix", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne"], etapes:["Faites dorer les morceaux de poulet et réservez-les.", "Déglacez au vin blanc, ajoutez le bouillon et l'échalote.", "Remettez le poulet, couvrez et laissez cuire 25 minutes.", "Ajoutez les grains de raisin et les noix 5 minutes avant la fin, puis liez à la crème."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Raisin", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Bouillon de volaille", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Filet mignon aux figues", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne"], etapes:["Faites colorer le filet mignon sur toutes ses faces dans une cocotte.", "Ajoutez les échalotes, le vin rouge et le miel, couvrez.", "Laissez cuire 25 minutes à feu doux.", "Ajoutez les figues coupées en deux pour les 8 dernières minutes et servez avec le jus."], lien:"", ingredients:[
    {nom:"Filet mignon de porc", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Figues", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin rouge", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Miel", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Magret de canard aux figues", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne"], etapes:["Quadrillez la peau des magrets et posez-les à froid dans la poêle, côté peau.", "Laissez fondre la graisse 8 minutes à feu moyen, puis retournez 3 minutes.", "Réservez la viande au chaud et jetez l'excédent de graisse.", "Faites caraméliser les figues dans la poêle avec le miel et le vinaigre, puis nappez les tranches."], lien:"", ingredients:[
    {nom:"Magrets de canard", qte:"2", unite:"", rayon:"Boucherie"},
    {nom:"Figues", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tajine d'agneau aux coings", cuisine:"Maroc", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne"], etapes:["Faites revenir l'agneau avec l'oignon et les épices.", "Couvrez d'eau à hauteur et laissez mijoter 1 h 15 à couvert.", "Faites dorer les coings en quartiers à part, dans un peu de beurre et de miel.", "Ajoutez-les au tajine pour les 25 dernières minutes et parsemez d'amandes."], lien:"", ingredients:[
    {nom:"Épaule d'agneau", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Coings", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Amandes effilées", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Ras el-hanout", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Semoule de blé", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Joue de bœuf braisée aux carottes", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer les joues de bœuf sur toutes leurs faces.", "Ajoutez les carottes en gros tronçons, l'oignon, le vin rouge et le bouillon.", "Couvrez et laissez mijoter 3 heures à tout petit feu, la viande doit s'effilocher.", "Servez avec une purée ou des pâtes fraîches."], lien:"", ingredients:[
    {nom:"Joue de bœuf", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Carottes", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin rouge", qte:"50", unite:"cl", rayon:"Boissons"},
    {nom:"Bouillon de bœuf", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"}]},

  { nom:"Boudin blanc aux pommes", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites revenir les pommes en quartiers dans le beurre avec une cuillère de sucre.", "Piquez à peine les boudins et faites-les dorer doucement 10 minutes.", "Déglacez la poêle au cidre et laissez réduire.", "Servez les boudins sur les pommes, nappés de sauce et de crème."], lien:"", ingredients:[
    {nom:"Boudins blancs", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Pommes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cidre", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Porc aux châtaignes et champignons", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer le porc en morceaux, réservez-le.", "Faites revenir les champignons et l'oignon dans la même cocotte.", "Remettez la viande, versez le vin blanc et le bouillon, laissez mijoter 1 heure.", "Ajoutez les châtaignes 15 minutes avant la fin."], lien:"", ingredients:[
    {nom:"Échine de porc", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Châtaignes cuites", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Bouillon de volaille", qte:"25", unite:"cl", rayon:"Épicerie"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Saint-jacques poêlées au potimarron", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire le potimarron en cubes et réduisez-le en purée lisse avec la crème.", "Épongez très soigneusement les noix de saint-jacques.", "Saisissez-les 1 minute par face dans le beurre mousseux, pas plus.", "Dressez-les sur la purée, salez à la fleur de sel et ajoutez une pointe de noisette."], lien:"", ingredients:[
    {nom:"Noix de saint-jacques", qte:"16", unite:"", rayon:"Poissonnerie"},
    {nom:"Potimarron", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Noisettes", qte:"30", unite:"g", rayon:"Épicerie"}]},

  { nom:"Harengs pommes à l'huile", emoji:"🐟", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les pommes de terre en robe des champs, épluchez-les tièdes.", "Coupez-les en rondelles et arrosez-les d'huile et de vin blanc.", "Ajoutez les filets de hareng fumé, l'oignon rouge et les rondelles de carotte.", "Laissez mariner au moins deux heures : c'est meilleur le lendemain."], lien:"", ingredients:[
    {nom:"Filets de hareng fumé", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"10", unite:"cl", rayon:"Boissons"},
    {nom:"Huile de tournesol", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Maquereaux au vin blanc", emoji:"🐟", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["automne"], etapes:["Rangez les filets de maquereau à plat dans un plat creux.", "Faites frémir le vin blanc avec les carottes, l'oignon, le laurier et le poivre.", "Versez ce court-bouillon brûlant sur les filets.", "Laissez refroidir et reposer une nuit au frais avant de servir."], lien:"", ingredients:[
    {nom:"Filets de maquereau", qte:"800", unite:"g", rayon:"Poissonnerie"},
    {nom:"Vin blanc", qte:"40", unite:"cl", rayon:"Boissons"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"600", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Cabillaud et purée de céleri-rave", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites cuire le céleri-rave en cubes 20 minutes dans le lait, puis mixez-le avec le beurre.", "Salez les dos de cabillaud et laissez-les 10 minutes à température.", "Saisissez-les 3 minutes par face, à feu moyen.", "Dressez sur la purée, avec un filet d'huile de noisette et de la ciboulette."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Céleri-rave", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"40", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Noisettes", qte:"30", unite:"g", rayon:"Épicerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Dos de lieu aux champignons", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["automne"], etapes:["Faites sauter les champignons à feu vif avec l'échalote.", "Ajoutez le vin blanc et la crème, laissez réduire.", "Posez les dos de lieu dans la sauce, couvrez et laissez cuire 10 minutes à feu doux.", "Parsemez de persil et servez avec du riz."], lien:"", ingredients:[
    {nom:"Filets de lieu", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"10", unite:"cl", rayon:"Boissons"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Saumon rôti à la crème de potimarron", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne"], etapes:["Faites cuire le potimarron et mixez-le avec la crème et une pointe de curry.", "Posez les pavés de saumon sur une plaque, huilez-les et salez-les.", "Enfournez 12 minutes à 200 °C : le cœur doit rester nacré.", "Servez sur la crème de potimarron, avec des graines de courge grillées."], lien:"", ingredients:[
    {nom:"Pavés de saumon", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Potimarron", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Curry", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Graines de courge", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Soupe de moules au safran", emoji:"🥣", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites ouvrir les moules au vin blanc avec l'échalote, puis décoquillez-les.", "Filtrez le jus de cuisson : c'est lui qui fait toute la soupe.", "Faites suer le poireau et la pomme de terre, mouillez avec le jus filtré et un peu d'eau.", "Ajoutez la crème et le safran, puis les moules hors du feu."], lien:"", ingredients:[
    {nom:"Moules", qte:"2", unite:"kg", rayon:"Poissonnerie"},
    {nom:"Poireau", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Safran", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Filet de daurade aux champignons et vin blanc", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["automne"], etapes:["Rangez les filets de daurade dans un plat beurré.", "Répartissez les champignons émincés et l'échalote autour.", "Versez le vin blanc, salez, poivrez, ajoutez quelques noisettes de beurre.", "Enfournez 18 minutes à 190 °C en arrosant une fois."], lien:"", ingredients:[
    {nom:"Filets de daurade", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Gratin de cabillaud aux champignons", emoji:"🧀", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites sauter les champignons jusqu'à évaporation de leur eau.", "Préparez une béchamel avec le beurre, la farine et le lait, ajoutez la moitié du fromage.", "Disposez le poisson en morceaux et les champignons dans un plat, nappez de sauce.", "Couvrez du reste de fromage et enfournez 25 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"700", unite:"g", rayon:"Poissonnerie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Emmental", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Risotto aux moules et safran", emoji:"🍚", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites ouvrir les moules au vin blanc, décoquillez-les et filtrez le jus.", "Nacrez le riz avec l'échalote, puis mouillez avec le jus des moules allongé de bouillon.", "Ajoutez le safran et poursuivez louche par louche pendant vingt minutes.", "Incorporez les moules et le beurre hors du feu — pas de parmesan avec les coquillages."], lien:"", ingredients:[
    {nom:"Moules", qte:"1,5", unite:"kg", rayon:"Poissonnerie"},
    {nom:"Riz à risotto", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Bouillon de poisson", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Safran", qte:"1", unite:"", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Carpaccio de courgettes à la menthe", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Taillez les courgettes en rubans très fins à l'économe.", "Étalez-les sur un plat, salez légèrement et laissez 10 minutes.", "Arrosez d'huile d'olive et de jus de citron.", "Parsemez de menthe ciselée, de pignons grillés et de copeaux de parmesan."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pignons de pin", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Haricots verts à la tomate et au basilic", emoji:"🫛", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les haricots verts 10 minutes à l'eau bouillante salée.", "Faites revenir l'oignon et l'ail, ajoutez les tomates concassées.", "Laissez mijoter 15 minutes puis ajoutez les haricots égouttés.", "Terminez par le basilic et un filet d'huile d'olive."], lien:"", ingredients:[
    {nom:"Haricots verts", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tarte à la ricotta et aux herbes", emoji:"🥧", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Étalez la pâte, piquez-la et faites-la cuire à blanc 15 minutes.", "Mélangez la ricotta avec les œufs, le parmesan et beaucoup d'herbes hachées.", "Versez sur le fond de tarte et lissez.", "Enfournez 25 minutes à 180 °C et servez tiède avec une salade."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Ricotta", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tarte aux courgettes, chèvre et miel", emoji:"🥧", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Taillez les courgettes en rondelles fines et faites-les dégorger 10 minutes.", "Étalez la pâte et tartinez-la de fromage frais.", "Rangez les courgettes en rosace, ajoutez le chèvre en rondelles.", "Arrosez d'un filet de miel et enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bûche de chèvre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Fromage frais", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Miel", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade de concombre à la crème et aneth", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Épluchez les concombres une bande sur deux et coupez-les en rondelles.", "Salez-les et laissez-les dégorger 20 minutes, puis pressez-les.", "Mélangez la crème, le vinaigre, l'aneth et du poivre.", "Enrobez les concombres et servez très frais."], lien:"", ingredients:[
    {nom:"Concombre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Aneth", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignons nouveaux", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Orzo aux tomates cerises et basilic", cuisine:"Italie", emoji:"🍚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les pâtes orzo comme du riz, dans une eau bien salée.", "Faites éclater les tomates cerises à la poêle avec l'ail et l'huile d'olive.", "Mélangez le tout hors du feu.", "Ajoutez la mozzarella en dés et beaucoup de basilic."], lien:"", ingredients:[
    {nom:"Orzo", qte:"350", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates cerises", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Mozzarella", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de riz aux herbes fraîches", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire le riz, rincez-le à l'eau froide et égouttez-le longuement.", "Hachez très finement toutes les herbes.", "Mélangez le riz aux herbes, aux oignons nouveaux et aux petits pois cuits.", "Assaisonnez de citron et d'huile d'olive, laissez reposer une heure au frais."], lien:"", ingredients:[
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"2", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Wrap aux légumes grillés et houmous", emoji:"🌯", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites griller les légumes en tranches fines, 4 minutes par face.", "Mixez les pois chiches avec la purée de sésame, le citron et l'ail pour le houmous.", "Tartinez les galettes de houmous.", "Garnissez de légumes grillés et de roquette, puis roulez serré."], lien:"", ingredients:[
    {nom:"Galettes de blé", qte:"8", unite:"", rayon:"Boulangerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Purée de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Roquette", qte:"100", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tartines de courgettes grillées et burrata", emoji:"🍞", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Taillez les courgettes en longues tranches et faites-les griller.", "Arrosez-les d'huile d'olive, de citron et de menthe pendant qu'elles sont chaudes.", "Faites griller le pain et frottez-le d'ail.", "Déposez les courgettes, la burrata déchirée à la main et du poivre du moulin."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Burrata", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Pain de campagne", qte:"8", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Wok de courgettes et amandes", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Taillez les courgettes en bâtonnets épais.", "Faites-les sauter au wok très chaud 5 minutes, sans les remuer tout de suite.", "Ajoutez l'ail, le gingembre et la sauce soja.", "Terminez par les amandes grillées et les oignons nouveaux, servez avec le riz."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Omelette roulée aux herbes", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Battez les œufs avec la crème et une grande quantité d'herbes hachées.", "Versez une fine couche dans une poêle beurrée, laissez juste prendre.", "Roulez-la sur elle-même, poussez-la au bord et versez une nouvelle couche.", "Répétez jusqu'à épuisement, puis coupez le rouleau en tronçons."], lien:"", ingredients:[
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"5", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Cerfeuil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Salade de pâtes aux petits légumes croquants", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les pâtes et rincez-les à l'eau froide.", "Taillez les légumes crus en tout petits dés.", "Préparez une sauce au yaourt, citron, moutarde et herbes.", "Mélangez au dernier moment pour garder le croquant."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Soupe froide de courgettes au basilic", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps", "ete"], etapes:["Faites cuire les courgettes en morceaux 15 minutes dans le bouillon.", "Mixez très finement avec le fromage frais et le basilic.", "Rectifiez le sel et le poivre, allongez d'un peu d'eau si besoin.", "Laissez refroidir au moins trois heures et servez avec des glaçons."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Fromage frais", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pizza blanche aux courgettes et ricotta", emoji:"🍕", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps", "ete"], etapes:["Étalez la pâte et tartinez-la de ricotta assaisonnée au citron et au poivre.", "Ajoutez les courgettes taillées en rubans fins, crues.", "Parsemez de mozzarella et arrosez d'huile d'olive.", "Enfournez 15 minutes à 240 °C et ajoutez de la menthe à la sortie."], lien:"", ingredients:[
    {nom:"Pâte à pizza", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Mozzarella", qte:"125", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pan-bagnat aux légumes grillés", emoji:"🥪", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites griller les légumes en tranches et laissez-les mariner à l'huile d'olive.", "Ouvrez les pains, frottez l'intérieur avec une gousse d'ail et une tomate coupée.", "Garnissez de légumes, d'œufs durs en rondelles, d'olives et de basilic.", "Refermez, pressez sous un poids et laissez reposer une heure."], lien:"", ingredients:[
    {nom:"Pains ronds", qte:"4", unite:"", rayon:"Boulangerie"},
    {nom:"Aubergine", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Courgettes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Tomates", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de lentilles corail, carottes et coriandre", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les lentilles corail 10 minutes seulement : elles doivent rester entières.", "Râpez les carottes et ciselez les oignons nouveaux.", "Mélangez avec le cumin, le citron et l'huile d'olive.", "Ajoutez beaucoup de coriandre et laissez tiédir avant de servir."], lien:"", ingredients:[
    {nom:"Lentilles corail", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Croquettes de courgettes et parmesan", emoji:"🧆", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Râpez les courgettes, salez-les et pressez-les très fort pour retirer l'eau.", "Mélangez-les aux œufs, à la farine, au parmesan et à la menthe.", "Formez des croquettes à la cuillère dans l'huile chaude.", "Faites-les dorer 3 minutes par face et posez-les sur du papier absorbant."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"}]},

  { nom:"Poulet rôti au basilic et courgettes", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps", "ete"], etapes:["Glissez du basilic et du citron sous la peau du poulet.", "Enfournez 1 heure à 200 °C en arrosant du jus.", "Ajoutez les courgettes en gros morceaux pour les 25 dernières minutes.", "Laissez reposer 10 minutes avant de découper."], lien:"", ingredients:[
    {nom:"Poulet", qte:"1", unite:"", rayon:"Boucherie"},
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Brochettes de dinde au citron et courgettes", emoji:"🍢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Coupez la dinde en cubes et faites-la mariner 30 minutes au citron, à l'huile et aux herbes.", "Enfilez-la sur des brochettes en alternant avec des rondelles de courgette.", "Faites griller 4 minutes par face.", "Servez avec le boulgour et un yaourt aux herbes."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"700", unite:"g", rayon:"Boucherie"},
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Origan", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de poulet, haricots verts et tomates", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les haricots verts 10 minutes et rafraîchissez-les à l'eau glacée.", "Faites griller les blancs de poulet et laissez-les reposer avant de les trancher.", "Coupez les tomates en quartiers et l'oignon rouge en lamelles.", "Assemblez et assaisonnez d'une vinaigrette moutardée aux herbes."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Haricots verts", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Filet de bar grillé, haricots verts et citron", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les haricots verts 10 minutes, gardez-les croquants.", "Saisissez les filets de bar côté peau 4 minutes, puis 1 minute de l'autre côté.", "Faites sauter les haricots au beurre avec l'ail et les amandes.", "Arrosez le poisson de jus de citron et servez tout de suite."], lien:"", ingredients:[
    {nom:"Filets de bar", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Haricots verts", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Papillote de dorade aux courgettes et citron", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Taillez les courgettes en fines rondelles et répartissez-les sur quatre feuilles de papier cuisson.", "Posez les filets de dorade dessus, salez, poivrez.", "Ajoutez une rondelle de citron, un peu d'huile d'olive et du thym.", "Fermez les papillotes et enfournez 18 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Filets de daurade", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Colin aux tomates et olives", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites revenir l'oignon et l'ail, ajoutez les tomates concassées et les olives.", "Laissez mijoter 15 minutes à découvert pour que la sauce épaississe.", "Posez les dos de colin dans la sauce, couvrez et laissez cuire 10 minutes.", "Parsemez de persil et servez avec du riz."], lien:"", ingredients:[
    {nom:"Dos de colin", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Olives noires", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Rougets grillés à la tapenade", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites griller les rougets 4 minutes de chaque côté, la peau doit croustiller.", "Mixez les olives, les câpres, l'ail et l'huile d'olive pour la tapenade.", "Tartinez le pain grillé de tapenade.", "Servez les rougets dessus, avec de la roquette et un filet de citron."], lien:"", ingredients:[
    {nom:"Rougets", qte:"8", unite:"", rayon:"Poissonnerie"},
    {nom:"Olives noires", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Câpres", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Roquette", qte:"100", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Calamars sautés aux courgettes et piment", emoji:"🦑", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Coupez les calamars en anneaux et épongez-les soigneusement.", "Saisissez-les 2 minutes à feu très vif, puis réservez-les.", "Faites sauter les courgettes en bâtonnets avec l'ail et le piment.", "Remettez les calamars une minute, ajoutez le persil et le citron."], lien:"", ingredients:[
    {nom:"Calamars", qte:"700", unite:"g", rayon:"Poissonnerie"},
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Piment", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Moules gratinées à l'ail et au persil", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites ouvrir les moules à sec dans une grande cocotte, puis retirez une coquille sur deux.", "Mélangez le beurre mou avec l'ail, le persil et la chapelure.", "Déposez une noisette de ce beurre sur chaque moule.", "Passez 5 minutes sous le gril, jusqu'à ce que la chapelure dore."], lien:"", ingredients:[
    {nom:"Moules", qte:"2", unite:"kg", rayon:"Poissonnerie"},
    {nom:"Beurre", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"2", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Chapelure", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade de pommes de terre, thon et haricots verts", emoji:"🥗", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les pommes de terre et les haricots verts séparément.", "Coupez les pommes de terre en rondelles tièdes et assaisonnez-les tout de suite.", "Ajoutez les haricots, le thon égoutté et les œufs durs en quartiers.", "Terminez par les olives, l'oignon rouge et beaucoup de persil."], lien:"", ingredients:[
    {nom:"Thon en boîte", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Haricots verts", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Olives noires", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Escalopes de veau panées et salade", emoji:"🥩", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Aplatissez les escalopes entre deux feuilles de papier cuisson.", "Passez-les dans la farine, l'œuf battu puis la chapelure, en pressant bien.", "Faites-les dorer 3 minutes par face dans le beurre et l'huile.", "Servez avec une salade assaisonnée au citron et un quartier de citron."], lien:"", ingredients:[
    {nom:"Escalopes de veau", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Chapelure", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Laitue", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de jambon cru, roquette et parmesan", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Disposez la roquette dans un grand plat.", "Ajoutez les tranches de jambon cru en vagues et des copeaux de parmesan.", "Arrosez d'huile d'olive et d'un trait de vinaigre balsamique.", "Poivrez, ne salez pas : le jambon et le parmesan suffisent."], lien:"", ingredients:[
    {nom:"Jambon cru", qte:"12", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Roquette", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Tartare de bœuf aux herbes", emoji:"🥩", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Hachez la viande au couteau, en petits cubes réguliers, juste avant de servir.", "Mélangez-la à l'échalote, aux câpres, aux cornichons et aux herbes.", "Assaisonnez de moutarde, de sauce Worcestershire, de sel et de poivre.", "Servez aussitôt avec une salade et des pommes de terre sautées."], lien:"", ingredients:[
    {nom:"Bœuf à tartare", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Câpres", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Cornichons", qte:"6", unite:"", rayon:"Épicerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Laitue", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Velouté de petits pois et cresson", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Faites suer l'oignon dans le beurre sans le colorer.", "Ajoutez les petits pois, le cresson et le bouillon, laissez cuire 12 minutes.", "Mixez très finement et passez au chinois si vous voulez une texture parfaite.", "Ajoutez la crème et servez avec quelques feuilles de cresson crues."], lien:"", ingredients:[
    {nom:"Petits pois", qte:"700", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Cresson", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"70", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Asperges rôties au jambon cru", emoji:"🥬", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Enroulez les asperges deux par deux dans une tranche de jambon cru.", "Posez-les sur une plaque, arrosez d'un filet d'huile d'olive.", "Enfournez 15 minutes à 210 °C : le jambon doit devenir croustillant.", "Servez avec un œuf mollet et des copeaux de parmesan."], lien:"", ingredients:[
    {nom:"Asperges vertes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Jambon cru", qte:"8", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Risotto aux fèves et pecorino", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["printemps"], etapes:["Écossez les fèves, ébouillantez-les et retirez la peau.", "Nacrez le riz avec l'échalote, puis versez le bouillon louche par louche.", "Ajoutez les fèves 5 minutes avant la fin.", "Hors du feu, incorporez le pecorino, le beurre et la menthe."], lien:"", ingredients:[
    {nom:"Riz à risotto", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Fèves", qte:"1,5", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Pecorino", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tarte aux asperges blanches et jambon", emoji:"🥧", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Épluchez les asperges blanches et faites-les cuire 12 minutes à l'eau salée.", "Battez les œufs avec la crème et une pointe de muscade.", "Étalez la pâte, répartissez le jambon en dés et les asperges en tronçons.", "Versez l'appareil et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Asperges blanches", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Jambon blanc", qte:"150", unite:"g", rayon:"Boucherie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Comté", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Noix de muscade", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Salade de fraises, mozzarella et basilic", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Équeutez les fraises et coupez-les en deux.", "Déchirez la mozzarella à la main plutôt que de la couper.", "Assaisonnez d'huile d'olive, d'un peu de vinaigre et de poivre du moulin.", "Ajoutez le basilic au dernier moment : la salade ne s'attend pas."], lien:"", ingredients:[
    {nom:"Fraises", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Mozzarella", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Roquette", qte:"100", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Gaspacho de fraises et tomates", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Mixez les tomates et les fraises avec le concombre et le poivron.", "Ajoutez l'huile d'olive, le vinaigre et une pincée de sel, mixez de nouveau.", "Passez au chinois si vous voulez une texture très lisse.", "Laissez trois heures au frais et servez avec du basilic."], lien:"", ingredients:[
    {nom:"Fraises", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poêlée de petits pois, fèves et asperges", emoji:"🫛", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Préparez les trois légumes : fèves pelées, petits pois écossés, asperges en tronçons.", "Faites-les sauter ensemble au beurre 6 minutes, avec un fond d'eau.", "Ajoutez les oignons nouveaux et laissez-les fondre.", "Terminez par la menthe, le citron et un peu de féta émiettée."], lien:"", ingredients:[
    {nom:"Petits pois", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Fèves", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Asperges vertes", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Quiche aux petits pois et menthe", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les petits pois 5 minutes et rafraîchissez-les.", "Battez les œufs avec la crème, le zeste de citron et la menthe.", "Étalez la pâte, répartissez les petits pois et la féta.", "Versez l'appareil et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Petits pois", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade d'épinards, fraises et amandes", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Lavez les jeunes pousses d'épinard et séchez-les bien.", "Coupez les fraises en quartiers et faites griller les amandes à sec.", "Préparez une vinaigrette au miel, au vinaigre et à l'huile de noix.", "Mélangez au dernier moment et ajoutez le fromage de chèvre frais."], lien:"", ingredients:[
    {nom:"Pousses d'épinard", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Fraises", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Chèvre frais", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Miel", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de noix", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Soupe de poireaux nouveaux et pommes de terre", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Émincez les poireaux nouveaux en gardant une partie du vert tendre.", "Faites-les fondre dans le beurre 10 minutes sans les colorer.", "Ajoutez les pommes de terre en dés et le bouillon, laissez cuire 20 minutes.", "Mixez ou écrasez selon l'envie, et ajoutez la crème et la ciboulette."], lien:"", ingredients:[
    {nom:"Poireaux", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"80", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Pâtes aux fèves et à la ricotta", emoji:"🍝", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Écossez et pelez les fèves, gardez-en la moitié entières.", "Écrasez l'autre moitié avec la ricotta, le citron et la menthe.", "Faites cuire les pâtes et détendez la crème de fèves avec l'eau de cuisson.", "Mélangez hors du feu et ajoutez les fèves entières et le pecorino."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Fèves", qte:"1,2", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Pecorino", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Polenta aux asperges et parmesan", emoji:"🍚", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["printemps"], etapes:["Versez la polenta en pluie dans le bouillon bouillant, remuez 10 minutes.", "Ajoutez le beurre et le parmesan, gardez-la crémeuse.", "Faites sauter les asperges en tronçons 6 minutes à la poêle.", "Dressez la polenta en assiette creuse et posez les asperges dessus."], lien:"", ingredients:[
    {nom:"Polenta", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Asperges vertes", qte:"700", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Couscous de printemps aux légumes nouveaux", cuisine:"Maroc", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites revenir l'oignon avec les épices, ajoutez les carottes et les navets.", "Couvrez de bouillon et laissez cuire 20 minutes.", "Ajoutez les courgettes, les fèves et les pois chiches, poursuivez 12 minutes.", "Faites gonfler la semoule à part et servez le bouillon à côté."], lien:"", ingredients:[
    {nom:"Semoule de blé", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes nouvelles", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fèves", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Ras el-hanout", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Sauté d'agneau aux petits pois et carottes", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites dorer l'agneau en morceaux dans une cocotte.", "Ajoutez les oignons nouveaux et les carottes, laissez colorer.", "Mouillez au bouillon et au vin blanc, couvrez et laissez mijoter 1 heure.", "Ajoutez les petits pois 10 minutes avant la fin et parsemez de menthe."], lien:"", ingredients:[
    {nom:"Épaule d'agneau", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Petits pois", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes nouvelles", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poulet aux asperges et citron confit", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites dorer les morceaux de poulet et réservez-les.", "Faites revenir l'échalote, déglacez au vin blanc, ajoutez le bouillon.", "Remettez le poulet avec le citron confit haché, couvrez 20 minutes.", "Ajoutez les asperges pour les 8 dernières minutes et liez à la crème."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Asperges vertes", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron confit", qte:"1", unite:"", rayon:"Épicerie"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Bouillon de volaille", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"15", unite:"cl", rayon:"Crèmerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Rôti de veau aux légumes primeurs", emoji:"🥩", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites colorer le rôti sur toutes ses faces dans une cocotte.", "Ajoutez l'oignon, le thym et un verre de bouillon, couvrez.", "Enfournez 1 heure à 170 °C en arrosant deux ou trois fois.", "Ajoutez les légumes primeurs pour les 30 dernières minutes."], lien:"", ingredients:[
    {nom:"Rôti de veau", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Carottes nouvelles", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Navets nouveaux", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre nouvelles", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Merlan frit et salade de printemps", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Farinez légèrement les filets de merlan et tapotez-les.", "Faites-les frire 3 minutes par face dans l'huile bien chaude.", "Égouttez-les sur du papier absorbant et salez tout de suite.", "Servez avec une salade de jeunes pousses, radis et vinaigrette au citron."], lien:"", ingredients:[
    {nom:"Filets de merlan", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Farine", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de tournesol", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Pousses d'épinard", qte:"150", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Radis", qte:"1", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Filet de truite à l'oseille et aux petits pois", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Faites cuire les petits pois 6 minutes avec les oignons nouveaux.", "Faites fondre l'oseille dans le beurre et ajoutez la crème.", "Saisissez les filets de truite 3 minutes côté peau, 1 minute de l'autre côté.", "Dressez sur les petits pois, nappez de crème d'oseille."], lien:"", ingredients:[
    {nom:"Filets de truite", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Oseille", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Crevettes sautées aux asperges", emoji:"🍤", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Coupez les asperges en biseau et faites-les sauter 5 minutes à feu vif.", "Ajoutez l'ail et le gingembre, puis les crevettes décortiquées.", "Faites-les sauter 3 minutes : elles doivent rester nacrées.", "Déglacez à la sauce soja et au citron, servez avec le riz."], lien:"", ingredients:[
    {nom:"Crevettes", qte:"500", unite:"g", rayon:"Poissonnerie"},
    {nom:"Asperges vertes", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tartines de chèvre frais, radis et herbes", emoji:"🍞", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps"], etapes:["Écrasez le chèvre frais avec un peu de crème, du citron et du poivre.", "Faites griller les tranches de pain de campagne.", "Tartinez généreusement et rangez les radis en fines rondelles.", "Parsemez de ciboulette, de cerfeuil et de fleur de sel."], lien:"", ingredients:[
    {nom:"Chèvre frais", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Radis", qte:"2", unite:"botte(s)", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"8", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Crème fraîche", qte:"5", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Cerfeuil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade de boulgour, fèves et menthe", emoji:"🥗", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites gonfler le boulgour 10 minutes dans le bouillon chaud.", "Écossez et pelez les fèves après les avoir ébouillantées 2 minutes.", "Mélangez le tout avec les oignons nouveaux et le citron.", "Ajoutez beaucoup de menthe et de persil, servez tiède ou froid."], lien:"", ingredients:[
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Fèves", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Rôti de porc au chutney de rhubarbe", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites colorer le rôti et enfournez-le 1 heure à 180 °C avec l'oignon et le bouillon.", "Coupez la rhubarbe en tronçons et faites-la compoter avec le sucre, le gingembre et le vinaigre.", "Laissez le chutney épaissir 20 minutes à feu doux.", "Servez le rôti tranché avec le chutney tiède et des pommes de terre."], lien:"", ingredients:[
    {nom:"Rôti de porc", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Rhubarbe", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Sucre", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vinaigre de cidre", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"25", unite:"cl", rayon:"Épicerie"},
    {nom:"Pommes de terre nouvelles", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Salade de tomates anciennes à la burrata", emoji:"🍅", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les tomates de formes et de couleurs différentes en tranches épaisses.", "Salez-les et laissez-les 10 minutes : elles rendent un jus qui fera la sauce.", "Déchirez la burrata à la main et posez-la au centre.", "Arrosez d'huile d'olive, poivrez et ajoutez le basilic entier."], lien:"", ingredients:[
    {nom:"Tomates", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Burrata", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Tomates farcies au chèvre et aux herbes", emoji:"🍅", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez un chapeau aux tomates et videz-les à la cuillère, salez l'intérieur.", "Mélangez le chèvre frais avec la chapelure, l'ail et beaucoup d'herbes.", "Garnissez les tomates et remettez les chapeaux.", "Enfournez 30 minutes à 190 °C, servez tiède avec du riz."], lien:"", ingredients:[
    {nom:"Tomates", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Chèvre frais", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Aubergines rôties au miso", cuisine:"Japon", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les aubergines en deux et quadrillez la chair au couteau.", "Badigeonnez d'huile et enfournez 25 minutes à 210 °C, face coupée vers le haut.", "Mélangez le miso avec la sauce soja, le miel et un peu d'eau.", "Nappez les aubergines et repassez 8 minutes au four, puis parsemez de sésame."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Miso", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Miel", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Graines de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Caviar d'aubergines et pain grillé", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:true, saisons:["ete"], etapes:["Piquez les aubergines et faites-les rôtir 45 minutes à 200 °C, jusqu'à ce qu'elles s'affaissent.", "Récupérez la chair à la cuillère et laissez-la égoutter.", "Écrasez-la avec l'ail, le citron, la purée de sésame et l'huile d'olive.", "Servez frais, avec du pain grillé et des crudités."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Purée de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"8", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Courgettes farcies au quinoa", emoji:"🥒", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les courgettes en deux et creusez-les, gardez la chair.", "Faites cuire le quinoa et mélangez-le à la chair revenue avec l'oignon et les épices.", "Ajoutez la féta et les pignons, garnissez les courgettes.", "Enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Quinoa", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Pignons de pin", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poivrons farcis au riz et à la féta", cuisine:"Grèce", emoji:"🫑", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez le chapeau des poivrons et retirez les graines.", "Mélangez le riz cuit avec la féta, les tomates en dés, l'oignon et les herbes.", "Garnissez les poivrons sans trop tasser et remettez les chapeaux.", "Enfournez 40 minutes à 190 °C avec un fond d'eau dans le plat."], lien:"", ingredients:[
    {nom:"Poivron", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Féta", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de haricots verts, pêches et amandes", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire les haricots verts 10 minutes et plongez-les dans l'eau glacée.", "Coupez les pêches en quartiers et faites-les colorer deux minutes à la poêle.", "Préparez une vinaigrette au miel, vinaigre et huile de noisette.", "Assemblez et parsemez d'amandes grillées et de fromage frais."], lien:"", ingredients:[
    {nom:"Haricots verts", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pêches", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Fromage frais", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Miel", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile de noix", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Coleslaw aux carottes et raisins secs", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Émincez le chou blanc très finement et râpez les carottes.", "Salez le chou et laissez-le dégorger 20 minutes, puis pressez-le.", "Mélangez le yaourt, la mayonnaise, la moutarde et le vinaigre.", "Enrobez les légumes, ajoutez les raisins et laissez reposer une heure au frais."], lien:"", ingredients:[
    {nom:"Chou blanc", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Raisins secs", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Mayonnaise", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Velouté froid de tomates rôties", emoji:"🥣", type:"leger", vegetarien:true, rapide:false, thermomix:true, saisons:["ete"], etapes:["Coupez les tomates en deux, arrosez-les d'huile et rôtissez-les 40 minutes à 190 °C avec l'ail.", "Mixez-les avec le bouillon froid et le basilic.", "Passez au chinois pour retirer les peaux.", "Laissez trois heures au frais et servez avec un filet d'huile d'olive."], lien:"", ingredients:[
    {nom:"Tomates", qte:"1,2", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"30", unite:"cl", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Pâtes froides au pesto et haricots verts", emoji:"🍝", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire les pâtes et les haricots verts ensemble, les haricots 4 minutes avant la fin.", "Rincez le tout à l'eau froide et égouttez bien.", "Mixez le basilic, les pignons, le parmesan et l'huile d'olive.", "Mélangez au pesto, ajoutez les tomates cerises et laissez reposer au frais."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Haricots verts", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"2", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pignons de pin", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"10", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Risotto aux courgettes et citron", emoji:"🍚", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["ete"], etapes:["Râpez la moitié des courgettes, coupez l'autre moitié en dés.", "Nacrez le riz avec l'échalote, ajoutez les courgettes râpées puis le bouillon, louche par louche.", "Faites sauter les dés à part pour qu'ils restent fermes.", "Hors du feu, ajoutez le parmesan, le zeste de citron et les dés de courgette."], lien:"", ingredients:[
    {nom:"Riz à risotto", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"30", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Gratin d'aubergines et tomates au basilic", emoji:"🧀", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les aubergines en tranches, salez-les et faites-les griller sans matière grasse.", "Faites mijoter les tomates avec l'ail et le basilic 20 minutes.", "Alternez aubergines, sauce et mozzarella dans un plat.", "Couvrez de parmesan et enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"600", unite:"g", rayon:"Épicerie"},
    {nom:"Mozzarella", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Quiche aux tomates cerises et féta", emoji:"🥧", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Étalez la pâte, piquez-la et parsemez-la d'un peu de semoule pour absorber le jus.", "Battez les œufs avec la crème, salez peu, poivrez.", "Répartissez les tomates cerises coupées en deux et la féta émiettée.", "Versez l'appareil et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Tomates cerises", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Origan", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Semoule de blé", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pizza aux aubergines et ricotta", emoji:"🍕", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites griller les tranches d'aubergine à la poêle.", "Étalez la pâte, tartinez-la de coulis de tomate.", "Répartissez les aubergines, des cuillerées de ricotta et de la mozzarella.", "Enfournez 15 minutes à 240 °C et ajoutez le basilic à la sortie."], lien:"", ingredients:[
    {nom:"Pâte à pizza", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Aubergines", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Mozzarella", qte:"125", unite:"g", rayon:"Crèmerie"},
    {nom:"Coulis de tomate", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Wok de légumes d'été au basilic thaï", cuisine:"Thaïlande", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Taillez tous les légumes en morceaux de taille égale.", "Faites chauffer le wok très fort et saisissez-les 5 minutes en remuant sans arrêt.", "Ajoutez l'ail, le piment et la sauce soja.", "Hors du feu, jetez une grosse poignée de basilic : il doit juste flétrir."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Haricots verts", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Piment", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Nouilles froides au concombre et sésame", cuisine:"Chine", emoji:"🍜", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire les nouilles, rincez-les longuement à l'eau froide.", "Taillez le concombre en fins bâtonnets et pressez-les légèrement.", "Préparez la sauce : purée de sésame, sauce soja, vinaigre, ail et un peu d'eau.", "Mélangez au dernier moment et parsemez de graines de sésame."], lien:"", ingredients:[
    {nom:"Nouilles chinoises", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Concombre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Purée de sésame", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade de pêches, tomates et mozzarella", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les pêches et les tomates en quartiers de même taille.", "Ajoutez la mozzarella déchirée à la main.", "Assaisonnez d'huile d'olive, d'un peu de vinaigre et de fleur de sel.", "Parsemez de basilic et servez sans attendre."], lien:"", ingredients:[
    {nom:"Pêches", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Mozzarella", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tortilla aux pommes de terre et poivrons", cuisine:"Espagne", emoji:"🍳", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites confire les pommes de terre en rondelles et les oignons dans l'huile, à feu doux, 25 minutes.", "Ajoutez les poivrons en lanières les dix dernières minutes, puis égouttez.", "Mélangez le tout aux œufs battus et laissez reposer 10 minutes.", "Faites prendre à feu doux 8 minutes, retournez à l'aide d'une assiette et poursuivez 5 minutes."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"8", unite:"", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"15", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Cake salé aux courgettes et tomates séchées", emoji:"🥧", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Râpez les courgettes, salez-les et pressez-les pour retirer l'eau.", "Mélangez farine et levure, ajoutez les œufs, le lait et l'huile.", "Incorporez les courgettes, les tomates séchées coupées et le parmesan.", "Enfournez 45 minutes à 180 °C dans un moule à cake."], lien:"", ingredients:[
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"8", unite:"cl", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates séchées", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Brochettes de halloumi et légumes", emoji:"🍢", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez le halloumi en gros cubes et les légumes en morceaux.", "Enfilez-les en alternant sur des brochettes.", "Badigeonnez d'huile d'olive, d'origan et de jus de citron.", "Faites griller 8 minutes en tournant : le fromage doit être doré et fondant."], lien:"", ingredients:[
    {nom:"Halloumi", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Origan", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain pita", qte:"4", unite:"", rayon:"Boulangerie"}]},

  { nom:"Anchois marinés et poivrons grillés", emoji:"🐟", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites griller les poivrons entiers, pelez-les et coupez-les en lanières.", "Rincez les filets d'anchois et laissez-les mariner dans l'huile d'olive et l'ail.", "Disposez les poivrons dans un plat, ajoutez les anchois par-dessus.", "Arrosez de vinaigre et de persil, laissez reposer une heure avant de servir."], lien:"", ingredients:[
    {nom:"Filets d'anchois", qte:"200", unite:"g", rayon:"Poissonnerie"},
    {nom:"Poivron", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Vinaigre de cidre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Daurade en croûte de sel", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Mélangez le gros sel avec les blancs d'œufs jusqu'à obtenir une pâte humide.", "Étalez un lit de sel, posez la daurade garnie de citron et d'herbes, recouvrez entièrement.", "Enfournez 35 minutes à 200 °C.", "Cassez la croûte à table : la chair est parfaitement juteuse et pas salée."], lien:"", ingredients:[
    {nom:"Daurade", qte:"1,2", unite:"kg", rayon:"Poissonnerie"},
    {nom:"Gros sel", qte:"2", unite:"kg", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"4", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Thon grillé aux poivrons confits", emoji:"🐟", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites confire les poivrons en lanières 30 minutes à feu doux avec l'ail et l'huile.", "Sortez le thon du froid 20 minutes avant de le cuire.", "Saisissez-le 2 minutes par face : il doit rester rosé au centre.", "Servez sur les poivrons, avec des olives et du basilic."], lien:"", ingredients:[
    {nom:"Pavés de thon", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Poivron", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"6", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Salade de poulpe et pommes de terre", cuisine:"Grèce", emoji:"🥗", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites cuire le poulpe 45 minutes dans un grand volume d'eau avec du laurier.", "Laissez-le refroidir dans son eau, puis coupez-le en morceaux.", "Faites cuire les pommes de terre et coupez-les en rondelles tièdes.", "Assaisonnez généreusement d'huile d'olive, de citron, d'ail et de persil."], lien:"", ingredients:[
    {nom:"Poulpe", qte:"1", unite:"kg", rayon:"Poissonnerie"},
    {nom:"Pommes de terre", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"6", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poulet grillé aux abricots et romarin", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites mariner les cuisses de poulet au miel, citron, romarin et huile d'olive.", "Faites-les griller 20 minutes en les retournant régulièrement.", "Ajoutez les abricots coupés en deux les 8 dernières minutes.", "Servez avec le boulgour et le jus de cuisson."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"8", unite:"", rayon:"Boucherie"},
    {nom:"Abricots", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Romarin", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Brochettes d'agneau aux abricots", emoji:"🍢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez l'agneau en cubes et faites-le mariner 1 heure avec les épices et l'huile.", "Enfilez-le sur des brochettes en alternant avec les abricots et l'oignon rouge.", "Faites griller 4 minutes par face.", "Servez avec la semoule et un yaourt à la menthe."], lien:"", ingredients:[
    {nom:"Gigot d'agneau", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Abricots", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ras el-hanout", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Semoule de blé", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Rosbif froid et sauce aux herbes", emoji:"🥩", type:"leger", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Saisissez le rosbif sur toutes ses faces, puis enfournez 25 minutes à 200 °C.", "Laissez-le refroidir complètement avant de le trancher très finement.", "Mixez les herbes avec le yaourt, la moutarde, les câpres et le citron.", "Servez les tranches froides avec la sauce, des tomates et du pain."], lien:"", ingredients:[
    {nom:"Rosbif", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Yaourt nature", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Câpres", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Fondue savoyarde", cuisine:"Savoie", emoji:"🫕", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Frottez le caquelon avec une gousse d'ail coupée en deux.", "Versez le vin blanc, faites-le chauffer sans bouillir puis ajoutez les fromages râpés petit à petit.", "Remuez en formant des huit jusqu'à ce que tout soit fondu et lisse.", "Liez avec la fécule délayée, poivrez, et servez avec le pain coupé en cubes."], lien:"", ingredients:[
    {nom:"Comté", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Beaufort", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Emmental", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Vin blanc", qte:"40", unite:"cl", rayon:"Boissons"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Fécule de maïs", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"1", unite:"", rayon:"Boulangerie"}]},

  { nom:"Mont d'or au four et pommes de terre", cuisine:"Jura", emoji:"🧀", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Retirez le couvercle du fromage, piquez-le et glissez-y des lamelles d'ail.", "Arrosez d'un peu de vin blanc et refermez la boîte dans du papier aluminium.", "Enfournez 25 minutes à 190 °C : le cœur doit être coulant.", "Servez avec les pommes de terre cuites à la vapeur et une salade."], lien:"", ingredients:[
    {nom:"Mont d'or", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"5", unite:"cl", rayon:"Boissons"},
    {nom:"Mâche", qte:"150", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Aligot", cuisine:"Aubrac", emoji:"🥔", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Faites cuire les pommes de terre à l'eau salée et passez-les au presse-purée.", "Remettez la purée sur feu doux avec le beurre, la crème et l'ail écrasé.", "Ajoutez la tome fraîche coupée en lamelles, petit à petit.", "Travaillez énergiquement à la spatule jusqu'à ce que la purée file."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Tome fraîche", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Truffade auvergnate", cuisine:"Auvergne", emoji:"🥔", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Coupez les pommes de terre en fines lamelles.", "Faites-les cuire à couvert 25 minutes dans une poêle avec un peu de matière grasse.", "Écrasez-les grossièrement, ajoutez l'ail puis la tome en lamelles.", "Laissez filer le fromage, puis faites dorer le dessous avant de retourner la truffade."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Tome fraîche", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Mâche", qte:"150", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Gratin de crozets au beaufort", cuisine:"Savoie", emoji:"🧀", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les crozets 15 minutes à l'eau salée et égouttez-les.", "Faites revenir l'oignon, ajoutez la crème et laissez tiédir.", "Mélangez le tout avec la moitié du beaufort râpé.", "Versez dans un plat, couvrez du reste de fromage et enfournez 20 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Crozets", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Beaufort", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noix de muscade", qte:"1", unite:"", rayon:"Épicerie"}]},

  { nom:"Raclette maison", cuisine:"Savoie", emoji:"🧀", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Faites cuire les pommes de terre en robe des champs 25 minutes.", "Disposez la charcuterie en éventail sur un grand plat.", "Faites fondre les tranches de fromage dans les coupelles de l'appareil.", "Chacun verse son fromage sur ses pommes de terre, avec cornichons et oignons au vinaigre."], lien:"", ingredients:[
    {nom:"Fromage à raclette", qte:"1", unite:"kg", rayon:"Crèmerie"},
    {nom:"Pommes de terre", qte:"1,5", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Jambon cru", qte:"12", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Jambon blanc", qte:"8", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Cornichons", qte:"12", unite:"", rayon:"Épicerie"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salsifis à la crème", emoji:"🥕", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Épluchez les salsifis sous l'eau et plongez-les dans de l'eau citronnée.", "Faites-les cuire 30 minutes à l'eau salée jusqu'à ce qu'ils soient tendres.", "Faites-les revenir au beurre avec l'échalote.", "Ajoutez la crème, laissez épaissir et parsemez de persil."], lien:"", ingredients:[
    {nom:"Salsifis", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Tatin d'endives au chèvre", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Coupez les endives en deux et faites-les caraméliser au beurre avec un peu de sucre.", "Rangez-les serrées, face bombée en bas, dans un moule.", "Répartissez le chèvre en rondelles et couvrez de pâte en rentrant les bords.", "Enfournez 30 minutes à 200 °C, puis retournez sur un plat."], lien:"", ingredients:[
    {nom:"Endives", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pâte feuilletée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Bûche de chèvre", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Quiche aux endives et bleu", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Faites braiser les endives émincées 20 minutes pour qu'elles rendent leur eau.", "Battez les œufs avec la crème, poivrez, ne salez presque pas.", "Étalez la pâte, répartissez les endives et le bleu émietté.", "Versez l'appareil et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Endives", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bleu", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Noix", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Soupe à l'ail et au pain", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Faites confire les gousses d'ail entières 10 minutes dans l'huile d'olive, à feu doux.", "Ajoutez le bouillon et le laurier, laissez frémir 20 minutes.", "Écrasez l'ail dans le bouillon et ajoutez le pain rassis en morceaux.", "Cassez les œufs dans la soupe frémissante et servez dès qu'ils sont pochés."], lien:"", ingredients:[
    {nom:"Ail", qte:"2", unite:"tête(s)", rayon:"Fruits & légumes"},
    {nom:"Pain de campagne", qte:"200", unite:"g", rayon:"Boulangerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Choucroute végétarienne aux pommes de terre", emoji:"🥬", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Rincez la choucroute crue et pressez-la.", "Faites revenir l'oignon au beurre, ajoutez la choucroute, le vin blanc et les baies de genièvre.", "Laissez cuire 1 heure à couvert, à feu doux.", "Ajoutez les pommes de terre et les carottes pour les 30 dernières minutes."], lien:"", ingredients:[
    {nom:"Choucroute crue", qte:"1", unite:"kg", rayon:"Épicerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"25", unite:"cl", rayon:"Boissons"},
    {nom:"Baies de genièvre", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade d'orange, olives et oignon rouge", cuisine:"Sicile", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Pelez les oranges à vif et coupez-les en rondelles, gardez le jus.", "Émincez l'oignon rouge très finement et rincez-le à l'eau froide pour l'adoucir.", "Disposez les oranges, l'oignon et les olives noires.", "Assaisonnez du jus récupéré, d'huile d'olive et d'origan."], lien:"", ingredients:[
    {nom:"Oranges", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Origan", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Pain de campagne", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"}]},

  { nom:"Galettes de pommes de terre et céleri", emoji:"🧆", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Râpez les pommes de terre et le céleri-rave, pressez-les très fort dans un torchon.", "Mélangez-les aux œufs, à la farine et à l'oignon râpé.", "Formez des galettes fines dans une poêle bien chaude.", "Faites-les dorer 4 minutes par face et servez avec du fromage blanc citronné."], lien:"", ingredients:[
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Céleri-rave", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fromage blanc", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Huile de tournesol", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Velouté de chou-fleur au bleu", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites cuire le chou-fleur en fleurettes 20 minutes dans le bouillon.", "Mixez très finement avec le lait.", "Ajoutez le bleu émietté hors du feu : il fond dans la chaleur du velouté.", "Servez avec des noix concassées et un tour de moulin à poivre."], lien:"", ingredients:[
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bleu", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Lait", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Bouillon de légumes", qte:"70", unite:"cl", rayon:"Épicerie"},
    {nom:"Noix", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Cassoulet", cuisine:"Languedoc", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Faites tremper les haricots une nuit, puis cuisez-les 1 heure avec la carotte et l'oignon.", "Faites dorer les viandes séparément dans la graisse de canard.", "Alternez haricots et viandes dans une cocotte en terre, mouillez du bouillon de cuisson.", "Enfournez 2 heures à 150 °C en crevant la croûte plusieurs fois."], lien:"", ingredients:[
    {nom:"Haricots blancs secs", qte:"600", unite:"g", rayon:"Épicerie"},
    {nom:"Cuisses de canard", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Saucisse de Toulouse", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Poitrine fumée", qte:"200", unite:"g", rayon:"Boucherie"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"}]},

  { nom:"Carbonade flamande", cuisine:"Flandre", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Faites dorer la viande en gros morceaux, réservez-la.", "Faites blondir les oignons émincés dans la même cocotte.", "Remettez la viande, versez la bière brune, ajoutez la cassonade et le pain d'épices tartiné de moutarde.", "Couvrez et laissez mijoter 2 h 30 à feu très doux."], lien:"", ingredients:[
    {nom:"Bœuf à mijoter", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Oignons", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bière brune", qte:"50", unite:"cl", rayon:"Boissons"},
    {nom:"Pain d'épices", qte:"4", unite:"tranche(s)", rayon:"Boulangerie"},
    {nom:"Moutarde", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Cassonade", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"}]},

  { nom:"Daube provençale", cuisine:"Provence", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Faites mariner la viande une nuit dans le vin rouge avec les carottes, l'oignon et les herbes.", "Égouttez, épongez et faites dorer la viande.", "Remettez la marinade, ajoutez le zeste d'orange et les olives.", "Couvrez et laissez mijoter 3 heures à tout petit feu."], lien:"", ingredients:[
    {nom:"Bœuf à mijoter", qte:"1,2", unite:"kg", rayon:"Boucherie"},
    {nom:"Vin rouge", qte:"75", unite:"cl", rayon:"Boissons"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Orange", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Thym", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Pâtes", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Garbure béarnaise", cuisine:"Béarn", emoji:"🥣", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Faites cuire le confit et le jambon dans un grand volume d'eau avec les haricots, 1 heure.", "Ajoutez les carottes, les navets et les pommes de terre en gros morceaux.", "Ajoutez le chou vert en lanières 20 minutes avant la fin.", "Servez la soupe d'abord, la viande et les légumes ensuite."], lien:"", ingredients:[
    {nom:"Cuisses de canard", qte:"2", unite:"", rayon:"Boucherie"},
    {nom:"Jambon cru", qte:"150", unite:"g", rayon:"Boucherie"},
    {nom:"Chou vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Haricots blancs", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Navets", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Poireau", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"}]},

  { nom:"Confit de canard et pommes sarladaises", cuisine:"Périgord", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Réchauffez les cuisses de confit 20 minutes au four à 180 °C, peau vers le haut.", "Coupez les pommes de terre en rondelles et faites-les cuire dans un peu de graisse de canard.", "Laissez-les dorer sans trop remuer, elles doivent croustiller.", "Ajoutez l'ail et le persil hachés à la toute fin, puis servez avec le confit."], lien:"", ingredients:[
    {nom:"Cuisses de canard confites", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"4", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Mâche", qte:"150", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Jarret de porc braisé au chou", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Faites colorer le jarret sur toutes ses faces dans une cocotte.", "Ajoutez l'oignon, les carottes, le bouillon et le laurier.", "Couvrez et laissez mijoter 2 heures à feu doux.", "Ajoutez le chou en lanières pour les 40 dernières minutes."], lien:"", ingredients:[
    {nom:"Jarret de porc", qte:"1,2", unite:"kg", rayon:"Boucherie"},
    {nom:"Chou vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bouillon de volaille", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Saucisses fumées et purée de céleri", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites cuire le céleri-rave et les pommes de terre 20 minutes dans le lait.", "Écrasez-les avec le beurre, gardez la purée bien chaude.", "Pochez les saucisses fumées 15 minutes dans de l'eau frémissante, sans jamais bouillir.", "Servez sur la purée, avec une cuillère de moutarde à l'ancienne."], lien:"", ingredients:[
    {nom:"Saucisses fumées", qte:"8", unite:"", rayon:"Boucherie"},
    {nom:"Céleri-rave", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"40", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Coquilles Saint-Jacques gratinées", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Faites suer les champignons et l'échalote, déglacez au vin blanc.", "Ajoutez la crème et laissez réduire, puis retirez du feu.", "Répartissez les noix de saint-jacques crues dans les coquilles, nappez de sauce.", "Couvrez de chapelure et de fromage, et passez 8 minutes sous le gril."], lien:"", ingredients:[
    {nom:"Noix de saint-jacques", qte:"16", unite:"", rayon:"Poissonnerie"},
    {nom:"Champignons de Paris", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalote", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"10", unite:"cl", rayon:"Boissons"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Emmental", qte:"60", unite:"g", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"20", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Cabillaud à la portugaise", cuisine:"Portugal", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Faites revenir les oignons et l'ail longuement dans l'huile d'olive.", "Ajoutez les pommes de terre en rondelles, les tomates et les olives.", "Laissez cuire 25 minutes à couvert.", "Posez le cabillaud dessus, couvrez et laissez 12 minutes de plus, puis ajoutez le persil."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"700", unite:"g", rayon:"Poissonnerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Olives noires", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Cabillaud rôti au chorizo et pois chiches", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites revenir le chorizo en rondelles : il rend une huile parfumée.", "Ajoutez les pois chiches égouttés et le paprika, laissez colorer.", "Posez les dos de cabillaud dessus, arrosez de l'huile de la poêle.", "Enfournez 12 minutes à 200 °C et terminez par du persil et du citron."], lien:"", ingredients:[
    {nom:"Dos de cabillaud", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Chorizo", qte:"150", unite:"g", rayon:"Boucherie"},
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Raie au beurre noisette et câpres", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["hiver"], etapes:["Faites pocher les ailes de raie 8 minutes dans un court-bouillon frémissant.", "Égouttez-les et retirez la peau si nécessaire.", "Faites chauffer le beurre jusqu'à ce qu'il mousse et sente la noisette.", "Ajoutez les câpres et le jus de citron hors du feu, puis nappez le poisson."], lien:"", ingredients:[
    {nom:"Ailes de raie", qte:"800", unite:"g", rayon:"Poissonnerie"},
    {nom:"Beurre", qte:"100", unite:"g", rayon:"Crèmerie"},
    {nom:"Câpres", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Laurier", qte:"2", unite:"feuille(s)", rayon:"Fruits & légumes"}]}
];
