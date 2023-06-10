import React from 'react';

const ManageUsers = () => {
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
                <th class="bg-[#2f57ef] text-white font-bold">User Email</th>
                <th class="bg-[#2f57ef] text-white font-bold">Image</th>
                <th class="bg-[#2f57ef] text-white font-bold">User name</th>
                <th class="bg-[#2f57ef] text-white font-bold">Make Instructor</th>
                <th class="bg-[#2f57ef] text-white font-bold">Make Admin</th>
               
              </tr>
            </thead>
  
            <tbody>
              {/* row 1 */}
              <tr>
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
                
                <td>
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white font-bold py-2 px-4 rounded">
                    Make Instructor
                  </button>
                </td>
                <td>
                  <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white font-bold py-2 px-4 rounded">
                    Make Admin
                  </button>
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageUsers;