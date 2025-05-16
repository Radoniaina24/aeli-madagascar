import React, { JSX } from "react";
import { BsJournalBookmark } from "react-icons/bs";
import {
  FaBook,
  FaBusinessTime,
  FaCalendarCheck,
  FaLayerGroup,
  FaLeaf,
  FaRegAddressBook,
  FaRegUser,
} from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { IoBookOutline, IoHomeOutline } from "react-icons/io5";
import { MdSchool } from "react-icons/md";
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

  if (userRole === "super_admin") {
    items.push({
      icon: <IoBookOutline className="text-xl text-purple-600" />,
      label: "Cours",
      href: "/admin/cours",
      // children: [
      //   {
      //     label: "BEN", //ben
      //     icon: <FaBusinessTime className="text-xl text-purple-600" />,
      //     children: [
      //       {
      //         label: "Licence",
      //         icon: <GiDiploma className="text-xl text-red-500" />,
      //         children: [
      //           {
      //             label: "L1",
      //             icon: <FaLayerGroup className="text-lg text-blue-600" />,
      //             children: [
      //               {
      //                 label: "S1",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/ben/licence/l1/s1",
      //               },
      //               {
      //                 label: "S2",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/ben/licence/l1/s2",
      //               },
      //             ],
      //           },
      //           {
      //             label: "L2",
      //             icon: <FaLayerGroup className="text-lg text-blue-700" />,
      //             children: [
      //               {
      //                 label: "S3",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/ben/licence/l2/s3",
      //               },
      //               {
      //                 label: "S4",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/ben/licence/l2/s4",
      //               },
      //             ],
      //           },
      //           {
      //             label: "L3",
      //             icon: <FaLayerGroup className="text-lg text-blue-800" />,
      //             children: [
      //               {
      //                 label: "S5",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/ben/licence/l3/s5",
      //               },
      //               {
      //                 label: "S6",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/ben/licence/l3/s6",
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //       {
      //         label: "Master",
      //         icon: <GiDiploma className="text-xl text-green-600" />,
      //         children: [
      //           {
      //             label: "M1",
      //             icon: <MdSchool className="text-lg text-green-700" />,
      //             children: [
      //               {
      //                 label: "S1",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/ben/master/m1/s1",
      //               },
      //               {
      //                 label: "S2",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/ben/master/m1/s2",
      //               },
      //             ],
      //           },
      //           {
      //             label: "M2",
      //             icon: <MdSchool className="text-lg text-green-800" />,
      //             children: [
      //               {
      //                 label: "S3",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/ben/master/m2/s3",
      //               },
      //               {
      //                 label: "S4",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/ben/master/m2/s4",
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     label: "BEL",
      //     icon: <FaLeaf className="text-xl text-green-600" />,
      //     children: [
      //       {
      //         label: "Licence",
      //         icon: <GiDiploma className="text-xl text-red-500" />,
      //         children: [
      //           {
      //             label: "L1",
      //             icon: <FaLayerGroup className="text-lg text-blue-600" />,
      //             children: [
      //               {
      //                 label: "S1",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/bel/licence/l1/s1",
      //               },
      //               {
      //                 label: "S2",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/bel/licence/l1/s2",
      //               },
      //             ],
      //           },
      //           {
      //             label: "L2",
      //             icon: <FaLayerGroup className="text-lg text-blue-700" />,
      //             children: [
      //               {
      //                 label: "S3",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/bel/licence/l2/s3",
      //               },
      //               {
      //                 label: "S4",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/bel/licence/l2/s4",
      //               },
      //             ],
      //           },
      //           {
      //             label: "L3",
      //             icon: <FaLayerGroup className="text-lg text-blue-800" />,
      //             children: [
      //               {
      //                 label: "S5",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/bel/licence/l3/s5",
      //               },
      //               {
      //                 label: "S6",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/bel/licence/l3/s6",
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //       {
      //         label: "Master",
      //         icon: <GiDiploma className="text-xl text-green-600" />,
      //         children: [
      //           {
      //             label: "M1",
      //             icon: <MdSchool className="text-lg text-green-700" />,
      //             children: [
      //               {
      //                 label: "S1",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/bel/master/m1/s1",
      //               },
      //               {
      //                 label: "S2",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/bel/master/m1/s2",
      //               },
      //             ],
      //           },
      //           {
      //             label: "M2",
      //             icon: <MdSchool className="text-lg text-green-800" />,
      //             children: [
      //               {
      //                 label: "S3",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/master/m2/s3",
      //               },
      //               {
      //                 label: "S4",
      //                 icon: (
      //                   <BsJournalBookmark className="text-md text-gray-700" />
      //                 ),
      //                 href: "/admin/cours/master/m2/s4",
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ],
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
