# Switch-expression

```csharp
public enum Size { Small, Medium, Large }
```

```csharp
// Switch traditionnel
public int GetPriceTraditional(Size size)
{
    switch (size)
    {
        case Size.Small: 
            return 10;
        case Size.Medium: 
            return 15;
        case Size.Large: 
            return 20;
        default: 
            return 0;
    }
}
```

```csharp
// Switch expression 
public int GetPriceModern(Size size) 
    => size switch
    {
        Size.Small => 10,
        Size.Medium => 15,
        Size.Large => 20,
        _ => 0
    };
```

##==## 

# Pattern-Matching

```csharp
string Describe(List<int> list) => list switch
{
    [] => "vide",
    [var x] => $"unique: {x}",
    [var x, _] => $"début: {x}",
    _ => throw new Exception("invalid");
};
```

```csharp
bool IsValidNumber(object obj) => obj is int n && n > 0;
```

```csharp
record Point(int X, int Y);
string WhereIs(Point p) => p switch
{
    { X: 0, Y: 0 } => "origine",
    { X: 0 } => "axe Y",
    { Y: 0 } => "axe X",
    _ => "ailleurs"
};
```

```csharp
string GetQuadrant((int x, int y) point) => point switch
{
    (> 0, > 0) => "NE",
    (< 0, > 0) => "NO",
    (< 0, < 0) => "SO",
    (> 0, < 0) => "SE",
    _ => "Centre"
};
```