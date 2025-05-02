"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "@/lib/api/authApi";
import {
  setUser,
  selectIsAuthenticated,
  selectUser,
} from "@/redux/features/authSlice";
import PreLoader from "@/components/PreLoader";
import Loading from "@/components/Loading/Loading";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, error, isLoading } = useGetUserQuery("");
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  // Mise à jour du user
  useEffect(() => {
    if (data) {
      dispatch(setUser(data.user));
    }
  }, [data, dispatch]);

  // Redirection si non authentifié
  useEffect(() => {
    if (error) {
      router.replace("/");
    }
  }, [error, router]);

  // Redirection si l'utilisateur n'est pas admin
  useEffect(() => {
    if (isAuthenticated && user && user.role !== "admin") {
      router.replace("/");
    }
  }, [isAuthenticated, user, router]);

  if (isLoading || !isAuthenticated || !user) {
    return <PreLoader />;
  }

  if (user.role !== "admin") {
    return null; // On attend la redirection
  }

  return <Loading>{children}</Loading>;
}
