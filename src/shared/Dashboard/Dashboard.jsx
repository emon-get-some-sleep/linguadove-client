import React from "react";
import { FaBookOpen, FaGraduationCap, FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import NavigationMenu from "../../pages/NavigationMenu/NavigationMenu";

const Dashboard = () => {
  return (
    <div>
      <NavigationMenu></NavigationMenu>
     <div className='bg-gradient-to-br from-[#A4B4F8] to-[#D7AEF2] h-[10vh] flex items-center justify-center mb-4'>
        <h2 className="text-2xl text-center text-white font-bold">Dashboard</h2>
     </div>
    <div className="flex gap-5">
    <div className="w-[250px] h-[100vh] bg-white p-3 md:p-2 left-0 border-2 rounded-lg hidden md:block">
        <div className="text-[#2F57EF] space-y-5">
            <Link to="/dashboard" className="flex items-center gap-2 cursor-pointer font-medium border-b-2 my-3"> <FaHome /> <span>Dashboard</span></Link>
            <Link to="/dashboard/selectedclass" className=" flex items-center gap-2 font-medium border-b-2 my-3"> <FaGraduationCap /> <span>My Selected Class</span></Link>
            <Link to="/dashboard/enrolledclasses" className=" flex items-center gap-2 font-medium border-b-2 my-3"> <FaBookOpen /> <span>My Enrolled Class</span></Link>
            <Link to="/dashboard/addaclass" className=" flex items-center gap-2 font-medium border-b-2 my-3"> <FaBookOpen /> <span>Add a Class</span></Link>
            <Link to="/dashboard/myclasses" className=" flex items-center gap-2 font-medium border-b-2 my-3"> <FaBookOpen /> <span>My Classes</span></Link>
            <Link to="/dashboard/manageclasses" className=" flex items-center gap-2 font-medium border-b-2 my-3"> <FaBookOpen /> <span>Manage Classes</span></Link>
            <Link to="/dashboard/manageusers" className=" flex items-center gap-2 font-medium border-b-2 my-3"> <FaBookOpen /> <span>Manage Users</span></Link>
        </div>
        
    </div>
    <div className="w-[90%] mx-auto">
            <Outlet></Outlet>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
