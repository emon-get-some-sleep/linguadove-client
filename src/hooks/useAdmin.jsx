import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';

const useAdmin = () => {
    const {user ,loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await axios.get(`https://lingua-dove-server-emon-get-some-sleep.vercel.app/users/admin/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            });
            // console.log('is admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;