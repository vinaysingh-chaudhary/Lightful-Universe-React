import React from "react";

export default function InforHolder({ title, explanation, date, copyright }) {
  return (
    <div className="w-[100%] h-[100%] flex flex-col  justify-center items-center gap-2 xl:gap-4">
      <h1 className="text-white text-3xl text-center xl:text-4xl ">{title}</h1>
      <p className="text-[#cac8c8d8] text-xl text-center xl:px-4 xl:text-lg">
        {explanation ? explanation.substring(0, 100) : explanation}
      </p>
      <p className="text-[#f7f4f4] text-lg text-center">{date}</p>
      <p className="text-white text-sm text-center">
        {copyright ? `by ~ ${copyright}` : copyright}
      </p>
    </div>
  );
}
