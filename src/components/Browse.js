import React, { lazy } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import Loader from "./Loader";

function Browse() {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const showLoader = useSelector((store) => store.loader?.showLoader);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <div>
          <Header />
          {showGptSearch ? (
            <GptSearchPage />
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Browse;
