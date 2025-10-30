import { slidesConfig } from "@/config/slidesContent";

export const SafetyCounterSlide = () => {
  const startDate = new Date(slidesConfig.safetyCounter.startDate);
  const today = new Date();
  const daysSince = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-background animate-fade-in px-24 py-12">
      {/* Titre principal */}
      <h1 className="text-6xl font-display text-foreground font-normal uppercase tracking-wider mb-16">
        Ensemble, restons prudents
      </h1>
      
      {/* Compteur géant */}
      <div className="relative mb-12">
        <p 
          className="text-[20rem] font-display font-bold tabular-nums leading-none"
          style={{
            color: 'hsl(0, 84%, 60%)',
            textShadow: '0 8px 16px rgba(239, 68, 68, 0.3)',
            letterSpacing: '-0.02em'
          }}
        >
          {daysSince}
        </p>
      </div>
      
      {/* Sous-titre */}
      <p className="text-5xl font-display text-foreground uppercase tracking-wide">
        Jours sans accident de travail
      </p>
    </div>
  );
};
