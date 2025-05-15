import React from "react";

export default function UserSkeleton() {
  return (
    <div className="bg-gray-50 py-8 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg w-full flex items-center justify-center px-4 py-10">
          <div className="animate-pulse w-full max-w-sm">
            {/* Image Skeleton */}
            <div className="flex justify-center">
              <div className="rounded-full bg-gray-300 w-36 h-36 border-4 border-blue-300"></div>
            </div>

            {/* Informations utilisateur */}
            <div className="text-center mt-6 space-y-4">
              <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="h-4 bg-gray-200 rounded w-4/5 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-3/5 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
