## Terraform et son state

* Garde une trace de l'infrastructure déployée par Terraform
* Permet de faire le mapping entre les ressources réelles et la configuration
* Permet à Terraform de détecter les différences entre l'infrastructure souhaitée et l'état actuel
* Par défaut stocké en local **terraform.tfstate**
<!-- .element: class="list-fragment" -->

Notes:
- il est recommandé de le stocker à distance (S3, Azure Storage, etc.) pour le travail en équipe et la sécurité


