import ForgotPassword from "@/components/Auth/forgot-password/ForgotPassword";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "AELI - Mot de passe oublié",
};
export default function page() {
  return <ForgotPassword />;
}
