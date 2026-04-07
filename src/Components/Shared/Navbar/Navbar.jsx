import { Smartphone } from 'lucide-react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';


const navItems = [
  { to: "/", label: "Home" },
  { to: "apps", label: "Apps" },
  { to: "installation", label: "Installation" },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white container mx-auto ">
    <div className="container flex h-16 items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-r from-[#1a2980] to-[#26d0ce]">
          <Smartphone className="h-5 w-5 text-white " />
        </div>
        <span className="bg-linear-to-r from-[#1a2980] to-[#26d0ce] bg-clip-text text-transparent">AppVault</span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              ` text-md font-medium  ${
                isActive
                  ? " text-[#1a2980] border-b-2 border-b-[#1a2980]"
                  : ""
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn text-md text-white px-3 py-2 rounded-full bg-linear-to-r from-[#1a2980] to-[#26d0ce] font-semibold gap-2 flex items-center">
          <FaGithub className="h-6 w-6" />
          Contribution
        </button>
      </a>
    </div>
  </header>
    );
};

export default Navbar;