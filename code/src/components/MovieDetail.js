import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { API_KEY } from "Urls";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import page404 from "../images/page404.mp4";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        if (json.id) {
          console.log(json);
          setMovie(json);
        } else {
          setHasError(true);
        }
      })
      .catch(() => setHasError(true))
      .finally(setLoading(false));
  }, [id]);

  if (hasError) {
    return (
      <div className="pageNotFoundContainer">
        <div className="imgPageNotFound">
          <video autoPlay loop muted src={page404} alt={"no page found"} />
        </div>

        <div className="textPageNotFound">
          <h2> Sorry page not found...</h2>
        </div>
        <div className="buttonPageNotFound">
          <button>
            <Link className="linkPageNotFound" to="/">
              Go back
            </Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {loading && <Loading />}
      {movie && (
        <div className="movieDetalisBox">
          <img className="backgroundMovieDetails" src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.id} />
          <div className="MovieDetailsInfo">
            <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.id} />

            <div className="MovieDetailstext">
              <h1>
                {movie.title} <span className="ratedMovieDetail">{movie.vote_average}/10</span>
              </h1>
              <p>
                Release date:
                <Moment format="YY/MM/DD">{movie.release_date}</Moment>
              </p>

              <p> {movie.overview} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MovieDetail;
