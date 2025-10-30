import { Award } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";

export const SafetyCounterSlide = () => {
  const startDate = new Date(slidesConfig.safetyCounter.startDate);
  const today = new Date();
  const daysSince = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="h-full w-full flex flex-col bg-background animate-fade-in px-24 py-16">
      {/* Header avec badge vert */}
      <div className="flex justify-center mb-10">
        <div className="bg-ajr-green rounded-full px-12 py-6 shadow-2xl flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Award className="w-7 h-7 text-ajr-green" strokeWidth={3} />
          </div>
          <h2 className="text-5xl font-display text-white font-bold uppercase tracking-wide">
            Jours sans accident
          </h2>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="flex-1 flex items-center justify-center pb-16">
        <div className="text-center space-y-8">
          {/* Grande carte avec le compteur */}
          <div className="bg-white/50 rounded-2xl p-16 shadow-lg border-2 border-ajr-green/30 hover:border-ajr-green/50 transition-all">
            <div className="flex items-center justify-center gap-8 mb-6">
              <Award className="w-20 h-20 text-ajr-green" strokeWidth={2.5} />
              <p className="text-9xl font-display text-ajr-green font-bold tabular-nums">
                {daysSince}
              </p>
              <Award className="w-20 h-20 text-ajr-green" strokeWidth={2.5} />
            </div>
          </div>
          
          {/* Message de félicitations */}
          <div className="bg-ajr-green/10 rounded-2xl p-8 border-2 border-ajr-green/20">
            <p className="text-4xl font-display text-ajr-green font-semibold">
              {slidesConfig.safetyCounter.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
