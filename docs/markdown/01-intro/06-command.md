## Installation terraform cli

Plusieurs façon de l'installer, il suffit de suivre la documentation.

[terraform install](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
<!-- .element: class="credits" -->

##==##

## Command terraform init

* Initialise un répertoire de travail Terraform
* Télécharge les plugins des fournisseurs (providers) requis
* Configure le backend pour le stockage de l'état
* Prépare le répertoire de travail pour son utilisation.
<!-- .element: class="list-fragment" -->

##==##

## Command terraform plan

* Compare l'état actuel avec l'état souhaité
* Affiche un aperçu des modifications :
  * Ressources à créer (+)
  * Ressources à modifier (~)
  * Ressources à supprimer (-)
* N'effectue aucune modification réelle sur l'infrastructure
<!-- .element: class="list-fragment" -->

##==##

## command terraform apply

* Exécute le plan de déploiement et crée/modifie/supprime les ressources
* Demande une confirmation (sauf si utilisé avec -auto-approve)
* Applique les modifications planifiées sur l'infrastructure
* Met à jour le fichier d'état (state file)
<!-- .element: class="list-fragment" -->
