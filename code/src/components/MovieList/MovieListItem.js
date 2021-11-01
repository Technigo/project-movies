import React from "react";

export const MovieListItem = ({ movie, imageInformation }) => {
  console.log(imageInformation);
  const imagePath = `${imageInformation.base_url}${imageInformation.poster_sizes[3]}${movie.poster_path}`;
  console.log(imagePath);
  return (
    <>
      <img src={imagePath}></img>
    </>
  );
};
