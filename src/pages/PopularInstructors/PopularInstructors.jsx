import React from "react";
import "./PopularInstructors.css";
import {
  FaBirthdayCake,
  FaFacebookF,
  FaInstagram,
  FaMapMarker,
  FaTwitter,
} from "react-icons/fa";

const PopularInstructors = () => {
  return (
    <div className="mt-[100px]">
      <h2 className="text-[#192335] font-bold text-[42px] text-center">
        Popular Instructors
      </h2>
      <p className="mt-6 text-[#6B7385] text-center mb-[50px]">
        Below are some of our outstanding teachers
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-[#6A31C1] py-5 px-5 rounded-[30px]">
          <div className="my-[40px]">
            <h2 className="font-bold text-white text-2xl mb-5">
              Elizabeth Lews
            </h2>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <FaMapMarker className=" text-white" />
                <p className="text-white">Newyourk, US</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBirthdayCake className=" text-white" />
                <p className="text-white">28 years</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="max-w-[300px] max-h-[250px] relative instructor-images ml-[100px] mt-[80px]"
              src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2019/02/team_01.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-row-reverse justify-around">
            <button className="bg-[#FF9206] z-10 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded hidden md:block">
              View More
            </button>
            <div className="flex items-center gap-[10px]">
              <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FF9206] text-white text-lg hover:bg-[#2f57ef] hover:text-white duration-300 z-10">
                {" "}
                <FaFacebookF />{" "}
              </span>
              <span className="w-[40px] h-[40px]  rounded-full flex items-center justify-center bg-[#FF9206] text-white text-lg hover:bg-[#2f57ef] hover:text-white duration-300 z-10">
                {" "}
                <FaTwitter />{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#6A31C1] py-5 px-5 rounded-[30px]">
          <div className="my-[40px]">
            <h2 className="font-bold text-white text-2xl mb-5">
              Elizabeth Lews
            </h2>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <FaMapMarker className=" text-white" />
                <p className="text-white">Newyourk, US</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBirthdayCake className=" text-white" />
                <p className="text-white">28 years</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="max-w-[300px] max-h-[250px] relative instructor-images ml-[100px] mt-[80px]"
              src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2019/02/team_01.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-row-reverse justify-around">
            <button className="bg-[#FF9206] z-10 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded hidden md:block">
              View More
            </button>
            <div className="flex items-center gap-[10px]">
              <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FF9206] text-white text-lg hover:bg-[#2f57ef] hover:text-white duration-300 z-10">
                {" "}
                <FaFacebookF />{" "}
              </span>
              <span className="w-[40px] h-[40px]  rounded-full flex items-center justify-center bg-[#FF9206] text-white text-lg hover:bg-[#2f57ef] hover:text-white duration-300 z-10">
                {" "}
                <FaTwitter />{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#6A31C1] py-5 px-5 rounded-[30px]">
          <div className="my-[40px]">
            <h2 className="font-bold text-white text-2xl mb-5">
              Elizabeth Lews
            </h2>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <FaMapMarker className=" text-white" />
                <p className="text-white">Newyourk, US</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBirthdayCake className=" text-white" />
                <p className="text-white">28 years</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="max-w-[300px] max-h-[250px] relative instructor-images ml-[100px] mt-[80px]"
              src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2019/02/team_01.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-row-reverse justify-around">
            <button className="bg-[#FF9206] z-10 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded hidden md:block">
              View More
            </button>
            <div className="flex items-center gap-[10px]">
              <span className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FF9206] text-white text-lg hover:bg-[#2f57ef] hover:text-white duration-300 z-10">
                {" "}
                <FaFacebookF />{" "}
              </span>
              <span className="w-[40px] h-[40px]  rounded-full flex items-center justify-center bg-[#FF9206] text-white text-lg hover:bg-[#2f57ef] hover:text-white duration-300 z-10">
                {" "}
                <FaTwitter />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
