"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaGraduationCap, FaTasks } from "react-icons/fa";
import {
  IoBookOutline,
  IoCalendarClearOutline,
  IoHomeOutline,
} from "react-icons/io5";
import {
  MdOutlinePlayLesson,
  MdOutlineLibraryBooks,
  MdOutlineHistoryEdu,
} from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface SidebarProps {
  sidebarOpen: boolean;
}

export default function Sidebar({ sidebarOpen }: SidebarProps) {
  const pathname = usePathname();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleCoursesMenu = () => setIsCoursesOpen((prev) => !prev);

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
      subItems: [
        {
          icon: <MdOutlinePlayLesson className="text-lg text-emerald-500" />,
          label: "Cours Actifs",
          href: "/student/cours/actifs",
        },
        {
          icon: <MdOutlineHistoryEdu className="text-lg text-purple-500" />,
          label: "Cours Terminés",
          href: "/student/cours/termines",
        },
        {
          icon: <MdOutlineLibraryBooks className="text-lg text-pink-500" />,
          label: "Tous les cours",
          href: "/student/cours",
        },
      ],
    },
    {
      icon: <FaTasks className="text-xl" />,
      label: "Exercices",
      href: "#",
    },
    {
      icon: <BsCalendarCheckFill className="text-xl text-green-500" />,
      label: "Corrigés",
      href: "#",
    },
  ];

  return (
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } shadow-sm transition-all duration-300 fixed h-full bg-white text-gray-600 z-5`}
    >
      <div className="h-full pb-4 flex flex-col">
        <nav className="flex-1">
          <div className="flex items-center justify-center py-5">
            <FaGraduationCap
              className={`text-red-400 text-4xl ${sidebarOpen ? "mr-2" : ""}`}
            />
            {sidebarOpen && (
              <span className="text-md font-bold">E-Learning Pro</span>
            )}
          </div>

          <ul className="space-y-2 px-2 mt-10 text-sm">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={toggleCoursesMenu}
                      className={`${
                        sidebarOpen ? "justify-between" : "justify-center"
                      } flex items-center w-full p-2 rounded-lg hover:text-black transition-colors`}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        {sidebarOpen && (
                          <span className="ml-5">{item.label}</span>
                        )}
                      </div>
                      {sidebarOpen &&
                        (isCoursesOpen ? (
                          <FiChevronUp className="text-gray-400" />
                        ) : (
                          <FiChevronDown className="text-gray-400" />
                        ))}
                    </button>
                    {isCoursesOpen && sidebarOpen && (
                      <ul className="ml-10 mt-1 space-y-1">
                        {item.subItems.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={sub.href}
                              className={`flex items-center gap-2 py-1 px-2 text-sm text-gray-600 rounded hover:bg-gray-100 ${
                                pathname === sub.href
                                  ? "font-semibold text-black"
                                  : ""
                              }`}
                            >
                              {sub.icon}
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`${
                      sidebarOpen ? "justify-start" : "justify-center"
                    } flex items-center p-2 rounded-lg hover:text-black transition-colors`}
                  >
                    {item.icon}
                    {sidebarOpen && <span className="ml-5">{item.label}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
