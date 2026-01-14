import { motion } from "framer-motion";

interface SlideBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const SlideBackground = ({ children, className = "" }: SlideBackgroundProps) => {
  return (
    <div className={`h-full w-full relative overflow-hidden ${className}`} style={{ background: 'linear-gradient(135deg, #007baf 0%, #005a82 50%, #004466 100%)' }}>
      {/* Formes géométriques semi-transparentes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grande forme triangulaire en haut à droite */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px]"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}
        />
        
        {/* Forme rectangulaire inclinée à gauche */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-[20%] -left-10 w-[300px] h-[400px]"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
            transform: 'skewY(-10deg)',
            borderRadius: '20px',
          }}
        />
        
        {/* Forme carrée flottante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-[15%] right-[10%] w-[200px] h-[200px]"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            borderRadius: '24px',
            transform: 'rotate(15deg)',
          }}
        />
        
        {/* Cercle subtil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-[60%] left-[15%] w-[150px] h-[150px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          }}
        />
        
        {/* Ligne décorative horizontale */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-[30%] left-0 w-[40%] h-[2px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            transformOrigin: 'left',
          }}
        />
        
        {/* Forme en coin bas gauche */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute -bottom-10 -left-10 w-[250px] h-[250px]"
          style={{
            background: 'linear-gradient(45deg, rgba(255,255,255,0.05) 0%, transparent 60%)',
            borderRadius: '30px',
            transform: 'rotate(-20deg)',
          }}
        />
      </div>
      
      {/* Contenu */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
