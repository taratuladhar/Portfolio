"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarCSS from "./navbar.module.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      className={`container-margin-navbar sticky top-0 z-[999] ${
        isVisible ? "" : NavbarCSS["nav-hidden"]
      }`}
    >
      <div className={`container-margin-navbar sticky top-0 z-[999]`}>
        <nav className="w-full m-1 py-5 px-12 flex flex-row items-center gap-x-5 text-lg font-bold text-gray-700 bg-white shadow-md rounded-md  md:justify-evenly">
          <Link
            href="/"
            className="hover:text-orange-400 shiny-navbar hidden md:block"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-400 shiny-navbar hidden md:block"
          >
            About me
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-orange-400 shiny-navbar hidden md:block"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-400 shiny-navbar hidden md:block"
          >
            Contact
          </Link>
          <div className="ml-auto md:hidden">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faClose : faBars} />
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden fixed top-20 bottom-0 w-full h-fit bg-white shadow-lg z-[1000] -mt-5">
            <nav className="flex flex-col items-center gap-y-4 p-4 mt-2">
              <Link
                href="/"
                className="hover:text-orange-400"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-orange-400"
                onClick={toggleMenu}
              >
                About me
              </Link>
              <Link
                href="/portfolio"
                className="hover:text-orange-400"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="hover:text-orange-400"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
