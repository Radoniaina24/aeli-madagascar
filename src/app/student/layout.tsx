import Student from "@/components/Espace/student";
import "../globals.css";

export const metadata = {
  title: "Espace Étudiant - AELI Institute",
};

export default function EtudiantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Student children={children} />;
}
