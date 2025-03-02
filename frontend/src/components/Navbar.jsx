import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  p-5 bg-black text-white">
      <h1 className="text-xl font-bold">FACILITY GO</h1>
      <ul className="hidden md:flex items-start gap-20 font-medium">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/facilities">
          <li>Facilities</li>
        </NavLink>
        <NavLink to="/about">
          <li>About Us</li>
        </NavLink>
      </ul>
      <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
    </div>
  );
};

export default Navbar;
