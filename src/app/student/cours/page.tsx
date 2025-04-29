import Cours from "@/components/Espace/student/Cours";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Espace-Etudiant - Cours",
};
export default function page() {
  return <Cours />;
}
