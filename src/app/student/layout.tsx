import Sidebar from "@/components/Espace/student/sidebar/Sidebar";
import "../globals.css";

export const metadata = {
  title: "Espace Étudiant - AELI Institute",
};

export default function EtudiantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
