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
    <div className="h-full w-full flex items-center justify-center bg-background animate-fade-in">
      <div className="max-w-6xl w-full px-12 py-8">
        {/* Titre principal */}
        <h1 className="text-5xl font-display font-bold text-center text-ajr-pink mb-10">
          {qualityPolicy.title}
        </h1>

        <div className="grid grid-cols-3 gap-8">
          {/* Colonne 1: Piliers stratégiques */}
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {qualityPolicy.pillars.map((pillar, index) => {
                const IconComponent = pillarIcons[pillar.icon as keyof typeof pillarIcons] || Target;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50"
                  >
                    <div className="p-2 rounded-lg bg-ajr-pink text-white shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-foreground">
                      {pillar.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Colonne 2: A-J-R + Certifications */}
          <div className="space-y-6">
            {/* Acrostiche A-J-R */}
            <div className="space-y-2">
              {qualityPolicy.ajrAcrostic.map((item, index) => (
                <div key={index} className="flex items-baseline gap-3">
                  <span className="text-3xl font-display font-bold text-ajr-pink">
                    {item.letter}
                  </span>
                  <span className="text-lg text-foreground">
                    {item.word}
                  </span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {qualityPolicy.certifications.map((cert, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full bg-ajr-pink/15 text-ajr-pink text-sm font-medium"
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
