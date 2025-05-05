"use client";
import React, { useState } from "react";
import Filter from "./Filter/Filter";

export default function Candidate() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState("tous");
  const [visibleColumns, setVisibleColumns] = useState({
    photo: true,
    nom: true,
    email: true,
    statut: true,
    role: true,
    dateInscription: true,
    actions: true,
  });
  const [isColumnMenuOpen, setIsColumnMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="px-4 sm:px-6 lg:px-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* En-tête et filtres */}
          <Filter />
          {/* Tableau */}
        </div>
      </div>
    </div>
  );
}
