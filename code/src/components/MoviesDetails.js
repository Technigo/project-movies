import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { LIST_URL } from "utils/urls";

const MoviesDetails = ({ films }) => {
  const [details, setDetails] = useState([]);
  const { moviesId } = useParams();
  const history = useHistory(); //History Hook
  console.log(history);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${moviesId}?api_key=3f7193c0671f501efb9b75772ec2e867&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  // History function btn
  const OnButtonBack = () => {
    history.push("/");
  };

  return (
    <div class="movie-details-container">
      <button onClick={OnButtonBack}>Go Back</button>
      <img
        src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
        alt="background-picture"
      />
      <div className="summary-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}
          alt="small-picture"
        />
        <div className="title-rating-wrapper">
          <h1 className="summary-h1">
            {details.title}
            <span>{details.rating}</span>
          </h1>
          <p className="summary-p">{details.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;

{
  /* <Link exact to="/">
          <button>Movies</button>
        </Link> */
}
