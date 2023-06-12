import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProviders';

const useMyClasses = () => {
    const {user} = useContext(AuthContext);

    const {data: myClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['my_classes'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/classes/${user?.email}`);
            return res.json();
        }
        
    })
    return [myClasses, loading, refetch];
};

export default useMyClasses;