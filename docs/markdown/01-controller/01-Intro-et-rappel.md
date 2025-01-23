# Objectif de la matinée ?

* Comprendre le rôle et le fonctionnement des contrôleurs dans ASP.NET MVC
* Maîtriser l'écriture des actions et leur configuration
* Savoir utiliser le routing et les filtres
* Appliquer les bonnes pratiques de développement

Notes:
- 

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
