import Login from "@/components/Auth/Login/Login";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "AELI - Inscription",
};
export default function page() {
  return <Login />;
}
