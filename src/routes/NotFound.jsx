import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=' w-full flex flex-col gap-2 items-center justify-center bg-white'>
            <img className='object-cover' src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=740&t=st=1686736764~exp=1686737364~hmac=e1766ab3fbc28709c0ffd3ef8041c8485e8ee07e5a2ac694b4443cd14e389db9" alt="" />
            <Link to="/">Return Home</Link>
        </div>
    );
};

export default NotFound;