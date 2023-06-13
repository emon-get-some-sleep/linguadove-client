import React, { useState } from 'react';
import usePopularClasses from '../../hooks/usePopularClasses';

import AdminSingleClasses from '../SingleClasses/AdminSingleClasses';

const ManageClasses = () => {
  const [popularClasses, , refetch] = usePopularClasses();
  const [currentId, setCurrentId] = useState();
    return (
        <div>
        <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center mb-10">
         Manage Classes
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
                <th className="bg-[#2f57ef] text-white font-bold">Status</th>
                <th className="bg-[#2f57ef] text-white font-bold">Approve</th>
                <th className="bg-[#2f57ef] text-white font-bold">Deny</th>
                <th className="bg-[#2f57ef] text-white font-bold">Feedback</th>
              </tr>
            </thead>
  
            <tbody>
              {/* row 1 */}
              {/* <tr>
                <td>
                  <p>English For Beginners</p>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="rounded-full w-12 h-12">
                        <img
                          src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2019/02/team_01.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>Rebecca Hill</td>
                <td>20</td>
                <td>
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white font-bold py-2 px-4 rounded">
                    Approve
                  </button>
                </td>
                <td>
                  <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white font-bold py-2 px-4 rounded">
                    Deny
                  </button>
                </td>
                <td>
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white font-bold py-2 px-4 rounded">
                    Feedback
                  </button>
                </td>
              </tr> */}
              {
              popularClasses.map(rowData => <AdminSingleClasses currentId={currentId} setCurrentId={setCurrentId} refetch={refetch} key={rowData.name} rowData={rowData}></AdminSingleClasses>)
            }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageClasses;