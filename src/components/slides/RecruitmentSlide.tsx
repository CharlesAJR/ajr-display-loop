import { motion } from "framer-motion";
import { SlideBackground } from "@/components/SlideBackground";
import { Briefcase, UserCheck, Sparkles, CalendarDays, MessageCircle } from "lucide-react";

export const RecruitmentSlide = () => {
  const missions = [
    "Tronçonnage de rouleaux plastiques",
    "Contrôle qualité des pièces",
    "Lecture des consignes de production",
    "Réglage et préparation des machines",
    "Respect des consignes de sécurité",
  ];

  const competences = [
    "Travail en équipe",
    "Motivation & implication",
    "Rigueur et autonomie",
    "Compréhension des consignes",
    "Utilisation basique de l'informatique",
  ];

  const propositions = ["Formation interne", "Accompagnement au poste", "Possibilité d'évolution"];

  return (
    <SlideBackground>
      <div className="h-full w-full flex items-center justify-center px-12 py-4">
        <div className="max-w-7xl w-full">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h1 className="text-5xl font-display font-bold text-white uppercase tracking-wider mb-3">
              Recrutement interne
            </h1>
            <div className="inline-block px-5 py-2 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm">
              <p className="text-xl font-display text-white/95">
                Tronçonneur / Opérateur de tronçonnage plastique
              </p>
            </div>
          </motion.div>

          {/* Deux colonnes principales */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Missions principales */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-300/30 to-cyan-400/20 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-cyan-200" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">
                  Missions principales
                </h2>
              </div>
              <ul className="space-y-3">
                {missions.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.07, duration: 0.4 }}
                    className="flex items-center gap-3 text-xl text-white/90"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Compétences attendues */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300/30 to-amber-400/20 flex items-center justify-center">
                  <UserCheck className="w-7 h-7 text-amber-200" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">
                  Compétences attendues
                </h2>
              </div>
              <ul className="space-y-3">
                {competences.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.07, duration: 0.4 }}
                    className="flex items-center gap-3 text-xl text-white/90"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bloc discret "Nous proposons" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-white/5 border border-white/15 rounded-xl px-6 py-4 mb-5 flex items-center justify-center gap-6 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-200" />
              <span className="text-base uppercase tracking-wider text-white/70 font-medium">
                Nous proposons
              </span>
            </div>
            {propositions.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-lg text-white/90">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                {item}
              </div>
            ))}
          </motion.div>

          {/* Informations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex justify-center gap-6 flex-wrap"
          >
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm">
              <CalendarDays className="w-8 h-8 text-cyan-200" />
              <div>
                <p className="text-sm text-white/70 uppercase tracking-wide font-medium">Date limite</p>
                <p className="text-2xl font-display font-bold text-white">Candidatures avant le 30/05/26</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm">
              <MessageCircle className="w-8 h-8 text-rose-200" />
              <div>
                <p className="text-sm text-white/70 uppercase tracking-wide font-medium">Contact</p>
                <p className="text-2xl font-display font-bold text-white">Votre responsable ou le service RH</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideBackground>
  );
};
