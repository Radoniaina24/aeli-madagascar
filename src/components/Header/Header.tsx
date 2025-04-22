"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-800">
            AELI <span className="text-yellow-600">Madagascar</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-800 hover:text-blue-700 font-medium"
          >
            Accueil
          </Link>
          <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">
            Programmes
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">
            À propos
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">
            Admission
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">
            Contact
          </a>
          <a
            href="#"
            className="bg-blue-700 text-white px-4 py-2 rounded-button hover:bg-blue-800 transition duration-300 whitespace-nowrap cursor-pointer"
          >
            Postuler maintenant
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className=" md:hidden text-gray-800 focus:outline-none cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full">
          <div className=" items-center flex flex-col space-y-4">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Accueil
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Programmes
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              À propos
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Admission
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="bg-blue-700 text-white px-4 py-2 rounded-button hover:bg-blue-800 transition duration-300 text-center whitespace-nowrap cursor-pointer"
            >
              Postuler maintenant
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
