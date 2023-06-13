import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProviders';

const useSelectedClass = () => {
    const {user} = useContext(AuthContext);
    const {data: selectedClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['selected_classes'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/selectclass/${user?.email}`);
            return res.json();
        }
        
    })
    return [selectedClasses, loading, refetch];

};

export default useSelectedClass;