import React from "react";
import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import VisibleColumn from "./VisibleColumn";

export default function Filter() {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          Tableau des candidats
        </h1>
        {/* <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-button transition-colors duration-200 whitespace-nowrap flex items-center cursor-pointer"
          onClick={() => {
            const headers = [
              "Nom",
              "Email",
              "Statut",
              "Rôle",
              "Date d'inscription",
            ];
            const csvContent = [
              headers.join(","),
              ...filteredUsers.map((user) =>
                [
                  user.nom,
                  user.email,
                  user.statut,
                  user.role,
                  user.dateInscription,
                ].join(",")
              ),
            ].join("\n");
            const blob = new Blob([csvContent], {
              type: "text/csv;charset=utf-8;",
            });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute(
              "download",
              `users_export_${new Date().toLocaleDateString()}.csv`
            );
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <i className="fas fa-download mr-2"></i>
          Exporter
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Barre de recherche */}
        <SearchBar />
        {/* Filtre par statut */}
        <StatusFilter />
        {/* Colonnes visibles */}
        <VisibleColumn />
      </div>
    </div>
  );
}
