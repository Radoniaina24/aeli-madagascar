import Student from "@/components/Espace/student";
import "../globals.css";
import AuthGuard from "@/components/Auth/Guard/AuthGuard";

export const metadata = {
  title: "Espace Étudiant - AELI Institute",
};

export default function EtudiantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <Student children={children} />
    </AuthGuard>
  );
}
