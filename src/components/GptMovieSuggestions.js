import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { addGptMovieResult } from "../utils/gptSlice";

const GptMovieSuggestions = () => {
  const dispatch = useDispatch();
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  const closeList = () => {
    dispatch(addGptMovieResult({ movieNames: null, movieResults: null }));
  };

  return (
    <div className="bg-black bg-opacity-90 fixed h-screen w-full overflow-y-scroll top-0  text-white p-3 md:p-4 z-50">
      <div>
        <span
          className="absolute right-2 -top-1 md:top-2 p-5 text-3xl cursor-pointer"
          onClick={closeList}
        >
          X
        </span>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
