"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { JSX, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import { getMenuItems } from "./menu";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/authSlice";

interface MenuItem {
  icon?: JSX.Element;
  label: string;
  href?: string;
  children?: MenuItem[];
}

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

  const user: any = useSelector(selectUser);
  const role = user?.role || user?.user?.role || "guest";
  const menuItems = getMenuItems(role);

  /** Composant récursif pour afficher le menu et ses sous-menus */
  const SidebarMenu = ({
    items,
    level = 0,
  }: {
    items: MenuItem[];
    level?: number;
  }) => (
    <ul
      className={`${
        level > 0 ? "ml-6 mt-1 space-y-1" : "space-y-2 px-2 mt-10 text-sm"
      }`}
    >
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = openSubmenus[item.label];
        const isActive = item.href ? pathname === item.href : false;

        return (
          <li key={item.label}>
            {hasChildren ? (
              <>
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className={`flex items-center w-full p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                    sidebarOpen ? "justify-between" : "justify-center"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {sidebarOpen && <span>{item.label}</span>}
                  </div>
                  {sidebarOpen &&
                    (isOpen ? <FiChevronUp /> : <FiChevronDown />)}
                </button>
                {isOpen && sidebarOpen && item.children && (
                  <SidebarMenu items={item.children} level={level + 1} />
                )}
              </>
            ) : item.href ? (
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                  sidebarOpen ? "justify-start gap-2" : "justify-center"
                } ${isActive ? "font-semibold text-black" : "text-gray-600"}`}
              >
                {item.icon}
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            ) : (
              // Item sans href ni enfants (rare, mais sûr)
              <div
                className={`flex items-center p-2 rounded-lg ${
                  sidebarOpen ? "justify-start gap-2" : "justify-center"
                } text-gray-600`}
              >
                {item.icon}
                {sidebarOpen && <span>{item.label}</span>}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

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
              alt="logo"
              className="rounded-full px-2"
            />
          </div>

          <SidebarMenu items={menuItems} />
        </nav>
      </div>
    </aside>
  );
}
