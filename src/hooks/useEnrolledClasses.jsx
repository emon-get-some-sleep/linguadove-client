import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProviders';

const useEnrolledClasses = () => {
    const {user, loading} = useContext(AuthContext);
    const {data: enrolledClasses = [], isLoading: isEnrollClassesloading, refetch} = useQuery({
        queryKey: ['enrolled_classes'],
        enabled: !loading,
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/enrolledclasses/${user?.email}`);
            return res.json();
        }
        
    })
    return [enrolledClasses, loading, refetch];
};

export default useEnrolledClasses;