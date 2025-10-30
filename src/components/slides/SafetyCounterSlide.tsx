import { slidesConfig } from "@/config/slidesContent";
export const SafetyCounterSlide = () => {
  const startDate = new Date(slidesConfig.safetyCounter.startDate);
  const today = new Date();
  const daysSince = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  return <div className="h-full w-full flex flex-col items-center justify-center bg-background animate-fade-in px-24 py-12">
      {/* Titre principal */}
      <h1 className="text-6xl font-display text-foreground font-medium uppercase tracking-wider mb-16">
        Ensemble, restons prudents
      </h1>
      
      {/* Compteur géant avec cercle décoratif */}
      <div className="relative mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          
        </div>
        <p className="relative text-[20rem] font-display font-bold tabular-nums leading-none" style={{
        background: 'linear-gradient(135deg, hsl(0, 84%, 60%) 0%, hsl(0, 70%, 50%) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'drop-shadow(0 6px 20px rgba(239, 68, 68, 0.2))',
        letterSpacing: '-0.02em'
      }}>
          {daysSince}
        </p>
      </div>
      
      {/* Sous-titre */}
      <p className="text-5xl font-display text-foreground uppercase tracking-wide font-medium">
        Jours sans accident de travail
      </p>
    </div>;
};