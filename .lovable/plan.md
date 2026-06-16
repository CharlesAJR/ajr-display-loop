Supprimer la slide 3 (QualityPolicySlide) de la séquence des slides TV.

1. Retirer l'import `QualityPolicySlide` de `src/pages/Index.tsx` (ligne 14)
2. Retirer la ligne `<QualityPolicySlide key="quality" />` du tableau `baseSlides` dans `src/pages/Index.tsx` (ligne 99)

Le nombre total de slides passera de 11 à 10.