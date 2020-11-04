import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { BackArrow } from '../components/BackArrow';
import '../styles/MovieDetail.css';

export const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a4952259f6d389d2957bfec34fa69938&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section
          className="movieDetailPage"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
          }}>
          <Link to="/" className="back-link">
            <BackArrow />
            <p>Movies</p>
          </Link>
          <div className="movie-details">
            <img
              className="image-poster"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details-text">
              <h1>
                {movie.title}{' '}
                <span className="movie-rating">{movie.vote_average}/10</span>
              </h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
