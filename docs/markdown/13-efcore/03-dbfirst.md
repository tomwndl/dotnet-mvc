# Scaffolding (DB first)

```bash
connectionString = "test"

dotnet ef dbcontext scaffold "${connectionString}" Microsoft.EntityFrameworkCore.SqlServer
```

On peut aussi spécifier le nom des tables:

```bash
dotnet ef dbcontext scaffold "${connectionString}" Microsoft.EntityFrameworkCore.SqlServer --table "Product" --table "User"
```

##==##

# Remarques

1. Scaffolder une seule fois **OU** ne jamais toucher aux fichiers générés. A la place, utiliser les **`partial class`**
2. Préférer scaffolder 1 seule fois et utiliser des migrations ensuite (si possible)
3. **ModelBuilder API** (dans `OnModelCreating`) **OU** les **Data Annotations**
