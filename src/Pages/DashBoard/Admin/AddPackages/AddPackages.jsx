import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";

const AddPackages = () => {
  const axiosSecure=useAxiosSecure()
    const handleAddPackage = (event) => {
      event.preventDefault();
  
      const form = event.target;
      const image = form.image.value;
      const galleryimage1 =form.galleryimage.value
      const galleryimage2 =form.galleryimage2.value
      const galleryimage3 =form.galleryimage3.value
      const galleryimage4 =form.galleryimage4.value
      const galleryimage5 =form.galleryimage5.value
      const title = form.title.value;
      const price = form.price.value;
      const type = form.type.value;
      const location = form.location.value;
      const category = form.category.value;



  const packageInfo={
    image,
    title,
    type,
    price,
    location,
    category,
    gallery:[{url:galleryimage1},{url:galleryimage2},{url:galleryimage3},{url:galleryimage4},{url:galleryimage5}]
  }
  axiosSecure.post("/data",packageInfo)
  .then(res=>{
      if (res.data.insertedId) {
        
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Added To Package",
          showConfirmButton: false,
          timer: 1500
        });
      }
  })
  

    };
  
    return (
      <div className="mt-5">
        <div>
          <h1 className="mt-10 font-serif text-2xl text-center mb-5 ">
          Add Package</h1></div>
        <form onSubmit={handleAddPackage}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg "> Image</span>
              </label>
              <label className="input-group">
                <input type="text" name="image" required placeholder="Image" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-lg ">Gallery Image</span>
              </label>
              <label className="input-group">
                <input type="text" name="galleryimage" placeholder="Gallery Image" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg "> Gallery Image 2</span>
              </label>
              <label className="input-group">
                <input type="text" name="galleryimage2" required placeholder="Gallery Image" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-lg ">Gallery Image 3</span>
              </label>
              <label className="input-group">
                <input type="text" name="galleryimage3" placeholder="Gallery Image" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg ">Gallery Image 4</span>
              </label>
              <label className="input-group">
                <input type="text" name="galleryimage4" required placeholder="Gallery Image" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-lg ">Gallery Image 5</span>
              </label>
              <label className="input-group">
                <input type="text" name="galleryimage5" placeholder="Gallery Image" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
  
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-lg label-text">Price</span>
              </label>
              <label className="input-group">
                <input type="text" name="price" required placeholder="Price" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-lg">Category</span>
              </label>
              <select className="select select-bordered" name="category" defaultValue="">
                <option value="" disabled>Select a category</option>
                <option value="Adventure">Adventure</option>
                <option value="Wildlife">Wildlife</option>
                <option value="Beach">Beach</option>
                <option value="Hiking">Hiking</option>
                <option value="Nature">Nature</option>
                <option value="Historical">Historical</option>
              </select>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-lg label-text">Title</span>
              </label>
              <label className="input-group">
                <input type="text" name="title" required placeholder="Title" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-lg">Type</span>
              </label>
              <input type="text" name="type" required placeholder="Type" className="input input-bordered w-full" />
            </div>
          </div>
  
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-lg ">Location</span>
              </label>
              <label className="input-group">
                <input type="text" required name="location" placeholder="Location" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
  
          <input type="submit" value="Add Package" className="btn-block mb-10 bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border hover:border-transparent rounded" />
        </form>
      </div>
    );
  };
  
  export default AddPackages;
  