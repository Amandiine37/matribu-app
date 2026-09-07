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
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Bœuf bourguignon", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer les lardons puis la viande en morceaux dans une cocotte.", "Ajoutez les oignons et les carottes en rondelles, laissez colorer 5 minutes.", "Versez le vin rouge, complétez d'eau à hauteur, salez, poivrez, ajoutez du thym.", "Couvrez et laissez mijoter 2 h 30 à feu très doux : la viande doit s'effilocher.", "Servez avec les pommes de terre cuites à l'eau ou à la vapeur."], lien:"", ingredients:[
    {nom:"Bœuf à mijoter", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Lardons", qte:"150", unite:"g", rayon:"Boucherie"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin rouge", qte:"50", unite:"cl", rayon:"Boissons"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"}]},

  { nom:"Hachis parmentier", emoji:"🥧", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Cuisez les pommes de terre à l'eau salée, écrasez-les avec le lait et un peu de beurre.", "Faites revenir l'oignon haché, ajoutez la viande hachée et laissez cuire 10 minutes.", "Étalez la viande au fond d'un plat, recouvrez de purée, lissez à la fourchette.", "Parsemez de gruyère et enfournez 25 minutes à 200 °C jusqu'à belle coloration."], lien:"", ingredients:[
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Pommes de terre", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Lasagnes bolognaise", emoji:"🍝", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites revenir l'oignon haché, ajoutez la viande puis le coulis de tomates. Mijotez 20 minutes.", "Préparez une béchamel avec le lait, un peu de beurre et de farine, jusqu'à épaississement.", "Alternez dans un plat : sauce, plaques, béchamel. Terminez par la béchamel.", "Couvrez de gruyère et enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Plaques à lasagnes", qte:"1", unite:"paquet(s)", rayon:"Épicerie"},
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Coulis de tomates", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Gruyère râpé", qte:"150", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Spaghettis bolognaise", emoji:"🍝", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites revenir l'oignon haché dans un peu d'huile.", "Ajoutez la viande, laissez colorer, versez le coulis de tomates.", "Salez, poivrez, laissez mijoter 20 minutes à découvert.", "Cuisez les spaghettis al dente, mélangez à la sauce et servez avec le parmesan."], lien:"", ingredients:[
    {nom:"Spaghettis", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Bœuf haché", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Coulis de tomates", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"50", unite:"g", rayon:"Crèmerie"}]},

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

  { nom:"Poulet au curry et riz", emoji:"🍛", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez le poulet en morceaux et faites-le dorer dans une sauteuse.", "Ajoutez l'oignon émincé, puis le curry, et remuez pour enrober.", "Versez le lait de coco, laissez mijoter 20 minutes à feu doux.", "Servez sur le riz basmati cuit à part."], lien:"", ingredients:[
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

  { nom:"Chili con carne", emoji:"🌶️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et le poivron en dés.", "Ajoutez la viande hachée, laissez colorer, puis les tomates concassées.", "Incorporez les haricots rouges égouttés, épicez à votre goût.", "Laissez mijoter 30 minutes à découvert. Servez avec le riz."], lien:"", ingredients:[
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Haricots rouges", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Curry de pois chiches", emoji:"🥘", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon haché avec le curry pour libérer les arômes.", "Ajoutez les pois chiches égouttés et le lait de coco.", "Laissez mijoter 15 minutes, puis incorporez les épinards jusqu'à ce qu'ils tombent.", "Servez avec le riz basmati."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Épinards", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curry en poudre", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Dahl de lentilles corail", emoji:"🍛", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et le gingembre râpé.", "Ajoutez les lentilles rincées, les tomates et le lait de coco.", "Complétez d'eau à hauteur et laissez cuire 20 minutes en remuant de temps en temps.", "Les lentilles doivent se défaire : rectifiez le sel et servez."], lien:"", ingredients:[
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
    {nom:"Gruyère râpé", qte:"120", unite:"g", rayon:"Crèmerie"}]},

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
    {nom:"Chèvre", qte:"1", unite:"bûche(s)", rayon:"Crèmerie"}]},

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
    {nom:"Menthe fraîche", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade niçoise", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites durcir les œufs 9 minutes, rafraîchissez-les et écalez-les.", "Cuisez les haricots verts 8 minutes à l'eau bouillante salée, gardez-les croquants.", "Coupez les tomates en quartiers, disposez tous les éléments dans un plat.", "Ajoutez le thon émietté et les olives, arrosez de vinaigrette."], lien:"", ingredients:[
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Haricots verts", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Olives noires", qte:"100", unite:"g", rayon:"Épicerie"}]},

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
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Saumon à l'oseille et riz", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Faites cuire les pavés de saumon 6 minutes à la poêle, côté peau d'abord.", "Dans une autre poêle, faites tomber l'oseille avec un peu de beurre.", "Ajoutez la crème, laissez réduire 3 minutes.", "Nappez le saumon de sauce et servez avec le riz."], lien:"", ingredients:[
    {nom:"Pavés de saumon", qte:"4", unite:"", rayon:"Poissonnerie"},
    {nom:"Crème liquide", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Oseille ou épinards", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

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

  { nom:"Couscous poulet-merguez", emoji:"🍛", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites dorer les cuisses de poulet, réservez. Faites griller les merguez à part.", "Faites revenir les légumes coupés en gros morceaux, couvrez d'eau, salez, épicez.", "Remettez le poulet, ajoutez les pois chiches, laissez mijoter 40 minutes.", "Préparez la semoule en la couvrant d'eau bouillante salée, égrenez à la fourchette.", "Servez la semoule, les légumes et les viandes séparément."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Merguez", qte:"8", unite:"", rayon:"Boucherie"},
    {nom:"Semoule", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"}]},

  { nom:"Tajine de légumes", emoji:"🥘", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon avec le ras el-hanout.", "Ajoutez les carottes et les courgettes en gros tronçons, couvrez d'eau à mi-hauteur.", "Ajoutez les pois chiches et les abricots secs, couvrez et laissez mijoter 35 minutes.", "Servez sur la semoule préparée à part."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Abricots secs", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Semoule", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Ras el-hanout", qte:"2", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Pizza maison", emoji:"🍕", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Étalez la pâte sur une plaque, étalez le coulis de tomates jusqu'aux bords.", "Répartissez les champignons émincés et la mozzarella en morceaux.", "Saupoudrez d'origan, arrosez d'un filet d'huile d'olive.", "Enfournez 12 minutes dans un four très chaud, à 250 °C."], lien:"", ingredients:[
    {nom:"Pâte à pizza", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Coulis de tomates", qte:"25", unite:"cl", rayon:"Épicerie"},
    {nom:"Mozzarella", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Champignons", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Origan", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

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
    {nom:"Gruyère râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

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

  { nom:"Wok de légumes et nouilles", emoji:"🥡", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Coupez les carottes et le poivron en fines lanières.", "Faites chauffer un wok très fort, saisissez les légumes 5 minutes en remuant sans cesse.", "Ajoutez les pousses de soja et la sauce soja.", "Incorporez les nouilles cuites, mélangez 2 minutes et servez aussitôt."], lien:"", ingredients:[
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

  { nom:"Gaspacho andalou", emoji:"🥒", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Coupez grossièrement les tomates, le concombre et le poivron.", "Mixez le tout avec l'ail et l'huile d'olive jusqu'à obtenir une texture bien lisse.", "Salez, poivrez, ajoutez un trait de vinaigre.", "Placez au moins 2 h au réfrigérateur : le gaspacho se sert très frais."], lien:"", ingredients:[
    {nom:"Tomates", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"5", unite:"cl", rayon:"Épicerie"}]},

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
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

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

  { nom:"Bœuf Stroganoff", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites saisir la viande émincée à feu vif, réservez.", "Faites revenir les oignons puis les champignons dans la même poêle.", "Ajoutez la moutarde et la crème, laissez épaissir 5 minutes.", "Remettez la viande juste pour la réchauffer. Servez sur les tagliatelles."], lien:"", ingredients:[
    {nom:"Bœuf à mijoter", qte:"700", unite:"g", rayon:"Boucherie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Tagliatelles", qte:"400", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poulet tikka masala", emoji:"🍛", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:[], etapes:["Faites mariner le poulet en morceaux dans le yaourt et les épices, 30 minutes si possible.", "Faites-le dorer à feu vif, réservez.", "Faites revenir le gingembre râpé, ajoutez les tomates, laissez réduire 10 minutes.", "Remettez le poulet, mijotez 15 minutes. Servez avec le riz basmati."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"700", unite:"g", rayon:"Boucherie"},
    {nom:"Tomates concassées", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Garam masala", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Curry de légumes au lait de coco", emoji:"🥘", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon avec la pâte de curry.", "Ajoutez les carottes en rondelles et le chou-fleur en bouquets.", "Versez le lait de coco, couvrez et laissez cuire 20 minutes.", "Servez avec le riz basmati."], lien:"", ingredients:[
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

  { nom:"Houmous et légumes croquants", emoji:"🫘", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Égouttez et rincez les pois chiches.", "Mixez-les avec le tahini, le jus de citron, un peu d'eau et de l'huile d'olive.", "Mixez longuement : c'est ce qui rend le houmous crémeux. Salez.", "Servez avec les carottes et le concombre en bâtonnets, et le pain pita tiède."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tahini", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pain pita", qte:"4", unite:"", rayon:"Boulangerie"}]},

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
    {nom:"Semoule", qte:"250", unite:"g", rayon:"Épicerie"}]},

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

  { nom:"Nouilles sautées au bœuf", emoji:"🥡", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Émincez le bœuf très finement et faites-le mariner 10 minutes dans la sauce soja.", "Saisissez-le à feu très vif 2 minutes, réservez.", "Faites sauter les carottes et le poivron en lanières.", "Ajoutez les nouilles cuites et la viande, mélangez 2 minutes."], lien:"", ingredients:[
    {nom:"Bœuf émincé", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Nouilles chinoises", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Poivron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"5", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Riz cantonais", emoji:"🍚", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Utilisez du riz cuit la veille : il tient mieux à la poêle.", "Faites une omelette fine, roulez-la et coupez-la en lanières.", "Faites sauter le riz à feu vif, ajoutez le jambon en dés et les petits pois.", "Incorporez l'omelette et la sauce soja, mélangez et servez."], lien:"", ingredients:[
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Jambon blanc", qte:"3", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Petits pois", qte:"200", unite:"g", rayon:"Surgelés"},
    {nom:"Sauce soja", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pad thaï aux crevettes", emoji:"🍜", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites tremper les nouilles de riz 10 minutes dans l'eau chaude.", "Saisissez les crevettes 2 minutes, réservez.", "Brouillez les œufs dans le wok, ajoutez les nouilles égouttées et la sauce.", "Remettez les crevettes, ajoutez les pousses de soja.", "Servez avec les cacahuètes concassées et le citron vert."], lien:"", ingredients:[
    {nom:"Nouilles de riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Crevettes décortiquées", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Pousses de soja", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Cacahuètes", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Paella express", emoji:"🥘", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites dorer les morceaux de poulet dans une grande poêle.", "Ajoutez les poivrons en lanières, puis le riz, remuez pour l'enrober.", "Versez deux fois son volume d'eau chaude avec le safran, laissez cuire 15 minutes sans remuer.", "Ajoutez les fruits de mer et les petits pois, poursuivez 5 minutes.", "Laissez reposer 5 minutes hors du feu avant de servir."], lien:"", ingredients:[
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
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  /* ---------------- Végétarien ---------------- */

  { nom:"Chili sin carne", emoji:"🌶️", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et le poivron en dés.", "Ajoutez les tomates concassées, les haricots rouges et le maïs égouttés.", "Épicez généreusement et laissez mijoter 25 minutes.", "Servez avec le riz."], lien:"", ingredients:[
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
    {nom:"Noix", qte:"50", unite:"g", rayon:"Épicerie"}]},

  { nom:"Tortilla espagnole", emoji:"🍳", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Coupez les pommes de terre en fines rondelles et l'oignon en lamelles.", "Faites-les cuire doucement dans l'huile 20 minutes, sans les colorer. Égouttez.", "Battez les œufs, mélangez-y les pommes de terre, laissez reposer 10 minutes.", "Cuisez à feu doux 8 minutes, retournez à l'aide d'une assiette, 5 minutes de plus."], lien:"", ingredients:[
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
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

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
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"}]},

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
    {nom:"Chèvre", qte:"1", unite:"bûche(s)", rayon:"Crèmerie"}]},

  { nom:"Soupe thaï au poulet", emoji:"🍜", type:"leger", vegetarien:false, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir le gingembre râpé, ajoutez le poulet en lanières.", "Versez le lait de coco et autant d'eau, laissez frémir 10 minutes.", "Ajoutez les nouilles de riz, poursuivez 4 minutes.", "Hors du feu, ajoutez le jus de citron vert et la coriandre."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"400", unite:"g", rayon:"Boucherie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Nouilles de riz", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Boulettes de poulet à l'indienne", emoji:"🍖", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Mélangez le poulet haché, la chapelure et le curry, formez des boulettes.", "Faites-les dorer de tous côtés.", "Versez le lait de coco, laissez mijoter 15 minutes à feu doux.", "Servez avec le riz basmati."], lien:"", ingredients:[
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

  { nom:"Cari de poisson créole", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites revenir les oignons avec le curcuma et le gingembre râpé.", "Ajoutez les tomates coupées en morceaux, laissez compoter 10 minutes.", "Posez les filets de poisson dessus, couvrez, laissez cuire 10 minutes à feu doux.", "Servez avec le riz."], lien:"", ingredients:[
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

  { nom:"Chakchouka", emoji:"🍳", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites revenir l'oignon et les poivrons en lanières 15 minutes.", "Ajoutez les tomates en morceaux et le cumin, laissez réduire 15 minutes.", "Creusez quatre puits, cassez un œuf dans chacun.", "Couvrez et laissez cuire 6 minutes : le blanc doit être pris, le jaune coulant.", "Servez à la poêle avec le pain."], lien:"", ingredients:[
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
    {nom:"Yaourt nature", qte:"1", unite:"pot(s)", rayon:"Crèmerie"}]},

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

  { nom:"Curry de crevettes au lait de coco", emoji:"🍤", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon émincé et l'ail dans un peu d'huile.", "Ajoutez la pâte de curry et remuez 1 minute pour la réveiller.", "Versez le lait de coco et laissez frémir 5 minutes.", "Ajoutez les crevettes et comptez 3 minutes : au-delà, elles durcissent.", "Servez avec le riz et un peu de coriandre."], lien:"", ingredients:[
    {nom:"Crevettes décortiquées", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Pâte de curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

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
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

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
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

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
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"}]},

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
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Filets de sole meunière", emoji:"🐟", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Farinez légèrement les filets et tapotez pour retirer l'excédent.", "Faites chauffer le beurre jusqu'à ce qu'il mousse, sans le laisser noircir.", "Déposez les filets et comptez 2 minutes par face.", "Retirez-les, ajoutez le jus de citron dans la poêle et laissez grésiller.", "Nappez les filets de ce beurre citronné, parsemez de persil."], lien:"", ingredients:[
    {nom:"Filets de sole", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Beurre", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Wok de crevettes aux légumes", emoji:"🍤", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez tous les légumes en fines lanières avant d'allumer le feu : après, tout va très vite.", "Saisissez les crevettes 2 minutes à feu vif, réservez-les.", "Faites sauter les légumes 5 minutes : ils doivent rester croquants.", "Remettez les crevettes, ajoutez la sauce soja et le gingembre râpé.", "Servez aussitôt sur des nouilles."], lien:"", ingredients:[
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
    {nom:"Échalotes", qte:"3", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Cordon bleu maison", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Ouvrez les escalopes en portefeuille sans les séparer complètement.", "Glissez une tranche de jambon et une de fromage à l'intérieur, refermez.", "Passez dans la farine, puis l'œuf battu, puis la chapelure.", "Faites dorer 5 minutes par face à feu moyen : le fromage doit fondre avant que la panure ne brûle.", "Servez avec des haricots verts ou une purée."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"4", unite:"", rayon:"Boucherie"},
    {nom:"Jambon blanc", qte:"4", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Emmental", qte:"4", unite:"tranche(s)", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"}]},

  { nom:"Osso buco de veau", emoji:"🥩", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Farinez les tranches de veau et faites-les dorer dans l'huile d'olive.", "Ajoutez l'oignon, la carotte et le céleri en petits dés.", "Déglacez au vin blanc, laissez évaporer, puis versez les tomates.", "Couvrez et laissez mijoter 1 h 30 à tout petit feu.", "Terminez avec le zeste de citron et le persil hachés ensemble."], lien:"", ingredients:[
    {nom:"Jarret de veau", qte:"4", unite:"tranche(s)", rayon:"Boucherie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Céleri", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Navarin d'agneau", emoji:"🐑", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["printemps"], etapes:["Faites dorer les morceaux d'agneau, saupoudrez de farine et remuez 2 minutes.", "Mouillez à hauteur, ajoutez l'ail et le thym, laissez mijoter 45 minutes.", "Ajoutez les navets et les carottes taillés en gros morceaux.", "Poursuivez 30 minutes, puis ajoutez les petits pois en fin de cuisson.", "La viande doit se défaire à la cuillère."], lien:"", ingredients:[
    {nom:"Épaule d'agneau", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Navets", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Petits pois", qte:"300", unite:"g", rayon:"Surgelés"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poulet yassa", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites mariner le poulet au moins 2 heures avec le jus de citron, l'oignon émincé et l'huile.", "Égouttez les morceaux et faites-les dorer à la poêle.", "Faites confire les oignons de la marinade 20 minutes à feu doux : ils doivent fondre.", "Remettez le poulet, ajoutez la moutarde et un verre d'eau.", "Laissez mijoter 30 minutes et servez avec du riz."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Oignons", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Keftas d'agneau et boulgour", emoji:"🍢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Mélangez la viande hachée avec l'oignon râpé, le cumin, la menthe et un peu de sel.", "Formez des boudins autour de piques, ou de simples boulettes allongées.", "Faites-les griller 4 minutes par face.", "Faites gonfler le boulgour dans le double d'eau bouillante, à couvert.", "Servez avec du yaourt et un filet de citron."], lien:"", ingredients:[
    {nom:"Agneau haché", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Boulgour", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Porc au caramel", emoji:"🥢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez le porc en cubes réguliers.", "Faites un caramel à sec avec le sucre, puis stoppez-le avec la sauce soja — attention aux projections.", "Ajoutez la viande et enrobez-la bien.", "Versez un verre d'eau, le gingembre râpé, et laissez réduire 20 minutes à feu doux.", "La sauce doit napper la viande. Servez avec du riz."], lien:"", ingredients:[
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
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

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
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Poulet tandoori et riz", emoji:"🍗", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Mélangez le yaourt, les épices tandoori, l'ail et le jus de citron.", "Entaillez les morceaux de poulet et enrobez-les de cette marinade.", "Laissez reposer au frais au moins 2 heures, une nuit si vous pouvez.", "Enfournez 35 minutes à 200 °C en retournant à mi-cuisson.", "Servez avec du riz basmati et du concombre au yaourt."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Épices tandoori", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Boulettes suédoises", emoji:"🍽️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Trempez la chapelure dans le lait, puis mélangez-la à la viande, l'œuf et l'oignon râpé.", "Assaisonnez de muscade et formez des boulettes de la taille d'une noix.", "Faites-les dorer à la poêle en les roulant, réservez.", "Dans la même poêle, faites un roux avec le beurre et la farine, mouillez de bouillon puis de crème.", "Remettez les boulettes 10 minutes dans la sauce. Servez avec une purée."], lien:"", ingredients:[
    {nom:"Bœuf haché", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Chapelure", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

  { nom:"Émincé de dinde à la crème", emoji:"🦃", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les escalopes en lanières.", "Saisissez-les 3 minutes à feu vif, réservez : trop cuites, elles deviennent sèches.", "Faites suer les champignons émincés jusqu'à ce que leur eau s'évapore.", "Ajoutez la crème, la moutarde, laissez épaissir 5 minutes.", "Remettez la viande juste pour la réchauffer. Servez avec des tagliatelles."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Tagliatelles", qte:"400", unite:"g", rayon:"Épicerie"}]},

  { nom:"Bo bun au bœuf", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites tremper les vermicelles de riz dans l'eau bouillante, puis rincez-les à l'eau froide.", "Faites mariner le bœuf émincé avec la sauce soja, l'ail et un peu de sucre.", "Saisissez-le 2 minutes à feu très vif.", "Dressez dans un grand bol : vermicelles, carotte râpée, concombre, salade, viande.", "Arrosez de sauce nuoc-mâm allongée d'eau et de citron, parsemez de cacahuètes."], lien:"", ingredients:[
    {nom:"Bœuf à griller", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Vermicelles de riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cacahuètes", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Sucre", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Veau Marengo", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites dorer les morceaux de veau, saupoudrez de farine et remuez.", "Ajoutez l'oignon, l'ail et les tomates concassées.", "Mouillez au vin blanc, ajoutez le bouquet garni.", "Couvrez et laissez mijoter 1 h 15 à feu doux.", "Ajoutez les champignons 20 minutes avant la fin."], lien:"", ingredients:[
    {nom:"Épaule de veau", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"20", unite:"cl", rayon:"Boissons"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Rougail saucisse", emoji:"🌶️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites bouillir les saucisses 10 minutes pour les dessaler, puis coupez-les en tronçons.", "Faites-les dorer à la poêle, réservez.", "Faites revenir les oignons, l'ail, le gingembre et le curcuma.", "Ajoutez les tomates, laissez compoter 10 minutes.", "Remettez les saucisses, couvrez et laissez mijoter 25 minutes. Servez avec du riz."], lien:"", ingredients:[
    {nom:"Saucisses fumées", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Tomates", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Tian de légumes provençal", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites fondre les oignons émincés au fond d'un plat à gratin.", "Coupez courgettes, aubergines et tomates en rondelles de même épaisseur.", "Rangez-les debout en les alternant, bien serrées.", "Arrosez d'huile d'olive, salez, parsemez de thym et d'ail haché.", "Enfournez 1 heure à 180 °C : les légumes doivent confire, pas bouillir."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Aubergines", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Thym", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"}]},

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
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Curry de patate douce", emoji:"🍠", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, l'ail et le gingembre.", "Ajoutez le curry et remuez 1 minute.", "Versez les patates douces en cubes, le lait de coco et un verre d'eau.", "Laissez mijoter 25 minutes à couvert.", "Ajoutez les épinards en fin de cuisson, juste le temps qu'ils tombent."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Épinards", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Soupe de nouilles au miso", emoji:"🍜", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Portez un litre d'eau à frémissement — surtout pas à ébullition.", "Délayez le miso dans une louche d'eau chaude avant de l'incorporer.", "Ajoutez les champignons émincés et le tofu en dés, laissez 5 minutes.", "Faites cuire les nouilles à part et répartissez-les dans les bols.", "Versez le bouillon dessus, parsemez d'oignons nouveaux."], lien:"", ingredients:[
    {nom:"Pâte de miso", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Nouilles chinoises", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Tofu", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Champignons de Paris", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"3", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Riz sauté aux légumes et œuf", emoji:"🍚", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Utilisez du riz cuit la veille : froid, il ne colle pas.", "Faites sauter les légumes en petits dés 5 minutes à feu vif.", "Poussez-les sur le côté, versez les œufs battus et brouillez-les rapidement.", "Ajoutez le riz, mélangez tout et laissez-le grésiller sans trop remuer.", "Assaisonnez de sauce soja et servez aussitôt."], lien:"", ingredients:[
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
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"}]},

  { nom:"Tarte aux épinards et ricotta", emoji:"🥧", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["printemps", "automne"], etapes:["Faites tomber les épinards, puis pressez-les pour retirer toute l'eau.", "Mélangez-les avec la ricotta, les œufs et la muscade.", "Étalez la pâte dans le moule et versez l'appareil.", "Parsemez de parmesan.", "Enfournez 35 minutes à 190 °C, jusqu'à ce que le dessus soit doré."], lien:"", ingredients:[
    {nom:"Pâte brisée", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Épinards", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"}]},

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
    {nom:"Miel", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Taboulé libanais", emoji:"🌿", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites gonfler le boulgour 15 minutes dans un peu d'eau tiède.", "Hachez le persil très finement : dans ce taboulé-là, c'est l'ingrédient principal.", "Coupez les tomates en tout petits dés et ciselez les oignons nouveaux.", "Mélangez le tout avec le jus de citron et l'huile d'olive.", "Laissez reposer 1 heure au frais avant de servir."], lien:"", ingredients:[
    {nom:"Boulgour", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"3", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignons nouveaux", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade grecque", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez les tomates en quartiers généreux et le concombre en demi-rondelles épaisses.", "Émincez l'oignon rouge très finement.", "Ajoutez les olives et la féta en gros cubes — surtout pas émiettée.", "Arrosez d'huile d'olive et d'origan, ne salez qu'à peine : la féta l'est déjà.", "Servez sans laisser attendre, avec du pain."], lien:"", ingredients:[
    {nom:"Tomates", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Féta", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Olives noires", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Soupe de chou-fleur au curcuma", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Détaillez le chou-fleur en bouquets.", "Faites revenir l'oignon avec le curcuma pour le réveiller.", "Ajoutez le chou-fleur, la pomme de terre et couvrez de bouillon.", "Laissez cuire 20 minutes, jusqu'à ce que la lame d'un couteau s'enfonce sans effort.", "Mixez longuement, ajoutez la crème hors du feu."], lien:"", ingredients:[
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"}]},

  { nom:"Pâtes aux brocolis et amandes", emoji:"🥦", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les brocolis 8 minutes dans l'eau des pâtes, puis récupérez-les.", "Faites cuire les pâtes dans la même eau.", "Pendant ce temps, faites blondir l'ail et les amandes effilées dans l'huile d'olive.", "Écrasez grossièrement les brocolis à la fourchette dans la poêle.", "Mélangez aux pâtes avec un peu d'eau de cuisson et du parmesan."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Brocoli", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Amandes effilées", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Ail", qte:"2", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Pâtes à la crème de courgettes", emoji:"🍝", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["ete"], etapes:["Faites revenir les courgettes en rondelles avec l'oignon, 15 minutes à couvert.", "Mixez avec la ricotta et un peu d'eau de cuisson des pâtes.", "Faites cuire les pâtes al dente.", "Mélangez-les à la crème de courgettes hors du feu.", "Parsemez de basilic et de parmesan."], lien:"", ingredients:[
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Ricotta", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Polenta crémeuse aux champignons", emoji:"🌽", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Portez le lait et l'eau à frémissement, salez.", "Versez la polenta en pluie en fouettant sans arrêt pour éviter les grumeaux.", "Remuez 5 à 10 minutes, jusqu'à ce qu'elle épaississe, puis incorporez le beurre et le parmesan.", "Faites sauter les champignons à feu vif avec l'ail et le persil.", "Servez la polenta bien crémeuse, les champignons dessus."], lien:"", ingredients:[
    {nom:"Polenta", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Gratin de patates douces", emoji:"🍠", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez les patates douces en fines rondelles, à la mandoline si vous en avez une.", "Frottez le plat avec une gousse d'ail.", "Rangez les rondelles en couches, salez et poivrez entre chacune.", "Versez la crème mélangée au lait, jusqu'à affleurer.", "Enfournez 50 minutes à 180 °C, couvert les 30 premières minutes."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Lait", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Ail", qte:"1", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Curry de chou-fleur et pois chiches", emoji:"🍛", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon avec les épices jusqu'à ce que ça sente bon.", "Ajoutez le chou-fleur en bouquets et enrobez-le bien.", "Versez les tomates et les pois chiches égouttés.", "Laissez mijoter 25 minutes à couvert.", "Terminez avec un filet de citron et de la coriandre."], lien:"", ingredients:[
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Caponata sicilienne", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites revenir les aubergines en cubes dans l'huile d'olive, en plusieurs fois.", "Faites suer le céleri et l'oignon à part, ajoutez les tomates.", "Réunissez le tout, ajoutez les olives et les câpres.", "Versez le vinaigre et le sucre : c'est l'aigre-doux qui fait la caponata.", "Laissez compoter 20 minutes. Elle est meilleure tiède, ou le lendemain."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Céleri", qte:"3", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Olives vertes", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Câpres", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de vin", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sucre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Aubergines à la parmigiana", emoji:"🍆", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les aubergines en tranches, salez-les et laissez dégorger 30 minutes.", "Épongez-les et faites-les griller à la poêle, sans les noyer d'huile.", "Préparez une sauce tomate avec l'ail et le basilic, laissez réduire 20 minutes.", "Alternez dans un plat : aubergines, sauce, mozzarella, parmesan.", "Enfournez 35 minutes à 180 °C et laissez reposer 10 minutes avant de servir."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coulis de tomate", qte:"70", unite:"cl", rayon:"Épicerie"},
    {nom:"Mozzarella", qte:"250", unite:"g", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"80", unite:"g", rayon:"Crèmerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

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
    {nom:"Ciboulette", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Soupe de haricots blancs", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, la carotte et le céleri en petits dés.", "Ajoutez les haricots égouttés, la tomate et le bouillon.", "Laissez frémir 20 minutes.", "Mixez la moitié de la soupe seulement : on garde ainsi de la mâche.", "Servez avec un filet d'huile d'olive et du romarin."], lien:"", ingredients:[
    {nom:"Haricots blancs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Céleri", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"75", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Croquettes de riz au fromage", emoji:"🧀", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Mélangez le riz cuit refroidi avec les œufs et le parmesan.", "Prenez une cuillerée dans la main, glissez un dé de mozzarella au centre et refermez en boule.", "Roulez les boules dans la chapelure.", "Faites-les dorer à la poêle dans un peu d'huile, en les tournant régulièrement.", "Servez avec une sauce tomate et de la salade."], lien:"", ingredients:[
    {nom:"Riz", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Mozzarella", qte:"200", unite:"g", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"2", unite:"", rayon:"Crèmerie"},
    {nom:"Chapelure", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Parmesan", qte:"60", unite:"g", rayon:"Crèmerie"}]},

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
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"}]},

  { nom:"Salade de chèvre chaud", emoji:"🧀", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez le fromage de chèvre en rondelles et posez-les sur des tranches de pain.", "Arrosez d'un filet de miel.", "Passez 5 minutes sous le gril, jusqu'à ce que le fromage blondisse.", "Préparez une vinaigrette au vinaigre balsamique.", "Dressez la salade, les toasts chauds dessus, et les noix."], lien:"", ingredients:[
    {nom:"Fromage de chèvre", qte:"2", unite:"bûche(s)", rayon:"Crèmerie"},
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"},
    {nom:"Salade verte", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Miel", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Noix", qte:"60", unite:"g", rayon:"Épicerie"}]},

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

  { nom:"Curry de poisson aux épinards", emoji:"🐟", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon avec le curry et le gingembre râpé.", "Versez le lait de coco et laissez frémir 5 minutes.", "Ajoutez les épinards et laissez-les tomber.", "Déposez les morceaux de poisson et couvrez : 8 minutes à feu doux suffisent.", "Ne remuez pas, le poisson se déferait. Servez avec du riz."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Épinards", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Salade de lentilles au haddock", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les lentilles 20 minutes dans l'eau non salée : le sel les durcit.", "Pochez le haddock 5 minutes dans du lait chaud pour l'adoucir, puis émiettez-le.", "Préparez une vinaigrette bien moutardée avec l'échalote ciselée.", "Mélangez lentilles tièdes, haddock et vinaigrette.", "Parsemez de persil et servez tiède."], lien:"", ingredients:[
    {nom:"Haddock", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Échalotes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Moutarde", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

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

  { nom:"Tacos de poisson", emoji:"🌮", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez le poisson en gros morceaux, enrobez-les de paprika et de cumin.", "Faites-les saisir 4 minutes à la poêle.", "Râpez le chou et mélangez-le au yaourt et au jus de citron vert.", "Réchauffez les tortillas 30 secondes à la poêle sèche.", "Garnissez de poisson, de salade de chou et d'avocat."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Tortillas", qte:"8", unite:"", rayon:"Boulangerie"},
    {nom:"Chou blanc", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Soupe thaï aux crevettes", emoji:"🍜", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites frémir le lait de coco avec la citronnelle, le gingembre et la pâte de curry.", "Laissez infuser 10 minutes à feu doux, sans bouillir.", "Ajoutez les champignons émincés, puis les crevettes.", "Comptez 3 minutes : elles sont cuites dès qu'elles rosissent.", "Terminez au jus de citron vert et à la coriandre."], lien:"", ingredients:[
    {nom:"Crevettes décortiquées", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citronnelle", qte:"2", unite:"branche(s)", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

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
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Daurade au four et pommes de terre", emoji:"🐟", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Coupez les pommes de terre en fines rondelles et disposez-les au fond du plat avec l'oignon.", "Arrosez d'huile d'olive, salez, enfournez 20 minutes à 200 °C.", "Posez la daurade vidée dessus, avec du thym et des rondelles de citron.", "Arrosez de vin blanc et poursuivez 25 minutes.", "La chair doit se détacher facilement de l'arête centrale."], lien:"", ingredients:[
    {nom:"Daurade", qte:"2", unite:"", rayon:"Poissonnerie"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Vin blanc", qte:"15", unite:"cl", rayon:"Boissons"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Pâtes aux sardines et fenouil", emoji:"🍝", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Émincez le fenouil et faites-le fondre 15 minutes à l'huile d'olive.", "Ajoutez les raisins secs, les pignons et les sardines égouttées.", "Écrasez grossièrement à la fourchette.", "Faites cuire les pâtes et gardez une louche d'eau de cuisson.", "Mélangez le tout, allongez avec l'eau de cuisson jusqu'à obtenir une sauce liée."], lien:"", ingredients:[
    {nom:"Sardines en boîte", qte:"3", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Fenouil", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pâtes", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Raisins secs", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Pignons de pin", qte:"50", unite:"g", rayon:"Épicerie"}]},

  { nom:"Bouillabaisse express", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir le poireau, l'oignon et le fenouil émincés.", "Ajoutez les tomates, l'ail, le safran et couvrez d'eau.", "Laissez frémir 20 minutes, puis mixez ou laissez tel quel.", "Ajoutez les poissons en morceaux et les moules, comptez 10 minutes.", "Servez avec des croûtons frottés à l'ail."], lien:"", ingredients:[
    {nom:"Filets de poisson blanc", qte:"600", unite:"g", rayon:"Poissonnerie"},
    {nom:"Moules", qte:"500", unite:"g", rayon:"Poissonnerie"},
    {nom:"Fenouil", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Safran", qte:"1", unite:"pincée(s)", rayon:"Épicerie"},
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"}]},

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
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Boulettes d'agneau à la menthe", emoji:"🍢", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["printemps", "ete"], etapes:["Mélangez la viande hachée avec l'oignon râpé, la menthe et le cumin.", "Formez des boulettes de la taille d'une noix.", "Faites-les dorer 8 minutes en les roulant dans la poêle.", "Ajoutez les tomates concassées et laissez mijoter 15 minutes.", "Servez avec de la semoule et du yaourt."], lien:"", ingredients:[
    {nom:"Agneau haché", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Semoule", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"}]},

  { nom:"Curry de poulet aux épinards", emoji:"🍗", type:"consistant", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon, l'ail et le gingembre.", "Ajoutez le curry et le poulet en morceaux, enrobez bien.", "Versez le yaourt cuillère par cuillère en remuant : versé d'un coup, il tranche.", "Laissez mijoter 25 minutes à couvert.", "Ajoutez les épinards en fin de cuisson, juste le temps qu'ils fondent."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"600", unite:"g", rayon:"Boucherie"},
    {nom:"Épinards", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"3", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz basmati", qte:"300", unite:"g", rayon:"Épicerie"}]},

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
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Chou farci", emoji:"🥬", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Blanchissez les feuilles de chou 5 minutes à l'eau bouillante, égouttez-les à plat.", "Mélangez la viande hachée, le riz cru, l'oignon et l'œuf.", "Garnissez chaque feuille et roulez-la en serrant.", "Rangez les paupiettes dans une cocotte, couvrez de bouillon tomaté.", "Laissez mijoter 1 h 15 à couvert, à tout petit feu."], lien:"", ingredients:[
    {nom:"Chou vert", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Riz", qte:"100", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Coulis de tomate", qte:"50", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Tomates farcies", emoji:"🍅", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les chapeaux des tomates, videz-les et salez l'intérieur : elles rendront leur eau.", "Mélangez la chair hachée avec la viande, l'oignon, l'ail et le persil.", "Garnissez généreusement, remettez les chapeaux.", "Disposez le riz autour dans le plat avec un verre d'eau.", "Enfournez 1 heure à 180 °C."], lien:"", ingredients:[
    {nom:"Tomates", qte:"8", unite:"", rayon:"Fruits & légumes"},
    {nom:"Chair à saucisse", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Riz", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Poivrons farcis à la viande", emoji:"🫑", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete", "automne"], etapes:["Coupez les poivrons en deux dans la longueur, retirez graines et cloisons.", "Faites revenir l'oignon et la viande hachée, ajoutez les tomates et le riz cuit.", "Assaisonnez de cumin et de paprika.", "Garnissez les demi-poivrons, posez-les dans un plat huilé.", "Enfournez 40 minutes à 190 °C, en couvrant les 20 premières minutes."], lien:"", ingredients:[
    {nom:"Poivrons", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Riz", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

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
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Poulet mafé", emoji:"🥜", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites dorer les morceaux de poulet, réservez.", "Faites revenir l'oignon, ajoutez le concentré de tomate et laissez cuire 2 minutes.", "Délayez la pâte d'arachide dans un peu d'eau chaude et versez-la.", "Remettez le poulet, ajoutez les carottes et le chou en gros morceaux.", "Laissez mijoter 45 minutes : la sauce doit épaissir et prendre une couleur ambrée."], lien:"", ingredients:[
    {nom:"Cuisses de poulet", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Pâte d'arachide", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Concentré de tomate", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Carottes", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Chou blanc", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Colombo de porc", emoji:"🌶️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites mariner le porc 1 heure avec l'ail, le citron vert et la poudre à colombo.", "Faites-le dorer, ajoutez l'oignon et les courgettes en cubes.", "Versez de l'eau à hauteur et laissez mijoter 45 minutes.", "Ajoutez les pommes de terre 20 minutes avant la fin.", "Rectifiez au citron vert juste avant de servir."], lien:"", ingredients:[
    {nom:"Sauté de porc", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Poudre à colombo", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"500", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Saucisse de Toulouse et haricots blancs", emoji:"🌭", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites dorer les saucisses de tous côtés, réservez-les.", "Faites revenir l'oignon et l'ail dans la graisse rendue.", "Ajoutez les haricots égouttés et les tomates concassées.", "Remettez les saucisses, couvrez et laissez mijoter 25 minutes.", "Parsemez de persil au moment de servir."], lien:"", ingredients:[
    {nom:"Saucisses de Toulouse", qte:"6", unite:"", rayon:"Boucherie"},
    {nom:"Haricots blancs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Blanquette de dinde", emoji:"🦃", type:"consistant", vegetarien:false, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir la dinde sans la colorer, couvrez d'eau à hauteur.", "Ajoutez carottes, poireau et oignon piqué, laissez frémir 40 minutes.", "Faites un roux avec le beurre et la farine, mouillez avec le bouillon filtré.", "Ajoutez la crème hors du feu, puis la viande et les champignons.", "Servez avec du riz."], lien:"", ingredients:[
    {nom:"Escalopes de dinde", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Carottes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Champignons de Paris", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Pot-au-feu", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Mettez la viande dans l'eau froide et portez doucement à frémissement.", "Écumez soigneusement pendant le premier quart d'heure : c'est ce qui donne un bouillon clair.", "Ajoutez l'oignon piqué de clous de girofle et laissez cuire 2 heures.", "Ajoutez carottes, navets et poireaux, poursuivez 45 minutes.", "Servez le bouillon d'abord, la viande et les légumes ensuite."], lien:"", ingredients:[
    {nom:"Bœuf à pot-au-feu", qte:"1,2", unite:"kg", rayon:"Boucherie"},
    {nom:"Carottes", qte:"6", unite:"", rayon:"Fruits & légumes"},
    {nom:"Navets", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poireaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Curry rouge de bœuf", emoji:"🌶️", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Faites chauffer la pâte de curry dans un peu de lait de coco jusqu'à ce qu'elle parfume.", "Ajoutez le bœuf en cubes et enrobez-le.", "Versez le reste du lait de coco et laissez mijoter 1 h 15 à petit feu.", "Ajoutez les haricots verts et les poivrons 15 minutes avant la fin.", "Terminez au basilic thaï et servez avec du riz."], lien:"", ingredients:[
    {nom:"Bœuf à mijoter", qte:"800", unite:"g", rayon:"Boucherie"},
    {nom:"Pâte de curry rouge", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Haricots verts", qte:"300", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

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

  { nom:"Wok de porc aux légumes croquants", emoji:"🥢", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Taillez tous les légumes en fines lanières avant d'allumer le feu.", "Saisissez le porc émincé 3 minutes à feu vif, réservez.", "Faites sauter les légumes 4 minutes : ils doivent rester fermes.", "Remettez la viande, ajoutez la sauce soja et le gingembre.", "Servez immédiatement, sur du riz ou des nouilles."], lien:"", ingredients:[
    {nom:"Filet mignon de porc", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Brocoli", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Nouilles chinoises", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Travers de porc au miel", emoji:"🍖", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:[], etapes:["Mélangez le miel, la sauce soja, l'ail et le gingembre.", "Badigeonnez les travers et laissez mariner 2 heures au frais.", "Enfournez 1 heure à 160 °C, en arrosant toutes les 20 minutes.", "Montez à 220 °C les 10 dernières minutes pour laquer.", "Servez avec du riz et des légumes vapeur."], lien:"", ingredients:[
    {nom:"Travers de porc", qte:"1,2", unite:"kg", rayon:"Boucherie"},
    {nom:"Miel", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Sauce soja", qte:"6", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Rôti de dinde aux marrons", emoji:"🦃", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["hiver"], etapes:["Faites dorer le rôti de tous côtés dans une cocotte.", "Ajoutez les oignons émincés et un verre de bouillon.", "Couvrez et laissez cuire 1 heure à feu doux.", "Ajoutez les marrons 20 minutes avant la fin.", "Laissez reposer 10 minutes avant de trancher : la viande sera plus moelleuse."], lien:"", ingredients:[
    {nom:"Rôti de dinde", qte:"1", unite:"kg", rayon:"Boucherie"},
    {nom:"Marrons cuits", qte:"400", unite:"g", rayon:"Épicerie"},
    {nom:"Oignons", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"800", unite:"g", rayon:"Fruits & légumes"}]},

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
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Gratin de courgettes à la viande", emoji:"🥒", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites revenir les courgettes en rondelles jusqu'à ce qu'elles rendent leur eau.", "Faites cuire la viande hachée avec l'oignon et l'ail.", "Mélangez le tout dans un plat à gratin.", "Battez les œufs avec la crème, versez sur le mélange.", "Parsemez de fromage râpé et enfournez 30 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"4", unite:"", rayon:"Fruits & légumes"},
    {nom:"Bœuf haché", qte:"500", unite:"g", rayon:"Boucherie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Crème fraîche", qte:"20", unite:"cl", rayon:"Crèmerie"},
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Poule au pot", emoji:"🍲", type:"consistant", vegetarien:false, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Plongez la poule dans l'eau froide, portez à frémissement et écumez.", "Ajoutez l'oignon piqué, le bouquet garni, laissez cuire 1 h 30.", "Ajoutez carottes, navets et poireaux, poursuivez 40 minutes.", "Faites cuire le riz dans une partie du bouillon.", "Servez la volaille entourée de ses légumes, le bouillon à part."], lien:"", ingredients:[
    {nom:"Poule", qte:"1", unite:"", rayon:"Boucherie"},
    {nom:"Carottes", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poireaux", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Navets", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},
  { nom:"Galettes de pois chiches", emoji:"🧆", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Mixez les pois chiches égouttés avec l'ail, le cumin et la coriandre.", "Ajoutez la farine jusqu'à obtenir une pâte qui se tient.", "Formez des galettes avec les mains humides.", "Faites-les dorer 4 minutes par face dans un peu d'huile.", "Servez avec une sauce au yaourt et au citron."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Farine", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"}]},

  { nom:"Lentilles à la tomate et féta", emoji:"🫘", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et l'ail dans l'huile d'olive.", "Ajoutez les tomates concassées et le cumin, laissez compoter 10 minutes.", "Versez les lentilles cuites et réchauffez le tout 5 minutes.", "Émiettez la féta par-dessus hors du feu.", "Terminez par un filet d'huile d'olive et du persil."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Féta", qte:"150", unite:"g", rayon:"Crèmerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Soupe de patate douce au gingembre", emoji:"🍠", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et le gingembre râpé.", "Ajoutez les patates douces en cubes et couvrez de bouillon.", "Laissez cuire 20 minutes.", "Mixez très finement, puis incorporez le lait de coco.", "Servez avec quelques graines de courge grillées."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"75", unite:"cl", rayon:"Épicerie"},
    {nom:"Graines de courge", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Velouté de céleri-rave", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Épluchez le céleri généreusement : la peau est fibreuse.", "Faites-le revenir avec l'oignon et la pomme de terre.", "Couvrez de bouillon et laissez cuire 25 minutes.", "Mixez longuement pour obtenir une texture très lisse.", "Ajoutez la crème hors du feu et parsemez de noisettes concassées."], lien:"", ingredients:[
    {nom:"Céleri-rave", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Pommes de terre", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Noisettes", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"}]},

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

  { nom:"Wok de tofu aux légumes", emoji:"🥢", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Pressez le tofu 15 minutes entre deux assiettes pour en chasser l'eau.", "Coupez-le en cubes et faites-le dorer sur toutes les faces.", "Réservez-le, faites sauter les légumes 5 minutes à feu vif.", "Remettez le tofu, ajoutez la sauce soja et le sésame.", "Servez sur du riz, aussitôt."], lien:"", ingredients:[
    {nom:"Tofu", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Brocoli", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Graines de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Chili de patate douce", emoji:"🍠", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, l'ail et le poivron.", "Ajoutez les épices et remuez 1 minute pour les réveiller.", "Versez les patates douces en cubes, les tomates et les haricots rouges.", "Laissez mijoter 30 minutes à couvert.", "Servez avec du riz, du yaourt et de la coriandre."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Haricots rouges", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"}]},

  { nom:"Halloumi grillé et salade de tomates", emoji:"🧀", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Coupez le halloumi en tranches épaisses et séchez-les.", "Faites-les griller 2 minutes par face dans une poêle très chaude, sans matière grasse.", "Coupez les tomates en quartiers, ajoutez l'oignon rouge et la menthe.", "Assaisonnez d'huile d'olive et de citron.", "Posez le halloumi encore chaud sur la salade et servez sans attendre."], lien:"", ingredients:[
    {nom:"Halloumi", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Tomates", qte:"5", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Œufs pochés à la florentine", emoji:"🥚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "automne"], etapes:["Faites tomber les épinards au beurre, égouttez-les et liez-les à la crème.", "Portez une casserole d'eau vinaigrée à frémissement, sans bouillir.", "Cassez chaque œuf dans un ramequin puis faites-le glisser dans l'eau.", "Comptez 3 minutes, sortez à l'écumoire et épongez.", "Posez les œufs sur les épinards, râpez du parmesan par-dessus."], lien:"", ingredients:[
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Épinards", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Crème fraîche", qte:"10", unite:"cl", rayon:"Crèmerie"},
    {nom:"Parmesan", qte:"50", unite:"g", rayon:"Crèmerie"},
    {nom:"Vinaigre de vin", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Soupe de panais aux noisettes", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon et les panais en morceaux.", "Couvrez de bouillon et laissez cuire 25 minutes.", "Mixez jusqu'à obtenir une crème lisse.", "Faites torréfier les noisettes à sec et concassez-les.", "Servez la soupe parsemée de noisettes et d'un filet d'huile."], lien:"", ingredients:[
    {nom:"Panais", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noisettes", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"}]},

  { nom:"Salade de pois chiches au cumin", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Égouttez et rincez les pois chiches.", "Coupez le concombre, les tomates et l'oignon rouge en petits dés.", "Préparez une vinaigrette au citron, à l'huile d'olive et au cumin.", "Mélangez tout et laissez reposer 30 minutes au frais.", "Ajoutez la menthe ciselée au dernier moment."], lien:"", ingredients:[
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Gratin d'aubergines au chèvre", emoji:"🍆", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Coupez les aubergines en tranches et faites-les griller au four 20 minutes.", "Préparez une sauce tomate avec l'ail et le basilic.", "Alternez aubergines, sauce et rondelles de chèvre dans un plat.", "Terminez par du chèvre et un filet d'huile d'olive.", "Enfournez 25 minutes à 190 °C."], lien:"", ingredients:[
    {nom:"Aubergines", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Fromage de chèvre", qte:"2", unite:"bûche(s)", rayon:"Crèmerie"},
    {nom:"Coulis de tomate", qte:"50", unite:"cl", rayon:"Épicerie"},
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"4", unite:"c. à soupe", rayon:"Épicerie"}]},

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
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

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
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"}]},

  { nom:"Curry de haricots rouges", emoji:"🍛", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:[], etapes:["Faites revenir l'oignon, l'ail et le gingembre.", "Ajoutez les épices et laissez-les crépiter quelques secondes.", "Versez les tomates et les haricots rouges égouttés.", "Laissez mijoter 20 minutes en écrasant un peu de haricots pour épaissir.", "Servez avec du riz et de la coriandre."], lien:"", ingredients:[
    {nom:"Haricots rouges", qte:"3", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Curry", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Nouilles soba aux légumes", emoji:"🍜", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire les nouilles de sarrasin 5 minutes, rincez-les à l'eau froide.", "Faites sauter les légumes en julienne 4 minutes à feu vif.", "Mélangez sauce soja, vinaigre de riz, sésame et un peu de miel.", "Réunissez nouilles, légumes et sauce hors du feu.", "Parsemez de graines de sésame et d'oignons nouveaux."], lien:"", ingredients:[
    {nom:"Nouilles de sarrasin", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Chou blanc", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Sauce soja", qte:"4", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Graines de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Miel", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

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
    {nom:"Pain", qte:"1", unite:"", rayon:"Boulangerie"}]},

  { nom:"Poêlée de blettes à la tomate", emoji:"🥬", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["printemps", "automne"], etapes:["Séparez les côtes des feuilles : elles ne cuisent pas à la même vitesse.", "Faites revenir l'ail, ajoutez les côtes coupées en tronçons, 10 minutes.", "Ajoutez les tomates concassées et laissez mijoter 10 minutes.", "Incorporez les feuilles ciselées en fin de cuisson, 3 minutes suffisent.", "Servez avec du riz ou des pois chiches."], lien:"", ingredients:[
    {nom:"Blettes", qte:"1", unite:"kg", rayon:"Fruits & légumes"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Ail", qte:"3", unite:"gousse(s)", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Tofu mariné au sésame", emoji:"🍚", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Pressez le tofu puis coupez-le en cubes.", "Laissez-le mariner 30 minutes dans la sauce soja, le sésame, l'ail et le gingembre.", "Faites-le dorer à la poêle sans le remuer trop souvent.", "Versez le reste de marinade en fin de cuisson pour le laquer.", "Servez sur du riz avec des oignons nouveaux."], lien:"", ingredients:[
    {nom:"Tofu", qte:"400", unite:"g", rayon:"Crèmerie"},
    {nom:"Sauce soja", qte:"5", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Graines de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Riz", qte:"300", unite:"g", rayon:"Épicerie"}]},

  { nom:"Soupe de carottes au lait de coco", emoji:"🥕", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon avec le curcuma et le gingembre.", "Ajoutez les carottes en rondelles et couvrez de bouillon.", "Laissez cuire 25 minutes.", "Mixez, puis incorporez le lait de coco hors du feu.", "Servez avec un trait de citron vert."], lien:"", ingredients:[
    {nom:"Carottes", qte:"800", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Bouillon de légumes", qte:"75", unite:"cl", rayon:"Épicerie"}]},

  { nom:"Gratin de chou-fleur au curry", emoji:"🥬", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire le chou-fleur 12 minutes à l'eau bouillante, égouttez soigneusement.", "Préparez une béchamel, parfumez-la au curry.", "Mélangez le chou-fleur à la sauce dans un plat.", "Couvrez de fromage râpé et de chapelure.", "Enfournez 25 minutes à 200 °C."], lien:"", ingredients:[
    {nom:"Chou-fleur", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Lait", qte:"50", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Curry", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Fromage râpé", qte:"100", unite:"g", rayon:"Crèmerie"}]},

  { nom:"Salade de mâche, noix et pommes", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Lavez la mâche délicatement, elle est fragile, et essorez-la bien.", "Coupez les pommes en fines lamelles, arrosez-les de citron pour qu'elles ne noircissent pas.", "Concassez les noix grossièrement.", "Préparez une vinaigrette à l'huile de noix et au vinaigre de cidre.", "Assemblez au dernier moment."], lien:"", ingredients:[
    {nom:"Mâche", qte:"200", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pommes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de noix", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"}]},

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
    {nom:"Bouillon de légumes", qte:"1", unite:"l", rayon:"Épicerie"}]},

  { nom:"Clafoutis de légumes d'été", emoji:"🍆", type:"leger", vegetarien:true, rapide:false, thermomix:false, saisons:["ete"], etapes:["Faites revenir courgettes, poivrons et tomates 15 minutes.", "Battez les œufs avec le lait, la farine et les herbes.", "Répartissez les légumes dans un plat beurré, versez l'appareil.", "Parsemez de fromage râpé.", "Enfournez 35 minutes à 180 °C : le clafoutis doit être pris mais moelleux."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"25", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"}]},

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
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},
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
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"}]},

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
    {nom:"Beurre", qte:"40", unite:"g", rayon:"Crèmerie"}]},

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
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

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
    {nom:"Semoule", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

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
    {nom:"Fécule de maïs", qte:"90", unite:"g", rayon:"Épicerie"}]},

  { nom:"Moelleux aux amandes", emoji:"🌰", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Travaillez le beurre mou avec le sucre.", "Ajoutez les œufs un à un, puis la poudre d'amande et la farine.", "Parfumez d'un peu de zeste d'orange.", "Versez dans un moule et parsemez d'amandes effilées.", "Enfournez 30 minutes à 175 °C."], lien:"", ingredients:[
    {nom:"Poudre d'amande", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Beurre", qte:"120", unite:"g", rayon:"Crèmerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Farine", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Amandes effilées", qte:"40", unite:"g", rayon:"Épicerie"}]},

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
    {nom:"Biscuits à la cuillère", qte:"10", unite:"", rayon:"Épicerie"}]},

  { nom:"Gâteau de semoule aux raisins", emoji:"🍮", type:"leger", vegetarien:true, rapide:true, thermomix:false, plat:"dessert", saisons:[], etapes:["Faites tremper les raisins secs dans de l'eau tiède.", "Cuisez la semoule dans le lait sucré et vanillé, 8 minutes.", "Hors du feu, ajoutez les œufs battus et les raisins égouttés.", "Versez dans un moule caramélisé.", "Enfournez 30 minutes à 180 °C au bain-marie, puis réfrigérez avant de démouler."], lien:"", ingredients:[
    {nom:"Semoule fine", qte:"120", unite:"g", rayon:"Épicerie"},
    {nom:"Lait", qte:"75", unite:"cl", rayon:"Crèmerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Raisins secs", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre", qte:"120", unite:"g", rayon:"Épicerie"}]},

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
    {nom:"Amandes effilées", qte:"40", unite:"g", rayon:"Épicerie"}]},

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
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

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
    {nom:"Basilic", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

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
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"}]},

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
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"}]},

  { nom:"Cake salé aux légumes du soleil", emoji:"🍞", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites revenir courgette, poivron et oignon en petits dés, 12 minutes.", "Laissez-les refroidir : versés chauds, ils cuiraient les œufs.", "Mélangez œufs, lait, huile d'olive, farine et levure.", "Incorporez les légumes et les herbes.", "Enfournez 45 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Courgettes", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Huile d'olive", qte:"8", unite:"cl", rayon:"Épicerie"},
    {nom:"Levure chimique", qte:"1", unite:"sachet(s)", rayon:"Épicerie"},
    {nom:"Lait", qte:"12", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Cake salé poulet et curry", emoji:"🍞", type:"consistant", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Coupez le poulet en petits dés et faites-le dorer avec le curry.", "Laissez refroidir.", "Préparez la pâte : œufs, lait, huile, farine, levure.", "Ajoutez le poulet et les raisins secs.", "Enfournez 45 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Blancs de poulet", qte:"300", unite:"g", rayon:"Boucherie"},
    {nom:"Curry", qte:"2", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Raisins secs", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Farine", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"3", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"12", unite:"cl", rayon:"Crèmerie"}]},

  { nom:"Quiche sans pâte au thon", emoji:"🥧", type:"leger", vegetarien:false, rapide:true, thermomix:true, saisons:[], etapes:["Battez les œufs avec le lait et la farine jusqu'à obtenir une pâte lisse.", "Ajoutez le thon égoutté et les tomates en dés.", "Versez dans un moule beurré : la pâte forme sa propre croûte en cuisant.", "Parsemez d'herbes.", "Enfournez 35 minutes à 180 °C."], lien:"", ingredients:[
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Œufs", qte:"4", unite:"", rayon:"Crèmerie"},
    {nom:"Lait", qte:"30", unite:"cl", rayon:"Crèmerie"},
    {nom:"Farine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"}]},

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
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

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
  { nom:"Poke bowl au saumon", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire le riz et laissez-le tiédir.", "Coupez le saumon très frais en cubes réguliers, au couteau.", "Faites-le mariner 15 minutes dans le jus de citron vert et l'huile de sésame.", "Dressez le riz au fond du bol, puis chaque garniture par secteurs : avocat, concombre, edamames.", "Parsemez de graines de sésame et servez frais."], lien:"", ingredients:[
    {nom:"Saumon très frais", qte:"400", unite:"g", rayon:"Poissonnerie"},
    {nom:"Riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Graines de sésame", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Bowl thon, avocat et quinoa", emoji:"🥑", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Faites cuire le quinoa 15 minutes dans le double d'eau, égouttez et laissez tiédir.", "Coupez l'avocat, les tomates cerises et le concombre.", "Égouttez le thon et détaillez-le en gros morceaux.", "Assaisonnez d'huile d'olive et de citron, sans saler : le thon apporte déjà ce qu'il faut.", "Dressez par secteurs et parsemez de graines de courge."], lien:"", ingredients:[
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Quinoa", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Avocats", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Graines de courge", qte:"40", unite:"g", rayon:"Épicerie"}]},

  { nom:"Salade de lentilles, pomme et noix", emoji:"🥗", type:"leger", vegetarien:true, rapide:true, thermomix:false, saisons:["automne", "hiver"], etapes:["Faites cuire les lentilles 20 minutes dans l'eau non salée : le sel les durcit.", "Égouttez-les et laissez-les tiédir.", "Coupez la pomme en petits dés, arrosez-la de citron.", "Préparez une vinaigrette à l'huile de noix et au vinaigre de cidre.", "Mélangez le tout et parsemez de noix concassées et de persil."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Pommes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noix", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Huile de noix", qte:"3", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Vinaigre de cidre", qte:"1", unite:"c. à soupe", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Bowl patate douce et pois chiches rôtis", emoji:"🍠", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:["automne", "hiver"], etapes:["Coupez la patate douce en cubes, enrobez-la de paprika et d'huile d'olive.", "Séchez les pois chiches et mélangez-les au cumin.", "Étalez le tout sur une plaque sans superposer, c'est ce qui les fait rôtir.", "Enfournez 30 minutes à 210 °C en remuant à mi-cuisson.", "Servez sur un lit de quinoa avec une sauce au yaourt et citron."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Pois chiches", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Quinoa", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Yaourt nature", qte:"2", unite:"pot(s)", rayon:"Crèmerie"},
    {nom:"Paprika", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade de riz complet aux crevettes", emoji:"🍤", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites cuire le riz complet 35 minutes, rincez-le à l'eau froide.", "Coupez le concombre et les tomates cerises.", "Ajoutez les crevettes et la menthe ciselée.", "Assaisonnez d'huile d'olive, de citron vert et d'un peu de gingembre râpé.", "Laissez reposer 30 minutes au frais avant de servir."], lien:"", ingredients:[
    {nom:"Riz complet", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Crevettes décortiquées", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates cerises", qte:"250", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Menthe", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Salade de haricots blancs au thon", emoji:"🥗", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:[], etapes:["Rincez et égouttez les haricots blancs.", "Émincez l'oignon rouge très finement et laissez-le 10 minutes dans le jus de citron : il s'adoucit.", "Ajoutez le thon égoutté et les tomates en quartiers.", "Assaisonnez d'huile d'olive et de persil.", "Meilleure après une heure au frais."], lien:"", ingredients:[
    {nom:"Haricots blancs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Thon en boîte", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon rouge", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Tomates", qte:"3", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

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
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Curry de lentilles au potiron", emoji:"🎃", type:"consistant", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon, l'ail et le gingembre avec le curcuma et le cumin.", "Ajoutez le potiron en cubes et les lentilles corail rincées.", "Versez le lait de coco et deux verres d'eau.", "Laissez mijoter 25 minutes : les lentilles corail se défont et lient le plat.", "Terminez au citron vert et à la coriandre."], lien:"", ingredients:[
    {nom:"Lentilles corail", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Potiron", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lait de coco", qte:"40", unite:"cl", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Coriandre", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"}]},

  { nom:"Boulettes de lentilles à la tomate", emoji:"🫘", type:"consistant", vegetarien:true, rapide:false, thermomix:false, saisons:[], etapes:["Écrasez grossièrement les lentilles cuites à la fourchette.", "Mélangez-les à l'oignon râpé, l'œuf, les flocons d'avoine et le cumin.", "Laissez reposer 15 minutes : les flocons absorbent l'humidité et tout se tient.", "Formez des boulettes et faites-les dorer 8 minutes à la poêle.", "Laissez-les mijoter 15 minutes dans la sauce tomate."], lien:"", ingredients:[
    {nom:"Lentilles vertes", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Flocons d'avoine", qte:"80", unite:"g", rayon:"Épicerie"},
    {nom:"Œufs", qte:"1", unite:"", rayon:"Crèmerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Chili de quinoa aux haricots noirs", emoji:"🌶️", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:[], etapes:["Faites revenir oignon, poivron et ail.", "Ajoutez le cumin et le paprika, remuez pour les réveiller.", "Versez le quinoa rincé, les haricots noirs et les tomates.", "Ajoutez un verre d'eau et laissez mijoter 20 minutes à couvert.", "Servez avec de l'avocat en dés et de la coriandre."], lien:"", ingredients:[
    {nom:"Quinoa", qte:"200", unite:"g", rayon:"Épicerie"},
    {nom:"Haricots noirs", qte:"2", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Tomates concassées", qte:"1", unite:"boîte(s)", rayon:"Épicerie"},
    {nom:"Poivrons", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Avocats", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cumin", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

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
    {nom:"Huile d'olive", qte:"3", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Poêlée de sarrasin aux champignons", emoji:"🌾", type:"consistant", vegetarien:true, rapide:true, thermomix:false, saisons:["automne"], etapes:["Rincez le sarrasin et faites-le cuire 15 minutes dans le double d'eau.", "Faites sauter les champignons à feu vif jusqu'à évaporation de leur eau.", "Ajoutez l'échalote, l'ail et le persil.", "Mélangez au sarrasin égoutté.", "Terminez par des noisettes concassées et un filet d'huile."], lien:"", ingredients:[
    {nom:"Sarrasin", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Champignons de Paris", qte:"400", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Échalotes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Noisettes", qte:"50", unite:"g", rayon:"Épicerie"},
    {nom:"Persil", qte:"1", unite:"bouquet(s)", rayon:"Fruits & légumes"},
    {nom:"Huile d'olive", qte:"2", unite:"c. à soupe", rayon:"Épicerie"}]},

  { nom:"Curry de pois cassés au lait de coco", emoji:"🍛", type:"consistant", vegetarien:true, rapide:false, thermomix:true, saisons:["automne", "hiver"], etapes:["Rincez les pois cassés, inutile de les tremper.", "Faites revenir oignon, ail et gingembre avec le curcuma.", "Ajoutez les pois cassés et trois fois leur volume d'eau.", "Laissez cuire 45 minutes, jusqu'à ce qu'ils se défassent.", "Incorporez le lait de coco et le citron vert en fin de cuisson."], lien:"", ingredients:[
    {nom:"Pois cassés", qte:"300", unite:"g", rayon:"Épicerie"},
    {nom:"Lait de coco", qte:"20", unite:"cl", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Oignon", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

  { nom:"Salade de vermicelles de riz aux crevettes", emoji:"🍜", type:"leger", vegetarien:false, rapide:true, thermomix:false, saisons:["ete"], etapes:["Faites tremper les vermicelles de riz 5 minutes dans l'eau bouillante, rincez à l'eau froide.", "Râpez la carotte, taillez le concombre en bâtonnets.", "Ajoutez les crevettes, la menthe et la coriandre.", "Assaisonnez de citron vert, d'un peu de sucre et d'huile — pas de sauce salée, le citron suffit.", "Parsemez de cacahuètes concassées."], lien:"", ingredients:[
    {nom:"Vermicelles de riz", qte:"250", unite:"g", rayon:"Épicerie"},
    {nom:"Crevettes décortiquées", qte:"300", unite:"g", rayon:"Poissonnerie"},
    {nom:"Carottes", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Concombre", qte:"1", unite:"", rayon:"Fruits & légumes"},
    {nom:"Citron vert", qte:"2", unite:"", rayon:"Fruits & légumes"},
    {nom:"Cacahuètes", qte:"60", unite:"g", rayon:"Épicerie"},
    {nom:"Sucre", qte:"1", unite:"c. à café", rayon:"Épicerie"}]},

  { nom:"Velouté de patate douce et lentilles corail", emoji:"🥣", type:"leger", vegetarien:true, rapide:true, thermomix:true, saisons:["automne", "hiver"], etapes:["Faites revenir l'oignon avec le curcuma et le gingembre.", "Ajoutez la patate douce en cubes et les lentilles corail.", "Couvrez d'eau et laissez cuire 20 minutes.", "Mixez : les lentilles corail donnent une texture veloutée sans crème.", "Servez avec un filet de citron et des graines de courge."], lien:"", ingredients:[
    {nom:"Patates douces", qte:"600", unite:"g", rayon:"Fruits & légumes"},
    {nom:"Lentilles corail", qte:"150", unite:"g", rayon:"Épicerie"},
    {nom:"Gingembre", qte:"1", unite:"morceau(x)", rayon:"Fruits & légumes"},
    {nom:"Curcuma", qte:"1", unite:"c. à café", rayon:"Épicerie"},
    {nom:"Graines de courge", qte:"40", unite:"g", rayon:"Épicerie"},
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]},

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
    {nom:"Citron", qte:"1", unite:"", rayon:"Fruits & légumes"}]}
];
