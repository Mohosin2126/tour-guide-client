import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useWishlist = () => {
    const axiosSecure=useAxiosSecure()
    const {user}=useContext(AuthContext)
        // tanstack query 
        const {refetch,data:wishlist=[]}=useQuery({
    queryKey:["wishlist",user?.email],
    queryFn:async ()=>{
        const res=await axiosSecure.get(`/wishlist?email=${user.email}`)
        return res.data
    }
        })
    return [wishlist,refetch]
    };
    
    export default useWishlist;