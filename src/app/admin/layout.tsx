import "@/app/globals.css";
import AdminGuard from "@/components/Auth/Guard/AuthGuardAdmin";
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
    <AdminGuard>
      <Admin children={children} />
    </AdminGuard>
  );
}
