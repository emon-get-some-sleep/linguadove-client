import { useQuery } from "react-query";


const useUsers = () => {
    const token = localStorage.getItem('access-token');
    const {data: allUsers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['all_users'],
        queryFn: async() => {
            const res = await fetch('https://lingua-dove-server-emon-get-some-sleep.vercel.app/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            });
            return res.json();
        }
        
    })
    return [allUsers, loading, refetch];
};

export default useUsers;