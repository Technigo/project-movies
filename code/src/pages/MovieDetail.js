import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { LinkButton } from "components/LinkButton";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cc325ede4f72069add696614aa58b9e2&language=en-US`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return false;
      })
      .then(json => {
        setMovie(json);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return (
      <h1>
        Loading your movie...
        <span role="img" aria-label="popcorn">
          🍿
        </span>
      </h1>
    );
  }

  if (!movie) {
    history.push("/");
  }

  return (
    <section
      className="background"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`})`
      }}
    >
      <LinkButton />
      <article className="summary">
        <img
          className="image"
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h2>
            {movie.title}
            <span className="rating"> {movie.vote_average}/10</span>
          </h2>

          <p>{movie.overview}</p>
        </div>
      </article>
    </section>
  );
};
