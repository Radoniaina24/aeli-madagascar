import "../globals.css";
import AuthGuard from "@/components/Auth/Guard/AuthGuard";
import Admin from "@/components/Espace/admin";

export const metadata = {
  title: "Espace Admin - AELI Institute",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <Admin children={children} />
    </AuthGuard>
  );
}
