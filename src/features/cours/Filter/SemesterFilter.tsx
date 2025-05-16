import React from "react";
import { useCoursContext } from "../context/CoursContext";

interface SemesterFilterProps {
  className?: string;
}
const SemesterFilter: React.FC<SemesterFilterProps> = ({ className = "" }) => {
  const { semester, setSemesterFilter } = useCoursContext();
  // console.log(semester);
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i className="fas fa-filter text-gray-400" />
      </div>
      <select
        className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer"
        value={semester}
        onChange={(e) => setSemesterFilter(e.target.value)}
      >
        <option value="all">Tous les semestres</option>
        <option value="S1">S1</option>
        <option value="S2">S2</option>
        <option value="S3">S3</option>
        <option value="S4">S4</option>
        <option value="S5">S5</option>
        <option value="S6">S6</option>
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <i className="fas fa-chevron-down text-gray-400" />
      </div>
    </div>
  );
};

export default SemesterFilter;
