import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import ModalDetailsCandidate from "./ModalDetailsCandidate";

export default function ViewCours({ user }: { user: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  //   console.log(user.file.url);
  return (
    <>
      <div className="hidden md:block">
        <button
          onClick={() => setOpen(true)}
          className=" flex gap-2  items-center text-green-600 text-sm px-1 py-1 rounded-lg cursor-pointer whitespace-nowrap"
        >
          <a href={user.file.url} target="_blank" rel="noopener noreferrer">
            <FaEye className="w-5 h-5 text-green-500 cursor-pointer" />
          </a>
        </button>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-100 flex gap-2 items-center text-green-600 hover:bg-green-200 text-sm px-3 py-1 rounded-lg cursor-pointer whitespace-nowrap"
        >
          <a href={user.file.url} target="_blank" rel="noopener noreferrer">
            <FaEye className="w-5 h-5 text-green-500 cursor-pointer" />{" "}
          </a>
          <span>voir</span>
        </button>
      </div>
    </>
  );
}
