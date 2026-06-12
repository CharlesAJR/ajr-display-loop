## Refonte slide C32A

Remplacer le schéma actuel (3 cartes Document → Photo → Payé) par une illustration centrale dessinée représentant le document C32A égal à de l'argent, avec signature Anne-Sophie et message "Ne pas perdre".

### Étapes

1. **Générer une illustration** (style dessin/croquis, fond transparent, palette AJR) :
   - À gauche : reproduction stylisée du document C32A (feuille blanche avec en-tête, lignes)
   - Au milieu : un grand signe "="
   - À droite : un billet / pile de billets
   - Style : line-art clean, coloré, ressemblant à une affiche pédagogique
   - Sauvegarde : `src/assets/c32a-equals-money.png`

2. **Réécrire `C32ASlide.tsx`** :
   - Titre "C32A" en haut (conservé, plus compact)
   - Illustration centrale grande taille
   - Bandeau rouge "Ne pas perdre !" avec icône `ShieldAlert` (conservé)
   - Signature manuscrite "— Anne-Sophie" en bas à droite (font italique/cursive)
   - Animations framer-motion conservées

### Détails techniques

- Nouvelle image générée via `imagegen--generate_image` (premium pour la qualité du dessin), fond transparent
- Import ES6 standard de l'image dans le composant
- Pas de changement à `Index.tsx` ni aux autres fichiers
- Pas de modification logique métier
