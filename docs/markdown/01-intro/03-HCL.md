
## HCL (HashiCorp Configuration Language)

* Langage déclaratif créé par HashiCorp
* Syntaxe simple et lisible, proche du JSON/YAML
* Conçu spécifiquement pour décrire l'infrastructure
<!-- .element: class="list-fragment" -->

##==##

## Structure de base 

* Blocs de configuration
* Variables
* Ressources 
* data sources
* Providers
* modules
<!-- .element: class="list-fragment" -->

Notes:
- Blocs de configuration Les blocs de configuration sont les éléments fondamentaux qui structurent le code Terraform en définissant la syntaxe et l'organisation des ressources.
- Variables Les variables permettent de paramétrer et rendre dynamique le code Terraform en définissant des valeurs réutilisables et modifiables.
- Ressources Les ressources sont les éléments centraux qui définissent les infrastructures à créer et à gérer dans votre environnement cible.
- Data Sources Les data sources permettent d'interroger et d'utiliser des informations sur des ressources existantes non gérées par Terraform.
- Providers Les providers sont des plugins qui permettent à Terraform d'interagir avec différentes plateformes cloud ou services en fournissant les API nécessaires.
- Modules Les modules sont des conteneurs réutilisables de ressources Terraform qui permettent d'organiser et de réutiliser le code de manière modulaire.

##==##

## Exemple de syntaxe

``` terraform
variable "instance_type" {
  description = "AWS instance type"
  default     = "t2.micro"
}
```

``` terraform
data "aws_ami" "amazon_linux_2" {
	most_recent = true
	owners      = ["amazon"]

	filter {
		name   = "name"
		values = ["amzn2-ami-hvm-*-x86_64-gp2"]
	}
}
```

``` terraform
resource "aws_instance" "example" {
  ami           = data.aws_ami.amazon_linux_2.id
  instance_type = "var.instance_type
  tags = {
    Name = "example-instance"
  }
}
```
