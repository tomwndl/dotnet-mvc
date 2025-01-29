
# Mapping entre Model et ViewModel

Il existe plusieurs façons de convertir un modèle en ViewModel. Manuellement tout dabord

model vers ViewModel

``` cs
  User user = _context.Users.Find(id);

  UserViewModel viewModel = new UserViewModel
  {
      FirstName = user.FirstName,
      LastName = user.LastName,
      FullName = user.FirstName + " " + user.LastName;
      Age = DateTime.Today.Year - user.BirthDate.Year;
  };

  return ViewModel;
```

##==##

# Utilisation des ViewModel : Exercice (20min) 

- Modifier votre action GetAll pour renvoyer la liste des produits en utilisant un ProductViewModel  
- Créer une vue ProductList dans /View/Product utilisant une liste de ProductViewModel. 
- Ajoutez le code razor pour afficher toute les caractéristiques des produits dans un tableau dans la vue
- Dans _Layout, Ajouter un onglet "Product List" renvoyant vers la vue


##==##

# AutoMapper

AutoMapper est une bibliothèque qui permet de mapper automatiquement des objets entre eux, en simplifiant la conversion entre DTOs (Data Transfer Objects), ViewModels et Entités dans les applications.

- Évite le code répétitif : pas besoin d'écrire manuellement des conversions entre objets.
- Facilite la maintenance : les mappings sont centralisés dans un seul endroit.
- Améliore la lisibilité : le code est plus propre et concis.
- Réduit les erreurs : diminue les risques d'oublier de mapper certains champs.
- Supporte les conversions complexes : comme les transformations de types et la mise en correspondance des collections.

##==##

# AutoMapper utilisation   

Installation du nugget : 
``` shell
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection
```

Créer une class MappingProfile
``` cs
using AutoMapper;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<User, UserViewModel>()
            .ForMember(viewModel => viewModel.FullName, opt => opt.MapFrom(src => src.FirstName + " " + src.LastName))
            .ForMember(viewModel => viewModel.Age, opt => opt.MapFrom(src => DateTime.Today.Year - src.BirthYear))
            .ReverseMap();
    }
}
```
##==##

# AutoMapper exemple 

Ajouter AutoMapper aux services dans Program.cs

``` cs

using AutoMapper;

var builder = WebApplication.CreateBuilder(args);

// Ajout d'AutoMapper en précisant le profil de mapping
builder.Services.AddAutoMapper(typeof(MappingProfile));

var app = builder.Build();
```

##==##

Une fois configuré, nous pouvons injecter IMapper dans les contrôleurs ou services pour convertir les objets.
``` cs
public class UserController : Controller
{
    private readonly IMapper _mapper; //Injecté

    public ProductController(IMapper mapper)
    {
        _mapper = mapper;
    }

    public IActionResult GetUser()
    {
      User user = _context.Users.Find(id);
      UserViewModel viewModel = _mapper.Map<UserViewModel>(user);

      return Ok(ViewModel);
    }
}
```

##==##

# Exemples de mappings courants

Mapping simple (Propriétés identiques)
``` cs
CreateMap<Customer, CustomerDto>();
```

Mapping avec propriétés de noms différents
``` cs
CreateMap<Order, OrderDto>()
    .ForMember(dest => dest.OrderId, opt => opt.MapFrom(src => src.Id))
    .ForMember(dest => dest.OrderDate, opt => opt.MapFrom(src => src.Date));
```
Ignorer certaines propriétés
``` cs
CreateMap<Order, OrderDto>()
    .ForMember(dest => dest.OrderId, opt => opt.Ignore())
    .ForMember(dest => dest.OrderDate, opt => opt.Ignore());
```
##==##

# Exemples de mappings courants

```
Gestion des null et valeurs par défaut
``` cs
CreateMap<User, UserDto>()
    .ForMember(dest => dest.Age, opt => opt.NullSubstitute(0)); // Si null, alors remplace par 0
```
Mapper des collections : autoMapper peut convertir automatiquement des listes d'objets.
``` cs
List<Product> products = _context.Products.ToList();
List<ProductDto> productDtos = _mapper.Map<List<ProductDto>>(products);
```

##==##

# Tests

Pour tester les mappings, on utilise les méthodes de validation fournies par AutoMapper.
``` cs
var config = new MapperConfiguration(cfg => cfg.AddProfile<MappingProfile>());
config.AssertConfigurationIsValid(); // Vérifie si les mappings sont bien configurés
```

Documentation : https://docs.automapper.org/en/stable/

##==##

# Exercice (15 minutes)

- Utilisez automapper pour mapper Product vers ProductViewModel
- Ajouter un mapping personnalisé pour renvoyer "Pas de description" si le champs description et null, vide ou égale à " "
- Testez

##==##

# Correction

``` cs
CreateMap<Product, ProductViewModel>()
    .ForMember(dest => dest.Description, opt => opt.MapFrom(src => String.IsNullOrEmpty(src.Description) ? "Pas de description" : src.Description))
    .ReverseMap()
```
