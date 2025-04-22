"use client";
import React, { JSX, useEffect, useState } from "react";
import {
  FaBuilding,
  FaHandshake,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";

type StatItem = {
  icon: JSX.Element;
  value: string;
  label: string;
};

const STATISTICS: StatItem[] = [
  {
    icon: <FaUserGraduate />,
    value: "5000+",
    label: "Étudiants formés",
  },
  {
    icon: <FaTrophy />,
    value: "94%",
    label: "Taux d'insertion professionnelle",
  },
  {
    icon: <FaBuilding />,
    value: "120+",
    label: "Startups créées par nos diplômés",
  },
  {
    icon: <FaHandshake />,
    value: "75+",
    label: "Partenaires internationaux",
  },
];

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("stats-section");
      if (!section) return;

      const { top, bottom } = section.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre Impact en Chiffres
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            L'AELI Madagascar s'engage à transformer l'enseignement supérieur en
            Afrique avec des résultats concrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATISTICS.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-yellow-400 text-4xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                {isVisible ? stat.value : stat.value.replace(/\d+/g, "0")}
              </div>
              <p className="text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
