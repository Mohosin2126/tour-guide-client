import useWishlist from "../../../../Hook/useWishlist";
import { FaTrashAlt } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
const Wishlist = () => {
    const [wishlist,refetch]=useWishlist([])
    console.log(wishlist)

    const axiosSecure=useAxiosSecure()
    const handleDelete=(id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }) .then((result) => {
            if (result.isConfirmed) {
    
                axiosSecure.delete(`/wishlist/${id}`)
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
  <div className="overflow-x-auto">
            <table className="table  w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Details</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishlist.map((item, index) => <tr key={item._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.title}
                            </td>
                            <td>{item.price}</td>
                            <th>
                           
                           <Link to={`/packagedetails/${wishlist._id}`}> <button
                                       
                                       className="btn btn-ghost btn-lg">
                                       <FcViewDetails />
                                   </button></Link>
                                    
                            </th>
                            <th>
                            <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                            </th>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Wishlist;