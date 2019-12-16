import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "Css/movieDetails.css";

const apiKey = "c616ef82836e90a0073b3a17b8bde4ba";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json);
        setLoading(false);
        console.log(json);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (!movie) return <h1>Cant Find Your Movie</h1>;

  return (
    <article>
      {movie && (
        <div
          className="background"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
          }}
        >
          <div>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
          </div>
          <h1>{movie.title}</h1>
        </div>
      )}
    </article>
  );
};
