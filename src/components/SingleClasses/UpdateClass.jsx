import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';


const UpdateClass = () => {
  const classInfo = useLoaderData();
  console.log(classInfo);
  const {user} = useContext(AuthContext);

  const { register, handleSubmit, reset} = useForm();

    const onSubmit = data => {
      console.log(data);
       
       
      //     // console.log(imgURL);
          const {name,  price  , number_of_lesson, available_seat } = data;
          const newClass = {name,  price: parseFloat(price), number_of_lesson, available_seat: parseFloat(available_seat,)};
          newClass.status= classInfo.status
          console.log(newClass);
          axios.patch(`http://localhost:5000/newclass/${classInfo._id}`, newClass)
          .then(data => {
            console.log('after  new class', data);
            if(data.data.modifiedCount > 0){
              reset();
              Swal.fire(
                'Successfully updated the class',
                'Thank You',
                'success'
              )
            }
          })

        };
       
    
    
  return (
    <div className="flex flex-wrap min-h-screen  content-center justify-center  py-10">
      <div className="flex flex-col md:flex-row shadow-md">
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: ' 24rem', height: '37.5rem' }}>
          <div className="w-full md:w-72">
            <h1 className="text-xl font-semibold">ADD A NEW CLASS</h1>
            {/* <small className="text-gray-400">Welcome back! Please enter your details</small> */}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Class Name</label>
                <input
                defaultValue={classInfo?.name}
                {...register("name", { required: true })}
                  type="text"
                  placeholder={classInfo?.name}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Available Seats</label>
                <input
                defaultValue={classInfo?.available_seat}
                {...register("available_seat", { required: true })}
                  type="text"
                  placeholder={classInfo?.available_seat}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Price</label>
                <input
                defaultValue={classInfo?.price}
                {...register("price", { required: true })}
                  type="text"
                  placeholder={classInfo?.price}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Number Of Lesson</label>
                <input
                defaultValue={classInfo?.number_of_lesson}
                {...register("number_of_lesson", { required: true })}
                  type="text"
                  placeholder={classInfo?.number_of_lesson}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              
              

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                  UPDATE CLASS
                </button>
              </div>
            </form>

            
          </div>
        </div>

        {/* style={{ width: '24rem', height: '35rem' }} */}
        <div className="flex flex-wrap content-center justify-center rounded-r-md h-auto md:h-[35rem] w-full md:w-[24rem]">
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src="https://img.freepik.com/free-vector/flat-international-mother-language-day-illustration_23-2149219243.jpg?w=740&t=st=1686406793~exp=1686407393~hmac=74579721cbdc63e8a07d098a002908d762b4ae72967b208e8d701513d945ae5c"
          />
        </div>
      </div>


    </div>
  );
};

export default UpdateClass;
