import { Smartphone, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const navItems = [
  { to: "/", label: "Home" },
  { to: "/apps", label: "Apps" },
  { to: "/installation", label: "Installation" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white px-3">
      <div className="flex h-16 items-center container mx-auto justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-r from-[#1a2980] to-[#26d0ce]">
            <Smartphone className="h-5 w-5 text-white" />
          </div>
          <span className="bg-linear-to-r from-[#1a2980] to-[#26d0ce] bg-clip-text text-transparent">
            AppVault
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-md font-medium ${
                  isActive ? "text-[#1a2980] border-b-2 border-b-[#1a2980]" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* GitHub Button */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <button className="btn text-md text-white px-3 py-2 rounded-full bg-linear-to-r from-[#1a2980] to-[#26d0ce] font-semibold gap-2 flex items-center">
            <FaGithub className="h-6 w-6" />
            Contribution
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setIsOpen(false)} // close menu on click
                className={({ isActive }) =>
                  `text-md font-medium ${
                    isActive ? "text-[#1a2980]" : "text-gray-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full text-md text-white px-3 py-2 rounded-full bg-linear-to-r from-[#1a2980] to-[#26d0ce] font-semibold gap-2 flex items-center justify-center mt-2">
                <FaGithub className="h-6 w-6" />
                Contribution
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;