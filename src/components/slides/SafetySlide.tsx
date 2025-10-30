import { ShieldCheck, HardHat, Glasses } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";

export const SafetySlide = () => {
  const { title, items, footer } = slidesConfig.safetyMessages;
  
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-background animate-fade-in px-32">
      <div className="bg-background rounded-3xl p-20 shadow-2xl max-w-6xl">
        <div className="flex items-center justify-center gap-8 mb-16">
          <ShieldCheck className="w-40 h-40 text-ajr-orange" />
        </div>
        
        <h2 className="text-display-2 font-display text-foreground text-center mb-16 uppercase tracking-wider">
          {title}
        </h2>
        
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div className="flex items-center gap-8 bg-ajr-yellow-pale rounded-2xl p-10">
            <HardHat className="w-32 h-32 text-ajr-orange flex-shrink-0" />
            <p className="text-6xl font-bold text-foreground uppercase">
              {items[0]}
            </p>
          </div>
          
          <div className="flex items-center gap-8 bg-ajr-yellow-pale rounded-2xl p-10">
            <Glasses className="w-32 h-32 text-ajr-orange flex-shrink-0" />
            <p className="text-6xl font-bold text-foreground uppercase">
              {items[1]}
            </p>
          </div>
        </div>
        
        <p className="text-7xl font-display text-ajr-orange text-center uppercase tracking-wide">
          {footer}
        </p>
      </div>
    </div>
  );
};
