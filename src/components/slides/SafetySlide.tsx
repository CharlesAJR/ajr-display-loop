import { AlertCircle, CheckCircle } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";

export const SafetySlide = () => {
  const { title, items } = slidesConfig.safetyMessages;
  
  return (
    <div className="h-full w-full flex flex-col bg-background animate-fade-in px-32 py-16">
      {/* Header avec badge rouge */}
      <div className="flex justify-center mb-12">
        <div className="bg-destructive rounded-full px-16 py-8 shadow-2xl flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-destructive" strokeWidth={3} />
          </div>
          <h2 className="text-7xl font-display text-white font-bold uppercase tracking-wide">
            {title}
          </h2>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="flex-1 flex items-center justify-center max-w-[90%] mx-auto">
        {/* Liste des consignes */}
        <div className="space-y-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-ajr-green rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" strokeWidth={3} fill="currentColor" />
              </div>
              <p className="text-5xl font-display text-foreground leading-tight pt-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
