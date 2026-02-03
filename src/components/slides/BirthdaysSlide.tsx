import { Baby } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";
import { startOfWeek, isWithinInterval, getDay } from "date-fns";
import { SlideBackground } from "@/components/SlideBackground";

export const BirthdaysSlide = () => {
  const { events, announcements } = slidesConfig;

  // Organiser les événements par jour de la semaine EN FILTRANT POUR LA SEMAINE ACTUELLE
  const weekDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  
  const getEventsByDay = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // Calculer le lundi et vendredi de la semaine actuelle
    const monday = startOfWeek(today, { weekStartsOn: 1 });
    const friday = new Date(monday);
    friday.setDate(monday.getDate() + 4); // Limiter au vendredi
    
    const eventsByDay: { [key: string]: typeof events } = {};
    
    weekDays.forEach(day => {
      eventsByDay[day] = [];
    });
    
    // Filtrer les événements de la semaine actuelle
    events.forEach(event => {
      const dateMatch = event.date.match(/(\d{2})\/(\d{2})/);
      if (dateMatch) {
        const day = parseInt(dateMatch[1]);
        const month = parseInt(dateMatch[2]);
        
        const eventDate = new Date(currentYear, month - 1, day);
        
        if (isWithinInterval(eventDate, { start: monday, end: friday })) {
          const dayOfWeek = getDay(eventDate);
          const dayName = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"][dayOfWeek];
          
          if (eventsByDay[dayName]) {
            eventsByDay[dayName].push(event);
          }
        }
      }
    });
    
    return eventsByDay;
  };
  
  const eventsByDay = getEventsByDay();

  // Calculer la période de la semaine actuelle
  const getWeekPeriod = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    const friday = new Date(monday);
    friday.setDate(monday.getDate() + 4);
    const formatDate = (date: Date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      return `${day}/${month}`;
    };
    return `du ${formatDate(monday)} au ${formatDate(friday)}`;
  };
  return (
    <SlideBackground>
      <div className="relative h-full w-full flex items-center justify-center animate-fade-in overflow-hidden">
        <div className="max-w-6xl max-h-[68vh] flex flex-col px-14 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-3xl font-display font-bold text-white mb-1">
                Cette semaine
              </h2>
              <p className="text-lg text-white/80">{getWeekPeriod()}</p>
            </div>
          </div>

          {/* Calendrier hebdomadaire */}
          <div className="grid grid-cols-5 gap-2.5 flex-1">
            {weekDays.map(day => {
              const dayEvents = eventsByDay[day];
              const hasEvents = dayEvents.length > 0;
              return (
                <div key={day} className="bg-white/10 backdrop-blur-sm rounded-2xl p-2.5 min-h-[245px] border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-2.5 pb-1.5 border-b-2 border-white/30 italic">
                    {day}
                  </h3>
                  
                  <div className="space-y-2.5">
                    {/* Événements */}
                    {dayEvents.map((event, index) => {
                      const isKuraray = event.name.toLowerCase().includes('kuraray');
                      return (
                        <div key={`event-${index}`} className={`animate-fade-in ${isKuraray ? 'bg-amber-400/20 rounded-xl p-2 border border-amber-400/40' : ''}`}>
                          <p className={`text-lg font-bold leading-tight mb-0.5 ${isKuraray ? 'text-amber-300' : 'text-white'}`}>{event.name}</p>
                          <p className="text-base text-white/70">{event.date.replace(/^[^\s]+\s/, '')}</p>
                          {event.time && <p className={`text-sm font-medium ${isKuraray ? 'text-amber-200' : 'text-amber-300'}`}>{event.time}</p>}
                        </div>
                      );
                    })}

                    {!hasEvents && <p className="text-base text-white/40 italic text-center py-2">—</p>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Annonces spéciales */}
          {announcements && announcements.length > 0 && (
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
              <div className="flex items-center gap-3">
                <Baby className="w-8 h-8 text-pink-300 flex-shrink-0" />
                <div>
                  <p className="text-lg font-bold text-white">
                    {announcements[0].text}
                  </p>
                  <p className="text-base text-pink-300 font-medium">
                    {announcements[0].highlight}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SlideBackground>
  );
};