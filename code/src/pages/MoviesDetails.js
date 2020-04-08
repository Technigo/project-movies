import React, { useState, useEffect } from 'react';
import './MoviesDetails.css'
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const {id} = useParams();
  const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=1eadd8601c20e4a3ebe5e0eca940633f&language=en-US`;
  const history = useHistory();
  const [movie, setMovie] = useState();
  const [statusCode, setStatusCode] = useState(200);

  useEffect(() => {
    fetch(MOVIE_URL)
      .then(res => {
        setStatusCode(res.status);
        return res.json();
      })
      .then(json => {setMovie(json)})
  }, [MOVIE_URL, id]);

  useEffect(() => {
    if (statusCode !== 200) {
      history.push('/movies')
    }
  }, [statusCode, history]);

  if(!movie) {
    return <></>;
  };

  return (
    <section className='moviedetails-background' style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
      <section className='moviedetails-content'>
        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={`Movie poster for ${movie.title}`} />
        <section className='moviedetails-info'>
          <h2>{movie.title}<span> {movie.vote_average}/10</span></h2>
          <div className='moviedetails-info-genre'>{movie.genres.map(genre => <span key={genre.id}><div className='dot'></div> {genre.name}</span> )}</div>
          <p>{movie.overview}</p>
          <Link to={`/movies/${id}/similar/`}>Show similar movies!</Link>
        </section>
      </section>
    </section>
  );
}
