import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-0 overflow-hidden">
      <div className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10"></div>
          <img
            src="https://readdy.ai/api/search-image?query=modern%20African%20university%20campus%20with%20beautiful%20architecture%2C%20students%20walking%20and%20studying%20in%20groups%2C%20bright%20sunny%20day%2C%20palm%20trees%20and%20lush%20vegetation%2C%20professional%20photography%2C%20high%20quality%20image%20with%20blue%20sky%20and%20perfect%20lighting&width=1440&height=700&seq=7&orientation=landscape"
            alt="AELI Madagascar Campus"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="container mx-auto px-4 z-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white py-12 md:py-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {"Leader de l'Enseignement Supérieur en Afrique"}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              {
                " Formez-vous à l'excellence avec des programmes innovants conçus pour les leaders et entrepreneurs africains de demain."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 !rounded-button whitespace-nowrap cursor-pointer transition duration-300 ease-in-out">
                Découvrir nos programmes
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 !rounded-button whitespace-nowrap cursor-pointer transition duration-300 ease-in-out">
                Demander une information
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
          <span className="text-white text-sm mb-2">Découvrir plus</span>
          <div className="animate-bounce">
            <FaChevronDown className="text-white text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
