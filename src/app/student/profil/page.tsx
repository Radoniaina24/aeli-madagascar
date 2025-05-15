import Profil from "@/components/Espace/student/profil";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Espace-Etudiant - Profil",
};
export default function page() {
  return <Profil />;
}
