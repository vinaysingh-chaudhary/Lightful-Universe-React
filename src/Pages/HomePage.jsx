import React, { useEffect } from "react";
import ImageHolder from "../Components/ImageHolder";
import InforHolder from "../Components/InforHolder";
import { useState } from "react";

export default function HomePage() {
  const [mainPageData, setMainData] = useState([]);

  useEffect(() => {
    async function fetchdataplease() {
      const fetchData = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=Lez8RlaiczxokF4Jxi6wZZS7VHVWIERAwC3VPUL6&start_date=2005-04-06&end_date=2005-04-06`
      );
      const mainData = await fetchData.json();
      setMainData(mainData[0]);
    }
    fetchdataplease();
  }, []);

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center px-5 relative xl:pt-4 ">
      <div className="w-[100%] h-[70%] flex flex-col justify-evenly items-center px-3 bg-[#ffffff10] rounded-lg xl:flex-row xl:justify-center xl:items-center xl:w-[80%] xl:h-[90%] xl:gap-2 md:flex-col md:justify-center md:h-[90%] md:gap-2 md:bg-[#ffffff00]">
        <div className="w-[100%] h-[50%]  flex justify-center items-center xl:h-[97%] md:h-[65%] ">
          <ImageHolder image={mainPageData.hdurl} />
        </div>

        <div className="w-[100%] h-[40%] flex justify-center items-center xl:w-[40%] xl:h-[96.5%] xl:rounded-md xl:bg-[#ffffff18] xl:backdrop-blur-md md:w-[70%] md:h-[30%] ">
          <InforHolder
            title={mainPageData.title}
            explanation={mainPageData.explanation}
            date={mainPageData.date}
            copyright={mainPageData.copyright}
          />
        </div>
      </div>

      <p className=" absolute top-0 text-[#777676] text-sm">
        <span className="text-white text-lg uppercase">Lightful Universe</span>{" "}
        By Vinay Chaudhary
      </p>
    </div>
  );
}
