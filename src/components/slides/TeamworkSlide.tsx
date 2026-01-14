import { Users, Zap, Lightbulb, MessageCircle, Heart, Shield, HandHelping, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { SlideBackground } from "@/components/SlideBackground";

const TeamworkSlide = () => {
  const coreValues = [
    { icon: MessageCircle, label: 'Communication' },
    { icon: Heart, label: 'Confiance' },
    { icon: Shield, label: 'Respect' },
    { icon: HandHelping, label: 'Entraide' },
    { icon: Target, label: 'Réussir ensemble' },
  ];

  const terrainPoints = [
    'Des gestes coordonnés',
    'Des infos qui circulent vite',
    'Une solidarité qui fait tourner la production',
  ];

  const bureauPoints = [
    'Des idées qui se croisent',
    'Des compétences qui se complètent',
    'Des solutions qui émergent plus vite',
  ];

  return (
    <SlideBackground>
      <div className="h-full w-full flex items-center justify-center px-8 relative">

        <div className="max-w-7xl w-full">
          {/* En-tête avec citation principale */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <Users className="w-6 h-6 text-amber-300" />
              <p className="text-xl italic text-amber-200 font-medium">
                "Seul on va vite, ensemble on va loin"
              </p>
              <Users className="w-6 h-6 text-amber-300" />
            </div>
            <h1 className="text-4xl font-display font-bold text-white mb-1">
              Le travail en équipe
            </h1>
            <h2 className="text-2xl font-display text-white/80">
              Le vrai <span className="font-bold text-white bg-white/20 px-3 py-1 rounded-full border border-white/30">super-pouvoir</span> de l'entreprise
            </h2>
          </motion.div>

          {/* Texte d'introduction */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base text-white/90 text-center max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Que ce soit sur le terrain ou dans les bureaux, c'est ensemble qu'on avance le mieux.
          </motion.p>

          {/* Grille des 5 valeurs principales */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {coreValues.map((value, index) => {
              const colors = [
                { bg: "from-white/20 to-white/10", icon: "text-white", border: "border-white/30" },
                { bg: "from-amber-300/30 to-amber-400/20", icon: "text-amber-200", border: "border-amber-300/40" },
                { bg: "from-emerald-300/30 to-emerald-400/20", icon: "text-emerald-200", border: "border-emerald-300/40" },
                { bg: "from-cyan-300/30 to-cyan-400/20", icon: "text-cyan-200", border: "border-cyan-300/40" },
                { bg: "from-rose-300/30 to-rose-400/20", icon: "text-rose-200", border: "border-rose-300/40" },
              ][index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className={`p-4 rounded-2xl bg-white/10 backdrop-blur-sm border ${colors.border} flex flex-col items-center text-center hover:scale-[1.02] transition-transform`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-3`}>
                    <value.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-tight">
                    {value.label}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          {/* Deux colonnes: Terrain & Bureau */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Terrain */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-amber-300/40"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-300/30 to-amber-400/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-amber-200" />
                </div>
                <h2 className="text-lg font-bold text-white">Sur le terrain</h2>
              </div>
              <ul className="space-y-2">
                {terrainPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/90 text-sm">
                    <span className="w-1.5 h-1.5 bg-amber-300 rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Bureau */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-cyan-300/40"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-300/30 to-cyan-400/20 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-cyan-200" />
                </div>
                <h2 className="text-lg font-bold text-white">Dans les bureaux</h2>
              </div>
              <ul className="space-y-2">
                {bureauPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/90 text-sm">
                    <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Citation de clôture */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-base text-white/70 italic max-w-3xl mx-auto">
              Le travail en équipe, ce n'est pas un concept. <span className="text-white font-semibold">C'est un moteur.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </SlideBackground>
  );
};

export default TeamworkSlide;
