## Anatomie d'un contrôleur 

* Hérite de Controller ou ControllerBase
* Nom se termine par "Controller"
* Situé dans le dossier Controllers
* Peut contenir plusieurs actions
* Injection de dépendances
* Accès aux propriétés héritées (ViewBag, TempData, etc.)
* Chaque méthode public d’un contrôleur peut être appelée en tant que point de terminaison HTTP. 
``` cs
public IActionResult Privacy() // Home/Privacy
{
    return View(); // renvoie une vue
}
```

Notes:
- Note  

##==##

<!-- .slide: class="two-column" -->

## Types de retour

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
<!-- .element: class="list-fragment" -->
##--##

## Cas pratique : retour json

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

## Passage de paramètres

L'injection de dépendances est un pattern qui permet :


``` cs
[FromBody]       // Corps de la requête JSON
[FromForm]       // Données de formulaire
[FromRoute]      // Paramètres de route
[FromQuery]      // Query string
[FromHeader]     // En-têtes HTTP

public IActionResult Print(string name)  // /Home/Print?name=toto

public IActionResult Create([FromForm] ProductModel product)
```

##==##

<!-- .slide: class="with-code" -->

## Injection de dépendance dans les controller

L'injection de dépendances est un pattern qui permet :

- De découpler les composants
- De faciliter les tests unitaires
- De gérer le cycle de vie des objets
- D'améliorer la maintenabilité du code
<!-- .element: class="list-fragment" -->

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
