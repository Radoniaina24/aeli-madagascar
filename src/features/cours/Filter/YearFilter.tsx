import React from "react";
import { useCoursContext } from "../context/CoursContext";

interface YearFilterProps {
  className?: string;
}
const YearFilter: React.FC<YearFilterProps> = ({ className = "" }) => {
  const { year, setYearFilter } = useCoursContext();
  //   console.log(year);
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i className="fas fa-filter text-gray-400" />
      </div>
      <select
        className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer"
        value={year}
        onChange={(e) => setYearFilter(e.target.value)}
      >
        <option value="all">Tous les niveaux</option>
        <option value="L1">L1</option>
        <option value="L2">L2</option>
        <option value="L3">L3</option>
        <option value="M1">M1</option>
        <option value="M2">M2</option>
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <i className="fas fa-chevron-down text-gray-400" />
      </div>
    </div>
  );
};

export default YearFilter;
