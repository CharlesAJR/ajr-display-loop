import { Calendar, Cake } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";
import { useState, useEffect } from "react";

export const BirthdaysSlide = () => {
  const { birthdays, events } = slidesConfig;
  const [currentBirthdayIndex, setCurrentBirthdayIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const maxItemsPerPage = 3;
  const birthdaysToShow = birthdays.slice(currentBirthdayIndex, currentBirthdayIndex + maxItemsPerPage);
  const eventsToShow = events.slice(currentEventIndex, currentEventIndex + maxItemsPerPage);

  // Carousel automatique pour les anniversaires si plus de 3
  useEffect(() => {
    if (birthdays.length <= maxItemsPerPage) return;
    
    const interval = setInterval(() => {
      setCurrentBirthdayIndex((prev) => {
        const next = prev + maxItemsPerPage;
        return next >= birthdays.length ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [birthdays.length]);

  // Carousel automatique pour les événements si plus de 3
  useEffect(() => {
    if (events.length <= maxItemsPerPage) return;
    
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => {
        const next = prev + maxItemsPerPage;
        return next >= events.length ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <div className="relative h-full w-full flex flex-col bg-background animate-fade-in px-32 py-20 overflow-hidden">
      {/* Motif festif en arrière-plan */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-20 text-8xl">🎉</div>
        <div className="absolute top-32 right-32 text-7xl">✨</div>
        <div className="absolute bottom-40 left-40 text-6xl">🎊</div>
        <div className="absolute top-1/3 right-20 text-7xl">⭐</div>
        <div className="absolute bottom-1/4 right-1/3 text-8xl">🎈</div>
      </div>

      <h2 className="text-[7rem] font-display font-bold text-foreground mb-20 text-center leading-none">
        Cette semaine
      </h2>
      
      <div className="grid grid-cols-2 gap-20 flex-1 relative z-10">
        {/* Anniversaires */}
        <div className="bg-[#eff7ea] rounded-[2.5rem] p-16 shadow-lg">
          <div className="flex items-center gap-6 mb-14">
            <Cake className="w-28 h-28 text-ajr-green flex-shrink-0" strokeWidth={2.5} />
            <h3 className="text-[5rem] font-display font-bold text-foreground leading-none">Anniversaires</h3>
          </div>
          <div className="space-y-6">
            {birthdaysToShow.map((birthday, index) => (
              <div 
                key={`${birthday.name}-${index}`}
                className="bg-background rounded-2xl p-10 shadow-[0_6px_20px_rgba(0,0,0,0.12)] animate-fade-in hover:shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-6">
                  <span className="text-6xl">🎂</span>
                  <div className="flex-1">
                    <p className="text-[4rem] font-bold text-foreground mb-2 leading-tight">{birthday.name}</p>
                    <p className="text-[3rem] text-muted-foreground leading-tight">{birthday.date}</p>
                  </div>
                </div>
              </div>
            ))}
            {birthdaysToShow.length === 0 && (
              <div className="text-center py-12">
                <p className="text-5xl text-muted-foreground">Aucun anniversaire cette semaine</p>
              </div>
            )}
          </div>
        </div>

        {/* Événements */}
        <div className="bg-[#fffcee] rounded-[2.5rem] p-16 shadow-lg">
          <div className="flex items-center gap-6 mb-14">
            <Calendar className="w-28 h-28 text-ajr-orange flex-shrink-0" strokeWidth={2.5} />
            <h3 className="text-[5rem] font-display font-bold text-foreground leading-none">Événements</h3>
          </div>
          <div className="space-y-6">
            {eventsToShow.map((event, index) => (
              <div 
                key={`${event.name}-${index}`}
                className="bg-background rounded-2xl p-10 shadow-[0_6px_20px_rgba(0,0,0,0.12)] animate-fade-in hover:shadow-[0_8px_30px_rgba(0,0,0,0.16)] transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-6">
                  <span className="text-6xl">📅</span>
                  <div className="flex-1">
                    <p className="text-[4rem] font-bold text-foreground mb-2 leading-tight">{event.name}</p>
                    <p className="text-[3rem] text-muted-foreground leading-tight">{event.date}</p>
                    {event.time && (
                      <p className="text-[2.5rem] text-ajr-orange font-semibold mt-2 leading-tight">{event.time}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {eventsToShow.length === 0 && (
              <div className="text-center py-12">
                <p className="text-5xl text-muted-foreground">Aucun événement cette semaine</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
