import { slidesConfig } from "@/config/slidesContent";
import { Heart, Target } from "lucide-react";

export const QualityPolicySlide = () => {
  const { qualityPolicy } = slidesConfig;

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-ajr-pink/5 animate-fade-in">
      <div className="max-w-6xl w-full px-12">
        {/* Titre principal */}
        <h1 className="text-6xl font-display font-bold text-center mb-14 text-foreground">
          {qualityPolicy.title}
        </h1>

        <div className="grid grid-cols-3 gap-10">
          {/* Colonne 1: Acrostiche A-J-R */}
          <div className="p-7 rounded-2xl bg-white/50 backdrop-blur-sm border border-foreground/10">
            <div className="space-y-4">
              {qualityPolicy.ajrAcrostic.map((item, index) => (
                <div key={index} className="flex items-baseline">
                  <span className="text-5xl font-display font-bold text-ajr-pink">
                    {item.letter}
                  </span>
                  <span className="text-xl text-foreground">
                    {item.word}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne 2: Valeurs humaines */}
          <div className="p-7 rounded-2xl bg-white/50 backdrop-blur-sm border border-foreground/10">
            <div className="flex items-center gap-2 mb-5">
              <Heart className="w-6 h-6 text-ajr-pink" />
              <h3 className="text-lg font-semibold text-ajr-pink uppercase tracking-wide">
                {qualityPolicy.humanValues.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {qualityPolicy.humanValues.items.map((value, index) => (
                <li key={index} className="text-lg text-foreground flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-ajr-pink/60"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Stratégies & Objectifs */}
          <div className="p-7 rounded-2xl bg-white/50 backdrop-blur-sm border border-foreground/10">
            <div className="flex items-center gap-2 mb-5">
              <Target className="w-6 h-6 text-ajr-pink" />
              <h3 className="text-lg font-semibold text-ajr-pink uppercase tracking-wide">
                {qualityPolicy.objectives.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {qualityPolicy.objectives.items.map((objective, index) => (
                <li key={index} className="text-lg text-foreground flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-ajr-pink/60"></span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications en bas */}
        <div className="flex justify-center gap-5 mt-10">
          {qualityPolicy.certifications.map((cert, index) => (
            <span 
              key={index}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-ajr-pink/10 to-ajr-violet/10 border border-ajr-pink/20 text-foreground font-medium text-base backdrop-blur-sm"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
