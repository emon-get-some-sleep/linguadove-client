import { useQuery } from "react-query";

const usePopularClasses = () => {
    const {data: popularClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popular_classes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
        
    })
    return [popularClasses, loading, refetch];
}

export default usePopularClasses;