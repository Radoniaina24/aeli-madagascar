import React from "react";

export default function StudentHeader() {
  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-8">
            <span className="text-yellow-400">E</span>-Learning
          </div>
        </div>
      </div>
    </header>
  );
}
