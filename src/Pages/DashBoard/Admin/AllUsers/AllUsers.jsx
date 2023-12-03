
import {  FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
const AllUsers = () => {

    const axiosSecure=useAxiosSecure()
    const {data:users=[],refetch}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const res =await axiosSecure.get("/users")
            return res.data
    
        }
    })

    const [isUpdating, setIsUpdating] = useState(false);


    const handleMakeAdmin = user =>{
        setIsUpdating(true);
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        // enable the button 
        // .finally(() => setIsUpdating(false));
    }
    

const handleMakeTourGuide=user=>{
    setIsUpdating(true);
    axiosSecure.patch(`/users/guide/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Guide Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
       })
    //    enable the button 
    //    .finally(() => setIsUpdating(false));
}
    return (
        <div>
        <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">All Users</h2>
            <h2 className="text-3xl">Total Users:{users.length} </h2>
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Guide</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                            {user.role === "guide" ? "guide" : (
                                <button
                                    onClick={() => handleMakeTourGuide(user)}
                                    className={`btn btn-ghost btn-sm bg-gray-400 ${isUpdating ? 'disabled' : ''}`}
                                    disabled={isUpdating}
                                >
                                    <FaUsers className="text-white text-2xl" />
                                </button>
                            )}
                        </td>
                        <td>
                            {user.role === 'admin' ? 'Admin' : (
                                <button
                                    onClick={() => handleMakeAdmin(user)}
                                    className={`btn btn-sm bg-red-600 ${isUpdating ? 'disabled' : ''}`}
                                    disabled={isUpdating}
                                >
                                    <FaUsers className="text-white text-2xl" />
                                </button>
                            )}
                            </td>
                            
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUsers;