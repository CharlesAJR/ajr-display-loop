import { slidesConfig } from "@/config/slidesContent";
import { Target, Users, Lightbulb, Leaf, TrendingUp, Award } from "lucide-react";

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
        <h1 className="text-5xl font-display font-bold text-center text-ajr-pink mb-2">
          {qualityPolicy.title}
        </h1>
        <p className="text-2xl text-center text-foreground/80 mb-8">
          {qualityPolicy.tagline}
        </p>

        <div className="grid grid-cols-2 gap-8">
          {/* Colonne gauche: Piliers stratégiques */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-ajr-pink mb-4 flex items-center gap-2">
              <Award className="w-6 h-6" />
              Nos 5 Piliers Stratégiques
            </h2>
            <div className="space-y-3">
              {qualityPolicy.pillars.map((pillar, index) => {
                const IconComponent = pillarIcons[pillar.icon as keyof typeof pillarIcons] || Target;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border"
                  >
                    <div className="p-2 rounded-lg bg-ajr-pink text-white shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Colonne droite: A-J-R + Certifications */}
          <div className="space-y-6">
            {/* Acrostiche A-J-R */}
            <div className="p-6 rounded-2xl bg-ajr-pink/20 border border-ajr-pink/40">
              <h2 className="text-2xl font-semibold mb-4 text-ajr-pink">
                Notre Identité
              </h2>
              <div className="space-y-3">
                {qualityPolicy.ajrAcrostic.map((item, index) => (
                  <div key={index} className="flex items-baseline gap-3">
                    <span className="text-4xl font-display font-bold text-ajr-pink">
                      {item.letter}
                    </span>
                    <span className="text-xl text-foreground">
                      {item.word}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-muted border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Nos Certifications
              </h2>
              <div className="flex flex-wrap gap-4">
                {qualityPolicy.certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 rounded-full bg-ajr-pink/20 border border-ajr-pink/40 text-foreground font-medium"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Message final */}
            <div className="text-center p-4 rounded-xl bg-ajr-pink/10 border border-ajr-pink/30">
              <p className="text-lg italic text-muted-foreground">
                "{qualityPolicy.commitment}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
