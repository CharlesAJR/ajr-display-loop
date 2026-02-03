
# Masquer les anniversaires de la slide "Cette semaine"

## Objectif
Retirer l'affichage des anniversaires tout en conservant :
- Les événements de la semaine
- Les annonces spéciales (naissances, etc.)
- Les données des anniversaires dans `slidesContent.ts` (non supprimées)

## Modifications à effectuer

### Fichier : `src/components/slides/BirthdaysSlide.tsx`

**1. Retirer l'import de l'icône Cake** (ligne 1)
- Supprimer `Cake` de l'import lucide-react

**2. Supprimer la légende anniversaire** (lignes 114-117)
- Retirer le bloc qui affiche "🎂 = Anniversaire" dans le header

**3. Simplifier la structure de données** (lignes 26-37)
- Retirer `birthdays` de l'objet `eventsByDay`
- Garder uniquement `events`

**4. Supprimer le traitement des anniversaires** (lignes 40-61)
- Retirer tout le bloc `birthdays.forEach(...)` qui filtre les anniversaires

**5. Supprimer l'affichage des anniversaires** (lignes 133-140)
- Retirer le rendu des anniversaires dans chaque jour

**6. Simplifier la logique d'affichage vide** (ligne 124-126 et 154)
- Adapter `hasAnyEvent` pour ne vérifier que les événements

---

## Résumé visuel

| Avant | Après |
|-------|-------|
| Anniversaires + Événements + Annonces | Événements + Annonces uniquement |
| Légende "🎂 = Anniversaire" | Pas de légende |
| Icône Cake rose | Supprimée |

---

## Détails techniques

Le fichier `slidesContent.ts` reste intact - les anniversaires y sont toujours stockés mais simplement ignorés par le composant.
