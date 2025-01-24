## Anatomie d'un contrôleur 

* Hérite de Controller ou ControllerBase
* Nom se termine par "Controller"
* Situé dans le dossier Controllers
* Contient des actions
* Injection de dépendances
* Accès aux propriétés héritées (ViewBag, TempData, etc.)
* Chaque méthode public d’un contrôleur peut être appelée en tant que point de terminaison HTTP. 


``` cs
public IActionResult Privacy() // Home/Privacy
{
    return View(); // renvoie la vue par defaut Privacy.cshtml
}
```
##==##

# Les actions

En ASP.NET Core MVC, une action est une méthode publique définie dans un contrôleur qui gère les requêtes HTTP et retourne une réponse au client.
Dans le langage plus courant on les appelles des points de terminaison /endpoints

Rôle d'une action :
- Point d'entrée du backend
- Elle reçoit les requêtes HTTP entrantes (GET, POST, PUT, DELETE, etc.).
- Elle traite les données (ex : lecture/écriture dans une base de données, logique métier).
- Elle renvoie une réponse au client (ex : une vue, un JSON, un statut HTTP).

Notes:
- Note  

##==##

<!-- .slide: class="two-column" -->

## Types de retour d'une action

``` cs
return View();                          // Vue par défaut
return View("ViewName");                // Vue spécifique

return Json(data);                     //Données JSON
return File(bytes, "application/pdf"); // Fichier
return RedirectToAction("Index");      // Redirection
return NotFound();                     // 404
return BadRequest();                   // 400
return Ok();                           // 200
```

##--##

## Exercices

- Modifier l'action "Privacy" pour qu'elle retourne la vue "Index".

##==##

## Exercices : créer sa propre action

Ajoutez une méthode Users qui renvoie une liste d'utilisateurs sous format json.
voici les 3 utilisateurs à renvoyer : 

- Jean Bonneau - 23
- Guy Tar - 28
- Anne Honyme - 45

##==##
Solution : 
``` cs
  public IActionResult Users()
  {
      var users = new List<object>
      {
          new { nom = "Jean", prenom = "Bonneau", age = 23 },
          new { nom = "Guy", prenom = "Tar", age = 28},
          new { nom = "Anne", prenom = "Honyme", age = 45}
      };

      return Json(users);
  }
```

##==##

<!-- .slide: class="with-code" -->

## Injection de dépendance dans les controller

L'injection de dépendances est un pattern qui permet :

- De découpler les composants
- De faciliter les tests unitaires
- De gérer le cycle de vie des objets
- D'améliorer la maintenabilité du code

##==##

<!-- .slide: class="with-code" -->

## Injection de dépendances dans les controller

``` cs
// Dans Startup.cs ou Program.cs
services.AddTransient<IProductService, ProductService>();    // Nouvelle instance à chaque demande
services.AddScoped<IProductService, ProductService>();       // Une instance par requête HTTP
services.AddSingleton<IProductService, ProductService,>();    // Une seule instance pour l'application
```


``` cs
public class ProductController : Controller
{
    private readonly IProductService _productService; // injecté pas besoin d'utiliser le constructeur
    private readonly ILogger<ProductController> _logger;

    public ProductController(IProductService productService, ILogger<ProductController> logger)
    {
        _productService = productService;
        _logger = logger;
    }

    public async Task<IActionResult> Index()
    {
        var products = await _productService.GetAllAsync();
        return View(products);
    }
}
```
