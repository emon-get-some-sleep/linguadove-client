import React from "react";
import usePopularTeacher from "../../hooks/usePopularTeacher";
import SingleTeacher from "../../shared/SingleTeacher/SingleTeacher";

const Instructors = () => {
  const [popularTeachers] = usePopularTeacher();
  console.log(popularTeachers);
  return (
    <div>
      <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center my-10">
        Instructors
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-[#B260EC] text-white font-bold">Name</th>
              <th className="bg-[#B260EC] text-white font-bold">Image</th>
              <th className="bg-[#B260EC] text-white font-bold">Email</th>
              <th className="bg-[#B260EC] text-white font-bold">
                Number Of Classes
              </th>
              <th className="bg-[#B260EC] text-white font-bold"></th>
            </tr>
          </thead>

          <tbody>
            
            {
              popularTeachers.map(teacherInfo => <SingleTeacher key={teacherInfo.name} teacherInfo={teacherInfo}></SingleTeacher>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
