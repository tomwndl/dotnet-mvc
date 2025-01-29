<!-- .slide: class="two-column with-code max-height" -->

# [`class`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)

```csharp
public class Person
{
    private readonly ILogger logger;
    private DateTimeOffset birthDay;

    public string Login { get; set; }
    public Adress Address {get;}

    public Person(string login, DateTimeOffset birthDay, Address address, ILogger logger)
    {
        Login = login;
        this.birthDay = birthDay;
        Address = address;
        this.logger = logger;
    }

    public int Age() => today.Year - birthDay.Year;
    
    public void ChangeAdress(Address newAddress)
    {
        return Address = newAddress;
    }
}
```

##--##

# [`record`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)

```csharp
public record Address
{
    public required string Street { get; init; }
    public required string City { get; init; }
    public required string ZipCode { get; init; }
    public string? Country { get; init; }
}
```

##==##

<!-- .slide: class="two-column with-code" -->

# [`class`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)

```csharp
public class Person
{
    private readonly ILogger logger;
    private DateTimeOffset birthDay;
    
    public string Login { get; set; }
    public Adress Address {get;}

    //...
}
```

##--##
<!-- .slide: data-background="#2c3c4e" -->
<br><br>

- **`Member`**
- **`Property`**
- La portée des variables: 
    - `private`
    - `public`
    - `protected`
    - `internal`
- `readonly`
- `DateTimeOffset` à la place d'un ~~`DateTime`~~ 
    - contient l'information de la timezone de manière explicite
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="two-column with-code" -->

# [`class`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)

```csharp
public class Person
{
    //...

    public int Age() => today.Year - birthDay.Year;
    
    public void ChangeAdress(Address newAddress)
    {
        return Address = newAddress;
    }
}
```

##--##
<!-- .slide: data-background="#2c3c4e" -->

<br><br>

- `args`
- `return` type 
- fonction "flêchée"
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="two-column with-code" -->

# [`class`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)

```csharp
public class Person
{
    private DateTimeOffset birthDay;

    public string Login {get; set;} 

    // ...
    public Person(string login, DateTimeOffset birthDay, Address address, ILogger logger)
    {
        Login = login;
        this.birthDay = birthDay;
        Address = address;
        this.logger = logger;
    }
    // ...
}
```

##--##
<!-- .slide: data-background="#2c3c4e" -->

<br><br>

- `constructor`
- `this.birthDay`
- injection de dépendance du logger
<!-- .element: class="list-fragment" -->

##==##

<!-- .slide: class="with-code two-column" data-background="#2c3c4e"-->

<br><br>

- immutable
- value based equality
- `init`
    ```csharp
    var addressSfeir = new Address
    {
        Street = "1 Avenue de l'Europe",
        City = "Schiltigheim",
        ZipCode = "67300"
    };

    //or 

    var addressSfeir = new Address("1 avenue de l'Europe", "Schiltigheim", "67300");
    ```
- required
<!-- .element: class="list-fragment" -->

##--##
<!-- .slide: class="with-code"  -->

# [`record`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)

```csharp
public record Address
{
    public required string Street { get; init; }
    public required string City { get; init; }
    public required string ZipCode { get; init; }
    public string? Country { get; init; }

    // public Address(string street, string city, string zipCode, string country)
    // {
    //     Street = street;
    //     City = city;
    //     ZipCode = zipCode;
    //     Country = country;
    // }
}
```

```csharp
public record Address(
    string Street, 
    string City, 
    string ZipCode, 
    string? Country = null);
```

##==##

<!-- .slide: class="exercice" -->

# Exercice

On veut créer des éléments pour un site de e-commerce:
- Un **panier** qui permet de lister les produits ainsi que leur quantité
- Le **produit** qui a une référence, un nom, un prix et une description


Quel élément serait un `record` et lequel serait une `class` ?
<!-- .element: class="admonition tip" -->

##==##

<!-- .slide: class="exercice" -->
# Exercice

- Comment vérifier si le produit est déjà dans le panier ?
- Peut-on créer un produit sans référence ?
- Peut-on modifier la référence du produit ?
- Comment créer une variante d'un produit existant avec un prix soldé ?

##==##

# Proposition de solution

<!-- .slide: class="with-code max-height"  -->

```csharp
public record Produit(string Reference, string Nom, decimal Prix, string Description);
```

```csharp
public class Panier
{
    private Dictionary<Produit, int> ContenuPanier { get; } = [];

    public void Ajouter(Produit produit, int quantite)
    {
        if (Existe(produit))
            ContenuPanier[produit] += quantite;
        else
            ContenuPanier.Add(produit, 1);
    }

    public bool Existe(Produit produit) 
        => ContenuPanier.ContainsKey(produit);

    public string DetailsContenu()
        => string.Join(Environment.NewLine, ContenuPanier.Select(c => $"{c.Key.Nom} - {c.Value}"));
}
```

##==##

# Proposition de solution

<!-- .slide: class="with-code max-height"  -->
```csharp
    [Fact]
    public void Test()
    {
        // Arrange
        var panier = new Panier();
        var chocapics = new Produit("c1", "Chocapic", (decimal)2.95, "Des céréales au chocolat");
        var kellogs = new Produit("c2", "Kellogs", (decimal)2.95, "Des céréales");

        // Act
        panier.Ajouter(chocapics, 1);
        panier.Ajouter(kellogs, 1);
        panier.Ajouter(chocapics, 2);

        // Assert
        var expected ="""
            Chocapic - 3
            Kellogs - 1
            """
        Assert.Equal(expected, panier.DetailsContenu());
    }
```

##==##

# Proposition de solution

<!-- .slide: class="with-code max-height"  -->

Comment créer une variante d'un produit existant avec un prix soldé ?
<!-- .element: class="admonition question" -->

##==##

# Proposition de solution

<!-- .slide: class="with-code max-height"  -->

Comment créer une variante d'un produit existant avec un prix soldé ?
<!-- .element: class="admonition question" -->

```csharp

var chocapics = new Produit("c1", "Chocapic", (decimal)2.95, "Des céréales au chocolat");

var chocapicsSoldes = chocapics with { Prix = (decimal)1.95 };

var chocapicsPlusChoco = chocapics with { 
    Reference = "c3",
    Description = "Des céréales encore plus fort en chocolat"};
```

<!--
Autres exemples:
- identité / adresse
- joueur / position
- panier de courses / produit (pour la factu d'un site e-commerce)
-->
