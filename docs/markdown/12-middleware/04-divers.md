# Bruno

Créer le filtre ...
```csharp [0|1|3|5|7|9|0]
public class JsonResponseAttribute: ActionFilterAttribute
{
    public override void OnActionExecuted(ActionExecutedContext context)
    {
        if (context.HttpContext.Request.Headers.Accept.Contains("application/json"))
        {
            if (context.Result is ViewResult viewResult)
            {
                context.Result = new JsonResult(viewResult.Model);
            }
        }
        base.OnActionExecuted(context);
    }
}
```

... ajouter le filtre `JsonResponseAttribute` au démarrage de l'application...

```csharp [0|4|0]
// Dans Program.cs
services.AddControllersWithViews(options =>
{
    options.Filters.Add(new JsonResponseAttribute());
});
```

... et l'utiliser dans le controller

```csharp [0|1|0]
[JsonResponse]
public class ProductController(/* ... */)
{
    // ...
}
```

##==##

# Bruno

Installer Bruno sur [usebruno.com](https://usebruno.com)

Nécessite : 
- création de la collection
- création d'une requête
- spécification d'un header `Accept` avec la valeur `application/json`
Optionnel : 
- utilisation d'un environnement (en spécifiant le `host`)
- utilisation de variable (par exemple: récupérer un `id` dans la réponse de la première requête)
