import React from "react";
import "./PopularInstructors.css";
import {
  FaBirthdayCake,
  FaFacebookF,
  FaInstagram,
  FaMapMarker,
  FaTwitter,
} from "react-icons/fa";
import PopularTeacher from "../../shared/PopularTeacher/PopularTeacher";
import usePopularTeacher from "../../hooks/usePopularTeacher";
import { Fade } from "react-awesome-reveal";
const PopularInstructors = () => {
  const [popularTeachers] = usePopularTeacher();
  console.log(popularTeachers);
  return (
    <div className="mt-[100px]">
      <Fade delay="300">
      <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center">
        Popular Instructors
      </h2>
      </Fade>
      <Fade delay="300">
      <p className="mt-6 text-[#6B7385] text-center mb-[50px]">
        Below are some of our outstanding teachers
      </p>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 py-5">
        
      {
        popularTeachers.slice(0,6).map(teacherInfo => <PopularTeacher key={teacherInfo.name} teacherInfo={teacherInfo}></PopularTeacher>)
      }
        
      </div>
    </div>
  );
};

export default PopularInstructors;
