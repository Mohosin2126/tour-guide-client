import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const MyProfile = () => {
    const {user}=useContext(AuthContext)
   const userEmail=user?.email
    const axiosSecure=useAxiosSecure()
    const {data:users=[]}=useQuery({
        queryKey:["users",user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/users?email=${user?.email}`)
            return res.data
    
        }
    })
    const userData=users.find(user=>user?.email === userEmail)
  
    return (
        <div>
            <h1 className="text-3xl text-center">My Profile</h1>
        <div className="flex justify-center items-center">
        <div className=" mt-10 relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <img src={userData?.photo} className="w-full h-52" alt="profile-picture" />
      </div>
      <div className="p-6 text-center">
        <h4 className="uppercase  block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {userData?.name}
        </h4>
     <h2 className="uppercase">{userData?.role}</h2>
      </div>
    </div>
        </div>
        </div>
    );
};

export default MyProfile;