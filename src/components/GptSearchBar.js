import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchTextref = useRef(null);
  const lanKey = useSelector((store) => store.config?.lang);

  //search a specific movie in TMDB using OpenAi response
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const searchText = searchTextref.current.value;
    //Make an API call to GPT API to get Movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText +
      ". only give me names of 5 movies, coma seperated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) return <p>No movies fetched</p>;

    //Inception, The Dark Knight, Dunkirk, Interstellar, Memento --> array format
    const gptMovieList = gptResults.choices[0]?.message?.content.split(",");

    //for each movie search TMDB databse for movie details
    //since searchMovieTmdb is async function it returns 5 promises
    const promiseArray = gptMovieList.map((movie) => searchMovieTmdb(movie));

    //wait for all Promises to resolve
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovieList, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-2 md:m-4 rounded md:rounded-md col-span-9"
          type="text"
          ref={searchTextref}
          placeholder={lang[lanKey].getSearchPlaceHolder}
        />
        <button
          className="m-2 md:m-4 py-1 md:px-4 bg-red-500 text-white rounded md:rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[lanKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
