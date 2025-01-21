# Objectif de la matinée

- Création de vues avec la syntaxe Razor
- Utilisation des HTML Helpers et Tag Helpers
- Réutilisation du code dans les vues
- Utilisation des layouts
- Intégration de CSS et JavaScript
<!-- .element: class="list-fragment" -->

Notes:
- 

##==##

# Razor

Qu'est-ce que Razor ?
- Moteur de vue intégré à ASP.NET Core
- Permet de mélanger C# et HTML
- Extension de fichier .cshtml

Avantages de Razor
- Syntaxe intuitive
- IntelliSense complet
- Compilation en temps réel


##==##

# Structure du dossier View

```
📁 Home                        # un dossier par controller
     ├── Index.cshtml          # Un fichier par action
     ├── Privacy.cshtml        # Un fichier par action

📁 Shared                      # Contient les vues utilisées globalement dans l'application
     ├── _Layout.cshtml        # Définit la structure principale du site (header, footer, etc.).
     ├── ...
```
_ViewImports.cshtml : Définit des directives Razor globales (ex: @using, @inject).
_ViewStart.cshtml : Définit du code exécuté avant chaque vue (souvent pour spécifier la mise en page par défaut).


##==##

# Fonctionnement des vue avec Razor 

@{ } pour du code C# dans la vue.

``` cshtml
@{ var today = DateTime.Now; }
<p>Date du jour : @today.ToShortDateString()</p>
```

@Model pour accéder aux données envoyées depuis le contrôleur

``` cshtml
<h1>@Model.Id</h1>
<p>@Model.Name</p>
```

Definition du model utilisé
``` cshtml
@model WebApplication1.Models.Product
```

Blocs de condition ou de boucle
``` cshtml
@if (Model.IsLoggedIn)
{
    <p>Bienvenue, @Model.UserName</p>
}
```
