import { AlertCircle, CheckCircle } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";
import { SlideBackground } from "@/components/SlideBackground";

export const SafetySlide = () => {
  const { title, items } = slidesConfig.safetyMessages;
  
  const highlightKeywords = (text: string) => {
    const keywords = ['EPI', 'badger', 'route fermée', 'atelier cosmétique'];
    let result = text;
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      result = result.replace(regex, '<span class="font-extrabold text-white">$1</span>');
    });
    
    return result;
  };
  
  return (
    <SlideBackground>
      <div className="h-full w-full flex flex-col items-center justify-center animate-fade-in">
      <div className="max-w-6xl max-h-[75vh] flex flex-col px-16 py-12">
        {/* Header avec badge rouge */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-10 py-5 shadow-[0_6px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 border border-white/30">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <AlertCircle className="w-8 h-8 text-red-500" strokeWidth={2.5} />
            </div>
            <h2 className="text-5xl font-display text-white font-bold uppercase tracking-wide">
              {title}
            </h2>
          </div>
        </div>
        
        {/* Contenu principal */}
        <div className="flex-1 flex items-center justify-center">
          {/* Liste des consignes */}
          <div className="space-y-4 w-full">
            {items.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-sm border border-white/30">
                  <CheckCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <p 
                  className="text-3xl font-display text-white leading-relaxed pt-1 font-medium"
                  dangerouslySetInnerHTML={{ __html: highlightKeywords(item) }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </SlideBackground>
  );
};
