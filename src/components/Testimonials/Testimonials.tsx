"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const testimonials = [
    {
      id: 1,
      name: "Sophie Rakoto",
      position: "Directrice Marketing, Telma",
      text: "Ma formation à l'AELI Madagascar a été déterminante pour ma carrière. Les compétences acquises et le réseau développé m'ont permis d'accéder rapidement à des postes à responsabilité.",
      image:
        "https://readdy.ai/api/search-image?query=professional%20African%20woman%20in%20business%20attire%20smiling%20at%20camera%2C%20corporate%20headshot%20with%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20confident%20expression%2C%20modern&width=100&height=100&seq=1&orientation=squarish",
    },
    {
      id: 2,
      name: "Jean Andrianaivo",
      position: "Entrepreneur, Fondateur de TechMada",
      text: "L'approche entrepreneuriale de l'AELI m'a donné tous les outils nécessaires pour lancer ma startup. Les professeurs et le mentorat personnalisé ont fait toute la différence.",
      image:
        "https://readdy.ai/api/search-image?query=professional%20African%20man%20in%20business%20suit%20smiling%20at%20camera%2C%20corporate%20headshot%20with%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20confident%20expression%2C%20modern&width=100&height=100&seq=2&orientation=squarish",
    },
    {
      id: 3,
      name: "Aina Rasolofo",
      position: "Consultante Internationale, ONU",
      text: "Grâce à la dimension internationale des programmes de l'AELI, j'ai pu développer une vision globale qui m'a ouvert les portes des organisations internationales.",
      image:
        "https://readdy.ai/api/search-image?query=professional%20African%20woman%20in%20formal%20business%20attire%20smiling%20at%20camera%2C%20corporate%20headshot%20with%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20confident%20expression%2C%20modern&width=100&height=100&seq=3&orientation=squarish",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {"Témoignages d'Anciens Étudiants"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {
              "Découvrez comment l'AELI Madagascar a transformé la carrière de nos diplômés."
            }
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-600 italic mb-6">
                      "{testimonial.text}"
                    </p>
                    <h4 className="font-bold text-lg text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-700">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer"
            aria-label="Témoignage précédent"
          >
            <FaArrowLeft className="text-blue-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer"
            aria-label="Témoignage suivant"
          >
            <FaArrowRight className="text-blue-700" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-blue-700" : "bg-gray-300"
                } cursor-pointer`}
                aria-label={`Aller au témoignage ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
