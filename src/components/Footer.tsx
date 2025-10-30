import { useEffect, useState } from "react";
import { slidesConfig } from "@/config/slidesContent";
import ajrLogo from "@/assets/ajr-logo.png";

export const Footer = () => {
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
      second: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[hsl(265,50%,35%)] to-[hsl(270,55%,25%)] text-white py-6 px-12 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src={ajrLogo} alt="AJR Logo" className="h-16 w-auto" />
          <p className="text-5xl font-display font-bold tracking-tight">
            {slidesConfig.footer.companyName}
          </p>
          <span className="text-4xl text-white/70 mx-2">•</span>
          <p className="text-4xl text-white/95 italic font-light tracking-wide">
            {slidesConfig.footer.tagline}
          </p>
        </div>
        
        <div className="flex flex-col items-end gap-1">
          <p className="text-[5.5rem] font-display font-bold tabular-nums leading-none">
            {formatTime(currentTime)}
          </p>
          <p className="text-3xl text-white/95 capitalize font-light tracking-wide">
            {formatDate(currentTime)}
          </p>
        </div>
      </div>
    </footer>
  );
};
