import React from 'react';
import useMyClasses from '../../hooks/useMyClasses';
import SingleClasses from '../SingleClasses/SingleClasses';

const MyClasses = () => {
  const [myClasses] = useMyClasses();
  console.log(myClasses);
    return (
        <div>
        <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center mb-10">
         My Classes
        </h2>
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
                <td>Approved</td>
                <td>
                  <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white font-bold py-2 px-4 rounded">
                    Update
                  </button>
                </td>
                <td>
                  Good Decision
                </td>
              </tr> */}
              {
                myClasses.map(rowData => <SingleClasses key={rowData._id} rowData={rowData}></SingleClasses>)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyClasses;