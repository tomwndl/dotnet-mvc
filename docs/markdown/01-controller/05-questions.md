##  Questions

- Qu'est-ce qu'un contrôleur dans ASP.NET MVC et quel est sont ses rôles principal dans l'architecture MVC ?
- Reponse :
* Point d'entrée du back-end
* Traite les requêtes HTTP
* Coordonne les interactions entre Model et Vue
* Gère la logique de navigation
* Prépare les données pour l'affichage
<!-- .element: class="list-fragment" -->

##==##

##  Questions

- Comment définissez-vous une route personnalisée pour afficher tout les écolier d'une écoles en suivant les principes rest : 

- reponse : 
``` cs
[HttpGet("schools/{id}/students")]
public ActionResult GetAllSchoolStudents(Guid id) {
    // Code
}
```
<!-- .element: class="list-fragment" -->
##==##

##  Questions

- Comment définissez-vous une route personnalisée pour afficher tout les écolier d'une écoles en suivant les principes rest : 

- reponse : 
``` cs
[httpGet("schools/{id}/students")]
public ActionResult GetAllSchoolStudents(Guid id) {
    // Code
}
```
<!-- .element: class="list-fragment" -->

##==##

##  Questions

- Donner les différents verbes HTTP et quand les utiliser
- Reponses :
- [HttpGet]    : Lecture
- [HttpPost]   : Création
- [HttpPut]    :  Mise à jour complète
- [HttpPatch]  : Mise à jour partielle
- [HttpDelete] : Suppression
<!-- .element: class="list-fragment" -->

##==##

##  Questions
Quel est le type de retour des methode d'un controller

- Reponse : 
- IActionResult
 <!-- .element: class="list-fragment" -->
