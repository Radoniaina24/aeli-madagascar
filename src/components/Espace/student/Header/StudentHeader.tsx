import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface StudentHeaderProps {
  toggleSidebar: () => void;
  // logout: () => void;
}

const menuItems = [{ label: "Profil", href: "/student" }];

export default function StudentHeader({
  toggleSidebar,
}: // logout,
StudentHeaderProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleLogout = async () => {
    router.push("/");
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="px-5 md:px-8 py-5 flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="mr-4 cursor-pointer rounded focus:outline-none"
        >
          <FaBars className="text-xl" />
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Caleb
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  caleb@gmail.com
                </span>
              </div>
              <ul className="py-2">
                {menuItems.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
