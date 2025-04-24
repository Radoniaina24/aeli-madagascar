import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {[
          "Informations Personnelles",
          "Parcours Académique",
          "Choix du Programme",
          "Lettre de Motivation",
          "Documents",
        ].map((step, index) => (
          <div key={index} className="text-center flex-1">
            <div
              className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                currentStep > index + 1
                  ? "bg-green-500"
                  : currentStep === index + 1
                  ? "bg-blue-700"
                  : "bg-gray-300"
              } text-white font-bold`}
            >
              {currentStep > index + 1 ? <FaCheck /> : index + 1}
            </div>
            <div
              className={`mt-2 text-xs md:text-sm ${
                currentStep === index + 1
                  ? "text-blue-700 font-bold"
                  : "text-gray-500"
              }`}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${(currentStep - 1) * 25}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700 transition-all duration-500"
          ></div>
        </div>
      </div>
    </div>
  );
}
