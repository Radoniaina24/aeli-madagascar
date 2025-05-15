import Users from "@/features/users";
import { UserProvider } from "@/features/users/context/UsersContext";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Candidats - AELI",
};

export default async function page() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}
