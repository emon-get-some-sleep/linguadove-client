import { useQuery } from "react-query";

const usePopularTeacher = () => {
    const {data: popularTeachers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popular_teachers'],
        queryFn: async() => {
            const res = await fetch('https://lingua-dove-server-emon-get-some-sleep.vercel.app/teachers');
            return res.json();
        }
        
    })
    return [popularTeachers, loading, refetch];
    
};

export default usePopularTeacher;