import React, { useState, useEffect } from "react";
import { BounceLoader } from 'react-spinners'
import { Link } from "react-router-dom";
// import RRS from 'react-responsive-select';
// import { Navigate } from './Nav'
// import { Link } from 'react-router-dom'
import './liststyle.css'

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const [chosenCategory, setChosenCategory] = useState('popular')
  const [loading, setLoading] = useState(true)

  // const moviesURL =
    // `https://api.themoviedb.org/3/movie/${chosenCategory}?api_key=57134eb2a62754e27d3ec2d3fe453512&language=en-US&page=1`

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${chosenCategory}?api_key=57134eb2a62754e27d3ec2d3fe453512&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
        setLoading(false)
      });
    // .catch(() => {
    //   window.location.assign("'/404")
    // })
  }, [chosenCategory]);

  if (loading) {
    return <main className="loading"><BounceLoader color='lightskyblue' /></main>
  }

  return (
    <main>
      {/* <Navigate /> */}
      <nav className="navigateCategory">
        {/* <h1 className="headerTitle">Movies to watch</h1> */}
        <div className="menuDropdown">
          <p className="sorting">Sort by: </p>
          <select value={chosenCategory} onChange={(event) => setChosenCategory(event.target.value)}>
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="upcoming">Upcoming</option>
            <option value="now_playing">Now Playing</option>
          </select>
        </div>
      </nav>
      <div className='listContent'>
        {movies.map(movie => (
          <Link className="movies" key={movie.id} to={`/movies/${movie.id}`}>
            <img
              src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className="infoAbout">
              <h1 className="movieTitle">{movie.title}</h1>
              <p>Premiered: {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};