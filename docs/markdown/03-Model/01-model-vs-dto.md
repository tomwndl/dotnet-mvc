# Model

Model : 
- Représente les entités de la base de données
- Utilisé pour la logique métier et la gestion des données.
- Exemples : Product, User, Order.

##==##

# ViewModel 
- Sert à organiser les données pour l'affichage et la saisie dans une vue.
- Peux contenir des champs calculés, des validations spécifiques, ou des données provenant de plusieurs modèles.
- Exemples : ProductViewModel, UserProfileViewModel

##==##

# DTO (Data Transfer Object)
- Un viewModel est une sorte de DTO
- Il s'agit d'une classe simple qui contient uniquement des propriétés et aucune logique métier, son but est de transférer des données de manière structurée.
- Idéal pour des communications entre applications (dans la création/ consommation d'API)
- Exemple : CreateUserRequest, CreateUserResponse

##==##

# Pourquoi utiliser un ViewModel ou un DTO 

Encapsulation des données : 
- Permet de masquer la structure interne des modèles de base de données en exposant uniquement les données nécessaires.
- Réduit le couplage entre les différentes couches de l'application.

Amélioration des performances 
- Permet de ne transférer que les champs nécessaires, réduisant ainsi la quantité de données échangées (notamment pour les API et les requêtes réseau).
- Diminue la surcharge inutile liée aux modèles complets.

##==##

# Pourquoi utiliser un ViewModel ou un DTO 

Sécurité des données
- Empêche l'exposition directe de l'ensemble des données sensibles du modèle de base de données.
- Évite les modifications accidentelles de données critiques en limitant les champs accessibles.

Simplicité et clarté du code
- Facilite la maintenance en séparant la logique métier (dans les modèles) de la logique de transfert (dans les DTO).
- Gérer des données provenant de plusieurs modèles (jointures).
- Permet de mieux organiser les données en fonction des besoins spécifiques des différentes parties de l'application.

##==##

# Exemple concret

Imaginez une classe User

``` cs
    public class User
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; } 
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime Birthdate {  get; set; }

        public School School { get; set; }
    }
```
 Dans une vue UserProfil, nous voulons afficher les informations suivantes 
 - Nom
 - Prénom
 - Age

##==##
# Exemple concret

Le ViewModel correspondant envoyé à la vue 

``` cs
    public class UserViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; } 
        public int Age { get; set; }
    }
```

- N'inclue que les informations essentielles
- N'inclue pas les informations sensibles (mot de passe)
- Propriété age (mapping)
