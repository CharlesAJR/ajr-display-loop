import { useState } from "react";

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

  const updatePosition = (index: number, axis: "x" | "y", value: "left" | "center" | "right" | "top" | "bottom") => {
    setImagePositions(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [axis]: value };
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
              
              {/* Outil de cadrage interactif - visible au survol */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col gap-2">
                  {/* Contrôles verticaux */}
                  <div className="flex gap-1 justify-center">
                    <button
                      onClick={() => updatePosition(index, "y", "top")}
                      className={`px-2 py-1 text-xs rounded transition-colors ${
                        imagePositions[index].y === "top" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-background/80 text-foreground hover:bg-background"
                      }`}
                    >
                      Haut
                    </button>
                    <button
                      onClick={() => updatePosition(index, "y", "center")}
                      className={`px-2 py-1 text-xs rounded transition-colors ${
                        imagePositions[index].y === "center" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-background/80 text-foreground hover:bg-background"
                      }`}
                    >
                      Centre
                    </button>
                    <button
                      onClick={() => updatePosition(index, "y", "bottom")}
                      className={`px-2 py-1 text-xs rounded transition-colors ${
                        imagePositions[index].y === "bottom" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-background/80 text-foreground hover:bg-background"
                      }`}
                    >
                      Bas
                    </button>
                  </div>
                  
                  {/* Contrôles horizontaux */}
                  <div className="flex gap-1 justify-center">
                    <button
                      onClick={() => updatePosition(index, "x", "left")}
                      className={`px-2 py-1 text-xs rounded transition-colors ${
                        imagePositions[index].x === "left" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-background/80 text-foreground hover:bg-background"
                      }`}
                    >
                      Gauche
                    </button>
                    <button
                      onClick={() => updatePosition(index, "x", "center")}
                      className={`px-2 py-1 text-xs rounded transition-colors ${
                        imagePositions[index].x === "center" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-background/80 text-foreground hover:bg-background"
                      }`}
                    >
                      Centre
                    </button>
                    <button
                      onClick={() => updatePosition(index, "x", "right")}
                      className={`px-2 py-1 text-xs rounded transition-colors ${
                        imagePositions[index].x === "right" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-background/80 text-foreground hover:bg-background"
                      }`}
                    >
                      Droite
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};