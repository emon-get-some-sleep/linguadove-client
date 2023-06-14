import React from 'react';
import { FaPlayCircle, FaUsers } from 'react-icons/fa';
import usePopularClasses from '../../hooks/usePopularClasses';
import PopularClass from '../../shared/PopularClass/PopularClass';
import { Fade } from "react-awesome-reveal";
const PopularCourses = () => {
    const [popularClasses] = usePopularClasses();
    console.log();
    return (
        <div className='mt-[100px]'>
            <Fade delay="300">
            <h2 className='text-[#192335] font-bold text-[25px] md:text-[42px] text-center'>Popular Classes</h2>
            </Fade>
           <Fade delay="300">
           <p className='mt-6 text-[#6B7385] text-center mb-[50px]'>Loved By Many Students</p>
           </Fade>
            <div className='grid px-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
                
                {
                    popularClasses.slice(0,6).map(classInfo => <PopularClass key={classInfo.name} classInfo={classInfo}></PopularClass>)
                }
                
               
                
            </div>
        </div>
    );
};

export default PopularCourses;