

const TourPackages = ({place}) => {
    const{image,type,title,price,location,category}=place
    console.log(place)
    return (
        <div>
            <div className="card card-compact h-96 w-96 bg-base-100 shadow-xl">
        <figure><img src={image}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-serif ">{type}</h2>
          <p className="text-start font-sans ">{title}</p>
          <p className="text-start font-sans ">{price}</p>
          <div className="card-actions">
          <button className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
View Package
</button>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default TourPackages;