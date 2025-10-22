# 📋 Guide de Configuration - Affichage Dynamique AJR

## 🎯 Pour modifier le contenu des slides

**Fichier à éditer:** `src/config/slidesContent.ts`

Ce fichier contient TOUT le contenu éditable. Vous n'avez pas besoin de toucher aux autres fichiers !

### 📝 Ce que vous pouvez modifier :

#### 1. **Durée des slides**
```typescript
slideDuration: 12, // Durée en secondes
```

#### 2. **Citations inspirantes**
```typescript
quotes: [
  {
    text: "Votre citation ici",
    author: "Auteur"
  },
  // Ajoutez autant de citations que vous voulez
]
```
💡 Une citation différente s'affiche automatiquement chaque jour.

#### 3. **Anniversaires**
```typescript
birthdays: [
  { name: "Nom Prénom", date: "Lundi 27/10" },
  // Ajoutez d'autres anniversaires
]
```

#### 4. **Événements**
```typescript
events: [
  { name: "Nom de l'événement", date: "Mercredi 29/10", time: "14h00" },
  // Ajoutez d'autres événements
]
```

#### 5. **Messages de sécurité**
```typescript
safetyMessages: {
  title: "Sécurité d'abord !",
  items: [
    "Chaussures de sécurité",
    "Lunettes de protection"
  ],
  footer: "Protégez-vous, protégez les autres"
}
```

#### 6. **Compteur de sécurité**
```typescript
safetyCounter: {
  startDate: "2024-01-01", // Date de début du compteur
  message: "Continuons ainsi ! 🎯"
}
```

#### 7. **Titres des galeries**
```typescript
galleryTitles: {
  gallery1: "Nos Ateliers",
  gallery2: "Notre Équipe",
  gallery3: "Au Quotidien"
}
```

#### 8. **Footer**
```typescript
footer: {
  companyName: "AJR",
  tagline: "Excellence & Engagement"
}
```

---

## 🖼️ Pour changer les photos

Les photos sont dans le dossier `src/assets/`.

**Remplacez simplement les fichiers :**
- `workshop-1.jpg` à `workshop-6.jpg` → Galerie 1
- `workshop-7.jpg` à `workshop-12.jpg` → Galerie 2
- `workshop-13.jpg` à `workshop-18.jpg` → Galerie 3

💡 **Conseil:** Gardez les mêmes noms de fichiers pour ne rien changer dans le code !

---

## ⌨️ Navigation et contrôles

### Mode automatique (par défaut)
Les slides défilent automatiquement selon la durée configurée.

### Navigation manuelle

| Touche | Action |
|--------|--------|
| **→** ou **↓** | Slide suivante |
| **←** ou **↑** | Slide précédente |
| **Espace** ou **P** | Pause / Reprendre |
| **Home** | Retour au début |
| **End** | Aller à la dernière slide |

💡 **Idéal pour tester vos modifications !**

### Indicateur de position
Un petit indicateur en haut à droite montre :
- Le numéro de slide actuelle (ex: 3 / 9)
- Un symbole ⏸ si la lecture est en pause

---

## 🚀 Démarrage en plein écran

1. Ouvrez le site dans votre navigateur
2. Appuyez sur **F11** pour activer le plein écran
3. Laissez tourner en boucle !

---

## 📞 Besoin d'aide ?

Pour toute question ou modification plus complexe, contactez votre développeur avec ce fichier README.

---

## ✅ Checklist de mise à jour

- [ ] J'ai modifié le fichier `src/config/slidesContent.ts`
- [ ] J'ai remplacé les photos si nécessaire
- [ ] J'ai testé avec les flèches clavier
- [ ] J'ai vérifié en plein écran (F11)
- [ ] Tout fonctionne parfaitement !
