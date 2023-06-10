import React from 'react';
import { FaPlayCircle, FaUsers } from 'react-icons/fa';

const EnrolledClasses = () => {
    return (
        <>
        <h2 className='text-[#192335] font-bold text-[25px] md:text-[42px] text-center'>Popular Classes</h2>
        <div className='grid px-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='bg-white rounded-[30px] shadow-lg px-2 py-6 flex flex-col items-center justify-center'>
                    <div>
                        <img className='w-full md:max-w-[305px] max-h-[205px] z-10 relative rounded-[30px]' src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/elementor/thumbs/woman-learning-english-online-e1625538535869-p9p4lrjtk1sd2tmdyid28uz6flhqadle7aui7qrlao.jpg" alt="" />
                        <img className=' w-[50px] h-[50px] rounded-full duration-300 ml-[130px] md:ml-[200px] -mt-6 border-4 border-white z-20 relative' src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/2021/06/english-R3KPS6.png" alt="" />
                    </div>
                    <div className='text-center'>
                        <h3 className='font-semibold text-xl text-[#6B7385]'><span className="text-[#2F57EF]">$120/</span> Lifetime</h3>
                        <h3 className='font-semibold text-xl my-4'>English For Beginner</h3>
                        <h4 className='font-semibold my-4 text-[#6B7385]'>By Revecca Hill</h4>
                        
                        <p className='text-[#6B7385]'>An Introductory Course in English. For those who struggle whith Basic English.</p>
                    </div>
                    <div className='my-6 flex flex-col md:flex-row items-center gap-5'>
                        <div className='flex items-center gap-3'>
                            <FaPlayCircle  className='text-[#5754F7] text-2xl'/>
                            <p className='font-medium'>26 Lesson</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaUsers  className='text-[#5754F7] text-2xl'/>
                            <p className='font-medium'>Available Seats 20</p>
                        </div>
                    </div>
                    <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                  Enroll Now
                </button>
                </div>
        </div>
        </>
    );
};

export default EnrolledClasses;