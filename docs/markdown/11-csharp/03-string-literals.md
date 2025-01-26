<!-- .slide: class="with-code max-height"  -->

# Fonctions pour les chaines de caractères

```csharp[1-27|1-3|5-6|8-14|16-18|20-27|1-27]
// String interpolation (fonctionne aussi avec des constantes)
var sfeir = "SFEIR";
var hello = $"Hello {sfeir}";

// Verbatim string (pas besoin de doubler les \)
string chemin = @"C:\Program Files\Mon Application\logs.txt";

// Texte multi-ligne (intéressant pour du json, xml ou html par exemple)
var json = """
    {
        "name": "SFEIR",
        "location": "Schiltigheim"
    }
    """;

// Interpolation avec verbatim string
var appName = "Mon Application";
var chemin2 = $@"C:\Program Files\{appName}\logs.txt";

// Interpolation dans du json multi-ligne
var sfeir = "SFEIR";
var json = $$"""
    {
        "name": {{sfeir}},
        "location": "Schiltigheim"
    }
    """;
```
