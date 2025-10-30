import { AlertCircle, CheckCircle } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";

export const SafetySlide = () => {
  const { title, items } = slidesConfig.safetyMessages;
  
  const highlightKeywords = (text: string) => {
    const keywords = ['EPI', 'badger', 'route fermée', 'atelier cosmétique'];
    let result = text;
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      result = result.replace(regex, '<span class="font-extrabold text-foreground">$1</span>');
    });
    
    return result;
  };
  
  return (
    <div className="h-full w-full flex flex-col bg-background animate-fade-in px-24 py-16">
      {/* Header avec badge rouge */}
      <div className="flex justify-center mb-10">
        <div className="bg-destructive rounded-full px-12 py-6 shadow-[0_6px_30px_rgba(239,68,68,0.25)] flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
            <AlertCircle className="w-10 h-10 text-destructive" strokeWidth={2.5} />
          </div>
          <h2 className="text-6xl font-display text-white font-bold uppercase tracking-wide">
            {title}
          </h2>
        </div>
      </div>
      
      {/* Contenu principal */}
      <div className="flex-1 flex items-center justify-center max-w-[85%] mx-auto pb-16">
        {/* Liste des consignes */}
        <div className="space-y-5 w-full">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-5 bg-gradient-to-br from-white to-ajr-green-soft rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-ajr-green/15 hover:border-ajr-green/30 hover:shadow-[0_6px_30px_rgba(0,0,0,0.08)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-ajr-green rounded-full flex items-center justify-center shadow-sm">
                <CheckCircle className="w-9 h-9 text-white" strokeWidth={2.5} />
              </div>
              <p 
                className="text-4xl font-display text-foreground leading-relaxed pt-1 font-medium"
                dangerouslySetInnerHTML={{ __html: highlightKeywords(item) }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
