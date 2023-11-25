

const TourPackages = ({place}) => {
    const{image,type,title,price,location,category}=place
    console.log(place)
    return (
        <div>
            <div className="card card-compact h-96 w-96 bg-base-100 shadow-xl">
        <figure><img src={image}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{type}</h2>
          <p>{title}</p>
          <p>{price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Package</button>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default TourPackages;