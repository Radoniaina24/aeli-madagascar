import React from "react";

import TrackFilter from "./TrackFilter";
import LevelFilter from "./LevelFilter";
import YearFilter from "./YearFilter";
import SemesterFilter from "./SemesterFilter";
import AddCours from "../Actions/AddCours";
export default function Filter() {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          Liste des cours
        </h1>
        <AddCours />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <TrackFilter />
        <LevelFilter />
        <YearFilter />
        <SemesterFilter />
        {/* <VisibleColumn /> */}
      </div>
    </div>
  );
}
