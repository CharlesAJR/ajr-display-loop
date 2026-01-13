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

      <div className="relative z-10 max-w-6xl w-full">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2"
        >
          <div className="inline-flex items-center gap-3 mb-1">
            <Users className="w-10 h-10 text-accent" strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1 leading-tight">
            Le travail en équipe
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-light">
            Le vrai <span className="font-bold text-accent-foreground bg-accent px-2 py-0.5 rounded-full text-base">super-pouvoir</span> de l'entreprise
          </p>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-base text-foreground/60 italic mb-3 max-w-3xl mx-auto"
        >
          "Seul on va vite, ensemble on va loin"
        </motion.p>

        {/* Two columns: Terrain & Bureau */}
        <div className="grid md:grid-cols-2 gap-4 mb-4 max-w-6xl mx-auto w-full">
          {/* Terrain */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-foreground/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-foreground">Sur le terrain</h2>
            </div>
            <ul className="space-y-2">
              {terrainPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-foreground/80 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Bureau */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-foreground/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-foreground">Dans les bureaux</h2>
            </div>
            <ul className="space-y-2">
              {bureauPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 text-foreground/80 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-5xl mx-auto w-full"
        >
          <h3 className="text-center text-base text-foreground/60 mb-2">Au cœur de tout ça, les mêmes qualités</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-1.5 bg-accent/10 backdrop-blur-sm px-3 py-1 rounded-full border border-accent/20"
              >
                <value.icon className="w-3.5 h-3.5 text-accent" />
                <span className="text-foreground font-medium text-xs">{value.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center text-sm text-foreground/60 mt-3 max-w-4xl mx-auto"
        >
          Le travail en équipe, ce n'est pas un concept. <span className="text-foreground font-semibold">C'est un moteur.</span>
        </motion.p>
      </div>
    </div>
  );
};

export default TeamworkSlide;
