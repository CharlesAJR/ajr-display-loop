import { ReactNode } from "react";

interface DisplaySlideProps {
  children: ReactNode;
  isActive: boolean;
  duration: number;
}

export const DisplaySlide = ({ children, isActive, duration }: DisplaySlideProps) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      {children}
      
      {/* Barre de progression */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 z-50">
          <div 
            className="h-full bg-ajr-green origin-left"
            style={{
              animation: `progress-bar ${duration}ms linear`
            }}
          />
        </div>
      )}
    </div>
  );
};
