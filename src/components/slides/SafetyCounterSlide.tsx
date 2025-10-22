import { Award } from "lucide-react";

export const SafetyCounterSlide = () => {
  // Calculate days since a fixed start date (example: January 1, 2024)
  const startDate = new Date("2024-01-01");
  const today = new Date();
  const daysSince = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-ajr-green-pale animate-fade-in px-32">
      <div className="text-center">
        <Award className="w-56 h-56 mx-auto mb-16 text-ajr-green animate-pulse-soft" />
        
        <div className="bg-background rounded-3xl p-20 shadow-2xl inline-block">
          <p className="text-display-1 font-display text-ajr-green mb-8 tabular-nums">
            {daysSince}
          </p>
          <p className="text-8xl font-display text-foreground uppercase tracking-wider">
            jours sans accident
          </p>
        </div>
        
        <p className="text-7xl font-display text-ajr-green mt-16 uppercase">
          Continuons ainsi ! 🎯
        </p>
      </div>
    </div>
  );
};
