"use client";
import { useGetAllCoursQuery } from "@/lib/api/coursApi";
import React, { createContext, useContext, useEffect, useState } from "react";
const CoursContext = createContext<any | null>(null);
function CoursProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [track, setTrackFilter] = useState<string>("all");
  const [level, setLevelFilter] = useState<string>("all");
  const [semester, setSemesterFilter] = useState<string>("all");
  const [year, setYearFilter] = useState<string>("all");

  const [isColumnMenuOpen, setIsColumnMenuOpen] = useState<boolean>(false);
  const [sortColumn, setSortColumn] = useState<string>("nom");
  const [visibleColumns, setVisibleColumns] = useState({
    title: true,
    track: true,
    level: true,
    year: true,
    semester: true,
    description: true,
    actions: true,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const handleColumnToggle = (column: keyof typeof visibleColumns) => {
    setVisibleColumns({
      ...visibleColumns,
      [column]: !visibleColumns[column],
    });
  };

  // Pagination
  const { data, isLoading, error, refetch } = useGetAllCoursQuery({
    limit: itemsPerPage,
    page: currentPage,
    track,
    level,
    year,
    semester,
  });
  // console.log(data);
  useEffect(() => {
    setCurrentPage(1);
    refetch();
  }, [searchTerm]);
  return (
    <CoursContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        isColumnMenuOpen,
        setIsColumnMenuOpen,
        visibleColumns,
        setVisibleColumns,
        handleColumnToggle,
        sortColumn,
        setSortColumn,
        isLoading,
        data,
        error,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        track,
        setTrackFilter,
        level,
        setLevelFilter,
        year,
        setYearFilter,
        semester,
        setSemesterFilter,
      }}
    >
      {children}
    </CoursContext.Provider>
  );
}

function useCoursContext() {
  const context = useContext(CoursContext);
  if (context === undefined)
    throw new Error("CoursContext was used outside the CandidateProvider");
  return context;
}
export { CoursProvider, useCoursContext };
