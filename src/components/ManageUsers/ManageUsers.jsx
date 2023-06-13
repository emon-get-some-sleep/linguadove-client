import React from 'react';
import useUsers from '../../hooks/useUsers';
import SingleUser from '../../shared/SingleUser/SingleUser';

const ManageUsers = () => {
    const [allUsers, , refetch] = useUsers();

    return (
        <div className=''>
        <h2 className="text-[#192335] font-bold text-[25px] md:text-[42px] text-center mb-10">
         Manage Users
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#2f57ef] text-white font-bold">User Email</th>
                <th className="bg-[#2f57ef] text-white font-bold">Name</th>
                <th className="bg-[#2f57ef] text-white font-bold">Role</th>
                <th className="bg-[#2f57ef] text-white font-bold">Make Instructor</th>
                <th className="bg-[#2f57ef] text-white font-bold">Make Admin</th>
               
              </tr>
            </thead>
  
            <tbody>
              {/* row 1 */}
           {
            allUsers.map(userInfo => <SingleUser refetch={refetch} key={userInfo.email} userInfo={userInfo}></SingleUser>)
           }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageUsers;