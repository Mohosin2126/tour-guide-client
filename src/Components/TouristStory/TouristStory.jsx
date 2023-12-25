import { useEffect, useState } from "react";

import StoryCard from "./StoryCard";
import { Link } from "react-router-dom";

const TouristStory = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://y-gold-two.vercel.app/story')
      .then(res => res.json())
      .then(data => setStories(data))
  }, []);

  return (
  <div>
    <div>
        <h1 className="text-center font-serif text-3xl text-extrabold mt-10">Tourist Story</h1>
        <p className="text-center mt-2 font-serif  text-base">Tales from Our Treasured Travelers</p>
    </div>
    <div className="grid mt-5 mb-8 gap-10 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    {
        stories.slice(0,4).map(story=><StoryCard story={story} key={story._id}></StoryCard>)
    }
    </div>
    <div className="mb-5">
    <Link to={"/allstories"}> <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
All Stories
</button></Link>
    </div>
  </div>
  );
};

export default TouristStory;
