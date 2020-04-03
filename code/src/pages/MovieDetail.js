import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import "./moviedetail.css";

export const MovieDetail = () => {
  const [movie, setMovie] = useState([])
  const { movieId } = useParams();
  const history = useHistory();
  const apiKey = "84288b086658b1092348123e4fc9180a"
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setMovie(json)
        // console.log(json)
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId, url])

  if (movie.status_code === 34) {
    history.push("/");
  }


  return (
    <div className="movie-detail-container" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
    }}>
      <Link className="backlink" to="/">
        ◀️ <span>Movies</span>
      </Link>
      <div className="movie-info">
        <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.title} />
        <div className="info-text">
          <h2>{movie.title}<span className="rating">{movie.vote_average}/10</span></h2>
          <p>{movie.overview}</p>
        </div>
      </div>
      <div className="fade">
      </div>
    </div >
  )
}
