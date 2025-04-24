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
    dernierDiplome: "",
    etablissement: "",
    anneeObtention: "",
    moyenneGenerale: "",
    domaineEtudes: "",
    // Choix du programme
    programme: "",
    periodeEtudes: "",
    financement: "",
    // Lettre de motivation
    lettreMotivation: "",
    // Documents
    cv: null,
    diplomes: null,
    lettresRecommandation: null,
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
  console.log(formData);
  return (
    <FormPassContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        setFormData,
        nextStep,
        prevStep,
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
