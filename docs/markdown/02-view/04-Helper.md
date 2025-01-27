# HTML Helpers & Tag Helpers

Les HTML Helpers et Tag Helpers sont des outils en ASP.NET MVC permettant de générer du code HTML de manière dynamique

HTML Helpers :
- Utilise des méthodes C# dans Razor

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

# Tag Helpers :  fonctionnement

``` cshtml
@model Product

<form asp-action="Create" asp-controller="Product" method="post">

    <div class="mb-3">
        <label asp-for="Name" class="form-label"></label>
        <input asp-for="Name" class="form-control" placeholder="Entrez le nom du produit" />
    </div>

    <button type="submit" class="btn btn-primary">Ajouter le produit</button>
</form>
```

##==##

# Tag Helpers :  fonctionnement avec des types plus complexes

``` cs
public class Category
{
    public string Name { get; set; }
}

public class Product
{
    public string Name { get; set; }
    public Category Category { get; set; } = new Category();
}
```

##==##

# Tag Helpers :  fonctionnement avec des types plus complexes

``` cshtml
@model Product

<form asp-action="Create" asp-controller="Product" method="post">
    <!-- Champ pour le nom du produit -->
    <div class="mb-3">
        <label asp-for="Name" class="form-label"></label>
        <input asp-for="Name" class="form-control" placeholder="Nom du produit" />
        <span asp-validation-for="Name" class="text-danger"></span>
    </div>

    <!-- Champ pour la catégorie (objet imbriqué) -->
    <div class="mb-3">
        <label asp-for="Category.Name" class="form-label"></label>
        <input asp-for="Category.Name" class="form-control" placeholder="Nom de la catégorie" />
        <span asp-validation-for="Category.Name" class="text-danger"></span>
    </div>

    <button type="submit" class="btn btn-primary">Ajouter le produit</button>
</form>
```

##==##

# Tag Helpers courants : inputs

Les Tag Helpers sont basés sur des attributs commençant par asp- et sont utilisés pour rendre des éléments HTML dynamiques.

Champ texte (TextBox): 
``` cshtml
<input asp-for="Name" class="form-control" placeholder="Entrez votre nom" /> //
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


# Validation automatique avec Tag Helpers

ASP.NET Core ajoute automatiquement les attributs de validation HTML (required, minlength, etc.) en fonction des annotations de données dans le modèle.
Exemple dans le modèle C# :

``` cs
public class Product
{
    [Required]
    public string Name { get; set; }
}
```

``` cs
    <div class="mb-3">
        <label asp-for="Name" class="form-label"></label>
        <input asp-for="Name" class="form-control" placeholder="Entrez le nom du produit" />
    </div>
```

https://learn.microsoft.com/fr-fr/aspnet/core/mvc/views/working-with-forms?view=aspnetcore-9.0#the-form-tag-helper

##==##

# Formulaire simple (30 minutes)

- Améliorer l'objet produit pour qu'il ai un nom (string), un prix (décimal), une description (string) et une couleur.
- Créer une vue productList dans View/Product 
- Créer le formulaire d'ajout de produit
- Ajouter un onglet "Product" dans la navbar pour accéder au formulaire

Les règle de gestion suivantes doivent être mise en place
- La couleur ne peut être que rouge ou bleu. Quel type de donnée mettre en place au niveau du model ? Quel input utiliser au niveau du cshtml ?
- le nom est obligatoire
- Le prix doit être strictement supérieur à zéro
- la description n'est pas obligatoire
- La couleur est obligatoire


