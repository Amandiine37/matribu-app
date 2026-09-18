/* =========================================================================
   VALEURS NUTRITIONNELLES DES INGRÉDIENTS (option « Macronutriments »)
   =========================================================================

   Source : Anses. 2025. Table de composition nutritionnelle des aliments
   Ciqual 2025. https://doi.org/10.57745/RDMHWY — licence ouverte Etalab 2.0.
   On n'en garde que les aliments qui correspondent aux ingrédients des
   recettes fournies (et quelques-uns de plus), avec pour chacun :
     v    pour 100 g : [kcal, protéines, glucides, lipides] (g)
     c    le code de l'aliment dans la table Ciqual (pour vérifier)
     u    poids d'une pièce, en g (« 1 oignon », « 2 œufs »…)
     d    densité, pour les cl et les l (1 par défaut)
     cas, cac, boite, tranche, bouquet… : poids d'une cuillère, d'une boîte…
     f    part réellement mangée : 0,5 pour une daurade entière, 0,08 pour
          l'huile de friture, 0 pour ce qui ne se mange pas (laurier…)
   Les poids moyens (pièces, cuillères, boîtes) sont des valeurs courantes de
   cuisine, pas des mesures : le résultat est une ESTIMATION, et l'écran le dit.
   Fabriqué par un script à partir de la table (18/09/2026) : ne pas modifier
   les valeurs à la main sans refaire la vérification. */
window.NUTRITION = {
  source: "Table Ciqual 2025 (Anses)",
  aliments: {
    "abricot": {"u":45,"c":"13000","v":[44.1,0.8,9,0]},
    "abricot sec": {"c":"13001","v":[239,2.9,59.1,0.5]},
    "agneau hache": {"c":"21504","v":[170,18.3,0.5,10.6]},
    "ail": {"gousse":5,"tete":50,"c":"11000","v":[109,5.3,18.6,0]},
    "ail des our": {"c":"20059","v":[33.3,2.7,3.1,0.4]},
    "aile de raie": {"c":"26052","v":[91.9,21.4,0.5,0.5]},
    "amande": {"c":"15000","v":[615,18.8,9.5,51.3]},
    "amande effilee": {"c":"15041","v":[631,21.4,8.8,52.5]},
    "anana": {"u":900,"c":"13002","v":[51.6,0.3,11.7,0]},
    "anana en morceau": {"boite":340,"c":"13718","v":[65.8,0.3,15.3,0]},
    "aneth": {"bouquet":25,"c":"11093","v":[48.2,3.9,3.9,1.1]},
    "ani etoile": {"u":0.5,"f":0,"c":"11053","v":[353,7.6,48.6,8.4]},
    "artichaut": {"u":300,"f":0.35,"c":"20052","v":[45.4,3.3,4.8,0.2]},
    "artichaut poivrade": {"u":60,"f":0.5,"c":"20052","v":[45.4,3.3,4.8,0.2]},
    "asperge blanche": {"f":0.7,"c":"20282","v":[21,2.2,1.6,0.1]},
    "asperge verte": {"botte":500,"c":"20279","v":[24.7,2.5,2,0.3]},
    "aubergine": {"u":300,"c":"20053","v":[22.9,1,2.7,0.2]},
    "avocat": {"u":140,"c":"13004","v":[203,1.6,0,20.6]},
    "baie de genievre": {"f":0,"c":"11053","v":[353,7.6,48.6,8.4]},
    "banane": {"u":120,"c":"13005","v":[87.6,1.1,19.7,0]},
    "bar": {"u":600,"f":0.5,"c":"26072","v":[86.1,19.1,0.9,0.7]},
    "basilic": {"bouquet":30,"c":"11033","v":[35.2,3.2,3.4,0.6]},
    "bavette": {"c":"6212","v":[133,20.4,0,5.7]},
    "bavette de boeuf": {"c":"6212","v":[133,20.4,0,5.7]},
    "beaufort": {"c":"12105","v":[404,26.7,0.7,33]},
    "betterave crue": {"c":"20091","v":[40.2,1.6,6.3,0.2]},
    "betterave cuite": {"c":"20003","v":[41.5,1.4,7.1,0.4]},
    "beurre": {"cas":15,"cac":5,"c":"16400","v":[753,0.6,0.7,83]},
    "biere brune": {"d":1,"c":"5000","v":[40.5,0.4,4.1,0]},
    "biscuit a la cuillere": {"u":6,"c":"24430","v":[366,7.8,74.5,3.4]},
    "blanc de poulet": {"u":130,"c":"36017","v":[110,23.4,0,1.5]},
    "blette": {"f":0.8,"c":"20004","v":[12.8,1,1.6,0]},
    "bleu": {"c":"12521","v":[342,20.6,0,29]},
    "boeuf a griller": {"c":"6111","v":[152,22.3,0.6,6.7]},
    "boeuf a mijoter": {"c":"6002","v":[130,21.4,0,5]},
    "boeuf a pot au feu": {"f":0.85,"c":"6002","v":[130,21.4,0,5]},
    "boeuf a tartare": {"c":"6250","v":[130,21.9,0.3,4.6]},
    "boeuf emince": {"c":"6206","v":[118,23.5,0.4,2.5]},
    "boeuf hache": {"c":"6254","v":[215,20.2,0.5,14.8]},
    "boudin blanc": {"u":120,"c":"8801","v":[244,10,3.6,21]},
    "bouillon de boeuf": {"d":1,"c":"25930","v":[6.1,0.9,0.4,0.2]},
    "bouillon de legume": {"d":1,"c":"25948","v":[4.8,0.3,0.5,0.2]},
    "bouillon de poisson": {"d":1,"c":"11303","v":[53.6,5.1,3.8,2]},
    "bouillon de volaille": {"d":1,"c":"25947","v":[7.2,1.2,0.3,0.1]},
    "boulgour": {"c":"9690","v":[347,11.7,65.8,1.4]},
    "bouquet garni": {"u":0,"f":0,"c":"11053","v":[353,7.6,48.6,8.4]},
    "brocoli": {"u":400,"c":"20057","v":[31.9,2.9,2.2,0.4]},
    "buche de chevre": {"c":"12812","v":[285,18.8,0,23.3]},
    "burrata": {"u":125,"c":"12072","v":[259,10.8,0.9,23.4]},
    "cacahuete": {"c":"15002","v":[635,22.9,14.2,50.8]},
    "cacao": {"cas":6,"c":"18100","v":[387,22.4,11.6,20.6]},
    "cafe": {"f":0,"c":"11053","v":[353,7.6,48.6,8.4]},
    "calamar": {"c":"10001","v":[77,14.4,2.2,1.2]},
    "cannelle": {"cac":2.6,"branche":3,"c":"11025","v":[243,4,27.5,1.2]},
    "cannelloni": {"c":"9810","v":[364,12,72.7,1.6]},
    "capre": {"cas":10,"c":"11040","v":[30.5,2.2,3.5,0.9]},
    "carotte": {"u":100,"c":"20009","v":[30.2,0.8,5.2,0]},
    "carotte nouvelle": {"botte":500,"u":60,"c":"20009","v":[30.2,0.8,5.2,0]},
    "cassonade": {"cas":12,"c":"31017","v":[393,0.1,98.1,0]},
    "celeri": {"branche":40,"c":"20023","v":[15.4,0.6,2.4,0]},
    "celeri branche": {"u":40,"c":"20023","v":[15.4,0.6,2.4,0]},
    "celeri rave": {"u":600,"c":"20055","v":[26.3,1.4,4,0]},
    "cepe": {"c":"20160","v":[28.8,3.2,2,0.5]},
    "cepe seche": {"f":8,"c":"20160","v":[28.8,3.2,2,0.5]},
    "cerfeuil": {"bouquet":25,"c":"11002","v":[48.3,3.3,6.3,0.6]},
    "cerise": {"c":"13008","v":[53.7,0.8,13,0]},
    "chair a saucisse": {"c":"30050","v":[323,14.7,0.6,29.1]},
    "champignon": {"c":"20056","v":[21,2.1,1.8,0.4]},
    "champignon de pari": {"c":"20056","v":[21,2.1,1.8,0.4]},
    "champignon noir seche": {"c":"20202","v":[30.7,7.5,0,0.1]},
    "chapelure": {"cas":8,"c":"7500","v":[365,9.4,74.3,1.6]},
    "chapelure panko": {"c":"7500","v":[365,9.4,74.3,1.6]},
    "chataigne cuite": {"c":"15020","v":[123,2,23,1.4]},
    "cheddar": {"tranche":20,"c":"12726","v":[399,24.7,1.2,32.6]},
    "cheddar rape": {"c":"12726","v":[399,24.7,1.2,32.6]},
    "chevre": {"buche":180,"c":"12812","v":[285,18.8,0,23.3]},
    "chevre frai": {"c":"12805","v":[194,12,2.5,15.2]},
    "chocolat noir": {"c":"31085","v":[546,6.4,51.4,33.1]},
    "chorizo": {"c":"30315","v":[425,23.5,1.2,36.1]},
    "chou blanc": {"u":1000,"c":"20116","v":[35.2,1.4,4.6,0.6]},
    "chou chinoi": {"u":800,"c":"20167","v":[16.4,1.3,2.1,0.2]},
    "chou de bruxelle": {"c":"20058","v":[43.9,3.4,4.6,0.3]},
    "chou fleur": {"u":700,"c":"20016","v":[24.9,1.8,2.1,0.7]},
    "chou kale": {"c":"20346","v":[34.6,2.9,0.3,1.5]},
    "chou rave": {"u":200,"c":"20065","v":[25.1,1.7,2.4,0.1]},
    "chou rouge": {"u":1000,"c":"20014","v":[26.4,1.1,4.3,0]},
    "chou vert": {"u":1000,"c":"20069","v":[24.4,1.4,2.7,0.1]},
    "choucroute crue": {"c":"20116","v":[35.2,1.4,4.6,0.6]},
    "ciboulette": {"bouquet":25,"c":"11003","v":[30.8,2.6,2.9,0.5]},
    "cidre": {"d":1,"c":"5006","v":[35.9,0,2.6,0]},
    "citron": {"u":40,"c":"2028","v":[29.4,0.4,6.1,0.3]},
    "citron confit": {"u":60,"c":"13009","v":[24.3,0.3,1.6,0]},
    "citron vert": {"u":30,"c":"2030","v":[9.9,0.4,1.7,0.1]},
    "citronnelle": {"branche":10,"f":0,"c":"11053","v":[353,7.6,48.6,8.4]},
    "cive": {"bouquet":25,"c":"11003","v":[30.8,2.6,2.9,0.5]},
    "clementine": {"u":60,"c":"13024","v":[45.5,0.8,9.2,0]},
    "clou de girofle": {"u":0.1,"f":0,"c":"11052","v":[335,6,31.6,13]},
    "coing": {"u":250,"c":"13010","v":[59,0.4,12.5,0.1]},
    "comte": {"c":"12110","v":[413,27.8,0,33.8]},
    "concentre de tomate": {"cas":17,"c":"20068","v":[99.2,4.4,17.1,0.5]},
    "concombre": {"u":300,"c":"20019","v":[16.8,0.7,2.9,0.1]},
    "confit de canard": {"u":200,"c":"8110","v":[273,25.7,0.2,18.8]},
    "coquillette": {"c":"9810","v":[364,12,72.7,1.6]},
    "coriandre": {"bouquet":30,"c":"11094","v":[22.3,2.1,0.9,0.5]},
    "cornichon": {"u":8,"c":"11097","v":[36,1.3,5,0.4]},
    "cote d agneau": {"u":100,"f":0.7,"c":"21500","v":[333,15.4,0,30.1]},
    "cote de porc": {"u":180,"f":0.85,"c":"28100","v":[164,19.8,0.4,9.3]},
    "couli de tomate": {"d":1.05,"c":"20260","v":[45.5,2.1,7.6,0.2]},
    "courge butternut": {"u":1000,"c":"20139","v":[14.4,1,1.6,0.1]},
    "courge muscade": {"c":"20139","v":[14.4,1,1.6,0.1]},
    "courgette": {"u":250,"c":"20020","v":[16.7,1.2,1.8,0.3]},
    "creme fraiche": {"d":1,"c":"19410","v":[285,2.3,1.4,29.9]},
    "creme liquide": {"d":1,"c":"19417","v":[293,2.2,3.7,30]},
    "cresson": {"botte":150,"bouquet":150,"c":"20199","v":[23.8,2.6,1.2,0.7]},
    "crevette": {"c":"10021","v":[99,19.7,3.2,0.8]},
    "crevette cuite decortiquee": {"c":"10086","v":[92.5,18.3,2.6,1]},
    "crevette decortiquee": {"c":"10086","v":[92.5,18.3,2.6,1]},
    "crouton": {"paquet":90,"c":"7432","v":[459,9.2,62.4,17.9]},
    "crozet": {"c":"9810","v":[364,12,72.7,1.6]},
    "cuisse de canard": {"u":200,"c":"36203","v":[104,18.7,0.3,3.1]},
    "cuisse de canard confite": {"u":200,"c":"8110","v":[273,25.7,0.2,18.8]},
    "cuisse de poulet": {"u":175,"c":"36002","v":[192,17.3,0,13.5]},
    "cuisse de poulet desossee": {"c":"36002","v":[192,17.3,0,13.5]},
    "cumin": {"cac":2,"cas":6,"c":"11042","v":[427,17.8,33.7,22.3]},
    "curcuma": {"cac":3,"c":"11089","v":[291,9.7,44.4,3.3]},
    "curry": {"cas":6,"cac":2,"c":"11005","v":[301,14.5,2.6,14]},
    "curry en poudre": {"cas":6,"cac":2,"c":"11005","v":[301,14.5,2.6,14]},
    "datte": {"c":"13011","v":[287,1.8,64.7,0.3]},
    "daurade": {"u":400,"f":0.5,"c":"26099","v":[129,20.5,0,5.3]},
    "dinde": {"u":3000,"f":0.6,"c":"36300","v":[137,21.6,0,5.6]},
    "dorade": {"u":400,"f":0.5,"c":"26099","v":[129,20.5,0,5.3]},
    "dos de cabillaud": {"u":140,"c":"26043","v":[77.4,18.1,0,0.6]},
    "dos de colin": {"c":"26044","v":[82.6,17.6,0,1.4]},
    "eau": {"f":0,"v":[0,0,0,0]},
    "echalote": {"u":25,"c":"20097","v":[61.7,1.8,12.2,0]},
    "echine de porc": {"c":"28302","v":[238,17.1,0.1,18.8]},
    "emmental": {"tranche":20,"c":"12115","v":[373,27.9,0,28.8]},
    "encornet": {"c":"10001","v":[77,14.4,2.2,1.2]},
    "endive": {"u":120,"c":"20026","v":[16.6,1.2,2.8,0]},
    "epaule d agneau": {"f":0.7,"c":"21504","v":[170,18.3,0.5,10.6]},
    "epaule de veau": {"c":"6560","v":[124,20.7,0,4.6]},
    "epice tandoori": {"cas":6,"c":"11005","v":[301,14.5,2.6,14]},
    "epinard": {"c":"20059","v":[33.3,2.7,3.1,0.4]},
    "epinard frai": {"c":"20059","v":[33.3,2.7,3.1,0.4]},
    "epinard surgele": {"c":"20083","v":[28,3.3,1,0.5]},
    "escalope de dinde": {"u":120,"c":"36304","v":[108,23.7,0,1.5]},
    "escalope de poulet": {"u":130,"c":"36017","v":[110,23.4,0,1.5]},
    "escalope de veau": {"u":120,"c":"6521","v":[114,20.5,0.6,3.3]},
    "estragon": {"bouquet":25,"c":"11092","v":[31.6,3.8,4.1,0]},
    "fane de radi": {"botte":100,"c":"20059","v":[33.3,2.7,3.1,0.4]},
    "farfalle": {"c":"9810","v":[364,12,72.7,1.6]},
    "farine": {"cas":10,"cac":3,"c":"9435","v":[346,10,71.5,1]},
    "farine de sarrasin": {"c":"9540","v":[348,11.5,68.4,2.2]},
    "fecule de mai": {"cas":8,"c":"9510","v":[365,0.3,90.4,0.1]},
    "fenouil": {"u":250,"c":"20028","v":[18.2,1,2.6,0]},
    "feta": {"c":"12066","v":[284,15.1,0.5,24.3]},
    "feuille de brick": {"paquet":170,"c":"51550","v":[283,7,59,1.5]},
    "feve": {"f":0.3,"c":"20517","v":[61.5,6.8,4.2,0.7]},
    "figue": {"u":50,"c":"13012","v":[67.6,1.2,13.5,0]},
    "filet d anchoi": {"c":"26177","v":[199,24.9,0,11]},
    "filet de bar": {"u":100,"c":"26072","v":[86.1,19.1,0.9,0.7]},
    "filet de colin": {"u":120,"c":"26044","v":[82.6,17.6,0,1.4]},
    "filet de daurade": {"c":"26099","v":[129,20.5,0,5.3]},
    "filet de dorade": {"c":"26099","v":[129,20.5,0,5.3]},
    "filet de hareng fume": {"c":"25998","v":[163,18.1,0.4,9.9]},
    "filet de lieu": {"c":"26134","v":[82.5,18.8,0,0.8]},
    "filet de maquereau": {"c":"26051","v":[198,18.1,0.9,13.5]},
    "filet de merlan": {"c":"26095","v":[79.2,18.8,0,0.5]},
    "filet de poisson blanc": {"u":140,"c":"26043","v":[77.4,18.1,0,0.6]},
    "filet de sole": {"c":"26058","v":[77.3,18,0,0.6]},
    "filet de truite": {"u":120,"c":"27009","v":[132,19,0,6.2]},
    "filet mignon de porc": {"c":"28204","v":[123,21.2,0.4,4.1]},
    "fleur de sel": {"f":0,"v":[0,0,0,0]},
    "flocon d avoine": {"c":"32140","v":[369,10.6,57.7,7.8]},
    "fond d artichaut": {"u":40,"c":"20232","v":[54.5,1.9,7,0.4]},
    "fraise": {"c":"13014","v":[35.1,0.6,6,0]},
    "frite surgelee": {"f":0.7,"c":"4032","v":[258,3.3,32.7,11.9]},
    "fromage a raclette": {"c":"12749","v":[342,23.4,0,27.5]},
    "fromage a tartiner": {"c":"12068","v":[225,6.3,3.3,20.7]},
    "fromage blanc": {"c":"19646","v":[75.7,7.3,3.9,3.2]},
    "fromage de chevre": {"buche":180,"c":"12812","v":[285,18.8,0,23.3]},
    "fromage frai": {"c":"12068","v":[225,6.3,3.3,20.7]},
    "fromage rape": {"c":"12118","v":[368,27.6,0.6,28.2]},
    "fruit confit": {"c":"31021","v":[307,0.6,75.6,0.1]},
    "fruit de mer": {"c":"10043","v":[103,19.5,2.5,1.7]},
    "fruit de mer surgele": {"c":"10043","v":[103,19.5,2.5,1.7]},
    "fruit rouge": {"c":"13997","v":[36.5,1,7,0.5]},
    "galette de ble": {"u":40,"c":"7815","v":[320,8,53,7.5]},
    "galette de riz": {"paquet":100,"c":"9900","v":[365,7.4,80.5,1]},
    "galette pour gyoza": {"paquet":200,"c":"9810","v":[364,12,72.7,1.6]},
    "gamba": {"f":0.5,"c":"10021","v":[99,19.7,3.2,0.8]},
    "garam masala": {"cac":2,"cas":6,"c":"11005","v":[301,14.5,2.6,14]},
    "gelatine": {"u":2,"c":"11007","v":[348,86.9,0,0.1]},
    "germe de soja": {"c":"20183","v":[28.3,2.6,3.4,0]},
    "gigot d agneau": {"f":0.75,"c":"21502","v":[128,20,0.5,5.1]},
    "gingembre": {"morceau":10,"u":10,"c":"11074","v":[33.3,1.1,3.4,1.1]},
    "gingembre en poudre": {"cac":2,"c":"11006","v":[335,9,58.3,4.2]},
    "girolle": {"c":"20103","v":[24.7,1.5,1.8,0.5]},
    "glacon": {"f":0,"v":[0,0,0,0]},
    "gnocchi": {"c":"26264","v":[176,4.7,35,1.4]},
    "gorgonzola": {"c":"12524","v":[318,19.5,0,26.9]},
    "graine de courge": {"c":"15064","v":[618,29.5,5.4,49.1]},
    "graine de sesame": {"cas":9,"cac":3,"c":"15010","v":[606,17.7,12.8,49.7]},
    "grande tortilla": {"u":60,"c":"7815","v":[320,8,53,7.5]},
    "gro sel": {"f":0,"c":"11053","v":[353,7.6,48.6,8.4]},
    "grosse pomme de terre": {"u":250,"c":"4008","v":[80,2,16.2,0.1]},
    "gruyere rape": {"c":"12113","v":[415,28.2,0.7,33.2]},
    "haddock": {"c":"26090","v":[97,22.6,0,0.7]},
    "halloumi": {"c":"12066","v":[284,15.1,0.5,24.3]},
    "haricot blanc": {"boite":250,"c":"20511","v":[85.5,5.9,10.9,0.5]},
    "haricot blanc sec": {"c":"20501","v":[307,23.4,43.9,0.9]},
    "haricot noir": {"boite":250,"c":"20524","v":[108,8.3,13,1]},
    "haricot rouge": {"boite":250,"c":"20524","v":[108,8.3,13,1]},
    "haricot vert": {"c":"20061","v":[31.9,1.8,4.1,0.2]},
    "herbe de provence": {"cac":1,"cas":3,"c":"11060","v":[283,11.5,23.1,7.2]},
    "huile d olive": {"d":0.92,"cas":13.5,"cac":4.5,"c":"17270","v":[899,0.3,0,99.9]},
    "huile de friture": {"d":0.92,"f":0.08,"c":"17440","v":[900,0.3,0,100]},
    "huile de noi": {"d":0.92,"cas":13.5,"c":"17220","v":[900,0,0,100]},
    "huile de sesame": {"d":0.92,"cas":13.5,"c":"17400","v":[900,0,0,100]},
    "huile de tournesol": {"d":0.92,"cas":13.5,"cac":4.5,"c":"17440","v":[900,0.3,0,100]},
    "jambon blanc": {"tranche":45,"c":"28900","v":[113,21,0.8,2.8]},
    "jambon cru": {"tranche":20,"c":"28800","v":[239,25.9,4.3,13.2]},
    "jarret de porc": {"f":0.6,"c":"28001","v":[178,18.9,0.4,11.2]},
    "jarret de veau": {"tranche":250,"f":0.75,"c":"6583","v":[118,21.3,0,3.7]},
    "joue de boeuf": {"c":"6140","v":[136,22.3,0.4,5]},
    "ketchup": {"cas":17,"c":"11008","v":[108,1.2,23.7,0.2]},
    "lait": {"d":1.03,"c":"19033","v":[47.5,3.5,5,1.6]},
    "lait de coco": {"boite":400,"d":1,"c":"18041","v":[199,1.9,4.3,19.2]},
    "laitue": {"u":250,"c":"20031","v":[14.7,1.4,1.2,0.2]},
    "laitue romaine": {"u":300,"c":"20171","v":[17.2,1.2,1.4,0.3]},
    "lapin": {"u":1300,"f":0.7,"c":"34001","v":[188,20.4,0.6,11.6]},
    "lardon": {"c":"28720","v":[272,16.7,0.4,22.6]},
    "laurier": {"feuille":0.2,"f":0,"c":"11053","v":[353,7.6,48.6,8.4]},
    "lentille corail": {"c":"20535","v":[328,27.7,44.9,0.8]},
    "lentille verte": {"c":"20585","v":[327,25.1,44.5,1.8]},
    "levure chimique": {"sachet":11,"c":"11046","v":[108,0.1,26.9,0]},
    "macaroni": {"c":"9810","v":[364,12,72.7,1.6]},
    "mache": {"c":"20099","v":[15,2,0.5,0]},
    "magret de canard": {"u":350,"c":"36206","v":[337,17.9,0.1,29.4]},
    "mai": {"boite":285,"c":"20066","v":[105,2.7,18.3,1.7]},
    "mai en epi": {"u":150,"c":"20049","v":[106,3.4,18.6,1.5]},
    "maizena": {"cas":8,"c":"9510","v":[365,0.3,90.4,0.1]},
    "maquereau": {"u":300,"f":0.55,"c":"26051","v":[198,18.1,0.9,13.5]},
    "maquereau en boite": {"boite":120,"c":"26086","v":[240,17.7,5.5,16.3]},
    "marron cuit": {"c":"15020","v":[123,2,23,1.4]},
    "mascarpone": {"c":"19584","v":[369,6,3.1,37]},
    "mayonnaise": {"cas":15,"c":"11054","v":[692,1.3,3.4,74.5]},
    "melon": {"u":500,"c":"13026","v":[59.8,1.1,14.8,0]},
    "menthe": {"bouquet":30,"c":"11027","v":[57.6,3.5,5.3,0.8]},
    "menthe fraiche": {"bouquet":30,"c":"11027","v":[57.6,3.5,5.3,0.8]},
    "merguez": {"u":60,"c":"30150","v":[301,13.8,1.2,26.8]},
    "miel": {"cas":20,"cac":7,"c":"31008","v":[331,0.7,82.1,0]},
    "miso": {"cas":18,"c":"20916","v":[188,11.7,18.1,6]},
    "mont d or": {"u":500,"c":"12051","v":[293,17.9,0.5,24.6]},
    "morille": {"c":"20105","v":[23.5,3.1,0.1,0.6]},
    "morue salee": {"c":"26098","v":[210,47.6,1.1,1.7]},
    "moule": {"f":0.25,"c":"10014","v":[71.8,11.2,2.7,1.8]},
    "moutarde": {"cas":15,"cac":5,"c":"11013","v":[151,6.9,4.3,11.2]},
    "mozzarella": {"c":"19590","v":[227,16.5,0.7,17.7]},
    "myrtille": {"c":"13028","v":[57.7,0.9,10.6,0.3]},
    "navet": {"u":120,"c":"20064","v":[25.6,0.9,4.4,0.1]},
    "navet nouveau": {"botte":500,"u":60,"c":"20064","v":[25.6,0.9,4.4,0.1]},
    "noi": {"c":"15005","v":[709,13.3,6.9,67.3]},
    "noi de coco rapee": {"c":"15007","v":[692,6.8,7.8,66.8]},
    "noi de muscade": {"pincee":0.3,"u":0.5,"c":"11048","v":[506,5.8,27.4,36.3]},
    "noi de saint jacque": {"u":20,"c":"10045","v":[83.6,17.9,1.2,0.8]},
    "noisette": {"c":"15004","v":[632,14.4,7.2,56.9]},
    "nouille chinoise": {"c":"9863","v":[371,11.9,71,3]},
    "nouille de riz": {"c":"9900","v":[365,7.4,80.5,1]},
    "nouille de riz plate": {"c":"9900","v":[365,7.4,80.5,1]},
    "nouille de sarrasin": {"c":"9540","v":[348,11.5,68.4,2.2]},
    "nouille ramen": {"c":"9863","v":[371,11.9,71,3]},
    "nuoc mam": {"cas":18,"c":"11194","v":[81.2,9.3,10.9,0]},
    "oeuf": {"u":50,"c":"22000","v":[140,12.8,0.1,9.8]},
    "oignon": {"u":100,"c":"20034","v":[39,1.1,6.3,0.6]},
    "oignon nouveau": {"u":25,"c":"20034","v":[39,1.1,6.3,0.6]},
    "oignon rouge": {"u":100,"c":"20238","v":[35,1.3,5.6,0.4]},
    "olive noire": {"c":"13186","v":[182,1.4,0.3,18]},
    "olive verte": {"c":"13033","v":[164,1.1,0.6,16.6]},
    "orange": {"u":150,"c":"13034","v":[42,0.8,8,0]},
    "orge perle": {"c":"9321","v":[346,9.9,68.6,1.2]},
    "origan": {"cac":1,"c":"11035","v":[265,9,26.4,4.3]},
    "orzo": {"c":"9810","v":[364,12,72.7,1.6]},
    "oseille": {"c":"20111","v":[23.4,1.9,1.6,0.7]},
    "oseille ou epinard": {"c":"20059","v":[33.3,2.7,3.1,0.4]},
    "pain": {"u":250,"c":"7001","v":[287,8.3,58.3,1.4]},
    "pain a burger": {"u":60,"c":"7259","v":[283,8.2,47.2,4.9]},
    "pain complet": {"tranche":35,"c":"7110","v":[234,8.7,41.2,1.7]},
    "pain d epice": {"tranche":25,"c":"23200","v":[318,3.1,71.8,1.2]},
    "pain de campagne": {"tranche":40,"u":400,"c":"7100","v":[253,7.5,50,1.3]},
    "pain de mie": {"tranche":25,"c":"7200","v":[279,7.1,50.4,4.4]},
    "pain pita": {"u":60,"c":"7180","v":[249,7.5,48.8,1.5]},
    "pain rassi": {"tranche":40,"c":"7001","v":[287,8.3,58.3,1.4]},
    "pain rond": {"u":60,"c":"7001","v":[287,8.3,58.3,1.4]},
    "pamplemousse": {"u":250,"c":"13040","v":[33.5,0.8,5.9,0]},
    "panai": {"u":150,"c":"20181","v":[67.9,1.2,12.6,0.3]},
    "paneer ou halloumi": {"c":"12066","v":[284,15.1,0.5,24.3]},
    "paprika": {"cac":2.3,"cas":7,"c":"11049","v":[318,14.1,18.8,12.9]},
    "parmesan": {"c":"12120","v":[411,31.1,1.1,31]},
    "parmesan rape": {"c":"12120","v":[411,31.1,1.1,31]},
    "pasteque": {"u":3000,"f":0.6,"c":"13036","v":[35.4,0.7,8.3,0]},
    "patate douce": {"u":250,"c":"4101","v":[81.2,1.6,17.1,0.1]},
    "pate": {"c":"9810","v":[364,12,72.7,1.6]},
    "pate a pizza": {"u":260,"c":"37001","v":[240,7.1,44.2,3.5]},
    "pate brisee": {"u":230,"c":"23414","v":[390,5.9,45,20]},
    "pate complete": {"c":"9060","v":[342,13.7,59.3,2.5]},
    "pate d arachide": {"c":"15202","v":[643,22.2,17.3,51.4]},
    "pate de curry": {"cas":6,"c":"11005","v":[301,14.5,2.6,14]},
    "pate de curry rouge": {"cas":6,"c":"11005","v":[301,14.5,2.6,14]},
    "pate de curry vert": {"cas":6,"c":"11005","v":[301,14.5,2.6,14]},
    "pate de miso": {"cas":18,"c":"20916","v":[188,11.7,18.1,6]},
    "pate de piment gochujang": {"cas":18,"c":"20151","v":[37.4,1.9,5.8,0.4]},
    "pate feuilletee": {"u":230,"c":"23420","v":[385,5.8,41,21.4]},
    "pate miso": {"cas":18,"c":"20916","v":[188,11.7,18.1,6]},
    "pate sablee": {"u":230,"c":"23440","v":[419,5.3,50,21.8]},
    "paupiette de veau": {"u":150,"c":"25125","v":[181,14.6,4.7,11.3]},
    "pave de saumon": {"u":130,"c":"26036","v":[193,20.5,0,12.4]},
    "pave de thon": {"c":"26053","v":[155,24,2.7,5.4]},
    "peche": {"u":130,"c":"13043","v":[37.9,0.9,7.6,0.3]},
    "pecorino": {"c":"12122","v":[383,25.5,1,31]},
    "penne": {"c":"9810","v":[364,12,72.7,1.6]},
    "pepite de chocolat": {"c":"31085","v":[546,6.4,51.4,33.1]},
    "persil": {"bouquet":40,"c":"11014","v":[42.5,3,4.1,0.6]},
    "pesto": {"pot":190,"c":"11179","v":[370,3.9,6.6,35.4]},
    "petit poi": {"c":"20072","v":[81.2,5.4,11.4,0.4]},
    "petit poi surgele": {"c":"20084","v":[77.9,5.9,9.5,0.4]},
    "petit sale": {"c":"28302","v":[238,17.1,0.1,18.8]},
    "pignon": {"c":"15025","v":[712,13.7,2.9,68.4]},
    "pignon de pin": {"c":"15025","v":[712,13.7,2.9,68.4]},
    "piment": {"u":5,"c":"20151","v":[37.4,1.9,5.8,0.4]},
    "pintade": {"u":1300,"f":0.65,"c":"36700","v":[128,22,0,4.5]},
    "plaque a lasagne": {"paquet":500,"c":"9810","v":[364,12,72.7,1.6]},
    "plaque de lasagne": {"c":"9810","v":[364,12,72.7,1.6]},
    "poi casse": {"c":"20515","v":[347,23.8,47.5,1.2]},
    "poi chiche": {"boite":265,"c":"20532","v":[122,6.7,15,2.7]},
    "poi gourmand": {"c":"20173","v":[43,2.8,6.2,0.2]},
    "poire": {"u":160,"c":"13037","v":[56.6,0.4,12.3,0.3]},
    "poireau": {"u":150,"c":"20039","v":[30.4,1.5,4.6,0.3]},
    "poitrine de porc": {"c":"28002","v":[253,17,0,20.5]},
    "poitrine fumee": {"c":"28502","v":[303,15.6,0.8,26.1]},
    "poivre": {"f":0,"v":[0,0,0,0]},
    "poivron": {"u":150,"c":"20087","v":[33.6,1.1,6,0]},
    "polenta": {"c":"9614","v":[350,7.9,74,1.8]},
    "pomme": {"u":150,"c":"13039","v":[54,0.3,11.6,0.3]},
    "pomme de terre": {"u":150,"c":"4008","v":[80,2,16.2,0.1]},
    "pomme de terre nouvelle": {"u":80,"c":"4023","v":[76.4,1.9,15.8,0.3]},
    "porc hache": {"c":"30050","v":[323,14.7,0.6,29.1]},
    "potimarron": {"u":900,"c":"20132","v":[22.1,1,3.1,0.3]},
    "potiron": {"c":"20044","v":[20.1,1.1,3.5,0.1]},
    "poudre a colombo": {"cas":6,"c":"11005","v":[301,14.5,2.6,14]},
    "poudre d amande": {"cas":7,"c":"15041","v":[631,21.4,8.8,52.5]},
    "poule": {"u":1300,"f":0.7,"c":"36001","v":[142,21.3,0,6.3]},
    "poulet": {"u":1100,"c":"36016","v":[173,21.5,0.3,9.5]},
    "poulet fermier": {"u":1100,"c":"36016","v":[173,21.5,0.3,9.5]},
    "poulet hache": {"c":"36017","v":[110,23.4,0,1.5]},
    "poulpe": {"c":"10018","v":[60.1,12.9,1,0.5]},
    "pousse d epinard": {"c":"20059","v":[33.3,2.7,3.1,0.4]},
    "pousse de soja": {"c":"20183","v":[28.3,2.6,3.4,0]},
    "prune": {"c":"13100","v":[51.6,0.7,9.9,0.3]},
    "pruneau": {"c":"13042","v":[229,1.6,55.4,0.4]},
    "puree de sesame": {"cas":15,"c":"15203","v":[631,17.7,13.8,53.4]},
    "quinoa": {"c":"9340","v":[358,13.2,58.1,6.1]},
    "radi": {"botte":200,"bouquet":200,"c":"20045","v":[11,0.9,1.5,0]},
    "raisin": {"c":"13044","v":[71.6,0.8,16.6,0]},
    "raisin sec": {"c":"13046","v":[322,3,73.2,0.9]},
    "ras el hanout": {"cas":6,"cac":2,"c":"11005","v":[301,14.5,2.6,14]},
    "raviole": {"paquet":240,"c":"25203","v":[255,9.4,41.4,5.1]},
    "reblochon": {"u":450,"c":"12045","v":[322,20.3,0,26.9]},
    "rhubarbe": {"c":"13047","v":[18.1,0.7,1.1,0.2]},
    "ricotta": {"c":"19585","v":[145.2,8.1,4.1,10.7]},
    "riz": {"c":"9100","v":[350,7,77.5,0.8]},
    "riz a risotto": {"c":"9100","v":[350,7,77.5,0.8]},
    "riz arborio": {"c":"9100","v":[350,7,77.5,0.8]},
    "riz basmati": {"c":"9119","v":[351,7.1,78.4,0.6]},
    "riz complet": {"c":"9102","v":[350,7,71.4,2.8]},
    "riz rond": {"c":"9100","v":[350,7,77.5,0.8]},
    "romarin": {"branche":2,"c":"11068","v":[121,3.3,6.6,5.9]},
    "roquefort": {"c":"12500","v":[384,19.5,0,33.9]},
    "roquette": {"c":"20217","v":[27.9,2.6,2.1,0.7]},
    "rosbif": {"c":"6111","v":[152,22.3,0.6,6.7]},
    "roti de boeuf": {"c":"6111","v":[152,22.3,0.6,6.7]},
    "roti de dinde": {"c":"36300","v":[137,21.6,0,5.6]},
    "roti de porc": {"c":"28300","v":[153,22.3,0.5,6.9]},
    "roti de veau": {"c":"6522","v":[111,21.8,0,2.6]},
    "rouget": {"u":150,"f":0.5,"c":"26085","v":[158,18.4,0,9.4]},
    "rumsteck": {"c":"6206","v":[118,23.5,0.4,2.5]},
    "safran": {"f":0,"c":"11039","v":[352,11.4,61.5,5.9]},
    "salade verte": {"u":250,"c":"20031","v":[14.7,1.4,1.2,0.2]},
    "salsifi": {"f":0.6,"c":"20237","v":[41.1,2.3,4.7,0.2]},
    "sardine": {"u":80,"f":0.6,"c":"26065","v":[160,19.5,0,9.2]},
    "sardine en boite": {"boite":115,"c":"26034","v":[217,23.3,0.3,13.7]},
    "sardine fraiche": {"u":80,"f":0.6,"c":"26065","v":[160,19.5,0,9.2]},
    "sarrasin": {"c":"9380","v":[362,13.3,67.5,3.4]},
    "sarriette": {"branche":1,"f":0,"c":"11062","v":[264,6.7,23,5.9]},
    "sauce cesar": {"pot":150,"c":"11110","v":[475,0.6,2.9,51]},
    "sauce hoisin": {"cas":18,"c":"11216","v":[171,2.9,39.5,0]},
    "sauce huitre": {"cas":18,"c":"11223","v":[50.7,1.4,10.6,0.3]},
    "sauce soja": {"cas":16,"d":1.1,"c":"11104","v":[39.9,7.3,1.7,0]},
    "sauce soja sucree": {"cas":18,"c":"11216","v":[171,2.9,39.5,0]},
    "saucisse": {"u":120,"c":"30110","v":[321,13.3,0.6,29.5]},
    "saucisse de montbeliard": {"u":120,"c":"30105","v":[322,17.3,1.7,27.3]},
    "saucisse de strasbourg": {"u":35,"c":"30742","v":[291,12.4,1.4,25.9]},
    "saucisse de toulouse": {"u":120,"c":"30110","v":[321,13.3,0.6,29.5]},
    "saucisse fumee": {"u":125,"c":"30102","v":[336,15.6,0,30.4]},
    "sauge": {"feuille":0.3,"c":"11037","v":[320,10.6,20.4,12.8]},
    "saumon": {"c":"26036","v":[193,20.5,0,12.4]},
    "saumon fume": {"c":"26037","v":[184,22.2,0.1,10.5]},
    "saumon qualite sashimi": {"c":"26036","v":[193,20.5,0,12.4]},
    "saumon tre frai": {"c":"26036","v":[193,20.5,0,12.4]},
    "saute de porc": {"c":"28001","v":[178,18.9,0.4,11.2]},
    "saute de veau": {"c":"6560","v":[124,20.7,0,4.6]},
    "sel": {"f":0,"v":[0,0,0,0]},
    "sel et poivre": {"f":0,"v":[0,0,0,0]},
    "semoule": {"cas":12,"c":"9610","v":[350,11.8,69.8,1.3]},
    "semoule de ble": {"cas":12,"c":"9610","v":[350,11.8,69.8,1.3]},
    "semoule fine": {"c":"9610","v":[350,11.8,69.8,1.3]},
    "spaghetti": {"c":"9810","v":[364,12,72.7,1.6]},
    "steak hache": {"u":100,"c":"6254","v":[215,20.2,0.5,14.8]},
    "sucre": {"cas":12,"cac":5,"c":"31016","v":[399,0,99.7,0]},
    "sucre glace": {"cas":8,"c":"31016","v":[399,0,99.7,0]},
    "tagliatelle": {"c":"9821","v":[381,14,68,4.7]},
    "tahini": {"cas":15,"c":"15203","v":[631,17.7,13.8,53.4]},
    "thon au naturel": {"boite":112,"c":"26039","v":[143,26.8,0,3.9]},
    "thon en boite": {"boite":112,"c":"26039","v":[143,26.8,0,3.9]},
    "thon frai": {"c":"26053","v":[155,24,2.7,5.4]},
    "thym": {"branche":1,"bouquet":10,"c":"11070","v":[107,5.6,10.5,1.7]},
    "tofu": {"c":"20904","v":[147,13.4,2.9,8.5]},
    "tofu ferme": {"c":"20904","v":[147,13.4,2.9,8.5]},
    "tomate": {"u":120,"c":"20276","v":[17.5,0.5,3.4,0]},
    "tomate cerise": {"c":"20172","v":[31.8,1.3,5.6,0]},
    "tomate concassee": {"boite":400,"c":"20169","v":[22.6,1.2,3.6,0]},
    "tomate sechee": {"c":"20189","v":[257.1,14.1,43.5,3]},
    "tome fraiche": {"c":"12758","v":[364,21.6,3.4,29.4]},
    "topinambour": {"c":"20196","v":[74.7,2,15.8,0]},
    "tortilla": {"u":40,"c":"7815","v":[320,8,53,7.5]},
    "traver de porc": {"f":0.6,"c":"28400","v":[237,18,0.6,18]},
    "truite": {"u":250,"f":0.6,"c":"27009","v":[132,19,0,6.2]},
    "truite fumee": {"c":"27029","v":[171,22.3,3.2,7.7]},
    "vanille": {"u":2,"f":0,"c":"11057","v":[0,0,0,0]},
    "veau a blanquette": {"c":"6560","v":[124,20.7,0,4.6]},
    "veau a mijoter": {"c":"6560","v":[124,20.7,0,4.6]},
    "veau hache": {"c":"6560","v":[124,20.7,0,4.6]},
    "vermicelle": {"c":"9810","v":[364,12,72.7,1.6]},
    "vermicelle de riz": {"c":"9900","v":[365,7.4,80.5,1]},
    "vin blanc": {"d":0.99,"c":"5215","v":[55.3,0.3,0.2,0]},
    "vin rouge": {"d":0.99,"c":"5214","v":[75.7,0.2,0,0]},
    "vinaigre balsamique": {"cas":16,"c":"11091","v":[91.7,0.7,18,0]},
    "vinaigre de cidre": {"cas":15,"c":"11090","v":[3.7,0,0.9,0]},
    "vinaigre de riz": {"cas":15,"c":"11018","v":[22.5,0,1,0.1]},
    "vinaigre de vin": {"cas":15,"c":"11220","v":[20.6,0.3,0,0]},
    "yaourt grec": {"pot":150,"c":"19860","v":[103,3,3.7,8.2]},
    "yaourt nature": {"pot":125,"u":125,"c":"19593","v":[50.1,3.8,4.3,1.7]}
  }
};

/* Poids d'une unité quand l'ingrédient ne précise pas le sien. */
const POIDS_UNITES_DEFAUT = { gousse: 5, bouquet: 30, branche: 2, feuille: 0.5, tranche: 30,
  boite: 250, botte: 250, morceau: 20, pot: 125, sachet: 10, paquet: 250, buche: 180,
  tete: 50, pincee: 0.5, bocal: 350 };

/* La même écriture des deux côtés : minuscules, sans accents, et sans le
   « s » ou le « x » final des mots de plus de trois lettres — « Oignons »
   et « oignon », « Œufs » et « oeuf » se retrouvent. */
function cleNutrition(nom) {
  return String(nom || "").toLowerCase().replace(/œ/g, "oe").replace(/æ/g, "ae")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim()
    .split(" ").map((m) => m.length > 3 ? m.replace(/[sx]$/, "") : m).join(" ");
}

/* Les unités de l'application, ramenées à une clé courte. null = inconnue. */
function uniteNutrition(u) {
  const t = String(u || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\((s|x|aux)\)/g, "").replace(/[^a-z]+/g, " ").trim();
  if (!t) return "u";
  if (/^(g|gr|gramme?s?)$/.test(t)) return "g";
  if (/^(kg|kilos?)$/.test(t)) return "kg";
  if (t === "ml" || t === "cl" || t === "l") return t;
  if (/^(c a soupe|cuillere a soupe|cs|cas)$/.test(t)) return "cas";
  if (/^(c a cafe|cuillere a cafe|cc|cac)$/.test(t)) return "cac";
  const mots = { boite: "boite", bouteille: "bouteille", paquet: "paquet", pot: "pot", bocal: "bocal",
    sachet: "sachet", tranche: "tranche", bouquet: "bouquet", branche: "branche", gousse: "gousse",
    tete: "tete", buche: "buche", morceau: "morceau", pincee: "pincee", botte: "botte", feuille: "feuille" };
  return mots[t] || null;
}

/* « 1,2 » → 1.2 ; « 1/2 » → 0.5 ; « 2-3 » → 2.5 ; « ½ » → 0.5. */
function qteNutrition(v) {
  const s = String(v == null ? "" : v).trim().replace(/½/g, "0.5").replace(/¼/g, "0.25").replace(/¾/g, "0.75").replace(",", ".");
  let m = s.match(/^(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/);
  if (m) return Number(m[2]) ? Number(m[1]) / Number(m[2]) : null;
  m = s.match(/^(\d+(?:\.\d+)?)\s*(?:-|à|a)\s*(\d+(?:\.\d+)?)$/);
  if (m) return (Number(m[1]) + Number(m[2])) / 2;
  const n = parseFloat(s);
  return isNaN(n) ? null : n;
}

/* L'aliment d'un ingrédient : le nom exact d'abord ; sinon le plus long nom
   connu contenu dans le sien, mots entiers (« oignons jaunes » → oignon). */
function alimentNutrition(nom) {
  const table = (window.NUTRITION && window.NUTRITION.aliments) || {};
  const cle = cleNutrition(nom);
  if (table[cle]) return table[cle];
  let meilleur = null;
  const dans = " " + cle + " ";
  for (const k in table) {
    if (k.length >= 4 && dans.indexOf(" " + k + " ") !== -1 && (!meilleur || k.length > meilleur.length)) meilleur = k;
  }
  return meilleur ? table[meilleur] : null;
}

/* Poids en grammes d'une ligne d'ingrédient, avant la part mangée. */
function grammesIngredient(ing, a) {
  const n = qteNutrition(ing.qte);
  if (n === null || n <= 0) return null;
  const u = uniteNutrition(ing.unite);
  if (u === null) return null;
  const d = a.d || 1;
  if (u === "g") return n;
  if (u === "kg") return n * 1000;
  if (u === "ml") return n * d;
  if (u === "cl") return n * 10 * d;
  if (u === "l") return n * 1000 * d;
  if (u === "cas") return n * (a.cas || 15 * d);
  if (u === "cac") return n * (a.cac || 5 * d);
  if (u === "bouteille") return n * (a.bouteille || 750 * d);
  if (u === "u") return a.u !== undefined ? n * a.u : null;
  const p = a[u] !== undefined ? a[u] : POIDS_UNITES_DEFAUT[u];
  return p === undefined ? null : n * p;
}

/* Les macronutriments d'une recette, PAR PORTION. Un ingrédient inconnu, ou
   dont la quantité ne se convertit pas en grammes, est laissé de côté et
   nommé dans « manquants » : l'écran dit sur combien d'ingrédients porte le
   calcul, plutôt que de compter faux sans prévenir. */
function macrosRecette(r, portionsDefaut) {
  const total = [0, 0, 0, 0];
  let comptes = 0;
  const manquants = [];
  ((r && r.ingredients) || []).forEach((i) => {
    const nom = String((i && i.nom) || "").trim();
    if (!nom) return;
    const a = alimentNutrition(nom);
    if (a && a.f === 0) { comptes++; return; }
    const g = a ? grammesIngredient(i, a) : null;
    if (!a || g === null) { manquants.push(nom); return; }
    const k = g * (a.f === undefined ? 1 : a.f) / 100;
    for (let j = 0; j < 4; j++) total[j] += a.v[j] * k;
    comptes++;
  });
  const portions = Number(r && r.portions) > 0 ? Number(r.portions) : (portionsDefaut || 4);
  return {
    kcal: Math.round(total[0] / portions),
    proteines: Math.round(total[1] / portions),
    glucides: Math.round(total[2] / portions),
    lipides: Math.round(total[3] / portions),
    portions: portions, comptes: comptes, total: comptes + manquants.length, manquants: manquants
  };
}
