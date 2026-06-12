import { motion } from "framer-motion";
import { SlideBackground } from "@/components/SlideBackground";
import { AlertTriangle, Camera, Euro, ShieldAlert } from "lucide-react";

export const C32ASlide = () => {
  return (
    <SlideBackground>
      <div className="h-full w-full flex items-center justify-center px-12 py-6">
        <div className="max-w-6xl w-full">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-400/20 border border-amber-300/50 backdrop-blur-sm mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-200" />
              <span className="text-lg font-display uppercase tracking-wider text-amber-100">
                Information importante
              </span>
            </div>
            <h1 className="text-6xl font-display font-bold text-white uppercase tracking-wider">
              Document C32A
            </h1>
          </motion.div>

          {/* Message principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-300/30 to-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-8 h-8 text-cyan-200" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-2">
                    Prenez-le en photo
                  </h2>
                  <p className="text-xl text-white/90 leading-snug">
                    Le document C32A en photo sert de preuve officielle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-300/30 to-emerald-400/20 flex items-center justify-center flex-shrink-0">
                  <Euro className="w-8 h-8 text-emerald-200" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-white mb-2">
                    Il vaut de l'argent
                  </h2>
                  <p className="text-xl text-white/90 leading-snug">
                    Il sert à être payé du nombre de jours de chômage.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Avertissement principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-rose-500/30 to-red-500/30 border-2 border-rose-300/60 rounded-2xl p-6 flex items-center justify-center gap-4 mb-6"
          >
            <ShieldAlert className="w-12 h-12 text-rose-100 flex-shrink-0" />
            <p className="text-3xl font-display font-bold text-white text-center">
              Donc il ne faut pas le perdre&nbsp;!
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-white/70 italic">Merci — Anne Sophie</p>
          </motion.div>
        </div>
      </div>
    </SlideBackground>
  );
};
