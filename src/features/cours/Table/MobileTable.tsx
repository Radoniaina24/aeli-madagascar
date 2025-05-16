import React, { useEffect, useRef } from "react";
import dayjs from "dayjs";
import { useCoursContext } from "../context/CoursContext";
import DeleteCours from "../Actions/DeleteCours";
import EditCours from "../Actions/EditCours";
import ViewCours from "../Actions/ViewCours";

export default function MobileTable() {
  const { visibleColumns, currentPage, data } = useCoursContext();
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
      case "super_admin":
        return "bg-green-500 text-gray-600";
      case "admin":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };
  const cours = data?.cours;
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
      {cours.length > 0 ? (
        cours.map((item: any) => (
          <div key={item._id} className="bg-white p-4 border-b border-gray-200">
            {visibleColumns.track && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 ">Mention</p>
                    </div>
                    <div className="inline-flex items-center text-base  text-gray-900 ">
                      {item.track}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.level && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 ">Diplôme</p>
                    </div>
                    <div className="inline-flex items-center text-base  text-gray-900 ">
                      {item.level}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.year && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 ">Niveau</p>
                    </div>
                    <div className="inline-flex items-center text-base  text-gray-900 ">
                      {item.year}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.semester && (
              <ul className="mb-2 max-w-md  ">
                <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-gray-500 ">Semestre</p>
                    </div>
                    <div className="inline-flex items-center text-base  text-gray-900 ">
                      {item.semester}
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {visibleColumns.actions && (
              <div className="mt-4 gap-2 flex justify-end">
                <ViewCours user={item} />
                <EditCours user={item} />
                <DeleteCours user={item} />
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
