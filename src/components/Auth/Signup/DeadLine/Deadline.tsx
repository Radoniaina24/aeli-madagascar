import { FaCalendarAlt } from "react-icons/fa";

import React from "react";

export default function Deadline() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Dates importantes
      </h3>
      <ul className="space-y-3">
        <li className="flex items-start">
          <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
            <FaCalendarAlt />
          </div>
          <div>
            <p className="font-medium">Rentrée de Septembre 2025</p>
            <p className="text-sm text-gray-600">
              Date limite de candidature: 30 juin 2025
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
            <FaCalendarAlt />
          </div>
          <div>
            <p className="font-medium">Rentrée de Janvier 2026</p>
            <p className="text-sm text-gray-600">
              Date limite de candidature: 15 novembre 2025
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
            <FaCalendarAlt />
          </div>
          <div>
            <p className="font-medium">Rentrée de Septembre 2026</p>
            <p className="text-sm text-gray-600">
              Date limite de candidature: 30 juin 2026
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
