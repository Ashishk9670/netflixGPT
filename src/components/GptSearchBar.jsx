import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center opacity-55 hover:opacity-75">
      <form action="" className="w-1/2  bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-2 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-2 px-4 py-2 rounded-lg hover:bg-red-400 text-white bg-red-700">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
