# 🏡 Ma Tribu — l'organisation de la maison, en famille

> ### 🧪 Version 0.21 — BÊTA
> L'application est utilisable au quotidien, mais elle est encore jeune : des
> bugs sont possibles et la forme des données peut encore changer.
> Un bouton **« Signaler un problème / proposer une idée »** est disponible
> dans *Mon profil* — servez-vous-en sans hésiter.

Application pour téléphone (à installer sur l'écran d'accueil) qui rassemble :

| Onglet | À quoi ça sert |
|---|---|
| 🏡 **Accueil** | Ce qu'il y a à faire aujourd'hui : mes tâches, le menu du jour, les rappels, les courses, le classement. |
| 🧹 **Tâches** | Les tâches ménagères, avec la personne assignée, les points, et la validation. |
| 🛒 **Courses** | Une ou plusieurs listes partagées (semaine, mois, magasin), rangées par rayon. |
| 🍽️ **Menus** | Les repas midi et soir de la semaine, avec un générateur automatique. |
| 📖 **Recettes** | Le cahier : 291 plats et 62 desserts, filtrables et triables. |
| 🔔 **Rappels** | L'agenda partagé de la famille et les pense-bêtes. |
| 🥫 **Ma réserve** | Votre stock (épicerie, conserves, vrac…) avec les quantités minimum, dans l'onglet Courses. |
| 🌟 **Points & cadeaux** | Le score de chacun et la boutique de récompenses. |

---

## Comment ça marche, en deux minutes

### Les profils

- La première personne qui crée la famille devient **administrateur**.
- Les autres la rejoignent par **invitation** : l'administrateur crée un lien
  depuis *Administration → Créer une invitation* et le lui envoie. Le lien ne
  sert **qu'une fois** et expire au bout de quelques jours.
- En créant l'invitation, l'administrateur choisit **pour qui** elle est :
  - **➕ Une nouvelle personne** : l'invité crée lui-même son prénom, son avatar
    et son code à 4 chiffres ;
  - **un prénom existant** : pour connecter un profil déjà créé dans
    *Administration*, ou pour ajouter un **deuxième téléphone** à quelqu'un.
    L'invité devra alors saisir le code à 4 chiffres de ce profil.
  (Un profil sans code à 4 chiffres ne peut pas être invité : donnez-lui-en un
  d'abord dans *Administration → Membres*.)
- Chacun choisit son prénom, un avatar et un **code à 4 chiffres** pour entrer.
- Il faut **une invitation par appareil** : c'est ce qui fait que connaître le
  nom de votre tribu ne suffit jamais pour entrer.
- Une invitation se présente sous **deux formes équivalentes** : un **code de
  12 caractères** (`ABCD-EFGH-JKLM`) que l'on peut taper ou dicter, et un
  **lien** que l'on peut envoyer par message. Les tirets sont facultatifs, les
  minuscules aussi.
- Un administrateur peut : créer/modifier les tâches, valider les tâches faites,
  gérer les cadeaux, ajouter ou modifier des membres, ajuster les points.

> 💡 Nommez **deux administrateurs**. Si le seul administrateur perd l'accès à
> son téléphone, plus personne ne peut valider les tâches ni inviter.

### Les enfants qui n'ont pas de téléphone

Dans *Administration → Membres → Ajouter*, cochez **« Pas de téléphone »**.

L'enfant a alors un profil complet — ses tâches, ses points, son rang au
classement, ses cadeaux — mais il ne se connecte pas :

- il n'apparaît pas dans la liste « Qui êtes-vous ? » et n'a pas de code à
  4 chiffres ;
- ses tâches du moment s'affichent sur **votre** accueil, dans une carte
  **« 🧒 À faire pour les enfants »** ;
- quand vous cochez « C'est fait » pour lui, cela vaut validation : les points
  lui sont crédités immédiatement (à lui, pas à vous) ;
- pour dépenser ses points, ouvrez **Points & cadeaux** : à côté de son nom dans
  le classement, le bouton **🎁** ouvre la boutique en son nom.

Le jour où il a un téléphone, décochez la case, donnez-lui un code à 4 chiffres
et envoyez-lui une invitation : il garde ses points et son historique.

### Les tâches

- Chaque tâche a une **fréquence** : chaque jour, chaque semaine ou chaque mois.
- On coche les personnes qui peuvent s'en occuper. Avec l'option **« Chacun son
  tour »**, la personne assignée **change automatiquement** à chaque période :
  la semaine 1 c'est Paul, la semaine 2 c'est Léa, etc. Rien à gérer à la main.
  (Le bouton « Passer au suivant » permet de décaler le tour si besoin.)
- La personne assignée appuie sur **« C'est fait »** → la tâche passe
  **« à valider »** → un administrateur valide → les **points sont crédités**.
- Une tâche non validée ne rapporte rien : c'est le garde-fou.

### L'agenda partagé et les rappels

L'onglet **🔔 Rappels** tient à la fois l'agenda de la famille et les
pense-bêtes. La différence tient à un seul détail : **la date**.

- Un rappel **avec une date** est un rendez-vous : il part dans l'**agenda**,
  regroupé par jour — *Aujourd'hui*, *Demain*, puis les dates.
- Un rappel **sans date** reste dans les **pense-bêtes**.

Chaque rendez-vous peut porter une **heure**, un **lieu** (« Cabinet du
Dr Martin », « école ») et surtout **qui est concerné**. Sans personne cochée,
il vaut pour toute la famille.

**Classer par personne** : une rangée de boutons en haut de l'onglet — *Tout
le monde*, puis chaque membre. En choisissant Léa, vous voyez ses rendez-vous
**et** ceux de toute la famille, pas ceux de son frère.

Ce qui est **en retard** est remonté en tête, en rouge.

**Sur l'accueil**, la carte *🔔 Agenda & rappels* est toujours là : les retards,
les rendez-vous des deux prochaines semaines groupés par jour, et les
pense-bêtes. Plus besoin d'ouvrir l'onglet pour savoir ce qu'il y a cette
semaine.

### Qui cuisine ce soir ?

Faire la cuisine est la corvée la plus lourde de la maison, et c'était la seule
qui ne rapportait rien. Elle suit maintenant **exactement le chemin d'une
tâche** :

1. On désigne quelqu'un dans la case du repas — ou **🔁 Prendre le tour de
   rôle**, qui répartit les repas de la semaine entre ceux qui cuisinent.
2. Cette personne appuie sur **🍽️ C'est fait — j'ai cuisiné**.
3. Un administrateur valide (une carte **🍽️ Repas à valider** apparaît sur son
   accueil), et les **points tombent**.

Le nombre de points est réglable dans *Administration → ⚙️ Réglages de la
famille* — mettez 0 pour ne pas compter la cuisine.

Dans la grille de la semaine, un coup d'œil suffit : l'avatar de qui cuisine,
⏳ pour un repas à valider, ✓ pour un repas validé.

> 🔒 Comme pour les tâches, **le serveur vérifie**. Un membre ne peut pas
> s'attribuer de points : il peut seulement dire « c'est fait ». Seul un
> administrateur valide, et le montant est comparé au réglage de la famille.

### 📋 Reprendre une semaine déjà faite

*Menus → **📋 Reprendre une semaine***. Les familles mangent par cycles :
inutile de refaire quatorze cases chaque dimanche. Choisissez une des huit
semaines précédentes et les plats se recopient.

**Seuls les plats sont repris.** Pas le cuisinier (le tour aura changé), pas
l'état « fait / validé » (ce serait s'attribuer des points d'avance), pas les
absences de cette semaine-là. Et de ce côté-ci, une absence déjà posée ou un
repas déjà validé ne se font jamais écraser.

### 🖨️ Le menu à afficher

*Menus → **🖨️ Afficher***. La semaine en grand, sans boutons, lisible à un
mètre — pour la coller sur le frigo ou la laisser ouverte sur une tablette.
Le bouton **Imprimer** produit une page propre : la barre du bas, les boutons
et le reste de l'application n'y figurent pas.

### 🏁 Le bilan de la semaine

Ce que la famille a **fait**, pas ce qui reste à faire :

> 🧹 **2** tâches validées · 🍽️ **5/12** repas cuisinés · 🌟 **40** points gagnés
> Tom +25 · Léa +15

Aucune saisie : tout vient du journal des points. Les cadeaux échangés ne font
pas baisser le total — on compte ce qui a été gagné.

La carte apparaît sur l'accueil **du samedi au lundi**, quand la semaine se
referme. Le reste du temps, elle reste accessible depuis *Points & cadeaux →
La semaine en bref*.

### 🚪 Quand personne n'est à la maison

Dans la case d'un repas, une rangée **« Personne à la maison ? »** avec six
motifs, en une seule pression :

🍽️ Au restaurant · 🏡 Chez des proches · 🏫 À la cantine ·
✈️ En déplacement · 🌙 Pas de repas · 🚪 Absent

La case affiche alors le motif au lieu d'un plat, et surtout :

- **le générateur ne la remplira jamais**, même quand vous lui demandez de
  remplacer les repas déjà prévus. Une absence est une décision, pas une case
  restée vide ;
- **rien ne part dans la liste de courses** ;
- elle ne compte pas dans le récapitulatif de la semaine (🐟 · 🍗 · 🥦) ;
- sur l'accueil, le menu du jour affiche *« 🏫 À la cantine »* plutôt que
  *« — non prévu »*.

Après une génération, l'application vous le confirme : *« 12 repas proposés —
2 absences respectées »*.

Pour revenir en arrière : **↩️ Finalement, on mange à la maison**.

### 🍴 Quand il en manque un ou deux

Différent d'une absence de toute la maison : là on cuisine, mais pour moins de
monde. Dans la case du repas, une rangée **« Qui ne mange pas ? »** avec les
prénoms, et un compteur *« 3 à table »*.

**Les quantités de la liste de courses suivent**, repas par repas :

```
Ratatouille pour 4 :  2 aubergines · 2 courgettes · 4 tomates
Deux à la cantine  :  1 aubergine  · 1 courgette  · 2 tomates
```

La case affiche alors **3 🍴**. Changer le plat ne remet personne à table :
qui mange ne dépend pas de la recette.

### ♻️ Les restes

Dans la case d'un repas, une case **« Ce sont des restes »**. Le plat reste
affiché — on voit ce qu'on mange — mais il **ne fait acheter aucun ingrédient**
et **n'entame pas la réserve**. C'est ce que font toutes les familles, et
l'application le comptait deux fois.

### 🥫 Ce qu'un repas retire de la réserve

C'est la moitié qui manquait au retour du magasin : les courses **remplissaient**
la réserve, rien ne la **vidait**. Dans la case d'un repas, **🥫 Retirer de ma
réserve** montre ligne à ligne ce qui va être décompté :

```
Aubergines   3 → 1   (−2)
Courgettes   4 → 2   (−2)
```

Rien n'est fait sans confirmation, et vous décochez ce que vous n'avez pas
utilisé — on ne met jamais exactement ce que dit la recette.

**Quand les unités ne se convertissent pas** — la recette demande 4 tomates,
votre réserve est en boîtes — l'application ne devine pas : elle **vous
demande**. Une section *« À vous de dire »* affiche l'article avec un champ,
dans l'unité de la réserve :

> ⚖️ **Tomates** — recette : 4 • en réserve : 4 boîte(s)   `[ 1 ]` boîte(s)

Vous tapez ce que vous avez réellement sorti, et c'est retiré. Laissé vide,
rien n'est touché. Le même champ apparaît au retour du magasin, dans l'autre
sens : *acheté 2 paquet(s) • en réserve : 1 kg* → vous indiquez **1 kg**.

### Les points et les cadeaux

- Les points s'accumulent tâche après tâche.
- L'administrateur définit la **boutique** : nom du cadeau, icône, coût en points.
- Un membre demande un cadeau → l'administrateur accorde → les points sont retirés.
- Chacun peut consulter son historique de points.

### 🤝 L'objectif commun (facultatif)

*Administration → 🤝 Objectif commun.* **Désactivé par défaut** : tant que vous
ne l'activez pas, rien ne change et seul le classement individuel s'affiche.

Le classement met chacun **contre** les autres. L'objectif commun met toute la
maison **du même côté** : les points gagnés par chacun s'additionnent vers une
récompense partagée.

> 🎬 **Une soirée cinéma en famille**
> Objectif de toute la tribu
> ▓▓▓▓▓▓▓▓▓░ **270 / 300 points** — encore 30, tous ensemble

Ce n'est pas un détail d'affichage : avec des enfants d'âges différents, le
plus petit perdra toujours au classement, mais il peut gagner **avec** les
autres. Les deux peuvent coexister, ou vous pouvez n'en garder qu'un.

**Comment le compte est fait.** On additionne les points **gagnés** depuis le
lancement de l'objectif, pas les points détenus. Un cadeau échangé par l'un ne
fait donc **pas reculer** la tribu entière — ce qui n'aurait aucun sens.

Une fois l'objectif atteint, la carte le célèbre. Un administrateur peut alors
**repartir à zéro** pour un nouvel objectif : le compteur commun redémarre, et
les points de chacun ne sont pas touchés. Le nombre d'objectifs déjà atteints
reste affiché.

### La réserve et les courses

L'onglet **Courses** se partage en deux, avec un sélecteur en haut :
**🛒 Mes listes** et **🥫 Ma réserve**.

**🛒 Mes listes** — vous pouvez en avoir plusieurs, chacune avec son rythme et
son magasin :

| Rythme | À quoi ça sert |
|---|---|
| 🛒 **Chaque semaine** | Les courses courantes. Elles comptent dans les rappels de l'accueil. |
| 📅 **Une fois par mois** | La liste qu'on remplit au fil de l'eau sans acheter tout de suite. **Elle ne déclenche aucun rappel** : la pastille orange de l'onglet Courses l'ignore. |
| 📝 **Ponctuelle** | Une sortie précise : la fête, le pique-nique, le bricolage… |

Chaque liste peut porter un **magasin** (Leclerc, le marché, la biocoop…), qui
s'affiche en tête de liste. Le bouton **↔** déplace un article d'une liste à
l'autre — pratique pour faire passer quelque chose du mois vers la semaine
quand ça devient urgent.

Les articles sont rangés par rayon, avec une quantité et une unité (2 l de lait,
500 g de farine…).

**Ajouter plusieurs articles d'un coup** : le champ du haut accepte les
virgules — *pain, lait, œufs* fait trois lignes. Et le lien **Coller une
liste** ouvre une zone où l'on peut coller un message ou dicter d'un trait,
un article par ligne. Chacun est rangé automatiquement dans son rayon.

**🥫 Ma réserve** — ce que vous gardez en permanence à la maison : épicerie,
conserves, produits d'entretien. Pour chaque article :

- la quantité que vous avez, avec son unité ;
- une **quantité minimum** facultative. Dès que vous passez en dessous,
  l'article est signalé et un bouton l'ajoute à la liste de courses — avec
  **ce qui manque**, pas le minimum entier : 200 g de farine pour un minimum
  d'1 kg font apparaître **800 g** dans la liste. Au retour du magasin, la
  réserve retombe donc pile sur son minimum ;
- les boutons **−** et **+** ajustent la quantité en un geste ;
- une case **🫙 Acheté en vrac**. L'article est alors marqué « vrac » partout,
  et quand il arrive dans une liste de courses, un bandeau rappelle en tête de
  liste combien d'articles demandent un contenant : *« 3 articles en vrac :
  pensez aux bocaux et aux sacs réutilisables »*. Le vrac se recopie tout seul
  de la réserve vers les courses, inutile de le recocher.

**Le lien avec les menus, c'est là que ça devient utile :** quand vous appuyez
sur **🛒 Aux courses** depuis l'onglet Menus, l'application calcule pour chaque
ingrédient *besoin de la semaine − ce que vous avez en réserve*. Ce qui est déjà
couvert est décoché automatiquement, et les autres sont proposés avec la
quantité réellement manquante.

> Exemple : la semaine demande 6 pommes et 250 g de farine. Vous avez 2 pommes
> et 1 kg de farine → l'application propose **4 pommes**, et laisse la farine de
> côté. Les kilos et les grammes sont convertis tout seuls (idem ml / cl / l).

### Les dates de péremption

Chaque article de la réserve peut porter un **« à consommer avant le… »**.
Il est alors signalé quand il approche — *dans 2 jours*, *demain*, *périmé* —
et un bandeau récapitule en tête de réserve : *« À finir bientôt : yaourts,
courgettes, aubergines »*.

**Le générateur s'en sert.** Avec l'option **anti-gaspillage** (activée par
défaut, dans les réglages de la famille), il propose en priorité les plats qui
utilisent ce qui va se perdre. Mesuré sur une réserve où courgettes et
aubergines expirent : la ratatouille est retenue **12 fois sur 12** avec
l'option, **1 fois sur 12** sans.

### Au magasin : terminer les courses

C'est là que les deux listes se rejoignent. Vous cochez au fur et à mesure dans
les rayons ; les articles cochés descendent dans **Dans le panier**. Un bouton
apparaît alors :

> **✅ Terminer les courses (7)**

En une pression, les articles quittent la liste **et rejoignent votre réserve** :

- ce qui y est **déjà** est réapprovisionné tout seul — *Riz : 1 kg → 3 kg*.
  La reconnaissance tolère les écarts d'écriture : *Tomate* retrouve
  *Tomates*, *Oeufs* retrouve *Œufs*, *Pomme de terre* retrouve *Pommes de
  terre*. En revanche **un nom plus précis reste un autre produit** :
  *lait de coco* n'est pas du *lait*, et *farine T55* n'est pas *farine* ;
- ce qui n'y est **pas encore** est ajouté aussi, et vous est montré avant :
  les cases sont **cochées par défaut**. Le gâteau d'anniversaire n'a rien à
  faire dans une réserve — décochez-le, il disparaîtra simplement de la liste ;
- si les unités ne correspondent pas (2 paquets achetés, une réserve en kilos),
  l'application **ne bricole pas un chiffre faux** : elle vous le signale pour
  que vous ajustiez à la main.

Quand il n'y a que des articles déjà connus, **rien ne vous est demandé** : une
pression suffit, et un message résume ce qui est rentré. C'est réglable —
*« ne plus me demander »* dans le récapitulatif, ou le lien **changer** sous le
bouton.

*Les unités qui ne se convertissent pas entre elles (des grammes et des boîtes,
par exemple) ne sont pas mélangées : l'application le signale au lieu de
deviner.*

### Les menus

- Appuyez sur **🎲 Générer** : l'application remplit la semaine en piochant dans
  la bibliothèque de recettes (353 plats fournis). Voir les réglages juste en
  dessous.
- Sous les boutons, une ligne récapitule ce que donne la semaine :
  **🐟 2 · 🍗 3 · 🥦 2**.
- Appuyez sur **🛒 Aux courses** : tous les ingrédients de la semaine sont
  proposés, vous décochez ce que vous avez déjà, et hop, dans la liste.
- **📖 Recettes** : ajoutez vos propres plats. Chaque recette a un champ **lien** :
  collez-y l'adresse de la recette (Cookomix, un blog…) et un bouton l'ouvrira.
  L'application ne stocke que le nom du plat et ses ingrédients — pas le texte
  des recettes, qui appartient à leurs auteurs.

### Les réglages du générateur

La fenêtre **🎲 Générer** est rangée en trois parties. Vos choix sont gardés
sur l'appareil : d'une semaine à l'autre, vous les retrouvez tels quels.

**Quels repas remplir ?** — les midis, les soirs, et faut-il remplacer les
repas déjà prévus (sinon seules les cases vides sont complétées).

**Ce qu'on mange**

- **Régime de la semaine** : *De tout*, *Sans viande (poisson autorisé)* ou
  *Végétarien*. Ce n'est pas une préférence : les plats écartés le sont pour de
  bon, ils ne peuvent pas ressortir faute de mieux.
- **🐟 Poisson**, **🍗 Viande**, **🥦 Repas végétariens** : combien de fois dans
  la semaine. Un nombre indiqué est respecté à la lettre — « 2 fois » donne
  exactement deux poissons, et la catégorie ne réapparaît pas ailleurs.
  *Peu importe* laisse la catégorie entièrement libre. *Aucun* la supprime.

*Comment un plat est classé ?* D'abord par le rayon de ses ingrédients
(Boucherie, Poissonnerie), puis par leur nom — un thon en boîte se range en
épicerie. Un plat qui contient les deux compte comme poisson. Un bouillon de
bœuf ne fait pas un repas de viande.

**Comment choisir les plats**

- **Respecter les saisons** — voir la section suivante.
- **Utiliser d'abord ce que j'ai en réserve** : les plats dont vous avez déjà
  les ingrédients passent devant. Moins de courses, moins de perte. Ça pèse
  lourd sans écraser la saison ni les nombres demandés.
- **Plats plus légers le soir**, **plats rapides du lundi au vendredi**.
- **Privilégier les recettes Thermomix** (99 plats fournis s'y prêtent).
- **Ne pas resservir un plat vu depuis…** 2, 3, 4 ou 6 semaines.

**La variété du genre de plat.** Le générateur ne se contente pas d'éviter la
même recette deux fois : il évite aussi **quatre soupes dans la même semaine**.
Chaque plat classe dans un genre — soupe, salade, tarte ou quiche, pâtes, riz,
mijoté, gratin, poêlée — et chaque plat du même genre déjà posé rend le suivant
moins probable. La règle est **souple** : si votre cahier ne contient que des
soupes, la semaine sera remplie de soupes plutôt que de rester vide.

Si vous demandez plus de repas qu'il n'y a de cases à remplir, l'application
place ce qu'elle peut et vous le dit.

### Les saisons

Chaque recette peut porter une ou plusieurs **saisons** — 🌸 printemps, ☀️ été,
🍂 automne, ❄️ hiver. Une recette sans saison cochée convient toute l'année.

Les 353 plats fournis sont déjà renseignés : la ratatouille et le gratin de
courgettes en été, la tartiflette et la soupe à l'oignon en hiver, les lasagnes
toute l'année…

**Le générateur en tient compte.** L'option **« Respecter les saisons »**, cochée
par défaut, écarte les plats hors saison. Concrètement, en janvier il ne vous
proposera pas de gratin de courgettes ; il ira chercher les poireaux, les
endives et le potimarron.

Quand vous créez une recette, le bouton **🔎 Deviner d'après les ingrédients**
propose les saisons à partir d'un calendrier des fruits et légumes : tapez
« courgettes, tomates, basilic » et il coche *Été*. C'est une suggestion, vous
gardez la main.

Enfin, le filtre **☀️ De saison** dans *Mes recettes* n'affiche que ce qui se
cuisine en ce moment.

> Le calendrier reste volontairement simple. Un produit qu'il ne connaît pas est
> considéré comme disponible toute l'année — mieux vaut ne rien dire que dire
> une bêtise.

#### Consulter une recette

Appuyez sur une recette dans la liste : sa fiche s'ouvre avec les **ingrédients**
et le **déroulé numéroté**. Depuis l'onglet Menus, un bouton
**📖 Consulter la recette** ouvre la même fiche pour le plat prévu ce jour-là.

Les 353 plats fournis ont tous leur déroulé (4 à 5 étapes). Il est **écrit pour
l'application** : aucune recette n'est recopiée d'un site. C'est indicatif —
pour les temps exacts ou les vitesses d'un robot, collez le lien de la recette
d'origine dans la fiche, un bouton l'ouvrira.

Le bouton **Modifier** permet d'écrire ou de corriger le déroulé : **une étape
par ligne**, les lignes vides sont ignorées.

#### Les plats fournis

L'application arrive avec **291 plats et 62 desserts**, dont **99 marqués 🍲 robot** : veloutés,
risottos, sauces, plats mijotés et one-pot — tout ce que le Thermomix (ou un
autre robot cuiseur) fait bien. Ils sont écrits maison : **aucune recette n'est
recopiée d'un site**, on n'y trouve que le nom du plat et ses ingrédients. À
vous de coller le lien vers la vraie recette dans le champ prévu.

La case **🍲 Robot** existe aussi sur vos propres recettes.

#### Si votre famille existait déjà

Les 353 recettes sont **recopiées dans votre famille le jour de sa création** :
les améliorations apportées ensuite au fichier de recettes ne les atteignent
pas toutes seules. Une famille créée avant l'arrivée des saisons se retrouve
donc avec des recettes sans saison — et le filtre affiche alors tout.

La même chose vaut pour les **nouveaux plats** ajoutés à l'application : ils
n'apparaissent pas d'eux-mêmes dans un cahier déjà créé.

L'application s'en occupe : à la première ouverture par un administrateur, elle
complète ce qui manque et vous prévient (*« Recettes mises à jour : 33 saisons,
242 unités »*). Vous pouvez aussi le déclencher à la main depuis
*Administration → 📖 Recettes → **🔄 Mettre à jour les recettes fournies***.

**Comment savoir qu'il y a du nouveau ?** Une **pastille orange** apparaît sur
votre avatar, en haut à gauche. Appuyez dessus : le menu affiche en tête
*« 🔄 N mises à jour disponibles »*, qui liste ce que l'application propose de
reprendre. Rien ne s'applique sans votre accord, et la pastille disparaît une
fois la mise à jour faite. Elle ne s'affiche que pour les administrateurs — eux
seuls peuvent y donner suite.

La fenêtre *Mettre à jour les recettes* propose en plus d'**ajouter les nouveaux
plats**, avec une case à décocher : ils ne reviennent jamais d'office, au cas où
vous en auriez supprimé exprès.

Cette mise à jour **n'écrase jamais ce que vous avez saisi** : elle ne remplit
que les champs absents. Vos propres recettes restent « toute l'année » tant que
vous ne cochez rien, et une quantité inhabituelle (« 2 briques ») est laissée
telle quelle plutôt que mal découpée.

### Retrouver une recette

Dans **Mes recettes**, la barre de recherche cherche dans les noms de plats
**et dans les ingrédients** (tapez « coco » pour retrouver tout ce qui contient
du lait de coco).

En dessous, six filtres se combinent librement :

| Filtre | Ce qu'il garde |
|---|---|
| ☀️ **De saison** | Ce qui se cuisine en ce moment (la saison affichée suit la date) |
| 🍲 **Thermomix** | Les plats qui se prêtent bien au robot cuiseur (99 des 353 fournis) |
| ✍️ **Mes recettes** | Uniquement celles que vous avez créées (pas les 300 fournies) |
| 🌿 **Végé** | Les plats végétariens |
| ⚡ **Rapide** | Moins de 30 minutes |
| 🥗 **Léger** | Les plats marqués « léger » |

### Quand l'application a du nouveau

Les recettes fournies sont recopiées dans votre famille **le jour de sa
création**. Celles ajoutées plus tard par une mise à jour de l'application
n'arrivent donc pas toutes seules : il faut les accepter.

Quand il y a quelque chose à ajouter, un bandeau apparaît **sur l'accueil et
sur l'écran Mes recettes** :

> ✨ **57 nouveaux plats à ajouter** — appuyez ici pour voir ce qui est nouveau
> et le mettre à jour.

Appuyez dessus : la fenêtre liste les plats concernés, et **rien n'est fait
tant que vous n'avez pas appuyé sur *Mettre à jour***. Vos propres recettes et
vos modifications ne sont jamais touchées.

On y accède aussi par *Mon profil* (un point orange s'allume sur votre avatar)
et, à tout moment, par *Administration → 📖 Recettes →
**🔄 Mettre à jour les recettes fournies***.

### Les façons de cuisiner « santé »

> ⚕️ **Ce ne sont pas des régimes médicaux.** Ce sont des façons de cuisiner,
> déduites des ingrédients, qui suivent des recommandations nutritionnelles
> générales. L'application ne connaît ni vos quantités, ni le reste de votre
> journée, ni votre traitement. **Demandez à votre médecin ou à une
> diététicienne** avant d'en faire une règle.

Chaque plat est rangé **tout seul**, d'après ses ingrédients. Rien à saisir :
vos propres recettes et celles que vous importez sont classées de la même
façon, et si vous changez les ingrédients, le classement suit.

| Profil | Ce qu'il retient | Sur les 353 |
|---|---|---|
| ❤️ **Cœur & cholestérol** | Moins de graisses saturées (beurre, crème, fromage, charcuterie), plus de poisson, de légumineuses, d'huile d'olive et de fibres | 79 |
| 🩸 **Glycémie** | Des fibres et des protéines plutôt que du sucre et des féculents raffinés servis seuls | 65 |
| 🌿 **Anti-inflammatoire** | La cuisine méditerranéenne conseillée en cas d'arthrose : poisson gras, huile d'olive, légumes, curcuma et gingembre | 88 |
| 🦋 **Iode & sélénium** | Les plats riches en iode et en sélénium, les deux minéraux dont la thyroïde a besoin | 63 |
| 🧂 **Peu de sel** | Aucun ingrédient naturellement très salé : ni charcuterie, ni fromage, ni bouillon cube, ni sauce soja, ni olives | 216 |
| 🌾 **Sans gluten** | Aucun ingrédient à base de blé, d'orge ou de seigle | 175 |
| 🍬 **Peu de sucre** | Aucun sucre ajouté : ni sucre, ni miel, ni sirop, ni chocolat | 290 |
| 🥛 **Sans lactose** | Aucun produit laitier : ni lait, ni beurre, ni crème, ni fromage | 162 |

> 💡 **Le vrai usage de « peu de sucre »** : combinez-le avec **🍰 Desserts**.
> Vous obtenez les 12 desserts sans sucre ajouté — compote, salade d'agrumes,
> billes dattes-amandes, muffins banane-avoine… Seul, il retient presque tous
> les plats salés, ce qui est exact mais peu utile.

Les quatre derniers sont des **exclusions** : ils disent ce qu'un plat ne
contient pas, et s'appliquent aussi aux desserts. Les quatre premiers sont des
**façons de cuisiner un repas** : un dessert n'y entre jamais, sinon des œufs
et des amandes suffiraient à faire passer un brownie pour un plat de la
thyroïde.

> ⚠️ **Sans gluten et sans lactose se lisent sur le nom des ingrédients.** Ils
> ne remplacent pas l'étiquette : la sauce soja est faite de blé, les bouillons
> cubes en contiennent presque toujours, et beaucoup de produits industriels
> en renferment sans le dire. En cas de maladie cœliaque, **vérifiez toujours
> l'emballage**.

**Pourquoi « iode & sélénium » et non « thyroïde » ?** Parce qu'il n'existe pas
un régime thyroïde : une **hypothyroïdie** et une **hyperthyroïdie** demandent
des choses **opposées** sur l'iode. Le profil met en avant les plats qui en
apportent ; c'est à votre médecin de dire dans quel sens vous en servir.
(À évoquer avec lui aussi : les crucifères crus en grande quantité et le soja
peuvent interférer.)

**Où on s'en sert**

- Dans *Mes recettes*, une rangée de filtres. Deux profils cochés **se
  cumulent** : le plat doit tenir les deux.
- Dans la fiche d'un plat, la carte *Façons de cuisiner* dit **pourquoi** —
  *« grâce à : poisson gras, huile d'olive — malgré : graisses saturées »*.
  On peut ainsi être en désaccord avec le classement.
- Dans le **générateur de menus**, une liste *Façon de cuisiner (santé)* qui
  se combine avec le régime végétarien. Elle écarte franchement : une semaine
  « glycémie » ne contient que des plats du profil. Si le choix devient trop
  court, l'application le dit au lieu de faire semblant.

### Les desserts

62 des 353 recettes sont des **desserts**. Ils vivent dans le même cahier, avec
deux différences :

- le **générateur de menus ne les propose jamais** : il remplit des midis et
  des soirs, pas des fins de repas ;
- les filtres **🍽️ Plats** et **🍰 Desserts** permettent de n'afficher que les
  uns ou les autres.

Pour marquer un de vos plats comme dessert, cochez **🍰 Dessert** dans le
formulaire de la recette.

### Retrouver un plat parmi 353

Le cahier est long : sans repères, c'est cinquante écrans à faire défiler.
Trois outils, du plus rapide au plus complet :

- **La recherche** en haut, qui cherche dans les noms **et** les ingrédients.
- **L'index alphabétique** — une rangée de lettres sous le titre : une
  pression et vous êtes à la lettre. Il n'apparaît qu'en tri A → Z.
- **🔎 Filtrer**, qui replie les quatre rangées de filtres. Elles prenaient
  600 pixels avant la première recette — les trois quarts d'un écran de
  téléphone. Ce qui est actif reste affiché en permanence, et se retire d'une
  pression sur la puce.

### Ranger le cahier

Juste au-dessus de la liste, trois façons de la trier :

| Tri | Ce qu'il donne |
|---|---|
| 🔤 **A → Z** | L'ordre alphabétique, **avec un repère par lettre** : A, B, C… Avec 353 plats, c'est ce qui permet de retrouver un nom en faisant défiler. |
| 🕐 **Récentes** | Les dernières arrivées d'abord : ce que vous venez d'ajouter, puis ce qu'une mise à jour a apporté. |
| ☀️ **De saison** | Les plats de la saison en cours d'abord, puis ceux de toute l'année, puis le reste. Contrairement au filtre, **rien n'est caché** : c'est juste l'ordre qui change. |

Les accents et les ligatures sont ignorés pour le classement : *Émincé de dinde*
se range à **E**, *Œufs cocotte* à **O**, *Bœuf bourguignon* à **B**.

### Partager vos recettes avec d'autres familles

Les familles qui utilisent Ma Tribu disposent d'un **catalogue commun**, accessible
depuis *Mes recettes* → **🌍 Recettes partagées par d'autres familles**. Vous
pouvez y feuilleter les plats publiés, les prévisualiser, et en recopier un chez
vous d'un geste.

Pour publier l'un de vos plats : ouvrez-le (✏️) puis **🌍 Partager avec les
autres familles**. Un écran vous rappelle précisément ce qui devient visible :

- ✅ publié : le nom du plat, ses ingrédients, le lien éventuel, et le **nom de
  votre tribu** ;
- ❌ jamais publié : vos prénoms, vos points, vos courses, vos tâches, ni le code
  de votre famille.

Quelques règles :

- seules **vos propres créations** peuvent être partagées — pas les 353 recettes
  fournies (tout le monde les a déjà), ni celles importées d'une autre famille ;
- vous pouvez **retirer** une publication à tout moment, depuis la même fenêtre ;
- une fiche publiée n'est pas modifiable : pour corriger, retirez-la et
  republiez-la.

> ⚠️ Ces recettes sont écrites par d'autres utilisateurs et **ne sont vérifiées
> par personne**. Lisez-les avant de cuisiner. En tant que propriétaire du projet
> Firebase, vous pouvez supprimer n'importe quelle fiche depuis la console
> (collection `recettesPartagees`).

---

## Mettre l'application en ligne (GitHub Pages)

Comme pour l'application *reventes* :

1. Créez un dépôt **public** sur votre compte GitHub personnel, par exemple `tribu`.
2. Déposez-y **tous les fichiers** de ce dossier
   (sauf `serve.py` et `make_icons.py`, qui ne servent qu'en local — les garder
   ne pose aucun problème non plus).
3. Dans le dépôt : **Settings → Pages → Source : `main` / dossier `/ (root)`**.
4. Au bout d'une minute, l'application est à l'adresse
   `https://VOTRE-COMPTE.github.io/tribu/`.
5. Sur le téléphone : ouvrez l'adresse dans Chrome → menu **⋮** →
   **« Ajouter à l'écran d'accueil »**.

### ⚠️ L'icône de l'écran d'accueil est un appareil de plus

C'est le piège le plus déroutant, surtout sur iPhone. Quand vous ajoutez Ma Tribu
à l'écran d'accueil, le téléphone en fait une **application séparée**, avec sa
**propre mémoire**. Elle ne voit pas la session ouverte dans Safari ou Chrome :
elle affiche donc l'écran de départ et propose de **créer une famille**.

**Ne créez pas une deuxième famille** — elle serait vide, et vos données
resteraient dans l'autre. Faites plutôt :

1. Dans le **navigateur**, avant de poser l'icône :
   *Mon profil ▸ **📱 Connecter un appareil*** ▸ **Créer mon code d'invitation**.
   **Chacun peut créer le sien**, administrateur ou non — le code ne vaut que
   pour son propre profil et ne donne aucun droit supplémentaire.
2. Ouvrez Ma Tribu **depuis l'icône** de l'écran d'accueil.
3. **« J'ai reçu une invitation »**, tapez le code, puis votre code à
   4 chiffres habituel.

L'icône retrouve alors toute la famille. Vos deux accès (navigateur et icône)
continuent de fonctionner en parallèle.

> ⚠️ **Une invitation ne sert qu'une fois.** Celle qui vous a servi à
> rejoindre la famille dans le navigateur est déjà consommée : l'icône a
> besoin de la sienne. C'est pour cela que l'accueil vous propose de créer
> votre code **avant** que vous posiez l'icône — une fois dedans, il est trop
> tard pour le faire depuis là.

*Pourquoi ne pas faire ça tout seul ?* Parce que c'est précisément la
protection : un appareil n'entre dans une famille qu'avec une invitation
valide. Sans cette règle, connaître le nom d'une tribu suffirait à y entrer.

**Pour mettre à jour plus tard :** redéposez les fichiers modifiés sur GitHub.
L'application se met à jour toute seule au prochain lancement (le cache est en
« réseau d'abord »).

---

## Combien de personnes à table ?

*Administration → ⚙️ Réglages de la famille.*

Les 300 recettes fournies sont écrites **pour 4 personnes**. Indiquez le nombre
réel de convives, et toute la chaîne s'ajuste : la liste de courses, ce qu'un
repas retire de la réserve, les quantités affichées.

| Pour 4 | Pour 6 | Pour 8 |
|---|---|---|
| 6 cuisses de poulet | 9 | 12 |
| 300 g de riz | 450 g | 600 g |

Une de vos recettes peut annoncer son propre nombre de parts, dans son
formulaire — utile pour un plat prévu pour 2 ou pour 10.

---

## Choisir les onglets visibles

*Administration → 📱 Onglets visibles → Choisir les onglets.*

Toutes les familles ne se servent pas de tout : certaines ne veulent que les
recettes et les courses. Décochez ce qui ne sert pas, et la barre du bas
s'allège pour **toute la famille**.

- **Masquer ne supprime rien** : les données restent, elles sont rangées hors
  de vue, et un administrateur peut les faire revenir à tout moment.
- Les cartes correspondantes disparaissent aussi de l'accueil : pas de bouton
  « Tout voir » qui mènerait nulle part.
- **L'accueil ne se masque jamais** — il faut toujours un chemin de retour.

---

## Activer le partage entre téléphones

Tant que ce n'est pas fait, **chaque téléphone a ses propres données** et un
bandeau orange le rappelle sur l'accueil.

👉 Suivez **[GUIDE-FIREBASE.md](GUIDE-FIREBASE.md)** (10 minutes, une seule fois).

---

## Les fichiers du projet

| Fichier | Rôle |
|---|---|
| `index.html` | La page de l'application (structure). |
| `styles.css` | Toute la mise en forme, mode sombre compris. |
| `app.js` | Le cœur : dates, points, rotation des tâches, stockage, connexion. |
| `vues.js` | Le dessin de chaque écran. |
| `formulaires.js` | Les fenêtres qui remontent du bas (ajouter, modifier…). |
| `recettes.js` | Les 353 plats fournis au démarrage. Modifiable dans l'app. |
| `firebase-config.js` | **Le seul fichier à remplir** pour activer le partage. |
| `firestore.rules` | Les règles de sécurité, **à copier dans Firebase**. Sans elles, rien n'est protégé. |
| `manifest.webmanifest` | Permet d'installer l'app sur l'écran d'accueil. |
| `sw.js` | Rend l'application utilisable sans réseau. |
| `icon-192.png`, `icon-512.png` | Les icônes. |
| `make_icons.py` | Regénère les icônes si vous changez la couleur (local). |
| `serve.py` | Petit serveur pour tester sur ordinateur (local). |

Pour tester sur ordinateur :

```bash
python serve.py
```

puis ouvrir `http://localhost:4174`.

> 🛡️ Sur `localhost`, l'application reste **volontairement en mode local** : vos
> essais n'écrivent jamais dans la vraie base de la famille. Pour tester la
> synchronisation pour de bon, ouvrez `http://localhost:4174/?nuage=1`.

---

## Comment vos données sont protégées

| Protection | Ce que ça veut dire |
|---|---|
| **Accès par appareil** | Seuls les téléphones inscrits dans la famille peuvent la lire. Le repère de la tribu (`MAISON-K4T9`) n'ouvre rien. |
| **Invitations à usage unique** | Un lien, une personne, un appareil. Il expire, et se désactive dès qu'il a servi. |
| **Codes à 4 chiffres chiffrés** | Ils ne sont jamais enregistrés tels quels, seulement sous forme d'empreinte illisible (PBKDF2). Même en ouvrant la base, on ne peut pas les relire. Si quelqu'un l'oublie, un administrateur le réinitialise. |
| **Points en écriture unique** | Chaque gain de points est une ligne qui ne peut plus jamais être modifiée, créée par un administrateur, et dont le montant est vérifié par Firebase lui-même. Impossible de se donner des points en bidouillant l'appli. |
| **Droits par rôle** | Un membre ordinaire ne peut toucher qu'aux courses, repas, rappels et recettes. Les membres, tâches, cadeaux et barèmes sont réservés aux administrateurs. |

Tout cela repose sur le fichier **`firestore.rules`**, à publier dans Firebase
(étape 3 du guide). **Sans lui, aucune de ces protections n'existe.**

### Les limites, dites franchement

- **Tant que Firebase n'est pas configuré**, l'appli tourne en local : les
  données sont dans le téléphone, et quiconque a le téléphone déverrouillé y
  accède. Le chiffrement du code à 4 chiffres marche quand même.
- **Un code à 4 chiffres reste un code à 4 chiffres.** Il empêche le petit frère
  de valider ses tâches tout seul. Ce n'est pas un mot de passe de banque, et il
  ne faut pas y mettre celui de votre carte bancaire.
- **Un administrateur peut tout faire**, y compris s'ajouter des points. C'est
  voulu : c'est le rôle du parent.
- **Entre membres d'une même famille, tout est visible.** L'appli protège des
  gens extérieurs, pas des curiosités entre frères et sœurs.

## Faire essayer l'application à une autre famille

Oui, c'est prévu et ça fonctionne : il suffit de leur donner l'adresse de
l'application. Ils appuient sur **« Créer ma famille »** et repartent de zéro
avec leur propre tribu — leurs membres, leurs tâches, leurs points, les 50
recettes de départ.

**Leurs données sont totalement séparées des vôtres.** Une famille n'est lisible
que par les téléphones qui y ont été inscrits : personne ne peut voir la vôtre,
et vous ne pouvez pas voir la leur depuis l'application.

### Ce qu'il faut leur dire honnêtement

- **Leurs données sont hébergées chez vous.** Tout passe par *votre* projet
  Firebase. Vous pouvez donc tout lire depuis la console Firebase — y compris
  leurs tâches, leurs courses et les prénoms de leurs enfants. Dites-le-leur :
  c'est la moindre des choses, et c'est ce que demande le RGPD dès qu'on héberge
  les données d'autrui.
- **Vous êtes responsable de ces données.** Si vous supprimez le projet Firebase,
  ils perdent tout. Si vous arrêtez le projet, prévenez-les.
- **Conseillez-leur deux administrateurs.** L'accès étant lié à l'appareil, si
  leur unique administrateur perd le sien, plus personne ne peut inviter — et
  seul vous, depuis la console, pourrez les débloquer.
- **Le catalogue de recettes est commun.** Ce qu'ils publient, vous le voyez, et
  réciproquement. Rien d'autre n'est partagé entre familles.
- **Leurs signalements de bugs vous arrivent** dans la collection `retours`.

### Les limites gratuites

L'offre gratuite de Firebase autorise, par jour, de l'ordre de **50 000
lectures** et **20 000 écritures**, pour **1 Go** de stockage. Une famille active
consomme quelques centaines de lectures par jour : vous pouvez héberger
tranquillement une dizaine de familles. Au-delà, surveillez la consommation dans
la console (onglet *Usage*).

### Le repère de famille

Chaque famille a un repère unique (`MAISON-DTUNKE`) qui sert de nom de dossier.
Il est tiré au sort sur 6 caractères : une collision est quasi impossible. Si
malgré tout le repère choisi est déjà pris, l'application le dit et en propose
un autre — il suffit de réessayer.

La vérification passe par une petite collection **`reperes`** qui ne contient
qu'une date de création. Savoir qu'un repère existe n'ouvre aucun accès : cela
sert uniquement à répondre honnêtement « ce nom est déjà pris » avant de créer,
plutôt que de le deviner à partir d'un refus (qui peut avoir d'autres causes).

## Lire les retours des utilisateurs

Le bouton **« Signaler un problème / proposer une idée »** (dans *Mon profil*)
envoie le message dans une collection **`retours`** de votre base Firebase.

Pour les lire : console Firebase → **Firestore Database** → collection
`retours`. Chaque message contient le type (problème / idée / autre), le titre,
le détail, le prénom, le nom de la tribu, la version de l'application et le
modèle de téléphone.

Par sécurité, ces messages **ne sont lisibles que depuis la console** : personne
ne peut les consulter — ni les modifier — depuis l'application.

## Bon à savoir

- **L'onglet ouvert est retenu.** Si vous rechargez la page en consultant vos
  recettes ou votre réserve, vous y revenez — plus de retour brutal à l'accueil.

- **Pas de notification qui sonne.** Une application web ne peut pas envoyer de
  rappel quand elle est fermée. Les rappels s'affichent dans l'app (pastille
  orange sur l'onglet 🔔) mais ne feront pas vibrer le téléphone.
- **Hors connexion**, l'application s'ouvre et s'affiche, mais les modifications
  ne partiront vers la famille qu'au retour du réseau.
- **Changer de téléphone ?** Demandez une nouvelle invitation à un
  administrateur : vous retrouverez votre profil, vos points et votre historique.
- **Il vous redemande de créer une famille ?** C'est que cet accès-là n'a pas
  encore d'invitation — le plus souvent l'icône de l'écran d'accueil, qui est
  une application à part. Ne créez pas de deuxième famille : voir
  *L'icône de l'écran d'accueil est un appareil de plus*.
