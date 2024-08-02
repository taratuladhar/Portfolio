"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarCSS from "./navbar.module.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setPrevScrollPos(window.scrollY);
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible =
        prevScrollPos > currentScrollPos || currentScrollPos < 100;
      setIsVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={` overflow-x-hidden sticky top-0 z-50 ${
        isVisible ? "" : NavbarCSS["nav-hidden"]
      }`}
    >
      <div
        className={`flex ${NavbarCSS["container-margin-navbar"]} flex-row items-center w-full px-12 py-5 m-1 text-lg font-bold text-gray-700 bg-white rounded-md shadow-md gap-x-5 md:justify-evenly`}
      >
        <Link
          href="/"
          className="hidden hover:text-orange-400 shiny-navbar md:block"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hidden hover:text-orange-400 shiny-navbar md:block"
        >
          About me
        </Link>
        <Link
          href="/portfolio"
          className="hidden hover:text-orange-400 shiny-navbar md:block"
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className="hidden hover:text-orange-400 shiny-navbar md:block"
        >
          Contact
        </Link>
        <div className="ml-auto md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faClose : faBars} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-20 bottom-0 w-full h-fit bg-white shadow-lg z-[1000] -mt-5">
          <nav className="flex flex-col items-center p-4 mt-2 gap-y-4">
            <Link href="/" className="hover:text-orange-400">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-400">
              About me
            </Link>
            <Link href="/portfolio" className="hover:text-orange-400">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-orange-400">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
