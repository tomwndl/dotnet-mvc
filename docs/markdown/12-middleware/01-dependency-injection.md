# Injection de dépendances

Exemple d'un controlleur avec beaucoup de dépendances :

```csharp [1-9|2|3|4|5|6|1-9]
public ProductController(
    IProductService productService,
    ILogger<ProductController> logger,
    IMapper mapper,
    ICacheService cacheService,
    INotificationService notificationService)
{
    //...
}
```

```csharp [1-8|2|3|4|5|1-8]
public ProductService(
    ILogger<ProductService> logger, 
    IProductRepository productRepository,
    IValidator<Product> productValidator,
    IEventPublisher eventPublisher)
{
    //...
}
```

- **BEAUCOUP** de classes à instancier avant même de pouvoir utiliser le controlleur !
- Hierarchie de dépendances à respecter (= instancier dans le bon ordre)
<!-- .element: class="list-fragment" -->

##==##
# Injection de dépendances

Le conteneur d'injection de dépendances à la rescousse !
<!-- .element: class="admonition success" -->

```csharp [1-12|1|3-6|8|10|12|1-12]
        services.AddScoped<ProductController>();

        services.AddScoped<IProductService, ProductService>();
        services.AddScoped<INotificationService, NotificationService>();
        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<IEventPublisher, EventPublisher>();

        services.AddScoped<IValidator<Product>, ProductValidator>();

        services.AddSingleton<ICacheService, RedisCacheService>();

        services.AddAutoMapper(typeof(MappingProfile));
```

##==##

# Les lifecycles

- **Singleton** : une instance pour toute l'application
<!-- .element: class="list-fragment" -->
- **Scoped** : une instance par requête
    - Pour une requête unique: si l'interface est utilisée dans 2 services différents, **la même instance** sera utilisée
- **Transient** : une instance par appel
    - Pour une requête unique: si l'interface est utilisée dans 2 services différents, **2 instances différentes** seront créées


##==##

<!-- .slide: class="exercice" -->

# Exercice

- Créer un service **`IProductService`** qui a une méthode **`GetAll`** qui retourne une liste de produits
- Créer l'implémentation **`InMemoryProductService`** qui contient une liste static de produits en mémoire
- Trouver le bon **lifecycle** pour que la liste ne soit pas réinitialiser entre différentes requêtes
- _Bonus: Quel lifecycle serait adapté pour un service qui appel une API externe pour récupérer les produits ?_
<!-- .element: class="list-fragment" -->
