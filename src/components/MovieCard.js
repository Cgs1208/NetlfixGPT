import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-32 md:w-56 pr-2 md:pr-4 hover:scale-110 transition-transform duration-200">
      <img src={IMG_CDN_URL + poster_path} alt="movie-card" />
    </div>
  );
};

export default MovieCard;
