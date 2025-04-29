import React from "react";
type EventCardProps = {
  date: {
    month: string;
    day: string;
  };
  title: string;
  timeLocation: string;
  colorScheme: {
    bg: string;
    text: string;
  };
};

const EventCard: React.FC<EventCardProps> = ({
  date,
  title,
  timeLocation,
  colorScheme,
}) => (
  <div className="flex items-start">
    <div
      className={`rounded-lg p-3 mr-4 text-center min-w-[60px] ${colorScheme.bg} ${colorScheme.text}`}
    >
      <div className="text-sm font-semibold">{date.month}</div>
      <div className="text-xl font-bold">{date.day}</div>
    </div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{timeLocation}</p>
    </div>
  </div>
);

export default function UpcomingEvents() {
  const events: EventCardProps[] = [
    {
      date: { month: "AVR", day: "25" },
      title: "Examen de mi-semestre - Mathématiques Avancées",
      timeLocation: "10:00 - 12:00 | Salle virtuelle A",
      colorScheme: {
        bg: "bg-yellow-100 dark:bg-yellow-900",
        text: "text-yellow-800 dark:text-yellow-200",
      },
    },
    {
      date: { month: "AVR", day: "27" },
      title: "Webinaire - Nouvelles tendances en IA",
      timeLocation: "14:00 - 15:30 | En ligne",
      colorScheme: {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-800 dark:text-blue-200",
      },
    },
    {
      date: { month: "MAI", day: "02" },
      title: "Date limite - Projet Python",
      timeLocation: "23:59 | Soumission en ligne",
      colorScheme: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-800 dark:text-green-200",
      },
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Événements à venir</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
