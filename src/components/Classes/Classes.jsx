import React from "react";
import usePopularClasses from "../../hooks/usePopularClasses";
import GeneralSingleClass from "../SingleClasses/GeneralSingleClass";

const Classes = () => {
  const [popularClasses] = usePopularClasses();
  const validClasses = popularClasses.filter(eachClass => {
    // if(eachClass.status !== 'pending' || eachClass.status !== 'denied'){
    //   return eachClass;
    // }
    if(eachClass.status == 'pending' || eachClass.status === 'denied'){
      return 0;
    }
    return eachClass;
  });
  // console.log(validClasses);
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
              <th className="bg-[#2f57ef] text-white font-bold">Enrolled</th>
              <th className="bg-[#2f57ef] text-white font-bold">User</th>
            </tr>
          </thead>

          <tbody>
           
            {
              validClasses.map(rowData => <GeneralSingleClass key={rowData.name} rowData={rowData}></GeneralSingleClass>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
