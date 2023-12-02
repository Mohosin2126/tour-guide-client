import Swal from "sweetalert2";
import useBookings from "../../../../Hook/useBookings";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";

const Booking = () => {
    const [bookings,refetch]=useBookings()
    const axiosSecure=useAxiosSecure()
    const handleCancel=(id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }) .then((result) => {
            if (result.isConfirmed) {
    
                axiosSecure.delete(`/guidebookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
        <div>
        <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">All Booking Packages</h2>
            <h2 className="text-3xl">Total Booking:{bookings.length} </h2>
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th> Guide Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
  {bookings.map((booking, index) => (
    <tr key={booking._id}>

      <th>{index + 1}</th>
      <td>{booking?.touristName}</td>
      <td>{booking?.tourGuide}</td>
      <td>{booking?.tourDate}</td>
      <td>{booking?.price}</td>
      <td>{booking?.status}</td>
      <td>
        {booking.status === "Accepted" ? (
          <button className=" btn btn-success">Pay</button>
        ) : (
          <button className="disable ">Pay</button>
        )}
      </td>
      <td>{booking.status === "In Review" ? (
          <button onClick={()=>handleCancel(booking._id)} className=" btn btn-success">Cancel</button>
        ) : (
          <button className="disable ">Cancel</button>
        )}</td>
      <td>Apply</td>
    </tr>
  ))}
</tbody>

            </table>
        </div>
    </div>
        </div>
    );
};

export default Booking;