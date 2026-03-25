import { AlertTriangle, Ban, Eye, ShieldAlert, Phone, Wine } from "lucide-react";
import { SlideBackground } from "@/components/SlideBackground";

export const AlcoholSafetySlide = () => {
  return (
    <SlideBackground>
      <div className="h-full w-full flex flex-col items-center justify-center animate-fade-in">
        <div className="max-w-6xl max-h-[75vh] flex flex-col px-16 py-12 w-full">

          {/* Header */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-10 py-5 shadow-[0_6px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 border border-white/30">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <AlertTriangle className="w-8 h-8 text-amber-500" strokeWidth={2.5} />
              </div>
              <h2 className="text-5xl font-display text-white font-bold uppercase tracking-wide">
                Alcool & Travail
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center space-y-4 w-full">

            {/* Zero Alcool */}
            <div className="flex items-start gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-sm border border-white/30">
                <Ban className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="pt-1">
                <p className="text-3xl font-display text-white leading-relaxed font-bold">
                  Zéro alcool — <span className="font-extrabold text-white">sécurité avant tout !</span>
                </p>
              </div>
            </div>

            {/* Risques */}
            <div className="flex items-start gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-sm border border-white/30">
                <ShieldAlert className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-3xl font-display text-white leading-relaxed pt-1 font-medium">
                Moins vigilant, risque d'accident, travail <span className="font-extrabold text-white">mal fait</span>
              </p>
            </div>

            {/* Pas d'alcool avant/pendant */}
            <div className="flex items-start gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-sm border border-white/30">
                <Wine className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-3xl font-display text-white leading-relaxed pt-1 font-medium">
                Pas d'alcool au boulot : ni <span className="font-extrabold text-white">avant</span>, ni <span className="font-extrabold text-white">pendant</span>
              </p>
            </div>

            {/* Besoin d'aide */}
            <div className="flex items-start gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-sm border border-white/30">
                <Phone className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-3xl font-display text-white leading-relaxed pt-1 font-medium">
                Besoin d'aide ? <span className="font-extrabold text-white">Parlez-nous !</span>
              </p>
            </div>

          </div>

          {/* Footer message */}
          <p className="text-center text-xl text-white/60 font-medium mt-6 tracking-wide">
            Restons prudents, restons ensemble !
          </p>
        </div>
      </div>
    </SlideBackground>
  );
};
