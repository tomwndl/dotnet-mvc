##  Questions

- Qu'est-ce qu'un contrôleur dans ASP.NET MVC et quel sont ses rôles principal dans l'architecture MVC ?
- Reponse :
* Point d'entrée du back-end
* Traite les requêtes HTTP
* Coordonne les interactions entre Model et Vue
* Gère la logique de navigation
* Prépare les données pour l'affichage

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

##==##

##  Questions

- Donner les différents verbes HTTP et quand les utiliser
- Reponses :
- [HttpGet]    : Lecture
- [HttpPost]   : Création
- [HttpPut]    :  Mise à jour complète
- [HttpPatch]  : Mise à jour partielle
- [HttpDelete] : Suppression


##==##

##  Questions
Quel est le type de retour des methode d'un controller

- Reponse : 
- IActionResult

