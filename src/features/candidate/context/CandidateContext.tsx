"use client";
import React, { createContext, useContext, useState } from "react";
const CandidateContext = createContext<any | null>(null);
function CandidateProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("tous");
  const [isColumnMenuOpen, setIsColumnMenuOpen] = useState<boolean>(false);
  const [visibleColumns, setVisibleColumns] = useState({
    photo: true,
    nom: true,
    email: true,
    statut: true,
    role: true,
    dateInscription: true,
    actions: true,
  });
  const handleColumnToggle = (column: keyof typeof visibleColumns) => {
    setVisibleColumns({
      ...visibleColumns,
      [column]: !visibleColumns[column],
    });
  };
  console.log(visibleColumns);
  return (
    <CandidateContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        statusFilter,
        setStatusFilter,
        isColumnMenuOpen,
        setIsColumnMenuOpen,
        visibleColumns,
        setVisibleColumns,
        handleColumnToggle,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}

function useCandidateContext() {
  const context = useContext(CandidateContext);
  if (context === undefined)
    throw new Error("CandidateContext was used outside the CandidateProvider");
  return context;
}
export { CandidateProvider, useCandidateContext };
