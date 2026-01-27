
## Ajout d'un indicateur de slide (X sur Y)

### Objectif
Afficher le numero de la slide actuelle et le total, par exemple "3 / 10", pour que les spectateurs sachent ou ils en sont dans la presentation.

### Emplacement propose

**Option recommandee : Dans le footer, au centre**

L'indicateur sera place entre le logo AJR (a gauche) et l'heure (a droite), bien visible mais discret.

```text
+------------------------------------------------------------------+
|  [LOGO AJR]          3 / 10            14:32:05                  |
|                                    lundi 27 janvier 2025          |
+------------------------------------------------------------------+
```

### Style visuel

- Texte blanc semi-transparent (text-white/80)
- Taille moyenne (text-2xl ou text-3xl)
- Police legere pour ne pas dominer l'affichage
- Format : `3 / 10` (numero actuel / total)

### Modifications techniques

**Fichier : `src/components/Footer.tsx`**
- Ajouter des props `currentSlide` et `totalSlides`
- Ajouter un element central dans le flex container

**Fichier : `src/pages/Index.tsx`**
- Passer `currentSlide + 1` et `slides.length` au composant Footer

### Resultat attendu

Les spectateurs verront en permanence "Slide 3 / 10" (ou simplement "3 / 10") dans le footer, leur permettant de savoir ou ils en sont dans le cycle de presentation.
