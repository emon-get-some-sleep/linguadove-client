import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const AdminSingleClasses = ({ rowData, refetch, currentId, setCurrentId }) => {
  const { _id, name, instructor_name, image, available_seat, price, status } =
    rowData;
  const [classId, setClassId] = useState();
  const token = localStorage.getItem('access-token');
  const classIdRef = useRef(null);
  const updateId = whatClass => {
   setCurrentId(whatClass._id);
  }
  const approveClass = (whatClass) => {
    fetch(`http://localhost:5000/class/admin/approve/${whatClass._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire(`This class has been approved`, "Good Job!", "success");
        }
      });
  };
  const denyClass = (whatClass) => {
    fetch(`http://localhost:5000/class/admin/deny/${whatClass._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire(`This class has been denied`, "Sorry", "success");
        }
      });
  };

  const feedbackRef = useRef(null);


  const handleFeedBack = (classInfo) => {
    event.preventDefault();

    const feedback = feedbackRef.current.value;
    
    // console.log(feedback, currentId);
    axios.patch(`http://localhost:5000/class/admin/feedback/${currentId}`, {feedback : feedback}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(data => {
      if(data.data.modifiedCount){
        Swal.fire(
          `Feedback sent`,
          'Good Job!',
          'success'
        )
      }
    })
  };


 
  return (
    <tr>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-full w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{instructor_name}</td>
      <td>{available_seat}</td>
      <td>$ {price}</td>
      <td className={`${status != 'denied' ? "text-green-500 font-medium" : "text-red-400 font-medium"}`}>
        {" "}
        {status ? status : "approved"}
      </td>
      <td>
        <button
          onClick={() => approveClass(rowData)}
          disabled={status == "pending" ? false : true}
          className={`text-white font-bold py-2 px-4 rounded ${
            status == "pending"
              ? "bg-gradient-to-r from-[#2f57ef] to-[#B260EC]"
              : "bg-[#c9c9c9] text-[#666666]"
          }`}
        >
          {status == "pending" ? "Approve" : "Approved"}
        </button>
      </td>
      <td>
        <button
          onClick={() => denyClass(rowData)}
          disabled={status == "pending" ? false : true}
          className={`text-white font-bold py-2 px-4 rounded ${
            status == "pending"
              ? "bg-gradient-to-r from-[#2f57ef] to-[#B260EC]"
              : "bg-[#c9c9c9] text-[#666666]"
          }`}
        >
          {status == "pending" ? "Deny" : "Deny"}
        </button>
      </td>
      <td>
        {/* You can open the modal using ID.showModal() method */}
        {/* <button className="btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button> */}
        <dialog id="my_modal_3" className="modal">
          <form
            onSubmit={() => handleFeedBack(rowData)}
            method="dialog"
            className="modal-box"
          >
            <h3 className="font-bold text-lg my-2">Feed Back</h3>
            <input
              ref={feedbackRef}
              type="text"
              placeholder="What do you think about the class"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <input
              className="btn btn-xs btn-primary mt-2"
              type="submit"
              value="Submit"
            />
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        {/* <button onClick={()=> document.getElementById('my_modal_3').showModal()} disabled={status == 'pending' ? false : true} className={ `text-white font-bold py-2 px-4 rounded ${status == 'pending' ? 'bg-gradient-to-r from-[#2f57ef] to-[#B260EC]' : 'bg-[#c9c9c9] text-[#666666]'}`}>
                 { status == 'pending' ? 'Feedback' : 'Feedback'}
                </button> */}
        <button
          onClick={() => {
            updateId(rowData);
            document.getElementById("my_modal_3").showModal();
            
          }}
          disabled={status === "pending" ? false : true}
          className={`text-white font-bold py-2 px-4 rounded ${
            status === "pending"
              ? "bg-gradient-to-r from-[#2f57ef] to-[#B260EC]"
              : "bg-[#c9c9c9] text-[#666666]"
          }`}
        >
          {status === "pending" ? "Feedback" : "Feedback"}
        </button>
      </td>
    </tr>
  );
};

export default AdminSingleClasses;
