import ResetPassword from "@/components/Auth/reset-password/ResetPassword";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Reset password",
};

export default async function ResetPasswordPage({ params }: any) {
  return <ResetPassword token={params.resetToken} />;
}
