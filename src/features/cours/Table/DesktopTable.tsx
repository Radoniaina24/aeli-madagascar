import React from "react";
import dayjs from "dayjs";
import EditUserStaff from "../Actions/EditUserCandidate";
import DeleteUserStaff from "../Actions/DeleteUserCandidate";
import { useCoursContext } from "../context/CoursContext";

export default function DesktopTable() {
  const { visibleColumns, data } = useCoursContext();

  const cours = data?.cours;
  // console.log(users);
  return (
    <table className="min-w-full divide-y divide-gray-200 hidden md:table">
      <thead className="bg-gray-50 sticky top-0 z-[95]">
        <tr>
          {visibleColumns.title && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">Titre</div>
            </th>
          )}
          {visibleColumns.track && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">Mention</div>
            </th>
          )}
          {visibleColumns.level && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">Diplôme</div>
            </th>
          )}
          {visibleColumns.year && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">Niveau</div>
            </th>
          )}
          {visibleColumns.semester && (
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider cursor-pointer"
            >
              <div className="flex items-center">Semestre</div>
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
        {cours.length > 0 ? (
          cours.map((item: any, index: any) => (
            <tr
              key={item._id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 transition-colors duration-150`}
            >
              {visibleColumns.title && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {item.title}
                  </div>
                </td>
              )}
              {visibleColumns.track && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {item.track}
                  </div>
                </td>
              )}
              {visibleColumns.level && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item.level}</div>
                </td>
              )}

              {visibleColumns.year && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item.year}</div>
                </td>
              )}

              {visibleColumns.semester && (
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item.semester}</div>
                </td>
              )}
              {visibleColumns.actions && (
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex  items-center justify-center  ">
                    <EditUserStaff user={item} />
                    <DeleteUserStaff user={item} />
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
              Aucun cours trouvé
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
