import { AlertCircle, CheckCircle } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";

export const SafetySlide = () => {
  const { title, items } = slidesConfig.safetyMessages;
  
  return (
    <div className="h-full w-full flex flex-col bg-background animate-fade-in px-24 py-12">
      {/* Header avec badge rouge */}
      <div className="flex justify-center mb-8">
        <div className="bg-destructive rounded-full px-12 py-6 shadow-2xl flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <AlertCircle className="w-7 h-7 text-destructive" strokeWidth={3} />
          </div>
          <h2 className="text-5xl font-display text-white font-bold uppercase tracking-wide">
            {title}
          </h2>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="flex-1 flex items-center justify-center max-w-[85%] mx-auto">
        {/* Liste des consignes */}
        <div className="space-y-6 w-full">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-5 bg-white/50 rounded-2xl p-6 shadow-lg border-2 border-ajr-green/20 hover:border-ajr-green/40 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-ajr-green rounded-full flex items-center justify-center shadow-md">
                <CheckCircle className="w-7 h-7 text-white" strokeWidth={3} fill="currentColor" />
              </div>
              <p className="text-3xl font-display text-foreground leading-relaxed pt-1 font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
