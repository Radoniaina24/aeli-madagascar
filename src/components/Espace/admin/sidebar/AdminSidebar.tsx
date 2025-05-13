"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import { menuItems } from "./menu";

interface SidebarProps {
  sidebarOpen: boolean;
}
export default function AdminSidebar({ sidebarOpen }: SidebarProps) {
  const pathname = usePathname();
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };
  return (
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } hidden lg:block shadow-sm transition-all duration-300 fixed h-full bg-white text-gray-600`}
      style={{ zIndex: 99 }}
    >
      <div className="h-full pb-4 flex flex-col">
        <nav className="flex-1">
          <div className="flex items-center justify-center pt-4">
            <Image
              src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1746015465/admin_sxfcox.png"
              width={100}
              height={50}
              alt="log"
              className="rouded-full px-2"
            />
          </div>
          <ul className="space-y-2 px-2 mt-10 text-sm">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
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
                        (openSubmenus[item.label] ? (
                          <FiChevronUp className="text-gray-400" />
                        ) : (
                          <FiChevronDown className="text-gray-400" />
                        ))}
                    </button>
                    {openSubmenus[item.label] && sidebarOpen && (
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
                    href={item.href!}
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
