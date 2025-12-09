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
        <div className="text-center mb-8">
          <p className="text-2xl italic text-ajr-pink font-medium mb-4">
            "{qualityPolicy.mainQuote}"
          </p>
          <h1 className="text-5xl font-display font-bold text-foreground mb-2">
            {qualityPolicy.title}
          </h1>
          <h2 className="text-3xl font-display text-ajr-pink">
            {qualityPolicy.subtitle}
          </h2>
        </div>

        {/* Texte d'introduction */}
        <p className="text-lg text-foreground/80 text-center max-w-4xl mx-auto mb-10 leading-relaxed">
          {qualityPolicy.introText}
        </p>

        {/* Grille des 5 objectifs sur 2 lignes */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {qualityPolicy.objectives.map((objective, index) => {
            const IconComponent = iconMap[objective.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-foreground/10 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-ajr-pink/20 to-ajr-violet/20 flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-ajr-pink" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 leading-tight">
                  {objective.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-snug">
                  {objective.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications et texte de clôture */}
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-6">
            {qualityPolicy.certifications.map((cert, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-ajr-pink/10 to-ajr-violet/10 border border-ajr-pink/20 text-foreground font-medium text-base backdrop-blur-sm"
              >
                {cert}
              </span>
            ))}
          </div>
          <p className="text-lg text-foreground/70 italic max-w-3xl mx-auto">
            {qualityPolicy.closingText}
          </p>
        </div>
      </div>
    </div>
  );
};
