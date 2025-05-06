"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import HeaderRegister from "./HeaderRegister";
import StudentHeader from "../Espace/student/Header/StudentHeader";
import dynamic from "next/dynamic";
export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Vérification si on est sur une page commençant par "/student"
  const isStudentPage = pathname.startsWith("/student");
  const HeaderHome = dynamic(() => import("./HeaderHome"), { ssr: false });
  const renderHeader = () => {
    if (pathname === "/inscription") {
      return <HeaderRegister />;
    }
    if (isStudentPage) {
      return;
    }
    // Si on est sur la page d'accueil ou une page commençant par "/student"
    if (pathname === "/") {
      return <HeaderHome />;
    }
    return null;
  };

  return <>{renderHeader()}</>;
}
