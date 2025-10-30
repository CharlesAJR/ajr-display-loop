import { Award } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";

export const SafetyCounterSlide = () => {
  const startDate = new Date(slidesConfig.safetyCounter.startDate);
  const today = new Date();
  const daysSince = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-ajr-green-pale animate-fade-in px-32">
      <div className="text-center">
        <Award className="w-56 h-56 mx-auto mb-16 text-ajr-green animate-pulse-soft" />
        
        <div className="bg-muted/30 backdrop-blur-md rounded-3xl p-20 border border-border/50 shadow-2xl inline-block">
          <p className="text-display-1 font-display text-ajr-green mb-8 tabular-nums">
            {daysSince}
          </p>
          <p className="text-8xl font-display text-foreground uppercase tracking-wider">
            jours sans accident
          </p>
        </div>
        
        <p className="text-7xl font-display text-ajr-green mt-16 uppercase">
          {slidesConfig.safetyCounter.message}
        </p>
      </div>
    </div>
  );
};
