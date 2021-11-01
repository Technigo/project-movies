import React, { useState } from "react";
import "./MovieListItem.css";

export const MovieListItem = ({ movie, imageInformation }) => {
  const [imageOpacityStyle, setImageOpacityStyle] = useState({ opacity: 1 });
  console.log(imageInformation);
  const imagePath = `${imageInformation.base_url}${imageInformation.poster_sizes[6]}${movie.poster_path}`;
  console.log(imagePath);

  return (
    <>
      <div
        className="poster-container"
        onMouseEnter={() => setImageOpacityStyle({ opacity: 0.4 })}
        onMouseLeave={() => setImageOpacityStyle({ opacity: 1 })}
      >
        <img
          src={imagePath}
          alt={`poster for ${movie.original_title}`}
          style={imageOpacityStyle}
        ></img>
      </div>
    </>
  );
};
