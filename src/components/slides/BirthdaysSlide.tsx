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
    <div className="relative h-full w-full flex flex-col bg-background animate-fade-in px-32 py-16 overflow-hidden">
      <div className="bg-muted/30 rounded-xl p-12 border border-border/50 h-full flex flex-col">
        <h2 className="text-5xl font-display font-semibold text-foreground mb-10 text-center">
          Cette semaine
        </h2>
        
        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Anniversaires */}
          <div>
            <div className="flex items-center gap-4 mb-6 pb-3 border-b border-border/50">
              <Cake className="w-7 h-7 text-ajr-green" strokeWidth={2} />
              <h3 className="text-2xl font-semibold text-foreground">Anniversaires</h3>
            </div>
            <div className="space-y-3">
              {birthdaysToShow.map((birthday, index) => (
                <div 
                  key={`${birthday.name}-${index}`}
                  className="bg-background rounded-lg p-5 border border-border/30 animate-fade-in hover:border-ajr-green/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-ajr-green/10 flex items-center justify-center flex-shrink-0">
                      <Cake className="w-4 h-4 text-ajr-green" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-foreground">{birthday.name}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{birthday.date}</p>
                    </div>
                  </div>
                </div>
              ))}
              {birthdaysToShow.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-base text-muted-foreground">Aucun anniversaire cette semaine</p>
                </div>
              )}
            </div>
          </div>

          {/* Événements */}
          <div>
            <div className="flex items-center gap-4 mb-6 pb-3 border-b border-border/50">
              <Calendar className="w-7 h-7 text-ajr-orange" strokeWidth={2} />
              <h3 className="text-2xl font-semibold text-foreground">Événements</h3>
            </div>
            <div className="space-y-3">
              {eventsToShow.map((event, index) => (
                <div 
                  key={`${event.name}-${index}`}
                  className="bg-background rounded-lg p-5 border border-border/30 animate-fade-in hover:border-ajr-orange/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-ajr-orange/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-4 h-4 text-ajr-orange" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-foreground">{event.name}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{event.date}</p>
                      {event.time && (
                        <p className="text-xs text-ajr-orange font-medium mt-1">{event.time}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {eventsToShow.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-base text-muted-foreground">Aucun événement cette semaine</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
