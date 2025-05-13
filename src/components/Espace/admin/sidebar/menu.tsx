import React, { JSX } from "react";

import { FaRegAddressBook, FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

import { PiUsersThree } from "react-icons/pi";
interface MenuItem {
  icon: JSX.Element;
  label: string;
  href?: string;
  subItems?: {
    icon: JSX.Element;
    label: string;
    href: string;
  }[];
}

export const menuItems: MenuItem[] = [
  {
    icon: <IoHomeOutline className="text-xl text-blue-500" />,
    label: "Tableau de bord",
    href: "/admin",
  },
  {
    icon: <FaRegUser className="text-xl text-yellow-600" />,
    label: "Utilisateurs",
    subItems: [
      {
        icon: <FaRegAddressBook className="text-lg text-purple-500" />,
        label: "Liste",
        href: "/admin/users",
      },
    ],
  },
  {
    icon: <PiUsersThree className="text-xl text-pink-500" />,
    label: "Candidats",
    subItems: [
      {
        icon: <FaRegAddressBook className="text-lg text-red-400" />,
        label: "Liste",
        href: "/admin/candidate",
      },
    ],
  },
];
