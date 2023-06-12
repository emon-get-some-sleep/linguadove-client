import React from 'react';

const SingleClasses = ({rowData}) => {
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
              <td>
                {
                  status 
                  ?
                  status
                  :
                  <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Enroll Now
                </button>
                }
                
              </td>
            </tr>
    );
};

export default SingleClasses;