"use client";
import React, { createContext, useContext, useState } from "react";
export interface PassType {
  type: string;
  priceEarly: number;
  quantity: number;
}
interface FormData {
  name: string;
  email: string;
  phone: string;
  passTypes: PassType[];
  companyName: string;
  billingAddress: string;
  postalCode: string;
  city: string;
  country: string;
  cardType: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  totalAmount: number;
  fullNameOnCard: string;
}

const FormPassContext = createContext<any | null>(null);
function FormPassProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    // Informations personnelles
    nom: "",
    prenom: "",
    email: "",
    emailConfirmation: "",
    telephone: "",
    dateNaissance: "",
    nationalite: "",
    adresse: "",
    ville: "",
    codePostal: "",
    pays: "",
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
  //   console.log(formData);
  return (
    <FormPassContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        setFormData,
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
