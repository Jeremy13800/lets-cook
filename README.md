# lets-cook

Application de gestion de recette

# Let's Cook 🍳

![HTML Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel Badge](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![DummyJSON Badge](https://img.shields.io/badge/API-DummyJSON-blue?style=for-the-badge)

## Description

**Let's Cook** est une application web développée entièrement en **Vanilla JavaScript** (sans frameworks). Elle permet aux utilisateurs de rechercher et d'explorer des recettes de cuisine en s'appuyant sur une **API REST** externe, [DummyJSON](https://dummyjson.com/).

### Objectifs pédagogiques

Ce projet a été conçu pour :

- Mettre en pratique la **Programmation Orientée Objet (POO)**.
- Utiliser des **fonctions asynchrones** pour interagir avec une API REST.
- Structurer un projet web avec des bonnes pratiques : **HTML sémantique**, **CSS modularisé**, et **JavaScript en modules**.
- Préparer le déploiement d'une application web sur **Vercel**.

## Fonctionnalités principales

1. Recherche dynamique

- rechercher des recettes par mots-clés (Keyword) via une barre de recherche intuitives.
- Mise à jour instantannée des résultats à chaque saisie

2. Filtres avancés

- Limitation du nombre de résultats affichés ( 10, 20...ou autre)via un menu déroulant.
- Tri des recettes par ordre alphabetiques croissant ( A - Z ) ou décroissant ( Z - A ) grâce à un selecteur.

3. Tri par Tags

- Charger dynamiquement des tags depuis l'API et les afficher dans une liste déroulante.

- Filtrer les recettes selon des catégories spécifiques telles que "Végétarien", "Vegan", ou autres tags disponibles.

4. Affichage adaptif

- Mise en page responsive avec une grille de cartes qui s'adapte au nombre de colonnes selon la taille de l'écran.

5. Connexion API

- Récupération des données des recettes et des tags depuis l'API DummyJSON.

## Architecture du projet

```
.
├── Lets-Cook-V1.md
├── README.md
├── assets
│   ├── css
│   │   ├── custom.css
│   │   ├── reboot.css
│   │   ├── style.css
│   │   ├── utilities.css
│   │   └── variables.css
│   ├── images
│   │   ├── bars-solid.svg
│   │   ├── cooking.svg
│   │   ├── logo-et-icones.zip
│   │   ├── logo.svg
│   │   ├── search-solid-white.svg
│   │   └── street.jpg
│   └── js
│       ├── index-func-async.js
│       └── index.js
├── index.html
└── recette.html
```

### Points clés de l'architecture :

1.  Séparation des responsabilités :

- Les styles sont centralisés dans assets/css/style.css.
- Le fichier index.js gère toute la logique JavaScript.

2.  HTML sémantique et modulaire :

- Structure claire avec des balises sémantiques comme header, main, et footer.
- Utilisation de classes CSS pour la personnalisation.

## Ressources utilisées 📚

- **API :** [DummyJSON](https://dummyjson.com/) pour les données des recettes.
- **Vanilla JavaScript :** Aucune bibliothèque ou framework.
- **CSS :** Reboot et styles personnalisés.
- **Déploiement :** [Vercel](https://vercel.com/) (URL fictive : [https://lets-cook.vercel.app](https://lets-cook.vercel.app)).

## Fonctionnement

### Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/lets-cook.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd lets-cook
   ```
3. Ouvrez le fichier `index.html` dans votre navigateur ou servez le projet avec un outil local (comme [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).

### Explications techniques

- Recherches dynamiques

  - Utilisation de l'evenement de "Input" pour capturer et traiter les saisies de l'utilisateur.
  - Mise à jour immédiate des résultats dans le conteneur principal.

- Tri des données :

  - Fonction personnalisée sortData pour organiser les résultats selon le critère sélectionné.
  - Limitation des résultats avec une méthode de slice.

- Récupération des tags :

  - Appel à l'endpoint /tags pour charger les options dynamiques du filtre par tags.

  - Génération dynamique des options du sélecteur avec capitalisation automatique des noms.

### Déploiement

- Le projet sera déployé sur **Vercel**. Accédez à l'application ici : [Let's Cook](https://lets-cook.vercel.app).

## Auteur

- Nom : Jérémy Cailleux
- Formation : Developpeur Web et Web Mobile ( DWWM )
- **Objectif :** Validation des compétences en création et déploiement d'applications web.

## Améliorations possibles 🚀

1. Ajouter des animations pour améliorer l'expérience utilisateur.
2. Simplifier les options du filtre pour le rendre plus intuitif.
3. Ajouter une image ou un message par défaut lorsque aucun résultat n'est trouvé.
4. Intégrer une fonctionnalité de favoris pour sauvegarder les recettes préférées.
