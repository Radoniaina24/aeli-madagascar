import Login from "@/components/Auth/Login/Login";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "AELI - Connexion",
};
export default function page() {
  return <Login />;
}
