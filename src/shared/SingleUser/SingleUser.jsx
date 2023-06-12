import React, { useId } from 'react';
import Swal from 'sweetalert2';

const SingleUser = ({userInfo, refetch}) => {
    const {_id, name, email, role} = userInfo;
    const makeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
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
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
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
        <button onClick={() => makeInstructor(userInfo)} className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white font-bold py-2 px-4 rounded">
            Make Instructor
          </button>
        </td>
        <td>
          <button onClick={() => makeAdmin(userInfo)} className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white font-bold py-2 px-4 rounded">
            Make Admin
          </button>
        </td>
        
      </tr>
    );
};

export default SingleUser;