import React, { JSX } from "react";

import { FaCalendarCheck, FaRegAddressBook, FaRegUser } from "react-icons/fa";
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
    href: "/admin/staff",
  },
  {
    icon: <PiUsersThree className="text-xl text-pink-500" />,
    label: "Candidats",
    subItems: [
      {
        icon: <FaRegAddressBook className="text-lg text-red-400" />,
        label: "Inscrits",
        href: "/admin/candidate",
      },
      {
        icon: <FaCalendarCheck className="text-lg text-green-400" />,
        label: "Validés",
        href: "/admin/users",
      },
    ],
  },
];
