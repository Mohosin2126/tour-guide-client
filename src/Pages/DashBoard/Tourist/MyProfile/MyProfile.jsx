import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const MyProfile = () => {
    const {user}=useContext(AuthContext)
    console.log(user.email)
    const axiosSecure=useAxiosSecure()
    const {data:users=[]}=useQuery({
        queryKey:["users",user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/users?email=${user?.email}`)
            return res.data
    
        }
    })
    console.log(users)
    return (
        <div>
           
        </div>
    );
};

export default MyProfile;