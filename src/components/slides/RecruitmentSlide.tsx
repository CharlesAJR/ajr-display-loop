import { motion } from "framer-motion";
import { SlideBackground } from "@/components/SlideBackground";
import { UserCheck, Users, ClipboardCheck, GraduationCap, ArrowUpCircle, CalendarDays, MessageCircle } from "lucide-react";

export const RecruitmentSlide = () => {
  return (
    <SlideBackground>
      <div className="h-full w-full flex items-center justify-center px-12">
        <div className="max-w-6xl w-full">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-6xl font-display font-bold text-white uppercase tracking-wider mb-4">
              Recrutement interne
            </h1>
            <div className="inline-block px-6 py-3 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm">
              <p className="text-2xl font-display text-white/95">
                Tronçonneur / Opérateur de tronçonnage plastique
              </p>
            </div>
          </motion.div>

          {/* Deux colonnes */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            {/* Profil recherché */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300/30 to-amber-400/20 flex items-center justify-center">
                  <UserCheck className="w-7 h-7 text-amber-200" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">
                  Profil recherché
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Motivé et impliqué",
                  "Travail en équipe",
                  "Respect des consignes",
                  "Rigueur & autonomie",
                  "Envie d'apprendre",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 text-xl text-white/90"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Nous proposons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-300/30 to-emerald-400/20 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-emerald-200" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">
                  Nous proposons
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Formation interne",
                  "Accompagnement au poste",
                  "Équipe dynamique",
                  "Possibilité d'évolution",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 text-xl text-white/90"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Informations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-6"
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
