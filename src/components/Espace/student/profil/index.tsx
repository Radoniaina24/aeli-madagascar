"use client";
import { useGetUserQuery } from "@/lib/api/authApi";
import Image from "next/image";
import React from "react";
import UserSkeleton from "./UserSkeleton";

export default function Profil() {
  const { data, isLoading, error } = useGetUserQuery("");

  const user = data?.user || data?.user?.user;
  if (isLoading) {
    return <UserSkeleton />;
  }
  // console.log(user);
  return (
    <div className="bg-gray-50 py-8 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className=" bg-white  shadow-lg rounded-lg w-full   flex items-center justify-center px-4 py-10">
          <div className="">
            {/* Image centrée */}
            <div className="flex justify-center">
              <Image
                src={user?.student.photo.url}
                alt={`${user.firstName} ${user.lastName}`}
                width={150}
                height={150}
                className="rounded-full border-4 border-blue-500 object-cover w-36 h-36"
              />
            </div>

            {/* Informations utilisateur */}
            <div className="text-center mt-6">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                {user.email}
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium text-gray-700 dark:text-white">
                    Niveau d’étude :
                  </span>{" "}
                  {user?.student.studyPeriod}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium text-gray-700 dark:text-white">
                    Financement :
                  </span>{" "}
                  {user?.student.funding}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
