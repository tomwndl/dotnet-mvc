
## Définition

Le routing dans ASP.NET MVC permet de :

- Mapper les URLs aux actions des contrôleurs
- Gérer les paramètres dans les URLs
- Définir des patterns d'URL personnalisés (convention REST etc...)

##==##


<!-- .slide: class="with-code" -->

## Configuration de base

``` cs
// Dans Program.cs
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
```

Notes:

##==##


<!-- .slide: class="with-code" -->

## Routes par attributs

``` cs
[Route("api/[controller]")]
public class ProductsController : Controller
{
    [HttpGet]  // GET: api/products
    public IActionResult Index() { }

    [HttpGet("{id}")]  // GET: api/products/5
    public IActionResult Details(int id) { }

    [HttpPost("create")]  // POST: api/products/create
    public IActionResult Create([FromBody] Product product) { }

    [HttpPost]  // POST: api/products
    public IActionResult Create([FromBody] Product product) { }
}
```

##==##


<!-- .slide: class="with-code" -->

## Bonne pratiques REST

``` cs
[GET] /products                  // Liste
[GET] /products/5                // Détails
[DELETE] /products/5                // Détails
[GET] /products/category/games   // Filtrage
[POST] /products                 // Creation
```
``` cs
[HttpGet]    // Lecture
[HttpPost]   // Création
[HttpPut]    // Mise à jour complète
[HttpPatch]  // Mise à jour partielle
[HttpDelete] // Suppression
```

##==##

<!-- .slide: class="with-code" -->

## Cas pratique - CRUD - (30 minutes)

Créer une classe product dans le dossier model avec 2 paramètres : Id (guid) et Name (string)

Créer un controller Product avec une liste de product
``` cs
private List<Product> products = new List<Product>() { new Product("switch"), new Product("ps4"), new Product("xbox") };
```

Créer les 4 méthodes :
- GetAll : récupère tout les products
- Get : récupère 1 product (via id)
- Delete : supprime un product (via id)
- Create :  créer un nouveau product (via id)




