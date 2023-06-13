import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';

const useAdmin = () => {
    const {user ,loading} = useContext(AuthContext);

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`);
            // console.log('is admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;