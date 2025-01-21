# HTML Helpers & Tag Helpers

Les HTML Helpers et Tag Helpers sont des outils en ASP.NET MVC permettant de générer du code HTML de manière dynamique

HTML Helpers :
- Utilisee des méthodes C# dans Razor

Tags Helpers :
- Offrent une syntaxe plus intuitive via des attributs HTML.
- Préférés pour la lisibilité et la séparation propre entre HTML et C#.

Pour les nouveaux projets ASP.NET Core, il est recommandé d’utiliser Tag Helpers autant que possible pour un code plus propre et maintenable.

##==##

# HTML Helpers

- Ce sont des méthodes C# disponibles dans Razor pour générer du code HTML.
- Fournis via l'objet Html, ils facilitent la génération d'éléments HTML côté serveur.

``` cshtml
@Html.TextBox("username", "Valeur par défaut", new { @class = "form-control" })
```
equivalent de : 
``` cshtml
<input type="text" name="username" value="Valeur par défaut" class="form-control" />
```
Avantages :
- Bonne intégration avec C# (fortement typé, IntelliSense).
- Utilisation classique en ASP.NET MVC (avant ASP.NET Core).

##==##

# Tag Helpers

- Introduits avec ASP.NET Core MVC, ils permettent d'ajouter une logique côté serveur à du code HTML standard grâce aux attributs HTML.
- Utilisent une syntaxe plus naturelle et proche du HTML.

``` cshtml
<input asp-for="UserName" class="form-control" value="Valeur par défaut" />
```
equivalent de : 
``` cshtml
<input type="text" name="username" value="Valeur par défaut" class="form-control" />
```

 Avantages :
- Syntaxe plus propre et lisible pour les développeurs front-end.
- Meilleure séparation des préoccupations (HTML + Razor moins mélangés).
- Prise en charge de l'IntelliSense pour les attributs spécifiques.

##==##

# Tag Helpers courants : inputs

Les Tag Helpers sont basés sur des attributs commençant par asp- et sont utilisés pour rendre des éléments HTML dynamiques.

Champ texte (TextBox): 
``` cshtml
<input asp-for="UserName" class="form-control" placeholder="Entrez votre nom" />
```

Mot de passe : 
``` cshtml
<input asp-for="Password" type="password" class="form-control" />
```

Case à cocher : 
``` cshtml
<input asp-for="RememberMe" type="checkbox" />
```

Boutons radio : 
``` cshtml
<input asp-for="Gender" type="radio" value="Male" /> Homme
<input asp-for="Gender" type="radio" value="Female" /> Femme
```
##==##

# Tag Helpers courants : Formulaires

Les Tag Helpers sont basés sur des attributs commençant par asp- et sont utilisés pour rendre des éléments HTML dynamiques.

Formulaire avec asp-action et asp-controller
``` cshtml
<form asp-action="Submit" asp-controller="Home" method="post">
    <input asp-for="UserName" class="form-control" />
    <button type="submit">Envoyer</button>
</form>
```

##==##

# Validation automatique avec Tag Helpers

ASP.NET Core ajoute automatiquement les attributs de validation HTML (required, minlength, etc.) en fonction des annotations de données dans le modèle.
Exemple dans le modèle C# :

``` cs
public class User
{
    [Required]
    public string Name { get; set; }
}
```

``` cs
<input asp-for="Name" class="form-control" />
<span asp-validation-for="Name" class="text-danger"></span>
```

https://learn.microsoft.com/fr-fr/aspnet/core/mvc/views/working-with-forms?view=aspnetcore-9.0#the-form-tag-helper


# Formulaire simple

