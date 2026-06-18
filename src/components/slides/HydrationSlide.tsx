import { motion } from "framer-motion";
import { Droplets, GlassWater, ThermometerSun, Timer, AlertTriangle, Sun } from "lucide-react";
import { SlideBackground } from "@/components/SlideBackground";

export const HydrationSlide = () => {
  return (
    <SlideBackground>
      <div className="h-full w-full flex items-center justify-center px-16">
        <div className="max-w-6xl w-full">
          {/* En-tête avec icône animée */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-cyan-400/20 border-2 border-cyan-300/40 mb-6"
            >
              <Droplets className="w-14 h-14 text-cyan-200" />
            </motion.div>
            <h1 className="text-6xl font-display font-bold text-white mb-3">
              RESTEZ HYDRATÉS !
            </h1>
            <div className="flex items-center justify-center gap-2 text-amber-200">
              <ThermometerSun className="w-6 h-6" />
              <p className="text-xl font-medium">Il fait très chaud — protégez-vous</p>
              <ThermometerSun className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Grille des conseils */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: GlassWater,
                title: "Buvez régulièrement",
                text: "1 verre d'eau toutes les 20–30 min, même sans soif",
                color: "from-cyan-300/30 to-cyan-500/20",
                iconColor: "text-cyan-200",
                border: "border-cyan-300/40",
              },
              {
                icon: Sun,
                title: "Protégez-vous du soleil",
                text: "Portez un chapeau et des vêtements légers en extérieur",
                color: "from-orange-300/30 to-orange-500/20",
                iconColor: "text-orange-200",
                border: "border-orange-300/40",
              },
              {
                icon: Timer,
                title: "Respectez les pauses",
                text: "Respectez vos horaires de pause et restez à l'ombre ou au frais",
                color: "from-emerald-300/30 to-emerald-500/20",
                iconColor: "text-emerald-200",
                border: "border-emerald-300/40",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-sm border ${item.border} flex flex-col items-center text-center`}
              >
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-white/90 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Message d'alerte */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-400/20 border border-amber-300/40 backdrop-blur-sm">
              <AlertTriangle className="w-6 h-6 text-amber-200" />
              <p className="text-lg font-semibold text-amber-100">
                Chaleur extrême — pensez à vous hydrater et à vous ombrager !
              </p>
              <AlertTriangle className="w-6 h-6 text-amber-200" />
            </div>
          </motion.div>

          {/* Gouttes décoratives animées */}
          <motion.div
            className="absolute top-[15%] left-[8%] w-4 h-4 rounded-full bg-cyan-300/30"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[25%] right-[12%] w-3 h-3 rounded-full bg-cyan-300/25"
            animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[15%] w-5 h-5 rounded-full bg-cyan-300/20"
            animate={{ y: [0, 25, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>
    </SlideBackground>
  );
};
