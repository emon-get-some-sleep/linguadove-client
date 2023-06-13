import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SingleClasses = ({rowData}) => {
    const navigate = useNavigate();
    const {_id, name, instructor_name, image, available_seat, price, number_of_lesson, status, feedback, enrolled} = rowData;
    // console.log(feedback);
    const {user} = useContext(AuthContext);
    const handleSelectedClass = newClass => {
      // console.log(item);
      if(user && user.email){
        const selectedClass = {selectedClassId: _id, name, number_of_lesson, instructor_name, image, available_seat, price, status, email:user?.email};
  
        fetch('http://localhost:5000/selectclass', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(selectedClass)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            
            Swal.fire(
              'succesfully Selected the Class',
              'thank you',
              'success'
            )
          }
        })
      }
      else {
        Swal.fire({
          title: 'Please login to order this food',
          
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login');
          }
        })
      }
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
              <td>{enrolled ? enrolled : 0}</td>
              <td>{available_seat}</td>
              <td>{status ? status : 'approved'}</td>
              <td>
                
                  <button onClick={() => handleSelectedClass(rowData)} className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
                
                
              </td>
              <td>
                {feedback ? feedback : '...'}
              </td>
            </tr>
    );
};

export default SingleClasses;