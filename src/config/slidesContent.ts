// ====================================================================
// CONFIGURATION DU CONTENU - MODIFIER ICI POUR CHANGER LES SLIDES
// ====================================================================

export const slidesConfig = {
  // Durée d'affichage de chaque slide en secondes
  slideDuration: 12,

  // ====================================================================
  // SLIDE 2: CITATIONS INSPIRANTES
  // ====================================================================
  quotes: [
    {
      text: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.",
      author: "Steve Jobs"
    },
    {
      text: "L'excellence n'est pas une compétence, c'est une attitude.",
      author: "Ralph Marston"
    },
    {
      text: "Ensemble, nous sommes plus forts.",
      author: "Proverbe"
    },
    {
      text: "La qualité n'est jamais un accident, c'est toujours le résultat d'un effort intelligent.",
      author: "John Ruskin"
    },
    {
      text: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès.",
      author: "Albert Schweitzer"
    }
  ],

  // ====================================================================
  // SLIDE 4: ANNIVERSAIRES & ÉVÉNEMENTS
  // ====================================================================
  birthdays: [
    { name: "Marie Dupont", date: "Lundi 27/10" },
    { name: "Jean Martin", date: "Jeudi 30/10" },
    // Ajoutez d'autres anniversaires ici...
  ],

  events: [
    { name: "Formation Sécurité", date: "Mercredi 29/10", time: "14h00" },
    { name: "Réunion d'équipe", date: "Vendredi 31/10", time: "10h30" },
    // Ajoutez d'autres événements ici...
  ],

  // ====================================================================
  // SLIDE 6: MESSAGES DE SÉCURITÉ
  // ====================================================================
  safetyMessages: {
    title: "Sécurité d'abord !",
    items: [
      "Chaussures de sécurité",
      "Lunettes de protection"
    ],
    footer: "Protégez-vous, protégez les autres"
  },

  // ====================================================================
  // SLIDE 7: COMPTEUR JOURS SANS ACCIDENT
  // ====================================================================
  safetyCounter: {
    // Date de début du compteur (format: YYYY-MM-DD)
    startDate: "2024-01-01",
    message: "Continuons ainsi ! 🎯"
  },

  // ====================================================================
  // GALERIES PHOTOS: TITRES
  // ====================================================================
  galleryTitles: {
    gallery1: "Nos Ateliers",
    gallery2: "Notre Équipe",
    gallery3: "Au Quotidien"
  },

  // ====================================================================
  // FOOTER
  // ====================================================================
  footer: {
    companyName: "AJR",
    tagline: "Excellence & Engagement"
  }
};

// ====================================================================
// NOTES POUR L'ÉDITION:
// ====================================================================
// 1. Pour modifier les anniversaires/événements: Éditez les listes ci-dessus
// 2. Pour changer la citation affichée: Une citation différente s'affiche chaque jour
// 3. Pour modifier la durée des slides: Changez slideDuration (en secondes)
// 4. Pour changer les images: Remplacez les fichiers dans src/assets/
// 5. Date du compteur: Modifiez startDate pour réinitialiser le compteur
// ====================================================================
