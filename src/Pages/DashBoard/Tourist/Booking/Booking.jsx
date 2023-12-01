import useBookings from "../../../../Hook/useBookings";

const Booking = () => {
    const [booking]=useBookings()
    console.log(booking)
    return (
        <div>
     
        </div>
    );
};

export default Booking;