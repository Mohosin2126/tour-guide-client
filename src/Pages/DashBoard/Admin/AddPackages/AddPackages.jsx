const AddPackages = () => {
    const handleAddPackage = (event) => {
      event.preventDefault();
  
      // Accessing form data using FormData
      const formData = new FormData(event.target);
  
      // Extracting values from the form data
      const image = formData.get('image');
      const image1 = formData.get('image1');
      const touristImage = formData.get('touristimage');
      const category = formData.get('category');
      const activities = formData.get('activities');
  
      // Log or perform further actions with the extracted values
      console.log('Image:', image);
      console.log('Gallery Image:', image1);
      console.log('Tourist Image:', touristImage);
      console.log('Category:', category);
      console.log('Activities:', activities);
  
      // Add your logic for handling the form submission
    };
  
    return (
      <div className="mt-5">
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
                <input type="text" name="image1" placeholder="Gallery Image" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
  
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-lg label-text">Tourist Image</span>
              </label>
              <label className="input-group">
                <input type="text" name="touristimage" required placeholder="Tourist Image" className="input input-bordered w-full" />
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
                <span className="label-text text-lg ">Activities</span>
              </label>
              <label className="input-group">
                <input type="date" required name="activities" placeholder="Tour Date" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
  
          <input type="submit" value="Book Now" className="btn-block mb-10 bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border hover:border-transparent rounded" />
        </form>
      </div>
    );
  };
  
  export default AddPackages;
  