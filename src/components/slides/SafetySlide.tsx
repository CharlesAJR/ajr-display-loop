import { AlertCircle, CheckCircle } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";

export const SafetySlide = () => {
  const { title, items } = slidesConfig.safetyMessages;
  
  return (
    <div className="h-full w-full flex flex-col bg-background animate-fade-in px-32 py-20">
      {/* Header avec badge rouge centré */}
      <div className="flex justify-center mb-16">
        <div className="bg-destructive rounded-full px-20 py-10 shadow-2xl flex items-center gap-6 animate-scale-in">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <AlertCircle className="w-12 h-12 text-destructive" strokeWidth={3} />
          </div>
          <h2 className="text-8xl font-display text-white font-bold uppercase tracking-wide">
            {title}
          </h2>
        </div>
      </div>
      
      {/* Contenu principal - liste des consignes */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl w-full space-y-10">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group bg-muted/30 backdrop-blur-md rounded-3xl p-10 border border-border/50 shadow-xl hover:shadow-2xl hover:border-ajr-green/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0 w-20 h-20 bg-ajr-green rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-12 h-12 text-white" strokeWidth={3} fill="currentColor" />
                </div>
                <p className="text-5xl font-display text-foreground leading-tight pt-3 font-medium">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
