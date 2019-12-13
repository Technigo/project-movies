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
    return <h1>LOADING</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <Link to="/" className="backLink">
        <Arrow />
        Go back
      </Link>
      <h1>{movie.title}</h1>
    </div>
  );
};
