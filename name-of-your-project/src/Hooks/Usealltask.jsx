import { useQuery } from "@tanstack/react-query";
import Useaxios from "./Useaxios";

const Usealltask = () => {
    const axiosHooks =Useaxios()
    const {data, isPending,refetch} =useQuery({
        queryKey: ["alltask"],
        queryFn: async () => {
            const res = await axiosHooks.get('/Task')
            return res.data
        }
    })
 return [data, isPending,refetch]
};

export default Usealltask;