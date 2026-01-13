import { motion } from "framer-motion";
import ajrLogo from "@/assets/ajr-logo.png";

interface LoadingScreenProps {
  progress: number;
}

export const LoadingScreen = ({ progress }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <motion.img
        src={ajrLogo}
        alt="AJR Logo"
        className="h-32 w-auto mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-64 flex flex-col items-center"
      >
        <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <p className="text-foreground/60 text-sm font-medium">
          Chargement... {progress}%
        </p>
      </motion.div>
    </div>
  );
};
