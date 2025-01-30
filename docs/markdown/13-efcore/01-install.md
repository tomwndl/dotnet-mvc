# Installation

- Packet NuGet `Microsoft.EntityFrameworkCore`
- Choisir un db provider (ex: `Microsoft.EntityFrameworkCore.SqlServer`)
- Installer les tools:
    - `dotnet tool install --global dotnet-ef`
    - ou en ajoutant le package `Microsoft.EntityFrameworkCore.Tools` au projet
- Pour les tests il existe aussi `Microsoft.EntityFrameworkCore.InMemory` 