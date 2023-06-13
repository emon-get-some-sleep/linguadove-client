import React from 'react';

const SingleSelectClass = ({rowData}) => {
    const {_id, name, instructor_name, image, available_seat, price, status} = rowData;
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
                  <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white font-bold py-2 px-4 rounded">
                    PAY NOW
                  </button>
                </td>
                <td>
                  <button className="bg-[#DC143C] hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                    DELETE CLASS
                  </button>
                </td>
              </tr>
    );
};

export default SingleSelectClass;