import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav
      class={`w-full font-medium block flex-grow lg:flex lg:items-center lg:w-auto ${
        props.showMobileMenu ? "block bg-slate-50 z-10 p-4" : "hidden"
      }`}
    >
      <div class="text-sm lg:flex-grow">
        <a
          href="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-500  hover:text-black mr-4"
        >
          Home
        </a>
        <Link to="/products">
          <p class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4">
            Products
          </p>
        </Link>

        <Link to="/blog">
          <p class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4">
            Blog
          </p>
        </Link>
        <Link to="/about">
          <p class="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4">
            About Us
          </p>
        </Link>
      </div>
      <div>
        <a
          class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gray-200 text-black hover:bg-gray-200/80 h-9 rounded-md px-4  max-lg:mt-3"
          href="/login"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Nav;
