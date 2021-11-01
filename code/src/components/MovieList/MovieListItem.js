import React from "react";
import "./MovieListItem.css";

export const MovieListItem = ({ movie, imageInformation }) => {
  console.log(imageInformation);
  const imagePath = `${imageInformation.base_url}${imageInformation.poster_sizes[6]}${movie.poster_path}`;
  console.log(imagePath);
  return (
    <>
      <div className="poster-container">
        <img src={imagePath} alt={`poster for ${movie.original_title}`}></img>
      </div>
    </>
  );
};
