import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./shared/Logo";
import Profile from "./shared/Profile";
import Nav from "./shared/Nav";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleNavToggle = () => {
    setShowMobileMenu = !showMobileMenu;
  };
  return (
    <nav
      class="container h-14 flex justify-between bg-white flex-wrap py-2 px-5 border w-screen-4xl justify-center"
    >
      <Logo />

    <Nav showMobileMenu={showMobileMenu}/>
    <div class="block lg:hidden">
        <button
          class="flex items-center px-3 mb-3  rounded text-gray-600  hover:text-black dark:hover:border-white"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
