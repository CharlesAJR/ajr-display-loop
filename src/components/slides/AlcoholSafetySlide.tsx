import { motion } from "framer-motion";
import { AlertTriangle, Ban, Eye, HardHat, Phone, ShieldAlert, Wine } from "lucide-react";

export const AlcoholSafetySlide = () => {
  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Dark blue gradient background matching the poster */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #1a2744 0%, #0f1a2e 60%, #0a1220 100%)',
          transform: 'scale(1.1)',
          transformOrigin: 'center center',
        }}
      />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,193,7,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,193,7,0.1) 0%, transparent 40%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-16 py-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
              <AlertTriangle className="w-9 h-9 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-6xl font-display font-black text-white tracking-tight">
              ALCOOL <span className="text-amber-400">&</span> TRAVAIL
            </h1>
          </div>
          <div className="bg-red-600 rounded-full px-8 py-2 shadow-lg shadow-red-600/40">
            <span className="text-2xl font-bold text-white tracking-widest uppercase">
              Danger au travail !
            </span>
          </div>
        </motion.div>

        {/* Zero Alcohol Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-2xl px-10 py-4 mb-6"
        >
          <p className="text-4xl font-display font-black text-amber-400 text-center tracking-wide">
            ZÉRO ALCOOL
          </p>
          <p className="text-xl font-bold text-white text-center mt-1">
            Sécurité avant tout !
          </p>
        </motion.div>

        {/* Risk Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-4 gap-6 mb-6 w-full max-w-5xl"
        >
          {[
            { icon: Eye, label: "Moins vigilant", color: "from-blue-500 to-blue-600" },
            { icon: AlertTriangle, label: "Risque d'accident", color: "from-orange-500 to-orange-600" },
            { icon: ShieldAlert, label: "En danger", color: "from-red-500 to-red-600" },
            { icon: Ban, label: "Travail mal fait", color: "from-rose-500 to-rose-600" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                <item.icon className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <span className="text-lg font-bold text-white/90 text-center">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* No Alcohol Banner */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-5xl"
        >
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-400/30 rounded-2xl px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Wine className="w-10 h-10 text-red-400" strokeWidth={2} />
              <div>
                <p className="text-3xl font-display font-black text-white">
                  PAS D'ALCOOL AU BOULOT
                </p>
                <p className="text-xl text-white/70 font-medium">
                  Ni avant, ni pendant le travail
                </p>
              </div>
            </div>
            <Ban className="w-16 h-16 text-red-500/80" strokeWidth={2.5} />
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 flex flex-col items-center gap-3"
        >
          <p className="text-2xl font-bold text-amber-400">Besoin d'aide ?</p>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-white/20">
            <Phone className="w-6 h-6 text-green-400" />
            <span className="text-2xl font-display font-bold text-white">
              PARLEZ-NOUS !
            </span>
            <HardHat className="w-6 h-6 text-amber-400" />
          </div>
        </motion.div>

        {/* Footer message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 text-lg font-medium text-white/50 tracking-widest uppercase"
        >
          Restons prudents, restons ensemble !
        </motion.p>
      </div>
    </div>
  );
};
