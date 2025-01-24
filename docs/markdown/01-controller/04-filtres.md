##  Introduction aux filtres

Les filtres sont des attributs qui permettent de :
- Exécuter du code avant/après une action
- Modifier le comportement des actions

- Les filtres peuvent être appliqués à différents niveaux : global, contrôleur, action
- Ils peuvent être synchrones ou asynchrones
- L'ordre d'exécution peut être personnalisé avec la propriété Order
- Les filtres peuvent être injectés avec des dépendances via [ServiceFilter] ou [TypeFilter]
- Ils peuvent être combinés pour créer des comportements complexes

##==##

<!-- .slide: class="with-code" -->

##  Types de filtres

- Authorization Filters
- Resource Filters
- Action Filters
- Exception Filters
- Result Filters

``` cs
[Authorize]
public class AdminController : Controller
{
    // Nécessite une authentification
}

[Authorize(Roles = "Admin")]
public IActionResult SensitiveAction()
{
    // Nécessite le rôle Admin
}
```
##==##

<!-- .slide: class="with-code" -->

##  Filtre custom
``` cs
public class CustomFilterAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        // Code exécuté avant l'action
    }

    public override void OnActionExecuted(ActionExecutedContext context)
    {
        // Code exécuté après l'action
    }
}
```
##==##

<!-- .slide: class="with-code" -->

##  Filtre globaux
``` cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddMvc(options =>
    {
        options.Filters.Add(new GlobalExceptionFilter());
        options.Filters.Add(new GlobalActionFilter());
    });
}
```
