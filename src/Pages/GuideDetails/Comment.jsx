import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Comment = () => {

    const axiosPublic=useAxiosPublic()
    const {data:comments=[],}=useQuery({
        queryKey:["comment"],
        queryFn:async()=>{
            const res =await axiosPublic.get("/comments")
            return res.data
    
        }
    })
   

    return (
        <div>
            
        </div>
    );
};

export default Comment;