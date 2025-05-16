"use client";
import React from "react";
import Filter from "./Filter/Filter";
import Table from "./Table/Table";
import Pagination from "./Pagination";

export default function Cours() {
  return (
    <div className="bg-gray-50 py-8 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-[93vw] mx-auto w-full">
          <Filter />
          <Table />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
