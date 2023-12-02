import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyTour = () => {
   const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
    const {data:bookings=[],refetch}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const res =await axiosSecure.get("/guidebookings")
           const data= res?.data?.filter(bookingsData=>bookingsData?.tourGuide== user.email)
            console.log(data)
           return data
    
        }
    })
    const handleAccept =(id) =>{
        axiosSecure.patch(`/guidebookings/accept/${id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Request Accepted",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }



    const handleReject =(id) =>{
   
        axiosSecure.patch(`/guidebookings/reject/${id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Request Rejected",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
   
    return (
        <div>
             <div>
        <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">My Assigned Tour</h2>
    
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Package Name</th>
                        <th> Tourist Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map((booking, index) =><tr key={booking._id}>
                            <th>{index + 1}</th>
                            
                            <td>
                            {booking?.title}
                        </td>
                        
                        <td>
                            {booking?.touristName}
                        </td>
                            <td>
                            {booking?.tourDate}
                        </td>
                       
                            <td>
                            {booking?.price}
                        </td>
                       
                           <td><button onClick={()=>handleAccept(booking._id)}>Accept</button></td>
                           <td><button onClick={()=>handleReject(booking._id)}>Reject</button></td>
                       
    
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
        </div>
    );
};

export default MyTour;