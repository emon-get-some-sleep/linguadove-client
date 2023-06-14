import React from 'react';
import useMyClasses from '../../hooks/useMyClasses';
import SingleClasses from '../SingleClasses/SingleClasses';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
const MyClasses = () => {
  const [myClasses] = useMyClasses();
  console.log(myClasses);
    return (
        <div>
       <Fade duration="5000">
       <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center mb-10">
         My Classes
        </h2>
       </Fade>
        <Zoom>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            
              
              <thead>
              <tr>
                <th className="bg-[#2f57ef] text-white font-bold">Class Name</th>
                <th className="bg-[#2f57ef] text-white font-bold">Image</th>
                <th className="bg-[#2f57ef] text-white font-bold">Instructor name</th>
                <th className="bg-[#2f57ef] text-white font-bold">Total Enrolled Students</th>
                <th className="bg-[#2f57ef] text-white font-bold">Available Seats</th>
                <th className="bg-[#2f57ef] text-white font-bold">Status</th>
                <th className="bg-[#2f57ef] text-white font-bold">Update</th>
                <th className="bg-[#2f57ef] text-white font-bold">Feedback</th>
              </tr>
              </thead>
              
            
  
            <tbody>
              
              {
                myClasses.map(rowData => <SingleClasses key={rowData._id} rowData={rowData}></SingleClasses>)
              }
            </tbody>
          </table>
        </div>
        </Zoom>
      </div>
    );
};

export default MyClasses;