<!-- .slide: class="transition-bg-sfeir-2" -->
# .NET Framework

##==##

# Avant le dotnet framework

Dans les **années 90**, Microsoft utilise et propose:
- **Win32** API
- **COM** (Component Object Model)
- **C++** avec MFC (Microsoft Foundation Classes)
- **Visual Basic** qui permettait du développement avec une interface graphique
- **ASP** (Active Server Page), pour des pages web dynamiques côté serveur

##==##

# Contexte

- Sortie de **Java** en 1995 (7 ans plus tôt)
- Plateforme **J2EE** de Sun

##==##

# Timeline

[https://time.graphics/line/**593132**](https://time.graphics/line/593132)


![Timeline usage](../../assets/10-history/timeline_usage.png)

##==##

<!-- .slide: class="two-column" -->

## .Net Framework 1.0

- C# 
- Sites web avec **ASP.NET**
- On peut se connecter à des bases de données grâce à **ODBC** (=interface en C qui permet d’accéder à différentes bases de données)
- Sortie de **mono**
<!-- .element: class="list-fragment" -->

##--##
<!-- .slide: class="text-dark" data-background="#2c3c4e" -->
<img src="../../assets/10-history/timeline_net_framework.png" alt="Timeline usage" style="margin-top:5em; height: 12em"/>

##==##

<!-- .slide: class="two-column" -->

## .Net Framework 2.0

- **Micro dotnet** première initiative pour des objets connectés <small>(lié au projet SPOT = Smart Personal Object Technology)</small>
- Ajout des **Generics**
```csharp
class List<T> where T : object
{
    //...
}
```
<!-- .element: class="list-fragment" -->

##--##
<!-- .slide: class="text-dark" data-background="#2c3c4e" -->
<img src="../../assets/10-history/timeline_net_framework.png" alt="Timeline usage" style="margin-top:5em; height: 12em"/>

##==##

<!-- .slide: class="two-column" -->

## .Net Framework 3.0

- **WinForms**, pour des applications “lourdes/desktop”
- **WCF**, messages `SOAP` ancêtre des services web
- **WPF**, basé sur le dessin vectoriel et le langage `xaml`
<!-- .element: class="list-fragment" -->

##--##
<!-- .slide: class="text-dark" data-background="#2c3c4e" -->
<img src="../../assets/10-history/timeline_net_framework.png" alt="Timeline usage" style="margin-top:5em; height: 12em"/>

##==##

<!-- .slide: class="two-column" -->

## .Net Framework 3.5

- **LINQ** ajoute de nombreuses méthodes et nécessite que les collections (xml, sql) soient dans des objets
```csharp
var query = from e in experts
            where e.City == "Strasbourg"
            select e;
```
ou
```csharp
var query = experts.Where(e => e.City == "Strasbourg");
```
- **Entity Framework**, permet de faire le mapping entre sql et objet. On parle d’ORM (objet-relationnal-mapping)
<!-- .element: class="list-fragment" -->

##--##
<!-- .slide: class="text-dark" data-background="#2c3c4e" -->
<img src="../../assets/10-history/timeline_net_framework.png" alt="Timeline usage" style="margin-top:5em; height: 12em"/>

##==##

<!-- .slide: class="two-column" -->

## .Net Framework 3.5 SP1

- ASP.NET **MVC**

##--##
<!-- .slide: class="text-dark" data-background="#2c3c4e" -->
<img src="../../assets/10-history/timeline_net_framework.png" alt="Timeline usage" style="margin-top:5em; height: 12em"/>

##==##

<!-- .slide: class="two-column" -->

## .Net Framework 4.0

- **TPL** (=Task Parallel Library)
  - Parallel LINQ
  - Concurrent Collections
  - Semaphores, Mutex, Monitor (lock)

```csharp
var experts = new List<Expert>();

Parallel.ForEach(experts, e => Process(e));
```

```csharp
// Only one thread can enter this block
lock (this)
{
    //...
}
```

##--##
<!-- .slide: class="text-dark" data-background="#2c3c4e" -->
<img src="../../assets/10-history/timeline_net_framework.png" alt="Timeline usage" style="margin-top:5em; height: 12em"/>

##==##

<!-- .slide: class="two-column" -->

## .Net Framework 4.5

- Support pour les interfaces tactiles (UWP)
- **async/await** tasks
``` csharp
public async Task<List<Expert>> GetExperts()
{
    await httpClient.GetAsync("myapi.com/experts");
    //...
}
```

##--##
<!-- .slide: class="text-dark" data-background="#2c3c4e" -->
<img src="../../assets/10-history/timeline_net_framework.png" alt="Timeline usage" style="margin-top:5em; height: 12em"/>

##==##

<!-- .slide: class="two-column" -->

## .Net Framework 4.6.1

- Apparition de **dotnet core**

##--##
<!-- .slide: class="text-dark" data-background="#2c3c4e" -->
<img src="../../assets/10-history/timeline_net_framework.png" alt="Timeline usage" style="margin-top:5em; height: 12em"/>

##==##

# .NET Framework : Details


[https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/**versions-and-dependencies**](https://learn.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies)

