import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

interface GallerySlideProps {
  images: string[];
  title?: string;
  showTitle?: boolean;
}

type Position = {
  x: number; // pourcentage de 0 à 100
  y: number; // pourcentage de 0 à 100
};

const getStorageKey = (title?: string) => {
  return `gallery-positions-${title || 'default'}`;
};

export const GallerySlide = ({
  images,
  title,
  showTitle = true
}: GallerySlideProps) => {
  const [imagePositions, setImagePositions] = useState<Position[]>(() => {
    // Charger les positions depuis localStorage
    const storageKey = getStorageKey(title);
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return images.map(() => ({ x: 50, y: 50 }));
      }
    }
    return images.map(() => ({ x: 50, y: 50 }));
  });

  // Sauvegarder les positions dans localStorage à chaque changement
  useEffect(() => {
    const storageKey = getStorageKey(title);
    localStorage.setItem(storageKey, JSON.stringify(imagePositions));
  }, [imagePositions, title]);

  const getObjectPosition = (position: Position) => {
    return `${position.x}% ${position.y}%`;
  };

  const movePosition = (index: number, direction: "up" | "down" | "left" | "right") => {
    const step = 5; // déplacement de 5% à chaque clic
    
    setImagePositions(prev => {
      const updated = [...prev];
      const current = updated[index];
      
      if (direction === "up") {
        updated[index] = { ...current, y: Math.max(0, current.y - step) };
      } else if (direction === "down") {
        updated[index] = { ...current, y: Math.min(100, current.y + step) };
      } else if (direction === "left") {
        updated[index] = { ...current, x: Math.max(0, current.x - step) };
      } else if (direction === "right") {
        updated[index] = { ...current, x: Math.min(100, current.x + step) };
      }
      
      return updated;
    });
  };

  return <div className="h-full w-full flex items-center justify-center animate-fade-in">
      <div className="max-w-7xl max-h-[80vh] flex flex-col items-center px-12 py-8 gap-0 shadow-none rounded-none">
        {title && showTitle && <h2 className="text-5xl font-display font-bold text-foreground mb-6">
            {title}
          </h2>}
        <div className="grid grid-cols-3 grid-rows-2 gap-3" style={{ width: '1100px' }}>
          {images.map((image, index) => <div key={index} className="relative overflow-hidden rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] group aspect-video">
              <img 
                src={image} 
                alt={`Photo ${index + 1}`} 
                className="w-full h-full object-cover transition-all duration-300"
                style={{ objectPosition: getObjectPosition(imagePositions[index]) }}
              />
              
              {/* Outil de cadrage interactif avec flèches - visible au survol */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="grid grid-cols-3 grid-rows-3 gap-1">
                  {/* Rangée du haut */}
                  <div className="col-start-2">
                    <button
                      onClick={() => movePosition(index, "up")}
                      className="w-10 h-10 rounded-lg bg-background/90 hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                      title="Déplacer vers le haut"
                    >
                      <ArrowUp size={20} />
                    </button>
                  </div>
                  
                  {/* Rangée du milieu */}
                  <button
                    onClick={() => movePosition(index, "left")}
                    className="w-10 h-10 rounded-lg bg-background/90 hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                    title="Déplacer vers la gauche"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                  </div>
                  <button
                    onClick={() => movePosition(index, "right")}
                    className="w-10 h-10 rounded-lg bg-background/90 hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                    title="Déplacer vers la droite"
                  >
                    <ArrowRight size={20} />
                  </button>
                  
                  {/* Rangée du bas */}
                  <div className="col-start-2">
                    <button
                      onClick={() => movePosition(index, "down")}
                      className="w-10 h-10 rounded-lg bg-background/90 hover:bg-primary hover:text-primary-foreground text-foreground flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
                      title="Déplacer vers le bas"
                    >
                      <ArrowDown size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};