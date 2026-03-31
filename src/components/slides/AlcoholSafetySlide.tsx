import { SlideBackground } from "@/components/SlideBackground";
import noAlcoholIcon from "@/assets/no-alcohol-icon.png";
import accidentRiskIcon from "@/assets/accident-risk-icon.png";
import noDrinkWorkIcon from "@/assets/no-drink-work-icon.png";
import helpIcon from "@/assets/help-icon.png";

const cards = [
  { img: noAlcoholIcon, alt: "Zéro alcool", label: "Zéro alcool" },
  { img: accidentRiskIcon, alt: "Risque d'accident", label: "Risque d'accident" },
  { img: noDrinkWorkIcon, alt: "Ni avant, ni pendant", label: "Ni avant, ni pendant" },
  { img: helpIcon, alt: "Besoin d'aide", label: "Besoin d'aide ?" },
];

export const AlcoholSafetySlide = () => {
  return (
    <SlideBackground>
      <div className="h-full w-full flex flex-col items-center justify-center px-6 py-4 animate-fade-in">
        {/* Titre compact */}
        <h2 className="text-3xl font-display text-white font-bold uppercase tracking-wider mb-4">
          ⚠️ Alcool & Travail
        </h2>

        {/* 4 cartes en ligne — images XXL */}
        <div className="flex gap-4 w-full max-w-[1200px] flex-1 items-stretch">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-1 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-4 gap-3 animate-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="max-h-[85%] max-w-[90%] object-contain drop-shadow-lg"
                />
              </div>
              <p className="text-lg font-display font-bold text-foreground text-center leading-tight">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-base text-white/50 font-medium mt-3 tracking-wide">
          Restons prudents, restons ensemble !
        </p>
      </div>
    </SlideBackground>
  );
};
