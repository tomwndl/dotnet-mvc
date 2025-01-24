##  Questions

- Qu'est-ce qu'un contrôleur dans ASP.NET MVC et quel sont ses rôles principal dans l'architecture MVC ?

##==##

##  Réponse

* Point d'entrée du back-end
* Traite les requêtes HTTP
* Coordonne les interactions entre Model et Vue
* Gère la logique de navigation
* Prépare les données pour l'affichage

##==##

##  Questions

- Comment définissez-vous une route personnalisée pour afficher tout les écolier d'une écoles en suivant les principes rest : 

##==##

##  Réponse

``` cs
[HttpGet("schools/{id}/students")]
public ActionResult GetAllSchoolStudents(Guid id) {
    // Code
}
```

##==##

##  Questions
Quel est le type de retour des méthodes d'un controller

##==##

##  Réponse

IActionResult

##==##

##  Questions

Définissez une action. Quelle sont ses caractéristiques

##==##

##  Réponse

Une action est une méthode d'un contrôleur qui répond à une requête HTTP et retourne un résultat (JSON, vue)

Caractéristiques d'une action :
- Doit être publique (public).
- Retourne un type dérivé de IActionResult (ex: ViewResult, JsonResult, etc.).
- Peut recevoir des paramètres via la route, la requête ou le corps de la requête.
- Est appelée en fonction de la route définie par les attributs ou la convention de routage

##==##

##  Questions

- Donner les différents verbes HTTP et quand les utiliser

##==##

##  Réponse

- [HttpGet]    : Lecture
- [HttpPost]   : Création
- [HttpPut]    :  Mise à jour complète
- [HttpPatch]  : Mise à jour partielle
- [HttpDelete] : Suppression


