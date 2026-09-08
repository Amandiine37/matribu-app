/* =========================================================================
   CONFIGURATION FIREBASE  —  le seul fichier que vous avez a modifier
   =========================================================================

   Tant que ce fichier n'est pas rempli, l'application fonctionne en
   MODE LOCAL : tout marche, mais les donnees restent dans le telephone
   et ne sont PAS partagees avec le reste de la famille.

   Pour activer le partage :
   1. Suivez le guide GUIDE-FIREBASE.md (10 minutes, pas a pas).
   2. Firebase vous donne un bloc de texte qui ressemble a celui ci-dessous.
   3. Recopiez vos vraies valeurs entre les guillemets, a la place des
      "A_REMPLIR", et enregistrez le fichier.

   Ces valeurs ne sont pas des mots de passe : elles peuvent rester
   visibles dans un depot public. Ce qui protege vos donnees, ce sont
   les regles de securite decrites dans le guide.
   ========================================================================= */

window.CONFIG_FIREBASE = {
  apiKey: "AIzaSyBGo1o-5qxSGBDk_pWOie6OjQdfOwHgQsk",
  authDomain: "matribu-b360d.firebaseapp.com",
  projectId: "matribu-b360d",
  storageBucket: "matribu-b360d.firebasestorage.app",
  messagingSenderId: "713320479232",
  appId: "1:713320479232:web:2f9fecae989b57f9bef6e5",

  /* Cle de site reCAPTCHA v3, pour App Check. Elle atteste que la requete
     vient bien de CE site, et non d'une copie de l'application branchee sur
     la meme base.

     Laissee vide, il ne se passe rien : l'application fonctionne comme
     avant. Pour l'activer, voir GUIDE-FIREBASE.md, section App Check.

     Cette cle-ci est PUBLIQUE : c'est la "cle de site". La "cle secrete",
     elle, se colle UNIQUEMENT dans la console Firebase et ne doit jamais
     figurer dans ce fichier. */
  cleAppCheck: "6LdeK7EtAAAAAP-kz6t6VT4HWQubPURIYu8ton1T"
};