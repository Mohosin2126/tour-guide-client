const BannerExtended = () => {
    return (
      <div className="bg-white h-36 max-w-5xl mx-auto">
       <div className="mx-24">
       <div className="flex gap-10 ">
       <div className="space-y-3">
          <h1>Search Destination</h1>
          <input type="text" placeholder="Enter Destination" />
        </div>
        <div className="space-y-3">
          <h1>Member</h1>
          <input type="text" placeholder="Member" />
        </div>
        <div className="space-y-3">
          <h1>Checking Date</h1>
          <input type="date" />
        </div>
        <div className="space-y-3">
          <h1>Checkout Date</h1>
          <input type="date" placeholder="Enter Destination" />
        </div>
       </div>

       </div>
       <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
Find
</button>
      </div>
    );
  };
  
  export default BannerExtended;
  