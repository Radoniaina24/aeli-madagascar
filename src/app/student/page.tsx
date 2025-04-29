import StudentDashBoard from "@/components/Espace/student/Dashboard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Espace-Etudiant",
};

export default async function page() {
  return <StudentDashBoard />;
}
