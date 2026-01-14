import { slidesConfig } from "@/config/slidesContent";
import { Users, Factory, Handshake, Settings, Rocket, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SlideBackground } from "@/components/SlideBackground";

const iconMap = {
  users: Users,
  factory: Factory,
  handshake: Handshake,
  settings: Settings,
  rocket: Rocket,
};

// Couleurs variées pour les objectifs (adaptées pour fond bleu)
const objectiveColors = [
  { bg: "from-white/20 to-white/10", icon: "text-white", border: "border-white/30" },
  { bg: "from-amber-300/30 to-amber-400/20", icon: "text-amber-200", border: "border-amber-300/40" },
  { bg: "from-emerald-300/30 to-emerald-400/20", icon: "text-emerald-200", border: "border-emerald-300/40" },
  { bg: "from-cyan-300/30 to-cyan-400/20", icon: "text-cyan-200", border: "border-cyan-300/40" },
  { bg: "from-rose-300/30 to-rose-400/20", icon: "text-rose-200", border: "border-rose-300/40" },
];

export const QualityPolicySlide = () => {
  const { qualityPolicy } = slidesConfig;

  return (
    <SlideBackground>
      <div className="h-full w-full flex items-center justify-center px-8">
      <div className="max-w-7xl w-full">
        {/* En-tête avec citation principale */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Award className="w-6 h-6 text-amber-300" />
            <p className="text-xl italic text-amber-200 font-medium">
              "{qualityPolicy.mainQuote}"
            </p>
            <Award className="w-6 h-6 text-amber-300" />
          </div>
          <h1 className="text-4xl font-display font-bold text-white mb-1">
            {qualityPolicy.title}
          </h1>
          <h2 className="text-2xl font-display text-white/80">
            {qualityPolicy.subtitle}
          </h2>
        </motion.div>

        {/* Texte d'introduction */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base text-white/90 text-center max-w-4xl mx-auto mb-8 leading-relaxed"
        >
          {qualityPolicy.introText}
        </motion.p>

        {/* Grille des 5 objectifs */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {qualityPolicy.objectives.map((objective, index) => {
            const IconComponent = iconMap[objective.icon as keyof typeof iconMap];
            const colors = objectiveColors[index % objectiveColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className={`p-4 rounded-2xl bg-white/10 backdrop-blur-sm border ${colors.border} flex flex-col items-center text-center hover:scale-[1.02] transition-transform`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-3`}>
                  <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5 leading-tight">
                  {objective.title}
                </h3>
                <p className="text-xs text-white/80 leading-snug">
                  {objective.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications et texte de clôture */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center gap-4 mb-4">
            {qualityPolicy.certifications.map((cert, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white font-medium text-sm backdrop-blur-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                {cert}
              </span>
            ))}
          </div>
          <p className="text-base text-white/70 italic max-w-3xl mx-auto">
            {qualityPolicy.closingText}
          </p>
        </motion.div>
      </div>
      </div>
    </SlideBackground>
  );
};
