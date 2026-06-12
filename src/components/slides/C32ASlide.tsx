import { motion } from "framer-motion";
import { SlideBackground } from "@/components/SlideBackground";
import { FileText, Camera, Banknote, ShieldAlert, ArrowRight } from "lucide-react";

export const C32ASlide = () => {
  return (
    <SlideBackground>
      <div className="h-full w-full flex items-center justify-center px-12 py-6">
        <div className="max-w-6xl w-full">
          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <FileText className="w-14 h-14 text-amber-200" />
              <h1 className="text-7xl font-display font-bold text-white uppercase tracking-wider">
                C32A
              </h1>
            </div>
          </motion.div>

          {/* Schéma visuel en 3 étapes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            {/* Étape 1 : Document */}
            <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 w-64">
              <div className="w-24 h-24 rounded-2xl bg-amber-400/20 flex items-center justify-center">
                <FileText className="w-12 h-12 text-amber-200" />
              </div>
              <p className="text-2xl font-display font-bold text-white text-center">
                Document
              </p>
            </div>

            {/* Flèche */}
            <ArrowRight className="w-10 h-10 text-white/50" />

            {/* Étape 2 : Photo */}
            <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 w-64">
              <div className="w-24 h-24 rounded-2xl bg-cyan-400/20 flex items-center justify-center">
                <Camera className="w-12 h-12 text-cyan-200" />
              </div>
              <p className="text-2xl font-display font-bold text-white text-center">
                Photo
              </p>
            </div>

            {/* Flèche */}
            <ArrowRight className="w-10 h-10 text-white/50" />

            {/* Étape 3 : Payé */}
            <div className="flex flex-col items-center gap-4 bg-emerald-400/10 backdrop-blur-sm border-2 border-emerald-300/40 rounded-2xl p-8 w-64">
              <div className="w-24 h-24 rounded-2xl bg-emerald-400/20 flex items-center justify-center">
                <Banknote className="w-12 h-12 text-emerald-200" />
              </div>
              <p className="text-2xl font-display font-bold text-white text-center">
                Payé
              </p>
            </div>
          </motion.div>

          {/* Avertissement visuel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-6 bg-rose-500/20 border-2 border-rose-300/50 rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <ShieldAlert className="w-16 h-16 text-rose-200 flex-shrink-0" />
            <p className="text-4xl font-display font-bold text-white">
              Ne pas perdre !
            </p>
          </motion.div>
        </div>
      </div>
    </SlideBackground>
  );
};
