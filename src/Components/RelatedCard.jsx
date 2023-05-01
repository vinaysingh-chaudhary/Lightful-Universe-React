export default function RelatedCard({ image, title, date, copyright }) {
  return (
    <div className="w-[90%] min-h-[0px] bg-[#8584843c] flex flex-col justify-center gap-2 p-2 rounded-md xl:w-[25%] xl:gap-2 xl:h-[420px] lg:w-[38%] lg:gap-2 lg:h-[390px] lg:justify-center md:w-[40%] sm:w-[80%]  ">
      <div className=" w-[100%] min-h-[60%] flex justify-center items-center xl:mt-[-5%] xl:h-[74%] lg:mt-[-4%] lg:h-[63%]">
        <img
          className="w-[100%] aspect-square object-cover rounded-md xl:aspect-video xl:h-[100%] lg:aspect-video lg:h-[100%]"
          src={image}
        />
      </div>

      <div className="h-[40%] flex items-center justify-between gap-3 pr-7 pl-2 xl:h-[20%] lg:h-[30%]">
        <div className="h-[100%] w-[90%] xl:w-[80%] pb-3 lg:w-[90%]">
          <h1 className="text-white text-[1.5rem] xl:text-[1.2rem] lg:text-[1.5rem]">
            {title}{" "}
            <span>
              <p className="text-[#8b8b8b] text-[0.8rem] w-[100%]">
                {copyright ? `${copyright}` : copyright}
              </p>
            </span>
          </h1>

          <p className="text-white">{date}</p>
        </div>

        <div className="w-[15%] h-[100%] xl:flex xl:items-center lg:flex lg:items-center">
          <button className="px-4 bg-white rounded-md">View</button>
        </div>
      </div>
    </div>
  );
}
