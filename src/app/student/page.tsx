import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Etudiant",
};

export default async function page() {
  return (
    <div className="mt-35">
      <div>
        <h1 className="text-2xl font-bold">
          Bienvenue sur le Dashboard Etudiant
        </h1>
      </div>
    </div>
  );
}
