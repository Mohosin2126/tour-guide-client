
import {  FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
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

    useEffect(() => {
        // Check localStorage for the stored isUpdating state
        const storedIsUpdating = localStorage.getItem('isUpdating');
        if (storedIsUpdating) {
          setIsUpdating(JSON.parse(storedIsUpdating));
        }
      }, []);

  
  


    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
      
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        setIsUpdating(true);
        localStorage.setItem('isUpdating', JSON.stringify(true));
    }
    
    const handleMakeTourGuide = (user) => {
    
        axiosSecure.patch(`/users/guide/${user._id}`)
          .then((res) => {
    
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: `${user.name} is a Guide Now!`,
                showConfirmButton: false,
                timer: 1500,
              });
              const guideInfo={
                name:user.name ,
                profilePicture:user.photo ,
                contactDetails:{email:user.email,phone:user.phone,location:user.location}

              }
              // Fix the axios post request syntax
              axiosSecure.post("/guide",guideInfo)
                .then((res) => {
                  console.log(res.data.insertedId);
                })
                .catch((error) => {
                  console.error("Error making user a guide:", error);
                });
            }
          })
          .catch((error) => {
            console.error("Error updating user to guide:", error);
          });
          setIsUpdating(true);
          localStorage.setItem('isUpdating', JSON.stringify(true));
      };
      

       
    
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
                        <th >Name</th>
                        <th >Email</th>
                        <th>Guide</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
      <tr key={user._id}>
        <th>{index + 1}</th>
        <td className="font-base uppercase text-teal-500">{user.name}</td>
        <td className="font-medium text-orange-600">{user.email}</td>
        <td>
          {user.role === "guide" ? (
            "guide"
          ) : (
            <button
              onClick={() => handleMakeTourGuide(user)}
              className={`btn btn-ghost btn-sm bg-gray-400 ${
                user.role === "Admin" ? "disabled" : ''
              }`}
              disabled={isUpdating}
            >
              <FaUsers className="text-white text-2xl" />
            </button>
          )}
        </td>
        <td>
          {user.role === 'admin' ? (
            'Admin'
          ) : (
            <button
              onClick={() => handleMakeAdmin(user)}
              className={`btn btn-sm bg-red-600 ${
                user.role === "guide" ? "disabled" : ''
              }`}
              disabled={isUpdating}
            >
              <FaUsers className="text-white text-2xl" />
            </button>
          )}
        </td>
      </tr>
    ))}

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUsers;