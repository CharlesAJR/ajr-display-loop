import { AlertTriangle } from "lucide-react";
import { SlideBackground } from "@/components/SlideBackground";
import noAlcoholIcon from "@/assets/no-alcohol-icon.png";
import accidentRiskIcon from "@/assets/accident-risk-icon.png";
import noDrinkWorkIcon from "@/assets/no-drink-work-icon.png";
import helpIcon from "@/assets/help-icon.png";

export const AlcoholSafetySlide = () => {
  return (
    <SlideBackground>
      <div className="h-full w-full flex flex-col items-center justify-center animate-fade-in">
        <div className="max-w-6xl max-h-[80vh] flex flex-col px-16 py-8 w-full">

          {/* Header */}
          <div className="flex justify-center mb-5">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-10 py-5 shadow-[0_6px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 border border-white/30">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <AlertTriangle className="w-8 h-8 text-amber-500" strokeWidth={2.5} />
              </div>
              <h2 className="text-5xl font-display text-white font-bold uppercase tracking-wide">
                Alcool & Travail
              </h2>
            </div>
          </div>

          {/* Content - vertical list with large images */}
          <div className="flex-1 flex flex-col justify-center gap-3">

            {/* Zéro Alcool */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-fade-in flex items-center gap-5">
              <div className="flex-shrink-0 w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2">
                <img src={noAlcoholIcon} alt="Zéro alcool" className="w-full h-full object-contain" />
              </div>
              <p className="text-3xl font-display text-white leading-snug font-bold">
                Zéro alcool — sécurité avant tout !
              </p>
            </div>

            {/* Risques */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-fade-in flex items-center gap-5" style={{ animationDelay: '100ms' }}>
              <div className="flex-shrink-0 w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2">
                <img src={accidentRiskIcon} alt="Risque d'accident" className="w-full h-full object-contain" />
              </div>
              <p className="text-3xl font-display text-white leading-snug font-medium">
                Moins vigilant, risque d'accident
              </p>
            </div>

            {/* Pas d'alcool avant/pendant */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-fade-in flex items-center gap-5" style={{ animationDelay: '200ms' }}>
              <div className="flex-shrink-0 w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2">
                <img src={noDrinkWorkIcon} alt="Pas d'alcool au travail" className="w-full h-full object-contain" />
              </div>
              <p className="text-3xl font-display text-white leading-snug font-medium">
                Ni <span className="font-bold">avant</span>, ni <span className="font-bold">pendant</span> le travail
              </p>
            </div>

            {/* Besoin d'aide */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-fade-in flex items-center gap-5" style={{ animationDelay: '300ms' }}>
              <div className="flex-shrink-0 w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2">
                <img src={helpIcon} alt="Besoin d'aide" className="w-full h-full object-contain" />
              </div>
              <p className="text-3xl font-display text-white leading-snug font-medium">
                Besoin d'aide ? <span className="font-bold">Parlez-nous !</span>
              </p>
            </div>

          </div>

          {/* Footer message */}
          <p className="text-center text-xl text-white/60 font-medium mt-3 tracking-wide">
            Restons prudents, restons ensemble !
          </p>
        </div>
      </div>
    </SlideBackground>
  );
};
