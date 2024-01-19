import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieDetailsCard = ({ details }) => {
  console.log(details);
  return (
    <div className="w-96 text-white bg-black rounded-lg overflow-none bg-opacity-90">
      <div>
        <img
          className="w-60 cursor-pointer ml-20 pt-12 rounded-md"
          alt="Movie Card"
          src={IMG_CDN_URL + details.backdrop_path}
        />
      </div>
      <div className="text-lg text-center pt-2 font-bold">
        {details.original_title}
      </div>
      <div className="text-xs px-6">{details.overview}</div>
      <div className="pl-32 mt-2">
        <button className="bg-red-500 text-white ml-2 my-2 p-2 px-8 text-xl font-bold rounded-lg">
          Play
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
