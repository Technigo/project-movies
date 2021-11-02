import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

const MoviesDetails = ({ films }) => {
  const Params = useParams()
    return (
    <>      
        <div className="details-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            alt="small-picture"
          />
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="background-picture"
          />

          <Link exact to="/">
            <button>Movies</button>
          </Link>
        </div>
      
    </>
  );
};

export default MoviesDetails;
