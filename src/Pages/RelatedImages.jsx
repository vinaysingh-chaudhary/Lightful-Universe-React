import React, { useEffect, useState } from "react";
import RelatedCard from "../Components/RelatedCard";
import { BsRocketTakeoff } from "react-icons/bs";

export default function RelatedImages() {
  const [relatedPostData, setRelatedPosts] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    async function relatedPostFetching() {
      const fetchPosts = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=Lez8RlaiczxokF4Jxi6wZZS7VHVWIERAwC3VPUL6&count=12&thumbs=true`
      );
      const relatedPosts = await fetchPosts.json();
      setRelatedPosts(relatedPosts);
      isLoading(false);
    }
    relatedPostFetching();
  }, []);

  return (
    <div className=" h-auto flex flex-col items-center py-2  gap-6 xl:flex-row xl:flex-wrap xl:justify-center lg:flex-row lg:flex-wrap lg:justify-center md:flex-row md:flex-wrap md:justify-center ">
      {loading ? (
        <div className="w-[100%] min-h-[700px] flex justify-center items-center">
          <span className="text-white text-2xl flex flex-col justify-center items-center gap-8 uppercase">
            <BsRocketTakeoff className="text-[5rem]" /> fueling the rocket...{" "}
          </span>
        </div>
      ) : (
        relatedPostData.map((post, index) => {
          return (
            <RelatedCard
              key={index}
              image={post.url}
              title={post.title}
              date={post.date}
              copyright={post.copyright}
            />
          );
        })
      )}
    </div>
  );
}
