import React, { useState, useEffect } from 'react';
import './MoviesDetails.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const {id} = useParams();
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=1eadd8601c20e4a3ebe5e0eca940633f&language=en-US`;
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(res => res.json())
      .then(json => setMovies(json))
  }, [MOVIES_URL, id]);

  if(!movies) {
    return <></>;
  };

  return (
    <section className='moviedetails-background' style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${movies.backdrop_path})` }}>
      <Link to={'/movies'} className='moviedetails-link'>⏪ Movies</Link>
      <section className='moviedetails-content'>
        <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={`Movie poster for ${movies.title}`} />
        <section className='moviedetails-info'>
          <h2>{movies.title}<span>{movies.vote_average}/10</span></h2>
          <p>{movies.overview}</p>
        </section>
      </section>
    </section>
  );
}
