import { Users, Zap, Lightbulb, MessageCircle, Heart, Shield, HandHelping, Target } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div className="h-full w-full flex items-center justify-center px-8 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-accent"
              style={{
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* En-tête avec citation principale */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Users className="w-6 h-6 text-accent" />
            <p className="text-xl italic text-accent font-medium">
              "Seul on va vite, ensemble on va loin"
            </p>
            <Users className="w-6 h-6 text-accent" />
          </div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-1">
            Le travail en équipe
          </h1>
          <h2 className="text-2xl font-display text-foreground/70">
            Le vrai <span className="font-bold text-accent-foreground bg-accent px-3 py-1 rounded-full">super-pouvoir</span> de l'entreprise
          </h2>
        </motion.div>

        {/* Texte d'introduction */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base text-foreground/80 text-center max-w-4xl mx-auto mb-8 leading-relaxed"
        >
          Que ce soit sur le terrain ou dans les bureaux, c'est ensemble qu'on avance le mieux.
        </motion.p>

        {/* Grille des 5 valeurs principales */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {coreValues.map((value, index) => {
            const colors = [
              { bg: "from-blue-500/20 to-blue-600/10", icon: "text-blue-600", border: "border-blue-200" },
              { bg: "from-orange-500/20 to-orange-600/10", icon: "text-orange-600", border: "border-orange-200" },
              { bg: "from-accent/20 to-accent/10", icon: "text-accent", border: "border-accent/20" },
              { bg: "from-emerald-500/20 to-emerald-600/10", icon: "text-emerald-600", border: "border-emerald-200" },
              { bg: "from-rose-500/20 to-rose-600/10", icon: "text-rose-600", border: "border-rose-200" },
            ][index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className={`p-4 rounded-2xl bg-white/50 backdrop-blur-sm border ${colors.border} flex flex-col items-center text-center hover:scale-[1.02] transition-transform`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-3`}>
                  <value.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-tight">
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
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-orange-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-lg font-bold text-foreground">Sur le terrain</h2>
            </div>
            <ul className="space-y-2">
              {terrainPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground/80 text-sm">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
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
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-blue-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-lg font-bold text-foreground">Dans les bureaux</h2>
            </div>
            <ul className="space-y-2">
              {bureauPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground/80 text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
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
          <p className="text-base text-foreground/60 italic max-w-3xl mx-auto">
            Le travail en équipe, ce n'est pas un concept. <span className="text-foreground font-semibold">C'est un moteur.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamworkSlide;
