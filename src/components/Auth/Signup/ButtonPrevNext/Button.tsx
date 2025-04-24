import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ButtonNextPrev() {
  const {
    setCurrentStep,
    setFormData,
    prevStep,
    nextStep,
    currentStep,
    formData,
  } = useFormPassContext();
  return (
    <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
      <div>
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-200 flex items-center text-sm text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-300 mr-4 whitespace-nowrap cursor-pointer"
          >
            <FaArrowLeft className="mr-2" />
            Précédent
          </button>
        )}
      </div>
      <div className="mt-4 sm:mt-0">
        {currentStep < 6 ? (
          <button
            type="submit"
            //   onClick={nextStep}
            className="bg-blue-700 text-sm flex items-center text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-300 whitespace-nowrap cursor-pointer"
          >
            Suivant
            <FaArrowRight className="ml-2" />
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-button hover:bg-green-700 transition duration-300 whitespace-nowrap cursor-pointer"
          >
            Soumettre ma candidature
            <i className="fas fa-paper-plane ml-2"></i>
          </button>
        )}
      </div>
    </div>
  );
}
