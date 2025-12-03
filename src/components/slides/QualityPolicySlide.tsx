import { slidesConfig } from "@/config/slidesContent";
import { Target, Users, Lightbulb, Leaf, TrendingUp } from "lucide-react";

const pillarIcons = {
  satisfaction: Users,
  innovation: Lightbulb,
  environnement: Leaf,
  performance: TrendingUp,
  amelioration: Target,
};

export const QualityPolicySlide = () => {
  const { qualityPolicy } = slidesConfig;

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-ajr-pink/5 animate-fade-in">
      <div className="max-w-5xl w-full px-12">
        {/* Titre principal */}
        <h1 className="text-6xl font-display font-bold text-center mb-16 bg-gradient-to-r from-ajr-pink to-ajr-violet bg-clip-text text-transparent">
          {qualityPolicy.title}
        </h1>

        <div className="flex gap-16 items-start">
          {/* Colonne gauche: Piliers */}
          <div className="flex-1 space-y-4">
            {qualityPolicy.pillars.map((pillar, index) => {
              const IconComponent = pillarIcons[pillar.icon as keyof typeof pillarIcons] || Target;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-ajr-pink/20 hover:border-ajr-pink/40 transition-all duration-300 hover:shadow-lg hover:shadow-ajr-pink/10"
                >
                  <div className="p-3 rounded-xl bg-ajr-pink/10 text-ajr-pink">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-medium text-foreground">
                    {pillar.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Colonne droite: A-J-R + Certifications */}
          <div className="w-80 space-y-10">
            {/* Acrostiche A-J-R */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-ajr-pink to-ajr-violet text-white shadow-2xl shadow-ajr-pink/20">
              <div className="space-y-4">
                {qualityPolicy.ajrAcrostic.map((item, index) => (
                  <div key={index} className="flex items-baseline gap-4">
                    <span className="text-5xl font-display font-bold text-white/90">
                      {item.letter}
                    </span>
                    <span className="text-xl text-white/80">
                      {item.word}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 justify-center">
              {qualityPolicy.certifications.map((cert, index) => (
                <span 
                  key={index}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-ajr-pink/10 to-ajr-violet/10 border border-ajr-pink/20 text-foreground font-medium text-sm backdrop-blur-sm"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
