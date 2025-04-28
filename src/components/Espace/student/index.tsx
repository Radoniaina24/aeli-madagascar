import React from "react";
import Sidebar from "./sidebar/Sidebar";

export default function Student() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
