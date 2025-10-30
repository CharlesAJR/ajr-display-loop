import { useEffect, useState } from "react";
import { slidesConfig } from "@/config/slidesContent";

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
    <footer className="fixed bottom-0 left-0 right-0 bg-ajr-violet text-white py-6 px-16 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <p className="text-4xl font-display">
            © {slidesConfig.footer.companyName} {currentTime.getFullYear()}
          </p>
          <span className="text-3xl text-white/60">•</span>
          <p className="text-3xl text-white/80 italic">
            {slidesConfig.footer.tagline}
          </p>
        </div>
        
        <div className="flex flex-col items-end">
          <p className="text-6xl font-display font-bold tabular-nums mb-1">
            {formatTime(currentTime)}
          </p>
          <p className="text-3xl text-white/80 capitalize">
            {formatDate(currentTime)}
          </p>
        </div>
      </div>
    </footer>
  );
};
