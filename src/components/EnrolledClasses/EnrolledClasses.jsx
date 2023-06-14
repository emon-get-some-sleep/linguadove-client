import React from 'react';
import { FaPlayCircle, FaUsers } from 'react-icons/fa';
import useEnrolledClasses from '../../hooks/useEnrolledClasses';
import SingleEnrolledClass from './SingleEnrolledClass';
import { Fade, Slide, Zoom } from "react-awesome-reveal";
const EnrolledClasses = () => {
    const [enrolledClasses] = useEnrolledClasses();
    console.log(enrolledClasses);
    return (
        <>
        <Slide>
        <h2 className='text-[#192335] font-bold w-full text-[25px] md:text-[42px] text-center'>Enrolled Classes</h2>
        </Slide>
        <Zoom>
        <div className='grid px-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                enrolledClasses.map(classInfo => <SingleEnrolledClass key={classInfo._id} classInfo={classInfo}></SingleEnrolledClass>)
            }
        </div>
        </Zoom>
        </>
    );
};

export default EnrolledClasses;