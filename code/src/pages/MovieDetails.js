import React, { useEffect, useState } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'

import '../style/movieDetails.css'

const MovieDetails = () => {
  const match = useRouteMatch();
  const { movieId } = useParams();
  const [ movie, setMovie] = useState({});
  // const [ cast, setCast] = useState([]);
  // const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6&language=en-US`)
    
    .then((res) => res.json())
    .then((json) => {
      console.log("json", json)
      setMovie(json)
      // setGenres(json.genres)
    })

  }, [movieId]);

  // useEffect(() => (
  //   fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6`)

  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json.cast, "json")
  //     const firstFourCast = json.cast.splice(0,4)
  //     console.log(firstFourCast)
  //     setCast(firstFourCast)
  //   })
  // ), [movieId])

  return ( 
    <div>
        <article>
          <div
            className="movie-backdrop"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
            }}
          ></div>
          <a target="_blank" href={`${movie.homepage}`} rel="noopener noreferrer">
            <img className="movie-poster"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
              alt={movie.title} 
            />
          </a>
          <section className="movie-description">
            <a target="_blank" href={`${movie.homepage}`} rel="noopener noreferrer">
              <h2 className="movie-title">{movie.title}</h2>
            </a>
            {/* <div className="movie-genres">
              {genres.map((genre) => (
                <div key={genre.id}>
                {genre.name}
                </div>
              ))}
            </div> */}
            <p className="movie-tagline">{movie.tagline}</p>
              
            <div className="movie-extra-info">
              <p>
                <svg className="rating-star" xmlns="http://www.w3.org/2000/svg" fill="#ffd300" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                {movie.vote_average}
              </p>
              <p className="movie-release-date">Released: {movie.release_date}</p>
            </div>
            <p className="movie-overview">{movie.overview}</p>
            <Link to={`${match.url}/cast`}>
             <p>CAST</p>
            </Link>
            <Link to={`${match.url}/crew`}>
              <p>CREW</p>
            </Link>
            {/* <div className="cast-list">
              {cast.map((c) => (
                <a 
                  key={c.id}
                  className="cast-full-image-link" 
                  href={`https://image.tmdb.org/t/p/w1280${c.profile_path}`}
                >
                  {c.name}
                </a>
              ))}
            </div> */}
          </section>
        </article>
    </div>
   );
};
 
export default MovieDetails;