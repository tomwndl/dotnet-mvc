
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
