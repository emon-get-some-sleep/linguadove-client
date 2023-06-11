import { useQuery } from "react-query";

const usePopularTeacher = () => {
    const {data: popularTeachers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popular_teachers'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/teachers');
            return res.json();
        }
        
    })
    return [popularTeachers, loading, refetch];
    
};

export default usePopularTeacher;