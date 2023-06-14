import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleSelectClass = ({rowData, refetch}) => {
    const token = localStorage.getItem('access-token');
    const {selectedClassId, _id, name, instructor_name, image, available_seat, price, status} = rowData;
    const navigate = useNavigate();
    const goToPayment = (selectedClass) => {
        const url = `/dashboard/payment/${selectedClass.selectedClassId}`;
        navigate(url);
    }
    const handleDelete = (selectedClass) => {
        
        axios.delete(`http://localhost:5000/selectclass/${selectedClass.selectedClassId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(data => {
          console.log(data);
          if(data.data.deletedCount > 0){
            refetch();
            Swal.fire(
              'Deleted!',
              'The Class Has Been Removed From The List',
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
                <td>
                  <button onClick={() => goToPayment(rowData)} className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-white font-bold py-2 px-4 rounded">
                    PAY NOW
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(rowData)} className="bg-[#DC143C] hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                    DELETE CLASS
                  </button>
                </td>
              </tr>
    );
};

export default SingleSelectClass;