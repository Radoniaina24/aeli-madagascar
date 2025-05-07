import React from "react";
import { useCandidateContext } from "../context/CandidateContext";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function DesktopPagination() {
  const { setItemsPerPage, setCurrentPage, itemsPerPage, currentPage, data } =
    useCandidateContext();
  const indexOfLastItem = currentPage * itemsPerPage;
  const results = data?.totalApplications;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = 1;
  const totalPages = data?.totalPages;
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between ">
      <div>
        <p className="text-sm text-gray-700">
          Affichage de{" "}
          <span className="font-medium">{indexOfFirstItem + 1}</span> à{" "}
          <span className="font-medium">
            {" "}
            {indexOfLastItem > results ? results : indexOfLastItem}
          </span>{" "}
          sur <span className="font-medium"> {data?.totalApplications} </span>{" "}
          résultats
        </p>
      </div>
      <div>
        <div className="flex items-center">
          <span className="mr-3 text-sm text-gray-700">Lignes par page:</span>
          <select
            className="border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center px-1.5 py-1 rounded-l-md border border-gray-300 text-xs font-medium ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-500 hover:bg-gray-50"
          } cursor-pointer whitespace-nowrap !rounded-button`}
        >
          <span className="sr-only">Précédent</span>
          <FaChevronCircleLeft className="h-4 w-4" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
          // Afficher seulement les pages proches de la page actuelle
          if (
            number === 1 ||
            number === totalPages ||
            (number >= currentPage - 1 && number <= currentPage + 1)
          ) {
            return (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`relative inline-flex items-center px-3 py-1 border text-xs font-medium ${
                  currentPage === number
                    ? "z-10 bg-red-400 border-red-400 text-white"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-red-200 "
                } cursor-pointer whitespace-nowrap !rounded-button`}
              >
                {number}
              </button>
            );
          } else if (
            (number === currentPage - 2 && currentPage > 3) ||
            (number === currentPage + 2 && currentPage < totalPages - 2)
          ) {
            return (
              <span
                key={number}
                className="relative inline-flex items-center px-2.5 py-1 border border-gray-300 bg-white text-xs font-medium text-gray-700"
              >
                ...
              </span>
            );
          }
          return null;
        })}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`relative inline-flex items-center px-1.5 py-1 rounded-r-md border border-gray-300 text-xs font-medium ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-500 hover:bg-gray-50"
          } cursor-pointer whitespace-nowrap !rounded-button`}
        >
          <span className="sr-only">Suivant</span>

          <FaChevronCircleRight className="h-4 w-4" />
        </button>
      </nav>
    </div>
  );
}
