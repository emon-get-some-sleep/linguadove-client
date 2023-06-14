import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProviders';
import { Fade } from "react-awesome-reveal";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddClass = () => {
  const {user} = useContext(AuthContext);

  const { register, handleSubmit, reset} = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const onSubmit = data => {
      console.log(data);
       const formData = new FormData();
       formData.append('image', data.image[0]);
       fetch(img_hosting_url, {
        method: 'POST',
        body: formData
       })
       .then(res => res.json())
       .then(imgResponse => {
        if(imgResponse.success){
          const imageURL = imgResponse.data.display_url;
      //     // console.log(imgURL);
          const {name,  price , instructor_email, instructor_name, number_of_lesson, available_seat
} = data;
          const newClass = {name, image: imageURL, price: parseFloat(price), instructor_email, instructor_name, number_of_lesson, available_seat: parseFloat(available_seat)};
          console.log(newClass);
          axios.post('http://localhost:5000/newclass', newClass)
          .then(data => {
            console.log('after  new class', data);
            if(data.data.insertedId){
              reset();
              Swal.fire(
                'Successfully added new class',
                'Thank You',
                'success'
              )
            }
          })

        }
       })
    };
    
  return (
    <div className="flex flex-wrap min-h-screen  content-center justify-center  py-10">
      <div className="flex flex-col md:flex-row shadow-md">
        <Fade>
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: ' 24rem', height: '37.5rem' }}>
          <div className="w-full md:w-72">
            <h1 className="text-xl font-semibold">ADD A NEW CLASS</h1>
            {/* <small className="text-gray-400">Welcome back! Please enter your details</small> */}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Class Name</label>
                <input
                {...register("name", { required: true })}
                  type="text"
                  placeholder="Add Class Name"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Instructor Name</label>
                <input
                defaultValue={user?.displayName}
                {...register("instructor_name", { required: true })}

                  type="text"
                  placeholder={user?.displayName}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Instructor Email</label>
                <input
                {...register("instructor_email", { required: true })}
                  type="text"
                  defaultValue={user?.email}
                  placeholder={user?.email}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Available Seats</label>
                <input
                {...register("available_seat", { required: true })}
                  type="text"
                  placeholder="Available Seats"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Price</label>
                <input
                {...register("price", { required: true })}
                  type="text"
                  placeholder="Price"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Number Of Lesson</label>
                <input
                {...register("number_of_lesson", { required: true })}
                  type="text"
                  placeholder="Number Of Lesson"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Upload Image</label>
                <input  {...register("image", {required: true})} type="file" className="file-input file-input-bordered w-full " />
              </div>

              

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                  ADD CLASS
                </button>
              </div>
            </form>

            
          </div>
        </div>
        </Fade>

        {/* style={{ width: '24rem', height: '35rem' }} */}
       <Fade delay="300">
       <div className="flex flex-wrap content-center justify-center rounded-r-md h-auto md:h-[35rem] w-full md:w-[24rem]">
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src="https://img.freepik.com/free-vector/flat-international-mother-language-day-illustration_23-2149219243.jpg?w=740&t=st=1686406793~exp=1686407393~hmac=74579721cbdc63e8a07d098a002908d762b4ae72967b208e8d701513d945ae5c"
          />
        </div>
       </Fade>
      </div>


    </div>
  );
};

export default AddClass;
