import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
// API of the playing now movies'details  //
import { DETAILS_URL } from "utils/urls";
// Spinner Component //
import Spinner from "./Spinner";

// FUNCTION
const MoviesDetails = ({ films }) => {
  const [details, setDetails] = useState([]);   //useState for the API fetching
  const [loading, setLoading] = useState(true); //useState for rendering the Spinner component
  const { moviesId } = useParams();  // useParams for passing the movie's ID which is comming from the MoviesList component via the path
  const history = useHistory();     //History Hook

  useEffect(() => {
    fetch(DETAILS_URL(moviesId))
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      });
  }, [moviesId]); 

  // Function button using the history hook
  // It leads you to the main page: the moviesList component //
  const OnButtonBack = () => {
    history.push("/"); 
  };

  return (
    <div class="movie-details-container">
      {loading && <Spinner />}  {/*Only when the loading variable is true it renders the Spinner component*/}
      <img
        src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
        alt="background"
      />

      <div className="movies-btn">
        <button onClick={OnButtonBack}>
          <i class="fas fa-chevron-circle-left"></i> Movies
        </button>
      </div>

      <div className="summary-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}
          alt="small poster"
          className="small-poster"

        />

        <div className="title-rating-wrapper">
          <h1 className="summary-h1">
            {details.title}
            <span className="rating">{details.vote_average}/10</span>
          </h1>
          <p className="summary-p">{details.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
