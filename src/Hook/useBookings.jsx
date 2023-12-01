import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";


const useBookings = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useContext(AuthContext)
        // tanstack query 
        const {refetch,data:booking=[]}=useQuery({
    queryKey:["booking",user?.email],
    queryFn:async ()=>{
        const res=await axiosSecure.get(`/bookings?email=${user.email}`)
        return res.data
    }
        })
    return [booking,refetch]
    };

export default useBookings;