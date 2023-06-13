import React from 'react';
import { FaPlayCircle, FaUsers } from 'react-icons/fa';

const SingleEnrolledClass = ({classInfo}) => {
    const {name, instructor_name, image, available_seat, number_of_lesson, price, country} = classInfo;
    return (
        <div className='bg-white rounded-[30px] shadow-lg px-2 py-6 flex flex-col items-center justify-center'>
                    <div>
                        <img className='w-full md:max-w-[305px] max-h-[205px] z-10 relative rounded-[30px]' src={image} alt="" />
                        <img className=' w-[50px] h-[50px] rounded-full duration-300 ml-[130px] md:ml-[200px] -mt-6 border-4 border-white z-20 relative' src={country ? country : "https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/2021/06/english-R3KPS6.png"} alt="" />
                    </div>
                    <div className='text-center'>
                        <h3 className='font-semibold text-xl text-[#6B7385]'><span className="text-[#2F57EF]">${price}/</span> Lifetime</h3>
                        <h3 className='font-semibold text-xl my-4'>{name}</h3>
                        <h4 className='font-semibold my-4 text-[#6B7385]'>By {instructor_name}</h4>
                        
                        <p className='text-[#6B7385]'>An Introductory Course in English. For those who struggle whith Basic English.</p>
                    </div>
                    <div className='my-6 flex flex-col md:flex-row items-center gap-5'>
                        <div className='flex items-center gap-3'>
                            <FaPlayCircle  className='text-[#5754F7] text-2xl'/>
                            <p className='font-medium'>{number_of_lesson} Lesson</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaUsers  className='text-[#5754F7] text-2xl'/>
                            <p className='font-medium'>Available Seats {available_seat}</p>
                        </div>
                    </div>
                    <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                  Select
                </button>
                </div>
    );
};

export default SingleEnrolledClass;