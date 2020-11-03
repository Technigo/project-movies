import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/MovieDetail.css';

export const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const fetchMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a4952259f6d389d2957bfec34fa69938&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
      });
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line
  }, [id]);

  return (
    <section
      className="movieDetailPage"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`,
      }}>
      <Link to="/">
        <p>Go back!</p>
      </Link>
      <div className="movie-details">
        <h2>
          {movie.title} <span className="rating">{movie.vote_average}/10</span>
        </h2>
        <p>{movie.overview}</p>
      </div>
    </section>
  );
};
