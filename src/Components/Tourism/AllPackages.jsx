import usePlace from "../../Hook/usePlace";
import AllPackageCard from "./AllPackageCard";


const AllPackages = () => {
const [places]=usePlace([])
    return (
        <div>
            <div className="hero h-[500px]" style={{backgroundImage: 'url(https://i.ibb.co/b32pzNF/600807-sunset-5262335-1280.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div >
      <h1 className="mb-5 text-5xl font-bold">Our All Packages</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br/>
       In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
 Find Your Package
</button>
    </div>
  </div>
</div>
<div className="mt-8">
<h1 className="text-center font-serif font-extrabold text-2xl">All Packages</h1>
<div className="lg:flex flex-wrap justify-evenly gap-5 mt-5">
  {
    places.map(place=><AllPackageCard place={place} key={place._id}></AllPackageCard>)
  }
</div>
</div>
        </div>
    );
};

export default AllPackages;