import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=54ee7f54ed9c2538cd37d709a09a6ca2&language=en-US`)
      .then(res => res.json())
      .then(json => {
        setMovie(json);
        console.log(json);
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    <article className='detail-page'>
      <a className='back-link' href='/'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd"></path></svg>
        Movies
      </a>
      <div className='background' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
        <div className='summary'>
          <img className='cover' src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} ></img>
          <div className="details">
            <h1 className='title'>
              {movie.title}
              <span className='rating'>{movie.vote_average}/10</span>
            </h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </article >
  );
};

export default MovieDetails;