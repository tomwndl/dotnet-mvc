
# Interface


```csharp
public interface ILogger
{
    void Log<TState>(
        LogLevel logLevel,
        EventId eventId,
        TState state,
        Exception? exception,
        Func<TState, Exception?, string> formatter);

    bool IsEnabled(LogLevel logLevel);

    IDisposable? BeginScope<TState>(TState state) where TState : notnull;
}
```

- A quoi ça sert ?
<!-- .element: class="list-fragment" -->
    - appeler des méthodes d'une autre classe, **sans connaitre son implémentation** et **sans dépendre** de celle-ci
- Quand utiliser des interfaces ?
    - lorsqu'on veut tester une classe sans dépendances (=**Unit-Tests**)
    - pour faciliter l'**évolution du code** et de l'architecture
    - pour profiter de l'**injection de dépendances**

##==##

<!-- .slide: class="exercice" -->
# Exercice

- Créer une interface **`IPaymentMethod`**
- L'interface doit permettre de **`ProcessPayment`** et d'obtenir les détails avec **`Infos`**
- Implémenter 2 moyens de paiements différents

Idées d'implémentations: `CreditCard`, `PayPal`, `BankTransfer`, `Cash`
<!-- .element: class="admonition tip" -->

##==## 

# Proposition de solution

<!-- .slide: class="with-code"  -->

```csharp
public interface IPaymentMethod
{
    string Infos { get; }
    void ProcessPayment(decimal amount);
}
```

```csharp
public class Cash : IPaymentMethod
{
    public string Infos => "Cash";

    public void ProcessPayment(decimal amount)
        => Console.WriteLine($"Payment of {amount} with {Infos}");
}
```

##==##

# Proposition de solution

<!-- .slide: class="with-code max-height"  -->

```csharp
public class CreditCard(string CardNumber, DateTime ExpiryDate, string CVV) : IPaymentMethod
{
    public string Infos => "Credit Card";

    public void ProcessPayment(decimal amount)
    {
        if (IsValid()){
            Console.WriteLine($"Payment of {amount} with {Infos}");
        })
    }

    public bool IsValid()
    {
        return ExpiryDate >= DateTime.Now
            && CardNumber.Length >= 16
            && CVV.Length == 3;
    }
}
```

##==##

# Proposition de solution

<!-- .slide: class="with-code max-height"  -->

```csharp
public class PayPal(string Email, string Password) : IPaymentMethod
{
    public string Infos => "PayPal";

    public void ProcessPayment(decimal amount)
    {
        if (IsValid()){
            Console.WriteLine($"Payment of {amount} with {Infos}");
        })
    }

    public bool IsValid()
    {
        return !string.IsNullOrEmpty(Email)
            && !string.IsNullOrEmpty(Password);
    }
}
```
