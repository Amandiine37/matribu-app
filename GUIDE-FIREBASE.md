# Guide : activer le partage familial (Firebase)

**À quoi ça sert ?**
Sans cette étape, l'application marche très bien… mais chacun a sa liste dans son
téléphone. Personne ne voit les tâches ni les courses des autres.

Firebase est le « carnet commun » posé sur internet : tout le monde écrit dedans
et voit les changements des autres en quelques secondes.

- C'est **gratuit** pour un usage familial (très, très loin des limites payantes).
- Comptez **10 minutes**, une seule fois.
- Il faut un **compte Google personnel** (surtout pas le compte professionnel).

---

## Étape 1 — Créer le projet

1. Allez sur **https://console.firebase.google.com** et connectez-vous avec
   votre compte Google personnel.
2. Cliquez sur **« Créer un projet »**.
3. Nom du projet : `tribu-famille` (ou ce que vous voulez).
4. À l'écran « Google Analytics », **décochez / désactivez** Analytics :
   inutile ici, et ça évite une étape.
5. Cliquez sur **Créer le projet**, puis **Continuer** quand c'est prêt.

---

## Étape 2 — Créer la base de données

1. Dans le menu de gauche, ouvrez **Créer** (ou « Build ») → **Firestore Database**.
2. Cliquez sur **« Créer une base de données »**.
3. Emplacement : choisissez une région **en Europe**, par exemple
   `eur3 (europe-west)`. ⚠️ Ce choix est **définitif**, mais n'importe quelle
   région européenne convient.
4. Choisissez **« Démarrer en mode production »** (on met les bonnes règles juste après).
5. Cliquez sur **Créer**.

---

## Étape 3 — Écrire les règles de sécurité

1. Toujours dans **Firestore Database**, ouvrez l'onglet **« Règles »**.
2. **Effacez tout** ce qui s'y trouve et collez exactement ceci :

**Le contenu à coller se trouve dans le fichier `firestore.rules`** de ce
dossier. Ouvrez-le, sélectionnez tout, copiez, collez dans Firebase.

3. Cliquez sur **Publier**.

> ⚠️ **Cette étape n'est pas une formalité.** Ces règles sont ce qui empêche
> réellement quelqu'un de lire vos données ou de se donner des points, même en
> bidouillant l'application depuis son téléphone. Sans elles, tout le reste ne
> sert à rien.

**Ce qu'elles font, en clair :**

| La règle | Ce qu'elle empêche |
|---|---|
| Seuls les **appareils inscrits** dans la famille peuvent la lire | Qu'un inconnu qui devine le nom de votre tribu voie vos données |
| On n'entre que par une **invitation** valide, non expirée, non utilisée | Qu'un lien qui traîne serve deux fois |
| Un membre ordinaire ne modifie que courses, repas, rappels, recettes | Qu'un enfant se nomme administrateur ou change les barèmes |
| Seul un administrateur passe une tâche en « validée » | Qu'on valide ses propres tâches |
| Les points sont en **écriture unique**, et Firebase vérifie le montant | Qu'on s'attribue 10 000 points depuis la console du navigateur |

> **À retenir :** le repère de la famille (`MAISON-K4T9`) **ne donne aucun
> accès**. Ce qui ouvre la porte, c'est une invitation, et elle ne sert qu'une
> fois. Vous pouvez donc dire le nom de votre tribu sans risque.

---

## Étape 4 — Autoriser la connexion anonyme

L'application ne demande pas d'email : elle ouvre une session « anonyme » auprès
de Firebase. Il faut l'autoriser.

1. Menu de gauche → **Créer** → **Authentication**.
2. Cliquez sur **« Commencer »**.
3. Dans la liste des fournisseurs, choisissez **« Anonyme »**.
4. Basculez l'interrupteur sur **Activer**, puis **Enregistrer**.

---

## Étape 5 — Récupérer votre configuration

1. En haut à gauche, cliquez sur la **roue dentée ⚙️** → **Paramètres du projet**.
2. Descendez jusqu'à **« Vos applications »**.
3. Cliquez sur l'icône **`</>`** (application Web).
4. Surnom de l'application : `Ma Tribu`. Ne cochez **pas** « Firebase Hosting ».
5. Cliquez sur **Enregistrer l'application**.
6. Firebase affiche un bloc de texte qui ressemble à ça :

```js
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "tribu-famille.firebaseapp.com",
  projectId: "tribu-famille",
  storageBucket: "tribu-famille.firebasestorage.app",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

**Gardez cet écran ouvert** (ou copiez le bloc quelque part).

---

## Étape 6 — Coller la configuration dans l'application

1. Ouvrez le fichier **`firebase-config.js`** du projet.
2. Remplacez chaque `"A_REMPLIR"` par la valeur correspondante de votre bloc.
   Attention : gardez bien les guillemets et les virgules.

Résultat attendu :

```js
window.CONFIG_FIREBASE = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "tribu-famille.firebaseapp.com",
  projectId: "tribu-famille",
  storageBucket: "tribu-famille.firebasestorage.app",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

3. Enregistrez le fichier, puis redéposez-le sur GitHub (voir le README).

> Ces valeurs ne sont **pas des mots de passe**. Elles sont visibles par tous ceux
> qui ouvrent l'application : c'est normal et prévu par Google. La protection
> vient des règles de l'étape 3 et de votre code de famille.

---

## Étape 7 — Autoriser votre adresse GitHub Pages

1. Dans **Authentication**, ouvrez l'onglet **« Paramètres »** (ou « Settings »).
2. Section **« Domaines autorisés »** → **Ajouter un domaine**.
3. Ajoutez votre adresse GitHub Pages **sans le `https://`**, par exemple :
   `amandiine37.github.io`
4. Enregistrez.

---

## Vérifier que ça marche

Ouvrez l'application sur votre téléphone :

- Si en haut de l'accueil vous voyez encore le bandeau orange
  **« Mode hors partage »** → la configuration n'est pas prise en compte.
- Sinon, appuyez sur votre avatar (en haut à gauche) : vous devez lire
  **« Partagé avec la famille »** avec un point vert. 🎉

**Le test qui ne trompe pas :**

1. Créez la famille sur votre téléphone.
2. Allez dans **Administration → Créer une invitation**, envoyez-vous le lien.
3. Ouvrez ce lien sur un **autre** téléphone, créez-y un profil.
4. Cochez une tâche d'un côté : elle doit apparaître de l'autre en quelques secondes.
5. Réessayez d'ouvrir **le même lien** : il doit être refusé (« déjà utilisée »).

---

## En cas de souci

| Ce que vous voyez | Ce qu'il faut faire |
|---|---|
| Bandeau « Mode hors partage » qui reste | Un `A_REMPLIR` traîne encore dans `firebase-config.js`, ou le fichier n'a pas été redéposé sur GitHub. |
| Écran « Création impossible » à la création d'une famille | Les règles ne sont pas publiées dans leur dernière version, **ou** le domaine du site n'est pas dans *Authentication → Paramètres → Domaines autorisés*. Le détail technique affiché à l'écran précise laquelle. |
| « Invitation refusée par le serveur » | Les règles de l'étape 3 ne sont pas publiées, ou pas dans leur version complète (`firestore.rules`). |
| « Cette invitation n'existe pas ou a été supprimée » | Le lien a été tronqué en route (SMS coupé). Recopiez-le en entier, ou passez par le bouton « Partager ». |
| « Cette invitation a expiré / a déjà été utilisée » | Normal : créez-en une nouvelle. Il en faut une par personne **et par appareil**. |
| « Points refusés par le serveur » | Les règles sont publiées mais la famille date d'avant : ouvrez **Administration**, modifiez une tâche et enregistrez — cela reconstruit le barème que les règles vérifient. |
| Rien ne se synchronise | Étape 4 (connexion anonyme) probablement oubliée, ou étape 7 (domaine autorisé). |
| Un téléphone dit « Cet appareil n'a plus accès » | Il a effacé les données du navigateur. Envoyez-lui une nouvelle invitation, il retrouvera son profil et ses points. |

### ⚠️ Le seul vrai risque de blocage

L'accès est lié à l'appareil. Si **tous les administrateurs** perdent le leur en
même temps (téléphone cassé, données du navigateur effacées), plus personne ne
peut créer d'invitation.

Deux précautions, à prendre tout de suite :
- **nommez un deuxième administrateur** dans la famille ;
- en dernier recours, vous êtes propriétaire du projet Firebase : vous pouvez
  toujours rouvrir l'accès à la main depuis la console (Firestore → votre
  famille → champ `membresUid` et `adminsUid`, y ajouter l'identifiant du nouvel
  appareil). C'est votre filet de sécurité.

Pour voir l'erreur exacte : sur ordinateur, ouvrez l'application, appuyez sur
`F12`, onglet **Console**. Le message est en anglais mais il suffit de me le
recopier.

---

## Étape 8 (facultative) — App Check : bloquer les copies de l'application

Le code de l'application est public, et la configuration Firebase avec lui.
C'est normal et sans danger pour vos données : les règles de sécurité
empêchent quiconque de lire une famille sans invitation.

En revanche, rien n'empêche quelqu'un de brancher une **copie** de
l'application sur votre base et d'y consommer votre quota gratuit en créant
des familles vides. App Check règle exactement ce problème : il vérifie que
la requête vient bien de vos sites à vous.

### 8.1 — Obtenir la clé reCAPTCHA

1. Allez sur **google.com/recaptcha/admin/create**.
2. Libellé : `Ma Tribu`.
3. Type : **reCAPTCHA Enterprise**.
4. Dans **Domaines**, ajoutez les **deux** adresses, une par ligne :
   - `matribu-app.fr`
   - `amandiine37.github.io`
5. Validez. Google affiche deux clés :
   - la **clé de site** — publique, elle va dans l'application ;
   - la **clé secrète** — elle ne va QUE dans la console Firebase.

> ⚠️ N'oubliez pas `amandiine37.github.io`. Les familles qui n'ont pas encore
> déménagé sont encore là ; sans ce domaine, elles seraient bloquées le jour
> où vous activez la contrainte.

### 8.2 — Déclarer l'application dans Firebase

1. Console Firebase → **Créer** (menu de gauche) → **App Check**.
2. Onglet **Applications**, sélectionnez votre application web.
3. Choisissez **reCAPTCHA Enterprise** et collez la **clé secrète**.
4. Enregistrez.

### 8.3 — Coller la clé de site dans l'application

Dans `firebase-config.js`, renseignez la ligne `cleAppCheck` :

```js
cleAppCheck: "6Lxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

Puis redéposez `firebase-config.js` **dans les deux dépôts**.

### 8.4 — Observer AVANT de contraindre

C'est l'étape que l'on saute et qu'on regrette.

La **contrainte est désactivée par défaut** : l'application envoie ses jetons,
mais le serveur ne les vérifie pas encore. Laissez tourner **quelques jours**,
puis regardez les statistiques dans App Check.

Vous devez y voir une écrasante majorité de requêtes **vérifiées**. S'il reste
des requêtes « non vérifiées », c'est que de vrais utilisateurs passent encore
à côté : cherchez pourquoi avant d'aller plus loin.

Quand tout est vert : App Check → onglet **API**, ligne **Cloud Firestore** →
**Appliquer**. Faites de même pour **Authentication**.

> Si vous activez la contrainte trop tôt, l'application cesse de fonctionner
> pour tout le monde, d'un coup. Le retour en arrière est immédiat (même
> écran, bouton **Ne pas appliquer**), mais autant ne pas en arriver là.

## Étape 9 (facultative) — La connexion par lien e-mail

Par défaut, chacun entre dans la tribu avec un **code d'invitation** : un par
personne et par téléphone, remis par un administrateur.

Vous pouvez, en plus, proposer la **connexion par lien e-mail** (« lien
magique ») : la personne reçoit un e-mail, clique, et entre. Son avantage
principal est la reconnexion autonome — elle change de téléphone sans avoir à
demander un nouveau code à personne.

C'est gratuit : Firebase envoie les e-mails lui-même, sur le forfait gratuit.

### 9.1 — Activer le fournisseur

1. Console Firebase → **Authentication** → onglet **Sign-in method**
   (Mode de connexion)
2. Ajoutez le fournisseur **E-mail/Mot de passe** s'il n'y est pas
3. Ouvrez-le, puis **activez la deuxième bascule** :
   **« Lien de connexion par e-mail (connexion sans mot de passe) »**
4. Enregistrez

⚠️ La première bascule (mot de passe) peut rester désactivée : l'application
ne s'en sert pas. Seule la seconde compte.

### 9.2 — Vérifier les domaines autorisés

Toujours dans **Authentication** → onglet **Settings** (Paramètres) →
**Domaines autorisés**. Vos adresses doivent y figurer, sinon le lien sera
refusé au retour :

- `matribu-app.fr`
- `amandiine37.github.io`

Et si votre **clé d'API est restreinte par référent HTTP** (Google Cloud →
API et services → Identifiants → votre clé navigateur), ajoutez-y aussi :

- `https://matribu-b360d.firebaseapp.com/*`

Le lien reçu par e-mail passe d'abord par une page de Firebase hébergée sur
cette adresse. Sans elle dans la liste, il s'arrête sur une page « Error
encountered » : *Requests from referer https://matribu-b360d.firebaseapp.com/
are blocked* (`API_KEY_HTTP_REFERRER_BLOCKED`). Ce n'est pas un affaiblissement :
c'est l'adresse de votre propre projet Firebase.

### 9.3 — Utilisation dans l'application (version 0.50)

Le modèle complet est décrit dans `MODELE-COMPTES-APPAREILS.md`. En bref :
l'adresse e-mail est un **compte adulte**, rangé à part, qui sert uniquement à
**rattacher un appareil** au profil. Chaque appareil garde sa propre session,
que l'on peut retirer seule.

- **Activer le compte d'un adulte** : Administration → Membres → modifier →
  « 📧 Par e-mail », saisissez l'adresse, enregistrez.
- **Lui envoyer un lien** : Inviter cette personne → le bouton
  « 📧 Envoyer le lien à … » apparaît sous le code d'invitation.
- **Nouveau téléphone, réinstallation, données effacées** : la personne
  utilise **« 📧 Me connecter par e-mail »** sur l'écran d'accueil. L'appareil
  se rattache seul, sans administrateur.

Le **code à 4 chiffres reste demandé** : c'est lui qui désigne le profil quand
un téléphone est partagé.

Tout cela exige les **nouvelles règles** (`firestore.rules`) : elles ajoutent
les comptes adultes et le rattachement. À publier avec la version 0.50, dans
la même publication que celles de l'étape 10.

### 9.4 — Le piège de l'iPhone

Sur iPhone, ouvrir un lien depuis l'application Mail lance **Safari**, pas
l'icône Ma Tribu posée sur l'écran d'accueil. Or les deux ont des mémoires
séparées : la personne se retrouve connectée dans Safari, et l'icône continue
de lui demander de se connecter.

L'application le prévoit : une fois connectée dans Safari, elle propose
**« Créer mon code »**, un code court à recopier dans l'icône. C'est le même
mécanisme que les invitations, et il ne sert qu'une fois.

Sur Android, l'icône et le navigateur partagent la même mémoire : rien à faire.

## Étape 10 — Republier les règles pour le droit à l'effacement

À partir de la version **0.49**, un administrateur peut **télécharger** toutes
les données de sa famille et **supprimer** la famille entière depuis
l'application (Administration ▸ 🔒 Vos données).

Le téléchargement marche tout de suite. La **suppression**, elle, exige les
nouvelles règles : les anciennes interdisaient d'effacer quoi que ce soit, et
c'était voulu.

### Ce qui change dans `firestore.rules`

1. **Un drapeau de suppression** peut être posé sur la famille par un
   administrateur. **Une fois posé, plus personne ne peut le retirer.**
2. Ce drapeau, et lui seul, autorise l'effacement du **journal des points** et
   du **suivi des tâches**. Sans lui, ces registres restent inaltérables,
   exactement comme avant.
3. Le document de la famille ne peut être supprimé que drapeau posé.
4. Un administrateur peut **retrouver les invitations de sa famille** pour les
   effacer — elles contiennent un prénom et l'empreinte d'un code.
5. Le **repère** de la famille (collection `reperes`) est effacé avec elle,
   pendant la suppression seulement.

### Comment publier

Console Firebase → **Firestore Database** → onglet **Règles** → remplacez tout
par le contenu de `firestore.rules` → **Publier**.

Copie de secours de la version précédente : `firestore.rules.AVANT-RGPD.txt`.
En cas de souci, recollez-la et publiez : tout revient comme avant.

### Tester sans risque — et seulement ainsi

**Règle absolue : on ne teste JAMAIS la suppression sur une vraie famille**, ni
en demandant à un outil ou un assistant de le faire. On la teste sur une
**famille jetable**, créée pour l'occasion, sans aucune vraie donnée.

1. Ouvrez une **fenêtre de navigation privée** sur `https://matribu-app.fr`.
   C'est indispensable : sur votre navigateur habituel, créer une famille de
   test remplacerait la session de votre vraie famille, et vous ne sauriez plus
   la rouvrir sans nouvelle invitation. La fenêtre privée a sa propre mémoire,
   jetée à la fermeture.
2. Créez une famille nommée clairement, par exemple **« TEST À SUPPRIMER »**.
   Notez son repère (`MAISON-…`).
3. Ajoutez un membre fictif, validez une tâche (cela crée une ligne de points),
   créez une invitation, envoyez un signalement.
4. Administration ▸ 🔒 Vos données ▸ **Supprimer la famille**. Recopiez le nom.
   L'écran de fin indique ce qui a été effacé à chaque étape.
5. **Vérifiez dans la console** Firebase ▸ Firestore Database, avec le repère
   noté :
   - `familles` : le document du repère a disparu ;
   - `invitations` et `recettesPartagees` : plus rien pour ce repère ;
   - `reperes` : le repère a disparu ;
   - `retours` : le signalement de test **est toujours là** — c'est normal,
     voir ci-dessous. Effacez-le à la main en suivant la procédure.
6. Fermez la fenêtre privée.

Si le serveur refuse à l'étape de l'historique des points, les règles n'ont
pas été republiées. S'il refuse à l'étape des invitations, dites-le : c'est
la règle la moins certaine, elle se corrige sans rien perdre — la suppression
reprend là où elle s'était arrêtée.

### Ce qui reste à faire à la main : les signalements

Personne ne peut lire ni effacer les signalements depuis l'application — c'est
voulu, ils contiennent ce que les gens ont écrit librement. Ils portent le
prénom de l'expéditeur et le repère de la famille : ce sont des données
personnelles, à effacer quand la famille exerce son droit à l'effacement.

**Procédure, quand une famille demande l'effacement :**

1. Demandez-lui le **nom** et le **repère** de sa tribu (`MAISON-…`). Un
   administrateur de la famille le trouve dans **Administration ▸ 🔒 Vos
   données** : c'est le seul endroit où l'application l'affiche.
2. Si elle a encore accès à l'application, invitez un administrateur de la
   famille à utiliser **Administration ▸ 🔒 Vos données ▸ Supprimer la
   famille**. Sinon, supprimez-la vous-même dans la console (voir la procédure
   de suppression manuelle).
3. Console Firebase ▸ **Firestore Database** ▸ collection **`retours`**.
4. Cliquez sur l'icône **Filtrer** (l'entonnoir) au-dessus de la liste des
   documents. Champ **`famille`**, opérateur **`==`**, valeur : le repère.
   Appliquez.
5. Ouvrez chaque document de la liste, vérifiez le champ `famille`, puis menu
   **⋮ ▸ Supprimer le document**. Recommencez jusqu'à ce que la liste soit vide.
6. Si le filtre ne donne rien, cherchez aussi avec le champ **`nomFamille`** :
   les signalements très anciens peuvent ne pas porter le repère.
7. Répondez à la personne que c'est fait. Le RGPD vous laisse **un mois**.

À terme, cette étape devrait devenir une suppression prévue dans
l'application plutôt qu'une manipulation à la main dans la console.

### Tenir la promesse des 12 mois : la purge des signalements

La page de confidentialité annonce que les signalements sont conservés
**12 mois au plus**. C'est un engagement : il faut le tenir. À faire une fois
par trimestre, pour que rien ne dépasse jamais de beaucoup :

1. Calculez la date d'il y a 12 mois, au format `AAAA-MM-JJ`. Le
   10 septembre 2026, par exemple, cela donne `2025-09-10`.
2. Console Firebase ▸ **Firestore Database** ▸ collection **`retours`**.
3. **Filtrer** (l'entonnoir) : champ **`envoyeLe`**, opérateur **`<`**,
   valeur : la date calculée, **en texte**. Le champ est une date écrite en
   texte, et le texte `2025-09-10` se trie exactement comme la date.
4. Lisez chaque signalement si vous voulez en garder l'idée (notez-la
   ailleurs, sans prénom), puis **⋮ ▸ Supprimer le document**.
5. Recommencez jusqu'à ce que le filtre ne donne plus rien.

Les signalements envoyés par une ancienne version de l'app peuvent ne pas avoir
de champ `envoyeLe` : le filtre ne les montre pas. Au premier passage,
parcourez aussi la liste sans filtre, et supprimez les plus anciens à la main.

## Étape 11 — Faire le tri : repérer les tribus qui ne servent plus

Chaque tribu porte désormais **`vuLe`**, la date de sa dernière ouverture, à
l'heure du serveur. Elle est écrite au plus **une fois par jour et par
appareil**, et c'est une seule date pour toute la tribu : jamais une date par
personne.

### Regarder

Console Firebase ▸ **Firestore Database** ▸ collection `familles`. Ouvrez un
document : `vuLe` s'affiche en clair (« 12 septembre 2026 à 00:25:18 »), à côté
de `famille.creeLe`, la date de création.

Pour trier, utilisez la **requête** de la console sur la collection `familles` :
un filtre du type `vuLe` **antérieur à** une date donnée montre les tribus qui
n'ont pas été ouvertes depuis. Firestore peut demander de créer un **index** la
première fois : la console propose le lien qui le crée.

⚠️ **Deux pièges.**
- Les tribus **jamais rouvertes depuis cette version** n'ont pas encore de
  `vuLe` : un filtre sur ce champ **ne les montre pas du tout**. Elles en
  reçoivent un dès que quelqu'un y ouvre l'application. Pour les repérer,
  regardez plutôt `famille.creeLe` et le contenu : membres, `journal`, menus.
- Une tribu peut servir sans être ouverte pendant des vacances : une date
  ancienne n'est pas une preuve d'abandon. En cas de doute, ne supprimez pas.

### Supprimer proprement

**La console ne supprime rien en cascade.** Effacer le document d'une tribu
laisserait derrière lui son repère, ses tâches, ses points, ses invitations,
les comptes e-mail liés et ses recettes publiées. À la main, dans cet ordre :

1. `reperes/{code}` ;
2. les sous-collections `etats` et `journal` de la tribu ;
3. `invitations` où `famille` vaut le code ;
4. `comptes` où `famille` vaut le code ;
5. `recettesPartagees` où `familleRef` vaut le code ;
6. enfin `familles/{code}`.

Depuis l'application (Administration ▸ 🔒 Vos données ▸ Supprimer la famille),
tout cela est fait dans le bon ordre, automatiquement — mais seulement pour une
tribu dont cet appareil est administrateur.
