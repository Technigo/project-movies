import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Arrow } from "icon/Arrow";
import "pages/movieDetails.css";

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b5cad1b08293d5f69add78a8d839f05b&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        if (json.status_code === 34) {
          setError("Ooops! Movie not found");
        } else {
          setMovie(json);
        }

        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section
      className="detailsPage"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
      }}
    >
      <div>
        <Link to="/" className="backLink">
          <Arrow />
          <p>Go back</p>
        </Link>
      </div>
      <article className="movieDetails">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="movie-poster"
        />
        <div className="details">
          <h1>
            {movie.title}
            <span> {movie.vote_average}/10</span>
          </h1>
          <p>{movie.overview}</p>
        </div>
      </article>
    </section>
  );
};
