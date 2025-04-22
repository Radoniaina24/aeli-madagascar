import React from "react";
import { FaArrowRight } from "react-icons/fa";
const news = [
  {
    id: 1,
    title: "Cérémonie de remise des diplômes 2025",
    date: "15 avril 2025",
    summary:
      "Plus de 200 étudiants ont reçu leur diplôme lors d'une cérémonie présidée par le Ministre de l'Enseignement Supérieur.",
    image:
      "https://readdy.ai/api/search-image?query=graduation%20ceremony%20in%20Africa%20with%20students%20in%20caps%20and%20gowns%20receiving%20diplomas%2C%20professional%20photography%2C%20bright%20and%20celebratory%20atmosphere%2C%20modern%20university%20setting%2C%20diverse%20group%20of%20African%20students&width=400&height=250&seq=4&orientation=landscape",
  },
  {
    id: 2,
    title: "Nouveau partenariat avec HEC Paris",
    date: "2 mars 2025",
    summary:
      "L'AELI Madagascar annonce un partenariat stratégique avec HEC Paris pour des programmes d'échange et de double diplôme.",
    image:
      "https://readdy.ai/api/search-image?query=professional%20business%20meeting%20with%20handshake%20between%20African%20and%20European%20executives%2C%20signing%20partnership%20documents%2C%20modern%20conference%20room%2C%20corporate%20atmosphere%2C%20professional%20business%20attire&width=400&height=250&seq=5&orientation=landscape",
  },
  {
    id: 3,
    title: "Forum de l'emploi et de l'entrepreneuriat",
    date: "18 février 2025",
    summary:
      "Plus de 50 entreprises ont participé au forum annuel, offrant stages et opportunités d'emploi à nos étudiants.",
    image:
      "https://readdy.ai/api/search-image?query=career%20fair%20in%20Africa%20with%20business%20professionals%20networking%2C%20exhibition%20booths%2C%20modern%20conference%20center%2C%20professional%20atmosphere%2C%20diverse%20group%20of%20African%20business%20people%20exchanging%20business%20cards&width=400&height=250&seq=6&orientation=landscape",
  },
];

export default function News() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Actualités & Événements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {
              "  Restez informé des dernières nouvelles et des événements à venir à l'AELI Madagascar."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-700 mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                <a
                  href="#"
                  className="text-blue-700 font-medium hover:text-blue-800 transition duration-300 flex items-center cursor-pointer"
                >
                  Lire la suite
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-button hover:bg-blue-700 hover:text-white transition duration-300 whitespace-nowrap cursor-pointer"
          >
            Voir toutes les actualités
          </a>
        </div>
      </div>
    </section>
  );
}
