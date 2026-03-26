import { AlertTriangle } from "lucide-react";
import { SlideBackground } from "@/components/SlideBackground";
import noAlcoholIcon from "@/assets/no-alcohol-icon.png";
import accidentRiskIcon from "@/assets/accident-risk-icon.png";
import noDrinkWorkIcon from "@/assets/no-drink-work-icon.png";
import helpIcon from "@/assets/help-icon.png";

const cards = [
  { img: noAlcoholIcon, alt: "Zéro alcool", text: "Zéro alcool", bold: true },
  { img: accidentRiskIcon, alt: "Risque d'accident", text: "Risque d'accident", bold: false },
  { img: noDrinkWorkIcon, alt: "Pas d'alcool au travail", text: "Ni avant, ni pendant", bold: false },
  { img: helpIcon, alt: "Besoin d'aide", text: "Besoin d'aide ? Parlez-nous !", bold: false },
];

export const AlcoholSafetySlide = () => {
  return (
    <SlideBackground>
      <div className="h-full w-full flex flex-col items-center justify-center animate-fade-in">
        <div className="w-full max-w-[1100px] flex flex-col px-8 py-6">

          {/* Header */}
          <div className="flex justify-center mb-5">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-10 py-4 shadow-[0_6px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 border border-white/30">
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm">
                <AlertTriangle className="w-7 h-7 text-amber-500" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-display text-white font-bold uppercase tracking-wide">
                Alcool & Travail
              </h2>
            </div>
          </div>

          {/* 2x2 Grid — images are the hero */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 animate-fade-in flex flex-col items-center justify-center p-5 gap-2"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center shadow-xl p-3">
                  <img src={card.img} alt={card.alt} className="w-full h-full object-contain drop-shadow-md" />
                </div>
                <p className={`text-2xl font-display text-white text-center leading-tight mt-1 ${card.bold ? 'font-bold' : 'font-medium'}`}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p className="text-center text-lg text-white/60 font-medium mt-3 tracking-wide">
            Restons prudents, restons ensemble !
          </p>
        </div>
      </div>
    </SlideBackground>
  );
};
