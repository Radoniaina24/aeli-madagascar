import { JSX } from "react";
import { FaBook, FaClock, FaCheckCircle } from "react-icons/fa";

type StatsCardProps = {
  icon: JSX.Element;
  label: string;
  value: string | number;
  iconBgColor: string;
};

const StatsCard = ({ icon, label, value, iconBgColor }: StatsCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center">
    <div className={`rounded-full p-3 mr-4 ${iconBgColor}`}>{icon}</div>
    <div>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

export default function StatsCards() {
  const stats = [
    {
      icon: <FaBook className="text-blue-800 dark:text-blue-200 text-xl" />,
      label: "Cours actifs",
      value: 6,
      iconBgColor: "bg-blue-100 dark:bg-blue-900",
    },
    {
      icon: (
        <FaClock className="text-yellow-600 dark:text-yellow-400 text-xl" />
      ),
      label: "Heures d'étude",
      value: "42h",
      iconBgColor: "bg-yellow-100 dark:bg-yellow-900",
    },
    {
      icon: (
        <FaCheckCircle className="text-green-600 dark:text-green-400 text-xl" />
      ),
      label: "Cours terminés",
      value: 3,
      iconBgColor: "bg-green-100 dark:bg-green-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}
