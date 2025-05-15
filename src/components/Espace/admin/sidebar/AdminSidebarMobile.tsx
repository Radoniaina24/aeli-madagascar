"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, JSX, SetStateAction, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/authSlice";
import { getMenuItems } from "./menu";

interface MenuItem {
  icon?: JSX.Element;
  label: string;
  href?: string;
  children?: MenuItem[];
}

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
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

  // Composant récursif pour gérer menu et sous-menu
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
                  className="flex items-center w-full p-2 rounded-lg hover:text-black transition-colors justify-between"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {isOpen && item.children && (
                  <SidebarMenu items={item.children} level={level + 1} />
                )}
              </>
            ) : item.href ? (
              <Link
                href={item.href}
                className={`flex items-center p-2 rounded-lg hover:text-black transition-colors gap-2 ${
                  isActive ? "font-semibold text-black" : "text-gray-600"
                }`}
                onClick={() => setSidebarOpen(false)} // Fermer la sidebar mobile au clic
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ) : (
              <div className="flex items-center p-2 rounded-lg text-gray-600 gap-2">
                {item.icon}
                <span>{item.label}</span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-[150] flex">
          <aside
            className="shadow-sm duration-300 translate-x-0 fixed h-screen bg-white text-gray-600 w-64"
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

          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );
}
