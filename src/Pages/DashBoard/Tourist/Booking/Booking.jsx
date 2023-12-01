import useBookings from "../../../../Hook/useBookings";

const Booking = () => {
    const [bookings]=useBookings()
    console.log(bookings)
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

export default Booking;