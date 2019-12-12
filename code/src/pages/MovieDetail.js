import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { LinkButton } from "components/Link";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cc325ede4f72069add696614aa58b9e2&language=en-US`
    )
      .then(res => res.json())
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
        backgroundImage: `url(${`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`})`
      }}
    >
      <LinkButton />

      {/* <img
        className="big-image"
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt={movie.title}
      /> */}
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
