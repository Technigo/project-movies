import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "Css/movieDetails.css";
import { BackButton } from "Icons/BackButton";

const apiKey = "c616ef82836e90a0073b3a17b8bde4ba";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        if (json.status_code === 34) {
          setError("movie not found");
        } else {
          setMovie(json);
        }

        setLoading(false);
        console.log(json);
      });
  }, [id]);

  if (loading)
    return (
      <div>
        <Link className="backButton" to="/">
          <BackButton /> <p>Back</p>
        </Link>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <Link className="backButton" to="/">
          <BackButton /> <p>Back</p>
        </Link>
        <h1 className="sorry">Sorry! Cant Find Your Movie</h1>
      </div>
    );

  return (
    <section>
      <Link className="backButton" to="/">
        <BackButton /> <p>Back</p>
      </Link>
      {movie && (
        <article
          className="background"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
          }}
        >
          <div className="summary">
            <img
              alt="poster"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            />
            <div className="details">
              <h1>
                {movie.title}
                <span className="rating">{movie.vote_average}/10</span>
              </h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};
