import React, { lazy } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";

function Browse() {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        MainContainer
          - videoBackground (playing)
          - videoTitle
        SecondaryContainer
          -Movielist * n (vertical lists)
            - MovieCards *n (horizontally)
      */}
    </div>
  );
}

export default Browse;
