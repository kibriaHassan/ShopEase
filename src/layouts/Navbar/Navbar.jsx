import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = "hover:text-gray-700 transition duration-200";
  const activeClass = "text-gray-900 font-semibold";

  return (
    <div className="text-sm w-full">
      {/* Top Offer Banner */}
      <div className="text-center font-medium py-2 bg-gray-100 text-gray-800">
        <p>
          🎉 Exclusive Price Drop! Hurry,{" "}
          <span className="underline underline-offset-2">Offer Ends Soon!</span>
        </p>
      </div>

      {/* Navbar */}
      <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 bg-white text-gray-900 shadow transition-all">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer text-gray-900">
          ShopEase
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 md:pl-20 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* CTA Button */}
        <NavLink
          to="/get-started"
          className="hidden md:inline bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700 active:scale-95 transition-all"
        >
          Get Started
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          aria-label="menu-btn"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 30 30"
            fill="currentColor"
          >
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-white shadow-md p-6 flex flex-col items-center space-y-4 md:hidden animate-fadeIn">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Home
            </NavLink>
            <NavLink
              to="/categories"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Categories
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/pricing"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              Contact
            </NavLink>

            <NavLink
              to="/get-started"
              onClick={() => setMenuOpen(false)}
              className="bg-gray-900 text-white w-40 py-2 rounded-full hover:bg-gray-700 active:scale-95 transition-all text-center"
            >
              Get Started
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
