"use client";
import React, { createContext, useContext, useState } from "react";
const FormPassContext = createContext<any | null>(null);
function FormPassProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    // Informations personnelles
    lastName: "",
    firstName: "",
    emailAddress: "",
    confirmEmailAddress: "",
    phoneNumber: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    // Parcours académique
    lastDegree: "",
    institution: "",
    graduationYear: "",
    overallGPA: "",
    fieldOfStudy: "",
    // Choix du programme
    program: "",
    studyPeriod: "",
    funding: "",
    // Lettre de motivation
    coverLetter: "",
    // Documents
    cv: null,
    cin: null,
    degree: null,
    birthCertificate: null,
    certificateOfResidence: null,
    // Confirmation
    acceptConditions: false,
  });
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  // console.log(formData);
  return (
    <FormPassContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        setFormData,
        nextStep,
        prevStep,
        showSuccessModal,
        setShowSuccessModal,
      }}
    >
      {children}
    </FormPassContext.Provider>
  );
}

function useFormPassContext() {
  const context = useContext(FormPassContext);
  if (context === undefined)
    throw new Error("FormPassContext was used outside the LanguageProvider");
  return context;
}
export { FormPassProvider, useFormPassContext };
