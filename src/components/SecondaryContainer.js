import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="pl-3 md:pl-10 -mt-9 md:-mt-28 relative z-20">
          <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
          <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies} />
          <MovieList title="Trending" movies={movies?.popularMovies} />
          <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
        </div>
        {/* 
    MovieList- Popular
      - MovieCards * n (horizontally)
    MovieList- Now Playing
      - MovieCards * n (horizontally)
    MovieList- Trending
      - MovieCards * n (horizontally)
    MovieList- Horror
      - MovieCards * n (horizontally)
    */}
      </div>
    )
  );
};

export default SecondaryContainer;
