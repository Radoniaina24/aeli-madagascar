import React, { useEffect, useRef } from "react";

import dayjs from "dayjs";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useUsersContext } from "../context/UsersContext";
import ViewUserCandidate from "../Actions/ViewUserCandidate";
import EditUserCandidate from "../Actions/EditUserCandidate";
import DeleteUserCandidate from "../Actions/DeleteUserCandidate";

export default function MobileTable() {
  const { visibleColumns, currentPage, data } = useUsersContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [currentPage]); // 3. dépendance sur currentPage
  dayjs.locale("en");
  const formatDate = (
    isoDate: string | number | Date | dayjs.Dayjs | null | undefined
  ) => {
    return dayjs(isoDate).format("DD MMMM YYYY ");
  };
  const getStatusClass = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-500 text-gray-600";
      case "unpaid":
        return "bg-red-500 text-white";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };
  const users = data?.applications;
  return (
    <div
      ref={scrollRef}
      className="md:hidden"
      style={{
        height: "calc(100vh - 300px)",
        minHeight: "400px",
        maxHeight: "800px",
        overflowY: "auto",
      }}
    >
      {users.length > 0 ? (
        users.map((user: any) => (
          <div key={user._id} className="bg-white p-4 border-b border-gray-200">
            {visibleColumns.photo && (
              <div className="mb-4 flex justify-center">
                <img
                  className="h-20 w-20 rounded-full object-cover border-2 border-gray-200"
                  src={user.photo.url}
                  alt={`Photo de ${user.nom}`}
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user.nom
                    )}&background=random`;
                  }}
                />
              </div>
            )}
            {visibleColumns.nom && (
              <div className="mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {user.lastName} {user.firstName}
                </h3>
              </div>
            )}
            {visibleColumns.email && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 ">Email:</p>
                    </div>
                    <div className="inline-flex items-center text-base  text-gray-900 ">
                      {user.emailAddress}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.niveau && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 ">Niveau:</p>
                    </div>
                    <div className="inline-flex items-center text-base  text-gray-900 ">
                      {user.studyPeriod}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.dateInscription && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 "> Inscription:</p>
                    </div>
                    <div className="inline-flex items-center text-base  text-gray-900 ">
                      {formatDate(user.createdAt)}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.status && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 "> Status:</p>
                    </div>
                    <div
                      className={` px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full  text-gray-900 ${getStatusClass(
                        user.status
                      )}`}
                    >
                      {user.status === "unapproved" ? "Non validé" : "validé"}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.actions && (
              <div className="mt-4 gap-2 flex justify-end">
                {user.status === "unapproved" ? (
                  <>
                    {" "}
                    <ViewUserCandidate user={user} />
                    <EditUserCandidate user={user} />
                    <DeleteUserCandidate user={user} />
                  </>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="p-6 text-center text-gray-500">
          Aucun utilisateur trouvé
        </div>
      )}
    </div>
  );
}
