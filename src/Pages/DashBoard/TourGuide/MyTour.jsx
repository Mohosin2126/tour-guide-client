import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const MyTour = () => {

    const axiosSecure=useAxiosSecure()
    const {data:bookings=[],refetch}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const res =await axiosSecure.get("/bookings")
            return res.data
    
        }
    })
    console.log(bookings)
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
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) =><tr key={booking._id}>
                            <th>{index + 1}</th>
                            
                            <td>
                            {booking?.touristName}
                        </td>
                       
                            <td>
                            {booking?.tourGuide}
                        </td>
                       
                            <td>
                            {booking?.tourDate}
                        </td>
                       
                            <td>
                            {booking?.price}
                        </td>
                       
                            <td>
                            {booking?.status}
                        </td>
                       
                            <td>
                         pay
                        </td>
                       
                            <td>
                            cancel
                        </td>
                       
                            <td>
                           apply
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