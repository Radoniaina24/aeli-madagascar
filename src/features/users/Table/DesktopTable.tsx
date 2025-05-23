import React from "react";

import { FaSortDown, FaSortUp } from "react-icons/fa";
import dayjs from "dayjs";
import { useUsersContext } from "../context/UsersContext";
import EditUserCandidate from "../Actions/EditUserCandidate";
import ViewUserCandidate from "../Actions/ViewUserCandidate";
import DeleteUserCandidate from "../Actions/DeleteUserCandidate";

export default function DesktopTable() {
  const { visibleColumns, handleSort, sortColumn, sortDirection, data } =
    useUsersContext();
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
  const users = data?.users;
  // console.log(users);
  return (
    <table className="min-w-full divide-y divide-gray-200 hidden md:table">
      <thead className="bg-gray-50 sticky top-0 z-[95]">
        <tr>
          {visibleColumns.photo && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
            >
              Photo
            </th>
          )}
          {visibleColumns.nom && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
              // onClick={() => handleSort("nom")}
            >
              <div className="flex items-center">Nom</div>
            </th>
          )}
          {visibleColumns.prenom && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("nom")}
            >
              <div className="flex items-center">Prénom</div>
            </th>
          )}
          {visibleColumns.email && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("email")}
            >
              <div className="flex items-center">Email</div>
            </th>
          )}

          {visibleColumns.niveau && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">Niveau</div>
            </th>
          )}
          {visibleColumns.mention && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">Mention</div>
            </th>
          )}
          {visibleColumns.ecolage && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">Frais scolaires</div>
            </th>
          )}
          {visibleColumns.status && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">Status</div>
            </th>
          )}
          {visibleColumns.actions && (
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-black uppercase tracking-wider"
            >
              Actions
            </th>
          )}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.length > 0 ? (
          users.map((user: any, index: any) => (
            <tr
              key={user._id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-colors duration-150`}
            >
              {visibleColumns.photo && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
                        src={user.student?.photo?.url}
                        alt={`Photo de ${user.nom}`}
                      />
                    </div>
                  </div>
                </td>
              )}
              {visibleColumns.nom && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.lastName}
                  </div>
                </td>
              )}
              {visibleColumns.prenom && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.firstName}
                  </div>
                </td>
              )}
              {visibleColumns.email && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
              )}

              {visibleColumns.niveau && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user?.student?.studyPeriod}
                </td>
              )}
              {visibleColumns.mention && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user?.student?.funding}
                </td>
              )}
              {visibleColumns.ecolage && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span className="text-2xl font-bold text-blue-600">
                      {" "}
                      {user?.schoolFees}
                    </span>
                    <span className="text-sm text-gray-500">/ 10</span>
                  </div>
                </td>
              )}
              {visibleColumns.status && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(
                      user.status
                    )}`}
                  >
                    {user.status === "unpaid" ? "Non payé" : "payé"}
                  </span>
                </td>
              )}
              {visibleColumns.actions && (
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex  items-center  ">
                    <ViewUserCandidate user={user} />
                    <EditUserCandidate user={user} />
                    <DeleteUserCandidate user={user} />
                  </div>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={Object.values(visibleColumns).filter(Boolean).length}
              className="px-6 py-4 text-center text-gray-500"
            >
              Aucun utilisateur trouvé
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
