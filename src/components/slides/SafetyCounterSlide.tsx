import { slidesConfig } from "@/config/slidesContent";
import { SlideBackground } from "@/components/SlideBackground";

export const SafetyCounterSlide = () => {
  const startDate = new Date(slidesConfig.safetyCounter.startDate);
  const today = new Date();
  const daysSince = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  return <SlideBackground>
    <div className="h-full w-full flex items-center justify-center animate-fade-in">
      <div className="max-w-6xl max-h-[70vh] flex flex-col items-center justify-center px-24 py-12">
        {/* Titre principal */}
        <h1 className="text-5xl font-display text-white font-medium uppercase tracking-wider mb-12">
          Ensemble, restons prudents
        </h1>
        
        {/* Compteur géant avec cercle décoratif */}
        <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center justify-center">
            
          </div>
          <p className="relative text-[16rem] font-display font-bold tabular-nums leading-none" style={{
          background: 'linear-gradient(135deg, #fff 0%, #e0f0ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 6px 30px rgba(255, 255, 255, 0.3))',
          letterSpacing: '-0.02em'
        }}>
            {daysSince}
          </p>
        </div>
        
        {/* Sous-titre */}
        <p className="text-4xl font-display text-white uppercase tracking-wide font-medium">
          Jours sans accident de travail
        </p>
      </div>
    </div>
  </SlideBackground>;
};