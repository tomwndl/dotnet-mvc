# Objectif de la matinée ?

* Comprendre le rôle et le fonctionnement des contrôleurs dans ASP.NET MVC
* Maîtriser l'écriture des actions et leur configuration
* Savoir utiliser le routing et les filtres
* Appliquer les bonnes pratiques de développement

<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="two-column" -->
MVC est un design pattern de logiciels, introduit dans les années 1970. 

Il divise une application en trois aspects principaux: 
- Modèle
- Vue
- Contrôleur.

Il permet une séparation de préoccupations, ce qui signifie que le modèle et la logique du contrôleur sont séparés de l’interface utilisateur (vue). 

##--##

![center](./assets/images/mvc.png)

##==##
<!-- .slide: class="two-column" -->

## Model

* Représente les données et la logique métier
* Indépendant de l'interface utilisateur
* Composants typiques : entités de données, Services métier...

##--##

## Vue

* Interface utilisateur (UI)
* Contient principalement du HTML

##==##

## Controller

* Point d'entrée du back-end
* Traite les requêtes HTTP
* Coordonne les interactions entre Model et Vue
* Gère la logique de navigation
* Prépare les données pour l'affichage
* Ne contient PAS de logique métier 
