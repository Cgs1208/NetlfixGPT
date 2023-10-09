import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[16%] px-5 md:px-16 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-xl md:text-4xl text-white">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white">
        {overview}...
      </p>
      <div className="my-2">
        <button className="bg-white text-black py-1 md:py-2 px-3 md:px-10 text-md md:text-lg font-bold rounded md:rounded-md hover:bg-opacity-70">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 bg-opacity-50 text-white py-2 px-5 ml-2 text-lg rounded-md hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
