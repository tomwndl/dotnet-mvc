
# Routing : définition

Le routing dans ASP.NET MVC permet de :

- Mapper les URLs aux actions des contrôleurs
- Gérer les paramètres dans les URLs
- Définir des patterns d'URL personnalisés (convention REST etc...)

##==##

<!-- .slide: class="with-code" -->

# Configuration de base

``` cs
// Dans Program.cs
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
```

Notes: Nom de la route : "Default"
Modèle URL : "{controller}/{action}/{id}"
Valeurs par défaut : { controller = "Home", action = "Index", id = UrlParameter.Optional }
Si une URL / est appelée, elle ira vers HomeController.Index.
id est optionnel.

##==##


<!-- .slide: class="with-code" -->

# Routes par attributs

``` cs
[Route("api/[controller]")]  
public class ProductController : Controller
{
    [Route("{category}/{id:int}")]
    public ActionResult GetOneProduct(string category, int id)  // api/product/toto/5
    {
        // Logique ici
        return View();
    }

    [Route("all")]
    public ActionResult GetAllProduct()  // api/product/all
    {
        return View();
    }
}
```

##==##
<!-- .slide: class="with-code" -->

# Cas pratique - CRUD - (30 minutes)

Créer une classe product dans le dossier model avec 2 paramètres : Id (guid) et Name (string)

Créer un controller Product avec une liste de product
``` cs
private List<Product> products = new List<Product>() { new Product("switch"), new Product("ps4"), new Product("xbox") };
```

Créer les 4 actions :
- GetAll : Affiche tout les products. Accessible via /products 
- Get : Affiche 1 product. Accessible via /products/{id} 
- Delete : supprime un product puis affiche la liste des products restant. Accessible via /products/delete/{id}
- Post : Ajoute un product puis affiche la liste des product restant. Accessible via /Products/add/{name}

##==## 
<!-- .slide: class="with-code max-height" -->
# Correction

``` cs
    [Route("product")]
    public class ProductController : Controller
    {
        private List<Product> products = new List<Product>() { new Product("switch"), new Product("ps4"), new Product("xbox") };

        public IActionResult GetAll()
        {
            return Json(products);
        }

        [Route("{id}")]
        public IActionResult Get(Guid id)
        {
            var product = products.FirstOrDefault(x => x.Id == id);
            if(product == null)
            {
                return NotFound();
            }

            return Json(product);
        }

        [Route("delete/{id}")]
        public IActionResult Delete(Guid id)
        {
            var product = products.FirstOrDefault(x => x.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            products.Remove(product);
            return Json(products);
        }

        [Route("add/{id}")]
        public IActionResult Create(string name)
        {
            var product = new Product(name);
            products.Add(product);
            return Json(products);
        }
    }
```

##==## 

# Introduction aux verbes HTTP

Les verbes HTTP (ou méthodes HTTP) définissent le type d'action qu'une requête effectuera sur une ressource. 
Ils sont fondamentaux pour les applications web, les API REST et les services web en général.


##==## 

# Les principaux verbes HTTP

| Verbe | Fonction principale | Effet sur la ressource | Corps autorisé |
|------|--------|---------|----------|
| GET | Récupérer des données | Aucun changement (lecture seule) | Non  |
| POST | Créer une ressource  | Ajoute une nouvelle ressource | oui  |
| PUT | Mettre à jour ou créer une ressource | Remplace toute la ressource | oui  |
| PATCH | Mettre à jour partiellement | Modifie partiellement la ressource  | oui  |
| DELETE | Supprimer une ressource  | Supprime la ressource spécifiée | Non  |


##==## 

# Comment les utiliser dans nos controller


``` cs
[Route("api/[controller]")]  
public class ProductsController : Controller // route de base du controller = api/products
{
    [HttpGet]  // GET: api/products
    public IActionResult Index() { }

    [HttpGet("{name}")]  // GET: api/products/toto
    public IActionResult Details(string name) { } 

    [HttpPost("create")]  // POST: api/products/create
    public IActionResult Create([FromBody] Product product) { }

    [HttpPost]  // POST: api/products
    public IActionResult Create([FromBody] Product product) { }
}
```

[FromBody] indique à ASP.NET que les données doivent être extraites du corps de la requête HTTP, ce qui est nécessaire pour les requêtes POST.

##==##


<!-- .slide: class="with-code" -->

## Quelques bonnes pratiques (convention REST)

``` cs
[HttpGet]    // Lecture
[HttpPost]   // Création
[HttpPut]    // Mise à jour complète
[HttpPatch]  // Mise à jour partielle
[HttpDelete] // Suppression
```

``` cs
[GET] /products                  // Liste
[GET] /products/5                // Détails
[DELETE] /products/5              
[GET] /products/category/games   // Filtrage
[POST] /products                 // Creation
```

