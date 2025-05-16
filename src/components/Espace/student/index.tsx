"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import StudentHeader from "./Header/StudentHeader";

export default function Student({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // const user = useSelector(selectUser);
  // console.log(user);
  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 `}>
      <div className="flex  flex-1">
        <Sidebar sidebarOpen={sidebarOpen} />
        <main
          className={`flex-1 ${
            sidebarOpen ? "ml-64" : "ml-16"
          } transition-all duration-300 `}
        >
          <StudentHeader toggleSidebar={toggleSidebar} />
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
