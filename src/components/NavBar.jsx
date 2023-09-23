import { FaBeer } from "react-icons/fa";
import { Si1001Tracklists } from "react-icons/si";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full py-6 navbar">
      <img
        src={logo}
        alt="this is the bank modern  logo"
        className="h-[32px] w-[124px]"
      />
      <ul className=" list-none hidden sm:flex  justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-center items-center">
        <img src={toggle ? close : menu} alt="" />
      </div>
    </nav>
  );
};

export default NavBar;
