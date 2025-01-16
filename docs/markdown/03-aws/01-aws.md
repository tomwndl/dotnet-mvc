# AWS Concept

* **VPC (Virtual Private Cloud)** : Un réseau virtuel isolé dans le cloud AWS qui permet de lancer des ressources AWS dans un environnement réseau que vous contrôlez.
* **Subnet** : Une plage d'adresses IP dans votre VPC qui permet de grouper vos ressources en fonction de vos besoins en sécurité et opérationnels.
* **Internet Gateway** : Une passerelle qui permet la communication entre votre VPC et Internet, essentielle pour les ressources qui nécessitent un accès Internet public.
* **Security Group** : Un pare-feu virtuel qui contrôle le trafic entrant et sortant au niveau des instances EC2 en agissant comme une liste de contrôle d'accès.
* **EC2 (VM)** : Un service qui fournit des machines virtuelles (instances) dans le cloud AWS, permettant d'exécuter des applications avec une capacité de calcul évolutive.
<!-- .element: class="list-fragment" -->

Notes:
- 

##==##

# Règle réseau pour VM public

| Type | Action | Target | Protocol |
|------|--------|---------|----------|
| ingress | allow | ipsfeir | TCP 22 |
| egress | allow | 10.0.0.0/16 | ICMP |

##==##

# Règle réseau pour VM private

| Type | Action | Target | Protocol |
|------|--------|---------|----------|
| ingress | allow | 10.0.0.0/16 | ICMP |

##==##

# Schéma AWS

![w-1000 center](./assets/images/terraform-aws.png)

Notes:
- 

##==##

<!-- .slide: class="exercice" -->

# Démo

<br>
Réaliser le schéma sur AWS avec terraform
<br>

