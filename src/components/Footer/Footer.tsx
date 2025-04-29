"use client";
import React from "react";
import FooterHome from "./FooterHome";
import { usePathname } from "next/navigation";
import FooterRegister from "./FooterRegister";

export default function Footer() {
  const pathname = usePathname();
  // Vérification si on est sur une page commençant par "/student"
  const isStudentPage = pathname.startsWith("/student");
  const renderFooter = () => {
    if (pathname === "/inscription") {
      return <FooterRegister />;
    }
    if (isStudentPage) {
      return;
    }
    // Si on est sur la page d'accueil ou une page commençant par "/student"
    if (pathname === "/") {
      return <FooterHome />;
    }
    return null;
  };
  return <>{renderFooter()}</>;
}
