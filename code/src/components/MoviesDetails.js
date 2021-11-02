import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { LIST_URL } from "utils/urls";

const MoviesDetails = ({ films }) => {
  const [details, setDetails] = useState([])
  const {moviesId} = useParams()

useEffect (() => {
  fetch(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=3f7193c0671f501efb9b75772ec2e867&language=en-US`)
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
    setDetails(data)
  })
}, [])

  return (
    <>      
        <div className="details-wrapper">
          <p>{details.overview}</p>
          <img 
            src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}
            alt="small-picture"
          />
          <img
            src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
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
