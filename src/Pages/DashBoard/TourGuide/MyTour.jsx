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
      
           return data
    
        }
    })
  
    const handleAccept =(id) =>{
        axiosSecure.patch(`/guidebookings/accept/${id}`)
        .then(res =>{
            
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top",
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
         
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top",
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
                            
                            <td className="font-base uppercase text-teal-500">
                            {booking?.title}
                        </td>
                        
                        <td className="font-medium from-stone-100 uppercase">
                            {booking?.touristName}
                        </td>
                            <td className="font-medium text-blue-700">
                            {booking?.tourDate}
                        </td>
                       
                            <td className="font-medium text-orange-600">
                            {booking?.price}
                        </td>
                       
                        <td>
  {booking.status == "Accepted" || booking.status == "Rejected" ? (
    <button className="btn btn-outline disabled btn-success btn-sm">{booking.status=="Accepted"?<h1>Accepted</h1>:<h1>Accept</h1>}</button>
  ) : (
    <button
      className="btn btn-outline btn-success btn-sm"
      onClick={() => handleAccept(booking._id)}
    >
      Accept
    </button>
  )}
</td>
<td>
  {booking.status == "Accepted" || booking.status == "Rejected" ? (
    <button className="btn disabled  btn-outline btn-error btn-sm">{booking.status=="Rejected"?<h1>Rejected</h1>:<h1>Reject</h1>}</button>
  ) : (
    <button
      className="btn btn-outline btn-error btn-sm"
      onClick={() => handleReject(booking._id)}
    >
      Reject
    </button>
  )}
</td>

                            
                           
                       
    
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