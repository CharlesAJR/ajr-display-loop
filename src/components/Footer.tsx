import { useEffect, useState } from "react";
import ajrLogoWhite from "@/assets/ajr-logo-white.png";

interface FooterProps {
  currentSlide?: number;
  totalSlides?: number;
}

export const Footer = ({ currentSlide, totalSlides }: FooterProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  };
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  return <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[hsl(265,50%,35%)] to-[hsl(270,55%,25%)] text-white py-5 px-10 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img src={ajrLogoWhite} alt="Atelier Jean Regniers" className="h-28 w-auto" />
        </div>
        
        {/* Indicateur de slide */}
        {currentSlide !== undefined && totalSlides !== undefined && (
          <div className="text-3xl text-white/80 font-light">
            {currentSlide} / {totalSlides}
          </div>
        )}
        
        <div className="flex flex-col items-end gap-1">
          <p className="text-7xl font-display font-bold tabular-nums leading-none">
            {formatTime(currentTime)}
          </p>
          <p className="text-2xl text-white/95 capitalize font-light tracking-wide">
            {formatDate(currentTime)}
          </p>
        </div>
      </div>
    </footer>;
};