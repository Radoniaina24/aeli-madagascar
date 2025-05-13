"use client";
import { useGetAllCandidateQuery } from "@/lib/api/applicationApi";
import { useGetAllUserCandidateQuery } from "@/lib/api/userApi";
import { JSX } from "react";
import { FaUsers, FaBook, FaClock, FaCheckCircle } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiUsersThree } from "react-icons/pi";

type StatsCardProps = {
  icon: JSX.Element;
  label: string;
  value: string | number;
  iconBgColor: string;
};

const StatsCard = ({ icon, label, value, iconBgColor }: StatsCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center">
    <div className={`rounded-full p-3 mr-4 ${iconBgColor}`}>{icon}</div>
    <div>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

// 🔄 Skeleton Loader
const StatsCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center animate-pulse">
    <div className="rounded-full bg-gray-200 dark:bg-gray-700 p-3 mr-4 w-10 h-10" />
    <div className="flex-1 space-y-2">
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
      <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
    </div>
  </div>
);

export default function StatsCards() {
  const {
    data: candidateData,
    isLoading: isLoadindApplication,
    error: errorApplication,
  } = useGetAllCandidateQuery("");

  const {
    data: userData,
    isLoading: isLoadindUser,
    error,
  } = useGetAllUserCandidateQuery("");

  const isLoading = isLoadindApplication || isLoadindUser;
  const stats = [
    {
      icon: (
        <PiUsersThree className="text-blue-800 dark:text-blue-200 text-xl" />
      ),
      label: "Candidat inscrit",
      value: candidateData?.totalApplications || 0,
      iconBgColor: "bg-blue-100 dark:bg-blue-900",
    },
    {
      icon: (
        <FaUsers className="text-yellow-600 dark:text-yellow-400 text-xl" />
      ),
      label: "Utilisateurs",
      value: userData?.totalUsers || 0,
      iconBgColor: "bg-yellow-100 dark:bg-yellow-900",
    },
    {
      icon: (
        <FaMoneyBillTrendUp className="text-green-600 dark:text-green-400 text-xl" />
      ),
      label: "Revenu",
      value: 130000 + " Ar",
      iconBgColor: "bg-green-100 dark:bg-green-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {isLoading
        ? stats.map((_, index) => <StatsCardSkeleton key={index} />)
        : stats.map((stat, index) => <StatsCard key={index} {...stat} />)}
    </div>
  );
}
