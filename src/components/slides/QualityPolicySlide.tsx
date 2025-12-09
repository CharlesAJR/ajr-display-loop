import { slidesConfig } from "@/config/slidesContent";
import { Users, Factory, Handshake, Settings, Rocket } from "lucide-react";

const iconMap = {
  users: Users,
  factory: Factory,
  handshake: Handshake,
  settings: Settings,
  rocket: Rocket,
};

export const QualityPolicySlide = () => {
  const { qualityPolicy } = slidesConfig;

  return (
    <div className="h-full w-full flex items-center justify-center animate-fade-in px-8">
      <div className="max-w-7xl w-full">
        {/* En-tête avec citation principale */}
        <div className="text-center mb-6">
          <p className="text-xl italic text-ajr-pink font-medium mb-3">
            "{qualityPolicy.mainQuote}"
          </p>
          <h1 className="text-4xl font-display font-bold text-foreground mb-1">
            {qualityPolicy.title}
          </h1>
          <h2 className="text-2xl font-display text-ajr-pink">
            {qualityPolicy.subtitle}
          </h2>
        </div>

        {/* Texte d'introduction */}
        <p className="text-base text-foreground/80 text-center max-w-4xl mx-auto mb-8 leading-relaxed">
          {qualityPolicy.introText}
        </p>

        {/* Grille des 5 objectifs */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {qualityPolicy.objectives.map((objective, index) => {
            const IconComponent = iconMap[objective.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-foreground/10 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ajr-pink/20 to-ajr-violet/20 flex items-center justify-center mb-3">
                  <IconComponent className="w-6 h-6 text-ajr-pink" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5 leading-tight">
                  {objective.title}
                </h3>
                <p className="text-xs text-foreground/70 leading-snug">
                  {objective.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications et texte de clôture */}
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-4">
            {qualityPolicy.certifications.map((cert, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-ajr-pink/10 to-ajr-violet/10 border border-ajr-pink/20 text-foreground font-medium text-sm backdrop-blur-sm"
              >
                {cert}
              </span>
            ))}
          </div>
          <p className="text-base text-foreground/70 italic max-w-3xl mx-auto">
            {qualityPolicy.closingText}
          </p>
        </div>
      </div>
    </div>
  );
};
