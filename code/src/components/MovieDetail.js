import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { API_KEY } from "Urls";
import Loading from "./Loading";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .finally(setLoading(false));
  }, []);
  console.log(movie);

  return (
    <div>
      {loading && <Loading />}
      {movie && (
        <div className="movieDetalisBox">
          
          <img className="backgroundMovieDetails" src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.id} />
          <div className="MovieDetailsInfo">
            <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.id} />
            <div className="MovieDetailstext">
              <h1>{movie.title}</h1>
              <p> Status:{movie.status} </p>
              <p>
                Release date:
                <Moment format="MM/DD">{movie.release_date}</Moment>
              </p>
            </div>
          </div>
          </div>
       
      )}
    </div>
  );
};
export default MovieDetail;
