# GCP Concept

* **VPC (Virtual Private Cloud)** : Un réseau virtuel privé et isolé hébergé sur Google Cloud qui permet de connecter et d'isoler vos ressources cloud de manière sécurisée.
* **Subnet** : Une subdivision de votre réseau VPC avec une plage d'adresses IP définie, permettant d'organiser et de segmenter vos ressources dans des régions spécifiques.
* **Firewall Rules** : Des règles de sécurité qui contrôlent le trafic entrant et sortant de vos ressources GCP, définissant quels types de connexions sont autorisés ou bloqués.
* **Compute Engine (VM)** : Le service de machines virtuelles de Google Cloud qui permet de créer et d'exécuter des instances virtuelles avec des performances personnalisables et une haute disponibilité.
<!-- .element: class="list-fragment" -->


Notes:
- 

##==##

##==##

# Règle réseau pour VM public

| Type | Action | Target | Protocol |
|------|--------|---------|----------|
| ingress | allow | ipsfeir | TCP 22 |

##==##

# Règle réseau pour VM private

| Type | Action | Target | Protocol |
|------|--------|---------|----------|
| ingress | allow | 10.0.0.0/16 | ICMP |


##==##

# Schéma GCP

![center](./assets/images/terraform-gcp.png)

Notes:
- 

##==##

<!-- .slide: class="exercice" -->

# Demo

<br>
Réaliser le schéma sur GCP avec terraform
<br>


