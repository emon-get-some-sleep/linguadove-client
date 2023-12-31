import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProviders';

const useEnrolledClasses = () => {
    const token = localStorage.getItem('access-token');
    const {user, loading} = useContext(AuthContext);
    const {data: enrolledClasses = [], isLoading: isEnrollClassesloading, refetch} = useQuery({
        queryKey: ['enrolled_classes'],
        enabled: !loading,
        queryFn: async() => {
            const res = await fetch(`https://lingua-dove-server-emon-get-some-sleep.vercel.app/enrolledclasses/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            });
            return res.json();
        }
        
    })
    return [enrolledClasses, loading, refetch];
};

export default useEnrolledClasses;