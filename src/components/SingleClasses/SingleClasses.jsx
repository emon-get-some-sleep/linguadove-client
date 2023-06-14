import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide } from "react-awesome-reveal";
const SingleClasses = ({rowData}) => {
    const navigate = useNavigate();
    const {_id, name, instructor_name, image, available_seat, price, number_of_lesson, status, feedback, enrolled} = rowData;
    // console.log(feedback);
    const {user} = useContext(AuthContext);
    const handleUpdate = id => {
      const url = `/dashboard/updateclass/${id}`;
      navigate(url);
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
              <td className={`${status !== 'denied' ? 'text-green-500' : 'text-red-400'}`}>{status ? status : 'approved'}</td>
              <td>
                
                  <button onClick={() => handleUpdate(rowData._id)} className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
                
                
              </td>
              <td>
                {feedback && status == 'denied' ? feedback : '...'}
              </td>
        </tr>
      
    );
};

export default SingleClasses;