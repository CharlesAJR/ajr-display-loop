import { Calendar, Cake } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";

export const BirthdaysSlide = () => {
  const { birthdays, events } = slidesConfig;

  return (
    <div className="h-full w-full flex flex-col bg-background animate-fade-in px-32 py-24">
      <h2 className="text-display-3 font-display text-foreground mb-16 text-center">
        Cette semaine
      </h2>
      
      <div className="grid grid-cols-2 gap-16 flex-1">
        {/* Anniversaires */}
        <div className="bg-ajr-green-pale rounded-3xl p-16">
          <div className="flex items-center gap-6 mb-12">
            <Cake className="w-24 h-24 text-ajr-green" />
            <h3 className="text-7xl font-display text-foreground">Anniversaires</h3>
          </div>
          <div className="space-y-8">
            {birthdays.map((birthday, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-lg">
                <p className="text-6xl font-bold text-foreground mb-2">{birthday.name}</p>
                <p className="text-5xl text-muted-foreground">{birthday.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Événements */}
        <div className="bg-ajr-yellow-pale rounded-3xl p-16">
          <div className="flex items-center gap-6 mb-12">
            <Calendar className="w-24 h-24 text-ajr-orange" />
            <h3 className="text-7xl font-display text-foreground">Événements</h3>
          </div>
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-lg">
                <p className="text-6xl font-bold text-foreground mb-2">{event.name}</p>
                <p className="text-5xl text-muted-foreground">{event.date}</p>
                <p className="text-4xl text-ajr-orange font-semibold mt-2">{event.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
