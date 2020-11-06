import React from "react"; 
import { Link } from "react-router-dom"; 

export const MovieCard = ({id, poster_path, original_title, release_date}) => {

  return (
    <>
      <div className="movie-card">
        <Link to={`/movies/${id}`}>
          <div className="overlay-container">
            <img className="movie-card-image" 
              src={`https://image.tmdb.org/t/p/w780/${poster_path}`} 
              alt={`${`original_title`}poster`} />
            <div className="text-overlay">
              <h1>{original_title}</h1>
              <p>{`Released Date: ${release_date}`}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

