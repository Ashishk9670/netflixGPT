import React from "react";

// const VideoTitle = (title, overview) => {
const VideoTitle = () => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-5xl font-bold text-black">{}</h1>
      <p className="py-6 text-lg w-1/4">{}</p>
      <div>
        <button className="bg-white text-black font-xl py-2 m-2 px-2 w-30 rounded-lg hover:bg-opacity-70 ">
          ▶️Play
        </button>
        <button className="bg-gray-800 text-white font-xl py-2 px-2  w-30 rounded-lg hover:bg-opacity-70">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
