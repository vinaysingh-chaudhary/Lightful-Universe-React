import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { SiSaturn } from "react-icons/si";
import { GiGalaxy } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="w-[100%] h-[100%] flex justify-evenly items-center rounded-md bg-[#cbcbcb4d]">
      <button className="w-[30%]  text-white h-[70%] hover:border-b-2 bg-[#5a5a5a4b] rounded-md dark:hover:border-[#1e8285] hover:scale-[1.05] focus:bg-[#bab7b782] hover:bg-[#bab7b782]">
        <NavLink
          to="/"
          className=" w-full h-full flex justify-center items-center gap-2 focus:bg-[#bab7b782] rounded-md"
        >
          Glipmse{" "}
          <span>
            <GiGalaxy className="hover:rotate-180 transition-all text-lg" />
          </span>
        </NavLink>
      </button>

      <button className="w-[30%]  text-white h-[70%] hover:border-b-2 bg-[#5a5a5a83] rounded-md dark:hover:border-[#1e8285] hover:scale-[1.05] hover:bg-[#bab7b782]">
        <NavLink
          to="/related"
          className=" w-full h-full flex justify-center items-center gap-2 focus:bg-[#bab7b782] rounded-md"
        >
          Universe{" "}
          <span>
            <SiSaturn className="hover:rotate-180 transition-all text-lg" />
          </span>{" "}
        </NavLink>
      </button>

      <button className="w-[30%]  text-white h-[70%] hover:border-b-2 bg-[#5a5a5a83] rounded-md dark:hover:border-[#1e8285] hover:scale-[1.05] focus:bg-[#bab7b782] hover:bg-[#bab7b782]">
        <NavLink
          to="/search"
          className=" w-full h-full flex justify-center items-center gap-2 focus:bg-[#bab7b782] rounded-md"
        >
          Search{" "}
          <span>
            <FaSearch className="text-lg" />
          </span>
        </NavLink>
      </button>
    </div>
  );
}
