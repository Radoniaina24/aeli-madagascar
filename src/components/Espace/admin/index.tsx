"use client";
import React, { useState } from "react";
import AdminHeader from "./Header/AdminHeader";
import AdminSidebar from "./sidebar/AdminSidebar";

export default function Admin({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 `}>
      <div className="flex  flex-1">
        <AdminSidebar sidebarOpen={sidebarOpen} />
        <main
          className={`flex-1 ${
            sidebarOpen ? "ml-64" : "ml-16"
          } transition-all duration-300 `}
        >
          <AdminHeader toggleSidebar={toggleSidebar} />
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
