import React from "react";

export default function ImageHolder({ image }) {
  return (
    <div className="w-[100%] h-[100%] aspect-square flex justify-center items-center rounded-lg">
      <img className="object-cover rounded-lg h-[100%]" src={image} alt="" />
    </div>
  );
}
