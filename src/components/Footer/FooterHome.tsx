import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function FooterHome() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              AELI Madagascar
            </h3>
            <p className="text-blue-100 mb-4">
              Leader de l'enseignement supérieur en Afrique, formant les futurs
              leaders et entrepreneurs du continent .
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-100 hover:text-yellow-400 cursor-pointer"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-yellow-400 cursor-pointer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-yellow-400 cursor-pointer"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-yellow-400 cursor-pointer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white cursor-pointer"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white cursor-pointer"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white cursor-pointer"
                >
                  Programmes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white cursor-pointer"
                >
                  Admission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white cursor-pointer"
                >
                  Actualités
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div>
                  <FaMapMarkerAlt className="mt-1 mr-3 text-yellow-400" />
                </div>
                <span className="text-blue-100">
                  Nanisana, Antananarivo 101, Madagascar
                </span>
              </li>
              <li className="flex items-center">
                <div>
                  <FaPhone className="mr-3 text-yellow-400" />
                </div>
                <span className="text-blue-100">+261 38 78 777 37</span>
              </li>
              <li className="flex items-center">
                <div>
                  <FaEnvelope className="mr-3 text-yellow-400" />
                </div>
                <span className="text-blue-100">
                  administration@aeli.africa
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Newsletter
            </h3>
            <p className="text-blue-100 mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières
              actualités et offres spéciales.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-md cursor-pointer whitespace-nowrap !rounded-button w-full"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2025 AELI Madagascar. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-100 hover:text-white text-sm cursor-pointer"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white text-sm cursor-pointer"
              >
                Conditions d'utilisation
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-white text-sm cursor-pointer"
              >
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
