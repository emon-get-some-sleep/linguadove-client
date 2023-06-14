import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProviders';

const useMyClasses = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: myClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['my_classes'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/classes/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            });
            
            return res.json();
        }
        
    })
    console.log(myClasses);
    return [myClasses, loading, refetch];
};

export default useMyClasses;