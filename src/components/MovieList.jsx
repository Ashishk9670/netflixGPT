import React from "react";
import MoviesCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4">
      <div className="flex  overflow-x-scroll ">
        <h1 className="font-bold text-white text-3xl py-2">{title}</h1>
        <div className="flex">
          {movies?.map((movie) => (
            <MoviesCard key={movie.id} posterpath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
