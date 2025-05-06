import React from "react";
import { useCandidateContext } from "../context/CandidateContext";
import dayjs from "dayjs";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import ViewCandidate from "../Actions/ViewCandidate";
import EditCandidate from "../Actions/EditCandidate";
import DeleteCandidate from "../Actions/DeleteCandidate";

export default function MobileTable() {
  const { visibleColumns, handleSort, sortColumn, sortDirection, data } =
    useCandidateContext();
  dayjs.locale("en");
  const formatDate = (
    isoDate: string | number | Date | dayjs.Dayjs | null | undefined
  ) => {
    return dayjs(isoDate).format("DD MMMM YYYY ");
  };
  const getStatusClass = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500 text-gray-600";
      case "unapproved":
        return "bg-red-500 text-white";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };
  const users = data?.applications;
  return (
    <div
      className="overflow-x-auto"
      style={{
        height: "calc(100vh - 300px)",
        minHeight: "400px",
        maxHeight: "800px",
      }}
    >
      <div
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
            <div
              key={user._id}
              className="bg-white p-4 border-b border-gray-200"
            >
              {visibleColumns.photo && (
                <div className="mb-4 flex justify-center">
                  <img
                    className="h-20 w-20 rounded-full object-cover border-2 border-gray-200"
                    src={user.photo}
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
                <div className="mt-3 flex justify-end">
                  <ViewCandidate user={user} />
                  <EditCandidate user={user} />
                  <DeleteCandidate user={user} />
                  {/* <button
                    className="bg-green-100 flex items-center text-green-600 hover:bg-green-200 text-sm px-3 py-1 rounded-lg mr-2 cursor-pointer whitespace-nowrap"
                    onClick={() => {
                      // setViewingUser(user);
                      // setIsViewModalOpen(true);
                    }}
                  >
                    <FaEye className="mr-1" /> Voir
                  </button>
                  <button
                    className="bg-blue-100 flex items-center text-blue-600 hover:bg-blue-200 text-sm px-3 py-1 rounded-lg mr-2 cursor-pointer whitespace-nowrap"
                    onClick={() => {
                      // setEditingUser(user);
                      // setIsEditModalOpen(true);
                    }}
                  >
                    <FaEdit className="mr-1" /> Modifier
                  </button>
                  <button
                    className="bg-red-100 text-red-600 flex items-center hover:bg-red-200 text-sm px-3 py-1 rounded-lg cursor-pointer whitespace-nowrap"
                    onClick={() => {
                      // setUserToDelete(user);
                      // setIsDeleteModalOpen(true);
                    }}
                  >
                    <FaTrash className="mr-1" /> Supprimer
                  </button> */}
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
    </div>
  );
}
