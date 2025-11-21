import { useState } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

interface GallerySlideProps {
  images: string[];
  title?: string;
}

type Position = {
  x: "left" | "center" | "right";
  y: "top" | "center" | "bottom";
};

export const GallerySlide = ({
  images,
  title
}: GallerySlideProps) => {
  const [imagePositions, setImagePositions] = useState<Position[]>(
    images.map(() => ({ x: "center", y: "center" }))
  );

  const getObjectPosition = (position: Position) => {
    const xMap = { left: "0%", center: "50%", right: "100%" };
    const yMap = { top: "0%", center: "50%", bottom: "100%" };
    return `${xMap[position.x]} ${yMap[position.y]}`;
  };

  const movePosition = (index: number, direction: "up" | "down" | "left" | "right") => {
    setImagePositions(prev => {
      const updated = [...prev];
      const current = updated[index];
      
      if (direction === "up") {
        const yOptions: ("top" | "center" | "bottom")[] = ["bottom", "center", "top"];
        const currentIndex = yOptions.indexOf(current.y);
        if (currentIndex < yOptions.length - 1) {
          updated[index] = { ...current, y: yOptions[currentIndex + 1] };
        }
      } else if (direction === "down") {
        const yOptions: ("top" | "center" | "bottom")[] = ["top", "center", "bottom"];
        const currentIndex = yOptions.indexOf(current.y);
        if (currentIndex < yOptions.length - 1) {
          updated[index] = { ...current, y: yOptions[currentIndex + 1] };
        }
      } else if (direction === "left") {
        const xOptions: ("left" | "center" | "right")[] = ["right", "center", "left"];
        const currentIndex = xOptions.indexOf(current.x);
        if (currentIndex < xOptions.length - 1) {
          updated[index] = { ...current, x: xOptions[currentIndex + 1] };
        }
      } else if (direction === "right") {
        const xOptions: ("left" | "center" | "right")[] = ["left", "center", "right"];
        const currentIndex = xOptions.indexOf(current.x);
        if (currentIndex < xOptions.length - 1) {
          updated[index] = { ...current, x: xOptions[currentIndex + 1] };
        }
      }
      
      return updated;
    });
  };

  return <div className="h-full w-full flex items-center justify-center bg-background animate-fade-in">
      <div className="max-w-7xl max-h-[80vh] flex flex-col items-center px-12 py-8 gap-0 shadow-none rounded-none">
        {title && <h2 className="text-5xl font-display font-bold text-foreground mb-6">
            {title}
          </h2>}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 w-full">
          {images.map((image, index) => <div key={index} className="relative overflow-hidden rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] group h-48">
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