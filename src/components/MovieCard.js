import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import Popup from "reactjs-popup";
import MovieDetailsCard from "./MovieDetailsCard";

const MovieCard = ({ poster_path, movie }) => {
  if (!poster_path) return null;
  return (
    <Popup
      trigger={
        <div className="w-32 md:w-56 pr-2 md:pr-4 hover:scale-110 hover:transition-all duration-300 ease-in-out">
          <img src={IMG_CDN_URL + poster_path} alt="movie-card" />
        </div>
      }
      modal
      nested
    >
      <MovieDetailsCard details={movie} />
    </Popup>
  );
};

export default MovieCard;
