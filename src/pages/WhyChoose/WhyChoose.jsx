import React from 'react';
import CountUp from 'react-countup';

const WhyChoose = () => {
    return (
        <div className='mt-[100px]'>
             <h2 className='text-[#192335] font-bold text-[25px] md:text-[42px] text-center'>Why Choose <span className="text-gradient bg-gradient-to-r from-[#2f57ef] to-[#B260EC] text-transparent bg-clip-text">LinguaDove</span></h2>
            <p className='mt-6 text-[#6B7385] text-center mb-[50px]'>A Language Academy</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <div className='bg-white flex items-center justify-center flex-col rounded-lg shadow-sm py-10 hover:-translate-y-5 duration-300'>
                    <div className='w-[100px] h-[100px] p-[25px] rounded-full bg-white flex items-center justify-center shadow-lg'>
                    <img className='w-[50px] h-[50px] rounded-full' src="https://rainbowit.net/html/histudy/assets/images/icons/counter-01.png" alt="" />
                    </div>
                    <h2 className=' text-[22px] font-bold my-3 md:text-[50px]'>
                     <CountUp duration={5} end={500} />+
                    </h2>
                    <p className='text-sm md:text-[18px] text-[#6b7385]'>Learners & Counting</p>
                </div>
                <div className='bg-white flex items-center justify-center flex-col rounded-lg shadow-sm py-10 hover:-translate-y-5 duration-300'>
                    <div className='w-[100px] h-[100px] p-[25px] rounded-full bg-white flex items-center justify-center shadow-lg'>
                    <img className='w-[50px] h-[50px] rounded-full' src="https://rainbowit.net/html/histudy/assets/images/icons/counter-02.png" alt="" />
                    </div>
                    <h2 className=' text-[22px] font-bold my-3 md:text-[50px]'>
                    <CountUp duration={5} end={300} />+</h2>
                    <p className='text-sm md:text-[18px] text-[#6b7385]'>Courses & Video</p>
                </div>
                <div className='bg-white flex items-center justify-center flex-col rounded-lg shadow-sm py-10 hover:-translate-y-5 duration-300'>
                    <div className='w-[100px] h-[100px] p-[25px] rounded-full bg-white flex items-center justify-center shadow-lg'>
                    <img className='w-[50px] h-[50px] rounded-full' src="https://rainbowit.net/html/histudy/assets/images/icons/counter-03.png" alt="" />
                    </div>
                    <h2 className=' text-[22px] font-bold my-3 md:text-[50px]'>
                    <CountUp duration={5} end={1000} />+</h2>
                    <p className='text-sm md:text-[18px] text-[#6b7385]'>Certified Students</p>
                </div>
                <div className='bg-white flex items-center justify-center flex-col rounded-lg shadow-sm py-10 hover:-translate-y-5 duration-300'>
                    <div className='w-[100px] h-[100px] p-[25px] rounded-full bg-white flex items-center justify-center shadow-lg'>
                    <img className='w-[50px] h-[50px] rounded-full' src="https://rainbowit.net/html/histudy/assets/images/icons/counter-04.png" alt="" />
                    </div>
                    <h2 className=' text-[22px] font-bold my-3 md:text-[50px]'>
                    <CountUp duration={5} end={100} />+</h2>
                    <p className='text-sm md:text-[18px] text-[#6b7385]'>Registered Enrolls</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;