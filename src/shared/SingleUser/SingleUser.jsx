import React, { useId } from 'react';
import Swal from 'sweetalert2';

const SingleUser = ({userInfo, refetch}) => {
    const token = localStorage.getItem('access-token');
    const {_id, name, email, role} = userInfo;
    const makeAdmin = user =>{
        fetch(`https://lingua-dove-server-emon-get-some-sleep.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${token}`,
             
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire(
                    `Promoted ${name} to Admin!`,
                    'Good Job!',
                    'success'
                  )
            }
        })
    }
    const makeInstructor = user =>{
        fetch(`https://lingua-dove-server-emon-get-some-sleep.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${token}`,
             
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire(
                    `Promoted ${name} to Instructor!`,
                    'Good Job!',
                    'success'
                  )
            }
        })
    }
    return (
        <tr>
        <td>
          <p>{email}</p>
        </td>
        
        <td>{name}</td>

        <td> {role ? role : 'student'}</td>
        
        <td>
        {/* <button
          onClick={() => approveClass(rowData)}
          disabled={status == "pending" ? false : true}
          className={`text-white font-bold py-2 px-4 rounded ${
            status == "pending"
              ? "bg-gradient-to-r from-[#2f57ef] to-[#B260EC]"
              : "bg-[#c9c9c9] text-[#666666]"
          }`}
        >
          {status == "pending" ? "Approve" : "Approved"}
        </button> */}
        <button disabled={(role == 'admin' || role == 'instructor' ) ? true : false } onClick={() => makeInstructor(userInfo)} className={`${(role == 'admin' || role == 'instructor') ? "bg-[#c9c9c9] text-[#666666]" : "bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white" } font-bold py-2 px-4 rounded`}>
            Make Instructor
          </button>
        </td>
        <td>
          <button disabled={(role == 'admin' || role == 'instructor' ) ? true : false } onClick={() => makeAdmin(userInfo)} className={`${(role == 'admin' || role == 'instructor') ? "bg-[#c9c9c9] text-[#666666]" : "bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white" } font-bold py-2 px-4 rounded`}>
            Make Admin
          </button>
        </td>
        
      </tr>
    );
};

export default SingleUser;