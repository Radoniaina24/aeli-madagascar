"use client";
import React from "react";
import { useFormPassContext } from "../context/SignupContext";
import ProgressBar from "../ProgressBar/ProgressBar";
import Contact from "../Contact/Contact";
import FormStep1 from "./FormStep1";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FormStep2 from "./FormStep2";

export default function MultiStepForm() {
  const { currentStep, setCurrentStep, nextStep, prevStep } =
    useFormPassContext();
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <FormStep1 />;
      case 2:
        return <FormStep2 />;
      //   case 3:
      //     return renderStep3();
      //   case 4:
      //     return renderStep4();
      //   case 5:
      //     return renderStep5();
      //   case 6:
      //     return renderConfirmation();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen  bg-gray-50">
      <div className="container mx-auto  px-4 py-10 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Candidature AELI Madagascar
            </h1>
            <p className="text-gray-600">
              Complétez le formulaire ci-dessous pour soumettre votre
              candidature à nos programmes d'excellence.
            </p>
          </div>
          {/* ProgressBar */}
          <ProgressBar currentStep={currentStep} />
          {renderCurrentStep()}
        </div>

        <div className="w-full lg:w-1/3 space-y-6">
          <Contact />
        </div>
      </div>
    </div>
  );
}
