"use client";
import { useGetUserQuery, useRefreshTokenQuery } from "@/lib/api/authApi";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated, setUser } from "@/redux/features/authSlice";
import PreLoader from "@/components/PreLoader";
import Loading from "@/components/Loading/Loading";

export default function AuthGuard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data, error, isLoading } = useGetUserQuery("");
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);
  useEffect(() => {
    if (data) {
      // Si le refresh token est valide, mettre à jour le store avec le nouveau access token
      // Vous pouvez stocker l'access token dans le Redux store ou dans localStorage
      dispatch(setUser(data.user));
    }
    if (error) {
      // Redirige les utilisateurs non authentifiés vers la page de connexion
      router.replace("/");
    }
  }, [data, dispatch, error, router]);

  if (isLoading) {
    return <PreLoader />;
  }
  if (!isAuth) return;
  return <Loading>{children}</Loading>;
}
