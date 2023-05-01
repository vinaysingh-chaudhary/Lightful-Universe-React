import React, { useState } from "react";
import ImageHolder from "../Components/ImageHolder";
import InforHolder from "../Components/InforHolder";
import { GoTelescope } from "react-icons/go";
import { MdEventRepeat } from "react-icons/md";

export default function SearchPage() {
  const [date, setDate] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [searchBy, setSearchBy] = useState([]);

  const dateHandler = (event) => {
    setDate(event.target.value.split("-").at(2));
    setMonth(event.target.value.split("-").at(1));
    setYear(event.target.value.split("-").at(0));
  };

  async function searchDataFetch() {
    const searchFetch = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=Lez8RlaiczxokF4Jxi6wZZS7VHVWIERAwC3VPUL6&start_date=${year}-${month}-${date}&end_date=${year}-${month}-${date}&thumbs=true`
    );
    const searchData = await searchFetch.json();
    setSearchBy(searchData[0]);
  }

  const clearDataHandler = () => {
    setSearchBy([]);
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-start items-center  gap-6 px-3 relative">
      <div className="h-[15%] w-[65%] flex flex-col justify-center items-center gap-3 xl:w-[15%] lg:w-[20%] md:w-[30%] sm:w-[40%]">
        <input
          className="w-[100%] h-[25%] px-2 rounded-md flex justify-around bg-[#c5c5c580] text-white uppercase outline-[#43dde882]"
          type="date"
          onChange={dateHandler}
        />

        <div className=" w-full flex justify-between gap- items-center">
          {(date != 0, year != 0, month != 0) ? (
            <button
              className=" w-[48%] text-white border-2 border-[#919090] rounded-md text-xl px-4 py-0.5 flex justify-center gap-1 items-center focus:bg-[#ffffff86]"
              onClick={searchDataFetch}
            >
              Search <GoTelescope />{" "}
            </button>
          ) : (
            <div> </div>
          )}

          {(date != 0, year != 0, month != 0) ? (
            <button
              className=" w-[48%] text-white border-2 border-[#919090] rounded-md text-xl px-4 py-0.5 flex justify-center gap-1 items-center focus:bg-[#ffffff86]"
              onClick={clearDataHandler}
            >
              <span className="flex justify-center items-center gap-3">
                Clear <MdEventRepeat />{" "}
              </span>
            </button>
          ) : (
            <div> </div>
          )}
        </div>
      </div>

      <div className="w-[98%] h-[70%] flex flex-col justify-around items-center bg-[#48484841] rounded-md xl:flex-row xl:w-[80%] xl:justify-center xl:h-[80%] xl:mt-[-1%] xl:gap-3 lg:flex-row lg:justify-center lg:gap-2 lg:w-[90%] sm:w-[80%] md:w-[70%] md:py-4 md:bg-[#ffffff00] sm:bg-[#ffffff00] lg:bg-[#48484841]  xl:bg-[#48484841] ">
        {searchBy.url ? (
          <div className="w-[100%] h-[55%] p-1.5 xl:h-[99%] lg:h-[90%] lg:p-6 md:h-[70%] sm:h-[60%]">
            <ImageHolder image={searchBy.hdurl} />
          </div>
        ) : (
          <div className=" w-full h-full flex justify-center items-center">
            <h1 className="text-2xl text-white flex flex-col items-center justify-center">
              Enter Date{" "}
              <span className="text-[0.6rem] uppercase text-[#ffffff60]">
                -make sure the connection is good
              </span>
              <span className="text-[0.6rem] uppercase text-[#ffffff60] mt-[-5%]">
                -Press clear before searching next date
              </span>
            </h1>
          </div>
        )}

        {searchBy.title ? (
          <div className="w-[98%] h-[45%] rounded-md lg:bg-[#ffffff0d] xl:bg-[#ffffff0d]  mb-2 pb-2 px-2 xl:w-[50%] xl:h-[90%] xl:mr-12 xl:backdrop-blur-md lg:w-[60%] lg:h-[90%] lg:mr-10 lg:backdrop-blur-md md:w-[100%] sm:w-[95%] md:bg-transparent sm:bg-transparent">
            <InforHolder
              title={searchBy.title}
              date={searchBy.date}
              copyright={searchBy.copyright}
              explanation={searchBy.explanation}
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
