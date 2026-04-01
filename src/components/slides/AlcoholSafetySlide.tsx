import { AlertTriangle } from "lucide-react";
import { SlideBackground } from "@/components/SlideBackground";
import noAlcoholIcon from "@/assets/no-alcohol-icon.png";
import helpIcon from "@/assets/help-icon.png";

export const AlcoholSafetySlide = () => {
  return (
    <SlideBackground>
      <div className="h-full w-full flex flex-col items-center justify-center animate-fade-in">
        <div className="w-full max-w-[1100px] flex flex-col items-center px-8 py-6">

          {/* Header */}
          <div className="flex justify-center mb-8 mt-2">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-10 py-4 shadow-[0_6px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 border border-white/30">
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm">
                <AlertTriangle className="w-7 h-7 text-amber-500" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-display text-white font-bold uppercase tracking-wide">
                Alcool & Travail
              </h2>
            </div>
          </div>

          {/* Two cards side by side */}
          <div className="flex gap-8 w-full justify-center flex-1">
            {/* Zéro alcool */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 animate-fade-in flex flex-col items-center justify-center p-8 gap-4 flex-1 max-w-[420px]">
              <div className="w-52 h-52 bg-white rounded-2xl flex items-center justify-center shadow-xl p-4">
                <img src={noAlcoholIcon} alt="Zéro alcool" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <p className="text-3xl font-display text-white text-center font-bold leading-tight">
                Zéro alcool
              </p>
              <p className="text-lg text-white/70 text-center font-medium">
                Ni avant, ni pendant le travail
              </p>
            </div>

            {/* Besoin d'aide */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 animate-fade-in flex flex-col items-center justify-center p-8 gap-4 flex-1 max-w-[420px]" style={{ animationDelay: '100ms' }}>
              <div className="w-52 h-52 bg-white rounded-2xl flex items-center justify-center shadow-xl p-4">
                <img src={helpIcon} alt="Besoin d'aide" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <p className="text-3xl font-display text-white text-center font-bold leading-tight">
                Besoin d'aide ?
              </p>
              <p className="text-lg text-white/70 text-center font-medium">
                Parlez-nous, on est là pour vous !
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-lg text-white/60 font-medium mt-6 tracking-wide">
            Restons prudents, restons ensemble !
          </p>
        </div>
      </div>
    </SlideBackground>
  );
};
