import React from "react";
import usePopularClasses from "../../hooks/usePopularClasses";
import SingleClasses from "../SingleClasses/SingleClasses";

const Classes = () => {
  const [popularClasses] = usePopularClasses();
  return (
    <div>
      <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center my-10">
        Classes
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-[#2f57ef] text-white font-bold">Class Name</th>
              <th className="bg-[#2f57ef] text-white font-bold">Image</th>
              <th className="bg-[#2f57ef] text-white font-bold">Instructor name</th>
              <th className="bg-[#2f57ef] text-white font-bold">Available seats</th>
              <th className="bg-[#2f57ef] text-white font-bold">Price</th>
              <th className="bg-[#2f57ef] text-white font-bold">User</th>
            </tr>
          </thead>

          <tbody>
           
            {
              popularClasses.map(rowData => <SingleClasses key={rowData.name} rowData={rowData}></SingleClasses>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
