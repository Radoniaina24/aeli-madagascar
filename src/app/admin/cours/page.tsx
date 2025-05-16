import Cours from "@/features/cours";
import { CoursProvider } from "@/features/cours/context/CoursContext";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cours - AELI",
};

export default async function page() {
  return (
    <CoursProvider>
      <Cours />
    </CoursProvider>
  );
}
