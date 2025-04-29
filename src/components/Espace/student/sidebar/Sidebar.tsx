"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsCalendarCheckFill } from "react-icons/bs";
import { CiHome } from "react-icons/ci";
import { FaGraduationCap, FaTasks } from "react-icons/fa";
import {
  IoBookOutline,
  IoCalendar,
  IoCalendarClearOutline,
  IoCalendarOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

export default function Sidebar({ sidebarOpen }: { sidebarOpen: boolean }) {
  const pathName = usePathname();
  const menuItems = [
    {
      icon: <IoHomeOutline className="text-xl text-blue-500" />,
      label: "Tableau de bord",
      href: "/student",
    },
    {
      icon: <IoCalendarClearOutline className="text-xl text-red-500" />,
      label: "Calendrier",
      href: "#",
    },
    {
      icon: <IoBookOutline className="text-xl text-yellow-600" />,
      label: "Mes Cours",
      href: "/student/cours",
    },
    { icon: <FaTasks className="text-xl" />, label: "Exercices", href: "#" },
    {
      icon: <BsCalendarCheckFill className="text-xl text-green-500" />,
      label: "Corrigés",
      href: "#",
    },
    // { icon: <FaCertificate />, label: "Certificats", href: "#" },
    // { icon: <FaChartPie />, label: "Statistiques", href: "#" },
    // { icon: <FaCog />, label: "Paramètres", href: "#" },
    // {
    //   icon: <TbLogout2 className="text-xl text-red-700" />,
    //   label: "Deconnecter",
    //   href: "",
    // },
  ];
  return (
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } shadow-sm transition-all duration-300 fixed h-full bg-white text-gray-600 z-5`}
    >
      <div className="h-full pb-4 flex flex-col">
        <nav className="flex-1">
          <div className="flex  items-center justify-center py-5">
            <FaGraduationCap
              className={`text-red-400 text-4xl ${sidebarOpen ? "mr-2" : ""} `}
            />
            {sidebarOpen && (
              <span className="text-md font-bold">E-Learning Pro</span>
            )}
          </div>

          <ul className="space-y-2 px-2 mt-10 text-sm">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={` ${
                    sidebarOpen ? "justify-start" : "justify-center"
                  } flex items-center  p-2 rounded-lg  hover:text-black transition-colors whitespace-nowrap`}
                >
                  {item.icon}
                  {sidebarOpen && <span className="ml-5">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

{
  /* <aside className="w-full md:w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
<div className="flex flex-col items-center mb-6">
  <div className="w-20 h-20 rounded-full bg-blue-800 flex items-center justify-center text-white text-2xl font-bold mb-2">
    JP
  </div>
  <h2 className="text-lg font-bold">Jean Petit</h2>
  <p className="text-sm text-gray-500 dark:text-gray-400">
    Étudiant en Licence
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
</aside> */
}
