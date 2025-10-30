import { Cake } from "lucide-react";
import { slidesConfig } from "@/config/slidesContent";
export const BirthdaysSlide = () => {
  const {
    birthdays,
    events
  } = slidesConfig;

  // Organiser les événements par jour de la semaine
  const weekDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  const getEventsByDay = () => {
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
    birthdays.forEach(birthday => {
      const dayMatch = birthday.date.match(/^(Lundi|Mardi|Mercredi|Jeudi|Vendredi)/i);
      if (dayMatch) {
        const day = dayMatch[1].charAt(0).toUpperCase() + dayMatch[1].slice(1).toLowerCase();
        if (eventsByDay[day]) {
          eventsByDay[day].birthdays.push(birthday);
        }
      }
    });
    events.forEach(event => {
      const dayMatch = event.date.match(/^(Lundi|Mardi|Mercredi|Jeudi|Vendredi)/i);
      if (dayMatch) {
        const day = dayMatch[1].charAt(0).toUpperCase() + dayMatch[1].slice(1).toLowerCase();
        if (eventsByDay[day]) {
          eventsByDay[day].events.push(event);
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
  return <div className="relative h-full w-full flex flex-col bg-white animate-fade-in px-20 py-12 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1">
          <h2 className="text-6xl font-display font-bold text-foreground mb-2">
            Cette semaine
          </h2>
          <p className="text-3xl text-muted-foreground">{getWeekPeriod()}</p>
        </div>
        
      </div>

      {/* Calendrier hebdomadaire */}
      <div className="grid grid-cols-5 gap-6 flex-1">
        {weekDays.map(day => {
        const dayEvents = eventsByDay[day];
        const hasBirthdays = dayEvents.birthdays.length > 0;
        const hasEvents = dayEvents.events.length > 0;
        const hasAnyEvent = hasBirthdays || hasEvents;
        return <div key={day} className="bg-[hsl(var(--ajr-beige))] rounded-2xl p-6">
              <h3 className="text-3xl font-semibold text-foreground mb-6 pb-3 border-b-2 border-gray-200 italic">
                {day}
              </h3>
              
              <div className="space-y-4">
                {/* Anniversaires */}
                {dayEvents.birthdays.map((birthday, index) => <div key={`birthday-${index}`} className="animate-fade-in">
                    <div className="flex items-start gap-2 mb-1">
                      <Cake className="w-5 h-5 text-ajr-green mt-1 flex-shrink-0" strokeWidth={2} />
                      <p className="text-2xl font-bold text-foreground leading-tight">{birthday.name}</p>
                    </div>
                    <p className="text-xl text-muted-foreground ml-7">{birthday.date.replace(/^[^\s]+\s/, '')}</p>
                  </div>)}

                {/* Événements */}
                {dayEvents.events.map((event, index) => <div key={`event-${index}`} className="animate-fade-in">
                    <p className="text-2xl font-bold text-foreground leading-tight mb-1">{event.name}</p>
                    <p className="text-xl text-muted-foreground">{event.date.replace(/^[^\s]+\s/, '')}</p>
                    {event.time && <p className="text-lg text-ajr-orange font-medium">{event.time}</p>}
                  </div>)}

                {!hasAnyEvent && <p className="text-xl text-muted-foreground/50 italic text-center py-4">—</p>}
              </div>
            </div>;
      })}
      </div>
    </div>;
};