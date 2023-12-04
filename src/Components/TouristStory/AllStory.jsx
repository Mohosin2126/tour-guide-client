import { useState } from "react";
import { useEffect } from "react";
import AllStoryCard from "./AllStoryCard";

const AllStory = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
      fetch('https://y-gold-two.vercel.app/story')
        .then(res => res.json())
        .then(data => setStories(data))
    }, []);
  
    return (
        <div>
    <div className="mt-44">
        <h1 className="text-center  font-serif text-3xl text-extrabold mt-10">Tourist Story</h1>
        <p className="text-center mt-2 font-serif  text-base">Tales from Our Treasured Travelers</p>
    </div>
    <div className="grid mt-5 mb-8 gap-10 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    {
        stories.map(story=><AllStoryCard key={story._id} story={story}></AllStoryCard> )
    }
    </div>
    <div>
   
    </div>
  </div>
    );
};

export default AllStory;