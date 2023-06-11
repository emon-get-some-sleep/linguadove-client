import React from 'react';
import {
    FaBirthdayCake,
    FaFacebookF,
    FaInstagram,
    FaMapMarker,
    FaTwitter,
  } from "react-icons/fa";

const PopularTeacher = ({teacherInfo}) => {
    const {name, image, age, location} = teacherInfo;
    return (
        <div className="bg-[#6A31C1] py-5 px-5 rounded-[30px]">
          <div className="my-[40px]">
            <h2 className="font-bold text-white text-2xl mb-5">
              {name}
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="flex items-center gap-2">
                <FaMapMarker className=" text-white" />
                <p className="text-white">{location}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBirthdayCake className=" text-white" />
                <p className="text-white">{age} years</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="max-w-[300px] max-h-[250px] relative instructor-images ml-[100px] mt-[80px]"
              src={image}
              alt=""
            />
          </div>

          <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-5">
            <button className="bg-[#FF9206] z-10 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
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
    );
};

export default PopularTeacher;