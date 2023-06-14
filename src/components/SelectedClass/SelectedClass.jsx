import React from 'react';
import useSelectedClass from '../../hooks/useSelectedClass';
import SingleSelectClass from '../../shared/SingleSelectClass/SingleSelectClass';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
const SelectedClass = () => {
  const [selectedClasses, , refetch] = useSelectedClass();
  console.log(selectedClasses);
    return (
        <div>
       <Slide>
       <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center mb-10">
         Selected Classes
        </h2>
       </Slide>
        <Zoom>
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
                <th className="bg-[#2f57ef] text-white font-bold">PAY</th>
                <th className="bg-[#2f57ef] text-white font-bold">DELETE</th>
              </tr>
            </thead>
  
            <tbody>
              {/* row 1 */}

              {
                selectedClasses.map(rowData => <SingleSelectClass refetch={refetch} key={rowData._id} rowData={rowData}></SingleSelectClass>)
              }
            </tbody>
          </table>
        </div>
        </Zoom>
      </div>
    );
};

export default SelectedClass;