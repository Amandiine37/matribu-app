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
3. Type : **reCAPTCHA v3**.
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
3. Choisissez **reCAPTCHA v3** et collez la **clé secrète**.
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
