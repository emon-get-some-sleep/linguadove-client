import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '/dove.png'
import './NavigationMenu.css';
import { FaBars, FaBeer, FaTimes } from 'react-icons/fa';
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const NavigationMenu = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const {user, logOut} = useContext(AuthContext);
  // console.log(user?.photoURL);

  const handleButtonClick = () => {
    setIsDivVisible(!isDivVisible);
  };
  const LogOut = () => {
    logOut()
        .then(() => {
          Swal.fire(
            'Successfully Logged Out',
            'Please Come back!',
            'success'
          )
         })
        .catch(error => console.log(error));
}
  return (
    <div className="pt-[60px] p-3 md:p-2">
      <nav className="flex items-center justify-between p-4 bg-white text-[#192335] rounded-lg shadow-lg">
        {/* First Part */}
        <div className="md:text-lg text-sm font-bold flex items-center">
            <img src={logo} className="max-w-[50px] max-h-[50px] object-cover" alt="" />
             <span className="text-gradient bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-transparent bg-clip-text">LinguaDove</span>
        </div>

        {/* Second Part */}
        <div className="md:flex space-x-4 font-medium hidden">
          <Link to="/" className="hover:text-[#2f57ef]">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-[#2f57ef]">
            Dashboard
          </Link>
          <Link to="/instructors" className="hover:text-[#2f57ef]">
          Instructors
          </Link>
          <Link to="/classes" className="hover:text-[#2f57ef]">
            Classes
          </Link>
        </div>

        {/* Third Part */}
        <div className="flex items-center gap-3">
          {user 
          ?
          <>
          <button onClick={LogOut} className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hidden md:block">
            Log Out
          </button>
          <div className="tooltip" data-tip={user?.displayName}>
          <img src={user?.photoURL} className="w-[30px] h-[30px] rounded-[50%]" alt="" />
        </div>
        </>
          :
          <>
          <Link to="/login">
          <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hidden md:block">
            Login
          </button>
          </Link>
          </>
          
          }
        </div>
        <button className="md:hidden" onClick={handleButtonClick}>
        {isDivVisible ? <FaTimes /> : <FaBars />}
      </button>
      </nav>
      <div>
      
      <div className={`animated-div p-2  ${isDivVisible ? 'visible' : ''}`}>
     <div className="flex justify-between items-center">
      <div className="md:text-lg text-sm font-bold flex items-center">
      <img src={logo} className="max-w-[50px] max-h-[50px] object-cover" alt="" />
             <span className="text-gradient bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-transparent bg-clip-text">LinguaDove</span>
      </div>
      <div>
      <button className="md:hidden" onClick={handleButtonClick}>
        {isDivVisible ? <FaTimes /> : <FaBars />}
      </button>
      </div>
     </div>

      <div className="flex flex-col items-center justify-center space-y-4 font-medium">
          <Link to="/" className="hover:text-[#2f57ef] border-b flex justify-center w-full">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-[#2f57ef] border-b flex justify-center w-full">
            Dashboard
          </Link>
          <Link to="/classses" className="hover:text-[#2f57ef] border-b flex justify-center w-full">
            Classes
          </Link>
          <Link to="/instructors" className="hover:text-[#2f57ef] border-b flex justify-center w-full">
          Instructors
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
