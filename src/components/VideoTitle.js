import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-16 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}...</p>
      <div className="my-2">
        <button className="bg-white text-black py-2 px-10 text-lg font-bold rounded-md hover:bg-opacity-70">
          Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 text-white py-2 px-5 ml-2 text-lg rounded-md hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
