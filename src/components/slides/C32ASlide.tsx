import { motion } from "framer-motion";
import { SlideBackground } from "@/components/SlideBackground";
import { ShieldAlert } from "lucide-react";
import c32aEqualsMoney from "@/assets/c32a-equals-money.png";

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
            className="text-center mb-6"
          >
            <h1 className="text-6xl font-display font-bold text-white uppercase tracking-wider">
              Document C32A
            </h1>
          </motion.div>

          {/* Illustration centrale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 mb-6 max-w-4xl mx-auto"
          >
            <img
              src={c32aEqualsMoney}
              alt="Document C32A égal à de l'argent"
              width={1536}
              height={768}
              loading="lazy"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Avertissement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-6 bg-rose-500/20 border-2 border-rose-300/50 rounded-2xl p-6 max-w-2xl mx-auto mb-4"
          >
            <ShieldAlert className="w-14 h-14 text-rose-200 flex-shrink-0" />
            <p className="text-4xl font-display font-bold text-white">
              Ne pas perdre !
            </p>
          </motion.div>

          {/* Signature */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-right text-2xl italic text-white/90 pr-8"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            — Anne-Sophie
          </motion.p>
        </div>
      </div>
    </SlideBackground>
  );
};
