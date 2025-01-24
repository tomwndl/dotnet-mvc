# Communication avec le controller 
Les vues reçoivent des données depuis le controller en utilisant un modèle fortement typé via la méthode return View(model);

model 
```  cs
  public class User
  {
      public string FirstName { get; set; } = string.Empty;
      public string LastName { get; set; } = string.Empty;
  }
```

controller homeController
```  cs
  public IActionResult User()
  {
      User user = new User
      {
          FirstName = "Tom",
          LastName = "Wendel"
      };
      return View(user);
  }
```
##==##

vue (Home/User.cshtml)
``` cshtml
@model MyProject.Models.User

<p>Model.FirstName</p>
<p>Model.LastName</p>
```

##==##

# Communication avec le controller 

Les vues peuvent recevoir des données depuis le controller utilisant ViewBag et ViewData (dictionnaires dynamiques) :

``` cshtml
// Dans le controller
ViewBag.Message = "Bienvenue !";
ViewData["Title"] = "Accueil";
```

``` cshtml
// Dans le controller
<h1>@ViewBag.Message</h1>
<title>@ViewData["Title"]</title>
```
A utiliser pour des données simples et temporaires (titres, messages, indicateurs), sinon toujours privilégier les modèles

##==##

# Communication avec le controller : Exercice (10 minutes)

Modifiez la vue partiel précédemment créer pour y intégrer votre nom et prénom dynamiquement : 
- créer une classe user
- Initier la classe avec vos information dans le HomeController
- Utiliser la classe user dans votre partial view

