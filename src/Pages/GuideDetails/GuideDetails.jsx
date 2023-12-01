import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const GuideDetails = () => {
  const [rating, setRating] = useState(0);
  const [guides, setGuides] = useState([]);
  const allGuides = useLoaderData();
  const { id } = useParams();

  const [inputField, setInputField] = useState("");

  const handleInputField = () => {
    console.log("Textarea Value:", inputField);
  };

  useEffect(() => {
    const findGuide = allGuides?.find((singleguide) => singleguide._id == id);
    setGuides(findGuide);
  }, [allGuides, id]);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <img src={guides.profilePicture} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-semibold font-serif text-red-50 "> {guides.name}</h1>

            <p className="py-3 text-lg font-sans">Education: {guides?.education?.degree} </p>
            <p className="py-3 text-lg font-sans">Skill: {guides?.skills?.one} , {guides?.skills?.two} , {guides?.skills?.three}</p>
            <p className="py-3 text-lg font-sans">Email: {guides?.contactDetails?.email} </p>
            <p className="py-3 text-lg font-sans">Phone: {guides?.contactDetails?.phone} </p>
            <p className="py-3 text-lg font-sans">Address: {guides?.contactDetails?.location} </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center font-bold text-3xl ">Review</h1>
        <div className="w-60 mt-5 mx-auto">
          <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
        </div>
        <div>
          <form>
            <div className="w-full mb-4 border rounded-lg bg-gray-50">
              <div className="px-4 py-2 bg-white rounded-t-lg">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full px-0 text-lg focus:ring-0"
                  placeholder="Write a comment..."
                  value={inputField}
                  onChange={(e) => setInputField(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t">
                <button onClick={handleInputField}
                  type="button"  
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Post comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GuideDetails;
