"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import HeaderHome from "./HeaderHome";
import HeaderRegister from "./HeaderRegister";
export default function Header() {
  const pathname = usePathname();
  // console.log(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const header =
    pathname === "/inscription" ? <HeaderRegister /> : <HeaderHome />;
  return header;
}
