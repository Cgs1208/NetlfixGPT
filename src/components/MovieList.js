import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 md:px-4 pt-2 md:pt-4">
      <h1 className="py-2 md:py-4 text-lg md:text-3xl  text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
