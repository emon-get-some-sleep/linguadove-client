import { useQuery } from "react-query";


const useUsers = () => {
    const {data: allUsers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['all_users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
        
    })
    return [allUsers, loading, refetch];
};

export default useUsers;