import welcomeBg from "@/assets/welcome-background.png";
import ajrLogoColor from "@/assets/ajr-logo.png";
import { motion } from "framer-motion";

export const KurarayWelcomeSlide = () => {
  return (
    <div className="h-full w-full relative overflow-hidden" style={{ margin: '-3.2%', width: '106.4%', height: '106.4%' }}>
      {/* Background image */}
      <img src={welcomeBg} alt="Atelier Jean-Regniers" className="absolute inset-0 w-full h-full object-cover scale-[1.20]" />
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/55" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-16">
        <div className="text-center flex flex-col items-center">
          {/* Colored logo with animation */}
          <motion.img 
            src={ajrLogoColor} 
            alt="AJR Logo" 
            className="h-36 w-auto mb-6 drop-shadow-xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          <motion.h1 
            className="text-[8rem] font-campton font-bold tracking-wider text-white mb-4"
            style={{
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 255, 255, 0.2)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            BIENVENUE
          </motion.h1>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <span className="text-4xl text-white/90 font-soleil tracking-wide">
              à nos visiteurs de
            </span>
            <div 
              className="text-[6rem] font-campton font-bold tracking-wider text-ajr-pink"
              style={{
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 182, 193, 0.3)'
              }}
            >
              CHEMVIRON
            </div>
            <span className="text-2xl text-white/70 font-soleil tracking-wide mt-2">
              Groupe Kuraray
            </span>
          </motion.div>

          <motion.p
            className="text-3xl text-white/80 font-soleil mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Vendredi 23 janvier 2026 • 10h00
          </motion.p>
        </div>
      </div>
    </div>
  );
};
