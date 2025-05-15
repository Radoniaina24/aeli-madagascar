import React, { JSX } from "react";
import { FaCalendarCheck, FaRegAddressBook, FaRegUser } from "react-icons/fa";
import { IoBookOutline, IoHomeOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";

export interface MenuItem {
  icon?: JSX.Element;
  label: string;
  href?: string;
  children?: MenuItem[]; // récursif
}

/**
 * Génère dynamiquement les éléments de menu en fonction du rôle utilisateur.
 * @param userRole Rôle actuel de l'utilisateur (ex : "super admin", "admin", etc.)
 */
export const getMenuItems = (userRole: string): MenuItem[] => {
  const items: MenuItem[] = [
    {
      icon: <IoHomeOutline className="text-xl text-blue-500" />,
      label: "Tableau de bord",
      href: "/admin",
    },
    {
      icon: <PiUsersThree className="text-xl text-pink-500" />,
      label: "Candidats",
      children: [
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
  if (userRole === "super_admin" || userRole === "admin") {
    items.push({
      icon: <IoBookOutline className="text-xl text-purple-600" />,
      label: "Cours",
      children: [
        {
          label: "Licence",
          children: [
            {
              label: "L1",
              children: [
                { label: "S1", href: "/admin/cours/licence/l1/s1" },
                { label: "S2", href: "/admin/cours/licence/l1/s2" },
              ],
            },
            {
              label: "L2",
              children: [
                { label: "S3", href: "/admin/cours/licence/l2/s3" },
                { label: "S4", href: "/admin/cours/licence/l2/s4" },
              ],
            },
            {
              label: "L3",
              children: [
                { label: "S5", href: "/admin/cours/licence/l3/s5" },
                { label: "S6", href: "/admin/cours/licence/l3/s6" },
              ],
            },
          ],
        },
        {
          label: "Master",
          children: [
            {
              label: "M1",
              children: [
                { label: "S1", href: "/admin/cours/master/m1/s1" },
                { label: "S2", href: "/admin/cours/master/m1/s2" },
              ],
            },
            {
              label: "M2",
              children: [
                { label: "S3", href: "/admin/cours/master/m2/s3" },
                { label: "S4", href: "/admin/cours/master/m2/s4" },
              ],
            },
          ],
        },
      ],
    });
  }

  if (userRole === "super_admin") {
    items.splice(1, 0, {
      icon: <FaRegUser className="text-xl text-yellow-600" />,
      label: "Utilisateurs",
      href: "/admin/staff",
    });
  }

  return items;
};
