import React from "react";
import { useCoursContext } from "../context/CoursContext";

interface TrackFilterProps {
  className?: string;
}
const TrackFilter: React.FC<TrackFilterProps> = ({ className = "" }) => {
  const { track, setTrackFilter } = useCoursContext();
  // console.log(track);
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i className="fas fa-filter text-gray-400" />
      </div>
      <select
        className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer"
        value={track}
        onChange={(e) => setTrackFilter(e.target.value)}
      >
        <option value="all">Tous les mentions</option>
        <option value="BEL">BEL</option>
        <option value="BEN">BEN</option>
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <i className="fas fa-chevron-down text-gray-400" />
      </div>
    </div>
  );
};

export default TrackFilter;
