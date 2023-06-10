import React from 'react';

const AddClass = () => {
  return (
    <div className="flex flex-wrap min-h-screen  content-center justify-center  py-10">
      <div className="flex flex-col md:flex-row shadow-md">
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: ' 24rem', height: '35rem' }}>
          <div className="w-full md:w-72">
            <h1 className="text-xl font-semibold">ADD A NEW CLASS</h1>
            {/* <small className="text-gray-400">Welcome back! Please enter your details</small> */}

            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Class Name</label>
                <input
                  type="text"
                  placeholder="Add Class Name"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Instructor Name</label>
                <input
                  type="text"
                  placeholder="Instructor Name"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Instructor Email</label>
                <input
                  type="text"
                  placeholder="Instructor Email"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Available Seats</label>
                <input
                  type="text"
                  placeholder="Available Seats"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Price</label>
                <input
                  type="text"
                  placeholder="Price"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Upload Image</label>
                <input type="file" className="file-input file-input-bordered w-full " />
              </div>

              

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                  ADD CLASS
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

export default AddClass;
