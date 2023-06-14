import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';

const useInstructor = () => {
    const {user ,loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/users/instructor/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            });
            // console.log('is admin response', res);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;