import React from "react";
import { FaComment, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Besoin d'aide ?</h3>
      <ul className="space-y-3">
        <li className="flex items-center">
          <div className="bg-green-100 text-green-800 p-2 rounded-full mr-3">
            <FaPhoneAlt />
          </div>
          <span>+261 20 22 123 456</span>
        </li>
        <li className="flex items-center">
          <div className="bg-green-100 text-green-800 p-2 rounded-full mr-3">
            <FaEnvelope />
          </div>
          <span>admissions@aelimadagascar.org</span>
        </li>
        <li className="flex items-center">
          <div className="bg-green-100 text-green-800 p-2 rounded-full mr-3">
            <FaComment />
          </div>
          <span>Chat en direct (9h-17h)</span>
        </li>
      </ul>
    </div>
  );
}
