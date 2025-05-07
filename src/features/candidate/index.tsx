"use client";
import React, { useState } from "react";
import Filter from "./Filter/Filter";
import Table from "./Table/Table";
import Pagination from "./Pagination";

export default function Candidate() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 z-10">
      <div className="px-4 sm:px-6 lg:px-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* En-tête et filtres */}
          <Filter />
          {/* Tableau */}
          <Table />
          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </div>
  );
}
