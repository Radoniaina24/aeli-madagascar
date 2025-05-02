import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import { FiLogOut, FiMail, FiUser } from "react-icons/fi";
import { TbUserPentagon } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "@/redux/features/authSlice";
import { useLogoutMutation } from "@/lib/api/authApi";

interface StudentHeaderProps {
  toggleSidebar: () => void;
  // logout: () => void;
}

const menuItems = [
  { label: "Profil", href: "/student", icon: <TbUserPentagon /> },
  { label: "Allez au site", href: "/", icon: <FaHome /> },
];

export default function StudentHeader({
  toggleSidebar,
}: // logout,
StudentHeaderProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutMutation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const user = useSelector(selectUser);
  // console.log(user);
  const handleLogout = async () => {
    try {
      await logoutUser("").unwrap();
      dispatch(logout());
      router.push("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
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
            className="flex items-center gap-2 px-3  rounded-full bg-white   transition"
          >
            <span className="text-xs  text-gray-800">
              {user?.firstName} <br /> {user?.lastName}
            </span>
            <div>
              <CgProfile className="text-blue-600 font-light" size={27} />
            </div>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2">
                {menuItems.map(({ label, href, icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="block px-4 py-2    text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <div className="w-full flex items-center gap-2  text-sm text-gray-500 hover:bg-gray-100">
                        {icon} {label}
                      </div>
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiLogOut className="text-sm" />
                    <span>Sign out</span>
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
