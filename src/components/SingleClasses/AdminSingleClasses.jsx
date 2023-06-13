import React from 'react';
import Swal from 'sweetalert2';

const AdminSingleClasses = ({rowData, refetch}) => {
    const {_id, name, instructor_name, image, available_seat, price, status} = rowData;
    
    const approveClass = whatClass => {
        fetch(`http://localhost:5000/class/admin/approve/${whatClass._id}`, {
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
    const denyClass = whatClass => {
        fetch(`http://localhost:5000/class/admin/deny/${whatClass._id}`, {
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
    return (
        <tr>
              <td>
                <p>{name}</p>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="rounded-full w-12 h-12">
                      <img
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{instructor_name}</td>
              <td>{available_seat}</td>
              <td>$ {price}</td>
              <td className={`${status ? '' : 'text-green-500 font-medium'}`}> {status ? status : 'approved'}</td>
              <td>
                
                  <button onClick={() => approveClass(rowData)} disabled={status == 'pending' ? false : true} className={ `text-white font-bold py-2 px-4 rounded ${status == 'pending' ? 'bg-gradient-to-r from-[#2f57ef] to-[#B260EC]' : 'bg-[#c9c9c9] text-[#666666]'}`}>
                 { status == 'pending' ? 'Approve' : 'Approved'}
                </button>
                
                
              </td>
              <td>
                
                 
              <button onClick={() => denyClass(rowData)} disabled={status == 'pending' ? false : true} className={ `text-white font-bold py-2 px-4 rounded ${status == 'pending' ? 'bg-gradient-to-r from-[#2f57ef] to-[#B260EC]' : 'bg-[#c9c9c9] text-[#666666]'}`}>
                 { status == 'pending' ? 'Deny' : 'Deny'}
                </button>
                
                
              </td>
              <td>
                
                  
              <button disabled={status == 'pending' ? false : true} className={ `text-white font-bold py-2 px-4 rounded ${status == 'pending' ? 'bg-gradient-to-r from-[#2f57ef] to-[#B260EC]' : 'bg-[#c9c9c9] text-[#666666]'}`}>
                 { status == 'pending' ? 'Feedback' : 'Feedback'}
                </button>
                
                
              </td>
            </tr>
    );
};

export default AdminSingleClasses;