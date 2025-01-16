## Constitution d'un projet terraform

```
📁 environements
 └──📁 environement
     ├── main.tf           # déclaration des ressources et autres
     ├── provider.tf       # définition des provider à utiliser comme gcp ou aws  
     ├── terraform.tfvars  # affectation des variables
     └── variables.tf      # définition des variables
📁 modules
 └──📁 module
     ├── main.tf        # déclaration des ressources et autres
     ├── output.tf      # variable à exporter pour être utiliser en dehors 
     └── variables.tf   # définition des variables
```
