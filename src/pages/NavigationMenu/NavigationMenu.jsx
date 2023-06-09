import React from "react";
import { Link } from "react-router-dom";
import logo from '/dove.png'

const NavigationMenu = () => {
  return (
    <div className="pt-[60px]">
      <nav className="flex items-center justify-between p-4 bg-white text-[#192335] rounded-lg shadow-lg">
        {/* First Part */}
        <div className=" text-lg font-bold flex items-center">
            <img src={logo} className="max-w-[50px] max-h-[50px]" alt="" />
             <span className="text-gradient bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-transparent bg-clip-text">LinguaDove</span>
        </div>

        {/* Second Part */}
        <div className="flex space-x-4 font-medium">
          <Link to="/" className="hover:text-[#2f57ef]">
            Home
          </Link>
          <Link to="/pages" className="hover:text-[#2f57ef]">
            Pages
          </Link>
          <Link to="/dashboard" className="hover:text-[#2f57ef]">
            Dashboard
          </Link>
          <Link to="/blogs" className="hover:text-[#2f57ef]">
            Blogs
          </Link>
          <Link to="/courses" className="hover:text-[#2f57ef]">
            Courses
          </Link>
        </div>

        {/* Third Part */}
        <div>
          <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;
