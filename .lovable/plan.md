## Mise à jour illustration C32A

Tu m'as partagé une photo du vrai document C32A (formulaire de contrôle "TRAVAUX SPÉCIAUX", entête bleu foncé, numéro rouge en haut à droite, sections numérotées, petits tableaux à droite). Je vais régénérer l'illustration centrale pour qu'elle ressemble vraiment au document, plutôt qu'à une feuille générique.

### Étapes

1. **Régénérer `src/assets/c32a-equals-money.png`** via `imagegen--edit_image` en utilisant l'image que tu viens d'envoyer comme référence visuelle :
   - À gauche : dessin stylisé (line-art coloré, style affiche pédagogique) du document C32A reproduisant fidèlement les éléments reconnaissables — bandeau d'entête bleu foncé, gros numéro en rouge en haut à droite, sections numérotées avec cases à cocher, petits tableaux quadrillés à droite
   - Au milieu : grand signe "=" blanc
   - À droite : pile de billets euros stylisée
   - Fond transparent, format paysage 16:9

2. **Aucun changement au composant** `C32ASlide.tsx` : il importe déjà `c32a-equals-money.png` et la signature Anne-Sophie + bandeau "Ne pas perdre !" sont déjà en place.

### Détails techniques

- Outil : `imagegen--edit_image` (premium) avec `image_paths: ["user-uploads://Sans_titre.png"]`, `transparent_background: true`, `aspect_ratio: "16:9"`
- Cible : `src/assets/c32a-equals-money.png` (overwrite)
- Pas de modification de code, juste régénération d'asset
