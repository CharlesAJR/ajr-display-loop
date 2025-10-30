import { ShieldCheck, HardHat, Glasses } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";

export const SafetySlide = () => {
  const { title, items, footer } = slidesConfig.safetyMessages;
  
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-background animate-fade-in px-32 py-16">
      {/* Header avec icône */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-40 h-40 bg-ajr-orange/10 rounded-full mb-8">
          <ShieldCheck className="w-24 h-24 text-ajr-orange" strokeWidth={2.5} />
        </div>
        <h2 className="text-8xl font-display text-foreground font-bold uppercase tracking-wide mb-4">
          {title}
        </h2>
      </div>
      
      {/* Cards principales */}
      <div className="grid grid-cols-2 gap-16 max-w-7xl w-full mb-12">
        <div className="group">
          <div className="bg-muted/30 backdrop-blur-md rounded-3xl p-16 border border-border/50 shadow-2xl hover:shadow-3xl hover:border-ajr-orange/30 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-ajr-orange/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <HardHat className="w-20 h-20 text-ajr-orange" strokeWidth={2.5} />
              </div>
              <p className="text-7xl font-display font-bold text-foreground uppercase leading-tight">
                {items[0]}
              </p>
            </div>
          </div>
        </div>
        
        <div className="group">
          <div className="bg-muted/30 backdrop-blur-md rounded-3xl p-16 border border-border/50 shadow-2xl hover:shadow-3xl hover:border-ajr-orange/30 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-ajr-orange/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Glasses className="w-20 h-20 text-ajr-orange" strokeWidth={2.5} />
              </div>
              <p className="text-7xl font-display font-bold text-foreground uppercase leading-tight">
                {items[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer message */}
      <div className="bg-ajr-orange/10 backdrop-blur-md rounded-3xl px-20 py-10 border border-ajr-orange/30 shadow-xl">
        <p className="text-6xl font-display text-ajr-orange text-center font-bold uppercase tracking-wide">
          {footer}
        </p>
      </div>
    </div>
  );
};
