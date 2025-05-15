import React from "react";
import dayjs from "dayjs";
import DeleteUserCandidate from "../Actions/DeleteUserCandidate";
import { useStaffContext } from "../context/StaffContext";
import EditUserStaff from "../Actions/EditUserCandidate";

export default function DesktopTable() {
  const { visibleColumns, handleSort, sortColumn, sortDirection, data } =
    useStaffContext();
  dayjs.locale("en");
  const formatDate = (
    isoDate: string | number | Date | dayjs.Dayjs | null | undefined
  ) => {
    return dayjs(isoDate).format("DD MMMM YYYY ");
  };
  const getStatusClass = (status: string) => {
    switch (status) {
      case "super_admin":
        return "bg-green-500 text-gray-600";
      case "admin":
        return "bg-blue-100 text-blue-800";
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
          {visibleColumns.role && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">Rôle</div>
            </th>
          )}
          {visibleColumns.actions && (
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-black uppercase tracking-wider"
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

              {visibleColumns.role && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(
                      user.role
                    )}`}
                  >
                    {user.role === "admin" ? "Admin" : "Super admin"}
                  </span>
                </td>
              )}
              {visibleColumns.actions && (
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex  items-center justify-center  ">
                    <EditUserStaff user={user} />
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
