"use client";
import { useGetAllCandidateQuery } from "@/lib/api/applicationApi";
import React, { createContext, useContext, useState } from "react";
const CandidateContext = createContext<any | null>(null);
function CandidateProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("tous");
  const [isColumnMenuOpen, setIsColumnMenuOpen] = useState<boolean>(false);
  const [sortColumn, setSortColumn] = useState<string>("nom");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [visibleColumns, setVisibleColumns] = useState({
    photo: true,
    nom: true,
    prenom: true,
    email: true,
    dateInscription: true,
    diplome: true,
    niveau: true,
    mention: true,
    actions: true,
    status: true,
  });
  const handleColumnToggle = (column: keyof typeof visibleColumns) => {
    setVisibleColumns({
      ...visibleColumns,
      [column]: !visibleColumns[column],
    });
  };
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const { data, isLoading, error } = useGetAllCandidateQuery("");
  // console.log(data);
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
        sortColumn,
        setSortColumn,
        sortDirection,
        setSortDirection,
        handleSort,
        isLoading,
        data,
        error,
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
