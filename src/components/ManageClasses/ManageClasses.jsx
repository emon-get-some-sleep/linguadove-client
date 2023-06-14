import React, { useState } from 'react';
import usePopularClasses from '../../hooks/usePopularClasses';

import AdminSingleClasses from '../SingleClasses/AdminSingleClasses';
import { Slide, Zoom } from 'react-awesome-reveal';

const ManageClasses = () => {
  const [popularClasses, , refetch] = usePopularClasses();
  const [currentId, setCurrentId] = useState();
    return (
        <div>
        <Slide>
        <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center mb-10">
         Manage Classes
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
                <th className="bg-[#2f57ef] text-white font-bold">Status</th>
                <th className="bg-[#2f57ef] text-white font-bold">Approve</th>
                <th className="bg-[#2f57ef] text-white font-bold">Deny</th>
                <th className="bg-[#2f57ef] text-white font-bold">Feedback</th>
              </tr>
            </thead>
  
            <tbody>
              
              {
              popularClasses.map(rowData => <AdminSingleClasses currentId={currentId} setCurrentId={setCurrentId} refetch={refetch} key={rowData.name} rowData={rowData}></AdminSingleClasses>)
            }
            </tbody>
          </table>
        </div>
        </Zoom>
      </div>
    );
};

export default ManageClasses;