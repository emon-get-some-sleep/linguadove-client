import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProviders';

const useSelectedClass = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: selectedClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['selected_classes'],
        queryFn: async() => {
            const res = await fetch(`https://lingua-dove-server-emon-get-some-sleep.vercel.app/selectclass/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            });
            return res.json();
        }
        
    })
    return [selectedClasses, loading, refetch];

};

export default useSelectedClass;