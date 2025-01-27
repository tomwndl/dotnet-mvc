# Autres petits tricks

<!-- .slide: class="with-code" -->

- File scoped namespaces
    ```csharp
    namespace MyNamespace;
    ```
- Global usings
    ```csharp
    global using System;
    global using System.Collections.Generic;
    ```
- Primary constructors
    ```csharp
    public class HomeController(ILogger Logger)
    {
        //...
    };
    ```
- Initialization de collections
    ```csharp
    List<string> names = [];
    ```
<!-- .element: class="list-fragment" -->