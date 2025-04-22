import React from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaGlobe,
  FaLeaf,
  FaLightbulb,
} from "react-icons/fa";
import { FaBullhorn, FaUserTie } from "react-icons/fa6";

export default function Program() {
  const programs = [
    {
      id: 1,
      title: "Leadership et Management",
      description:
        "Développez vos compétences en leadership pour diriger des équipes avec excellence et vision stratégique.",
      icon: <FaUserTie />,
    },
    {
      id: 2,
      title: "Entrepreneuriat Innovant",
      description:
        "Acquérez les outils nécessaires pour créer et développer des entreprises innovantes en Afrique.",
      icon: <FaLightbulb />,
    },
    {
      id: 3,
      title: "Finance et Investissement",
      description:
        "Maîtrisez les aspects financiers essentiels pour la gestion et le développement d'entreprises performantes.",
      icon: <FaChartLine />,
    },
    {
      id: 4,
      title: "Marketing Digital",
      description:
        "Explorez les stratégies numériques pour développer votre marque et atteindre vos clients cibles.",
      icon: <FaBullhorn />,
    },
    {
      id: 5,
      title: "Développement Durable",
      description:
        "Intégrez les principes de durabilité dans vos projets d'entreprise pour un impact positif.",
      icon: <FaLeaf />,
    },
    {
      id: 6,
      title: "Commerce International",
      description:
        "Préparez-vous aux défis du commerce mondial avec une perspective africaine unique.",
      icon: <FaGlobe />,
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nos Programmes Phares
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des formations d'excellence conçues pour répondre aux défis
            spécifiques du continent africain et former les leaders de demain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-blue-700 text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <a
                href="#"
                className="text-blue-700 font-medium hover:text-blue-800 transition duration-300 flex items-center cursor-pointer"
              >
                En savoir plus
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
