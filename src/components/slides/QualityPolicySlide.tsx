import { slidesConfig } from "@/config/slidesContent";
import { Heart, Target } from "lucide-react";

export const QualityPolicySlide = () => {
  const { qualityPolicy } = slidesConfig;

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-ajr-pink/5 animate-fade-in">
      <div className="max-w-4xl w-full px-8">
        {/* Titre principal */}
        <h1 className="text-4xl font-display font-bold text-center mb-10 text-foreground">
          {qualityPolicy.title}
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {/* Colonne 1: Acrostiche A-J-R */}
          <div className="p-5 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-ajr-pink/20">
            <div className="space-y-2">
              {qualityPolicy.ajrAcrostic.map((item, index) => (
                <div key={index} className="flex items-baseline">
                  <span className="text-3xl font-display font-bold text-ajr-pink">
                    {item.letter}
                  </span>
                  <span className="text-base text-foreground">
                    {item.word}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne 2: Valeurs humaines */}
          <div className="p-5 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-ajr-pink/20">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 text-ajr-pink" />
              <h3 className="text-sm font-semibold text-ajr-pink uppercase tracking-wide">
                {qualityPolicy.humanValues.title}
              </h3>
            </div>
            <ul className="space-y-1.5">
              {qualityPolicy.humanValues.items.map((value, index) => (
                <li key={index} className="text-sm text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ajr-pink/60"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Stratégies & Objectifs */}
          <div className="p-5 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-ajr-pink/20">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-ajr-pink" />
              <h3 className="text-sm font-semibold text-ajr-pink uppercase tracking-wide">
                {qualityPolicy.objectives.title}
              </h3>
            </div>
            <ul className="space-y-1.5">
              {qualityPolicy.objectives.items.map((objective, index) => (
                <li key={index} className="text-sm text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ajr-pink/60"></span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications en bas */}
        <div className="flex justify-center gap-3 mt-6">
          {qualityPolicy.certifications.map((cert, index) => (
            <span 
              key={index}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-ajr-pink/10 to-ajr-violet/10 border border-ajr-pink/20 text-foreground font-medium text-sm backdrop-blur-sm"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
