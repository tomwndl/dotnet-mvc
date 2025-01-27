# Layout

Le concept de layout permet de définir une mise en page commune :
``` cshtml
<!DOCTYPE html>
<html>
<head>
    <title>@ViewData["Title"]</title>
</head>
<body>
    <header>Mon Site</header>
    <div>
        @RenderBody()  <!-- Contenu spécifique à chaque vue -->
    </div>
    <footer>© 2025</footer>
</body>
</html>

```
La méthode @RenderBody() dans le fichier _Layout.cshtml d'un projet ASP.NET Core MVC est utilisée pour insérer dynamiquement le contenu des vues spécifiques à l'intérieur du layout commun.

##==##

# Layout
Dans Home/Index.cshtml
``` cshtml
@{
    ViewData["Title"] = "Home Page";
}

<div class="text-center">
    <h1 class="display-4">Welcome</h1>
    <p>Learn about <a href="https://learn.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
</div>
```

Notes:
- 
##==##

# Layout : Exercice (5min)

Modifier le layout :
- Changer le titre de l'application : BPMED Formation
- Supprimer l'onglet "privacy"
- Modifier le footer également (titre et onglet lien "Privacy")

##==##

# CSS & JS 

Dans les projets ASP.NET MVC utilisant .NET Core ou .NET Framework, les fichiers CSS sont généralement dans le dossier wwwroot (pour .NET Core)

```
📁 wwwroot
 └──📁 css
     ├── site.css
     📁 js
     ├── site.js  
     📁 lib
     └──📁 ...           
```

l'inculsion ce fait au niveau du fichier _layout.cshtml

``` cshtml
<head>
    <link rel="stylesheet" href="~/css/site.css" />
    <link rel="stylesheet" href="~/css/custom.css" asp-append-version="true" />
</head>         
```

##==##

# Ajout de styles spécifiques dans une vue Razor

Si un style est spécifique à une page, tu peux l'ajouter dans la vue elle-même :

``` cshtml
@section Styles {
    <link rel="stylesheet" href="~/css/page-specific.css" />
}
```

##==##

# Bonnes pratiques css

- Séparer le CSS du HTML
- Utiliser des classes CSS réutilisables
- Éviter de cibler directement les balises HTML dans le CSS, privilégier les classes descriptives (ex: .btn-cancel au lieu de button)
- Utiliser des frameworks comme Bootstrap qui offre beaucoup de possibilité et évite de réinventer la roue
- https://getbootstrap.com/docs/5.3/forms/overview/

##==##

# CSS : Exercice (5 min) 

- Mettre le titre l'application en bleu (bleu "banque populaire" #062499)
- Mettre le footer en bleu 
- Mettre le texte du footer en blanc

##==##

# Les partial views (vues partielles)

Les vues partielles permettent de réutiliser des morceaux de vue à plusieurs endroits.

/Views/Shared/_UserProfile.cshtml

``` cshtml
<div class="user-info">
    <h3>Bienvenue, Jean-paul</h3>
    <p>Email: jean-paul@gmail.com</p>
</div>
```

Utilisation dans une autre vue :

``` cshtml
<h1>Page d'accueil</h1>

<!-- Inclusion de la vue partielle -->
@Html.Partial("_UserInfo")

<!-- Alternative asynchrone -->
@await Html.PartialAsync("_UserInfo")
```
##==##

# Les partial views (vues partielles)

On peut inclure plusieurs partial views dans une vue principale.
Cela permet de structurer le code de manière modulaire, de favoriser la réutilisation des composants et d'offrir une grande flexibilité pour la gestion et la mise à jour de l'interface utilisateur.

``` cshtml
<h1>Page d'accueil</h1>

<!-- Inclusion de la vue partielle pour les informations utilisateur -->
@Html.Partial("_UserInfo")

<!-- Inclusion de la vue partielle pour un produit -->
@Html.Partial("_ProductInfos")

```

##==##

# Les partial views (vues partielles)

Pour charger un vue partiel via AJAX sans recharger toute la page :
``` cshtml
<div id="product-container"></div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function() {
        $.get('/Product/GetProduct', function(data) {
            $('#product-container').html(data);
        });
    });
</script>
```

##==##

# Les partial views (vues partielles) : Exercice (10 min)

- Créer une nouvelle vue partielle appelée _UserPartial contenant le texte : "Connecté : {votre nom} {votre prénom}"
- Ajouter la vue partiel dans index.cshtml
