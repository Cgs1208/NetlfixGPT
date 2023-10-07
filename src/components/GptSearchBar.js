import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const lanKey = useSelector((store) => store.config?.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded">
        <input
          className="p-4 m-4 rounded-md col-span-9"
          type="text"
          placeholder={lang[lanKey].getSearchPlaceHolder}
        />
        <button className="m-4 py-2 px-4 bg-red-500 text-white rounded-lg col-span-3">
          {lang[lanKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
