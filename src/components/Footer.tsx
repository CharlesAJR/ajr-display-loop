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
    <footer className="fixed bottom-0 left-0 right-0 bg-[hsl(var(--ajr-violet))] text-white py-4 px-8 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={ajrLogo} alt="AJR Logo" className="h-12 w-auto" />
          <p className="text-2xl font-display font-semibold">
            {slidesConfig.footer.companyName}
          </p>
          <span className="text-xl text-white/60">•</span>
          <p className="text-xl text-white/80 italic">
            {slidesConfig.footer.tagline}
          </p>
        </div>
        
        <div className="flex flex-col items-end">
          <p className="text-4xl font-display font-bold tabular-nums">
            {formatTime(currentTime)}
          </p>
          <p className="text-lg text-white/90 capitalize">
            {formatDate(currentTime)}
          </p>
        </div>
      </div>
    </footer>
  );
};
