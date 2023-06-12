import React from 'react';

const AdminSingleClasses = ({rowData}) => {
    const {name, instructor_name, image, available_seat, price, status} = rowData;
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
              <td>$ {status ? status : 'approved'}</td>
              <td>
                
                  <button disabled={status == 'pending' ? false : true} className={ `text-white font-bold py-2 px-4 rounded ${status == 'pending' ? 'bg-gradient-to-r from-[#2f57ef] to-[#B260EC]' : 'bg-gray text-black'}`}>
                 { status == 'pending' ? 'Approve' : 'Approved'}
                </button>
                
                
              </td>
              <td>
                
                  <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Deny
                </button>
                
                
              </td>
              <td>
                
                  <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Feedback
                </button>
                
                
              </td>
            </tr>
    );
};

export default AdminSingleClasses;