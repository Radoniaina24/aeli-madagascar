"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaCertificate,
  FaChartPie,
  FaCog,
  FaTasks,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function Sidebar() {
  const pathName = usePathname();
  const menuItems = [
    { icon: <MdDashboard />, label: "Tableau de bord", href: "/student" },
    { icon: <FaBookOpen />, label: "Mes Cours", href: "/student/cours" },
    { icon: <FaCalendarAlt />, label: "Calendrier", href: "#" },
    { icon: <FaTasks />, label: "Devoirs", href: "#" },
    { icon: <FaCertificate />, label: "Certificats", href: "#" },
    { icon: <FaChartPie />, label: "Statistiques", href: "#" },
    { icon: <FaCog />, label: "Paramètres", href: "#" },
  ];
  return (
    <aside className="w-full md:w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-blue-800 flex items-center justify-center text-white text-2xl font-bold mb-2">
          JP
        </div>
        <h2 className="text-lg font-bold">Jean Petit</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Étudiant en Master
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">
          Menu
        </h3>

        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${
              pathName === item.href ? "bg-blue-100 text-blue-800" : ""
            } flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">
          Progression globale
        </h3>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 text-blue-800">
                En cours
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-800">
                68%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: "68%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400"
            ></div>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-blue-50 dark:bg-blue-900 rounded-lg p-3">
        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
          Objectif hebdomadaire
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          12h / 15h d'étude
        </p>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-yellow-400 h-2.5 rounded-full"
            style={{ width: "80%" }}
          ></div>
        </div>
      </div>
    </aside>
  );
}
