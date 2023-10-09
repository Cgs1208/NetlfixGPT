import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BACKGROUND as GPTSEARCHBACKGROUND } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed w-screen h-screen inset-0 z-[-10]">
        <img
          className="w-full h-full object-cover"
          src={GPTSEARCHBACKGROUND}
          alt="login-background"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
