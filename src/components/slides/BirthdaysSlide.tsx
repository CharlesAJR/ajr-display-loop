import { Cake, Baby } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";
import { startOfWeek, endOfWeek, format, parse, isWithinInterval, getDay } from "date-fns";
import { fr } from "date-fns/locale";

export const BirthdaysSlide = () => {
  const {
    birthdays,
    events,
    announcements
  } = slidesConfig;

  // Organiser les événements par jour de la semaine EN FILTRANT POUR LA SEMAINE ACTUELLE
  const weekDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  
  const getEventsByDay = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // Calculer le lundi et vendredi de la semaine actuelle
    const monday = startOfWeek(today, { weekStartsOn: 1 });
    const friday = endOfWeek(today, { weekStartsOn: 1 });
    friday.setDate(monday.getDate() + 4); // Limiter au vendredi
    
    const eventsByDay: {
      [key: string]: {
        birthdays: typeof birthdays;
        events: typeof events;
      };
    } = {};
    
    weekDays.forEach(day => {
      eventsByDay[day] = {
        birthdays: [],
        events: []
      };
    });
    
    // Filtrer les anniversaires de la semaine actuelle
    birthdays.forEach(birthday => {
      // Parser la date au format JJ/MM
      const dateMatch = birthday.date.match(/(\d{2})\/(\d{2})/);
      if (dateMatch) {
        const day = parseInt(dateMatch[1]);
        const month = parseInt(dateMatch[2]);
        
        // Créer une date pour cette année
        const birthdayDate = new Date(currentYear, month - 1, day);
        
        // Vérifier si l'anniversaire tombe dans la semaine actuelle
        if (isWithinInterval(birthdayDate, { start: monday, end: friday })) {
          const dayOfWeek = getDay(birthdayDate);
          const dayName = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"][dayOfWeek];
          
          if (eventsByDay[dayName]) {
            eventsByDay[dayName].birthdays.push(birthday);
          }
        }
      }
    });
    
    // Filtrer les événements de la semaine actuelle (même logique)
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
            eventsByDay[dayName].events.push(event);
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
  return <div className="relative h-full w-full flex items-center justify-center animate-fade-in overflow-hidden">
      <div className="max-w-6xl max-h-[75vh] flex flex-col px-16 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <h2 className="text-5xl font-display font-bold text-foreground mb-2">
              Cette semaine
            </h2>
            <p className="text-2xl text-muted-foreground">{getWeekPeriod()}</p>
          </div>
          <div className="flex items-center gap-3 bg-[hsl(var(--ajr-beige))]/50 px-6 py-3 rounded-xl">
            <Cake className="w-6 h-6 text-pink-500" strokeWidth={2} />
            <span className="text-xl text-muted-foreground font-medium">= Anniversaire</span>
          </div>
        </div>

        {/* Calendrier hebdomadaire */}
        <div className="grid grid-cols-5 gap-4 flex-1">
          {weekDays.map(day => {
          const dayEvents = eventsByDay[day];
          const hasBirthdays = dayEvents.birthdays.length > 0;
          const hasEvents = dayEvents.events.length > 0;
          const hasAnyEvent = hasBirthdays || hasEvents;
          return <div key={day} className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 min-h-[280px] border border-foreground/10">
                <h3 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b-2 border-gray-200 italic">
                  {day}
                </h3>
                
                <div className="space-y-3">
                  {/* Anniversaires */}
                  {dayEvents.birthdays.map((birthday, index) => <div key={`birthday-${index}`} className="animate-fade-in">
                      <div className="flex items-start gap-2 mb-1">
                        <Cake className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" strokeWidth={2} />
                        <p className="text-xl font-bold text-foreground leading-tight">{birthday.name}</p>
                      </div>
                      <p className="text-lg text-muted-foreground ml-6">{birthday.date.replace(/^[^\s]+\s/, '')}</p>
                    </div>)}

                  {/* Événements */}
                  {dayEvents.events.map((event, index) => <div key={`event-${index}`} className="animate-fade-in">
                      <p className="text-xl font-bold text-foreground leading-tight mb-1">{event.name}</p>
                      <p className="text-lg text-muted-foreground">{event.date.replace(/^[^\s]+\s/, '')}</p>
                      {event.time && <p className="text-base text-ajr-orange font-medium">{event.time}</p>}
                    </div>)}

                  {!hasAnyEvent && <p className="text-lg text-muted-foreground/50 italic text-center py-3">—</p>}
                </div>
              </div>;
        })}
        </div>

        {/* Annonces spéciales */}
        {announcements && announcements.length > 0 && (
          <div className="mt-5 bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-foreground/10">
            <div className="flex items-center gap-4">
              <Baby className="w-10 h-10 text-pink-500 flex-shrink-0" />
              <div>
                <p className="text-xl font-bold text-foreground">
                  {announcements[0].text}
                </p>
                <p className="text-lg text-pink-600 font-medium">
                  {announcements[0].highlight}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>;
};