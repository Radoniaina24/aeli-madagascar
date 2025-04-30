"use client";
import { selectUser } from "@/redux/features/authSlice";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Head() {
  const user = useSelector(selectUser);
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Tableau de Bord</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Bienvenue, {user?.lastName} {user?.firstName}. Continuez votre
          apprentissage !
        </p>
      </div>
      {/* <div className="mt-4 md:mt-0 flex space-x-2">
        <button className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center space-x-1 !rounded-button whitespace-nowrap cursor-pointer">
          <FaPlus />
          <span>Explorer les cours</span>
        </button>
      </div> */}
    </div>
  );
}
