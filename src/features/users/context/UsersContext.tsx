"use client";
import { useGetAllCandidateQuery } from "@/lib/api/applicationApi";
import {
  useGetAllUserCandidateQuery,
  useGetAllUserQuery,
} from "@/lib/api/userApi";
import React, { createContext, useContext, useEffect, useState } from "react";
const UserContext = createContext<any | null>(null);
function UserProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isColumnMenuOpen, setIsColumnMenuOpen] = useState<boolean>(false);
  const [sortColumn, setSortColumn] = useState<string>("nom");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [visibleColumns, setVisibleColumns] = useState({
    photo: false,
    nom: true,
    prenom: true,
    email: true,
    niveau: true,
    mention: true,
    actions: true,
    status: true,
    ecolage: true,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
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

  // Pagination
  const { data, isLoading, error, refetch } = useGetAllUserCandidateQuery({
    search: searchTerm,
    status: statusFilter,
    // sort: sortDirection,
    limit: itemsPerPage,
    page: currentPage,
  });
  // console.log(data);
  useEffect(() => {
    setCurrentPage(1);
    refetch();
  }, [searchTerm, statusFilter]);
  return (
    <UserContext.Provider
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
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUsersContext() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside the CandidateProvider");
  return context;
}
export { UserProvider, useUsersContext };
