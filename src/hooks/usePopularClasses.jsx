import { useQuery } from "react-query";

const usePopularClasses = () => {
    const {data: popularClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popular_classes'],
        queryFn: async() => {
            const res = await fetch('https://lingua-dove-server-emon-get-some-sleep.vercel.app/classes');
            return res.json();
        }
        
    })
    return [popularClasses, loading, refetch];
}

export default usePopularClasses;